/* Z&H Aufbereitung – Designentwurf von Falcon Eye */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement, reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const hasG = !!(window.gsap && window.ScrollTrigger);
  const store = { get(k) { try { return sessionStorage.getItem(k) } catch (e) { return null } }, set(k, v) { try { sessionStorage.setItem(k, v) } catch (e) {} } };
  if (hasG) gsap.registerPlugin(ScrollTrigger);
  const TEL = 'tel:+496841890200';

  /* smooth scroll */
  let lenis = null;
  if (hasG && window.Lenis && !reduce) { lenis = new Lenis({ lerp: .1 }); lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0); }

  /* header */
  const hdr = $('.hdr'), bar = $('.progress i'), fly = $('.fly'); let lastY = 0;
  const onScroll = () => {
    const y = scrollY, max = root.scrollHeight - innerHeight;
    const darkZone = fly ? y < fly.offsetTop + fly.offsetHeight - 80 : y < 40;
    hdr.classList.toggle('solid', !darkZone);
    hdr.classList.toggle('hide', y > 500 && y > lastY && !root.classList.contains('menu-open')); lastY = y;
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const burger = $('.burger');
  burger.addEventListener('click', () => { const o = root.classList.toggle('menu-open'); burger.setAttribute('aria-expanded', o); $('.mnav').setAttribute('aria-hidden', !o); lenis && (o ? lenis.stop() : lenis.start()); });

  /* opening hours Mo–Fr 08:00–16:30 (Europe/Berlin) */
  const berlin = () => { const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Berlin', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date()).map(x => [x.type, x.value])); return { d: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(p.weekday), m: (+p.hour % 24) * 60 + +p.minute }; };
  const O = 480, C = 990, DN = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
  const hours = () => {
    const { d, m } = berlin(), wd = d >= 1 && d <= 5, open = wd && m >= O && m < C;
    let txt; if (open) { const r = C - m; txt = `Geöffnet · noch ${Math.floor(r / 60) ? Math.floor(r / 60) + ' Std ' : ''}${r % 60} Min`; }
    else { let k = 0, dd = d; if (wd && m < O) k = 0; else { do { k++; dd = (d + k) % 7; } while (dd === 0 || dd === 6); } txt = `Geschlossen · öffnet ${k === 0 ? 'heute' : k === 1 ? 'morgen' : DN[(d + k) % 7]} um 08:00`; }
    $$('[data-status]').forEach(s => { s.classList.toggle('open', open); s.classList.toggle('closed', !open); s.querySelector('b').textContent = open ? 'Jetzt geöffnet' : 'Geschlossen'; });
    const big = $('[data-status-big]'), sub = $('[data-status-sub]'); if (big) { big.textContent = open ? 'Offen' : 'Mo–Fr'; sub.textContent = open ? txt.replace('Geöffnet · ', '') + ' heute' : '08:00–16:30 · ' + txt.split(' · ')[1]; }
    $$('[data-countdown]').forEach(c => c.textContent = txt);
  };
  hours(); setInterval(hours, 30000);

  /* counters */
  const cio = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return; cio.unobserve(e.target); const c = e.target, end = +c.dataset.count, dec = +(c.dataset.dec || 0), t0 = performance.now(); if (reduce) return; (function f(n) { const p = Math.min(1, (n - t0) / 1600), v = end * (1 - Math.pow(1 - p, 3)); c.textContent = v.toFixed(dec).replace('.', ','); if (p < 1) requestAnimationFrame(f); })(t0); }), { threshold: .5 });
  $$('[data-count]').forEach(c => cio.observe(c));

  /* magnetic */
  if (fine) $$('.mag').forEach(b => { b.addEventListener('pointermove', e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .22}px,${(e.clientY - r.top - r.height / 2) * .3}px)`; }); b.addEventListener('pointerleave', () => b.style.transform = ''); });

  /* in-view video */
  const vio = new IntersectionObserver(es => es.forEach(e => { const v = e.target; if (e.isIntersecting) { v.preload = 'auto'; const p = v.play(); p && p.catch(() => {}); } else v.pause(); }), { threshold: .2 });
  $$('video[muted], video[autoplay]').forEach(v => { v.muted = true; vio.observe(v); });

  /* film lightbox */
  const lb = $('.lb');
  $$('[data-film]').forEach(b => b.addEventListener('click', () => { const v = $('video', lb); v.src = 'vid/imagefilm.mp4'; v.poster = 'vid/imagefilm.jpg'; lb.hidden = false; v.play().catch(() => {}); lenis && lenis.stop(); }));
  const closeLb = () => { const v = $('video', lb); v.pause(); lb.hidden = true; lenis && lenis.start(); };
  $('.lb-x').addEventListener('click', closeLb); lb.addEventListener('click', e => { if (e.target === lb) closeLb(); }); addEventListener('keydown', e => { if (e.key === 'Escape' && !lb.hidden) closeLb(); });

  /* ================= INTRO: foam + squeegee ================= */
  const intro = $('.intro');
  const heroIn = () => { if (!hasG || reduce) return; gsap.from('.fc1 > *', { y: 40, opacity: 0, duration: 1.1, ease: 'power3.out', stagger: .1 }); };
  if (intro) {
    if (!hasG || reduce || store.get('zh-intro')) { intro.classList.add('gone'); heroIn(); }
    else {
      store.set('zh-intro', '1'); lenis && lenis.stop();
      const cv = $('.foam', intro), ctx = cv.getContext('2d'), dpr = Math.min(2, devicePixelRatio || 1);
      let W, H; const fit = () => { W = cv.width = innerWidth * dpr; H = cv.height = innerHeight * dpr; }; fit();
      const bubbles = []; for (let i = 0; i < (innerWidth < 700 ? 260 : 520); i++) bubbles.push({ x: Math.random(), y: Math.random(), r: 6 + Math.random() * 46, p: Math.random() * 6.28, s: .2 + Math.random() * .8 });
      const st = { fill: 0, wipe: -0.1 }; let run = true; const drips = [];
      (function loop(t) {
        if (!run) return; requestAnimationFrame(loop);
        ctx.clearRect(0, 0, W, H);
        const wy = st.wipe * H;
        for (const b of bubbles) {
          const y = b.y * H, x = b.x * W, r = b.r * dpr * Math.min(1, st.fill * 1.4 - b.y * .4);
          if (r <= 0 || y < wy) continue;
          const wob = Math.sin((t || 0) / 600 * b.s + b.p) * 1.5 * dpr;
          const g = ctx.createRadialGradient(x - r * .35, y - r * .35, r * .1, x, y, r);
          g.addColorStop(0, 'rgba(255,255,255,.95)'); g.addColorStop(.6, 'rgba(225,240,242,.75)'); g.addColorStop(1, 'rgba(160,210,215,.35)');
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x + wob, y, r, 0, 7); ctx.fill();
          ctx.strokeStyle = 'rgba(255,255,255,.6)'; ctx.lineWidth = 1 * dpr; ctx.stroke();
        }
        if (st.wipe > 0 && st.wipe < 1.1) { if (Math.random() < .5) drips.push({ x: Math.random() * W, y: wy, l: 0, v: 2 + Math.random() * 5 }); }
        ctx.strokeStyle = 'rgba(160,220,225,.5)'; ctx.lineCap = 'round';
        for (const d of drips) { d.l += d.v * dpr; ctx.lineWidth = 2 * dpr; ctx.beginPath(); ctx.moveTo(d.x, d.y - d.l * .2); ctx.lineTo(d.x, d.y + Math.min(d.l, 120 * dpr)); ctx.stroke(); }
      })();
      const done = () => { run = false; intro.classList.add('gone'); lenis && lenis.start(); heroIn(); };
      gsap.timeline({ onComplete: done })
        .to(st, { fill: 1, duration: 1.1, ease: 'power2.out' }, 0)
        .fromTo('.intro-logo .lg-car', { strokeDashoffset: 420 }, { strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut' }, .2)
        .from('.intro-logo .lg-zh, .intro-logo .lg-sub, .intro-logo p', { opacity: 0, y: 14, duration: .6, stagger: .12 }, .6)
        .from('.intro-logo .lg-b', { scale: 0, transformOrigin: 'center', opacity: 0, duration: .4, stagger: .08, ease: 'back.out(3)' }, 1.1)
        .to('.squeegee', { y: () => innerHeight + 80, duration: 1.15, ease: 'power2.inOut' }, 1.9)
        .to(st, { wipe: 1.15, duration: 1.15, ease: 'power2.inOut' }, 1.9)
        .to('.intro-logo', { opacity: 0, y: 30, duration: .5 }, 2.5)
        .to(intro, { opacity: 0, duration: .5 }, 3.0);
      $('.intro-skip').addEventListener('click', done);
    }
  } else heroIn();

  /* ================= FPV FLY: scroll-scrubbed frames ================= */
  if (fly) {
    const cv = $('.fly-cv'), ctx = cv.getContext('2d'), N = 236;
    const src = i => `seq/f${String(i + 1).padStart(3, '0')}.jpg`;
    const frames = new Array(N); let cur = 0, shown = -1;
    const load = i => { if (frames[i]) return; const im = new Image(); im.decoding = 'async'; im.src = src(i); frames[i] = im; im.onload = () => { if (Math.abs(i - cur) < 3) draw(cur, true); }; };
    const order = []; for (let s of [12, 4, 2, 1]) for (let i = 0; i < N; i += s) if (!order.includes(i)) order.push(i);
    load(0); let oi = 0; const pump = () => { for (let k = 0; k < 6 && oi < order.length; k++, oi++) load(order[oi]); if (oi < order.length) setTimeout(pump, 60); }; addEventListener('load', pump); setTimeout(pump, 1500);
    const size = () => { const d = Math.min(2, devicePixelRatio || 1); cv.width = cv.clientWidth * d; cv.height = cv.clientHeight * d; draw(cur, true); };
    const nearest = i => { for (let k = 0; k < N; k++) { for (const j of [i - k, i + k]) if (j >= 0 && j < N && frames[j] && frames[j].complete && frames[j].naturalWidth) return frames[j]; } return null; };
    function draw(i, force) {
      if (!force && i === shown) return; const im = nearest(i); if (!im) return; shown = i;
      const W = cv.width, H = cv.height, s = Math.max(W / im.naturalWidth, H / im.naturalHeight), w = im.naturalWidth * s, h = im.naturalHeight * s;
      ctx.drawImage(im, (W - w) / 2, (H - h) / 2, w, h);
    }
    addEventListener('resize', size); size();
    const alt = $('[data-alt]'), hb = $('.hud-bar i'), fcs = $$('.fc'), cue = $('.fly-cue');
    const phase = p => {
      const vis = [[0, .14], [.2, .4], [.62, .97]];
      fcs.forEach((f, i) => { const [a, b] = vis[i]; const o = p < a - .05 || p > b + .05 ? 0 : Math.min(1, (p - a + .05) / .05, (b + .05 - p) / .05); f.style.opacity = i === 0 && p < .05 ? 1 : o; f.style.transform = `translateY(${(1 - o) * 30}px)`; f.style.pointerEvents = o > .5 ? 'auto' : 'none'; });
      alt.textContent = Math.max(1, Math.round(p < .24 ? 42 - p * 40 : p < .45 ? 14 - (p - .24) * 40 : 2));
      hb.style.transform = `scaleX(${p})`; cue.style.opacity = p > .04 ? 0 : .85;
    };
    if (hasG) ScrollTrigger.create({ trigger: fly, start: 'top top', end: 'bottom bottom', scrub: true, onUpdate: s => { cur = Math.min(N - 1, Math.round(s.progress * (N - 1))); draw(cur); phase(s.progress); } });
    else addEventListener('scroll', () => { const p = Math.min(1, Math.max(0, scrollY / (fly.offsetHeight - innerHeight))); cur = Math.round(p * (N - 1)); draw(cur); phase(p); });
    phase(0);
  }

  /* ================= before / after ================= */
  $$('[data-ba]').forEach(b => { const r = $('input', b); r.addEventListener('input', () => b.style.setProperty('--p', r.value + '%')); });
  const tabs = $('[data-ba-tabs]');
  if (tabs) { const items = $$('.ba-stack .ba'); items[0].classList.add('on');
    $$('button', tabs).forEach(t => t.addEventListener('click', () => { $$('button', tabs).forEach(x => x.classList.toggle('on', x === t)); items.forEach((it, i) => it.classList.toggle('on', i === +t.dataset.i)); const it = items[+t.dataset.i]; if (hasG) { const o = { v: 15 }; gsap.to(o, { v: 85, duration: 1.4, ease: 'power2.inOut', yoyo: true, repeat: 1, onUpdate: () => { it.style.setProperty('--p', (o.v) + '%'); $('input', it).value = o.v; } }); } })); }
  if (hasG) $$('.ba').forEach(b => ScrollTrigger.create({ trigger: b, start: 'top 70%', once: true, onEnter: () => { const o = { v: 50 }; gsap.timeline().to(o, { v: 12, duration: .9, ease: 'power2.inOut', onUpdate: () => b.style.setProperty('--p', o.v + '%') }).to(o, { v: 88, duration: 1.3, ease: 'power2.inOut', onUpdate: () => b.style.setProperty('--p', o.v + '%') }).to(o, { v: 50, duration: .9, ease: 'power2.inOut', onUpdate: () => { b.style.setProperty('--p', o.v + '%'); $('input', b).value = o.v; } }); } }));

  /* ================= RAIN: ceramic coating simulator ================= */
  const rain = $('[data-rain]');
  if (rain) {
    const cv = $('canvas', rain), ctx = cv.getContext('2d'), wet = document.createElement('canvas'), wctx = wet.getContext('2d');
    let W, H, dpr = Math.min(2, devicePixelRatio || 1), seal = .5, gx = 0, gy = 1, drops = [], storm = 0, vis = false, last = 0;
    const size = () => { W = cv.width = wet.width = rain.clientWidth * dpr; H = cv.height = wet.height = rain.clientHeight * dpr; };
    size(); new ResizeObserver(size).observe(rain);
    new IntersectionObserver(([e]) => vis = e.isIntersecting).observe(rain);
    const sealX = () => W * (1 - seal);
    const add = (x, y, r) => drops.push({ x, y, r: r || (2.4 + Math.random() * 4.2) * dpr, vx: 0, vy: 0, life: 0 });
    $('[data-seal]').addEventListener('input', e => seal = +e.target.value / 100);
    rain.addEventListener('pointerdown', e => { const r = rain.getBoundingClientRect(); for (let i = 0; i < 26; i++) add((e.clientX - r.left) * dpr + (Math.random() - .5) * 140 * dpr, (e.clientY - r.top) * dpr + (Math.random() - .5) * 100 * dpr); });
    $('[data-storm]').addEventListener('click', () => storm = 4.5);
    if (fine) rain.addEventListener('pointermove', e => { const r = rain.getBoundingClientRect(); const t = ((e.clientX - r.left) / r.width - .5) * 1.1; gx = Math.sin(t); gy = Math.cos(t); });
    rain.addEventListener('pointerleave', () => { gx = 0; gy = 1; });
    const tiltBtn = $('[data-tilt]');
    const onOri = e => { if (e.gamma == null) return; const a = Math.max(-60, Math.min(60, e.gamma)) * Math.PI / 180; gx = Math.sin(a); gy = Math.cos(a); };
    tiltBtn.addEventListener('click', async () => { try { if (window.DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) { const p = await DeviceOrientationEvent.requestPermission(); if (p !== 'granted') return; } addEventListener('deviceorientation', onOri); tiltBtn.textContent = 'Neigung aktiv'; } catch (e) { tiltBtn.textContent = 'Nicht verfügbar'; } });
    if (!fine) addEventListener('deviceorientation', onOri);
    const paint = () => { // glossy dark teal panel with reflections
      const g = ctx.createLinearGradient(0, 0, W, H); g.addColorStop(0, '#0f3a40'); g.addColorStop(.5, '#0a252a'); g.addColorStop(1, '#123f45');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      const sx = sealX(); ctx.fillStyle = 'rgba(255,255,255,.035)'; ctx.fillRect(sx, 0, W - sx, H);
      const s = ctx.createLinearGradient(0, H * .15, W, H * .45); s.addColorStop(0, 'rgba(255,255,255,0)'); s.addColorStop(.5, 'rgba(255,255,255,.10)'); s.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = s; ctx.fillRect(0, 0, W, H);
      ctx.drawImage(wet, 0, 0);
      ctx.strokeStyle = 'rgba(89,211,214,.8)'; ctx.setLineDash([6 * dpr, 6 * dpr]); ctx.lineWidth = 2 * dpr; ctx.beginPath(); ctx.moveTo(sx, 0); ctx.lineTo(sx, H); ctx.stroke(); ctx.setLineDash([]);
    };
    const step = (t) => {
      requestAnimationFrame(step); if (!vis) return; const dt = Math.min(.05, (t - last) / 1000 || .016); last = t;
      const rate = storm > 0 ? 70 : 12; storm = Math.max(0, storm - dt);
      for (let i = 0; i < rate * dt * 10; i++) add(Math.random() * W, Math.random() * H * .9);
      wctx.globalCompositeOperation = 'destination-out'; wctx.fillStyle = `rgba(0,0,0,${.35 * dt})`; wctx.fillRect(0, 0, W, H); wctx.globalCompositeOperation = 'source-over';
      const sx = sealX(), G = 900 * dpr;
      for (const d of drops) {
        d.life += dt; const sealed = d.x > sx;
        if (sealed) { // beads: roll fast once big enough, stay round
          if (d.r > 2.2 * dpr) { d.vx += gx * G * dt * .9; d.vy += gy * G * dt * .9; } d.vx *= .9; d.vy *= .9;
        } else { // sheet: spreads, sticks, slow, leaves film
          d.r = Math.min(d.r * (1 + dt * .25), 9 * dpr); if (d.r > 6 * dpr) { d.vx += gx * G * dt * .08; d.vy += gy * G * dt * .08; } d.vx *= .7; d.vy *= .7;
          wctx.fillStyle = 'rgba(160,210,215,.05)'; wctx.beginPath(); wctx.ellipse(d.x, d.y, d.r * 1.6, d.r * 1.2, 0, 0, 7); wctx.fill();
        }
        d.x += d.vx * dt; d.y += d.vy * dt;
      }
      // merge (cheap grid)
      drops.sort((a, b) => a.x - b.x);
      for (let i = 0; i < drops.length; i++) { const a = drops[i]; if (a.dead) continue; for (let j = i + 1; j < drops.length && drops[j].x - a.x < 20 * dpr; j++) { const b = drops[j]; if (b.dead) continue; const dx = a.x - b.x, dy = a.y - b.y; if (dx * dx + dy * dy < (a.r + b.r) * (a.r + b.r) * .6) { a.r = Math.min(Math.sqrt(a.r * a.r + b.r * b.r), 14 * dpr); a.vy = (a.vy + b.vy) / 2; a.vx = (a.vx + b.vx) / 2; b.dead = true; } } }
      drops = drops.filter(d => !d.dead && d.y < H + 40 && d.y > -40 && d.x > -40 && d.x < W + 40).slice(-900);
      paint();
      for (const d of drops) {
        const sealed = d.x > sx;
        if (sealed) {
          const g = ctx.createRadialGradient(d.x - d.r * .35, d.y - d.r * .4, d.r * .1, d.x, d.y, d.r);
          g.addColorStop(0, 'rgba(255,255,255,.95)'); g.addColorStop(.35, 'rgba(160,230,235,.55)'); g.addColorStop(1, 'rgba(10,40,45,.55)');
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, 7); ctx.fill();
          ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.beginPath(); ctx.ellipse(d.x + d.r * .2, d.y + d.r * .9, d.r * .8, d.r * .25, 0, 0, 7); ctx.fill();
          if (Math.hypot(d.vx, d.vy) > 40 * dpr) { ctx.strokeStyle = 'rgba(200,240,242,.25)'; ctx.lineWidth = d.r * .6; ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(d.x - d.vx * .03, d.y - d.vy * .03); ctx.stroke(); }
        } else {
          ctx.fillStyle = 'rgba(170,215,220,.22)'; ctx.beginPath(); ctx.ellipse(d.x, d.y, d.r * 1.5, d.r * 1.1, 0, 0, 7); ctx.fill();
          ctx.strokeStyle = 'rgba(220,245,247,.25)'; ctx.lineWidth = 1 * dpr; ctx.stroke();
        }
      }
    };
    requestAnimationFrame(step);
  }

  /* ================= POLISH: swirl remover ================= */
  const pol = $('[data-polish]');
  if (pol) {
    const cv = $('canvas', pol), ctx = cv.getContext('2d'), pad = $('.pad', pol), sw = document.createElement('canvas'), sctx = sw.getContext('2d');
    let W, H, dpr = Math.min(2, devicePixelRatio || 1), lx = .5, ly = .35, down = false, done = 0, vis = false, ang = 0;
    const gl = $('[data-gloss]'), glb = $('[data-gloss-bar]');
    const scratch = () => { sctx.clearRect(0, 0, W, H); sctx.lineCap = 'round';
      for (let i = 0; i < 1400; i++) { const cx = Math.random() * W, cy = Math.random() * H, r = (20 + Math.random() * 160) * dpr, a = Math.random() * 6.28, l = .2 + Math.random() * .7; sctx.strokeStyle = `rgba(255,255,255,${.06 + Math.random() * .18})`; sctx.lineWidth = (.6 + Math.random() * 1.1) * dpr; sctx.beginPath(); sctx.arc(cx, cy, r, a, a + l); sctx.stroke(); }
      done = 0; baseA = measure() || 1; upd(); };
    const measure = () => { const d = sctx.getImageData(0, 0, W, H).data; let a = 0, n = 0; for (let i = 3; i < d.length; i += 4 * 97) { n++; a += d[i]; } return a / n; };
    let baseA = 1;
    function upd() { const m = measure(); const p = Math.max(0, Math.min(1, 1 - m / (baseA || 1))); const gls = Math.round(12 + p * 88); gl.textContent = gls + ' %'; glb.style.width = gls + '%'; }
    const size = () => { W = cv.width = sw.width = pol.clientWidth * dpr; H = cv.height = sw.height = pol.clientHeight * dpr; scratch(); };
    size(); let rw = pol.clientWidth; new ResizeObserver(() => { if (Math.abs(pol.clientWidth - rw) > 30) { rw = pol.clientWidth; size(); } }).observe(pol);
    new IntersectionObserver(([e]) => vis = e.isIntersecting).observe(pol);
    const rub = (x, y) => { sctx.globalCompositeOperation = 'destination-out'; const g = sctx.createRadialGradient(x, y, 0, x, y, 60 * dpr); g.addColorStop(0, 'rgba(0,0,0,.5)'); g.addColorStop(1, 'rgba(0,0,0,0)'); sctx.fillStyle = g; sctx.beginPath(); sctx.arc(x, y, 60 * dpr, 0, 7); sctx.fill(); sctx.globalCompositeOperation = 'source-over'; };
    const pos = e => { const r = pol.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    let mt = 0;
    pol.addEventListener('pointerenter', () => pol.classList.add('on'));
    pol.addEventListener('pointerleave', () => { pol.classList.remove('on', 'spin'); down = false; });
    pol.addEventListener('pointerdown', e => { down = true; pol.classList.add('on', 'spin'); pol.setPointerCapture(e.pointerId); });
    addEventListener('pointerup', () => { down = false; pol.classList.remove('spin'); if (!fine) pol.classList.remove('on'); });
    pol.addEventListener('pointermove', e => { const [x, y] = pos(e); pad.style.transform = `translate(${x}px,${y}px)`; lx = x / pol.clientWidth; ly = y / pol.clientHeight; if (down) { rub(x * dpr, y * dpr); const n = performance.now(); if (n - mt > 150) { mt = n; upd(); } } });
    $('[data-polish-reset]').addEventListener('click', scratch);
    baseA = measure();
    (function loop(t) { requestAnimationFrame(loop); if (!vis) return;
      if (!down && !pol.classList.contains('on')) { lx = .5 + Math.sin(t / 2600) * .3; ly = .35 + Math.sin(t / 1900) * .15; }
      const g = ctx.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#16191d'); g.addColorStop(1, '#050607'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      const sx = lx * W, sy = ly * H;
      const sun = ctx.createRadialGradient(sx, sy, 0, sx, sy, 260 * dpr); sun.addColorStop(0, 'rgba(255,250,235,.95)'); sun.addColorStop(.06, 'rgba(255,240,210,.55)'); sun.addColorStop(.3, 'rgba(120,140,150,.12)'); sun.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = sun; ctx.fillRect(0, 0, W, H);
      // swirls visible around the light (holograms)
      ctx.save(); ctx.beginPath(); ctx.arc(sx, sy, 300 * dpr, 0, 7); ctx.clip(); ctx.globalAlpha = .95; ctx.drawImage(sw, 0, 0); ctx.restore();
      ctx.globalAlpha = .25; ctx.drawImage(sw, 0, 0); ctx.globalAlpha = 1;
      // horizon reflection
      ctx.fillStyle = 'rgba(255,255,255,.05)'; ctx.fillRect(0, H * .62, W, 2 * dpr);
    })();
  }

  /* ================= OZONE ================= */
  const oz = $('[data-ozone-stage]');
  if (oz) {
    const cv = $('canvas', oz), ctx = cv.getContext('2d'), btn = $('[data-ozone]'), st = $('[data-oz-state]');
    let W, H, dpr = Math.min(2, devicePixelRatio || 1), hold = false, vis = false, mol = [];
    const size = () => { W = cv.width = oz.clientWidth * dpr; H = cv.height = oz.clientHeight * dpr; }; size(); new ResizeObserver(size).observe(oz);
    new IntersectionObserver(([e]) => vis = e.isIntersecting).observe(oz);
    const mk = () => [['Rauch', .25, .35, '170,160,140'], ['Hund', .7, .3, '150,130,90'], ['Essen', .35, .72, '170,140,80'], ['Feuchtigkeit', .72, .7, '110,140,110']].map(([n, x, y, c]) => ({ n, x, y, c, a: 1, p: Math.random() * 6 }));
    let clouds = mk();
    const setState = () => { const left = clouds.filter(c => c.a > .05).length; st.textContent = left ? `${left} ${left === 1 ? 'Geruch' : 'Gerüche'} im Innenraum` : 'Neutralisiert. Danach wird gründlich gelüftet.'; oz.classList.toggle('clean', !left); btn.textContent = left ? 'Ozon gedrückt halten' : 'Nochmal von vorn'; };
    const on = e => { e.preventDefault(); if (!clouds.some(c => c.a > .05)) { clouds = mk(); setState(); return; } hold = true; btn.classList.add('hold'); };
    const off = () => { hold = false; btn.classList.remove('hold'); };
    btn.addEventListener('pointerdown', on); addEventListener('pointerup', off); btn.addEventListener('pointerleave', off); btn.addEventListener('contextmenu', e => e.preventDefault());
    btn.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); if (!e.repeat) on(e); } }); btn.addEventListener('keyup', off);
    (function loop(t) { requestAnimationFrame(loop); if (!vis) return; ctx.clearRect(0, 0, W, H);
      if (hold) for (let i = 0; i < 3; i++) mol.push({ x: W * (.45 + Math.random() * .1), y: H * .98, vx: (Math.random() - .5) * 6 * dpr, vy: -(3 + Math.random() * 4) * dpr, r: (4 + Math.random() * 3) * dpr, a: 6.28 * Math.random(), l: 1 });
      for (const c of clouds) { if (c.a <= .02) continue; const cx = c.x * W + Math.sin(t / 1300 + c.p) * 14 * dpr, cy = c.y * H + Math.cos(t / 1700 + c.p) * 10 * dpr;
        for (let k = 0; k < 5; k++) { const r = (60 + k * 12) * dpr * (.6 + c.a * .4), ox = Math.sin(c.p + k * 1.7) * 30 * dpr, oy = Math.cos(c.p + k) * 18 * dpr; const g = ctx.createRadialGradient(cx + ox, cy + oy, 0, cx + ox, cy + oy, r); g.addColorStop(0, `rgba(${c.c},${.35 * c.a})`); g.addColorStop(1, `rgba(${c.c},0)`); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx + ox, cy + oy, r, 0, 7); ctx.fill(); }
        ctx.globalAlpha = c.a; ctx.fillStyle = '#fff'; ctx.font = `700 ${14 * dpr}px Figtree,sans-serif`; ctx.textAlign = 'center'; ctx.fillText(c.n, cx, cy); ctx.globalAlpha = 1; c.cx = cx; c.cy = cy; }
      for (const m of mol) { m.x += m.vx; m.y += m.vy; m.vx += (Math.random() - .5) * .6 * dpr; m.vy *= .995; m.a += .05; m.l -= .004;
        for (const c of clouds) if (c.a > .02 && c.cx && Math.hypot(m.x - c.cx, m.y - c.cy) < 80 * dpr) { c.a = Math.max(0, c.a - .006); m.l -= .02; }
        ctx.globalAlpha = Math.max(0, m.l); ctx.fillStyle = '#9ff0f2';
        for (let k = 0; k < 3; k++) { const a = m.a + k * 2.09; ctx.beginPath(); ctx.arc(m.x + Math.cos(a) * m.r, m.y + Math.sin(a) * m.r, m.r * .55, 0, 7); ctx.fill(); }
        ctx.globalAlpha = 1; }
      mol = mol.filter(m => m.l > 0 && m.y > -20).slice(-500);
      if (t % 20 < 1 || hold) setState();
    })();
    setState();
  }

  /* ================= PACKAGE CONFIGURATOR ================= */
  const veh = $('[data-veh]');
  if (veh) {
    const mods = $('[data-mods]'), tv = $('[data-tk-veh]'), tl = $('[data-tk-list]'), no = $('[data-tk-no]');
    let v = 'Kleinwagen';
    const render = () => { tv.textContent = v; const on = $$('button.on', mods).map(b => b.dataset.m); tl.innerHTML = on.length ? on.map(m => `<li>${m}</li>`).join('') : '<li style="opacity:.5">Noch nichts gewählt</li>'; no.textContent = 'Nr. ' + (1000 + (v.length * 37 + on.join('').length * 13) % 9000); };
    $$('button', veh).forEach(b => b.addEventListener('click', () => { $$('button', veh).forEach(x => x.classList.toggle('on', x === b)); v = b.dataset.v; const wm = /Wohn/.test(v); const roof = $('[data-m^="Dach"]', mods); roof.style.display = wm ? '' : 'none'; if (!wm) roof.classList.remove('on'); render(); }));
    $$('button', mods).forEach(b => b.addEventListener('click', () => { b.classList.toggle('on'); render(); }));
    $('[data-m^="Dach"]', mods).style.display = 'none';
    $('[data-tk-share]').addEventListener('click', async e => { const txt = `Anfrage Z&H Aufbereitung\nFahrzeug: ${v}\nLeistungen: ${$$('button.on', mods).map(b => b.textContent).join(', ') || '—'}\nTel. 06841 / 890 200`; try { if (navigator.share) { await navigator.share({ title: 'Mein Pflegepaket', text: txt }); return; } await navigator.clipboard.writeText(txt); e.target.textContent = 'Kopiert ✓'; } catch (err) {} });
    render();
  }

  /* ================= WEATHER (Open-Meteo, Kirkel) ================= */
  const wx = $('[data-wx]');
  if (wx) {
    const ICON = c => c === 0 ? '☀️' : c <= 2 ? '🌤️' : c === 3 ? '☁️' : c <= 48 ? '🌫️' : c <= 67 ? '🌧️' : c <= 77 ? '🌨️' : c <= 82 ? '🌦️' : '⛈️';
    const go = () => fetch('https://api.open-meteo.com/v1/forecast?latitude=49.3196&longitude=7.2845&daily=weathercode,temperature_2m_max,precipitation_sum,precipitation_probability_max&timezone=Europe%2FBerlin&forecast_days=7')
      .then(r => r.json()).then(d => {
        const D = d.daily, days = D.time.map((t, i) => ({ t: new Date(t + 'T12:00'), c: D.weathercode[i], tx: Math.round(D.temperature_2m_max[i]), pr: D.precipitation_sum[i] || 0, pp: D.precipitation_probability_max ? D.precipitation_probability_max[i] : null }));
        const wk = days.filter(x => x.t.getDay() >= 1 && x.t.getDay() <= 5); const best = (wk.length ? wk : days).reduce((a, b) => (b.pr + (b.pp || 0) / 50) < (a.pr + (a.pp || 0) / 50) ? b : a);
        const max = Math.max(5, ...days.map(x => x.pr));
        wx.innerHTML = days.map(x => `<div class="wd${x === best ? ' best' : ''}"><small>${x.t.toLocaleDateString('de-DE', { weekday: 'short' })}</small><span class="ic" aria-hidden="true">${ICON(x.c)}</span><b>${x.tx}°</b><span class="pr" title="${x.pr.toFixed(1)} mm"><i style="height:${Math.min(100, x.pr / max * 100)}%"></i></span><span class="mm">${x.pr.toFixed(1)} mm</span></div>`).join('') +
          `<p class="wx-tip">Bester Abholtag: <b>${best.t.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' })}</b>. ${days.some(x => x.pr > 2) ? 'Regen in Sicht? Mit Keramikversiegelung perlt er einfach ab.' : 'Trocken und klar – perfekt für frischen Glanz.'}</p>`;
      }).catch(() => { wx.closest('section').style.display = 'none'; });
    const wio = new IntersectionObserver(([e]) => { if (e.isIntersecting) { wio.disconnect(); go(); } }, { rootMargin: '600px' }); wio.observe(wx);
  }

  /* ================= SEASON PLANNER (.ics) ================= */
  const pls = $('[data-pl-start]');
  if (pls) {
    const ple = $('[data-pl-end]'), yr = $('[data-pl-year]'), info = $('[data-pl-info]'), M = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
    const calc = () => { const s = +pls.value, e = +ple.value, now = new Date(); let y = now.getFullYear(); let a = new Date(y, s, 1); a.setDate(a.getDate() - 21); if (a < now) { y++; a = new Date(y, s, 1); a.setDate(a.getDate() - 21); } const b = new Date(y + (e < s ? 1 : 0), e + 1, 7); return { s, e, a, b }; };
    const draw = () => { const { s, e, a, b } = calc(); yr.innerHTML = M.map((m, i) => { const tour = s <= e ? i >= s && i <= e : i >= s || i <= e; const rem = i === a.getMonth() || i === b.getMonth(); return `<div class="${rem ? 'rem' : tour ? 'tour' : ''}"><i></i><span>${m}</span></div>`; }).join(''); info.textContent = `Erinnerung 1: ${a.toLocaleDateString('de-DE')} (Saison-Aufbereitung) · Erinnerung 2: ${b.toLocaleDateString('de-DE')} (Einwintern)`; };
    pls.addEventListener('change', draw); ple.addEventListener('change', draw); draw();
    const f = d => d.toISOString().slice(0, 10).replace(/-/g, '');
    $('[data-pl-ics]').addEventListener('click', () => { const { a, b } = calc(); const ev = (d, s, desc) => { const e = new Date(d); e.setDate(e.getDate() + 1); return `BEGIN:VEVENT\r\nUID:${f(d)}-${Math.random().toString(36).slice(2)}@zh-aufbereitung\r\nDTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').slice(0, 15)}Z\r\nDTSTART;VALUE=DATE:${f(d)}\r\nDTEND;VALUE=DATE:${f(e)}\r\nSUMMARY:${s}\r\nDESCRIPTION:${desc}\\nZ&H Aufbereitung · Ortsstraße 14 · 66459 Kirkel-Altstadt · Tel. 06841 / 890 200\r\nBEGIN:VALARM\r\nTRIGGER:-PT0M\r\nACTION:DISPLAY\r\nDESCRIPTION:${s}\r\nEND:VALARM\r\nEND:VEVENT\r\n`; };
      const ics = `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Z&H Aufbereitung//Saisonplaner//DE\r\n${ev(a, 'Wohnmobil: Termin für Saison-Aufbereitung vereinbaren', 'Jetzt bei Z&H anrufen: Außenreinigung, Dach, Keramikversiegelung, Innenraum.')}${ev(b, 'Wohnmobil einwintern: Aufbereitung bei Z&H', 'Vor dem Winter gründlich reinigen und versiegeln lassen.')}END:VCALENDAR\r\n`;
      const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' })); const l = document.createElement('a'); l.href = url; l.download = 'wohnmobil-saison-zh-aufbereitung.ics'; document.body.appendChild(l); l.click(); setTimeout(() => { URL.revokeObjectURL(url); l.remove(); }, 1000); });
  }

  /* ================= Leistungen nav spy ================= */
  const lnav = $$('.lnav a');
  if (lnav.length) { const map = new Map(lnav.map(a => [a.getAttribute('href').slice(1), a]));
    const spy = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return; const a = map.get(e.target.id); lnav.forEach(x => x.classList.toggle('on', x === a)); a && a.parentElement.scrollTo({ left: a.offsetLeft - 20, behavior: 'smooth' }); }), { rootMargin: '-45% 0px -50% 0px' });
    $$('.sv').forEach(s => spy.observe(s));
    lnav.forEach(a => a.addEventListener('click', e => { e.preventDefault(); const t = $(a.getAttribute('href')); lenis ? lenis.scrollTo(t, { offset: -120 }) : t.scrollIntoView({ behavior: 'smooth' }); })); }

  /* anchor links with lenis */
  $$('a[href^="#"]').forEach(a => { if (a.closest('.lnav')) return; a.addEventListener('click', e => { const t = $(a.getAttribute('href')); if (!t) return; e.preventDefault(); lenis ? lenis.scrollTo(t, { offset: -70 }) : t.scrollIntoView({ behavior: 'smooth' }); }); });
  if (location.hash && $(location.hash)) setTimeout(() => lenis ? lenis.scrollTo($(location.hash), { offset: -70, immediate: true }) : null, 400);

  /* ================= CTA bubbles ================= */
  const cb = $('.cta-bubbles');
  if (cb && !reduce) { const ctx = cb.getContext('2d'); let W, H, vis = false, bs = []; const dpr = Math.min(2, devicePixelRatio || 1);
    const size = () => { W = cb.width = cb.clientWidth * dpr; H = cb.height = cb.clientHeight * dpr; }; size(); addEventListener('resize', size);
    new IntersectionObserver(([e]) => vis = e.isIntersecting).observe(cb);
    (function loop() { requestAnimationFrame(loop); if (!vis) return; if (Math.random() < .35) bs.push({ x: Math.random() * W, y: H + 20, r: (3 + Math.random() * 22) * dpr, v: (.4 + Math.random() * 1.2) * dpr, p: Math.random() * 6 });
      ctx.clearRect(0, 0, W, H); for (const b of bs) { b.y -= b.v; b.p += .02; const x = b.x + Math.sin(b.p) * 8 * dpr; ctx.strokeStyle = 'rgba(255,255,255,.35)'; ctx.lineWidth = 1.2 * dpr; ctx.beginPath(); ctx.arc(x, b.y, b.r, 0, 7); ctx.stroke(); ctx.fillStyle = 'rgba(255,255,255,.5)'; ctx.beginPath(); ctx.arc(x - b.r * .35, b.y - b.r * .35, b.r * .18, 0, 7); ctx.fill(); }
      bs = bs.filter(b => b.y > -40); })(); }

  if (hasG) { ScrollTrigger.sort(); ScrollTrigger.refresh(); addEventListener('load', () => ScrollTrigger.refresh()); }
})();
