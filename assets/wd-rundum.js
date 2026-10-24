/* Falcon Eye – Rundum: „Sie machen Ihr Geschäft. Wir den Rest.“ (webdesign.html#rundum, Stil: assets/wd-rundum.css)
   Sieben Pakete: Website, Domain, E-Mail & Formulare, Hosting, Einkäufe, Wartung & Updates, Google/Bing & KI.
   Je Paket fliegt eine Drohne heran und dockt es an der Ladenfront an; synchron hakt sich der Chip ab.
   - Desktop (breit und hoch genug): Bühne steht (CSS sticky), jeder Scroll-Abschnitt liefert das nächste Paket.
   - Handy/Tablet: läuft beim Sichtkontakt von selbst ab, ohne Pins.
   - Antippen eines Chips: zeigt Details und spielt das Andocken dieses Pakets nochmal.
   - Ohne GSAP oder bei „Bewegung reduzieren“: fertiger Endzustand, Chips zeigen trotzdem die Details. */
(() => {
  const sec = document.querySelector('[data-wru]');
  if (!sec) return;
  const $ = (s, r = sec) => r.querySelector(s), $$ = (s, r = sec) => [...r.querySelectorAll(s)];
  const G = window.gsap;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const chips = $$('.wru-chip'), infos = $$('.wru-inf');
  const scene = $('.wru-scene'), world = $('.wru-world'), cam = $('.wru-cam'), track = $('.wru-track');
  const N = chips.length;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  let sel = 0, touched = false;

  const info = $('.wru-info');
  function select(k, user) {
    sel = k;
    if (info) info.setAttribute('aria-live', user ? 'polite' : 'off');
    chips.forEach((c, i) => c.setAttribute('aria-pressed', String(i === k)));
    infos.forEach((el, i) => el.classList.toggle('on', i === k));
    if (user && !touched) { touched = true; sec.classList.add('is-touched'); }
  }

  /* Bühne (640×600) passend in die Szene setzen */
  const fit = () => {
    const w = scene.clientWidth, h = scene.clientHeight;
    if (!w || !h) return;
    const s = Math.min(w / 640, h / 600);
    world.style.setProperty('--s', s.toFixed(4));
    world.style.left = ((w - 640 * s) / 2).toFixed(1) + 'px';
    world.style.top = ((h - 600 * s) / 2).toFixed(1) + 'px';
  };
  fit();
  if ('ResizeObserver' in window) new ResizeObserver(fit).observe(scene); else addEventListener('resize', fit, { passive: true });

  /* Ruhiger Modus: alles fertig, Chips schalten nur die Details um */
  if (!G || reduce) {
    chips.forEach((c, i) => { c.classList.add('ok'); c.addEventListener('click', () => select(i, true)); });
    return;
  }

  sec.classList.add('wru-js', 'wait-hint');
  const NS = 'http://www.w3.org/2000/svg';
  const fly = $('.wru-fly'), back = $('.wru-back');
  const hudN = $('[data-wru-n]'), hudSt = $('[data-wru-st]'), hudTc = $('[data-wru-tc]'), rail = $$('.wru-rail i');
  const dsIn = $('.wru-ds-in');

  /* ---------- Drohnen und Kisten bauen ---------- */
  const rotor = (x, y, rx) => `<g transform="translate(${x} ${y})"><ellipse rx="${rx}" ry="${(rx * .21).toFixed(1)}" fill="rgba(230,236,236,.2)"/><rect class="wru-blade" x="${-rx + 1}" y="-1" width="${2 * rx - 2}" height="2" rx="1" fill="rgba(230,236,236,.78)"/><circle r="3" fill="#0d1115"/></g>`;
  const DRONE = `${rotor(-24, -11, 16)}${rotor(24, -11, 16)}<path d="M-24 -11 0 0 24 -11M-28 8 0 0 28 8" stroke="#2b3540" stroke-width="5" stroke-linecap="round" fill="none"/>`
    + '<rect x="-16" y="-9" width="32" height="17" rx="6.5" fill="#141a20" stroke="#3a4552" stroke-width="1.2"/><rect x="-11" y="-9" width="22" height="4.5" rx="2.2" fill="#ffd000"/>'
    + '<rect x="-6.5" y="1" width="13" height="10" rx="3" fill="#0b0e12"/><circle cy="6" r="3.2" fill="#1d2f44"/><circle cx="1" cy="5" r="1" fill="#9cc3ff"/>'
    + '<circle class="wru-dled" cx="-13" cy="-1" r="1.6" fill="#ff3b30"/><circle class="wru-dled" cx="13" cy="-1" r="1.6" fill="#3ddc84"/>'
    + `${rotor(-28, 8, 19)}${rotor(28, 8, 19)}`;
  const ICON = chips.map(c => { const s = $('.wru-ic svg', c); return s ? s.innerHTML : ''; });
  const el = (cls, html) => { const g = document.createElementNS(NS, 'g'); g.setAttribute('class', cls); g.innerHTML = html; fly.appendChild(g); return g; };
  const crates = ICON.map(ic => el('wru-cr', '<path d="M-9 -27-12 -15M9 -27 12 -15" stroke="#9aa4ac" stroke-width="1.3" fill="none"/><rect x="-19" y="-15" width="38" height="30" rx="5" fill="#ffd000"/><rect x="-19" y="-15" width="38" height="8" rx="4" fill="#ffe25a"/><rect x="-19" y="9" width="38" height="6" rx="3" fill="#dcb300"/>'
    + `<g transform="translate(-10.5 -9.5) scale(.875)" fill="none" stroke="#1a1500" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${ic}</g>`));
  const drones = ICON.map(() => el('wru-dr', DRONE));
  const ringEl = el('wru-rg', '<circle class="wru-ring" r="10"/><circle class="wru-ring" r="10" style="stroke-width:1.5"/>');
  G.set([...drones, ...crates], { autoAlpha: 0, x: -300, y: -300, transformOrigin: '50% 50%' });
  G.set(ringEl, { autoAlpha: 0, x: -300, y: -300 });

  /* ---------- Pakete ---------- */
  const P = [
    { st: 'Website online', dock: [320, 126], from: [-130, 40], via: [80, -40], out: [780, -70], ov: [520, 20] },
    { st: 'Domain: ihre-firma.de', dock: [110, 311], from: [-130, 250], via: [-20, 160], out: [-130, 40], ov: [60, 180] },
    { st: 'Postfach und Formulare bereit', dock: [487, 402], from: [780, 330], via: [660, 250], out: [780, 180], ov: [620, 300] },
    { st: 'Server verbunden', dock: [556, 102], from: [780, -70], via: [730, 30], out: [780, 260], ov: [660, 150] },
    { st: 'Alles besorgt', dock: [236, 446], from: [-130, 430], via: [40, 330], out: [-130, 250], ov: [130, 300] },
    { st: 'Update meist in 10 Min. live', dock: [320, 126], from: [780, 150], via: [560, 10], out: [-130, 80], ov: [170, 30] },
    { st: 'Auffindbar: Google, Bing, KI', dock: [58, 132], from: [-130, -70], via: [-30, 40], out: [330, -110], ov: [140, 20] }
  ];
  const qb = (a, b, c, t) => (1 - t) * (1 - t) * a + 2 * (1 - t) * t * b + t * t * c;
  const qd = (a, b, c, t) => 2 * (1 - t) * (b - a) + 2 * t * (c - b);

  const pick = s => $(s);
  const E = {
    mast: pick('.wru-mast'), scr: pick('.wru-scr'), parts: $$('.wru-bar,.wru-pg-nav,.wru-pg-hero,.wru-pg-h,.wru-pg-l,.wru-pg-btn,.wru-pg-cards'),
    pole: pick('.wru-pole'), dsign: pick('.wru-dsign'), dtext: pick('.wru-dsign span'),
    mbox: pick('.wru-mbox'), flag: pick('.wru-flag'), envs: $$('.wru-env'), mbadge: pick('.wru-mbadge'),
    cloud: pick('.wru-cloud'), cable: pick('.wru-cable'), data: pick('.wru-data'), t247: pick('.wru-247'),
    boxes: $$('.wru-bx1,.wru-bx2,.wru-bx3'), bxok: pick('.wru-bxok'),
    vm: pick('.wru-vm'), wr: pick('.wru-wr'), wrIc: pick('.wru-wr-ic'), wrRing: pick('.wru-wr-ring'), upd: pick('.wru-upd'), toast: pick('.wru-toast'),
    beacon: pick('.wru-beacon'), beam: pick('.wru-beam'), spot: pick('.wru-spot'), ret: pick('.wru-ret'), pin: pick('.wru-pin')
  };
  const cableLen = E.cable.getTotalLength ? Math.ceil(E.cable.getTotalLength()) : 70;

  const REVEAL = [
    (tl, at) => tl
      .fromTo(E.mast, { scaleY: 0, transformOrigin: '50% 100%' }, { scaleY: 1, duration: .3, ease: 'power3.out' }, at)
      .fromTo(E.scr, { rotationX: -96, autoAlpha: 0 }, { rotationX: 0, autoAlpha: 1, duration: .85, ease: 'back.out(1.5)' }, at + .1)
      .fromTo(E.parts, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: .4, stagger: .055, ease: 'power3.out' }, at + .45),
    (tl, at) => tl
      .fromTo(E.pole, { scaleY: 0, transformOrigin: '50% 100%' }, { scaleY: 1, duration: .35, ease: 'power3.out' }, at)
      .fromTo(E.dsign, { scaleX: 0, rotation: -10, autoAlpha: 0 }, { scaleX: 1, rotation: 0, autoAlpha: 1, duration: .6, ease: 'back.out(1.8)' }, at + .18)
      .fromTo(E.dtext, { clipPath: 'inset(0% 100% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: .65, ease: 'steps(13)' }, at + .45),
    (tl, at) => {
      tl.call(() => { E.mbadge.textContent = '1'; }, null, at)
        .fromTo(E.mbox, { scaleY: 0, transformOrigin: '50% 100%' }, { scaleY: 1, duration: .45, ease: 'back.out(1.6)' }, at)
        .fromTo(E.flag, { rotation: 90, svgOrigin: '512.5 411' }, { rotation: 0, svgOrigin: '512.5 411', duration: .4, ease: 'back.out(2.2)' }, at + .5)
        .fromTo(E.mbadge, { scale: 0, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: .3, ease: 'back.out(3)' }, at + .78);
      E.envs.forEach((e, i) => {
        const t0 = at + .3 + i * .22;
        tl.fromTo(e, { x: 190, y: -90 - i * 16, rotation: -28, scale: 1, autoAlpha: 0 }, { x: 0, y: 0, rotation: 0, duration: .45, ease: 'power2.out' }, t0)
          .set(e, { autoAlpha: 1 }, t0)
          .to(e, { scaleY: .12, scaleX: .85, y: 7, autoAlpha: 0, duration: .16, ease: 'power2.in' }, t0 + .45)
          .call(() => { E.mbadge.textContent = String(i + 1); }, null, t0 + .5);
      });
      return tl;
    },
    (tl, at) => tl
      .fromTo(E.cloud, { scale: .5, autoAlpha: 0, transformOrigin: '50% 50%' }, { scale: 1, autoAlpha: 1, duration: .55, ease: 'back.out(1.7)' }, at)
      .fromTo(E.t247, { scale: 0, transformOrigin: '50% 50%' }, { scale: 1, duration: .45, ease: 'back.out(3)' }, at + .45)
      .fromTo(E.cable, { strokeDasharray: cableLen, strokeDashoffset: cableLen }, { strokeDashoffset: 0, duration: .5, ease: 'power2.inOut' }, at + .3)
      .call(() => ring(444, 126, .55), null, at + .8)
      .fromTo(E.data, { autoAlpha: 0 }, { autoAlpha: 1, duration: .3 }, at + .8),
    (tl, at) => tl
      .fromTo(E.boxes, { y: -70, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .5, ease: 'bounce.out', stagger: .16 }, at - .05)
      .fromTo(E.bxok, { scale: 0, autoAlpha: 0, transformOrigin: '50% 50%' }, { scale: 1, autoAlpha: 1, duration: .35, ease: 'back.out(3)' }, at + .75),
    (tl, at) => tl
      .fromTo(E.vm, { scale: 0, autoAlpha: 0, x: 0, y: 0 }, { scale: 1, autoAlpha: 1, duration: .4, ease: 'back.out(2)' }, .05)
      .to(E.vm, { x: 96, y: -168, scale: .2, autoAlpha: 0, duration: .45, ease: 'power2.in' }, .95)
      .fromTo(E.wr, { scale: .3, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: .35, ease: 'back.out(2.4)' }, at)
      .fromTo(E.wrIc, { rotation: 0 }, { rotation: 360, duration: .95, ease: 'power1.inOut' }, at + .12)
      .fromTo(E.wrRing, { strokeDashoffset: 100 }, { strokeDashoffset: 0, duration: .95, ease: 'power1.inOut' }, at + .12)
      .to(E.wr, { scale: .6, autoAlpha: 0, duration: .25, ease: 'power2.in' }, at + 1.12)
      .fromTo(E.upd, { scale: 0, rotation: -14, autoAlpha: 0 }, { scale: 1, rotation: 0, autoAlpha: 1, duration: .45, ease: 'back.out(3)' }, at + 1.15)
      .fromTo(E.toast, { y: 12, scale: .9, autoAlpha: 0 }, { y: 0, scale: 1, autoAlpha: 1, duration: .4, ease: 'back.out(2)' }, at + 1.2)
      .to(E.toast, { y: -8, autoAlpha: 0, duration: .35, ease: 'power2.in' }, at + 3.4),
    (tl, at) => tl
      .fromTo(E.beacon, { scale: 0, autoAlpha: 0, transformOrigin: '50% 50%' }, { scale: 1, autoAlpha: 1, duration: .35, ease: 'back.out(2.5)' }, at)
      .fromTo(E.beam, { rotation: -34, svgOrigin: '58 132', autoAlpha: 0 }, { rotation: 0, svgOrigin: '58 132', autoAlpha: 1, duration: .85, ease: 'power3.out' }, at + .18)
      .fromTo(E.spot, { scale: .3, autoAlpha: 0, transformOrigin: '50% 50%' }, { scale: 1, autoAlpha: 1, duration: .5 }, at + .7)
      .fromTo(E.ret, { scale: 1.7, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: .45, ease: 'power3.out' }, at + .78)
      .fromTo(E.pin, { y: -130, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .65, ease: 'bounce.out' }, at + .95)
  ];

  function ring(x, y, sc) {
    const c = ringEl.children, f = sc || 1;
    G.killTweensOf([...c]);
    G.set(ringEl, { x, y, autoAlpha: 1 });
    G.fromTo(c[0], { attr: { r: 8 * f }, opacity: 1 }, { attr: { r: 46 * f }, opacity: 0, duration: .6, ease: 'power2.out' });
    G.fromTo(c[1], { attr: { r: 4 * f }, opacity: .8 }, { attr: { r: 30 * f }, opacity: 0, duration: .7, delay: .08, ease: 'power2.out' });
  }

  function buildDock(k) {
    const p = P[k], dr = drones[k], cr = crates[k];
    const [dx, dy] = p.dock, hx = dx, hy = dy - 40;
    const o = { t: 0 }, o2 = { t: 0 };
    const tl = G.timeline({ paused: true });
    tl.set(cr, { scale: 1, autoAlpha: 1 }, 0)
      .set(dr, { autoAlpha: 1 }, 0)
      .call(() => dr.classList.add('fly'), null, 0)
      .fromTo(o, { t: 0 }, {
        t: 1, duration: .95, ease: 'power2.inOut', immediateRender: false, onUpdate() {
          const t = o.t, x = qb(p.from[0], p.via[0], hx, t), y = qb(p.from[1], p.via[1], hy, t);
          const r = clamp(qd(p.from[0], p.via[0], hx, t) * .028, -18, 18) * (1 - t * .7);
          G.set(dr, { x, y, rotation: r });
          G.set(cr, { x, y: y + 40, rotation: r * .4 });
        }
      }, 0)
      .to(dr, { y: hy + 6, rotation: 0, duration: .18, ease: 'sine.inOut' }, .95)
      .to(cr, { y: dy + 6, rotation: 0, duration: .18, ease: 'sine.inOut' }, .95)
      .call(() => ring(dx, dy + 4, 1), null, 1.13)
      .to(cr, { scale: 1.6, autoAlpha: 0, duration: .32, ease: 'power2.out', transformOrigin: '50% 50%' }, 1.13)
      .fromTo(o2, { t: 0 }, {
        t: 1, duration: .8, ease: 'power2.in', immediateRender: false, onUpdate() {
          const t = o2.t, x = qb(hx, p.ov[0], p.out[0], t), y = qb(hy + 6, p.ov[1], p.out[1], t);
          G.set(dr, { x, y, rotation: clamp(qd(hx, p.ov[0], p.out[0], t) * .028, -22, 22) * Math.min(1, t * 3) });
        }
      }, 1.2)
      .set(dr, { autoAlpha: 0 }, 2.02)
      .call(() => dr.classList.remove('fly'), null, 2.03)
      .call(() => docked(k), null, 1.22);
    REVEAL[k](tl, 1.13);
    return tl;
  }
  const tls = P.map((_, k) => buildDock(k));
  G.set(dsIn, { rotationY: 0 });

  /* ---------- Ablauf ---------- */
  const state = P.map(() => 0); // 0 = offen, 1 = unterwegs/angedockt
  const ok = P.map(() => false);
  let started = false, opened = false, target = 0, lastStart = -1e4, pumpT = 0, vis = false, done = false, pin = false;
  const GAP = () => (pin ? 520 : 1500);

  function setHud() {
    const n = ok.filter(Boolean).length;
    hudN.textContent = String(n);
    rail.forEach((r, i) => r.classList.toggle('on', i < n));
  }
  function docked(k) {
    const first = !ok.some(Boolean);
    if (!ok[k]) {
      ok[k] = true;
      const c = chips[k]; c.classList.add('ok'); c.classList.remove('pop'); void c.offsetWidth; c.classList.add('pop');
    }
    hudSt.textContent = P[k].st;
    if (!touched) select(k, false);
    if (first) sec.classList.remove('wait-hint');
    setHud();
    if (!done && ok.every(Boolean)) { done = true; setTimeout(finish, 900); }
  }
  function finish() {
    sec.classList.add('is-done');
    hudSt.textContent = 'Alles erledigt';
    G.fromTo($('.wru-donebadge'), { scale: .6, y: 24, autoAlpha: 0 }, { scale: 1, y: 0, autoAlpha: 1, duration: .6, ease: 'back.out(2)' });
  }
  function play(k) {
    state[k] = 1; lastStart = performance.now();
    tls[k].restart();
  }
  function pump() {
    clearTimeout(pumpT);
    if (!vis || !started) return;
    const n = state.filter(Boolean).length;
    if (n >= target) return;
    const wait = GAP() - (performance.now() - lastStart);
    if (wait > 0) { pumpT = setTimeout(pump, wait + 10); return; }
    const k = state.indexOf(0);
    if (k < 0) return;
    play(k);
    pumpT = setTimeout(pump, GAP() + 10);
  }
  function openShop() {
    if (opened) return; opened = true;
    hudSt.textContent = 'Laden öffnet';
    G.to(dsIn, { rotationY: 180, duration: .9, ease: 'back.out(1.6)', onComplete: () => sec.classList.add('is-open') });
  }
  function start() {
    if (started) return; started = true;
    openShop();
    setTimeout(() => { target = Math.max(target, pin ? 1 + passed() : N); lastStart = -1e4; pump(); }, 650);
  }

  /* Antippen: Details zeigen und das Andocken nochmal spielen */
  chips.forEach((c, k) => c.addEventListener('click', () => {
    select(k, true);
    if (!started) { started = true; openShop(); }
    const needsSite = (k === 3 || k === 5) && !state[0];
    if (needsSite) { play(0); setTimeout(() => play(k), 900); return; }
    play(k);
  }));

  /* Sichtbarkeit: nur im Bild läuft etwas */
  let tcT = 0, secs = 0;
  const tc = () => { const s = secs, mm = String(Math.floor(s / 60) % 60).padStart(2, '0'), ss = String(s % 60).padStart(2, '0'); hudTc.textContent = `00:${mm}:${ss}`; };
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(es => es.forEach(e => {
      const v = e.isIntersecting && e.intersectionRatio > 0;
      if (v !== vis) {
        vis = v; sec.classList.toggle('is-vis', v);
        clearInterval(tcT);
        if (v) { tcT = setInterval(() => { secs++; tc(); }, 1000); tls.forEach(t => { if (t.paused() && t.progress() > 0 && t.progress() < 1) t.resume(); }); pump(); }
        else tls.forEach(t => { if (t.isActive()) t.pause(); });
      }
      if (e.intersectionRatio >= .45) start();
    }), { threshold: [0, .25, .45, .7] }).observe(scene);
  } else { vis = true; sec.classList.add('is-vis'); start(); }
  tc(); setHud(); hudSt.textContent = 'Bereit';

  /* ---------- Desktop: Scroll liefert die Pakete, Kamera fährt mit ---------- */
  const mqPin = matchMedia('(min-width: 1100px) and (min-height: 640px)');
  const TH = [.08, .21, .34, .47, .6, .73];
  let prog = 0, raf = 0, px = 0, py = 0, tx = 0, ty = 0, praf = 0;
  const passed = () => TH.filter(t => prog >= t).length;
  const applyCam = () => {
    G.set(cam, { scale: 1 + .045 * prog, y: -10 * prog });
    G.set(back, { x: -18 * prog - px * 10, y: -py * 6 });
    G.set(fly, { x: px * 3, y: py * 2 });
  };
  function updPin() {
    raf = 0;
    if (!pin) return;
    const r = track.getBoundingClientRect(), total = r.height - innerHeight;
    prog = total > 0 ? clamp(-r.top / total, 0, 1) : 0;
    applyCam();
    if (prog > .03) sec.classList.add('scrolled');
    if (started) { const want = 1 + passed(); if (want > target) { target = want; pump(); } }
  }
  const onScroll = () => { if (pin && vis && !raf) raf = requestAnimationFrame(updPin); };
  addEventListener('scroll', onScroll, { passive: true });
  const stage = $('.wru-stage'), copy = $('.wru-copy');
  let wasPin = null;
  function setMode() {
    pin = mqPin.matches;
    sec.classList.toggle('is-pin', pin);
    if (pin) { // passt die stehende Bühne nicht ins Fenster, lieber ohne Pin abspielen
      const cs = getComputedStyle(stage), avail = stage.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
      if (copy.offsetHeight > avail + 4) { pin = false; sec.classList.remove('is-pin'); }
    }
    fit();
    if (wasPin !== null && wasPin !== pin && window.ScrollTrigger) ScrollTrigger.refresh(); // Höhe der Seite hat sich geändert
    wasPin = pin;
    if (pin) updPin();
    else { prog = 0; applyCam(); if (started) { target = N; pump(); } }
  }
  if (mqPin.addEventListener) mqPin.addEventListener('change', setMode); else mqPin.addListener(setMode);
  setMode();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(setMode);
  let rsT = 0;
  addEventListener('resize', () => { clearTimeout(rsT); rsT = setTimeout(() => { if (mqPin.matches) setMode(); }, 200); }, { passive: true });

  /* Maus: leichte Tiefe (nur mit Maus) */
  if (fine) {
    const loop = () => {
      px += (tx - px) * .08; py += (ty - py) * .08; applyCam();
      praf = (Math.abs(tx - px) + Math.abs(ty - py) > .002) ? requestAnimationFrame(loop) : 0;
    };
    scene.addEventListener('pointermove', e => {
      const r = scene.getBoundingClientRect();
      tx = clamp((e.clientX - r.left) / r.width * 2 - 1, -1, 1); ty = clamp((e.clientY - r.top) / r.height * 2 - 1, -1, 1);
      if (!praf) praf = requestAnimationFrame(loop);
    });
    scene.addEventListener('pointerleave', () => { tx = 0; ty = 0; if (!praf) praf = requestAnimationFrame(loop); });
  }
})();
