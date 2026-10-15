/* Projekt-Geschichten – Pfeiler-Kapitel, Kapitel-Parallax, Lightbox. Entwurf: Falcon Eye */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = $('.pg'); if (!root) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const seg = (p, a, b) => clamp((p - a) / (b - a));
  const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const lenisStop = on => { const l = window.__lenis; if (l) on ? l.stop() : l.start(); };

  /* ================= Kapitel 01: Der Pfeiler (echte Montagefotos) ================= */
  const pf = $('[data-pf]', root);
  if (pf) {
    const pin = $('.pf-pin', pf), intro = $('[data-pf-intro]', pf), card = $('[data-pf-card]', pf), shade = $('[data-pf-shade]', pf);
    const draw = $('[data-pf-draw]', pf), ring = $('[data-pf-ring]', pf);
    const steps = $$('[data-pfs]', pf), prog = $$('.pf-prog li', pf), sls = $$('[data-pfsl]', pf);
    // Pro Foto: Fokuspunkt (Bildpixel) Anfang→Ende, Zoom Anfang→Ende, aktives Fenster, Einblendung
    const CFG = [
      { f0: [508, 446], f1: [508, 446], z: [1, 1.5], win: [0, .24], fade: null },
      { f0: [700, 760], f1: [760, 860], z: [1.02, 1.16], win: [.16, .44], fade: [.16, .25] },
      { f0: [640, 260], f1: [640, 860], z: [1.25, 1.1], win: [.40, .60], fade: [.40, .47] },
      { f0: [600, 760], f1: [780, 820], z: [1.02, 1.18], win: [.56, .78], fade: [.56, .63] },
      { f0: [640, 470], f1: [640, 470], z: [1.25, 1.0], win: [.74, .96], fade: [.74, .81] },
    ];
    sls.forEach((el, i) => { const c = CFG[i]; c.el = el; c.ph = $('.pf-ph', el); c.w = +el.dataset.w; c.h = +el.dataset.h; c.ph.style.width = c.w + 'px'; c.ph.style.height = c.h + 'px'; });
    if (reduce) {
      pf.classList.add('static'); if (draw) draw.setAttribute('stroke-dashoffset', 0);
    } else {
      let W = 0, H = 0, mob = false, last = -1;
      const layout = () => { W = pin.clientWidth; H = pin.clientHeight; mob = W < 900; last = -1; tick(); };
      const place = (c, t) => {
        const z = c.z[0] + (c.z[1] - c.z[0]) * t, fx = c.f0[0] + (c.f1[0] - c.f0[0]) * t, fy = c.f0[1] + (c.f1[1] - c.f0[1]) * t;
        const S = Math.max(W / c.w, H / c.h) * z;
        const tx = mob ? .5 * W : .36 * W, ty = mob ? .36 * H : .5 * H;
        const X = clamp(tx - fx * S, W - c.w * S, 0), Y = clamp(ty - fy * S, H - c.h * S, 0);
        c.ph.style.transform = `translate3d(${X.toFixed(1)}px,${Y.toFixed(1)}px,0) scale(${S.toFixed(4)})`;
      };
      const render = p => {
        CFG.forEach((c, i) => {
          const next = CFG[i + 1], near = p >= c.win[0] - .04 && (!next || p <= next.fade[1] + .02);
          c.el.style.visibility = near ? '' : 'hidden';
          if (!near) return;
          c.el.style.opacity = c.fade ? ease(seg(p, c.fade[0], c.fade[1])).toFixed(3) : 1;
          place(c, ease(seg(p, c.win[0], c.win[1])));
        });
        const qo = 1 - seg(p, .1, .18);
        intro.style.opacity = qo; intro.style.transform = `translateY(${(-30 * (1 - qo)).toFixed(1)}px)`; intro.style.visibility = qo <= 0 ? 'hidden' : '';
        shade.style.setProperty('--sh', p < .2 ? 1 : .75);
        if (ring) ring.classList.toggle('on', p > .08 && p < .2);
        if (draw) draw.setAttribute('stroke-dashoffset', (1 - seg(p, .26, .37)).toFixed(4));
        const st = p < .2 ? -1 : p < .43 ? 0 : p < .59 ? 1 : p < .77 ? 2 : 3;
        card.classList.toggle('on', st >= 0); card.classList.toggle('done', p > .88);
        steps.forEach((s, j) => s.classList.toggle('on', j === st)); prog.forEach((l, j) => l.classList.toggle('on', j === st));
        const bounds = [[.2, .43], [.43, .59], [.59, .77], [.77, .88]];
        prog.forEach((l, j) => l.querySelector('i').style.setProperty('--f', seg(p, bounds[j][0], bounds[j][1]).toFixed(3)));
      };
      let raf = 0;
      const tick = () => {
        raf = 0; const r = pf.getBoundingClientRect(), span = r.height - innerHeight;
        if (r.bottom < -200 || r.top > innerHeight + 200) return;
        const p = clamp(-r.top / span); if (Math.abs(p - last) < .0004) return; last = p; render(p);
      };
      const req = () => { if (!raf) raf = requestAnimationFrame(tick); };
      addEventListener('scroll', req, { passive: true }); addEventListener('resize', layout);
      if (window.ScrollTrigger) ScrollTrigger.addEventListener('refresh', layout);
      layout(); render(0);
    }
  }
  /* ---------- Frisch montiert: Pfeile ---------- */
  const fm = $('[data-fm]', root);
  if (fm) { const by = d => fm.scrollBy({ left: d * fm.clientWidth * .7, behavior: reduce ? 'auto' : 'smooth' }); const p = $('[data-fm-p]', root), n = $('[data-fm-n]', root); p && p.addEventListener('click', () => by(-1)); n && n.addEventListener('click', () => by(1)); }
  /* ---------- Vorher / Nachher ---------- */
  const ba = $('[data-ba]', root);
  if (ba) { const r = $('[data-ba-r]', ba); const set = () => ba.style.setProperty('--x', r.value + '%'); r.addEventListener('input', set); set(); }

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
  lb.innerHTML = '<div class="pgx-top"><span class="pgx-count" aria-live="polite"></span><button type="button" class="pgx-x" aria-label="Schließen (Esc)">✕</button></div><div class="pgx-stage"><img alt=""><button type="button" class="pgx-prev" aria-label="Vorheriges Bild">←</button><button type="button" class="pgx-next" aria-label="Nächstes Bild">→</button></div><div class="pgx-bar"><div class="pgx-txt"><b></b><p></p></div><div class="pgx-act"><a class="btn btn-copper sm" data-plan href="planer.html">Ähnlich planen</a><a class="btn btn-wa sm" data-wa target="_blank" rel="noopener" href="https://wa.me/4917656791796">So eine will ich</a></div></div>';
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
