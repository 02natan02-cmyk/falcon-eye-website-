/* Falcon Eye – „Zwei Augen“: links Drohne & FPV (echte Flüge), rechts Webdesign (echte Seiten).
   Beide Augen schauen dem Mauszeiger nach, das Auge unter dem Zeiger wird größer, ab und zu zieht die Nickhaut drüber.
   Darunter: Werbung + Mitmach-Demo (assets/livedemo.js). */
(() => {
  const sec = document.querySelector('.twin'); if (!sec) return;
  const $ = (s, r = sec) => r.querySelector(s), $$ = (s, r = sec) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const split = $('[data-tw]'), sides = { l: $('.tw-l'), r: $('.tw-r') }, eyes = $$('.tw-eye');
  const mobile = () => innerWidth <= 760;
  const U = f => `url("${new URL(f, location.href).href}")`;

  /* ---------- Fokus: welches Auge ist vorn ---------- */
  let focus = null, lastDown = -1e4;
  addEventListener('pointerdown', () => { lastDown = performance.now(); }, true);
  function setFocus(f, user) {
    if (f === focus) return; focus = f;
    if (f) split.dataset.focus = f; else delete split.dataset.focus;
    $$('[data-tw-pick]').forEach(b => b.setAttribute('aria-pressed', b.dataset.twPick === (f || 'l')));
    if (f && user) blink(sides[f].querySelector('.tw-eye'));
  }
  if (mobile()) setFocus('l');
  addEventListener('resize', () => { if (mobile() && !focus) setFocus('l'); });
  ['l', 'r'].forEach(k => {
    const sd = sides[k];
    sd.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse' && !mobile()) setFocus(k, true); });
    sd.addEventListener('focusin', () => { if (performance.now() - lastDown > 600) setFocus(k); });
    // Handy: erstes Antippen wählt das Auge, zweites öffnet die Seite
    $('.tw-eye', sd).addEventListener('click', e => { if (mobile() && focus !== k) { e.preventDefault(); setFocus(k, true); } });
  });
  split.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse' && !mobile()) setFocus(null); });
  $$('[data-tw-pick]').forEach(b => b.addEventListener('click', () => setFocus(b.dataset.twPick, true)));

  /* ---------- Nickhaut (Falken blinzeln seitlich) ---------- */
  function blink(eye) { if (reduce || !eye) return; eye.classList.remove('blink'); void eye.offsetWidth; eye.classList.add('blink'); }
  let blinkT = 0; const blinkLoop = () => { clearTimeout(blinkT); blinkT = setTimeout(() => { if (vis) { eyes.forEach((e, i) => setTimeout(() => blink(e), i * 70)); } blinkLoop(); }, 5200 + Math.random() * 4200); };

  /* ---------- Blick: beide Augen schauen zum Zeiger (sonst kleine Blicksprünge) ---------- */
  let px = null, py = null, idleT = 0, look = { x: 0, y: 0 }, raf = 0, rects = [];
  const measure = () => { rects = eyes.map(e => e.getBoundingClientRect()); };
  function apply() {
    raf = 0;
    eyes.forEach((e, i) => {
      const r = rects[i]; if (!r || !r.width) return; let dx, dy;
      if (px != null) { dx = px - (r.left + r.width / 2); dy = py - (r.top + r.height / 2); const d = Math.hypot(dx, dy) || 1, k = Math.min(1, d / (r.width * 1.6)); dx = dx / d * k; dy = dy / d * k; }
      else { dx = look.x; dy = look.y; }
      const m = r.width * .17;
      e.style.setProperty('--rx', (dx * m / r.width * 200).toFixed(1) + 'px'); e.style.setProperty('--ry', (dy * m / r.width * 200).toFixed(1) + 'px');
      const inn = e.querySelector('.tw-in'); inn.style.setProperty('--px', (-dx * 12).toFixed(1) + 'px'); inn.style.setProperty('--py', (-dy * 12).toFixed(1) + 'px');
    });
  }
  const queue = () => { if (!raf) raf = requestAnimationFrame(apply); };
  if (!reduce) {
    addEventListener('pointermove', e => { if (!vis || e.pointerType !== 'mouse') return; px = e.clientX; py = e.clientY; clearTimeout(idleT); idleT = setTimeout(() => { px = py = null; }, 2600); queue(); }, { passive: true });
    addEventListener('scroll', () => { if (vis) { measure(); queue(); } }, { passive: true });
    addEventListener('resize', () => { measure(); queue(); });
    const saccade = () => { if (vis && px == null) { const a = Math.random() * Math.PI * 2, r = Math.random() * .8; look = { x: Math.cos(a) * r, y: Math.sin(a) * r * .7 }; measure(); queue(); } setTimeout(saccade, 1400 + Math.random() * 1800); };
    setTimeout(saccade, 1200);
  }

  /* ---------- Linkes Auge: echte Flüge nacheinander, weich überblendet ---------- */
  const CLIPS = [['gang', 'Göttelborn · One-Take'], ['rolltreppe', 'Möbelhaus · Durchflug'], ['halong', 'Ha Long Bay · Vietnam'], ['arena', 'Dance-Event · Halle']];
  const vids = $$('.tw-l video'), capL = $('.tw-l [data-tw-cap]'), ambL = $('.tw-l .tw-amb');
  let ci = 0, cur = 0, vStarted = false, vT = 0;
  function playClip(i) {
    const [n, cap] = CLIPS[i], v = vids[cur], o = vids[1 - cur];
    clearTimeout(vT);
    o.poster = 'media/' + n + '.jpg'; o.src = 'media/' + n + '.mp4'; o.preload = 'auto'; o.muted = true; o.currentTime = 0;
    const show = () => { o.classList.add('on'); v.classList.remove('on'); setTimeout(() => { try { v.pause(); } catch (e) { } }, 900); cur = 1 - cur; capL.textContent = cap; ambL.style.setProperty('--amb', U(`media/${n}.jpg`)); if (vis) blink($('.tw-l .tw-eye')); };
    const p = o.play(); if (p && p.then) p.then(show).catch(show); else show();
    o.onended = () => next(); vT = setTimeout(next, 12000);
  }
  function next() { ci = (ci + 1) % CLIPS.length; playClip(ci); }
  function startVid() {
    if (vStarted) { const v = vids[cur]; if (v.src) v.play().catch(() => { }); return; }
    vStarted = true; const v = vids[0]; v.src = 'media/gang.mp4'; v.preload = 'auto'; v.muted = true; ambL.style.setProperty('--amb', U('media/gang.jpg'));
    if (reduce) { v.poster = 'media/gang.jpg'; return; }
    v.play().catch(() => { }); v.onended = () => next(); vT = setTimeout(next, 12000);
  }
  function stopVid() { vids.forEach(v => { try { v.pause(); } catch (e) { } }); clearTimeout(vT); }

  /* ---------- Rechtes Auge: echte Seiten, Scan-Überblendung ---------- */
  const SITES = [['pellegrin', 'Pellegrin Küchen', 'Entwurf'], ['holding', 'Natan Holding', 'Live'], ['gartentraum', 'Der Garten-Traum', 'Entwurf'], ['bsp_waescherei', 'Wäscherei', 'Beispiel'], ['verena', 'Praxis Verena Paul', 'Entwurf'], ['bsp_karosserie', 'Karosserie', 'Beispiel'], ['hudalla', 'Hausmeister Hudalla', 'Entwurf'], ['natan', 'natan.saarland', 'Live'], ['bsp_fahrzeug', 'Fahrzeugpflege', 'Beispiel'], ['falcon', 'falcon-eye.de', 'Live']];
  const imgs = $$('.tw-r .tw-in img'), capR = $('.tw-r [data-tw-cap]'), tagR = $('.tw-r [data-tw-tag]'), sweep = $('.tw-r .tw-sweep'), ambR = $('.tw-r .tw-amb');
  let si = 0, ic = 0, sT = 0;
  ambR.style.setProperty('--amb', U('media/wd/pellegrin_d.webp'));
  const tagCls = () => { tagR.classList.toggle('live', tagR.textContent === 'Live'); }; tagCls();
  function nextSite() {
    si = (si + 1) % SITES.length; const [f, n, t] = SITES[si], o = imgs[1 - ic], src = 'media/wd/' + f + '_d.webp';
    const swap = () => { o.classList.add('on'); imgs[ic].classList.remove('on'); ic = 1 - ic; capR.textContent = n; tagR.textContent = t; tagCls(); ambR.style.setProperty('--amb', U(src)); sweep.classList.remove('go'); void sweep.offsetWidth; sweep.classList.add('go'); };
    if (o.getAttribute('src') === src && o.complete) swap(); else { o.onload = swap; o.src = src; }
    const pre = new Image(); pre.src = 'media/wd/' + SITES[(si + 1) % SITES.length][0] + '_d.webp';
  }
  const startSites = () => { if (reduce || sT) return; sT = setInterval(() => { if (vis && !document.hidden) nextSite(); }, 3000); };

  /* ---------- Sichtbarkeit ---------- */
  let vis = false;
  if ('IntersectionObserver' in window) new IntersectionObserver(([en]) => {
    vis = en.isIntersecting;
    if (vis) { measure(); startVid(); startSites(); blinkLoop(); } else { stopVid(); clearTimeout(blinkT); }
  }, { rootMargin: '250px 0px' }).observe(split);
  else { vis = true; startVid(); }

  /* Mitmach-Demo: siehe assets/livedemo.js */
})();
