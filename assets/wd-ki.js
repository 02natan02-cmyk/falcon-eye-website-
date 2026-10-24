/* Falcon Eye – Webdesign-Landingpage, Abschnitt „KI-Sichtbarkeit“ (#ki)
   1) Erklär-Szene: Abend am Laptop → Kamerafahrt in den Bildschirm → KI-Reiter → Tastatur tippt die Frage →
      KI liest Quellen (Saarland-Karte) → Antwort nennt „Ihre Firma“ → Chip hebt ab, Nadel landet → Rückfahrt + Aufruf.
   2) Röntgenblick „Was wir dafür tun“ (fünf Ebenen, fahren beim Scrollen auseinander und wieder zusammen).
   3) Gelber Aufruf mit Radar.
   Startet erst in der Nähe (IntersectionObserver), läuft nur sichtbar, ruhige Endzustände bei prefers-reduced-motion.
   Nutzt das vorhandene gsap (+ ScrollTrigger); landing.js findet hier keine alten .ki-*-Elemente mehr. */
(() => {
  'use strict';
  const S = document.getElementById('ki');
  if (!S || !S.classList.contains('wdki')) return;
  const $ = (s, r = S) => r.querySelector(s), $$ = (s, r = S) => [...r.querySelectorAll(s)];
  const G = window.gsap;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  S.classList.add('wdki-js');

  /* ---------- Inhalte (Beispiel-Darstellung, keine echten KI-Antworten, keine Zahlen) ---------- */
  const Q0 = 'Wer baut im Saarland Websites, die man nicht vergisst?';
  const AIS = [
    { n: 'ChatGPT', c: '#19c37d', a: 'Im Saarland gibt es einige gute Adressen. Achten Sie auf eine Seite, die klar zeigt, was ein Betrieb kann und wo er zu finden ist – zum Beispiel' },
    { n: 'Claude', c: '#e08a5f', a: 'Eine gute Wahl erkennen Sie an echten Antworten, eigenen Fotos und klaren Kontaktwegen. Im Saarland fällt dabei zum Beispiel auf:' },
    { n: 'Gemini', c: '#7b9cff', a: 'Für das Saarland finde ich mehrere Anbieter. Hilfreich sind klar beschriebene Leistungen, ein gepflegtes Google-Profil und echte Referenzen – etwa' },
    { n: 'Perplexity', c: '#2cc6d6', a: 'Nach den Websites und Unternehmensprofilen, die ich gelesen habe, kommt zum Beispiel infrage:' },
    { n: 'Copilot', c: '#b18cff', a: 'Hier ist ein Vorschlag aus dem Saarland – mit eigener Website, Leistungen und Kontakt auf einen Blick:' }
  ];
  const SUBS = { room: 'Abends am Laptop: Ihr nächster Kunde sucht.', browser: 'Gefragt wird nicht mehr nur Google.', type: '', think: 'Die KI liest Websites, Profile, Bewertungen …', answer: '… und nennt einen Namen.', pull: '' };

  /* ---------- Elemente ---------- */
  const stage = $('[data-wdki-stage]'), room = $('[data-wdki-room]'), ui = $('[data-wdki-ui]'), mini = $('[data-wdki-mini]');
  if (!stage || !room || !ui) return;
  const layers = $$('.wdki-l', room), svgs = $$('.wdki-svg', room), head = $('.wk-head', room);
  const rig = $('.wk-rig', ui), kb = $('[data-wk-kb]', ui), tabs = $$('.wk-tab', ui), urlEl = $('[data-wk-url]', ui);
  const home = $('.wk-home', ui), qWrap = $('.wk-q', ui), qEl = $('[data-wk-q]', ui), aWrap = $('.wk-a', ui), aEl = $('[data-wk-a]', ui);
  const inBox = $('.wk-in', ui), field = $('[data-wk-field]', ui), send = $('.wk-send', ui);
  const holo = $('.wk-holo', ui), holoT = $('[data-wk-holo-t]', ui), cards = $$('.wk-card', ui), oks = $$('.wk-ok', ui), cities = $$('.wk-city circle', ui);
  const sweep = $('.wk-sweep', ui), pin = $('.wk-pin', ui), rings = $$('.wk-ring', ui), pinLab = $('[data-wk-pinlab]', ui), found = $('.wk-found', ui), mapBox = $('.wk-map', ui), mapSvg = $('.wk-map svg', ui);
  const cursor = $('.wk-cursor', ui), clickR = $('.wk-click', ui), fly = $('.wk-fly', ui), flash = $('.wdki-flash', stage);
  const tcEl = $('[data-wdki-tc]'), subEl = $('[data-wdki-sub]'), chapBtns = $$('[data-wdki-chap] button'), ppBtn = $('[data-wdki-pp]'), endCard = $('[data-wdki-end]');
  const nameIn = $('#wdki-name'), goBtn = $('[data-wdki-go]'), hint = $('[data-wdki-hint]'), aiBtns = $$('.wdki-ai button'), freeBtn = $('[data-wdki-free]');

  /* ---------- Zustand ---------- */
  let ai = 0, nm = '', q = Q0, free = false, freeTxt = '', shift = false;
  let tl = null, T = {}, typeDur = 2.6, ansDur = 1.8, words = [], lay = null, ready = false, started = false;
  let vis = false, autoPaused = false, userPaused = false, touched = false, seeking = false;
  const last = {};
  const you = () => nm || 'Ihre Firma';
  aiBtns.forEach((b, i) => b.style.setProperty('--c', AIS[i].c));

  /* ---------- Tastatur ---------- */
  const ROWS = [
    [['1'], ['2'], ['3'], ['4'], ['5'], ['6'], ['7'], ['8'], ['9'], ['0'], ['back', '⌫', 1.5]],
    [['q'], ['w'], ['e'], ['r'], ['t'], ['z'], ['u'], ['i'], ['o'], ['p'], ['ü']],
    [['a'], ['s'], ['d'], ['f'], ['g'], ['h'], ['j'], ['k'], ['l'], ['ö'], ['ä']],
    [['shift', '⇧', 1.5], ['y'], ['x'], ['c'], ['v'], ['b'], ['n'], ['m'], [','], ['.'], ['?']],
    [['-'], [' ', '', 6.4], ['enter', 'Enter ⏎', 2.4]]
  ];
  const keyMap = {};
  function buildKb() {
    if (!kb || kb.firstChild) return;
    kb.innerHTML = '<div class="wk-kbd">' + ROWS.map(r => '<div class="wk-row">' + r.map(([k, l, w]) =>
      `<span class="wk-key${k.length > 1 ? ' wk-mod' : ''}" data-k="${esc(k)}" style="--w:${w || 1}">${esc(l !== undefined ? l : k.toUpperCase())}</span>`).join('') + '</div>').join('') + '</div>';
    $$('.wk-key', kb).forEach(el => { keyMap[el.dataset.k] = el; });
  }
  function hit(k) {
    if (!k) return;
    k.classList.remove('on'); void k.offsetWidth; k.classList.add('on');
    clearTimeout(k._t); k._t = setTimeout(() => k.classList.remove('on'), 170);
  }
  function press(ch) {
    if (ch === '\n') return hit(keyMap.enter);
    const lo = ch.toLowerCase();
    hit(keyMap[lo]);
    if (ch !== lo) hit(keyMap.shift);
  }

  /* ---------- Projektive Abbildung: Rechteck w×h → Viereck (für den Bildschirm im Raum) ---------- */
  function homo(w, h, q4) {
    const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = q4;
    const dx1 = x1 - x2, dx2 = x3 - x2, dx3 = x0 - x1 + x2 - x3, dy1 = y1 - y2, dy2 = y3 - y2, dy3 = y0 - y1 + y2 - y3;
    const den = dx1 * dy2 - dx2 * dy1;
    const g = (dx3 * dy2 - dx2 * dy3) / den, hh = (dx1 * dy3 - dx3 * dy1) / den;
    const a = x1 - x0 + g * x1, b = x3 - x0 + hh * x3, d = y1 - y0 + g * y1, e = y3 - y0 + hh * y3;
    const m = [a / w, d / w, 0, g / w, b / h, e / h, 0, hh / h, 0, 0, 1, 0, x0, y0, 0, 1];
    return 'matrix3d(' + m.map(v => +v.toFixed(8)).join(',') + ')';
  }

  /* ---------- Maße: Raum-Ausschnitt, Bildschirm-Viereck, Leinwand ---------- */
  const VB = { w: 1600, h: 900 }, QUAD = [[632, 316], [1058, 328], [1068, 592], [622, 604]];
  function layout() {
    const r = stage.getBoundingClientRect(), W = r.width, H = r.height;
    if (!W || !H) return false;
    const A = W / H;
    let vbw, vbh, vbx, vby;
    if (A >= VB.w / VB.h) { vbw = VB.w; vbh = VB.w / A; vbx = 0; vby = clamp(470 - vbh / 2, 0, VB.h - vbh); }
    else { vbh = VB.h; vbw = VB.h * A; vby = 0; vbx = clamp((A < 1 ? 806 : 842) - vbw / 2, 0, VB.w - vbw); }
    const vb = [vbx, vby, vbw, vbh].map(v => +v.toFixed(2)).join(' ');
    svgs.forEach(s => s.setAttribute('viewBox', vb));
    const k = W / vbw, P = ([x, y]) => [(x - vbx) * k, (y - vby) * k];
    const quad = QUAD.map(P);
    if (mini) mini.style.transform = homo(640, 400, quad);
    const xs = quad.map(p => p[0]), ys = quad.map(p => p[1]);
    const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
    const F = [(x0 + x1) / 2, (y0 + y1) / 2];
    // Bildschirm-Blick mit dunklem Display-Rand: oben/unten Platz für das OSD
    const ins = A >= 1.25 ? { t: 64, r: 34, b: 56, l: 34 } : { t: 62, r: 8, b: 44, l: 8 };
    const IW = W - ins.l - ins.r, IH = H - ins.t - ins.b, IA = IW / IH;
    const C = [ins.l + IW / 2, ins.t + IH / 2];
    const zoom = Math.max(IW / (x1 - x0), IH / (y1 - y0)) * 1.06;
    const wide = IA >= 1.25;
    let uw, uh;
    if (wide) { uh = 640; uw = Math.round(640 * IA); } else { uw = Math.max(400, Math.round(IW / 1.25)); uh = Math.round(uw / IA); }
    const us = IW / uw;
    ui.classList.toggle('is-wide', wide); ui.classList.toggle('is-port', !wide);
    ui.style.setProperty('--uw', uw + 'px'); ui.style.setProperty('--uh', uh + 'px'); ui.style.setProperty('--us', us.toFixed(5));
    ui.style.left = ins.l + 'px'; ui.style.top = ins.t + 'px';
    lay = { W, H, A, F, C, zoom, wide, uw, uh, us };
    return true;
  }

  /* ---------- Kamera im Raum: Schub in den Bildschirm mit Tiefenstaffelung ---------- */
  const cam = { p: 0, d: 0, mx: 0, my: 0 };
  function applyCam() {
    if (!lay) return;
    const { F, C, zoom } = lay, e = cam.p;
    layers.forEach(L => {
      const dk = +L.dataset.d || 1;
      const s = (1 + (zoom - 1) * e * Math.pow(dk, 1.2)) * (1 + .04 * cam.d * dk);
      const par = (1 - e) * dk;
      const tx = (C[0] - F[0]) * e + ((cam.d - .5) * 16 + cam.mx * 12) * par;
      const ty = (C[1] - F[1]) * e + (cam.my * 8 - cam.d * 4) * par;
      L.style.transform = `translate3d(${tx.toFixed(2)}px,${ty.toFixed(2)}px,0) translate(${F[0].toFixed(2)}px,${F[1].toFixed(2)}px) scale(${s.toFixed(5)}) translate(${(-F[0]).toFixed(2)}px,${(-F[1]).toFixed(2)}px)`;
    });
  }

  /* ---------- Bildschirm im Raum ---------- */
  function setMini(state) {
    if (!mini) return;
    const A = AIS[ai];
    mini.style.setProperty('--ac', A.c);
    const t = AIS.map((x, i) => `<span class="wm-tab${state !== 'home' && i === ai ? ' on' : ''}">${x.n}</span>`).join('');
    const body = state === 'home'
      ? '<div class="wm-home"><b>Neuer Tab</b><span class="wm-search">Suchen oder Adresse eingeben</span></div>'
      : `<div class="wm-chat"><p class="wm-q">${esc(q)}</p><p class="wm-a"><i class="wm-av"></i>${esc(A.a)} <span class="wm-you">${esc(you())}</span>.</p></div>`;
    mini.innerHTML = `<div class="wm-tabs"><span class="wm-dots"><i></i><i></i><i></i></span>${t}</div><div class="wm-addr"><span class="wm-url">${state === 'home' ? 'Neuer Tab' : esc(A.n) + ' · Neuer Chat'}</span><span class="wm-bsp">Beispiel-Darstellung</span></div>${body}`;
  }

  /* ---------- Text-Darstellung ---------- */
  const chipHTML = () => `<span class="wk-you">${esc(you())}</span>.`;
  function renderA(n, done) {
    if (n < 0) { aEl.innerHTML = '<span class="wk-dotsT"><i></i><i></i><i></i></span>'; return; }
    const txt = esc(words.slice(0, n).join(' '));
    aEl.innerHTML = done ? `${txt} ${chipHTML()}` : txt + '<span class="wk-caret"></span>';
  }
  function renderField(n, caret) {
    const s = free ? freeTxt : q.slice(0, n);
    field.innerHTML = esc(s) + (caret ? '<span class="wk-caret"></span>' : '');
    field.classList.toggle('is-ph', !s && caret);
    inBox.classList.toggle('is-ready', !!s);
    inBox.classList.toggle('is-on', !!caret);
  }
  function setTab(i) { tabs.forEach((t, j) => t.classList.toggle('on', i === j)); urlEl.textContent = i < 0 ? 'Neuer Tab' : AIS[i].n + ' · Neuer Chat'; }
  function setSub(txt) {
    if (!subEl) return;
    subEl.textContent = txt;
    subEl.classList.remove('in'); if (txt) { void subEl.offsetWidth; subEl.classList.add('in'); }
  }
  let onName = () => {};
  function syncNames() {
    $$('.wk-you, .wm-you, [data-xl-name]').forEach(e => { e.textContent = you(); });
    if (pinLab) pinLab.textContent = you();
    if (fly) fly.textContent = you();
    onName();
  }
  function applyAI() {
    const A = AIS[ai];
    ui.style.setProperty('--ac', A.c);
    words = A.a.split(' ');
    aiBtns.forEach((b, i) => b.setAttribute('aria-pressed', String(i === ai)));
  }

  /* ---------- Position der Nadel auf der Karte (virtuelle Pixel) ---------- */
  function pinPoint() {
    const uiR = ui.getBoundingClientRect(), mR = mapSvg.getBoundingClientRect(), us = lay.us;
    const vb = { x: 20, y: 40, w: 720, h: 560 };
    const s = Math.min(mR.width / vb.w, mR.height / vb.h);
    const ox = (mR.width - vb.w * s) / 2, oy = (mR.height - vb.h * s) / 2;
    const px = mR.left + ox + (420 - vb.x) * s, py = mR.top + oy + (300 - vb.y) * s;
    const mapR = mapBox.getBoundingClientRect();
    return { x: (px - uiR.left) / us, y: (py - uiR.top) / us, lx: (px - mapR.left) / us, ly: (py - mapR.top) / us, s: s / us };
  }

  /* ---------- Zeitleiste der Szene ---------- */
  function build() {
    if (!lay) return;
    if (tl) tl.kill();
    applyAI();
    G.set([rig, cursor, clickR, fly, qWrap, aWrap, home, holo, inBox, send, endCard, flash, pin, pinLab, found, sweep, head, ...cards, ...oks, ...rings], { clearProps: 'all' });
    G.set([ui, room], { clearProps: 'opacity,visibility' });
    const kbd = $('.wk-kbd', kb); if (kbd) G.set(kbd, { clearProps: 'all' });
    // Ruhestand messen (fertige Antwort, Karte, Tastatur)
    setTab(ai); qEl.textContent = q; renderA(words.length, true); renderField(0, false);
    const uiR = ui.getBoundingClientRect(), us = lay.us;
    const rel = el => { const r = el.getBoundingClientRect(); return { x: (r.left - uiR.left) / us, y: (r.top - uiR.top) / us, w: r.width / us, h: r.height / us }; };
    const tabR = rel(tabs[ai]), chip = $('.wk-you', aEl), chipR = chip ? rel(chip) : { x: 0, y: 0, w: 120, h: 30 }, kbR = rel(kb);
    const pp = pinPoint();
    const labW = Math.min(pinLab.offsetWidth || 120, lay.wide ? 240 : 150);
    const lx = clamp(pp.lx - labW / 2, 4, mapBox.clientWidth - labW - 4), ly = pp.ly - 92 * pp.s - (pinLab.offsetHeight || 26) - 6;
    pinLab.style.left = lx.toFixed(1) + 'px'; pinLab.style.top = ly.toFixed(1) + 'px';
    const labR = rel(pinLab);
    const tgt = { x: labR.x + labR.w / 2 - chipR.w / 2, y: labR.y + labR.h / 2 - chipR.h / 2, s: labR.h / chipR.h };
    setTab(-1);

    const N = words.length;
    typeDur = clamp(q.length * .05, 1.2, 3.6);
    ansDur = clamp(N * .07, 1.1, 2.2);
    T = { room: 0, push: 1.35 };
    T.handoff = T.push + .82; T.browser = T.push + 1.15; T.click = T.browser + .85; T.type = T.click + .4;
    T.typeStart = T.type + .5; T.send = T.typeStart + typeDur + .15; T.think = T.send + .5; T.answer = T.think + 1.35;
    T.lift = T.answer + ansDur + .1; T.pull = T.lift + 1.75; T.end = T.pull + 1.25;
    last.n = -1; last.an = null; last.sub = null; last.mini = null; last.tab = null; last.sec = -1; last.holo = null; last.found = null; last.end = null;

    const chat = [qWrap, aWrap, inBox];
    tl = G.timeline({ paused: true, onUpdate: tick, onComplete: done, defaults: { ease: 'power2.out' } });
    // Anfangszustand
    tl.set(room, { autoAlpha: 1, '--wk-scr': '#8fb4ff', '--wk-rim': '#bcd3ff' }, 0)
      .set(ui, { autoAlpha: 0 }, 0)
      .set(home, { autoAlpha: 1 }, 0)
      .set(chat, { autoAlpha: 0 }, 0)
      .set(holo, { autoAlpha: 0 }, 0)
      .set(cards, { autoAlpha: 0, z: -420, rotationY: -24 }, 0)
      .set(oks, { scale: 0 }, 0)
      .set(found, { autoAlpha: 0, y: 12 }, 0)
      .set(pin, { autoAlpha: 0, y: -110 }, 0)
      .set(rings, { autoAlpha: 0 }, 0)
      .set(pinLab, { autoAlpha: 0, scale: .5 }, 0)
      .set(cursor, { autoAlpha: 0, x: lay.uw * .6, y: lay.uh * .82, scale: 1 }, 0)
      .set(clickR, { autoAlpha: 0, scale: .2 }, 0)
      .set(fly, { autoAlpha: 0, x: chipR.x, y: chipR.y, scale: 1, z: 0, rotationX: 0 }, 0)
      .set(rig, { y: 0, scale: 1, transformOrigin: `50% ${lay.uh / 2}px` }, 0)
      .set(endCard, { autoAlpha: 0, y: 26 }, 0)
      .set(flash, { opacity: 0 }, 0)
      .set(head, { rotation: 0, svgOrigin: '600 720' }, 0)
      .set(sweep, { autoAlpha: 0, x: 0 }, 0);
    if (kbd) tl.set(kbd, { rotationX: lay.wide ? 50 : 40, y: 30 }, 0);
    // 1 Abend: langsame Kamerafahrt, Dampf, Drohne vor dem Fenster
    tl.fromTo(cam, { p: 0, d: 0 }, { d: 1, duration: T.push + .5, ease: 'sine.inOut', onUpdate: applyCam }, 0);
    // 2 Schub in den Bildschirm
    tl.to(cam, { p: 1, duration: 1.15, ease: 'power3.inOut', onUpdate: applyCam }, T.push)
      .to(flash, { opacity: .62, duration: .12, ease: 'power1.in' }, T.handoff - .08)
      .to(flash, { opacity: 0, duration: .5 }, T.handoff + .05)
      .to(ui, { autoAlpha: 1, duration: .12, ease: 'none' }, T.handoff - .02)
      .fromTo(rig, { scale: 1.12 }, { scale: 1, duration: .7, ease: 'power3.out', immediateRender: false }, T.handoff - .02)
      .to(room, { autoAlpha: 0, duration: .12 }, T.handoff + .1);
    // Mauszeiger öffnet den KI-Reiter
    tl.to(cursor, { autoAlpha: 1, duration: .2 }, T.browser - .15)
      .to(cursor, { x: tabR.x + tabR.w * .5, y: tabR.y + tabR.h * .55, duration: .78, ease: 'power2.inOut' }, T.browser - .1)
      .to(cursor, { scale: .82, duration: .07, yoyo: true, repeat: 1, ease: 'power1.inOut' }, T.click - .07)
      .to(clickR, { keyframes: [{ autoAlpha: .95, scale: .3, duration: 0 }, { autoAlpha: 0, scale: 1.9, duration: .45 }] }, T.click)
      .to(home, { autoAlpha: 0, duration: .3 }, T.click + .05)
      .to(inBox, { autoAlpha: 1, duration: .3 }, T.click + .1)
      .to(holo, { autoAlpha: 1, duration: .45 }, T.click + .15)
      .to(cursor, { autoAlpha: 0, x: '+=40', y: '+=70', duration: .45, ease: 'power1.in' }, T.click + .25);
    // 3 Kamera neigt sich zur Tastatur, Tasten leuchten beim Tippen
    tl.to(rig, { y: -Math.round(kbR.h), duration: .6, ease: 'power3.inOut' }, T.type);
    if (kbd) tl.to(kbd, { rotationX: lay.wide ? 24 : 18, y: 0, duration: .75, ease: 'power2.out' }, T.type);
    tl.to(send, { keyframes: [{ scale: 1.28, duration: .1 }, { scale: 1, duration: .25 }] }, T.send)
      .to(rig, { y: 0, duration: .55, ease: 'power3.inOut' }, T.send + .12)
      .fromTo(qWrap, { autoAlpha: 0, y: 34, scale: .94 }, { autoAlpha: 1, y: 0, scale: 1, duration: .5, ease: 'back.out(1.6)', immediateRender: false }, T.send + .22);
    // 4 KI liest Quellen: Karten fliegen aus der Tiefe, Karte wird abgetastet
    tl.to(aWrap, { autoAlpha: 1, duration: .25 }, T.think - .1);
    cards.forEach((c, i) => {
      const t0 = T.think + .05 + i * .24;
      tl.to(c, { autoAlpha: 1, z: 0, rotationY: 0, duration: .42, ease: 'power3.out' }, t0)
        .to(oks[i], { scale: 1, duration: .3, ease: 'back.out(3)' }, t0 + .32);
    });
    tl.to(sweep, { keyframes: [{ autoAlpha: 1, duration: .15 }, { x: 640, duration: 1.05, ease: 'none' }, { autoAlpha: 0, duration: .15 }] }, T.think + .05)
      .to(cities, { keyframes: [{ attr: { r: 13 }, fill: '#ffd000', duration: .2 }, { attr: { r: 7 }, fill: '#7d8790', duration: .35 }], stagger: .09 }, T.think + .1);
    // 5 Antwort: Chip hebt aus dem Bildschirm ab und landet als Nadel auf der Karte
    tl.to(fly, { autoAlpha: 1, duration: .01 }, T.lift)
      .to(fly, { scale: 1.4, z: 160, rotationX: -16, y: chipR.y - 30, duration: .5, ease: 'power3.out' }, T.lift)
      .to(fly, { x: tgt.x, duration: .62, ease: 'power1.inOut' }, T.lift + .5)
      .to(fly, { y: tgt.y, scale: tgt.s, z: 0, rotationX: 0, duration: .62, ease: 'power2.in' }, T.lift + .5)
      .to(pin, { autoAlpha: 1, y: 0, duration: .55, ease: 'bounce.out' }, T.lift + .82)
      .to(fly, { autoAlpha: 0, duration: .1 }, T.lift + 1.12)
      .fromTo(pinLab, { autoAlpha: 1, scale: 1 }, { keyframes: [{ scale: 1.18, duration: .14 }, { scale: 1, duration: .3, ease: 'back.out(2.4)' }], immediateRender: false }, T.lift + 1.1)
      .fromTo(rings, { autoAlpha: .95, scale: .4, transformOrigin: '50% 50%' }, { autoAlpha: 0, scale: 3.4, duration: 1.1, stagger: .28, ease: 'power2.out', immediateRender: false }, T.lift + 1.12)
      .to(found, { autoAlpha: 1, y: 0, duration: .45 }, T.lift + 1.2)
      .to(room, { '--wk-scr': '#ffd36b', '--wk-rim': '#ffe29a', duration: .5 }, T.lift + 1.2);
    // 6 Rückfahrt zur Schulter-Ansicht, Aufruf
    tl.to(room, { autoAlpha: 1, duration: .01 }, T.pull - .02)
      .to(rig, { scale: 1.12, duration: .5, ease: 'power2.in' }, T.pull)
      .to(ui, { autoAlpha: 0, duration: .32 }, T.pull + .14)
      .to(flash, { keyframes: [{ opacity: .35, duration: .12 }, { opacity: 0, duration: .4 }] }, T.pull + .12)
      .to(cam, { p: 0, duration: 1.25, ease: 'power3.inOut', onUpdate: applyCam }, T.pull)
      .to(head, { rotation: -3, svgOrigin: '600 720', duration: 1, ease: 'power2.inOut' }, T.pull + .6)
      .to(endCard, { autoAlpha: 1, y: 0, duration: .55 }, T.end - .3)
      .set({}, {}, T.end + .4);
    chapT = [[0, T.push], [T.push, T.type], [T.type, T.think], [T.think, T.answer], [T.answer, T.pull], [T.pull, T.end + .4]];
  }
  let chapT = [];
  const chapIdx = { room: 0, browser: 1, type: 2, think: 3, answer: 4, pull: 5 };

  /* ---------- Diskrete Zustände aus der Zeit ableiten (spulen vor/zurück bleibt stimmig) ---------- */
  function tick() {
    const t = tl.time();
    const sec = Math.floor(t);
    if (sec !== last.sec) { last.sec = sec; if (tcEl) tcEl.textContent = '00:' + String(sec).padStart(2, '0'); }
    chapT.forEach((c, i) => {
      const f = clamp((t - c[0]) / (c[1] - c[0]), 0, 1);
      if (c.f !== f) { c.f = f; const b = chapBtns[i]; if (b) { b.style.setProperty('--f', f.toFixed(3)); b.classList.toggle('on', f > 0 && f < 1); } }
    });
    const sub = t < T.push ? 'room' : t < T.type ? 'browser' : t < T.think ? 'type' : t < T.answer ? 'think' : t < T.pull ? 'answer' : 'pull';
    if (sub !== last.sub) { last.sub = sub; setSub(SUBS[sub]); }
    const ms = t < T.pull ? 'home' : 'answer';
    if (ms !== last.mini) { last.mini = ms; setMini(ms); }
    const ta = t >= T.click ? ai : -1;
    if (ta !== last.tab) { last.tab = ta; setTab(ta); }
    // Eingabefeld
    let n = 0; const typing = t >= T.click + .2 && t < T.send + .22;
    if (t >= T.typeStart && t < T.send + .22) n = clamp(Math.round((t - T.typeStart) / typeDur * q.length), 0, q.length);
    const nk = n + (typing ? .5 : 0);
    if (nk !== last.n) {
      if (!seeking && !tl.paused() && n > Math.floor(last.n) && n - Math.floor(last.n) < 6) for (let i = Math.max(0, Math.floor(last.n)); i < n; i++) press(q[i]);
      last.n = nk; if (!free) renderField(n, typing);
    }
    if (!seeking && !tl.paused() && last.sendT !== T.send && t >= T.send && t < T.send + .3) { last.sendT = T.send; hit(keyMap.enter); }
    if (t < T.send) last.sendT = null;
    // Antwort
    let an; if (t < T.think) an = 'none'; else if (t < T.answer) an = -1; else an = clamp(Math.floor((t - T.answer) / ansDur * (words.length + 1)), 0, words.length);
    const done = t >= T.answer + ansDur;
    const ak = an + (done ? 'd' : '');
    if (ak !== last.an) { last.an = ak; if (an === 'none') aEl.innerHTML = ''; else renderA(an, done); }
    const ht = t >= T.think && t < T.answer ? 'Liest Quellen …' : 'Gelesene Quellen';
    if (ht !== last.holo) { last.holo = ht; holoT.textContent = ht; }
    const fd = t >= T.lift + 1.2;
    if (fd !== last.found) { last.found = fd; room.classList.toggle('is-found', fd); }
    const en = t >= T.end - .3;
    if (en !== last.end) { last.end = en; stage.classList.toggle('is-end', en); }
    stage.classList.toggle('is-cam', (t > T.push - .1 && t < T.handoff + .5) || (t > T.pull - .1 && t < T.end));
    stage.classList.toggle('is-screen', t >= T.handoff && t < T.pull + .3);
  }

  function done() {
    started = true;
    stage.classList.add('is-end');
    if (!touched && hint) hint.classList.add('on');
    if (freeBtn && !touched) { freeBtn.classList.remove('pulse'); void freeBtn.offsetWidth; freeBtn.classList.add('pulse'); }
    syncPP();
  }

  /* ---------- Steuerung ---------- */
  function syncPP() { if (ppBtn) ppBtn.setAttribute('aria-pressed', String(!!(tl && tl.paused() && tl.progress() < 1) || userPaused)); idle(); }
  function idle() { stage.classList.toggle('is-idle', !vis || userPaused); }
  function play(at) {
    if (!tl) return;
    exitFree(true);
    userPaused = false; autoPaused = false;
    if (at !== undefined) { seeking = true; tl.pause(at); seeking = false; }
    tl.play(); syncPP();
  }
  function restart(at) { build(); play(typeof at === 'string' ? Math.max(0, T[at] + (at === 'send' ? -.05 : at === 'browser' ? -.2 : at === 'push' ? -.15 : 0)) : (at || 0)); }
  function untouched() {
    if (touched) return; touched = true;
    if (hint) hint.classList.remove('on');
  }
  function scrollToStage() {
    const r = stage.getBoundingClientRect();
    if (r.top > 60 && r.bottom < innerHeight - 20) return;
    const top = document.querySelector('.top'), y = r.top + scrollY - ((top ? top.offsetHeight : 66) + 12);
    if (window.FE && window.FE.lenis) window.FE.lenis.scrollTo(y, { duration: .9 }); else scrollTo({ top: y, behavior: 'smooth' });
  }

  /* Selbst tippen: Kamera steht vor der Tastatur, Besucher tippt (Bildschirmtastatur oder echte Tastatur) */
  function enterFree() {
    if (reduce || !tl) return;
    untouched();
    free = true; freeTxt = ''; shift = false; stage.classList.remove('is-shift');
    seeking = true; tl.pause(T.typeStart + .26); seeking = false; tick();
    renderField(0, true);
    stage.classList.add('is-free'); stage.classList.remove('is-end');
    syncPP();
  }
  function exitFree(silent) {
    if (!free) return;
    free = false; stage.classList.remove('is-free', 'is-shift'); shift = false;
    if (!silent) { seeking = true; tl.pause(T.end + .4); seeking = false; tick(); done(); }
  }
  function submitFree() {
    const typed = freeTxt.trim();
    free = false; stage.classList.remove('is-free', 'is-shift');
    q = typed.length > 1 ? typed : Q0;
    restart('send');
  }
  function freeKey(k) {
    if (k === 'enter') return submitFree();
    if (k === 'back') freeTxt = freeTxt.slice(0, -1);
    else if (k === 'shift') { shift = !shift; stage.classList.toggle('is-shift', shift); return; }
    else if (freeTxt.length < 80) { freeTxt += shift ? k.toUpperCase() : k; if (shift) { shift = false; stage.classList.remove('is-shift'); } }
    renderField(0, true);
  }
  function onKeyTap(e) {
    const el = e.target.closest('.wk-key'); if (!el) return;
    e.preventDefault();
    hit(el);
    if (!free) enterFree();
    freeKey(el.dataset.k);
  }
  function onPhysKey(e) {
    if (!free || e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.target && e.target.closest && e.target.closest('input,textarea,select,[contenteditable]')) return;
    const k = e.key;
    if (k === 'Escape') { exitFree(); return; }
    if (k === 'Enter') { e.preventDefault(); hit(keyMap.enter); submitFree(); return; }
    if (k === 'Backspace') { e.preventDefault(); hit(keyMap.back); freeKey('back'); return; }
    if (k.length === 1) {
      e.preventDefault();
      press(k);
      if (freeTxt.length < 80) { freeTxt += k; renderField(0, true); }
    }
  }

  function setAI(i, replay) {
    ai = i; applyAI(); untouched();
    if (reduce) { renderStatic(); return; }
    if (free) { setTab(ai); return; }
    if (replay && tl) { q = Q0; restart('browser'); scrollToStage(); }
  }

  /* ---------- Ruhiger Endzustand (prefers-reduced-motion) ---------- */
  function renderStatic() {
    applyAI(); setTab(ai); qEl.textContent = q; renderA(words.length, true); renderField(0, false);
    if (holoT) holoT.textContent = 'Gelesene Quellen';
    const pp = pinPoint();
    const labW = Math.min(pinLab.offsetWidth || 120, lay.wide ? 240 : 150);
    pinLab.style.left = clamp(pp.lx - labW / 2, 4, mapBox.clientWidth - labW - 4) + 'px';
    pinLab.style.top = (pp.ly - 92 * pp.s - (pinLab.offsetHeight || 26) - 6) + 'px';
    setMini('answer');
  }

  /* ---------- Start ---------- */
  function init() {
    if (ready) return; ready = true;
    buildKb();
    if (!layout()) { ready = false; return; }
    applyAI(); syncNames();
    if (reduce || !G) { stage.classList.add('is-static'); renderStatic(); return; }
    stage.classList.add('is-film');
    build();
    seeking = true; tl.pause(0); seeking = false; tick(); applyCam();
    // Nach dem Laden der Schriften neu messen (Chip- und Reiterpositionen hängen an der Schrift)
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (tl && !free) { const t = tl.time(), p = tl.paused(); build(); seeking = true; tl.pause(t); seeking = false; tick(); applyCam(); if (!p) tl.play(); } });
  }

  function setupFilm() {
    // Bühne in der Nähe vorbereiten, beim Sichtkontakt abspielen, außerhalb anhalten
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) init(); }, { rootMargin: '60% 0px' }).observe(stage);
      new IntersectionObserver(es => es.forEach(e => {
        const r = e.intersectionRatio;
        vis = e.isIntersecting && r > .12;
        if (!ready) init();
        if (!tl) { idle(); return; }
        if (r >= .5 && !started && !userPaused && !free) { started = true; play(0); }
        else if (r < .12 && !tl.paused()) { tl.pause(); autoPaused = true; }
        else if (r >= .4 && autoPaused && !userPaused && !free) { autoPaused = false; tl.play(); }
        syncPP();
      }), { threshold: [0, .12, .4, .5, .75] }).observe(stage);
    } else { init(); if (tl) play(0); }

    let rt = 0, lastW = 0, lastH = 0;
    addEventListener('resize', () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        if (!ready) return;
        const r = stage.getBoundingClientRect();
        if (Math.abs(r.width - lastW) < 2 && Math.abs(r.height - lastH) < 2) return;
        lastW = r.width; lastH = r.height;
        layout();
        if (reduce || !tl) { renderStatic(); return; }
        const t = tl.time(), p = tl.paused(), f = free;
        build(); seeking = true; tl.pause(t); seeking = false; tick(); applyCam();
        if (f) { free = true; stage.classList.add('is-free'); renderField(0, true); } else if (!p) tl.play();
      }, 160);
    });

    if (ppBtn) ppBtn.addEventListener('click', () => {
      if (!tl) return; untouched();
      if (free) { exitFree(); return; }
      if (tl.progress() >= 1) { restart(0); return; }
      if (tl.paused()) { userPaused = false; autoPaused = false; tl.play(); } else { tl.pause(); userPaused = true; }
      syncPP();
    });
    chapBtns.forEach((b, i) => b.addEventListener('click', () => {
      if (!tl) return; untouched();
      const at = chapT[i] ? chapT[i][0] + (i === 2 ? .05 : 0) : 0;
      if (q !== Q0 && i <= 2) { q = Q0; build(); }
      play(at);
    }));
    $$('[data-wdki-replay]').forEach(b => b.addEventListener('click', () => { untouched(); q = Q0; restart(0); }));
    if (freeBtn) freeBtn.addEventListener('click', () => { freeBtn.classList.remove('pulse'); enterFree(); });
    if (kb) kb.addEventListener('pointerdown', onKeyTap);
    document.addEventListener('keydown', onPhysKey);
    tabs.forEach((t, i) => t.addEventListener('click', () => setAI(i, true)));
    if (mini) mini.addEventListener('click', () => { if (stage.classList.contains('is-end') && !free) enterFree(); });
    // Maus-Parallaxe im Raum (nur am Desktop, nur in der Schulter-Ansicht)
    if (finePointer) {
      const mx = G.quickTo(cam, 'mx', { duration: .9, ease: 'power3.out', onUpdate: applyCam });
      const my = G.quickTo(cam, 'my', { duration: .9, ease: 'power3.out' });
      stage.addEventListener('pointermove', e => {
        if (cam.p > .02) return;
        const r = stage.getBoundingClientRect();
        mx(((e.clientX - r.left) / r.width - .5) * 2); my(((e.clientY - r.top) / r.height - .5) * 2);
      });
      stage.addEventListener('pointerleave', () => { mx(0); my(0); });
    }
  }

  // Name und KI-Wahl (auch ohne Film bedienbar)
  if (nameIn) {
    nameIn.addEventListener('focus', untouched);
    nameIn.addEventListener('input', () => {
      untouched();
      nm = nameIn.value.replace(/\s+/g, ' ').trim().slice(0, 32);
      syncNames();
      if (reduce && lay) renderStatic();
    });
    nameIn.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); go(); } });
  }
  function go() {
    untouched();
    if (nameIn) { nm = nameIn.value.replace(/\s+/g, ' ').trim().slice(0, 32); syncNames(); }
    if (reduce || !tl) { if (lay) renderStatic(); return; }
    q = Q0; restart('push'); scrollToStage();
    if (nameIn && matchMedia('(hover: none)').matches) nameIn.blur();
  }
  if (goBtn) goBtn.addEventListener('click', go);
  aiBtns.forEach((b, i) => b.addEventListener('click', () => setAI(i, true)));

  /* ---------- Anfrage: Formular vorbefüllen und hinscrollen ---------- */
  $$('[data-wdki-ask]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    const f = document.getElementById('anfrage');
    if (f) {
      const m = f.elements.nachricht, fi = f.elements.firma;
      if (m && !m.value.trim()) m.value = 'Ich möchte bei Google, Bing und in KI-Antworten gefunden werden.';
      if (fi && nm && !fi.value.trim()) fi.value = nm;
    }
    const tgt = document.getElementById('entwurf'); if (!tgt) return;
    const top = document.querySelector('.top'), y = tgt.getBoundingClientRect().top + scrollY - ((top ? top.offsetHeight : 66) + 10);
    if (window.FE && window.FE.lenis) window.FE.lenis.scrollTo(y, { duration: reduce ? 0 : 1.1 }); else scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
    setTimeout(() => { const n = f && f.elements.name; if (n && !n.value) n.focus({ preventScroll: true }); }, reduce ? 60 : 1200);
  }));

  if (G) setupFilm(); else { init(); }
  // Nur für die Prüfung (Adresse mit ?wdkitest): Zeitleiste von außen spulen
  if (/[?&]wdkitest\b/.test(location.search)) window.__wdki = { seek: t => { init(); if (tl) { seeking = true; tl.pause(t); seeking = false; tick(); applyCam(); } }, T: () => T, free: () => enterFree(), key: k => freeKey(k), state: () => ({ t: tl && tl.time(), free, q, nm, ai }) };

  /* =====================================================================
     Röntgenblick: fünf Ebenen einer Website
     ===================================================================== */
  const xr = $('[data-wdki-xr]');
  if (xr) {
    const btns = $$('.wdki-xr-list button', xr), ls = $$('.xl', xr), stack = $('.wdki-xr-stack', xr), rot = $('.wdki-xr-rot', xr), stg = $('.wdki-xr-stage', xr);
    const code = $('[data-xl-code]', xr), hintX = $('.wdki-xr-hint', xr);
    let cur = 0, xTouched = false, auto = 0, autoN = 0;
    const hl = s => esc(s).replace(/(&quot;[^&]*?&quot;)(\s*:)/g, '<b class="k">$1</b>$2').replace(/(:\s*)(&quot;[^&]*?&quot;)/g, '$1<b class="v">$2</b>');
    function typeCode() {
      if (!code) return;
      const full = codeTxt();
      clearInterval(code._t);
      if (reduce) { code.innerHTML = hl(full); return; }
      let i = 0;
      code._t = setInterval(() => { i += 2; if (i >= full.length) { clearInterval(code._t); code.innerHTML = hl(full); return; } code.innerHTML = hl(full.slice(0, i)) + '<span class="xl-caret"></span>'; }, 26);
    }
    function sel(i, user) {
      cur = i;
      btns.forEach(b => b.setAttribute('aria-expanded', String(+b.dataset.l === i)));
      ls.forEach(l => l.classList.toggle('on', +l.dataset.l === i));
      if (i === 1) typeCode();
      if (user) { clearInterval(auto); if (!xTouched) { xTouched = true; if (hintX) hintX.classList.add('off'); } }
    }
    btns.forEach(b => {
      b.addEventListener('click', () => sel(+b.dataset.l, true));
      if (finePointer) b.addEventListener('mouseenter', () => sel(+b.dataset.l, true));
    });
    ls.forEach(l => l.addEventListener('click', () => sel(+l.dataset.l, true)));
    sel(0, false);
    const codeTxt = () => `{ "@type": "LocalBusiness",\n  "name": "${you()}",\n  "areaServed": "Saarland" }`;
    if (code) code.innerHTML = hl(codeTxt());
    onName = () => { if (code) { clearInterval(code._t); code.innerHTML = hl(codeTxt()); } };
    // Auseinander- und wieder zusammenfahren beim Scrollen (ohne Pin, auch am Handy ruhig)
    if (!reduce && G && window.ScrollTrigger) {
      G.registerPlugin(window.ScrollTrigger);
      const gmax = () => (innerWidth < 560 ? 54 : innerWidth < 980 ? 64 : 78) + 'px';
      G.timeline({ scrollTrigger: { trigger: stg, start: 'top 95%', end: 'bottom 5%', scrub: .7, invalidateOnRefresh: true } })
        .fromTo(stack, { '--gap': '6px' }, { '--gap': gmax, duration: .4, ease: 'power2.out' })
        .to(stack, { '--gap': gmax, duration: .2 })
        .to(stack, { '--gap': '8px', duration: .4, ease: 'power2.in' });
      G.fromTo(rot, { '--rz': '-48deg' }, { '--rz': '-30deg', ease: 'none', scrollTrigger: { trigger: stg, start: 'top bottom', end: 'bottom top', scrub: .9 } });
    }
    // Selbst-Impuls: einmal durch alle Ebenen, bis jemand selbst tippt
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(es => es.forEach(e => {
        xr.classList.toggle('vis', e.isIntersecting);
        if (e.isIntersecting && e.intersectionRatio >= .35) {
          xr.classList.add('in');
          if (!xTouched && !auto && !reduce) auto = setInterval(() => { if (xTouched || ++autoN > 4) { clearInterval(auto); return; } sel((cur + 1) % 5, false); }, 2300);
        }
      }), { threshold: [0, .35] }).observe(xr);
    } else xr.classList.add('in', 'vis');
  }

  /* ---------- Gelber Aufruf ---------- */
  const cta = $('[data-wdki-cta]');
  if (cta) {
    if ('IntersectionObserver' in window) new IntersectionObserver(es => es.forEach(e => { cta.classList.toggle('vis', e.isIntersecting); if (e.isIntersecting && e.intersectionRatio > .4) cta.classList.add('in'); }), { threshold: [0, .4] }).observe(cta);
    else cta.classList.add('in', 'vis');
  }
})();
