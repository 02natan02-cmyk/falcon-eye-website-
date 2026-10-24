/* Falcon Eye – Landingpage Webdesign: Angebot, Rundum, KI, Ablauf, Fragen, Anfrage.
   Black Friday: 27.10.2026 00:00 bis 27.11.2026 23:59 (Europe/Berlin, MEZ). Zähler: daten/plaetze.json (von Hand pflegen). */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const G = window.gsap;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const PHONE = '4915156743442';
  const FORM_KEY = 'd55d3073-461f-4aad-b190-36db4d7bcbb9'; // Web3Forms, an info@falcon-eye.de gebunden (wie kontakt.html)
  const CODE = 'BlackFriday45';
  const START = Date.parse('2026-10-27T00:00:00+01:00'), END = Date.parse('2026-11-27T23:59:59+01:00');
  const pad = n => String(n).padStart(2, '0');
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const onView = (el, fn, opt) => {
    if (!el) return;
    if (!('IntersectionObserver' in window)) { fn(true); return; }
    const io = new IntersectionObserver(es => es.forEach(e => fn(e.isIntersecting, io)), opt || { threshold: .3 });
    io.observe(el);
  };
  const once = (el, fn, th) => onView(el, (v, io) => { if (v) { io && io.disconnect(); fn(); } }, { threshold: th || .3 });

  /* ---------- Black-Friday-Phase ---------- */
  const phase = () => { const t = Date.now(); return t < START ? 'pre' : t <= END ? 'live' : 'over'; };
  let ph = phase();
  const setPhase = () => {
    ph = phase();
    document.documentElement.dataset.bf = ph;
    $$('[data-bf-when]').forEach(el => { el.textContent = ph === 'pre' ? 'ab 27.10.' : '27.10.–27.11.'; });
    $$('[data-bf-label]').forEach(el => { el.textContent = ph === 'pre' ? 'Start in' : 'Endet in'; });
    $$('[data-bf-at]').forEach(el => { el.textContent = ph === 'pre' ? '27.10. · 0:00 Uhr' : '27.11. · 23:59 Uhr'; });
  };
  setPhase();

  /* ---------- Formular-Helfer (auch für Angebot und KI) ---------- */
  const form = $('#anfrage');
  const codeF = form && form.elements.code;
  function setCode(v) { if (!codeF) return; codeF.value = v; codeF.closest('.af-f').classList.toggle('filled', !!v); }
  function prefill(o) {
    if (!form) return;
    if (o.code !== undefined && ph !== 'over') setCode(o.code);
    if (o.msg && !form.elements.nachricht.value.trim()) form.elements.nachricht.value = o.msg;
    if (o.firma && !form.elements.firma.value.trim()) form.elements.firma.value = o.firma;
  }
  try {
    const u = new URL(location.href), c = u.searchParams.get('code');
    if (c && /^[\w-]{3,30}$/.test(c)) setCode(c);
  } catch (e) { }
  function toForm() {
    const tgt = $('#entwurf'); if (!tgt) return;
    const top = $('.top'), y = tgt.getBoundingClientRect().top + scrollY - ((top ? top.offsetHeight : 66) + 10);
    if (window.FE && window.FE.lenis) window.FE.lenis.scrollTo(y, { duration: reduce ? 0 : 1.1 }); else scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
    setTimeout(() => { const n = form && form.elements.name; if (n && !n.value) n.focus({ preventScroll: true }); }, reduce ? 50 : 1200);
  }
  const toast = (() => {
    let el = null, t = 0;
    return msg => {
      if (!el) { el = document.createElement('div'); el.className = 'bf-copied'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
      el.textContent = msg; el.classList.add('on'); clearTimeout(t); t = setTimeout(() => el.classList.remove('on'), 2200);
    };
  })();
  function copyCode() {
    const ok = () => toast('Code kopiert: ' + CODE);
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(CODE).then(ok, () => fallbackCopy() && ok());
    else if (fallbackCopy()) ok();
    setCode(CODE);
  }
  function fallbackCopy() {
    try { const t = document.createElement('textarea'); t.value = CODE; t.setAttribute('readonly', ''); t.style.cssText = 'position:fixed;left:-9999px;top:0'; document.body.appendChild(t); t.select(); const r = document.execCommand('copy'); t.remove(); return r; } catch (e) { return false; }
  }

  /* =====================================================================
     ANGEBOT
     ===================================================================== */
  const bf = $('#angebot');
  if (bf) {
    // −45 zählt hoch
    const big = $('[data-bf-num]', bf);
    if (big && !reduce) {
      big.textContent = '0';
      once(big, () => {
        const o = { v: 0 };
        if (G) G.to(o, { v: 45, duration: 1.4, ease: 'power3.out', onUpdate: () => { big.textContent = Math.round(o.v); } });
        else big.textContent = '45';
      }, .5);
    }
    // Countdown
    const clock = $('.bf-clock', bf), cells = clock ? $$('b', clock) : [];
    let cT = 0;
    const tick = () => {
      const p = phase(); if (p !== ph) setPhase();
      const target = ph === 'pre' ? START : END;
      let s = Math.max(0, Math.floor((target - Date.now()) / 1000));
      const v = [Math.floor(s / 86400), Math.floor(s % 86400 / 3600), Math.floor(s % 3600 / 60), s % 60].map(pad);
      cells.forEach((c, i) => { if (c.textContent !== v[i]) { c.textContent = v[i]; if (!reduce) { c.classList.remove('tick'); void c.offsetWidth; c.classList.add('tick'); } } });
    };
    if (cells.length) { tick(); onView(clock, v => { clearInterval(cT); if (v) cT = setInterval(tick, 1000); }, { threshold: 0 }); }
    // Plätze aus daten/plaetze.json
    const seats = $('.bf-seats', bf), freeEl = $('[data-slots-free]', bf), totalEl = $('[data-slots-total]', bf);
    const drawSeats = (total, taken) => {
      if (!seats) return;
      seats.innerHTML = Array.from({ length: total }, (_, i) => `<i class="${i < taken ? 'taken' : ''}" style="--i:${i}"></i>`).join('');
      if (freeEl) freeEl.textContent = Math.max(0, total - taken);
      if (totalEl) totalEl.textContent = total;
      seats.setAttribute('aria-label', `${Math.max(0, total - taken)} von ${total} Plätzen frei`);
    };
    fetch('daten/plaetze.json', { cache: 'no-store' }).then(r => r.ok ? r.json() : Promise.reject()).then(j => {
      const total = Math.max(1, Math.min(60, parseInt(j.gesamt, 10) || 15)), taken = Math.max(0, Math.min(total, parseInt(j.vergeben, 10) || 0));
      drawSeats(total, taken);
    }).catch(() => { });
    if (seats && !reduce) once(seats, () => seats.classList.add('pop'), .4);
    // Versprechen: Linie zeichnet sich
    const pr = $('.bf-promise', bf); if (pr) once(pr, () => pr.classList.add('go'), .3);
    // Rubbel-Ticket
    const tk = $('.bf-ticket', bf), cv = tk && $('canvas', tk), rub = $('.bf-rub', bf);
    let opened = false;
    const open = () => { if (opened) return; opened = true; tk.classList.add('is-open'); if (rub) rub.classList.add('gone'); };
    if (tk && cv && cv.getContext) {
      const ctx = cv.getContext('2d', { willReadFrequently: true });
      let W = 0, H = 0, dpr = 1, drawing = false, moved = 0, lx = 0, ly = 0, dirty = 0;
      const paintFoil = () => {
        const r = tk.getBoundingClientRect(); dpr = Math.min(2, devicePixelRatio || 1); W = r.width; H = r.height;
        cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const g = ctx.createLinearGradient(0, 0, W, H); g.addColorStop(0, '#a9b3bd'); g.addColorStop(.5, '#e7edf2'); g.addColorStop(1, '#8b96a1');
        ctx.globalCompositeOperation = 'source-over'; ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
        ctx.globalAlpha = .18; ctx.fillStyle = '#20262d';
        for (let x = -H; x < W; x += 9) { ctx.beginPath(); ctx.moveTo(x, H); ctx.lineTo(x + H, 0); ctx.lineTo(x + H + 3, 0); ctx.lineTo(x + 3, H); ctx.fill(); }
        ctx.globalAlpha = 1; ctx.fillStyle = '#1d232a'; ctx.font = '700 15px Archivo, system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText('HIER FREIRUBBELN', W / 2, H / 2 - 9);
        ctx.font = '400 12px "Share Tech Mono", ui-monospace, monospace'; ctx.fillText('Ihr Black-Friday-Code', W / 2, H / 2 + 12);
      };
      const scratch = (x, y) => {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.lineWidth = 34; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
        ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(x, y); ctx.stroke();
        ctx.beginPath(); ctx.arc(x, y, 17, 0, Math.PI * 2); ctx.fill();
        lx = x; ly = y;
        if (++dirty % 6 === 0 && cleared() > .48) open();
      };
      const cleared = () => {
        try {
          const d = ctx.getImageData(0, 0, cv.width, cv.height).data; let n = 0, t = 0;
          const stepX = Math.max(4, Math.floor(cv.width / 40)) * 4, stepRow = Math.max(1, Math.floor(cv.height / 12));
          for (let y = 0; y < cv.height; y += stepRow) for (let x = 0; x < cv.width * 4; x += stepX) { t++; if (d[y * cv.width * 4 + x + 3] < 40) n++; }
          return t ? n / t : 0;
        } catch (e) { return 1; }
      };
      const pos = e => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
      cv.addEventListener('pointerdown', e => { if (opened) return; e.preventDefault(); drawing = true; moved = 0; [lx, ly] = pos(e); try { cv.setPointerCapture(e.pointerId); } catch (er) { } if (rub) rub.classList.add('gone'); });
      cv.addEventListener('pointermove', e => { if (!drawing || opened) return; const [x, y] = pos(e); moved += Math.hypot(x - lx, y - ly); scratch(x, y); });
      const up = () => { if (!drawing) return; drawing = false; if (moved < 8) open(); };
      cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', () => { drawing = false; });
      // Klick (auch per Tastatur): erst aufdecken, dann kopieren
      tk.addEventListener('click', e => { if (e.target === cv && !opened) return; if (!opened) { open(); return; } copyCode(); });
      tk.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && !opened) { e.preventDefault(); open(); } });
      const ready = () => { paintFoil(); };
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(ready); else ready();
      addEventListener('resize', () => { if (!opened) paintFoil(); }, { passive: true });
      // Impuls: eine Münze rubbelt einmal von selbst
      if (!reduce) once(tk, () => setTimeout(() => {
        if (opened || drawing) return;
        const pts = [[.14, .62], [.3, .38], [.46, .6], [.62, .36]];
        let k = 0; [lx, ly] = [pts[0][0] * W, pts[0][1] * H];
        const step = () => { if (opened || drawing) return; k++; if (k >= pts.length) return; const [tx, ty] = [pts[k][0] * W, pts[k][1] * H]; const sx = lx, sy = ly; let f = 0; const anim = () => { if (opened || drawing) return; f += .12; const x = sx + (tx - sx) * Math.min(1, f), y = sy + (ty - sy) * Math.min(1, f); scratch(x, y); if (f < 1) requestAnimationFrame(anim); else setTimeout(step, 40); }; requestAnimationFrame(anim); };
        step();
      }, 700), .7);
    } else if (tk) { open(); tk.addEventListener('click', copyCode); }
    // Platz sichern
    $$('[data-bf-claim]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); prefill({ code: ph !== 'over' ? CODE : undefined, msg: '' }); toForm(); }));
    // Teilen
    const sh = $('[data-bf-share]', bf);
    if (sh && navigator.share) {
      sh.hidden = false;
      sh.addEventListener('click', () => navigator.share({ title: 'Falcon Eye – Websites, die fliegen', text: 'Bis 27.11. mit dem Code BlackFriday45: 45 % auf den Einmalpreis einer neuen Website von Falcon Eye.', url: 'https://falcon-eye.de/webdesign#angebot' }).catch(() => { }));
    }
  }
  $$('[data-copy-code]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); copyCode(); }));
  $$('[data-drone-ask]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); prefill({ msg: 'Ich interessiere mich auch für einen Drohnenflug durch meinen Betrieb.' }); toForm(); }));

  /* =====================================================================
     RUNDUM – Umlaufbahn
     ===================================================================== */
  const ru = $('#rundum');
  if (ru && $('[data-ru-orbit]', ru)) { // neuer Abschnitt (assets/wd-rundum.js) hat keine Umlaufbahn mehr
    const orbit = $('[data-ru-orbit]', ru), lis = $$('.ru-item', ru);
    const core = lis.filter(li => !li.classList.contains('ki-br')), kiLi = lis.find(li => li.classList.contains('ki-br'));
    const shop = $('.ru-shop', orbit), meter = $('.ru-meter', orbit), tip = $('.ru-tip', orbit), doneB = $('.ru-done', orbit);
    const svg = $('.ru-beams', orbit);
    meter.innerHTML = core.map(() => '<i></i>').join('');
    const mI = $$('i', meter);
    const sats = lis.map((li, i) => {
      const el = document.createElement('div');
      el.className = 'ru-sat' + (li === kiLi ? ' ru-ki' : '');
      el.setAttribute('role', 'presentation');
      const ic = $('.ic', li);
      el.innerHTML = `<span class="bd">${ic ? ic.innerHTML : ''}</span><span class="tx">${esc(li.dataset.short || $('h3', li).textContent)}</span>`;
      orbit.appendChild(el);
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line'); svg.appendChild(line);
      return { el, li, line, ki: li === kiLi, i, r: 0, rT: 0, ok: false };
    });
    const coreS = sats.filter(s => !s.ki), kiS = sats.find(s => s.ki);
    let rot = -Math.PI / 2, interacted = false, vis = false, raf = 0, last = 0, sel = null, autoN = 0;
    const W = () => orbit.clientWidth;
    coreS.forEach(s => { s.r = s.rT = .41; });
    if (kiS) kiS.r = kiS.rT = .56;
    function select(s, user) {
      sel = s;
      lis.forEach(li => { const on = li === s.li; li.classList.toggle('sel', on); const b = $('button', li); if (b) b.setAttribute('aria-expanded', String(on)); });
      sats.forEach(x => x.el.classList.toggle('sel', x === s));
      if (user) interacted = true;
    }
    function dock(s, user) {
      if (!s || s.ok || s.ki) return;
      s.ok = true; s.rT = .31; s.el.classList.add('ok'); s.li.classList.add('ok'); s.line.classList.add('on');
      const n = coreS.filter(x => x.ok).length;
      mI.forEach((m, k) => m.classList.toggle('on', k < n));
      select(s, user);
      if (n === coreS.length) {
        shop.classList.add('lit'); doneB.classList.add('on');
        if (kiS) { kiS.el.classList.add('ready'); kiLi.classList.add('sel'); }
        setTimeout(() => doneB.classList.remove('on'), 3800);
      }
    }
    function useTip() { if (tip) tip.classList.add('gone'); }
    sats.forEach(s => s.el.addEventListener('click', () => {
      useTip();
      if (s.ki) { const k = $('#ki'); if (k) { const top = $('.top'); const y = k.getBoundingClientRect().top + scrollY - ((top ? top.offsetHeight : 66) + 10); if (window.FE && window.FE.lenis) window.FE.lenis.scrollTo(y); else scrollTo({ top: y, behavior: 'smooth' }); } return; }
      if (!s.ok) dock(s, true); else select(s, true);
    }));
    lis.forEach(li => { const b = $('button', li); if (b) b.addEventListener('click', () => { const s = sats.find(x => x.li === li); useTip(); if (s.ki) { select(s, true); return; } if (!s.ok) dock(s, true); else select(s, true); }); });
    function frame(t) {
      raf = 0;
      const dt = last ? Math.min(.05, (t - last) / 1000) : 0; last = t;
      if (!reduce) rot += dt * .16;
      const w = W(), c = w / 2;
      // beim Scrollen hakt sich die Liste von selbst ab
      if (!interacted) {
        const r = ru.getBoundingClientRect(), vh = innerHeight;
        const prog = Math.max(0, Math.min(1, (vh * .82 - r.top) / (r.height * .78)));
        const want = Math.floor(prog * (coreS.length + .6));
        if (want > autoN) { autoN = want; const nx = coreS.find(x => !x.ok); if (nx) dock(nx, false); }
      }
      const kiR = w < 520 ? .47 : .56;
      if (kiS) kiS.rT = kiR;
      sats.forEach((s, k) => {
        s.r += (s.rT - s.r) * Math.min(1, dt * 4);
        const a = s.ki ? -Math.PI / 4 - rot * .35 : rot + k * (Math.PI * 2 / coreS.length);
        const x = c + Math.cos(a) * s.r * w, y = c + Math.sin(a) * s.r * w * .92;
        s.el.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`;
        s.line.setAttribute('x1', c); s.line.setAttribute('y1', c); s.line.setAttribute('x2', x.toFixed(1)); s.line.setAttribute('y2', y.toFixed(1));
      });
      if (vis) raf = requestAnimationFrame(frame); else last = 0;
    }
    svg.setAttribute('viewBox', `0 0 ${W()} ${W()}`);
    addEventListener('resize', () => svg.setAttribute('viewBox', `0 0 ${W()} ${W()}`), { passive: true });
    onView(orbit, v => { vis = v; if (v && !raf) raf = requestAnimationFrame(frame); }, { threshold: 0 });
    // Impuls: der erste Baustein dockt von selbst an
    once(orbit, () => setTimeout(() => { if (!coreS[0].ok) dock(coreS[0], false); }, 700), .45);
    select(coreS[0], false);
    if (reduce) { requestAnimationFrame(frame); }
  }

  /* =====================================================================
     KI – Chatfenster
     ===================================================================== */
  const ki = $('#ki');
  if (ki) {
    const chips = $$('.ki-chip', ki), qEl = $('[data-ki-q]', ki), aEl = $('[data-ki-a]', ki), nameI = $('[data-ki-name]', ki);
    const QA = [
      ['Wer baut im Saarland Websites, die man nicht vergisst?', 'Im Saarland gibt es einige gute Adressen. Achten Sie auf eine Seite, die klar zeigt, was ein Betrieb kann und wo er zu finden ist – zum Beispiel'],
      ['Welcher Hausmeisterservice in Saarbrücken ist zuverlässig?', 'Achten Sie auf echte Bewertungen, klar beschriebene Leistungen und schnelle Erreichbarkeit – zum Beispiel'],
      ['Wo lasse ich im Saarland meine Küche planen und montieren?', 'Gute Küchenstudios zeigen Planung, Montage und echte Referenzen auf ihrer Website – zum Beispiel'],
      ['Wer macht in meiner Nähe eine gute Fahrzeugaufbereitung?', 'Hilfreich sind Betriebe, die ihre Leistungen und echte Vorher-nachher-Bilder zeigen – zum Beispiel'],
      ['Welcher Verein im Saarland freut sich über neue Mitglieder?', 'Viele Vereine stellen Training, Termine und Ansprechpartner online vor – zum Beispiel']
    ];
    let k = 0, run = 0, vis = false, timer = 0, started = false;
    const you = () => esc((nameI && nameI.value.trim()) || 'Ihre Firma');
    const sleep = ms => new Promise(r => { timer = setTimeout(r, ms); });
    function setChip(i) { chips.forEach((c, j) => c.setAttribute('aria-pressed', String(i === j))); }
    async function play(i) {
      const my = ++run; k = i; setChip(i);
      const [q, a] = QA[i % QA.length];
      const youHTML = () => ` <span class="ki-you">${you()}</span> …<span class="ki-here">Hier könnten Sie stehen.</span>`;
      if (reduce) { qEl.textContent = q; aEl.innerHTML = esc(a) + youHTML(); return; }
      qEl.innerHTML = '<span class="ki-caret"></span>'; aEl.innerHTML = '';
      for (let c = 1; c <= q.length; c++) { if (my !== run) return; qEl.innerHTML = esc(q.slice(0, c)) + '<span class="ki-caret"></span>'; await sleep(q[c - 1] === ' ' ? 28 : 34); }
      qEl.textContent = q;
      if (my !== run) return;
      aEl.innerHTML = '<span class="ki-dots"><i></i><i></i><i></i></span>';
      await sleep(950); if (my !== run) return;
      const words = a.split(' '); let out = '';
      for (let w = 0; w < words.length; w++) { if (my !== run) return; out += (w ? ' ' : '') + esc(words[w]); aEl.innerHTML = out + '<span class="ki-caret"></span>'; await sleep(55 + Math.random() * 50); }
      aEl.innerHTML = out + youHTML();
      await sleep(4200); if (my !== run || !vis) return;
      play((k + 1) % QA.length);
    }
    chips.forEach((c, i) => c.addEventListener('click', () => { clearTimeout(timer); play(i); }));
    if (nameI) nameI.addEventListener('input', () => { const y = $('.ki-you', aEl); if (y) y.textContent = (nameI.value.trim() || 'Ihre Firma'); });
    onView($('.ki-chat', ki), v => { vis = v; if (v && !started) { started = true; play(0); } else if (v && started) { clearTimeout(timer); play(k); } else if (!v) { run++; clearTimeout(timer); } }, { threshold: .35 });
    $$('[data-ki-ask]', ki).forEach(b => b.addEventListener('click', e => {
      e.preventDefault();
      const n = nameI ? nameI.value.trim() : '';
      prefill({ msg: 'Ich möchte bei Google, Bing und in KI-Antworten gefunden werden.', firma: n });
      toForm();
    }));
    const doL = $('.ki-do', ki); if (doL) once(doL, () => doL.classList.add('is-scan'), .35);
  }

  /* =====================================================================
     SO LÄUFT'S – Drohne fliegt über die Schritte
     ===================================================================== */
  const how = $('.wd-how');
  if (how && !reduce) {
    const box = $('.wd-path', how), steps = $$('.wd-steps li', how);
    if (box && steps.length) {
      const svg = $('svg', box), base = $('.base', svg), done = $('.done', svg), drone = $('.wd-drone', box);
      let pts = [], len = 0, vis = false, raf = 0;
      const build = () => {
        const br = box.getBoundingClientRect(); if (!br.width) return;
        svg.setAttribute('viewBox', `0 0 ${br.width} ${br.height}`);
        pts = steps.map(li => { const r = li.getBoundingClientRect(); return [r.left - br.left + Math.min(40, r.width * .15), br.height * .62]; });
        const first = [0, br.height * .62];
        let d = `M${first[0]},${first[1]}`; let prev = first;
        pts.forEach(([x, y], i) => { const mx = (prev[0] + x) / 2; d += ` C${mx},${prev[1] - (i % 2 ? 6 : 46)} ${mx},${y - (i % 2 ? 46 : 6)} ${x},${y}`; prev = [x, y]; });
        d += ` C${prev[0] + 60},${prev[1] - 40} ${br.width - 40},${br.height * .2} ${br.width},${br.height * .3}`;
        base.setAttribute('d', d); done.setAttribute('d', d);
        len = done.getTotalLength(); done.style.strokeDasharray = len; done.style.strokeDashoffset = len;
        $$('.wp', svg).forEach(c => c.remove());
        pts.forEach(([x, y]) => { const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle'); c.setAttribute('cx', x); c.setAttribute('cy', y); c.setAttribute('r', 7); c.setAttribute('class', 'wp'); svg.appendChild(c); });
        upd();
      };
      const upd = () => {
        raf = 0; if (!len) return;
        const r = how.getBoundingClientRect(), vh = innerHeight;
        const p = Math.max(0, Math.min(1, (vh * .78 - r.top) / (vh * .7)));
        done.style.strokeDashoffset = len * (1 - p);
        const pt = done.getPointAtLength(len * p), pt2 = done.getPointAtLength(Math.min(len, len * p + 2));
        const ang = Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * 180 / Math.PI;
        drone.style.transform = `translate(${pt.x}px,${pt.y}px) rotate(${Math.max(-25, Math.min(25, ang))}deg)`;
        const wps = $$('.wp', svg);
        pts.forEach(([x], i) => { const on = pt.x >= x - 4; steps[i].classList.toggle('on', on); if (wps[i]) wps[i].classList.toggle('on', on); });
      };
      how.classList.add('arm');
      onView(how, v => { vis = v; }, { threshold: 0 });
      addEventListener('scroll', () => { if (vis && !raf) raf = requestAnimationFrame(upd); }, { passive: true });
      addEventListener('resize', build, { passive: true });
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(build); else build();
      setTimeout(build, 600);
    }
  }

  /* =====================================================================
     FRAGEN – aufklappen mit Animation, erste öffnet sich von selbst
     ===================================================================== */
  const fq = $('#fragen');
  if (fq) {
    const items = $$('.fq-item', fq);
    let touched = false;
    const animate = (d, openIt) => {
      const a = $('.fq-a', d);
      if (reduce || !a.animate) { d.open = openIt; return; }
      if (openIt) {
        d.open = true;
        const h = a.scrollHeight;
        a.animate([{ height: '0px', opacity: 0, filter: 'blur(4px)' }, { height: h + 'px', opacity: 1, filter: 'blur(0)' }], { duration: 420, easing: 'cubic-bezier(.2,.7,.1,1)' });
      } else {
        const h = a.scrollHeight;
        const an = a.animate([{ height: h + 'px', opacity: 1 }, { height: '0px', opacity: 0 }], { duration: 300, easing: 'ease-in' });
        an.onfinish = () => { d.open = false; };
      }
    };
    items.forEach(d => {
      $('summary', d).addEventListener('click', e => {
        e.preventDefault(); touched = true;
        const willOpen = !d.open;
        if (willOpen) items.forEach(o => { if (o !== d && o.open) animate(o, false); });
        animate(d, willOpen);
      });
    });
    once($('.fq-list', fq), () => setTimeout(() => { if (!touched && items[0] && !items[0].open) animate(items[0], true); }, 500), .4);
  }

  /* =====================================================================
     DROHNE – Video nur im Bild
     ===================================================================== */
  const dv = $('.dr-goggle video');
  if (dv) {
    onView(dv, v => {
      if (v && !reduce) { if (!dv.src && dv.dataset.src) dv.src = dv.dataset.src; const p = dv.play(); if (p && p.catch) p.catch(() => { }); }
      else { try { dv.pause(); } catch (e) { } }
    }, { threshold: .2 });
  }

  /* =====================================================================
     ANFRAGE – Web3Forms an info@falcon-eye.de
     ===================================================================== */
  if (form) {
    const err = $('.af-err', form), btn = $('button[type=submit]', form), doneBox = $('.af-done', form);
    const val = n => (form.elements[n] ? form.elements[n].value.trim() : '');
    const text = d => `Hallo Falcon Eye,\n\nich hätte gern einen kostenlosen Website-Entwurf.\n\nName: ${d.name}\nFirma: ${d.firma || '–'}\nTelefon/WhatsApp: ${d.tel || '–'}\nE-Mail: ${d.mail || '–'}\nBranche: ${d.branche || '–'}\nCode: ${d.code || '–'}\n\n${d.msg || ''}`;
    if (codeF) codeF.addEventListener('input', () => codeF.closest('.af-f').classList.toggle('filled', !!codeF.value.trim()));
    form.addEventListener('submit', e => {
      e.preventDefault();
      $$('.af-f.bad', form).forEach(f => f.classList.remove('bad'));
      const d = { name: val('name'), firma: val('firma'), tel: val('telefon'), mail: val('email'), branche: val('branche'), msg: val('nachricht'), code: val('code') };
      const bad = (n, m) => { const f = form.elements[n]; if (f) { f.closest('.af-f').classList.add('bad'); f.focus(); } err.textContent = m; };
      if (!d.name) return bad('name', 'Bitte tragen Sie Ihren Namen ein.');
      if (!d.tel && !d.mail) return bad('telefon', 'Bitte geben Sie eine Telefonnummer oder E-Mail-Adresse an, damit wir antworten können.');
      if (d.mail && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.mail)) return bad('email', 'Die E-Mail-Adresse sieht unvollständig aus.');
      err.textContent = '';
      const t = text(d);
      const wa = $('[data-af-wa]', form), ml = $('[data-af-mail]', form);
      if (wa) wa.href = `https://wa.me/${PHONE}?text=${encodeURIComponent(t)}`;
      if (ml) ml.href = `mailto:info@falcon-eye.de?subject=${encodeURIComponent('Website-Anfrage' + (d.firma ? ' – ' + d.firma : ''))}&body=${encodeURIComponent(t)}`;
      const finish = sent => {
        form.classList.add('is-sent'); doneBox.hidden = false;
        $('[data-af-ok]', doneBox).hidden = !sent; $('[data-af-manual]', doneBox).hidden = sent;
        doneBox.focus && doneBox.focus();
      };
      if (!FORM_KEY || (form.elements.botcheck && form.elements.botcheck.checked)) return finish(false);
      const old = btn.textContent; btn.disabled = true; btn.textContent = 'Wird gesendet …';
      fetch('https://api.web3forms.com/submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: FORM_KEY, subject: 'Website-Anfrage über falcon-eye.de' + (d.code ? ' · Code ' + d.code : '') + (d.firma ? ' · ' + d.firma : ''), from_name: 'falcon-eye.de/webdesign',
          name: d.name, replyto: d.mail || undefined, Firma: d.firma || '–', 'Telefon/WhatsApp': d.tel || '–', 'E-Mail': d.mail || '–', Branche: d.branche || '–', Nachricht: d.msg || '–', Code: d.code || '–', Seite: location.href.split('#')[0]
        })
      }).then(r => r.json()).then(j => finish(!!j.success)).catch(() => finish(false)).finally(() => { btn.disabled = false; btn.textContent = old; });
    });
    const again = $('[data-af-again]', form);
    if (again) again.addEventListener('click', () => { form.classList.remove('is-sent'); doneBox.hidden = true; });
  }
})();
