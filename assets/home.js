/* Falcon Eye — home page: falcon-eye hero, mission index, reels phone */
(() => {
  const { $, $$, reduce, hasGsap } = window.FE;

  /* ---------- falcon eye renderer ---------- */
  const vid = $('#heroVid'), ec = $('#eyeCanvas'), ex = ec.getContext('2d');
  vid.closest('.eye').classList.add('js');
  const eye = { swoop: 0, word: 0, zoom: 0 };
  const falcon = new Path2D(window.FALCON_PATH || '');
  const E = { x: 888, y: 68 }, LOGO_W = 1933, LOGO_H = 207, WORD = { x: 977, y: 25, w: 956, h: 175 };
  const wordImg = new Image(); wordImg.src = 'media/wordmark.png';
  const poster = new Image();
  /* phones: lighter, portrait hero clip that fills the screen and loads fast */
  if (innerWidth < 700 && vid.dataset.mobileSrc) { vid.poster = vid.dataset.mobilePoster; vid.src = vid.dataset.mobileSrc; vid.load(); vid.play().catch(() => {}); poster.src = vid.dataset.mobilePoster; }
  else poster.src = 'media/hero.jpg';
  const lerp = (a, b, t) => a + (b - a) * t, smooth = t => t * t * (3 - 2 * t);
  const cover = (src, w, h, vw, vh, rx = 0, ry = 0) => { const k = Math.max(vw / w, vh / h); ex.drawImage(src, rx + (vw - w * k) / 2, ry + (vh - h * k) / 2, w * k, h * k); };
  /* mobile: start playback on first touch/scroll if autoplay was blocked (data saver / low power) */
  const kick = () => { if (vid.paused) vid.play().catch(() => {}); };
  ['touchstart', 'scroll', 'pointerdown'].forEach(ev => addEventListener(ev, kick, { passive: true, once: true }));
  function renderEye() {
    const dpr = Math.min(devicePixelRatio || 1, 2), vw = ec.clientWidth, vh = ec.clientHeight;
    if (ec.width !== Math.round(vw * dpr) || ec.height !== Math.round(vh * dpr)) { ec.width = Math.round(vw * dpr); ec.height = Math.round(vh * dpr); }
    ex.setTransform(1, 0, 0, 1, 0, 0); ex.fillStyle = '#000'; ex.fillRect(0, 0, ec.width, ec.height);
    const ready = vid.readyState >= 2, src = ready ? vid : (poster.complete && poster.naturalWidth ? poster : null);
    const sw = ready ? vid.videoWidth : (src ? src.naturalWidth : 0), sh = ready ? vid.videoHeight : (src ? src.naturalHeight : 0);
    const z = eye.zoom;
    if (z >= .995) { ex.setTransform(1, 0, 0, 1, 0, 0); ex.clearRect(0, 0, ec.width, ec.height); return; } /* fully zoomed: the real video underneath shows through */
    if (eye.swoop <= 0) return;
    const narrow = vw < 700;
    const logoW = narrow ? vw * .92 : Math.min(vw * .72, 1150), s0 = logoW / LOGO_W;
    const x0 = (vw - logoW) / 2 - (1 - eye.swoop) * vw * .9;
    const y0 = vh / 2 - LOGO_H * s0 / 2 - (narrow ? 10 : 24) + (1 - eye.swoop) * 90;
    const t = smooth(Math.min(1, z / .35));
    const ePx = lerp(x0 + E.x * s0, vw / 2, t), ePy = lerp(y0 + E.y * s0, vh / 2, t);
    const sEnd = Math.hypot(vw, vh) / 2 / 4.2 * 1.25;
    const sc = s0 * Math.pow(sEnd / s0, Math.pow(z, 1.35));
    const tx = ePx - E.x * sc, ty = ePy - E.y * sc;
    if (narrow) {
      /* phones: never copy the video into the canvas (fails on many Android GPUs).
         Instead punch the falcon out of the black layer – the real <video> underneath shows through. */
      ex.save();
      ex.setTransform(dpr * sc, 0, 0, dpr * sc, dpr * tx, dpr * ty);
      ex.globalCompositeOperation = 'destination-out'; ex.globalAlpha = Math.min(1, eye.swoop * 1.4);
      ex.fill(falcon, 'evenodd');
      ex.restore();
      const lift = Math.max(0, 1 - z * 2.2);
      if (lift > 0) { ex.save(); ex.setTransform(dpr * sc, 0, 0, dpr * sc, dpr * tx, dpr * ty); ex.clip(falcon, 'evenodd'); ex.setTransform(1, 0, 0, 1, 0, 0); ex.globalAlpha = .12 * lift; ex.fillStyle = '#ffffff'; ex.fillRect(0, 0, ec.width, ec.height); ex.restore(); }
    } else {
    ex.save();
    ex.setTransform(dpr * sc, 0, 0, dpr * sc, dpr * tx, dpr * ty);
    ex.clip(falcon, 'evenodd');
    ex.setTransform(dpr, 0, 0, dpr, 0, 0);
    ex.globalAlpha = Math.min(1, eye.swoop * 1.4);
    if (src) {
      const lift = Math.max(0, 1 - z * 2.2);
      ex.filter = narrow ? 'saturate(1.15) brightness(' + (1 + .25 * lift) + ') contrast(1.05)' : 'saturate(' + (.45 + .55 * z) + ') brightness(' + (1 + .9 * lift) + ') contrast(1.06)';
      if (narrow) {
        /* portrait screens: fit the film into the bird's wing band first, then open up to full screen */
        const k = smooth(Math.min(1, z * 1.15)), bw = LOGO_W * sc, bh = LOGO_H * sc * 1.6, by = ty - LOGO_H * sc * .3;
        const rw = lerp(bw, vw, k), rh = lerp(bh, vh, k), rx = lerp(tx, 0, k), ry = lerp(by, 0, k);
        cover(src, sw, sh, rw, rh, rx, ry);
      } else cover(src, sw, sh, vw, vh);
      ex.filter = 'none';
      if (lift > 0) { ex.globalCompositeOperation = 'screen'; ex.globalAlpha = (narrow ? .08 : .28) * lift; ex.fillStyle = '#e6ecec'; ex.fillRect(0, 0, vw, vh); ex.globalCompositeOperation = 'source-over'; }
    } else { ex.fillStyle = '#e6ecec'; ex.fillRect(0, 0, vw, vh); }
    ex.restore();
    }
    ex.save();
    ex.setTransform(dpr * sc, 0, 0, dpr * sc, dpr * tx, dpr * ty);
    ex.lineWidth = 1.4 / sc; ex.strokeStyle = 'rgba(230,236,236,' + (.55 * eye.swoop * (1 - Math.min(1, z * 4))) + ')';
    ex.stroke(falcon);
    ex.restore();
    const wa = eye.word * (1 - Math.min(1, z * 4));
    if (wa > 0 && wordImg.complete) {
      ex.setTransform(dpr, 0, 0, dpr, 0, 0); ex.globalAlpha = wa;
      ex.drawImage(wordImg, tx + WORD.x * sc + (1 - eye.word) * 60, ty + WORD.y * sc, WORD.w * sc, WORD.h * sc);
      ex.globalAlpha = 1;
    }
  }
  const heroSec = $('.eye');
  (function loop() { if (scrollY < heroSec.offsetHeight + 50) renderEye(); requestAnimationFrame(loop); })();

  /* ---------- mission index ---------- */
  const mis = $('.missions');
  if (mis) {
    const btns = $$('.mlist button', mis), layers = $$('.bg video', mis);
    const txt = $('[data-m=text]', mis), meta = $('[data-m=meta]', mis), link = $('[data-m=link]', mis), ask = $('[data-m=ask]', mis), prog = $('.mprog i', mis);
    let active = -1, layer = 0, auto = true, timer = 0, inView = false, t0 = 0;
    const DUR = 5200;
    function select(i, user) {
      if (user) auto = false;
      if (i === active) return; active = i;
      const b = btns[i];
      btns.forEach(x => x.setAttribute('aria-selected', x === b)); b.style.setProperty('--dur', DUR + 'ms');
      layer = 1 - layer;
      const v = layers[layer], o = layers[1 - layer];
      v.src = b.dataset.src; v.poster = b.dataset.poster; v.currentTime = 0; v.play().catch(() => {});
      v.classList.add('on'); o.classList.remove('on'); setTimeout(() => o.pause(), 800);
      txt.textContent = b.dataset.text; meta.textContent = b.dataset.meta; link.href = b.dataset.link; ask.href = 'kontakt.html#' + b.dataset.anlass;
      t0 = performance.now();
    }
    /* click / tap selects (no hover switching); arrows step; auto-play resumes after 15 s idle */
    let idleT = 0;
    const user = i => { select(i, true); clearTimeout(idleT); idleT = setTimeout(() => { auto = true; t0 = performance.now(); }, 15000); };
    btns.forEach((b, i) => b.addEventListener('click', () => user(i)));
    $('[data-m=prev]', mis).addEventListener('click', () => user((active - 1 + btns.length) % btns.length));
    $('[data-m=next]', mis).addEventListener('click', () => user((active + 1) % btns.length));
    let sx = 0;
    mis.addEventListener('touchstart', e => sx = e.touches[0].clientX, { passive: true });
    mis.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 60) user((active + (dx < 0 ? 1 : -1) + btns.length) % btns.length); }, { passive: true });
    select(0);
    new IntersectionObserver(es => es.forEach(e => {
      inView = e.isIntersecting;
      layers.forEach(v => inView && v.classList.contains('on') ? v.play().catch(() => {}) : v.pause());
    }), { threshold: .25 }).observe(mis);
    (function tick() {
      if (inView && auto && !reduce) {
        const p = (performance.now() - t0) / DUR;
        prog.style.transform = `scaleX(${Math.min(1, p)})`;
        if (p >= 1) select((active + 1) % btns.length);
      } else if (!auto) prog.style.transform = 'scaleX(0)';
      requestAnimationFrame(tick);
    })();
  }

  /* ---------- FPV stick simulator ---------- */
  const sim = $('.sim');
  if (sim) {
    const v = $('video', sim), hz = $('.hz', sim), st = { lx: 0, ly: 0, rx: 0, ry: 0 }, cur = { lx: 0, ly: 0, rx: 0, ry: 0 }, keys = {};
    const out = k => $(`[data-sim=${k}]`, sim);
    let inView = false;
    new IntersectionObserver(es => es.forEach(e => { inView = e.isIntersecting; inView ? (v.preload = 'auto', v.play().catch(() => {})) : v.pause(); }), { threshold: .2 }).observe(sim);
    $$('.stick', sim).forEach(el => {
      const side = el.dataset.stick, knob = $('i', el);
      let id = null;
      const set = e => { const r = el.getBoundingClientRect(); let x = (e.clientX - r.left) / r.width * 2 - 1, y = (e.clientY - r.top) / r.height * 2 - 1;
        const m = Math.hypot(x, y); if (m > 1) { x /= m; y /= m; } st[side + 'x'] = x; st[side + 'y'] = side === 'l' ? y : y; };
      el.addEventListener('pointerdown', e => { id = e.pointerId; el.setPointerCapture(id); el.classList.add('on'); set(e); e.preventDefault(); });
      el.addEventListener('pointermove', e => { if (e.pointerId === id) set(e); });
      const up = e => { if (e.pointerId !== id) return; id = null; el.classList.remove('on'); st[side + 'x'] = 0; if (side === 'r') st.ry = 0; };
      el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
      el._knob = knob;
    });
    addEventListener('keydown', e => { if (!inView) return; const k = e.key.toLowerCase(); if (['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright'].includes(k)) { keys[k] = true; if (k.startsWith('arrow')) e.preventDefault(); } });
    addEventListener('keyup', e => keys[e.key.toLowerCase()] = false);
    (function loop() {
      if (inView) {
        const kx = (keys.d ? 1 : 0) - (keys.a ? 1 : 0), ky = (keys.s ? 1 : 0) - (keys.w ? 1 : 0), rx = (keys.arrowright ? 1 : 0) - (keys.arrowleft ? 1 : 0), ry = (keys.arrowdown ? 1 : 0) - (keys.arrowup ? 1 : 0);
        const tgt = { lx: kx || st.lx, ly: ky || st.ly, rx: rx || st.rx, ry: ry || st.ry };
        for (const k in cur) cur[k] += (tgt[k] - cur[k]) * .12;
        const thr = (1 - cur.ly) / 2, roll = cur.rx * 32, pitch = cur.ry * 14;
        v.style.transform = `translate(${-cur.lx * 60}px, ${pitch * 3}px) rotate(${-roll}deg) scale(${1.2 + thr * .45})`;
        hz.style.transform = `translateY(${pitch * 4}px) rotate(${roll}deg)`;
        const rate = thr < .5 ? .2 + thr * 1.6 : 1 + (thr - .5) * 4.4;
        if (Math.abs(v.playbackRate - rate) > .04) v.playbackRate = Math.round(rate * 100) / 100;
        v.style.filter = `saturate(${1 + thr * .25}) contrast(${1 + thr * .08})`;
        out('spd').textContent = Math.round(thr * thr * 140);
        out('thr').textContent = Math.round(thr * 100); out('roll').textContent = Math.round(roll); out('pitch').textContent = Math.round(-pitch);
        $$('.stick', sim).forEach(el => { const sd = el.dataset.stick; el._knob.style.transform = `translate(${cur[sd + 'x'] * 34}px, ${cur[sd + 'y'] * 34}px)`; });
      }
      requestAnimationFrame(loop);
    })();
  }

  /* ---------- reels phone ---------- */
  const feed = $('.phone .feed');
  if (feed) {
    const items = $$('.item', feed), dots = $$('.phone .dots i');
    const io = new IntersectionObserver(es => es.forEach(e => {
      const v = $('video', e.target);
      if (e.intersectionRatio > .6) { v.preload = 'auto'; v.play().catch(() => {}); dots.forEach((d, k) => d.classList.toggle('on', items[k] === e.target)); }
      else v.pause();
    }), { root: feed, threshold: [0, .6, 1] });
    items.forEach(i => io.observe(i));
    const go = d => { const h = feed.clientHeight, i = Math.round(feed.scrollTop / h); feed.scrollTo({ top: Math.max(0, Math.min(items.length - 1, i + d)) * h, behavior: 'smooth' }); };
    $('[data-reel=prev]').addEventListener('click', () => go(-1));
    $('[data-reel=next]').addEventListener('click', () => go(1));
    feed.addEventListener('wheel', e => e.stopPropagation(), { passive: true });
    // auto-advance gently while visible and untouched
    let touched = false, vis = false;
    feed.addEventListener('pointerdown', () => touched = true);
    feed.addEventListener('wheel', () => touched = true, { passive: true });
    new IntersectionObserver(es => es.forEach(e => vis = e.isIntersecting), { threshold: .5 }).observe(feed);
    setInterval(() => { if (vis && !touched && !reduce) { const h = feed.clientHeight; const i = Math.round(feed.scrollTop / h); feed.scrollTo({ top: ((i + 1) % items.length) * h, behavior: 'smooth' }); } }, 4200);
  }

  if (!hasGsap || reduce) {
    eye.swoop = 1; eye.word = 1; eye.zoom = 1; vid.play().catch(() => {});
    $('.hero-copy').style.opacity = 1; $('.eye .osd').style.opacity = 1; $('.boot').style.display = 'none';
    heroSec.style.height = 'auto'; $('.eye .stage').style.position = 'relative';
    return;
  }

  const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
  intro.to('.boot span', { opacity: 1, duration: .05, stagger: .2 })
    .to('.boot', { opacity: 0, duration: .25 }, '+=.25')
    .fromTo('.armed', { opacity: 0, scale: 1.4 }, { opacity: 1, scale: 1, duration: .22, ease: 'power4.out' })
    .to('.armed', { opacity: .15, duration: .1, repeat: 3, yoyo: true, ease: 'none' })
    .to('.armed', { opacity: 0, scale: .85, duration: .2 })
    .to(eye, { swoop: 1, duration: 1.5, ease: 'expo.out', onStart: () => vid.play().catch(() => {}) }, '-=.05')
    .to(eye, { word: 1, duration: .8 }, '-=.9')
    .to('.tagline', { opacity: 1, duration: .6 }, '-=.5')
    .to('.scrollhint', { opacity: 1, duration: .6 }, '-=.3')
    .add(() => autoFly(), '+=.5');

  /* auto-flight into the eye: starts by itself, slowly; any touch / wheel / key hands control to the visitor */
  let autoOn = false;
  function autoFly() {
    if (autoOn || scrollY > 8) return;
    autoOn = true;
    const end = heroSec.offsetHeight - innerHeight, dur = innerWidth < 700 ? 6500 : 8000, t0 = performance.now(), y0 = scrollY;
    const stop = () => { autoOn = false; ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach(ev => removeEventListener(ev, stop)); };
    ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach(ev => addEventListener(ev, stop, { passive: true }));
    const ease = t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    (function step(now) {
      if (!autoOn) return;
      const k = Math.min(1, (now - t0) / dur), y = y0 + (end - y0) * ease(k);
      if (window.FE.lenis) window.FE.lenis.scrollTo(y, { immediate: true }); else scrollTo(0, y);
      if (k < 1) requestAnimationFrame(step); else stop();
    })(t0);
  }

  ScrollTrigger.create({
    trigger: '.eye', start: 'top top', end: 'bottom bottom', scrub: .6,
    onUpdate: self => {
      const p = self.progress;
      eye.zoom = Math.min(1, p / .72);
      if (p > .01) intro.progress(1);
      const f = 1 - Math.min(1, p / .08);
      gsap.set(['.tagline', '.scrollhint', '.skipfly'], { opacity: f, pointerEvents: f > .3 ? 'auto' : 'none' });
      const c = Math.max(0, Math.min(1, (p - .68) / .14));
      gsap.set('.hero-copy', { opacity: c, y: (1 - c) * 40, pointerEvents: c > .5 ? 'auto' : 'none' });
      gsap.set('.eye .osd', { opacity: Math.max(0, Math.min(1, (p - .6) / .12)) });
    }
  });

  /* reels phone tilts in */
  gsap.from('.phone', { rotateY: -28, rotateX: 8, y: 80, opacity: 0, transformPerspective: 1200, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.phone', start: 'top 85%', once: true } });
  /* compare: auto-sweep once to show it's draggable */
  const cmp = $('.compare');
  if (cmp) ScrollTrigger.create({ trigger: cmp, start: 'top 70%', once: true, onEnter: () => {
    const o = { p: 50 };
    gsap.timeline().to(o, { p: 18, duration: .9, ease: 'power2.inOut', onUpdate: () => cmp.style.setProperty('--split', o.p + '%') })
      .to(o, { p: 82, duration: 1.2, ease: 'power2.inOut', onUpdate: () => cmp.style.setProperty('--split', o.p + '%') })
      .to(o, { p: 50, duration: .8, ease: 'power2.inOut', onUpdate: () => cmp.style.setProperty('--split', o.p + '%') });
  } });
})();
