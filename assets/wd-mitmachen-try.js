/* Falcon Eye – Webdesign: „Und Ihre? In zehn Sekunden.“
   Beim Sichtkontakt füllt eine Geisterhand Name und Ort selbst aus und tippt Branche und Stimmung an,
   das Handy baut die Seite sichtbar auf. Danach ist der Besucher dran („Jetzt Sie“).
   Nutzt GSAP (liegt schon auf der Seite) und wd-mitmachen-szenen.js. Ohne GSAP oder bei reduzierter Bewegung: fertiger Endzustand. */
(function () {
  'use strict';
  var root = document.querySelector('[data-wdm-t]');
  if (!root) return;
  var sec = root.closest('.wdm-try') || document.body;
  var G = window.gsap;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  var Z = window.WDM_SZENEN || { svg: {}, name: {} };
  var $ = function (q, r) { return (r || root).querySelector(q); };
  var $$ = function (q, r) { return [].slice.call((r || root).querySelectorAll(q)); };

  var ph = $('[data-wdm-phone]'), pgEl = $('[data-wdm-pg]'), roll = $('[data-wdm-roll]');
  var nameI = $('[data-wdm-name]'), ortI = $('[data-wdm-ort]');
  var nmEl = $('[data-wdm-nm]'), mono = $('[data-wdm-mono]'), ortl = $('[data-wdm-ortl]'), urlEl = $('[data-wdm-url]');
  var imgEl = $('[data-wdm-img]'), stk = $('[data-wdm-sticker]'), h = $('[data-wdm-h]'), idea = $('[data-wdm-idea]'), mini = $('[data-wdm-mini]'), route = $('[data-wdm-route]');
  var real = $('[data-wdm-real]'), wa = $('[data-wdm-wa]'), mail = $('[data-wdm-mail]'), live = $('[data-wdm-live]');
  var hand = $('[data-wdm-hand]'), ring = $('.wdm-ring', hand), tel = $('[data-wdm-tel]');
  var grpB = $('[data-wdm-b]'), grpM = $('[data-wdm-m]'), dice = $('[data-wdm-dice]'), again = $('[data-wdm-again]'), tapBtn = $('[data-wdm-tap]');
  var stage = $('.wdm-t-stage');
  if (!ph || !nameI || !ortI) return;

  /* ---------- Inhalte (die Texte stammen aus der bisherigen Fassung) ---------- */
  var B = {
    handwerk: { n: 'Handwerk', h: { warm: 'Ehrliche Arbeit. Gleich um die Ecke.', edel: 'Präzision, die man sieht.', frech: 'Kaputt? Nicht mehr lange.' }, i: 'Vorher/Nachher zum Ziehen', k: 'slider', r: ['https://entwurf.falcon-eye.de/hudalla/', 'Hausmeisterservice (Name geändert)'] },
    auto: { n: 'Auto & Werkstatt', h: { warm: 'Ihr Auto ist bei uns in guten Händen.', edel: 'Glanz bis ins letzte Detail.', frech: 'Delle? Weg damit.' }, i: 'Kratzer wegwischen', k: 'wipe', r: ['https://entwurf.falcon-eye.de/beispiel/karosserie/', 'Beispiel: Karosserie Hellwig'] },
    kueche: { n: 'Küche & Wohnen', h: { warm: 'Hier wird gekocht, gelacht, gelebt.', edel: 'Ihre Küche. Auf den Millimeter.', frech: 'Raus mit der alten Küche!' }, i: 'Küche in 3D zusammenstellen', k: 'blocks', r: ['https://entwurf.falcon-eye.de/pellegrin/', 'Küchenstudio (Name geändert)'] },
    praxis: { n: 'Praxis & Wohlfühlen', h: { warm: 'Zeit für dich.', edel: 'Ankommen. Durchatmen.', frech: 'Endlich mal abschalten.' }, i: 'Atemübung zum Mitmachen', k: 'breath', r: ['https://entwurf.falcon-eye.de/verena-paul/', 'Praxis (Name geändert)'] },
    laden: { n: 'Laden & Service', h: { warm: 'Fragen Sie ruhig. Wir kennen uns aus.', edel: 'Ausgewählte Qualität.', frech: 'Reinkommen lohnt sich.' }, i: 'Schaufenster mit Live-Öffnungszeiten', k: 'sign', r: ['https://entwurf.falcon-eye.de/beispiel/waescherei/', 'Beispiel: Wäscherei Weidenhof'] },
    gastro: { n: 'Gastro & Café', h: { warm: 'Wie bei Oma. Nur mit Reservierung.', edel: 'Ein Abend, der bleibt.', frech: 'Hunger? Komm rein.' }, i: 'Speisekarte zum Umblättern', k: 'menu', r: null }
  };
  var MI = { slider: '<i></i><b></b>', wipe: '<i></i><b></b>', blocks: '<i></i><i></i><i></i>', breath: '<i></i><em>einatmen · ausatmen</em>', sign: '<i></i><em>Jetzt geöffnet</em><b></b>', menu: '<b></b><i></i>' };
  var MN = { warm: 'warm & bodenständig', edel: 'edel & ruhig', frech: 'laut & frech' };
  var FN = { warm: 'Handschrift', edel: 'Serife kursiv', frech: 'Plakat-Grotesk' };
  var MK = ['warm', 'edel', 'frech'];
  var AC = {
    handwerk: ['#E8622C', '#E8935F', '#EE6A2E'], auto: ['#D0202E', '#E0525B', '#E83A3A'], kueche: ['#B9663A', '#D79A6E', '#E48A4A'],
    praxis: ['#3F8F7A', '#7FC4AD', '#46BF9D'], laden: ['#2F6FD6', '#78A6F0', '#3D86F2'], gastro: ['#F0A31A', '#F2C15B', '#FFB627']
  };
  var DEMO = { name: 'Café Sonne', ort: 'Saarlouis' };

  var st = { b: 'gastro', m: 'warm', name: '', ort: '', demo: true, built: { name: true, ort: true, body: true } };
  var tl = null, intro = { running: false, abort: false, done: false }, userTyped = false, ghostTyping = false;

  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var enc = encodeURIComponent;
  var wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
  var slug = function (s) { return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/ß/g, 'ss').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 20) || 'ihre-seite'; };
  var dispName = function () { return st.name.trim() || (st.demo ? DEMO.name : 'Ihr Betrieb'); };
  var dispOrt = function () { return st.ort.trim() || (st.demo ? DEMO.ort : 'Ihr Ort'); };
  var initial = function (s) { var t = s.replace(/^(der|die|das)\s+/i, '').trim(); return (t.charAt(0) || 'I').toUpperCase(); };

  /* ---------- Szenen ---------- */
  function sceneEl(b) {
    var d = document.createElement('div');
    d.className = 'wdm-sc'; d.dataset.sc = b; d.innerHTML = Z.svg[b] || '';
    return d;
  }
  function setScene(b) {
    $$('.wdm-sc', imgEl).forEach(function (n) { n.remove(); });
    imgEl.insertBefore(sceneEl(b), imgEl.firstChild);
  }
  function swapScene(b) {
    var old = $$('.wdm-sc', imgEl), el = sceneEl(b);
    imgEl.insertBefore(el, stk);
    if (!G || reduce) { old.forEach(function (n) { n.remove(); }); return null; }
    return G.fromTo(el, { clipPath: 'inset(0% 0% 0% 100%)', scale: 1.18, filter: 'blur(5px)' }, {
      clipPath: 'inset(0% 0% 0% 0%)', scale: 1, filter: 'blur(0px)', duration: .8, ease: 'power3.inOut',
      onComplete: function () { old.forEach(function (n) { n.remove(); }); G.set(el, { clearProps: 'clipPath,scale,filter' }); }
    });
  }

  /* ---------- Texte im Handy ---------- */
  function wordsHTML(t) { return t.split(' ').map(function (w) { return '<span class="w"><span class="wi">' + esc(w) + '</span></span>'; }).join(' '); }
  function setH(t) { h.dataset.t = t; h.innerHTML = wordsHTML(t); }
  function setIdea(d) {
    idea.textContent = d.i;
    mini.dataset.k = d.k; mini.innerHTML = MI[d.k];
  }
  function setOrtTexts() {
    var o = dispOrt(), has = !!(st.ort.trim() || st.demo);
    ortl.textContent = o; stk.textContent = o; route.textContent = has ? 'Route nach ' + o : 'Route zu Ihnen';
  }
  function setNameTexts(typing, grew) {
    var n = dispName();
    if (typing && grew && n.length > 1) nmEl.innerHTML = esc(n.slice(0, -1)) + '<span class="c">' + esc(n.slice(-1)) + '</span>';
    else nmEl.textContent = n;
    var m = initial(n);
    if (mono.textContent !== m) { mono.textContent = m; if (G && !reduce && st.built.name) G.fromTo(mono, { scale: .4, rotate: -25 }, { scale: 1, rotate: 0, duration: .5, ease: 'back.out(3)', clearProps: 'transform' }); }
    urlEl.textContent = slug(n) + '.de';
    if (typing) { nmEl.classList.add('is-typing'); clearTimeout(setNameTexts.t); setNameTexts.t = setTimeout(function () { nmEl.classList.remove('is-typing'); }, 1100); }
  }

  /* ---------- Telemetrie, Links, Vorlese-Hinweis ---------- */
  var lastTel = {};
  function setTel(key, html, flash) {
    var li = $('[data-t="' + key + '"]', tel), b = li && $('b', li);
    if (!b) return;
    if (lastTel[key] === html) return;
    lastTel[key] = html;
    if (key === 'farbe') { b.querySelector('span').textContent = html; li.style.setProperty('--sw', html === '–' ? 'transparent' : html); }
    else b.textContent = html;
    if (flash && !reduce) { li.classList.remove('flash'); void li.offsetWidth; li.classList.add('flash'); }
  }
  function updateAux(flash) {
    var d = B[st.b], nm = st.name.trim(), ort = st.ort.trim();
    var txt = 'Hallo Falcon Eye, ich hätte gern einen kostenlosen Website-Entwurf.\nBetrieb: ' + (nm || '…') + '\nOrt: ' + (ort || '…') + '\nBranche: ' + d.n + '\nStimmung: ' + MN[st.m];
    wa.href = 'https://wa.me/4915156743442?text=' + enc(txt);
    mail.href = 'mailto:info@falcon-eye.de?subject=' + enc('Kostenloser Website-Entwurf' + (nm ? ' – ' + nm : '')) + '&body=' + enc(txt);
    if (d.r) { real.href = d.r[0]; real.target = '_blank'; real.rel = 'noopener'; real.innerHTML = 'So sieht das echt aus: <b>' + esc(d.r[1]) + '</b> →'; }
    else { real.removeAttribute('href'); real.removeAttribute('target'); real.removeAttribute('rel'); real.innerHTML = 'Gastro hatten wir noch nicht – <b>Ihre Seite wäre die erste.</b>'; }
    real.hidden = false;
    if (st.built.body) { setTel('bild', Z.name[st.b] || d.n, flash); setTel('farbe', AC[st.b][MK.indexOf(st.m)], flash); setTel('schrift', FN[st.m], flash); }
    else { setTel('bild', '–'); setTel('farbe', '–'); setTel('schrift', '–'); }
  }
  var liveT = 0;
  function announce() {
    clearTimeout(liveT);
    if (intro.running) return;
    liveT = setTimeout(function () { live.textContent = 'Vorschau: ' + dispName() + ', ' + B[st.b].n + ', ' + MN[st.m] + '.'; }, 700);
  }

  /* ---------- Seitenbummel im Handy ---------- */
  function measure() {
    var over = Math.max(0, roll.scrollHeight - pgEl.clientHeight);
    ph.style.setProperty('--roll', over + 'px');
    ph.style.setProperty('--rd', Math.max(9, over / 22).toFixed(1) + 's');
  }
  function startRoll() {
    if (reduce) return;
    ph.classList.remove('is-roll'); void ph.offsetWidth; measure(); ph.classList.add('is-roll');
  }
  function stopRoll() { ph.classList.remove('is-roll'); }

  /* ---------- Umbau: alles baut sich sichtbar um ---------- */
  function killTl() { if (tl) { var t = tl; tl = null; t.eventCallback('onComplete', null); t.progress(1); t.kill(); } }

  function buildName() {
    if (st.built.name) return;
    st.built.name = true; ph.classList.add('has-name');
    if (G && !reduce) {
      G.fromTo($$('.wdm-mono,.wdm-burg', ph), { scale: .2, opacity: 0 }, { scale: 1, opacity: 1, duration: .5, ease: 'back.out(2.6)', stagger: .1, clearProps: 'transform,opacity' });
      G.fromTo($('.wdm-top', ph), { y: -14 }, { y: 0, duration: .45, ease: 'power3.out', clearProps: 'transform' });
    }
  }
  function buildOrt() {
    if (st.built.ort) return;
    st.built.ort = true; ph.classList.add('has-ort');
    if (G && !reduce) G.fromTo(ortl, { x: -10 }, { x: 0, duration: .45, ease: 'power3.out', clearProps: 'transform' });
  }
  /* erster Aufbau von Bild, Titel, Knopf und Karten */
  function buildBody() {
    if (st.built.body) return null;
    st.built.body = true;
    var d = B[st.b];
    ph.dataset.b = st.b; ph.dataset.m = st.m;
    setScene(st.b); setH(d.h[st.m]); setIdea(d); setOrtTexts();
    ph.classList.add('has-body');
    if (!G || reduce) { measure(); return null; }
    killTl();
    var el = $('.wdm-sc', imgEl), words = $$('.wi', h), cards = $$('.wdm-card', ph), cta = $('.wdm-hero .wdm-cta', ph);
    tl = G.timeline({ onComplete: function () { tl = null; measure(); startRoll(); } });
    tl.fromTo(imgEl, { opacity: 0, scale: .86, y: 16 }, { opacity: 1, scale: 1, y: 0, duration: .5, ease: 'power3.out', clearProps: 'transform,opacity' }, 0);
    tl.fromTo(el, { clipPath: 'circle(0% at 50% 60%)', scale: 1.4, filter: 'blur(14px) brightness(1.8)' }, { clipPath: 'circle(82% at 50% 60%)', scale: 1, filter: 'blur(0px) brightness(1)', duration: 1, ease: 'power3.out', clearProps: 'clipPath,scale,filter' }, .06);
    tl.fromTo(words, { yPercent: 120, rotate: 5 }, { yPercent: 0, rotate: 0, duration: .65, ease: 'power3.out', stagger: .07, clearProps: 'transform' }, .5);
    tl.fromTo(cta, { scale: .5, opacity: 0 }, { scale: 1, opacity: 1, duration: .5, ease: 'back.out(2.6)', clearProps: 'transform,opacity' }, .95);
    tl.fromTo(cards, { y: 46, rotationX: -60, opacity: 0, transformPerspective: 500, transformOrigin: '50% 0' }, { y: 0, rotationX: 0, opacity: 1, duration: .7, ease: 'power3.out', stagger: .13, clearProps: 'transform,opacity' }, .8);
    return tl;
  }

  /* Wechsel von Branche und/oder Stimmung: alte Teile fliegen raus, neue Teile bauen sich auf */
  function apply(next) {
    var dB = next.b !== st.b, dM = next.m !== st.m;
    if (!dB && !dM) return null;
    st.b = next.b; st.m = next.m;
    var nb = st.b, nm = st.m, d = B[nb], text = d.h[nm];
    updateAux(true); announce();
    if (!st.built.body) { ph.dataset.b = nb; ph.dataset.m = nm; return null; }
    if (!G || reduce) { ph.dataset.b = nb; ph.dataset.m = nm; setScene(nb); setH(text); setIdea(d); measure(); return null; }
    killTl(); stopRoll();
    var oldWords = $$('.wi', h), cards = $$('.wdm-card', ph), cta = $('.wdm-hero .wdm-cta', ph), monoEl = $('.wdm-mono', ph);
    var tmp = document.createElement('div'); tmp.innerHTML = wordsHTML(text);
    var newWords = $$('.wi', tmp);
    var at = .26, T = { immediateRender: false, clearProps: 'transform,opacity' };
    tl = G.timeline({ onComplete: function () { tl = null; measure(); startRoll(); } });
    /* raus */
    tl.to(oldWords, { yPercent: -125, duration: .2, ease: 'power2.in', stagger: .02 }, 0);
    tl.to(cards, { opacity: 0, y: -14, duration: .2, ease: 'power2.in', stagger: .03 }, 0);
    tl.to(cta, { scale: .6, opacity: 0, duration: .18, ease: 'power2.in' }, 0);
    if (dM) tl.to(nmEl, { yPercent: -60, opacity: 0, duration: .18, ease: 'power2.in' }, 0);
    if (dB) { var sw = swapScene(nb); if (sw) tl.add(sw, 0); }
    /* tauschen */
    tl.add(function () {
      ph.dataset.b = nb; if (dM) ph.dataset.m = nm;
      h.dataset.t = text; h.textContent = '';
      while (tmp.firstChild) h.appendChild(tmp.firstChild);
      G.set(newWords, { yPercent: 125, rotate: 5 });
      if (dB) setIdea(d);
      measure();
    }, at);
    /* rein */
    tl.fromTo(newWords, { yPercent: 125, rotate: 5 }, { yPercent: 0, rotate: 0, duration: .65, ease: 'power3.out', stagger: .06, immediateRender: false, clearProps: 'transform' }, at + .04);
    if (dM) tl.fromTo(nmEl, { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .45, ease: 'power3.out', immediateRender: false, clearProps: 'transform,opacity' }, at + .04);
    tl.fromTo(cta, { scale: .6, opacity: 0 }, { scale: 1, opacity: 1, duration: .5, ease: 'back.out(2.6)', immediateRender: false, clearProps: 'transform,opacity' }, at + .26);
    tl.fromTo(cards, { rotationX: -70, y: 22, opacity: 0, transformPerspective: 500, transformOrigin: '50% 0' }, { rotationX: 0, y: 0, opacity: 1, duration: .6, ease: 'power3.out', stagger: .09, immediateRender: false, clearProps: 'transform,opacity' }, at + .1);
    if (dM) tl.fromTo(monoEl, { rotate: -90, scale: .5 }, { rotate: 0, scale: 1, duration: .55, ease: 'back.out(2.4)', immediateRender: false, clearProps: 'transform' }, at + .08);
    if (dM && nm === 'frech') tl.fromTo(stk, { scale: 0, rotate: -40 }, { scale: 1, rotate: -7, duration: .5, ease: 'back.out(3)', immediateRender: false, clearProps: 'transform' }, at + .45);
    return tl;
  }

  /* ---------- Bedienung ---------- */
  function setChecked(group, v) {
    var bs = $$('[data-v]', group), any = bs.some(function (b) { return b.dataset.v === v; });
    bs.forEach(function (b, i) {
      var on = b.dataset.v === v;
      b.setAttribute('aria-checked', on ? 'true' : 'false');
      b.tabIndex = on || (!any && i === 0) ? 0 : -1;
    });
  }
  function markUsed() {
    sec.classList.add('is-used'); sec.classList.remove('is-ready');
    ph.classList.remove('is-hint');
    if (!intro.done) { if (intro.running) abortIntro(); else finishIntro(); }
  }
  function pick(group, key) {
    group.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-v]'); if (!b) return;
      markUsed();
      var next = { b: st.b, m: st.m }; next[key] = b.dataset.v;
      setChecked(group, b.dataset.v);
      apply(next);
    });
    group.addEventListener('keydown', function (e) {
      var k = e.key; if (k !== 'ArrowRight' && k !== 'ArrowLeft' && k !== 'ArrowDown' && k !== 'ArrowUp') return;
      var bs = $$('button[data-v]', group), i = bs.findIndex(function (x) { return x.getAttribute('aria-checked') === 'true'; });
      if (i < 0) i = 0;
      var step = (k === 'ArrowRight' || k === 'ArrowDown') ? 1 : bs.length - 1;
      var n = bs[(i + step) % bs.length]; n.focus(); n.click(); e.preventDefault();
    });
  }
  pick(grpB, 'b'); pick(grpM, 'm');

  function onName() {
    if (!ghostTyping) { userTyped = true; st.demo = false; markUsed(); }
    var prev = st.name; st.name = nameI.value;
    if (!st.built.name && st.name.trim()) buildName();
    setNameTexts(true, st.name.length > prev.length);
    updateAux(false); announce();
    placeCaret(nameI);
  }
  function onOrt() {
    if (!ghostTyping) { userTyped = true; st.demo = false; markUsed(); }
    st.ort = ortI.value;
    if (!st.built.ort && st.ort.trim()) buildOrt();
    setOrtTexts();
    updateAux(false); announce();
    placeCaret(ortI);
  }
  nameI.addEventListener('input', onName);
  ortI.addEventListener('input', onOrt);
  [nameI, ortI].forEach(function (i) {
    i.addEventListener('focus', markUsed);
    i.addEventListener('pointerdown', markUsed);
  });

  var cvs = document.createElement('canvas').getContext('2d');
  function placeCaret(input) {
    var c = input.parentNode.querySelector('.wdm-caret'); if (!c || !cvs) return;
    var cs = getComputedStyle(input);
    cvs.font = cs.fontWeight + ' ' + cs.fontSize + ' ' + cs.fontFamily;
    c.style.setProperty('--cx', Math.ceil(cvs.measureText(input.value).width) + 'px');
  }

  function surprise() {
    markUsed();
    var bk = Object.keys(B), nb, nm;
    do { nb = bk[Math.random() * bk.length | 0]; nm = MK[Math.random() * 3 | 0]; } while (nb === st.b && nm === st.m);
    dice.classList.remove('is-roll'); void dice.offsetWidth; dice.classList.add('is-roll');
    setChecked(grpB, nb); setChecked(grpM, nm);
    apply({ b: nb, m: nm });
  }
  dice.addEventListener('click', surprise);
  tapBtn.addEventListener('click', surprise);
  $$('a.btn', root).forEach(function (a) { a.addEventListener('pointerdown', markUsed); });

  /* ---------- Geisterhand ---------- */
  function handMove(target, dx, dy, dur) {
    return new Promise(function (res) {
      var r = target.getBoundingClientRect(), s = root.getBoundingClientRect();
      G.to(hand, { x: r.left - s.left + r.width * dx, y: r.top - s.top + r.height * dy, opacity: 1, duration: dur, ease: 'power2.inOut', onComplete: res });
    });
  }
  function handTap(target) {
    ring.classList.remove('go'); void ring.offsetWidth; ring.classList.add('go');
    G.fromTo(hand, { scale: 1 }, { scale: .86, duration: .09, yoyo: true, repeat: 1, ease: 'power1.inOut' });
    if (target) { target.classList.add('is-press'); setTimeout(function () { target.classList.remove('is-press'); }, 220); }
  }
  async function typeIn(input, text, per) {
    input.classList.add('is-ghost'); placeCaret(input);
    for (var i = 1; i <= text.length; i++) {
      if (intro.abort) { input.classList.remove('is-ghost'); return false; }
      input.value = text.slice(0, i);
      ghostTyping = true; input.dispatchEvent(new Event('input', { bubbles: true })); ghostTyping = false;
      await wait(per * (.8 + Math.random() * .5));
    }
    await wait(110);
    input.classList.remove('is-ghost');
    return true;
  }
  var chipEl = function (group, v) { return $('[data-v="' + v + '"]', group); };

  function finishIntro() {
    /* Endzustand sicherstellen, Geisterwerte entfernen, „Jetzt Sie“ zeigen */
    intro.running = false; intro.done = true;
    disarm();
    if (G) { G.killTweensOf(hand); G.to(hand, { opacity: 0, duration: .3 }); }
    if (!userTyped) {
      nameI.value = ''; ortI.value = ''; st.name = ''; st.ort = ''; st.demo = true;
    }
    [nameI, ortI].forEach(function (i) { i.classList.remove('is-ghost'); });
    if (!st.built.name) { st.built.name = true; ph.classList.add('has-name'); }
    if (!st.built.ort) { st.built.ort = true; ph.classList.add('has-ort'); }
    if (!st.built.body) buildBody();
    setNameTexts(false); setOrtTexts();
    setChecked(grpB, st.b); setChecked(grpM, st.m);
    updateAux(false); announce();
    measure();
    if (!tl) startRoll();
    if (!sec.classList.contains('is-used')) { sec.classList.add('is-ready'); ph.classList.add('is-hint'); setTimeout(function () { ph.classList.remove('is-hint'); }, 7000); }
    clearTimeout(liveT);
    liveT = setTimeout(function () { live.textContent = 'Vorschau: ' + dispName() + ', ' + B[st.b].n + ', ' + MN[st.m] + '.'; }, 300);
  }
  function abortIntro() { intro.abort = true; finishIntro(); }

  /* Leinwand leeren: nur das Gerüst bleibt stehen */
  function resetSkeleton() {
    killTl(); stopRoll();
    st.built = { name: false, ort: false, body: false };
    ph.classList.remove('has-name', 'has-ort', 'has-body', 'is-hint');
    st.b = 'gastro'; st.m = 'warm'; ph.dataset.b = 'gastro'; ph.dataset.m = 'warm';
    nameI.value = ''; ortI.value = ''; st.name = ''; st.ort = ''; st.demo = true;
    setScene('gastro'); setH(B.gastro.h.warm); setIdea(B.gastro);
    setNameTexts(false); setOrtTexts();
    setChecked(grpB, null); setChecked(grpM, 'warm');
    lastTel = {}; updateAux(false);
  }

  async function runIntro() {
    if (intro.running || intro.done || reduce || !G) return;
    intro.running = true; intro.abort = false;
    try { document.fonts.load('italic 700 16px "Playfair Display"'); document.fonts.load('900 16px "Big Shoulders Display"'); document.fonts.load('700 16px "Caveat"'); } catch (e) { }
    if (st.built.body || st.built.name) resetSkeleton();
    var s = root.getBoundingClientRect();
    G.set(hand, { x: s.width * .74, y: s.height * .95, opacity: 0, scale: 1 });
    await wait(120); if (intro.abort) return;
    // 1) Name
    await handMove(nameI, .16, .62, .65); if (intro.abort) return;
    handTap(); await wait(150);
    if (!(await typeIn(nameI, DEMO.name, 50))) return;
    await wait(130); if (intro.abort) return;
    // 2) Ort
    await handMove(ortI, .2, .62, .45); if (intro.abort) return;
    handTap(); await wait(120);
    if (!(await typeIn(ortI, DEMO.ort, 50))) return;
    await wait(110); if (intro.abort) return;
    // 3) Branche: Café
    var cb = chipEl(grpB, 'gastro');
    if (grpB.scrollWidth > grpB.clientWidth + 2) { try { grpB.scrollTo({ left: grpB.scrollWidth, behavior: 'smooth' }); } catch (e) { grpB.scrollLeft = grpB.scrollWidth; } await wait(340); }
    await handMove(cb, .5, .55, .5); if (intro.abort) return;
    handTap(cb); await wait(90);
    setChecked(grpB, 'gastro');
    var t1 = buildBody(); updateAux(true);
    await wait(Math.max(900, (t1 ? t1.duration() : 1.2) * 1000 - 350)); if (intro.abort) return;
    // 4) Stimmung: Edel, Frech, zurück zu Warm
    var seq = ['edel', 'frech', 'warm'];
    for (var i = 0; i < seq.length; i++) {
      var mb = chipEl(grpM, seq[i]);
      await handMove(mb, .5, .55, i ? .4 : .5); if (intro.abort) return;
      handTap(mb); await wait(80);
      setChecked(grpM, seq[i]);
      var t = apply({ b: st.b, m: seq[i] });
      await wait(i === seq.length - 1 ? ((t ? t.duration() : 1) * 1000 - 100) : 900); if (intro.abort) return;
    }
    // 5) Übergabe an den Besucher
    await handMove(nameI, .55, .62, .5); if (intro.abort) return;
    handTap(); await wait(160);
    finishIntro();
  }

  /* ---------- Start beim Sichtkontakt ---------- */
  var armed = false, since = 0, timer = 0, ticking = false;
  var nameField = nameI.closest('.wdm-f') || nameI;
  function vis(el, frac) {
    var r = el.getBoundingClientRect(), vh = innerHeight;
    var v = Math.min(r.bottom, vh - 60) - Math.max(r.top, 60);
    return v >= Math.min(r.height * frac, vh * .5) - 1;
  }
  /* 2 = Handy und Eingabe im Bild, 1 = nur das Handy */
  function level() { return vis(ph, .62) ? (vis(nameField, .95) ? 2 : 1) : 0; }
  function check() {
    ticking = false; clearTimeout(timer); timer = 0;
    if (intro.done || intro.running) return;
    var l = level();
    if (!l) { since = 0; return; }
    if (!since) since = performance.now();
    var left = (l === 2 ? 380 : 1800) - (performance.now() - since);
    if (left <= 0) { disarm(); runIntro(); return; }
    timer = setTimeout(check, left + 20);
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(check); } }
  function disarm() { armed = false; since = 0; clearTimeout(timer); removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll); }
  function arm() {
    if (armed || intro.done || intro.running) return; armed = true;
    addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll, { passive: true }); check();
  }

  again.addEventListener('click', function () {
    if (!G || reduce || intro.running) return;
    intro.done = false; intro.abort = false; userTyped = false;
    sec.classList.remove('is-ready', 'is-used');
    runIntro();
  });

  /* ---------- Sichtbarkeit, Neigung, Größe ---------- */
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        sec.classList.toggle('wdm-off', !e.isIntersecting);
        if (e.isIntersecting) { measure(); if (!intro.done && !intro.running && !reduce && G) arm(); }
        else { disarm(); if (intro.running) abortIntro(); }
      });
    }, { rootMargin: '10% 0px 10% 0px', threshold: 0 }).observe(root);
  } else if (G && !reduce) arm();

  if (fine && !reduce) {
    var raf = 0, tx = 0, ty = 0;
    stage.addEventListener('pointermove', function (e) {
      var r = ph.getBoundingClientRect();
      tx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width * .9)));
      ty = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (r.height * .7)));
      if (!raf) raf = requestAnimationFrame(function () { raf = 0; ph.style.setProperty('--ry', (tx * 9).toFixed(2) + 'deg'); ph.style.setProperty('--rx', (-ty * 6).toFixed(2) + 'deg'); ph.style.setProperty('--gx', (tx * 40).toFixed(1) + '%'); });
    });
    stage.addEventListener('pointerleave', function () { ph.style.setProperty('--ry', '0deg'); ph.style.setProperty('--rx', '0deg'); ph.style.setProperty('--gx', '0%'); });
  }
  addEventListener('resize', function () { measure(); if (document.activeElement === nameI) placeCaret(nameI); }, { passive: true });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);

  /* Grundzustand: mit Bewegung zuerst das leere Gerüst (die Geisterhand baut es beim Sichtkontakt auf),
     ohne Bewegung die fertig gebaute Beispielseite „Café Sonne“. */
  setScene('gastro'); setH(B.gastro.h.warm); setIdea(B.gastro); setOrtTexts(); setNameTexts(false);
  setChecked(grpM, 'warm');
  if (G && !reduce) { resetSkeleton(); }
  else { setChecked(grpB, 'gastro'); updateAux(false); measure(); sec.classList.add('is-ready'); }
})();
