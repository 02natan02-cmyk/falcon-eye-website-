/* Falcon Eye – Held der Webdesign-Seite (#montage): Hintergrundflug (Handy), Zahlen zählen hoch,
   Geisterhand-Gag „Festgehalten“ (einmal pro Besuch), Vorhang beim Start der Präsentation.
   Die kinetische Überschrift läuft rein über CSS (assets/wd-hero.css). Erklärfilm: assets/wd-hero-film.js. */
(() => {
  const hero = document.getElementById('montage');
  if (!hero) return;
  const $ = (s, r = hero) => r.querySelector(s);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mobile = () => matchMedia('(max-width: 900px)').matches;
  const G = window.gsap;
  // Läuft das Intro (html.fi-on), warten Flug, Zahlen und Gag, bis die Kamera in den Bildschirm taucht (fe:intro-bau)
  const H = document.documentElement;
  const warte = (fn, ms) => {
    if (!H.classList.contains('fi-on') || H.classList.contains('fi-bau')) return setTimeout(fn, ms);
    let done = false;
    const fire = () => { if (done) return; done = true; setTimeout(fn, ms); };
    addEventListener('fe:intro-bau', fire, { once: true });
    const iv = setInterval(() => { if (!H.classList.contains('fi-on') || H.classList.contains('fi-bau')) { clearInterval(iv); fire(); } }, 400);
  };

  /* ---------- Handy: echter FPV-Flug als Hintergrund (klein, stumm, erst nach dem Laden) ---------- */
  const vid = $('.wdh-vid');
  if (vid && !reduce) {
    const saver = navigator.connection && navigator.connection.saveData;
    let vis = true;
    const play = () => { if (!vid.getAttribute('src')) return; const p = vid.play(); if (p && p.catch) p.catch(() => { }); };
    const start = () => {
      if (saver || !mobile() || vid.getAttribute('src')) return;
      vid.muted = true; vid.defaultMuted = true;
      vid.src = vid.dataset.src;
      if (vis && !document.hidden) play();
    };
    // Bis der Flug läuft, driftet das Standbild per CSS (Bewegung ab dem ersten Bild). Das Video lädt erst nach dem
    // Seitenaufbau: ein Video, das vorher startet, hält das load-Ereignis der ganzen Seite auf.
    const go = () => warte(start, 150);
    if (document.readyState === 'complete') go(); else addEventListener('load', go, { once: true });
    addEventListener('resize', () => { if (mobile()) start(); }, { passive: true });
    if ('IntersectionObserver' in window) new IntersectionObserver(([en]) => {
      vis = en.isIntersecting;
      hero.classList.toggle('wdh-paused', !vis);
      if (vis && !document.hidden) play(); else { try { vid.pause(); } catch (e) { } }
    }, { threshold: 0 }).observe(vid.parentElement);
    document.addEventListener('visibilitychange', () => { if (document.hidden) { try { vid.pause(); } catch (e) { } } else if (vis) play(); });
  }

  /* ---------- Zahlen zählen hoch (13 · 100 %); „0 €“ fällt per CSS ein ---------- */
  const nums = [...hero.querySelectorAll('[data-wdh-to]')];
  if (nums.length && !reduce) {
    nums.forEach(el => { el.textContent = '0' + (el.dataset.wdhSuf || ''); });
    const run = () => {
      const t0 = performance.now();
      const dur = [1300, 1500];
      const tick = now => {
        let open = 0;
        nums.forEach((el, i) => {
          const to = +el.dataset.wdhTo, suf = el.dataset.wdhSuf || '';
          const t = Math.max(0, Math.min(1, (now - t0) / (dur[i] || 1400)));
          const e = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(to * e) + suf;
          if (t < 1) open++;
        });
        if (open) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    warte(run, 950);
  }

  /* ---------- Geisterhand: versucht wegzuwischen, die Seite federt zurück, „Festgehalten ✓“ ---------- */
  const copy = $('.wd3-copy'), hand = $('.wdh-hand'), k1 = $('.wdh-k1'), k2 = $('.wdh-k2');
  const KEY = 'fe-wd-festgehalten';
  let touched = false;
  const mark = () => { touched = true; };
  ['wheel', 'touchstart', 'pointerdown', 'keydown'].forEach(ev => addEventListener(ev, mark, { once: true, passive: true }));
  let seenBefore = false;
  try { seenBefore = sessionStorage.getItem(KEY) === '1'; } catch (e) { }
  const gagOk = () => !reduce && !touched && !seenBefore && G && copy && hand && k1 && k2 && scrollY < 30 && !document.hidden && !document.documentElement.classList.contains('ef-lock') && location.hash !== '#film';
  function gag() {
    if (!gagOk()) return;
    try { sessionStorage.setItem(KEY, '1'); } catch (e) { }
    const dist = mobile() ? 96 : 84;
    const tl = G.timeline({ defaults: { overwrite: 'auto' } });
    const abort = () => {
      tl.kill();
      G.to(copy, { y: 0, duration: .25, ease: 'power2.out', clearProps: 'transform' });
      G.to([hand, k2], { autoAlpha: 0, duration: .15 });
      G.to(k1, { autoAlpha: 1, duration: .15 });
      ['wheel', 'touchstart', 'pointerdown', 'keydown'].forEach(ev => removeEventListener(ev, abort, true));
    };
    ['wheel', 'touchstart', 'pointerdown', 'keydown'].forEach(ev => addEventListener(ev, abort, { once: true, capture: true, passive: true }));
    tl.set(hand, { autoAlpha: 0, y: 46, rotation: -8 })
      .to(hand, { autoAlpha: .9, y: 0, rotation: 0, duration: .32, ease: 'power2.out' })
      .addLabel('wisch', '+=.12')
      .to(hand, { y: -170, duration: .5, ease: 'power2.in' }, 'wisch')
      .to(copy, { y: -dist, duration: .5, ease: 'power2.in' }, 'wisch')
      .to(hand, { autoAlpha: 0, duration: .22 }, 'wisch+=.36')
      .addLabel('zurueck', 'wisch+=.5')
      .to(copy, { y: 0, duration: 1.05, ease: 'elastic.out(1,.42)', clearProps: 'transform' }, 'zurueck')
      .to(k1, { autoAlpha: 0, duration: .2 }, 'zurueck+=.05')
      .fromTo(k2, { autoAlpha: 0, scale: .8 }, { autoAlpha: 1, scale: 1, duration: .42, ease: 'back.out(2.2)' }, 'zurueck+=.12')
      .to(k2, { autoAlpha: 0, duration: .3, ease: 'power2.in' }, 'zurueck+=2.2')
      .to(k1, { autoAlpha: 1, duration: .3 }, 'zurueck+=2.4')
      .add(() => ['wheel', 'touchstart', 'pointerdown', 'keydown'].forEach(ev => removeEventListener(ev, abort, true)));
  }
  // kurz nachdem die Überschrift steht (nicht erst nach dem kompletten Laden der Seite)
  warte(gag, 3300);

  /* ---------- Präsentation starten: Vorhang zu, dann zur Präsentation ---------- */
  const pres = $('[data-wdh-pres]');
  let curtain = null;
  if (pres) pres.addEventListener('click', e => {
    if (reduce || e.defaultPrevented || e.button > 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    const href = pres.href;
    if (!curtain) {
      curtain = document.createElement('div');
      curtain.className = 'wdh-curtain';
      curtain.setAttribute('aria-hidden', 'true');
      curtain.innerHTML = '<i></i><i></i><b><img src="media/logo.png" alt="" width="2000" height="249"></b>';
      document.body.appendChild(curtain);
    }
    pres.classList.add('is-go');
    void curtain.offsetWidth;
    curtain.classList.add('on');
    setTimeout(() => { location.href = href; }, 620);
  });
  // Zurück mit dem Browser (Seiten-Cache): Vorhang wieder offen
  addEventListener('pageshow', () => { if (curtain) curtain.classList.remove('on'); if (pres) pres.classList.remove('is-go'); });
})();
