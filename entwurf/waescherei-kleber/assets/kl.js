/* Wäscherei Kleber – Entwurf 2 · Waschmaschine mit Physik, Waschstraße, Sockenspiel, Heißmangel, Lamellen, Kleiderstange, Wäschezettel */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v)), lerp = (a, b, t) => a + (b - a) * t;
  const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
  const sget = k => { try { return sessionStorage.getItem(k); } catch (e) { return null; } }, sset = (k, v) => { try { sessionStorage.setItem(k, v); } catch (e) {} };
  const inView = (el, cb, m = '150px') => { if (!el) return; new IntersectionObserver(([e]) => cb(e.isIntersecting), { rootMargin: m }).observe(el); };
  const toastEl = $('[data-toast]'); let tt;
  const toast = (m, ms = 3200) => { if (!toastEl) return; toastEl.textContent = m; toastEl.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => toastEl.classList.remove('on'), ms); };
  const DPR = Math.min(2, window.devicePixelRatio || 1);

  /* ---------------- Intro ---------------- */
  const intro = $('[data-intro]');
  const ready = () => { document.body.classList.remove('is-loading'); document.dispatchEvent(new Event('kl-ready')); };
  if (intro) {
    if (RM || sget('kl-intro')) { intro.remove(); ready(); }
    else {
      requestAnimationFrame(() => requestAnimationFrame(() => intro.classList.add('go')));
      const end = () => { if (intro.classList.contains('out')) return; intro.classList.add('out'); ready(); sset('kl-intro', 1); setTimeout(() => intro.remove(), 900); };
      setTimeout(end, 2300); intro.addEventListener('click', end);
    }
  } else ready();

  /* ---------------- Header / Menü ---------------- */
  const hdr = $('[data-hdr]'), burger = $('[data-burger]'), mnav = $('[data-mnav]'); let ly = 0;
  const onS = () => { const y = scrollY; if (!hdr) return; hdr.classList.toggle('scrolled', y > 30); hdr.classList.toggle('hide', y > 600 && y > ly + 4 && !(mnav && !mnav.hidden)); if (y < ly - 4) hdr.classList.remove('hide'); ly = y; };
  addEventListener('scroll', onS, { passive: true }); onS();
  if (burger && mnav) { burger.addEventListener('click', () => { const o = mnav.hidden; mnav.hidden = !o; burger.setAttribute('aria-expanded', o); }); $$('a', mnav).forEach(a => a.addEventListener('click', () => { mnav.hidden = true; burger.setAttribute('aria-expanded', false); })); }

  /* ---------------- Öffnungszeiten live ---------------- */
  const H = (window.KL || {}).hours || [];
  const DN = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'], DS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
  function berlin() { const p = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Berlin', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date()); const g = k => (p.find(x => x.type === k) || {}).value; return { d: { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 }[g('weekday')], m: (+g('hour') % 24) * 60 + +g('minute') }; }
  const mins = s => { const [h, m] = s.split(':'); return +h * 60 + +m; };
  function status() {
    const { d, m } = berlin(), h = H[d]; let open = false, sub = '';
    if (h && m >= mins(h[0]) && m < mins(h[1])) { open = true; sub = 'bis ' + h[1] + ' Uhr'; }
    else {
      for (let i = 0; i < 8; i++) { const dd = (d + i) % 7, hh = H[dd]; if (!hh) continue; if (i === 0 && m >= mins(hh[0])) continue; sub = 'öffnet ' + (i === 0 ? 'heute' : i === 1 ? 'morgen' : DS[dd]) + ' ' + hh[0]; break; }
    }
    const ds = $('[data-doorsign]'); if (ds) { ds.classList.toggle('open', open); ds.classList.toggle('closed', !open); $('[data-dsb]').textContent = open ? 'Geöffnet' : 'Geschlossen'; $('[data-dss]').textContent = sub; }
    const d2 = $('[data-door2]'); if (d2) { const was = d2.classList.contains('open'); d2.classList.toggle('open', open); d2.classList.toggle('closed', !open); $('[data-ds2b]').textContent = open ? 'Geöffnet' : 'Geschlossen'; $('[data-ds2s]').textContent = sub; if (was !== open) { d2.classList.remove('flip'); void d2.offsetWidth; d2.classList.add('flip'); } }
    const todayIdx = (d + 1) % 7; $$('[data-hours] li').forEach(li => li.classList.toggle('today', +li.dataset.day === todayIdx));
  }
  status(); setInterval(status, 60000);

  /* ---------------- Programm-Drehknopf ---------------- */
  const dialEl = $('[data-dial]');
  if (dialEl) {
    const stops = $$('[data-dst]', dialEl), knob = $('[data-dialknob]', dialEl);
    const secs = stops.map(a => $(a.getAttribute('href')));
    const upd = () => {
      dialEl.classList.toggle('on', scrollY > innerHeight * .6);
      let k = 0; secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * .45) k = i; });
      stops.forEach((a, i) => a.classList.toggle('on', i === k)); knob.style.setProperty('--k', stops[k].style.getPropertyValue('--a')); $('[data-dialt]').textContent = stops[k].dataset.t;
      $$('.nav a').forEach(a => a.classList.toggle('on', a.getAttribute('href') === stops[k].getAttribute('href')));
    };
    addEventListener('scroll', upd, { passive: true }); upd();
  }

  /* ---------------- Zähler ---------------- */
  $$('[data-count]').forEach(el => inView(el, v => { if (!v || el._done) return; el._done = 1; const n = +el.dataset.count; let t0; const st = ts => { if (!t0) t0 = ts; const k = clamp((ts - t0) / 1400, 0, 1); el.textContent = Math.round(n * ease(k)); if (k < 1) requestAnimationFrame(st); }; requestAnimationFrame(st); }, '0px'));

  /* ================= Seifenblasen im Hero ================= */
  const hero = $('[data-hero]'), bcv = $('[data-bubbles]');
  if (hero && bcv) {
    const x = bcv.getContext('2d'); let W, Hh, bs = [], vis = true, pops = [];
    const rs = () => { W = hero.clientWidth; Hh = hero.clientHeight; bcv.width = W * DPR; bcv.height = Hh * DPR; x.setTransform(DPR, 0, 0, DPR, 0, 0); };
    rs(); addEventListener('resize', rs); inView(hero, v => vis = v, '0px');
    const mk = (y) => ({ x: Math.random() * W, y: y ?? Hh + 30, r: 6 + Math.random() * 22, v: .3 + Math.random() * .7, ph: Math.random() * 6.28, h: Math.random() * 360 });
    for (let i = 0; i < (innerWidth < 700 ? 10 : 20); i++) bs.push(mk(Math.random() * Hh));
    hero.addEventListener('pointerdown', e => { const r = hero.getBoundingClientRect(), px = e.clientX - r.left, py = e.clientY - r.top; bs = bs.filter(b => { if (Math.hypot(b.x - px, b.y - py) < b.r + 6) { for (let i = 0; i < 10; i++) pops.push({ x: b.x, y: b.y, vx: Math.cos(i / 10 * 6.28) * 2.4, vy: Math.sin(i / 10 * 6.28) * 2.4, a: 1 }); return false; } return true; }); });
    const loop = () => {
      if (vis && !RM) {
        x.clearRect(0, 0, W, Hh);
        while (bs.length < (innerWidth < 700 ? 10 : 20)) bs.push(mk());
        for (const b of bs) {
          b.y -= b.v; b.ph += .02; b.x += Math.sin(b.ph) * .4; if (b.y < -40) Object.assign(b, mk());
          const g = x.createRadialGradient(b.x - b.r * .3, b.y - b.r * .3, b.r * .1, b.x, b.y, b.r);
          g.addColorStop(0, 'rgba(255,255,255,.55)'); g.addColorStop(.7, `hsla(${b.h + b.ph * 40},90%,80%,.10)`); g.addColorStop(.92, `hsla(${b.h + 120 + b.ph * 40},90%,70%,.35)`); g.addColorStop(1, 'rgba(255,255,255,0)');
          x.fillStyle = g; x.beginPath(); x.arc(b.x, b.y, b.r, 0, 6.28); x.fill();
          x.strokeStyle = 'rgba(21,70,168,.12)'; x.lineWidth = 1; x.stroke();
        }
        pops = pops.filter(p => (p.a -= .05) > 0); for (const p of pops) { p.x += p.vx; p.y += p.vy; x.fillStyle = `rgba(42,99,212,${p.a * .6})`; x.fillRect(p.x, p.y, 2.4, 2.4); }
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  /* ================= Sprites (Wäsche, Socken) ================= */
  const PAL = ['#e63946', '#1d6fd8', '#ffd23f', '#2a9d8f', '#f4a261', '#9b5de5', '#ffffff', '#06d6a0', '#ef476f', '#264653'];
  function cnv(w, h) { const c = document.createElement('canvas'); c.width = Math.ceil(w * DPR); c.height = Math.ceil(h * DPR); const x = c.getContext('2d'); x.scale(DPR, DPR); return [c, x]; }
  function shade(x, w, h) { const g = x.createLinearGradient(0, 0, w, h); g.addColorStop(0, 'rgba(255,255,255,.25)'); g.addColorStop(.5, 'rgba(255,255,255,0)'); g.addColorStop(1, 'rgba(0,0,0,.22)'); x.fillStyle = g; x.fill(); }
  const SP = {
    shirt(w, h, col) { const [c, x] = cnv(w, h); x.beginPath(); x.moveTo(w * .3, 0); x.lineTo(w * .7, 0); x.lineTo(w, h * .2); x.lineTo(w * .86, h * .38); x.lineTo(w * .78, h * .3); x.lineTo(w * .78, h); x.lineTo(w * .22, h); x.lineTo(w * .22, h * .3); x.lineTo(w * .14, h * .38); x.lineTo(0, h * .2); x.closePath(); x.fillStyle = col; x.fill(); shade(x, w, h); x.fillStyle = 'rgba(0,0,0,.18)'; x.beginPath(); x.ellipse(w / 2, 0, w * .13, h * .1, 0, 0, Math.PI); x.fill(); x.strokeStyle = 'rgba(0,0,0,.15)'; x.lineWidth = 1; x.beginPath(); x.moveTo(w * .4, h * .5); x.quadraticCurveTo(w * .5, h * .62, w * .62, h * .48); x.stroke(); return c; },
    towel(w, h, col) { const [c, x] = cnv(w, h); x.beginPath(); x.roundRect ? x.roundRect(0, 0, w, h, 6) : x.rect(0, 0, w, h); x.fillStyle = col; x.fill(); x.fillStyle = 'rgba(255,255,255,.7)'; x.fillRect(w * .08, 0, w * .06, h); x.fillRect(w * .86, 0, w * .06, h); for (let i = 0; i < 90; i++) { x.fillStyle = `rgba(0,0,0,${Math.random() * .08})`; x.fillRect(Math.random() * w, Math.random() * h, 2, 2); } x.beginPath(); x.rect(0, 0, w, h); shade(x, w, h); return c; },
    sheet(w, h) { const [c, x] = cnv(w, h); x.fillStyle = '#fbfcff'; x.fillRect(0, 0, w, h); x.fillStyle = '#9cc0ff'; for (let i = 0; i < w; i += 14) x.fillRect(i, 0, 4, h); x.strokeStyle = 'rgba(0,0,0,.12)'; x.lineWidth = 1.2; for (let i = 0; i < 4; i++) { x.beginPath(); x.moveTo(0, Math.random() * h); x.bezierCurveTo(w * .3, Math.random() * h, w * .6, Math.random() * h, w, Math.random() * h); x.stroke(); } x.beginPath(); x.rect(0, 0, w, h); shade(x, w, h); return c; },
    duck(w) { const [c, x] = cnv(w, w); x.fillStyle = '#ffd23f'; x.beginPath(); x.ellipse(w * .5, w * .62, w * .42, w * .3, 0, 0, 6.28); x.fill(); x.beginPath(); x.arc(w * .62, w * .32, w * .22, 0, 6.28); x.fill(); x.fillStyle = '#ff8c1a'; x.beginPath(); x.moveTo(w * .8, w * .3); x.lineTo(w * .98, w * .36); x.lineTo(w * .8, w * .42); x.fill(); x.fillStyle = '#111'; x.beginPath(); x.arc(w * .66, w * .27, w * .04, 0, 6.28); x.fill(); x.beginPath(); x.ellipse(w * .5, w * .62, w * .42, w * .3, 0, 0, 6.28); shade(x, w, w); return c; },
  };
  // Socken: Muster
  const SOCKS = [
    { b: '#e63946', p: 'stripe', c2: '#ffffff' }, { b: '#1d6fd8', p: 'dots', c2: '#ffffff' }, { b: '#ffd23f', p: 'plain', c2: '#ff8c1a' }, { b: '#2a9d8f', p: 'argyle', c2: '#e9c46a' },
    { b: '#222831', p: 'plain', c2: '#ffffff' }, { b: '#ff8fab', p: 'hearts', c2: '#d00045' }, { b: '#ffffff', p: 'stripe', c2: '#1546a8' }, { b: '#f4a261', p: 'zig', c2: '#5c2c06' }];
  function sockSprite(s, L, sel) {
    // Lokale Geometrie: Schaft senkrecht (0..L*.62), Fuß nach rechts
    const lw = L * .36, w = L * .78, h = L;
    const [c, x] = cnv(w, h);
    const path = () => { x.beginPath(); x.moveTo(2, 2); x.lineTo(2 + lw, 2); x.lineTo(2 + lw, h * .58); x.quadraticCurveTo(2 + lw, h * .66, 2 + lw + (w - lw - 4) * .4, h * .68); x.lineTo(w - 2 - lw * .4, h * .68); x.arc(w - 2 - lw * .48, h * .68 + lw * .48, lw * .48, -Math.PI / 2, Math.PI / 2); x.lineTo(lw * .7, h * .68 + lw * .96); x.quadraticCurveTo(2, h * .68 + lw * .96, 2, h * .68); x.closePath(); };
    path(); x.fillStyle = s.b; x.fill(); x.save(); path(); x.clip();
    x.fillStyle = s.c2;
    if (s.p === 'stripe') for (let y = 12; y < h; y += 13) x.fillRect(0, y, w, 5);
    if (s.p === 'dots') for (let y = 8; y < h; y += 10) for (let xx = 6 + (y / 10 % 2) * 5; xx < w; xx += 10) { x.beginPath(); x.arc(xx, y, 2.2, 0, 6.28); x.fill(); }
    if (s.p === 'argyle') { for (let y = 0; y < h; y += 18) for (let xx = 0; xx < w; xx += 18) { x.beginPath(); x.moveTo(xx + 9, y); x.lineTo(xx + 18, y + 9); x.lineTo(xx + 9, y + 18); x.lineTo(xx, y + 9); x.closePath(); x.globalAlpha = .55; x.fill(); x.globalAlpha = 1; } }
    if (s.p === 'hearts') for (let y = 10; y < h; y += 14) for (let xx = 7 + (y / 14 % 2) * 6; xx < w; xx += 13) { x.beginPath(); x.moveTo(xx, y + 3); x.bezierCurveTo(xx - 5, y - 2, xx - 5, y - 6, xx, y - 3); x.bezierCurveTo(xx + 5, y - 6, xx + 5, y - 2, xx, y + 3); x.fill(); }
    if (s.p === 'zig') { x.lineWidth = 3; x.strokeStyle = s.c2; for (let y = 10; y < h; y += 14) { x.beginPath(); for (let xx = 0; xx <= w; xx += 8) x.lineTo(xx, y + ((xx / 8) % 2 ? 4 : -4)); x.stroke(); } }
    // Bündchen, Ferse, Spitze
    x.fillStyle = 'rgba(255,255,255,.35)'; x.fillRect(0, 0, w, h * .12); x.fillStyle = 'rgba(0,0,0,.12)'; for (let i = 4; i < lw; i += 4) x.fillRect(i, 2, 1.5, h * .12);
    x.fillStyle = s.p === 'plain' ? s.c2 : 'rgba(0,0,0,.18)'; x.beginPath(); x.arc(2 + lw * .2, h * .68 + lw * .2, lw * .55, 0, 6.28); x.fill(); x.beginPath(); x.arc(w - 2 - lw * .48, h * .68 + lw * .48, lw * .5, -1.2, 1.2); x.fill();
    x.restore(); path(); shade(x, w, h); x.lineWidth = sel ? 4 : 1; x.strokeStyle = sel ? '#ffd23f' : 'rgba(0,0,0,.25)'; x.stroke();
    return { c, w, h, lw };
  }

  /* ================= Physik-Trommel (Hero) ================= */
  function makeDrum(cv, opts) {
    const M = window.Matter; if (!M) return null;
    const { Engine, Bodies, Body, Composite, Query, Constraint, Events } = M;
    const eng = Engine.create(); eng.gravity.y = 1; eng.positionIterations = 8; eng.velocityIterations = 6;
    let W = 0, R = 0, cx = 0, cy = 0, drum = null, ang = 0, omega = opts.omega || .018, items = [], water = opts.water ?? 0, waterT = water;
    const ctx = cv.getContext('2d');
    function build() {
      const r = cv.getBoundingClientRect(); W = r.width; if (!W) return false; cv.width = W * DPR; cv.height = W * DPR; ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      R = W / 2; cx = cy = R;
      if (drum) Composite.remove(eng.world, drum);
      const parts = [], N = 48, th = R * .5;
      for (let i = 0; i < N; i++) { const a = i / N * Math.PI * 2, rr = R + th / 2 - 2; parts.push(Bodies.rectangle(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr, th, (2 * Math.PI * (R + th)) / N + 6, { angle: a })); }
      (opts.baffles ?? 3) && [0, 1, 2].slice(0, opts.baffles ?? 3).forEach(k => { const a = k / 3 * Math.PI * 2 + .3, L = R * .2, rr = R - L / 2 + 2; parts.push(Bodies.rectangle(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr, L, R * .09, { angle: a, chamfer: { radius: R * .03 } })); });
      drum = Body.create({ parts, isStatic: true, friction: .9, frictionStatic: 1 });
      Body.setPosition(drum, { x: cx, y: cy }); Body.setAngle(drum, ang);
      Composite.add(eng.world, drum); return true;
    }
    function addItem(kind, x0, y0, extra = {}) {
      const k = R / 220, col = extra.col || PAL[Math.random() * PAL.length | 0];
      let b, spr, sw, sh;
      if (kind === 'shirt') { sw = 78 * k; sh = 66 * k; b = Bodies.rectangle(0, 0, sw * .82, sh * .9, { chamfer: { radius: 10 * k } }); spr = SP.shirt(sw, sh, col); }
      else if (kind === 'towel') { sw = 86 * k; sh = 44 * k; b = Bodies.rectangle(0, 0, sw, sh, { chamfer: { radius: 8 * k } }); spr = SP.towel(sw, sh, col); }
      else if (kind === 'sheet') { sw = 110 * k; sh = 58 * k; b = Bodies.rectangle(0, 0, sw, sh, { chamfer: { radius: 10 * k } }); spr = SP.sheet(sw, sh); }
      else if (kind === 'duck') { sw = sh = 46 * k; b = Bodies.circle(0, 0, sw * .42); spr = SP.duck(sw); }
      else { // Socke
        const s = extra.sock || SOCKS[Math.random() * SOCKS.length | 0], L = (extra.L || 62) * k, g = sockSprite(s, L);
        const leg = Bodies.rectangle(2 + g.lw / 2, L * .36, g.lw, L * .7), foot = Bodies.rectangle(g.w / 2, L * .68 + g.lw * .48, g.w - 6, g.lw * .9);
        b = Body.create({ parts: [leg, foot] }); spr = g.c; sw = g.w; sh = g.h; b._sock = s; b._L = L;
        b._off = { x: b.position.x - g.w / 2, y: b.position.y - g.h / 2 };
      }
      if (!b._off) b._off = { x: 0, y: 0 };
      Body.set(b, { friction: .6, frictionAir: .02, restitution: .15, density: kind === 'duck' ? .0006 : .0012 });
      Body.setPosition(b, { x: x0 ?? cx + (Math.random() - .5) * R * .6, y: y0 ?? cy - R * .4 });
      Body.setAngle(b, Math.random() * 6.28); Body.setVelocity(b, extra.v || { x: (Math.random() - .5) * 4, y: 2 });
      b._spr = spr; b._sw = sw; b._sh = sh; b._kind = kind;
      items.push(b); Composite.add(eng.world, b); return b;
    }
    function removeItem(b) { Composite.remove(eng.world, b); items = items.filter(i => i !== b); }
    let spin = 0; // 0..1 Schleuderstärke
    const holes = [];
    function drawBack() {
      // Trommel-Edelstahl mit Lochmuster
      const g = ctx.createRadialGradient(cx, cy, R * .1, cx, cy, R); g.addColorStop(0, '#5d6a80'); g.addColorStop(.75, '#38445a'); g.addColorStop(1, '#1d2537'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, W);
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(ang);
      ctx.fillStyle = 'rgba(10,14,24,.55)'; const blur = spin > .5;
      for (let ring = 1; ring <= 6; ring++) { const rr = R * (.22 + ring * .12), n = Math.round(10 + ring * 7); for (let i = 0; i < n; i++) { const a = i / n * 6.28 + ring; ctx.beginPath(); if (blur) { ctx.globalAlpha = .25; ctx.arc(0, 0, rr, a, a + .12); ctx.lineWidth = 3; ctx.strokeStyle = 'rgba(10,14,24,.5)'; ctx.stroke(); ctx.globalAlpha = 1; } else { ctx.arc(Math.cos(a) * rr, Math.sin(a) * rr, R * .016, 0, 6.28); ctx.fill(); } } }
      // Rippen
      for (let k = 0; k < (opts.baffles ?? 3); k++) { const a = k / 3 * Math.PI * 2 + .3; ctx.save(); ctx.rotate(a); const L = R * .2; const gg = ctx.createLinearGradient(R - L, 0, R, 0); gg.addColorStop(0, '#c9d1dc'); gg.addColorStop(1, '#7d8798'); ctx.fillStyle = gg; ctx.beginPath(); ctx.roundRect ? ctx.roundRect(R - L, -R * .045, L + 4, R * .09, R * .03) : ctx.rect(R - L, -R * .045, L + 4, R * .09); ctx.fill(); ctx.restore(); }
      ctx.restore();
      ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.beginPath(); ctx.arc(cx, cy, R * .12, 0, 6.28); ctx.fill();
    }
    let t = 0;
    function drawWater(front) {
      if (water < .01) return;
      const lvl = cy + R - water * 2 * R; t += .05;
      ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, R, 0, 6.28); ctx.clip();
      ctx.beginPath(); ctx.moveTo(0, W); for (let x = 0; x <= W; x += 8) ctx.lineTo(x, lvl + Math.sin(x / 26 + t) * 4 + Math.sin(x / 11 - t * 1.7) * 2 + Math.sin(ang * 2) * (x - cx) * .06); ctx.lineTo(W, W); ctx.closePath();
      ctx.fillStyle = front ? `rgba(120,190,255,${opts.waterCol || .28})` : 'rgba(40,90,170,.35)'; ctx.fill();
      if (front) { // Schaum
        for (let x = 0; x <= W; x += 9) { const y = lvl + Math.sin(x / 26 + t) * 4 + Math.sin(x / 11 - t * 1.7) * 2 + Math.sin(ang * 2) * (x - cx) * .06; ctx.fillStyle = 'rgba(255,255,255,.55)'; ctx.beginPath(); ctx.arc(x, y - 1, 3 + Math.abs(Math.sin(x * 1.3 + t)) * 4, 0, 6.28); ctx.fill(); }
      }
      ctx.restore();
    }
    function drawItems(selSet) {
      for (const b of items) {
        ctx.save(); ctx.translate(b.position.x, b.position.y); ctx.rotate(b.angle);
        if (b._kind === 'sock') { ctx.translate(-b._off.x - b._sw / 2, -b._off.y - b._sh / 2); ctx.drawImage(selSet && selSet.has(b) ? (b._sel || (b._sel = sockSprite(b._sock, b._L, true).c)) : b._spr, 0, 0, b._sw, b._sh); }
        else ctx.drawImage(b._spr, -b._sw / 2, -b._sh / 2, b._sw, b._sh);
        ctx.restore();
      }
    }
    function step(dt) {
      if (!drum) return;
      ang += omega; Body.setAngle(drum, ang, true);
      water += (waterT - water) * .02;
      const wl = cy + R - water * 2 * R;
      for (const b of items) {
        if (spin > .05) { const dx = b.position.x - cx, dy = b.position.y - cy, d = Math.hypot(dx, dy) || 1; Body.applyForce(b, b.position, { x: dx / d * b.mass * .0035 * spin, y: dy / d * b.mass * .0035 * spin }); }
        if (water > .02 && b.position.y > wl) { Body.applyForce(b, b.position, { x: 0, y: -b.mass * eng.gravity.y * eng.gravity.scale * (b._kind === 'duck' ? 1.6 : .55) }); b.frictionAir = .06; } else b.frictionAir = .02;
        // Sicherheit: aus der Trommel gefallen?
        if (Math.hypot(b.position.x - cx, b.position.y - cy) > R * 1.05) { Body.setPosition(b, { x: cx, y: cy }); Body.setVelocity(b, { x: 0, y: 0 }); }
      }
      eng.gravity.y = 1 - spin * .85;
      Engine.update(eng, dt);
    }
    // Ziehen mit Maus / Finger
    let grab = null;
    const pt = e => { const r = cv.getBoundingClientRect(); return { x: (e.clientX - r.left) * W / r.width, y: (e.clientY - r.top) * W / r.height }; };
    cv.addEventListener('pointerdown', e => {
      const p = pt(e), hits = Query.point(items, p); let hit = hits[hits.length - 1]; if (!hit && opts.onPick) { let best = null, bd = 1e9; for (const b of items) { const d = Math.hypot(b.position.x - p.x, b.position.y - p.y); if (d < bd) { bd = d; best = b; } } if (bd < R * .14) hit = best; } if (!hit) return;
      if (opts.onPick) { opts.onPick(hit); return; }
      if (e.pointerType !== 'mouse') { Body.setVelocity(hit, { x: (Math.random() - .5) * 10, y: -10 }); return; }
      grab = Constraint.create({ pointA: p, bodyB: hit, pointB: { x: p.x - hit.position.x, y: p.y - hit.position.y }, stiffness: .2, damping: .1, length: 0 });
      Composite.add(eng.world, grab); cv.setPointerCapture(e.pointerId); cv.classList.add('grab');
    });
    cv.addEventListener('pointermove', e => { if (grab) grab.pointA = pt(e); });
    const rel = () => { if (grab) { Composite.remove(eng.world, grab); grab = null; cv.classList.remove('grab'); } };
    cv.addEventListener('pointerup', rel); cv.addEventListener('pointercancel', rel);
    return {
      build, addItem, removeItem, step, drawBack, drawWater, drawItems, ctx,
      get items() { return items; }, get R() { return R; }, get W() { return W; },
      set omega(v) { omega = v; }, get omega() { return omega; },
      set spin(v) { spin = v; }, get spin() { return spin; },
      set waterT(v) { waterT = v; }, eng, M,
    };
  }

  function whenMatter(cb) { if (window.Matter) cb(); else { const s = $('script[src*="matter"]'); if (s) s.addEventListener('load', cb, { once: true }); setTimeout(() => { if (window.Matter) cb(); }, 1500); } }
  let matterReady = false;
  whenMatter(() => { if (matterReady) return; matterReady = true; initHeroDrum(); initSocks(); });

  /* ---------------- Hero-Waschmaschine ---------------- */
  function initHeroDrum() {
    const cv = $('[data-drum]'), wm = $('[data-wm]'); if (!cv) return;
    const D = makeDrum(cv, { omega: .02, water: .3, baffles: 3 }); if (!D) return;
    const PROGS = [{ n: 'Bunt 40°', w: .3, o: .02, t: 72 }, { n: 'Koch 90°', w: .36, o: .024, t: 118 }, { n: 'Fein 30°', w: .26, o: .013, t: 48 }, { n: 'Wolle 20°', w: .22, o: .009, t: 39 }, { n: 'Hemden 40°', w: .28, o: .016, t: 58 }];
    let pi = 0, running = true, spinT = 0, vis = false, remain = PROGS[0].t * 60, last = performance.now();
    const lcdP = $('[data-lcdprog]'), lcdT = $('[data-lcdtime]'), btnS = $('[data-start]'), btnSp = $('[data-spin]'), knob = $('[data-knob]');
    const fill = () => { const n = innerWidth < 640 ? 9 : 13; const kinds = ['shirt', 'shirt', 'towel', 'sock', 'sock', 'sheet', 'sock', 'towel', 'shirt', 'duck', 'sock', 'shirt', 'sock']; for (let i = 0; i < n; i++) D.addItem(kinds[i], D.R + (Math.random() - .5) * D.R * .8, D.R + (Math.random() - .3) * D.R * .5); };
    const init = () => { if (D.build()) { if (!D.items.length) fill(); } };
    init(); addEventListener('resize', () => { const old = D.W; D.build(); if (Math.abs(D.W - old) > 40) { D.items.slice().forEach(b => D.removeItem(b)); fill(); } });
    inView(cv, v => vis = v, '100px');
    const fmt = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
    const h1w = $$('[data-h1] .w');
    function spinNow() {
      if (spinT > 0) return; spinT = 1; btnSp.classList.add('on'); wm.classList.add('shake'); D.waterT = 0; lcdP.textContent = 'Schleudern 1400';
      h1w.forEach((w, i) => w.animate([{ transform: 'rotate(0)' }, { transform: 'rotate(360deg)' }], { duration: 900, delay: i * 90, easing: 'cubic-bezier(.5,0,.3,1)' }));
    }
    knob.addEventListener('click', () => { pi = (pi + 1) % PROGS.length; knob.style.setProperty('--kn', (pi * 72) + 'deg'); lcdP.textContent = PROGS[pi].n; remain = PROGS[pi].t * 60; if (!spinT) D.waterT = PROGS[pi].w; });
    btnS.addEventListener('click', () => { running = !running; btnS.setAttribute('aria-pressed', running); btnS.querySelector('span').textContent = running ? 'Start' : 'Pause'; });
    btnSp.addEventListener('click', spinNow);
    $$('[data-addw]').forEach(b => b.addEventListener('click', () => {
      if (D.items.length > 26) { const old = D.items[0]; D.removeItem(old); }
      D.addItem(b.dataset.addw, D.R + (Math.random() - .5) * D.R * .3, D.R * .35, { v: { x: (Math.random() - .5) * 3, y: 6 } });
      const r = b.getBoundingClientRect(), f = document.createElement('span'); f.textContent = b.textContent; f.style.cssText = `position:fixed;left:${r.left}px;top:${r.top}px;font-size:24px;z-index:500;pointer-events:none;transition:transform .55s cubic-bezier(.5,-.4,.3,1),opacity .55s`; document.body.appendChild(f);
      const cr = cv.getBoundingClientRect(); requestAnimationFrame(() => { f.style.transform = `translate(${cr.left + cr.width / 2 - r.left}px,${cr.top + cr.height * .3 - r.top}px) scale(.6) rotate(-200deg)`; f.style.opacity = '0'; }); setTimeout(() => f.remove(), 600);
    }));
    let acc = 0;
    function loop(now) {
      const dt = Math.min(50, now - last); last = now;
      if (vis && D.W) {
        // Programm & Schleudern
        let target = running ? PROGS[pi].o : 0;
        if (spinT > 0) { spinT += dt; const k = spinT / 1000; D.spin = k < 1.2 ? clamp((k - .5) / .7, 0, 1) : k < 5 ? 1 : clamp(1 - (k - 5) / 1.2, 0, 1); target = lerp(target, .24, D.spin); if (k > 6.4) { spinT = 0; D.spin = 0; btnSp.classList.remove('on'); wm.classList.remove('shake'); D.waterT = PROGS[pi].w; lcdP.textContent = PROGS[pi].n; } }
        D.omega = lerp(D.omega, target, .04);
        if (running) { remain -= dt / 1000 * 6; if (remain < 0) remain = PROGS[pi].t * 60; }
        lcdT.textContent = fmt(remain / 60 * 60 / 60);
        acc += dt; let n = 0; while (acc >= 16.67 && n < 3) { D.step(16.67); acc -= 16.67; n++; } if (n === 3) acc = 0;
        const c = D.ctx; c.clearRect(0, 0, D.W, D.W); D.drawBack(); D.drawWater(false); D.drawItems(); D.drawWater(true);
      }
      requestAnimationFrame(loop);
    }
    if (!RM) requestAnimationFrame(loop); else { D.step(16); D.drawBack(); D.drawItems(); }
    // erster Hinweis: kurz anschubsen, wenn das Intro weg ist
    document.addEventListener('kl-ready', () => setTimeout(() => { D.items.forEach(b => D.M.Body.setVelocity(b, { x: (Math.random() - .5) * 6, y: -6 })); }, 600), { once: true });
  }

  /* ================= Sockenspiel ================= */
  function initSocks() {
    const cv = $('[data-sgcv]'); if (!cv) return;
    const sel = new Set(); let pairs = 0, t0 = 0, running = false, vis = false, timer = 0, last = performance.now(), acc = 0, shakeT = 0;
    const tEl = $('[data-sgtime]'), pEl = $('[data-sgpairs]'), bEl = $('[data-sgbest]'), line = $('[data-sgline]'), done = $('[data-sgdone]'), res = $('[data-sgres]');
    const fmt = ms => { const s = ms / 1000; return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')},${Math.floor((s % 1) * 10)}`; };
    const best = +store.get('kl-socks') || 0; if (best) bEl.textContent = fmt(best);
    let D;
    D = makeDrum(cv, { omega: .006, water: 0, baffles: 3, onPick: b => pick(b) });
    if (!D) return; window.__klSocks = D;
    function fill() {
      D.items.slice().forEach(b => D.removeItem(b)); line.innerHTML = ''; sel.clear(); pairs = 0; pEl.textContent = '0 / 8';
      const list = []; SOCKS.forEach((s, i) => { list.push(i, i); }); list.sort(() => Math.random() - .5);
      list.forEach((i, n) => D.addItem('sock', D.R + (Math.random() - .5) * D.R * .9, D.R + (Math.random() - .2) * D.R * .7, { sock: SOCKS[i], L: innerWidth < 640 ? 78 : 70 }));
    }
    function start() { fill(); running = true; t0 = performance.now(); done.hidden = true; shakeT = 1; }
    function pick(b) {
      if (!running) { start(); return; }
      if (sel.has(b)) { sel.delete(b); return; }
      sel.add(b);
      if (sel.size === 2) {
        const [a, c] = [...sel];
        if (a._sock === c._sock) {
          setTimeout(() => {
            D.removeItem(a); D.removeItem(c); sel.clear(); pairs++; pEl.textContent = pairs + ' / 8';
            const el = document.createElement('div'); el.className = 'pair'; const g = sockSprite(a._sock, 60); const [pc, px] = cnv(54, 92); px.drawImage(g.c, 0, 6, g.w * .82, g.h * .82); px.drawImage(g.c, 10, 10, g.w * .82, g.h * .82); el.appendChild(pc); line.appendChild(el);
            if (pairs === 8) finish();
          }, 160);
        } else { cv.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' }, { transform: 'translateX(0)' }], { duration: 260 }); setTimeout(() => sel.clear(), 380); }
      }
    }
    function finish() {
      running = false; const ms = performance.now() - t0; const b = +store.get('kl-socks') || 0;
      const rec = !b || ms < b; if (rec) { store.set('kl-socks', Math.round(ms)); bEl.textContent = fmt(ms); }
      res.textContent = `Ihre Zeit: ${fmt(ms)}${rec ? ' – neue Bestzeit!' : ''} Bei uns geht keine Socke verloren.`; done.hidden = false;
    }
    $('[data-sgstart]').addEventListener('click', start); $('[data-sgagain]').addEventListener('click', start);
    $('[data-sgshake]').addEventListener('click', () => { shakeT = 1; });
    const init = () => { if (D.build() && !D.items.length) { const list = []; SOCKS.forEach((s, i) => list.push(i, i)); list.forEach(i => D.addItem('sock', D.R + (Math.random() - .5) * D.R * .9, D.R + (Math.random() - .2) * D.R * .7, { sock: SOCKS[i], L: innerWidth < 640 ? 78 : 70 })); } };
    init(); addEventListener('resize', () => D.build());
    inView(cv, v => vis = v, '50px');
    function loop(now) {
      const dt = Math.min(50, now - last); last = now;
      if (vis && D.W) {
        let target = .006; if (shakeT > 0) { shakeT += dt; const k = shakeT / 1000; target = k < 1.6 ? .07 : .006; if (k > 1.6) shakeT = 0; }
        D.omega = lerp(D.omega, target, .05);
        acc += dt; let n = 0; while (acc >= 16.67 && n < 3) { D.step(16.67); acc -= 16.67; n++; } if (n === 3) acc = 0;
        const c = D.ctx; c.clearRect(0, 0, D.W, D.W); D.drawBack(); D.drawItems(sel);
        if (running) tEl.textContent = fmt(now - t0);
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  /* ================= Waschstraße (Geschichte) ================= */
  const story = $('[data-story]');
  if (story && !RM) {
    const pin = $('[data-storypin]'), track = $('[data-storytrack]'), bar = $('[data-storybar]'), lms = $$('.lm', track);
    const manual = new Map();
    function size() { const extra = track.scrollWidth - innerWidth; story.style.setProperty('--sh', (extra + innerHeight * 1.15) + 'px'); return extra; }
    let extra = size(); addEventListener('resize', () => { extra = size(); upd(); });
    function upd() {
      const r = story.getBoundingClientRect(), total = story.offsetHeight - innerHeight, p = clamp(-r.top / total, 0, 1);
      track.style.transform = `translateX(${-p * extra}px)`; bar.style.setProperty('--sp', (p * 100) + '%');
      const cx = innerWidth / 2;
      lms.forEach((m, i) => {
        const b = m.getBoundingClientRect(), mid = b.left + b.width / 2, onScreen = b.right > -50 && b.left < innerWidth + 50;
        m.classList.toggle('vis', onScreen);
        const near = Math.abs(mid - cx) < Math.max(b.width * .55, innerWidth * .16);
        const want = manual.has(i) ? manual.get(i) : near;
        if (m.classList.contains('open') !== want) { m.classList.toggle('open', want); $('.lm-door', m).setAttribute('aria-expanded', want); }
        if (!near && manual.has(i) && Math.abs(mid - cx) > innerWidth * .6) manual.delete(i);
      });
    }
    addEventListener('scroll', upd, { passive: true }); upd();
    lms.forEach((m, i) => $('.lm-door', m).addEventListener('click', () => { manual.set(i, !m.classList.contains('open')); upd(); }));
  } else if (story) { $$('.lm', story).forEach(m => m.classList.add('vis', 'open')); }

  /* ================= Heißmangel ================= */
  const mg = $('[data-mangle]');
  if (mg) {
    const cv = $('[data-mgcv]'), x = cv.getContext('2d'), rng = $('[data-mgr]'), roll = $('[data-mgroll]'), temp = $('[data-mgtemp]'), pkg = $('[data-pkg]'), tag = $('[data-pktag]'), nameIn = $('[data-pkname]');
    const W = 900, Hh = 420; cv.width = W; cv.height = Hh;
    const SW = Math.round(W * .44), SH = Math.round(Hh * .78), RX = W * .5;
    // Laken glatt
    const smooth = document.createElement('canvas'); smooth.width = SW; smooth.height = SH; const s = smooth.getContext('2d');
    s.fillStyle = '#fbfcff'; s.fillRect(0, 0, SW, SH); s.fillStyle = '#d4e3ff'; for (let i = 0; i < SH; i += 24) s.fillRect(0, i, SW, 3); s.fillStyle = '#1546a8'; s.fillRect(0, 10, SW, 6); s.fillRect(0, SH - 16, SW, 6);
    s.strokeStyle = 'rgba(21,70,168,.12)'; s.lineWidth = 1; s.beginPath(); s.moveTo(SW / 2, 0); s.lineTo(SW / 2, SH); s.moveTo(0, SH / 2); s.lineTo(SW, SH / 2); s.stroke();
    // Laken zerknittert: Verschiebung + Schattierung
    const wr = document.createElement('canvas'); wr.width = SW; wr.height = SH; const w = wr.getContext('2d');
    const src = s.getImageData(0, 0, SW, SH), dst = w.createImageData(SW, SH);
    // Knitter: weiche Zufallsfalten (Value-Noise, mehrere Oktaven)
    const G = 9, grid = [...Array(G * G * 4)].map(() => Math.random());
    const vn = (xx, yy, f, o) => { const X = xx * f, Y = yy * f, x0 = Math.floor(X), y0 = Math.floor(Y), fx = X - x0, fy = Y - y0, g = (a, b) => grid[(((a + o) % (G * 2)) + ((b + o * 3) % (G * 2)) * G * 2) % grid.length]; const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy); return lerp(lerp(g(x0, y0), g(x0 + 1, y0), sx), lerp(g(x0, y0 + 1), g(x0 + 1, y0 + 1), sx), sy); };
    const field = new Float32Array((SW + 1) * (SH + 1));
    for (let yy = 0; yy <= SH; yy++) for (let xx = 0; xx <= SW; xx++) { const r1 = 1 - Math.abs(2 * vn(xx, yy, .011, 0) - 1), r2 = 1 - Math.abs(2 * vn(xx * .6, yy * 1.4, .026, 5) - 1); field[yy * (SW + 1) + xx] = r1 * r1 * r1 * .8 + r2 * r2 * .35; }
    const F = (xx, yy) => field[Math.min(SH, yy) * (SW + 1) + Math.min(SW, xx)];
    for (let yy = 0; yy < SH; yy++) for (let xx = 0; xx < SW; xx++) {
      const n = F(xx, yy), nx = F(xx + 1, yy) - n, ny = F(xx, yy + 1) - n;
      const sx = clamp(Math.round(xx + nx * 70), 0, SW - 1), sy = clamp(Math.round(yy + ny * 70 + n * 5), 0, SH - 1);
      const si = (sy * SW + sx) * 4, di = (yy * SW + xx) * 4, light = clamp(1 + (nx * -1.2 + ny * -2) * 9 - n * .06, .7, 1.08);
      dst.data[di] = src.data[si] * light; dst.data[di + 1] = src.data[si + 1] * light; dst.data[di + 2] = src.data[si + 2] * light; dst.data[di + 3] = 255;
    }
    w.putImageData(dst, 0, 0);
    let p = 0, steam = [], fold = 0, folding = false, heat = 0;
    function draw() {
      x.clearRect(0, 0, W, Hh);
      // Tisch
      const tg = x.createLinearGradient(0, 0, 0, Hh); tg.addColorStop(0, '#e9eef5'); tg.addColorStop(1, '#cdd6e2'); x.fillStyle = tg; x.fillRect(0, 0, W, Hh);
      x.fillStyle = 'rgba(0,0,0,.05)'; for (let i = 0; i < W; i += 40) x.fillRect(i, 0, 1, Hh);
      const top = (Hh - SH) / 2, left = RX - SW + p * SW; // linke Kante des Lakens
      if (!folding) {
        // vor der Walze: zerknittert
        const cut = clamp(RX - left, 0, SW);
        if (cut > 0) { x.save(); x.shadowColor = 'rgba(0,0,0,.25)'; x.shadowBlur = 14; x.drawImage(wr, 0, 0, cut, SH, left, top, cut, SH); x.restore(); }
        // hinter der Walze: glatt
        if (cut < SW) { x.save(); x.shadowColor = 'rgba(0,0,0,.18)'; x.shadowBlur = 8; x.drawImage(smooth, cut, 0, SW - cut, SH, RX, top, SW - cut, SH); x.restore(); }
      } else {
        // Falten: Laken klappt zweimal
        const f = ease(clamp(fold, 0, 1)), cw = SW * (1 - .5 * f), chh = SH * (1 - .5 * clamp(fold - 1, 0, 1));
        x.save(); x.shadowColor = 'rgba(0,0,0,.25)'; x.shadowBlur = 14; x.drawImage(smooth, RX + 20, top + (SH - chh), cw, chh); x.restore();
      }
      // Dampf
      steam = steam.filter(q => (q.a -= .012) > 0);
      for (const q of steam) { q.x += q.vx; q.y += q.vy; q.r += .6; const g = x.createRadialGradient(q.x, q.y, 0, q.x, q.y, q.r); g.addColorStop(0, `rgba(255,255,255,${q.a})`); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.beginPath(); x.arc(q.x, q.y, q.r, 0, 6.28); x.fill(); }
    }
    let raf;
    function loop() { draw(); heat = lerp(heat, p > 0 && p < 1 ? 1 : .2, .05); roll.style.setProperty('--heat', (heat * .7).toFixed(2)); temp.textContent = Math.round(lerp(20, 180, heat)); if (folding) { fold += .02; if (fold >= 2) { folding = false; showPkg(); } } if (steam.length || folding || heat > .22) raf = requestAnimationFrame(loop); else raf = 0; }
    const kick = () => { if (!raf) raf = requestAnimationFrame(loop); };
    let lastP = 0;
    function setP(v) {
      const np = clamp(v, 0, 1), d = np - p; p = np;
      roll.style.backgroundPosition = `0 ${p * 1400}px`; $('i', roll.parentElement) && ($('i', roll.parentElement).style.backgroundPosition = `0 ${p * 1400}px, 0 0`);
      if (Math.abs(d) > .001) for (let i = 0; i < 2; i++) steam.push({ x: RX + 30 + Math.random() * 20, y: (Hh - SH) / 2 + Math.random() * SH, vx: 1 + Math.random() * 1.5, vy: -1 - Math.random(), r: 8 + Math.random() * 10, a: .5 });
      rng.value = p * 100; kick();
      if (p >= 1 && !folding && pkg.hidden) { folding = true; fold = 0; kick(); }
    }
    rng.addEventListener('input', () => setP(rng.value / 100));
    let dr = null;
    cv.addEventListener('pointerdown', e => { dr = { x: e.clientX, p }; cv.setPointerCapture(e.pointerId); });
    cv.addEventListener('pointermove', e => { if (!dr) return; const r = cv.getBoundingClientRect(); setP(dr.p + (e.clientX - dr.x) / (r.width * .44)); });
    cv.addEventListener('pointerup', () => dr = null); cv.style.touchAction = 'pan-y'; cv.style.cursor = 'ew-resize';
    function showPkg() { tag.textContent = (nameIn.value || '').trim() || 'Sie'; pkg.hidden = false; toast('Gemangelt, gefaltet, in Papier eingeschlagen – wie an der Theke.'); }
    nameIn.addEventListener('input', () => { tag.textContent = nameIn.value.trim() || 'Sie'; });
    $('[data-mgagain]').addEventListener('click', () => { pkg.hidden = true; folding = false; fold = 0; p = 0; rng.value = 0; draw(); });
    draw();
    // Anstoß beim ersten Sichtkontakt
    let shown = false; inView(mg, v => { if (v && !shown && !RM) { shown = true; let k = 0; const auto = () => { k += .012; setP(k * .22); if (k < 1) requestAnimationFrame(auto); }; requestAnimationFrame(auto); } }, '-20% 0px');
  }

  /* ================= Lamellen ================= */
  const bl = $('[data-blinds]');
  if (bl) {
    const sled = $('[data-sled]'), slats = $$('[data-blset] i'), cnt = $('[data-blcount]'), doneEl = $('[data-bldone]'), fx = $('[data-blfx]'), fc = fx.getContext('2d');
    let pos = 0, drag = null, sp = [], auto = 0;
    const rsF = () => { fx.width = bl.clientWidth; fx.height = bl.clientHeight; }; rsF(); addEventListener('resize', () => { rsF(); setPos(pos); });
    function setPos(px) {
      const max = bl.clientWidth - sled.offsetWidth; pos = clamp(px, 0, max); sled.style.transform = `translateX(${pos}px)`;
      const sr = sled.getBoundingClientRect(), br = bl.getBoundingClientRect(); let n = 0;
      slats.forEach(s => { const r = s.getBoundingClientRect(); if (r.left + r.width / 2 < sr.left + sr.width / 2) { if (!s.classList.contains('clean')) { s.classList.add('clean'); for (let i = 0; i < 14; i++) sp.push({ x: r.left - br.left + r.width / 2, y: 30 + Math.random() * (br.height - 60), vx: (Math.random() - .5) * 3, vy: (Math.random() - .5) * 3, a: 1, s: 1 + Math.random() * 3 }); } } if (s.classList.contains('clean')) n++; });
      cnt.textContent = n; doneEl.hidden = n < slats.length; sled.setAttribute('aria-valuenow', n);
      if (n === slats.length && !bl._t) { bl._t = 1; toast('Alle 14 Lamellen sauber – Lamelle für Lamelle, wie in Marks Maschine.'); }
      kick();
    }
    let raf;
    const loop = () => { fc.clearRect(0, 0, fx.width, fx.height); sp = sp.filter(q => (q.a -= .02) > 0); for (const q of sp) { q.x += q.vx; q.y += q.vy; fc.fillStyle = `rgba(255,255,255,${q.a})`; fc.beginPath(); fc.moveTo(q.x, q.y - q.s * 2); fc.lineTo(q.x + q.s * .6, q.y); fc.lineTo(q.x, q.y + q.s * 2); fc.lineTo(q.x - q.s * .6, q.y); fc.fill(); } if (sp.length) raf = requestAnimationFrame(loop); else raf = 0; };
    const kick = () => { if (!raf) raf = requestAnimationFrame(loop); };
    sled.addEventListener('pointerdown', e => { drag = { x: e.clientX, p: pos }; sled.setPointerCapture(e.pointerId); });
    sled.addEventListener('pointermove', e => { if (drag) setPos(drag.p + e.clientX - drag.x); });
    sled.addEventListener('pointerup', () => drag = null); sled.addEventListener('pointercancel', () => drag = null);
    sled.addEventListener('keydown', e => { if (e.key === 'ArrowRight') { setPos(pos + 30); e.preventDefault(); } if (e.key === 'ArrowLeft') { setPos(pos - 30); e.preventDefault(); } });
    // kleiner Vorführ-Zug beim ersten Anblick
    let once = false; inView(bl, v => { if (v && !once && !RM) { once = true; let t = 0; const a = () => { t += .02; setPos(ease(Math.min(t, 1)) * bl.clientWidth * .18); if (t < 1) requestAnimationFrame(a); }; setTimeout(() => requestAnimationFrame(a), 400); } }, '-25% 0px');
  }

  /* ================= Kleiderstange ================= */
  const rail = $('[data-rail]');
  const picked = new Set();
  function pickSvc(v, fromEl) {
    const vals = v.split(','); vals.forEach(val => { const cb = $(`.tk input[name="Leistung"][value="${val}"]`); if (cb) cb.checked = true; picked.add(val); });
    $$('.hg-tag').forEach(t => { t.classList.toggle('picked', picked.has(t.dataset.pick)); $('em', t).textContent = picked.has(t.dataset.pick) ? '✓ auf dem Zettel' : '+ Zettel'; });
    const pn = $('[data-picked]'); if (pn) pn.textContent = picked.size;
    if (fromEl) { const r = fromEl.getBoundingClientRect(), f = document.createElement('span'); f.className = 'fly'; f.textContent = '+ ' + vals.join(', '); f.style.left = r.left + 'px'; f.style.top = r.top + 'px'; document.body.appendChild(f); const dock = $('[data-dock] a.on') && innerWidth < 640 ? $('[data-dock] a.on') : $('#zettel'); const tr2 = dock.getBoundingClientRect(); requestAnimationFrame(() => { f.style.transform = `translate(${(innerWidth < 640 ? tr2.left + tr2.width / 2 : innerWidth / 2) - r.left}px,${(innerWidth < 640 ? tr2.top : Math.min(innerHeight - 40, tr2.top)) - r.top}px) scale(.6)`; f.style.opacity = '0'; }); setTimeout(() => f.remove(), 850); }
  }
  if (rail) {
    const inner = $('[data-railin]'), hgs = $$('.hg', inner); let off = 0, vel = 0, drag = null, belt = false, vis = false, half = 0, moved = 0;
    const angs = hgs.map(() => ({ a: 0, v: 0 }));
    const rs = () => { half = inner.scrollWidth / 2; }; rs(); addEventListener('resize', rs);
    inView(rail, v => vis = v);
    rail.addEventListener('pointerdown', e => { if (e.button) return; drag = { x: e.clientX, y: e.clientY, o: off, t: performance.now(), axis: null, id: e.pointerId }; moved = 0; });
    addEventListener('pointermove', e => { if (!drag || e.pointerId !== drag.id) return; const dx = e.clientX - drag.x, dy = e.clientY - drag.y; if (!drag.axis) { if (Math.abs(dx) > 6 || Math.abs(dy) > 6) { drag.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y'; if (drag.axis === 'x') rail.classList.add('drag'); } return; } if (drag.axis !== 'x') return; const now = performance.now(), no = drag.o + dx; vel = (no - off) / Math.max(1, now - drag.t) * 16; drag.t = now; off = no; moved = Math.abs(dx); });
    const up = () => { if (drag) { rail.classList.remove('drag'); drag = null; } }; addEventListener('pointerup', up); addEventListener('pointercancel', up);
    const bb = $('[data-belt]'); bb.addEventListener('click', () => { belt = !belt; bb.setAttribute('aria-pressed', belt); bb.textContent = belt ? '❚❚ Förderband stoppen' : '▶︎ Förderband'; });
    $$('.hg-tag', inner).forEach(t => t.addEventListener('click', e => { if (moved > 8) { e.preventDefault(); return; } pickSvc(t.dataset.pick, t); }));
    let prev = 0;
    function loop() {
      if (vis) {
        if (!drag) { if (belt) vel = lerp(vel, -2.2, .05); off += vel; vel *= belt ? 1 : .94; }
        if (half) { off = ((off % half) - half) % half; }
        inner.style.transform = `translateX(${off}px)`;
        const dv = off - prev; prev = off;
        angs.forEach((s, i) => { s.v += -s.a * .04 - s.v * .06 - dv * .045; s.a += s.v; s.a = clamp(s.a, -24, 24); hgs[i].style.setProperty('--sw', s.a.toFixed(2) + 'deg'); });
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }
  $$('[data-pick]').forEach(a => { if (a.classList.contains('hg-tag')) return; a.addEventListener('click', () => pickSvc(a.dataset.pick)); });

  /* ================= Wäschezettel ================= */
  const tk = $('[data-tk]');
  if (tk) {
    const no = String(Math.floor(1000 + Math.random() * 8999)); $('[data-tkno]').textContent = no; $('[data-tkno2]').textContent = no; $('[data-tknoin]').value = no;
    $$('input[name="Kunde"]', tk).forEach(r => r.addEventListener('change', () => tk.classList.toggle('biz', $('input[name="Kunde"]:checked', tk).value !== 'Privat')));
    $$('input[name="Leistung"]', tk).forEach(cb => cb.addEventListener('change', () => { if (cb.checked) picked.add(cb.value); else picked.delete(cb.value); $$('.hg-tag').forEach(t => t.classList.toggle('picked', picked.has(t.dataset.pick))); const pn = $('[data-picked]'); if (pn) pn.textContent = picked.size; }));
    tk.addEventListener('submit', async e => {
      e.preventDefault(); const btn = $('[data-tksend]', tk); btn.disabled = true; btn.textContent = 'Wird abgegeben …';
      const fd = new FormData(tk); const data = {}; fd.forEach((v, k) => { data[k] = data[k] ? data[k] + ', ' + v : v; });
      try {
        const r = await fetch(tk.action, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
        if (!r.ok) throw 0;
        $('[data-stampdate]').textContent = new Date().toLocaleDateString('de-DE'); tk.classList.add('sent'); $('[data-tkok]').hidden = false; $('[data-tkerr]').hidden = true; btn.textContent = 'Abgegeben ✓';
      } catch (er) { $('[data-tkerr]').hidden = false; btn.disabled = false; btn.textContent = 'Zettel abgeben'; }
    });
  }

  /* ================= Früher / Heute ================= */
  const ba = $('[data-ba]');
  if (ba) {
    const r = $('[data-bar]'); r.addEventListener('input', () => ba.style.setProperty('--p', r.value + '%'));
    let once = false; inView(ba, v => { if (v && !once && !RM) { once = true; let t = 0; const a = () => { t += .012; const k = Math.sin(t * Math.PI) * 30; ba.style.setProperty('--p', (50 + k) + '%'); r.value = 50 + k; if (t < 1) requestAnimationFrame(a); else { ba.style.setProperty('--p', '50%'); r.value = 50; } }; requestAnimationFrame(a); } }, '-20% 0px');
  }

  /* ================= Dock ================= */
  const dock = $('[data-dock]'); if (dock) { const z = $('#zettel'); inView(z, v => $$('a', dock)[1].classList.toggle('on', !v), '0px'); }
})();
