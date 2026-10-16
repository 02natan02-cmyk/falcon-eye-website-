/* Z&H Aufbereitung – Designentwurf v2 von Falcon Eye */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement, reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const hasG = !!(window.gsap && window.ScrollTrigger);
  const store = { get(k) { try { return sessionStorage.getItem(k) } catch (e) { return null } }, set(k, v) { try { sessionStorage.setItem(k, v) } catch (e) {} } };
  const DPR = () => Math.min(2, devicePixelRatio || 1);
  const portrait = () => innerHeight > innerWidth * 1.05;
  if (hasG) gsap.registerPlugin(ScrollTrigger);
  const onView = (el, fn, margin = '200px') => { if (!el) return; let done = false; const go = () => { if (done) return; done = true; fn(); }; const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { io.disconnect(); go(); } }, { rootMargin: margin }); io.observe(el); const chk = () => { if (done) return removeEventListener('scroll', chk); const r = el.getBoundingClientRect(); if (r.top < innerHeight + 200 && r.bottom > -200) go(); }; addEventListener('scroll', chk, { passive: true }); setTimeout(chk, 300); };
  const visTrack = (el, cb) => { let v = false; new IntersectionObserver(([e]) => { v = e.isIntersecting; cb && cb(v); }).observe(el); const chk = () => { const r = el.getBoundingClientRect(); v = r.top < innerHeight && r.bottom > 0; }; addEventListener('scroll', chk, { passive: true }); chk(); return () => v; };

  /* ---------- smooth scroll ---------- */
  let lenis = null;
  if (hasG && window.Lenis && !reduce) { lenis = new Lenis({ lerp: .1 }); lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0); }

  /* ---------- header: hell/dunkel je nach Abschnitt ---------- */
  const hdr = $('.hdr'), bar = $('.progress i'), dock = $('.dock'); let lastY = 0;
  const darkSel = '.hero,.night,.fpv,.gloss,.cta,.ftr,.phero,.arbeit';
  const onScroll = () => {
    const y = scrollY, max = root.scrollHeight - innerHeight;
    hdr.style.visibility = 'hidden'; const el = document.elementFromPoint(innerWidth / 2, 30); hdr.style.visibility = '';
    const sec = el && el.closest(darkSel), top = y < 30 && $('.hero,.phero');
    hdr.classList.toggle('dark', !!sec && !top); hdr.classList.toggle('solid', !sec && !top);
    hdr.classList.toggle('hide', y > 600 && y > lastY + 2 && !root.classList.contains('menu-open'));
    if (dock) dock.classList.toggle('away', y > lastY + 2 && y > 300 && false);
    lastY = y; bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const burger = $('.burger');
  burger.addEventListener('click', () => { const o = root.classList.toggle('menu-open'); burger.setAttribute('aria-expanded', o); $('.mnav').setAttribute('aria-hidden', !o); lenis && (o ? lenis.stop() : lenis.start()); });
  $$('.mnav a').forEach(a => a.addEventListener('click', () => { root.classList.remove('menu-open'); lenis && lenis.start(); }));

  /* ---------- Öffnungszeiten Mo–Fr 08:00–16:30 ---------- */
  const berlin = () => { const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Berlin', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date()).map(x => [x.type, x.value])); return { d: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(p.weekday), m: (+p.hour % 24) * 60 + +p.minute }; };
  const O = 480, C = 990, DN = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
  const hours = () => {
    const { d, m } = berlin(), wd = d >= 1 && d <= 5, open = wd && m >= O && m < C;
    let txt; if (open) { const r = C - m; txt = `Geöffnet · noch ${Math.floor(r / 60) ? Math.floor(r / 60) + ' Std ' : ''}${r % 60} Min`; }
    else { let k = 0; if (!(wd && m < O)) { do { k++; } while ([0, 6].includes((d + k) % 7)); } txt = `Geschlossen · öffnet ${k === 0 ? 'heute' : k === 1 ? 'morgen' : DN[(d + k) % 7]} um 08:00`; }
    $$('[data-status]').forEach(s => { s.classList.toggle('open', open); s.classList.toggle('closed', !open); s.querySelector('b').textContent = open ? 'Jetzt geöffnet' : txt.replace('Geschlossen · ', 'Geschlossen – '); });
    const big = $('[data-status-big]'), sub = $('[data-status-sub]'); if (big) { big.textContent = open ? 'Geöffnet' : 'Mo–Fr'; sub.textContent = open ? txt.replace('Geöffnet · ', '') + ' heute' : '08:00–16:30 · ' + txt.split(' · ')[1]; }
    $$('[data-countdown]').forEach(c => c.textContent = txt);
  };
  hours(); setInterval(hours, 30000);

  /* ---------- Zähler ---------- */
  $$('[data-count]').forEach(c => onView(c, () => { if (reduce) return; const end = +c.dataset.count, dec = +(c.dataset.dec || 0), t0 = performance.now(); (function f(n) { const p = Math.min(1, (n - t0) / 1600), v = end * (1 - Math.pow(1 - p, 3)); c.textContent = v.toFixed(dec).replace('.', ','); if (p < 1) requestAnimationFrame(f); else c.textContent = end.toFixed(dec).replace('.', ','); })(t0); }, '0px'));

  /* ---------- Videos: Quelle je nach Format, erst kurz vor Sicht laden ---------- */
  const pickSrc = v => v.dataset.src || (portrait() && v.dataset.m ? v.dataset.m : v.dataset.d);
  $$('video[data-src],video[data-d]').forEach(v => {
    v.muted = true; v.setAttribute('muted', '');
    const load = () => { if (v.src) return; const s = pickSrc(v); if (s) { v.src = s; } };
    if (v.classList.contains('hero-v') || v.closest('.phero')) { if (portrait() && v.classList.contains('hero-v')) v.poster = 'vid/hero_poster_m_turm.jpg'; load(); }
    else onView(v, load, '600px');
  });
  const vio = new IntersectionObserver(es => es.forEach(e => { const v = e.target; if (e.isIntersecting) { if (!v.src && (v.dataset.src || v.dataset.d)) v.src = pickSrc(v); const p = v.play(); p && p.catch(() => {}); } else v.pause(); }), { threshold: .05 });
  $$('video[muted],video[data-src],video[data-d]').forEach(v => { v.muted = true; if (!v.closest('.lb')) vio.observe(v); });

  /* ---------- Imagefilm ---------- */
  const lb = $('.lb');
  $$('[data-film]').forEach(b => b.addEventListener('click', () => { const v = $('video', lb); v.src = 'vid/imagefilm.mp4'; v.poster = 'vid/imagefilm.jpg'; lb.hidden = false; v.muted = false; v.play().catch(() => {}); lenis && lenis.stop(); }));
  const closeLb = () => { const v = $('video', lb); v.pause(); lb.hidden = true; lenis && lenis.start(); };
  $('.lb-x').addEventListener('click', closeLb); lb.addEventListener('click', e => { if (e.target === lb) closeLb(); }); addEventListener('keydown', e => { if (e.key === 'Escape' && !lb.hidden) closeLb(); });

  /* =====================================================================
     INTRO: Seifenblasen – die große platzt, das Logo steht scharf da
     ===================================================================== */
  const intro = $('.intro');
  const heroIn = () => { if (!hasG || reduce) return; gsap.from('.hero-c > *', { y: 46, opacity: 0, duration: 1.2, ease: 'power3.out', stagger: .09 }); gsap.from('.hud > span', { opacity: 0, duration: 1, delay: .4, stagger: .1 }); };
  if (intro) {
    const force = /[?&]intro/.test(location.search);
    if (!hasG || reduce || !force) { /* Intro nur noch mit ?intro – der Kirchturm-Flug ist der erste Eindruck */ intro.classList.add('gone'); heroIn(); }
    else {
      intro.classList.remove('gone'); lenis && lenis.stop(); root.style.overflow = 'hidden';
      const cv = $('.ib', intro), ctx = cv.getContext('2d'), mark = $('.intro-mark', intro);
      let W, H, dpr = DPR(); const fit = () => { dpr = DPR(); W = cv.width = innerWidth * dpr; H = cv.height = innerHeight * dpr; }; fit(); addEventListener('resize', fit);
      const S = () => Math.min(W, H);
      const bubbles = [], drops = [], rings = [];
      const mk = (big) => ({ x: big ? W / 2 : Math.random() * W, y: big ? H + S() * .45 : H + 40 * dpr + Math.random() * H * .6, r: big ? S() * .3 : (10 + Math.random() * 46) * dpr, vy: big ? 0 : -(18 + Math.random() * 40) * dpr, ph: Math.random() * 6.28, hue: Math.random() * 360, big, wob: Math.random() * 6.28 });
      for (let i = 0; i < (innerWidth < 700 ? 9 : 16); i++) bubbles.push(mk(false));
      const main = mk(true); bubbles.push(main);
      const film = (b, t) => { // Seifenhaut: Interferenzfarben am Rand
        const { x, y, r } = b, h = (b.hue + t * 40) % 360;
        const body = ctx.createRadialGradient(x, y, r * .55, x, y, r);
        body.addColorStop(0, 'rgba(255,255,255,0.0)'); body.addColorStop(.82, 'rgba(170,235,245,0.05)'); body.addColorStop(1, 'rgba(210,250,255,0.22)');
        ctx.fillStyle = body; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
        const g = ctx.createLinearGradient(x - r, y - r, x + r, y + r);
        g.addColorStop(0, `hsla(${h},95%,70%,.55)`); g.addColorStop(.33, `hsla(${h + 90},95%,68%,.35)`); g.addColorStop(.66, `hsla(${h + 200},95%,70%,.5)`); g.addColorStop(1, `hsla(${h + 300},95%,72%,.4)`);
        ctx.strokeStyle = g; ctx.lineWidth = Math.max(1.2 * dpr, r * .045); ctx.beginPath(); ctx.arc(x, y, r * .985, 0, 7); ctx.stroke();
        ctx.strokeStyle = 'rgba(255,255,255,.75)'; ctx.lineWidth = Math.max(1 * dpr, r * .035); ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(x, y, r * .86, Math.PI * 1.08, Math.PI * 1.38); ctx.stroke();
        ctx.strokeStyle = 'rgba(255,255,255,.35)'; ctx.beginPath(); ctx.arc(x, y, r * .86, Math.PI * .15, Math.PI * .3); ctx.stroke();
        ctx.fillStyle = 'rgba(255,255,255,.9)'; ctx.beginPath(); ctx.ellipse(x - r * .42, y - r * .48, r * .09, r * .05, -.7, 0, 7); ctx.fill();
      };
      const pop = (b) => { b.dead = true; const n = b.big ? 70 : 16;
        for (let i = 0; i < n; i++) { const a = Math.random() * 6.28, sp = (b.big ? 380 + Math.random() * 900 : 120 + Math.random() * 260) * dpr; drops.push({ x: b.x + Math.cos(a) * b.r, y: b.y + Math.sin(a) * b.r, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, r: (b.big ? 1.5 + Math.random() * 3.5 : 1 + Math.random() * 2) * dpr, l: 1, h: (b.hue + i * 9) % 360 }); }
        rings.push({ x: b.x, y: b.y, r: b.r, l: 1, big: b.big });
      };
      let run = true, t0 = performance.now(), last = t0, mainPopped = false;
      const loop = (now) => {
        if (!run) return; requestAnimationFrame(loop);
        const dt = Math.min(.05, (now - last) / 1000), t = (now - t0) / 1000; last = now;
        ctx.clearRect(0, 0, W, H);
        for (const b of bubbles) {
          if (b.dead) continue;
          if (b.big) { const p = Math.min(1, t / 1.5), e = 1 - Math.pow(1 - p, 3); b.y = (H + S() * .45) + (H / 2 - (H + S() * .45)) * e; b.x = W / 2 + Math.sin(t * 1.3) * 8 * dpr; b.r = S() * (.3 + .03 * Math.sin(t * 2.2)); }
          else { b.y += b.vy * dt; b.x += Math.sin(t * 1.2 + b.wob) * 12 * dpr * dt; if (b.y < -b.r * 2) Object.assign(b, mk(false), { y: H + b.r * 2 }); }
          film(b, t);
        }
        for (const r of rings) { r.l -= dt * (r.big ? 1.6 : 3); r.r += dt * (r.big ? 600 : 200) * dpr; if (r.l <= 0) continue; ctx.strokeStyle = `rgba(160,245,250,${r.l * .5})`; ctx.lineWidth = 2 * dpr * r.l; ctx.beginPath(); ctx.arc(r.x, r.y, r.r, 0, 7); ctx.stroke(); }
        for (const d of drops) { d.vy += 900 * dpr * dt; d.vx *= .985; d.x += d.vx * dt; d.y += d.vy * dt; d.l -= dt * .9; if (d.l <= 0) continue; ctx.fillStyle = `hsla(${d.h},90%,82%,${d.l})`; ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, 7); ctx.fill(); }
        if (!mainPopped && t > 1.85) { mainPopped = true; pop(main); reveal(); }
      };
      requestAnimationFrame(loop);
      const reveal = () => {
        gsap.to(mark, { opacity: 1, filter: 'blur(0px)', scale: 1, duration: .55, ease: 'power3.out' });
        gsap.fromTo(mark.querySelectorAll('.lg-l'), { strokeDasharray: 900, strokeDashoffset: 900 }, { strokeDashoffset: 0, duration: 1.1, ease: 'power2.out', stagger: .05 });
        gsap.from(mark.querySelectorAll('.lg-bub circle'), { scale: 0, transformOrigin: 'center', transformBox: 'fill-box', duration: .5, ease: 'back.out(3)', stagger: .06, delay: .25 });
      };
      gsap.to(mark, { opacity: .28, duration: 1.2, delay: .3 });
      intro.addEventListener('pointerdown', e => { const x = e.clientX * dpr, y = e.clientY * dpr; for (const b of bubbles) { if (!b.dead && Math.hypot(b.x - x, b.y - y) < b.r) { pop(b); if (b.big && !mainPopped) { mainPopped = true; reveal(); } else if (!b.big) setTimeout(() => { Object.assign(b, mk(false)); b.dead = false; }, 900); break; } } });
      let fin = false; const done = () => { if (fin) return; fin = true; gsap.to(intro, { yPercent: -100, duration: .9, ease: 'power3.inOut', onComplete: () => { run = false; intro.classList.add('gone'); } }); root.style.overflow = ''; lenis && lenis.start(); setTimeout(heroIn, 250); };
      setTimeout(done, 4300); setTimeout(() => { if (!fin) { fin = true; run = false; intro.classList.add('gone'); root.style.overflow = ''; lenis && lenis.start(); } }, 8000);
      $('.intro-skip').addEventListener('click', e => { e.stopPropagation(); if (!mainPopped) { mainPopped = true; pop(main); reveal(); } setTimeout(done, 350); });
    }
  } else heroIn();

  /* ---------- Hero: Höhenmesser aus dem Video ---------- */
  const hv = $('.hero-v'), altEl = $('[data-alt]');
  if (hv && altEl) { const upd = () => { const d = hv.duration || 35.9, p = (hv.currentTime % d) / d, a = p < .5 ? 42 - (p / .5) * 39 : 3 + ((p - .5) / .5) * 39; altEl.textContent = Math.max(2, Math.round(a)); }; hv.addEventListener('timeupdate', upd); }
  if (hv) { const tryPlay = () => { const p = hv.play(); p && p.catch(() => {}); }; hv.addEventListener('canplay', tryPlay, { once: true }); tryPlay(); }

  /* =====================================================================
     BEFUND: Abzieher über das Bild ziehen
     ===================================================================== */
  const bfs = $$('[data-bf]'); const sum = $('[data-bf-sum]');
  const countDone = () => { if (!sum) return; const n = bfs.filter(b => b.classList.contains('done')).length; sum.textContent = n === bfs.length ? 'Alles sauber. So fährt es vom Hof.' : `${n} von ${bfs.length} Stellen sauber`; sum.classList.toggle('ok', n === bfs.length); };
  bfs.forEach((bf, idx) => {
    const st = $('.bf-stage', bf), inp = $('input', st), cv = $('.bf-wet', st), ctx = cv.getContext('2d');
    let x = 0, W = 0, H = 0, drips = [], vis = false, lastX = 0;
    const size = () => { const d = DPR(); W = cv.width = st.clientWidth * d; H = cv.height = st.clientHeight * d; };
    size(); new ResizeObserver(size).observe(st);
    const knob = $('.bf-blade i', st);
    const set = v => { v = Math.max(0, Math.min(100, v)); const dx = v - x; x = v; st.style.setProperty('--x', v + '%'); { const w = st.clientWidth, kw = (knob && knob.offsetWidth) || 52, px = v / 100 * w, h = kw / 2 + 6; st.style.setProperty('--ko', (Math.max(h, Math.min(w - h, px)) - px - kw / 2) + 'px'); } inp.value = Math.round(v); bf.classList.toggle('part', v > 4); const was = bf.classList.contains('done'); bf.classList.toggle('done', v > 95); if (was !== bf.classList.contains('done')) countDone();
      if (Math.abs(dx) > .4 && Math.random() < .55) drips.push({ x: v / 100 * W - Math.sign(dx) * (4 + Math.random() * 10) * DPR(), y: Math.random() * H, l: 0, v: (30 + Math.random() * 80), w: (1 + Math.random() * 1.8) * DPR(), a: .8 }); };
    set(0); new ResizeObserver(() => set(x)).observe(st);
    inp.addEventListener('input', () => set(+inp.value));
    let down = false, sx = 0, sy = 0, dragging = false;
    st.addEventListener('pointerdown', e => { down = true; dragging = false; sx = e.clientX; sy = e.clientY; if (e.pointerType === 'mouse') { dragging = true; st.setPointerCapture(e.pointerId); move(e); } });
    const move = e => { const r = st.getBoundingClientRect(); set((e.clientX - r.left) / r.width * 100); };
    st.addEventListener('pointermove', e => { if (!down) return; if (!dragging) { if (Math.abs(e.clientX - sx) > 6 && Math.abs(e.clientX - sx) > Math.abs(e.clientY - sy)) { dragging = true; try { st.setPointerCapture(e.pointerId); } catch (_) {} } else return; } move(e); });
    const up = () => { down = false; dragging = false; };
    st.addEventListener('pointerup', up); st.addEventListener('pointercancel', up);
    st.addEventListener('click', e => { if (Math.abs(e.clientX - sx) < 4 && x < 5) { animTo(100); } });
    const animTo = (to, dur = 1.6) => { if (!hasG) return set(to); const o = { v: x }; gsap.to(o, { v: to, duration: dur, ease: 'power2.inOut', onUpdate: () => set(o.v) }); };
    bf._anim = animTo;
    // nasse Spur hinter dem Abzieher
    visTrack(st, v => vis = v);
    (function loop(now) { requestAnimationFrame(loop); if (!vis || !drips.length) { if (drips.length === 0 && lastX !== -1) { ctx.clearRect(0, 0, W, H); lastX = -1; } return; } lastX = 0; ctx.clearRect(0, 0, W, H);
      for (const d of drips) { d.l = Math.min(d.l + d.v * .016 * DPR(), 34 * DPR()); d.y += d.v * .006; d.a -= .016; if (d.a <= 0) continue; const g = ctx.createLinearGradient(0, d.y - d.l, 0, d.y); g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(1, `rgba(235,250,252,${.4 * d.a})`); ctx.strokeStyle = g; ctx.lineWidth = d.w; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(d.x, d.y - d.l); ctx.lineTo(d.x, d.y); ctx.stroke(); ctx.fillStyle = `rgba(255,255,255,${.7 * d.a})`; ctx.beginPath(); ctx.arc(d.x, d.y, d.w * 1.2, 0, 7); ctx.fill(); }
      drips = drips.filter(d => d.a > 0).slice(-160); })();
    // Hinweis-Animation beim ersten Erscheinen
    if (idx === 0) onView(st, () => setTimeout(() => { if (x < 2 && hasG) { const o = { v: 0 }; gsap.timeline().to(o, { v: 42, duration: 1.1, ease: 'power2.inOut', onUpdate: () => set(o.v) }).to(o, { v: 0, duration: .9, ease: 'power2.inOut', onUpdate: () => set(o.v) }, '+=.35'); } }, 500), '-25%');
  });
  const all = $('[data-bf-all]'); if (all) all.addEventListener('click', () => bfs.forEach((b, i) => setTimeout(() => b._anim(100, 1.2), i * 180)));
  countDone();

  /* ---------- Glanz: Licht folgt Maus / Scroll ---------- */
  const gl = $('.gloss');
  if (gl) { const light = $('.gloss-light', gl);
    if (fine) gl.addEventListener('pointermove', e => { const r = gl.getBoundingClientRect(); light.style.setProperty('--lx', (e.clientX - r.left) + 'px'); light.style.setProperty('--ly', (e.clientY - r.top) + 'px'); });
    if (hasG) gsap.fromTo('.gloss-v', { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: gl, start: 'top bottom', end: 'bottom top', scrub: true } });
  }

  /* =====================================================================
     POLIEREN
     ===================================================================== */
  const pol = $('[data-polish]');
  if (pol) {
    const cv = $('canvas', pol), ctx = cv.getContext('2d'), pad = $('.pad', pol), sw = document.createElement('canvas'), sctx = sw.getContext('2d', { willReadFrequently: true });
    let W, H, dpr = DPR(), lx = .5, ly = .35, down = false, vis = false, baseA = 1;
    const gl_ = $('[data-gloss]'), glb = $('[data-gloss-bar]');
    const measure = () => { const d = sctx.getImageData(0, 0, W, H).data; let a = 0, n = 0; for (let i = 3; i < d.length; i += 4 * 97) { n++; a += d[i]; } return a / n; };
    const ok = document.createElement('span'); ok.className = 'pol-ok'; ok.innerHTML = 'Spiegelglanz <b>✓</b>'; pol.appendChild(ok);
    const upd = () => { const m = measure(); const p = Math.max(0, Math.min(1, 1 - m / (baseA || 1))); const g = Math.min(100, Math.round(12 + p * 92)); gl_.textContent = g + ' %'; glb.style.width = g + '%'; if (g >= 96 && !pol.classList.contains('mirror')) { pol.classList.add('mirror'); gl_.textContent = '100 %'; glb.style.width = '100%'; } };
    const scratch = () => { sctx.clearRect(0, 0, W, H); sctx.lineCap = 'round';
      for (let i = 0; i < 1100; i++) { const cx = Math.random() * W, cy = Math.random() * H, r = (40 + Math.random() * 220) * dpr, a = Math.random() * 6.28, l = .15 + Math.random() * .55; sctx.strokeStyle = `rgba(255,255,255,${.05 + Math.random() * .2})`; sctx.lineWidth = (.5 + Math.random() * .9) * dpr; sctx.beginPath(); sctx.arc(cx, cy, r, a, a + l); sctx.stroke(); }
      baseA = measure() || 1; pol.classList.remove('mirror'); upd(); };
    const base = document.createElement('canvas'), bctx = base.getContext('2d');
    const paintBase = () => { base.width = W; base.height = H; // Tiefschwarz-Metallic mit Flakes, Sicke und Türfuge
      const g = bctx.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#1d2a35'); g.addColorStop(.42, '#0e161d'); g.addColorStop(.6, '#0a1015'); g.addColorStop(1, '#030507'); bctx.fillStyle = g; bctx.fillRect(0, 0, W, H);
      const sky = bctx.createLinearGradient(0, 0, 0, H * .4); sky.addColorStop(0, 'rgba(150,185,205,.16)'); sky.addColorStop(1, 'rgba(150,185,205,0)'); bctx.fillStyle = sky; bctx.fillRect(0, 0, W, H * .4);
      for (let i = 0; i < W * H / 260; i++) { bctx.fillStyle = `rgba(${200 + Math.random() * 55 | 0},${210 + Math.random() * 45 | 0},255,${Math.random() * .16})`; bctx.fillRect(Math.random() * W, Math.random() * H, dpr, dpr); }
      const cy = H * .62; const ln = bctx.createLinearGradient(0, 0, W, 0); ln.addColorStop(0, 'rgba(255,255,255,0)'); ln.addColorStop(.35, 'rgba(255,255,255,.32)'); ln.addColorStop(.7, 'rgba(255,255,255,.18)'); ln.addColorStop(1, 'rgba(255,255,255,0)'); bctx.fillStyle = ln; bctx.fillRect(0, cy, W, 2 * dpr); bctx.fillStyle = 'rgba(0,0,0,.45)'; bctx.fillRect(0, cy + 2 * dpr, W, 5 * dpr);
      bctx.fillStyle = 'rgba(0,0,0,.7)'; bctx.fillRect(W * .66, 0, 2.5 * dpr, H); bctx.fillStyle = 'rgba(255,255,255,.07)'; bctx.fillRect(W * .66 + 2.5 * dpr, 0, 1 * dpr, H);
      const hx = W * .72, hy = cy - 34 * dpr, hw = 92 * dpr, hh = 18 * dpr; bctx.fillStyle = 'rgba(0,0,0,.55)'; bctx.beginPath(); bctx.roundRect ? bctx.roundRect(hx, hy, hw, hh, hh / 2) : bctx.rect(hx, hy, hw, hh); bctx.fill(); const hg = bctx.createLinearGradient(0, hy, 0, hy + hh); hg.addColorStop(0, 'rgba(255,255,255,.35)'); hg.addColorStop(1, 'rgba(255,255,255,.02)'); bctx.fillStyle = hg; bctx.beginPath(); bctx.roundRect ? bctx.roundRect(hx + 2 * dpr, hy + 2 * dpr, hw - 4 * dpr, hh - 6 * dpr, hh / 2) : bctx.rect(hx, hy, hw, hh); bctx.fill(); };
    const size = () => { dpr = DPR(); W = cv.width = sw.width = Math.max(10, pol.clientWidth * dpr); H = cv.height = sw.height = Math.max(10, pol.clientHeight * dpr); paintBase(); scratch(); };
    size(); let rw = pol.clientWidth; new ResizeObserver(() => { if (Math.abs(pol.clientWidth - rw) > 30) { rw = pol.clientWidth; size(); } }).observe(pol);
    visTrack(pol, v => vis = v);
    const rub = (x, y) => { sctx.globalCompositeOperation = 'destination-out'; const g = sctx.createRadialGradient(x, y, 0, x, y, 64 * dpr); g.addColorStop(0, 'rgba(0,0,0,.55)'); g.addColorStop(1, 'rgba(0,0,0,0)'); sctx.fillStyle = g; sctx.beginPath(); sctx.arc(x, y, 64 * dpr, 0, 7); sctx.fill(); sctx.globalCompositeOperation = 'source-over'; };
    const pos = e => { const r = pol.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    let mt = 0;
    pol.addEventListener('pointerenter', () => pol.classList.add('on'));
    pol.addEventListener('pointerleave', () => { pol.classList.remove('on', 'spin'); down = false; });
    pol.addEventListener('pointerdown', e => { down = true; pol.classList.add('on', 'spin', 'used'); try { pol.setPointerCapture(e.pointerId); } catch (_) {} const [x, y] = pos(e); pad.style.transform = `translate(${x}px,${y}px)`; });
    addEventListener('pointerup', () => { down = false; pol.classList.remove('spin'); if (!fine) pol.classList.remove('on'); upd(); });
    pol.addEventListener('pointermove', e => { const [x, y] = pos(e); pad.style.transform = `translate(${x}px,${y}px)`; lx = x / pol.clientWidth; ly = y / pol.clientHeight; if (down) { rub(x * dpr, y * dpr); const n = performance.now(); if (n - mt > 140) { mt = n; upd(); } } });
    $('[data-polish-reset]').addEventListener('click', scratch);
    (function loop(t) { requestAnimationFrame(loop); if (!vis) return;
      if (!down && !pol.classList.contains('on')) { lx = .5 + Math.sin(t / 2600) * .3; ly = .35 + Math.sin(t / 1900) * .15; }
      ctx.drawImage(base, 0, 0);
      const sx = lx * W, sy = ly * H;
      const sun = ctx.createRadialGradient(sx, sy, 0, sx, sy, 280 * dpr); sun.addColorStop(0, 'rgba(255,250,235,.95)'); sun.addColorStop(.06, 'rgba(255,240,210,.55)'); sun.addColorStop(.3, 'rgba(120,140,150,.12)'); sun.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = sun; ctx.fillRect(0, 0, W, H);
      ctx.save(); ctx.beginPath(); ctx.arc(sx, sy, 320 * dpr, 0, 7); ctx.clip(); ctx.globalAlpha = .95; ctx.drawImage(sw, 0, 0); ctx.restore();
      ctx.globalAlpha = .13; ctx.drawImage(sw, 0, 0); ctx.globalAlpha = 1;
    })();
  }

  /* =====================================================================
     REGEN / KERAMIK
     ===================================================================== */
  const rain = $('[data-rain]');
  if (rain) {
    const cv = $('canvas', rain), ctx = cv.getContext('2d'), wet = document.createElement('canvas'), wctx = wet.getContext('2d');
    let W, H, dpr = DPR(), seal = .5, gx = 0, gy = 1, drops = [], storm = 0, vis = false, last = 0;
    const size = () => { dpr = DPR(); W = cv.width = wet.width = Math.max(10, rain.clientWidth * dpr); H = cv.height = wet.height = Math.max(10, rain.clientHeight * dpr); };
    size(); new ResizeObserver(size).observe(rain);
    visTrack(rain, v => vis = v);
    const sealX = () => W * (1 - seal);
    const add = (x, y, r) => drops.push({ x, y, r: r || (2.4 + Math.random() * 4.2) * dpr, vx: 0, vy: 0, life: 0 });
    $('[data-seal]').addEventListener('input', e => seal = +e.target.value / 100);
    const sealIn = $('[data-seal]');
    const shower = (cx, cy) => { const r = rain.getBoundingClientRect(); for (let i = 0; i < 26; i++) add((cx - r.left) * dpr + (Math.random() - .5) * 140 * dpr, (cy - r.top) * dpr + (Math.random() - .5) * 100 * dpr); };
    let pd = null;
    const setSealX = cx => { const r = rain.getBoundingClientRect(); seal = Math.max(0, Math.min(1, 1 - (cx - r.left) / r.width)); sealIn.value = Math.round(seal * 100); rain.classList.add('dragged'); };
    rain.addEventListener('pointerdown', e => { pd = { x: e.clientX, y: e.clientY, drag: false, id: e.pointerId }; const r = rain.getBoundingClientRect(); if (Math.abs(e.clientX - (r.left + r.width * (1 - seal))) < 34) { pd.drag = true; try { rain.setPointerCapture(e.pointerId); } catch (_) {} setSealX(e.clientX); } });
    rain.addEventListener('pointermove', e => { if (!pd) return; const dx = e.clientX - pd.x, dy = e.clientY - pd.y; if (!pd.drag && Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) { pd.drag = true; try { rain.setPointerCapture(e.pointerId); } catch (_) {} } if (pd.drag) setSealX(e.clientX); });
    rain.addEventListener('pointerup', e => { if (pd && !pd.drag) shower(e.clientX, e.clientY); pd = null; });
    rain.addEventListener('pointercancel', () => { pd = null; });
    $('[data-storm]').addEventListener('click', () => storm = 4.5);
    if (fine) rain.addEventListener('pointermove', e => { const r = rain.getBoundingClientRect(); const t = ((e.clientX - r.left) / r.width - .5) * 1.1; gx = Math.sin(t); gy = Math.cos(t); });
    rain.addEventListener('pointerleave', () => { gx = 0; gy = 1; });
    const tiltBtn = $('[data-tilt]');
    const onOri = e => { if (e.gamma == null) return; const a = Math.max(-60, Math.min(60, e.gamma)) * Math.PI / 180; gx = Math.sin(a); gy = Math.cos(a); };
    tiltBtn.addEventListener('click', async () => { try { if (window.DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) { const p = await DeviceOrientationEvent.requestPermission(); if (p !== 'granted') return; } addEventListener('deviceorientation', onOri); tiltBtn.textContent = 'Neigung aktiv ✓'; } catch (e) { tiltBtn.textContent = 'Nicht verfügbar'; } });
    if (!fine) addEventListener('deviceorientation', onOri);
    const paint = () => {
      const g = ctx.createLinearGradient(0, 0, W, H); g.addColorStop(0, '#0f3a40'); g.addColorStop(.5, '#08232a'); g.addColorStop(1, '#123f45');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      const sx = sealX(); ctx.fillStyle = 'rgba(255,255,255,.04)'; ctx.fillRect(sx, 0, W - sx, H);
      const s = ctx.createLinearGradient(0, H * .15, W, H * .45); s.addColorStop(0, 'rgba(255,255,255,0)'); s.addColorStop(.5, 'rgba(255,255,255,.11)'); s.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = s; ctx.fillRect(0, 0, W, H);
      ctx.drawImage(wet, 0, 0);
      ctx.strokeStyle = 'rgba(63,224,229,.85)'; ctx.setLineDash([6 * dpr, 6 * dpr]); ctx.lineWidth = 2 * dpr; ctx.beginPath(); ctx.moveTo(sx, 0); ctx.lineTo(sx, H); ctx.stroke(); ctx.setLineDash([]);
      { const ky = H / 2, kr = 19 * dpr; ctx.fillStyle = 'rgba(63,224,229,.95)'; ctx.beginPath(); ctx.arc(sx, ky, kr, 0, 7); ctx.fill(); ctx.fillStyle = '#05262b'; ctx.font = `800 ${15 * dpr}px system-ui,sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('‹ ›', sx, ky + dpr); }
    };
    const step = (t) => {
      requestAnimationFrame(step); if (!vis) return; const dt = Math.min(.05, (t - last) / 1000 || .016); last = t;
      const rate = storm > 0 ? 70 : 12; storm = Math.max(0, storm - dt);
      for (let i = 0; i < rate * dt * 10; i++) add(Math.random() * W, Math.random() * H * .9);
      wctx.globalCompositeOperation = 'destination-out'; wctx.fillStyle = `rgba(0,0,0,${.35 * dt})`; wctx.fillRect(0, 0, W, H); wctx.globalCompositeOperation = 'source-over';
      const sx = sealX(), G = 900 * dpr;
      for (const d of drops) {
        d.life += dt; const sealed = d.x > sx;
        if (sealed) { if (d.r > 2.2 * dpr) { d.vx += gx * G * dt * .9; d.vy += gy * G * dt * .9; } d.vx *= .9; d.vy *= .9; }
        else { d.r = Math.min(d.r * (1 + dt * .3), 10 * dpr); if (d.r > 5 * dpr) { d.vx += gx * G * dt * .05; d.vy += gy * G * dt * .05; } d.vx *= .82; d.vy *= .82; if (d.life > 3.5) d.dead = true;
          wctx.fillStyle = 'rgba(160,210,215,.025)'; wctx.beginPath(); wctx.ellipse(d.x, d.y, d.r * 1.6, d.r * 1.2, 0, 0, 7); wctx.fill(); }
        d.x += d.vx * dt; d.y += d.vy * dt;
      }
      drops.sort((a, b) => a.x - b.x);
      for (let i = 0; i < drops.length; i++) { const a = drops[i]; if (a.dead) continue; for (let j = i + 1; j < drops.length && drops[j].x - a.x < 20 * dpr; j++) { const b = drops[j]; if (b.dead) continue; const dx = a.x - b.x, dy = a.y - b.y; if (dx * dx + dy * dy < (a.r + b.r) * (a.r + b.r) * .6) { a.r = Math.min(Math.sqrt(a.r * a.r + b.r * b.r), 14 * dpr); a.vy = (a.vy + b.vy) / 2; a.vx = (a.vx + b.vx) / 2; b.dead = true; } } }
      drops = drops.filter(d => !d.dead && d.y < H + 40 && d.y > -40 && d.x > -40 && d.x < W + 40).slice(-900);
      paint();
      for (const d of drops) {
        if (d.x > sx) {
          const g = ctx.createRadialGradient(d.x - d.r * .35, d.y - d.r * .4, d.r * .1, d.x, d.y, d.r);
          g.addColorStop(0, 'rgba(255,255,255,.95)'); g.addColorStop(.35, 'rgba(160,230,235,.55)'); g.addColorStop(1, 'rgba(10,40,45,.55)');
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, 7); ctx.fill();
          ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.beginPath(); ctx.ellipse(d.x + d.r * .2, d.y + d.r * .9, d.r * .8, d.r * .25, 0, 0, 7); ctx.fill();
          if (Math.hypot(d.vx, d.vy) > 40 * dpr) { ctx.strokeStyle = 'rgba(200,240,242,.25)'; ctx.lineWidth = d.r * .6; ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(d.x - d.vx * .03, d.y - d.vy * .03); ctx.stroke(); }
        } else { const fa = Math.max(0, 1 - d.life / 3.5); ctx.fillStyle = `rgba(170,215,220,${.2 * fa})`; ctx.beginPath(); ctx.ellipse(d.x, d.y, d.r * 1.5, d.r * 1.1, 0, 0, 7); ctx.fill(); ctx.strokeStyle = `rgba(220,245,247,${.22 * fa})`; ctx.lineWidth = 1 * dpr; ctx.stroke(); }
      }
    };
    requestAnimationFrame(step);
  }

  /* =====================================================================
     OZON
     ===================================================================== */
  const oz = $('[data-ozone-stage]');
  if (oz) {
    const cv = $('canvas', oz), ctx = cv.getContext('2d'), btn = $('[data-ozone]'), st = $('[data-oz-state]');
    let W, H, dpr = DPR(), hold = false, vis = false, mol = [];
    const size = () => { dpr = DPR(); W = cv.width = Math.max(10, oz.clientWidth * dpr); H = cv.height = Math.max(10, oz.clientHeight * dpr); }; size(); new ResizeObserver(size).observe(oz);
    visTrack(oz, v => vis = v);
    const mk = () => [['Rauch', .25, .35, '170,160,140'], ['Hund', .72, .3, '150,130,90'], ['Essen', .32, .72, '170,140,80'], ['Feuchtigkeit', .7, .7, '110,140,110']].map(([n, x, y, c]) => ({ n, x, y, c, a: 1, p: Math.random() * 6 }));
    let clouds = mk();
    const setState = () => { const left = clouds.filter(c => c.a > .05).length; st.textContent = left ? `${left} ${left === 1 ? 'Geruch' : 'Gerüche'} im Innenraum` : 'Neutralisiert. Danach wird gründlich gelüftet.'; oz.classList.toggle('clean', !left); btn.textContent = left ? 'Ozon gedrückt halten' : 'Nochmal von vorn'; };
    const on = e => { e.preventDefault(); if (!clouds.some(c => c.a > .05)) { clouds = mk(); setState(); return; } hold = true; btn.classList.add('hold'); };
    const off = () => { hold = false; btn.classList.remove('hold'); };
    btn.addEventListener('pointerdown', on); addEventListener('pointerup', off); btn.addEventListener('pointerleave', off); btn.addEventListener('pointercancel', off); btn.addEventListener('contextmenu', e => e.preventDefault());
    btn.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); if (!e.repeat) on(e); } }); btn.addEventListener('keyup', off);
    let tick = 0;
    (function loop(t) { requestAnimationFrame(loop); if (!vis) return; ctx.clearRect(0, 0, W, H);
      if (hold) for (let i = 0; i < 3; i++) mol.push({ x: W * (.45 + Math.random() * .1), y: H * .98, vx: (Math.random() - .5) * 6 * dpr, vy: -(3 + Math.random() * 4) * dpr, r: (4 + Math.random() * 3) * dpr, a: 6.28 * Math.random(), l: 1 });
      for (const c of clouds) { if (c.a <= .02) continue; const cx = c.x * W + Math.sin(t / 1300 + c.p) * 14 * dpr, cy = c.y * H + Math.cos(t / 1700 + c.p) * 10 * dpr;
        for (let k = 0; k < 5; k++) { const r = (56 + k * 12) * dpr * (.6 + c.a * .4), ox = Math.sin(c.p + k * 1.7) * 30 * dpr, oy = Math.cos(c.p + k) * 18 * dpr; const g = ctx.createRadialGradient(cx + ox, cy + oy, 0, cx + ox, cy + oy, r); g.addColorStop(0, `rgba(${c.c},${.4 * c.a})`); g.addColorStop(1, `rgba(${c.c},0)`); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx + ox, cy + oy, r, 0, 7); ctx.fill(); }
        ctx.globalAlpha = c.a; ctx.fillStyle = '#fff'; ctx.font = `700 ${14 * dpr}px Figtree,sans-serif`; ctx.textAlign = 'center'; ctx.fillText(c.n, cx, cy); ctx.globalAlpha = 1; c.cx = cx; c.cy = cy; }
      for (const m of mol) { m.x += m.vx; m.y += m.vy; m.vx += (Math.random() - .5) * .6 * dpr; m.vy *= .995; m.a += .05; m.l -= .004;
        for (const c of clouds) if (c.a > .02 && c.cx && Math.hypot(m.x - c.cx, m.y - c.cy) < 80 * dpr) { c.a = Math.max(0, c.a - .006); m.l -= .02; }
        ctx.globalAlpha = Math.max(0, m.l); ctx.fillStyle = '#9ff0f2';
        for (let k = 0; k < 3; k++) { const a = m.a + k * 2.09; ctx.beginPath(); ctx.arc(m.x + Math.cos(a) * m.r, m.y + Math.sin(a) * m.r, m.r * .55, 0, 7); ctx.fill(); }
        ctx.globalAlpha = 1; }
      mol = mol.filter(m => m.l > 0 && m.y > -20).slice(-500);
      if (hold || ++tick % 30 === 0) setState();
    })();
    setState();
  }

  /* =====================================================================
     FPV: scroll-gesteuerte Bildsequenz (4K-Quelle)
     ===================================================================== */
  const fpv = $('.fpv');
  if (fpv) {
    const cv = $('.fpv-cv'), ctx = cv.getContext('2d'), N = 190;
    let dir = portrait() ? 'm' : 'd';
    const src = i => `seq/${dir}/f${String(i + 1).padStart(3, '0')}.webp`;
    let frames = new Array(N), cur = 0, shown = -1, started = false;
    const load = i => { if (frames[i]) return; const im = new Image(); im.decoding = 'async'; im.src = src(i); frames[i] = im; im.onload = () => { if (Math.abs(i - cur) < 4) draw(cur, true); }; };
    const order = []; for (const s of [6, 3, 1]) for (let i = 0; i < N; i += s) if (!order.includes(i)) order.push(i);
    let oi = 0; const pump = () => { for (let k = 0; k < 5 && oi < order.length; k++, oi++) load(order[oi]); if (oi < order.length) setTimeout(pump, 70); };
    const start = () => { if (started) return; started = true; load(0); pump(); };
    onView(fpv, start, '1400px');
    let lw = 0, lh = 0;
    const size = () => { const d = Math.min(DPR(), 2), w = Math.round(cv.clientWidth * d), h = Math.round(cv.clientHeight * d); if (w === lw && Math.abs(h - lh) < 160 * d && lw) return; lw = w; lh = h; cv.width = w; cv.height = h; const nd = portrait() ? 'm' : 'd'; if (nd !== dir && started) { dir = nd; frames = new Array(N); oi = 0; load(cur); pump(); } draw(cur, true); };
    const nearest = i => { for (let k = 0; k < N; k++) for (const j of [i - k, i + k]) if (j >= 0 && j < N && frames[j] && frames[j].complete && frames[j].naturalWidth) return frames[j]; return null; };
    function draw(i, force) { if (!force && i === shown) return; const im = nearest(i); if (!im) return; shown = i; const W = cv.width, H = cv.height, s = Math.max(W / im.naturalWidth, H / im.naturalHeight), w = im.naturalWidth * s, h = im.naturalHeight * s; ctx.drawImage(im, (W - w) / 2, (H - h) / 2, w, h); }
    addEventListener('resize', size); size();
    const alt = $('[data-falt]'), hb = $('.fpv .hud-bar i'), fcs = $$('.fc', fpv);
    const vis = [[0, .22], [.32, .58], [.74, 1.02]];
    const phase = p => {
      fcs.forEach((f, i) => { const [a, b] = vis[i]; const o = p < a - .05 || p > b + .05 ? 0 : Math.min(1, (p - a + .05) / .06, (b + .05 - p) / .06); f.style.opacity = i === 0 && p < .04 ? 1 : Math.max(0, o); f.style.transform = `translateY(${(1 - Math.max(0, o)) * 30}px)`; });
      alt.textContent = Math.max(1, Math.round(p < .6 ? 12 - p * 10 : 6 - (p - .6) * 12)); hb.style.transform = `scaleX(${p})`;
    };
    let tgt = 0, fpos = 0, raf = 0;
    const tick = () => { raf = 0; fpos += (tgt - fpos) * .22; if (Math.abs(tgt - fpos) < .05) fpos = tgt; cur = Math.round(fpos); draw(cur); if (fpos !== tgt) raf = requestAnimationFrame(tick); };
    const onP = p => { tgt = Math.min(N - 1, Math.max(0, p * (N - 1))); if (!raf) raf = requestAnimationFrame(tick); phase(p); };
    if (hasG) ScrollTrigger.create({ trigger: fpv, start: 'top top', end: 'bottom bottom', scrub: true, onUpdate: s => onP(s.progress) });
    addEventListener('scroll', () => { const r = fpv.getBoundingClientRect(); const p = Math.min(1, Math.max(0, -r.top / (fpv.offsetHeight - innerHeight))); if (!hasG) onP(p); }, { passive: true });
    phase(0);
  }

  /* ---------- Reveals ---------- */
  if (hasG && !reduce) {
    $$('.ch-head, .stn, .rv, .w, .p, .kc, .st-list li, .sv, .ali, .bf').forEach(el => { gsap.from(el, { y: 40, opacity: 0, duration: 1.05, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }); });
    $$('.h2').forEach(h => { if (h.closest('.fc')) return; gsap.from(h, { clipPath: 'inset(0 0 100% 0)', duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: h, start: 'top 90%', once: true } }); });
  }

  /* ---------- Glanz-Galerie: Lichtreflex beim Erscheinen ---------- */
  $$('.sh').forEach((f, i) => { onView(f, () => setTimeout(() => f.classList.add('lit'), 200 + i * 140), '-10%');
    const mv = e => { const r = f.getBoundingClientRect(); f.style.setProperty('--mx', (e.clientX - r.left) + 'px'); f.style.setProperty('--my', (e.clientY - r.top) + 'px'); f.classList.add('lamp'); };
    f.addEventListener('pointermove', mv); f.addEventListener('pointerdown', mv); f.addEventListener('pointerleave', () => f.classList.remove('lamp')); f.addEventListener('pointercancel', () => f.classList.remove('lamp')); });

  /* ---------- Paket ---------- */
  const veh = $('[data-veh]');
  if (veh) {
    const mods = $('[data-mods]'), tv = $('[data-tk-veh]'), tl = $('[data-tk-list]'), no = $('[data-tk-no]'), tk = $('.ticket');
    let v = 'Kleinwagen';
    const roof = $('[data-m^="Dach"]', mods);
    let prev = []; const render = () => { tv.textContent = v; const on = $$('button.on', mods).map(b => b.textContent); tl.innerHTML = on.length ? on.map(m => `<li${prev.length && !prev.includes(m) ? ' class="new"' : ''}>${m}</li>`).join('') : '<li style="opacity:.5">Noch nichts gewählt</li>'; if (prev.length || on.length) { tk.classList.remove('bump'); void tk.offsetWidth; tk.classList.add('bump'); } prev = on.length ? on : ['—']; no.textContent = 'Nr. ' + (1000 + (v.length * 37 + on.join('').length * 13) % 9000); tk.classList.remove('stamped'); void tk.offsetWidth; if (on.length >= 2) tk.classList.add('stamped'); };
    $$('button', veh).forEach(b => b.addEventListener('click', () => { $$('button', veh).forEach(x => x.classList.toggle('on', x === b)); v = b.dataset.v; const wm = /Wohn/.test(v); roof.style.display = wm ? '' : 'none'; if (!wm) roof.classList.remove('on'); render(); }));
    $$('button', mods).forEach(b => b.addEventListener('click', () => { b.classList.toggle('on'); render(); }));
    roof.style.display = 'none';
    const twa = $('[data-tk-wa]'); const setWa = () => { const txt = `Hallo Z&H, hier meine Anfrage von der Website:\nFahrzeug: ${v}\nLeistungen: ${$$('button.on', mods).map(b => b.textContent).join(', ') || '—'}\nWann hätten Sie Zeit? Fotos schicke ich gern mit.`; twa.href = 'https://wa.me/4917624401827?text=' + encodeURIComponent(txt); };
    $$('button', veh).concat($$('button', mods)).forEach(b => b.addEventListener('click', setWa)); setWa();
    render();
  }

  /* ---------- Wetter (Open-Meteo) ---------- */
  const wx = $('[data-wx]');
  if (wx) {
    const ICON = c => c === 0 ? '☀️' : c <= 2 ? '🌤️' : c === 3 ? '☁️' : c <= 48 ? '🌫️' : c <= 67 ? '🌧️' : c <= 77 ? '🌨️' : c <= 82 ? '🌦️' : '⛈️';
    const go = () => fetch('https://api.open-meteo.com/v1/forecast?latitude=49.3196&longitude=7.2845&daily=weathercode,temperature_2m_max,precipitation_sum,precipitation_probability_max&timezone=Europe%2FBerlin&forecast_days=7')
      .then(r => r.json()).then(d => {
        const D = d.daily, days = D.time.map((t, i) => ({ t: new Date(t + 'T12:00'), c: D.weathercode[i], tx: Math.round(D.temperature_2m_max[i]), pr: D.precipitation_sum[i] || 0, pp: D.precipitation_probability_max ? D.precipitation_probability_max[i] : null }));
        const wk = days.filter(x => x.t.getDay() >= 1 && x.t.getDay() <= 5); const best = (wk.length ? wk : days).reduce((a, b) => (b.pr + (b.pp || 0) / 50) < (a.pr + (a.pp || 0) / 50) ? b : a);
        const max = Math.max(5, ...days.map(x => x.pr));
        const tile = x => { const we = x.t.getDay() === 0 || x.t.getDay() === 6, lab = x.t.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' }), inner = `<small>${x.t.toLocaleDateString('de-DE', { weekday: 'short' }).replace('.', '')}</small><span class="ic" aria-hidden="true">${ICON(x.c)}</span><b>${x.tx}°</b><span class="pr" title="${x.pr.toFixed(1)} mm"><i style="height:${Math.min(100, x.pr / max * 100)}%"></i></span><span class="mm">${we ? 'geschlossen' : x.pr.toFixed(1) + ' mm'}</span>`; return we ? `<div class="wd off" style="--i:${days.indexOf(x)}" title="${lab}: geschlossen">${inner}</div>` : `<a class="wd${x === best ? ' best' : ''}" style="--i:${days.indexOf(x)}" href="https://wa.me/4917624401827?text=${encodeURIComponent('Hallo Z&H, passt ein Termin oder eine Abholung am ' + lab + '?')}" target="_blank" rel="noopener" aria-label="${lab}: Termin per WhatsApp anfragen">${inner}</a>`; };
        wx.innerHTML = days.map(tile).join('') +
          `<p class="wx-tip">Bester Abholtag: <b>${best.t.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' })}</b>. Tippen Sie auf einen Tag, um ihn per WhatsApp anzufragen. ${days.some(x => x.pr > 2) ? 'Regen in Sicht? Mit Keramikversiegelung perlt er einfach ab.' : 'Trocken und klar – perfekt für frischen Glanz.'}</p>`;
      sky(days.slice(0, 3).some(x => x.pr > 1) ? 'rain' : 'sun'); hasG && ScrollTrigger.refresh();
      }).catch(() => { wx.closest('section').style.display = 'none'; hasG && ScrollTrigger.refresh(); });
    // Himmel hinter den Kacheln: Regen, wenn welcher kommt – sonst Sonnenglanz
    const sky = mode => { if (reduce) return; const sec = wx.closest('section'), cv = document.createElement('canvas'); cv.className = 'wx-sky'; cv.setAttribute('aria-hidden', 'true'); sec.prepend(cv); const c = cv.getContext('2d'), d = DPR(); let W, H, vis = false; const fit = () => { W = cv.width = sec.clientWidth * d; H = cv.height = sec.clientHeight * d; }; fit(); addEventListener('resize', fit); visTrack(sec, v => vis = v);
      const P = Array.from({ length: mode === 'rain' ? 140 : 26 }, () => ({ x: Math.random(), y: Math.random(), v: .4 + Math.random() * .8, l: Math.random() }));
      (function loop(t) { requestAnimationFrame(loop); if (!vis) return; c.clearRect(0, 0, W, H);
        if (mode === 'rain') { c.strokeStyle = 'rgba(120,200,230,.35)'; c.lineWidth = 1.2 * d; c.beginPath(); for (const p of P) { p.y += .006 * p.v; if (p.y > 1.05) { p.y = -.05; p.x = Math.random(); } const x = p.x * W - p.y * 40 * d, y = p.y * H; c.moveTo(x, y); c.lineTo(x - 5 * d, y + 18 * d * p.v); } c.stroke(); }
        else { const g = c.createRadialGradient(W * .88, H * .1, 0, W * .88, H * .1, H * .9); g.addColorStop(0, 'rgba(255,214,120,.35)'); g.addColorStop(1, 'rgba(255,214,120,0)'); c.fillStyle = g; c.fillRect(0, 0, W, H); for (const p of P) { p.l += .004 * p.v; const a = Math.sin(p.l * 6.28) * .5 + .5; c.fillStyle = `rgba(255,240,200,${a * .5})`; c.beginPath(); c.arc(p.x * W, p.y * H, (1 + a * 1.6) * d, 0, 7); c.fill(); } } })(); };
    onView(wx, go, '800px');
  }

  /* ---------- Saisonplaner ---------- */
  const pls = $('[data-pl-start]');
  if (pls) {
    const ple = $('[data-pl-end]'), yr = $('[data-pl-year]'), info = $('[data-pl-info]'), M = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
    const calc = () => { const s = +pls.value, e = +ple.value, now = new Date(); let y = now.getFullYear(); let a = new Date(y, s, 1); a.setDate(a.getDate() - 21); if (a < now) { y++; a = new Date(y, s, 1); a.setDate(a.getDate() - 21); } const b = new Date(y + (e < s ? 1 : 0), e + 1, 7); return { s, e, a, b }; };
    const draw = () => { const { s, e, a, b } = calc(); yr.innerHTML = M.map((m, i) => { const tour = s <= e ? i >= s && i <= e : i >= s || i <= e; const rem = i === a.getMonth() || i === b.getMonth(); return `<div class="${rem ? 'rem' : tour ? 'tour' : ''}"><span>${m}</span></div>`; }).join(''); info.textContent = `Erinnerung 1: ${a.toLocaleDateString('de-DE')} (Saison-Aufbereitung) · Erinnerung 2: ${b.toLocaleDateString('de-DE')} (Einwintern)`; };
    pls.addEventListener('change', draw); ple.addEventListener('change', draw); draw();
    const f = d => `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
    $('[data-pl-ics]').addEventListener('click', () => { const { a, b } = calc(); const ev = (d, s, desc) => { const e = new Date(d); e.setDate(e.getDate() + 1); return `BEGIN:VEVENT\r\nUID:${f(d)}-${Math.random().toString(36).slice(2)}@zh-aufbereitung\r\nDTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').slice(0, 15)}Z\r\nDTSTART;VALUE=DATE:${f(d)}\r\nDTEND;VALUE=DATE:${f(e)}\r\nSUMMARY:${s}\r\nDESCRIPTION:${desc}\\nZ&H Aufbereitung · Ortsstraße 14 · 66459 Kirkel-Altstadt · Tel. 06841 / 890 200\r\nBEGIN:VALARM\r\nTRIGGER:-PT0M\r\nACTION:DISPLAY\r\nDESCRIPTION:${s}\r\nEND:VALARM\r\nEND:VEVENT\r\n`; };
      const ics = `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Z&H Aufbereitung//Saisonplaner//DE\r\n${ev(a, 'Wohnmobil: Termin für Saison-Aufbereitung vereinbaren', 'Jetzt bei Z&H anrufen: Außenreinigung, Dach, Keramikversiegelung, Innenraum.')}${ev(b, 'Wohnmobil einwintern: Aufbereitung bei Z&H', 'Vor dem Winter gründlich reinigen und versiegeln lassen.')}END:VCALENDAR\r\n`;
      const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' })); const l = document.createElement('a'); l.href = url; l.download = 'wohnmobil-saison-zh-aufbereitung.ics'; document.body.appendChild(l); l.click(); setTimeout(() => { URL.revokeObjectURL(url); l.remove(); }, 1000); });
  }

  /* ---------- Entwurf-Hinweis: über dem Footer ausblenden ---------- */
  const cpt = $('.concept'), ftr = $('.ftr');
  if (cpt && ftr) new IntersectionObserver(([e]) => cpt.classList.toggle('off', e.isIntersecting), { rootMargin: '0px 0px -40px 0px' }).observe(ftr);

  /* ---------- Leistungen: Schaum-Abzieher ---------- */
  $$('[data-foam]').forEach(m => reduce ? m.classList.add('in') : onView(m, () => setTimeout(() => m.classList.add('in'), 120), '-18%'));

  /* ---------- Wohnmobile: Ablauf am Wohnmobil ---------- */
  const cvb = $('[data-cv]');
  if (cvb) {
    const btns = $$('[data-cv-go]'), st = $('[data-cv-state]'), re = $('[data-cv-re]');
    const TXT = ['So kommt es an: Laufstreifen, Grünbelag, Grauschleier.', 'Dach & Rinnen: Laufstreifen und Grünbelag sind weg.', 'Wäsche & Politur: Die Außenhaut glänzt wieder.', 'Keramik drauf: Wasser perlt einfach ab.', 'Innenraum frisch – bereit für die nächste Saison.'];
    let step = 0, auto = false, tm = 0; const seen = visTrack(cvb);
    const set = (n, isAuto) => { step = n; cvb.dataset.step = n; cvb.dataset.act = n; for (let i = 1; i <= 4; i++) cvb.classList.toggle('s' + i, i <= n); btns.forEach(b => { const k = +b.dataset.cvGo; b.classList.toggle('on', k === n); b.classList.toggle('done', k < n); b.classList.toggle('auto', !!isAuto && k === n); b.setAttribute('aria-pressed', k === n); }); st.textContent = TXT[n]; };
    const next = () => { if (!auto) return; if (!seen()) { tm = setTimeout(next, 800); return; } const n = step >= 4 ? 0 : step + 1; set(n, n > 0 && n < 4); tm = setTimeout(next, n === 4 ? 4600 : n === 0 ? 1500 : 2800); };
    const play = () => { clearTimeout(tm); auto = true; set(0); tm = setTimeout(next, 1100); };
    btns.forEach(b => b.addEventListener('click', () => { auto = false; clearTimeout(tm); set(+b.dataset.cvGo); }));
    re && re.addEventListener('click', play);
    set(0); if (reduce) set(4); else onView(cvb, play, '-20%');
  }

  /* ---------- Leistungen-Navigation ---------- */
  const lnav = $$('.lnav a');
  if (lnav.length) { const map = new Map(lnav.map(a => [a.getAttribute('href').slice(1), a]));
    const spy = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return; const a = map.get(e.target.id); lnav.forEach(x => x.classList.toggle('on', x === a)); if (a) a.parentElement.scrollTo({ left: a.offsetLeft - 20, behavior: 'smooth' }); }), { rootMargin: '-45% 0px -50% 0px' });
    $$('.sv').forEach(s => spy.observe(s));
    lnav.forEach(a => a.addEventListener('click', e => { e.preventDefault(); const t = $(a.getAttribute('href')); lenis ? lenis.scrollTo(t, { offset: -130 }) : t.scrollIntoView({ behavior: 'smooth' }); })); }

  /* ---------- Anker ---------- */
  $$('a[href^="#"]').forEach(a => { if (a.closest('.lnav')) return; a.addEventListener('click', e => { const t = $(a.getAttribute('href')); if (!t) return; e.preventDefault(); lenis ? lenis.scrollTo(t, { offset: -70 }) : t.scrollIntoView({ behavior: 'smooth' }); }); });
  $$('a[href^="index.html#"]').forEach(a => { if (root.dataset.page !== 'home') return; a.addEventListener('click', e => { const t = $(a.getAttribute('href').slice(10)); if (!t) return; e.preventDefault(); lenis ? lenis.scrollTo(t, { offset: -70 }) : t.scrollIntoView({ behavior: 'smooth' }); }); });
  if (location.hash && $(location.hash)) setTimeout(() => lenis ? lenis.scrollTo($(location.hash), { offset: -70, immediate: true }) : null, 500);

  /* ---------- Halle: Tore gehen auf ---------- */
  $$('[data-halle]').forEach(h => onView(h, () => setTimeout(() => h.classList.add('open'), 250), '-15%'));

  /* ---------- CTA-Blasen ---------- */
  const cb = $('.cta-bubbles');
  if (cb && !reduce) { const ctx = cb.getContext('2d'); let W, H, vis = false, bs = []; const dpr = DPR();
    const size = () => { W = cb.width = cb.clientWidth * dpr; H = cb.height = cb.clientHeight * dpr; }; size(); addEventListener('resize', size);
    visTrack(cb, v => vis = v);
    (function loop() { requestAnimationFrame(loop); if (!vis) return; if (Math.random() < .3) bs.push({ x: Math.random() * W, y: H + 20, r: (3 + Math.random() * 22) * dpr, v: (.4 + Math.random() * 1.2) * dpr, p: Math.random() * 6 });
      ctx.clearRect(0, 0, W, H); for (const b of bs) { b.y -= b.v; b.p += .02; const x = b.x + Math.sin(b.p) * 8 * dpr; ctx.strokeStyle = 'rgba(255,255,255,.35)'; ctx.lineWidth = 1.2 * dpr; ctx.beginPath(); ctx.arc(x, b.y, b.r, 0, 7); ctx.stroke(); ctx.fillStyle = 'rgba(255,255,255,.5)'; ctx.beginPath(); ctx.arc(x - b.r * .35, b.y - b.r * .35, b.r * .18, 0, 7); ctx.fill(); }
      bs = bs.filter(b => b.y > -40); })(); }

  if (reduce) $$('svg').forEach(v => v.pauseAnimations && v.pauseAnimations());
  if (hasG) { ScrollTrigger.sort(); ScrollTrigger.refresh(); addEventListener('load', () => ScrollTrigger.refresh()); }
})();
