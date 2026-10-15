/* Mitmach-Modus: selbst mähen, rechen, schippen, zupfen */
(function () {
  'use strict';
  const card = document.querySelector('[data-hero-scene]');
  if (!card) return;
  const svg = card.querySelector('svg.scene'), NS = 'http://www.w3.org/2000/svg';
  const walker = svg.querySelector('.walker'), inner = svg.querySelector('.wk-inner');
  const q = s => card.querySelector(s);
  const btn = q('[data-play]'), hud = q('[data-phud]'), bar = q('[data-pbar]'), pct = q('[data-ppct]'), task = q('[data-ptask]'), hint = q('[data-phint]'), done = q('[data-pdone]');
  const cap = document.querySelector('[data-season-cap] span');
  const TASK = { summer: 'Rasen mähen', autumn: 'Laub rechen', winter: 'Weg freischippen', spring: 'Unkraut zupfen' };
  const PATH = [[566, 536], [674, 536], [760, 680], [470, 680]];
  const inPath = (x, y) => { if (y < 536 || y > 680) return false; const t = (y - 536) / 144; return x > 566 - 96 * t && x < 674 + 86 * t; };
  const R = 36;
  let on = false, season = 'summer', targets = [], left = 0, total = 0, mask, stroke, mess, d = '', pos = { x: 600, y: 600 }, goal = null, dir = 1, raf = 0, finished = false, last = null;

  const el = (n, a, p) => { const e = document.createElementNS(NS, n); for (const k in a) e.setAttribute(k, a[k]); p && p.appendChild(e); return e; };
  let rs = 7; const rnd = () => (rs = (rs * 16807) % 2147483647) / 2147483647;

  // sichtbarer Ausschnitt (Szene wird auf dem Handy seitlich beschnitten)
  const view = () => { const m = svg.getScreenCTM().inverse(), b = svg.getBoundingClientRect(), p = svg.createSVGPoint(); p.x = b.left; p.y = b.top; const a = p.matrixTransform(m); p.x = b.right; p.y = b.bottom; const z = p.matrixTransform(m); return [Math.max(10, a.x + 16), Math.min(1190, z.x - 16)]; };
  const toScene = (cx, cy) => { const p = svg.createSVGPoint(); p.x = cx; p.y = cy; return p.matrixTransform(svg.getScreenCTM().inverse()); };

  function build() {
    mess && mess.remove();
    let defs = svg.querySelector('defs') || el('defs', {}, svg);
    svg.querySelector('#pl-mask') && svg.querySelector('#pl-mask').remove();
    mask = el('mask', { id: 'pl-mask', maskUnits: 'userSpaceOnUse', x: 0, y: 0, width: 1200, height: 680 }, defs);
    el('rect', { width: 1200, height: 680, fill: '#fff' }, mask);
    stroke = el('path', { d: '', fill: 'none', stroke: '#000', 'stroke-width': R * 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, mask);
    d = ''; last = null;
    mess = el('g', { class: 'mess', mask: 'url(#pl-mask)' });
    const anchor = svg.querySelector('.path-snow');
    anchor.parentNode.insertBefore(mess, anchor.nextSibling);
    const [x0, x1] = view(); targets = []; rs = 7;
    if (season === 'summer') {
      if (!svg.querySelector('#pl-grass')) {
        const pt = el('pattern', { id: 'pl-grass', width: 16, height: 26, patternUnits: 'userSpaceOnUse' }, defs);
        el('rect', { width: 16, height: 26, fill: '#5d9b3e' }, pt);
        el('path', { d: 'M2 26 Q3 14 1 4 M6 26 Q7 12 9 1 M10 26 Q10 16 12 7 M14 26 Q13 13 15 3', stroke: '#467f2c', 'stroke-width': 2, fill: 'none', 'stroke-linecap': 'round' }, pt);
        el('path', { d: 'M4 26 Q5 18 4 10 M12 26 Q11 18 13 12', stroke: '#7dbb55', 'stroke-width': 1.6, fill: 'none', 'stroke-linecap': 'round' }, pt);
        const cp = el('clipPath', { id: 'pl-lawn' }, defs);
        el('path', { d: 'M0 524 H1200 V680 H0Z M566 536 H674 L760 680 H470Z', 'clip-rule': 'evenodd', 'fill-rule': 'evenodd' }, cp);
      }
      el('rect', { x: 0, y: 522, width: 1200, height: 158, fill: 'url(#pl-grass)', 'clip-path': 'url(#pl-lawn)' }, mess);
      for (let x = x0; x <= x1; x += 34) for (let y = 552; y <= 670; y += 26) if (!inPath(x, y)) targets.push([x, y]);
    } else if (season === 'winter') {
      el('path', { d: 'M562 532 H678 L766 682 H464Z', fill: '#f7fafc' }, mess);
      for (let i = 0; i < 18; i++) { const y = 545 + rnd() * 130, t = (y - 536) / 144, a = 566 - 96 * t, b = 674 + 86 * t; el('ellipse', { cx: a + rnd() * (b - a), cy: y, rx: 14 + rnd() * 24, ry: 5 + rnd() * 6, fill: '#e3ecf5' }, mess); }
      for (let y = 548; y <= 674; y += 14) { const t = (y - 536) / 144, a = 566 - 96 * t, b = 674 + 86 * t; for (let x = a + 10; x < b - 6; x += 22) if (x > x0 && x < x1) targets.push([x, y]); }
    } else if (season === 'autumn') {
      const C = ['#d9822b', '#c2571a', '#e8a33d', '#b5651d', '#f0b44c'];
      for (let i = 0; i < 260; i++) { const x = x0 + rnd() * (x1 - x0), y = 548 + rnd() * 126; const g = el('g', { transform: `translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${(rnd() * 360) | 0}) scale(${(0.9 + rnd() * 0.8).toFixed(2)})` }, mess); el('path', { d: 'M-7 0 q7 -9 14 0 q-7 9 -14 0z', fill: C[(rnd() * C.length) | 0] }, g); el('path', { d: 'M-7 0 H7', stroke: 'rgba(0,0,0,.25)', 'stroke-width': 1 }, g); if (i % 2) targets.push([x, y]); }
    } else {
      for (let i = 0; i < 46; i++) { let x, y; do { x = x0 + rnd() * (x1 - x0); y = 552 + rnd() * 118; } while (inPath(x, y)); const g = el('g', { transform: `translate(${x.toFixed(1)} ${y.toFixed(1)})` }, mess); el('path', { d: 'M0 0 L-12 -4 L-6 -2 L-10 -10 L-2 -3 L0 -12 L2 -3 L10 -10 L6 -2 L12 -4Z', fill: '#4f8f34' }, g); el('path', { d: 'M0 0 V-16', stroke: '#4f8f34', 'stroke-width': 2 }, g); el('circle', { cy: -18, r: 6, fill: '#ffd23f' }, g); el('circle', { cy: -18, r: 2.4, fill: '#f0a500' }, g); targets.push([x, y - 6]); }
    }
    total = targets.length; left = total; finished = false; progress();
  }

  function progress() {
    const p = total ? Math.round((1 - left / total) * 100) : 0;
    bar.style.width = p + '%'; pct.textContent = p + ' %';
    if (p >= 93 && !finished) win();
  }

  function win() {
    finished = true; mess.style.transition = 'opacity .6s'; mess.style.opacity = '0';
    bar.style.width = '100%'; pct.textContent = '100 %';
    card.classList.add('pl-win'); setTimeout(() => card.classList.remove('pl-win'), 1200);
    setTimeout(() => { done.hidden = false; }, 500);
  }

  function place() {
    walker.style.transform = `translate(${pos.x.toFixed(1)}px, ${pos.y.toFixed(1)}px)`;
    inner.style.transform = `scaleX(${dir})`;
  }
  const tool = () => ({ x: pos.x + dir * 54, y: pos.y + 54 });

  function work() {
    const t = tool();
    if (last && Math.hypot(t.x - last.x, t.y - last.y) < 3) return;
    d += (last ? ' L' : ' M') + t.x.toFixed(1) + ' ' + t.y.toFixed(1); if (!last) d += ' l0.1 0';
    stroke.setAttribute('d', d); last = t;
    let n = 0; for (let i = targets.length - 1; i >= 0; i--) { const [x, y] = targets[i]; if (Math.hypot(x - t.x, y - t.y) < R) { targets.splice(i, 1); n++; } }
    if (n) { left -= n; progress(); }
  }

  function tick() {
    raf = requestAnimationFrame(tick);
    if (!goal || finished) { svg.classList.remove('moving'); return; }
    const dx = goal.x - pos.x, dy = goal.y - pos.y, dist = Math.hypot(dx, dy);
    if (dist < 1.5) { svg.classList.remove('moving'); return; }
    const sp = Math.min(dist, 14); pos.x += dx / dist * sp; pos.y += dy / dist * sp;
    if (Math.abs(dx) > 2) dir = dx > 0 ? 1 : -1;
    svg.classList.add('moving'); place(); work();
  }

  const setGoal = (cx, cy) => { const p = toScene(cx, cy); const g = { x: p.x - dir * 54, y: p.y - 54 }; const [x0, x1] = view(); g.x = Math.max(x0 - 40, Math.min(x1 + 40, g.x)); g.y = Math.max(486, Math.min(624, g.y)); if (p.x < pos.x + dir * 54 - 30) dir = -1; else if (p.x > pos.x + dir * 54 + 30) dir = 1; g.x = p.x - dir * 54; g.x = Math.max(x0 - 50, Math.min(x1 + 50, g.x)); goal = g; };

  let down = false;
  svg.addEventListener('pointerdown', e => { if (!on) return; down = true; hint.hidden = true; svg.setPointerCapture(e.pointerId); setGoal(e.clientX, e.clientY); e.preventDefault(); });
  svg.addEventListener('pointermove', e => { if (on && down) setGoal(e.clientX, e.clientY); });
  const up = () => { down = false; };
  svg.addEventListener('pointerup', up); svg.addEventListener('pointercancel', up);
  addEventListener('keydown', e => { if (!on) return; const k = { ArrowLeft: [-40, 0], ArrowRight: [40, 0], ArrowUp: [0, -24], ArrowDown: [0, 24] }[e.key]; if (!k) return; e.preventDefault(); hint.hidden = true; goal = { x: Math.max(0, Math.min(1200, (goal || pos).x + k[0])), y: Math.max(486, Math.min(624, (goal || pos).y + k[1])) }; });

  const FULL = [0, 0, 1200, 680];
  let zr = 0;
  function zoom(inn, cb) {
    const r = card.getBoundingClientRect(), asp = r.width / r.height;
    const h = asp > 1.4 ? 470 : 430, w = Math.min(1200, h * asp);
    const to = inn ? [600 - w / 2, 680 - h, w, h] : FULL;
    const from = (svg.getAttribute('viewBox') || '0 0 1200 680').split(/\s+/).map(Number);
    cancelAnimationFrame(zr); const t0 = performance.now(), D = 700;
    const f = t => { const k = Math.min(1, (t - t0) / D), e = 1 - Math.pow(1 - k, 3); svg.setAttribute('viewBox', from.map((v, i) => (v + (to[i] - v) * e).toFixed(2)).join(' ')); if (k < 1) zr = requestAnimationFrame(f); else cb && cb(); };
    zr = requestAnimationFrame(f);
  }
  function start() {
    on = true; card._pause && card._pause(); card.classList.add('playing'); svg.classList.add('play');
    season = svg.dataset.season; task.textContent = TASK[season];
    zoom(true, () => { const [x0, x1] = view(); pos = { x: (x0 + x1) / 2 - 60, y: 590 }; dir = 1; goal = null; place(); build(); });
    hud.hidden = false; done.hidden = true; hint.hidden = false; btn.hidden = true;
    if (cap) cap.textContent = 'Finger auf die Szene legen und ziehen – der Hausmeister folgt Ihnen.';
    cancelAnimationFrame(raf); tick();
  }
  function stop() {
    on = false; card.classList.remove('playing'); svg.classList.remove('play', 'moving');
    walker.style.transform = ''; inner.style.transform = '';
    mess && mess.remove(); mess = null; zoom(false); hud.hidden = true; done.hidden = true; hint.hidden = true; btn.hidden = false;
    cancelAnimationFrame(raf);
  }
  btn.addEventListener('click', start);
  card.querySelector('[data-pexit]').addEventListener('click', stop);
  card.querySelector('[data-pexit2]').addEventListener('click', stop);
  card.querySelector('[data-pnext]').addEventListener('click', () => { const S = ['spring', 'summer', 'autumn', 'winter']; card._set(S[(S.indexOf(season) + 1) % 4]); });
  card.addEventListener('season', e => { if (!on) return; season = e.detail; task.textContent = TASK[season]; done.hidden = true; mess && (mess.style.opacity = ''); build(); });
})();
