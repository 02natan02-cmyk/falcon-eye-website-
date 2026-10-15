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
  const onS = () => hdr.classList.toggle('solid', scrollY > hero.offsetHeight - 90);
  addEventListener('scroll', onS, { passive: true }); onS();
  const bur = $('[data-burger]'), mn = $('[data-mnav]');
  bur.addEventListener('click', () => { const o = bur.getAttribute('aria-expanded') !== 'true'; bur.setAttribute('aria-expanded', o); mn.hidden = !o; hdr.classList.toggle('solid', o || scrollY > hero.offsetHeight - 90); });
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

  /* ---------- Klang ---------- */
  const sbtn = $('[data-snd]'), moodEl = $('[data-mood]'); let cur = 1; let AC, master, swell, audioEl, sound = false, built = false;
  async function buildAudio() {
    AC = new (window.AudioContext || window.webkitAudioContext)(); master = AC.createGain(); master.gain.value = 0; master.connect(AC.destination);
    swell = AC.createGain(); swell.gain.value = 1; swell.connect(master);
    let ok = false;
    try { const r = await fetch(D.music, { method: 'HEAD' }); ok = r.ok && /audio|mpeg|octet/.test(r.headers.get('content-type') || 'audio'); } catch (e) {}
    if (ok) { audioEl = new Audio(D.tracks ? D.tracks[cur - 1] : D.music); audioEl.loop = true; audioEl.crossOrigin = 'anonymous'; AC.createMediaElementSource(audioEl).connect(swell); audioEl.play().catch(() => {}); }
    else {
      // Meeresrauschen: braunes Rauschen + Tiefpass + langsame Wellen
      const len = AC.sampleRate * 4, buf = AC.createBuffer(1, len, AC.sampleRate), d = buf.getChannelData(0); let l = 0;
      for (let i = 0; i < len; i++) { l = (l + .02 * (Math.random() * 2 - 1)) / 1.02; d[i] = l * 3.2; }
      const n = AC.createBufferSource(); n.buffer = buf; n.loop = true;
      const lp = AC.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 650;
      const wg = AC.createGain(); wg.gain.value = .5;
      const lfo = AC.createOscillator(); lfo.frequency.value = .11; const la = AC.createGain(); la.gain.value = .35; lfo.connect(la); la.connect(wg.gain);
      const lfo2 = AC.createOscillator(); lfo2.frequency.value = .11; const lb = AC.createGain(); lb.gain.value = 380; lfo2.connect(lb); lb.connect(lp.frequency);
      n.connect(lp); lp.connect(wg); wg.connect(swell); n.start(); lfo.start(); lfo2.start();
      // sanfte Akkorde
      const pad = AC.createGain(); pad.gain.value = .05; pad.connect(swell);
      const CH = [[261.6, 329.6, 392, 493.9], [220, 261.6, 329.6, 392], [174.6, 220, 261.6, 329.6], [196, 246.9, 293.7, 329.6]];
      const oscs = CH[0].map(f => { const o = AC.createOscillator(); o.type = 'sine'; o.frequency.value = f / 2; const g = AC.createGain(); g.gain.value = .25; o.connect(g); g.connect(pad); o.start(); return o; });
      let ci = 0; setInterval(() => { ci = (ci + 1) % CH.length; oscs.forEach((o, j) => o.frequency.setTargetAtTime(CH[ci][j] / 2, AC.currentTime, 1.6)); }, 8000);
    }
    built = true;
  }
  sbtn.addEventListener('click', async () => {
    sound = !sound; sbtn.setAttribute('aria-pressed', sound);
    if (sound && !built) await buildAudio();
    if (AC.state === 'suspended') await AC.resume();
    if (audioEl) sound ? audioEl.play().catch(() => {}) : null;
    master.gain.setTargetAtTime(sound ? .9 : 0, AC.currentTime, .6);
    if (moodEl) moodEl.hidden = !(sound && audioEl);
    if (!sound && audioEl) setTimeout(() => !sound && audioEl.pause(), 1500);
  });
  moodEl && moodEl.addEventListener('click', e => { const b = e.target.closest('[data-tr]'); if (!b || !audioEl) return; cur = +b.dataset.tr; $$('[data-tr]', moodEl).forEach(x => x.classList.toggle('on', x === b)); const t = audioEl.currentTime; master.gain.setTargetAtTime(0, AC.currentTime, .15); setTimeout(() => { audioEl.src = D.tracks[cur - 1]; audioEl.play().catch(() => {}); master.gain.setTargetAtTime(.9, AC.currentTime, .4); }, 350); });
  const breatheSound = (to, sec) => { if (sound && swell) swell.gain.setTargetAtTime(to, AC.currentTime, sec / 3); };

  /* ---------- Reise (horizontal) ---------- */
  const track = $('[data-track]'), pin = $('[data-trip]'), bar = $('[data-tripbar]'), plane = $('.re-plane'), dots = $$('.re-dots li');
  const setTrip = p => { bar.style.width = p * 100 + '%'; plane.style.left = p * 100 + '%'; const k = Math.round(p * (dots.length - 1)); dots.forEach((d, i) => d.classList.toggle('on', i <= k)); };
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.matchMedia({
      '(min-width: 900px)': () => {
        const dist = () => track.scrollWidth - innerWidth;
        const tw = gsap.to(track, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: pin, start: 'top top', end: () => '+=' + dist(), pin: true, scrub: .6, invalidateOnRefresh: true, onUpdate: s => setTrip(s.progress) } });
        $$('.st').forEach(st => gsap.from($('.pc', st), { rotate: 8, scale: .9, opacity: .4, ease: 'none', scrollTrigger: { trigger: st, containerAnimation: tw, start: 'left 95%', end: 'left 45%', scrub: true } }));
        return () => {};
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
  const show = (title, text, list) => { ft.textContent = title; fd.textContent = text; fl.innerHTML = list.map(x => `<li>${x}</li>`).join(''); fres.animate && fres.animate([{ opacity: .3, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }], { duration: 450, easing: 'ease-out' }); };
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
    if ('IntersectionObserver' in window) new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { const p = v.play(); p && p.catch(() => {}); } else v.pause(); }), { threshold: .35 }).observe(v);
    b && b.addEventListener('click', () => { v.muted = !v.muted; b.textContent = v.muted ? '🔇' : '🔊'; b.setAttribute('aria-pressed', String(!v.muted)); b.setAttribute('aria-label', v.muted ? 'Ton an' : 'Ton aus'); if (!v.muted) { const p = v.play(); p && p.catch(() => {}); } });
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
  }));

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
    $$('.sec-h, .re-head, .fi-g, .at-g > *, .fl-g > *, .oe-g > *, .cv-l, .ko-g > *, .huna').forEach(el => gsap.from(el, { y: 50, opacity: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } }));
    $$('[data-r]').forEach((el, i) => gsap.from(el, { y: 50, opacity: 0, duration: .9, delay: (i % 3) * .08, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } }));
  }
})();
