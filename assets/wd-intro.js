/* Intro „Absprung“ (/webdesign) – kommt bei jedem Aufruf (außer Sprungmarken und reduzierter Bewegung).
   Ladebild → Film läuft an → Scroll-Hinweis → Scrollen spielt den Flug ab (ohne Eingabe läuft er weiter)
   → Monitor fällt, wird zur Website → Übergang in die echte Seite.
   Sicherheit: Jede Hängepartie (Film lädt nicht, Abspielen klemmt, Skriptfehler) gibt die Seite sofort frei. */
(function () {
  var H = document.documentElement;
  window.__fiOk = 1;                                   // Kopf-Notschalter weiß: Skript läuft
  if (!H.classList.contains('fi-on')) return;
  var box = document.getElementById('fe-intro');
  if (!box) { H.classList.remove('fi-on'); return; }
  var q = function (s) { return box.querySelector(s); };
  var stage = q('.fi-stage'), v = q('.fi-v'), hint = q('.fi-hint'), skip = q('.fi-skip'), bar = q('.fi-bar b'),
      load = q('.fi-load'), lbar = q('.fi-lbar i'), lnum = q('.fi-load b');

  var VW = 1920, VH = 1080, START = 1.4, DUR = 8, END = 7.85;
  var hoch = function () { return innerWidth / innerHeight < 1.15; };
  var net = navigator.connection || {};
  var datei = 'media/intro/' + (innerWidth >= 900 && !net.saveData ? 'flug_1080.mp4' : 'flug_720.mp4') + '?v=3';

  var zustand = 'laden', ziel = START, letzte = 0, hintZeit = 0, fertig = false, nurSpringen = false;
  var t0 = performance.now(), letzteZeit = -1, stillSeit = performance.now(), fruehe = 0;

  function fehler(e) { try { console.warn('Intro übersprungen', e || ''); } catch (x) {} schnellEnde(); }
  function schnellEnde() {
    if (fertig) return; fertig = true;
    box.style.display = 'block'; box.style.transition = 'opacity .35s ease'; box.style.opacity = '0';
    H.classList.remove('fi-on');
    setTimeout(aufraeumen, 380);
  }
  function aufraeumen() { try { v.pause(); v.removeAttribute('src'); v.load(); } catch (e) {} if (box.parentNode) box.remove(); beruhigen(); }
  /* Weiches Scrollen (Lenis) darf während des Intros nichts mitzählen, sonst landet man nach dem Intro irgendwo unten */
  var L = function () { return window.FE && window.FE.lenis; };
  function lenisHalt() { try { var l = L(); if (l) { l.stop(); l.scrollTo(0, { immediate: true, force: true }); } } catch (e) {} }
  var ruheBis = 0, letzteRad = 0, ruhig = false;
  function beruhigen() {                            // Nachschwung von Mausrad/Trackpad abfangen, dann oben freigeben
    ruheBis = performance.now() + 700; letzteRad = performance.now();
    window.scrollTo(0, 0); lenisHalt();
    (function warte() {
      var n = performance.now();
      if ((n > ruheBis && n - letzteRad > 350) || n > ruheBis + 2000) {
        ruhig = true; window.scrollTo(0, 0);
        try { var l = L(); if (l) { l.scrollTo(0, { immediate: true, force: true }); l.start(); } } catch (e) {}
        return;
      }
      window.scrollTo(0, 0); requestAnimationFrame(warte);
    })();
  }
  lenisHalt(); setTimeout(lenisHalt, 300);

  /* ---------- Laden: direkter Film, Fortschritt aus dem Puffer, mehrere Wege zum Start ---------- */
  function zeig(qq) { qq = Math.max(0, Math.min(1, qq)); lbar.style.transform = 'scaleX(' + qq + ')'; lnum.textContent = Math.round(qq * 100) + ' %'; }
  var anzeige = 0;
  function puffer() {
    try { if (v.duration && v.buffered.length) return v.buffered.end(v.buffered.length - 1) / v.duration; } catch (e) {}
    return 0;
  }
  function losgehen() {
    if (fertig || zustand !== 'laden') return;
    zustand = 'anlauf'; zeig(1);
    setTimeout(function () {
      if (fertig) return;
      load.classList.add('weg'); stage.classList.add('an');
      var pr; try { pr = v.play(); } catch (e) { pr = null; }
      if (pr && pr.catch) pr.catch(function () { nurSpringen = true; zustand = 'scroll'; ziel = START; letzte = performance.now(); hinweis(); });
    }, Math.max(150, 600 - (performance.now() - t0)));
  }
  v.muted = true; v.defaultMuted = true; v.playsInline = true; v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
  v.preload = 'auto';
  v.addEventListener('canplaythrough', losgehen);
  v.addEventListener('canplay', function () { if (puffer() > 0.6 || performance.now() - t0 > 2500) losgehen(); });
  v.addEventListener('loadedmetadata', function () { if (v.duration && isFinite(v.duration)) { DUR = v.duration; END = DUR - 0.15; } });
  v.addEventListener('error', function () { fehler('Film-Fehler'); });
  v.src = datei;
  try { v.load(); } catch (e) {}
  // iPhone lädt oft erst nach play(): nach 2,5 s anstoßen
  setTimeout(function () {
    if (zustand === 'laden' && !fertig) { var pr = v.play(); if (pr && pr.then) pr.then(function () { v.pause(); losgehen(); }).catch(function () { if (zustand === 'laden') fehler('Abspielen gesperrt (z. B. Stromsparmodus)'); }); }
  }, 2500);
  setTimeout(function () { if (zustand === 'laden') fehler('Laden dauert zu lange'); }, 8000);
  (function ladeAnzeige() {
    if (fertig || zustand !== 'laden') return;
    if (v.error) { fehler('Film nicht erreichbar'); return; }
    var echt = puffer(), zeit = Math.min(0.9, (performance.now() - t0) / 6000);
    anzeige = Math.max(anzeige, Math.min(0.99, Math.max(echt, zeit)));
    zeig(anzeige); requestAnimationFrame(ladeAnzeige);
  })();

  /* ---------- Bildausschnitt am Handy: Kamera schwenkt mit, am Ende Blick auf die ganze Website ---------- */
  var PAN = [[0, 30], [1.4, 36], [2.6, 40], [3.6, 44], [4.6, 50], [5.8, 42], [8, 42]];
  function tab(t, a) { for (var i = 1; i < a.length; i++) if (t <= a[i][0]) { var x = a[i - 1], y = a[i], k = (t - x[0]) / (y[0] - x[0]); return x[1] + (y[1] - x[1]) * k; } return a[a.length - 1][1]; }
  function lage(t) {
    var W = innerWidth, Hh = innerHeight, c = Math.max(W / VW, Hh / VH), Dw = VW * c, Dh = VH * c, px = 0.5, z = 1;
    if (hoch()) {
      px = tab(t, PAN) / 100;
      var k = Math.max(0, Math.min(1, (t - 5.9) / 1.3)); k = k * k * (3 - 2 * k);
      z = 1 + (W / Dw - 1) * k;                      // bis die ganze Filmbreite ins Handy passt
    }
    return { W: W, H: Hh, Dw: Dw, Dh: Dh, ox: (W - Dw) * px, oy: (Hh - Dh) / 2, px: px, z: z };
  }
  function zeichnen(t) {
    var g = lage(t), st = v.style;               // Film in voller Größe legen (kein Beschnitt), dann skalieren
    st.inset = 'auto'; st.objectFit = 'fill'; st.maxWidth = 'none'; st.maxHeight = 'none';
    st.width = g.Dw.toFixed(1) + 'px'; st.height = g.Dh.toFixed(1) + 'px';
    st.left = g.ox.toFixed(1) + 'px'; st.top = g.oy.toFixed(1) + 'px';
    st.transformOrigin = (g.W / 2 - g.ox).toFixed(1) + 'px ' + (g.H / 2 - g.oy).toFixed(1) + 'px';
    st.transform = g.z === 1 ? '' : 'scale(' + g.z.toFixed(4) + ')';
    bar.style.width = (Math.min(1, t / END) * 100).toFixed(1) + '%';
  }
  function filmRechteck(t) {                          // sichtbares Filmbild in Fensterkoordinaten
    var g = lage(t), cx = g.W / 2, cy = g.H / 2;
    var x1 = cx + g.z * (g.ox - cx), y1 = cy + g.z * (g.oy - cy);
    return { x: x1, y: y1, w: g.Dw * g.z, h: g.Dh * g.z };
  }

  /* ---------- Eingaben ---------- */
  function hinweis() {
    hint.classList.add('an'); hintZeit = performance.now();
    stage.classList.remove('fi-wackel'); void stage.offsetWidth; stage.classList.add('fi-wackel');
  }
  function eingabe(d) {
    if (fertig || zustand === 'finale') return;
    if (zustand === 'laden') { if (++fruehe > 6) schnellEnde(); return; }   // wer drängelt, kommt sofort auf die Seite
    if (zustand === 'anlauf' || zustand === 'auto') { zustand = 'scroll'; ziel = v.currentTime; }
    ziel = Math.max(0.2, Math.min(DUR, ziel + d * DUR));
    letzte = performance.now();
    if (d > 0) hint.classList.remove('an');
  }
  function sperren(e) { e.preventDefault(); e.stopImmediatePropagation(); }
  addEventListener('wheel', function (e) {
    if (ruhig) return;
    sperren(e); letzteRad = performance.now();
    if (!fertig) eingabe((e.deltaMode ? e.deltaY * 40 : e.deltaY) / 2400);
  }, { passive: false, capture: true });
  var ty = null;
  addEventListener('touchstart', function (e) { if (ruhig) return; if (!fertig) ty = e.touches[0].clientY; e.stopImmediatePropagation(); }, { passive: true, capture: true });
  addEventListener('touchmove', function (e) {
    if (ruhig) return;
    sperren(e); letzteRad = performance.now();
    if (fertig || ty === null) return;
    var y = e.touches[0].clientY; eingabe((ty - y) / (innerHeight * 2)); ty = y;
  }, { passive: false, capture: true });
  addEventListener('keydown', function (e) {
    if (ruhig) return;
    if (fertig) { if (['ArrowDown', 'PageDown', ' ', 'Spacebar', 'End'].indexOf(e.key) > -1) sperren(e); return; }
    if (e.key === 'Escape') { schnellEnde(); return; }
    if (['ArrowDown', 'PageDown', ' ', 'Spacebar', 'Enter'].indexOf(e.key) > -1) { e.preventDefault(); eingabe(0.1); }
    if (['ArrowUp', 'PageUp'].indexOf(e.key) > -1) { e.preventDefault(); eingabe(-0.1); }
  });
  skip.addEventListener('click', schnellEnde);
  v.addEventListener('ended', function () { finale(); });

  /* ---------- Abspielen ---------- */
  function spiel(rate) {
    if (nurSpringen) return false;
    v.playbackRate = rate;
    if (v.paused) { var pr = v.play(); if (pr && pr.catch) pr.catch(function () { nurSpringen = true; }); }
    return true;
  }
  function schritt() {
    if (fertig || zustand === 'finale') return;
    var t = performance.now(), ct = v.currentTime;
    if (zustand === 'anlauf') {
      if (ct >= START) { v.pause(); ziel = ct; zustand = 'scroll'; letzte = t; hinweis(); }
    } else if (zustand === 'scroll') {
      var diff = ziel - ct;
      if (diff > 0.03) { if (!spiel(Math.max(0.8, Math.min(3, 0.9 + diff * 1.2)))) { if (!v.seeking) v.currentTime = Math.min(ziel, ct + 0.08); } }
      else if (diff < -0.06) { if (!v.paused) v.pause(); if (!v.seeking) v.currentTime = Math.max(ziel, ct - Math.min(0.15, -diff * 0.35)); }
      else if (!v.paused) v.pause();
      if (t - letzte > 3000 && ziel < END) { zustand = 'auto'; hint.classList.remove('an'); ziel = DUR; if (!spiel(1)) zustand = 'scroll'; }
      if (hintZeit && t - hintZeit > 2800 && hint.classList.contains('an')) hinweis();
      if (ziel >= END && ct >= END - 0.25 && (v.paused || nurSpringen)) { finale(); return; }
    } else if (zustand === 'auto') {
      if (nurSpringen) { zustand = 'scroll'; ziel = DUR; }
    }
    // Wächter: läuft etwas, das laufen müsste, nicht weiter → Seite freigeben
    var soll = zustand === 'anlauf' || zustand === 'auto' || (zustand === 'scroll' && Math.abs(ziel - ct) > 0.1);
    if (Math.abs(ct - letzteZeit) > 0.001) { letzteZeit = ct; stillSeit = t; }
    else if (soll && t - stillSeit > 6000) { fehler('Film steht'); return; }
    if (!soll) stillSeit = t;
    if (zustand !== 'laden') zeichnen(ct);
    if (ct >= END) { finale(); return; }
    requestAnimationFrame(schritt);
  }
  requestAnimationFrame(schritt);

  /* ---------- Finale: aus dem Film wird die echte Seite ---------- */
  function finale() {
    if (fertig || zustand === 'finale') return;
    zustand = 'finale';
    try { v.pause(); } catch (e) {}
    hint.classList.remove('an'); stage.classList.remove('fi-wackel');
    window.scrollTo(0, 0);
    if (!hoch()) {
      // Am PC ist das letzte Filmbild der Seitenanfang selbst: weich überblenden, dann ist man drin
      zeichnen(v.currentTime);
      box.classList.add('fi-tauchen');
      box.style.transition = 'opacity .9s ease'; box.style.opacity = '0';
      stage.style.transition = 'transform 1.1s cubic-bezier(.2,.7,.2,1)'; stage.style.transform = 'scale(1.03)';
      setTimeout(function () { fertig = true; H.classList.remove('fi-on'); aufraeumen(); }, 950);
      return;
    }
    // Am Handy: der Film steht als Website-Streifen in der Mitte, daraus klappt die echte Seite auf
    zeichnen(DUR);
    var R0 = filmRechteck(DUR), W = innerWidth, Hh = innerHeight;
    var teile = [].slice.call(document.body.children).filter(function (el) {
      return el !== box && !/^(SCRIPT|STYLE|LINK|NOSCRIPT)$/.test(el.tagName) && !el.classList.contains('dock') && !el.classList.contains('mmenu');
    });
    box.classList.add('fi-tauchen');
    var D = 1000, ts = performance.now();
    function ease(k) { return k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2; }
    function lauf() {
      var k = ease(Math.min(1, (performance.now() - ts) / D));
      var y1 = R0.y * (1 - k), y2 = (R0.y + R0.h) + (Hh - (R0.y + R0.h)) * k;
      teile.forEach(function (el) { el.style.transform = 'translateY(' + y1.toFixed(1) + 'px)'; });
      box.style.clipPath = 'polygon(evenodd,0 0,' + W + 'px 0,' + W + 'px ' + Hh + 'px,0 ' + Hh + 'px,0 0,0 ' + y1 + 'px,' + W + 'px ' + y1 + 'px,' + W + 'px ' + y2 + 'px,0 ' + y2 + 'px,0 ' + y1 + 'px)';
      if (k < 1) { requestAnimationFrame(lauf); return; }
      teile.forEach(function (el) { el.style.transform = ''; });
      fertig = true; H.classList.remove('fi-on'); aufraeumen();
    }
    requestAnimationFrame(lauf);
  }
})();
