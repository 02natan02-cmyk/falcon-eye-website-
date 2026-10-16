/* Hudalla Hausmeisterservice – Interaktion (Entwurf Falcon Eye) */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const H = window.HUD || {}, RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const icon = (k, cls = 'ic') => `<svg class="${cls}" viewBox="0 0 48 48" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${(H.icons || {})[k] || ''}</g></svg>`;

  /* ---------- Header ---------- */
  const hdr = $('[data-hdr]'), onScroll = () => hdr.classList.toggle('solid', scrollY > 30);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const bur = $('[data-burger]'), mn = $('[data-mnav]');
  bur.addEventListener('click', () => { const o = bur.getAttribute('aria-expanded') !== 'true'; bur.setAttribute('aria-expanded', o); mn.hidden = !o; });
  $$('a', mn).forEach(a => a.addEventListener('click', () => { bur.setAttribute('aria-expanded', 'false'); mn.hidden = true; }));

  /* ---------- Hero: Jahreszeiten ---------- */
  const hs = $('[data-hero-scene]');
  if (hs) {
    const svg = $('svg.scene', hs), ui = $('.season-ui', hs), cap = $('[data-season-cap] span'), capb = $('[data-season-cap]');
    const S = ['spring', 'summer', 'autumn', 'winter'];
    const CAP = { spring: 'Frühling: Hecken in Form, Frühjahrsputz, das erste Grün.', summer: 'Sommer: Rasen gemäht, Beete gepflegt, gegossen – auch in den Ferien.', autumn: 'Herbst: Laub weg, Wege frei, Winter vorbereitet.', winter: 'Winter: Wege geräumt und gestreut, bevor die ersten Mieter rausgehen.' };
    let i = 1, t = 0, paused = false;
    const PL = { spring: 'Selbst Unkraut zupfen', summer: 'Selbst Rasen mähen', autumn: 'Selbst Laub rechen', winter: 'Selbst Schnee schippen' };
    const set = s => { svg.dataset.season = s; const pl = $('[data-play-l]', hs); if (pl) pl.textContent = PL[s]; $$('button', ui).forEach(b => b.classList.toggle('on', b.dataset.s === s)); cap.textContent = CAP[s]; capb.dataset.s = s; capb.classList.remove('sw'); void capb.offsetWidth; capb.classList.add('sw'); i = S.indexOf(s); };
    const loop = () => { clearTimeout(t); if (paused || RM) return; t = setTimeout(() => { set(S[(i + 1) % 4]); loop(); }, 6000); };
    ui.addEventListener('click', e => { const b = e.target.closest('[data-s]'); if (!b) return; paused = true; ui.classList.add('paused'); clearTimeout(t); set(b.dataset.s); hs.dispatchEvent(new CustomEvent('season', { detail: b.dataset.s })); });
    hs._set = s => { set(s); hs.dispatchEvent(new CustomEvent('season', { detail: s })); }; hs._pause = () => { paused = true; ui.classList.add('paused'); clearTimeout(t); }; hs._cur = () => S[i];
    set('summer'); loop();
  }

  /* ---------- Jahresplan ---------- */
  const jStage = $('.ja-scene'), mr = $('[data-mrange]'), tasks = $('[data-mtasks]');
  if (jStage && H.months) {
    let cur = 0, play = 0;
    const setM = m => {
      cur = m; const d = H.months[m];
      jStage.dataset.season = d.s; jStage.dataset.focus = d.focus;
      $('[data-mname]').textContent = d.n; $('[data-mtag]').textContent = d.tag;
      tasks.innerHTML = d.tasks.map(([k, t]) => `<li>${icon(k)}<span>${t}</span></li>`).join('');
      $$('.ja-months button').forEach((b, j) => b.classList.toggle('on', j === m)); mr.value = m;
    };
    $('.ja-months').addEventListener('click', e => { const b = e.target.closest('[data-m]'); if (b) { stop(); setM(+b.dataset.m); } });
    mr.addEventListener('input', () => { stop(); setM(+mr.value); });
    const pb = $('[data-mplay]');
    const stop = () => { clearInterval(play); play = 0; pb.textContent = '▶ Jahr abspielen'; };
    pb.addEventListener('click', () => { if (play) return stop(); pb.textContent = '❚❚ Pause'; play = setInterval(() => setM((cur + 1) % 12), 2600); });
    const now = new Date().getMonth(); setM(now);
    const nb = $$('.ja-months button')[now]; if (nb) { nb.classList.add('now'); nb.title = 'Aktueller Monat'; }
    const mn = $('[data-mname]'); new MutationObserver(() => { if (cur === now && !mn.querySelector('small')) mn.insertAdjacentHTML('beforeend', '<small>jetzt</small>'); }).observe(mn, { childList: true }); mn.insertAdjacentHTML('beforeend', '<small>jetzt</small>');
  }

  /* ---------- Leistungen ---------- */
  $$('.sv-t').forEach(b => b.addEventListener('click', () => {
    $$('.sv-t').forEach(x => { x.classList.toggle('on', x === b); x.setAttribute('aria-selected', x === b); });
    $$('.sv-p').forEach(p => p.classList.toggle('on', p.dataset.svp === b.dataset.sv));
    if (innerWidth < 900) $('.sv-panels').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));

  /* ---------- Kontrollgang ---------- */
  const hots = $$('.hot'), card = $('[data-kgcard]');
  if (hots.length && H.hots) {
    let k = 0, auto = 0, touched = false;
    const show = n => {
      k = n; const d = H.hots[n];
      hots.forEach((h, j) => h.classList.toggle('on', j === n)); $$('.kg-list li').forEach((l, j) => l.classList.toggle('on', j === n));
      $('[data-kgic]').innerHTML = icon(d.k); $('[data-kgt]').textContent = d.t; $('[data-kgd]').textContent = d.d; $('[data-kgn]').textContent = `${n + 1} / ${H.hots.length}`;
      card.classList.remove('swap'); void card.offsetWidth; card.classList.add('swap');
    };
    const pick = n => { touched = true; clearInterval(auto); show(n); };
    hots.forEach((h, j) => h.addEventListener('click', () => pick(j)));
    $$('.kg-list li').forEach((l, j) => l.addEventListener('click', () => pick(j)));
    $$('.kg-list li').forEach((l, j) => l.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(j); } }));
    show(0);
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting && !touched && !RM && !auto) auto = setInterval(() => show((k + 1) % hots.length), 4200); else if (!e.isIntersecting) { clearInterval(auto); auto = 0; } }, { threshold: .4 });
    io.observe($('.kg-house'));
  }

  /* ---------- Winterdienst live (Open-Meteo) ---------- */
  const wx = $('[data-wx]');
  if (wx) {
    const WC = { 0: 'Klar', 1: 'Überwiegend klar', 2: 'Teils bewölkt', 3: 'Bedeckt', 45: 'Nebel', 48: 'Reifnebel', 51: 'Nieselregen', 53: 'Nieselregen', 55: 'Starker Niesel', 56: 'Gefrierender Niesel', 57: 'Gefrierender Niesel', 61: 'Leichter Regen', 63: 'Regen', 65: 'Starker Regen', 66: 'Gefrierender Regen', 67: 'Gefrierender Regen', 71: 'Leichter Schneefall', 73: 'Schneefall', 75: 'Starker Schneefall', 77: 'Schneegriesel', 80: 'Regenschauer', 81: 'Regenschauer', 82: 'Starke Schauer', 85: 'Schneeschauer', 86: 'Schneeschauer', 95: 'Gewitter', 96: 'Gewitter mit Hagel', 99: 'Gewitter mit Hagel' };
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=49.91&longitude=8.21&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_min,temperature_2m_max,snowfall_sum,precipitation_sum&timezone=Europe%2FBerlin&forecast_days=3';
    const amp = $('[data-wx-amp]'), msg = $('[data-wx-msg]');
    const fmt = v => (Math.round(v * 10) / 10).toString().replace('.', ',');
    fetch(url).then(r => r.json()).then(d => {
      const c = d.current, dl = d.daily, m = new Date().getMonth();
      $('[data-wx-t]').textContent = Math.round(c.temperature_2m) + '°';
      $('[data-wx-desc]').textContent = WC[c.weather_code] || '';
      $('[data-wx-time]').textContent = 'Stand ' + new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) + ' Uhr';
      const mins = dl.temperature_2m_min.slice(0, 2), snow = dl.snowfall_sum.slice(0, 2).reduce((a, b) => a + b, 0), pr = dl.precipitation_sum.slice(0, 2).reduce((a, b) => a + b, 0), mn = Math.min(...mins, c.temperature_2m);
      let l = 'g', t;
      if (snow > 0) { l = 'r'; t = `Schnee angesagt (${fmt(snow)} cm). Jetzt wird geräumt und gestreut.`; }
      else if (mn <= 0 && pr > 0) { l = 'r'; t = `Glättegefahr: Frost bis ${fmt(mn)}° und Niederschlag. Der Winterdienst steht bereit.`; }
      else if (mn <= 1) { l = 'y'; t = `Frost möglich (bis ${fmt(mn)}°) – Reif und überfrierende Nässe im Blick.`; }
      else t = m >= 3 && m <= 8 ? `Keine Glätte in Sicht – Winterdienst hat Sommerpause. Die Touren für den nächsten Winter planen wir im Herbst.` : `Keine Glätte in den nächsten Tagen (tiefste Temperatur ${fmt(mn)}°).`;
      amp.dataset.l = l; msg.textContent = t;
      const days = ['Heute', 'Morgen', 'Übermorgen'];
      $('[data-wx-days]').innerHTML = dl.time.map((x, j) => `<li><b>${days[j]}</b><span>${WC[dl.weather_code[j]] || ''}</span><em>${Math.round(dl.temperature_2m_min[j])}° / ${Math.round(dl.temperature_2m_max[j])}°</em></li>`).join('');
    }).catch(() => { amp.dataset.l = 'g'; msg.textContent = 'Wetterdaten gerade nicht erreichbar – im Winter sind wir bei jedem Wetter bereit.'; $('[data-wx-desc]').textContent = ''; $('[data-wx-t]').textContent = '❄'; });
  }

  /* ---------- Objekt-Check ---------- */
  const oc = $('[data-oc]');
  if (oc) {
    const st = { typ: 'Wohnanlage', rolle: 'Hausverwaltung', we: 12, th: 2, gw: 40, gruen: 'klein (bis 300 m²)', extra: new Set(), name: '', adr: '', mail: '', tel: '', start: 'so bald wie möglich' };
    const SV = [
      ['treppe', 'Treppenhausreinigung', 'Treppen, Flure, Handläufe', [['wöchentlich', 52], ['14-tägig', 26], ['monatlich', 12]]],
      ['gruen', 'Grünanlagenpflege', 'Rasen, Beete, Wege', [['wöchentlich (Apr–Okt)', 30], ['14-tägig (Apr–Okt)', 15], ['monatlich (Apr–Okt)', 7]]],
      ['hecke', 'Hecken- & Gehölzschnitt', 'Form- und Pflegeschnitt', [['2× im Jahr', 2], ['1× im Jahr', 1]]],
      ['laub', 'Laubbeseitigung', 'Rasen, Wege, Beete', [['wöchentlich (Okt–Nov)', 8], ['3× im Herbst', 3]]],
      ['winter', 'Winterdienst', 'Räumen und Streuen inkl. Räumpflicht', [['ganze Saison (Nov–März)', 0]]],
      ['muell', 'Mülltonnen-Service', 'raus- und reinstellen, Müllplatz sauber', [['wöchentlich', 52], ['14-tägig', 26]]],
      ['technik', 'Kontrollgang Haustechnik', 'Heizung, Wasser, Licht, Türen', [['monatlich', 12], ['wöchentlich', 52], ['quartalsweise', 4]]],
      ['glas', 'Glasreinigung Treppenhaus', 'Fenster und Glastüren', [['2× im Jahr', 2], ['4× im Jahr', 4]]],
      ['tg', 'Tiefgaragenreinigung', 'kehren, Abläufe prüfen', [['1× im Jahr', 1], ['2× im Jahr', 2]]],
      ['spiel', 'Spielplatz-Sichtkontrolle', 'Geräte, Sand, Sauberkeit', [['monatlich', 12], ['wöchentlich', 52]]],
      ['sonder', 'Sonderleistungen auf Abruf', 'Entrümpelung, Kleinreparaturen', [['nach Bedarf', 0]]],
    ];
    const on = {}, freq = {}; let touched = false;
    SV.forEach(([k]) => { freq[k] = 0; on[k] = false; });
    const want = new Set();
    const defaults = () => {
      if (touched) return; const priv = st.typ.startsWith('Ein');
      on.treppe = st.th > 0 && !priv; on.gruen = !st.gruen.startsWith('keine'); on.hecke = st.extra.has('Hecken'); on.laub = st.extra.has('Bäume');
      on.winter = st.gw > 0; on.muell = st.extra.has('Müllplatz') || st.we >= 6; on.technik = !priv; on.glas = false; on.tg = st.extra.has('Tiefgarage'); on.spiel = st.extra.has('Spielplatz'); on.sonder = false;
      if (st.we >= 30) freq.treppe = 0; else if (st.we < 6) freq.treppe = 1;
      want.forEach(k => on[k] = true);
    };
    const box = $('[data-ocsvc]');
    const renderSvc = () => { box.innerHTML = SV.map(([k, n, d, o]) => `<div class="svr${on[k] ? ' on' : ''}" data-k="${k}"><button type="button" class="sw" role="switch" aria-checked="${on[k]}" aria-label="${n}"></button><span><b>${n}</b><small>${d}</small></span>${o.length > 1 ? `<select aria-label="Turnus ${n}">${o.map(([l], j) => `<option value="${j}"${j === freq[k] ? ' selected' : ''}>${l}</option>`).join('')}</select>` : `<small class="once">${o[0][0]}</small>`}</div>`).join(''); };
    box.addEventListener('click', e => { const r = e.target.closest('.svr'); if (!r || e.target.closest('select')) return; touched = true; const k = r.dataset.k; on[k] = !on[k]; r.classList.toggle('on', on[k]); $('.sw', r).setAttribute('aria-checked', on[k]); lv(k); });
    box.addEventListener('change', e => { const r = e.target.closest('.svr'); if (!r) return; touched = true; freq[r.dataset.k] = +e.target.value; lv(r.dataset.k); });
    // Eingaben Schritt 1/2/4
    $$('[data-ocq]', oc).forEach(g => g.addEventListener('click', e => { const b = e.target.closest('[data-v]'); if (!b) return; $$('[data-v]', g).forEach(x => x.classList.toggle('on', x === b)); st[g.dataset.ocq] = b.dataset.v; defaults(); renderSvc(); lv(); }));
    $$('[data-ocm]', oc).forEach(g => g.addEventListener('click', e => { const b = e.target.closest('[data-v]'); if (!b) return; b.classList.toggle('on'); st.extra[b.classList.contains('on') ? 'add' : 'delete'](b.dataset.v); defaults(); renderSvc(); lv(); }));
    $$('[data-ocf]', oc).forEach(f => f.addEventListener('input', () => { const k = f.dataset.ocf; st[k] = f.type === 'range' ? +f.value : f.value; const o = $(`[data-oco="${k}"]`, oc); if (o) o.textContent = k === 'gw' ? f.value + ' m' : f.value; if (f.type === 'range') { defaults(); renderSvc(); } lv(); }));
    // LV
    const lvb = $('[data-lvbody]'), lvm = $('[data-lvmeta]');
    $('[data-lvdate]').textContent = new Date().toLocaleDateString('de-DE');
    let last = '';
    const lv = (hl) => {
      const rows = SV.filter(([k]) => on[k]);
      lvb.innerHTML = rows.length ? rows.map(([k, n, d, o]) => `<tr${k === hl ? ' class="new"' : ''}><td>${n}</td><td>${o[freq[k]][0]}</td></tr>`).join('') : '<tr class="empty"><td colspan="2">Noch keine Leistungen gewählt</td></tr>';
      const n = rows.reduce((a, [k, , , o]) => a + o[freq[k]][1], 0);
      const el = $('[data-lvn]'); if (String(n) !== last) { last = String(n); el.textContent = n; el.animate && el.animate([{ transform: 'scale(1.25)' }, { transform: 'none' }], { duration: 400 }); }
      const meta = [['Objekt', st.typ], ['Einheiten', st.we + ' · ' + st.th + (st.th === 1 ? ' Treppenhaus' : ' Treppenhäuser')], ['Grünfläche', st.gruen], ['Winterdienst', st.gw ? st.gw + ' m Gehweg & Zugänge' : '–']];
      if (st.extra.size) meta.push(['Außerdem', [...st.extra].join(', ')]);
      if (st.adr) meta.push(['Adresse', st.adr]); if (st.name) meta.push(['Anfrage', st.name + ' (' + st.rolle + ')']); else meta.push(['Anfrage von', st.rolle]);
      lvm.innerHTML = meta.map(([a, b]) => `<dt>${a}</dt><dd>${esc(b)}</dd>`).join('');
    };
    const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
    const text = () => { const rows = SV.filter(([k]) => on[k]); return `Leistungsverzeichnis (Entwurf) – ${new Date().toLocaleDateString('de-DE')}\nObjekt: ${st.typ}, ${st.we} Einheiten, ${st.th} Treppenhäuser\nGrünfläche: ${st.gruen} · Winterdienst: ${st.gw} m\n${st.extra.size ? 'Außerdem: ' + [...st.extra].join(', ') + '\n' : ''}${st.adr ? 'Adresse: ' + st.adr + '\n' : ''}\nLeistungen:\n${rows.map(([k, n, d, o]) => `– ${n}: ${o[freq[k]][0]}`).join('\n')}\n\nAnfrage: ${st.name || '–'} (${st.rolle}) · ${st.mail} ${st.tel}\nStart: ${st.start}`; };
    // Schritte
    let step = 0; const steps = $$('[data-ocs]', oc), lis = $$('.oc-steps li', oc), prev = $('[data-ocprev]', oc), next = $('[data-ocnext]', oc);
    const go = n => { step = n; steps.forEach((s, j) => s.classList.toggle('on', j === n)); lis.forEach((l, j) => { l.classList.toggle('on', j === n); l.classList.toggle('done', j < n); }); prev.disabled = n === 0; next.textContent = n === 3 ? 'Fertig ✓' : 'Weiter →'; if (n === 2) renderSvc(); $('[data-lvact]').hidden = n < 3; if (innerWidth < 900) oc.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
    prev.addEventListener('click', () => go(Math.max(0, step - 1)));
    next.addEventListener('click', () => { if (step < 3) go(step + 1); else { $('[data-lv]').scrollIntoView({ behavior: 'smooth', block: 'start' }); $('.lv-paper').animate([{ transform: 'rotate(-.6deg) scale(1.03)' }, { transform: 'rotate(-.6deg)' }], { duration: 500 }); } });
    // Aktionen
    const f = $('[data-lvform]');
    f.addEventListener('submit', () => { f.querySelector('[name="Leistungsverzeichnis"]').value = text(); f.querySelector('[name="email"]').value = st.mail; f.querySelector('[name="_next"]').value = location.href.split('#')[0].split('?')[0] + '?gesendet=lv#objekt-check'; });
    $('[data-lvwa]').addEventListener('click', () => window.open(H.wa + '?text=' + encodeURIComponent('Hallo Herr Hudalla,\n\n' + text()), '_blank', 'noopener'));
    $('[data-lvprint]').addEventListener('click', () => print());
    if (/gesendet=lv/.test(location.search)) { $('[data-lvsent]').hidden = false; $('[data-lvact]').hidden = false; }
    // Vorauswahl aus anderen Abschnitten
    const MAP = { 'Grünanlagenpflege': 'gruen', 'Reinigung von Gemeinschaftsanlagen': 'treppe', 'Innen- & Außenreinigung': 'glas', 'Winterdienst': 'winter', 'Überwachung der Haustechnik': 'technik', 'Sonderleistungen': 'sonder' };
    $$('[data-addsvc]').forEach(a => a.addEventListener('click', () => { const k = MAP[a.dataset.addsvc]; if (k) { want.add(k); on[k] = true; if (k === 'winter' && !st.gw) st.gw = 40; lv(k); } }));
    defaults(); lv();
  }

  /* ---------- Schaden melden ---------- */
  const dm = $('[data-dmf]');
  if (dm) {
    const fi = $('[data-dmfile]', dm); fi.addEventListener('change', () => { $('[data-dmfn]', dm).textContent = fi.files[0] ? '✓ ' + fi.files[0].name : 'Hilft enorm – gern direkt mit dem Handy'; });
    dm.addEventListener('submit', () => { dm.querySelector('[name="_next"]').value = location.href.split('#')[0].split('?')[0] + '?gesendet=dm#melden'; });
    $('[data-dmwa]', dm).addEventListener('click', () => { const v = n => (dm.querySelector(`[name="${n}"]:checked`) || dm.querySelector(`[name="${n}"]`) || {}).value || ''; const t = `Schadensmeldung: ${v('Kategorie')} (${v('Dringlichkeit')})\nObjekt: ${v('Objekt')}\nWo: ${v('Ort')}\n${v('Beschreibung')}\n\n${v('Name')} · ${v('Rolle')} ${v('Telefon')}`; window.open(H.wa + '?text=' + encodeURIComponent(t), '_blank', 'noopener'); });
    if (/gesendet=dm/.test(location.search)) $('[data-dmsent]', dm).hidden = false;
  }

    /* ---------- Logo-Intro: Ablauf steuert das Inline-Skript hinter dem Intro-Markup ---------- */
  // <html data-hudintro> = run (Pfeile laden) -> reveal (Vorhang öffnet, Ereignis „hud:reveal“) -> off
  const hlogo = $('.hdr .lg-i'), introRun = () => document.documentElement.dataset.hudintro === 'run';
  const afterIntro = fn => { if (introRun()) document.addEventListener('hud:reveal', fn, { once: true }); else fn(); };
  const logoIn = c => { if (!hlogo) return; hlogo.classList.add(c); setTimeout(() => hlogo.classList.remove(c), 1500); };
  if (introRun()) afterIntro(() => setTimeout(() => logoIn('lg-land'), 300)); else logoIn('lg-draw');

  /* ---------- Einsatzbericht ---------- */
  const eb = $('[data-eb]');
  if (eb) {
    const msgs = $$('.msg', eb), ty = $('.typing', eb), st = $('[data-eb-status]', eb);
    if (!RM) {
      eb.classList.add('js-eb'); let run = false;
      const play = async () => {
        run = true; const w = ms => new Promise(r => setTimeout(r, ms));
        for (const m of msgs) {
          if (m.classList.contains('in')) { ty.classList.add('show'); st.textContent = 'schreibt …'; await w(1100); ty.classList.remove('show'); st.textContent = 'online'; }
          else await w(700);
          m.classList.add('show'); await w(900);
        }
      };
      new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting && !run) { play(); o.disconnect(); } }), { threshold: .45 }).observe(eb);
    }
  }

  /* ---------- Ablauf ---------- */
  const ab = $('[data-ab]');
  if (ab) {
    const lis = $$('li', ab);
    const upd = () => { const r = ab.getBoundingClientRect(), vh = innerHeight; const p = Math.max(0, Math.min(1, (vh * .75 - r.top) / (r.height + vh * .2))); ab.parentElement.style.setProperty('--p', p.toFixed(3)); ab.parentElement.classList.toggle('go', p > 0 && p < .99); lis.forEach((l, i) => l.classList.toggle('on', p >= i / (lis.length - 1) - .02 || p > .98)); };
    addEventListener('scroll', upd, { passive: true }); upd();
  }

  /* ---------- Unterschrift ---------- */
  const sig = $('[data-sig]');
  if (sig) new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting) { sig.classList.add('on'); o.disconnect(); } }), { threshold: .6 }).observe(sig.parentElement);

  /* ---------- Animationen ---------- */
  const count = el => { const to = +el.dataset.count; if (RM) return; const t0 = performance.now(); const f = t => { const k = Math.min(1, (t - t0) / 1400); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(f); }; el.textContent = '0'; requestAnimationFrame(f); };
  const cio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { count(e.target); cio.unobserve(e.target); } }), { threshold: .6 });
  $$('[data-count]').forEach(el => cio.observe(el));
  if (window.gsap && !RM) {
    gsap.registerPlugin(ScrollTrigger);
    const heroIn = gsap.from('[data-a]', { y: 34, opacity: 0, duration: 1, ease: 'power3.out', stagger: .09, delay: introRun() ? .2 : .1, paused: introRun() });
    afterIntro(() => heroIn.play());
    $$('.sec-h > *, [data-r], .sv-g, .ja-g, .kg-vis, .eb-v, .wd-live, .oc-g, .dm-f, .map-w, .ko-cards').filter(el => !el.matches('.fw, .wy-g article, .wy-g > a') && !el.closest('[data-r]:not(:scope)')).forEach(el => gsap.from(el, { y: 40, opacity: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }));
    gsap.to('.hero-v .scene-card', { yPercent: 6, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    $$('.fw-g .fw, .wy-g article, .wy-g > a').forEach((el, i) => gsap.from(el, { y: 50, opacity: 0, duration: .8, delay: (i % 4) * .08, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } }));
  }
})();

;(function(){ document.querySelectorAll('[data-role]').forEach(a => a.addEventListener('click', () => { const s = document.querySelector('[data-ocf="rolle"]'); if (s) { s.value = a.dataset.role; s.dispatchEvent(new Event('change', { bubbles: true })); s.dispatchEvent(new Event('input', { bubbles: true })); } })); })();

/* Marke: drei Pfeile – Einflug, Hover-Kopplung, Bus fährt beim Scrollen durch */
(function () {
  var m = document.querySelector('[data-pf3]'); if (!m) return;
  new IntersectionObserver(function (es, o) { es.forEach(function (e) { if (e.isIntersecting) { m.classList.add('in'); o.disconnect(); } }); }, { threshold: .35 }).observe(m);
  var lis = document.querySelectorAll('.pf3-l li'), auto = 0, user = false;
  function hl(k) { m.setAttribute('data-hl', k); lis.forEach(function (l) { l.classList.toggle('on', l.dataset.k === k); }); }
  function clr() { m.removeAttribute('data-hl'); lis.forEach(function (l) { l.classList.remove('on'); }); }
  lis.forEach(function (l) {
    l.addEventListener('mouseenter', function () { user = true; hl(l.dataset.k); });
    l.addEventListener('focus', function () { user = true; hl(l.dataset.k); });
    l.addEventListener('click', function () { user = true; hl(l.dataset.k); });
    l.addEventListener('mouseleave', clr); l.addEventListener('blur', clr);
  });
  // auf Touch-Geräten automatisch durchschalten, solange sichtbar
  var ks = ['r', 'b', 'g'], vis = false;
  new IntersectionObserver(function (es) { vis = es[0].isIntersecting; }, { threshold: .5 }).observe(document.querySelector('.pf3-l'));
  setInterval(function () { if (!vis || user || matchMedia('(hover:hover)').matches) return; hl(ks[auto++ % 3]); }, 2200);
  // Bus
  var road = document.querySelector('[data-pf3road]'), drive = road && road.querySelector('.pf3-drive'), last = 0, tmr;
  if (!road || matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  function upd() {
    var r = road.getBoundingClientRect(), vh = innerHeight;
    var p = (vh - r.top) / (vh + r.height); p = Math.max(0, Math.min(1, p));
    var x = -0.05 + p * 1.1; drive.style.setProperty('--x', x.toFixed(4));
    var moving = Math.abs(p - last) > .0005; last = p;
    road.style.setProperty('--run', moving ? 'running' : 'paused'); drive.style.setProperty('--trail', moving ? '1' : '0');
    clearTimeout(tmr); tmr = setTimeout(function () { road.style.setProperty('--run', 'paused'); drive.style.setProperty('--trail', '0'); }, 160);
  }
  addEventListener('scroll', function () { requestAnimationFrame(upd); }, { passive: true }); upd();
})();

/* Echte Einsätze: Pfeile + Zähler */
(function () {
  var row = document.querySelector('[data-eirow]'); if (!row) return;
  var items = row.querySelectorAll('.ei-c'), cnt = document.querySelector('[data-eicount]');
  function cur() { var c = row.scrollLeft + row.clientWidth / 2, best = 0, bd = 1e9; items.forEach(function (it, i) { var m = it.offsetLeft + it.offsetWidth / 2, d = Math.abs(m - c); if (d < bd) { bd = d; best = i; } }); return best; }
  row.addEventListener('scroll', function () { if (cnt) cnt.textContent = (cur() + 1) + ' / ' + items.length; }, { passive: true });
  document.querySelectorAll('[data-eistep]').forEach(function (b) { b.addEventListener('click', function () { var i = Math.max(0, Math.min(items.length - 1, cur() + +b.dataset.eistep)); var it = items[i]; row.scrollTo({ left: it.offsetLeft - (row.clientWidth - it.offsetWidth) / 2, behavior: 'smooth' }); }); });
})();

/* Zu zweit unterwegs: Bus fährt beim Scrollen von rechts nach links durch die Orte */
(function () {
  var road = document.querySelector('[data-cproad]'), drive = road && road.querySelector('[data-cpdrive]');
  if (!road || !drive || matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  var signs = road.querySelectorAll('.cp-sign'), town = road.querySelector('[data-cptown]'), last = -1, tmr;
  function upd() {
    var r = road.getBoundingClientRect(), vh = innerHeight;
    var p = (vh - r.top) / (vh + r.height); p = Math.max(0, Math.min(1, p));
    var W = road.clientWidth, w = drive.offsetWidth;
    var x = W - p * (W + w * 0.6) * 1.05;
    drive.style.setProperty('--vx', x.toFixed(1) + 'px');
    var nose = (x + w * 0.04) / W, name = null;
    signs.forEach(function (s) { var on = nose <= parseFloat(s.dataset.sx) + 0.02; s.classList.toggle('on', on); if (on && getComputedStyle(s).display !== 'none') name = s.textContent; });
    if (name && town) town.textContent = name;
    var moving = last >= 0 && Math.abs(p - last) > .0004; last = p;
    if (moving) { road.style.setProperty('--run', 'running'); drive.style.setProperty('--wind', '1'); clearTimeout(tmr); tmr = setTimeout(function () { road.style.setProperty('--run', 'paused'); drive.style.setProperty('--wind', '0'); }, 180); }
  }
  addEventListener('scroll', function () { requestAnimationFrame(upd); }, { passive: true }); addEventListener('resize', upd); upd();
})();

/* Cookie-Banner: ein Hund, keine Tracker. Merkt sich nur für diese Sitzung, dass er weggeklickt wurde. */
(function () {
  var ck = document.querySelector('[data-ck]'); if (!ck) return;
  var seen = false; try { seen = sessionStorage.getItem('ck-cookie') === '1'; } catch (e) {}
  if (seen) return;
  var shown = false;
  function show() { if (shown) return; shown = true; ck.hidden = false; requestAnimationFrame(function () { requestAnimationFrame(function () { ck.classList.add('show'); }); }); }
  var team = document.getElementById('team');
  if (team && 'IntersectionObserver' in window) new IntersectionObserver(function (es, o) { if (es[0].isIntersecting) { o.disconnect(); show(); } }, { threshold: .25 }).observe(team);
  setTimeout(function () { if (scrollY > innerHeight * 1.5) show(); }, 25000);
  function close(msg) {
    var m = ck.querySelector('[data-ck-msg]'); m.textContent = msg; m.hidden = false; ck.classList.add('wag');
    try { sessionStorage.setItem('ck-cookie', '1'); } catch (e) {}
    setTimeout(function () { ck.classList.remove('show'); setTimeout(function () { ck.hidden = true; }, 600); }, 1600);
  }
  ck.querySelector('[data-ck-yes]').addEventListener('click', function () { close('Wuff! Cookie freut sich. 🐾'); });
  ck.querySelector('[data-ck-no]').addEventListener('click', function () { close('Gute Wahl – Cookie ist notwendig. 🐾'); });
})();

/* Wuff-Blase am Bus, wenn er an einem Ortsschild vorbeifährt */
(function () {
  var b = document.querySelector('[data-cpbubble]'), road = document.querySelector('[data-cproad]'), drive = road && road.querySelector('[data-cpdrive]');
  if (!b || !drive) return; var lastTown = '', t;
  var town = road.querySelector('[data-cptown]');
  new MutationObserver(function () { var n = town.textContent; if (n === lastTown) return; lastTown = n; var r = drive.getBoundingClientRect(), rr = road.getBoundingClientRect(); b.style.setProperty('--bx', (r.left - rr.left + r.width * .38) + 'px'); b.textContent = ['Wuff!', 'Wuff wuff!', 'Da vorne!', 'Fast da!', 'Wuff!'][Math.floor(Math.random() * 5)]; b.classList.add('on'); clearTimeout(t); t = setTimeout(function () { b.classList.remove('on'); }, 1100); }).observe(town, { childList: true, characterData: true, subtree: true });
})();

/* ===================== Review 16.10. ===================== */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); }, $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches, HOVER = matchMedia('(hover:hover)').matches;
  var raf = function (f) { var q = false; return function () { if (q) return; q = true; requestAnimationFrame(function () { q = false; f(); }); }; };

  /* Entwurfs-Hinweis: nach dem Hero nur noch kleiner Chip */
  var cc = $('[data-concept]');
  if (cc) { var ccu = raf(function () { cc.classList.toggle('mini', scrollY > innerHeight * .55); }); addEventListener('scroll', ccu, { passive: true }); ccu(); }

  /* Erreichbarkeit: Mo–Fr 8–17 Uhr (Zeit in Nieder-Olm) */
  (function () {
    var now; try { var f = new Intl.DateTimeFormat('de-DE', { timeZone: 'Europe/Berlin', weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date()); var g = {}; f.forEach(function (p) { g[p.type] = p.value; }); now = { d: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].indexOf(g.weekday.replace('.', '')) + 1, h: +g.hour + (+g.minute) / 60 }; } catch (e) { return; }
    if (!now.d) return;
    var open = now.d <= 5 && now.h >= 8 && now.h < 17;
    var next = now.d <= 5 && now.h < 8 ? 'heute ab 8 Uhr' : (now.d <= 4 ? 'morgen ab 8 Uhr' : 'Montag ab 8 Uhr');
    var live = $('[data-live]'), ko = $('[data-now]');
    if (live) { live.classList.toggle('off', !open); $('span', live).textContent = open ? 'Jetzt erreichbar' : 'Erreichbar ' + next; }
    if (ko) { ko.classList.toggle('off', !open); $('span', ko).innerHTML = open ? '<b>Jetzt erreichbar</b> – Mo–Fr 8–17 Uhr direkt beim Chef.' : '<b>Gerade außerhalb der Zeiten</b> – erreichbar ' + next + '. Im Notfall trotzdem anrufen.'; }
  })();

  /* Für wen: Lichtkegel folgt der Maus */
  if (HOVER) $$('.fw').forEach(function (c) { c.addEventListener('pointermove', function (e) { var r = c.getBoundingClientRect(); c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px'); }); });

  /* Marke: beim Scrollen leuchtet der passende Pfeil (Desktop) */
  var mk = $('[data-pf3]'), pl = $$('.pf3-l li');
  if (mk && pl.length && HOVER && 'IntersectionObserver' in window) {
    var hov = false; pl.forEach(function (l) { l.addEventListener('mouseenter', function () { hov = true; }); l.addEventListener('mouseleave', function () { hov = false; }); });
    var cur = null;
    var pio = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) cur = e.target; else if (cur === e.target) cur = null; });
      if (hov) return;
      if (cur) { mk.setAttribute('data-hl', cur.dataset.k); pl.forEach(function (l) { l.classList.toggle('on', l === cur); }); }
      else { mk.removeAttribute('data-hl'); pl.forEach(function (l) { l.classList.remove('on'); }); }
    }, { rootMargin: '-42% 0px -42% 0px' });
    pl.forEach(function (l) { pio.observe(l); });
  }

  /* Kontrollgang: Taschenlampe zum aktiven Punkt */
  var kh = $('[data-kghouse]');
  if (kh) {
    var aim = function () { var h = $('.hot.on', kh); if (!h) return; kh.style.setProperty('--sx', h.style.getPropertyValue('--x').trim()); kh.style.setProperty('--sy', h.style.getPropertyValue('--y').trim()); };
    new MutationObserver(aim).observe(kh, { subtree: true, attributes: true, attributeFilter: ['class'] });
    new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { aim(); kh.classList.add('lit'); } }); }, { threshold: .35 }).observe(kh);
    aim();
  }

  /* Rückmeldung: Haken werden blau, sobald der Verwalter antwortet */
  var ebc = $('[data-eb-chat]');
  if (ebc) {
    var ins = $$('.msg.in', ebc), out = $('.msg.out', ebc);
    var read = function () { ins.forEach(function (m, i) { setTimeout(function () { m.classList.add('read'); }, i * 120); }); };
    if (RM || !$('.js-eb')) read();
    else if (out) new MutationObserver(function (ms, o) { if (out.classList.contains('show')) { o.disconnect(); setTimeout(read, 250); } }).observe(out, { attributes: true, attributeFilter: ['class'] });
  }

  /* Winterdienst: Saison-Leiste nach aktuellem Monat */
  var sea = $('[data-wxsea]');
  if (sea) {
    var m = new Date().getMonth(), lis = $$('li', sea), t = $('[data-wxseat]');
    var inS = m >= 10 || m <= 2;
    lis.forEach(function (l) { l.classList.toggle('now', inS && +l.dataset.m === m); l.classList.toggle('next', !inS && l.dataset.m === '10'); });
    t.textContent = inS ? (m === 2 ? 'Jetzt in Bereitschaft – bis zum Saisonende. Danach wird das Streugut wieder entfernt.' : 'Jetzt in Bereitschaft – die ganze Saison, bei jedem Wetter.')
      : (m === 9 ? 'Oktober: Streugut und Geräte werden bereitgestellt – ab November in Bereitschaft.' : (m === 8 ? 'September: Die Touren für den Winter werden geplant – ab November in Bereitschaft.' : 'Sommerpause – ab November wieder in Bereitschaft.'));
  }

  /* Objekt-Check: Stempel beim Klick auf „Fertig“ */
  var oc = $('[data-oc]'), stamp = $('[data-lvstamp]');
  if (oc && stamp) {
    var last = $('[data-ocs="3"]', oc), was = false;
    oc.addEventListener('click', function (e) { if (e.target.closest('[data-ocnext]')) was = last.classList.contains('on'); }, true);
    $('[data-ocnext]', oc).addEventListener('click', function () { if (was) { stamp.classList.remove('on'); void stamp.offsetWidth; stamp.classList.add('on'); } });
    $('[data-ocprev]', oc).addEventListener('click', function () { stamp.classList.remove('on'); });
  }

  /* Schaden melden: „Heute“ = Notfall-Hinweis + Notfallkarte leuchtet */
  var dmf = $('[data-dmf]');
  if (dmf) {
    var hint = $('[data-dmhint]'), sos = $('[data-sos]');
    dmf.addEventListener('change', function (e) {
      if (e.target.name !== 'Dringlichkeit') return;
      var urgent = /Notfall/.test(e.target.value);
      hint.hidden = !urgent; sos && sos.classList.toggle('alert', urgent);
    });
  }

  /* Leistungen: Fotos vorladen, sobald der Abschnitt nahe ist */
  var svs = $('#leistungen');
  if (svs) new IntersectionObserver(function (es, o) { if (es[0].isIntersecting) { $$('.sv-media img', svs).forEach(function (i) { i.loading = 'eager'; }); o.disconnect(); } }, { rootMargin: '600px' }).observe(svs);

  /* Echte Einsätze: Fortschritt, Ziehen mit der Maus, Großansicht */
  var row = $('[data-eirow]');
  if (row) {
    var items = $$('.ei-c', row), prog = $('[data-eiprog]');
    var up = raf(function () { var max = row.scrollWidth - row.clientWidth; var p = max > 0 ? row.scrollLeft / max : 0; prog && prog.style.setProperty('--w', (7 + p * 93).toFixed(1) + '%'); });
    row.addEventListener('scroll', up, { passive: true }); up();
    var dn = null, moved = 0;
    row.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse' || e.button !== 0) return; dn = { x: e.clientX, l: row.scrollLeft }; moved = 0; });
    addEventListener('pointermove', function (e) { if (!dn) return; var dx = e.clientX - dn.x; if (Math.abs(dx) > 4) { moved = Math.abs(dx); row.classList.add('drag'); row.scrollLeft = dn.l - dx; } });
    addEventListener('pointerup', function () { if (!dn) return; dn = null; if (row.classList.contains('drag')) { row.classList.remove('drag'); var c = row.scrollLeft + row.clientWidth / 2, best = items[0], bd = 1e9; items.forEach(function (it) { var d = Math.abs(it.offsetLeft + it.offsetWidth / 2 - c); if (d < bd) { bd = d; best = it; } }); row.scrollTo({ left: best.offsetLeft - (row.clientWidth - best.offsetWidth) / 2, behavior: RM ? 'auto' : 'smooth' }); } });
    row.addEventListener('dragstart', function (e) { e.preventDefault(); });
    var lb = $('[data-lb]'), li = $('[data-lbimg]'), k = 0, back = null;
    var showLb = function (n) { k = (n + items.length) % items.length; var im = $('img', items[k]), cap = $('figcaption', items[k]); li.src = im.currentSrc || im.src; li.alt = im.alt; $('[data-lbt]').textContent = $('b', cap).textContent; $('[data-lbd]').textContent = $('span', cap).textContent; $('[data-lbc]').textContent = (k + 1) + ' / ' + items.length; li.style.animation = 'none'; void li.offsetWidth; li.style.animation = ''; };
    var openLb = function (n) { back = document.activeElement; showLb(n); lb.hidden = false; document.documentElement.style.overflow = 'hidden'; $('[data-lbx]').focus(); };
    var closeLb = function () { lb.hidden = true; document.documentElement.style.overflow = ''; var it = items[k]; row.scrollTo({ left: it.offsetLeft - (row.clientWidth - it.offsetWidth) / 2 }); back && back.focus && back.focus(); };
    items.forEach(function (it, i) { var f = $('figure', it); f.tabIndex = 0; f.setAttribute('role', 'button'); f.setAttribute('aria-label', 'Großansicht: ' + $('b', it).textContent); f.addEventListener('click', function () { if (moved > 6) { moved = 0; return; } openLb(i); }); f.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(i); } }); });
    $('[data-lbx]').addEventListener('click', closeLb);
    $$('[data-lbs]').forEach(function (b) { b.addEventListener('click', function (e) { e.stopPropagation(); showLb(k + +b.dataset.lbs); }); });
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
    addEventListener('keydown', function (e) { if (lb.hidden) return; if (e.key === 'Escape') closeLb(); else if (e.key === 'ArrowRight') showLb(k + 1); else if (e.key === 'ArrowLeft') showLb(k - 1); else if (e.key === 'Tab') { var f = $$('button', lb); var i = f.indexOf(document.activeElement); if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); } else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); } } });
    var sx = null; lb.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true }); lb.addEventListener('touchend', function (e) { if (sx === null) return; var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) showLb(k + (dx < 0 ? 1 : -1)); sx = null; });
  }

  /* Bewertungen: Sterne laufen beim Einblenden voll */
  if (!RM && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('pre-stars');
    var so = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { var t = e.target.matches('.ko-rate') ? $('.stars', e.target) : e.target; t && t.classList.add('in'); so.unobserve(e.target); } }); }, { threshold: .25 });
    $$('#stimmen, .ko-rate').forEach(function (el) { so.observe(el); });
  }

  /* Einsatzgebiet: Wege zeichnen, Ort antippen = Weg leuchtet */
  var mw = $('.map-w');
  if (mw) {
    new IntersectionObserver(function (es, o) { if (es[0].isIntersecting) { mw.classList.add('in'); o.disconnect(); } }, { threshold: .35 }).observe(mw);
    var hl = function (n) { $$('.rt', mw).forEach(function (r) { r.classList.toggle('hi', r.dataset.rt === n); }); $$('[data-town]', mw).forEach(function (t) { t.classList.toggle('hi', t.dataset.town === n); }); };
    $$('[data-town]', mw).forEach(function (t) { t.addEventListener('mouseenter', function () { hl(t.dataset.town); }); t.addEventListener('mouseleave', function () { hl(null); }); t.addEventListener('click', function () { hl(t.classList.contains('hi') ? null : t.dataset.town); }); });
  }
})();
