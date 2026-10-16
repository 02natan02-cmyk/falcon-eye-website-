/* Küchenstudio Erbelding – v10: Rundgang, Details, Merkliste, BORA X BO 3D, Kochfeldabzug (Entwurf Falcon Eye) */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var WA = 'https://wa.me/491745181818?text=';
  var MAIL = 'kuechenstudio-erbelding@t-online.de';
  var mq = function (q) { return window.matchMedia(q).matches; };
  var clamp = function (v, a, b) { return Math.min(b, Math.max(a, v)); };
  function scrollToY(y) { var L = window.__lenis; if (L) L.scrollTo(y, { duration: 1.2 }); else window.scrollTo({ top: y, behavior: RM ? 'auto' : 'smooth' }); }

  /* ================= Merkliste ================= */
  var Merk = (function () {
    var KEY = 'erb-merkliste', list = [];
    try { list = JSON.parse(localStorage.getItem(KEY) || '[]') || []; } catch (e) { list = []; }
    var fab = document.createElement('button'); fab.type = 'button'; fab.className = 'merk-fab'; fab.setAttribute('aria-haspopup', 'dialog');
    fab.innerHTML = '<span>Meine Merkliste</span><b>0</b>';
    var pan = document.createElement('div'); pan.className = 'merk-pan'; pan.hidden = true; pan.setAttribute('role', 'dialog'); pan.setAttribute('aria-label', 'Merkliste');
    document.body.appendChild(fab); document.body.appendChild(pan);
    function save() { try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {} }
    function msg() { return 'Hallo Frau Erbelding,\n\nich habe mir auf Ihrer Website diese Details für meine Küche gemerkt:\n' + list.map(function (x) { return '• ' + x; }).join('\n') + '\n\nKönnen wir darüber sprechen?\n\nViele Grüße'; }
    function render() {
      $('b', fab).textContent = list.length; fab.classList.toggle('on', list.length > 0);
      if (!list.length) pan.hidden = true;
      pan.innerHTML = '<h3>Ihre Merkliste</h3><p class="small">Schicken Sie die Liste an Barbara – sie bringt die passenden Muster zum Termin mit.</p><ul>' +
        list.map(function (x, i) { return '<li><span>' + x.replace(/</g, '&lt;') + '</span><button type="button" data-rm="' + i + '" aria-label="' + x.replace(/"/g, '') + ' entfernen">×</button></li>'; }).join('') +
        '</ul><div class="ctas"><a class="btn btn-wa sm" target="_blank" rel="noopener" href="' + WA + encodeURIComponent(msg()) + '">Per WhatsApp an Barbara</a><a class="btn btn-line sm" href="mailto:' + MAIL + '?subject=' + encodeURIComponent('Meine Merkliste von der Website') + '&body=' + encodeURIComponent(msg()) + '">Per E-Mail</a><button type="button" class="btn btn-line sm" data-clear>Liste leeren</button></div>';
      $$('[data-merk]').forEach(function (b) { b.setAttribute('aria-pressed', list.indexOf(b.dataset.merk) > -1 ? 'true' : 'false'); });
    }
    function toggle(x) {
      var i = list.indexOf(x); if (i > -1) list.splice(i, 1); else list.push(x);
      save(); render(); fab.classList.remove('bump'); void fab.offsetWidth; fab.classList.add('bump');
    }
    fab.addEventListener('click', function () { pan.hidden = !pan.hidden; });
    pan.addEventListener('click', function (e) {
      var r = e.target.closest('[data-rm]'); if (r) { list.splice(+r.dataset.rm, 1); save(); render(); }
      if (e.target.closest('[data-clear]')) { list = []; save(); render(); }
    });
    document.addEventListener('click', function (e) { var b = e.target.closest('[data-merk]'); if (b) { e.stopPropagation(); toggle(b.dataset.merk); } else if (!pan.hidden && !e.target.closest('.merk-pan,.merk-fab')) pan.hidden = true; }, true);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') pan.hidden = true; });
    render();
    return { render: render };
  })();

  /* ================= Rundgang ================= */
  (function () {
    var sec = $('#ausstellung'), stage = $('[data-ausst]'); if (!stage) return;
    var hs = $$('.hs', stage), cards = $$('[data-hsc]', stage), pop = $('[data-hspop]', stage), tabs = $$('[data-hst]', sec);
    var spot = $('[data-auspot]', stage), sc = $('[data-auscroll]', stage), img = $('[data-auimg] > img', stage), prog = $('[data-auprog]', sec);
    var glass = $('[data-glass-img]', stage), num = $('[data-hsnum]', pop), tourBtn = $('[data-tour]', sec);
    var cur = -1, seen = {}, tour = 0, N = hs.length;
    var back = document.createElement('div'); back.className = 'hs-back'; document.body.appendChild(back);
    stage.style.setProperty('--lc', '#ffc983'); stage.style.setProperty('--lo', '.4');
    function isMob() { return mq('(max-width:760px)'); }
    function open(i, fromTour) {
      if (!fromTour) stopTour();
      i = (i + N) % N; cur = i;
      var h = hs[i], x = parseFloat(h.style.left), y = parseFloat(h.style.top);
      cards.forEach(function (c) { c.hidden = +c.dataset.hsc !== i; });
      hs.forEach(function (b, j) { b.classList.toggle('on', j === i); b.setAttribute('aria-expanded', j === i ? 'true' : 'false'); });
      tabs.forEach(function (b, j) { b.classList.toggle('on', j === i); });
      seen[i] = 1; h.classList.add('seen'); tabs[i] && tabs[i].classList.add('seen');
      var n = Object.keys(seen).length;
      prog.innerHTML = n >= N ? '<b>Alle ' + N + ' Details entdeckt</b> – jetzt live ansehen?' : '<b>' + n + ' von ' + N + '</b> Details entdeckt';
      num.textContent = (i + 1) + ' / ' + N;
      pop.classList.toggle('left', x > 52); pop.classList.add('on'); document.body.classList.add('hs-open');
      spot.style.setProperty('--sx', x + '%'); spot.style.setProperty('--sy', y + '%');
      img.style.setProperty('--ox', x + '%'); img.style.setProperty('--oy', y + '%');
      sec.classList.add('focus');
      stage.classList.toggle('sock-show', h.dataset.hs && cards[i].querySelector('[data-sock]') !== null);
      if (cards[i].querySelector('[data-sock]') && !stage.classList.contains('sock-up')) setTimeout(function () { if (cur === i) setSock(true); }, 650);
      if (isMob()) {
        back.classList.add('on');
        var sr = stage.getBoundingClientRect(); if (Math.abs(sr.top - 64) > 30) scrollToY(sr.top + scrollY - 64);
        var w = sc.scrollWidth, vw = sc.clientWidth; sc.scrollTo({ left: clamp(x / 100 * w - vw / 2, 0, w - vw), behavior: RM ? 'auto' : 'smooth' });
      }
      var cardScroll = cards[i]; cardScroll.scrollTop = 0;
      if (tabs[i] && tabs[i].parentNode) { var tp = tabs[i].parentNode; tp.scrollTo({ left: tabs[i].offsetLeft - tp.clientWidth / 2 + tabs[i].clientWidth / 2, behavior: RM ? 'auto' : 'smooth' }); }
    }
    function close() {
      cur = -1; pop.classList.remove('on'); document.body.classList.remove('hs-open'); sec.classList.remove('focus'); back.classList.remove('on'); stage.classList.remove('sock-show');
      hs.forEach(function (b) { b.classList.remove('on'); b.setAttribute('aria-expanded', 'false'); }); tabs.forEach(function (b) { b.classList.remove('on'); });
    }
    function setSock(on) { stage.classList.toggle('sock-up', on); $$('[data-sock]', stage).forEach(function (b) { b.textContent = on ? 'Steckdose versenken' : 'Steckdose ausfahren'; b.setAttribute('aria-pressed', on ? 'true' : 'false'); }); }
    hs.forEach(function (b, i) { b.setAttribute('aria-expanded', 'false'); b.addEventListener('click', function (e) { e.stopPropagation(); cur === i ? close() : open(i); }); });
    tabs.forEach(function (b, i) { b.addEventListener('click', function () { open(i); if (isMob()) return; var r = stage.getBoundingClientRect(); if (r.top < 0 || r.bottom > innerHeight) scrollToY(r.top + scrollY - 90); }); });
    $('[data-hsprev]', pop).addEventListener('click', function () { open(cur - 1); });
    $('[data-hsnext]', pop).addEventListener('click', function () { open(cur + 1); });
    $('.hs-x', pop).addEventListener('click', function () { stopTour(); close(); });
    back.addEventListener('click', function () { stopTour(); close(); });
    stage.addEventListener('click', function (e) { if (!e.target.closest('.hs-pop,.hs') && cur > -1) { stopTour(); close(); } });
    document.addEventListener('keydown', function (e) { if (cur < 0) return; if (e.key === 'Escape') { stopTour(); close(); } if (e.key === 'ArrowRight' && e.target.closest && !e.target.closest('input')) open(cur + 1); if (e.key === 'ArrowLeft' && e.target.closest && !e.target.closest('input')) open(cur - 1); });
    /* Glasfarben */
    var pre = {};
    $$('.sw-row', sec).filter(function (r) { return r.querySelector('.gsw'); }).forEach(function (row) {
      var nm = document.createElement('div'); nm.className = 'sw-name'; row.parentNode.insertBefore(nm, row.nextSibling);
      var lab = row.querySelector('[data-light]') ? 'Licht' : 'Glasfarbe';
      var up = function (b) { nm.innerHTML = lab + ': <b>' + b.textContent.trim() + '</b>'; };
      $$('button', row).forEach(function (b) { b.title = b.textContent.trim(); b.addEventListener('click', function () { up(b); }); });
      var b0 = row.querySelector('.on') || row.querySelector('button'); if (b0) up(b0);
    });
        $$('[data-glass]', stage).forEach(function (b) {
      b.addEventListener('click', function () {
        stopTour(); var k = b.dataset.glass; var fg = $('[data-hsc] .hc-fig img[src*="au/glas"]', sec); if (fg) fg.src = 'img/au/glas_' + k + '.webp';
        $$('[data-glass]', stage).forEach(function (x) { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        if (k === 'rot') { glass.classList.remove('on'); return; }
        var src = 'img/aus_glas_' + k + '.webp';
        if (glass.getAttribute('src') === src) { glass.classList.add('on'); return; }
        glass.classList.remove('on');
        var im = new Image(); im.onload = function () { glass.src = src; requestAnimationFrame(function () { glass.classList.add('on'); }); }; im.src = src;
      });
    });
    hs.forEach(function (h) { h.addEventListener('pointerenter', function () { if (pre.g) return; pre.g = 1; ['petrol', 'salbei', 'creme', 'anthrazit', 'senf', 'himmel'].forEach(function (k) { var i = new Image(); i.src = 'img/aus_glas_' + k + '.webp'; }); }, { once: true }); });
    /* Lichtfarbe */
    var LC = { warm: ['#ffc983', '.55'], neutral: ['#fff1d8', '.5'], kalt: ['#d7e6ff', '.55'], aus: ['#2a2f38', '.75'] };
    $$('[data-light]', stage).forEach(function (b) {
      b.addEventListener('click', function () {
        stopTour(); var k = b.dataset.light;
        $$('[data-light]', stage).forEach(function (x) { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        stage.style.setProperty('--lc', LC[k][0]); stage.style.setProperty('--lo', LC[k][1]); stage.setAttribute('data-light', k);
      });
    });
    $$('[data-sock]', stage).forEach(function (b) { b.addEventListener('click', function () { stopTour(); setSock(!stage.classList.contains('sock-up')); }); });
    /* Rundgang automatisch */
    function stopTour() { if (!tour) return; clearInterval(tour); tour = 0; tourBtn.classList.remove('on'); tourBtn.lastChild.textContent = 'Rundgang fortsetzen'; }
    tourBtn.addEventListener('click', function () {
      if (tour) { stopTour(); return; }
      var r = stage.getBoundingClientRect(); if (r.top < 60 || r.bottom > innerHeight) scrollToY(r.top + scrollY - (isMob() ? 70 : 100));
      var i = cur < 0 || cur >= N - 1 ? 0 : cur + 1; open(i, true);
      tourBtn.classList.add('on'); tourBtn.lastChild.textContent = 'Rundgang pausieren';
      tour = setInterval(function () { if (cur >= N - 1) { stopTour(); tourBtn.lastChild.textContent = 'Rundgang noch mal'; return; } open(cur + 1, true); }, RM ? 9000 : 6500);
    });
    if (sc) sc.addEventListener('scroll', function () { if (sc.scrollLeft > 20) stage.classList.add('swiped'); }, { passive: true });
    /* Kurz alle Beschriftungen zeigen, wenn der Rundgang ins Bild kommt */
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { io.disconnect(); if (isMob()) return; stage.classList.add('labels'); setTimeout(function () { stage.classList.remove('labels'); }, 3200); } }, { threshold: .55 });
      io.observe(stage);
    }
  })();

  /* ================= Details zum Einplanen ================= */
  (function () {
    var g = $('[data-dzg]'), dlg = $('[data-dzdlg]'), dataEl = $('#dz-data'); if (!g || !dlg || !dataEl) return;
    var D = JSON.parse(dataEl.textContent), last = null;
    $$('[data-dzc]').forEach(function (b) {
      b.addEventListener('click', function () {
        var c = b.dataset.dzc;
        $$('[data-dzc]').forEach(function (x) { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        $$('.dz-t', g).forEach(function (t) { t.hidden = !(c === 'alle' || t.dataset.cat === c); });
      });
    });
    function openD(i, btn) {
      var d = D[i]; last = btn;
      var im = $('[data-dzimg]', dlg), sv = $('[data-dzsvg]', dlg);
      if (d.img) { im.hidden = false; im.src = d.img; im.alt = d.t; sv.innerHTML = ''; } else { im.hidden = true; var s = btn.querySelector('svg'); sv.innerHTML = s ? s.outerHTML : ''; }
      $('[data-dzcat]', dlg).textContent = d.c + (d.sl ? ' · ' + d.sl : '');
      $('[data-dzt]', dlg).textContent = d.t; $('[data-dztxt]', dlg).textContent = d.txt;
      $('[data-dzo]', dlg).innerHTML = d.o.map(function (x) { return '<li><button type="button" data-merk="' + x.replace(/"/g, '&quot;') + '" aria-pressed="false">' + x + '</button></li>'; }).join('');
      var src = $('[data-dzsrc]', dlg); if (d.src) { src.hidden = false; src.href = d.src; } else src.hidden = true;
      $('[data-dzwa]', dlg).href = WA + encodeURIComponent('Hallo Frau Erbelding, auf Ihrer Website habe ich das Detail „' + d.t + '“ gesehen. Das hätte ich gern in meiner Küche – können wir darüber sprechen?');
      Merk.render();
      dlg.hidden = false; if (window.__lenis) window.__lenis.stop(); $('[data-dzx]', dlg).focus();
    }
    function closeD() { dlg.hidden = true; if (window.__lenis) window.__lenis.start(); if (last) last.focus(); }
    $$('.dz-t', g).forEach(function (t) { t.addEventListener('click', function () { openD(+t.dataset.dz, t); }); });
    /* Mobil: Karussell mit Fokus-Karte, Zähler, Pfeilen & sanftem Autoplay */
    var mq = window.matchMedia('(max-width:760px)'), nav = document.createElement('div'), cur = null, auto = 0, touched = false, inView = false;
    nav.className = 'dz-nav';
    nav.innerHTML = '<button type="button" class="dz-arw" data-dzp aria-label="Vorheriges Detail">←</button><div class="dz-cnt"><b data-dzn>01</b><span>/ <i data-dzall>17</i></span></div><div class="dz-bar"><i data-dzbar></i></div><button type="button" class="dz-arw" data-dzn2 aria-label="Nächstes Detail">→</button>';
    g.parentNode.insertBefore(nav, g.nextSibling);
    function vis() { return $$('.dz-t', g).filter(function (t) { return !t.hidden; }); }
    function pad2(n) { return (n < 10 ? '0' : '') + n; }
    function upd() {
      if (!mq.matches) { $$('.dz-t', g).forEach(function (t) { t.classList.remove('cur'); }); return; }
      var v = vis(), mid = g.scrollLeft + g.clientWidth / 2, best = v[0], bd = 1e9;
      v.forEach(function (t) { var c = t.offsetLeft + t.offsetWidth / 2, d = Math.abs(c - mid); if (d < bd) { bd = d; best = t; } });
      if (best !== cur) { if (cur) cur.classList.remove('cur'); cur = best; if (cur) cur.classList.add('cur'); }
      var i = v.indexOf(cur) + 1; $('[data-dzn]', nav).textContent = pad2(i); $('[data-dzall]', nav).textContent = pad2(v.length);
      $('[data-dzbar]', nav).style.width = (v.length ? i / v.length * 100 : 0) + '%';
    }
    function go(d) {
      var v = vis(), i = v.indexOf(cur) + d; if (i >= v.length) i = 0; if (i < 0) i = v.length - 1;
      var t = v[i]; if (t) g.scrollTo({ left: t.offsetLeft - (g.clientWidth - t.offsetWidth) / 2, behavior: 'smooth' });
    }
    g.addEventListener('scroll', function () { requestAnimationFrame(upd); }, { passive: true });
    ['touchstart', 'pointerdown'].forEach(function (ev) { g.addEventListener(ev, function () { touched = true; }, { passive: true }); });
    $('[data-dzp]', nav).addEventListener('click', function () { touched = true; go(-1); });
    $('[data-dzn2]', nav).addEventListener('click', function () { touched = true; go(1); });
    $$('[data-dzc]').forEach(function (b) { b.addEventListener('click', function () { g.scrollLeft = 0; cur = null; setTimeout(upd, 30); }); });
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) {
      inView = es[0].isIntersecting;
      if (inView && mq.matches && !touched && !RMQ()) {
        if (!g.dataset.hinted) { g.dataset.hinted = 1; g.classList.add('hint'); setTimeout(function () { g.classList.remove('hint'); }, 1600); }
        if (!auto) auto = setInterval(function () { if (inView && !touched && dlg.hidden && mq.matches) go(1); else if (touched) { clearInterval(auto); auto = 0; } }, 4200);
      }
    }, { threshold: .5 }).observe(g);
    function RMQ() { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
    (mq.addEventListener ? mq.addEventListener('change', upd) : mq.addListener(upd));
    window.addEventListener('resize', upd); upd();
    $('[data-dzx]', dlg).addEventListener('click', closeD);
    dlg.addEventListener('click', function (e) { if (e.target === dlg) closeD(); });
    document.addEventListener('keydown', function (e) { if (!dlg.hidden && e.key === 'Escape') closeD(); });
  })();

  /* ================= BORA X BO – 3D ================= */
  (function () {
    var sec = $('[data-xb]'); if (!sec) return;
    var host = $('[data-xb3d]', sec), stageEl = $('[data-xbstage]', sec), linesSvg = $('[data-xblines]', sec);
    var steps = $$('[data-xbs]', sec), bar = $('[data-xbbar]', sec), tEl = $('[data-xbtemp]', sec), mEl = $('[data-xbmode]', sec);
    var labels = {}; $$('[data-xl]', sec).forEach(function (l) { labels[l.dataset.xl] = l; });
    var KEYS = ['tuer', 'display', 'garraum', 'fuehler', 'rapidair', 'dampf', 'abzug', 'gehaeuse', 'smart'];
    var AT = steps.map(function (s) { return +s.dataset.at; });
    var NS = 'http://www.w3.org/2000/svg', lineEls = {};
    Object.keys(labels).forEach(function (k) {
      var g = document.createElementNS(NS, 'g'); g.style.opacity = 0; g.style.transition = 'opacity .35s';
      var ln = document.createElementNS(NS, 'line'), c = document.createElementNS(NS, 'circle'); c.setAttribute('r', 4.5);
      g.appendChild(ln); g.appendChild(c); linesSvg.appendChild(g); lineEls[k] = { g: g, l: ln, c: c };
    });
    var OFF = { tuer: [70, 50], display: [50, -110], garraum: [-210, 30], fuehler: [80, -70], rapidair: [-190, -40], dampf: [-180, 60], abzug: [-170, -90], gehaeuse: [-200, -10] };
    var X = null, P = 0, cur = -1, staticMode = RM, ease = function (t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
    var win = function (p, a, b) { return ease(clamp((p - a) / (b - a), 0, 1)); };
    var webgl = (function () { try { var c = document.createElement('canvas'); return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl'))); } catch (e) { return false; } })();
    if (staticMode) sec.classList.add('static');
    function stepFor(p) { var k = 0; for (var i = 0; i < AT.length; i++) if (p >= AT[i]) k = i; return k; }
    function hud(p) {
      var t = 30 + 150 * win(p, .02, .5) + 20 * win(p, .5, .7);
      tEl.textContent = Math.round(t) + '°';
      mEl.textContent = p > .88 ? 'Smart Open' : p > .76 ? 'Zusammenbauen' : p > .5 ? 'Heißluft + Dampf' : p > .06 ? 'Zerlegt · ' + (stepFor(p) + 1) + ' / 8' : 'Zusammengebaut';
      bar.style.width = (p * 100).toFixed(1) + '%';
      var k = stepFor(p);
      if (k !== cur) { cur = k; steps.forEach(function (s, i) { s.classList.toggle('on', i === k); s.classList.toggle('done', i < k); }); }
      $$('[data-xbjump]', sec).forEach(function (b) { var v = +b.dataset.xbjump; b.classList.toggle('on', (v === .72 && p > .1 && p < .76) || (v === .9 && p >= .76 && p < .93) || (v === 1 && p >= .93)); });
    }
    function onFrame(an, p) {
      var r = stageEl.getBoundingClientRect(), w = r.width, h = r.height, ck = KEYS[stepFor(p)], mob = mq('(max-width:899px)');
      Object.keys(labels).forEach(function (k) {
        var a = an[k]; if (!a) return;
        var at = AT[KEYS.indexOf(k)], vis = (staticMode ? p > .06 : p >= at + .015) && p < .76 && (!mob || k === ck);
        var o = OFF[k] || [60, -40], s = mob ? .55 : 1, L = labels[k];
        var lx = clamp(a.x + o[0] * s, 8, w - L.offsetWidth - 8), ly = clamp(a.y + o[1] * s, 50, h - 70);
        L.style.transform = 'translate(' + lx.toFixed(1) + 'px,' + ly.toFixed(1) + 'px)';
        L.classList.toggle('on', vis); L.classList.toggle('cur', k === ck);
        var le = lineEls[k]; le.g.style.opacity = vis ? 1 : 0;
        var tx = lx + (o[0] > 0 ? 0 : L.offsetWidth), ty = ly + L.offsetHeight / 2;
        le.l.setAttribute('x1', a.x); le.l.setAttribute('y1', a.y); le.l.setAttribute('x2', tx); le.l.setAttribute('y2', ty);
        le.c.setAttribute('cx', a.x); le.c.setAttribute('cy', a.y);
      });
    }
    function prog() { var r = sec.getBoundingClientRect(); return clamp(-r.top / Math.max(1, r.height - innerHeight), 0, 1); }
    function update() { if (staticMode) return; P = prog(); hud(P); if (X) X.set(P); }
    function load() {
      if (!webgl) { $('.xb-fb', sec).hidden = false; sec.classList.add('static'); staticMode = true; hud(.72); return; }
      var s = document.createElement('script'); s.src = 'js/bora3d.js';
      s.onload = function () {
        try { X = window.BoraXBO3D(host, { onFrame: onFrame }); } catch (e) { $('.xb-fb', sec).hidden = false; return; }
        if (staticMode) { P = .72; X.set(P); hud(P); } else update();
        if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { if (es[0].isIntersecting && !RM) X.play(); else X.pause(); }).observe(sec);
      };
      s.onerror = function () { $('.xb-fb', sec).hidden = false; };
      document.head.appendChild(s);
    }
    if ('IntersectionObserver' in window) { var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { io.disconnect(); load(); } }, { rootMargin: '1200px 0px' }); io.observe(sec); } else load();
    window.addEventListener('scroll', function () { requestAnimationFrame(update); }, { passive: true });
    window.addEventListener('resize', update);
    function goP(p) {
      if (staticMode) { P = p; hud(p); if (X) X.set(p); return; }
      var r = sec.getBoundingClientRect(), top = r.top + scrollY; scrollToY(top + p * (sec.offsetHeight - innerHeight));
    }
    $$('[data-xbjump]', sec).forEach(function (b) { b.addEventListener('click', function () { goP(+b.dataset.xbjump); }); });
    Object.keys(labels).forEach(function (k) { var L = labels[k]; L.setAttribute('role', 'button'); L.addEventListener('click', function () { var i = KEYS.indexOf(k); goP(AT[i] + (i === 0 ? .12 : .045)); }); });
    $$('[data-xbgo]', sec).forEach(function (b) { b.addEventListener('click', function () { var i = +b.dataset.xbgo; goP(i === 8 ? .97 : AT[i] + (i === 0 ? .12 : .045)); }); });
    hud(staticMode ? .72 : 0);
  })();

  /* ================= Kochfeldabzug-Animation ================= */
  (function () {
    var sec = $('[data-abz]'); if (!sec) return;
    var cv = $('[data-abzc]', sec), cx = cv.getContext('2d'), cap = $('[data-abzcap]', sec), lvl = $('[data-abzlvl]', sec), out = $('[data-abzout]', sec);
    var FS = 1, W = 800, H = 620, mode = 'bora', luft = 'umluft', level = 6, parts = [], flow = [], haze = 0, run = false, raf = 0, last = 0;
    function size() { var r = cv.getBoundingClientRect(), d = Math.min(2, window.devicePixelRatio || 1); cv.width = Math.round(r.width * d); cv.height = Math.round(r.width * (H / W) * d); cx.setTransform(cv.width / W, 0, 0, cv.height / H, 0, 0); FS = clamp(560 / Math.max(1, r.width), 1, 1.75); if (!run) draw(); }
    var V = { x: 430, y: 352 }, POT = { x: 340, y: 296 };
    var PATH_U = [[430, 362], [430, 430], [430, 470], [540, 470], [540, 560], [540, 588], [620, 588], [700, 588], [790, 588]];
    var PATH_A = [[430, 362], [430, 430], [430, 470], [600, 470], [700, 470], [800, 470]];
    var HOOD = [[430, 120], [430, 40], [430, -20]];
    function pathPt(P, t) { var L = [], tot = 0, i; for (i = 1; i < P.length; i++) { var d = Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]); L.push(d); tot += d; } var s = t * tot; for (i = 0; i < L.length; i++) { if (s <= L[i]) { var k = s / L[i]; return [P[i][0] + (P[i + 1][0] - P[i][0]) * k, P[i][1] + (P[i + 1][1] - P[i][1]) * k]; } s -= L[i]; } return P[P.length - 1]; }
    function spawn(n) { for (var i = 0; i < n; i++) parts.push({ x: POT.x + (Math.random() - .5) * 90, y: POT.y - 2, vx: (Math.random() - .5) * .3, vy: -.6 - Math.random() * .6, a: .9, r: 10 + Math.random() * 12, life: 0 }); }
    function step(dt) {
      spawn(Math.random() < level / 9 ? (level > 6 ? 2 : 1) : 0);
      for (var i = parts.length - 1; i >= 0; i--) {
        var p = parts[i]; p.life += dt;
        p.vx += (Math.random() - .5) * .08; p.vy -= .006; // Auftrieb + Turbulenz
        if (mode === 'bora') {
          var dx = V.x - p.x, dy = V.y - p.y, d = Math.hypot(dx, dy) + 1, f = 260 / (d * d) * 9 + .02;
          p.vx += dx / d * f * 2.4; p.vy += dy / d * f * 2.4; p.vx *= .9; p.vy *= .9;
          if (d < 16) { flow.push({ t: 0, sp: .0055 + Math.random() * .002, P: luft === 'umluft' ? PATH_U : PATH_A }); parts.splice(i, 1); continue; }
        } else {
          p.vx *= .985; p.vy *= .985;
          if (p.y < 150 && p.x > 330 && p.x < 530) { var hx = 430 - p.x, hy = 100 - p.y, hd = Math.hypot(hx, hy) + 1; p.vx += hx / hd * .12; p.vy += hy / hd * .12; if (hd < 24) { flow.push({ t: 0, sp: .012, P: HOOD }); parts.splice(i, 1); continue; } }
          if (p.y < 60) { p.vy = Math.abs(p.vy) * .2; p.vx += (p.x < 430 ? -.06 : .06); }
          p.r += .05; p.a -= .0016; if (p.a <= .05 || p.x < -40 || p.x > 840) { parts.splice(i, 1); haze = Math.min(1, haze + .004); continue; }
        }
        p.x += p.vx * dt * 1.6; p.y += p.vy * dt * 1.6;
      }
      for (i = flow.length - 1; i >= 0; i--) { flow[i].t += flow[i].sp * dt; if (flow[i].t >= 1) flow.splice(i, 1); }
      haze = mode === 'bora' ? Math.max(0, haze - .004) : Math.max(0, haze - .0008);
      if (parts.length > 420) parts.splice(0, parts.length - 420);
    }
    function rr(x, y, w, h, r, fill) { cx.beginPath(); cx.roundRect ? cx.roundRect(x, y, w, h, r) : cx.rect(x, y, w, h); cx.fillStyle = fill; cx.fill(); }
    function txt(s, x, y, c, sz, al, w) { cx.font = (w || 700) + ' ' + (sz * FS) + 'px Figtree, Arial, sans-serif'; cx.fillStyle = c; cx.textAlign = al || 'left'; cx.fillText(s, x, y); }
    function arrow(x1, y1, x2, y2, c) { cx.strokeStyle = c; cx.fillStyle = c; cx.lineWidth = 2.5; cx.beginPath(); cx.moveTo(x1, y1); cx.lineTo(x2, y2); cx.stroke(); var a = Math.atan2(y2 - y1, x2 - x1); cx.beginPath(); cx.moveTo(x2, y2); cx.lineTo(x2 - 10 * Math.cos(a - .5), y2 - 10 * Math.sin(a - .5)); cx.lineTo(x2 - 10 * Math.cos(a + .5), y2 - 10 * Math.sin(a + .5)); cx.fill(); }
    function draw() {
      cx.clearRect(0, 0, W, H);
      cx.fillStyle = '#f3ede4'; cx.fillRect(0, 0, W, H);
      // Rückwand Glas rot mit grünem Streifen (wie in Barbaras Ausstellung)
      var g = cx.createLinearGradient(0, 200, 0, 360); g.addColorStop(0, '#c0161f'); g.addColorStop(1, '#8f0f17'); cx.fillStyle = g; cx.fillRect(0, 200, W, 160);
      cx.fillStyle = '#86c23a'; cx.fillRect(560, 200, 34, 160);
      cx.fillStyle = 'rgba(255,255,255,.12)'; cx.beginPath(); cx.moveTo(60, 200); cx.lineTo(140, 200); cx.lineTo(60, 360); cx.lineTo(0, 360); cx.fill();
      // Oberschränke
      rr(0, 40, 230, 150, 6, '#1c2a4a'); rr(W - 230, 40, 230, 150, 6, '#1c2a4a');
      cx.fillStyle = 'rgba(255,255,255,.65)'; cx.fillRect(18, 150, 194, 22); cx.fillRect(W - 212, 150, 194, 22);
      // Haube
      if (mode === 'haube') { cx.fillStyle = '#9aa1ab'; cx.fillRect(400, 0, 60, 80); cx.beginPath(); cx.moveTo(320, 140); cx.lineTo(540, 140); cx.lineTo(470, 80); cx.lineTo(390, 80); cx.closePath(); cx.fillStyle = '#b8bec7'; cx.fill(); cx.fillStyle = '#2b2f36'; cx.fillRect(330, 136, 200, 6); }
      // Arbeitsplatte + Unterschrank (aufgeschnitten)
      cx.fillStyle = '#c99a63'; cx.fillRect(0, 360, W, 20); cx.fillStyle = '#b5864f'; cx.fillRect(0, 376, W, 4);
      rr(0, 380, W, 200, 0, '#1c2a4a');
      cx.fillStyle = 'rgba(255,255,255,.07)'; cx.fillRect(250, 390, 380, 180);
      cx.strokeStyle = 'rgba(255,255,255,.25)'; cx.setLineDash([6, 6]); cx.lineWidth = 1.5; cx.strokeRect(250, 390, 380, 180); cx.setLineDash([]);
      txt(FS > 1.3 ? 'Unterschrank' : 'Unterschrank (aufgeschnitten)', 262, 410, 'rgba(255,255,255,.55)', 12);
      cx.fillStyle = '#2a3b62'; [[20, 400, 200, 70], [20, 480, 200, 85], [650, 400, 130, 70], [650, 480, 130, 85]].forEach(function (b) { rr(b[0], b[1], b[2], b[3], 4, '#24365c'); cx.fillStyle = '#0d1426'; cx.fillRect(b[0] + b[2] / 2 - 30, b[1] + 10, 60, 5); });
      // Sockel + Boden
      cx.fillStyle = '#141d33'; cx.fillRect(0, 580, W, 18); cx.fillStyle = '#7a4a2c'; cx.fillRect(0, 598, W, 22);
      // Kochfeld
      cx.fillStyle = '#0b0c0e'; cx.fillRect(250, 352, 360, 9);
      if (mode === 'bora') { cx.fillStyle = '#3a3e45'; cx.fillRect(405, 351, 50, 10); for (var k = 0; k < 6; k++) { cx.fillStyle = '#16181c'; cx.fillRect(408 + k * 8, 353, 4, 6); } }
      // Kanal + Filter
      cx.lineCap = 'round';
      if (mode === 'bora') {
        cx.strokeStyle = '#8b939e'; cx.lineWidth = 26; cx.beginPath(); var P = luft === 'umluft' ? PATH_U : PATH_A; cx.moveTo(P[0][0], P[0][1]); for (var i = 1; i < P.length; i++) cx.lineTo(P[i][0], P[i][1]); cx.stroke();
        cx.strokeStyle = '#5d6570'; cx.lineWidth = 18; cx.stroke();
        rr(408, 386, 44, 22, 4, '#f0c24b'); txt('Fettfilter', 462, 402, '#fff', 13);
        rr(500, 452, 80, 36, 8, '#c7ccd3'); cx.save(); cx.translate(540, 470); cx.rotate(performance.now() / 120 * (level / 6)); cx.fillStyle = '#4b525c'; for (var b = 0; b < 5; b++) { cx.rotate(Math.PI * 2 / 5); cx.fillRect(-2, -14, 4, 14); } cx.restore(); txt('Gebläse', 590, 470, '#fff', 13);
        if (luft === 'umluft') { rr(560, 574, 90, 28, 6, '#23262b'); for (var h = 0; h < 8; h++) { cx.fillStyle = '#3c414a'; cx.fillRect(566 + h * 10, 578, 6, 20); } txt('Aktivkohlefilter', 560, 568, '#fff', 13); txt(FS > 1.3 ? 'saubere Luft →' : 'saubere Luft zurück in den Raum →', 790, 615, '#fff', 12, 'right'); }
        else { cx.fillStyle = '#d9d2c6'; cx.fillRect(770, 360, 30, 250); txt('Außenwand', 765, 452, '#14213a', 12, 'right'); txt('nach draußen →', 765, 498, '#fff', 13, 'right'); }
      }
      // Topf
      cx.fillStyle = '#c9ced5'; cx.fillRect(284, 300, 112, 52); cx.fillStyle = '#e8ebef'; cx.fillRect(284, 300, 112, 8); cx.fillStyle = '#9aa1aa'; cx.fillRect(270, 310, 16, 6); cx.fillRect(394, 310, 16, 6);
      cx.fillStyle = '#e07a3f'; cx.fillRect(290, 302, 100, 5);
      // Partikel
      for (var j = 0; j < parts.length; j++) { var p = parts[j], gg = cx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r); var al = p.a * (mode === 'bora' ? .6 : .75); gg.addColorStop(0, 'rgba(255,255,255,' + al + ')'); gg.addColorStop(1, 'rgba(255,255,255,0)'); cx.fillStyle = gg; cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 6.3); cx.fill(); }
      for (j = 0; j < flow.length; j++) { var f = flow[j], q = pathPt(f.P, f.t); var clean = f.P === PATH_U ? f.t > .78 : f.P === PATH_A ? false : false; cx.fillStyle = f.P === HOOD ? 'rgba(255,255,255,.7)' : (f.t < .2 ? 'rgba(255,255,255,.85)' : clean ? 'rgba(140,220,255,.9)' : 'rgba(255,225,190,.85)'); cx.beginPath(); cx.arc(q[0] + (Math.random() - .5) * 4, q[1] + (Math.random() - .5) * 4, 3.2, 0, 6.3); cx.fill(); }
      // Dunst im Raum (Haube)
      if (haze > .01) { cx.fillStyle = 'rgba(210,214,220,' + (haze * .45) + ')'; cx.fillRect(0, 0, W, 360); }
      // Geschwindigkeits-Pfeile
      arrow(250, 280, 250, 230, '#fff'); txt('Dunst steigt: ≤ 1 m/s', 140, 222, '#fff', 14, 'left', 800);
      if (mode === 'bora') { arrow(470, 300, 445, 340, '#e0703f'); txt('ca. 4 m/s nach unten', 478, 300, '#fff', 14, 'left', 800); }
      else { var ht = FS > 1.3 ? 'Der Rest bleibt im Raum.' : 'Was die Haube nicht erwischt, bleibt im Raum.'; cx.font = '800 ' + (13.5 * FS) + 'px Figtree, Arial, sans-serif'; var hw = cx.measureText(ht).width + 30; rr(Math.min(785 - hw, 605 - hw / 2), 300, hw, 22 + 12 * FS, 17, 'rgba(16,38,74,.88)'); txt(ht, Math.min(785 - hw, 605 - hw / 2) + hw / 2, 316 + 6 * FS, '#fff', 13.5, 'center', 800); }
      var bt = mode === 'bora' ? 'Kochfeldabzug · ' + (luft === 'umluft' ? 'Umluft' : 'Abluft') : 'Dunsthaube'; cx.font = '800 ' + (13.5 * FS) + 'px Figtree, Arial, sans-serif'; rr(16, 14, cx.measureText(bt).width + 28, 16 + 14 * FS, 15, mode === 'bora' ? '#e0703f' : '#14213a'); txt(bt, 30, 26 + 8 * FS, '#fff', 13.5, 'left', 800);
    }
    function loop(t) { var dt = Math.min(3, (t - (last || t)) / 16.7); last = t; step(dt); draw(); if (run) raf = requestAnimationFrame(loop); }
    function setCap() { cap.textContent = mode === 'haube' ? 'Mit Haube steigt der Dunst erst an Gesicht und Oberschränken vorbei – was am Rand vorbeizieht, verteilt sich im Raum.' : luft === 'umluft' ? 'Umluft: Fettfilter, dann Aktivkohle – die gereinigte Luft kommt am Sockel zurück in den Raum.' : 'Abluft: Der Dunst wird durch einen Kanal nach draußen geleitet.'; }
    $$('[data-abzm]', sec).forEach(function (b) { b.addEventListener('click', function () { mode = b.dataset.abzm; $$('[data-abzm]', sec).forEach(function (x) { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); }); flow = []; setCap(); if (!run) { warm(); draw(); } }); });
    $$('[data-abzl]', sec).forEach(function (b) { b.addEventListener('click', function () { luft = b.dataset.abzl; $$('[data-abzl]', sec).forEach(function (x) { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); }); if (mode !== 'bora') { mode = 'bora'; $$('[data-abzm]', sec).forEach(function (x) { var o = x.dataset.abzm === 'bora'; x.classList.toggle('on', o); x.setAttribute('aria-pressed', o ? 'true' : 'false'); }); } flow = []; setCap(); if (!run) { warm(); draw(); } }); });
    lvl.addEventListener('input', function () { level = +lvl.value; out.textContent = level; if (!run) { warm(); draw(); } });
    function warm() { parts = []; flow = []; haze = 0; for (var i = 0; i < 260; i++) step(1); }
    window.addEventListener('resize', size); size(); warm(); draw();
    if (!RM && 'IntersectionObserver' in window) new IntersectionObserver(function (es) { var on = es[0].isIntersecting; if (on && !run) { run = true; last = 0; raf = requestAnimationFrame(loop); } else if (!on) { run = false; cancelAnimationFrame(raf); } }).observe(cv);
  })();

  /* ================= Kleinigkeiten: Budget-Skala, Badges ================= */
  (function () {
    var rng = $('[data-tier]');
    if (rng) {
      var sync = function () { $$('[data-tierset]').forEach(function (b) { b.classList.toggle('on', +b.dataset.tierset === +rng.value); }); };
      $$('[data-tierset]').forEach(function (b) { b.addEventListener('click', function () { rng.dataset.touched = 1; rng.value = b.dataset.tierset; rng.dispatchEvent(new Event('input', { bubbles: true })); sync(); }); });
      rng.addEventListener('input', sync); sync();
    }
    /* Zukunftsblick: Badges „Vorher“ / „Zukunftsblick“ schieben den Regler */
    var ba = $('[data-ba]');
    if (ba) $$('.ki-lab', ba).forEach(function (l) { l.setAttribute('role', 'button'); l.setAttribute('tabindex', '0'); var go = function () { var r = $('[data-ba-r]', ba); r.value = l.classList.contains('l') ? 96 : 4; r.dispatchEvent(new Event('input', { bubbles: true })); }; l.addEventListener('click', go); l.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } }); });
  })();

  /* ================= Karten ohne eigenes Ziel klickbar machen ================= */
  (function () {
    $$('.dl[data-tilt]').forEach(function (c) { var l = $('.dl-ig', c); if (!l) return; c.addEventListener('click', function (e) { if (e.target.closest('a,button')) return; window.open(l.href, '_blank', 'noopener'); }); });
    var ao = $('.ah-out'), ap = $('[data-ah-plan]'); if (ao && ap) { ao.setAttribute('role', 'link'); ao.setAttribute('tabindex', '0'); ao.title = 'Küche in dieser Höhe planen'; var g = function () { location.href = ap.href; }; ao.addEventListener('click', g); ao.addEventListener('keydown', function (e) { if (e.key === 'Enter') g(); }); }
    var bv = $('[data-kitchen]'), rng = $('[data-tier]'); if (bv && rng) bv.addEventListener('click', function (e) { if (e.target.closest('a')) return; rng.dataset.touched = 1; rng.value = (+rng.value + 1) % 3; rng.dispatchEvent(new Event('input', { bubbles: true })); });
    $$('.rl').forEach(function (r) { r.addEventListener('click', function (e) { if (r.getAttribute('data-pos') !== '0' || e.target.closest('a,button')) return; var l = $('.rl-open', r); if (l) window.open(l.href, '_blank', 'noopener'); }); });
    var sw = $('[data-auswipe]'), sc = $('[data-auscroll]'); if (sw && sc) sw.addEventListener('click', function () { sc.scrollTo({ left: sc.scrollLeft < 20 ? sc.scrollWidth : 0, behavior: 'smooth' }); });
  })();

  /* ================= v11: Geschichte ================= */
  (function () {
    var sec = $('[data-fw]'); if (!sec) return;
    var signs = sec.dataset.signs.split('|'), years = sec.dataset.years.split('|'), tabs = $$('[data-fws]', sec), txts = $$('[data-fwt]', sec);
    var sign = $('.fw-sign', sec), yr = $('.fw-year', sec), cur = -1, timer = 0, auto = !RM;
    function set(i, user) {
      if (user) { auto = false; clearTimeout(timer); }
      if (i === cur) return; cur = i; sec.setAttribute('data-s', i);
      tabs.forEach(function (b, j) { b.classList.toggle('on', j === i); b.classList.toggle('run', auto && j === i); b.setAttribute('aria-pressed', j === i ? 'true' : 'false'); });
      txts.forEach(function (t, j) { t.hidden = j !== i; });
      sign.classList.add('swap'); setTimeout(function () { sign.textContent = signs[i]; sign.classList.remove('swap'); }, 250); yr.textContent = years[i];
      if (auto) { clearTimeout(timer); timer = setTimeout(function () { if (auto) set((cur + 1) % tabs.length); }, 5500); }
    }
    tabs.forEach(function (b, i) { b.addEventListener('click', function () { set(i, true); }); });
    $('.fw-win', sec).addEventListener('click', function () { set((cur + 1) % tabs.length, true); });
    sec.setAttribute('data-s', 0); cur = 0;
    if ('IntersectionObserver' in window && auto) { var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { io.disconnect(); cur = -1; set(0); } }, { threshold: .4 }); io.observe(sec); }
  })();

  /* ================= v11: Lift-Hängeschrank ================= */
  (function () {
    var sec = $('[data-lift]'); if (!sec) return;
    var svg = $('[data-liftsvg]', sec), cab = $('[data-cab]', svg), a1 = $('[data-arm1]', svg), a2 = $('[data-arm2]', svg), fa = $('[data-forearm]', svg), lab = $('[data-liftlab]', svg);
    var btn = $('[data-liftbtn]', sec), rng = $('[data-liftr]', sec), v = 0, tgt = 0, raf = 0;
    // Maße in cm, Wand bei x=-8, Boden bei y=250 (SVG-y = 250 - Höhe)
    var WX = -8, P1 = 110, P2 = 95, L = 95, T0 = 90, T1 = 20;
    function draw(t) {
      var e = t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2, th = (T0 + (T1 - T0) * e) * Math.PI / 180;
      var ax = WX + L * Math.cos(th), ay = P1 + L * Math.sin(th), bx = WX + L * Math.cos(th), by = P2 + L * Math.sin(th);
      a1.setAttribute('x2', ax.toFixed(2)); a1.setAttribute('y2', (250 - ay).toFixed(2)); a1.setAttribute('y1', 250 - P1);
      a2.setAttribute('x2', bx.toFixed(2)); a2.setAttribute('y2', (250 - by).toFixed(2)); a2.setAttribute('y1', 250 - P2);
      cab.setAttribute('transform', 'translate(' + (ax + 0.5).toFixed(2) + ' ' + (250 - ay).toFixed(2) + ')');
      var hx = 140 - 30 * e, hy = 154 - 14 * e; fa.setAttribute('d', 'M164 144 L' + hx.toFixed(1) + ' ' + hy.toFixed(1));
      lab.textContent = t < .15 ? 'Oben: außer Reichweite' : t > .9 ? 'Unten: bequem in Greifhöhe' : 'Fährt vor und herunter …';
      sec.classList.toggle('down', t > .9);
    }
    var from = 0, t0 = 0, DUR = 2400;
    function loop(now) { var k = Math.min(1, (now - t0) / DUR); v = from + (tgt - from) * k; draw(v); rng.value = Math.round(v * 100); if (k < 1) raf = requestAnimationFrame(loop); else raf = 0; }
    function go(t) { from = v; t0 = performance.now(); tgt = t; cancelAnimationFrame(raf); raf = 0; btn.textContent = t > .5 ? 'Wieder hochfahren' : 'Hängeschrank herunterfahren'; btn.setAttribute('aria-pressed', t > .5 ? 'true' : 'false'); if (RM) { v = t; draw(v); rng.value = t * 100; return; } if (!raf) raf = requestAnimationFrame(loop); }
    btn.addEventListener('click', function () { go(tgt > .5 ? 0 : 1); });
    rng.addEventListener('input', function () { cancelAnimationFrame(raf); raf = 0; v = tgt = rng.value / 100; draw(v); btn.textContent = v > .5 ? 'Wieder hochfahren' : 'Hängeschrank herunterfahren'; });
    svg.addEventListener('click', function () { go(tgt > .5 ? 0 : 1); }); svg.style.cursor = 'pointer';
    draw(0);
    if (!RM && 'IntersectionObserver' in window) { var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { io.disconnect(); setTimeout(function () { go(1); }, 700); } }, { threshold: .5 }); io.observe(svg); }
  })();

  /* ================= v11: Ablauf, Spüle, Abluft ================= */
  (function () {
    var ab = $('[data-ablauf]');
    if (ab) { var lis = $$('li', ab); var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) { if (!es[0].isIntersecting) return; io.disconnect(); lis.forEach(function (l, i) { setTimeout(function () { l.classList.add('lit'); ab.style.setProperty('--abp', ((i + 1) / lis.length * 100) + '%'); }, RM ? 0 : 250 * i); }); }, { threshold: .4 }) : null; if (io) io.observe(ab); }
    var cap = $('[data-sinkcap]'); $$('.sp-btns button').forEach(function (b) { b.addEventListener('click', function () { if (cap) cap.textContent = b.textContent.trim(); }); });
    $$('[data-spm]').forEach(function (b) { b.addEventListener('click', function () { $$('[data-spm]').forEach(function (x) { var on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-selected', on ? 'true' : 'false'); }); $$('[data-spmt]').forEach(function (t) { t.hidden = t.dataset.spmt !== b.dataset.spm; }); }); });
    $$('[data-abzshow]').forEach(function (b) { b.addEventListener('click', function () { var t = $('[data-abzl="abluft"]'); if (t) t.click(); var c = $('[data-abzc]'); if (c) { var r = c.getBoundingClientRect(); scrollToY(r.top + scrollY - 100); } }); });
  })();

  /* ================= v11: Hero (Intro, Varianten, Staub, Mobil-Video) ================= */
  (function () {
    var h = $('[data-hero]'); if (!h) return;
    var V = (location.search.match(/[?&]hero=([abc])/) || [])[1];
    if (V) { h.setAttribute('data-v', V); var im = $('[data-hcimg]', h), mk = $('[data-hcmask]', h);
      if (V === 'b') { im.src = 'img/d2.webp'; mk.style.backgroundImage = 'url(img/k3.webp)'; }
      if (V === 'c') { im.src = 'img/aus.webp'; mk.style.backgroundImage = 'url(img/d1.webp)'; } }
    var root = document.documentElement;
    if (root.classList.contains('hc-first')) {
      h.classList.add('intro');
      var fin = function () { h.classList.add('open'); h.classList.remove('intro'); setTimeout(function () { h.classList.add('done'); root.classList.remove('hc-first'); }, 1500); try { sessionStorage.setItem('erb-intro', '1'); } catch (e) {} ['click', 'keydown', 'wheel', 'touchstart'].forEach(function (ev) { window.removeEventListener(ev, skip); }); };
      var skip = function () { fin(); h.classList.add('done'); };
      ['click', 'keydown', 'wheel', 'touchstart'].forEach(function (ev) { window.addEventListener(ev, skip, { passive: true, once: true }); });
      setTimeout(function () { h.classList.add('open'); }, 550);
      setTimeout(function () { h.classList.remove('intro'); }, 1250);
      setTimeout(fin, 2300);
    } else h.classList.add('done');
    /* Mobil: Hochformat-Reel als Hintergrund */
    var mv = $('[data-hcmv]', h);
    if (mv && mq('(max-width:899px)')) { mv.preload = 'auto'; var p = mv.play(); if (p && p.catch) p.catch(function () {}); }
    /* Warme Staubpartikel */
    var cv = $('[data-hcdust]', h); if (!cv || RM) return;
    var cx = cv.getContext('2d'), P = [], run = true, W, H;
    function size() { var d = Math.min(2, devicePixelRatio || 1); W = cv.clientWidth; H = cv.clientHeight; cv.width = W * d; cv.height = H * d; cx.setTransform(d, 0, 0, d, 0, 0); }
    size(); window.addEventListener('resize', size);
    for (var i = 0; i < 46; i++) P.push({ x: Math.random(), y: Math.random(), r: .6 + Math.random() * 2.2, v: .00012 + Math.random() * .00035, w: Math.random() * 6.3, a: .15 + Math.random() * .45 });
    function loop(t) {
      cx.clearRect(0, 0, W, H);
      P.forEach(function (p) { p.y -= p.v * 16; if (p.y < -.05) { p.y = 1.05; p.x = Math.random(); } var x = (p.x + Math.sin(t / 3000 + p.w) * .01) * W, y = p.y * H; var g = cx.createRadialGradient(x, y, 0, x, y, p.r * 3); g.addColorStop(0, 'rgba(255,214,160,' + p.a + ')'); g.addColorStop(1, 'rgba(255,214,160,0)'); cx.fillStyle = g; cx.beginPath(); cx.arc(x, y, p.r * 3, 0, 6.3); cx.fill(); });
      if (run) requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { var on = es[0].isIntersecting; if (on && !run) { run = true; requestAnimationFrame(loop); } else if (!on) run = false; }).observe(h);
  })();
  /* Bilder in Wisch-Leisten sicher laden (iOS/Android laden lazy-Bilder in Querscrollern teils nie) */
  (function () {
    var imgs = $$('img[data-eager], .dz-m img');
    function eager(list) { list.forEach(function (im) { if (im.loading === 'lazy' || im.getAttribute('loading') === 'lazy') { im.loading = 'eager'; var s = im.src; if (!im.complete || !im.naturalWidth) { im.src = ''; im.src = s; } } }); }
    if (!('IntersectionObserver' in window)) { eager(imgs); return; }
    var secs = []; imgs.forEach(function (im) { var s = im.closest('section') || document.body; if (secs.indexOf(s) < 0) secs.push(s); });
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (!e.isIntersecting) return; io.unobserve(e.target); eager($$('img[data-eager], .dz-m img', e.target)); }); }, { rootMargin: '1200px 0px' });
    secs.forEach(function (s) { io.observe(s); });
    setTimeout(function () { eager(imgs); }, 6000);
  })();
  /* ================= Review 16.10.: Karte auf Klick, Referenz-Symbole, WhatsApp kompakt ================= */
  (function () {
    $$('[data-map]').forEach(function (m) { var b = $('[data-map-load]', m); if (!b) return; b.addEventListener('click', function () { var f = document.createElement('iframe'); f.title = m.getAttribute('data-title') || 'Karte'; f.src = m.getAttribute('data-src'); m.appendChild(f); m.classList.add('on'); f.setAttribute('tabindex', '0'); try { f.focus({ preventScroll: true }); } catch (e) {} }); });
    var refs = $('.refs');
    if (refs) { if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) refs.classList.add('draw'); else { refs.classList.add('pre'); var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { io.disconnect(); refs.classList.add('draw'); } }, { threshold: .35 }); io.observe(refs); } }
    var fab = $('.wa-fab'), rq = 0;
    function onS() { rq = 0; if (fab) fab.classList.toggle('mini', window.scrollY > innerHeight * .85); }
    if (fab) { window.addEventListener('scroll', function () { if (!rq) rq = requestAnimationFrame(onS); }, { passive: true }); onS(); }
  })();
})();
