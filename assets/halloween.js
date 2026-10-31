/* Halloween 2026 – grüner Schleim beim Öffnen und versteckte Kürbisse.
   Läuft von selbst nur vom 31.10.2026 bis Montag, 02.11.2026, 18:00 Uhr (Ortszeit); danach bleibt die Seite unverändert, die Dateien tun nichts mehr.
   ?halloween=1 erzwingt, ?halloween=0 schaltet aus. */
(function () {
  'use strict';
  var D = document, W = window, H = D.documentElement;
  var q = new URLSearchParams(location.search).get('halloween');
  var now = new Date();
  var aktiv = now >= new Date(2026, 9, 31) && now < new Date(2026, 10, 2, 18);
  if (q === '0') aktiv = false; else if (q === '1') aktiv = true;
  if (!aktiv) return;
  var reduce = W.matchMedia && W.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ss = { get: function (k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
             set: function (k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} } };

  var PUMP = '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 22c-3-8 2-14 8-15-4 4-4 9-3 14" fill="none" stroke="#3d7a1f" stroke-width="5" stroke-linecap="round"/><ellipse cx="50" cy="60" rx="44" ry="34" fill="url(#hw-pg)"/><path d="M50 26v68M30 30c-8 18-8 42 0 60M70 30c8 18 8 42 0 60M18 36c-6 14-6 34 0 48M82 36c6 14 6 34 0 48" stroke="#b84800" stroke-width="2.2" fill="none" opacity=".7"/><g class="hw-face" fill="url(#hw-gl)"><path d="M30 52l10-8 6 10zM70 52l-10-8-6 10zM32 72q18 14 36 0l-6 6-6-5-6 6-6-6-6 5z"/></g></svg>';
  var DEFS = '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><radialGradient id="hw-pg" cx="50%" cy="60%" r="55%"><stop offset="0" stop-color="#ffb14d"/><stop offset=".6" stop-color="#ff7a00"/><stop offset="1" stop-color="#c24d00"/></radialGradient><radialGradient id="hw-gl" cx="50%" cy="60%" r="50%"><stop offset="0" stop-color="#fff2a8"/><stop offset="1" stop-color="#ff9a1a"/></radialGradient><filter id="hw-goo"><feGaussianBlur in="SourceGraphic" stdDeviation="9" result="b"/><feColorMatrix in="b" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10" result="g"/><feComposite in="SourceGraphic" in2="g" operator="atop"/></filter></defs></svg>';

  function el(tag, cls, html) { var e = D.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }

  /* ---------- 1. Schleim-Intro ---------- */
  function intro(fertig) {
    if (reduce || ss.get('hw-intro') === '1') { fertig(); return; }
    ss.set('hw-intro', '1');
    if (!D.getElementById('hw-goo')) { var dd = el('div', 'hw-defs', DEFS); D.body.appendChild(dd); }
    var ov = el('div', 'hw-ov');
    ov.innerHTML = '<canvas class="hw-cv"></canvas><div class="hw-txt"><span class="hw-h">Happy Halloween</span><span class="hw-s">Wir erwecken Websites zum Leben.</span></div><button type="button" class="hw-skip">Überspringen</button>';
    D.body.appendChild(ov);
    H.classList.add('hw-lock');
    var cv = ov.querySelector('canvas'), ctx = cv.getContext('2d');
    var w, h, dpr = 1;
    function size() { w = cv.width = Math.round(innerWidth * dpr); h = cv.height = Math.round(innerHeight * dpr); }
    size();
    var N = Math.max(7, Math.round(innerWidth / 90)), drops = [];
    for (var i = 0; i < N; i++) {
      drops.push({ x: (i + .5) / N + (Math.random() - .5) * .5 / N, r: (.55 + Math.random() * .6), sp: .55 + Math.random() * .7, d: Math.random() * .25, wob: Math.random() * 6.28, wob2: 1.5 + Math.random() * 2 });
    }
    var t0 = performance.now(), T1 = 1.15, T2 = 2.05, T3 = 2.75, ende = false, raf;
    var txt = ov.querySelector('.hw-txt');
    function frame(ts) {
      var t = (ts - t0) / 1000;
      ctx.clearRect(0, 0, w, h);
      var base = w / N * 0.62 * dpr / Math.max(1, dpr);
      // Fläche: Schleim deckt von oben bis zu einer Front, die mit der Zeit sinkt.
      var front = h * Math.min(1.25, Math.max(0, (t - .05) / T1)) * 1.1;
      var lift = t > T2 ? (t - T2) / (T3 - T2) : 0; lift = lift * lift * (3 - 2 * lift); // nach dem Text rutscht alles nach unten weg
      ctx.save();
      ctx.translate(0, lift * h * 1.35);
      var fg = ctx.createLinearGradient(0, 0, 0, Math.max(1, front));
      fg.addColorStop(0, '#2f9c0c'); fg.addColorStop(.55, '#58d41a'); fg.addColorStop(1, '#8dff3a');
      ctx.fillStyle = fg;
      ctx.beginPath(); ctx.rect(0, -h * 2, w, Math.max(0, front - base * 1.2) + h * 2); ctx.fill();
      for (var i = 0; i < N; i++) {
        var p = drops[i];
        var y = front - base * .9 + Math.sin(t * p.wob2 + p.wob) * base * .18 + (p.sp - .9) * base * 1.6;
        var r = base * p.r;
        ctx.fillStyle = '#3aa810'; ctx.beginPath(); ctx.ellipse(p.x * w, y + r * .18, r * 1.02, r * 1.4, 0, 0, 6.283); ctx.fill();
        ctx.fillStyle = fg; ctx.beginPath(); ctx.ellipse(p.x * w, y, r, r * 1.35, 0, 0, 6.283); ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,.28)'; ctx.beginPath(); ctx.ellipse(p.x * w - r * .3, y - r * .45, r * .32, r * .5, -.5, 0, 6.283); ctx.fill();
        ctx.fillStyle = fg;
        // Tropfen, der abreißt
        var ty = y + r * 1.3 + ((t * 1.2 + p.d) % 1) * base * 2.2;
        var tr = r * .28 * (1 - ((t * 1.2 + p.d) % 1) * .4);
        ctx.beginPath(); ctx.ellipse(p.x * w + Math.sin(p.wob) * r * .3, ty, tr, tr * 1.5, 0, 0, 6.283); ctx.fill();
      }
      ctx.restore();
      // Glanz oben
      var g = ctx.createLinearGradient(0, 0, 0, h * .35);
      g.addColorStop(0, 'rgba(255,255,255,.22)'); g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.globalCompositeOperation = 'source-atop'; ctx.fillStyle = g; ctx.fillRect(0, 0, w, h); ctx.globalCompositeOperation = 'source-over';
      if (t > T1 * .85 && !txt.classList.contains('an')) txt.classList.add('an');
      if (t > T2 + .25) txt.classList.add('weg');
      if (t < T3 + .1 && !ende) raf = requestAnimationFrame(frame); else schluss();
    }
    function schluss() {
      if (ende) return; ende = true; cancelAnimationFrame(raf);
      ov.classList.add('hw-aus'); H.classList.remove('hw-lock');
      setTimeout(function () { ov.remove(); }, 450);
      fertig();
    }
    ov.querySelector('.hw-skip').addEventListener('click', schluss);
    ov.addEventListener('click', function (e) { if (e.target === ov || e.target === cv) schluss(); });
    W.addEventListener('resize', size);
    raf = requestAnimationFrame(frame);
    setTimeout(schluss, 4500); // Notschalter
  }

  /* ---------- 2. Versteckte Kürbisse ---------- */
  function kuerbisse() {
    var ANZ = 7, wrap = el('div', 'hw-wrap'), gefunden = [], key = 'hw-found-' + location.pathname;
    try { gefunden = JSON.parse(ss.get(key) || '[]'); } catch (e) { gefunden = []; }
    if (!D.getElementById('hw-goo')) wrap.innerHTML = DEFS;
    D.body.appendChild(wrap);
    var seed = 7; function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
    var items = [];
    for (var i = 0; i < ANZ; i++) {
      var k = el('button', 'hw-k' + (gefunden.indexOf(i) > -1 ? ' hw-weg' : ''), PUMP);
      k.type = 'button'; k.setAttribute('aria-label', 'Versteckter Kürbis ' + (i + 1) + ' von ' + ANZ);
      k.dataset.i = i; k.style.setProperty('--d', (rnd() * 3).toFixed(2) + 's');
      k.dataset.fx = (0.06 + rnd() * .88).toFixed(3); k.dataset.fy = ((i + .35 + rnd() * .5) / ANZ).toFixed(3);
      k.dataset.s = (.6 + rnd() * .7).toFixed(2);
      wrap.appendChild(k); items.push(k);
    }
    var hud = el('div', 'hw-hud', '<span class="hw-ico">' + PUMP + '</span><span class="hw-z"></span><span class="hw-hint">Kürbisse verstecken sich auf der Seite. Tipp sie an!</span>');
    D.body.appendChild(hud);
    function zahl() { var n = gefunden.length; hud.querySelector('.hw-z').textContent = n + ' / ' + ANZ; hud.classList.toggle('hw-alle', n >= ANZ); }
    zahl();
    function lege() {
      var dh = Math.max(D.body.scrollHeight, H.scrollHeight), vw = innerWidth;
      wrap.style.height = dh + 'px';
      items.forEach(function (k) {
        var y = Math.min(dh - 140, 180 + +k.dataset.fy * (dh - 420));
        k.style.left = Math.round(+k.dataset.fx * (vw - 70)) + 'px'; k.style.top = Math.round(y) + 'px';
        k.style.setProperty('--s', k.dataset.s);
      });
    }
    lege(); W.addEventListener('resize', lege); setTimeout(lege, 1500); setTimeout(lege, 5000);
    wrap.addEventListener('click', function (e) {
      var k = e.target.closest('.hw-k'); if (!k || k.classList.contains('hw-weg')) return;
      k.classList.add('hw-pop'); setTimeout(function () { k.classList.add('hw-weg'); }, 650);
      spritzer(e.clientX, e.clientY);
      gefunden.push(+k.dataset.i); ss.set(key, JSON.stringify(gefunden)); zahl();
      hud.classList.add('hw-puls'); setTimeout(function () { hud.classList.remove('hw-puls'); }, 500);
      if (gefunden.length >= ANZ) finale();
    });
    hud.addEventListener('click', function () { // Hinweis: zum nächsten Kürbis scrollen
      var n = items.filter(function (k) { return !k.classList.contains('hw-weg'); })[0];
      if (!n) { finale(); return; }
      var y = parseFloat(n.style.top) - innerHeight * .4;
      if (W.FE && W.FE.lenis) W.FE.lenis.scrollTo(y); else W.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
      n.classList.add('hw-wink'); setTimeout(function () { n.classList.remove('hw-wink'); }, 1600);
    });
    // Selbst-Impuls: nach 6 s ohne Fund wackelt der erste sichtbare Kürbis kurz
    setTimeout(function () {
      if (gefunden.length) return;
      var n = items.filter(function (k) { var r = k.getBoundingClientRect(); return r.top > 0 && r.bottom < innerHeight; })[0];
      if (n) { n.classList.add('hw-wink'); setTimeout(function () { n.classList.remove('hw-wink'); }, 1600); }
      hud.classList.add('hw-zeig'); setTimeout(function () { hud.classList.remove('hw-zeig'); }, 4000);
    }, 6000);
    function spritzer(x, y) {
      if (reduce) return;
      for (var i = 0; i < 9; i++) {
        var s = el('i', 'hw-sp'); s.style.left = x + 'px'; s.style.top = y + 'px';
        s.style.setProperty('--dx', ((Math.random() - .5) * 160).toFixed(0) + 'px'); s.style.setProperty('--dy', ((Math.random() - .9) * 140).toFixed(0) + 'px');
        D.body.appendChild(s); setTimeout(function (s) { s.remove(); }, 900, s);
      }
    }
    var fin = false;
    function finale() {
      if (fin || D.querySelector('.hw-fin')) return; fin = true;
      var f = el('div', 'hw-fin', '<div class="hw-card">' + PUMP + '<h3>Alle Kürbisse gefunden!</h3><p>Happy Halloween von Falcon Eye. Wer so genau hinschaut, verdient eine Website, bei der sich jeder Abschnitt bewegt.</p><a class="hw-btn" href="webdesign.html#entwurf">Kostenlosen Entwurf anfragen</a><button type="button" class="hw-x">Schließen</button></div>');
      D.body.appendChild(f); requestAnimationFrame(function () { f.classList.add('an'); }); setTimeout(zeigeGeist, 1200);
      f.querySelector('.hw-x').addEventListener('click', function () { f.classList.remove('an'); setTimeout(function () { f.remove(); }, 400); });
      f.addEventListener('click', function (e) { if (e.target === f) f.querySelector('.hw-x').click(); });
    }
  }


  /* ---------- 3. Der Geist: kommt einmal beim zweiten Klick irgendwo auf der Seite ---------- */
  function geist() {
    if (ss.get('hw-geist') === '1') return;
    var klicks = 0;
    D.addEventListener('click', function (e) {
      if (e.target.closest('.hw-k, .hw-hud, .hw-fin, .hw-ov')) return;
      if (++klicks < 2 || ss.get('hw-geist') === '1') return;
      ss.set('hw-geist', '1'); zeigeGeist();
    }, true);
  }
  function zeigeGeist() {
    if (D.querySelector('.hw-geist')) return;
    var links = Math.random() < .5;
    var g = el('div', 'hw-geist' + (links ? ' hw-von-links' : ''), '<svg viewBox="0 0 120 140" aria-hidden="true"><path class="hw-gk" d="M60 8C32 8 16 32 16 62v62c0 6 7 8 11 4l9-9 9 9c4 4 9 4 13 0l2-2 2 2c4 4 9 4 13 0l9-9 9 9c4 4 11 2 11-4V62C104 32 88 8 60 8z" fill="#f4f7ff"/><ellipse cx="44" cy="58" rx="7" ry="10" fill="#1a1f2b"/><ellipse cx="76" cy="58" rx="7" ry="10" fill="#1a1f2b"/><circle cx="46" cy="55" r="2.5" fill="#fff"/><circle cx="78" cy="55" r="2.5" fill="#fff"/><path d="M48 84q12 12 24 0" stroke="#1a1f2b" stroke-width="4" fill="none" stroke-linecap="round"/><ellipse cx="34" cy="76" rx="7" ry="4" fill="#ffb3c7" opacity=".8"/><ellipse cx="86" cy="76" rx="7" ry="4" fill="#ffb3c7" opacity=".8"/></svg><span class="hw-buh">Buh! 👻 Happy Halloween</span>');
    g.style.top = (18 + Math.random() * 40) + 'vh';
    D.body.appendChild(g);
    g.addEventListener('click', function () { g.classList.add('hw-g-weg'); });
    setTimeout(function () { g.remove(); }, 9000);
  }

  function start() {
    var los = function () { intro(kuerbisse); geist(); };
    if (H.classList.contains('fi-on')) { // Webdesign-Intro (Motorrad) läuft zuerst
      var fired = false, go = function () { if (!fired) { fired = true; los(); } };
      W.addEventListener('fe:intro-ende', go, { once: true }); setTimeout(go, 30000);
    } else los();
  }
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', start); else start();
})();
