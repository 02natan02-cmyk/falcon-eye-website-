/* Verena Paul – Aloha (Entwurf Falcon Eye) */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches, D = window.VP || {};
  const ic = p => `<svg class="ic-s" viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${p}</g></svg>`;

  /* ---------- Intro ---------- */
  const intro = $('[data-intro]');
  let introDone = !intro || document.documentElement.classList.contains('no-intro') || RM;
  const afterIntro = [];
  const finishIntro = () => { if (introDone && !intro) return; introDone = true; if (intro) { intro.classList.add('out'); setTimeout(() => intro.remove(), 1200); } try { sessionStorage.setItem('vp-intro', '1'); } catch (e) {} afterIntro.forEach(f => f()); };
  if (!introDone) { intro.addEventListener('click', finishIntro); setTimeout(finishIntro, 2700); } else { intro && intro.remove(); }
  const whenIntro = f => introDone ? f() : afterIntro.push(f);

  /* ---------- Header ---------- */
  const hdr = $('[data-hdr]'), hero = $('.hero');
  const onS = () => { hdr.classList.toggle('solid', scrollY > (innerWidth < 900 ? 40 : hero.offsetHeight - 90)); document.documentElement.classList.toggle('scrolled', scrollY > 60); };
  addEventListener('scroll', onS, { passive: true }); onS();
  const bur = $('[data-burger]'), mn = $('[data-mnav]');
  bur.addEventListener('click', () => { const o = bur.getAttribute('aria-expanded') !== 'true'; bur.setAttribute('aria-expanded', o); mn.hidden = !o; document.documentElement.classList.toggle('menu-open', o); hdr.classList.toggle('solid', o || scrollY > (innerWidth < 900 ? 40 : hero.offsetHeight - 90)); });
  $$('a', mn).forEach(a => a.addEventListener('click', () => { bur.setAttribute('aria-expanded', 'false'); mn.hidden = true; document.documentElement.classList.remove('menu-open'); }));
  /* Menü-Punkt des aktuellen Kapitels hervorheben */
  (() => {
    const links = $$('.nav a, .mnav a'), secs = $$('main > section[id]'); if (!('IntersectionObserver' in window) || !secs.length) return;
    const navs = $$('.nav, .mnav').map(n => { const L = $$('a', n); return { L, T: L.map(a => $(a.getAttribute('href'))).filter(Boolean) }; });
    const io = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return; const S = e.target;
      navs.forEach(({ L, T }) => { let act = null; /* letztes Menüziel, das vor oder auf dem sichtbaren Abschnitt liegt */
        T.forEach(t => { if (t === S || (t.compareDocumentPosition(S) & Node.DOCUMENT_POSITION_FOLLOWING)) { if (!act || (act.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING)) act = t; } });
        if (S.id === 'top') act = null;
        L.forEach(a => { const on = !!act && a.getAttribute('href') === '#' + act.id; a.classList.toggle('on', on); on ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current'); }); }); }), { rootMargin: '-45% 0px -50% 0px' });
    secs.forEach(s => io.observe(s));
  })();

  /* ---------- Meer (Canvas) ---------- */
  const cv = $('[data-sea]');
  if (cv) {
    const cx = cv.getContext('2d'); let W, H, dpr, t = 0, run = true, mx = .62, my = .5, tmx = .62, tmy = .5;
    const size = () => { dpr = Math.min(1.6, devicePixelRatio || 1); W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; cx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    size(); addEventListener('resize', size);
    addEventListener('pointermove', e => { tmx = e.clientX / innerWidth; tmy = e.clientY / innerHeight; }, { passive: true });
    const L0 = [ // Wellenschichten: Höhe, Amplitude, Länge, Tempo, Farbe
      [.60, 10, 520, .25, 'rgba(255,170,130,.32)'], [.64, 14, 380, -.35, 'rgba(45,120,130,.55)'], [.70, 18, 300, .45, 'rgba(26,98,110,.72)'],
      [.78, 22, 260, -.55, 'rgba(18,78,92,.85)'], [.88, 26, 220, .7, 'rgba(12,56,70,.95)']];
    const L = L0; const spark = Array.from({ length: 70 }, () => [Math.random(), Math.random(), Math.random() * 6]);
    const frame = () => {
      if (run) {
        t += RM ? 0 : 1 / 60; mx += (tmx - mx) * .03; my += (tmy - my) * .03;
        const mob = W < 700, hz = H * (mob ? .5 : .6), sx = W * ((mob ? .78 : .74) + (mx - .5) * .12), sy = hz - H * ((mob ? .34 : .17) + (.5 - my) * .05);
        let g = cx.createLinearGradient(0, 0, 0, hz);
        g.addColorStop(0, '#0f2f45'); g.addColorStop(.45, '#5b4d6e'); g.addColorStop(.78, '#e8846a'); g.addColorStop(1, '#ffc58c');
        cx.fillStyle = g; cx.fillRect(0, 0, W, hz + 2);
        g = cx.createRadialGradient(sx, sy, 0, sx, sy, H * .55); g.addColorStop(0, 'rgba(255,214,150,.75)'); g.addColorStop(.25, 'rgba(255,170,120,.25)'); g.addColorStop(1, 'rgba(255,140,100,0)');
        cx.fillStyle = g; cx.fillRect(0, 0, W, hz);
        cx.fillStyle = '#ffe2b0'; cx.beginPath(); cx.arc(sx, sy, Math.min(W, H) * .07, 0, 7); cx.fill();
        g = cx.createLinearGradient(0, hz, 0, H); g.addColorStop(0, '#3a7f8a'); g.addColorStop(1, '#0b2a36'); cx.fillStyle = g; cx.fillRect(0, hz, W, H - hz);
        // Sonnenglitzern
        for (const s of spark) { const x = sx + (s[0] - .5) * W * .28 * (1 + s[1]), y = hz + s[1] * (H - hz) * .9, a = (Math.sin(t * 2 + s[2]) + 1) / 2 * (1 - s[1]) * .8; cx.fillStyle = `rgba(255,220,170,${a})`; cx.fillRect(x, y, 10 + 30 * (1 - s[1]), 1.6); }
        for (const [h, a, l, sp, c] of L) {
          cx.fillStyle = c; cx.beginPath(); cx.moveTo(0, H);
          for (let x = 0; x <= W + 10; x += 10) { const y = H * h + Math.sin(x / l * 6.28 + t * sp * 2) * a + Math.sin(x / (l * .47) * 6.28 - t * sp * 1.3) * a * .4; cx.lineTo(x, y); }
          cx.lineTo(W, H); cx.fill();
        }
      }
      requestAnimationFrame(frame);
    };
    new IntersectionObserver(([e]) => run = e.isIntersecting).observe(cv);
    frame();
  }

  /* ---------- Hero: Parallax (Maus, Gyro, Scroll) & Glühwürmchen ---------- */
  (() => {
    const h = $('.hero'), fc = $('[data-flies]'); if (!h) return;
    let tx = 0, ty = 0, x = 0, y = 0, vis = true, ptr = { x: -999, y: -999 };
    if (!RM) {
      h.addEventListener('pointermove', e => { const r = h.getBoundingClientRect(); tx = (e.clientX - r.left) / r.width * 2 - 1; ty = (e.clientY - r.top) / r.height * 2 - 1; ptr = { x: e.clientX - r.left, y: e.clientY - r.top }; }, { passive: true });
      h.addEventListener('pointerleave', () => { tx = ty = 0; ptr = { x: -999, y: -999 }; });
      addEventListener('deviceorientation', e => { if (e.gamma == null) return; tx = Math.max(-1, Math.min(1, e.gamma / 30)); ty = Math.max(-1, Math.min(1, (e.beta - 45) / 30)); }, { passive: true });
    }
    const sym = $('[data-hsym]');
    let W = 0, H = 0, dpr = 1, cx = fc && fc.getContext('2d'), F = [];
    const size = () => { if (!fc) return; dpr = Math.min(1.5, devicePixelRatio || 1); W = fc.clientWidth; H = fc.clientHeight; fc.width = W * dpr; fc.height = H * dpr; cx.setTransform(dpr, 0, 0, dpr, 0, 0); const n = W < 700 ? 26 : 48; F = Array.from({ length: n }, () => ({ x: Math.random() * W, y: H * (.15 + Math.random() * .6), r: .8 + Math.random() * 1.8, a: Math.random() * 6.28, s: .15 + Math.random() * .35, p: Math.random() * 6.28 })); };
    size(); addEventListener('resize', size);
    new IntersectionObserver(([e]) => vis = e.isIntersecting).observe(h);
    let t = 0;
    const tick = () => {
      if (vis) {
        x += (tx - x) * .05; y += (ty - y) * .05;
        const sc = Math.min(1, scrollY / innerHeight);
        h.style.setProperty('--px', x.toFixed(3)); h.style.setProperty('--py', (y + sc * 2.2).toFixed(3));
        if (sym) sym.style.opacity = String(1 - sc * .9);
        if (cx) {
          t += RM ? 0 : .016; cx.clearRect(0, 0, W, H);
          for (const f of F) {
            if (!RM) { f.a += (Math.random() - .5) * .2; f.x += Math.cos(f.a) * f.s; f.y += Math.sin(f.a) * f.s * .6 - .05;
              const dx = f.x - ptr.x, dy = f.y - ptr.y, d = dx * dx + dy * dy; if (d < 12000) { f.x += dx / Math.sqrt(d + 1) * 1.2; f.y += dy / Math.sqrt(d + 1) * 1.2; }
              if (f.x < -10) f.x = W + 10; if (f.x > W + 10) f.x = -10; if (f.y < H * .05) f.y = H * .8; if (f.y > H * .9) f.y = H * .1; }
            const al = .25 + .75 * Math.pow((Math.sin(t * 1.6 + f.p) + 1) / 2, 2), R = f.r * 7;
            const g = cx.createRadialGradient(f.x, f.y, 0, f.x, f.y, R); g.addColorStop(0, `rgba(255,236,170,${al})`); g.addColorStop(.25, `rgba(255,200,120,${al * .45})`); g.addColorStop(1, 'rgba(255,190,110,0)');
            cx.fillStyle = g; cx.beginPath(); cx.arc(f.x, f.y, R, 0, 6.283); cx.fill();
          }
        }
      }
      requestAnimationFrame(tick);
    };
    tick();
  })();

  /* ---------- Playlist: startet leise, sonst bei der ersten Interaktion ---------- */
  const PL = (() => {
    const el = $('[data-pl]'), T = D.tracks || [], sbtn = $('[data-snd]'); if (!el || !T.length) return { duck() {}, swell() {} };
    const a = new Audio(); a.preload = 'auto';
    const LOW = .12, KEY = 'vp-mute';
    const ss = { get: () => { try { return sessionStorage.getItem(KEY); } catch (e) { return null; } }, set: v => { try { v ? sessionStorage.setItem(KEY, v) : sessionStorage.removeItem(KEY); } catch (e) {} } };
    let i = 0, playing = false, muted = ss.get() === '1', ducked = false, AC = null, gain = null, raf = 0, armed = false;
    a.volume = .5; const fixedVol = Math.abs(a.volume - .5) > .01; a.volume = 0;   /* iOS: Lautstärke nur per WebAudio */
    const vol = (v, ms) => {
      if (gain) { gain.gain.cancelScheduledValues(AC.currentTime); gain.gain.setTargetAtTime(v, AC.currentTime, Math.max(.01, ms / 3000)); return; }
      cancelAnimationFrame(raf); const v0 = a.volume, t0 = performance.now();
      const st = now => { const k = Math.min(1, (now - t0) / Math.max(1, ms)); a.volume = Math.max(0, Math.min(1, v0 + (v - v0) * k)); if (k < 1) raf = requestAnimationFrame(st); };
      raf = requestAnimationFrame(st);
    };
    const load = k => { i = (k + T.length) % T.length; a.src = T[i].f; $('[data-pl-title]', el).textContent = T[i].n; $$('[data-pl-track]', el).forEach((b, j) => b.classList.toggle('on', j === i)); };
    const ui = () => {
      const on = playing && !muted;
      el.classList.toggle('playing', playing); el.classList.toggle('muted', muted);
      $('[data-pl-state]', el).textContent = muted ? '♪ Playlist · stumm' : playing ? '♪ läuft leise – Playlist' : '♪ Playlist · tippen zum Starten';
      const tg = $('[data-pl-toggle]', el); tg.setAttribute('aria-pressed', String(on)); tg.setAttribute('aria-label', on ? 'Musik pausieren' : 'Musik abspielen');
      const mb = $('[data-pl-mute]', el); mb.setAttribute('aria-pressed', String(muted)); mb.setAttribute('aria-label', muted ? 'Ton an' : 'Stumm schalten');
      if (sbtn) sbtn.setAttribute('aria-pressed', String(on));
    };
    const webaudio = () => { if (AC || !fixedVol) return; try { AC = new (window.AudioContext || window.webkitAudioContext)(); gain = AC.createGain(); gain.gain.value = 0; AC.createMediaElementSource(a).connect(gain); gain.connect(AC.destination); } catch (e) { AC = null; gain = null; } };
    const play = (fade = 2000) => {
      if (fixedVol && !AC) return Promise.reject(new Error('gesture'));
      if (AC && AC.state === 'suspended') AC.resume();
      if (!gain) a.volume = Math.min(a.volume, LOW);
      return a.play().then(() => { playing = true; ui(); vol(muted || ducked ? 0 : LOW, fade); });
    };
    const pause = () => { vol(0, 400); setTimeout(() => { if (muted || ducked || !playing) a.pause(); }, 450); };
    const evs = ['pointerdown', 'touchstart', 'keydown', 'wheel', 'scroll', 'click'];
    const onGesture = e => { if (muted || playing) return disarm(); if (e && e.target && e.target.closest && e.target.closest('[data-pl],[data-snd]')) return; webaudio(); play().then(disarm).catch(() => {}); };
    const arm = () => { if (armed) return; armed = true; evs.forEach(ev => addEventListener(ev, onGesture, { passive: true, capture: true })); };
    const disarm = () => { armed = false; evs.forEach(ev => removeEventListener(ev, onGesture, { capture: true })); };
    a.addEventListener('ended', () => { load(i + 1); if (playing && !muted) a.play().catch(() => {}); });
    load(0); ui();
    setTimeout(() => el.classList.add('compact'), 9000);
    if (!muted) play().catch(arm);
    const start = () => { muted = false; ss.set(null); webaudio(); a.muted = false; (a.paused ? play(1200) : Promise.resolve(vol(LOW, 800))).catch(() => {}); ui(); };
    const stop = () => { muted = true; ss.set('1'); pause(); disarm(); ui(); };
    $('[data-pl-toggle]', el).addEventListener('click', () => (playing && !muted && !a.paused) ? (playing = false, pause(), ss.set('1'), muted = false, ui(), el.classList.add('paused')) : (el.classList.remove('paused'), start()));
    $('[data-pl-mute]', el).addEventListener('click', () => muted ? start() : stop());
    $('[data-pl-next]', el).addEventListener('click', () => { load(i + 1); if (!muted) { webaudio(); play(600).catch(() => {}); } });
    $('[data-pl-prev]', el).addEventListener('click', () => { load(i - 1); if (!muted) { webaudio(); play(600).catch(() => {}); } });
    const lb = $('[data-pl-list]', el), tl = $('[data-pl-tracks]', el);
    lb.addEventListener('click', () => { const o = tl.hidden; tl.hidden = !o; lb.setAttribute('aria-expanded', String(o)); el.classList.toggle('open', o); });
    $$('[data-pl-track]', el).forEach(b => b.addEventListener('click', () => { load(+b.dataset.plTrack); muted = false; ss.set(null); webaudio(); play(600).catch(() => {}); ui(); }));
    document.addEventListener('click', e => { if (!tl.hidden && !e.target.closest('[data-pl]')) { tl.hidden = true; lb.setAttribute('aria-expanded', 'false'); el.classList.remove('open'); } });
    if (sbtn) sbtn.addEventListener('click', () => (playing && !muted && !a.paused) ? stop() : start());
    return {
      duck(on) { if (on === ducked) return; ducked = on; if (!playing || muted) return; if (on) pause(); else play(1500).catch(() => {}); },
      swell(f, sec) { if (playing && !muted && !ducked) vol(LOW * f, sec * 1000 * .6); }
    };
  })();
  const breatheSound = (to, sec) => PL.swell(to, sec);

  /* ---------- Reise (horizontal, echte Fotos) ---------- */
  const track = $('[data-track]'), pin = $('[data-trip]'), bar = $('[data-tripbar]'), plane = $('.re-plane'), dots = $$('.re-dots li'), STS = $$('.st', track), tcount = $('[data-tcount]');
  let curSt = -1, tripST = null;
  const setCur = k => {
    if (k === curSt) return; curSt = k;
    dots.forEach((d, i) => { d.classList.toggle('on', i <= k); d.classList.toggle('cur', i === k); });
    STS.forEach((st, i) => st.classList.toggle('past', i < k));
    pin.style.setProperty('--tone', STS[k].dataset.tone);
    STS.slice(k, k + 3).forEach(st => $$('img', st).forEach(im => { im.loading = 'eager'; }));
    if (tcount) tcount.textContent = String(k + 1).padStart(2, '0') + ' / ' + String(STS.length).padStart(2, '0');
    const cd = dots[k] && dots[k].parentNode; if (cd && innerWidth < 900) cd.scrollTo({ left: dots[k].getBoundingClientRect().left - cd.getBoundingClientRect().left + cd.scrollLeft - 20, behavior: RM ? 'auto' : 'smooth' });
  };
  setCur(0);
  if ('IntersectionObserver' in window) new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting) { STS.forEach((st, i) => setTimeout(() => $$('img', st).forEach(im => { im.loading = 'eager'; if (im.decode) im.decode().catch(() => {}); }), i < 4 ? 0 : 400 + i * 120)); o.disconnect(); } }), { rootMargin: '1200px' }).observe(pin);
  const desk = () => innerWidth >= 900 && window.gsap && window.ScrollTrigger;
  const tdist = () => track.scrollWidth - innerWidth + (parseFloat(getComputedStyle(track).paddingLeft) || 0);
  const goSt = i => {
    i = Math.max(0, Math.min(STS.length - 1, i));
    if (desk() && tripST) { const dist = tdist(), x = Math.min(dist, STS[i].offsetLeft - (innerWidth - STS[i].offsetWidth) / 2); scrollTo({ top: tripST.start + Math.max(0, x) / dist * (tripST.end - tripST.start) + 2, behavior: RM ? 'auto' : 'smooth' }); }
    else track.scrollTo({ left: STS[i].offsetLeft - (track.clientWidth - STS[i].offsetWidth) / 2, behavior: RM ? 'auto' : 'smooth' });
  };
  $$('[data-go]').forEach(b => b.addEventListener('click', () => goSt(+b.dataset.go)));
  $$('[data-tnav]').forEach(b => b.addEventListener('click', () => goSt(curSt + +b.dataset.tnav)));
  track.addEventListener('scroll', () => { if (desk()) return; const c = track.scrollLeft + track.clientWidth / 2; let k = 0; STS.forEach((st, i) => { if (st.offsetLeft <= c) k = i; }); setCur(k); }, { passive: true });
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.matchMedia({
      '(min-width: 900px)': () => {
        const dist = tdist;
        const tw = gsap.to(track, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: pin, start: 'top top', end: () => '+=' + dist() * 1.05, pin: true, scrub: .7, invalidateOnRefresh: true, onUpdate: s => {
          const p = s.progress; bar.style.width = p * 100 + '%'; plane.style.left = p * 100 + '%';
          const x = p * dist() + innerWidth * .55; let k = 0; STS.forEach((st, i) => { if (st.offsetLeft <= x) k = i; }); setCur(k);
        } } });
        tripST = tw.scrollTrigger;
        if (!RM) STS.forEach((st, i) => {
          const ph = $$('.sp', st), yr = $('.st-y', st), tx = $$('.st-t > :not(.st-y)', st);
          if (i > 0) {
            const tl = gsap.timeline({ scrollTrigger: { trigger: st, containerAnimation: tw, start: 'left 100%', end: 'left 35%', scrub: true } });
            tl.from(ph, { y: (j) => [50, -60, 30][j], x: j => [-40, 80, 40][j], rotate: j => [-9, 12, -10][j], opacity: 0, scale: .86, stagger: .12, ease: 'power2.out' }, 0)
              .from(tx, { x: 80, opacity: 0, stagger: .06, ease: 'power2.out' }, .1);
          }
          gsap.fromTo(yr, { xPercent: 35 }, { xPercent: -35, ease: 'none', scrollTrigger: { trigger: st, containerAnimation: tw, start: 'left right', end: 'right left', scrub: true } });
        });
        return () => { tripST = null; };
      }
    });
  }

  /* ---------- Zitat Wort für Wort ---------- */
  const bq = $('[data-split]');
  if (bq) {
    const walk = n => { [...n.childNodes].forEach(c => { if (c.nodeType === 3) { const f = document.createDocumentFragment(); c.textContent.split(/(\s+)/).forEach(w => { if (!w.trim()) f.appendChild(document.createTextNode(w)); else { const s = document.createElement('span'); s.className = 'w'; s.textContent = w; f.appendChild(s); } }); c.replaceWith(f); } else walk(c); }); };
    walk(bq); const ws = $$('.w', bq);
    const up = () => { const r = bq.getBoundingClientRect(), p = Math.max(0, Math.min(1, (innerHeight * .85 - r.top) / (r.height + innerHeight * .35))); const n = Math.round(p * ws.length); ws.forEach((w, i) => w.classList.toggle('on', i < n)); };
    addEventListener('scroll', up, { passive: true }); up();
  }


  /* ---------- Lebensbaum ---------- */
  const tw = $('[data-tree]');
  if (tw) {
    const svgT = $('svg.tree', tw), ty = $('[data-ty]'), tt = $('[data-tt]'), F = $$('.fr', tw);
    const FD = F.map(f => f.getAttribute('aria-label'));
    const link = $('[data-tlink]', tw), tdot = $('[data-tdot]', tw), card = $('[data-tcard]', tw); let curF = 0;
    const drawLink = () => { if (!link) return; if (innerWidth < 900) { link.removeAttribute('d'); return; }
      const wr = tw.getBoundingClientRect(), fr = $('.fr-c', F[curF]).getBoundingClientRect(), cr = card.getBoundingClientRect();
      const x1 = fr.left + fr.width / 2 - wr.left, y1 = fr.top + fr.height / 2 - wr.top, x2 = cr.left - wr.left - 3, y2 = cr.top + cr.height / 2 - wr.top, mx = x1 + (x2 - x1) * .55;
      link.setAttribute('d', `M${x1.toFixed(1)} ${y1.toFixed(1)} C${mx.toFixed(1)} ${(y1 - 30).toFixed(1)}, ${(mx + 20).toFixed(1)} ${y2.toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`);
      tdot.setAttribute('cx', x2.toFixed(1)); tdot.setAttribute('cy', y2.toFixed(1));
      link.classList.remove('draw'); void link.getBoundingClientRect(); link.classList.add('draw'); };
    const pick = i => { curF = i; F.forEach((f, j) => f.classList.toggle('on', j === i)); const [y, ...r] = FD[i].split(': '); ty.textContent = y; tt.textContent = r.join(': '); requestAnimationFrame(drawLink); };
    addEventListener('resize', () => requestAnimationFrame(drawLink));
    F.forEach((f, i) => { f.addEventListener('click', () => pick(i)); f.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(i); } }); f.addEventListener('mouseenter', () => pick(i)); });
    const grow = () => { const r = tw.getBoundingClientRect(), vh = innerHeight; const g = RM ? 1 : Math.max(0, Math.min(1, (vh * .9 - r.top) / (r.height * .75))); svgT.style.setProperty('--g', g.toFixed(3)); tw.classList.toggle('leafy', g > .55); tw.classList.toggle('fruity', g > .8); if (g > .8 && !tw._auto) { tw._auto = 1; let k = 0; const a = setInterval(() => { if (tw._touched) return clearInterval(a); pick(k = (k + 1) % F.length); }, 3200); } };
    tw.addEventListener('pointerdown', () => tw._touched = 1);
    addEventListener('scroll', grow, { passive: true }); grow(); pick(0);
  }

  /* ---------- Momente (Handy: antippen) ---------- */
  $$('[data-mo]').forEach(m => m.addEventListener('click', () => m.classList.toggle('on')));
  if (window.gsap && !RM) $$('.mo img').forEach((im, i) => gsap.fromTo(im, { yPercent: -4 }, { yPercent: 4, ease: 'none', scrollTrigger: { trigger: im, start: 'top bottom', end: 'bottom top', scrub: true } }));

  /* ---------- Finder ---------- */
  const ft = $('[data-ft]'), fd = $('[data-fd]'), fl = $('[data-fl]'), fres = $('[data-fres]'); let fsel = null;
  const qk = m => '<li class="fi-qk"><span>Schnellwahl</span>' + (m === 'soul' ? D.feel : D.body).map((d, i) => `<button type="button" data-qm="${m}" data-qi="${i}">${d.l}</button>`).join('') + '</li>';
  const show = (title, text, list) => { ft.textContent = title; fd.textContent = text; fl.innerHTML = list.map(x => `<li><a href="${D.wa}?text=${encodeURIComponent('Aloha Verena, ich interessiere mich für: ' + x + '. Wann hättest du Zeit?')}" target="_blank" rel="noopener">${x}<span aria-hidden="true">→</span></a></li>`).join(''); fres.animate && fres.animate([{ opacity: .3, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }], { duration: 450, easing: 'ease-out' }); };
  $$('[data-fmode]').forEach(b => b.addEventListener('click', () => { const m = b.dataset.fmode; $$('[data-fmode]').forEach(x => { x.classList.toggle('on', x === b); x.setAttribute('aria-selected', String(x === b)); }); $$('[data-fp]').forEach(p => p.classList.toggle('on', p.dataset.fp === m)); fsel = null; $$('.bp, [data-feel]').forEach(x => x.classList.remove('on')); if (m === 'soul') show('Wie fühlst du dich?', 'Wähle das Gefühl, das am ehesten passt – links oder hier.', []); else show('Tippe auf eine Stelle', 'Nacken, Rücken, Knie – oder einfach das Gefühl, dass etwas nicht im Fluss ist.', []); fl.innerHTML = qk(m); }));
  $$('.bp').forEach(b => b.addEventListener('click', () => { $$('.bp').forEach(x => x.classList.toggle('on', x === b)); const d = D.body[+b.dataset.bp]; fsel = d; show(d.l, 'Diese Angebote passen zu diesem Bereich – was für dich infrage kommt, besprechen wir persönlich.', d.r); }));
  $$('[data-feel]').forEach(b => b.addEventListener('click', () => { $$('[data-feel]').forEach(x => x.classList.toggle('on', x === b)); const d = D.feel[+b.dataset.feel]; fsel = d; show(d.l, d.t, d.r); }));
  fl.innerHTML = qk('body');
  fl.addEventListener('click', e => { const q = e.target.closest('[data-qi]'); if (!q) return; const t = q.dataset.qm === 'soul' ? $$('[data-feel]')[+q.dataset.qi] : $$('.bp')[+q.dataset.qi]; t && t.click(); });
  const fcta = $('[data-fcta]');
  fcta && fcta.addEventListener('click', () => {
    if (!fsel) return; const f = $('[data-form]'), ta = f && $('textarea', f); if (!ta) return;
    const chip = x => /Lomi/.test(x) ? 'Lomi Lomi Nui' : /Frauen/.test(x) ? 'Frauenmassage' : /Massage/.test(x) ? 'Massage' : /HUNA/.test(x) ? 'HUNA' : /Transform/.test(x) ? 'Transformation' : /TERRA/.test(x) ? 'dōTERRA' : /Bowen/.test(x) ? 'Bowen-Therapie' : /Klang/.test(x) ? 'Klangschalen' : /Kennenlern/.test(x) ? null : 'Physiotherapie';
    fsel.r.map(chip).forEach(v => { const c = v && $(`input[name="Interesse"][value="${v}"]`, f); if (c) c.checked = true; });
    if (!ta.value.trim() || ta.dataset.pre === '1') { ta.value = 'Mich interessiert: ' + fsel.l + ' (' + fsel.r.join(', ') + '). '; ta.dataset.pre = '1'; }
  });

  /* ---------- Atmen ---------- */
  const bw = $('[data-bwrap]'), bt = $('[data-bt]'), bn = $('[data-bn]'), bbtn = $('[data-breath]'), brr = $('[data-br-r]'); let bRun = false;
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const phase = async (cls, label, sec) => { bw.className = 'breath ' + cls; bt.textContent = label; for (let s = sec; s > 0; s--) { if (!bRun) return; bn.textContent = s; await sleep(1000); } };
  bbtn.addEventListener('click', async () => {
    if (bRun) { bRun = false; return; }
    bRun = true; bbtn.lastChild.textContent = ' Stopp';
    if (innerWidth < 900) { const r = bw.getBoundingClientRect(); if (r.bottom > innerHeight || r.top < 70) bw.scrollIntoView({ block: 'center', behavior: RM ? 'auto' : 'smooth' }); }
    for (let r = 1; r <= 3 && bRun; r++) {
      brr.textContent = `Runde ${r} von 3`;
      breatheSound(1.7, 4); await phase('in', 'Einatmen', 4);
      if (!bRun) break; await phase('hold', 'Halten', 2);
      if (!bRun) break; breatheSound(.6, 6); await phase('out', 'Ausatmen', 6);
    }
    breatheSound(1, 2); bw.className = 'breath'; bt.textContent = bRun ? 'Schön.' : 'Bereit?'; bn.textContent = bRun ? 'Spürst du es?' : ''; brr.textContent = bRun ? 'Drei Runden geschafft. Aloha.' : 'Runde 0 von 3';
    bRun = false; bbtn.lastChild.textContent = ' Nochmal atmen';
  });

  /* ---------- Aloha & HUNA ---------- */
  $$('.al').forEach(a => a.addEventListener('click', () => { const on = !a.classList.contains('on'); $$('.al').forEach(x => x.classList.remove('on')); a.classList.toggle('on', on); }));
  const huna = $$('.huna-w span');
  if (huna.length) new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting) { huna.forEach((s, i) => setTimeout(() => s.classList.add('on'), RM ? 0 : i * 450)); o.disconnect(); } }), { threshold: .6 }).observe($('.huna-w'));


  /* ---------- Neuseeland ---------- */
  (() => {
    const q = $$('[data-nzq] blockquote'), st = $('[data-nzstack]'), figs = st ? $$('figure', st) : [], dots = $$('[data-nzd]'); let i = 0, timer = 0;
    const set = k => { if (!q.length) return; q[i].classList.remove('on'); i = (k + q.length) % q.length; q[i].classList.add('on'); const p = +q[i].dataset.nzp;
      figs.forEach((f, j) => f.classList.toggle('front', j === p)); dots.forEach((d, j) => { d.classList.toggle('on', j === i); d.setAttribute('aria-pressed', String(j === i)); }); };
    const loop = () => { clearInterval(timer); if (!RM) timer = setInterval(() => { if (!document.hidden) set(i + 1); }, 6500); };
    if (q.length) { set(0); loop(); }
    dots.forEach(d => d.addEventListener('click', () => { set(+d.dataset.nzd); loop(); }));
    if (st && 'IntersectionObserver' in window && !RM) { st.classList.add('wait'); new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting) { st.classList.remove('wait'); o.disconnect(); } }), { threshold: .25 }).observe(st); }
  })();
  /* ---------- Reel neue Liege ---------- */
  (() => {
    const r = $('[data-reel]'); if (!r) return;
    const v = $('video', r), b = $('[data-reelsnd]', r);
    if ('IntersectionObserver' in window) new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { const p = v.play(); p && p.catch(() => {}); } else { v.pause(); if (!v.muted) { v.muted = true; if (b) { b.textContent = '🔇'; b.setAttribute('aria-pressed', 'false'); b.setAttribute('aria-label', 'Ton an'); } PL.duck(false); } } }), { threshold: .35 }).observe(v);
    b && b.addEventListener('click', () => { v.muted = !v.muted; PL.duck(!v.muted); b.textContent = v.muted ? '🔇' : '🔊'; b.setAttribute('aria-pressed', String(!v.muted)); b.setAttribute('aria-label', v.muted ? 'Ton an' : 'Ton aus'); if (!v.muted) { const p = v.play(); p && p.catch(() => {}); } });
  })();
  /* ---------- Film ---------- */
  const film = $('[data-film]');
  film && $('.fl-play', film) && $('.fl-play', film).addEventListener('click', async () => {
    let ok = false; try { ok = (await fetch('media/film.mp4', { method: 'HEAD' })).ok; } catch (e) {}
    if (ok) { film.innerHTML = '<video src="media/film.mp4" controls autoplay playsinline style="width:100%;aspect-ratio:16/10;object-fit:cover"></video>'; }
    else { film.classList.add('soon'); $('.fl-tag', film).textContent = 'Der Film von Falcon Eye kommt hier hinein 🎬'; }
  });

  /* ---------- Öle ---------- */
  const oils = $('[data-oils]'), mist = $('[data-mist]');
  $$('.oil').forEach(o => o.addEventListener('click', () => {
    $$('.oil').forEach(x => x.classList.toggle('on', x === o));
    const r = oils.getBoundingClientRect(), b = o.getBoundingClientRect();
    mist.style.setProperty('--mx', ((b.left + b.width / 2 - r.left) / r.width * 60 + 20) + '%'); mist.style.setProperty('--my', ((b.top + b.height / 2 - r.top) / r.height * 60 + 20) + '%');
    mist.style.setProperty('--mc', D.oils[+o.dataset.oil].c); mist.classList.remove('on'); void mist.offsetWidth; mist.classList.add('on');
    const od = D.oils[+o.dataset.oil], sel = $('[data-oilsel]'); if (sel) sel.innerHTML = `<b>${od.n}</b> – ${od.d}. <a href="${D.shop}" target="_blank" rel="noopener">Im Shop ansehen →</a> · <a href="${D.wa}?text=${encodeURIComponent('Aloha Verena, ich habe eine Frage zu ' + od.n + '.')}" target="_blank" rel="noopener">Frage stellen</a>`;
  }));

  /* ---------- Wusstest du? (Flip-Karten) ---------- */
  (() => {
    const C = $$('.fc'), n = $('[data-fcn]'), bar = $('[data-fcbar]'), seen = new Set();
    const flip = (c, on) => {
      c.classList.toggle('on', on); const t = $('.fc-t', c); t.setAttribute('aria-expanded', String(on));
      $('.fc-b', c).setAttribute('aria-hidden', String(!on)); $$('.fc-b a, .fc-b button', c).forEach(x => x.tabIndex = on ? 0 : -1);
      if (on) { seen.add(c.dataset.fc); c.classList.add('seen'); n.textContent = seen.size; bar.style.width = seen.size / C.length * 100 + '%'; if (seen.size === C.length) n.parentNode.innerHTML = '<b>Alle ' + C.length + '</b> entdeckt – Mahalo! 🌺'; setTimeout(() => $('.fc-x', c).focus({ preventScroll: true }), 300); }
    };
    C.forEach(c => {
      c.addEventListener('click', e => { if (e.target.closest('a')) return; if (e.target.closest('.fc-x')) { flip(c, false); $('.fc-t', c).focus({ preventScroll: true }); return; } flip(c, !c.classList.contains('on')); });
    });
    $$('[data-fcat]').forEach(b => b.addEventListener('click', () => {
      $$('[data-fcat]').forEach(x => x.classList.toggle('on', x === b)); const k = b.dataset.fcat;
      C.forEach(c => c.classList.toggle('hide', k !== 'alle' && c.dataset.cat !== k));
      const g = $('[data-fcg]'); g.scrollLeft = 0;
      if (window.gsap && !RM) gsap.fromTo(C.filter(c => !c.classList.contains('hide')), { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .6, stagger: .05, ease: 'power3.out' });
    }));
  })();

  /* ---------- Aloha-Wörterbuch ---------- */
  (() => {
    const W = D.words || [], card = $('.wb-card'); if (!card) return; let cur = 0;
    const show = i => { cur = i; const w = W[i]; $('[data-ww]').textContent = w.w; $('[data-wp]').textContent = w.p; $('[data-wm]').textContent = w.m; $('[data-wn]').textContent = w.n; const a = $('[data-wsrc]'); a.href = w.su; a.textContent = 'Quelle: ' + w.sn + '\u00a0↗'; $$('[data-w]').forEach((b, j) => b.classList.toggle('on', j === i)); card.classList.remove('flip'); void card.offsetWidth; card.classList.add('flip'); };
    $$('[data-w]').forEach(b => b.addEventListener('click', () => show(+b.dataset.w)));
    const say = $('[data-wsay]');
    if (!('speechSynthesis' in window)) say.hidden = true;
    else say.addEventListener('click', () => { const u = new SpeechSynthesisUtterance(W[cur].w.replace(/ʻ/g, '')); u.lang = 'de-DE'; u.rate = .75; speechSynthesis.cancel(); speechSynthesis.speak(u); });
  })();

  /* ---------- Lightbox für echte Fotos ---------- */
  (() => {
    const lb = $('[data-lbox]'); if (!lb) return; const li = $('[data-lbi]'), lc = $('[data-lbc]'); let list = [], k = 0, last = null;
    const cap = im => { const f = im.closest('figure'); const c = f && $('figcaption', f); return (c && c.textContent) || im.alt || ''; };
    const set = j => { k = (j + list.length) % list.length; const im = list[k]; li.src = im.currentSrc || im.src; li.alt = im.alt; lc.textContent = cap(im); };
    const open = im => { const w = im.closest('[data-lbw]'); list = w ? $$('img', w) : $$('img[data-lb]'); last = document.activeElement; set(list.indexOf(im)); lb.hidden = false; document.documentElement.style.overflow = 'hidden'; $('[data-lbx]').focus(); };
    const close = () => { lb.hidden = true; document.documentElement.style.overflow = ''; last && last.focus && last.focus({ preventScroll: true }); };
    document.addEventListener('click', e => { if (e.target.closest('a, button')) return; let im = e.target.closest('[data-lbw] img, img[data-lb]'); if (!im) { const f = e.target.closest('[data-lbw] figure, figure[data-lbw]'); im = f && $('img', f); } if (im) { e.preventDefault(); open(im); } });
    $('[data-lbx]').addEventListener('click', close); lb.addEventListener('click', e => { if (e.target === lb) close(); });
    $$('[data-lbn]').forEach(b => b.addEventListener('click', () => set(k + +b.dataset.lbn)));
    addEventListener('keydown', e => { if (lb.hidden) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') set(k + 1); if (e.key === 'ArrowLeft') set(k - 1); });
  })();

  /* ---------- Zahlen zählen hoch ---------- */
  (() => {
    const N = $$('[data-count]'); if (!N.length || RM || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return; io.unobserve(e.target); const el = e.target, to = +el.dataset.count, from = to > 1000 ? 1980 : 0, plus = el.hasAttribute('data-plus') ? '+' : '', t0 = performance.now();
      const st = now => { const p = Math.min(1, (now - t0) / 1600), v = Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3))); el.textContent = v + (p === 1 ? plus : ''); if (p < 1) requestAnimationFrame(st); }; requestAnimationFrame(st); }), { threshold: .6 });
    N.forEach(n => io.observe(n));
  })();

  /* ---------- Formular ---------- */
  const form = $('[data-form]');
  form.addEventListener('submit', () => { form.querySelector('[name="_next"]').value = location.href.split('#')[0].split('?')[0] + '?gesendet=1#kontakt'; });
  if (/gesendet=1/.test(location.search)) $('[data-fok]').hidden = false;

  /* ---------- Animationen ---------- */
  if (window.gsap && !RM) {
    whenIntro(() => {
      gsap.from('.h1 .ln > *', { yPercent: 110, duration: 1.3, ease: 'power4.out', stagger: .12, delay: .15 });
      gsap.from('.hero [data-h]:not(.h1)', { y: 30, opacity: 0, duration: 1.1, ease: 'power3.out', stagger: .1, delay: .5 });
    });
    $$('.stat').forEach((el, i) => gsap.from(el, { y: 40, opacity: 0, duration: .9, delay: i * .08, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 92%', once: true } }));
    $$('.fc').forEach((el, i) => gsap.from(el, { y: 60, rotateY: -25, opacity: 0, duration: 1, delay: (i % 4) * .08, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 92%', once: true } }));
    const sh = $('[data-shop]'); sh && gsap.from(sh, { y: 80, rotateY: -35, rotateX: 12, opacity: 0, duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: sh, start: 'top 85%', once: true } });
    $$('.qs-ph, .wb-card, .al-law, .oe-vortrag').forEach(el => gsap.from(el, { y: 50, opacity: 0, scale: .96, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }));
    $$('.sec-h, .fi-g, .at-g > *, .fl-g > *, .oe-t, .cv-l, .ko-g > *, .huna, .wb-l').forEach(el => gsap.from(el, { y: 50, opacity: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } }));
    $$('[data-r]').forEach((el, i) => gsap.from(el, { y: 50, opacity: 0, duration: .9, delay: (i % 3) * .08, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } }));
  }
})();

/* ===== Lomi Lomi, Instagram-Story-Wall & zusätzliche Bewegung ===== */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches, IO = 'IntersectionObserver' in window;
  const seen = (els, f, opt) => { if (!IO) return els.forEach(f); const o = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { f(e.target); o.unobserve(e.target); } }), opt || { threshold: .2 }); els.forEach(el => o.observe(el)); };

  /* --- Lomi: drei Seiten, drei Zeiten --- */
  const SIDES = [['Die Rückseite steht für die Zukunft.', 'Was darf kommen? Raum für das, was vor dir liegt.'], ['Die Vorderseite steht für das Hier und Jetzt.', 'Ganz da sein – in diesem Atemzug, in diesem Moment.'], ['Die Seite steht für die Vergangenheit.', 'Was hinter dir liegt, darf gewürdigt werden.']];
  const st = $('[data-lsidet]');
  $$('[data-lside]').forEach(b => b.addEventListener('click', () => {
    $$('[data-lside]').forEach(x => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', String(x === b)); });
    const s = SIDES[+b.dataset.lside]; st.innerHTML = '<em>' + s[0] + '</em> ' + s[1]; st.classList.remove('swap'); void st.offsetWidth; st.classList.add('swap');
  }));
  const steps = $$('[data-lstep]'), sl = $('[data-lsteps]');
  if (RM) steps.forEach(s => s.classList.add('in'));
  else seen(steps, s => { s.classList.add('in'); if (sl) sl.style.setProperty('--lp', (steps.filter(x => x.classList.contains('in')).length / steps.length).toFixed(2)); }, { threshold: .25 });
  const lp = $('[data-loplay]'), plt = $('[data-pl-toggle]');
  if (lp && plt) {
    const sync = () => { const on = plt.getAttribute('aria-pressed') === 'true'; lp.classList.toggle('on', on); lp.lastChild.textContent = on ? ' Musik läuft – pausieren' : ' Aloha-Playlist anhören'; };
    lp.addEventListener('click', e => { e.stopPropagation(); plt.click(); setTimeout(sync, 80); });
    new MutationObserver(sync).observe(plt, { attributes: true, attributeFilter: ['aria-pressed'] });
  }

  /* --- Story-Wall --- */
  const wall = $('#instagram'), track = $('[data-swtrack]');
  if (wall && track) {
    const T = $$('.sw-t', track), mob = () => innerWidth < 760;
    const vis = () => T.filter(t => !t.classList.contains('off'));
    const now = $('[data-swnow]'), tot = $('[data-swtot]'), prog = $('[data-swprog]'), pbtn = $('[data-swplay]');
    let cur = 0, auto = !RM, inView = false, paused = false, resumeT = 0, t0 = 0, raf = 0;
    const DUR = 4200;
    const pad = n => String(n).padStart(2, '0');
    /* Abschluss-Kachel: füllt die freien Felder der letzten Reihe (Desktop), beim Filtern gleichmäßige Kacheln */
    const more = $('[data-swmore]');
    const fillMore = () => {
      if (!more) return; more.style.gridColumn = more.style.gridRow = ''; more.classList.remove('band');
      if (mob()) return;
      more.style.display = 'none';
      const cs = getComputedStyle(track), cols = cs.gridTemplateColumns.split(' ').length, gx = parseFloat(cs.columnGap) || 12, gy = parseFloat(cs.rowGap) || 12;
      const cw = (track.clientWidth - gx * (cols - 1)) / cols, rh = parseFloat(cs.gridAutoRows) || 160, occ = new Set(); let maxR = 0;
      vis().forEach(t => { const c0 = Math.round((t.offsetLeft - track.offsetLeft) / (cw + gx)), r0 = Math.round((t.offsetTop - track.offsetTop) / (rh + gy)), w = Math.max(1, Math.round((t.offsetWidth + gx) / (cw + gx))), h = Math.max(1, Math.round((t.offsetHeight + gy) / (rh + gy)));
        for (let a = 0; a < h; a++) for (let b = 0; b < w; b++) occ.add((r0 + a) + ',' + (c0 + b)); maxR = Math.max(maxR, r0 + h); });
      more.style.display = '';
      const last = maxR - 1, free = []; for (let c = 0; c < cols; c++) if (!occ.has(last + ',' + c)) free.push(c);
      if (!free.length) { more.style.gridColumn = '1 / -1'; more.style.gridRow = String(maxR + 1); more.classList.add('band'); return; }
      let best = [free[0]], run = [free[0]]; for (let k = 1; k < free.length; k++) { if (free[k] === free[k - 1] + 1) run.push(free[k]); else run = [free[k]]; if (run.length > best.length) best = run.slice(); }
      const up = last > 0 && best.every(c => !occ.has((last - 1) + ',' + c));
      more.style.gridColumn = (best[0] + 1) + ' / ' + (best[best.length - 1] + 2);
      more.style.gridRow = up ? last + ' / span 2' : String(last + 1);
      if (best.length >= 3 && !up) more.classList.add('band');
    };
    fillMore(); let fmT = 0; addEventListener('resize', () => { clearTimeout(fmT); fmT = setTimeout(fillMore, 200); });
    if (RM) { wall.classList.add('in'); if (pbtn) { pbtn.setAttribute('aria-pressed', 'false'); pbtn.setAttribute('aria-label', 'Automatisch weiterblättern'); } }
    else seen([wall.querySelector('.sw-stage')], () => { vis().forEach((t, i) => t.style.setProperty('--k', i)); wall.classList.add('in'); }, { threshold: .08 });
    if (IO) new IntersectionObserver(([e]) => { inView = e.isIntersecting; t0 = performance.now(); }, { threshold: .35 }).observe(track);
    $$('.sw-b img', track).forEach(im => { const done = () => im.parentNode.classList.add('ld'); im.complete && im.naturalWidth ? done() : im.addEventListener('load', done, { once: true }); });
    /* Bilder rechtzeitig laden, damit keine leeren Kacheln aufblitzen */
    if (IO) new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting) { $$('img', track).forEach((im, i) => setTimeout(() => { im.loading = 'eager'; }, i * 40)); o.disconnect(); } }), { rootMargin: '1400px 0px' }).observe(wall);

    const setCur = k => {
      const v = vis(); if (!v.length) return; cur = (k + v.length) % v.length;
      T.forEach(t => t.classList.remove('cur')); v[cur].classList.add('cur');
      now.textContent = pad(cur + 1); tot.textContent = pad(v.length);
    };
    const center = (k, smooth = true) => {
      const v = vis(); if (!v.length) return; k = (k + v.length) % v.length; const el = v[k];
      track.scrollTo({ left: el.offsetLeft - (track.clientWidth - el.offsetWidth) / 2, behavior: smooth && !RM ? 'smooth' : 'auto' });
      setCur(k); t0 = performance.now();
    };
    let sT = 0;
    track.addEventListener('scroll', () => { if (!mob()) return; cancelAnimationFrame(sT); sT = requestAnimationFrame(() => {
      const c = track.scrollLeft + track.clientWidth / 2, v = vis(); let best = 0, bd = 1e9;
      v.forEach((t, i) => { const d = Math.abs(t.offsetLeft + t.offsetWidth / 2 - c); if (d < bd) { bd = d; best = i; } });
      if (best !== cur) { setCur(best); t0 = performance.now(); }
    }); }, { passive: true });
    const hold = () => { paused = true; clearTimeout(resumeT); resumeT = setTimeout(() => { paused = false; t0 = performance.now(); }, 7000); };
    ['pointerdown', 'touchstart', 'wheel'].forEach(ev => track.addEventListener(ev, hold, { passive: true }));
    $$('[data-swnav]').forEach(b => b.addEventListener('click', () => { hold(); center(cur + +b.dataset.swnav); }));
    pbtn && pbtn.addEventListener('click', () => { auto = !auto; pbtn.setAttribute('aria-pressed', String(auto)); pbtn.setAttribute('aria-label', auto ? 'Automatisches Weiterblättern pausieren' : 'Automatisch weiterblättern'); t0 = performance.now(); paused = false; });
    const lbOpen = () => !$('[data-swl]').hidden;
    const tick = n => {
      raf = requestAnimationFrame(tick);
      if (!mob()) return;
      const run = auto && inView && !paused && !document.hidden && !lbOpen();
      if (!run) { t0 = n - (parseFloat(prog.style.width) || 0) / 100 * DUR; return; }
      const p = Math.min(1, (n - t0) / DUR); prog.style.width = p * 100 + '%';
      if (p >= 1) center(cur + 1);
    };
    raf = requestAnimationFrame(tick);
    setCur(0);

    // Filter
    $$('[data-swf]').forEach(b => b.addEventListener('click', () => {
      const c = b.dataset.swf;
      $$('[data-swf]').forEach(x => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', String(x === b)); });
      const first = new Map(); if (!mob() && !RM) vis().forEach(t => first.set(t, t.getBoundingClientRect()));
      T.forEach(t => { t.classList.toggle('off', c !== 'alle' && !t.dataset.cats.split(' ').includes(c)); t.classList.remove('pop'); });
      track.classList.toggle('flat', c !== 'alle'); fillMore();
      const v = vis();
      if (mob()) { track.scrollLeft = 0; setCur(0); t0 = performance.now(); prog.style.width = '0%'; }
      if (!RM) v.forEach((t, i) => {
        const r0 = first.get(t);
        if (r0 && t.animate) { const r1 = t.getBoundingClientRect(); t.animate([{ transform: `translate(${r0.left - r1.left}px,${r0.top - r1.top}px) scale(${r0.width / r1.width},${r0.height / r1.height})` }, { transform: 'none' }], { duration: 650, easing: 'cubic-bezier(.22,.8,.16,1)' }); }
        else { t.style.setProperty('--k', Math.min(i, 12)); void t.offsetWidth; t.classList.add('pop'); }
      });
    }));

    // Lightbox
    const L = $('[data-swl]'), li = $('[data-swli]'); let lk = 0, last = null, sx = null;
    const fill = k => {
      const v = vis(); lk = (k + v.length) % v.length; const b = $('.sw-b', v[lk]);
      li.src = $('img', b).currentSrc || $('img', b).src; li.alt = $('img', b).alt;
      li.style.animation = 'none'; void li.offsetWidth; li.style.animation = '';
      $('[data-swlt]').textContent = b.dataset.tt; $('[data-swlx]').textContent = '„' + b.dataset.x + '“';
      $('[data-swld]').textContent = b.dataset.d; $('[data-swltag]').textContent = b.dataset.tag;
      $('[data-swlu]').href = b.dataset.u; $('[data-swlc]').textContent = pad(lk + 1) + ' / ' + pad(v.length);
    };
    const open = t => { last = document.activeElement; fill(vis().indexOf(t)); L.hidden = false; document.documentElement.style.overflow = 'hidden'; $('[data-swlx-close]').focus(); };
    const close = () => { L.hidden = true; document.documentElement.style.overflow = ''; if (mob()) center(lk, false); last && last.focus({ preventScroll: true }); };
    track.addEventListener('click', e => { const b = e.target.closest('.sw-b'); if (!b) return; const t = b.parentNode;
      if (mob() && !t.classList.contains('cur')) { hold(); center(vis().indexOf(t)); return; } open(t); });
    $('[data-swlx-close]').addEventListener('click', close);
    L.addEventListener('click', e => { if (e.target === L) close(); });
    $$('[data-swln]').forEach(b => b.addEventListener('click', () => fill(lk + +b.dataset.swln)));
    document.addEventListener('keydown', e => { if (L.hidden) return; if (e.key === 'Escape') close(); else if (e.key === 'ArrowRight') fill(lk + 1); else if (e.key === 'ArrowLeft') fill(lk - 1);
      else if (e.key === 'Tab') { const f = $$('button, a', L).filter(x => x.offsetParent); const i = f.indexOf(document.activeElement); if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); } else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); } } });
    L.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
    L.addEventListener('touchend', e => { if (sx == null) return; const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50 && e.target.closest('.swl-ph')) fill(lk + (dx < 0 ? 1 : -1)); sx = null; }, { passive: true });
  }

  /* --- Werdegang: Linie wächst mit, erreichte Jahre leuchten --- */
  const cvl = $('.cv-list');
  if (cvl) {
    const lis = $$('li', cvl); let cvT = 0;
    const cvUp = () => { cvT = 0; const r = cvl.getBoundingClientRect(), mid = innerHeight * .62; if (r.top > innerHeight || r.bottom < 0) return;
      cvl.style.setProperty('--cvp', Math.max(0, Math.min(1, (mid - r.top) / r.height)).toFixed(3));
      lis.forEach(li => li.classList.toggle('lit', li.getBoundingClientRect().top + 22 < mid)); };
    addEventListener('scroll', () => { if (!cvT) cvT = requestAnimationFrame(cvUp); }, { passive: true }); cvUp();
  }

  /* --- Mehr Bewegung --- */
  const fd = $$('.fol-div');
  if (RM) fd.forEach(f => f.classList.add('in')); else seen(fd, f => f.classList.add('in'), { threshold: .6 });
  const h2 = $$('.h2');
  if (RM) h2.forEach(h => h.classList.add('ul')); else seen(h2, h => h.classList.add('ul'), { threshold: .6 });
  if (!RM && window.gsap && window.ScrollTrigger) {
    const g = window.gsap;
    const batch = (sel, from, st = .08) => { const els = $$(sel); if (!els.length) return; window.ScrollTrigger.batch(els, { start: 'top 90%', once: true, onEnter: b => g.fromTo(b, from, { opacity: 1, y: 0, x: 0, scale: 1, rotate: 0, clipPath: 'inset(0% 0% 0% 0% round 0px)', duration: 1, ease: 'power3.out', stagger: st, overwrite: true, clearProps: 'clipPath' }) }); };
    batch('.mo', { opacity: 0, y: 60, scale: .92 });
    batch('.oil', { opacity: 0, y: 30, scale: .8 }, .06);
    batch('.kc', { opacity: 0, x: -30 });
    batch('.cv-list li', { opacity: 0, x: 40 }, .05);
    batch('.lo-way li', { opacity: 0, y: 60, rotate: 2 }, .1);
    batch('.lo-ph figure', { opacity: 0, scale: .85, y: 40 }, .15);
    batch('.lo-q', { opacity: 0, y: 30 });
    // Parallax auf Fotos (über die CSS-Eigenschaft "translate", kollidiert nicht mit Hover-Transforms)
    $$('.qs-ph img, .lo-p1 img, .oe-vortrag, .fl-side').forEach(im => {
      if (im.tagName === 'IMG' && !im.classList.contains('fl-side')) im.style.scale = '1.12';
      g.fromTo(im, { '--py': -18 }, { '--py': 18, ease: 'none', scrollTrigger: { trigger: im, start: 'top bottom', end: 'bottom top', scrub: true }, onUpdate() { im.style.translate = '0 ' + (parseFloat(g.getProperty(im, '--py')) || 0).toFixed(1) + 'px'; } });
    });
    $$('.sec-h .kick').forEach(k => g.from(k, { opacity: 0, x: -30, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: k, start: 'top 92%', once: true } }));
  }
})();
