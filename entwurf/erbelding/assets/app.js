/* Küchenstudio Erbelding – Entwurf Falcon Eye */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasG = !!(window.gsap && window.ScrollTrigger);
  if (hasG) gsap.registerPlugin(ScrollTrigger);

  /* Lenis */
  var lenis = null;
  if (window.Lenis && !RM && document.documentElement.dataset.page !== 'planer') {
    lenis = new Lenis({ lerp: 0.11, smoothWheel: true });
    if (hasG) { lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add(function (t) { lenis.raf(t * 1000); }); gsap.ticker.lagSmoothing(0); }
    else { (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })(0); }
    document.documentElement.classList.add('lenis');
  }
  window.__lenis = lenis;
  $$('a[href^="#"],a[href^="index.html#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var h = a.getAttribute('href').replace('index.html', '');
      if (h.length < 2) return;
      var t = document.querySelector(h);
      if (!t) return;
      e.preventDefault(); closeMenu();
      if (lenis) lenis.scrollTo(t, { offset: -70 }); else t.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(null, '', h);
    });
  });

  /* Header */
  var hdr = $('.hdr'), last = 0;
  function onScroll() {
    var y = window.scrollY;
    if (hdr) {
      hdr.classList.toggle('solid', y > 60);
      hdr.classList.toggle('hide', y > 500 && y > last + 4 && !document.body.classList.contains('menu-open'));
      if (y < last - 4) hdr.classList.remove('hide');
    }
    last = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* Menü */
  var burger = $('.burger'), mnav = $('.mnav');
  function closeMenu() { document.body.classList.remove('menu-open'); if (burger) burger.setAttribute('aria-expanded', 'false'); if (mnav) mnav.setAttribute('aria-hidden', 'true'); if (lenis) lenis.start(); }
  if (burger) burger.addEventListener('click', function () {
    var o = document.body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', o); mnav.setAttribute('aria-hidden', !o);
    if (lenis) o ? lenis.stop() : lenis.start();
  });
  $$('.mnav a').forEach(function (a) { a.addEventListener('click', closeMenu); });

  /* Öffnungszeiten (Minuten ab 0 Uhr) */
  var H = { 1: [[540, 720], [870, 1080]], 2: [[540, 720], [870, 1080]], 3: [[540, 720], [870, 1080]], 4: [[540, 720], [870, 1080]], 5: [[540, 720], [870, 1080]], 6: [[540, 720]], 0: [] };
  var DN = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
  function fm(m) { var h = Math.floor(m / 60), mm = m % 60; return h + (mm ? ':' + (mm < 10 ? '0' : '') + mm : '') ; }
  function state() {
    var d = new Date(), wd = d.getDay(), m = d.getHours() * 60 + d.getMinutes();
    var sl = H[wd];
    for (var i = 0; i < sl.length; i++) if (m >= sl[i][0] && m < sl[i][1]) return { open: true, txt: 'Jetzt geöffnet · bis ' + fm(sl[i][1]) + ' Uhr' };
    for (i = 0; i < sl.length; i++) if (m < sl[i][0]) return { open: false, txt: 'Öffnet heute um ' + fm(sl[i][0]) + ' Uhr' };
    for (var k = 1; k <= 7; k++) { var n = (wd + k) % 7; if (H[n].length) return { open: false, txt: 'Öffnet ' + (k === 1 ? 'morgen' : DN[n]) + ' um ' + fm(H[n][0][0]) + ' Uhr' }; }
    return { open: false, txt: '' };
  }
  function paint() {
    var s = state();
    $$('[data-status]').forEach(function (el) { el.classList.toggle('open', s.open); el.classList.toggle('closed', !s.open); el.querySelector('b').textContent = s.open ? 'Geöffnet' : 'Geschlossen'; el.title = s.txt; });
    $$('[data-countdown]').forEach(function (el) { el.textContent = s.txt; });
    var hb = $('[data-hours]');
    if (hb) {
      var today = new Date().getDay(), order = [1, 2, 3, 4, 5, 6, 0], html = '';
      order.forEach(function (d) {
        var t = H[d].length ? H[d].map(function (x) { return fm(x[0]) + '–' + fm(x[1]); }).join(' · ') + ' Uhr' : 'geschlossen';
        html += '<div' + (d === today ? ' class="today"' : '') + '><span>' + DN[d] + (d === today ? ' (heute)' : '') + '</span><span>' + t + '</span></div>';
      });
      hb.innerHTML = html + '<div><span>Und nach Vereinbarung</span><span>gern auch abends</span></div>';
    }
  }
  paint(); setInterval(paint, 60000);

  /* Hero: Blaupause + VR-Brille */
  var hero = $('.hero');
  if (hero && $('.bp', hero) && !$('.hero-bp[hidden]')) {
    var svgs = $$('.bp', hero);
    var active = function () { for (var i = 0; i < svgs.length; i++) if (svgs[i].getBoundingClientRect().width > 0 && getComputedStyle(svgs[i]).display !== 'none') return svgs[i]; return svgs[0]; };
    // Linien zeichnen
    svgs.forEach(function (s) {
      s.classList.add('drawn');
      requestAnimationFrame(function () { requestAnimationFrame(function () { s.classList.add('done'); }); });
    });
    var pos = { x: 0.75, y: 0.45 }, tgt = { x: 0.75, y: 0.45 }, user = 0, t0 = performance.now();
    function toSvg(svg, fx, fy) {
      var vb = svg.viewBox.baseVal, r = svg.getBoundingClientRect();
      var sc = Math.max(r.width / vb.width, r.height / vb.height);
      var ox = (r.width - vb.width * sc) / 2, oy = (r.height - vb.height * sc) / 2;
      return { x: (fx * r.width - ox) / sc, y: (fy * r.height - oy) / sc, sc: sc };
    }
    function setLens() {
      var svg = active(); if (!svg) return;
      var p = toSvg(svg, pos.x, pos.y);
      var r = svg.getBoundingClientRect();
      var want = window.innerWidth < 700 ? r.width * 0.66 : Math.min(500, r.width * 0.34);
      var scale = want / (300 * p.sc);
      var tr = 'translate(' + p.x.toFixed(1) + ' ' + p.y.toFixed(1) + ') scale(' + scale.toFixed(3) + ')';
      $$('.lens-shape,.goggle', svg).forEach(function (g) { g.setAttribute('transform', tr); });
    }
    function loop(now) {
      if (now - user > 2600) {
        var t = (now - t0) / 1000;
        tgt.x = 0.75 + Math.sin(t * 0.45) * 0.05; tgt.y = 0.46 + Math.sin(t * 0.7 + 1) * 0.16;
        if (window.innerWidth < 700) { tgt.x = 0.5 + Math.sin(t * 0.5) * 0.1; tgt.y = 0.5 + Math.sin(t * 0.6 + 1) * 0.14; }
      }
      pos.x += (tgt.x - pos.x) * 0.08; pos.y += (tgt.y - pos.y) * 0.08;
      setLens();
      if (heroVisible) requestAnimationFrame(loop); else looping = false;
    }
    var heroVisible = true, looping = false;
    function startLoop() { if (!looping) { looping = true; requestAnimationFrame(loop); } }
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { heroVisible = es[0].isIntersecting; if (heroVisible) startLoop(); }).observe(hero);
    function mv(cx, cy) { var r = active().getBoundingClientRect(); if (cy > r.bottom + 40) return; tgt.x = (cx - r.left) / r.width; tgt.y = (cy - r.top) / r.height; user = performance.now(); var h = $('.hero-hint'); if (h) h.style.opacity = 0; }
    hero.addEventListener('pointermove', function (e) { if (e.pointerType === 'mouse') mv(e.clientX, e.clientY); });
    hero.addEventListener('pointerdown', function (e) { mv(e.clientX, e.clientY); });
    hero.addEventListener('touchmove', function (e) { var t = e.touches[0]; if (t) mv(t.clientX, t.clientY); }, { passive: true });
    window.addEventListener('resize', setLens);
    if (RM) { setLens(); } else startLoop();
  }

  /* Reveal */
  function onView(els, fn, th) {
    els = els.filter(Boolean); if (!els.length) return;
    if (!('IntersectionObserver' in window)) { els.forEach(fn); return; }
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { fn(e.target); io.unobserve(e.target); } }); }, { threshold: th || 0.15, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  }
  if (hasG && !RM) {
    var rv = $$('.h2,.familie .lead,.years li,.ref,.ex,.anfrage,.sp-img,.bu-vis,.ku-head .small');
    rv.forEach(function (el) { gsap.set(el, { opacity: 0, y: 34 }); });
    onView(rv, function (el) { gsap.to(el, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: el.classList.contains('ref') ? ($$('.ref').indexOf(el) * 0.08) : 0 }); });
    setTimeout(function () { rv.forEach(function (el) { if (getComputedStyle(el).opacity === '0' && el.getBoundingClientRect().top < innerHeight) gsap.to(el, { opacity: 1, y: 0, duration: 0.5 }); }); }, 3500);
  }

  /* Jahreszahlen hochzählen */
  onView($$('[data-y]').filter(function (el) { return !el.children.length && !el.classList.contains('zr-c'); }), function (el) {
    var to = +el.dataset.y, from = to - 40, st = performance.now();
    if (RM) return;
    (function f(n) { var p = Math.min(1, (n - st) / 1400), e = 1 - Math.pow(1 - p, 3); el.textContent = Math.round(from + (to - from) * e); if (p < 1) requestAnimationFrame(f); })(st);
  }, 0.6);

  /* Galerie: horizontal gepinnt (Desktop) */
  var track = $('[data-track]');
  if (track && hasG && !RM) {
    ScrollTrigger.matchMedia({
      '(min-width: 701px)': function () {
        var dist = function () { return Math.max(0, track.scrollWidth - window.innerWidth); };
        var tw = gsap.to(track, { x: function () { return -dist(); }, ease: 'none',
          scrollTrigger: { trigger: '.ku-pin', start: 'top top', end: function () { return '+=' + Math.round(dist() * 0.35); }, pin: true, scrub: 0.4, invalidateOnRefresh: true, anticipatePin: 1 } });
        return function () { tw.kill(); gsap.set(track, { x: 0 }); };
      }
    });
  }
  /* Lightbox */
  var items = $$('.g-it');
  if (items.length) {
    var lb = document.createElement('div'); lb.className = 'lbx'; lb.hidden = true; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true');
    lb.innerHTML = '<button class="lbx-x" aria-label="Schließen">✕</button><div class="lbx-img"><img alt=""></div><div class="lbx-bar"><button data-d="-1" aria-label="Vorheriges Bild">←</button><div><b></b><p class="small" style="color:#b9c8e6;margin:4px 0 0"></p></div><button data-d="1" aria-label="Nächstes Bild">→</button></div>';
    document.body.appendChild(lb);
    var cur = 0;
    var show = function (i) { cur = (i + items.length) % items.length; var it = items[cur]; $('img', lb).src = $('img', it).src; $('img', lb).alt = $('img', it).alt; $('b', lb).textContent = $('figcaption b', it).textContent; $('p', lb).textContent = $('figcaption span', it).textContent; };
    var open = function (i) { show(i); lb.hidden = false; if (lenis) lenis.stop(); $('.lbx-x', lb).focus(); };
    var close = function () { lb.hidden = true; if (lenis) lenis.start(); items[cur].focus(); };
    items.forEach(function (it, i) { it.addEventListener('click', function () { open(i); }); it.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i); } }); });
    $('.lbx-x', lb).addEventListener('click', close);
    lb.addEventListener('click', function (e) { if (e.target === lb || e.target.classList.contains('lbx-img')) close(); });
    $$('[data-d]', lb).forEach(function (b) { b.addEventListener('click', function () { show(cur + +b.dataset.d); }); });
    document.addEventListener('keydown', function (e) { if (lb.hidden) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') show(cur - 1); if (e.key === 'ArrowRight') show(cur + 1); });
    var sx = 0; lb.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', function (e) { var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1)); });
  }

  /* Budget-Regler */
  var rng = $('[data-tier]'), vis = $('[data-kitchen]'), lab = $('[data-tier-label]'), tiers = $$('.tier');
  var TN = ['Einstieg', 'Komfort', 'Premium'];
  function setTier(v) {
    v = +v; if (vis) vis.setAttribute('data-t', v);
    if (lab) lab.textContent = TN[v];
    tiers.forEach(function (t) { t.classList.toggle('on', +t.dataset.t === v); t.style.opacity = ''; t.style.transform = ''; });
    if (rng) rng.style.background = '';
    $$('[data-bud] button').forEach(function (b, i) { b.classList.toggle('on', i === v); });
  }
  if (rng) {
    rng.addEventListener('input', function () { setTier(rng.value); });
    setTier(rng.value);
    // Kleine Demo, wenn der Abschnitt ins Bild kommt
    if (!RM) onView([vis], function () { var seq = [0, 1, 2, 1], i = 0; var iv = setInterval(function () { if (rng.dataset.touched) return clearInterval(iv); rng.value = seq[i]; setTier(seq[i]); if (++i >= seq.length) clearInterval(iv); }, 1100); }, 0.4);
    rng.addEventListener('pointerdown', function () { rng.dataset.touched = 1; });
    rng.addEventListener('keydown', function () { rng.dataset.touched = 1; });
  }

  /* Spülen-Farben */
  var sink = $('[data-sink]');
  $$('.sp-btns button').forEach(function (b) {
    var pre = new Image(); pre.src = 'img/' + b.dataset.s + '.webp';
    b.addEventListener('click', function () {
      $$('.sp-btns button').forEach(function (x) { x.classList.toggle('on', x === b); });
      sink.classList.add('swap');
      setTimeout(function () { sink.src = 'img/' + b.dataset.s + '.webp'; sink.alt = b.getAttribute('aria-label').replace('Spüle', 'Granitspüle'); sink.onload = function () { sink.classList.remove('swap'); }; setTimeout(function () { sink.classList.remove('swap'); }, 500); }, 220);
    });
  });

  /* Anfrage */
  $$('.chips').forEach(function (g) {
    $$('button', g).forEach(function (b) { b.addEventListener('click', function () { $$('button', g).forEach(function (x) { x.classList.toggle('on', x === b); }); }); });
  });
  var form = $('[data-form]');
  if (form) {
    var via = 'wa';
    $$('[data-via]', form).forEach(function (b) { b.addEventListener('click', function () { via = b.dataset.via; }); });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var what = ($('[data-what] .on', form) || {}).textContent || 'Neue Küche';
      var bud = ($('[data-bud] .on', form) || {}).textContent || '';
      var name = ($('[data-name]', form).value || '').trim();
      var msg = 'Hallo Frau Erbelding,\n\nich interessiere mich für: ' + what + '\nBudget-Rahmen: ' + bud + '\n\nKönnen wir einen Beratungstermin vereinbaren?\n\nViele Grüße' + (name ? '\n' + name : '');
      if (via === 'mail') location.href = 'mailto:kuechenstudio-erbelding@t-online.de?subject=' + encodeURIComponent('Beratungsanfrage: ' + what) + '&body=' + encodeURIComponent(msg);
      else window.open('https://wa.me/491745181818?text=' + encodeURIComponent(msg), '_blank', 'noopener');
    });
  }



  /* VR-Teaser: echte 3D-Küche, "VR-Blick" = Augenhöhe mit Brillen-Rand */
  var vr = $('[data-vr]');
  if (vr) {
    var host = $('[data-vr3d]', vr), K3 = null;
    var st = (function () {
      var items = [], id = 1, W = 460, D = 380;
      function at(t, w, along, extra) { var d = { us: 60, sp: 60, kf: 60, gs: 60, hs: 60, ws: 35, hb: 50 }[t]; var it = Object.assign({ id: id++, t: t, w: w, x: along, z: d / 2, r: 0 }, extra || {}); items.push(it); }
      var a = 0; [['hs', 60, { v: 'kuehl' }], ['hs', 60, { v: 'backofen' }], ['us', 60], ['us', 60], ['sp', 90], ['gs', 60], ['us', 70]].forEach(function (q) { at(q[0], q[1], a + q[1] / 2, q[2]); a += q[1]; });
      var b = 120; [60, 60].forEach(function (w) { at('ws', w, b + w / 2); b += w; }); b = 360; at('ws', 100, b + 50, { v: 'glas' });
      items.push({ id: id++, t: 'in', w: 240, d: 100, x: 230, z: 235, r: 0, v: 'kochfeld' });
      return { room: { w: W, d: D, walls: { N: 1, E: 1, S: 0, W: 1 } }, open: [{ id: 99, t: 'fenster', wall: 'N', s: 245, w: 110, y: 105, h: 115 }], items: items, style: { front: '#7d8c75', wood: null, finish: 'matt', top: 'eiche', handle: 'schwarz', wall: '#f2eee8', floor: 'eiche' } };
    })();
    var go = function () {
      new Promise(function (res, rej) { if (window.PelPlanner3D) return res(); var sc = document.createElement('script'); sc.src = 'js/planner3d.js'; sc.onload = res; sc.onerror = rej; document.head.appendChild(sc); })
        .then(function () { var l = $('.pt-load', host); if (l) l.remove(); K3 = PelPlanner3D(host, {}); K3.set(st); })
        .catch(function () { var l = $('.pt-load', host); if (l) l.textContent = '3D konnte nicht geladen werden.'; });
    };
    if ('IntersectionObserver' in window) { var io3 = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { io3.disconnect(); go(); } }, { rootMargin: '400px' }); io3.observe(vr); } else go();
    $$('[data-vrv]', vr).forEach(function (b) { b.addEventListener('click', function () { $$('[data-vrv]', vr).forEach(function (x) { x.classList.toggle('on', x === b); }); vr.classList.toggle('goggles', b.dataset.vrv === 'augen'); if (K3) K3.view(b.dataset.vrv); }); });
    // Farbe der Musterküche wechselt passend zum Budget-Regler
    var rngT = $('[data-tier]'); if (rngT) rngT.addEventListener('input', function () { if (!K3) return; var v = +rngT.value; st.style = Object.assign({}, st.style, [{ front: '#f4f2ee', top: 'beton', handle: 'bar' }, { front: '#7d8c75', top: 'eiche', handle: 'schwarz' }, { front: '#1d1e20', top: 'marmor', handle: 'grifflos' }][v]); K3.set(st); });
  }

  /* Unterlagen senden */
  var ulf = $('[data-ulform]');
  if (ulf) {
    $$('[data-ul]').forEach(function (b) { b.addEventListener('click', function () { $$('[data-ul]').forEach(function (x) { x.classList.toggle('on', x === b); }); $('[data-ul-val]').value = b.dataset.ul; $('[data-ul-title]').textContent = { 'Aufmaß / Grundriss': 'Aufmaß oder Grundriss schicken', 'Eigenes Projekt': 'Ihr eigenes Projekt schicken', 'Gegenangebot prüfen': 'Angebot kostenlos prüfen lassen', 'Für Kita / Betrieb': 'Anfrage für Kita, Büro oder Betrieb' }[b.dataset.ul]; }); });
    var fi = $('[data-ul-files]'), drop = $('[data-drop]');
    fi.addEventListener('change', function () { $('[data-ul-list]').innerHTML = [].map.call(fi.files, function (f) { return '<li>' + f.name + ' <em>' + (f.size / 1e6).toFixed(1).replace('.', ',') + ' MB</em></li>'; }).join(''); });
    ['dragenter', 'dragover'].forEach(function (ev) { drop.addEventListener(ev, function () { drop.classList.add('over'); }); }); ['dragleave', 'drop'].forEach(function (ev) { drop.addEventListener(ev, function () { drop.classList.remove('over'); }); });
    ulf.addEventListener('submit', function (e) { var t = 0; [].forEach.call(fi.files, function (f) { t += f.size; }); if (t > 9.5e6) { e.preventDefault(); $('[data-ul-msg]').textContent = 'Zusammen über 10 MB – bitte weniger oder kleinere Dateien wählen, oder per WhatsApp schicken.'; return; } $('[name="_next"]', ulf).value = location.href.split('#')[0].split('?')[0] + '?gesendet=1#unterlagen'; });
    if (/[?&]gesendet=1/.test(location.search)) $('[data-ul-sent]').hidden = false;
  }


  /* ---------- Live: Reel-Karussell ---------- */
  (function () {
    var st = document.querySelector('[data-reels]'); if (!st) return;
    var R = [].slice.call(st.querySelectorAll('.rl')), num = st.querySelector('[data-rnum]'), cur = 0, t = 0, vis = false;
    function set(c) { cur = (c + R.length) % R.length; R.forEach(function (r, i) { var p = (i - cur + R.length) % R.length; r.setAttribute('data-pos', p); var v = r.querySelector('video'); if (p === 0 && vis) { v.play().catch(function () {}); } else v.pause(); }); num.textContent = (cur + 1) + ' / ' + R.length; }
    function auto() { clearInterval(t); t = setInterval(function () { set(cur + 1); }, 9000); }
    R.forEach(function (r, i) { r.addEventListener('click', function (e) { if (r.getAttribute('data-pos') !== '0') { e.preventDefault(); set(i); auto(); } }); });
    st.querySelector('[data-rprev]').addEventListener('click', function () { set(cur - 1); auto(); });
    st.querySelector('[data-rnext]').addEventListener('click', function () { set(cur + 1); auto(); });
    new IntersectionObserver(function (es) { vis = es[0].isIntersecting; set(cur); if (vis) auto(); else clearInterval(t); }, { threshold: .3 }).observe(st);
    set(0);
    if (window.gsap && window.ScrollTrigger && !matchMedia('(prefers-reduced-motion: reduce)').matches) gsap.fromTo(st, { rotateX: 10, y: 60 }, { rotateX: 0, y: 0, ease: 'none', scrollTrigger: { trigger: st, start: 'top bottom', end: 'center center', scrub: true } });
  })();

  /* ---------- Schnäppchen: Tilt + Video ---------- */
  [].forEach.call(document.querySelectorAll('[data-tilt]'), function (c) {
    var v = c.querySelector('video');
    if (v) new IntersectionObserver(function (es) { es[0].isIntersecting ? v.play().catch(function () {}) : v.pause(); }, { threshold: .4 }).observe(c);
    if (matchMedia('(hover: hover)').matches) {
      c.addEventListener('pointermove', function (e) { var r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; c.style.transform = 'perspective(900px) rotateY(' + (x * 8) + 'deg) rotateX(' + (-y * 8) + 'deg)'; });
      c.addEventListener('pointerleave', function () { c.style.transform = ''; });
    }
  });

  
  /* Barbara: Zitate */
  (function () {
    var box = $('[data-quotes]'); if (!box) return;
    var qs = $$('blockquote', box), i = 0;
    if (RM) return;
    setInterval(function () { if (document.hidden) return; qs[i].classList.remove('on'); i = (i + 1) % qs.length; qs[i].classList.add('on'); }, 5200);
  })();
  /* Zähler */
  (function () {
    var els = $$('[data-count]'); if (!els.length || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return; io.unobserve(e.target);
        var el = e.target, to = +el.dataset.count, t0 = null; if (RM) { el.textContent = to; return; }
        (function step(t) { if (!t0) t0 = t; var p = Math.min(1, (t - t0) / 1400); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); })(performance.now());
      });
    }, { threshold: .6 });
    els.forEach(function (el) { io.observe(el); });
  })();
  /* Zeitreise */
  (function () {
    var sec = $('[data-zr]'); if (!sec) return;
    var tr = $('[data-ztrack]', sec), cards = $$('.zr-c', tr), btns = $$('[data-zy]', sec), big = $('[data-zbig]', sec), prog = $('[data-zprog]', sec), rail = $('.zr-rail', sec);
    var curY = null;
    function setYear(y) {
      if (y === curY) return; curY = y;
      btns.forEach(function (b) { var on = b.dataset.zy == y; b.classList.toggle('on', on); if (on && rail) { var l = b.offsetLeft - rail.clientWidth / 2 + b.clientWidth / 2; rail.scrollTo({ left: l, behavior: RM ? 'auto' : 'smooth' }); } });
      if (big) { big.classList.add('swap'); setTimeout(function () { big.textContent = y; big.classList.remove('swap'); }, 200); }
    }
    function onS() {
      var max = tr.scrollWidth - tr.clientWidth; if (prog) prog.style.width = (max > 0 ? tr.scrollLeft / max * 100 : 0) + '%';
      var x = tr.scrollLeft + tr.clientWidth * .3, pick = cards[0];
      cards.forEach(function (c) { if (c.offsetLeft <= x) pick = c; });
      if (pick) setYear(pick.dataset.y);
    }
    tr.addEventListener('scroll', function () { requestAnimationFrame(onS); }, { passive: true });
    btns.forEach(function (b) { b.addEventListener('click', function () { var c = cards.filter(function (k) { return k.dataset.y == b.dataset.zy; })[0]; if (c) tr.scrollTo({ left: c.offsetLeft - parseFloat(getComputedStyle(tr).paddingLeft), behavior: RM ? 'auto' : 'smooth' }); }); });
    function by(d) { var w = cards[0] ? cards[0].getBoundingClientRect().width + 20 : 300; tr.scrollBy({ left: d * w, behavior: RM ? 'auto' : 'smooth' }); }
    var p = $('[data-zprev]', sec), n = $('[data-znext]', sec);
    if (p) p.addEventListener('click', function () { by(-1); }); if (n) n.addEventListener('click', function () { by(1); });
    tr.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') { e.preventDefault(); by(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); by(-1); } });
    /* Maus-Ziehen (Desktop) */
    var down = false, sx = 0, sl = 0, moved = false;
    tr.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.clientX; sl = tr.scrollLeft; });
    window.addEventListener('pointermove', function (e) { if (!down) return; var dx = e.clientX - sx; if (Math.abs(dx) > 5) { moved = true; tr.classList.add('drag'); } tr.scrollLeft = sl - dx; });
    window.addEventListener('pointerup', function () { if (!down) return; down = false; setTimeout(function () { tr.classList.remove('drag'); }, 30); });
    tr.addEventListener('click', function (e) { if (moved) { e.preventDefault(); moved = false; } }, true);
    /* Mausrad senkrecht -> waagerecht, solange Track noch Platz hat */
    onS();
  })();
  window.addEventListener('load', function () { if (hasG) ScrollTrigger.refresh(); });
})();
