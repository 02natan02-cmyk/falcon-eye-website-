/* Falcon Eye – Webdesign-Landingpage, Abschnitt „Für Vereine“ (#vereine)
   Das Schwarze Brett wird zur Website: Zettel antippen → er fliegt ins Handy → dort läuft
   der passende Teil der echten Website des Flight Club Saar (Mitschnitt).
   Startet erst in der Nähe (IntersectionObserver), keine Schleifen außerhalb des Bildes. */
(function () {
  'use strict';
  var sec = document.getElementById('vereine');
  if (!sec || !('querySelector' in document)) return;
  var $ = function (q, el) { return (el || sec).querySelector(q); };
  var $$ = function (q, el) { return [].slice.call((el || sec).querySelectorAll(q)); };

  var stage = $('[data-vr-stage]'), board = $('.vr-board'), notes = $$('.vr-note');
  var phone = $('[data-vr-phone]'), phoneSr = $('[data-vr-phone-sr]'), scr = $('.vr-scr');
  var cap = $('.vr-cap'), capK = $('[data-vr-cap-k]'), capT = $('[data-vr-cap-t]'), capD = $('[data-vr-cap-d]'), capGo = $('[data-vr-cap-go]');
  var countEl = $('[data-vr-n]'), segs = $$('.vr-seg li'), resetBtn = $('[data-vr-reset]'), hint = $('.vr-hint');
  var lapVid = $('.vr-laptop video');
  if (!stage || !board || !notes.length || !phone) return;

  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var G = typeof window.gsap !== 'undefined' ? window.gsap : null;
  var motion = !reduce && !!G;
  var BASE = 'https://02natan02-cmyk.github.io/flight-club-saar-website/';

  /* Nur, was die Vereinsseite wirklich hat (Stand 24.10.2026) */
  var F = {
    home: { k: 'flight-club-saar · Startseite', t: 'Brille an. Welt aus.', d: 'Echte Mitschnitte aus der neuen Website des Vereins. Jeder Zettel am Brett ist dort ein eigener Teil.', u: '', go: 'Website ansehen' },
    halle: { k: 'flight-club-saar · Hallenfliegen', t: 'Hallenfliegen-Termine', d: 'Alle Abende mit Countdown, Kalendereintrag und Route per Klick.', u: 'hallenfliegen.html' },
    spots: { k: 'flight-club-saar · Spots', t: 'Spot-Karte', d: 'Ein Radar mit allen freigegebenen Spots, Route per Klick und Spot-Vorschlag.', u: 'spots.html' },
    wissen: { k: 'flight-club-saar · Wissen', t: 'FPV-Wissen und Technik-Hilfe', d: 'Die Drohne in 3D zum Auseinandernehmen, dazu der FPV-Doktor für Technikfragen.', u: 'wissen.html' },
    markt: { k: 'flight-club-saar · Biete/Suche', t: 'Biete/Suche-Wand', d: 'Kopter, Brillen und Teile von Piloten für Piloten, vom Vorstand geprüft.', u: 'markt.html' },
    mitglied: { k: 'flight-club-saar · Mitglied werden', t: 'Mitglied werden', d: 'Der Antrag online in fünf Schritten, mit SEPA-Lastschrift und eigener Mitgliedskarte.', u: 'mitglied.html' },
    satzung: { k: 'flight-club-saar · Satzung', t: 'Satzung als PDF', d: 'Die Satzung zum Lesen und Herunterladen, mit einem Tipp.', u: 'docs/Satzung_Flight_Club_Saar.pdf', go: 'Satzung öffnen' },
    reels: { k: 'flight-club-saar · Reels', t: 'Reel-Wand', d: 'Die Clips der Piloten auf einer Wand, dazu die Zahlen der Kanäle.', u: 'index.html#reels' },
    crew: { k: 'flight-club-saar · Crew', t: 'Crew-Bereich mit Clip-Studio', d: 'Video wählen, Vereinslogo und Sticker drauf, fertig fürs Reel.', u: 'crew.html' }
  };

  /* Hallenfliegen: immer der nächste echte Termin (Wintersaison 2026 laut Vereinsseite) */
  (function () {
    var T = [['2026-10-17', 'Eiweiler'], ['2026-11-14', 'Eiweiler'], ['2026-12-05', 'Holz'], ['2026-12-12', 'Holz'], ['2026-12-19', 'Eiweiler']];
    var WD = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    var now = new Date(), today = new Date(now.getFullYear(), now.getMonth(), now.getDate()), hit = null;
    for (var i = 0; i < T.length; i++) {
      var p = T[i][0].split('-'), d = new Date(+p[0], +p[1] - 1, +p[2]);
      if (d >= today) { hit = [d, T[i][1]]; break; }
    }
    var dEl = $('[data-vr-date]'), pEl = dEl && dEl.nextElementSibling;
    if (!dEl) return;
    if (hit) {
      var dd = ('0' + hit[0].getDate()).slice(-2), mm = ('0' + (hit[0].getMonth() + 1)).slice(-2);
      dEl.innerHTML = '<span class="vr-wd">' + WD[hit[0].getDay()] + ', </span>' + dd + '.' + mm + '.';
      if (pEl) pEl.textContent = '18 bis 21 Uhr · ' + hit[1];
    } else {
      dEl.textContent = 'Winterpause';
      if (pEl) pEl.textContent = 'Neue Termine online';
    }
  })();

  var clips = {};
  $$('.vr-clip').forEach(function (c) { clips[c.getAttribute('data-c')] = c; });
  var current = 'home', inView = false, started = false, touched = false, autoT = 0, swapT = 0;

  function vidOf(c) { return c ? c.querySelector('video') : null; }
  function play(v, holder) {
    if (!v || reduce || !inView) return;
    if (!v.getAttribute('src') && v.getAttribute('data-src')) v.setAttribute('src', v.getAttribute('data-src'));
    if (!v._vr) {
      v._vr = 1;
      v.addEventListener('playing', function () { if (holder) holder.classList.add('playing'); });
      v.addEventListener('error', function () { if (holder) holder.classList.remove('playing'); });
    }
    try { var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); } catch (e) {}
  }
  function pause(v) { if (v) try { v.pause(); } catch (e) {} }
  function pauseAll() { $$('video').forEach(pause); }
  function resume() {
    play(vidOf(clips[current]), clips[current]);
    if (lapVid && window.innerWidth > 760) play(lapVid, null);
  }

  function restart(el, cls) { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }
  function show(k) {
    if (!F[k]) return;
    current = k;
    Object.keys(clips).forEach(function (n) {
      var c = clips[n], on = n === k;
      c.classList.toggle('on', on);
      if (on) play(vidOf(c), c); else pause(vidOf(c));
    });
    var f = F[k], url = BASE + f.u;
    capK.textContent = f.k; capT.textContent = f.t; capD.textContent = f.d;
    capGo.firstChild.nodeValue = (f.go || 'Diesen Teil ansehen') + ' ';
    capGo.href = url; phone.href = url;
    phoneSr.textContent = 'Website des Flight Club Saar in neuem Tab öffnen: ' + f.t;
    notes.forEach(function (n) { n.classList.toggle('is-active', n.getAttribute('data-k') === k); });
    if (!reduce) {
      restart(phone, 'is-swap'); restart(cap, 'swap');
      clearTimeout(swapT); swapT = setTimeout(function () { phone.classList.remove('is-swap'); }, 950);
    }
  }

  function update() {
    var n = notes.filter(function (x) { return x.classList.contains('is-gone'); }).length;
    countEl.textContent = n;
    segs.forEach(function (s, i) { s.classList.toggle('on', i < n); });
    resetBtn.hidden = n < 4;
    sec.classList.toggle('is-done', n === notes.length);
  }

  /* Hinweis „Zettel antippen“ am nächsten Zettel */
  function placeHint() {
    if (!hint || !hint.classList.contains('on')) return;
    var t = notes.filter(function (x) { return !x.classList.contains('is-gone'); })[0];
    if (!t) { hint.classList.remove('on'); return; }
    var bw = board.clientWidth, hw = hint.offsetWidth || 150;
    var cx = t.offsetLeft + t.offsetWidth / 2, top = t.offsetTop + t.offsetHeight * 0.58;
    cx = Math.max(hw / 2 + 6, Math.min(bw - hw / 2 - 6, cx));
    hint.style.left = cx + 'px'; hint.style.top = top + 'px';
  }
  function showHint() { if (touched || !hint) return; hint.classList.add('on'); placeHint(); }
  function hideHint() { if (hint) hint.classList.remove('on'); }

  /* Zettel fliegt vom Brett ins Handy */
  function rel(el) {
    var r = el.getBoundingClientRect(), s = stage.getBoundingClientRect();
    return { x: r.left - s.left, y: r.top - s.top, w: r.width, h: r.height };
  }
  function land(note) { update(); show(note.getAttribute('data-k')); }
  function launch(note) {
    var k = note.getAttribute('data-k');
    if (note.classList.contains('is-gone')) { show(k); return; }
    if (!motion) { note.classList.add('is-gone'); land(note); return; }
    var paper = $('.vr-paper', note), a = rel(note), b = rel(scr);
    var wrap = document.createElement('div');
    wrap.className = 'vr-fly ' + (note.className.match(/\bn-\w+/) || [''])[0];
    wrap.setAttribute('aria-hidden', 'true');
    wrap.style.cssText = 'left:' + a.x + 'px;top:' + a.y + 'px;width:' + a.w + 'px;height:' + a.h + 'px';
    var clone = paper.cloneNode(true);
    clone.style.transition = 'none';
    wrap.appendChild(clone);
    stage.appendChild(wrap);
    note.classList.remove('is-lock');
    note.classList.add('is-gone');
    var dx = (b.x + b.w / 2) - (a.x + a.w / 2), dy = (b.y + b.h * 0.44) - (a.y + a.h / 2);
    var s = Math.min(1.1, (b.w * 0.66) / a.w), spin = (Math.random() * 16 - 8);
    var tl = G.timeline({ onComplete: function () { wrap.parentNode && wrap.parentNode.removeChild(wrap); } });
    tl.to(wrap, { y: -16, scale: 1.12, rotation: spin, duration: 0.2, ease: 'power2.out' })
      .to(wrap, { x: dx, duration: 0.8, ease: 'power2.inOut' })
      .to(wrap, { y: dy, duration: 0.8, ease: 'back.in(1.3)' }, '<')
      .to(wrap, { scale: s, rotation: 0, duration: 0.8, ease: 'power1.in' }, '<')
      .to(wrap, { scale: s * 0.55, opacity: 0, duration: 0.18, ease: 'power2.in' }, '>-0.1')
      .add(function () { land(note); }, '-=0.12');
  }

  function onNote(e) {
    var note = e.currentTarget;
    if (!touched) { touched = true; clearTimeout(autoT); notes.forEach(function (n) { n.classList.remove('is-lock'); }); hideHint(); }
    launch(note);
  }
  notes.forEach(function (n) { n.addEventListener('click', onNote); });

  resetBtn.addEventListener('click', function () {
    notes.forEach(function (n) { n.classList.remove('is-gone', 'is-active'); });
    update(); show('home');
    if (motion) {
      G.fromTo(notes, { y: -28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.5)', stagger: 0.05, clearProps: 'transform,opacity' });
    }
    try { notes[0].focus({ preventScroll: true }); } catch (e) { notes[0].focus(); }
  });

  /* „Vereinsseite anfragen“: Formular gleich passend vorbelegen */
  var ask = $('[data-vr-ask]');
  if (ask) ask.addEventListener('click', function () {
    var f = document.getElementById('anfrage'); if (!f) return;
    var br = f.elements.branche, msg = f.elements.nachricht;
    if (br && !br.value) br.value = 'Verein';
    if (msg && !msg.value.trim()) msg.value = 'Wir sind ein Verein und hätten gern eine Website wie die vom Flight Club Saar.';
    setTimeout(function () { var nm = f.elements.name; if (nm && !nm.value) { try { nm.focus({ preventScroll: true }); } catch (e) {} } }, reduce ? 80 : 1250);
  });

  /* Auftritt: Zettel werden angepinnt, dann fliegt der erste von selbst (Selbst-Impuls).
     Der Flug startet erst, wenn Brett UND Handy im Bild sind – sonst landet er unbemerkt. */
  var pinned = false, phoneSeen = false, autoDone = false;
  function autoFly() {
    if (autoDone || touched || !pinned || !phoneSeen) return;
    autoDone = true;
    var first = notes.filter(function (x) { return !x.classList.contains('is-gone'); })[0];
    if (!first) return;
    first.classList.add('is-lock');
    autoT = setTimeout(function () {
      if (touched) { first.classList.remove('is-lock'); return; }
      launch(first);
      autoT = setTimeout(showHint, 1300);
    }, 950);
  }
  function start() {
    started = true;
    if (!motion) return;
    var pins = $$('.vr-pin, .vr-tape, .vr-staple');
    G.fromTo(notes, { y: -34, opacity: 0, scale: 1.06 }, {
      y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out', stagger: { each: 0.07, from: 'start' }, clearProps: 'transform,opacity',
      onComplete: function () { pinned = true; autoFly(); }
    });
    G.fromTo(pins, { scale: 0 }, { scale: 1, duration: 0.35, ease: 'back.out(3)', stagger: 0.07, delay: 0.32, clearProps: 'transform' });
  }

  function prepare() {
    /* Standbilder im Handy schon laden, damit beim Wechsel nie ein schwarzer Bildschirm aufblitzt */
    $$('.vr-clip img').forEach(function (im) { if (im.loading === 'lazy') im.loading = 'eager'; });
    if (motion) {
      sec.classList.add('is-moving');
      G.set(notes, { opacity: 0 });
    } else {
      /* Ruhiger Endzustand: der erste Zettel ist schon online, das Handy zeigt ihn */
      notes[0].classList.add('is-gone');
      update(); show('halle');
      if (hint) { hint.classList.add('on'); placeHint(); }
    }
  }

  if (!('IntersectionObserver' in window)) { inView = true; phoneSeen = true; prepare(); start(); resume(); return; }
  var near = new IntersectionObserver(function (es) {
    if (es.some(function (e) { return e.isIntersecting; })) { near.disconnect(); prepare(); vis.observe(stage); boardIO.observe(board); phoneIO.observe(phone); }
  }, { rootMargin: '50% 0px 50% 0px' });
  var vis = new IntersectionObserver(function (es) {
    es.forEach(function (e) { inView = e.isIntersecting; if (inView) resume(); else pauseAll(); });
  }, { threshold: [0] });
  var boardIO = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (!started && e.intersectionRatio >= 0.35) { boardIO.disconnect(); start(); } });
  }, { threshold: [0, 0.35, 0.7] });
  var phoneIO = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.intersectionRatio >= 0.4) { phoneSeen = true; phoneIO.disconnect(); autoFly(); } });
  }, { threshold: [0, 0.4, 0.7] });
  near.observe(sec);
  addEventListener('resize', function () { placeHint(); }, { passive: true });
})();
