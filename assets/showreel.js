/* Falcon Eye – Showreel-Wand
   1) Aus fallenden Einsen und Nullen setzt sich der Falke zusammen (Form aus media/bird.png).
   2) Der Falke wird zur Drohne – die Rotoren drehen sich.
   3) Die Drohne fliegt über die Kacheln: jede, die sie überfliegt, startet ihren echten Mitschnitt.
   Danach laufen alle Kacheln gleichzeitig (nur solange sichtbar). Reduzierte Bewegung: Standbilder, Abspielen bei Berührung. */
(() => {
  const sec = document.querySelector('[data-sr]'); if (!sec) return;
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tiles = [...sec.querySelectorAll('.sr-t')], cta = sec.querySelector('.sr-cta'), stage = sec.querySelector('.sr-stage'), cv = stage && stage.querySelector('canvas'), cnt = sec.querySelector('[data-sr-count]');
  const mob = () => innerWidth < 700;

  /* ---------- Kacheln: Video nur laden und abspielen, wenn sichtbar ---------- */
  const vis = new Map();
  const count = () => { if (cnt) cnt.textContent = tiles.filter(t => t.classList.contains('on') && vis.get(t)).length; };
  function playTile(t) {
    const v = t.querySelector('video'); if (!v) return;
    if (!v.getAttribute('src')) { v.src = v.dataset.src; }
    v.muted = true; const p = v.play();
    const ok = () => { t.classList.add('on'); count(); };
    if (p && p.then) p.then(ok).catch(() => { }); else ok();
  }
  const stopTile = t => { const v = t.querySelector('video'); if (v && !v.paused) try { v.pause(); } catch (e) { } count(); };
  let introDone = RM, introStarted = false;
  const io = new IntersectionObserver(es => es.forEach(e => {
    const t = e.target; vis.set(t, e.isIntersecting);
    if (e.isIntersecting) {
      t.classList.add('in');
      // Wer von unten direkt hineinspringt (Anker, Zurück-Taste), bekommt die Videos ohne Intro
      if (!introStarted && stage && stage.getBoundingClientRect().bottom < 0) introDone = true;
      if (!RM && (introDone || t.dataset.started)) playTile(t);
    } else stopTile(t);
  }), { rootMargin: '80px 0px', threshold: .2 });
  tiles.forEach((t, i) => { t.style.transitionDelay = (i % 4) * 70 + 'ms'; io.observe(t); });
  if (cta) new IntersectionObserver(([e], o) => { if (e.isIntersecting) { cta.classList.add('in'); o.disconnect(); } }, { threshold: .2 }).observe(cta);
  if (RM) {
    tiles.forEach(t => { t.addEventListener('pointerenter', () => playTile(t)); t.addEventListener('pointerleave', () => { stopTile(t); t.classList.remove('on'); }); });
    return;
  }
  document.addEventListener('visibilitychange', () => { if (document.hidden) tiles.forEach(stopTile); else tiles.forEach(t => { if (vis.get(t) && (introDone || t.dataset.started)) playTile(t); }); });
  if (!cv) { introDone = true; return; }

  /* ---------- Glyphen 0 / 1 als kleine Bitmaps (schnell zu zeichnen) ---------- */
  const DPR = Math.min(2, devicePixelRatio || 1), GS = mob() ? 10 : 11, gsz = GS * 1.6;
  const glyphs = fs => { const z = fs * 1.6, mk = (ch, col, blur) => { const c = document.createElement('canvas'); c.width = c.height = Math.ceil(z * DPR); const g = c.getContext('2d'); g.scale(DPR, DPR); g.font = `700 ${fs}px "Share Tech Mono",ui-monospace,monospace`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.shadowColor = col; g.shadowBlur = blur; g.fillStyle = col; g.fillText(ch, z / 2, z / 2); return c; };
    return { z, 0: mk('0', '#ffd000', fs * .5), 1: mk('1', '#ffd000', fs * .5), w0: mk('0', '#fff7cf', fs * .8), w1: mk('1', '#fff7cf', fs * .8), d0: mk('0', 'rgba(255,208,0,.42)', 0), d1: mk('1', 'rgba(255,208,0,.42)', 0) }; };
  const G = glyphs(GS);

  /* ---------- Formen: Falke (aus dem Logo) und Drohne ---------- */
  function sampleImg(img, w, want) {
    const h = Math.round(w * img.naturalHeight / img.naturalWidth), c = document.createElement('canvas'); c.width = Math.round(w); c.height = h; const g = c.getContext('2d', { willReadFrequently: true }); g.drawImage(img, 0, 0, c.width, h);
    const d = g.getImageData(0, 0, c.width, h).data; let filled = 0; for (let i = 3; i < d.length; i += 4) if (d[i] > 120) filled++;
    const st = Math.max(3, Math.sqrt(filled / want)), pts = [];
    for (let y = st / 2; y < h; y += st) for (let x = st / 2; x < c.width; x += st) { const i = ((y | 0) * c.width + (x | 0)) * 4; if (d[i + 3] > 120) pts.push([x - c.width / 2, y - h / 2, d[i] < 140 ? 1 : 0]); }
    return { pts, st };
  }
  function droneShape() {
    const P = [], rot = [];
    for (let x = -18; x <= 18; x += 4) for (let y = -9; y <= 9; y += 4.5) P.push([x, y, -1]);                // Rumpf
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([sx, sy], k) => {
      for (let t = .2; t <= .95; t += .11) P.push([sx * 46 * t, sy * 28 * t, -1]);                          // Arme
      for (let a = 0; a < 24; a++) P.push([sx * 46, sy * 28, k, a / 24 * Math.PI * 2]);                    // Rotoren
      rot.push([sx * 46, sy * 28]);
    });
    P.push([0, 13, -1], [-5, 13, -1], [5, 13, -1], [0, 17, -1]);                                             // Kamera
    return { P, rot };
  }
  const dronePos = (dr, d, spin) => { if (d[2] < 0) return [d[0], d[1]]; const r = dr.rot[d[2]], a = d[3] + spin * (d[2] % 2 ? -1 : 1); return [r[0] + Math.cos(a) * 22, r[1] + Math.sin(a) * 7]; };

  /* ---------- Start, sobald die Bühne gut im Bild ist ---------- */
  const start = () => {
    if (introStarted || introDone) return; introStarted = true;
    const img = new Image(); img.decoding = 'async';
    img.onload = () => run(img);
    img.onerror = () => { introDone = true; tiles.forEach(t => vis.get(t) && playTile(t)); };
    img.src = sec.dataset.bird || 'media/bird.png';
  };
  new IntersectionObserver(([e], o) => { if (e.isIntersecting) { o.disconnect(); start(); } }, { rootMargin: '0px 0px -38% 0px', threshold: .6 }).observe(stage);

  function run(img) {
    const ctx = cv.getContext('2d');
    const r0 = stage.getBoundingClientRect(), W = r0.width, H = r0.height;
    cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR); ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    const bw = Math.min(W * (mob() ? .94 : .74), 780, H * .9 * img.naturalWidth / img.naturalHeight);
    const { pts: bird, st } = sampleImg(img, bw, mob() ? 900 : 1700), dr = droneShape(), B = glyphs(Math.max(5, Math.min(9, st * 1.15)));
    const order = bird.map((_, i) => i); for (let i = order.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0;[order[i], order[j]] = [order[j], order[i]]; }
    const P = bird.map(b => ({ x: Math.random() * W, y: -Math.random() * H * 1.6 - 10, vy: 1.4 + Math.random() * 2.6, bx: W / 2 + b[0], by: H / 2 + b[1], film: b[2], ch: Math.random() < .5 ? 0 : 1, d: null, sp: Math.random() * 6.28, dl: Math.random() * 380 }));
    order.slice(0, dr.P.length).forEach((pi, k) => P[pi].d = dr.P[k]);
    const T = { rain: 650, form: 1750, hold: 2600, morph: 3500, fly: 3800 };
    const ease = k => k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
    const sc = mob() ? 1.05 : 1.45, dc = [W / 2, H / 2];
    let t0 = 0;
    const frame = now => {
      if (!t0) t0 = now; const t = now - t0; ctx.clearRect(0, 0, W, H);
      const spin = t / 55;
      for (const p of P) {
        let x, y, a = 1, S = B, g = B[(p.film ? 'd' : '') + p.ch];
        if (t < T.rain + p.dl) { p.y += p.vy * 2.4; if (p.y > H + 10) p.y = -10; x = p.x; y = p.y; a = .25 + .45 * Math.random(); g = B['d' + p.ch]; }
        else if (t < T.form + p.dl * .5) { const k = ease(Math.min(1, (t - T.rain - p.dl) / (T.form - T.rain - p.dl * .5))); x = p.x + (p.bx - p.x) * k; y = p.y + (p.by - p.y) * k; a = .45 + .55 * k; }
        else if (t < T.hold) { x = p.bx; y = p.by; a = .8 + .2 * Math.sin(t / 90 + p.sp); if (Math.random() < .02) p.ch ^= 1; if (!p.film && Math.random() < .03) g = B['w' + p.ch]; }
        else {
          const k = ease(Math.min(1, (t - T.hold) / (T.morph - T.hold)));
          if (p.d) { const [ox, oy] = dronePos(dr, p.d, spin * k); const tx = dc[0] + ox * sc, ty = dc[1] + oy * sc; x = p.bx + (tx - p.bx) * k; y = p.by + (ty - p.by) * k; a = 1; if (k > .45) { S = G; g = G[(k > .9 && Math.random() < .04 ? 'w' : '') + p.ch]; } }
          else { const dx = p.bx - W / 2, dy = p.by - H / 2, m = Math.hypot(dx, dy) || 1; x = p.bx + dx / m * k * 180; y = p.by + dy / m * k * 90 + k * k * 70; a = 1 - k; }
        }
        if (a <= .02) continue; ctx.globalAlpha = Math.max(0, Math.min(1, a)); ctx.drawImage(g, x - S.z / 2, y - S.z / 2, S.z, S.z);
      }
      ctx.globalAlpha = 1;
      if (t < T.fly) { requestAnimationFrame(frame); return; }
      const r = stage.getBoundingClientRect(); ctx.clearRect(0, 0, W, H);
      fly(r.left + dc[0], r.top + dc[1], dr, sc, P.filter(p => p.d));
    };
    requestAnimationFrame(frame);
  }

  /* ---------- Flug: die Drohne startet jede Kachel, die sie überfliegt ---------- */
  function fly(x0, y0, dr, sc, parts) {
    const ov = document.createElement('canvas'); ov.setAttribute('aria-hidden', 'true'); ov.className = 'sr-fly';
    document.body.appendChild(ov); const ctx = ov.getContext('2d');
    let VW = 0, VH = 0; const rs = () => { VW = innerWidth; VH = innerHeight; ov.width = Math.round(VW * DPR); ov.height = Math.round(VH * DPR); ctx.setTransform(DPR, 0, 0, DPR, 0, 0); }; rs(); addEventListener('resize', rs);
    let x = x0, y = y0, last = 0, tilt = 0, done = false, wait = 0, cur = null, idle = 0, exitAt = 0, tStart = 0, sparks = [];
    const trail = [];
    const inView = t => { const r = t.getBoundingClientRect(); return r.bottom > 50 && r.top < VH - 50 && r.right > 0 && r.left < VW; };
    const center = el => { const r = el.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; };
    const pick = () => { let best = null, bd = 1e9; for (const t of tiles) { if (t.dataset.started || !inView(t)) continue; const [cx, cy] = center(t), d = Math.hypot(cx - x, cy - y); if (d < bd) { bd = d; best = t; } } return best; };
    const burst = (bx, by, n = 22) => { for (let k = 0; k < n; k++) { const a = Math.random() * 6.28, v = 110 + Math.random() * 260; sparks.push({ x: bx, y: by, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 110, a: 1, ch: Math.random() < .5 ? 0 : 1 }); } };
    const finish = () => { if (introDone) return; introDone = true; tiles.forEach(t => { if (vis.get(t)) playTile(t); }); };
    const step = now => {
      if (!last) { last = now; tStart = now; }
      const dt = Math.min(100, now - last) / 1000; last = now; const el = now - tStart;
      let tx = x, ty = y;
      if (!exitAt) {
        if (!cur || cur.dataset.started || !inView(cur)) cur = pick();
        if (cur) { [tx, ty] = center(cur); idle = 0; }
        else {
          idle += dt;
          const below = tiles.some(t => !t.dataset.started && t.getBoundingClientRect().top >= VH - 50);
          if (below && el < 9000) { tx = VW / 2 + Math.sin(now / 700) * VW * .12; ty = VH * .8 + Math.sin(now / 260) * 8; }   // wartet unten, bis weitergescrollt wird
          else if (idle > .9) exitAt = now;
        }
        if (el > 10000) exitAt = now;
      }
      if (exitAt) {
        const c = cta && cta.getBoundingClientRect();
        if (c && c.top < VH - 60 && c.bottom > 60) { tx = c.left + c.width * .5; ty = c.top + c.height * .5; }
        else { tx = VW + 140; ty = -140; }
      }
      const dx = tx - x, dy = ty - y, d = Math.hypot(dx, dy);
      if (wait > 0) wait -= dt;
      else if (d > 4) { const sp = (mob() ? 950 : 1350) * (exitAt ? 1.15 : 1), v = Math.min(d, sp * dt * Math.min(1, .35 + d / 220)); x += dx / d * v; y += dy / d * v; tilt += ((dx / d) * .38 - tilt) * .14; }
      if (cur && !exitAt && d < 30) { cur.dataset.started = '1'; cur.classList.add('zap'); const c0 = cur; setTimeout(() => c0.classList.remove('zap'), 750); playTile(cur); burst(x, y); cur = null; wait = .07; }
      if (exitAt && !done && (d < 30 || now - exitAt > 2400)) {
        done = true; finish();
        if (d < 30) { burst(x, y, 70); cta && cta.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.02)' }, { transform: 'scale(1)' }], { duration: 650, easing: 'cubic-bezier(.3,1.6,.5,1)' }); }
      }
      /* zeichnen */
      ctx.clearRect(0, 0, VW, VH);
      if (!done) { trail.push({ x, y, ch: Math.random() < .5 ? 0 : 1 }); if (trail.length > 24) trail.shift(); } else if (trail.length) trail.shift();
      trail.forEach((p, k) => { ctx.globalAlpha = .45 * (k / trail.length); ctx.drawImage(G['d' + p.ch], p.x - gsz / 2 + (Math.random() - .5) * 7, p.y - gsz / 2 + 12 + (Math.random() - .5) * 7, gsz, gsz); });
      for (const s of sparks) { s.x += s.vx * dt; s.y += s.vy * dt; s.vy += 380 * dt; s.a -= dt * 1.3; if (s.a > 0) { ctx.globalAlpha = s.a; ctx.drawImage(G[s.ch], s.x - gsz / 2, s.y - gsz / 2, gsz, gsz); } }
      sparks = sparks.filter(s => s.a > 0);
      if (!done) {
        const spin = now / 55, ca = Math.cos(tilt), sa = Math.sin(tilt), s = sc * (mob() ? .8 : .85), bob = Math.sin(now / 180) * 2;
        ctx.globalAlpha = 1;
        for (const p of parts) { const [ox, oy] = dronePos(dr, p.d, spin), rx = ox * ca - oy * sa, ry = ox * sa + oy * ca; ctx.drawImage(G[p.ch], x + rx * s - gsz / 2, y + ry * s + bob - gsz / 2, gsz, gsz); }
      }
      ctx.globalAlpha = 1;
      if (!done || sparks.length || trail.length) requestAnimationFrame(step);
      else { removeEventListener('resize', rs); ov.remove(); }
    };
    requestAnimationFrame(step);
    setTimeout(finish, 13500); // Sicherheitsnetz: spätestens dann laufen alle sichtbaren Kacheln
  }
})();
