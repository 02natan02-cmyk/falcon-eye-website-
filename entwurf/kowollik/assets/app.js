/* Karosserie Kowollik – Designentwurf von Falcon Eye */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const hasG = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
  const page = root.dataset.page;
  const store = { get(k) { try { return sessionStorage.getItem(k) } catch (e) { return null } }, set(k, v) { try { sessionStorage.setItem(k, v) } catch (e) {} } };
  if (hasG) { root.classList.add('js'); gsap.registerPlugin(ScrollTrigger); } else root.classList.add('js-off');

  /* ---------- smooth scroll ---------- */
  let lenis = null;
  if (hasG && window.Lenis && !reduce) {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  /* ---------- header, progress ---------- */
  const hdr = $('.hdr'), bar = $('.progress i');
  let lastY = 0;
  const onScroll = () => {
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    hdr && hdr.classList.toggle('solid', y > 40);
    hdr && hdr.classList.toggle('hide', y > 400 && y > lastY && !root.classList.contains('menu-open'));
    lastY = y;
    if (bar) bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const burger = $('.burger');
  burger && burger.addEventListener('click', () => {
    const o = root.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', o); $('.mnav').setAttribute('aria-hidden', !o);
    if (lenis) o ? lenis.stop() : lenis.start();
  });

  /* ---------- opening hours (Europe/Berlin) ---------- */
  const HOURS = { 1: [[7, 12], [13, 17]], 2: [[7, 12], [13, 17]], 3: [[7, 12], [13, 17]], 4: [[7, 12], [13, 17]], 5: [[7, 15]], 6: [], 0: [] };
  const DN = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
  const berlin = () => {
    const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Berlin', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date()).map(x => [x.type, x.value]));
    return { d: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(p.weekday), m: (+p.hour % 24) * 60 + +p.minute };
  };
  const fmt = h => String(h).padStart(2, '0') + ':00';
  const isOpen = ({ d, m }) => HOURS[d].some(([a, b]) => m >= a * 60 && m < b * 60);
  const nextChange = ({ d, m }) => {
    for (let k = 0; k < 8; k++) {
      const dd = (d + k) % 7;
      for (const [a, b] of HOURS[dd]) {
        const A = a * 60 + k * 1440, B = b * 60 + k * 1440;
        if (m < A) return { open: true, mins: A - m, at: a, day: dd, k };
        if (m < B) return { open: false, mins: B - m, at: b, day: dd, k };
      }
    }
  };
  const paintHours = () => {
    const now = berlin(), open = isOpen(now), nx = nextChange(now);
    $$('[data-status]').forEach(el => {
      el.classList.toggle('open', open); el.classList.toggle('closed', !open);
      el.querySelector('b').textContent = open ? `Geöffnet · bis ${fmt(nx.at)}` : 'Gerade geschlossen';
    });
    $$('[data-hours]').forEach(el => {
      el.innerHTML = [1, 2, 3, 4, 5, 6, 0].map(d => `<div class="${d === now.d ? 'today' : ''}"><span>${DN[d]}${d === now.d ? ' · heute' : ''}</span><span>${HOURS[d].length ? HOURS[d].map(([a, b]) => fmt(a) + '–' + fmt(b)).join(' · ') : 'geschlossen'}</span></div>`).join('');
    });
    $$('[data-countdown]').forEach(el => {
      const h = Math.floor(nx.mins / 60), mi = nx.mins % 60, t = (h ? h + ' Std ' : '') + mi + ' Min';
      el.textContent = open ? `● Jetzt geöffnet – schließt in ${t}.` : `○ Geschlossen – wir öffnen ${nx.k === 0 ? 'heute' : nx.k === 1 ? 'morgen' : 'am ' + DN[nx.day]} um ${fmt(nx.at)} (in ${t}).`;
    });
  };
  paintHours(); setInterval(paintHours, 30000);

  /* ---------- page transitions (curtain) ---------- */
  const cur = $$('.curtain i');
  if (hasG && cur.length) {
    if (store.get('kw-trans')) {
      store.set('kw-trans', '');
      gsap.set(cur, { scaleY: 1, transformOrigin: 'bottom' });
      gsap.to(cur, { scaleY: 0, duration: .7, ease: 'power3.inOut', stagger: .08, delay: .05 });
    }
    document.addEventListener('click', e => {
      const a = e.target.closest('a[href]');
      if (!a || a.target || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const u = new URL(a.href, location.href);
      if (u.origin !== location.origin || !/\.html$|\/$/.test(u.pathname) || u.pathname === location.pathname) return;
      e.preventDefault(); store.set('kw-trans', '1');
      gsap.set(cur, { transformOrigin: 'top' });
      gsap.to(cur, { scaleY: 1, duration: .55, ease: 'power3.inOut', stagger: .07, onComplete: () => location.href = a.href });
    });
  }

  /* ---------- cursor ---------- */
  const cursor = $('.cursor');
  if (cursor && fine) {
    let cx = innerWidth / 2, cy = innerHeight / 2, tx = cx, ty = cy;
    addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; }, { passive: true });
    (function loop() { cx += (tx - cx) * .2; cy += (ty - cy) * .2; cursor.style.transform = `translate(${cx}px,${cy}px)`; requestAnimationFrame(loop); })();
    document.addEventListener('pointerover', e => cursor.classList.toggle('big', !!e.target.closest('a,button,.zone,input,label,.lamp')));
  }

  /* ---------- magnetic buttons, award tilt ---------- */
  if (fine) {
    $$('.mag').forEach(b => {
      b.addEventListener('pointermove', e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px,${(e.clientY - r.top - r.height / 2) * .35}px)`; });
      b.addEventListener('pointerleave', () => b.style.transform = '');
    });
    $$('.tilt').forEach(t => {
      t.addEventListener('pointermove', e => { const r = t.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height; t.style.transform = `perspective(500px) rotateY(${(x - .5) * 26}deg) rotateX(${(.5 - y) * 26}deg) scale(1.06)`; t.style.setProperty('--gx', x * 100 + '%'); t.style.setProperty('--gy', y * 100 + '%'); });
      t.addEventListener('pointerleave', () => t.style.transform = '');
    });
  }

  /* ---------- counters & "in" states ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target; el.classList.add('in'); io.unobserve(el);
    $$('[data-count]', el).concat(el.matches('[data-count]') ? [el] : []).forEach(c => {
      if (c.dataset.done) return; c.dataset.done = 1;
      const end = parseFloat(c.dataset.count), dec = +(c.dataset.dec || 0), nf = 'nofmt' in c.dataset;
      if (reduce) return;
      const t0 = performance.now(), D = 1800, start = nf ? end - 60 : 0;
      (function f(n) { const p = Math.min(1, (n - t0) / D), v = start + (end - start) * (1 - Math.pow(1 - p, 3)); c.textContent = dec ? v.toFixed(dec).replace('.', ',') : Math.round(v); if (p < 1) requestAnimationFrame(f); })(t0);
    });
  }), { threshold: .3 });
  $$('.stat, .rv-score, .sv-media, .fx').forEach(el => io.observe(el));

  /* ---------- generic reveals ---------- */
  if (hasG && !reduce) {
    const targets = $$('.sec-head, .svc, .stat, .road-steps li, .more-g li, .kc, .k-hours, .k-form, .app-card, .rv-qr, .tl, .lamp, .car-top, .check-ui, .lab-stage, .sv-txt, .sv-media, .gi, .ftr-g > div, .cta-band .h2, .cta-band .ctas, .legal > *');
    targets.forEach(t => t.classList.add('rv'));
    ScrollTrigger.batch(targets, { start: 'top 88%', once: true, onEnter: b => gsap.to(b, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: .08, overwrite: true }) });
    // word-by-word statement
    $$('.reveal-words').forEach(h => {
      h.innerHTML = h.textContent.split(' ').map(w => `<span class="w">${w}</span>`).join(' ');
      const ws = $$('.w', h);
      ScrollTrigger.create({ trigger: h, start: 'top 80%', end: 'bottom 45%', scrub: true, onUpdate: s => ws.forEach((w, i) => w.classList.toggle('on', i / ws.length < s.progress * 1.05)) });
    });
    // sub page heroes
    $$('.phero-media img').forEach(i => gsap.to(i, { yPercent: 12, ease: 'none', scrollTrigger: { trigger: i.closest('.phero'), start: 'top top', end: 'bottom top', scrub: true } }));
  } else $$('.reveal-words').forEach(h => h.classList.remove('reveal-words'));

  /* ---------- hero lines ---------- */
  const heroIn = () => {
    if (!hasG || reduce) return;
    gsap.from('.hero .ln > span, .phero .ln > span', { yPercent: 110, duration: 1.2, ease: 'power4.out', stagger: .12 });
    gsap.from('.hero .kicker, .hero .lead, .hero .ctas, .hero-side, .phero .kicker, .phero .lead', { opacity: 0, y: 30, duration: 1, ease: 'power3.out', stagger: .1, delay: .3 });
    gsap.fromTo('.hero-img', { scale: 1.12 }, { scale: 1.04, duration: 2.4, ease: 'power3.out' });
  };
  if (hasG && !reduce && $('.hero')) {
    gsap.to('.hero-img', { yPercent: 14, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    gsap.to('.hero-in', { y: -80, opacity: .2, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  }

  /* ---------- paint mist on hero (pointer trail) ---------- */
  const mist = $('.mist');
  if (mist && !reduce) {
    const ctx = mist.getContext('2d'); let W, H, parts = [], dpr = Math.min(2, devicePixelRatio || 1), active = true;
    const size = () => { W = mist.width = mist.offsetWidth * dpr; H = mist.height = mist.offsetHeight * dpr; };
    size(); addEventListener('resize', size);
    const emit = (x, y, n) => { for (let i = 0; i < n; i++) parts.push({ x: x * dpr, y: y * dpr, vx: (Math.random() - .5) * 2.2 * dpr, vy: (Math.random() - .7) * 2 * dpr, r: (6 + Math.random() * 26) * dpr, a: .5, h: Math.random() < .7 ? 352 : 24 }); if (parts.length > 400) parts.splice(0, parts.length - 400); };
    mist.parentElement.addEventListener('pointermove', e => { const r = mist.getBoundingClientRect(); emit(e.clientX - r.left, e.clientY - r.top, 4); });
    let auto = 0;
    new IntersectionObserver(([e]) => active = e.isIntersecting).observe(mist);
    (function loop() {
      requestAnimationFrame(loop); if (!active) return;
      auto += .012; if (!fine) emit(W / dpr * (.5 + Math.sin(auto) * .35), H / dpr * (.62 + Math.sin(auto * 1.7) * .12), 2);
      ctx.clearRect(0, 0, W, H); ctx.globalCompositeOperation = 'lighter';
      for (const p of parts) { p.x += p.vx; p.y += p.vy; p.vy -= .01; p.r *= 1.012; p.a *= .965; const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r); g.addColorStop(0, `hsla(${p.h},90%,55%,${p.a * .35})`); g.addColorStop(1, `hsla(${p.h},90%,50%,0)`); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fill(); }
      parts = parts.filter(p => p.a > .02);
    })();
  }

  /* ---------- intro: logo is "built" in the paint shop ---------- */
  const intro = $('.intro');
  const endIntro = () => { if (!intro) return; intro.classList.add('gone'); lenis && lenis.start(); heroIn(); };
  if (intro) {
    if (!hasG || reduce || store.get('kw-intro')) { intro.classList.add('gone'); heroIn(); }
    else {
      store.set('kw-intro', '1'); lenis && lenis.stop();
      const cv = $('.il-mist'), cx = cv.getContext('2d'); let ps = [], run = true;
      const fit = () => { cv.width = cv.offsetWidth; cv.height = cv.offsetHeight; }; fit();
      const noz = $('.il-nozzle'), meter = $('.intro-meter b');
      (function loop() {
        if (!run) return; requestAnimationFrame(loop);
        cx.clearRect(0, 0, cv.width, cv.height); cx.globalCompositeOperation = 'lighter';
        if (+gsap.getProperty(noz, 'opacity') > .5) {
          const nr = noz.getBoundingClientRect(), cr = cv.getBoundingClientRect();
          for (let i = 0; i < 6; i++) ps.push({ x: nr.left - cr.left + nr.width / 2 + (Math.random() - .5) * 20, y: nr.bottom - cr.top, vx: (Math.random() - .5) * 3, vy: 2 + Math.random() * 3, r: 4 + Math.random() * 14, a: .6, h: Math.random() < .5 ? 352 : 24 });
        }
        for (const p of ps) { p.x += p.vx; p.y += p.vy; p.vy *= .96; p.r *= 1.03; p.a *= .94; cx.fillStyle = `hsla(${p.h},90%,55%,${p.a * .4})`; cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 7); cx.fill(); }
        ps = ps.filter(p => p.a > .02);
      })();
      const prog = { v: 0 };
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, onComplete: () => { run = false; } });
      tl.to(prog, { v: 100, duration: 3.1, ease: 'none', onUpdate: () => meter.textContent = Math.round(prog.v) + '%' }, 0)
        .to('.il-streaks i', { scaleX: 1, duration: .35, stagger: .05, ease: 'power2.out' }, .1)
        .fromTo('.il-car', { x: '-60vw', skewX: -18 }, { x: 0, skewX: 0, duration: .9, ease: 'expo.out' }, .15)
        .to('.il-streaks i', { scaleX: 0, opacity: 0, duration: .5, stagger: .04 }, .8)
        .set(noz, { opacity: 1, left: '30%' }, 1.0)
        .fromTo('.il-text', { clipPath: 'inset(0% 67% 46% 33%)' }, { clipPath: 'inset(0% 0% 46% 33%)', duration: 1.25, ease: 'power1.inOut' }, 1.0)
        .to(noz, { left: '96%', duration: 1.25, ease: 'power1.inOut' }, 1.0)
        .to(noz, { opacity: 0, y: -40, duration: .3 }, 2.25)
        .fromTo('.il-badge', { y: -120, opacity: 0, scale: 1.4 }, { y: 0, opacity: 1, scale: 1, duration: .6, ease: 'back.out(2.2)' }, 2.35)
        .fromTo('.intro-logo', { x: 0 }, { x: 6, duration: .06, repeat: 5, yoyo: true, ease: 'none' }, 2.62)
        .add(() => $('.intro-meter span').textContent = 'Lack trocken – willkommen', 3.1)
        .to('.intro-stage', { scale: .9, opacity: 0, duration: .6, ease: 'power3.in' }, 3.6)
        .to(intro, { clipPath: 'inset(0 0 100% 0)', duration: .9, ease: 'power4.inOut' }, 3.9)
        .add(endIntro, 4.1);
      $('.intro-skip').addEventListener('click', () => { tl.kill(); run = false; endIntro(); });
    }
  } else heroIn();

  /* ---------- reparatur-zeitraffer ---------- */
  const tlEl = $('.tl');
  if (tlEl) {
    const cases = JSON.parse(tlEl.dataset.cases); let ci = 0;
    const A = $('.tl-a', tlEl), B = $('.tl-b', tlEl), badge = $('.tl-badge', tlEl), txt = $('.tl-text', tlEl), rng = $('input', tlEl), fill = $('.tl-fill', tlEl), steps = $$('.tl-steps span', tlEl);
    cases.flat().forEach(s => { const i = new Image(); i.src = s.src; });
    const set = v => {
      const st = cases[ci], max = (st.length - 1) * 100; v = Math.min(v, max);
      const seg = Math.min(st.length - 2, Math.floor(v / 100)), f = (v - seg * 100) / 100;
      if (A.dataset.s !== st[seg].src) { A.src = st[seg].src; A.dataset.s = st[seg].src; }
      if (B.dataset.s !== st[seg + 1].src) { B.src = st[seg + 1].src; B.dataset.s = st[seg + 1].src; }
      B.style.opacity = f; A.style.transform = `scale(${1 + f * .04})`;
      const k = Math.round(v / 100); badge.textContent = st[k].label; txt.textContent = st[k].text;
      steps.forEach((s, i) => { s.textContent = st[i] ? st[i].label : ''; s.classList.toggle('on', i <= k); s.style.display = st[i] ? '' : 'none'; }); fill.style.width = (v / max * 100) + '%';
    };
    rng.addEventListener('input', () => set(+rng.value));
    const play = () => { rng.max = (cases[ci].length - 1) * 100; if (!hasG || reduce) { rng.value = 0; set(0); return; } const o = { v: 0 }; gsap.to(o, { v: rng.max, duration: 3.6, ease: 'power1.inOut', onUpdate: () => { rng.value = o.v; set(o.v); } }); };
    $$('.tl-tabs button').forEach(b => b.addEventListener('click', () => { $$('.tl-tabs button').forEach(x => x.setAttribute('aria-selected', x === b)); ci = +b.dataset.case; rng.value = 0; set(0); play(); }));
    rng.max = (cases[0].length - 1) * 100; set(0);
    if (hasG) ScrollTrigger.create({ trigger: tlEl, start: 'top 65%', once: true, onEnter: play });
  }

  /* ---------- dent lamp ---------- */
  const lamp = $('.lamp');
  if (lamp) {
    let touched = false, t = 0;
    const move = (x, y) => { const r = lamp.getBoundingClientRect(); lamp.style.setProperty('--x', (x - r.left) + 'px'); lamp.style.setProperty('--y', (y - r.top) + 'px'); };
    lamp.addEventListener('pointermove', e => { touched = true; move(e.clientX, e.clientY); });
    lamp.addEventListener('pointerleave', () => touched = false);
    let vis = false; new IntersectionObserver(([e]) => vis = e.isIntersecting).observe(lamp);
    (function loop() { requestAnimationFrame(loop); if (touched || !vis) return; t += .012; const r = lamp.getBoundingClientRect(); move(r.left + r.width * (.5 + Math.sin(t) * .35), r.top + r.height * (.5 + Math.sin(t * 1.6) * .25)); })();
  }

  /* ---------- schaden-check ---------- */
  const zonesEl = $$('.zone');
  if (zonesEl.length) {
    const sel = new Set(), types = new Set();
    const out = $('.check-out .sel'), rec = $('.check-out .rec'), wa = $('[data-wa]');
    const REC = z => {
      const r = [];
      if (types.has('Steinschlag') || z.includes('glas')) r.push('Autoglasreparatur');
      if (types.has('Delle') || types.has('Hagel')) r.push('Moderne Dellentechnik (Smart Repair)');
      if (types.has('Unfallschaden')) r.push('Unfallinstandsetzung inkl. Versicherungsabwicklung');
      if (types.has('Kratzer') || types.has('Rost')) r.push('Lackierung / Karosseriearbeiten');
      if (z.includes('rad')) r.push('Felgen, Reifen & Achsvermessung');
      if (z.includes('front') && types.has('Unfallschaden')) r.push('Scheinwerfereinstellung prüfen');
      return [...new Set(r)];
    };
    const upd = () => {
      const z = [...sel], names = z.map(k => $(`.zone[data-zone="${k}"]`).dataset.label);
      out.textContent = names.length ? 'Betroffen: ' + names.join(', ') + (types.size ? ' · ' + [...types].join(', ') : '') : 'Noch keine Stelle gewählt.';
      const r = REC(z); rec.textContent = r.length ? 'Unsere Empfehlung: ' + r.join(' + ') : (names.length ? 'Wählen Sie noch die Art des Schadens.' : '');
      const msg = `Hallo Karosserie Kowollik, ich habe einen Schaden an meinem Fahrzeug.${names.length ? '\nStelle: ' + names.join(', ') : ''}${types.size ? '\nArt: ' + [...types].join(', ') : ''}\nKönnen Sie sich das ansehen? Fotos schicke ich gleich mit.`;
      wa.href = 'https://wa.me/491716226690?text=' + encodeURIComponent(msg);
    };
    zonesEl.forEach(z => { const t = () => { z.classList.toggle('on'); z.classList.contains('on') ? sel.add(z.dataset.zone) : sel.delete(z.dataset.zone); upd(); }; z.addEventListener('click', t); z.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); t(); } }); });
    $$('.check .chip').forEach(c => c.addEventListener('click', () => { c.classList.toggle('on'); c.classList.contains('on') ? types.add(c.dataset.t) : types.delete(c.dataset.t); upd(); }));
  }

  /* ---------- horizontal story ---------- */
  const hs = $('.hs');
  if (hs && hasG && !reduce) {
    const track = $('.hs-track', hs), dist = () => Math.max(0, track.scrollWidth - innerWidth + 40);
    gsap.to(track, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: hs, start: 'top top', end: () => '+=' + dist(), pin: '.hs-pin', scrub: 1, invalidateOnRefresh: true, anticipatePin: 1, onUpdate: s => $('.hs-bar i').style.transform = `scaleX(${s.progress})` } });
    $$('.hs-i img', hs).forEach(i => gsap.fromTo(i, { scale: 1.25 }, { scale: 1.05, ease: 'none', scrollTrigger: { trigger: hs, start: 'top top', end: () => '+=' + dist(), scrub: true } }));
  } else if (hs) { const t = $('.hs-track', hs); t.style.overflowX = 'auto'; t.style.width = '100%'; t.style.paddingRight = 'var(--gut)'; $('.hs-pin', hs).style.height = 'auto'; }

  /* ---------- lack-labor (3D with 2D fallback) ---------- */
  const lab = $('.lab-car');
  if (lab) {
    const base = $('.paint', lab), nxt = $('.paint.next', lab), gun = $('.gun', lab), name = $('.lab-name b');
    const host = $('[data-3d]'), view = $('.lab-view'), mistEl = $('.lab-mist'), wa = $('[data-labwa]');
    let api = null, busy = false, cur = { n: 'Candy-Rot', c: '#c8102e' }, glossN = 'Hochglanz', rimN = 'Silber';
    const updWa = () => { wa.href = 'https://wa.me/491716226690?text=' + encodeURIComponent(`Hallo Karosserie Kowollik, ich interessiere mich für eine Lackierung in ${cur.n} (${cur.c.toUpperCase()}), ${glossN}, Felgen ${rimN}. Was würde das bei meinem Auto kosten?`); };
    const burst = c => { if (!hasG || reduce) return; mistEl.style.setProperty('--c', c); gsap.fromTo(mistEl, { opacity: 0, x: '-40%' }, { opacity: .85, x: '0%', duration: .5, ease: 'power2.out', onComplete: () => gsap.to(mistEl, { opacity: 0, x: '40%', duration: .9, ease: 'power2.in' }) }); };
    const paint2d = c => {
      nxt.style.background = `linear-gradient(180deg,rgba(255,255,255,.35),transparent 35%,rgba(0,0,0,.35)),${c}`; gun.style.setProperty('--next', c);
      if (!hasG || reduce) { base.style.background = nxt.style.background; return; }
      busy = true;
      gsap.timeline({ onComplete: () => { base.style.background = nxt.style.background; gsap.set(nxt, { clipPath: 'inset(0 100% 0 0)' }); gsap.set(gun, { opacity: 0 }); busy = false; } })
        .set(gun, { opacity: 1, left: '0%' }).to(nxt, { clipPath: 'inset(0 0% 0 0)', duration: 1.3, ease: 'power1.inOut' }, 0)
        .to(gun, { left: '96%', duration: 1.3, ease: 'power1.inOut' }, 0).to(gun, { opacity: 0, duration: .25 }, 1.25);
    };
    const paint = (c, n) => { if (busy && !api) return; cur = { c, n }; name.textContent = n; updWa(); if (api) { api.paint(c); burst(c); } else paint2d(c); };
    $$('.sw[data-c]').forEach(s => s.addEventListener('click', () => { $$('.sw').forEach(x => x.classList.toggle('on', x === s)); paint(s.dataset.c, s.dataset.n); }));
    const ci = $('.sw-custom input'); ci && ci.addEventListener('input', () => { $$('.sw').forEach(x => x.classList.remove('on')); ci.parentElement.classList.add('on'); paint(ci.value, 'Wunschfarbe'); });
    $('.sw[data-c]').classList.add('on');
    const seg = (sel, fn) => $$(sel + ' button').forEach(b => b.addEventListener('click', () => { $$(sel + ' button').forEach(x => x.classList.toggle('on', x === b)); fn(b); updWa(); }));
    seg('[data-gloss]', b => { glossN = b.textContent; const v = +b.dataset.v; if (api) api.gloss(v); else $$('.paint', lab).forEach(p => p.style.filter = `saturate(${.6 + v * .4}) brightness(${.85 + v * .15})`); });
    seg('[data-rims]', b => { rimN = b.textContent; api && api.rims(b.dataset.v); });
    updWa();
    // load 3D lazily
    const ok3d = (() => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } })();
    const fallback = () => { view.classList.remove('is3d'); host.remove(); };
    if (!ok3d || !host) fallback();
    else {
      view.classList.add('is3d');
      const go = () => {
        const sc = document.createElement('script'); sc.src = 'js/car3d.js'; sc.async = true;
        sc.onload = () => {
          try {
            api = window.KowCar3D(host, { base: 'js/', onReady: () => { host.classList.add('ready'); }, onFail: () => { api = null; fallback(); } });
            if (!api) fallback(); else { api.paint(cur.c); }
          } catch (e) { api = null; fallback(); }
        };
        sc.onerror = fallback; document.body.appendChild(sc);
        setTimeout(() => { if (!host.classList.contains('ready') && host.isConnected) { api = null; fallback(); } }, 25000);
      };
      let started = false; const start = () => { if (started) return; started = true; removeEventListener('scroll', chk); go(); };
      const chk = () => { if (host.getBoundingClientRect().top < innerHeight + 1200) start(); };
      const lio = new IntersectionObserver(([e]) => { if (e.isIntersecting) { lio.disconnect(); start(); } }, { rootMargin: '1200px' }); lio.observe(host);
      addEventListener('scroll', chk, { passive: true }); addEventListener('load', () => setTimeout(start, 6000));
    }
  }

  /* ---------- road: car drives with scroll ---------- */
  const road = $('.road-track');
  if (road && hasG && !reduce) {
    const car = $('.road-car', road), li = $$('.road-steps li', road);
    ScrollTrigger.create({ trigger: road, start: 'top 75%', end: 'bottom 45%', scrub: .6, onUpdate: s => { const w = road.offsetWidth - car.offsetWidth; car.style.left = (s.progress * w) + 'px'; li.forEach((l, i) => l.classList.toggle('on', s.progress >= i / 4 - .02)); } });
  } else if (road) $$('.road-steps li').forEach(l => l.classList.add('on'));

  /* ---------- drone HUD ---------- */
  const dv = $('.drone-view');
  if (dv && hasG && !reduce) {
    const alt = $('.hud-alt b'), spd = $('.hud-spd b');
    gsap.fromTo($('video, img', dv), { yPercent: -12, scale: 1.15 }, { yPercent: 0, scale: 1, ease: 'none', scrollTrigger: { trigger: dv, start: 'top bottom', end: 'bottom top', scrub: true, onUpdate: s => { alt.textContent = Math.round(60 - s.progress * 45); spd.textContent = Math.round(12 + Math.sin(s.progress * 9) * 6 + s.progress * 10); } } });
  }

  /* ---------- leistungen ---------- */
  const svNav = $$('.sv-nav a');
  if (svNav.length) {
    const map = new Map(svNav.map(a => [a.getAttribute('href').slice(1), a]));
    const spy = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return; const a = map.get(e.target.id); if (!a) return;
      svNav.forEach(x => x.classList.toggle('on', x === a));
      const nav = a.parentElement; if (nav.scrollWidth > nav.clientWidth) nav.scrollTo({ left: a.offsetLeft - 20, behavior: 'smooth' });
    }), { rootMargin: '-45% 0px -50% 0px' });
    $$('.sv').forEach(sv => spy.observe(sv));
    svNav.forEach(a => a.addEventListener('click', e => { e.preventDefault(); const t = $(a.getAttribute('href')); lenis ? lenis.scrollTo(t, { offset: -100 }) : t.scrollIntoView({ behavior: 'smooth' }); }));
    if (location.hash && $(location.hash)) setTimeout(() => lenis ? lenis.scrollTo($(location.hash), { offset: -100, immediate: true }) : null, 300);
    // unfall: steps cycle
    const st = $$('.fx-steps span'); let si = 0; st.length && setInterval(() => { st.forEach((s, i) => s.classList.toggle('on', i <= si)); si = (si + 1) % (st.length + 1); }, 900);
    // gloss slider
    $$('.fx-gloss').forEach(fx => {
      const m = fx.closest('.sv-media'), im = $('img', m), r = $('input', fx), v = $('.gl-v', fx), sh = document.createElement('span'); sh.className = 'shine'; m.appendChild(sh); m.classList.add('gloss-on');
      const set = () => { const g = +r.value / 100; im.style.filter = `contrast(${.75 + g * .45}) saturate(${.55 + g * .75}) brightness(${.8 + g * .25}) blur(${(1 - g) * 1.2}px)`; sh.style.opacity = g * .9; v.textContent = g < .33 ? 'matt' : g < .7 ? 'seidenglanz' : 'hochglanz'; };
      r.addEventListener('input', set); set();
      if (hasG && !reduce) ScrollTrigger.create({ trigger: m, start: 'top 70%', once: true, onEnter: () => { const o = { v: 20 }; gsap.to(o, { v: 100, duration: 2.2, ease: 'power2.inOut', onUpdate: () => { r.value = o.v; set(); } }); } });
    });
    // oldtimer: sepia time travel
    $$('.fx-sepia').forEach(fx => {
      const im = $('img', fx.closest('.sv-media')), r = $('input', fx);
      const set = () => { const g = +r.value / 100; im.style.filter = `sepia(${1 - g}) grayscale(${(1 - g) * .6}) contrast(${1 + (1 - g) * .15})`; };
      r.addEventListener('input', set); r.value = 0; set();
      if (hasG && !reduce) ScrollTrigger.create({ trigger: fx, start: 'top 80%', once: true, onEnter: () => { const o = { v: 0 }; gsap.to(o, { v: 100, duration: 2.6, ease: 'power2.inOut', onUpdate: () => { r.value = o.v; set(); } }); } }); else { r.value = 100; set(); }
    });
    // klima temp
    $$('.fx-temp').forEach(fx => {
      const b = $('.th i', fx), t = $('.tv', fx);
      if (hasG && !reduce) { const o = { v: 35 }; gsap.to(o, { v: 18, ease: 'none', scrollTrigger: { trigger: fx, start: 'top 85%', end: 'top 35%', scrub: true }, onUpdate: () => { t.textContent = Math.round(o.v) + '°C'; b.style.transform = `scaleX(${(o.v - 10) / 25})`; b.style.filter = `hue-rotate(${(35 - o.v) * -8}deg)`; } }); } else t.textContent = '18°C';
    });
  }

  /* ---------- galerie ---------- */
  const gal = $('.gal');
  if (gal) {
    const items = $$('.gi', gal);
    $$('.gal-f .chip').forEach(c => c.addEventListener('click', () => {
      $$('.gal-f .chip').forEach(x => x.classList.toggle('on', x === c));
      const f = c.dataset.f;
      if (hasG && !reduce) {
        items.forEach(i => i.classList.toggle('out', f !== 'all' && i.dataset.cat !== f)); ScrollTrigger.refresh();
        gsap.fromTo(items.filter(i => !i.classList.contains('out')).slice(0, 16), { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: .03, duration: .6, ease: 'power3.out', overwrite: true });
      } else items.forEach(i => i.classList.toggle('out', f !== 'all' && i.dataset.cat !== f));
    }));
    const lb = $('.lb'), lim = $('img', lb), cap = $('figcaption', lb); let cur = 0, vis = [];
    const show = i => { cur = (i + vis.length) % vis.length; const a = vis[cur]; lim.src = a.getAttribute('href'); lim.alt = a.dataset.cap; cap.textContent = `${a.dataset.cap} · ${cur + 1} / ${vis.length}`; };
    const open = a => { vis = items.filter(i => !i.classList.contains('out')); lb.hidden = false; show(vis.indexOf(a)); lenis && lenis.stop(); $('.lb-x').focus(); hasG && gsap.fromTo(lim, { scale: .92, opacity: 0 }, { scale: 1, opacity: 1, duration: .5, ease: 'power3.out' }); };
    const close = () => { lb.hidden = true; lenis && lenis.start(); };
    items.forEach(a => a.addEventListener('click', e => { e.preventDefault(); open(a); }));
    $('.lb-x').onclick = close; $('.lb-p').onclick = () => show(cur - 1); $('.lb-n').onclick = () => show(cur + 1);
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    addEventListener('keydown', e => { if (lb.hidden) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') show(cur - 1); if (e.key === 'ArrowRight') show(cur + 1); });
    let sx = 0; lb.addEventListener('touchstart', e => sx = e.touches[0].clientX, { passive: true }); lb.addEventListener('touchend', e => { const d = e.changedTouches[0].clientX - sx; if (Math.abs(d) > 50) show(cur + (d < 0 ? 1 : -1)); });
  }

  /* ---------- kontakt form ---------- */
  const form = $('[data-form]');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault(); const d = new FormData(form), via = e.submitter && e.submitter.dataset.via;
    const msg = `Anfrage über die Website\nName: ${d.get('name')}\nKontakt: ${d.get('kontakt')}\nFahrzeug: ${d.get('auto') || '-'}\n\n${d.get('msg') || ''}`;
    if (via === 'mail') location.href = 'mailto:info@karosseriekowollik.de?subject=' + encodeURIComponent('Anfrage über die Website') + '&body=' + encodeURIComponent(msg);
    else window.open('https://wa.me/491716226690?text=' + encodeURIComponent(msg), '_blank', 'noopener');
  });


  /* ===== v2: Lackierstraße ===== */
  const stations = $$('.station');
  if (stations.length) {
    if (hasG && !reduce) stations.forEach(st => {
      gsap.to($('.st-name span', st), { backgroundPosition: '0% 0', ease: 'none', scrollTrigger: { trigger: st, start: 'top 85%', end: 'center 40%', scrub: true } });
      gsap.to($('.st-stripe', st), { scaleX: 1, ease: 'none', scrollTrigger: { trigger: st, start: 'top 70%', end: 'bottom 30%', scrub: true } });
    });
    const rail = $('.rail'), links = $$('.rail a'), line = $('.rail-line i'), car = $('.rail-car');
    const first = stations[0], lastEl = $('.visit') || stations[stations.length - 1];
    const upd = () => {
      const y = scrollY + innerHeight * .5;
      const top = first.offsetTop, end = lastEl.offsetTop + lastEl.offsetHeight;
      rail.classList.toggle('show', y > top && y < end + innerHeight * .2);
      let cur = 0; stations.forEach((st, i) => { if (y >= st.offsetTop) cur = i + 1; });
      links.forEach((a, i) => { a.classList.toggle('on', i + 1 === cur); a.classList.toggle('done', i + 1 < cur); });
      const p = Math.max(0, Math.min(1, (y - top) / (end - top)));
      if (line) line.style.transform = innerWidth <= 900 ? `scaleX(${p})` : `scaleY(${p})`;
      if (car) { const h = rail.offsetHeight - 32; car.style.transform = `translateY(${p * (h - 20)}px) rotate(90deg)`; }
    };
    addEventListener('scroll', upd, { passive: true }); addEventListener('resize', upd); upd();
    links.forEach(a => a.addEventListener('click', e => { e.preventDefault(); const t = $(a.getAttribute('href')); lenis ? lenis.scrollTo(t, { offset: -20 }) : t.scrollIntoView({ behavior: 'smooth' }); }));
  }

  /* ---------- Designentwurf-Hinweis: über dem Footer ausblenden ---------- */
  const cpt = $('.concept'), ftr = $('.ftr');
  if (cpt && ftr) new IntersectionObserver(([e]) => cpt.classList.toggle('off', e.isIntersecting), { rootMargin: '0px 0px -40px 0px' }).observe(ftr);

  /* ---------- CTA-Band: verbeulte Überschrift springt zurück in Form ---------- */
  const dh = $('.cta-band .h2');
  if (dh && !reduce) {
    const words = dh.textContent.trim().split(/\s+/); let n = 0; const tot = words.join('').length;
    dh.innerHTML = words.map(w => `<span class="wd">${[...w].map(ch => `<span class="lt" data-k="${n++}">${ch}</span>`).join('')}</span>`).join(' ');
    dh.setAttribute('aria-label', words.join(' ')); dh.classList.add('dent');
    const lts = $$('.lt', dh), c = (tot - 1) / 2, dc = Math.round(tot * .42);
    lts.forEach(l => { const k = +l.dataset.k, x = (k - dc) / (tot * .3); l.style.setProperty('--d', Math.max(0, Math.exp(-x * x) * .95).toFixed(3)); l.style.setProperty('--o', Math.abs(k - dc)); l.setAttribute('aria-hidden', 'true'); });
    const hint = document.createElement('span'); hint.className = 'dent-hint'; hint.textContent = fine ? 'Mit der Maus eindrücken' : 'Antippen und drücken'; dh.after(hint);
    const pop = () => { if (dh.classList.contains('popped')) return; setTimeout(() => dh.classList.add('popped'), 350); };
    const dio = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { dio.disconnect(); pop(); } }, { rootMargin: '0px 0px -20% 0px' }); dio.observe(dh);
    const chk = () => { const r = dh.getBoundingClientRect(); if (r.top < innerHeight * .8 && r.bottom > 0) { removeEventListener('scroll', chk); pop(); } }; addEventListener('scroll', chk, { passive: true });
    // eindrücken: wo Maus/Finger ist, gibt das Blech nach – und federt zurück
    const band = dh.closest('.cta-band'); let raf = 0, px = -1e4, py = -1e4, down = !fine;
    const press = () => { raf = 0; lts.forEach(l => { const r = l.getBoundingClientRect(), d = Math.hypot(r.left + r.width / 2 - px, (r.top + r.height / 2 - py) * 1.4), p = Math.max(0, 1 - d / 140) * (down ? 1 : .55); l.style.setProperty('--p', p.toFixed(3)); }); };
    const mv = e => { if (!dh.classList.contains('popped')) return; px = e.clientX; py = e.clientY; dh.classList.add('touching'); raf || (raf = requestAnimationFrame(press)); };
    const out = () => { dh.classList.remove('touching'); lts.forEach(l => l.style.setProperty('--p', 0)); };
    band.addEventListener('pointermove', e => { if (e.pointerType === 'mouse' || down) mv(e); });
    band.addEventListener('pointerdown', e => { down = true; mv(e); });
    band.addEventListener('pointerup', e => { if (e.pointerType !== 'mouse') { down = false; out(); } });
    band.addEventListener('pointerleave', out); band.addEventListener('pointercancel', out);
  }

  /* unfall checklist */
  const ufl = $('.uf-list');
  if (ufl) {
    const boxes = $$('input', ufl), n = $('[data-uf-n]'), ring = $('.uf-p');
    let saved = []; try { saved = JSON.parse(localStorage.getItem('kw-uf') || '[]'); } catch (e) {}
    boxes.forEach((b, i) => b.checked = !!saved[i]);
    const upd = () => { const c = boxes.filter(b => b.checked).length; n.textContent = c; ring.style.strokeDashoffset = 100 - c / boxes.length * 100; try { localStorage.setItem('kw-uf', JSON.stringify(boxes.map(b => b.checked))); } catch (e) {} if (c === boxes.length && hasG) gsap.fromTo('.uf-ring', { scale: 1 }, { scale: 1.12, yoyo: true, repeat: 1, duration: .25 }); };
    boxes.forEach(b => b.addEventListener('change', upd)); upd();
    const sb = $('[data-uf-share]');
    sb && sb.addEventListener('click', async () => {
      const txt = 'Unfall-Checkliste von Karosserie Kowollik (Homburg):\n' + $$('li', ufl).map((li, i) => `${i + 1}. ${$('b', li).textContent} – ${$('span', li).childNodes[1].textContent}`).join('\n') + '\n\nSchaden melden: https://kowollik.schadensmeldung.digital/ · Tel. 06841 / 170 170';
      try { if (navigator.share) { await navigator.share({ title: 'Unfall-Checkliste', text: txt }); return; } } catch (e) { return; }
      try { await navigator.clipboard.writeText(txt); sb.textContent = 'Kopiert – jetzt in WhatsApp einfügen'; } catch (e) { window.open('https://wa.me/?text=' + encodeURIComponent(txt), '_blank', 'noopener'); }
    });
  }

  /* smart repair check */
  const smSize = $('[data-sm-size]');
  if (smSize) {
    let paint = 0, pos = 'flat';
    const dent = $('.sm-dent'), cm = $('[data-sm-cm]'), vd = $('[data-sm-verdict]'), dt = $('[data-sm-detail]'), wa = $('[data-sm-wa]');
    const run = () => {
      const s = +smSize.value; cm.textContent = s;
      dent.style.setProperty('--d', (14 + s * 6) + 'px'); dent.classList.toggle('scratch', !!paint);
      let v, d, cls;
      if (paint) { v = 'Lackierung nötig'; cls = 'mid'; d = 'Ist der Lack verletzt, richten wir das Blech und lackieren den Bereich – farbtongenau angepasst. Kleine Stellen oft als Spot-Repair.'; }
      else if (pos === 'edge') { v = 'Schauen wir uns an'; cls = 'mid'; d = 'An Kanten und Sicken ist Ausbeulen ohne Lackieren manchmal möglich, manchmal nicht. Ein Foto reicht für eine erste Einschätzung.'; }
      else if (s <= 25) { v = 'Gute Chancen für Smart Repair'; cls = 'ok'; d = 'Ausbeulen ohne Lackieren: der Originallack bleibt erhalten, oft ist das in wenigen Stunden erledigt.'; }
      else { v = 'Teil-Instandsetzung'; cls = 'mid'; d = 'Bei großen Dellen kombinieren wir Ausbeulen und Lackieren. Wir sagen Ihnen vorher, was sinnvoll ist.'; }
      vd.textContent = v; vd.className = 'sm-verdict ' + cls; dt.textContent = d;
      wa.href = 'https://wa.me/491716226690?text=' + encodeURIComponent(`Hallo, ich habe eine Delle (ca. ${s} cm, ${paint ? 'Lack beschädigt' : 'Lack heil'}, ${pos === 'edge' ? 'an einer Kante' : 'auf der Fläche'}). Ihr Check sagt: ${v}. Foto schicke ich mit.`);
    };
    smSize.addEventListener('input', run);
    const segs = (sel, fn) => $$(sel + ' button').forEach(b => b.addEventListener('click', () => { $$(sel + ' button').forEach(x => x.classList.toggle('on', x === b)); fn(b.dataset.v); run(); }));
    segs('[data-sm-paint]', v => paint = +v); segs('[data-sm-pos]', v => pos = v); run();
  }

  /* paint layers exploded view */
  const ly = $('.layers');
  if (ly) {
    const plates = $$('.ly-plate', ly), leg = $$('.ly-legend li', ly);
    const setP = p => {
      const o = Math.min(1, p * 1.6) * (innerWidth < 700 ? .8 : 1.5);
      plates.forEach(pl => pl.style.setProperty('--o', o));
      const active = p < .12 ? -1 : 4 - Math.min(4, Math.floor((p - .12) / .88 * 5));
      leg.forEach(l => l.classList.toggle('on', active === -1 || +l.dataset.l === active));
      plates.forEach((pl, i) => pl.classList.toggle('on', i === active));
    };
    if (hasG && !reduce) ScrollTrigger.create({ trigger: ly, start: 'top top', end: '+=160%', pin: '.ly-pin', scrub: true, anticipatePin: 1, onUpdate: s => setP(s.progress) });
    else setP(.6);
  }

  /* color code finder */
  const code = $('[data-code]');
  if (code) {
    const ans = $('[data-code-ans]'), spots = $$('.spot');
    $$('button', code).forEach(b => b.addEventListener('click', () => {
      $$('button', code).forEach(x => x.classList.toggle('on', x === b));
      spots.forEach(sp => sp.classList.toggle('on', sp.dataset.at === b.dataset.spot));
      ans.textContent = b.dataset.txt; hasG && gsap.fromTo(ans, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .4 });
    }));
  }

  /* sanding scratch-off */
  const sc = $('[data-scratch]');
  if (sc) {
    const cv = $('canvas', sc), ctx = cv.getContext('2d'), pct = $('[data-sc-pct]');
    let done = false, down = false, last = null, dpr = Math.min(2, devicePixelRatio || 1);
    const prime = () => {
      done = false; sc.classList.remove('done');
      cv.width = sc.clientWidth * dpr; cv.height = sc.clientHeight * dpr;
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#8d8f8c'; ctx.fillRect(0, 0, cv.width, cv.height);
      for (let i = 0; i < 2600; i++) { ctx.fillStyle = `rgba(${Math.random() < .5 ? '255,255,255' : '0,0,0'},${Math.random() * .06})`; ctx.fillRect(Math.random() * cv.width, Math.random() * cv.height, 2 * dpr, 2 * dpr); }
      for (let i = 0; i < 7; i++) { const x = Math.random() * cv.width, y = Math.random() * cv.height, r = (30 + Math.random() * 70) * dpr; const g = ctx.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, 'rgba(190,180,150,.55)'); g.addColorStop(1, 'rgba(190,180,150,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill(); }
      ctx.fillStyle = 'rgba(40,40,40,.55)'; ctx.font = `800 ${28 * dpr}px "Barlow Condensed",sans-serif`; ctx.textAlign = 'center'; ctx.fillText('HIER SCHLEIFEN', cv.width / 2, cv.height / 2);
      pct.textContent = 0;
    };
    const measure = () => { const d = ctx.getImageData(0, 0, cv.width, cv.height).data; let c = 0, n = 0; for (let i = 3; i < d.length; i += 64) { n++; if (d[i] < 40) c++; } return c / n; };
    const sand = (x, y) => {
      const r = cv.getBoundingClientRect(); x = (x - r.left) * dpr; y = (y - r.top) * dpr;
      ctx.globalCompositeOperation = 'destination-out'; ctx.lineCap = 'round'; ctx.lineWidth = 64 * dpr;
      ctx.beginPath(); if (last) ctx.moveTo(last[0], last[1]); else ctx.moveTo(x - .1, y); ctx.lineTo(x, y); ctx.stroke(); last = [x, y];
    };
    let mt = 0;
    cv.addEventListener('pointerdown', e => { down = true; last = null; cv.setPointerCapture(e.pointerId); sand(e.clientX, e.clientY); });
    cv.addEventListener('pointermove', e => { if (!down || done) return; sand(e.clientX, e.clientY); const now = performance.now(); if (now - mt > 120) { mt = now; const p = measure(); pct.textContent = Math.round(p * 100); if (p > .55) finish(); } });
    addEventListener('pointerup', () => { down = false; last = null; });
    const finish = () => { done = true; pct.textContent = 100; if (hasG) gsap.to(cv, { opacity: 0, duration: .8, onComplete: () => { ctx.clearRect(0, 0, cv.width, cv.height); cv.style.opacity = 1; } }); else ctx.clearRect(0, 0, cv.width, cv.height); sc.classList.add('done'); };
    $('[data-sc-reset]').addEventListener('click', prime);
    const img0 = $('img', sc); (img0.complete ? prime() : img0.addEventListener('load', prime)); prime();
    let rw = sc.clientWidth; new ResizeObserver(() => { if (Math.abs(sc.clientWidth - rw) > 40) { rw = sc.clientWidth; prime(); } }).observe(sc);
  }

  /* wish appointment */
  const tf = $('[data-termin]');
  if (tf) {
    const days = $('[data-days]'), DS = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
    const now = new Date(); let picked = null, slot = 'vormittags';
    for (let k = 1, c = 0; c < 10 && k < 20; k++) { const d = new Date(now); d.setDate(now.getDate() + k); if (d.getDay() === 0 || d.getDay() === 6) continue; c++;
      const b = document.createElement('button'); b.type = 'button'; b.innerHTML = `<small>${DS[d.getDay()]}</small><b>${d.getDate()}.</b><small>${d.toLocaleDateString('de-DE', { month: 'short' })}</small>`; b.dataset.label = d.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' }); b.dataset.fri = d.getDay() === 5 ? 1 : '';
      b.addEventListener('click', () => { $$('button', days).forEach(x => x.classList.toggle('on', x === b)); picked = b; }); days.appendChild(b); if (!picked) { picked = b; b.classList.add('on'); } }
    $$('[data-slot] button', tf).forEach(b => b.addEventListener('click', () => { $$('[data-slot] button', tf).forEach(x => x.classList.toggle('on', x === b)); slot = b.dataset.v; }));
    tf.addEventListener('submit', e => { e.preventDefault(); const what = $('[data-what]', tf).value;
      const msg = `Hallo Karosserie Kowollik, ich hätte gern einen Termin: ${picked.dataset.label}, ${slot}${picked.dataset.fri && slot === 'nachmittags' ? ' (Freitag bis 15 Uhr)' : ''}. Es geht um: ${what}. Passt das?`;
      window.open('https://wa.me/491716226690?text=' + encodeURIComponent(msg), '_blank', 'noopener'); });
  }

  /* ---------- videos play only in view ---------- */
  const vio = new IntersectionObserver(es => es.forEach(e => { const v = e.target; if (e.isIntersecting) { v.preload = 'auto'; const p = v.play(); p && p.catch(() => {}); } else v.pause(); }), { threshold: .25 });
  $$('.reel video, .drone-view video').forEach(v => vio.observe(v));
  const hv = $('.hero video'); if (hv) { const kick = () => { const p = hv.play(); p && p.catch(() => {}); }; kick(); addEventListener('touchstart', kick, { once: true, passive: true }); }

  /* ---------- Instagram-Handy ---------- */
  const ph = $('.phone[data-ig]');
  if (ph && window.IG_POSTS) {
    const P = window.IG_POSTS, post = $('.ig-post', ph), img = $('[data-ig-img]', ph), vid = $('[data-ig-vid]', ph), cap = $('[data-ig-cap]', ph), dt = $('[data-ig-date]', ph), lk = $('[data-ig-link]', ph), like = $('.ig-like', ph), heart = $('.ig-heart', ph);
    const MON = { January: 'Januar', February: 'Februar', March: 'März', April: 'April', May: 'Mai', June: 'Juni', July: 'Juli', August: 'August', September: 'September', October: 'Oktober', November: 'November', December: 'Dezember' };
    const deD = d => { const m = /([A-Za-z]+) (\d+), (\d{4})/.exec(d || ''); return m ? `${m[2]}. ${MON[m[1]] || m[1]} ${m[3]}` : ''; };
    const lat = $('[data-ig-latest]'); if (lat) lat.textContent = (P[0].c || '').split('\n')[0];
    const tm = $('[data-ig-time]'); const clk = () => { const d = new Date(); tm.textContent = d.getHours() + ':' + String(d.getMinutes()).padStart(2, '0'); }; clk(); setInterval(clk, 30000);
    const open = i => { const x = P[i]; img.src = x.p; img.hidden = !!x.v; vid.hidden = !x.v; if (x.v) { vid.src = x.v; vid.poster = x.p; vid.muted = true; const pr = vid.play(); pr && pr.catch(() => {}); } else { vid.removeAttribute('src'); vid.load(); }
      cap.textContent = x.c; dt.textContent = deD(x.d); lk.href = x.u; like.classList.remove('on'); like.textContent = '♡'; post.hidden = false; post.scrollTop = 0; };
    const close = () => { post.hidden = true; vid.pause(); };
    $$('.ig-tile', ph).forEach(t => t.addEventListener('click', () => open(+t.dataset.i)));
    $('.ig-back', ph).addEventListener('click', close);
    const lbt = $('[data-ig-latest-btn]'); if (lbt) lbt.addEventListener('click', () => { open(0); ph.scrollIntoView({ behavior: 'smooth', block: 'center' }); });
    const doLike = () => { like.classList.add('on'); like.textContent = '♥'; heart.classList.remove('pop'); void heart.offsetWidth; heart.classList.add('pop'); };
    like.addEventListener('click', () => { if (like.classList.contains('on')) { like.classList.remove('on'); like.textContent = '♡'; } else doLike(); });
    let lastTap = 0; $('.ig-media', ph).addEventListener('pointerup', () => { const n = Date.now(); if (n - lastTap < 320) doLike(); lastTap = n; });
    $('.ig-media', ph).addEventListener('dblclick', e => e.preventDefault());
    if (fine) { const wrap = ph.parentElement; wrap.addEventListener('pointermove', e => { const r = wrap.getBoundingClientRect(); ph.style.setProperty('--ry', ((e.clientX - r.left) / r.width - .5) * 16 + 'deg'); ph.style.setProperty('--rx', -((e.clientY - r.top) / r.height - .5) * 10 + 'deg'); }); wrap.addEventListener('pointerleave', () => { ph.style.removeProperty('--ry'); ph.style.removeProperty('--rx'); }); }
    // kleiner Auto-Scroll als Hinweis, sobald das Handy sichtbar wird
    const sc = $('.ig-scroll', ph); let hinted = false;
    new IntersectionObserver(([e]) => { if (e.isIntersecting && !hinted) { hinted = true; setTimeout(() => { sc.scrollTo({ top: 220, behavior: 'smooth' }); setTimeout(() => sc.scrollTo({ top: 0, behavior: 'smooth' }), 1300); }, 700); } }, { threshold: .5 }).observe(ph);
  }

  if (hasG) { ScrollTrigger.sort(); ScrollTrigger.refresh(); }
  addEventListener('load', () => { if (hasG) { ScrollTrigger.sort(); ScrollTrigger.refresh(); } });
})();
