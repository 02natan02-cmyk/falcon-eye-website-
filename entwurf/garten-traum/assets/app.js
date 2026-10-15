/* Der Garten-Traum – Entwurf Falcon Eye */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let L = 'de';
  const tr = (de, pl) => L === 'pl' ? pl : de;

  /* ---------- Sprache DE / PL ---------- */
  function setLang(l) {
    L = l; document.documentElement.lang = l;
    $$('[data-pl]').forEach(el => {
      if (el.dataset.de === undefined) el.dataset.de = el.textContent;
      el.textContent = l === 'pl' ? el.dataset.pl : el.dataset.de;
    });
    $$('[data-plh]').forEach(el => {
      if (el.dataset.deh === undefined) el.dataset.deh = el.innerHTML;
      el.innerHTML = l === 'pl' ? el.dataset.plh : el.dataset.deh;
    });
    $$('[data-lang]').forEach(b => b.classList.toggle('on', b.dataset.lang === l));
    const fl = $('[data-flang]'); if (fl) fl.value = l.toUpperCase();
    try { localStorage.setItem('gt-lang', l); } catch (e) { }
    paintStatus(); calc();
  }
  $$('[data-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

  /* ---------- Header ---------- */
  const hdr = $('[data-hdr]');
  const onScroll = () => { if (hdr) hdr.classList.toggle('sc', scrollY > 40); };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- Öffnungsstatus (Mo–Sa 8:30–18:30, Berliner Zeit) ---------- */
  function berlin() { const p = new Intl.DateTimeFormat('de-DE', { timeZone: 'Europe/Berlin', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date()); const g = t => p.find(x => x.type === t).value; return { wd: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].indexOf(g('weekday').replace('.', '')), m: +g('hour') % 24 * 60 + +g('minute') }; }
  function paintStatus() {
    const { wd, m } = berlin(), O = 510, C = 1110, work = wd >= 0 && wd <= 5, open = work && m >= O && m < C;
    let s; if (open) { const left = C - m; s = left <= 60 ? tr(`noch ${left} Min.`, `jeszcze ${left} min`) : tr('bis 18:30 Uhr', 'do 18:30'); }
    else if (work && m < O) s = tr('heute ab 8:30 Uhr', 'dziś od 8:30'); else if (wd >= 5) s = tr('Montag ab 8:30 Uhr', 'w poniedziałek od 8:30'); else s = tr('morgen ab 8:30 Uhr', 'jutro od 8:30');
    $$('[data-nowpill]').forEach(p => { p.classList.toggle('open', open); $('b', p).textContent = open ? tr('Geöffnet', 'Otwarte') : tr('Geschlossen', 'Zamknięte'); });
    const n = $('[data-now]'); if (n) { n.classList.toggle('open', open); $('[data-now-t]').textContent = open ? tr('Jetzt geöffnet', 'Teraz otwarte') : tr('Gerade geschlossen', 'Teraz zamknięte'); $('[data-now-s]').textContent = ' · ' + s; }
    $$('[data-hours] li').forEach(li => li.classList.toggle('today', +li.dataset.day === wd));
  }
  setInterval(paintStatus, 60000);

  /* ---------- Einblenden ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  $$('.rv').forEach(el => io.observe(el));

  /* ---------- Hero: Garnitur folgt der Maus ---------- */
  const set = $('[data-tilt]'), hero = $('[data-hero]');
  if (set && hero && !reduce && matchMedia('(pointer:fine)').matches) hero.addEventListener('pointermove', e => { const r = hero.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; set.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 6}deg) translateY(${y * -10}px)`; });

  /* ---------- Drehbühne Eiche ---------- */
  const st = $('[data-stage]'), its = $$('[data-st]'), caps = $$('[data-stc]'), dots = $$('[data-std]'); let si = 0;
  function show(i) {
    const n = its.length; si = (i + n) % n;
    its.forEach((el, k) => { el.classList.toggle('on', k === si); el.classList.toggle('l', k === (si - 1 + n) % n); el.classList.toggle('r', k === (si + 1) % n); });
    caps.forEach((c, k) => c.classList.toggle('on', k === si)); dots.forEach((d, k) => d.classList.toggle('on', k === si));
    const no = $('[data-stno]'); if (no) no.textContent = String(si + 1).padStart(2, '0');
    const img = $('img', its[(si + 1) % n]); if (img) img.loading = 'eager';
  }
  if (st) {
    $$('[data-stn]').forEach(b => b.addEventListener('click', () => show(si + +b.dataset.stn)));
    dots.forEach((d, k) => d.addEventListener('click', () => show(k)));
    let x0 = null; st.addEventListener('pointerdown', e => { x0 = e.clientX; }); addEventListener('pointerup', e => { if (x0 === null) return; const dx = e.clientX - x0; x0 = null; if (Math.abs(dx) > 40) show(si + (dx < 0 ? 1 : -1)); });
    st.addEventListener('keydown', e => { if (e.key === 'ArrowRight') show(si + 1); if (e.key === 'ArrowLeft') show(si - 1); });
    show(0);
  }
  const ask = $('[data-ask]'); if (ask) ask.addEventListener('click', () => { const n = (window.GT && GT.oak[si]) || ['', '']; prefill(tr(`Ich interessiere mich für die Garnitur „${n[0]}“ aus Eiche. Ist sie noch da, und was kostet sie?`, `Interesuje mnie dębowy komplet „${n[1]}”. Czy jest jeszcze dostępny i ile kosztuje?`), 'Gartenmöbel aus Eiche'); });
  const deal = $('[data-deal]'); if (deal) deal.addEventListener('click', () => prefill(tr('Welche Restposten gibt es gerade zu Sonderpreisen?', 'Jakie ostatnie sztuki są teraz w cenach specjalnych?'), 'Sonderangebote'));
  function prefill(msg, interest) { const m = $('[data-msg]'); if (m) { m.value = msg; } const c = $(`[data-int] input[value="${interest}"]`); if (c) c.checked = true; }

  /* ---------- Schaukel ---------- */
  const sw = $('[data-swing]'), swimg = $('[data-swimg]');
  let ang = 0, vel = 0, raf = 0;
  function step() { vel += -ang * .018; vel *= .992; ang += vel; if (sw) sw.style.transform = `rotate(${ang}deg)`; if (Math.abs(ang) > .02 || Math.abs(vel) > .02) raf = requestAnimationFrame(step); else { raf = 0; ang = vel = 0; sw.style.transform = ''; } }
  function push(f = 1.6) { if (reduce) return; vel += f; if (!raf) raf = requestAnimationFrame(step); }
  const pb = $('[data-push]'); if (pb) pb.addEventListener('click', () => push(ang > 0 ? -1.8 : 1.8));
  if (sw) { sw.addEventListener('pointerdown', e => { const r = sw.getBoundingClientRect(); push(e.clientX < r.left + r.width / 2 ? 1.6 : -1.6); });
    new IntersectionObserver(([en], o) => { if (en.isIntersecting) { push(1.2); o.disconnect(); } }, { threshold: .5 }).observe(sw); }
  $$('[data-sw]').forEach(b => b.addEventListener('click', () => { $$('[data-sw]').forEach(x => x.classList.toggle('on', x === b)); swimg.style.opacity = 0; setTimeout(() => { swimg.src = 'img/c/' + b.dataset.sw + '.webp'; swimg.onload = () => { swimg.style.opacity = 1; push(1.4); }; }, 250); }));

  /* ---------- Taschenlampe im Figurenhof ---------- */
  const torch = $('[data-torch]');
  if (torch) {
    let user = false, t0 = performance.now(), on = false;
    const set = (x, y, r) => { torch.style.setProperty('--mx', x + 'px'); torch.style.setProperty('--my', y + 'px'); if (r) torch.style.setProperty('--rr', r + 'px'); };
    const R = () => Math.max(170, Math.min(300, torch.clientWidth * .2));
    torch.addEventListener('pointermove', e => { user = true; const r = torch.getBoundingClientRect(); set(e.clientX - r.left, e.clientY - r.top, R()); });
    torch.addEventListener('pointerdown', e => { user = true; const r = torch.getBoundingClientRect(); set(e.clientX - r.left, e.clientY - r.top, R() * 1.15); });
    new IntersectionObserver(([en]) => { on = en.isIntersecting; if (on) loop(); }).observe(torch);
    function loop() { if (!on) return; if (!user && !reduce) { const t = (performance.now() - t0) / 1000, w = torch.clientWidth, h = torch.clientHeight; set(w * (.55 + .3 * Math.sin(t * .45)), h * (.55 + .18 * Math.sin(t * .8)), R()); } requestAnimationFrame(loop); }
    set(torch.clientWidth * .7, torch.clientHeight * .55, R());
  }

  /* ---------- Liefer-Rechner ---------- */
  const km = $('[data-kmr]'), wert = $('[data-wert]'), path = $('[data-rt]'), truck = $('[data-truck]');
  function calc() {
    if (!km) return; const k = +km.value, v = +wert.value, res = $('[data-dres]'), sub = $('[data-dsub]');
    $('[data-kmo]').textContent = k + ' km'; $('[data-wo]').textContent = v.toLocaleString('de-DE') + ' €';
    $$('[data-ort]').forEach(b => b.classList.toggle('on', +b.dataset.ort === k));
    const p = Math.max(.04, Math.min(1, k / 60)), Lp = path.getTotalLength(), P = path.getPointAtLength(Lp * p); path.style.strokeDasharray = `${Lp * p} ${Lp}`; truck.setAttribute('transform', `translate(${P.x} ${P.y - 8})`);
    res.classList.remove('pay');
    if (v >= 1000 && k <= 10) { res.innerHTML = tr('Lieferung <b>kostenlos</b>', 'Dostawa <b>gratis</b>'); sub.textContent = tr('Frei Haus – bis zu Ihnen nach Hause.', 'Bezpłatnie – prosto pod Twój dom.'); }
    else if (v >= 1000) { const c = k - 10; res.classList.add('pay'); res.innerHTML = tr(`Lieferung <b>${c},00 €</b>`, `Dostawa <b>${c},00 €</b>`); sub.textContent = tr(`10 km frei, dann ${c} km × 1,00 €.`, `10 km gratis, potem ${c} km × 1,00 €.`); }
    else { res.classList.add('pay'); res.innerHTML = tr('Lieferung <b>auf Anfrage</b>', 'Dostawa <b>na zapytanie</b>'); sub.textContent = tr(`Noch ${(1000 - v).toLocaleString('de-DE')} € bis zur kostenlosen Lieferung – oder einfach selbst abholen.`, `Jeszcze ${(1000 - v).toLocaleString('de-DE')} € do darmowej dostawy – albo odbierz sam.`); }
  }
  if (km) { [km, wert].forEach(i => i.addEventListener('input', calc)); $$('[data-ort]').forEach(b => b.addEventListener('click', () => { km.value = b.dataset.ort; calc(); })); }

  /* ---------- Formular ---------- */
  const kf = $('[data-kf]');
  if (kf) kf.addEventListener('submit', async e => {
    e.preventDefault(); const b = $('[data-ksend]'), ok = $('[data-kok]'), er = $('[data-kerr]'); ok.hidden = er.hidden = true; b.disabled = true; const lbl = b.textContent; b.textContent = tr('Wird gesendet …', 'Wysyłanie …');
    const fd = new FormData(kf), ints = fd.getAll('Interesse'); fd.delete('Interesse'); fd.set('Interesse', ints.join(', ') || '–');
    try { const r = await fetch(kf.action, { method: 'POST', body: fd, headers: { Accept: 'application/json' } }); if (!r.ok) throw 0; ok.hidden = false; kf.reset(); b.textContent = '✓'; }
    catch (x) { er.hidden = false; b.disabled = false; b.textContent = lbl; }
  });

  /* ---------- Start ---------- */
  let start = 'de';
  const q = new URLSearchParams(location.search).get('lang');
  try { start = q || localStorage.getItem('gt-lang') || ((navigator.language || '').toLowerCase().startsWith('pl') ? 'pl' : 'de'); } catch (e) { start = q || 'de'; }
  if (start === 'pl') setLang('pl'); else { paintStatus(); calc(); }
})();
