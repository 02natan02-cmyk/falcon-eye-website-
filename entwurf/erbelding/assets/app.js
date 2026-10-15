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
  if (window.Lenis && !RM) {
    lenis = new Lenis({ lerp: 0.11, smoothWheel: true });
    if (hasG) { lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add(function (t) { lenis.raf(t * 1000); }); gsap.ticker.lagSmoothing(0); }
    else { (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })(0); }
    document.documentElement.classList.add('lenis');
  }
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
  if (hero) {
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
    var rv = $$('.h2,.familie .lead,.years li,.tier.on,.ref,.ex,.anfrage,.sp-img,.bu-vis,.ku-head .small');
    rv.forEach(function (el) { gsap.set(el, { opacity: 0, y: 34 }); });
    onView(rv, function (el) { gsap.to(el, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: el.classList.contains('ref') ? ($$('.ref').indexOf(el) * 0.08) : 0 }); });
    setTimeout(function () { rv.forEach(function (el) { if (getComputedStyle(el).opacity === '0' && el.getBoundingClientRect().top < innerHeight) gsap.to(el, { opacity: 1, y: 0, duration: 0.5 }); }); }, 3500);
  }

  /* Jahreszahlen hochzählen */
  onView($$('[data-y]'), function (el) {
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
          scrollTrigger: { trigger: '.ku-pin', start: 'top top', end: function () { return '+=' + dist(); }, pin: true, scrub: 0.6, invalidateOnRefresh: true, anticipatePin: 1 } });
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

  window.addEventListener('load', function () { if (hasG) ScrollTrigger.refresh(); });
})();
