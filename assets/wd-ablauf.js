/* Falcon Eye – Ablauf: „Erst sehen. Dann entscheiden.“ (webdesign.html#ablauf, Stil: assets/wd-ablauf.css)
   Vier Stationen an einer leuchtenden Flugroute: Kennenlernen · Kostenloser Entwurf (Vorhang auf) · Feinschliff · In 7 Tagen online.
   Eine FPV-Drohne fliegt die Route ab; erreicht sie eine Station, spielt deren Szene einmal ab.
   - Desktop (breit und hoch genug): Bühne steht (CSS sticky), Scrollen fliegt die Drohne waagerecht weiter.
   - Handy/Tablet: senkrechte Route, die Drohne folgt dem Scrollen, Stationen spielen beim Sichtkontakt.
   - Antippen einer Szene spielt sie nochmal. Ohne GSAP oder bei „Bewegung reduzieren“: alles fertig, keine Bewegung. */
(() => {
  const sec = document.querySelector('[data-wab]');
  if (!sec) return;
  const $ = (s, r = sec) => r.querySelector(s), $$ = (s, r = sec) => [...r.querySelectorAll(s)];
  const G = window.gsap;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sts = $$('.wab-st'), vigs = sts.map(li => $('.wab-vig', li)), nodes = sts.map(li => $('.wab-node', li));
  const route = $('.wab-route'), svg = $('.wab-path'), base = $('.base', svg), glow = $('.glow', svg), done = $('.done', svg);
  const drone = $('.wab-drone'), track = $('.wab-track');
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  /* Szenen-Bühnen (320×240) skalieren */
  const fitV = () => { const w = vigs[0].clientWidth; if (w) sec.style.setProperty('--vs', (w / 320).toFixed(4)); };
  fitV();

  /* ---------- Route bauen ---------- */
  let L = 0, F = [], vertical = false, built = false;
  const mk = d => { const p = document.createElementNS('http://www.w3.org/2000/svg', 'path'); p.setAttribute('d', d); return p; };
  function build() {
    fitV();
    const rr = route.getBoundingClientRect();
    if (!rr.width) return;
    svg.setAttribute('width', rr.width); svg.setAttribute('height', rr.height);
    svg.setAttribute('viewBox', `0 0 ${rr.width.toFixed(1)} ${rr.height.toFixed(1)}`);
    const pts = nodes.map(n => { const r = n.getBoundingClientRect(); return [r.left - rr.left + r.width / 2, r.top - rr.top + r.height / 2]; });
    vertical = pts[1][1] - pts[0][1] > 40;
    const start = vertical ? [pts[0][0], Math.max(-10, pts[0][1] - 90)] : [Math.max(-30, pts[0][0] - 150), pts[0][1] + 30];
    let d = `M${start[0].toFixed(1)},${start[1].toFixed(1)}`, prev = start;
    const parts = [];
    pts.forEach((p, i) => {
      let c;
      if (vertical) {
        const dy = p[1] - prev[1], sw = (i % 2 ? -1 : 1) * 16;
        c = ` C${(prev[0] + sw).toFixed(1)},${(prev[1] + dy * .4).toFixed(1)} ${(p[0] + sw).toFixed(1)},${(p[1] - dy * .4).toFixed(1)} ${p[0].toFixed(1)},${p[1].toFixed(1)}`;
      } else {
        const dx = p[0] - prev[0], lift = i % 2 ? 26 : -34;
        c = ` C${(prev[0] + dx * .4).toFixed(1)},${(prev[1] + lift).toFixed(1)} ${(p[0] - dx * .4).toFixed(1)},${(p[1] + lift).toFixed(1)} ${p[0].toFixed(1)},${p[1].toFixed(1)}`;
      }
      d += c; parts.push(d); prev = p;
    });
    [base, glow, done].forEach(p => p.setAttribute('d', d));
    L = done.getTotalLength();
    // Anteil der Route bis zu jeder Station
    F = parts.map(pd => { const t = mk(pd); svg.appendChild(t); const l = t.getTotalLength(); t.remove(); return L ? l / L : 0; });
    built = true;
    render(true);
  }

  /* ---------- Drohne zeichnen ---------- */
  let cur = 0, tgt = 0, ang = 0;
  function render(force) {
    if (!L) return;
    const l = cur * L, p = done.getPointAtLength(l), q = done.getPointAtLength(Math.min(L, l + 3)), q0 = done.getPointAtLength(Math.max(0, l - 3));
    const a = Math.atan2(q.y - q0.y, q.x - q0.x) * 180 / Math.PI + 90;
    ang = force ? a : ang + ((((a - ang) % 360) + 540) % 360 - 180) * .25;
    drone.style.transform = `translate(${p.x.toFixed(1)}px,${p.y.toFixed(1)}px) rotate(${ang.toFixed(1)}deg)`;
    const shown = L * (1 - cur);
    done.style.strokeDasharray = `${L.toFixed(1)} ${L.toFixed(1)}`; done.style.strokeDashoffset = shown.toFixed(1);
    glow.style.strokeDasharray = `${L.toFixed(1)} ${L.toFixed(1)}`; glow.style.strokeDashoffset = shown.toFixed(1);
  }

  /* Ruhiger Modus: alles fertig, Drohne parkt an der letzten Station */
  if (!G || reduce) {
    sts.forEach(li => li.classList.add('on'));
    const go = () => { build(); cur = 1; render(true); };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(go); else go();
    addEventListener('resize', go, { passive: true });
    return;
  }
  sec.classList.add('wab-js');

  /* ---------- Szenen ---------- */
  const q = (s, i) => $(s, vigs[i]), qa = (s, i) => $$(s, vigs[i]);
  function v1() {
    const tl = G.timeline({ paused: true, defaults: { ease: 'power3.out' } });
    const [t1, t2, t3] = qa('.wab-ty', 0), b1 = q('.b1', 0), b2 = q('.b2', 0), b3 = q('.b3', 0), items = qa('.b3 span', 0);
    tl.fromTo(q('.wab-steam', 0), { autoAlpha: 0 }, { autoAlpha: 1, duration: .8 }, 0)
      .fromTo(t1, { autoAlpha: 0, scale: .6 }, { autoAlpha: 1, scale: 1, duration: .25 }, .25).to(t1, { autoAlpha: 0, duration: .12 }, .9)
      .fromTo(b1, { autoAlpha: 0, y: 14, scale: .85 }, { autoAlpha: 1, y: 0, scale: 1, duration: .45, ease: 'back.out(2)', transformOrigin: '0% 100%' }, .95)
      .fromTo(t2, { autoAlpha: 0, scale: .6 }, { autoAlpha: 1, scale: 1, duration: .25 }, 1.35).to(t2, { autoAlpha: 0, duration: .12 }, 1.9)
      .fromTo(b2, { autoAlpha: 0, y: 14, scale: .85 }, { autoAlpha: 1, y: 0, scale: 1, duration: .45, ease: 'back.out(2)', transformOrigin: '100% 100%' }, 1.95)
      .fromTo(t3, { autoAlpha: 0, scale: .6 }, { autoAlpha: 1, scale: 1, duration: .25 }, 2.4).to(t3, { autoAlpha: 0, duration: .12 }, 2.95)
      .fromTo(b3, { autoAlpha: 0, y: 14, scale: .85 }, { autoAlpha: 1, y: 0, scale: 1, duration: .45, ease: 'back.out(2)', transformOrigin: '0% 100%' }, 3)
      .fromTo(items, { autoAlpha: 0, x: -8 }, { autoAlpha: 1, x: 0, duration: .3, stagger: .18 }, 3.2);
    return tl;
  }
  function v2() {
    const tl = G.timeline({ paused: true, defaults: { ease: 'power3.out' } });
    const img = q('.wab-scr img', 1);
    tl.fromTo(qa('.wab-cur', 1), { scaleX: 1 }, { scaleX: .15, duration: 1.25, ease: 'power3.inOut' }, .35)
      .fromTo(q('.wab-hudl', 1), { autoAlpha: 0, y: -6 }, { autoAlpha: 1, y: 0, duration: .3 }, .15)
      .fromTo(q('.wab-cone', 1), { autoAlpha: 0 }, { autoAlpha: 1, duration: .7 }, .75)
      .fromTo(q('.wab-phone', 1), { scale: .9, y: 10 }, { scale: 1, y: 0, duration: .9, ease: 'back.out(1.6)' }, .8)
      .fromTo(qa('.wab-spk', 1), { scale: 0, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: .4, stagger: .12, ease: 'back.out(3)' }, 1.3)
      .fromTo(q('.wab-tag', 1), { autoAlpha: 0, y: 10, scale: .9 }, { autoAlpha: 1, y: 0, scale: 1, xPercent: -50, duration: .45, ease: 'back.out(2)' }, 1.6)
      .fromTo(img, { y: 0 }, { y: () => -Math.max(0, img.offsetHeight - img.parentNode.offsetHeight) * .55, duration: 2.6, ease: 'power1.inOut' }, 1.9);
    G.set(q('.wab-tag', 1), { xPercent: -50, x: 0 });
    return tl;
  }
  function v3() {
    const tl = G.timeline({ paused: true, defaults: { ease: 'power3.out' } });
    const [s1, s2] = qa('.wab-slot', 2), [p1, p2] = qa('.wab-ph', 2), fd = q('.wab-fd', 2), rec = q('.wab-rec', 2), focus = q('.wab-focus', 2);
    tl.fromTo(focus, { scale: 1.5, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: .5 }, 0)
      .fromTo([s1, s2], { outlineColor: '#b4ab9b' }, { outlineColor: '#b4ab9b', duration: .01 }, 0)
      .fromTo(p1, { y: -150, rotation: -18, autoAlpha: 0 }, { y: 0, rotation: -2, autoAlpha: 1, duration: .7, ease: 'back.out(1.3)' }, .35)
      .fromTo(p2, { y: -150, rotation: 16, autoAlpha: 0 }, { y: 0, rotation: 1.5, autoAlpha: 1, duration: .7, ease: 'back.out(1.3)' }, .7)
      .to([s1, s2], { outlineColor: 'rgba(180,171,155,0)', duration: .35 }, 1.2)
      .fromTo(fd, { x: -70, y: 70, rotation: 70, autoAlpha: 0 }, { x: 350, y: 30, rotation: 100, duration: 1.5, ease: 'power1.inOut' }, 1.45)
      .set(fd, { autoAlpha: 1 }, 1.45).set(fd, { autoAlpha: 0 }, 2.95)
      .call(() => rec.classList.add('hot'), null, 1.45).call(() => rec.classList.remove('hot'), null, 3)
      .to(focus, { scale: .72, duration: .22, ease: 'power2.inOut', yoyo: true, repeat: 1 }, 2.4);
    return tl;
  }
  function confetti(box) {
    const cols = ['#ffd000', '#fff3b0', '#ff3b30', '#e6ecec', '#3ddc84'];
    for (let i = 0; i < 22; i++) {
      const c = document.createElement('i');
      c.style.background = cols[i % cols.length];
      box.appendChild(c);
      const a = Math.random() * Math.PI * 2, v = 50 + Math.random() * 90;
      G.timeline({ onComplete: () => c.remove() })
        .fromTo(c, { x: 0, y: 0, rotation: 0, autoAlpha: 1 }, { x: Math.cos(a) * v * 1.4, y: Math.sin(a) * v - 40, rotation: Math.random() * 540 - 270, duration: .55, ease: 'power2.out' })
        .to(c, { y: '+=110', autoAlpha: 0, rotation: '+=180', duration: .9, ease: 'power1.in' });
    }
  }
  function v4() {
    const tl = G.timeline({ paused: true, defaults: { ease: 'power2.in' } });
    const days = qa('.wab-day', 3).reverse(); // Mo zuerst
    const vw = q('.wab-vw', 3), conf = q('.wab-conf', 3);
    days.slice(0, 6).forEach((d, i) => tl.fromTo(d, { rotationX: 0, autoAlpha: 1 }, { rotationX: 112, autoAlpha: 0, duration: .28 }, .3 + i * .2));
    G.set(days[6], { rotationX: 0, autoAlpha: 1 });
    tl.fromTo(q('.wab-stamp', 3), { scale: 2.6, rotation: -26, autoAlpha: 0 }, { scale: 1, rotation: -12, autoAlpha: 1, duration: .32, ease: 'power4.in' }, 1.6)
      .call(() => confetti(conf), null, 1.92)
      .fromTo(vw, { x: 0 }, { keyframes: { x: [0, -5, 4, -2, 0] }, duration: .3, ease: 'none' }, 1.92)
      .fromTo(q('.wab-online', 3), { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: .4, ease: 'power3.out' }, 2.15);
    return tl;
  }
  const TL = [v1(), v2(), v3(), v4()];
  const lastPlay = TL.map(() => -1e5), isOn = TL.map(() => false);
  let touched = false, hinted = false;
  TL[0].eventCallback('onComplete', () => { if (!hinted) { hinted = true; sec.classList.add('hint-on'); } });
  function play(i) { lastPlay[i] = performance.now(); TL[i].restart(); }
  const peekT = [];
  vigs.forEach((v, i) => v.addEventListener('click', () => {
    if (!touched) { touched = true; sec.classList.add('is-touched'); }
    sts[i].classList.add('peek'); clearTimeout(peekT[i]); // angetippt: hell abspielen, auch wenn die Drohne noch nicht da ist
    peekT[i] = setTimeout(() => sts[i].classList.remove('peek'), (TL[i].duration() + 2.5) * 1000);
    play(i);
  }));
  /* Maus: Kachel neigt sich leicht zur Maus (Tiefe) */
  if (matchMedia('(hover: hover) and (pointer: fine)').matches) vigs.forEach(v => {
    const rx = G.quickTo(v, 'rotationX', { duration: .5, ease: 'power3.out' }), ry = G.quickTo(v, 'rotationY', { duration: .5, ease: 'power3.out' });
    v.addEventListener('pointermove', e => {
      const r = v.getBoundingClientRect();
      v.classList.add('tilt');
      ry(((e.clientX - r.left) / r.width - .5) * 12); rx(-((e.clientY - r.top) / r.height - .5) * 9);
    });
    v.addEventListener('pointerleave', () => { rx(0); ry(0); setTimeout(() => v.classList.remove('tilt'), 500); });
  });

  /* ---------- Fortschritt aus dem Scrollen ---------- */
  const mqPin = matchMedia('(min-width: 1100px) and (min-height: 640px)');
  let pin = false, vis = false, near = false, floor = 0, raf = 0, lastT = 0;
  // Desktop: Scroll-Fortschritt → Stationen bei p = .08 / .3 / .52 / .74 erreicht
  const PK = [.08, .3, .52, .74];
  const mapP = p => {
    if (p <= 0) return 0;
    const xs = [0, ...PK], ys = [0, ...F];
    for (let i = 1; i < xs.length; i++) if (p <= xs[i]) return ys[i - 1] + (ys[i] - ys[i - 1]) * (p - xs[i - 1]) / (xs[i] - xs[i - 1]);
    return 1;
  };
  function yToF(y) { // senkrechte Route: Anteil, an dem die Route die Höhe y erreicht
    let lo = 0, hi = L;
    for (let k = 0; k < 18; k++) { const m = (lo + hi) / 2; if (done.getPointAtLength(m).y < y) lo = m; else hi = m; }
    return L ? lo / L : 0;
  }
  function target() {
    const vh = innerHeight, rr = route.getBoundingClientRect();
    let f;
    if (pin) {
      const r = track.getBoundingClientRect(), total = r.height - vh;
      f = mapP(total > 0 ? clamp(-r.top / total, 0, 1) : 0);
    } else if (!vertical) {
      f = mapP(clamp((vh * .82 - rr.top) / (vh * .62), 0, 1));
    } else {
      f = yToF(vh * .55 - rr.top);
    }
    return clamp(Math.max(f, floor), 0, 1);
  }
  function tick(t) {
    raf = 0;
    if (!built) return;
    const dt = lastT ? Math.min(.05, (t - lastT) / 1000) : .016; lastT = t;
    tgt = target();
    const k = 1 - Math.pow(1 - .1, dt * 60);
    cur += (tgt - cur) * k;
    if (Math.abs(tgt - cur) < .0004) cur = tgt;
    render(false);
    F.forEach((fi, i) => {
      const on = cur >= fi - .004;
      if (on !== isOn[i]) {
        isOn[i] = on; sts[i].classList.toggle('on', on);
        if (on && performance.now() - lastPlay[i] > 4000) play(i);
      }
    });
    if (vis && (cur !== tgt)) raf = requestAnimationFrame(tick); else lastT = 0;
  }
  const kick = () => { if (near && !raf) raf = requestAnimationFrame(tick); };
  addEventListener('scroll', kick, { passive: true });
  const stage = $('.wab-stage'), inner = $('.wab-stage > .wrap');
  let wasPin = null;
  function setMode() {
    pin = mqPin.matches;
    sec.classList.toggle('is-pin', pin);
    if (pin) { // passt die stehende Bühne nicht ins Fenster, lieber ohne Pin
      const cs = getComputedStyle(stage), avail = stage.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
      if (inner.offsetHeight > avail + 4) { pin = false; sec.classList.remove('is-pin'); }
    }
    if (wasPin !== null && wasPin !== pin && window.ScrollTrigger) ScrollTrigger.refresh();
    wasPin = pin;
    requestAnimationFrame(() => { build(); kick(); });
  }
  if (mqPin.addEventListener) mqPin.addEventListener('change', setMode); else mqPin.addListener(setMode);
  let rT = 0;
  addEventListener('resize', () => { clearTimeout(rT); rT = setTimeout(() => { if (mqPin.matches) setMode(); else { build(); kick(); } }, 150); }, { passive: true });
  setMode();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(setMode);
  addEventListener('load', () => { build(); kick(); });

  if ('IntersectionObserver' in window) {
    // in der Nähe: Route vorbereiten
    new IntersectionObserver(es => es.forEach(e => { near = e.isIntersecting; if (near) { build(); kick(); } }), { rootMargin: '50% 0px' }).observe(sec);
    // im Bild: Bewegung an
    new IntersectionObserver(es => es.forEach(e => {
      const v = e.isIntersecting;
      if (v === vis) return;
      vis = v; sec.classList.toggle('is-vis', v);
      if (v) { TL.forEach(t => { if (t.paused() && t.progress() > 0 && t.progress() < 1) t.resume(); }); kick(); }
      else TL.forEach(t => { if (t.isActive()) t.pause(); });
    }), { threshold: 0 }).observe(route);
    // Selbst-Impuls: sobald die erste Szene sichtbar ist, fliegt die Drohne zur ersten Station
    new IntersectionObserver((es, io) => es.forEach(e => {
      if (e.intersectionRatio >= .3 && F.length) { floor = F[0]; io.disconnect(); kick(); }
    }), { threshold: [.3] }).observe(vigs[0]);
  } else { near = vis = true; sec.classList.add('is-vis'); floor = 1; }
})();
