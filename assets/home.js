/* Falcon Eye — home page: falcon-eye hero, mission index, reels phone */
(() => {
  const { $, $$, reduce, hasGsap } = window.FE;

  /* ---------- falcon eye renderer ---------- */
  const vid = $('#heroVid'), ec = $('#eyeCanvas'), ex = ec.getContext('2d');
  const eye = { swoop: 0, word: 0, zoom: 0 };
  const falcon = new Path2D(window.FALCON_PATH || '');
  const E = { x: 888, y: 68 }, LOGO_W = 1933, LOGO_H = 207, WORD = { x: 977, y: 25, w: 956, h: 175 };
  const wordImg = new Image(); wordImg.src = 'media/wordmark.png';
  const poster = new Image(); poster.src = 'media/hero.jpg';
  const lerp = (a, b, t) => a + (b - a) * t, smooth = t => t * t * (3 - 2 * t);
  const cover = (src, w, h, vw, vh) => { const k = Math.max(vw / w, vh / h); ex.drawImage(src, (vw - w * k) / 2, (vh - h * k) / 2, w * k, h * k); };
  function renderEye() {
    const dpr = Math.min(devicePixelRatio || 1, 2), vw = ec.clientWidth, vh = ec.clientHeight;
    if (ec.width !== Math.round(vw * dpr) || ec.height !== Math.round(vh * dpr)) { ec.width = Math.round(vw * dpr); ec.height = Math.round(vh * dpr); }
    ex.setTransform(1, 0, 0, 1, 0, 0); ex.fillStyle = '#000'; ex.fillRect(0, 0, ec.width, ec.height);
    const ready = vid.readyState >= 2, src = ready ? vid : (poster.complete && poster.naturalWidth ? poster : null);
    const sw = ready ? vid.videoWidth : (src ? src.naturalWidth : 0), sh = ready ? vid.videoHeight : (src ? src.naturalHeight : 0);
    const z = eye.zoom;
    if (z >= .995) { if (src) { ex.setTransform(dpr, 0, 0, dpr, 0, 0); cover(src, sw, sh, vw, vh); } return; }
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
    ex.save();
    ex.setTransform(dpr * sc, 0, 0, dpr * sc, dpr * tx, dpr * ty);
    ex.clip(falcon, 'evenodd');
    ex.setTransform(dpr, 0, 0, dpr, 0, 0);
    ex.globalAlpha = Math.min(1, eye.swoop * 1.4);
    if (src) {
      const lift = Math.max(0, 1 - z * 2.2);
      ex.filter = 'saturate(' + (.45 + .55 * z) + ') brightness(' + (1 + .9 * lift) + ') contrast(1.06)';
      cover(src, sw, sh, vw, vh);
      ex.filter = 'none';
      if (lift > 0) { ex.globalAlpha = .28 * lift; ex.fillStyle = '#e6ecec'; ex.fillRect(0, 0, vw, vh); }
    } else { ex.fillStyle = '#e6ecec'; ex.fillRect(0, 0, vw, vh); }
    ex.restore();
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
      btns.forEach(x => x.setAttribute('aria-selected', x === b));
      layer = 1 - layer;
      const v = layers[layer], o = layers[1 - layer];
      v.src = b.dataset.src; v.poster = b.dataset.poster; v.currentTime = 0; v.play().catch(() => {});
      v.classList.add('on'); o.classList.remove('on'); setTimeout(() => o.pause(), 800);
      txt.textContent = b.dataset.text; meta.textContent = b.dataset.meta; link.href = b.dataset.link; ask.href = 'kontakt.html#' + b.dataset.anlass;
      t0 = performance.now();
    }
    btns.forEach((b, i) => {
      b.addEventListener('mouseenter', () => window.FE.fine && select(i, true));
      b.addEventListener('focus', () => select(i, true));
      b.addEventListener('click', () => select(i, true));
    });
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
      } else if (!auto) prog.style.transform = 'scaleX(1)';
      requestAnimationFrame(tick);
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
    .to('.scrollhint', { opacity: 1, duration: .6 }, '-=.3');

  ScrollTrigger.create({
    trigger: '.eye', start: 'top top', end: 'bottom bottom', scrub: .6,
    onUpdate: self => {
      const p = self.progress;
      eye.zoom = Math.min(1, p / .72);
      if (p > .01) intro.progress(1);
      const f = 1 - Math.min(1, p / .08);
      gsap.set(['.tagline', '.scrollhint'], { opacity: f });
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
