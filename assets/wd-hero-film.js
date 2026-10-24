/* Falcon Eye – Erklärfilm auf webdesign.html: Filmkarte im Held, Kino-Modus mit Ende-Ansicht, Direktlink #film.
   Dateien und Versionen stehen im HTML an der Filmkarte (data-ef-src16, data-ef-src9, data-ef-poster16, data-ef-poster9, data-ef-vtt).
   Vor dem Klick lädt kein Byte Video: Quelle, Poster und Untertitel setzt erst das Öffnen.
   Hochformat-Bildschirm → 9:16-Fassung, sonst 16:9 (Auswahl beim Öffnen). */
(() => {
  const card = document.querySelector('[data-ef]');
  if (!card) return;
  const D = card.dataset;
  const thumb = card.querySelector('.ef-thumb') || card;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ICON = {
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    again: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1L3.5 8.5"/><path d="M3.5 3.5v5h5"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };
  let dlg = null, frame, video, endV, xBtn, errEl, dim, ver = '', opened = false, closing = false, after = null, forced = false, anims = [];

  /* ---------- Kino-Modus aufbauen (erst beim ersten Klick) ---------- */
  function build() {
    if (dlg) return;
    dlg = document.createElement('dialog');
    dlg.className = 'ef';
    dlg.setAttribute('aria-labelledby', 'ef-t');
    dlg.setAttribute('data-lenis-prevent', '');
    dlg.innerHTML =
      '<div class="ef-dim"></div>' +
      '<div class="ef-stage">' +
      '<h2 class="lp-sr" id="ef-t">Erklärfilm: Websites, die fliegen</h2>' +
      '<div class="ef-frame">' +
      '<p class="ef-osd" aria-hidden="true"><i></i>Erklärfilm · Falcon Eye</p>' +
      '<div class="ef-clip">' +
      '<video class="ef-video" controls playsinline preload="none"></video>' +
      '<span class="ef-load" aria-hidden="true"></span>' +
      '<div class="ef-end" hidden>' +
      '<p class="ef-end-h">Jede Seite ein Unikat. <em>Auch Ihre.</em></p>' +
      '<p class="ef-end-p">Erster Entwurf kostenlos – erst sehen, dann entscheiden.</p>' +
      '<div class="ef-end-row"><button type="button" class="btn" data-ef-cta>Kostenlosen Entwurf anfragen ' + ICON.arrow + '</button>' +
      '<button type="button" class="btn ghost" data-ef-again>' + ICON.again + 'Nochmal ansehen</button></div>' +
      '</div>' +
      '<p class="ef-err" role="alert" hidden>Der Film lädt gerade nicht. Bitte später noch einmal versuchen.</p>' +
      '</div>' +
      '<i class="ef-c tl"></i><i class="ef-c tr"></i><i class="ef-c bl"></i><i class="ef-c br"></i>' +
      '</div>' +
      '<button type="button" class="ef-x" aria-label="Film schließen">' + ICON.x + '</button>' +
      '</div>';
    document.body.appendChild(dlg);
    frame = dlg.querySelector('.ef-frame');
    video = dlg.querySelector('video');
    endV = dlg.querySelector('.ef-end');
    xBtn = dlg.querySelector('.ef-x');
    errEl = dlg.querySelector('.ef-err');
    dim = dlg.querySelector('.ef-dim');

    xBtn.addEventListener('click', () => closeFilm());
    // Klick daneben schließt (Hintergrund, nicht Film oder Knöpfe)
    dlg.addEventListener('click', e => {
      const t = e.target;
      if (t === dlg || t.classList.contains('ef-stage') || t.classList.contains('ef-dim')) closeFilm();
    });
    // Esc: mit Animation schließen; erzwingt der Browser das Schließen, räumt 'close' auf
    dlg.addEventListener('cancel', e => { e.preventDefault(); closeFilm(); });
    dlg.addEventListener('close', cleanup);
    dlg.addEventListener('keydown', trap);

    const wait = on => frame.classList.toggle('is-wait', on);
    ['loadstart', 'waiting'].forEach(ev => video.addEventListener(ev, () => wait(true)));
    ['playing', 'pause', 'canplay', 'error', 'ended'].forEach(ev => video.addEventListener(ev, () => wait(false)));
    video.addEventListener('error', () => { errEl.hidden = false; });
    video.addEventListener('play', () => { endV.hidden = true; endV.classList.remove('in'); video.controls = true; });
    video.addEventListener('loadedmetadata', () => {
      if (forced) return;
      forced = true; // Untertitel an, weil viele ohne Ton schauen
      const t = video.textTracks && video.textTracks[0];
      if (t) t.mode = 'showing';
    });
    video.addEventListener('ended', showEnd);
    dlg.querySelector('[data-ef-again]').addEventListener('click', () => {
      endV.hidden = true;
      video.controls = true;
      try { video.currentTime = 0; } catch (e) { }
      play();
      video.focus({ preventScroll: true });
    });
    dlg.querySelector('[data-ef-cta]').addEventListener('click', () => { after = 'form'; closeFilm(); });
  }

  /* ---------- Fassung wählen, Quellen setzen ---------- */
  function load() {
    const want = matchMedia('(orientation: portrait)').matches ? '9' : '16';
    frame.dataset.ar = want;
    if (ver === want && video.getAttribute('src')) return;
    ver = want;
    forced = false;
    errEl.hidden = true;
    video.poster = want === '9' ? D.efPoster9 : D.efPoster16;
    let tr = video.querySelector('track');
    if (!tr) {
      tr = document.createElement('track');
      tr.kind = 'captions'; tr.srclang = 'de'; tr.label = 'Deutsch'; tr.default = true;
      video.appendChild(tr);
    }
    if (tr.getAttribute('src') !== D.efVtt) tr.src = D.efVtt;
    video.src = want === '9' ? D.efSrc9 : D.efSrc16;
  }
  function play() {
    const p = video.play();
    if (p && p.catch) p.catch(() => frame.classList.remove('is-wait'));
  }

  /* ---------- Öffnen und Schließen ---------- */
  function openFilm(e) {
    if (e) {
      if (e.defaultPrevented || e.button > 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
    }
    build();
    if (opened) return;
    if (typeof dlg.showModal !== 'function') { location.href = card.href; return; }
    opened = true; closing = false; after = null;
    card.classList.remove('ef-hi');
    stopIdle();
    load();
    try { if (video.ended || (video.duration && video.currentTime >= video.duration - .3)) video.currentTime = 0; } catch (er) { }
    endV.hidden = true;
    video.controls = true;
    dlg.showModal();
    lock(true);
    play(); // direkt im Klick: Ton erlaubt
    zoom(true);
    video.focus({ preventScroll: true });
  }
  function closeFilm() {
    if (!opened || closing) return;
    closing = true;
    try { video.pause(); } catch (e) { }
    const done = () => { try { dlg.close(); } catch (e) { cleanup(); } };
    const a = zoom(false);
    if (a) a.finished.then(done, done); else done();
  }
  function cleanup() {
    if (!opened) return;
    opened = false; closing = false;
    try { video.pause(); } catch (e) { }
    anims.forEach(a => { try { a.cancel(); } catch (e) { } });
    anims = [];
    lock(false);
    if (after === 'form') { after = null; toForm(); }
    else { try { card.focus({ preventScroll: true }); } catch (e) { } }
  }
  function lock(on) {
    document.documentElement.classList.toggle('ef-lock', on);
    const L = window.FE && window.FE.lenis;
    if (L) { try { on ? L.stop() : L.start(); } catch (e) { } }
  }
  // Der Film fliegt aus der Filmkarte heraus und beim Schließen wieder hinein
  function zoom(open) {
    if (!frame.animate) return null;
    anims.forEach(a => { try { a.cancel(); } catch (e) { } });
    anims = [];
    const dur = reduce ? 220 : open ? 640 : 420;
    const t = thumb.getBoundingClientRect(), f = frame.getBoundingClientRect();
    const seen = t.width > 0 && t.bottom > 0 && t.top < innerHeight && t.right > 0 && t.left < innerWidth;
    let kf;
    if (reduce || !seen || !f.width) kf = [{ opacity: 0, transform: 'scale(.985)' }, { opacity: 1, transform: 'none' }];
    else {
      const s = t.width / f.width;
      const dx = t.left + t.width / 2 - (f.left + f.width / 2), dy = t.top + t.height / 2 - (f.top + f.height / 2);
      kf = [{ transform: `translate(${dx.toFixed(1)}px,${dy.toFixed(1)}px) scale(${s.toFixed(4)})`, opacity: .35 }, { transform: 'none', opacity: 1 }];
    }
    let fade = [{ opacity: 0 }, { opacity: 1 }];
    if (!open) { kf = kf.slice().reverse(); fade = fade.slice().reverse(); }
    const ease = open ? 'cubic-bezier(.16,1,.3,1)' : 'cubic-bezier(.6,0,.8,.25)';
    [dim, xBtn].forEach(el => anims.push(el.animate(fade, { duration: dur * .8, easing: 'ease-out', fill: 'both' })));
    const a = frame.animate(kf, { duration: dur, easing: ease, fill: 'both' });
    anims.push(a);
    return a;
  }
  // Fokus bleibt im Player
  function trap(e) {
    if (e.key !== 'Tab') return;
    const f = [video, ...endV.querySelectorAll('button'), xBtn].filter(el => el.offsetParent !== null && (el !== video || video.controls));
    if (!f.length) return;
    const a = document.activeElement, first = f[0], last = f[f.length - 1];
    if (!dlg.contains(a)) { e.preventDefault(); first.focus(); }
    else if (!e.shiftKey && a === last) { e.preventDefault(); first.focus(); }
    else if (e.shiftKey && a === first) { e.preventDefault(); last.focus(); }
  }

  /* ---------- Am Filmende: Abschluss-Ansicht ---------- */
  function showEnd() {
    try { if (document.fullscreenElement) document.exitFullscreen(); } catch (e) { }
    try { if (video.webkitDisplayingFullscreen && video.webkitExitFullscreen) video.webkitExitFullscreen(); } catch (e) { }
    // Die eigene Ende-Ansicht ersetzt die Bedienleiste des Players: ohne sie kann der Player den Fokus
    // am Filmende nicht zurückholen. „Nochmal ansehen“ (oder Abspielen) schaltet sie wieder ein.
    video.controls = false;
    endV.hidden = false;
    endV.classList.remove('in'); void endV.offsetWidth; endV.classList.add('in');
    const b = endV.querySelector('[data-ef-cta]');
    const f = () => { if (b && opened && !endV.hidden && (document.activeElement === video || document.activeElement === document.body || document.activeElement === dlg)) b.focus({ preventScroll: true }); };
    if (b && opened) b.focus({ preventScroll: true });
    setTimeout(f, 150); setTimeout(f, 600);
  }
  function toForm() {
    const tgt = document.getElementById('entwurf');
    if (!tgt) return;
    const top = document.querySelector('.top');
    const y = tgt.getBoundingClientRect().top + scrollY - ((top ? top.offsetHeight : 66) + 10);
    const L = window.FE && window.FE.lenis;
    if (L) L.scrollTo(y, { duration: reduce ? 0 : 1.6 });
    else scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
    const name = document.getElementById('af-name');
    setTimeout(() => { if (name) name.focus({ preventScroll: true }); }, reduce ? 80 : 1750);
  }

  /* ---------- Selbst-Impuls: Ring pulsiert einmal nach dem Laden, danach selten ---------- */
  let idleT = 0, pulses = 0, inView = true;
  function pulse() {
    if (reduce) return;
    card.classList.remove('ef-pulse'); void card.offsetWidth; card.classList.add('ef-pulse');
    setTimeout(() => card.classList.remove('ef-pulse'), 2000);
  }
  function startIdle() {
    if (reduce || idleT) return;
    idleT = setInterval(() => {
      if (opened || document.hidden || !inView) return;
      if (++pulses > 4) { stopIdle(); return; }
      pulse();
    }, 9000);
  }
  function stopIdle() { clearInterval(idleT); idleT = 0; }
  if ('IntersectionObserver' in window) new IntersectionObserver(([en]) => { inView = en.isIntersecting; }, { threshold: .6 }).observe(card);
  const kick = () => setTimeout(() => { pulse(); startIdle(); }, 1100);
  if (document.readyState === 'complete') kick(); else addEventListener('load', kick, { once: true });

  /* ---------- Direktlink #film (Reels, Anzeigen): Seite am Held, Filmkarte hervorgehoben, kein Autoplay ---------- */
  function highlight() {
    card.classList.remove('ef-hi'); void card.offsetWidth; card.classList.add('ef-hi');
    try { card.focus({ preventScroll: true }); } catch (e) { }
    setTimeout(() => card.classList.remove('ef-hi'), 6500);
  }
  if (location.hash === '#film') {
    const go = () => setTimeout(highlight, 450);
    if (document.readyState === 'complete') go(); else addEventListener('load', go, { once: true });
  }
  addEventListener('hashchange', () => { if (location.hash === '#film' && !opened) highlight(); });

  card.addEventListener('click', openFilm);
  window.erklaerfilm = { open: () => openFilm(), close: closeFilm };
})();
