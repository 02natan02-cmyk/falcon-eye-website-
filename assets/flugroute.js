/* Falcon Eye – Flugroute: die Referenzen auf webdesign.html als FPV-Flug.
   Die Daten kommen aus der HTML-Liste [data-flr-list] (ein <li class="wd-ref"> pro Projekt).
   Neues Projekt = ein neuer Eintrag in dieser Liste: data-kat (handwerk, kueche, auto, gesundheit, verein, eigen),
   optional data-reel (Video im Laptop) und data-thumb (Vorschaubild, sonst media/wd3/<name>_d.webp). */
(() => {
  const sec = document.querySelector('[data-flr]');
  if (!sec) return;
  const list = sec.querySelector('[data-flr-list]');
  const items = list ? [...list.querySelectorAll(':scope > .wd-ref')] : [];
  if (!items.length) return;

  const G = window.gsap;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const mqStory = matchMedia('(max-width: 640px)');
  const KAT = [['handwerk', 'Handwerk & Service'], ['kueche', 'Küche'], ['auto', 'Auto'], ['gesundheit', 'Gesundheit & Pflege'], ['verein', 'Vereine'], ['eigen', 'Eigene Projekte']];
  const AUTO_MS = 6000;
  const pad = n => String(n).padStart(2, '0');
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const decode = img => (img.decode ? img.decode().catch(() => { }) : Promise.resolve());

  /* ---------- Daten aus dem HTML ---------- */
  const data = items.map((li, i) => {
    const imgs = li.querySelectorAll('.wd-dev img');
    const d = imgs[0] ? imgs[0].getAttribute('src') : '';
    const m = imgs[1] ? imgs[1].getAttribute('src') : d;
    const bar = li.querySelector('.wd-bar em');
    if (!li.id) li.id = 'wp-' + (i + 1);
    return {
      li, i,
      name: (li.querySelector('h3') || {}).textContent.trim(),
      d, m,
      thumb: li.dataset.thumb || d.replace('/wd/', '/wd3/'),
      url: bar ? bar.textContent.trim() : '',
      go: li.querySelector('.wd-go'),
      kat: (li.dataset.kat || '').split(/\s+/).filter(Boolean),
      reel: li.dataset.reel || ''
    };
  });
  const N = data.length;

  /* ---------- Gerüst bauen ---------- */
  const svgHand = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 11.2V4.5a1.5 1.5 0 0 1 3 0V10h.5V8.6a1.5 1.5 0 0 1 3 0V10h.4v-.6a1.5 1.5 0 0 1 3 0v5.3c0 3.4-2.4 6.3-5.9 6.3h-.6c-2 0-3.4-.9-4.6-2.4L4.6 15a1.4 1.4 0 0 1 2.1-1.9L9 15z"/></svg>';
  const stage = sec.querySelector('[data-flr-stage]');
  const rigHTML = '<div class="flr-steer"><div class="flr-lap"><div class="flr-lid"><div class="flr-scr"><div class="flr-url"><i></i><i></i><i></i><em></em></div><div class="flr-view"><img alt="" decoding="async"><video muted playsinline loop preload="none" disablepictureinpicture></video></div><span class="flr-live"><i></i>Live-Mitschnitt</span><span class="flr-glare"></span></div></div><div class="flr-base"></div></div><div class="flr-phone"><div class="flr-pin"><div class="flr-pbody"><div class="flr-pscr"><img alt="" decoding="async"></div></div></div></div></div>';
  const comp = ['N', 'NO', 'O', 'SO', 'S', 'SW', 'W', 'NW'];
  let trk = ''; for (let k = 0; k < 3; k++) comp.forEach(c => { trk += `<span class="${c.length === 1 ? 'k' : ''}">${c}</span>`; });
  stage.innerHTML =
    '<div class="flr-world"><div class="flr-sky"></div><div class="flr-floor"><i></i></div><div class="flr-horizon"></div><div class="flr-streaks"></div></div>' +
    `<div class="flr-rigs"><div class="flr-rig">${rigHTML}</div><div class="flr-rig">${rigHTML}</div></div>` +
    '<div class="flr-vig"></div>' +
    '<div class="flr-hud"><i class="c tl"></i><i class="c tr"></i><i class="c bl"></i><i class="c br"></i>' +
    '<div class="flr-top"><span class="flr-grp"><span class="flr-rec"><i></i>REC <b data-tc>00:00</b></span><span class="flr-tm">ALT <b data-alt>042</b><small>M</small></span><span class="flr-tm">SPD <b data-spd>32</b><small>KM/H</small></span></span><span class="flr-wp">WP <span class="flr-wpn"><span data-wp>01</span></span>/ <b data-wpt>' + pad(N) + '</b></span></div>' +
    `<div class="flr-comp"><div class="trk">${trk}</div></div><div class="flr-cross"></div>` +
    '<div class="flr-bot"><span class="nm" data-nm></span><span class="lipo">LIPO 6S <b data-volt>25.2</b>V</span></div></div>' +
    '<div class="flr-story">' + data.map(() => '<i></i>').join('') + '</div>' +
    '<div class="flr-tap l"></div><div class="flr-tap r"></div>' +
    `<div class="flr-swipe">${svgHand}Wischen zum Weiterfliegen</div>`;

  const $ = s => stage.querySelector(s);
  const rigs = [...stage.querySelectorAll('.flr-rig')].map(el => ({
    el,
    shot: el.querySelector('.flr-view img'),
    view: el.querySelector('.flr-view'),
    vid: el.querySelector('video'),
    url: el.querySelector('.flr-url em'),
    pimg: el.querySelector('.flr-pscr img'),
    vT: 0, idx: -1
  }));
  const rigsBox = $('.flr-rigs'), horizon = $('.flr-horizon'), streaks = $('.flr-streaks'), floorI = $('.flr-floor i');
  const elTc = $('[data-tc]'), elWp = $('[data-wp]'), elAlt = $('[data-alt]'), elSpd = $('[data-spd]'), elNm = $('[data-nm]'), elVolt = $('[data-volt]'), elTrk = $('.flr-comp .trk');
  const bars = [...stage.querySelectorAll('.flr-story i')];
  const swipeHint = $('.flr-swipe');

  // Flugmodus (nur Branchen mit mindestens einem Projekt)
  const modesBox = sec.querySelector('[data-flr-modes]');
  const kats = KAT.filter(([k]) => data.some(d => d.kat.includes(k)));
  modesBox.innerHTML = `<button type="button" class="flr-mode" data-mode="alle" aria-pressed="true"><i class="fm"></i>Alle <small>${N}</small></button>` +
    kats.map(([k, t]) => `<button type="button" class="flr-mode" data-mode="${k}" aria-pressed="false"><i class="fm"></i>${t} <small>${data.filter(d => d.kat.includes(k)).length}</small></button>`).join('');
  modesBox.hidden = false;

  // Steuerung
  const ctl = sec.querySelector('[data-flr-ctl]');
  ctl.innerHTML =
    '<button type="button" class="flr-nav" data-prev aria-label="Voriges Projekt"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button>' +
    '<div class="flr-stick" tabindex="0" role="group" aria-label="Fernsteuerung: Pfeiltaste links oder rechts fliegt zum vorigen oder nächsten Projekt"><i class="rg"></i><i class="ax"></i><i class="ar l"></i><i class="ar r"></i><b class="kn"></b></div>' +
    '<button type="button" class="flr-nav" data-next aria-label="Nächstes Projekt"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button>' +
    '<div class="flr-col"><p class="flr-stl" aria-hidden="true"><b>Fernsteuerung</b>Stick ziehen · Pfeiltasten</p>' +
    `<button type="button" class="flr-ap" data-ap aria-pressed="${reduce ? 'false' : 'true'}"><i></i>Autopilot <span data-ap-t>${reduce ? 'aus' : 'an'}</span></button>` +
    `<div class="flr-hint" aria-hidden="true">${svgHand}Probieren Sie’s: Stick nach rechts</div></div>`;
  ctl.hidden = false;
  const stick = ctl.querySelector('.flr-stick'), knob = stick.querySelector('.kn'), hint = ctl.querySelector('.flr-hint'), apBtn = ctl.querySelector('[data-ap]'), apT = ctl.querySelector('[data-ap-t]');
  // Der Pfeil des Hinweises zeigt auf den Stick: daneben nach links, unter dem Stick (umgebrochene Leiste) nach oben
  const aimHint = () => {
    if (!hint || hint.classList.contains('gone')) return;
    const st = stick.getBoundingClientRect(), h = hint.getBoundingClientRect();
    if (!st.width || !h.width) return;
    const under = h.top > st.bottom - 4;
    ctl.classList.toggle('flr-under', under);
    if (under) hint.style.setProperty('--ax', Math.round(Math.max(18, Math.min(h.width - 18, st.left + st.width / 2 - h.left))) + 'px');
  };
  aimHint(); addEventListener('resize', aimHint); addEventListener('load', aimHint);

  // Filmstreifen
  const stripBox = sec.querySelector('[data-flr-strip]');
  stripBox.innerHTML = '<div class="flr-film"><div class="flr-reel" role="group" aria-label="Alle Projekte">' +
    data.map((d, i) => `<button type="button" class="flr-frame" data-i="${i}"><span class="flr-ph"><img src="${d.thumb}" alt="" loading="lazy" decoding="async" width="512" height="320"><i class="flr-pb"></i></span><span class="flr-lbl"><b>WP ${pad(i + 1)}</b><span>${d.name}</span></span></button>`).join('') +
    '</div></div><p class="flr-drag" aria-hidden="true"><i></i>Ziehen oder antippen<i></i></p>';
  stripBox.hidden = false;
  const reel = stripBox.querySelector('.flr-reel'), frames = [...reel.querySelectorAll('.flr-frame')], dragHint = stripBox.querySelector('.flr-drag');
  frames.forEach((f, i) => { const im = f.querySelector('img'); im.addEventListener('error', () => { if (data[i].d && im.getAttribute('src') !== data[i].d) im.src = data[i].d; }, { once: true }); });

  const live = sec.querySelector('.flr-sr');
  sec.classList.add('flr-on');

  /* ---------- Zustand ---------- */
  let cur = 0, front = 0, mode = 'alle', order = data.map(d => d.i), busy = false, queued = null, tl = null;
  let ap = !reduce, p = 0, hover = false, touch = false, inView = false, stickUsed = false, swiped = false;
  let volt = 25.2, alt = 42, spd = 32, heading = 0, tc = 0;

  function fill(r, d) {
    if (r.vid.dataset.src && r.vid.dataset.src !== d.reel) { try { r.vid.pause(); r.vid.removeAttribute('src'); r.vid.load(); } catch (e) { } delete r.vid.dataset.src; }
    r.idx = d.i;
    r.shot.src = d.d;
    r.pimg.src = d.m;
    r.url.textContent = d.url;
    clearTimeout(r.vT);
    r.view.classList.remove('vid');
    try { r.vid.pause(); } catch (e) { }
  }
  function startReel(r) {
    const d = data[r.idx];
    clearTimeout(r.vT);
    if (!d || !d.reel || reduce || mqStory.matches) return;
    r.vT = setTimeout(() => {
      if (!inView || rigs[front] !== r) return;
      if (r.vid.dataset.src !== d.reel) { r.vid.dataset.src = d.reel; r.vid.src = d.reel; }
      const pr = r.vid.play();
      const show = () => { if (rigs[front] === r) r.view.classList.add('vid'); };
      if (pr && pr.then) pr.then(show).catch(() => { }); else show();
    }, 1700);
  }
  function stopReel(r) { clearTimeout(r.vT); r.view.classList.remove('vid'); try { r.vid.pause(); } catch (e) { } }

  function hud(j, dir) {
    const s = dir >= 0 ? 1 : -1;
    elNm.textContent = data[j].name;
    // Wegpunkt-Zähler rollt
    if (G && !reduce) {
      G.timeline().to(elWp, { yPercent: -100 * s, opacity: 0, duration: .16, ease: 'power2.in' })
        .add(() => { elWp.textContent = pad(j + 1); })
        .fromTo(elWp, { yPercent: 100 * s, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .26, ease: 'power3.out' });
    } else elWp.textContent = pad(j + 1);
    // Telemetrie
    const nAlt = 24 + ((j * 37) % 96), nHead = (j * 135) % 360;
    volt = volt <= 22.3 ? 25.2 : Math.round((volt - .1) * 10) / 10;
    elVolt.textContent = volt.toFixed(1);
    if (G && !reduce) {
      const o = { a: alt, s: spd };
      G.timeline().to(o, { a: nAlt, s: 82 + (j % 4) * 6, duration: .45, ease: 'power2.out', onUpdate: () => { elAlt.textContent = String(Math.round(o.a)).padStart(3, '0'); elSpd.textContent = pad(Math.round(o.s)); } })
        .to(o, { s: 26 + (j * 7) % 18, duration: .8, ease: 'power2.inOut', onUpdate: () => { elSpd.textContent = pad(Math.round(o.s)); } });
      let dh = nHead - heading; if (dh > 180) dh -= 360; if (dh < -180) dh += 360;
      const h = { v: heading };
      G.to(h, { v: heading + dh, duration: .9, ease: 'power3.inOut', onUpdate: () => setComp(h.v) });
      heading = ((heading + dh) % 360 + 360) % 360;
      spd = 26 + (j * 7) % 18;
    } else { elAlt.textContent = String(nAlt).padStart(3, '0'); elSpd.textContent = pad(30); setComp(nHead); heading = nHead; }
    alt = nAlt;
  }
  function setComp(h) {
    const hh = ((h % 360) + 360) % 360;
    elTrk.style.transform = `translateX(${-((8 + hh / 45) * 36 + 18)}px)`;
  }

  function paintNav() {
    frames.forEach((f, i) => {
      f.classList.toggle('off', !order.includes(i));
      if (i === cur) f.setAttribute('aria-current', 'true'); else f.removeAttribute('aria-current');
      if (i !== cur) f.style.setProperty('--p', 0);
    });
    const pos = order.indexOf(cur);
    bars.forEach((b, i) => {
      const k = order.indexOf(i);
      b.classList.toggle('off', k < 0);
      b.classList.toggle('done', k >= 0 && k < pos);
      if (i !== cur) b.style.setProperty('--p', 0);
    });
  }
  function paintP() {
    const f = frames[cur], b = bars[cur];
    if (f) f.style.setProperty('--p', p.toFixed(4));
    if (b) b.style.setProperty('--p', p.toFixed(4));
  }
  function centerFrame(smooth) {
    const f = frames[cur]; if (!f) return;
    const left = f.offsetLeft - (reel.clientWidth - f.offsetWidth) / 2;
    reel.scrollTo({ left: Math.max(0, left), behavior: smooth && !reduce ? 'smooth' : 'auto' });
  }
  function swapText(oldLi, newLi, s) {
    const nk = [...newLi.querySelectorAll('.wd-txt > *')];
    if (oldLi && oldLi !== newLi) {
      const ok = [...oldLi.querySelectorAll('.wd-txt > *')];
      if (G && !reduce) {
        G.to(ok, { autoAlpha: 0, x: -18 * s, duration: .2, stagger: .015, ease: 'power2.in', onComplete: () => { oldLi.classList.remove('on'); G.set(ok, { clearProps: 'opacity,visibility,transform' }); } });
      } else oldLi.classList.remove('on');
    }
    newLi.classList.add('on');
    if (G && !reduce) G.fromTo(nk, { autoAlpha: 0, x: 26 * s, filter: 'blur(6px)' }, { autoAlpha: 1, x: 0, filter: 'blur(0px)', duration: .55, stagger: .055, delay: .22, ease: 'power3.out', clearProps: 'filter' });
  }
  function boost() {
    const a = floorI.getAnimations ? floorI.getAnimations()[0] : null;
    if (!a) return;
    try { a.updatePlaybackRate ? a.updatePlaybackRate(5) : (a.playbackRate = 5); setTimeout(() => { try { a.updatePlaybackRate ? a.updatePlaybackRate(1) : (a.playbackRate = 1); } catch (e) { } }, 650); } catch (e) { }
  }

  /* ---------- Wechsel ---------- */
  function go(j, dir, how) {
    j = ((j % N) + N) % N;
    if (how === 'manual') usedStick(); // jede eigene Navigation (Pfeile, Stick, Filmstreifen, Wischen, Filter) blendet den Impuls-Hinweis aus
    if (j === cur && how !== 'force') return;
    if (busy) { queued = [j, dir, how]; if (tl) tl.timeScale(2.6); return; }
    busy = true;
    const s = dir >= 0 ? 1 : -1;
    const from = rigs[front], to = rigs[1 - front];
    const oldLi = data[cur].li;
    fill(to, data[j]);
    const prevCur = cur;
    cur = j; p = 0;
    paintNav(); centerFrame(true);
    swapText(oldLi, data[j].li, s);
    hud(j, s);
    if (how === 'manual' && live) live.textContent = `Wegpunkt ${order.indexOf(j) + 1 || j + 1} von ${order.length}: ${data[j].name}`;
    const finish = () => {
      stopReel(from);
      from.el.classList.remove('on'); to.el.classList.add('on');
      front = 1 - front; busy = false; tl = null;
      startReel(to);
      preload(nextIdx(1)); preload(nextIdx(-1));
      if (queued) { const q = queued; queued = null; go(q[0], q[1], q[2]); }
    };
    Promise.race([Promise.all([decode(to.shot), decode(to.pimg)]), wait(420)]).then(() => {
      if (!G) { from.el.style.opacity = 0; to.el.style.opacity = 1; finish(); return; }
      G.killTweensOf([from.el, to.el]);
      if (reduce || prevCur === j) {
        tl = G.timeline({ onComplete: finish })
          .to(from.el, { autoAlpha: 0, duration: .3 }, 0)
          .fromTo(to.el, { autoAlpha: 0, xPercent: 0, rotationY: 0, rotationZ: 0, z: 0 }, { autoAlpha: 1, duration: .35 }, .05);
        return;
      }
      const blur = !mqStory.matches;
      const outV = { xPercent: -62 * s, rotationY: -34 * s, rotationZ: -16 * s, z: -260, autoAlpha: 0, duration: .62, ease: 'power2.in' };
      const inF = { xPercent: 72 * s, rotationY: 30 * s, rotationZ: 13 * s, z: -340, autoAlpha: 0 };
      const inT = { xPercent: 0, rotationY: 0, rotationZ: 0, z: 0, autoAlpha: 1, duration: .8, ease: 'back.out(1.35)' };
      if (blur) { outV.filter = 'blur(9px)'; inF.filter = 'blur(10px)'; inT.filter = 'blur(0px)'; }
      tl = G.timeline({ onComplete: () => { if (blur) G.set([from.el, to.el], { clearProps: 'filter' }); finish(); } })
        .to(from.el, outV, 0)
        .fromTo(to.el, inF, inT, .2)
        .to(horizon, { rotation: -9 * s, duration: .36, ease: 'power2.out' }, 0)
        .to(horizon, { rotation: 0, duration: .7, ease: 'power3.out' }, .36)
        .fromTo(streaks, { opacity: 0, scale: .92 }, { opacity: 1, scale: 1.1, duration: .34, ease: 'power2.out' }, .04)
        .to(streaks, { opacity: 0, duration: .55, ease: 'power2.in' }, .42);
      boost();
    });
  }
  const nextIdx = d => {
    const pos = order.indexOf(cur);
    if (pos < 0) return order[0];
    return order[(pos + d + order.length) % order.length];
  };
  const next = how => go(nextIdx(1), 1, how || 'manual');
  const prev = how => go(nextIdx(-1), -1, how || 'manual');
  function preload(i) { const d = data[i]; if (!d) return; [d.d, d.m].forEach(u => { if (u) { const im = new Image(); im.decoding = 'async'; im.src = u; } }); }
  function goTo(i, how) { if (!order.includes(i)) setMode('alle'); const dir = i >= cur ? 1 : -1; go(i, dir, how || 'manual'); }

  function setMode(m) {
    mode = m;
    order = m === 'alle' ? data.map(d => d.i) : data.filter(d => d.kat.includes(m)).map(d => d.i);
    if (!order.length) order = data.map(d => d.i);
    modesBox.querySelectorAll('.flr-mode').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.mode === m)));
    p = 0;
    if (!order.includes(cur)) go(order[0], 1, 'manual'); else paintNav();
  }
  modesBox.addEventListener('click', e => { const b = e.target.closest('.flr-mode'); if (b) { setMode(b.dataset.mode); kick(); } });

  /* ---------- Autopilot ---------- */
  let raf = 0, last = 0;
  const running = () => ap && !hover && !touch && inView && !document.hidden && !busy;
  function loop(t) {
    raf = 0;
    const dt = last ? Math.min(120, t - last) : 0; last = t;
    if (running()) { p += dt / AUTO_MS; if (p >= 1) { p = 0; next('auto'); } paintP(); }
    if (ap && inView && !document.hidden) raf = requestAnimationFrame(loop); else last = 0;
  }
  const kick = () => { if (!raf && ap && inView && !document.hidden) { last = 0; raf = requestAnimationFrame(loop); } };
  function setAp(on) {
    ap = on; apBtn.setAttribute('aria-pressed', String(on)); apT.textContent = on ? 'an' : 'aus';
    if (!on) { p = 0; paintP(); } kick();
  }
  apBtn.addEventListener('click', () => setAp(!ap));
  document.addEventListener('visibilitychange', () => { if (document.hidden) { rigs.forEach(stopReel); } else { kick(); if (inView) startReel(rigs[front]); } });

  /* ---------- Sichtbarkeit, erster Anflug, Impulse ---------- */
  let entered = false, rec = 0;
  const cockpit = sec.querySelector('.flr-cockpit');
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([en]) => {
      inView = en.isIntersecting;
      sec.classList.toggle('flr-paused', !inView);
      if (inView) {
        kick(); startReel(rigs[front]);
        if (!rec) rec = setInterval(() => { tc++; elTc.textContent = pad(Math.floor(tc / 60) % 60) + ':' + pad(tc % 60); }, 1000);
        if (!entered) { entered = true; arrive(); }
      } else { rigs.forEach(stopReel); clearInterval(rec); rec = 0; }
    }, { threshold: .3 }).observe(stage);
  } else { inView = true; kick(); }

  function arrive() {
    const r = rigs[front];
    aimHint();
    if (G && !reduce) {
      G.fromTo(r.el, { z: -700, autoAlpha: 0, rotationY: -24, rotationZ: -8, xPercent: 18 }, { z: 0, autoAlpha: 1, rotationY: 0, rotationZ: 0, xPercent: 0, duration: 1.3, ease: 'power3.out' });
      G.fromTo(horizon, { rotation: 6 }, { rotation: 0, duration: 1.4, ease: 'power3.out' });
      boost();
      setTimeout(stickImpulse, 1500);
    }
    if (mqStory.matches) setTimeout(() => { if (!swiped) swipeHint.classList.remove('gone'); }, 900);
  }

  /* ---------- Stick (Fernsteuerung) ---------- */
  const R = 30;
  const kp = { x: 0, y: 0 };
  const steerTo = G ? {
    ry: G.quickTo(rigsBox, 'rotationY', { duration: .5, ease: 'power3.out' }),
    rx: G.quickTo(rigsBox, 'rotationX', { duration: .5, ease: 'power3.out' }),
    rz: G.quickTo(rigsBox, 'rotation', { duration: .5, ease: 'power3.out' })
  } : null;
  function steer(nx, ny) { if (!steerTo || reduce) return; steerTo.ry(nx * 13); steerTo.rx(-ny * 11); steerTo.rz(nx * 4); }
  function setKnob(x, y) { kp.x = x; kp.y = y; knob.style.transform = `translate(${x}px,${y}px)`; }
  let dragging = false, armed = true, cx = 0, cy = 0;
  function stickMove(e) {
    let dx = e.clientX - cx, dy = e.clientY - cy;
    const d = Math.hypot(dx, dy); if (d > R) { dx *= R / d; dy *= R / d; }
    setKnob(dx, dy); steer(dx / R, dy / R);
    const sx = dx / R;
    if (armed && Math.abs(sx) > .62) { armed = false; sx > 0 ? next() : prev(); }
    if (!armed && Math.abs(sx) < .3) armed = true;
  }
  function springBack() {
    steer(0, 0);
    if (G && !reduce) G.to(kp, { x: 0, y: 0, duration: .8, ease: 'elastic.out(1,.42)', onUpdate: () => setKnob(kp.x, kp.y) });
    else setKnob(0, 0);
  }
  function usedStick() { if (stickUsed) return; stickUsed = true; hint.classList.add('gone'); hint.parentNode.classList.add('hint-gone'); }
  stick.addEventListener('pointerdown', e => {
    e.preventDefault(); dragging = true; armed = true; usedStick();
    if (G) G.killTweensOf(kp);
    try { stick.setPointerCapture(e.pointerId); } catch (er) { }
    stick.classList.add('on');
    const r = stick.getBoundingClientRect(); cx = r.left + r.width / 2; cy = r.top + r.height / 2;
    touch = true; stickMove(e);
  });
  stick.addEventListener('pointermove', e => { if (dragging) stickMove(e); });
  const stickUp = () => { if (!dragging) return; dragging = false; touch = false; stick.classList.remove('on'); springBack(); p = 0; kick(); };
  stick.addEventListener('pointerup', stickUp); stick.addEventListener('pointercancel', stickUp); stick.addEventListener('lostpointercapture', stickUp);
  function nudge(dx, dy) {
    if (!G || reduce) return;
    G.killTweensOf(kp);
    G.timeline().to(kp, { x: dx, y: dy, duration: .16, ease: 'power2.out', onUpdate: () => { setKnob(kp.x, kp.y); steer(kp.x / R, kp.y / R); } })
      .to(kp, { x: 0, y: 0, duration: .7, ease: 'elastic.out(1,.42)', onUpdate: () => { setKnob(kp.x, kp.y); steer(kp.x / R, kp.y / R); } });
  }
  stick.addEventListener('keydown', e => {
    const k = e.key;
    if (k === 'ArrowRight') { e.preventDefault(); usedStick(); nudge(R, 0); next(); }
    else if (k === 'ArrowLeft') { e.preventDefault(); usedStick(); nudge(-R, 0); prev(); }
    else if (k === 'ArrowUp') { e.preventDefault(); usedStick(); nudge(0, -R); }
    else if (k === 'ArrowDown') { e.preventDefault(); usedStick(); nudge(0, R); }
  });
  function stickImpulse() {
    if (stickUsed || !G || reduce || mqStory.matches || !inView) return;
    G.killTweensOf(kp);
    G.timeline({ delay: .2 })
      .to(kp, { x: R * .58, y: -4, duration: .45, ease: 'power2.inOut', onUpdate: () => { setKnob(kp.x, kp.y); steer(kp.x / R, kp.y / R); } })
      .to(kp, { x: 0, y: 0, duration: .9, ease: 'elastic.out(1,.4)', onUpdate: () => { setKnob(kp.x, kp.y); steer(kp.x / R, kp.y / R); } })
      .to(kp, { x: R * .5, y: 0, duration: .4, ease: 'power2.inOut', onUpdate: () => { setKnob(kp.x, kp.y); steer(kp.x / R, kp.y / R); } }, '+=.5')
      .to(kp, { x: 0, y: 0, duration: .9, ease: 'elastic.out(1,.4)', onUpdate: () => { setKnob(kp.x, kp.y); steer(kp.x / R, kp.y / R); } });
  }
  ctl.querySelector('[data-next]').addEventListener('click', () => { next(); kick(); });
  ctl.querySelector('[data-prev]').addEventListener('click', () => { prev(); kick(); });

  /* ---------- Bühne: ziehen, wischen, tippen, schweben ---------- */
  let sd = null;
  stage.addEventListener('pointerdown', e => {
    if (e.button > 0) return;
    sd = { x: e.clientX, y: e.clientY, t: performance.now(), id: e.pointerId, moved: false, steer: false };
    touch = true;
  });
  stage.addEventListener('pointermove', e => {
    if (sd && e.pointerId === sd.id) {
      const dx = e.clientX - sd.x, dy = e.clientY - sd.y;
      if (!sd.moved && Math.hypot(dx, dy) > 8) sd.moved = true;
      if (sd.moved && Math.abs(dx) > Math.abs(dy)) { sd.steer = true; steer(Math.max(-1, Math.min(1, dx / 160)), 0); }
    } else if (fine && !dragging && !reduce) {
      const r = stage.getBoundingClientRect();
      steer(((e.clientX - r.left) / r.width - .5) * .7, ((e.clientY - r.top) / r.height - .5) * .6);
    }
  });
  const stageUp = e => {
    if (!sd || (e && e.pointerId !== sd.id)) return;
    if (e.type === 'pointercancel') { sd = null; touch = false; steer(0, 0); kick(); return; }
    const dx = e.clientX - sd.x, dy = e.clientY - sd.y, dt = performance.now() - sd.t;
    const wasMoved = sd.moved; sd = null; touch = false;
    if (Math.abs(dx) > 44 && Math.abs(dx) > Math.abs(dy) * 1.2) { dx < 0 ? next() : prev(); gotSwipe(); }
    else if (!wasMoved && dt < 450 && e && e.type === 'pointerup') {
      if (mqStory.matches) { const r = stage.getBoundingClientRect(); (e.clientX - r.left) < r.width * .34 ? prev() : next(); gotSwipe(); }
      else if (data[cur].go) data[cur].go.click();
    }
    steer(0, 0); p = 0; kick();
  };
  stage.addEventListener('pointerup', stageUp);
  stage.addEventListener('pointercancel', stageUp);
  stage.addEventListener('pointerleave', e => { if (!sd && fine) steer(0, 0); });
  function gotSwipe() { if (swiped) return; swiped = true; swipeHint.classList.add('gone'); }
  swipeHint.classList.add('gone');
  if (fine) {
    cockpit.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') hover = true; });
    cockpit.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') { hover = false; kick(); } });
  }
  stage.addEventListener('contextmenu', e => { if (mqStory.matches) e.preventDefault(); });

  /* ---------- Tastatur (Pfeiltasten, solange die Flugroute im Bild ist) ---------- */
  let secVis = false;
  // Bühne beobachten (auf dem Handy ist das Cockpit nur ein Rahmen ohne eigene Box)
  if ('IntersectionObserver' in window) new IntersectionObserver(([en]) => { secVis = en.intersectionRatio > .35; }, { threshold: [0, .35, .6] }).observe(stage);
  document.addEventListener('keydown', e => {
    if (!secVis || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const a = document.activeElement;
    if (a && (a.closest('input,textarea,select,[contenteditable],[role="radiogroup"],[role="tablist"]') || a === stick)) return;
    e.preventDefault(); usedStick();
    if (e.key === 'ArrowRight') { nudge(R, 0); next(); } else { nudge(-R, 0); prev(); }
  });

  /* ---------- Filmstreifen: antippen, ziehen, Impuls ---------- */
  let rd = null, dragMoved = false, stripTouched = false;
  reel.addEventListener('click', e => {
    if (dragMoved) { e.preventDefault(); e.stopPropagation(); dragMoved = false; return; }
    const f = e.target.closest('.flr-frame'); if (!f) return;
    const i = +f.dataset.i; goTo(i, 'manual'); stripUsed();
  });
  reel.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse' || e.button) return; rd = { x: e.clientX, l: reel.scrollLeft }; dragMoved = false; });
  addEventListener('pointermove', e => {
    if (!rd) return;
    const dx = e.clientX - rd.x;
    if (!dragMoved && Math.abs(dx) > 6) { dragMoved = true; reel.classList.add('drag'); stripUsed(); }
    if (dragMoved) reel.scrollLeft = rd.l - dx;
  });
  addEventListener('pointerup', () => { if (rd) { rd = null; reel.classList.remove('drag'); } });
  reel.addEventListener('wheel', () => stripUsed(), { passive: true });
  reel.addEventListener('touchstart', () => stripUsed(), { passive: true });
  function stripUsed() { if (stripTouched) return; stripTouched = true; dragHint.classList.add('gone'); }
  if ('IntersectionObserver' in window && G && !reduce) {
    const sio = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting) return; sio.disconnect();
      if (reel.scrollWidth <= reel.clientWidth + 4 || stripTouched) { if (reel.scrollWidth <= reel.clientWidth + 4) dragHint.classList.add('gone'); return; }
      const l = reel.scrollLeft;
      G.timeline({ delay: .6 }).to(reel, { scrollLeft: l + 150, duration: .7, ease: 'power2.inOut' }).to(reel, { scrollLeft: l, duration: .9, ease: 'power3.inOut' });
    }, { threshold: .6 });
    sio.observe(reel);
  }

  /* ---------- Handy: Filterzeile stupst einmal zur Seite, damit man sieht, dass sie weitergeht ---------- */
  if ('IntersectionObserver' in window && G && !reduce) {
    let modesTouched = false;
    ['touchstart', 'wheel', 'pointerdown'].forEach(ev => modesBox.addEventListener(ev, () => { modesTouched = true; }, { passive: true, once: true }));
    const mio = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting) return; mio.disconnect();
      if (modesTouched || modesBox.scrollWidth <= modesBox.clientWidth + 4) return;
      G.timeline({ delay: .5 }).to(modesBox, { scrollLeft: 90, duration: .6, ease: 'power2.inOut' }).to(modesBox, { scrollLeft: 0, duration: .8, ease: 'power3.inOut' });
    }, { threshold: .9 });
    mio.observe(modesBox);
  }

  /* ---------- Start ---------- */
  fill(rigs[0], data[0]);
  rigs[0].el.classList.add('on');
  if (G) G.set(rigs[1].el, { autoAlpha: 0 }); else rigs[1].el.style.opacity = 0;
  data[0].li.classList.add('on');
  elNm.textContent = data[0].name; setComp(0);
  paintNav();
  preload(1);
  addEventListener('resize', () => centerFrame(false), { passive: true });

  /* ---------- Schnittstelle für den 3D-Start (assets/wd3d.js) ---------- */
  window.flugroute = {
    goTo: i => goTo(+i, 'manual'),
    flyTo(i) {
      i = +i; if (!(i >= 0 && i < N)) return;
      if (!order.includes(i)) setMode('alle');
      const top = document.querySelector('.top'), off = (top ? top.offsetHeight : 66) + 18;
      const y = sec.getBoundingClientRect().top + scrollY + (sec.querySelector('.flr-head') ? sec.querySelector('.flr-head').offsetHeight * .55 : 0) - off;
      let done = false;
      const fire = () => { if (done) return; done = true; goTo(i, 'manual'); };
      if (window.FE && window.FE.lenis) window.FE.lenis.scrollTo(y, { duration: reduce ? 0 : 1.2, onComplete: fire });
      else scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
      setTimeout(fire, reduce ? 50 : 1300);
    }
  };
})();
