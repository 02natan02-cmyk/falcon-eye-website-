/* Verena Paul – Aloha (Entwurf Falcon Eye) */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches, D = window.VP || {};
  const ic = p => `<svg class="ic-s" viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${p}</g></svg>`;

  /* ---------- Intro ---------- */
  const intro = $('[data-intro]');
  let introDone = !intro || document.documentElement.classList.contains('no-intro') || RM;
  const afterIntro = [];
  const finishIntro = () => { if (introDone && !intro) return; introDone = true; if (intro) { intro.classList.add('out'); setTimeout(() => intro.remove(), 1200); } try { sessionStorage.setItem('vp-intro', '1'); } catch (e) {} afterIntro.forEach(f => f()); };
  if (!introDone) { intro.addEventListener('click', finishIntro); setTimeout(finishIntro, 2700); } else { intro && intro.remove(); }
  const whenIntro = f => introDone ? f() : afterIntro.push(f);

  /* ---------- Header ---------- */
  const hdr = $('[data-hdr]'), hero = $('.hero');
  const onS = () => { hdr.classList.toggle('solid', scrollY > (innerWidth < 900 ? 40 : hero.offsetHeight - 90)); document.documentElement.classList.toggle('scrolled', scrollY > 60); };
  addEventListener('scroll', onS, { passive: true }); onS();
  const bur = $('[data-burger]'), mn = $('[data-mnav]');
  bur.addEventListener('click', () => { const o = bur.getAttribute('aria-expanded') !== 'true'; bur.setAttribute('aria-expanded', o); mn.hidden = !o; hdr.classList.toggle('solid', o || scrollY > (innerWidth < 900 ? 40 : hero.offsetHeight - 90)); });
  $$('a', mn).forEach(a => a.addEventListener('click', () => { bur.setAttribute('aria-expanded', 'false'); mn.hidden = true; }));

  /* ---------- Meer (Canvas) ---------- */
  const cv = $('[data-sea]');
  if (cv) {
    const cx = cv.getContext('2d'); let W, H, dpr, t = 0, run = true, mx = .62, my = .5, tmx = .62, tmy = .5;
    const size = () => { dpr = Math.min(1.6, devicePixelRatio || 1); W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; cx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    size(); addEventListener('resize', size);
    addEventListener('pointermove', e => { tmx = e.clientX / innerWidth; tmy = e.clientY / innerHeight; }, { passive: true });
    const L0 = [ // Wellenschichten: Höhe, Amplitude, Länge, Tempo, Farbe
      [.60, 10, 520, .25, 'rgba(255,170,130,.32)'], [.64, 14, 380, -.35, 'rgba(45,120,130,.55)'], [.70, 18, 300, .45, 'rgba(26,98,110,.72)'],
      [.78, 22, 260, -.55, 'rgba(18,78,92,.85)'], [.88, 26, 220, .7, 'rgba(12,56,70,.95)']];
    const L = L0; const spark = Array.from({ length: 70 }, () => [Math.random(), Math.random(), Math.random() * 6]);
    const frame = () => {
      if (run) {
        t += RM ? 0 : 1 / 60; mx += (tmx - mx) * .03; my += (tmy - my) * .03;
        const mob = W < 700, hz = H * (mob ? .5 : .6), sx = W * ((mob ? .78 : .74) + (mx - .5) * .12), sy = hz - H * ((mob ? .34 : .17) + (.5 - my) * .05);
        let g = cx.createLinearGradient(0, 0, 0, hz);
        g.addColorStop(0, '#0f2f45'); g.addColorStop(.45, '#5b4d6e'); g.addColorStop(.78, '#e8846a'); g.addColorStop(1, '#ffc58c');
        cx.fillStyle = g; cx.fillRect(0, 0, W, hz + 2);
        g = cx.createRadialGradient(sx, sy, 0, sx, sy, H * .55); g.addColorStop(0, 'rgba(255,214,150,.75)'); g.addColorStop(.25, 'rgba(255,170,120,.25)'); g.addColorStop(1, 'rgba(255,140,100,0)');
        cx.fillStyle = g; cx.fillRect(0, 0, W, hz);
        cx.fillStyle = '#ffe2b0'; cx.beginPath(); cx.arc(sx, sy, Math.min(W, H) * .07, 0, 7); cx.fill();
        g = cx.createLinearGradient(0, hz, 0, H); g.addColorStop(0, '#3a7f8a'); g.addColorStop(1, '#0b2a36'); cx.fillStyle = g; cx.fillRect(0, hz, W, H - hz);
        // Sonnenglitzern
        for (const s of spark) { const x = sx + (s[0] - .5) * W * .28 * (1 + s[1]), y = hz + s[1] * (H - hz) * .9, a = (Math.sin(t * 2 + s[2]) + 1) / 2 * (1 - s[1]) * .8; cx.fillStyle = `rgba(255,220,170,${a})`; cx.fillRect(x, y, 10 + 30 * (1 - s[1]), 1.6); }
        for (const [h, a, l, sp, c] of L) {
          cx.fillStyle = c; cx.beginPath(); cx.moveTo(0, H);
          for (let x = 0; x <= W + 10; x += 10) { const y = H * h + Math.sin(x / l * 6.28 + t * sp * 2) * a + Math.sin(x / (l * .47) * 6.28 - t * sp * 1.3) * a * .4; cx.lineTo(x, y); }
          cx.lineTo(W, H); cx.fill();
        }
      }
      requestAnimationFrame(frame);
    };
    new IntersectionObserver(([e]) => run = e.isIntersecting).observe(cv);
    frame();
  }

  /* ---------- Hero: Parallax (Maus, Gyro, Scroll) & Glühwürmchen ---------- */
  (() => {
    const h = $('.hero'), fc = $('[data-flies]'); if (!h) return;
    let tx = 0, ty = 0, x = 0, y = 0, vis = true, ptr = { x: -999, y: -999 };
    if (!RM) {
      h.addEventListener('pointermove', e => { const r = h.getBoundingClientRect(); tx = (e.clientX - r.left) / r.width * 2 - 1; ty = (e.clientY - r.top) / r.height * 2 - 1; ptr = { x: e.clientX - r.left, y: e.clientY - r.top }; }, { passive: true });
      h.addEventListener('pointerleave', () => { tx = ty = 0; ptr = { x: -999, y: -999 }; });
      addEventListener('deviceorientation', e => { if (e.gamma == null) return; tx = Math.max(-1, Math.min(1, e.gamma / 30)); ty = Math.max(-1, Math.min(1, (e.beta - 45) / 30)); }, { passive: true });
    }
    const sym = $('[data-hsym]');
    let W = 0, H = 0, dpr = 1, cx = fc && fc.getContext('2d'), F = [];
    const size = () => { if (!fc) return; dpr = Math.min(1.5, devicePixelRatio || 1); W = fc.clientWidth; H = fc.clientHeight; fc.width = W * dpr; fc.height = H * dpr; cx.setTransform(dpr, 0, 0, dpr, 0, 0); const n = W < 700 ? 26 : 48; F = Array.from({ length: n }, () => ({ x: Math.random() * W, y: H * (.15 + Math.random() * .6), r: .8 + Math.random() * 1.8, a: Math.random() * 6.28, s: .15 + Math.random() * .35, p: Math.random() * 6.28 })); };
    size(); addEventListener('resize', size);
    new IntersectionObserver(([e]) => vis = e.isIntersecting).observe(h);
    let t = 0;
    const tick = () => {
      if (vis) {
        x += (tx - x) * .05; y += (ty - y) * .05;
        const sc = Math.min(1, scrollY / innerHeight);
        h.style.setProperty('--px', x.toFixed(3)); h.style.setProperty('--py', (y + sc * 2.2).toFixed(3));
        if (sym) sym.style.opacity = String(1 - sc * .9);
        if (cx) {
          t += RM ? 0 : .016; cx.clearRect(0, 0, W, H);
          for (const f of F) {
            if (!RM) { f.a += (Math.random() - .5) * .2; f.x += Math.cos(f.a) * f.s; f.y += Math.sin(f.a) * f.s * .6 - .05;
              const dx = f.x - ptr.x, dy = f.y - ptr.y, d = dx * dx + dy * dy; if (d < 12000) { f.x += dx / Math.sqrt(d + 1) * 1.2; f.y += dy / Math.sqrt(d + 1) * 1.2; }
              if (f.x < -10) f.x = W + 10; if (f.x > W + 10) f.x = -10; if (f.y < H * .05) f.y = H * .8; if (f.y > H * .9) f.y = H * .1; }
            const al = .25 + .75 * Math.pow((Math.sin(t * 1.6 + f.p) + 1) / 2, 2), R = f.r * 7;
            const g = cx.createRadialGradient(f.x, f.y, 0, f.x, f.y, R); g.addColorStop(0, `rgba(255,236,170,${al})`); g.addColorStop(.25, `rgba(255,200,120,${al * .45})`); g.addColorStop(1, 'rgba(255,190,110,0)');
            cx.fillStyle = g; cx.beginPath(); cx.arc(f.x, f.y, R, 0, 6.283); cx.fill();
          }
        }
      }
      requestAnimationFrame(tick);
    };
    tick();
  })();

  /* ---------- Playlist: startet leise, sonst bei der ersten Interaktion ---------- */
  const PL = (() => {
    const el = $('[data-pl]'), T = D.tracks || [], sbtn = $('[data-snd]'); if (!el || !T.length) return { duck() {}, swell() {} };
    const a = new Audio(); a.preload = 'auto';
    const LOW = .12, KEY = 'vp-mute';
    const ss = { get: () => { try { return sessionStorage.getItem(KEY); } catch (e) { return null; } }, set: v => { try { v ? sessionStorage.setItem(KEY, v) : sessionStorage.removeItem(KEY); } catch (e) {} } };
    let i = 0, playing = false, muted = ss.get() === '1', ducked = false, AC = null, gain = null, raf = 0, armed = false;
    a.volume = .5; const fixedVol = Math.abs(a.volume - .5) > .01; a.volume = 0;   /* iOS: Lautstärke nur per WebAudio */
    const vol = (v, ms) => {
      if (gain) { gain.gain.cancelScheduledValues(AC.currentTime); gain.gain.setTargetAtTime(v, AC.currentTime, Math.max(.01, ms / 3000)); return; }
      cancelAnimationFrame(raf); const v0 = a.volume, t0 = performance.now();
      const st = now => { const k = Math.min(1, (now - t0) / Math.max(1, ms)); a.volume = Math.max(0, Math.min(1, v0 + (v - v0) * k)); if (k < 1) raf = requestAnimationFrame(st); };
      raf = requestAnimationFrame(st);
    };
    const load = k => { i = (k + T.length) % T.length; a.src = T[i].f; $('[data-pl-title]', el).textContent = T[i].n; $$('[data-pl-track]', el).forEach((b, j) => b.classList.toggle('on', j === i)); };
    const ui = () => {
      const on = playing && !muted;
      el.classList.toggle('playing', playing); el.classList.toggle('muted', muted);
      $('[data-pl-state]', el).textContent = muted ? '♪ Playlist · stumm' : playing ? '♪ läuft leise – Playlist' : '♪ Playlist · tippen zum Starten';
      const tg = $('[data-pl-toggle]', el); tg.setAttribute('aria-pressed', String(on)); tg.setAttribute('aria-label', on ? 'Musik pausieren' : 'Musik abspielen');
      const mb = $('[data-pl-mute]', el); mb.setAttribute('aria-pressed', String(muted)); mb.setAttribute('aria-label', muted ? 'Ton an' : 'Stumm schalten');
      if (sbtn) sbtn.setAttribute('aria-pressed', String(on));
    };
    const webaudio = () => { if (AC || !fixedVol) return; try { AC = new (window.AudioContext || window.webkitAudioContext)(); gain = AC.createGain(); gain.gain.value = 0; AC.createMediaElementSource(a).connect(gain); gain.connect(AC.destination); } catch (e) { AC = null; gain = null; } };
    const play = (fade = 2000) => {
      if (fixedVol && !AC) return Promise.reject(new Error('gesture'));
      if (AC && AC.state === 'suspended') AC.resume();
      if (!gain) a.volume = Math.min(a.volume, LOW);
      return a.play().then(() => { playing = true; ui(); vol(muted || ducked ? 0 : LOW, fade); });
    };
    const pause = () => { vol(0, 400); setTimeout(() => { if (muted || ducked || !playing) a.pause(); }, 450); };
    const evs = ['pointerdown', 'touchstart', 'keydown', 'wheel', 'scroll', 'click'];
    const onGesture = e => { if (muted || playing) return disarm(); if (e && e.target && e.target.closest && e.target.closest('[data-pl],[data-snd]')) return; webaudio(); play().then(disarm).catch(() => {}); };
    const arm = () => { if (armed) return; armed = true; evs.forEach(ev => addEventListener(ev, onGesture, { passive: true, capture: true })); };
    const disarm = () => { armed = false; evs.forEach(ev => removeEventListener(ev, onGesture, { capture: true })); };
    a.addEventListener('ended', () => { load(i + 1); if (playing && !muted) a.play().catch(() => {}); });
    load(0); ui();
    setTimeout(() => el.classList.add('compact'), 9000);
    if (!muted) play().catch(arm);
    const start = () => { muted = false; ss.set(null); webaudio(); a.muted = false; (a.paused ? play(1200) : Promise.resolve(vol(LOW, 800))).catch(() => {}); ui(); };
    const stop = () => { muted = true; ss.set('1'); pause(); disarm(); ui(); };
    $('[data-pl-toggle]', el).addEventListener('click', () => (playing && !muted && !a.paused) ? (playing = false, pause(), ss.set('1'), muted = false, ui(), el.classList.add('paused')) : (el.classList.remove('paused'), start()));
    $('[data-pl-mute]', el).addEventListener('click', () => muted ? start() : stop());
    $('[data-pl-next]', el).addEventListener('click', () => { load(i + 1); if (!muted) { webaudio(); play(600).catch(() => {}); } });
    $('[data-pl-prev]', el).addEventListener('click', () => { load(i - 1); if (!muted) { webaudio(); play(600).catch(() => {}); } });
    const lb = $('[data-pl-list]', el), tl = $('[data-pl-tracks]', el);
    lb.addEventListener('click', () => { const o = tl.hidden; tl.hidden = !o; lb.setAttribute('aria-expanded', String(o)); el.classList.toggle('open', o); });
    $$('[data-pl-track]', el).forEach(b => b.addEventListener('click', () => { load(+b.dataset.plTrack); muted = false; ss.set(null); webaudio(); play(600).catch(() => {}); ui(); }));
    document.addEventListener('click', e => { if (!tl.hidden && !e.target.closest('[data-pl]')) { tl.hidden = true; lb.setAttribute('aria-expanded', 'false'); el.classList.remove('open'); } });
    if (sbtn) sbtn.addEventListener('click', () => (playing && !muted && !a.paused) ? stop() : start());
    return {
      duck(on) { if (on === ducked) return; ducked = on; if (!playing || muted) return; if (on) pause(); else play(1500).catch(() => {}); },
      swell(f, sec) { if (playing && !muted && !ducked) vol(LOW * f, sec * 1000 * .6); }
    };
  })();
  const breatheSound = (to, sec) => PL.swell(to, sec);

  /* ---------- Reise (horizontal, echte Fotos) ---------- */
  const track = $('[data-track]'), pin = $('[data-trip]'), bar = $('[data-tripbar]'), plane = $('.re-plane'), dots = $$('.re-dots li'), STS = $$('.st', track), tcount = $('[data-tcount]');
  let curSt = -1, tripST = null;
  const setCur = k => {
    if (k === curSt) return; curSt = k;
    dots.forEach((d, i) => { d.classList.toggle('on', i <= k); d.classList.toggle('cur', i === k); });
    STS.forEach((st, i) => st.classList.toggle('past', i < k));
    pin.style.setProperty('--tone', STS[k].dataset.tone);
    STS.slice(k, k + 3).forEach(st => $$('img', st).forEach(im => { im.loading = 'eager'; }));
    if (tcount) tcount.textContent = String(k + 1).padStart(2, '0') + ' / ' + String(STS.length).padStart(2, '0');
    const cd = dots[k] && dots[k].parentNode; if (cd && innerWidth < 900) cd.scrollTo({ left: dots[k].getBoundingClientRect().left - cd.getBoundingClientRect().left + cd.scrollLeft - 20, behavior: RM ? 'auto' : 'smooth' });
  };
  setCur(0);
  if ('IntersectionObserver' in window) new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting) { STS.forEach((st, i) => setTimeout(() => $$('img', st).forEach(im => { im.loading = 'eager'; if (im.decode) im.decode().catch(() => {}); }), i < 4 ? 0 : 400 + i * 120)); o.disconnect(); } }), { rootMargin: '1200px' }).observe(pin);
  const desk = () => innerWidth >= 900 && window.gsap && window.ScrollTrigger;
  const goSt = i => {
    i = Math.max(0, Math.min(STS.length - 1, i));
    if (desk() && tripST) { const dist = track.scrollWidth - innerWidth, x = Math.min(dist, STS[i].offsetLeft - (innerWidth - STS[i].offsetWidth) / 2); scrollTo({ top: tripST.start + Math.max(0, x) / dist * (tripST.end - tripST.start) + 2, behavior: RM ? 'auto' : 'smooth' }); }
    else track.scrollTo({ left: STS[i].offsetLeft - (track.clientWidth - STS[i].offsetWidth) / 2, behavior: RM ? 'auto' : 'smooth' });
  };
  $$('[data-go]').forEach(b => b.addEventListener('click', () => goSt(+b.dataset.go)));
  $$('[data-tnav]').forEach(b => b.addEventListener('click', () => goSt(curSt + +b.dataset.tnav)));
  track.addEventListener('scroll', () => { if (desk()) return; const c = track.scrollLeft + track.clientWidth / 2; let k = 0; STS.forEach((st, i) => { if (st.offsetLeft <= c) k = i; }); setCur(k); }, { passive: true });
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.matchMedia({
      '(min-width: 900px)': () => {
        const dist = () => track.scrollWidth - innerWidth;
        const tw = gsap.to(track, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: pin, start: 'top top', end: () => '+=' + dist() * 1.05, pin: true, scrub: .7, invalidateOnRefresh: true, onUpdate: s => {
          const p = s.progress; bar.style.width = p * 100 + '%'; plane.style.left = p * 100 + '%';
          const x = p * dist() + innerWidth * .55; let k = 0; STS.forEach((st, i) => { if (st.offsetLeft <= x) k = i; }); setCur(k);
        } } });
        tripST = tw.scrollTrigger;
        if (!RM) STS.forEach((st, i) => {
          const ph = $$('.sp', st), yr = $('.st-y', st), tx = $$('.st-t > :not(.st-y)', st);
          if (i > 0) {
            const tl = gsap.timeline({ scrollTrigger: { trigger: st, containerAnimation: tw, start: 'left 100%', end: 'left 35%', scrub: true } });
            tl.from(ph, { y: (j) => [50, -60, 30][j], x: j => [-40, 80, 40][j], rotate: j => [-9, 12, -10][j], opacity: 0, scale: .86, stagger: .12, ease: 'power2.out' }, 0)
              .from(tx, { x: 80, opacity: 0, stagger: .06, ease: 'power2.out' }, .1);
          }
          gsap.fromTo(yr, { xPercent: 35 }, { xPercent: -35, ease: 'none', scrollTrigger: { trigger: st, containerAnimation: tw, start: 'left right', end: 'right left', scrub: true } });
        });
        return () => { tripST = null; };
      }
    });
  }

  /* ---------- Zitat Wort für Wort ---------- */
  const bq = $('[data-split]');
  if (bq) {
    const walk = n => { [...n.childNodes].forEach(c => { if (c.nodeType === 3) { const f = document.createDocumentFragment(); c.textContent.split(/(\s+)/).forEach(w => { if (!w.trim()) f.appendChild(document.createTextNode(w)); else { const s = document.createElement('span'); s.className = 'w'; s.textContent = w; f.appendChild(s); } }); c.replaceWith(f); } else walk(c); }); };
    walk(bq); const ws = $$('.w', bq);
    const up = () => { const r = bq.getBoundingClientRect(), p = Math.max(0, Math.min(1, (innerHeight * .85 - r.top) / (r.height + innerHeight * .35))); const n = Math.round(p * ws.length); ws.forEach((w, i) => w.classList.toggle('on', i < n)); };
    addEventListener('scroll', up, { passive: true }); up();
  }


  /* ---------- Lebensbaum ---------- */
  const tw = $('[data-tree]');
  if (tw) {
    const svgT = $('svg.tree', tw), ty = $('[data-ty]'), tt = $('[data-tt]'), F = $$('.fr', tw);
    const FD = F.map(f => f.getAttribute('aria-label'));
    const pick = i => { F.forEach((f, j) => f.classList.toggle('on', j === i)); const [y, ...r] = FD[i].split(': '); ty.textContent = y; tt.textContent = r.join(': '); };
    F.forEach((f, i) => { f.addEventListener('click', () => pick(i)); f.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(i); } }); f.addEventListener('mouseenter', () => pick(i)); });
    const grow = () => { const r = tw.getBoundingClientRect(), vh = innerHeight; const g = RM ? 1 : Math.max(0, Math.min(1, (vh * .9 - r.top) / (r.height * .75))); svgT.style.setProperty('--g', g.toFixed(3)); tw.classList.toggle('leafy', g > .55); tw.classList.toggle('fruity', g > .8); if (g > .8 && !tw._auto) { tw._auto = 1; let k = 0; const a = setInterval(() => { if (tw._touched) return clearInterval(a); pick(k = (k + 1) % F.length); }, 3200); } };
    tw.addEventListener('pointerdown', () => tw._touched = 1);
    addEventListener('scroll', grow, { passive: true }); grow(); pick(0);
  }

  /* ---------- Momente (Handy: antippen) ---------- */
  $$('[data-mo]').forEach(m => m.addEventListener('click', () => m.classList.toggle('on')));
  if (window.gsap && !RM) $$('.mo img').forEach((im, i) => gsap.fromTo(im, { yPercent: -4 }, { yPercent: 4, ease: 'none', scrollTrigger: { trigger: im, start: 'top bottom', end: 'bottom top', scrub: true } }));

  /* ---------- Finder ---------- */
  const ft = $('[data-ft]'), fd = $('[data-fd]'), fl = $('[data-fl]'), fres = $('[data-fres]');
  const show = (title, text, list) => { ft.textContent = title; fd.textContent = text; fl.innerHTML = list.map(x => `<li><a href="${D.wa}?text=${encodeURIComponent('Aloha Verena, ich interessiere mich für: ' + x + '. Wann hättest du Zeit?')}" target="_blank" rel="noopener">${x}<span aria-hidden="true">→</span></a></li>`).join(''); fres.animate && fres.animate([{ opacity: .3, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }], { duration: 450, easing: 'ease-out' }); };
  $$('[data-fmode]').forEach(b => b.addEventListener('click', () => { $$('[data-fmode]').forEach(x => x.classList.toggle('on', x === b)); $$('[data-fp]').forEach(p => p.classList.toggle('on', p.dataset.fp === b.dataset.fmode)); if (b.dataset.fmode === 'soul') show('Wie fühlst du dich?', 'Wähle das Gefühl, das am ehesten passt.', []); else show('Tippe auf eine Stelle', 'Nacken, Rücken, Knie – oder einfach das Gefühl, dass etwas nicht im Fluss ist.', []); }));
  $$('.bp').forEach(b => b.addEventListener('click', () => { $$('.bp').forEach(x => x.classList.toggle('on', x === b)); const d = D.body[+b.dataset.bp]; show(d.l, 'Damit kann ich dich unterstützen – was genau passt, besprechen wir beim ersten Termin.', d.r); }));
  $$('[data-feel]').forEach(b => b.addEventListener('click', () => { $$('[data-feel]').forEach(x => x.classList.toggle('on', x === b)); const d = D.feel[+b.dataset.feel]; show(d.l, d.t, d.r); }));

  /* ---------- Atmen ---------- */
  const bw = $('[data-bwrap]'), bt = $('[data-bt]'), bn = $('[data-bn]'), bbtn = $('[data-breath]'), brr = $('[data-br-r]'); let bRun = false;
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const phase = async (cls, label, sec) => { bw.className = 'breath ' + cls; bt.textContent = label; for (let s = sec; s > 0; s--) { if (!bRun) return; bn.textContent = s; await sleep(1000); } };
  bbtn.addEventListener('click', async () => {
    if (bRun) { bRun = false; return; }
    bRun = true; bbtn.lastChild.textContent = ' Stopp';
    for (let r = 1; r <= 3 && bRun; r++) {
      brr.textContent = `Runde ${r} von 3`;
      breatheSound(1.7, 4); await phase('in', 'Einatmen', 4);
      if (!bRun) break; await phase('hold', 'Halten', 2);
      if (!bRun) break; breatheSound(.6, 6); await phase('out', 'Ausatmen', 6);
    }
    breatheSound(1, 2); bw.className = 'breath'; bt.textContent = bRun ? 'Schön.' : 'Bereit?'; bn.textContent = bRun ? 'Spürst du es?' : ''; brr.textContent = bRun ? 'Drei Runden geschafft. Aloha.' : 'Runde 0 von 3';
    bRun = false; bbtn.lastChild.textContent = ' Nochmal atmen';
  });

  /* ---------- Aloha & HUNA ---------- */
  $$('.al').forEach(a => a.addEventListener('click', () => { const on = !a.classList.contains('on'); $$('.al').forEach(x => x.classList.remove('on')); a.classList.toggle('on', on); }));
  const huna = $$('.huna-w span');
  if (huna.length) new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting) { huna.forEach((s, i) => setTimeout(() => s.classList.add('on'), RM ? 0 : i * 450)); o.disconnect(); } }), { threshold: .6 }).observe($('.huna-w'));


  /* ---------- Neuseeland ---------- */
  (() => {
    const q = $$('[data-nzq] blockquote'); let i = 0;
    if (q.length && !RM) setInterval(() => { if (document.hidden) return; q[i].classList.remove('on'); i = (i + 1) % q.length; q[i].classList.add('on'); }, 6500);
    const st = $('[data-nzstack]');
    if (st && 'IntersectionObserver' in window && !RM) { st.classList.add('wait'); new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting) { st.classList.remove('wait'); o.disconnect(); } }), { threshold: .25 }).observe(st); }
  })();
  /* ---------- Reel neue Liege ---------- */
  (() => {
    const r = $('[data-reel]'); if (!r) return;
    const v = $('video', r), b = $('[data-reelsnd]', r);
    if ('IntersectionObserver' in window) new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { const p = v.play(); p && p.catch(() => {}); } else { v.pause(); if (!v.muted) { v.muted = true; if (b) { b.textContent = '🔇'; b.setAttribute('aria-pressed', 'false'); b.setAttribute('aria-label', 'Ton an'); } PL.duck(false); } } }), { threshold: .35 }).observe(v);
    b && b.addEventListener('click', () => { v.muted = !v.muted; PL.duck(!v.muted); b.textContent = v.muted ? '🔇' : '🔊'; b.setAttribute('aria-pressed', String(!v.muted)); b.setAttribute('aria-label', v.muted ? 'Ton an' : 'Ton aus'); if (!v.muted) { const p = v.play(); p && p.catch(() => {}); } });
  })();
  /* ---------- Film ---------- */
  const film = $('[data-film]');
  film && $('.fl-play', film) && $('.fl-play', film).addEventListener('click', async () => {
    let ok = false; try { ok = (await fetch('media/film.mp4', { method: 'HEAD' })).ok; } catch (e) {}
    if (ok) { film.innerHTML = '<video src="media/film.mp4" controls autoplay playsinline style="width:100%;aspect-ratio:16/10;object-fit:cover"></video>'; }
    else { film.classList.add('soon'); $('.fl-tag', film).textContent = 'Der Film von Falcon Eye kommt hier hinein 🎬'; }
  });

  /* ---------- Öle ---------- */
  const oils = $('[data-oils]'), mist = $('[data-mist]');
  $$('.oil').forEach(o => o.addEventListener('click', () => {
    $$('.oil').forEach(x => x.classList.toggle('on', x === o));
    const r = oils.getBoundingClientRect(), b = o.getBoundingClientRect();
    mist.style.setProperty('--mx', ((b.left + b.width / 2 - r.left) / r.width * 60 + 20) + '%'); mist.style.setProperty('--my', ((b.top + b.height / 2 - r.top) / r.height * 60 + 20) + '%');
    mist.style.setProperty('--mc', D.oils[+o.dataset.oil].c); mist.classList.remove('on'); void mist.offsetWidth; mist.classList.add('on');
    const od = D.oils[+o.dataset.oil], sel = $('[data-oilsel]'); if (sel) sel.innerHTML = `<b>${od.n}</b> – ${od.d}. <a href="${D.shop}" target="_blank" rel="noopener">Im Shop ansehen →</a> · <a href="${D.wa}?text=${encodeURIComponent('Aloha Verena, ich habe eine Frage zu ' + od.n + '.')}" target="_blank" rel="noopener">Frage stellen</a>`;
  }));

  /* ---------- Wusstest du? (Flip-Karten) ---------- */
  (() => {
    const C = $$('.fc'), n = $('[data-fcn]'), bar = $('[data-fcbar]'), seen = new Set();
    const flip = (c, on) => {
      c.classList.toggle('on', on); const t = $('.fc-t', c); t.setAttribute('aria-expanded', String(on));
      $('.fc-b', c).setAttribute('aria-hidden', String(!on)); $$('.fc-b a, .fc-b button', c).forEach(x => x.tabIndex = on ? 0 : -1);
      if (on) { seen.add(c.dataset.fc); c.classList.add('seen'); n.textContent = seen.size; bar.style.width = seen.size / C.length * 100 + '%'; if (seen.size === C.length) n.parentNode.innerHTML = '<b>Alle ' + C.length + '</b> entdeckt – Mahalo! 🌺'; setTimeout(() => $('.fc-x', c).focus({ preventScroll: true }), 300); }
    };
    C.forEach(c => {
      c.addEventListener('click', e => { if (e.target.closest('a')) return; if (e.target.closest('.fc-x')) { flip(c, false); $('.fc-t', c).focus({ preventScroll: true }); return; } flip(c, !c.classList.contains('on')); });
    });
    $$('[data-fcat]').forEach(b => b.addEventListener('click', () => {
      $$('[data-fcat]').forEach(x => x.classList.toggle('on', x === b)); const k = b.dataset.fcat;
      C.forEach(c => c.classList.toggle('hide', k !== 'alle' && c.dataset.cat !== k));
      const g = $('[data-fcg]'); g.scrollLeft = 0;
      if (window.gsap && !RM) gsap.fromTo(C.filter(c => !c.classList.contains('hide')), { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .6, stagger: .05, ease: 'power3.out' });
    }));
  })();

  /* ---------- Aloha-Wörterbuch ---------- */
  (() => {
    const W = D.words || [], card = $('.wb-card'); if (!card) return; let cur = 0;
    const show = i => { cur = i; const w = W[i]; $('[data-ww]').textContent = w.w; $('[data-wp]').textContent = w.p; $('[data-wm]').textContent = w.m; $('[data-wn]').textContent = w.n; const a = $('[data-wsrc]'); a.href = w.su; a.textContent = 'Quelle: ' + w.sn + ' ↗'; $$('[data-w]').forEach((b, j) => b.classList.toggle('on', j === i)); card.classList.remove('flip'); void card.offsetWidth; card.classList.add('flip'); };
    $$('[data-w]').forEach(b => b.addEventListener('click', () => show(+b.dataset.w)));
    const say = $('[data-wsay]');
    if (!('speechSynthesis' in window)) say.hidden = true;
    else say.addEventListener('click', () => { const u = new SpeechSynthesisUtterance(W[cur].w.replace(/ʻ/g, '')); u.lang = 'de-DE'; u.rate = .75; speechSynthesis.cancel(); speechSynthesis.speak(u); });
  })();

  /* ---------- Lightbox für echte Fotos ---------- */
  (() => {
    const lb = $('[data-lbox]'); if (!lb) return; const li = $('[data-lbi]'), lc = $('[data-lbc]'); let list = [], k = 0, last = null;
    const cap = im => { const f = im.closest('figure'); const c = f && $('figcaption', f); return (c && c.textContent) || im.alt || ''; };
    const set = j => { k = (j + list.length) % list.length; const im = list[k]; li.src = im.currentSrc || im.src; li.alt = im.alt; lc.textContent = cap(im); };
    const open = im => { const w = im.closest('[data-lbw]'); list = w ? $$('img', w) : $$('img[data-lb]'); last = document.activeElement; set(list.indexOf(im)); lb.hidden = false; document.documentElement.style.overflow = 'hidden'; $('[data-lbx]').focus(); };
    const close = () => { lb.hidden = true; document.documentElement.style.overflow = ''; last && last.focus && last.focus({ preventScroll: true }); };
    document.addEventListener('click', e => { if (e.target.closest('a, button')) return; let im = e.target.closest('[data-lbw] img, img[data-lb]'); if (!im) { const f = e.target.closest('[data-lbw] figure, figure[data-lbw]'); im = f && $('img', f); } if (im) { e.preventDefault(); open(im); } });
    $('[data-lbx]').addEventListener('click', close); lb.addEventListener('click', e => { if (e.target === lb) close(); });
    $$('[data-lbn]').forEach(b => b.addEventListener('click', () => set(k + +b.dataset.lbn)));
    addEventListener('keydown', e => { if (lb.hidden) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') set(k + 1); if (e.key === 'ArrowLeft') set(k - 1); });
  })();

  /* ---------- Zahlen zählen hoch ---------- */
  (() => {
    const N = $$('[data-count]'); if (!N.length || RM || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return; io.unobserve(e.target); const el = e.target, to = +el.dataset.count, from = to > 1000 ? 1980 : 0, plus = el.hasAttribute('data-plus') ? '+' : '', t0 = performance.now();
      const st = now => { const p = Math.min(1, (now - t0) / 1600), v = Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3))); el.textContent = v + (p === 1 ? plus : ''); if (p < 1) requestAnimationFrame(st); }; requestAnimationFrame(st); }), { threshold: .6 });
    N.forEach(n => io.observe(n));
  })();

  /* ---------- Formular ---------- */
  const form = $('[data-form]');
  form.addEventListener('submit', () => { form.querySelector('[name="_next"]').value = location.href.split('#')[0].split('?')[0] + '?gesendet=1#kontakt'; });
  if (/gesendet=1/.test(location.search)) $('[data-fok]').hidden = false;

  /* ---------- Animationen ---------- */
  if (window.gsap && !RM) {
    whenIntro(() => {
      gsap.from('.h1 .ln > *', { yPercent: 110, duration: 1.3, ease: 'power4.out', stagger: .12, delay: .15 });
      gsap.from('.hero [data-h]:not(.h1)', { y: 30, opacity: 0, duration: 1.1, ease: 'power3.out', stagger: .1, delay: .5 });
    });
    $$('.stat').forEach((el, i) => gsap.from(el, { y: 40, opacity: 0, duration: .9, delay: i * .08, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 92%', once: true } }));
    $$('.fc').forEach((el, i) => gsap.from(el, { y: 60, rotateY: -25, opacity: 0, duration: 1, delay: (i % 4) * .08, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 92%', once: true } }));
    const sh = $('[data-shop]'); sh && gsap.from(sh, { y: 80, rotateY: -35, rotateX: 12, opacity: 0, duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: sh, start: 'top 85%', once: true } });
    $$('.qs-ph, .wb-card, .al-law, .oe-vortrag').forEach(el => gsap.from(el, { y: 50, opacity: 0, scale: .96, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }));
    $$('.sec-h, .fi-g, .at-g > *, .fl-g > *, .oe-t, .cv-l, .ko-g > *, .huna, .wb-l').forEach(el => gsap.from(el, { y: 50, opacity: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } }));
    $$('[data-r]').forEach((el, i) => gsap.from(el, { y: 50, opacity: 0, duration: .9, delay: (i % 3) * .08, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } }));
  }
})();
