/* Intro „Absprung“ (/webdesign)
   1. Ladebild mit Falke und echtem Fortschritt (der Film wird ganz geladen, keine halb geladene Seite).
   2. Film läuft an (Drohne, Absprung), hält an: Scroll-Hinweis, Seite wackelt.
   3. Scrollen spielt den Flug flüssig ab (vor und zurück), ohne Eingabe läuft er nach kurzer Zeit von selbst.
   4. Ende: die Kamera taucht in den Monitor, im Monitor steckt die echte Seite und wächst auf volle Größe. */
(function () {
  var H = document.documentElement;
  if (!H.classList.contains('fi-on')) return;
  var box = document.getElementById('fe-intro');
  if (!box) { H.classList.remove('fi-on'); return; }
  var $ = function (s) { return box.querySelector(s); };
  var stage = $('.fi-stage'), v = $('.fi-v'), hint = $('.fi-hint'), skip = $('.fi-skip'), bar = $('.fi-bar b'),
      load = $('.fi-load'), lbar = $('.fi-lbar i'), lnum = $('.fi-load b'), rahmen = $('.fi-rahmen');

  var VW = 1920, VH = 1080;                       // Filmformat
  var END = 3.6, START = 1.4;                     // Sekunden: Ende des Films, Ende des Anlaufs
  var MON = { x: 598, y: 112, w: 910, h: 600 };   // Bildschirm des Monitors im letzten Bild (Filmpixel)
  var hoch = function () { return innerWidth / innerHeight < 1.15; };
  var net = navigator.connection || {};
  var gross = !net.saveData && (innerWidth >= 900 || !net.effectiveType || net.effectiveType === '4g');
  var datei = 'media/intro/' + (gross ? 'flug_1080.mp4' : 'flug_720.mp4') + '?v=2';

  var zustand = 'laden', ziel = START, letzte = 0, hintZeit = 0, fertig = false, rt = 0, url = null;

  /* ---------- Ende ---------- */
  function aufraeumen() {
    try { sessionStorage.setItem('fe-intro', '1'); } catch (e) {}
    try { v.pause(); } catch (e) {}
    box.remove(); if (url) setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }
  function schnellEnde() {
    if (fertig) return; fertig = true;
    box.style.display = 'block'; box.style.transition = 'opacity .35s ease'; box.style.opacity = '0';
    H.classList.remove('fi-on'); window.scrollTo(0, 0);
    setTimeout(aufraeumen, 380);
  }

  /* ---------- Laden mit echtem Fortschritt ---------- */
  var t0 = performance.now();
  function fortschritt(q) { q = Math.max(0, Math.min(1, q)); lbar.style.transform = 'scaleX(' + q + ')'; lnum.textContent = Math.round(q * 100) + ' %'; }
  var notaus = setTimeout(schnellEnde, 12000);   // zu langsames Netz: Seite nicht aufhalten
  function bereit(src) {
    v.src = src; v.muted = true; v.playsInline = true;
    v.addEventListener('loadeddata', function once() {
      v.removeEventListener('loadeddata', once);
      var warte = Math.max(0, 650 - (performance.now() - t0));
      setTimeout(function () {
        if (fertig) return; clearTimeout(notaus);
        fortschritt(1); load.classList.add('weg'); stage.classList.add('an');
        zustand = 'anlauf';
        var pr = v.play(); if (pr && pr.catch) pr.catch(function () { warten(); });
        requestAnimationFrame(schritt);
      }, warte);
    });
    v.addEventListener('error', schnellEnde);
  }
  if (window.fetch && window.ReadableStream && window.TextDecoder) {
    fetch(datei).then(function (r) {
      if (!r.ok || !r.body) throw 0;
      var ges = +r.headers.get('content-length') || (gross ? 7.3e6 : 2.9e6), da = 0, teile = [], rd = r.body.getReader();
      function lies() {
        return rd.read().then(function (x) {
          if (x.done) { url = URL.createObjectURL(new Blob(teile, { type: 'video/mp4' })); bereit(url); return; }
          teile.push(x.value); da += x.value.length; fortschritt(da / ges * 0.97); return lies();
        });
      }
      return lies();
    }).catch(function () { bereit(datei); });
  } else bereit(datei);

  /* ---------- Bildausschnitt (Hochformat: Kamera schwenkt mit, am Ende Blick aufs ganze Bild) ---------- */
  var PAN = [[0, 30], [1.4, 35], [2.4, 47], [END, 55]];
  function lerpTab(tab, t) {
    for (var i = 1; i < tab.length; i++) if (t <= tab[i][0]) { var a = tab[i - 1], b = tab[i], k = (t - a[0]) / (b[0] - a[0]); return a[1] + (b[1] - a[1]) * k; }
    return tab[tab.length - 1][1];
  }
  function geom(t) {                                // aktuelle Lage des Films im Fenster
    var W = innerWidth, Hh = innerHeight, c = Math.max(W / VW, Hh / VH), Dw = VW * c, Dh = VH * c;
    var px = hoch() ? lerpTab(PAN, t) / 100 : 0.5, z = 1;
    if (hoch()) { var zf = W / Dw, k = Math.max(0, Math.min(1, (t - 2.5) / (END - 2.5))); k = k * k * (3 - 2 * k); z = 1 + (zf * 1.06 - 1) * k; }
    return { W: W, H: Hh, c: c, ox: (W - Dw) * px, oy: (Hh - Dh) * 0.5, px: px, z: z };
  }
  function anwenden(t) {
    var g = geom(t);
    v.style.objectPosition = (g.px * 100).toFixed(2) + '% 50%';
    v.style.transform = g.z === 1 ? '' : 'scale(' + g.z.toFixed(4) + ')';
    bar.style.width = (Math.min(1, t / END) * 100).toFixed(1) + '%';
  }
  function monitor(t) {                             // Monitorbildschirm in Fensterkoordinaten
    var g = geom(t), sx = function (x) { return g.W / 2 + g.z * (x - g.W / 2); }, sy = function (y) { return g.H / 2 + g.z * (y - g.H / 2); };
    var x1 = sx(g.ox + MON.x * g.c), y1 = sy(g.oy + MON.y * g.c), x2 = sx(g.ox + (MON.x + MON.w) * g.c), y2 = sy(g.oy + (MON.y + MON.h) * g.c);
    return { x: x1, y: y1, w: x2 - x1, h: y2 - y1 };
  }

  /* ---------- Eingaben ---------- */
  function warten() { zustand = 'scroll'; letzte = performance.now(); hinweis(); }
  function hinweis() {
    hint.classList.add('an'); hintZeit = performance.now();
    stage.classList.remove('fi-wackel'); void stage.offsetWidth; stage.classList.add('fi-wackel');
  }
  function eingabe(d) {
    if (fertig || zustand === 'tauchen') return;
    if (zustand === 'laden') return;
    if (zustand === 'anlauf' || zustand === 'auto') { zustand = 'scroll'; ziel = v.currentTime; }
    ziel = Math.max(0.2, Math.min(END, ziel + d * END));
    letzte = performance.now();
    if (d > 0) hint.classList.remove('an');
  }
  addEventListener('wheel', function (e) { if (fertig) return; e.preventDefault(); eingabe((e.deltaMode ? e.deltaY * 40 : e.deltaY) / 1400); }, { passive: false });
  var ty = null;
  addEventListener('touchstart', function (e) { if (!fertig) ty = e.touches[0].clientY; }, { passive: true });
  addEventListener('touchmove', function (e) { if (fertig || ty === null) return; e.preventDefault(); var y = e.touches[0].clientY; eingabe((ty - y) / (innerHeight * 1.2)); ty = y; }, { passive: false });
  addEventListener('keydown', function (e) {
    if (fertig) return;
    if (e.key === 'Escape') { schnellEnde(); return; }
    if (['ArrowDown', 'PageDown', ' ', 'Spacebar', 'Enter'].indexOf(e.key) > -1) { e.preventDefault(); eingabe(0.14); }
    if (['ArrowUp', 'PageUp'].indexOf(e.key) > -1) { e.preventDefault(); eingabe(-0.14); }
  });
  skip.addEventListener('click', schnellEnde);

  /* ---------- Abspielen: flüssig über die Abspielrate statt Einzelbild-Springen ---------- */
  function schritt() {
    if (fertig || zustand === 'tauchen') return;
    var t = performance.now();
    var ct = v.currentTime;
    if (zustand === 'anlauf') {
      if (ct >= START) { v.pause(); ziel = ct; warten(); }
    } else if (zustand === 'scroll') {
      var diff = ziel - ct;
      if (diff > 0.03) {
        v.playbackRate = Math.max(0.7, Math.min(3, 0.8 + diff * 1.6));
        if (v.paused) { var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); }
      } else if (diff < -0.06) {
        if (!v.paused) v.pause();
        if (!v.seeking) v.currentTime = Math.max(ziel, ct - Math.min(0.12, -diff * 0.35));
      } else if (!v.paused) v.pause();
      if (t - letzte > 3000 && ziel < END) { zustand = 'auto'; hint.classList.remove('an'); v.playbackRate = 1; var p2 = v.play(); if (p2 && p2.catch) p2.catch(function () {}); }
      if (hintZeit && t - hintZeit > 2800 && hint.classList.contains('an')) hinweis();
    }
    anwenden(ct);
    if (ct >= END - 0.02 || v.ended) { tauchen(); return; }
    requestAnimationFrame(schritt);
  }

  /* ---------- Ende: in den Monitor eintauchen, die echte Seite wächst heraus ---------- */
  function tauchen() {
    if (fertig || zustand === 'tauchen') return;
    zustand = 'tauchen'; clearTimeout(notaus);
    try { v.pause(); } catch (e) {}
    anwenden(END);
    hint.classList.remove('an'); stage.classList.remove('fi-wackel');
    window.scrollTo(0, 0);
    var R0 = monitor(END), W = innerWidth, Hh = innerHeight;
    var teile = [].slice.call(document.body.children).filter(function (el) {
      return el !== box && !/^(SCRIPT|STYLE|LINK|NOSCRIPT)$/.test(el.tagName) && !el.classList.contains('dock') && !el.classList.contains('mmenu');
    }).map(function (el) { var r = el.getBoundingClientRect(); return { el: el, x: r.left, y: r.top }; });
    teile.forEach(function (p) { p.el.style.transformOrigin = (-p.x) + 'px ' + (-p.y) + 'px'; p.el.style.willChange = 'transform'; });
    box.classList.add('fi-tauchen');
    var D = 1150, ts = performance.now();
    function ease(k) { return k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2; }
    function lauf(t) {
      var k = ease(Math.min(1, (t - ts) / D));
      var R = { x: R0.x * (1 - k), y: R0.y * (1 - k), w: R0.w + (W - R0.w) * k, h: R0.h + (Hh - R0.h) * k };
      var s = R.w / R0.w;
      stage.style.transformOrigin = '0 0';
      stage.style.transform = 'translate(' + (R.x - s * R0.x).toFixed(2) + 'px,' + (R.y - s * R0.y).toFixed(2) + 'px) scale(' + s.toFixed(4) + ')';
      var ps = R.w / W;
      teile.forEach(function (p) { p.el.style.transform = 'translate(' + R.x.toFixed(2) + 'px,' + R.y.toFixed(2) + 'px) scale(' + ps.toFixed(4) + ')'; });
      var x1 = R.x, y1 = R.y, x2 = R.x + R.w, y2 = R.y + R.h;
      box.style.clipPath = 'polygon(evenodd,0 0,' + W + 'px 0,' + W + 'px ' + Hh + 'px,0 ' + Hh + 'px,0 0,' + x1 + 'px ' + y1 + 'px,' + x2 + 'px ' + y1 + 'px,' + x2 + 'px ' + y2 + 'px,' + x1 + 'px ' + y2 + 'px,' + x1 + 'px ' + y1 + 'px)';
      rahmen.style.cssText = 'left:' + (x1 - 3) + 'px;top:' + (y1 - 3) + 'px;width:' + (R.w + 6) + 'px;height:' + (R.h + 6) + 'px;opacity:' + (1 - k).toFixed(3);
      if (k < 1) { requestAnimationFrame(lauf); return; }
      teile.forEach(function (p) { p.el.style.transform = ''; p.el.style.transformOrigin = ''; p.el.style.willChange = ''; });
      fertig = true; H.classList.remove('fi-on'); aufraeumen();
      document.dispatchEvent(new CustomEvent('fe-intro-ende'));
    }
    requestAnimationFrame(lauf);
  }
})();
