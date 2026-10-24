/* Falcon Eye – Webdesign: „Kurz gefragt.“
   Jede Antwort bekommt beim Öffnen eine eigene kleine Szene (GSAP, liegt schon auf der Seite).
   Die erste Frage öffnet sich beim Sichtkontakt von selbst, danach zeigt ein Hinweis auf die übrigen.
   Ohne GSAP oder bei reduzierter Bewegung: Aufklappen ohne Bewegung, Szenen stehen im fertigen Zustand. */
(function () {
  'use strict';
  var sec = document.querySelector('#fragen.wdm-fq');
  if (!sec) return;
  var list = sec.querySelector('.wdm-list');
  var items = [].slice.call(sec.querySelectorAll('.wdm-q'));
  if (!list || !items.length) return;
  var G = window.gsap;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var touched = false, hintT = 0;

  /* ---------- Szenen ---------- */
  var rnd = function () { return 100 + (Math.random() * 899 | 0); };
  var V = {
    tage: {
      play: function (el, q, tl) {
        var cnt = el.querySelector('.v-cnt'), o = { n: 1 };
        cnt.textContent = 'TAG 1';
        tl.from(q('.v-sl'), { opacity: 0, y: 6, stagger: .2, duration: .3 }, 0);
        tl.from(q('.v-sg'), { scaleX: 0, transformOrigin: '0% 50%', stagger: .2, duration: .22, ease: 'power2.out' }, 0);
        tl.to(o, { n: 7, duration: 1.24, ease: 'none', onUpdate: function () { cnt.textContent = 'TAG ' + Math.max(1, Math.round(o.n)); } }, 0);
        tl.from(q('.v-chip'), { scale: .4, opacity: 0, transformOrigin: '50% 50%', stagger: .16, duration: .45, ease: 'back.out(2.4)' }, 1.45);
        tl.from(q('.v-live'), { opacity: 0, scale: .5, transformOrigin: '0% 100%', duration: .4, ease: 'back.out(3)' }, 1.95);
      },
      reset: function (el) { el.querySelector('.v-cnt').textContent = 'TAG 7'; }
    },
    preis: {
      play: function (el, q, tl) {
        tl.set(q('.v-front'), { opacity: 1 }, 0);
        tl.set(q('.v-back'), { opacity: 0 }, 0);
        tl.from(q('.v-wf .v-fr'), { opacity: 0, duration: .3 }, 0);
        tl.from(q('.v-wf rect:not(.v-fr)'), { y: -26, opacity: 0, stagger: .11, duration: .45, ease: 'back.out(1.8)' }, .1);
        tl.from(q('.v-cap.y'), { opacity: 0, duration: .4 }, .85);
        tl.from(q('.v-tagw'), { y: -120, duration: .75, ease: 'bounce.out' }, .8);
        tl.from(q('.v-tag'), { rotation: -16, transformOrigin: '50% 0%', duration: 1.5, ease: 'elastic.out(1,.32)' }, 1.0);
        tl.to(q('.v-front'), { scaleX: 0, transformOrigin: '50% 50%', duration: .16, ease: 'power2.in' }, 2.35);
        tl.set(q('.v-front'), { opacity: 0 }, 2.51);
        tl.set(q('.v-back'), { opacity: 1 }, 2.51);
        tl.from(q('.v-back'), { scaleX: 0, transformOrigin: '50% 50%', duration: .22, ease: 'power2.out' }, 2.51);
      }
    },
    domain: {
      play: function (el, q, tl) {
        var hub = q('.v-hub');
        tl.from(hub, { scale: .7, opacity: 0, transformOrigin: '50% 50%', duration: .5, ease: 'back.out(2)' }, 0);
        tl.from(q('.v-md'), { x: -140, opacity: 0, duration: .6, ease: 'back.out(1.4)' }, .35);
        tl.from(q('.v-mh'), { x: 140, opacity: 0, duration: .6, ease: 'back.out(1.4)' }, .65);
        tl.from(q('.v-mm'), { y: 80, opacity: 0, duration: .6, ease: 'back.out(1.4)' }, .95);
        [.95, 1.25, 1.55].forEach(function (t) { tl.fromTo(hub, { scale: 1 }, { scale: 1.05, transformOrigin: '50% 50%', duration: .1, yoyo: true, repeat: 1, ease: 'power1.inOut', immediateRender: false }, t); });
        tl.from(q('.v-md .v-cn'), { opacity: 0, duration: .2 }, .9);
        tl.from(q('.v-mh .v-cn'), { opacity: 0, duration: .2 }, 1.2);
        tl.from(q('.v-mm .v-cn'), { opacity: 0, duration: .2 }, 1.5);
        tl.from(q('.v-wart'), { opacity: 0, y: -8, duration: .5 }, 1.9);
      }
    },
    aendern: {
      play: function (el, q, tl) {
        var min = el.querySelector('.v-min'), o = { n: 0 }, pk = q('.v-pk');
        min.textContent = '0 Min.';
        tl.from(q('.v-bub'), { scale: .6, opacity: 0, transformOrigin: '0% 50%', duration: .45, ease: 'back.out(2)' }, 0);
        tl.fromTo(q('.v-wv'), { fill: 'rgba(255,208,0,.28)', scaleY: .25, transformOrigin: '50% 50%' }, { fill: '#ffd000', scaleY: 1, stagger: .05, duration: .18, ease: 'power2.out', immediateRender: false }, .45);
        tl.set(pk, { opacity: 1 }, 1.75);
        tl.to(pk, { x: 24, duration: .35, ease: 'power2.in' }, 1.75);
        tl.to(pk, { opacity: 0, scale: 2.6, transformOrigin: '50% 50%', duration: .2 }, 2.1);
        tl.fromTo(q('.v-hl'), { attr: { width: 50 }, fill: 'rgba(230,236,236,.36)' }, { attr: { width: 100 }, fill: '#ffd000', duration: .6, ease: 'power2.out', immediateRender: false }, 2.15);
        tl.from(q('.v-nb'), { scale: 0, transformOrigin: '0% 50%', duration: .4, ease: 'back.out(3)' }, 2.45);
        tl.from(q('.v-ph'), { opacity: 0, y: 6, duration: .5 }, 2.65);
        tl.fromTo(q('.v-prog'), { strokeDashoffset: 94.25 }, { strokeDashoffset: 0, duration: 1.6, ease: 'none', immediateRender: false }, 1.75);
        tl.to(o, { n: 10, duration: 1.6, ease: 'none', onUpdate: function () { min.textContent = Math.round(o.n) + ' Min.'; } }, 1.75);
        tl.from(q('.v-live'), { opacity: 0, scale: .4, transformOrigin: '100% 100%', duration: .35, ease: 'back.out(3)' }, 3.4);
      },
      reset: function (el) { el.querySelector('.v-min').textContent = '10 Min.'; }
    },
    entwurf: {
      play: function (el, q, tl) {
        var num = el.querySelector('.v-num'), o = { t: 0 }, tick = 0;
        tl.from(q('.v-disp'), { opacity: 0, scale: .92, transformOrigin: '50% 50%', duration: .4 }, 0);
        tl.call(function () { num.classList.add('is-roll'); num.textContent = rnd() + ' €'; }, null, .15);
        tl.to(o, { t: 1, duration: 1.15, ease: 'none', onUpdate: function () { if (++tick % 3 === 0 && o.t < 1) num.textContent = rnd() + ' €'; } }, .2);
        tl.call(function () { num.classList.remove('is-roll'); num.textContent = '0 €'; }, null, 1.38);
        tl.fromTo(num, { scale: 1.4, transformOrigin: '50% 70%' }, { scale: 1, duration: .7, ease: 'elastic.out(1,.5)', immediateRender: false }, 1.38);
        tl.from(q('.v-stamp'), { scale: 2.4, opacity: 0, rotation: -34, transformOrigin: '50% 50%', duration: .45, ease: 'back.out(2)' }, 1.65);
        tl.from(q('.v-steps .s1'), { opacity: 0, duration: .4 }, 2.0);
        tl.from(q('.v-steps .s2'), { opacity: 0, duration: .4 }, 2.35);
      },
      reset: function (el) { var n = el.querySelector('.v-num'); n.classList.remove('is-roll'); n.textContent = '0 €'; }
    },
    google: {
      play: function (el, q, tl) {
        tl.from(q('.v-src'), { x: -26, opacity: 0, stagger: .12, duration: .45 }, 0);
        tl.from(q('.v-ca,.v-cc'), { opacity: 0, y: 10, stagger: .1, duration: .35 }, .15);
        tl.from(q('.v-cb'), { opacity: 0, y: 10, duration: .35 }, .3);
        tl.from(q('.v-t1'), { opacity: 0, y: 4, duration: .35 }, .5);
        tl.from(q('.v-beam'), { scaleX: 0, opacity: 0, transformOrigin: '0% 50%', duration: .7, ease: 'power2.out' }, .7);
        tl.set(q('.v-scan'), { x: 0, opacity: 0 }, 0);
        tl.to(q('.v-scan'), { opacity: 1, duration: .15 }, .95);
        tl.to(q('.v-scan'), { x: 200, duration: 1.2, ease: 'power1.inOut' }, 1.0);
        tl.to(q('.v-scan'), { opacity: 0, duration: .25 }, 2.2);
        tl.from(q('.v-glow'), { opacity: 0, duration: .4 }, 1.55);
        tl.from(q('.v-h1'), { scaleX: 0, transformOrigin: '0% 50%', duration: .3 }, 1.6);
        tl.from(q('.v-faq'), { opacity: 0, duration: .3 }, 1.85);
        tl.from(q('.v-sch'), { opacity: 0, y: 4, duration: .3 }, 2.05);
        tl.from(q('.v-ck'), { opacity: 0, x: -8, stagger: .25, duration: .35 }, 1.65);
        tl.from(q('.v-t2'), { opacity: 0, y: -4, duration: .45 }, 2.45);
      }
    },
    php: {
      play: function (el, q, tl) {
        tl.from(q('.v-old'), { opacity: 0, x: -14, duration: .4 }, 0);
        tl.from(q('.v-no'), { scale: 2.4, opacity: 0, rotation: -40, transformOrigin: '50% 50%', duration: .45, ease: 'back.out(2.2)' }, .45);
        tl.from(q('.v-cap.r'), { opacity: 0, duration: .3 }, .85);
        tl.from(q('.v-new'), { opacity: 0, x: 16, duration: .5 }, .5);
        tl.from(q('.v-sh'), { y: -80, opacity: 0, duration: .75, ease: 'bounce.out' }, 1.0);
        tl.set(q('.v-sc'), { y: 0, opacity: 0 }, 0);
        tl.to(q('.v-sc'), { opacity: 1, duration: .1 }, 1.85);
        tl.to(q('.v-sc'), { y: 62, duration: 1.0, ease: 'power1.inOut' }, 1.9);
        tl.to(q('.v-sc'), { opacity: 0, duration: .2 }, 2.8);
        tl.from(q('.v-ok'), { scale: 0, transformOrigin: '50% 50%', duration: .4, ease: 'back.out(3)' }, 2.85);
        tl.from(q('.v-cap.y'), { opacity: 0, duration: .4 }, 2.5);
      }
    },
    drohne: {
      play: function (el, q, tl) {
        var path = el.querySelector('.v-trail'), dr = el.querySelector('.v-dr'), len = path.getTotalLength(), o = { p: 0 };
        el._dr0 = el._dr0 || dr.getAttribute('transform');
        tl.from(q('.v-sky rect'), { scaleY: 0, transformOrigin: '50% 100%', stagger: .05, duration: .4 }, 0);
        tl.from(q('.v-gate'), { opacity: 0, scale: .6, transformOrigin: '50% 50%', stagger: .12, duration: .4 }, .1);
        tl.from(q('.v-hud'), { opacity: 0, duration: .4 }, .2);
        path.style.strokeDasharray = len + ' ' + len; path.style.strokeDashoffset = len;
        dr.setAttribute('transform', 'translate(8,108) scale(.7)');
        tl.to(o, {
          p: 1, duration: 2.9, ease: 'power1.inOut',
          onUpdate: function () {
            var d = o.p * len, a = path.getPointAtLength(d), b = path.getPointAtLength(Math.min(len, d + 2));
            var ang = Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI;
            dr.setAttribute('transform', 'translate(' + a.x.toFixed(1) + ',' + a.y.toFixed(1) + ') rotate(' + (ang * .45).toFixed(1) + ') scale(' + (.7 + .45 * o.p).toFixed(2) + ')');
            path.style.strokeDashoffset = (len * (1 - o.p)).toFixed(1);
          },
          onComplete: function () { dr.setAttribute('transform', el._dr0); path.style.strokeDasharray = ''; path.style.strokeDashoffset = ''; }
        }, .45);
      },
      reset: function (el) {
        var dr = el.querySelector('.v-dr'), path = el.querySelector('.v-trail');
        if (el._dr0) dr.setAttribute('transform', el._dr0);
        path.style.strokeDasharray = ''; path.style.strokeDashoffset = '';
      }
    },
    wen: {
      play: function (el, q, tl) {
        tl.from(q('.v-kind'), { scale: 0, opacity: 0, transformOrigin: '50% 50%', stagger: .12, duration: .45, ease: 'back.out(2.4)' }, 0);
        tl.from(q('.v-seat'), { scale: 0, opacity: 0, transformOrigin: '50% 50%', stagger: .07, duration: .3, ease: 'back.out(3)' }, .75);
        tl.from(q('.v-sc2'), { opacity: 0, y: 6, duration: .4 }, 1.95);
      }
    }
  };

  /* Plätze aus daten/plaetze.json (dieselbe Quelle wie der Zähler weiter oben) */
  var seatsDone = false;
  function loadSeats() {
    if (seatsDone) return; seatsDone = true;
    var el = sec.querySelector('.v-wen');
    if (!el || !window.fetch) return;
    fetch('daten/plaetze.json', { cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : Promise.reject(); }).then(function (j) {
      var total = Math.min(15, +j.gesamt || 15), taken = Math.max(0, Math.min(total, +j.vergeben || 0));
      [].forEach.call(el.querySelectorAll('.v-seat'), function (c, i) {
        if (i >= total) c.style.display = 'none';
        c.classList.toggle('is-taken', i < taken);
      });
      el.querySelector('[data-seats]').textContent = (total - taken) + ' von ' + total + ' Plätzen frei · bis Black Friday';
    }).catch(function () { var t = el.querySelector('[data-seats]'); if (t) t.textContent = 'Plätze bis Black Friday'; });
  }

  /* ---------- Szene starten und aufräumen ---------- */
  function stopViz(d) {
    if (d._ctx) { d._ctx.revert(); d._ctx = null; }
    var k = d.dataset.k, v = V[k], viz = d.querySelector('.wdm-viz');
    if (v && v.reset && viz) v.reset(viz);
  }
  function playViz(d) {
    var k = d.dataset.k, v = V[k], viz = d.querySelector('.wdm-viz');
    if (!v || !viz) return;
    if (k === 'wen') loadSeats();
    stopViz(d);
    if (reduce || !G) return;
    d._ctx = G.context(function () {
      var tl = G.timeline({ defaults: { ease: 'power3.out' } });
      var q = function (s) { return viz.querySelectorAll(s); };
      v.play(viz, q, tl);
      d._tl = tl;
      if (sec.classList.contains('wdm-off')) tl.pause();
    }, viz);
  }

  /* ---------- Auf- und Zuklappen ---------- */
  function setOpen(d, openIt, instant) {
    var a = d.querySelector('.wdm-a');
    if (openIt === d.open && !d._closing) return;
    if (instant || reduce || !a.animate) {
      if (a._an) { a._an.cancel(); a._an = null; }
      d._closing = false; d.open = openIt;
      if (openIt) playViz(d); else stopViz(d);
      return;
    }
    if (a._an) { a._an.cancel(); a._an = null; }
    d._closing = false;
    if (openIt) {
      d.open = true;
      var h = a.scrollHeight;
      a._an = a.animate([{ height: '0px', opacity: 0 }, { height: h + 'px', opacity: 1 }], { duration: 420, easing: 'cubic-bezier(.2,.7,.1,1)' });
      a._an.onfinish = function () { a._an = null; };
      setTimeout(function () { if (d.open) playViz(d); }, 260);
    } else {
      var h0 = a.offsetHeight;
      d._closing = true;
      a._an = a.animate([{ height: h0 + 'px', opacity: 1 }, { height: '0px', opacity: 0 }], { duration: 300, easing: 'ease-in' });
      a._an.onfinish = function () { a._an = null; d._closing = false; d.open = false; stopViz(d); };
    }
  }

  function touch() {
    touched = true; list.classList.remove('is-hint'); clearTimeout(hintT);
  }
  items.forEach(function (d) {
    var s = d.querySelector('summary');
    s.addEventListener('click', function (e) {
      e.preventDefault(); touch();
      var willOpen = !d.open || d._closing;
      if (willOpen) items.forEach(function (o) { if (o !== d && (o.open && !o._closing)) setOpen(o, false); });
      setOpen(d, willOpen);
    });
    var rp = d.querySelector('.wdm-rp');
    if (rp) rp.addEventListener('click', function () { touch(); playViz(d); });
  });

  /* ---------- Selbst-Impuls: die erste Frage öffnet sich beim Sichtkontakt ---------- */
  var seen = false;
  function auto() {
    if (seen) return; seen = true;
    setTimeout(function () {
      if (touched || items.some(function (o) { return o.open; })) return;
      setOpen(items[0], true);
      hintT = setTimeout(function () {
        if (!touched) { list.classList.add('is-hint'); hintT = setTimeout(function () { list.classList.remove('is-hint'); }, 14000); }
      }, 1700);
    }, 600);
  }
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) auto();
      });
    }, { threshold: .4 }).observe(list);
    /* außerhalb des Bildes: Szenen anhalten */
    new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        sec.classList.toggle('wdm-off', !e.isIntersecting);
        items.forEach(function (d) { if (d._tl) d._tl.paused(!e.isIntersecting && d._tl.progress() < 1); });
      });
    }, { rootMargin: '30% 0px 30% 0px', threshold: 0 }).observe(sec);
  } else auto();
})();
