/* Intro „Absprung“ (/webdesign): Video läuft kurz von selbst, dann steuert Scrollen den Flug.
   Wer nicht scrollt, sieht den Rest nach ein paar Sekunden von allein. Endet auf dem echten Seitenanfang. */
(function () {
  var H = document.documentElement;
  if (!H.classList.contains('fi-on')) return;
  var box = document.getElementById('fe-intro');
  if (!box) { H.classList.remove('fi-on'); return; }
  var stage = box.querySelector('.fi-stage'), v = box.querySelector('.fi-v'), hint = box.querySelector('.fi-hint'),
      skip = box.querySelector('.fi-skip'), bar = box.querySelector('.fi-bar b');
  var DUR = 8, START_END = 1.5 / DUR;          // bis hier läuft es von selbst
  var p = 0, ziel = 0, modus = 'start', fertig = false, letzte = performance.now(), hintZeit = 0, geladen = false, frueh = 0;
  var gross = window.matchMedia('(min-width: 900px)').matches && !(navigator.connection && navigator.connection.saveData);
  v.muted = true; v.playsInline = true; v.setAttribute('playsinline', ''); v.setAttribute('muted', '');
  v.src = 'media/intro/' + (gross ? 'flug_1080.mp4' : 'flug_720.mp4') + '?v=1';

  // Kamera-Schwenk im Hochformat: 16:9-Film, das Bild folgt dem Geschehen (Fahrer → Monitor → Seitenanfang)
  var PAN = [[0, 30], [0.25, 36], [0.45, 52], [0.62, 58], [0.8, 38], [1, 12]];
  function pan(q) {
    for (var i = 1; i < PAN.length; i++) if (q <= PAN[i][0]) {
      var a = PAN[i - 1], b = PAN[i], t = (q - a[0]) / (b[0] - a[0]);
      return a[1] + (b[1] - a[1]) * t;
    }
    return PAN[PAN.length - 1][1];
  }

  function ende(schnell) {
    if (fertig) return; fertig = true;
    try { sessionStorage.setItem('fe-intro', '1'); } catch (e) {}
    box.style.transitionDuration = schnell ? '.35s' : '.7s';
    box.classList.add('fi-weg');
    H.classList.remove('fi-on');
    window.scrollTo(0, 0);
    setTimeout(function () { try { v.pause(); v.removeAttribute('src'); v.load(); } catch (e) {} box.remove(); }, schnell ? 400 : 750);
  }
  function hinweis() {
    hint.classList.add('an'); hintZeit = performance.now();
    stage.classList.remove('fi-wackel'); void stage.offsetWidth; stage.classList.add('fi-wackel');
  }
  function eingabe(d) {
    if (fertig) return;
    if (!geladen) { if (++frueh > 5) ende(true); return; }   // Film noch nicht da und es wird gescrollt: Seite nicht blockieren
    if (modus === 'start' || modus === 'auto') { v.pause(); ziel = p = v.currentTime / DUR; }
    modus = 'scroll';
    ziel = Math.max(Math.min(p, START_END), Math.min(1, ziel + d));
    letzte = performance.now();
    if (d > 0) hint.classList.remove('an');
  }

  // Wischen, Mausrad, Tasten
  window.addEventListener('wheel', function (e) { if (fertig) return; e.preventDefault(); eingabe((e.deltaMode ? e.deltaY * 40 : e.deltaY) / 1300); }, { passive: false });
  var ty = null;
  window.addEventListener('touchstart', function (e) { if (!fertig) ty = e.touches[0].clientY; }, { passive: true });
  window.addEventListener('touchmove', function (e) {
    if (fertig || ty === null) return; e.preventDefault();
    var y = e.touches[0].clientY; eingabe((ty - y) / (window.innerHeight * 1.3)); ty = y;
  }, { passive: false });
  window.addEventListener('keydown', function (e) {
    if (fertig) return;
    if (e.key === 'Escape') { ende(true); return; }
    if (['ArrowDown', 'PageDown', ' ', 'Spacebar'].indexOf(e.key) > -1) { e.preventDefault(); eingabe(0.12); }
    if (['ArrowUp', 'PageUp'].indexOf(e.key) > -1) { e.preventDefault(); eingabe(-0.12); }
  });
  skip.addEventListener('click', function () { ende(true); });

  // Sicherheitsnetz: lädt der Film nicht, blockiert er die Seite nicht
  var notaus = setTimeout(function () { if (!geladen) ende(true); }, 6000);
  v.addEventListener('error', function () { ende(true); });
  v.addEventListener('loadeddata', function () {
    geladen = true; clearTimeout(notaus);
    var pr = v.play();
    if (pr && pr.catch) pr.catch(function () { modus = 'scroll'; ziel = START_END; hinweis(); });
  });

  function schritt(t) {
    if (fertig) return;
    if (geladen) {
      if (modus === 'start') {
        p = v.currentTime / DUR;
        if (p >= START_END) { v.pause(); modus = 'warten'; ziel = p; letzte = t; hinweis(); }
      } else if (modus === 'warten' || modus === 'scroll') {
        if (modus === 'warten') modus = 'scroll';
        p += (ziel - p) * 0.14;
        if (Math.abs(v.currentTime - p * DUR) > 1 / 30 && !v.seeking) v.currentTime = p * DUR;
        if (t - letzte > 3200 && ziel < 0.995) {   // niemand scrollt: von selbst weiter
          modus = 'auto'; v.currentTime = p * DUR; hint.classList.remove('an');
          var pr = v.play(); if (pr && pr.catch) pr.catch(function () {});
        }
        if (hintZeit && t - hintZeit > 2600 && hint.classList.contains('an')) hinweis();
        if (p > 0.985) { v.currentTime = DUR - 0.04; ende(false); return; }
      } else if (modus === 'auto') {
        p = v.currentTime / DUR; ziel = p;
        if (v.ended || p > 0.985) { ende(false); return; }
      }
      bar.style.width = (p * 100).toFixed(1) + '%';
      v.style.objectPosition = pan(p).toFixed(1) + '% 50%';
    }
    requestAnimationFrame(schritt);
  }
  v.addEventListener('ended', function () { ende(false); });
  requestAnimationFrame(schritt);
})();
