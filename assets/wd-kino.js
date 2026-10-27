/* Falcon Eye – Kino-Band (#kino): Teaser läuft stumm, sobald die Leinwand im Bild ist (lädt erst dann),
   Antippen öffnet den Kino-Modus mit Ton über die Filmkarte im Held (assets/wd-hero-film.js). */
(() => {
  const sec = document.getElementById('kino');
  if (!sec) return;
  const v = sec.querySelector('.wkino-v'), screen = sec.querySelector('.wkino-screen');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saver = navigator.connection && navigator.connection.saveData;
  const card = () => document.querySelector('[data-ef]');

  // Öffnen: über die Filmkarte des Helden (dort hängt der Kino-Modus mit Ende-Ansicht und Untertiteln)
  sec.querySelectorAll('[data-kino-play]').forEach(b => b.addEventListener('click', e => {
    e.preventDefault();
    const c = card();
    if (c) c.click(); else location.href = 'media/wd/erklaerfilm_16x9.mp4?v=2';
  }));

  if (!v || reduce || saver) return;
  const portrait = () => matchMedia('(orientation: portrait)').matches;
  let src = '', vis = false;
  const want = () => portrait() ? v.dataset.src9 : v.dataset.src16;
  const play = () => { const p = v.play(); if (p && p.catch) p.catch(() => {}); };
  const start = () => {
    const w = want();
    if (w !== src) { src = w; v.src = w; v.load(); }
    if (vis && !document.hidden) play();
  };
  v.addEventListener('playing', () => v.classList.add('an'));
  v.addEventListener('error', () => v.classList.remove('an'));
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([en]) => {
      vis = en.isIntersecting;
      sec.classList.toggle('is-nah', vis && en.intersectionRatio > 0.55);
      if (vis) start(); else { try { v.pause(); } catch (e) {} }
    }, { threshold: [0, 0.25, 0.55, 0.8] }).observe(screen);
  } else start();
  document.addEventListener('visibilitychange', () => { if (document.hidden) { try { v.pause(); } catch (e) {} } else if (vis) play(); });
  addEventListener('orientationchange', () => { if (vis) start(); });
})();
