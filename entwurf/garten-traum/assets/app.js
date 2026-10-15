/* Der Garten-Traum – Entwurf Falcon Eye */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const IT = window.GT_ITEMS || {};
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Header */
  const hdr = $('[data-hdr]');
  const onScroll = () => { if (hdr) hdr.classList.toggle('sc', scrollY > 40); };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* Berlin-Zeit & Öffnungsstatus (Mo–Sa 8:30–18:30) */
  function berlin() { const p = new Intl.DateTimeFormat('de-DE', { timeZone: 'Europe/Berlin', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date()); const g = t => p.find(x => x.type === t).value; const wd = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].indexOf(g('weekday').replace('.', '')); return { wd, m: +g('hour') % 24 * 60 + +g('minute') }; }
  function status() {
    const { wd, m } = berlin(), O = 510, C = 1110, workday = wd >= 0 && wd <= 5;
    if (workday && m >= O && m < C) { const left = C - m; return { open: true, t: 'Jetzt geöffnet', s: left <= 60 ? `noch ${left} Min.` : 'bis 18:30 Uhr', wd }; }
    let nx; if (workday && m < O) nx = 'heute ab 8:30 Uhr'; else if (wd === 5 || wd === 6) nx = 'Montag ab 8:30 Uhr'; else nx = 'morgen ab 8:30 Uhr';
    return { open: false, t: 'Gerade geschlossen', s: nx, wd };
  }
  function paintStatus() {
    const st = status();
    $$('[data-nowpill]').forEach(p => { p.classList.toggle('open', st.open); $('b', p).textContent = st.open ? 'Geöffnet' : 'Geschlossen'; });
    const n = $('[data-now]'); if (n) { n.classList.toggle('open', st.open); $('[data-now-t]').textContent = st.t; $('[data-now-s]').textContent = '· ' + st.s; }
    $$('[data-hours] li').forEach(li => li.classList.toggle('today', +li.dataset.day === st.wd));
  }
  paintStatus(); setInterval(paintStatus, 60000);

  /* Tag & Abend */
  const dn = $('[data-dn]'), hint = $('[data-dnhint]');
  function setNight(on, user) {
    document.body.classList.toggle('night', on); if (dn) dn.setAttribute('aria-pressed', on);
    if (hint) { if (user) hint.style.opacity = 0; else hint.textContent = on ? 'Oder lieber die Sonne?' : 'Tippen Sie mal auf den Mond.'; }
  }
  const h = berlin().m / 60; setNight(h >= 19 || h < 7);
  if (dn) dn.addEventListener('click', () => setNight(!document.body.classList.contains('night'), true));

  /* Hero-Parallax */
  const par = $$('[data-par]'), hero = $('[data-hero]');
  if (!reduce && hero) { let tk = 0; addEventListener('scroll', () => { if (tk) return; tk = requestAnimationFrame(() => { tk = 0; const y = Math.min(scrollY, hero.offsetHeight); par.forEach(g => g.style.transform = `translateY(${y * (+g.dataset.par) * .35}px)`); }); }, { passive: true }); }

  /* Einblenden */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  $$('.rv, .rings').forEach(el => io.observe(el));

  /* ---------------- Garten einrichten ---------------- */
  const svg = $('[data-psvg]'), stage = $('[data-stage]'), gItems = $('[data-items]'), tool = $('[data-ptool]');
  let items = [], uid = 1, sel = null, ground = 'rasen';
  const Y0 = 205, Y1 = 552, K = 1.05;
  const sc = y => (.5 + (y - 172) / (560 - 172) * .7) * K;
  function render() {
    if (!gItems) return;
    gItems.innerHTML = [...items].sort((a, b) => a.y - b.y).map(it => {
      const d = IT[it.t]; if (!d) return ''; const [n, , w, hh] = d, s = sc(it.y);
      return `<g class="git${sel === it.id ? ' on' : ''}" data-id="${it.id}" transform="translate(${it.x} ${it.y}) scale(${it.f ? -s : s} ${s})"><ellipse rx="${w * .46}" ry="${Math.max(6, w * .07)}" fill="rgba(25,45,15,.25)"/><use href="#it-${it.t}" x="${-(w + 4) / 2}" y="${-(hh + 22)}" width="${w + 4}" height="${hh + 22}"/><rect class="sel" x="${-w / 2 - 10}" y="${-hh - 22}" width="${w + 20}" height="${hh + 32}" rx="10"/><title>${n}</title></g>`;
    }).join('');
    stage.dataset.g = ground; $$('[data-ground]').forEach(b => { if (b.tagName === 'BUTTON') b.classList.toggle('on', b.dataset.ground === ground); });
    list(); placeTool(); save();
  }
  function list() {
    const ul = $('[data-plist]'), cnt = {}; items.forEach(i => cnt[i.t] = (cnt[i.t] || 0) + 1);
    const keys = Object.keys(cnt); $('[data-pcount]').textContent = items.length;
    ul.innerHTML = keys.length ? keys.map(k => `<li><span><b>${cnt[k]}×</b> ${IT[k][0]}</span><small>${IT[k][1]}</small></li>`).join('') : '<li class="empty">Noch leer – tippen Sie links ein Möbelstück an.</li>';
  }
  function placeTool() {
    const it = items.find(i => i.id === sel); if (!it) { tool.hidden = true; return; }
    const g = $(`[data-id="${it.id}"]`, gItems); if (!g) { tool.hidden = true; return; }
    const r = g.getBoundingClientRect(), s = stage.getBoundingClientRect();
    tool.hidden = false; tool.style.left = Math.max(110, Math.min(s.width - 110, r.left - s.left + r.width / 2)) + 'px'; tool.style.top = Math.max(56, r.top - s.top - 6) + 'px';
  }
  function save() { const v = items.map(i => `${i.t}.${Math.round(i.x)}.${Math.round(i.y)}${i.f ? '.f' : ''}`).join('_'); try { history.replaceState(null, '', items.length || ground !== 'rasen' ? '#g=' + ground + '~' + v : location.pathname + location.search); } catch (e) { } }
  function load() { const m = location.hash.match(/^#g=([a-z]+)~(.*)$/); if (!m) return false; ground = m[1]; items = m[2].split('_').filter(Boolean).map(s => { const [t, x, y, f] = s.split('.'); return IT[t] ? { id: uid++, t, x: +x, y: +y, f: f === 'f' } : null; }).filter(Boolean); return true; }
  function spot() { for (let k = 0; k < 40; k++) { const x = 160 + Math.random() * 680, y = 300 + Math.random() * 220; if (items.every(i => Math.hypot(i.x - x, (i.y - y) * 1.6) > 120)) return { x, y }; } return { x: 500, y: 420 }; }
  function add(t, at) { const p = at || spot(); const it = { id: uid++, t, x: p.x, y: p.y, f: false }; items.push(it); sel = it.id; render(); const g = $(`[data-id="${it.id}"]`, gItems); if (g && g.animate && !reduce) g.animate([{ opacity: 0, transform: g.getAttribute('transform').replace(/translate\(([\d.]+) ([\d.]+)\)/, (a, x, y) => `translate(${x}px, ${y - 60}px)`) }, { opacity: 1 }], { duration: 380, easing: 'cubic-bezier(.3,1.4,.5,1)' }); }
  const DEMO = [['vogelhaus', 120, 300], ['schaukel', 470, 330], ['kuebel', 800, 300], ['bank', 230, 455], ['laterne', 340, 440], ['tisch', 690, 470], ['stuhl', 590, 470], ['stuhl', 790, 470, 1], ['igel', 880, 535], ['kuebel', 70, 540]];
  function demo() { items = DEMO.map(([t, x, y, f]) => ({ id: uid++, t, x, y, f: !!f })); sel = null; render(); }
  function pt(e) { const p = svg.createSVGPoint(); p.x = e.clientX; p.y = e.clientY; return p.matrixTransform(svg.getScreenCTM().inverse()); }
  let drag = null;
  if (svg) {
    svg.addEventListener('pointerdown', e => {
      const g = e.target.closest('.git'); if (!g) { if (sel) { sel = null; render(); } return; }
      const it = items.find(i => i.id === +g.dataset.id), p = pt(e);
      drag = { it, dx: it.x - p.x, dy: it.y - p.y, x0: e.clientX, y0: e.clientY, on: false }; svg.setPointerCapture(e.pointerId); e.preventDefault();
    });
    svg.addEventListener('pointermove', e => {
      if (!drag) return; if (!drag.on && Math.hypot(e.clientX - drag.x0, e.clientY - drag.y0) < 5) return; drag.on = true; stage.classList.add('drag'); tool.hidden = true;
      const p = pt(e); drag.it.x = Math.max(40, Math.min(960, p.x + drag.dx)); drag.it.y = Math.max(Y0, Math.min(Y1, p.y + drag.dy)); sel = drag.it.id;
      if (!drag.raf) drag.raf = requestAnimationFrame(() => { drag && (drag.raf = 0); render(); tool.hidden = true; });
    });
    const end = () => { if (!drag) return; const d = drag; drag = null; stage.classList.remove('drag'); if (!d.on) sel = sel === d.it.id ? null : d.it.id; render(); };
    svg.addEventListener('pointerup', end); svg.addEventListener('pointercancel', end);
    tool.addEventListener('click', e => { const b = e.target.closest('[data-pt]'); if (!b) return; const it = items.find(i => i.id === sel); if (!it) return; const k = b.dataset.pt;
      if (k === 'flip') it.f = !it.f; if (k === 'front') it.y = Math.min(Y1, it.y + 50); if (k === 'del') { items = items.filter(i => i !== it); sel = null; } render(); });
    $$('[data-pal]').forEach(b => b.addEventListener('click', () => add(b.dataset.pal)));
    $$('[data-ground]').forEach(b => { if (b.tagName === 'BUTTON') b.addEventListener('click', () => { ground = b.dataset.ground; render(); }); });
    $('[data-pclear]').addEventListener('click', () => { items = []; sel = null; render(); });
    $('[data-pdemo]').addEventListener('click', demo);
    addEventListener('resize', placeTool); addEventListener('keydown', e => { if (sel && (e.key === 'Delete' || e.key === 'Backspace') && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { items = items.filter(i => i.id !== sel); sel = null; render(); } });
    if (!load()) demo(); else render();
  }
  $$('[data-addit]').forEach(b => b.addEventListener('click', () => { add(b.dataset.addit); $('#einrichten').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); }));

  /* Liste ins Formular */
  const msg = $('[data-msg]');
  const GN = { rasen: 'Rasen', deck: 'Holzterrasse', stone: 'Pflaster' };
  const INT = { schaukel: 'Hollywoodschaukel', bank: 'Gartenmöbel', tisch: 'Gartenmöbel', stuhl: 'Gartenmöbel', hocker: 'Gastronomie', vogelhaus: 'Vogelhaus', kuebel: 'Gartendeko & Figuren', laterne: 'Gartendeko & Figuren', igel: 'Gartendeko & Figuren' };
  const sendBtn = $('[data-psend]');
  if (sendBtn) sendBtn.addEventListener('click', () => {
    if (!items.length) { add('bank'); return; }
    const cnt = {}; items.forEach(i => cnt[i.t] = (cnt[i.t] || 0) + 1);
    msg.value = 'Mein Garten (online zusammengestellt):\n' + Object.keys(cnt).map(k => `– ${cnt[k]}× ${IT[k][0]} (${IT[k][1]})`).join('\n') + `\nUntergrund: ${GN[ground]}\n\nBitte um Preis und Liefertermin.`;
    msg.dispatchEvent(new Event('input')); $('[data-glink]').value = location.href;
    const want = new Set(Object.keys(cnt).map(k => INT[k])); $$('[data-int] input').forEach(c => { if (want.has(c.value)) c.checked = true; });
    $('#kontakt').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); setTimeout(() => $('[name="Name"]').focus({ preventScroll: true }), 700);
  });
  $$('[data-pickmsg]').forEach(a => a.addEventListener('click', () => { msg.value = a.dataset.pickmsg; const c = $('[data-int] input[value="Gutschein"]'); if (c) c.checked = true; }));

  /* Liefer-Rechner */
  const km = $('[data-kmr]'), wert = $('[data-wert]'), path = $('[data-rt]'), truck = $('[data-truck]');
  function calc() {
    if (!km) return; const k = +km.value, v = +wert.value, res = $('[data-dres]'), sub = $('[data-dsub]');
    $('[data-kmo]').textContent = k + ' km'; $('[data-wo]').textContent = v.toLocaleString('de-DE') + ' €';
    $$('[data-km]', $('[data-orte]')).forEach(b => b.classList.toggle('on', +b.dataset.km === k));
    const p = Math.max(.04, Math.min(1, k / 60)); path.style.setProperty('--p', p * 100); const L = path.getTotalLength(), P = path.getPointAtLength(L * p); truck.setAttribute('transform', `translate(${P.x} ${P.y - 8})`);
    res.classList.remove('pay');
    if (v >= 1000 && k <= 10) { res.innerHTML = 'Lieferung <b>kostenlos</b>'; sub.textContent = 'Frei Haus – wir bringen alles bis in den Garten.'; }
    else if (v >= 1000) { const c = k - 10; res.classList.add('pay'); res.innerHTML = `Lieferung <b>${c} €</b>`; sub.textContent = `Die ersten 10 km sind frei, danach 1 € pro Kilometer (${c} km).`; }
    else { res.classList.add('pay'); res.innerHTML = 'Lieferung <b>nach Absprache</b>'; sub.textContent = `Noch ${(1000 - v).toLocaleString('de-DE')} € bis zur kostenlosen Lieferung – oder einfach selbst abholen.`; }
  }
  if (km) { [km, wert].forEach(i => i.addEventListener('input', calc)); $$('[data-km]', $('[data-orte]')).forEach(b => b.addEventListener('click', () => { km.value = b.dataset.km; calc(); })); calc(); }

  /* Formular (AJAX, bleibt auf der Seite) */
  const kf = $('[data-kf]');
  if (kf) kf.addEventListener('submit', async e => {
    e.preventDefault(); const b = $('[data-ksend]'), ok = $('[data-kok]'), er = $('[data-kerr]'); ok.hidden = er.hidden = true; b.disabled = true; b.textContent = 'Wird gesendet …';
    const fd = new FormData(kf), ints = fd.getAll('Interesse'); fd.delete('Interesse'); fd.set('Interesse', ints.join(', ') || '–');
    try { const r = await fetch(kf.action, { method: 'POST', body: fd, headers: { Accept: 'application/json' } }); if (!r.ok) throw 0; ok.hidden = false; kf.reset(); b.textContent = 'Gesendet ✓'; }
    catch (x) { er.hidden = false; b.disabled = false; b.textContent = 'Anfrage senden'; }
  });
})();
