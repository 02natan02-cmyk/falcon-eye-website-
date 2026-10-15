/* Projekt-Geschichten – Pfeiler-Kapitel, Kapitel-Parallax, Lightbox. Entwurf: Falcon Eye */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = $('.pg'); if (!root) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const seg = (p, a, b) => clamp((p - a) / (b - a));
  const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const lenisStop = on => { const l = window.__lenis; if (l) on ? l.stop() : l.start(); };

  /* ================= Kapitel 01: Der Pfeiler ================= */
  const pf = $('[data-pf]', root);
  if (pf) {
    const pin = $('.pf-pin', pf), plate = $('[data-pf-plate]', pf), intro = $('[data-pf-intro]', pf), card = $('[data-pf-card]', pf);
    const d1 = $('[data-pf-draw1]', pf), d2 = $('[data-pf-draw2]', pf), lines = $('[data-pf-lines]', pf), wax = $('[data-pf-wax]', pf), wax2 = $('[data-pf-wax2]', pf), ring = $('[data-pf-ring]', pf), shade = $('[data-pf-shade]', pf);
    const steps = $$('[data-pfs]', pf), prog = $$('.pf-prog li', pf);
    const IW = 1600, IH = 753, FX = 376, FY = 330;      // Bildkoordinaten: Fuß des Pfeilers
    if (reduce) {
      pf.classList.add('static'); d1.setAttribute('stroke-dashoffset', 0); d2.setAttribute('stroke-dashoffset', 0);
    } else {
      let L = 0, T = 0, S = 1, W = 0, H = 0, mob = false, last = -1;
      const layout = () => {
        W = pin.clientWidth; H = pin.clientHeight; mob = W < 900;
        S = Math.max(W / IW, H / IH);
        const pw = IW * S, ph = IH * S;
        // Pfeiler auf dem Handy mittig, am Desktop links vom Text
        L = clamp((mob ? .5 : .36) * W - FX * S, W - pw, 0); T = clamp(.5 * H - FY * S, H - ph, 0);
        plate.style.width = pw + 'px'; plate.style.height = ph + 'px';
        last = -1; tick();
      };
      const setStep = i => {
        steps.forEach((s, j) => s.classList.toggle('on', j === i));
        prog.forEach((l, j) => l.classList.toggle('on', j === i));
      };
      const render = p => {
        // Zoom hinein (0.10–0.30), wieder heraus (0.80–0.95)
        const zin = ease(seg(p, .10, .30)), zout = ease(seg(p, .80, .95)), t = zin * (1 - zout);
        const Z = 1 + t * (mob ? 1.15 : .95);
        const fx = FX * S, fy = FY * S;
        const s0x = L + fx, s0y = T + fy;
        const ax = mob ? .5 * W : .34 * W, ay = mob ? .34 * H : .5 * H;
        let X = (s0x + (ax - s0x) * t) - L - Z * fx, Y = (s0y + (ay - s0y) * t) - T - Z * fy;
        X = clamp(X, W - L - Z * IW * S, -L); Y = clamp(Y, H - T - Z * IH * S, -T);
        plate.style.transform = `translate3d(${(L + X).toFixed(1)}px,${(T + Y).toFixed(1)}px,0) scale(${Z.toFixed(4)})`;
        // Intro-Frage
        const qo = 1 - seg(p, .11, .2);
        intro.style.opacity = qo; intro.style.transform = `translateY(${(-30 * (1 - qo)).toFixed(1)}px)`; intro.style.visibility = qo <= 0 ? 'hidden' : '';
        shade.style.setProperty('--sh', (.55 + .45 * (1 - t * .6)).toFixed(3));
        ring.classList.toggle('on', p > .18 && p < .3);
        // Linien zeichnen, Wachs heilt
        d1.setAttribute('stroke-dashoffset', (1 - seg(p, .27, .41)).toFixed(4));
        d2.setAttribute('stroke-dashoffset', (1 - seg(p, .45, .56)).toFixed(4));
        // Hartwachs: warme Linie füllt den Schnitt, dann verheilt alles
        const h = seg(p, .59, .7), fade = ease(seg(p, .69, .79));
        lines.style.opacity = (1 - fade).toFixed(3);
        wax.setAttribute('stroke-dashoffset', (1 - h).toFixed(4)); wax2.setAttribute('stroke-dashoffset', (1 - h).toFixed(4));
        wax.style.opacity = (h > 0 ? .75 * (1 - fade) : 0).toFixed(3); wax2.style.opacity = (h > 0 ? 1 - fade : 0).toFixed(3);
        pf.style.setProperty('--nt', p > .26 && p < .74 ? 1 : 0); $('.pf-note', pf).style.opacity = p > .26 && p < .74 ? 1 : 0;
        // Karte + Schritte
        const st = p < .24 ? -1 : p < .43 ? 0 : p < .59 ? 1 : p < .77 ? 2 : 3;
        card.classList.toggle('on', st >= 0);
        card.classList.toggle('done', p > .9);
        setStep(st);
        const bounds = [[.24, .43], [.43, .59], [.59, .77], [.77, .9]];
        prog.forEach((l, j) => l.querySelector('i').style.setProperty('--f', seg(p, bounds[j][0], bounds[j][1]).toFixed(3)));
      };
      let raf = 0;
      const tick = () => {
        raf = 0;
        const r = pf.getBoundingClientRect(), span = r.height - innerHeight;
        if (r.bottom < -200 || r.top > innerHeight + 200) return;
        const p = clamp(-r.top / span);
        if (Math.abs(p - last) < .0004) return; last = p; render(p);
      };
      const req = () => { if (!raf) raf = requestAnimationFrame(tick); };
      addEventListener('scroll', req, { passive: true }); addEventListener('resize', layout);
      if (window.ScrollTrigger) ScrollTrigger.addEventListener('refresh', layout);
      layout(); render(0);
    }
  }

  /* ================= Kapitel 02–08: Einblenden + Parallax/Ken Burns ================= */
  const chs = $$('[data-ch]', root);
  if (reduce || !('IntersectionObserver' in window)) chs.forEach(c => c.classList.add('in'));
  else {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -18% 0px' });
    chs.forEach(c => io.observe(c));
    const par = $$('[data-par]', root), insets = $$('.ch-inset', root); let pr = 0;
    const upd = () => {
      pr = 0; const vh = innerHeight;
      par.forEach(img => { const r = img.parentElement.getBoundingClientRect(); if (r.bottom < -50 || r.top > vh + 50) return; const k = clamp((r.top + r.height / 2 - vh / 2) / vh, -1, 1); img.style.setProperty('--py', (k * -7).toFixed(2) + '%'); img.style.setProperty('--ks', (1.08 + (1 - Math.abs(k)) * .05).toFixed(4)); });
      insets.forEach(el => { const r = el.getBoundingClientRect(); if (r.bottom < -50 || r.top > vh + 50) return; const k = clamp((r.top + r.height / 2 - vh / 2) / vh, -1, 1); el.style.setProperty('--iy', (k * 60).toFixed(1) + 'px'); });
    };
    addEventListener('scroll', () => { if (!pr) pr = requestAnimationFrame(upd); }, { passive: true }); upd();
  }

  /* ================= Lightbox (Tastatur, Wischen, Fokusfalle, Esc) ================= */
  const items = $$('[data-lb]', root);
  if (!items.length) return;
  const WA = 'https://wa.me/4917656791796';
  const slides = []; items.forEach(el => { el._first = slides.length; el.dataset.srcs.split(',').forEach((src, i, a) => slides.push({ el, src, i, n: a.length })); });
  const lb = document.createElement('div');
  lb.className = 'pgx'; lb.hidden = true; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Küchenbilder');
  lb.innerHTML = '<div class="pgx-top"><span class="pgx-count" aria-live="polite"></span><button type="button" class="pgx-x" aria-label="Schließen (Esc)">✕</button></div><div class="pgx-stage"><img alt=""><button type="button" class="pgx-prev" aria-label="Vorheriges Bild">←</button><button type="button" class="pgx-next" aria-label="Nächstes Bild">→</button></div><div class="pgx-bar"><div class="pgx-txt"><b></b><p></p></div><div class="pgx-act"><a class="btn btn-copper sm" data-plan href="planer.html">Ähnlich planen</a><a class="btn btn-wa sm" data-wa target="_blank" rel="noopener" href="#">So eine will ich</a></div></div>';
  document.body.appendChild(lb);
  const img = $('img', lb), cnt = $('.pgx-count', lb), tb = $('.pgx-txt b', lb), tp = $('.pgx-txt p', lb);
  let cur = 0, opener = null;
  const show = k => {
    cur = (k + slides.length) % slides.length; const s = slides[cur], el = s.el;
    img.classList.add('ld');
    const im = new Image(); im.onload = im.onerror = () => { img.src = s.src; img.alt = (el.querySelector('img') || {}).alt || el.dataset.t; requestAnimationFrame(() => img.classList.remove('ld')); }; im.src = s.src;
    cnt.textContent = `${cur + 1} / ${slides.length}`;
    tb.textContent = el.dataset.t + (s.n > 1 ? ` · Bild ${s.i + 1}/${s.n}` : ''); tp.textContent = el.dataset.d;
    $('[data-plan]', lb).href = el.dataset.plan || 'planer.html';
    $('[data-wa]', lb).href = WA + '?text=' + encodeURIComponent('Hallo Herr Pellegrin, mir gefällt die Küche „' + el.dataset.t + '“ auf Ihrer Website. Können wir über so eine Küche für mich sprechen?');
    [1, -1].forEach(d => { const n = slides[(cur + d + slides.length) % slides.length]; const p = new Image(); p.src = n.src; });
  };
  const open = el => { opener = el; lb.hidden = false; show(el._first); requestAnimationFrame(() => lb.classList.add('on')); document.documentElement.style.overflow = 'hidden'; lenisStop(true); $('.pgx-x', lb).focus(); };
  const close = () => { lb.classList.remove('on'); lb.hidden = true; document.documentElement.style.overflow = ''; lenisStop(false); opener && opener.focus({ preventScroll: true }); };
  items.forEach(el => el.addEventListener('click', () => open(el)));
  $('.pgx-x', lb).addEventListener('click', close);
  $('.pgx-prev', lb).addEventListener('click', () => show(cur - 1)); $('.pgx-next', lb).addEventListener('click', () => show(cur + 1));
  lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('pgx-stage')) close(); });
  lb.addEventListener('keydown', e => {
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'ArrowRight') show(cur + 1); else if (e.key === 'ArrowLeft') show(cur - 1);
    else if (e.key === 'Tab') { const f = $$('button,a[href]', lb).filter(x => x.offsetParent !== null); const a = f[0], z = f[f.length - 1]; if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } }
  });
  let sx = 0, sy = 0; const st = $('.pgx-stage', lb);
  st.addEventListener('touchstart', e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  st.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy; if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) show(cur + (dx < 0 ? 1 : -1)); });
})();
