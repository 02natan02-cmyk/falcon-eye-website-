/* Pellegrin Küchenstudio – Designentwurf von Falcon Eye */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement, reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const hasG = !!(window.gsap && window.ScrollTrigger); if (hasG) gsap.registerPlugin(ScrollTrigger);
  const page = root.dataset.page;
  const store = { get(k) { try { return sessionStorage.getItem(k) } catch (e) { return null } }, set(k, v) { try { sessionStorage.setItem(k, v) } catch (e) {} } };
  const TEL = '+4968519397460', MAIL = 'info@kueche-ruppenthal.de', WA = 'https://wa.me/4917656791796';
  const onView = (el, fn, margin = '300px') => { if (!el) return; let d = false; const go = () => { if (!d) { d = true; fn(); } }; const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { io.disconnect(); go(); } }, { rootMargin: margin }); io.observe(el); const chk = () => { if (d) return removeEventListener('scroll', chk); const r = el.getBoundingClientRect(); if (r.top < innerHeight + 300 && r.bottom > -300) go(); }; addEventListener('scroll', chk, { passive: true }); setTimeout(chk, 400); };
  const toast = t => { const d = document.createElement('div'); d.className = 'toast'; d.textContent = t; document.body.appendChild(d); setTimeout(() => d.remove(), 2600); };

  let lenis = null;
  if (hasG && window.Lenis && !reduce) { lenis = new Lenis({ lerp: .1 }); lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0); }

  /* ---------- Header ---------- */
  const hdr = $('.hdr'); let lastY = 0;
  const onScroll = () => { const y = scrollY; const hero = $('.hero'); hdr.classList.toggle('solid', !hero || y > hero.offsetHeight - 90); hdr.classList.toggle('hide', y > 700 && y > lastY + 2 && !root.classList.contains('menu-open') && page !== 'planer'); lastY = y; };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const burger = $('.burger');
  burger.addEventListener('click', () => { const o = root.classList.toggle('menu-open'); burger.setAttribute('aria-expanded', o); $('.mnav').setAttribute('aria-hidden', !o); lenis && (o ? lenis.stop() : lenis.start()); });
  $$('.mnav a').forEach(a => a.addEventListener('click', () => { root.classList.remove('menu-open'); lenis && lenis.start(); }));

  /* ---------- Öffnungszeiten ---------- */
  const HRS = { 1: [600, 1080], 2: [600, 1080], 3: [600, 840], 4: [600, 1080], 5: [600, 1080], 6: [540, 720] };
  const DN = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
  const fmt = m => `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}`.replace(':00', '');
  const berlin = () => { const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Berlin', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date()).map(x => [x.type, x.value])); return { d: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(p.weekday), m: (+p.hour % 24) * 60 + +p.minute }; };
  const hours = () => {
    const { d, m } = berlin(), h = HRS[d], open = h && m >= h[0] && m < h[1];
    let txt; if (open) txt = `Jetzt geöffnet · bis ${fmt(h[1])} Uhr`; else { let k = 0; if (!(h && m < h[0])) { do { k++; } while (!HRS[(d + k) % 7]); } const nd = (d + k) % 7; txt = `Geschlossen · öffnet ${k === 0 ? 'heute' : k === 1 ? 'morgen' : DN[nd]} um ${fmt(HRS[nd][0])} Uhr`; }
    $$('[data-status]').forEach(s => { s.classList.toggle('open', !!open); s.classList.toggle('closed', !open); s.querySelector('b').textContent = open ? 'Jetzt geöffnet' : 'Geschlossen'; });
    $$('[data-countdown]').forEach(c => c.textContent = txt);
    const hb = $('[data-hours]'); if (hb) hb.innerHTML = [1, 2, 3, 4, 5, 6, 0].map(i => `<div class="${i === d ? 'today' : ''}"><span>${DN[i]}</span><span>${HRS[i] ? fmt(HRS[i][0]) + '–' + fmt(HRS[i][1]) + ' Uhr' : 'nach Vereinbarung'}</span></div>`).join('') + `<div><span>${txt}</span><span></span></div>`;
  };
  hours(); setInterval(hours, 30000);

  /* ---------- Videos ---------- */
  $$('video[data-src]').forEach(v => { v.muted = true; onView(v, () => { v.src = v.dataset.src; const p = v.play(); p && p.catch(() => {}); }); });

  /* =====================================================================
     INTRO: alte Ruppenthal-Seite – Schutzfolie abziehen – Pellegrin
     ===================================================================== */
  const intro = $('.intro');
  const heroIn = () => { if (!hasG || reduce) return; gsap.from('.hero-c > *', { y: 40, opacity: 0, duration: 1.2, ease: 'power3.out', stagger: .1 }); };
  if (intro) {
    const force = /[?&]intro/.test(location.search);
    if (!hasG || reduce || (store.get('pel-intro') && !force)) { intro.classList.add('gone'); heroIn(); }
    else {
      store.set('pel-intro', '1'); lenis && lenis.stop(); root.style.overflow = 'hidden';
      const old = $('.old', intro), flap = $('.peel-flap', intro), hint = $('.intro-hint', intro);
      let W = innerWidth, H = innerHeight; addEventListener('resize', () => { W = innerWidth; H = innerHeight; setD(d); });
      // Halbebene x - y > c  (c = W - d) ist abgezogen
      const clipPoly = (c, keepPeeled) => { const pts = [[0, 0], [W, 0], [W, H], [0, H]], out = []; const inside = p => keepPeeled ? (p[0] - p[1] > c) : (p[0] - p[1] <= c);
        for (let i = 0; i < 4; i++) { const a = pts[i], b = pts[(i + 1) % 4]; const ia = inside(a), ib = inside(b); if (ia) out.push(a); if (ia !== ib) { const fa = a[0] - a[1] - c, fb = b[0] - b[1] - c, t = fa / (fa - fb); out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]); } } return out; };
      let d = 0;
      const setD = v => { d = v; const c = W - d; const keep = clipPoly(c, false), peel = clipPoly(c, true);
        old.style.clipPath = keep.length ? `polygon(${keep.map(p => `${p[0]}px ${p[1]}px`).join(',')})` : 'polygon(0 0,0 0,0 0)';
        const refl = peel.map(([x, y]) => [y + c, x - c]); flap.style.clipPath = refl.length > 2 ? `polygon(${refl.map(p => `${p[0]}px ${p[1]}px`).join(',')})` : 'polygon(0 0,0 0,0 0)';
        old.querySelector('.peel-shade').style.setProperty('--so', Math.min(1, d / 300)); };
      setD(0);
      let auto = null, done = false, dragging = false;
      const finish = () => { if (done) return; done = true; hint && hint.remove(); old.style.display = 'none'; flap.style.display = 'none'; const L = $('.intro-logo', intro);
        const tl = gsap.timeline();
        tl.to(L, { opacity: 1, y: 0, duration: .8, ease: 'power3.out' })
          .to(L.querySelectorAll('.pm-box,.pm-stem'), { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut' }, 0)
          .from(L.querySelectorAll('.pm-ring,.pm-ring2'), { scale: 0, transformOrigin: '50% 50%', transformBox: 'fill-box', duration: .7, ease: 'back.out(2.2)', stagger: .12 }, .5)
          .to('.intro-line.l1', { opacity: 1, duration: .6 }, .9)
          .to('.intro-line.l2', { opacity: 1, duration: .1 }, 1.5)
          .to('.intro-line.l2 span', { opacity: 1, y: 0, duration: .55, stagger: .35, ease: 'power2.out' }, 1.5)
          .to(intro, { opacity: 0, duration: .7, delay: .9, onComplete: () => { intro.classList.add('gone'); } })
          .add(() => { root.style.overflow = ''; lenis && lenis.start(); heroIn(); }, '-=.5');
      };
      const animTo = (to, dur) => { const o = { v: d }; auto = gsap.to(o, { v: to, duration: dur, ease: 'power2.inOut', onUpdate: () => setD(o.v), onComplete: () => { if (to >= W + H) finish(); } }); };
      const startAuto = () => { if (dragging || done) return; animTo(W + H + 40, 2.9); };
      gsap.timeline().to({}, { duration: .5 }).add(() => { const o = { v: 0 }; gsap.to(o, { v: 70, duration: .5, ease: 'power2.out', onUpdate: () => { if (!dragging) setD(o.v); } }); });
      const t1 = setTimeout(startAuto, 2200);
      intro.addEventListener('pointerdown', e => { if (e.target.closest('.intro-skip')) return; dragging = true; clearTimeout(t1); auto && auto.kill(); intro.setPointerCapture(e.pointerId); });
      intro.addEventListener('pointermove', e => { if (!dragging || done) return; setD(Math.max(d, (W - e.clientX) + e.clientY)); });
      intro.addEventListener('pointerup', () => { if (!dragging) return; dragging = false; animTo(W + H + 40, Math.max(.5, 1.3 * (1 - d / (W + H)))); });
      $('.intro-skip', intro).addEventListener('click', () => { clearTimeout(t1); auto && auto.kill(); setD(W + H + 40); finish(); });
      setTimeout(() => { if (!intro.classList.contains('gone')) { root.style.overflow = ''; lenis && lenis.start(); } }, 14000);
    }
  } else heroIn();

  /* ---------- Story: Logo-Morph + Zeitleiste ---------- */
  const morph = $('[data-morph]');
  if (morph && hasG) {
    gsap.fromTo(morph, { '--m': '100%' }, { '--m': '0%', ease: 'none', scrollTrigger: { trigger: morph, start: 'top 80%', end: 'bottom 35%', scrub: true } });
    gsap.from('.polaroid', { rotate: 6, y: 60, opacity: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.polaroid', start: 'top 90%' } });
    $$('.tl li').forEach((li, i) => gsap.from(li, { x: -20, opacity: 0, duration: .8, delay: i * .12, scrollTrigger: { trigger: '.tl', start: 'top 85%' } }));
  } else if (morph) morph.style.setProperty('--m', '0%');

  /* ---------- Reveals ---------- */
  if (hasG && !reduce) {
    $$('.sec-head, .kc, .mk-c, .termin, .mo-vid, .pt-3d').forEach(el => gsap.from(el, { y: 36, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } }));
    $$('.h2').forEach(h => gsap.from(h, { clipPath: 'inset(0 0 100% 0)', y: 20, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: h, start: 'top 92%', once: true } }));
  }

  /* ---------- Küchen: Filter + Lightbox ---------- */
  const grid = $('.k-grid');
  if (grid) {
    $$('.filters button').forEach(b => b.addEventListener('click', () => { $$('.filters button').forEach(x => x.classList.toggle('on', x === b)); const f = b.dataset.f; $$('.kc', grid).forEach(k => k.classList.toggle('hide', f !== '*' && !k.dataset.tags.includes(f))); hasG && ScrollTrigger.refresh(); }));
    const lb = document.createElement('div'); lb.className = 'lbx'; lb.hidden = true; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true');
    lb.innerHTML = '<button class="lbx-x" aria-label="Schließen">×</button><div class="lbx-img"><img alt=""></div><div class="lbx-bar"><button data-p aria-label="Vorheriges Bild">←</button><div><b></b><p class="small" style="color:#cfc6ba;margin:4px 0 0"></p></div><a class="btn btn-copper sm" href="#">Ähnlich planen</a><button data-n aria-label="Nächstes Bild">→</button></div>';
    document.body.appendChild(lb);
    const cards = $$('.kc', grid); let ci = 0, ii = 0;
    const show = () => { const c = cards[ci], n = +c.dataset.n; $('img', lb).src = `img/k/${c.dataset.k}_${ii}.webp`; $('img', lb).alt = $('b', c).textContent; $('b', lb).textContent = $('b', c).textContent + (n > 1 ? ` · ${ii + 1}/${n}` : ''); $('p', lb).textContent = $('span', c).textContent; $('a', lb).href = $('.kc-plan', c).getAttribute('href'); };
    const vis = () => cards.filter(c => !c.classList.contains('hide'));
    const step = dir => { const c = cards[ci], n = +c.dataset.n; if (ii + dir >= 0 && ii + dir < n) ii += dir; else { const v = vis(), k = (v.indexOf(c) + dir + v.length) % v.length; ci = cards.indexOf(v[k]); ii = dir > 0 ? 0 : +v[k].dataset.n - 1; } show(); };
    const open = i => { ci = i; ii = 0; show(); lb.hidden = false; lenis && lenis.stop(); };
    const close = () => { lb.hidden = true; lenis && lenis.start(); };
    cards.forEach((c, i) => { c.addEventListener('click', e => { if (e.target.closest('.kc-plan')) return; open(i); }); c.addEventListener('keydown', e => { if (e.key === 'Enter') open(i); }); });
    $('.lbx-x', lb).addEventListener('click', close); $('[data-p]', lb).addEventListener('click', () => step(-1)); $('[data-n]', lb).addEventListener('click', () => step(1));
    lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lbx-img')) close(); });
    addEventListener('keydown', e => { if (lb.hidden) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1); });
    let sx = 0; lb.addEventListener('touchstart', e => sx = e.touches[0].clientX, { passive: true }); lb.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1); });
  }

  /* ---------- 3D laden ---------- */
  let k3p = null; const load3d = () => k3p || (k3p = new Promise((res, rej) => { if (window.PelKitchen) return res(); const s = document.createElement('script'); s.src = 'js/kitchen3d.js'; s.onload = res; s.onerror = rej; document.head.appendChild(s); }));
  const BASE = { shape: 'insel', a: 460, b: 300, c: 300, front: '#2b2c2e', finish: 'matt', worktop: 'eiche', handle: 'grifflos', tall: true, wallCab: true, hood: 'bora' };

  /* ---------- Planer-Teaser ---------- */
  const tz = $('[data-teaser3d]');
  if (tz) onView(tz, () => load3d().then(() => { $('.pt-load', tz).remove(); const k = PelKitchen(tz, { autoRotate: true }); const cfg = { ...BASE }; k.set(cfg);
    $$('.pt-sw button', tz).forEach(b => b.addEventListener('click', () => { $$('.pt-sw button', tz).forEach(x => x.classList.toggle('on', x === b)); cfg.front = b.dataset.c; k.set(cfg); })); }).catch(() => { $('.pt-load', tz).textContent = '3D-Vorschau nicht verfügbar – im Planer geht es trotzdem.'; }), '600px');

  /* ---------- Ablauf ---------- */
  const stp = $('[data-steps]');
  if (stp && hasG) { const lis = $$('li', stp); ScrollTrigger.create({ trigger: stp, start: 'top 75%', end: 'bottom 55%', scrub: true, onUpdate: s => { stp.style.setProperty('--p', s.progress); lis.forEach((l, i) => l.classList.toggle('on', s.progress >= i / lis.length + .02)); } }); }

  /* ---------- Marken ---------- */
  const mk = $('[data-mk]'); if (mk) mk.addEventListener('input', () => $$('.mk-c').forEach(c => c.classList.toggle('on', +c.dataset.i === +mk.value)));

  /* ---------- Termin ---------- */
  const tf = $('[data-termin]');
  if (tf) {
    const days = $('[data-days]', tf), list = []; const now = new Date(); for (let k = 1; list.length < 6 && k < 14; k++) { const d = new Date(now); d.setDate(now.getDate() + k); if (d.getDay() !== 0) list.push(d); }
    days.innerHTML = list.map((d, i) => `<button type="button" class="${i === 0 ? 'on' : ''}" data-d="${d.toISOString().slice(0, 10)}"><span>${d.toLocaleDateString('de-DE', { weekday: 'short' })}</span><b>${d.getDate()}.</b><span>${d.toLocaleDateString('de-DE', { month: 'short' })}</span></button>`).join('');
    $$('button', days).forEach(b => b.addEventListener('click', () => $$('button', days).forEach(x => x.classList.toggle('on', x === b))));
    $$('[data-slot] button', tf).forEach(b => b.addEventListener('click', () => $$('[data-slot] button', tf).forEach(x => x.classList.toggle('on', x === b))));
    let via = 'mail'; $$('[data-via]', tf).forEach(b => b.addEventListener('click', () => via = b.dataset.via));
    tf.addEventListener('submit', e => { e.preventDefault(); const d = new Date($('[data-days] .on', tf).dataset.d + 'T12:00').toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' }); const slot = $('[data-slot] .on', tf).dataset.v, what = $('[data-what]', tf).value, name = $('[data-name]', tf).value.trim();
      const txt = `Hallo Herr Pellegrin,\n\nich würde gern einen Beratungstermin vereinbaren.\nWunschtermin: ${d}, ${slot}\nThema: ${what}\n\nViele Grüße\n${name || ''}`;
      if (via === 'wa') window.open(WA + '?text=' + encodeURIComponent(txt), '_blank'); else location.href = `mailto:${MAIL}?subject=${encodeURIComponent('Terminanfrage: ' + what)}&body=${encodeURIComponent(txt)}`; });
  }

  /* =====================================================================
     PLANER
     ===================================================================== */
  if (page === 'planer') {
    const st = { ...BASE, frontWood: null, extras: [], line: 'Nolte' };
    const NAMES = { zeile: 'Küchenzeile', zwei: 'Zweizeilig', l: 'L-Form', u: 'U-Form', insel: 'Mit Kochinsel', theke: 'L-Form mit Theke' };
    const TOPN = { eiche: 'Eiche', nuss: 'Nussbaum', beton: 'Beton', marmor: 'Marmor schwarz', keramik: 'Keramik hell', schwarz: 'Schwarz' };
    const HN = { grifflos: 'grifflos', bar: 'Edelstahlgriffe', schwarz: 'schwarze Griffe', gold: 'Messinggriffe' };
    const frontName = () => { const b = $$('[data-front]').find(x => x.classList.contains('on')); return b ? b.getAttribute('aria-label') : st.front; };
    // aus Link (#shape|front|finish|top|handle|wood|a|b|c|...)
    const fromHash = () => { const h = decodeURIComponent(location.hash.slice(1)); if (!h) return; const p = h.split('|'); const [sh, fr, fi, tp, hd, wd, a, b, c, tall, wall, hood, line] = p; if (NAMES[sh]) st.shape = sh; if (/^[0-9a-f]{6}$/i.test(fr)) st.front = '#' + fr; if (fi) st.finish = fi; if (TOPN[tp]) st.worktop = tp; if (HN[hd]) st.handle = hd; if (wd === 'eiche' || wd === 'nuss') st.frontWood = wd; if (+a) st.a = +a; if (+b) st.b = +b; if (+c) st.c = +c; if (tall) st.tall = tall === '1'; if (wall) st.wallCab = wall === '1'; if (hood) st.hood = hood; if (line) st.line = line; };
    const toHash = () => [st.shape, st.front.replace('#', ''), st.finish, st.worktop, st.handle, st.frontWood || '', st.a, st.b, st.c, st.tall ? 1 : 0, st.wallCab ? 1 : 0, st.hood, st.line].join('|');
    fromHash(); addEventListener('hashchange', () => { fromHash(); upd(); });
    // UI synchronisieren
    const sync = () => {
      $$('[data-shape]').forEach(b => b.classList.toggle('on', b.dataset.shape === st.shape));
      $$('[data-front]').forEach(b => b.classList.toggle('on', st.frontWood ? b.dataset.front === 'wood:' + st.frontWood : b.dataset.front.toLowerCase() === st.front.toLowerCase()));
      $$('[data-top]').forEach(b => b.classList.toggle('on', b.dataset.top === st.worktop));
      [['finish', st.finish], ['handle', st.handle], ['hood', st.hood], ['line', st.line]].forEach(([k, v]) => $$(`[data-${k}] button`).forEach(b => b.classList.toggle('on', b.dataset.v === v)));
      $('[data-opt="tall"]').checked = st.tall; $('[data-opt="wallCab"]').checked = st.wallCab;
      const need = { zeile: ['a'], zwei: ['a', 'b'], l: ['a', 'b'], u: ['a', 'b', 'c'], insel: ['a', 'b'], theke: ['a', 'b'] }[st.shape];
      $$('[data-dim]').forEach(l => { const k = l.dataset.dim; l.classList.toggle('off', !need.includes(k)); $('input', l).value = st[k]; $('b', l).textContent = st[k] + ' cm'; $('span', l).textContent = { a: 'Wand A (Fensterwand)', b: st.shape === 'zwei' ? 'Zweite Zeile' : st.shape === 'insel' ? 'Raumtiefe' : 'Wand B (links)', c: 'Wand C (rechts)' }[k]; });
      plan2d(); summary(); history.replaceState(null, '', '#' + toHash());
    };
    const plan2d = () => { const el = $('[data-2d]'); const s = 220 / Math.max(st.a, st.b + 60, 400), A = st.a * s, B = st.b * s, C = st.c * s, D = 60 * s; const r = (x, y, w, h, c = '#c0673f') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${c}" fill-opacity=".85"/>`; let g = r(10, 10, A, D);
      if (['l', 'u', 'theke'].includes(st.shape)) g += r(10, 10 + D, D, B - D); if (st.shape === 'u') g += r(10 + A - D, 10 + D, D, C - D); if (st.shape === 'zwei') g += r(10, 10 + D + 120 * s, B, D); if (st.shape === 'insel') { const IL = Math.max(160, Math.min(st.a - 80, st.b)) * s; g += r(10 + (A - IL) / 2, 10 + D + 115 * s, IL, 100 * s, '#1c1a17'); } if (st.shape === 'theke') g += r(10 + D + 90 * s, 10 + D + 115 * s, Math.max(140, Math.min(st.a - 120, 240)) * s, 62 * s, '#1c1a17');
      const t = (x, y, s2) => `<text x="${x}" y="${y}" font-size="11" fill="#6b6359" font-family="DM Sans">${s2}</text>`;
      el.innerHTML = `<svg viewBox="0 0 ${Math.max(A + 30, 260)} ${Math.max(B, C) + 40}" aria-hidden="true"><rect x="10" y="10" width="${A}" height="${Math.max(B, C, 120 * s + D * 2) + 10}" fill="none" stroke="#d6ccbe" stroke-dasharray="4 4"/>${g}${t(10 + A / 2 - 16, 8, 'A ' + st.a)}${['l', 'u', 'theke', 'zwei', 'insel'].includes(st.shape) ? t(14 + D, 10 + Math.max(B, 60) - 4, (st.shape === 'insel' ? 'Tiefe ' : 'B ') + st.b) : ''}</svg>`; };
    const summary = () => { const s = $('[data-sum]'); s.innerHTML = [NAMES[st.shape], st.a + ' cm', (st.frontWood ? (st.frontWood === 'eiche' ? 'Eiche' : 'Nussbaum') : frontName()) + ' ' + st.finish, 'Platte ' + TOPN[st.worktop], HN[st.handle], st.line].map(x => `<span>${x}</span>`).join(''); };
    let K = null; const upd = () => { sync(); if (K) K.set({ ...st }); };
    load3d().then(() => { const host = $('[data-3d]'); $('.pt-load', host).remove(); K = PelKitchen(host, { autoRotate: true, onInteract: () => $('[data-spin]').classList.remove('on') }); K.set({ ...st }); }).catch(() => { $('[data-3d] .pt-load').textContent = '3D-Ansicht konnte nicht geladen werden. Sie können trotzdem planen und senden.'; });
    $$('[data-shape]').forEach(b => b.addEventListener('click', () => { st.shape = b.dataset.shape; upd(); }));
    $$('[data-dim] input').forEach(i => i.addEventListener('input', () => { st[i.closest('[data-dim]').dataset.dim] = +i.value; upd(); }));
    $$('[data-front]').forEach(b => b.addEventListener('click', () => { const v = b.dataset.front; if (v.startsWith('wood:')) { st.frontWood = v.slice(5); st.front = '#8a6a4a'; } else { st.frontWood = null; st.front = v; } upd(); }));
    $$('[data-top]').forEach(b => b.addEventListener('click', () => { st.worktop = b.dataset.top; upd(); }));
    ['finish', 'handle', 'hood', 'line'].forEach(k => $$(`[data-${k}] button`).forEach(b => b.addEventListener('click', () => { st[k] = b.dataset.v; upd(); })));
    $$('[data-opt]').forEach(c => c.addEventListener('change', () => { st[c.dataset.opt] = c.checked; upd(); }));
    $$('[data-extras] button').forEach(b => b.addEventListener('click', () => { b.classList.toggle('on'); st.extras = $$('[data-extras] button.on').map(x => x.textContent); }));
    $$('[data-view]').forEach(b => b.addEventListener('click', () => { K && K.view(b.dataset.view); $('[data-spin]').classList.remove('on'); }));
    $('[data-spin]').addEventListener('click', e => { const on = e.currentTarget.classList.toggle('on'); K && K.spin(on); });
    // Schritte
    let cur = 0; const go = i => { cur = Math.max(0, Math.min(4, i)); $$('.pl-s').forEach(s => s.classList.toggle('on', +s.dataset.s === cur)); $$('[data-step]').forEach(b => { b.classList.toggle('on', +b.dataset.step === cur); b.classList.toggle('done', +b.dataset.step < cur); }); $('[data-prev]').style.visibility = cur ? 'visible' : 'hidden'; $('[data-next]').style.display = cur === 4 ? 'none' : ''; if (innerWidth < 900) { const p = $('.pl-panel'); window.scrollTo({ top: p.offsetTop - 62 - innerHeight * .46 + 10, behavior: 'smooth' }); } };
    $$('[data-step]').forEach(b => b.addEventListener('click', () => go(+b.dataset.step))); $('[data-prev]').addEventListener('click', () => go(cur - 1)); $('[data-next]').addEventListener('click', () => go(cur + 1)); go(0);
    // Senden
    const text = () => { const name = $('[data-p-name]').value.trim(), tel = $('[data-p-tel]').value.trim(), when = $('[data-p-when]').value; const link = location.href.split('#')[0] + '#' + toHash();
      return `Hallo Herr Pellegrin,\n\nich habe im Online-Planer eine Küche entworfen:\n\n• Form: ${NAMES[st.shape]} (Wand A ${st.a} cm${st.shape !== 'zeile' ? `, ${st.shape === 'insel' ? 'Raumtiefe' : 'B'} ${st.b} cm` : ''}${st.shape === 'u' ? `, C ${st.c} cm` : ''})\n• Fronten: ${st.frontWood ? (st.frontWood === 'eiche' ? 'Eiche' : 'Nussbaum') : frontName()}, ${st.finish}, ${HN[st.handle]}\n• Arbeitsplatte: ${TOPN[st.worktop]}\n• Hochschränke: ${st.tall ? 'ja' : 'nein'} · Hängeschränke: ${st.wallCab ? 'ja' : 'nein'}\n• Dunstabzug: ${st.hood === 'bora' ? 'im Kochfeld' : 'Wandhaube'}\n• Wünsche: ${st.extras.join(', ') || '—'}\n• Ausstattungslinie: ${st.line}\n• Zeitpunkt: ${when}\n\nMein Entwurf zum Ansehen: ${link}\n\nViele Grüße\n${name}${tel ? '\nTel. ' + tel : ''}`; };
    $$('[data-send]').forEach(b => b.addEventListener('click', async () => { const m = b.dataset.send;
      if (m === 'mail') location.href = `mailto:${MAIL}?subject=${encodeURIComponent('Mein Küchenentwurf – ' + NAMES[st.shape])}&body=${encodeURIComponent(text())}`;
      if (m === 'wa') window.open(WA + '?text=' + encodeURIComponent(text()), '_blank');
      if (m === 'img') { if (!K) return toast('3D-Ansicht nicht verfügbar'); const a = document.createElement('a'); a.href = K.snapshot(); a.download = 'meine-kueche-pellegrin.jpg'; document.body.appendChild(a); a.click(); a.remove(); toast('Bild gespeichert'); }
      if (m === 'link') { const l = location.href.split('#')[0] + '#' + toHash(); try { await navigator.clipboard.writeText(l); toast('Link kopiert'); } catch (e) { prompt('Link zu Ihrem Entwurf:', l); } } }));
    sync();
  }

  /* ---------- Anker ---------- */
  $$('a[href^="#"], a[href^="index.html#"]').forEach(a => a.addEventListener('click', e => { const h = a.getAttribute('href').replace('index.html', ''); if (page !== 'home' && a.getAttribute('href').startsWith('index.html')) return; const t = h.length > 1 && $(h); if (!t) return; e.preventDefault(); lenis ? lenis.scrollTo(t, { offset: -70 }) : t.scrollIntoView({ behavior: 'smooth' }); }));
  if (page === 'home' && location.hash && $(location.hash)) setTimeout(() => lenis ? lenis.scrollTo($(location.hash), { offset: -70, immediate: true }) : null, 600);

  if (hasG) { ScrollTrigger.refresh(); addEventListener('load', () => ScrollTrigger.refresh()); }
})();
