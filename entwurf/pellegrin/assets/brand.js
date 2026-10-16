
/* Pellegrin – Logo-Animation (ohne Abhängigkeiten) */
(() => {
  const ease = t => 1 - Math.pow(1 - t, 3);
  const tween = (el, attr, a, b, dur, delay) => new Promise(res => {
    if (!el) return res(); const t0 = performance.now() + delay;
    const step = now => { const t = Math.min(1, Math.max(0, (now - t0) / dur)); el.setAttribute(attr, (a + (b - a) * ease(t)).toFixed(1)); t < 1 ? requestAnimationFrame(step) : res(); };
    requestAnimationFrame(step);
  });
  const sheen = svg => tween(svg.querySelector('.pl-sheen'), 'x', -700, 2700, 1500, 0);
  const play = svg => {
    if (!svg || svg.dataset.plState) return; svg.dataset.plState = '1';
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { svg.classList.add('pl-done'); const l = svg.querySelector('.pl-mL'), r = svg.querySelector('.pl-mR'); l && l.setAttribute('x', -200); r && r.setAttribute('x', 0); return; }
    svg.classList.add('pl-go');
    tween(svg.querySelector('.pl-mL'), 'x', 880, -200, 2300, 420);
    tween(svg.querySelector('.pl-mR'), 'x', -996, 0, 2300, 420);
    setTimeout(() => sheen(svg).then(() => svg.classList.add('pl-done')), 1500);
  };
  window.plPlay = play;
  const all = [...document.querySelectorAll('.plogo[data-pl-play]')].filter(s => !s.closest('.intro'));
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { io.unobserve(e.target); const intro = document.querySelector('.intro:not(.gone)'); const go = () => play(e.target); if (intro && e.target.closest('.hero')) { const w = setInterval(() => { if (!document.querySelector('.intro:not(.gone)')) { clearInterval(w); go(); } }, 200); } else go(); } }), { threshold: .35 }) : null;
  all.forEach(s => io ? io.observe(s) : play(s));
  // Hover/Tippen: Lichtkante nochmal drüber
  document.querySelectorAll('.plogo[data-pl-play]').forEach(s => s.addEventListener('pointerenter', () => { if (s.classList.contains('pl-done')) sheen(s); }));
})();
