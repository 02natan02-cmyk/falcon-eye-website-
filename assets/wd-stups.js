/* Scroll-Stupser für webdesign.html (Natan 31.10.2026: „dass die Seite einmal so wackelt … jetzt runter scrollen.
   Nicht, dass die Leute denken, das wäre alles. So nach einer Sekunde oder so.“)
   Ablauf: Intro fertig → 1 s Ruhe → die Seite rutscht ein Stück nach unten und federt zurück, dazu ein kleiner Hinweis.
   Einmal je Sitzung, nur wenn noch niemand gescrollt oder getippt hat; jede Eingabe bricht sofort ab. */
(function () {
  'use strict';
  var D = document, W = window, H = D.documentElement;
  if (W.matchMedia && W.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  try { if (sessionStorage.getItem('wd-stups') === '1') return; } catch (e) {}
  if (location.hash && location.hash.length > 1) return;

  var aus = false;
  function stopp() { aus = true; weg(); }
  ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach(function (t) { W.addEventListener(t, stopp, { passive: true, once: true, capture: true }); });

  var hint;
  function zeig() {
    hint = D.createElement('div'); hint.className = 'wd-stups'; hint.setAttribute('aria-hidden', 'true');
    hint.innerHTML = '<span>Runter scrollen</span><i></i>';
    D.body.appendChild(hint); requestAnimationFrame(function () { hint.classList.add('an'); });
    setTimeout(weg, 3200);
  }
  function weg() { if (!hint) return; var h = hint; hint = null; h.classList.remove('an'); setTimeout(function () { h.remove(); }, 400); }

  function setze(y) { if (W.FE && W.FE.lenis) W.FE.lenis.scrollTo(y, { immediate: true, force: true }); else W.scrollTo(0, y); }

  function stups() {
    if (aus || W.scrollY > 30) return;
    try { sessionStorage.setItem('wd-stups', '1'); } catch (e) {}
    var tief = Math.min(240, Math.round(innerHeight * 0.28));
    var t0 = performance.now(), RUNTER = 620, HALT = 180, HOCH = 760;
    zeig();
    (function f(ts) {
      if (aus) return;
      var t = ts - t0, y;
      if (t < RUNTER) { var p = t / RUNTER; y = tief * (1 - Math.pow(1 - p, 3)); }
      else if (t < RUNTER + HALT) y = tief;
      else if (t < RUNTER + HALT + HOCH) {
        // zurück nach oben, prallt einmal kurz ab und federt aus → sieht aus wie ein Wackeln
        var q = (t - RUNTER - HALT) / HOCH;
        y = tief * Math.abs(Math.cos(q * Math.PI * 1.5)) * Math.pow(1 - q, 1.4);
      } else { setze(0); return; }
      setze(Math.round(y));
      requestAnimationFrame(f);
    })(t0);
  }

  function warteAufRuhe(cb) {
    // Schleim-Intro (Halloween) oder Motorrad-Intro dürfen nicht mehr laufen
    var n = 0;
    (function chk() {
      if (aus) return;
      if (H.classList.contains('hw-lock') || H.classList.contains('fi-on') || D.querySelector('.hw-ov')) { if (++n < 80) return setTimeout(chk, 250); return; }
      setTimeout(cb, 1000);
    })();
  }

  function los() { warteAufRuhe(stups); }
  if (H.classList.contains('fi-on')) {
    var fired = false, go = function () { if (!fired) { fired = true; los(); } };
    W.addEventListener('fe:intro-ende', go, { once: true }); setTimeout(go, 25000);
  } else if (D.readyState === 'complete') los();
  else W.addEventListener('load', los, { once: true });
})();
