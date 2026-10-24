/* Falcon Eye – Angebot auf der Webdesign-Seite (#angebot): Stempel −45 %, Klappzahlen-Countdown, leuchtende Plätze
   (Zähler aus daten/plaetze.json, von Hand gepflegt), Rubbellos mit Funken, Vorteils-Karten, „Platz sichern“, Teilen.
   Black Friday: 27.10.2026 00:00 bis 27.11.2026 23:59 (MEZ). Startet erst, wenn der Abschnitt in die Nähe kommt. */
(() => {
  const sec = document.getElementById('angebot');
  if (!sec) return;
  const $ = (s, r = sec) => r.querySelector(s), $$ = (s, r = sec) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const IO = 'IntersectionObserver' in window;
  const CODE = 'BlackFriday45';
  const START = Date.parse('2026-10-27T00:00:00+01:00'), END = Date.parse('2026-11-27T23:59:59+01:00');
  const pad = n => String(n).padStart(2, '0');
  const phase = () => { const t = Date.now(); return t < START ? 'pre' : t <= END ? 'live' : 'over'; };
  // sichtbar / unsichtbar beobachten
  const watch = (el, on, off, opt) => {
    if (!el) return;
    if (!IO) { on(); return; }
    new IntersectionObserver(([en]) => { en.isIntersecting ? on() : off && off(); }, opt || { threshold: 0 }).observe(el);
  };
  const once = (el, fn, th) => {
    if (!el) return;
    if (!IO) { fn(); return; }
    const io = new IntersectionObserver(([en]) => { if (en.isIntersecting) { io.disconnect(); fn(); } }, { threshold: th || .4 });
    io.observe(el);
  };

  /* ---------- 1. Stempel „−45 %“ knallt rein ---------- */
  const h = $('.wbf-h'), stamp = $('.wbf-stamp'), main = $('.wbf-main');
  if (h && stamp && !reduce && IO) {
    h.classList.add('wbf-arm');
    const dust = document.createElement('span');
    dust.className = 'wbf-dust';
    let d = '';
    for (let k = 0; k < 16; k++) {
      const a = (k / 16) * Math.PI * 2 + Math.random() * .4, r = 90 + Math.random() * 120;
      d += `<i style="--dx:${(Math.cos(a) * r).toFixed(0)}px;--dy:${(Math.sin(a) * r * .7).toFixed(0)}px;--r:${(Math.random() * 360).toFixed(0)}deg;--s:${(5 + Math.random() * 7).toFixed(0)}px;--c:${k % 3 ? '#ffd000' : '#e6ecec'}"></i>`;
    }
    dust.innerHTML = d;
    stamp.appendChild(dust);
    once(stamp, () => {
      h.classList.add('is-hit');
      if (main) { main.classList.add('wbf-shake'); setTimeout(() => main.classList.remove('wbf-shake'), 900); }
    }, .55);
  }

  /* ---------- 2. Countdown als Klappzahlen ---------- */
  const labels = p => {
    document.documentElement.dataset.bf = p;
    $$('[data-bf-label]', document).forEach(el => { el.textContent = p === 'pre' ? 'Start in' : 'Endet in'; });
    $$('[data-bf-at]', document).forEach(el => { el.textContent = p === 'pre' ? '27.10. · 0:00 Uhr' : '27.11. · 23:59 Uhr'; });
    $$('[data-bf-when]', document).forEach(el => { el.textContent = p === 'pre' ? 'ab 27.10.' : '27.10.–27.11.'; });
  };
  const clock = $('.wbf-clock');
  if (clock) {
    const leaf = '<span class="wbf-up"><b>0</b></span><span class="wbf-dn"><b>0</b></span><span class="wbf-lup"><b>0</b></span><span class="wbf-ldn"><b>0</b></span>';
    const flaps = $$('.wbf-flaps', clock).map(u => { u.innerHTML = `<span class="wbf-flap" data-v="0">${leaf}</span><span class="wbf-flap" data-v="0">${leaf}</span>`; return [...u.children]; });
    const setFlap = (f, dgt, anim) => {
      if (f.dataset.v === dgt) return;
      const [t, b, lt, lb] = [...f.children].map(x => x.firstChild);
      const old = f.dataset.v;
      f.dataset.v = dgt;
      clearTimeout(f._t);
      if (!anim) { t.textContent = b.textContent = lt.textContent = lb.textContent = dgt; f.classList.remove('go'); return; }
      t.textContent = dgt; b.textContent = old; lt.textContent = old; lb.textContent = dgt;
      f.classList.remove('go'); void f.offsetWidth; f.classList.add('go');
      f._t = setTimeout(() => { b.textContent = dgt; lt.textContent = dgt; f.classList.remove('go'); }, 560);
    };
    let seen = false, timer = 0, ph = phase();
    const tick = anim => {
      const p = phase();
      if (p !== ph) { ph = p; labels(p); }
      const s = Math.max(0, Math.floor(((p === 'pre' ? START : END) - Date.now()) / 1000));
      const v = [Math.floor(s / 86400), Math.floor(s % 86400 / 3600), Math.floor(s % 3600 / 60), s % 60].map(n => pad(Math.min(n, 99)));
      v.forEach((str, i) => { setFlap(flaps[i][0], str[0], anim); setFlap(flaps[i][1], str[1], anim); });
    };
    if (reduce || !IO) tick(false);
    watch(clock, () => {
      // beim ersten Sichtkontakt klappen alle Zahlen von 00 auf den echten Stand (Selbst-Impuls)
      tick(!reduce);
      seen = true;
      clearInterval(timer); timer = setInterval(() => tick(!reduce), 1000);
    }, () => { clearInterval(timer); timer = 0; }, { rootMargin: '25% 0px', threshold: 0 });
  }

  /* ---------- 3. Plätze als leuchtende Slots (daten/plaetze.json) ---------- */
  const slots = $('.wbf-slots'), freeEl = $('[data-slots-free]'), totalEl = $('[data-slots-total]');
  if (slots) {
    const draw = (total, taken) => {
      slots.innerHTML = Array.from({ length: total }, (_, i) => `<i class="wbf-slot${i < taken ? ' taken' : ''}" style="--i:${i}"></i>`).join('');
      const free = Math.max(0, total - taken);
      if (freeEl) freeEl.textContent = free;
      if (totalEl) totalEl.textContent = total;
      slots.setAttribute('aria-label', `${free} von ${total} Plätzen frei`);
    };
    fetch('daten/plaetze.json', { cache: 'no-store' }).then(r => r.ok ? r.json() : Promise.reject()).then(j => {
      const total = Math.max(1, Math.min(60, parseInt(j.gesamt, 10) || 15)), taken = Math.max(0, Math.min(total, parseInt(j.vergeben, 10) || 0));
      draw(total, taken);
    }).catch(() => { });
    if (!reduce && IO) {
      sec.classList.add('wbf-arm-s');
      watch(slots, () => { slots.classList.add('is-on', 'is-live'); slots.classList.remove('is-paused'); }, () => slots.classList.add('is-paused'), { threshold: .35 });
    }
  }

  /* ---------- 4. Rubbellos mit Funken ---------- */
  const tk = $('.wbf-ticket'), foil = $('.wbf-foil'), spCv = $('.wbf-sparks'), rub = $('.wbf-rub');
  const toast = (() => {
    let el = null, t = 0;
    return msg => {
      if (!el) { el = document.createElement('div'); el.className = 'wbf-toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
      el.textContent = msg; el.classList.add('on'); clearTimeout(t); t = setTimeout(() => el.classList.remove('on'), 2200);
    };
  })();
  const fallbackCopy = () => {
    try { const t = document.createElement('textarea'); t.value = CODE; t.setAttribute('readonly', ''); t.style.cssText = 'position:fixed;left:-9999px;top:0'; document.body.appendChild(t); t.select(); const r = document.execCommand('copy'); t.remove(); return r; } catch (e) { return false; }
  };
  const copyCode = () => {
    const ok = () => toast('Code kopiert: ' + CODE);
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(CODE).then(ok, () => { if (fallbackCopy()) ok(); });
    else if (fallbackCopy()) ok();
  };
  // Funken
  let sp = null, parts = [], spRaf = 0, spW = 0, spH = 0;
  const sizeSparks = () => {
    if (!spCv || !spCv.getContext) return;
    const r = spCv.getBoundingClientRect(), dpr = Math.min(2, devicePixelRatio || 1);
    spW = r.width; spH = r.height;
    spCv.width = Math.round(spW * dpr); spCv.height = Math.round(spH * dpr);
    sp = spCv.getContext('2d'); sp.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  const stepSparks = () => {
    spRaf = 0;
    if (!sp) return;
    sp.clearRect(0, 0, spW, spH);
    sp.globalCompositeOperation = 'lighter';
    parts = parts.filter(p => p.life > 0);
    for (const p of parts) {
      p.vy += .16; p.vx *= .985; p.x += p.vx; p.y += p.vy; p.life -= p.decay;
      sp.strokeStyle = `rgba(${p.c},${Math.max(0, p.life).toFixed(3)})`;
      sp.lineWidth = p.s; sp.lineCap = 'round';
      sp.beginPath(); sp.moveTo(p.x - p.vx * 2.4, p.y - p.vy * 2.4); sp.lineTo(p.x, p.y); sp.stroke();
    }
    sp.globalCompositeOperation = 'source-over';
    if (parts.length) spRaf = requestAnimationFrame(stepSparks);
  };
  const emit = (x, y, n, power) => {
    if (reduce || !sp) return;
    for (let k = 0; k < n; k++) {
      const a = -Math.PI / 2 + (Math.random() - .5) * Math.PI * 1.6, v = (1.5 + Math.random() * 3.5) * (power || 1);
      parts.push({ x: x + 60, y: y + 60, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 1, decay: .018 + Math.random() * .03, s: .8 + Math.random() * 1.8, c: Math.random() < .72 ? '255,208,0' : '255,250,230' });
    }
    if (parts.length > 400) parts.splice(0, parts.length - 400);
    if (!spRaf) spRaf = requestAnimationFrame(stepSparks);
  };
  let opened = false;
  const open = () => {
    if (opened || !tk) return;
    opened = true;
    tk.classList.add('is-open');
    if (rub) rub.classList.add('gone');
    const r = tk.getBoundingClientRect();
    for (let k = 0; k < 5; k++) setTimeout(() => emit(Math.random() * r.width, Math.random() * r.height, 14, 1.4), k * 70);
  };
  if (tk && foil && foil.getContext) {
    const ctx = foil.getContext('2d', { willReadFrequently: true });
    let W = 0, H = 0, drawing = false, moved = 0, lx = 0, ly = 0, dirty = 0;
    const paintFoil = () => {
      const r = tk.getBoundingClientRect(), dpr = Math.min(2, devicePixelRatio || 1);
      W = r.width; H = r.height;
      foil.width = Math.round(W * dpr); foil.height = Math.round(H * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const g = ctx.createLinearGradient(0, 0, W, H); g.addColorStop(0, '#a9b3bd'); g.addColorStop(.5, '#e7edf2'); g.addColorStop(1, '#8b96a1');
      ctx.globalCompositeOperation = 'source-over'; ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      ctx.globalAlpha = .18; ctx.fillStyle = '#20262d';
      for (let x = -H; x < W; x += 9) { ctx.beginPath(); ctx.moveTo(x, H); ctx.lineTo(x + H, 0); ctx.lineTo(x + H + 3, 0); ctx.lineTo(x + 3, H); ctx.fill(); }
      ctx.globalAlpha = 1; ctx.fillStyle = '#1d232a'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.font = '700 15px Archivo, system-ui, sans-serif'; ctx.fillText('HIER FREIRUBBELN', W / 2, H / 2 - 9);
      ctx.font = '400 12px "Share Tech Mono", ui-monospace, monospace'; ctx.fillText('Ihr Black-Friday-Code', W / 2, H / 2 + 12);
    };
    const cleared = () => {
      try {
        const dd = ctx.getImageData(0, 0, foil.width, foil.height).data; let n = 0, t = 0;
        const sx = Math.max(4, Math.floor(foil.width / 40)) * 4, sy = Math.max(1, Math.floor(foil.height / 12));
        for (let y = 0; y < foil.height; y += sy) for (let x = 0; x < foil.width * 4; x += sx) { t++; if (dd[y * foil.width * 4 + x + 3] < 40) n++; }
        return t ? n / t : 0;
      } catch (e) { return 1; }
    };
    const scratch = (x, y) => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = 34; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(x, y); ctx.stroke();
      ctx.beginPath(); ctx.arc(x, y, 17, 0, Math.PI * 2); ctx.fill();
      emit(x, y, 3);
      lx = x; ly = y;
      if (++dirty % 6 === 0 && cleared() > .48) open();
    };
    const pos = e => { const r = foil.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    foil.addEventListener('pointerdown', e => { if (opened) return; e.preventDefault(); drawing = true; moved = 0; [lx, ly] = pos(e); try { foil.setPointerCapture(e.pointerId); } catch (er) { } if (rub) rub.classList.add('gone'); });
    foil.addEventListener('pointermove', e => { if (!drawing || opened) return; const [x, y] = pos(e); moved += Math.hypot(x - lx, y - ly); scratch(x, y); });
    foil.addEventListener('pointerup', () => { if (!drawing) return; drawing = false; if (moved < 8) open(); });
    foil.addEventListener('pointercancel', () => { drawing = false; });
    // Klick (auch per Tastatur): erst aufdecken, dann kopieren
    tk.addEventListener('click', e => { if (e.target === foil && !opened) return; if (!opened) { open(); return; } copyCode(); });
    const ready = () => { paintFoil(); sizeSparks(); };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(ready); else ready();
    addEventListener('resize', () => { if (!opened) paintFoil(); sizeSparks(); }, { passive: true });
    // Selbst-Impuls: eine Münze rubbelt einmal von selbst, Funken inklusive
    if (!reduce) once(tk, () => setTimeout(() => {
      if (opened || drawing) return;
      const pts = [[.14, .62], [.3, .38], [.46, .6], [.62, .36]];
      let k = 0; [lx, ly] = [pts[0][0] * W, pts[0][1] * H];
      const step = () => {
        if (opened || drawing) return;
        if (++k >= pts.length) return;
        const tx = pts[k][0] * W, ty = pts[k][1] * H, sx = lx, sy = ly; let f = 0;
        const anim = () => { if (opened || drawing) return; f += .12; scratch(sx + (tx - sx) * Math.min(1, f), sy + (ty - sy) * Math.min(1, f)); if (f < 1) requestAnimationFrame(anim); else setTimeout(step, 40); };
        requestAnimationFrame(anim);
      };
      step();
    }, 700), .7);
  } else if (tk) { open(); tk.addEventListener('click', copyCode); }

  /* ---------- 5. Vorteils-Karten: jede spielt ihre Mini-Animation (Tippen/Hover spielt sie nochmal) ---------- */
  const cards = $$('.wbf-card');
  if (cards.length && !reduce && IO) {
    sec.classList.add('wbf-arm-c');
    const play = c => { c.classList.remove('is-play'); void c.offsetWidth; c.classList.add('is-play'); };
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      setTimeout(() => play(e.target), cards.indexOf(e.target) * 160);
    }), { threshold: .45 });
    cards.forEach(c => {
      io.observe(c);
      c.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse' && c.classList.contains('is-play')) play(c); });
      c.addEventListener('click', () => { if (c.classList.contains('is-play')) play(c); });
    });
  }

  /* ---------- 6. Platz sichern (Code ins Formular) und Teilen ---------- */
  $$('[data-wbf-claim]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    const f = document.querySelector('#entwurf input[name="code"], #anfrage input[name="code"]');
    if (f && phase() !== 'over') {
      f.value = CODE;
      f.dispatchEvent(new Event('input', { bubbles: true }));
      const box = f.closest('.af-f'); if (box) box.classList.add('filled');
    }
    const tgt = document.getElementById('entwurf');
    if (!tgt) return;
    const top = document.querySelector('.top');
    const y = tgt.getBoundingClientRect().top + scrollY - ((top ? top.offsetHeight : 66) + 10);
    const L = window.FE && window.FE.lenis;
    if (L) L.scrollTo(y, { duration: reduce ? 0 : 1.2 }); else scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
    setTimeout(() => { const n = tgt.querySelector('input:not([type=hidden]):not([type=checkbox]),textarea'); if (n) n.focus({ preventScroll: true }); }, reduce ? 80 : 1350);
  }));
  const sh = $('[data-wbf-share]');
  if (sh && navigator.share) {
    sh.hidden = false;
    sh.addEventListener('click', () => navigator.share({ title: 'Falcon Eye – Websites, die fliegen', text: 'Bis 27.11. mit dem Code BlackFriday45: 45 % auf den Einmalpreis einer neuen Website von Falcon Eye.', url: 'https://falcon-eye.de/webdesign#angebot' }).catch(() => { }));
  }
})();
