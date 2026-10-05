/* Falcon Eye — shared interactions for every page */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const hasGsap = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';
  const PHONE = '4915156743442';
  window.FE = { $, $$, reduce, fine, hasGsap };

  /* ---------- header, menu, dock ---------- */
  const top = $('.top'), hero = $('.eye');
  function onScroll() {
    const y = scrollY;
    if (hero) {
      top.classList.toggle('solid', y > hero.offsetHeight - innerHeight * .6);
      top.classList.toggle('inhero', y < hero.offsetHeight * .45);
    } else top.classList.toggle('solid', y > 30);
    const dock = $('.dock');
    if (dock) {
      const start = hero ? hero.offsetHeight * .7 : innerHeight * .6;
      const form = $('#planner');
      let hide = false;
      if (form) { const r = form.getBoundingClientRect(); hide = r.top < innerHeight && r.bottom > 0; }
      if (!hide) for (const el of document.querySelectorAll('[data-nodock], .missions, .band, footer')) { const r = el.getBoundingClientRect(); if (r.top < innerHeight - 40 && r.bottom > innerHeight - 160) { hide = true; break; } }
      dock.classList.toggle('show', y > start && !hide && !document.body.classList.contains('menu-open'));
    }
  }
  addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll); onScroll();
  if ($('.dock') && !$('.dock').hidden) document.body.classList.add('has-dock');

  const burger = $('.burger');
  if (burger) {
    const toggle = open => {
      document.body.classList.toggle('menu-open', open);
      burger.setAttribute('aria-expanded', open);
      $('.mmenu').setAttribute('aria-hidden', !open);
      onScroll();
    };
    burger.addEventListener('click', () => toggle(!document.body.classList.contains('menu-open')));
    addEventListener('keydown', e => { if (e.key === 'Escape') toggle(false); });
    $$('.mmenu a').forEach(a => a.addEventListener('click', () => toggle(false)));
  }

  /* ---------- copy buttons ---------- */
  $$('[data-copy]').forEach(b => b.addEventListener('click', () => {
    const t = b.dataset.copy, old = b.textContent;
    const done = () => { b.textContent = 'Kopiert'; setTimeout(() => b.textContent = old, 1600); };
    if (navigator.clipboard) navigator.clipboard.writeText(t).then(done, () => { b.textContent = t; });
    else b.textContent = t;
  }));

  /* ---------- OSD clocks ---------- */
  const t0 = performance.now();
  setInterval(() => {
    const s = Math.floor((performance.now() - t0) / 1000);
    $$('[data-osd-clock]').forEach(el => el.textContent = String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'));
    $$('[data-osd-volt]').forEach(el => { const v = Math.max(21.6, 25.2 - s * .01); el.textContent = v.toFixed(1) + 'V'; el.classList.toggle('warn', v < 22.4); });
  }, 1000);

  /* ---------- lazy autoplay for plain background videos ---------- */
  const autoIO = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => {
    const v = e.target;
    if (e.isIntersecting) { if (v.preload !== 'auto') v.preload = 'auto'; v.play().catch(() => {}); } else v.pause();
  }), { rootMargin: '200px 0px' }) : null;
  $$('video[data-auto]').forEach(v => autoIO ? autoIO.observe(v) : v.play().catch(() => {}));

  /* ---------- scrub clips: move across the clip to fly through it ---------- */
  function fmt(t) { return '00:' + String(Math.floor(t)).padStart(2, '0') + ':' + String(Math.floor((t % 1) * 30)).padStart(2, '0'); }
  $$('.clip').forEach(c => {
    const v = $('video', c), tc = $('.tc', c), bar = $('.bar', c);
    if (!v) return;
    let scrubbing = false, raf = 0, target = 0;
    const seek = x => {
      const r = c.getBoundingClientRect(), p = Math.min(1, Math.max(0, (x - r.left) / r.width));
      if (!v.duration) return;
      target = p * (v.duration - .05);
      if (!raf) raf = requestAnimationFrame(() => { raf = 0; v.currentTime = target; });
      if (tc) tc.textContent = fmt(target);
      if (bar) bar.style.transform = `scaleX(${p})`;
    };
    if (fine) {
      c.addEventListener('pointerenter', () => { v.preload = 'auto'; v.pause(); scrubbing = true; c.classList.add('scrubbing'); });
      c.addEventListener('pointermove', e => scrubbing && seek(e.clientX));
      c.addEventListener('pointerleave', () => { scrubbing = false; c.classList.remove('scrubbing'); v.play().catch(() => {}); });
    } else {
      let sx = 0, sy = 0, dragging = false;
      c.addEventListener('touchstart', e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; dragging = false; }, { passive: true });
      c.addEventListener('touchmove', e => {
        const dx = e.touches[0].clientX - sx, dy = e.touches[0].clientY - sy;
        if (!dragging && Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) { dragging = true; v.pause(); c.classList.add('scrubbing'); }
        if (dragging) seek(e.touches[0].clientX);
      }, { passive: true });
      c.addEventListener('touchend', () => { if (dragging) { setTimeout(() => { c.classList.remove('scrubbing'); v.play().catch(() => {}); }, 900); } });
    }
    v.addEventListener('timeupdate', () => { if (!scrubbing && bar && v.duration) bar.style.transform = `scaleX(${v.currentTime / v.duration})`; });
    if (autoIO) autoIO.observe(v);
  });

  /* ---------- lightbox ---------- */
  const lb = $('#lb');
  if (lb) {
    const lv = $('video', lb), lt = $('.meta b', lb), lc = $('.meta a', lb);
    const close = () => { lb.hidden = true; lv.pause(); lv.removeAttribute('src'); lv.load(); document.body.style.overflow = ''; };
    $$('[data-lb]').forEach(b => b.addEventListener('click', e => {
      e.preventDefault();
      lv.src = b.dataset.lb; lt.textContent = b.dataset.title || '';
      if (lc && b.dataset.anlass) lc.href = 'kontakt.html#' + b.dataset.anlass;
      lb.hidden = false; document.body.style.overflow = 'hidden'; lv.play().catch(() => {}); $('.x', lb).focus();
    }));
    $('.x', lb).addEventListener('click', close);
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    addEventListener('keydown', e => { if (e.key === 'Escape' && !lb.hidden) close(); });
  }

  /* ---------- compare slider ---------- */
  $$('.compare').forEach(cmp => {
    const set = x => { const r = cmp.getBoundingClientRect(); const p = Math.min(96, Math.max(4, (x - r.left) / r.width * 100)); cmp.style.setProperty('--split', p + '%'); };
    let down = false;
    cmp.addEventListener('pointerdown', e => { down = true; set(e.clientX); cmp.setPointerCapture(e.pointerId); });
    cmp.addEventListener('pointermove', e => { if (down || fine) set(e.clientX); });
    cmp.addEventListener('pointerup', () => down = false);
    const h = $('.handle button', cmp);
    h.addEventListener('keydown', e => {
      const cur = parseFloat(getComputedStyle(cmp).getPropertyValue('--split')) || 50;
      if (e.key === 'ArrowLeft') cmp.style.setProperty('--split', Math.max(4, cur - 5) + '%');
      if (e.key === 'ArrowRight') cmp.style.setProperty('--split', Math.min(96, cur + 5) + '%');
    });
    $$('video', cmp).forEach(v => autoIO && autoIO.observe(v));
  });

  /* ---------- tab-like selectors (hangar, case galleries) ---------- */
  $$('[data-switch]').forEach(group => {
    const target = $(group.dataset.switch);
    const btns = $$('[data-src]', group);
    btns.forEach(b => b.addEventListener('click', () => {
      btns.forEach(x => x.setAttribute('aria-selected', x === b));
      const v = $('video', target), ns = $('.nosig', target), op = $('.open', target);
      if (!b.dataset.src) { if (v) { v.pause(); v.hidden = true; } if (ns) ns.hidden = false; }
      else {
        if (ns) ns.hidden = true;
        if (v) { v.hidden = false; if (v.getAttribute('src') !== b.dataset.src) { v.src = b.dataset.src; v.poster = b.dataset.poster || ''; } v.play().catch(() => {}); }
        if (op) op.dataset.lb = b.dataset.src;
      }
      $$('[data-fill]', target.parentElement).forEach(el => { const k = el.dataset.fill; if (b.dataset[k] !== undefined) el.innerHTML = b.dataset[k]; });
    }));
  });

  /* ---------- project filters ---------- */
  const filt = $('.filters');
  if (filt) $$('button', filt).forEach(b => b.addEventListener('click', () => {
    $$('button', filt).forEach(x => x.setAttribute('aria-pressed', x === b));
    const k = b.dataset.f;
    $$('.case').forEach(c => c.hidden = k !== 'alle' && !c.dataset.tags.split(' ').includes(k));
    if (hasGsap) ScrollTrigger.refresh();
  }));

  /* ---------- booking planner ---------- */
  const plan = $('#planner');
  if (plan) {
    const pre = decodeURIComponent((location.hash || '').slice(1));
    const pick = pre && $(`input[name=anlass][data-key="${pre}"]`, plan);
    if (pick) pick.checked = true;
    const steps = $$('.pstep', plan), ind = $$('.steps-ind i', plan);
    let cur = 0;
    const show = i => { cur = i; steps.forEach((s, k) => s.hidden = k !== i); ind.forEach((d, k) => d.classList.toggle('on', k <= i)); $('#planErr').textContent = ''; };
    const val = () => {
      const a = $('input[name=anlass]:checked', plan);
      return { anlass: a ? a.value : '', ort: plan.ort.value.trim(), datum: plan.datum.value, umfang: plan.umfang.value, msg: plan.msg.value.trim(), name: plan.name.value.trim(), kontakt: plan.kontakt.value.trim() };
    };
    const text = d => `Hallo Falcon Eye,\n\nwir möchten einen Dreh anfragen.\n\nAnlass: ${d.anlass}\nOrt: ${d.ort || '–'}\nDatum: ${d.datum || 'noch offen'}\nUmfang: ${d.umfang}\n\n${d.msg}\n\nName: ${d.name}\nKontakt: ${d.kontakt}`;
    $$('[data-next]', plan).forEach(b => b.addEventListener('click', () => {
      const d = val();
      if (cur === 0 && !d.anlass) { $('#planErr').textContent = 'Wählt aus, worum es geht.'; return; }
      show(cur + 1); steps[cur].querySelector('input,select,textarea')?.focus();
    }));
    $$('[data-back]', plan).forEach(b => b.addEventListener('click', () => show(cur - 1)));
    $$('input[name=anlass]', plan).forEach(i => i.addEventListener('change', () => setTimeout(() => show(1), 180)));
    plan.addEventListener('submit', e => {
      e.preventDefault();
      const d = val();
      if (!d.name || !d.kontakt) { $('#planErr').textContent = 'Tragt euren Namen und eine E-Mail oder Telefonnummer ein, damit wir antworten können.'; return; }
      const t = text(d);
      $('#planText').textContent = t;
      $('#waSend').href = `https://wa.me/${PHONE}?text=${encodeURIComponent(t)}`;
      $('#mailSend').href = `mailto:info@falcon-eye.de?subject=${encodeURIComponent('Drehanfrage: ' + d.anlass)}&body=${encodeURIComponent(t)}`;
      $('#planCopy').dataset.copy = t;
      show(steps.length - 1);
    });
    $('#planCopy')?.addEventListener('click', e => {
      const b = e.currentTarget;
      navigator.clipboard?.writeText(b.dataset.copy).then(() => b.textContent = 'Kopiert', () => {
        const r = document.createRange(); r.selectNodeContents($('#planText')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = 'Markiert – jetzt kopieren';
      });
    });
    show(pick ? 1 : 0);
  }

  /* ---------- quick-start chips (send to contact page) ---------- */
  $$('.quick a').forEach(a => a.addEventListener('click', () => {}));

  /* ---------- ticker duplicate ---------- */
  $$('.ticker .row').forEach(r => r.innerHTML += r.innerHTML);

  /* ---------- fly-through sections (scroll scrubs an image sequence) ---------- */
  const flies = $$('.fly');
  function setupFly(sec) {
    const n = +sec.dataset.frames, pat = sec.dataset.src, cv = $('canvas', sec), cx = cv.getContext('2d');
    const frames = new Array(n); let loaded = false, cur = -1;
    const name = i => pat.replace('{n}', String(i + 1).padStart(3, '0'));
    const load = () => {
      if (loaded) return; loaded = true;
      for (let i = 0; i < n; i += 4) frames[i] = Object.assign(new Image(), { src: name(i) });
      setTimeout(() => { for (let i = 0; i < n; i++) if (!frames[i]) frames[i] = Object.assign(new Image(), { src: name(i) }); }, 600);
      frames[0].onload = () => draw(0);
    };
    const nearest = i => { for (let d = 0; d < n; d++) { for (const k of [i - d, i + d]) { const f = frames[k]; if (f && f.complete && f.naturalWidth) return f; } } return null; };
    function draw(i) {
      const im = nearest(i); if (!im) return;
      const dpr = Math.min(devicePixelRatio || 1, 2), w = cv.clientWidth, h = cv.clientHeight;
      if (cv.width !== Math.round(w * dpr) || cv.height !== Math.round(h * dpr)) { cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); }
      const s = Math.max(cv.width / im.naturalWidth, cv.height / im.naturalHeight), dw = im.naturalWidth * s, dh = im.naturalHeight * s;
      cx.drawImage(im, (cv.width - dw) / 2, (cv.height - dh) / 2, dw, dh);
    }
    if ('IntersectionObserver' in window) new IntersectionObserver(es => es.forEach(e => e.isIntersecting && load()), { rootMargin: '150% 0px' }).observe(sec); else load();
    addEventListener('resize', () => draw(Math.max(0, cur)));
    const callouts = $$('.callout', sec), chaps = $$('.chapters span', sec);
    const alt = $('[data-alt]', sec), spd = $('[data-spd]', sec), clk = $('[data-clk]', sec), volt = $('[data-volt]', sec);
    const altFrom = +(sec.dataset.alt || 12), altTo = +(sec.dataset.altTo || 1.5), secs = +(sec.dataset.secs || 9);
    sec.update = (p, vel = 0) => {
      const i = Math.min(n - 1, Math.round(p * (n - 1)));
      if (i !== cur) { cur = i; draw(i); }
      if (alt) alt.textContent = (altFrom + (altTo - altFrom) * p).toFixed(1);
      if (spd) spd.textContent = Math.round(18 + Math.sin(p * Math.PI) * 58 + Math.min(40, Math.abs(vel) / 90));
      if (clk) { const s = Math.floor(p * secs); clk.textContent = '00:' + String(s).padStart(2, '0'); }
      if (volt) volt.textContent = (25.2 - p * 2.4).toFixed(1) + 'V';
      callouts.forEach(c => {
        const at = +c.dataset.at, len = +(c.dataset.len || .2), d = p - at;
        const o = d < 0 ? Math.max(0, 1 + d * 12) : (c.dataset.hold && p > at ? 1 : Math.max(0, 1 - Math.max(0, d - len) * 10));
        c.style.opacity = o; c.style.transform = `translateY(${(1 - o) * 30}px)`; c.style.pointerEvents = o > .5 ? 'auto' : 'none';
      });
      chaps.forEach(ch => {
        const a = +ch.dataset.a, b = +ch.dataset.b, f = Math.min(1, Math.max(0, (p - a) / (b - a)));
        ch.querySelector('b').style.transform = `scaleX(${f})`; ch.classList.toggle('on', p >= a && p < b);
      });
    };
    sec.update(0);
  }
  flies.forEach(setupFly);

  /* ---------- no-signal noise ---------- */
  $$('.nosig canvas').forEach(c => {
    const x = c.getContext('2d'); c.width = 160; c.height = 100; const img = x.createImageData(160, 100);
    (function n() { if (!reduce && c.offsetParent) { for (let i = 0; i < img.data.length; i += 4) { const v = Math.random() * 255; img.data[i] = img.data[i + 1] = img.data[i + 2] = v; img.data[i + 3] = 255; } x.putImageData(img, 0, 0); } setTimeout(() => requestAnimationFrame(n), 70); })();
  });

  /* ---------- footer year ---------- */
  $$('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  if (!hasGsap || reduce) {
    flies.forEach(f => { f.style.height = 'auto'; $$('.callout', f).forEach(c => { c.style.opacity = 1; c.style.position = 'relative'; }); });
    $$('[data-count]').forEach(el => el.textContent = el.dataset.count + (el.dataset.suffix || ''));
    window.FE.ready = true; return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* smooth scroll */
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({ lerp: .1 });
    window.FE.lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
      const id = a.getAttribute('href'); if (id.length < 2 || !$(id)) return;
      e.preventDefault(); lenis.scrollTo(id, { offset: -70 });
    }));
  }

  flies.forEach(sec => ScrollTrigger.create({ trigger: sec, start: 'top top', end: 'bottom bottom', scrub: .3, onUpdate: s => sec.update(s.progress, s.getVelocity()) }));

  /* ticker speed follows scroll */
  $$('.ticker .row').forEach(row => {
    const tw = gsap.to(row, { xPercent: -50, duration: 40, ease: 'none', repeat: -1 });
    ScrollTrigger.create({ onUpdate: s => {
      const v = Math.min(Math.abs(s.getVelocity()) / 400, 6), dir = s.direction < 0 ? -1 : 1;
      gsap.to(tw, { timeScale: dir * (1 + v), duration: .3, overwrite: true });
      gsap.to(tw, { timeScale: dir, duration: 1.2, delay: .3 });
    } });
  });

  /* reveals: start visible, animate only when JS runs */
  $$('.reveal').forEach(el => gsap.from(el, { y: 50, opacity: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } }));
  $$('.clip, .svc-card, .case .media').forEach(c => gsap.from(c, {
    y: 90, rotateX: 14, scale: .9, opacity: 0, transformPerspective: 900, transformOrigin: '50% 100%', duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: c, start: 'top 94%', once: true }
  }));
  $$('[data-count]').forEach(el => {
    const o = { v: 0 }, end = +el.dataset.count, suf = el.dataset.suffix || '';
    gsap.to(o, { v: end, duration: 1.6, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true }, onUpdate: () => el.textContent = Math.round(o.v) + (o.v >= end ? suf : '') });
  });
  $$('.band h2').forEach(h => gsap.from(h, { xPercent: innerWidth < 700 ? 0 : -6, opacity: .2, ease: 'none', scrollTrigger: { trigger: h, start: 'top bottom', end: 'top 45%', scrub: true } }));
  $$('.phero video, .phero img.bg').forEach(v => gsap.to(v, { yPercent: 12, scale: 1.08, ease: 'none', scrollTrigger: { trigger: v.parentElement, start: 'top top', end: 'bottom top', scrub: true } }));
  $$('.phero h1').forEach(h => gsap.from(h, { yPercent: 40, opacity: 0, duration: 1.1, ease: 'power4.out', delay: .1 }));

  window.FE.ready = true;
})();
