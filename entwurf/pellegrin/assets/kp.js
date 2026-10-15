/* Küchenplaner „Ziehen & Planen" – Entwurf Falcon Eye
   Einfach: Form wählen, Schränke in die Wand ziehen, Stil antippen, absenden. Live in 3D. */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = $('[data-kp]'); if (!root) return;
  const D_ = root.dataset, MAIL = D_.mail, WA = D_.wa, STUDIO = D_.studio || 'Küchenstudio', GREET = D_.greet || 'Hallo', ACC = D_.acc || '#c0673f', PERSON = D_.person || 'Wir';

  /* ---------------- Bausteine ---------------- */
  // h: Höhe-Typ (b = Unterschrank, t = Hochschrank)
  const M = {
    us: { n: 'Unterschrank', s: 'Schubladen', w: 60, ws: [30, 40, 45, 50, 60, 80, 90, 100, 120], h: 'b', ic: 'Schubladen' },
    ut: { n: 'Unterschrank', s: 'mit Tür', w: 60, ws: [30, 40, 45, 50, 60], h: 'b', ic: 'Tür' },
    sp: { n: 'Spüle', s: 'mit Armatur', w: 80, ws: [60, 80, 90, 100, 120], h: 'b' },
    kf: { n: 'Kochfeld', s: 'Auszüge darunter', w: 80, ws: [60, 80, 90, 120], h: 'b' },
    ko: { n: 'Herd', s: 'Kochfeld + Backofen', w: 60, ws: [60, 90], h: 'b' },
    gs: { n: 'Spülmaschine', s: 'vollintegriert', w: 60, ws: [45, 60], h: 'b' },
    bo: { n: 'Backofen', s: 'auf Augenhöhe', w: 60, ws: [60], h: 't' },
    kue: { n: 'Kühlschrank', s: 'Kühl-Gefrier-Kombi', w: 60, ws: [60], h: 't' },
    vo: { n: 'Hochschrank', s: 'Vorrat', w: 60, ws: [30, 40, 45, 50, 60], h: 't' },
  };
  const PAL = ['us', 'ut', 'sp', 'kf', 'ko', 'gs', 'bo', 'kue', 'vo'];
  const FORMS = {
    zeile: { n: 'Küchenzeile', walls: ['N'], d: 'Alles an einer Wand', p: 'M6 6h52v10H6z' },
    l: { n: 'L-Küche', walls: ['W', 'N'], d: 'Über Eck', p: 'M6 6h52v10H16v28H6z' },
    u: { n: 'U-Küche', walls: ['W', 'N', 'E'], d: 'Drei Seiten', p: 'M6 6h52v28H48V16H16v18H6z' },
    zwei: { n: 'Zweizeilig', walls: ['N', 'S'], d: 'Zwei gegenüber', p: 'M6 6h52v10H6zM6 30h52v10H6z' },
    insel: { n: 'Mit Insel', walls: ['N'], island: 1, d: 'Zeile + Kochinsel', p: 'M6 6h52v10H6zM18 26h28v10H18z' },
  };
  const WN = { N: 'Rückwand', W: 'Linke Wand', E: 'Rechte Wand', S: 'Gegenüber' };
  const FRONTS = [['Weiß', '#f1eee8'], ['Kaschmir', '#d9cfbf'], ['Salbei', '#7f8e77'], ['Nachtblau', '#22304a'], ['Graphit', '#45474b'], ['Schwarz', '#232426'], ['Eiche', 'wood:eiche'], ['Nussbaum', 'wood:nuss']];
  const HANDLES = [['grifflos', 'Grifflos'], ['bar', 'Edelstahl'], ['schwarz', 'Schwarz'], ['gold', 'Messing']];
  const TOPS = [['eiche', 'Eiche', '#b98a5c'], ['keramik', 'Stein hell', '#e7e4de'], ['beton', 'Beton', '#9b9893'], ['marmor', 'Marmor dunkel', '#1d1d1f']];
  const WOOD = { eiche: '#c39a6b', nuss: '#76553b' };
  const FINISHES = [['matt', 'Matt'], ['seide', 'Seidenmatt'], ['glanz', 'Hochglanz']];
  const BACKS = [['wand', 'Wandfarbe'], ['platte', 'Wie Arbeitsplatte'], ['fliese', 'Metro-Fliesen'], ['glas', 'Glas in Frontfarbe']];
  const WALLC = [['Kalkweiß', '#f3efe9'], ['Sand', '#e6dccb'], ['Salbeigrau', '#d3d7cb'], ['Taubenblau', '#cdd5de'], ['Terrakotta', '#e2c2ab'], ['Anthrazit', '#5a5c5f']];
  const FLOORS = [['eiche', 'Eiche hell', '#c9a77f'], ['dunkel', 'Holz dunkel', '#5c4330'], ['hell', 'Fliese hell', '#e8e4dd'], ['grau', 'Fliese grau', '#a7a49f']];
  const OPN = { fenster: 'Fenster', balkon: 'Balkontür', tuer: 'Tür' };
  const OPW = { fenster: [50, 60, 80, 100, 120, 140, 160, 180, 200, 240], balkon: [80, 100, 120, 160, 200, 240], tuer: [80, 90, 100, 110, 125] };
  const HCOL = { bar: '#b9bcbf', schwarz: '#141414', gold: '#b08a4a' };

  /* ---------------- Zustand ---------------- */
  let P = null, uid = 1;
  const mk = (t, w) => ({ id: uid++, t, w: w || M[t].w });
  function fresh(form, keep) {
    const f = FORMS[form], old = keep || {};
    const room = old.room || { w: 480, d: form === 'insel' ? 420 : form === 'zwei' ? 300 : 380 };
    if (form === 'insel' && room.d < 380) room.d = 420;
    const p = { ah: (old && old.ah) || (P && P.ah) || 90, form, room, rows: {}, top: {}, op: [], island: { w: 180, v: 'kochfeld' }, style: old.style || { front: '#f1eee8', wood: null, handle: 'grifflos', top: 'eiche', finish: 'matt', wall: '#f3efe9', floor: 'eiche' } };
    f.walls.forEach(w => { p.rows[w] = []; p.top[w] = w === 'N' || form === 'zwei' ? 1 : 0; });
    const seq = {
      zeile: { N: [['kue'], ['bo'], ['us'], ['kf'], ['us', 80], ['sp'], ['gs']] },
      l: { W: [['kue'], ['bo'], ['us']], N: [['us', 90], ['kf'], ['us'], ['sp'], ['gs']] },
      u: { W: [['kue'], ['bo'], ['us']], N: [['us', 60], ['sp'], ['gs'], ['us']], E: [['us'], ['kf'], ['us']] },
      zwei: { N: [['kue'], ['bo'], ['us'], ['sp'], ['gs']], S: [['us'], ['kf'], ['us', 80]] },
      insel: { N: [['kue'], ['bo'], ['vo'], ['us'], ['sp'], ['gs']] },
    }[form];
    P = p;
    for (const w in seq) { seq[w].forEach(([t, wd]) => P.rows[w].push(mk(t, wd))); fillRest(w); }
    // Fenster mittig über der Spüle (falls auf Rückwand), sonst mittig
    const sp = locate('N', P.rows.N.findIndex(m => m.t === 'sp'));
    const L = wallLen('N'), win = { id: uid++, t: 'fenster', wall: 'N', w: 120, s: 0 }; win.s = clampOp(win, sp ? sp.x0 + sp.w / 2 - 60 : L / 2 - 60);
    P.op = [win, defaultDoor()];
    return P;
  }
  const wallLen = w => (w === 'N' || w === 'S') ? P.room.w : P.room.d;
  function range(w) { const L = wallLen(w), hasN = !!P.rows.N; if (w === 'W') return [0, L - (hasN ? 60 : 0)]; if (w === 'E') return [hasN ? 60 : 0, L]; return [0, L]; }
  const used = w => P.rows[w].reduce((a, m) => a + m.w, 0);
  const free = w => { const [a, b] = range(w); return b - a - used(w); };
  function fillRest(w) { let f = free(w); const R = [120, 100, 90, 80, 60, 50, 45, 40, 30]; while (f >= 30) { const x = R.find(v => v <= f); P.rows[w].push(mk('us', x)); f -= x; } }
  function locate(w, i) { if (!P.rows[w] || i < 0) return null; let x = range(w)[0]; for (let j = 0; j < i; j++) x += P.rows[w][j].w; return { x0: x, w: P.rows[w][i].w }; }
  const clampOp = (o, s) => { const m = o.t === 'fenster' ? 10 : 5; return Math.round(Math.max(m, Math.min(wallLen(o.wall) - o.w - m, s)) / 5) * 5; };
  const opById = id => P.op.find(o => o.id === id);
  function defaultDoor() { const dw = ['E', 'S', 'W'].find(w => !P.rows[w]) || 'S'; return { id: uid++, t: 'tuer', wall: dw, w: 90, s: Math.max(20, Math.round(wallLen(dw) / 2 - 45)) }; }
  const opOver = (o, x0, w, pad = 2) => x0 + w > o.s + pad && x0 < o.s + o.w - pad;

  /* ---------------- Ansichtszeichnung (SVG, cm) ---------------- */
  const H = 260, FL = 260; // Raumhöhe, Boden-y
  const fcol = () => P.style.wood ? WOOD[P.style.wood] : P.style.front;
  function lum(hex) { const n = parseInt(hex.slice(1), 16); return ((n >> 16) * .3 + ((n >> 8) & 255) * .59 + (n & 255) * .11) / 255; }
  function shade(hex, a) { const n = parseInt(hex.slice(1), 16); const f = v => Math.max(0, Math.min(255, Math.round(v + a * (a < 0 ? v : 255 - v)))); return '#' + ((1 << 24) + (f(n >> 16) << 16) + (f((n >> 8) & 255) << 8) + f(n & 255)).toString(16).slice(1); }
  const topCol = () => TOPS.find(t => t[0] === P.style.top)[2];
  // eine Front (x, y oben, Breite, Höhe), Griff je nach Stil; v = senkrechter Griff
  function front(x, y, w, h, o = {}) {
    const F = o.fill || fcol(), str = lum(F) > .5 ? 'rgba(0,0,0,.28)' : 'rgba(255,255,255,.16)';
    let s = `<rect x="${x + .4}" y="${y + .4}" width="${w - .8}" height="${h - .8}" rx=".8" fill="${F}" stroke="${str}" stroke-width=".5"${P.style.wood && !o.fill ? ' filter="url(#kpgrain)"' : ''}/>`;
    if (o.noH) return s;
    const hs = P.style.handle;
    if (hs === 'grifflos') s += `<rect x="${x + .4}" y="${y + .4}" width="${w - .8}" height="1.6" fill="${shade(F, -.35)}" opacity=".85"/>`;
    else if (o.v) { const hl = Math.min(o.hl || 34, h * .42), hy = o.vpos === 'top' ? y + 6 : y + h - 6 - hl; s += `<rect x="${o.side < 0 ? x + 4 : x + w - 6}" y="${hy}" width="2" height="${hl}" rx="1" fill="${HCOL[hs]}"/>`; }
    else s += `<rect x="${x + w / 2 - Math.min(16, w * .3)}" y="${y + 4}" width="${Math.min(32, w * .6)}" height="1.8" rx=".9" fill="${HCOL[hs]}"/>`;
    return s;
  }
  function baseBox(x, w, parts, o = {}) {
    // Sockel 10, Korpus bis 86, Platte 86–90
    const dh = (P.ah || 90) - 90;
    let s = `<rect x="${x}" y="${FL - 10}" width="${w}" height="${10 + dh}" fill="#2b2b2b"/>`;
    let y = FL - 86; const hh = 76;
    parts.forEach(p => { s += front(x, y, w, hh * p, o); y += hh * p; });
    s += `<rect x="${x - .3}" y="${FL - 90}" width="${w + .6}" height="4" fill="${topCol()}" stroke="rgba(0,0,0,.25)" stroke-width=".4"/>`;
    return s;
  }
  function elev(m, x) {
    const w = m.w, t = m.t; let s = '';
    if (M[t].h === 'b') { const dh = (P && P.ah || 90) - 90; if (dh) return `<g transform="translate(0 ${-dh})">${elevRaw(m, x)}</g>`; }
    return elevRaw(m, x);
  }
  function elevRaw(m, x) {
    const w = m.w, t = m.t; let s = '';
    if (t === 'us') s = baseBox(x, w, w < 40 ? [1] : [.24, .38, .38]);
    else if (t === 'ut') s = baseBox(x, w, [.2, .8]);
    else if (t === 'sp') { s = baseBox(x, w, w >= 80 ? [1] : [1], {}); if (w >= 80) s += `<line x1="${x + w / 2}" y1="${FL - 86}" x2="${x + w / 2}" y2="${FL - 10}" stroke="rgba(0,0,0,.25)" stroke-width=".6"/>`; const cx = x + w / 2; s += `<path d="M${cx - 3} ${FL - 90}v-20q0-7 7-7h4q5 0 5 5v4" fill="none" stroke="#8d9296" stroke-width="2.2" stroke-linecap="round"/><rect x="${cx - 22}" y="${FL - 91.4}" width="44" height="1.6" rx=".8" fill="#5d6266"/>`; }
    else if (t === 'kf') { s = baseBox(x, w, [.3, .35, .35]); s += `<rect x="${x + 6}" y="${FL - 91.2}" width="${w - 12}" height="1.6" fill="#0d0d0e"/>`; }
    else if (t === 'ko') { s = baseBox(x, w, [.18, .82]); const y = FL - 86 + 76 * .18; s += `<rect x="${x + 5}" y="${y + 9}" width="${w - 10}" height="${76 * .82 - 16}" rx="2" fill="#141516"/><rect x="${x + 9}" y="${y + 13}" width="${w - 18}" height="${76 * .82 - 26}" rx="1.5" fill="#24272a"/><rect x="${x + 8}" y="${y + 4}" width="${w - 16}" height="2" rx="1" fill="#b9bcbf"/><rect x="${x + 6}" y="${FL - 91.2}" width="${w - 12}" height="1.6" fill="#0d0d0e"/>`; }
    else if (t === 'gs') s = baseBox(x, w, [1], { noH: P.style.handle === 'grifflos' }) + `<text x="${x + w / 2}" y="${FL - 46}" font-size="6" text-anchor="middle" fill="${lum(fcol()) > .5 ? 'rgba(0,0,0,.22)' : 'rgba(255,255,255,.22)'}" font-family="system-ui">GS</text>`;
    else { // Hochschränke 216
      const top = FL - 216; s = `<rect x="${x}" y="${FL - 10}" width="${w}" height="10" fill="#2b2b2b"/>`;
      if (t === 'bo') { s += front(x, FL - 80, w, 35) + front(x, FL - 45, w, 35); s += `<rect x="${x + 2}" y="${FL - 140}" width="${w - 4}" height="58" rx="2" fill="#141516"/><rect x="${x + 6}" y="${FL - 130}" width="${w - 12}" height="44" rx="1.5" fill="#26292c"/><rect x="${x + 8}" y="${FL - 137}" width="${w - 16}" height="2" rx="1" fill="#b9bcbf"/>`; s += front(x, top, w, FL - 142 - top, { v: 1, vpos: 'bottom', hl: 26 }); }
      else if (t === 'kue') { s += front(x, top, w, 124, { v: 1, side: -1, vpos: 'bottom' }) + front(x, top + 124, w, 82, { v: 1, side: -1, vpos: 'top' }); }
      else s += front(x, top, w, 103, { v: 1, vpos: 'bottom' }) + front(x, top + 103, w, 103, { v: 1, vpos: 'top' });
    }
    return s;
  }
  function wallCab(x, w, kind) {
    if (kind === 'hood') { const cx = x + w / 2; return `<path d="M${cx - 9} ${FL - 260}h18v${260 - 168}h-18z" fill="#c7cacd" stroke="rgba(0,0,0,.2)" stroke-width=".5"/><path d="M${cx - Math.min(45, w / 2)} ${FL - 160}h${Math.min(90, w)}l-6 -8h${-Math.min(90, w) + 12}z" fill="#b3b7ba" stroke="rgba(0,0,0,.2)" stroke-width=".5"/>`; }
    const y = FL - 217; return front(x, y, w, 72, { v: 1, vpos: 'bottom', hl: 20 }) + `<rect x="${x + 2}" y="${FL - 145.5}" width="${w - 4}" height="1.2" fill="#fff3d0" opacity=".9"/>`;
  }
  // Was kommt über ein Modul?
  function overKind(w, m, x0) {
    if (M[m.t].h === 't') return null;
    if (m.t === 'kf' || m.t === 'ko') return 'hood';
    if (!P.top[w]) return null;
    if (P.op.some(o => o.wall === w && opOver(o, x0, m.w))) return null;
    return 'cab';
  }
  function drawWall(w, opt = {}) {
    const L = wallLen(w), [a, b] = range(w), rowsW = P.rows[w];
    const flc = (FLOORS.find(f => f[0] === P.style.floor) || FLOORS[0])[2];
    let s = `<rect x="0" y="0" width="${L}" height="${H}" fill="${P.style.wall || '#f3efe9'}"/><rect x="0" y="${FL}" width="${L}" height="6" fill="${flc}"/>`;
    P.op.filter(o => o.wall === w).forEach(o => { s += opElev(o, opt.selOp === o.id); });
    s += backsplash(w);
    // Ecken
    if (a > 0) s += corner(0, a);
    if (b < L) s += corner(b, L - b);
    let x = a; const sel = opt.sel;
    rowsW.forEach((m, i) => {
      const k = overKind(w, m, x);
      if (k) s += `<g pointer-events="none">${wallCab(x, m.w, k)}</g>`;
      s += `<g data-m="${m.id}" class="kp-m${sel === m.id ? ' on' : ''}"${opt.ghost === m.id ? ' opacity=".25"' : ''}>${elev(m, x)}<rect class="kp-hit" x="${x}" y="${M[m.t].h === 't' ? FL - 216 : FL - 92}" width="${m.w}" height="${M[m.t].h === 't' ? 216 : 92}" fill="transparent"/></g>`;
      x += m.w;
    });
    const fr = b - x;
    if (fr >= 1) s += `<g class="kp-free"><rect x="${x + 1}" y="${FL - 89}" width="${fr - 2}" height="88" rx="2" fill="rgba(255,255,255,.4)" stroke="${ACC}" stroke-dasharray="3 2.4" stroke-width=".8"/>${fr >= 28 ? `<text x="${x + fr / 2}" y="${FL - 42}" font-size="${Math.min(8, fr / 5)}" text-anchor="middle" fill="${ACC}" font-family="system-ui" font-weight="700">frei ${Math.round(fr)}</text>` : ''}</g>`;
    if (fr < -0.5) s += `<rect x="${b}" y="${FL - 92}" width="${Math.min(-fr, 400)}" height="92" fill="rgba(208,40,40,.25)" stroke="#d02828" stroke-width=".8"/>`;
    // Maßlinie
    s += `<g font-family="system-ui" font-size="7" fill="#6e655b" text-anchor="middle"><line x1="0" y1="${FL + 12}" x2="${L}" y2="${FL + 12}" stroke="#a99d8f" stroke-width=".5"/><text x="${L / 2}" y="${FL + 21}">${WN[w]} · ${L} cm</text></g>`;
    return s;
  }
  function opElev(o, on) {
    const x = o.s, w = o.w, hi = on ? `<rect x="${x - 6}" y="${FL - (o.t === 'fenster' ? 226 : 226)}" width="${w + 12}" height="${o.t === 'fenster' ? 127 : 226}" rx="3" fill="none" stroke="${ACC}" stroke-width="1.6" stroke-dasharray="4 3"/>` : '';
    let g = '';
    if (o.t === 'fenster') g = `<rect x="${x - 3}" y="${FL - 223}" width="${w + 6}" height="121" fill="#fff" stroke="rgba(0,0,0,.15)" stroke-width=".6"/><rect x="${x}" y="${FL - 220}" width="${w}" height="115" fill="url(#kpsky)"/>${w > 90 ? `<line x1="${x + w / 2}" y1="${FL - 220}" x2="${x + w / 2}" y2="${FL - 105}" stroke="#fff" stroke-width="2.4"/>` : ''}<rect x="${x - 5}" y="${FL - 106}" width="${w + 10}" height="3" fill="#e6e1d9"/>`;
    else if (o.t === 'balkon') g = `<rect x="${x - 3}" y="${FL - 223}" width="${w + 6}" height="223" fill="#fff" stroke="rgba(0,0,0,.15)" stroke-width=".6"/><rect x="${x}" y="${FL - 220}" width="${w}" height="217" fill="url(#kpsky)"/>${w > 90 ? `<line x1="${x + w / 2}" y1="${FL - 220}" x2="${x + w / 2}" y2="${FL - 3}" stroke="#fff" stroke-width="2.4"/>` : ''}<rect x="${x + w - 9}" y="${FL - 110}" width="2" height="12" rx="1" fill="#9aa0a5"/>`;
    else g = `<rect x="${x - 4}" y="${FL - 209}" width="${w + 8}" height="209" fill="#fff" stroke="rgba(0,0,0,.18)" stroke-width=".6"/><rect x="${x}" y="${FL - 205}" width="${w}" height="205" fill="#ddd6cb" stroke="rgba(0,0,0,.12)" stroke-width=".5"/><rect x="${x + w - 13}" y="${FL - 106}" width="9" height="2.2" rx="1" fill="#8d9296"/>`;
    return `<g data-op="${o.id}" class="kp-op" style="cursor:ew-resize">${g}${hi}</g>`;
  }
  // Nischenrückwand zwischen Arbeitsplatte und Hängeschrank
  function backsplash(w) {
    const b = P.style.back; if (!b || b === 'wand' || !P.rows[w]) return '';
    const dh = (P.ah || 90) - 90, fill = b === 'platte' ? topCol() : b === 'fliese' ? 'url(#kptile)' : shade(P.style.wood ? '#2a2420' : P.style.front, -.12);
    let x = range(w)[0], s = '';
    P.rows[w].forEach(m => { const h = nsH(w, m, x); if (M[m.t].h === 'b' && h > 0) s += `<rect x="${x}" y="${FL - 90 - dh - h}" width="${m.w}" height="${h}" fill="${fill}"${b === 'glas' ? ' opacity=".92"' : ''}/>${b === 'glas' ? `<rect x="${x}" y="${FL - 90 - dh - h}" width="${m.w}" height="${h * .35}" fill="#fff" opacity=".08"/>` : ''}`; x += m.w; });
    return s;
  }
  function nsH(w, m, x0) { const ops = P.op.filter(o => o.wall === w && opOver(o, x0, m.w)); if (ops.some(o => o.t !== 'fenster')) return 0; return ops.length ? Math.max(0, 15 - ((P.ah || 90) - 90)) : 55; }
  const corner = (x, w) => `<g><rect x="${x}" y="${FL - 90}" width="${w}" height="90" fill="url(#kphatch)"/><text x="${x + w / 2}" y="${FL - 40}" font-size="6.5" text-anchor="middle" fill="#8a7f72" font-family="system-ui">Ecke</text></g>`;
  const DEFS = `<defs><linearGradient id="kpsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bcdcf5"/><stop offset="1" stop-color="#eaf5fc"/></linearGradient><pattern id="kptile" width="20" height="10" patternUnits="userSpaceOnUse"><rect width="20" height="10" fill="#d9d4cc"/><rect x=".6" y=".6" width="18.8" height="3.8" rx=".6" fill="#f6f4ef"/><rect x="-9.4" y="5.6" width="18.8" height="3.8" rx=".6" fill="#f6f4ef"/><rect x="10.6" y="5.6" width="18.8" height="3.8" rx=".6" fill="#f6f4ef"/></pattern><pattern id="kphatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#e9e3da"/><line x1="0" y1="0" x2="0" y2="6" stroke="#cfc5b8" stroke-width="2"/></pattern><filter id="kpgrain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".02 .5" numOctaves="2" seed="4" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -.9 .55" result="a"/><feComposite in="a" in2="SourceGraphic" operator="in" result="g"/><feBlend in="SourceGraphic" in2="g" mode="multiply"/></filter></defs>`;

  (function () { const d = document.createElement('div'); d.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden'; d.setAttribute('aria-hidden', 'true'); d.innerHTML = `<svg width="0" height="0">${DEFS}</svg>`; document.body.appendChild(d); })();
  /* ---------------- Rendering Wände ---------------- */
  const wallsEl = $('[data-kp-walls]'), tabsEl = $('[data-kp-walltabs]');
  let sel = null, selOp = null, curWall = 'N', ghostId = null;
  function renderWalls() {
    const walls = FORMS[P.form].walls;
    if (!walls.includes(curWall)) curWall = walls.includes('N') ? 'N' : walls[0];
    tabsEl.innerHTML = walls.length > 1 ? walls.map(w => `<button type="button" data-wt="${w}" class="${w === curWall ? 'on' : ''}">${WN[w]}${free(w) < -0.5 ? ' <i>!</i>' : ''}</button>`).join('') : '';
    wallsEl.innerHTML = walls.map(w => { const L = wallLen(w); return `<div class="kp-wall${w === curWall ? ' on' : ''}" data-wall="${w}" style="--L:${L}"><svg viewBox="-4 34 ${L + 8} ${H - 34 + 24}" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">${drawWall(w, { sel, ghost: ghostId, selOp })}</svg></div>`; }).join('');
    if (P.form === 'insel') wallsEl.insertAdjacentHTML('beforeend', islandCard());
    renderPlan(); renderPop();
  }
  function islandCard() {
    const I = P.island; return `<div class="kp-isl" data-isl><b>Kochinsel</b><div class="kp-step"><button type="button" data-isw="-">−</button><span>${I.w} cm breit</span><button type="button" data-isw="+">+</button></div><div class="kp-seg">${[['kochfeld', 'Mit Kochfeld'], ['spuele', 'Mit Spüle'], ['frei', 'Nur Arbeitsfläche']].map(([k, n]) => `<button type="button" data-isv="${k}" class="${I.v === k ? 'on' : ''}">${n}</button>`).join('')}</div></div>`;
  }
  tabsEl.addEventListener('click', e => { const b = e.target.closest('[data-wt]'); if (!b) return; curWall = b.dataset.wt; sel = null; renderWalls(); });
  wallsEl.addEventListener('click', e => {
    const a = e.target.closest('[data-isw]'), v = e.target.closest('[data-isv]');
    if (a) { const ws = [120, 150, 180, 210, 240, 270]; let i = ws.indexOf(P.island.w); i = Math.max(0, Math.min(ws.length - 1, i + (a.dataset.isw === '+' ? 1 : -1))); P.island.w = ws[i]; change(); }
    if (v) { P.island.v = v.dataset.isv; change(); }
  });

  /* ---------------- Ziehen & Ablegen ---------------- */
  let drag = null; const ghost = $('[data-kp-ghost]'), caret = $('[data-kp-caret]'), trash = $('[data-kp-trash]');
  function wallAt(cx, cy) { for (const el of $$('.kp-wall', wallsEl)) { if (getComputedStyle(el).display === 'none') continue; const r = el.getBoundingClientRect(); if (cx >= r.left - 10 && cx <= r.right + 10 && cy >= r.top - 40 && cy <= r.bottom + 30) return el; } return null; }
  function sAt(el, cx) { const svg = $('svg', el), p = svg.createSVGPoint(); p.x = cx; p.y = 0; return p.matrixTransform(svg.getScreenCTM().inverse()).x; }
  function insIndex(w, s, skipId) { const [a] = range(w); let x = a, i = 0; for (const m of P.rows[w]) { if (m.id === skipId) { i++; continue; } if (s < x + m.w / 2) return i; x += m.w; i++; } return P.rows[w].length; }
  function caretX(w, idx, skipId) { let x = range(w)[0]; P.rows[w].slice(0, idx).forEach(m => { if (m.id !== skipId) x += m.w; }); return x; }
  function startDrag(e, kind, payload) {
    drag = { kind, ...payload, x0: e.clientX, y0: e.clientY, on: false, pid: e.pointerId };
  }
  function dragMove(e) {
    if (!drag) return;
    if (!drag.on) { const dx = e.clientX - drag.x0, dy = e.clientY - drag.y0; if (Math.hypot(dx, dy) < 7) return; if (drag.kind === 'pal' && drag.touch && Math.abs(dx) > Math.abs(dy) * 1.2) { drag = null; return; } drag.on = true; beginGhost(); }
    e.preventDefault();
    ghost.style.transform = `translate(${e.clientX - drag.gw / 2}px,${e.clientY - drag.gh * .7}px)`;
    const el = wallAt(e.clientX, e.clientY);
    if (drag.kind === 'op') { const o = opById(drag.oid); if (o && el && el.dataset.wall === o.wall) { o.s = clampOp(o, drag.ws + (sAt(el, e.clientX) - drag.s0)); renderWalls(); schedule3D(); } return; }
    if (drag.kind === 'plan') { planMove(e); return; }
    if (el) {
      const w = el.dataset.wall, s = sAt(el, e.clientX) - (drag.w || 60) / 2 + 30 * 0, idx = insIndex(w, sAt(el, e.clientX), drag.id);
      drag.target = { w, idx }; const r = el.getBoundingClientRect(), svg = $('svg', el), m = svg.getScreenCTM();
      const px = m.a * caretX(w, idx, drag.id) + m.e; caret.hidden = false; caret.style.left = px + 'px'; caret.style.top = (m.f + m.d * (FL - 120)) + 'px'; caret.style.height = (m.d * 120) + 'px';
      trash.classList.remove('hot'); el.classList.add('hov'); $$('.kp-wall.hov', wallsEl).forEach(x => x !== el && x.classList.remove('hov'));
    } else { drag.target = null; caret.hidden = true; $$('.kp-wall.hov', wallsEl).forEach(x => x.classList.remove('hov')); if (drag.kind === 'mod') trash.classList.add('hot'); }
  }
  function beginGhost() {
    if (drag.kind === 'op' || drag.kind === 'plan') { ghost.innerHTML = ''; drag.gw = drag.gh = 0; selOp = drag.oid; sel = null; return; }
    const t = drag.t, w = drag.w || M[t].w, tall = M[t].h === 't', sc = 1.35;
    ghost.innerHTML = `<svg viewBox="-2 ${tall ? FL - 220 : FL - 96} ${w + 4} ${tall ? 224 : 100}" width="${(w + 4) * sc}" height="${(tall ? 224 : 100) * sc}">${elev({ t, w }, 0)}</svg><span>${M[t].n}</span>`;
    drag.gw = (w + 4) * sc; drag.gh = (tall ? 224 : 100) * sc; ghost.hidden = false; root.classList.add('dragging');
    if (drag.kind === 'mod') { ghostId = drag.id; trash.hidden = false; renderWalls(); }
    if (navigator.vibrate) try { navigator.vibrate(8); } catch (e) { }
  }
  function dragEnd(e) {
    if (!drag) return; const d = drag; drag = null;
    ghost.hidden = true; caret.hidden = true; trash.hidden = true; trash.classList.remove('hot'); root.classList.remove('dragging'); $$('.kp-wall.hov', wallsEl).forEach(x => x.classList.remove('hov'));
    if (d.kind === 'op' || d.kind === 'plan') { if (d.on) change(); else { selOp = selOp === d.oid ? null : d.oid; sel = null; renderWalls(); } return; }
    if (!d.on) { // Tippen
      if (d.kind === 'pal') { addTo(curWall, d.t); }
      else if (d.kind === 'mod') { sel = sel === d.id ? null : d.id; selOp = null; renderWalls(); }
      return;
    }
    ghostId = null;
    if (d.kind === 'pal') { if (d.target) insert(d.target.w, d.target.idx, mk(d.t)); else renderWalls(); }
    if (d.kind === 'mod') {
      const fromW = d.from, m = P.rows[fromW].find(x => x.id === d.id);
      if (!d.target) { P.rows[fromW] = P.rows[fromW].filter(x => x.id !== d.id); sel = null; toast(`${M[m.t].n} entfernt`, () => { P.rows[fromW].splice(d.idx0, 0, m); change(); }); change(); return; }
      let idx = d.target.idx; const oldIdx = P.rows[fromW].indexOf(m);
      P.rows[fromW].splice(oldIdx, 1); if (d.target.w === fromW && idx > oldIdx) idx--;
      insert(d.target.w, idx, m, true);
    }
  }
  function insert(w, idx, m, moved) {
    P.rows[w].splice(idx, 0, m); curWall = w;
    // Platz schaffen: wenn zu lang, passende Unterschränke (Füller) rechts/links verkleinern oder entfernen
    makeRoom(w, m);
    sel = m.id; change(); pulse(m.id);
  }
  function makeRoom(w, keep) {
    let over = -free(w); if (over <= 0.5) return;
    const R = [...P.rows[w]].reverse().filter(x => x.t === 'us' && x !== keep);
    for (const x of R) { if (over <= 0.5) break; const nw = Math.max(0, x.w - over); const fit = M.us.ws.filter(v => v <= nw).pop(); if (fit) { over -= x.w - fit; x.w = fit; } else { over -= x.w; P.rows[w] = P.rows[w].filter(y => y !== x); } }
    if (over > 0.5) toast(`${WN[w]}: ${Math.round(over)} cm zu lang – nehmen Sie etwas heraus oder machen Sie es schmaler.`);
  }
  function addTo(w, t) {
    const m = mk(t); const rowsW = P.rows[w];
    // sinnvolle Stelle: Spülmaschine neben Spüle, sonst ersten Füll-Unterschrank ersetzen, sonst ans Ende
    let idx = rowsW.length;
    const spI = rowsW.findIndex(x => x.t === 'sp');
    if (t === 'gs' && spI >= 0) idx = spI + 1; else if (t === 'sp') { const gI = rowsW.findIndex(x => x.t === 'gs'); if (gI >= 0) idx = gI; }
    else if (M[t].h === 't') idx = 0;
    else { const u = rowsW.map((x, i) => [x, i]).filter(([x]) => x.t === 'us').pop(); if (u) idx = u[1]; }
    insert(w, idx, m);
  }
  function pulse(id) { requestAnimationFrame(() => { const g = $(`[data-m="${id}"]`, wallsEl); if (g && g.animate) g.animate([{ opacity: .3 }, { opacity: 1 }], { duration: 420 }); }); }
  // Palette
  const palEl = $('[data-kp-pal]');
  function renderPal() {
    palEl.innerHTML = PAL.map(t => { const c = M[t], tall = c.h === 't', w = c.w; return `<button type="button" class="kp-tile" data-pal="${t}"><svg viewBox="${tall ? `-3 ${FL - 220} ${w + 6} 224` : `-3 ${FL - 128} ${w + 6} 132`}" class="${tall ? 't' : 'b'}" aria-hidden="true">${elev({ t, w }, 0)}</svg><b>${c.n}</b><small>${c.s}</small></button>`; }).join('');
  }
  palEl.addEventListener('pointerdown', e => { const b = e.target.closest('[data-pal]'); if (!b) return; startDrag(e, 'pal', { t: b.dataset.pal, touch: e.pointerType !== 'mouse' }); });
  wallsEl.addEventListener('pointerdown', e => {
    const g = e.target.closest('[data-m]'), wn = e.target.closest('[data-op]');
    const wallEl = e.target.closest('.kp-wall');
    if (g && wallEl) { const w = wallEl.dataset.wall, id = +g.dataset.m, m = P.rows[w].find(x => x.id === id); startDrag(e, 'mod', { id, t: m.t, w: m.w, from: w, idx0: P.rows[w].indexOf(m) }); e.preventDefault(); return; }
    if (wn && wallEl) { const o = opById(+wn.dataset.op); startDrag(e, 'op', { oid: o.id, s0: sAt(wallEl, e.clientX), ws: o.s }); e.preventDefault(); return; }
    if (wallEl && (sel || selOp)) { sel = null; selOp = null; renderWalls(); }
  });
  addEventListener('pointermove', dragMove, { passive: false });
  addEventListener('pointerup', dragEnd); addEventListener('pointercancel', () => { if (drag) { drag.target = null; drag.on = false; drag = null; ghost.hidden = true; caret.hidden = true; trash.hidden = true; ghostId = null; root.classList.remove('dragging'); renderWalls(); } });
  // Touch: Seite nicht scrollen, während gezogen wird
  addEventListener('touchmove', e => { if (drag && drag.on) e.preventDefault(); }, { passive: false });

  /* ---------------- Auswahl-Popup ---------------- */
  const pop = $('[data-kp-pop]');
  function findSel() { for (const w in P.rows) { const i = P.rows[w].findIndex(x => x.id === sel); if (i >= 0) return { w, i, m: P.rows[w][i] }; } return null; }
  function renderPop() {
    if (selOp && opById(selOp)) return renderOpPop();
    const f = sel && findSel(); if (!f) { pop.hidden = true; return; }
    const { w, i, m } = f, c = M[m.t], wi = c.ws.indexOf(m.w);
    const swap = m.t === 'us' ? ['ut', 'Mit Tür'] : m.t === 'ut' ? ['us', 'Mit Schubladen'] : null;
    pop.innerHTML = `<b>${c.n} <small>${c.s}</small></b><div class="kp-step"><button type="button" data-p="w-"${wi <= 0 ? ' disabled' : ''} aria-label="schmaler">−</button><span>${m.w} cm</span><button type="button" data-p="w+"${wi >= c.ws.length - 1 ? ' disabled' : ''} aria-label="breiter">+</button></div><div class="kp-pb"><button type="button" data-p="l"${i === 0 ? ' disabled' : ''} aria-label="nach links">←</button><button type="button" data-p="r"${i === P.rows[w].length - 1 ? ' disabled' : ''} aria-label="nach rechts">→</button>${swap ? `<button type="button" data-p="swap">${swap[1]}</button>` : ''}<button type="button" data-p="del" class="kp-del">Entfernen</button></div>`;
    pop.hidden = false;
    const g = $(`[data-m="${m.id}"]`, wallsEl); if (!g) return; const r = g.getBoundingClientRect(), host = root.getBoundingClientRect();
    const pw = pop.offsetWidth; let left = r.left + r.width / 2 - pw / 2; left = Math.max(8, Math.min(innerWidth - pw - 8, left));
    pop.style.left = left + 'px'; pop.style.top = Math.max(70, r.top - pop.offsetHeight - 10) + 'px';
  }
  function renderOpPop() {
    const o = opById(selOp), ws = OPW[o.t], wi = ws.indexOf(o.w);
    pop.innerHTML = `<b>${OPN[o.t]} <small>${WN[o.wall]}</small></b><div class="kp-step"><button type="button" data-o="w-"${o.w <= ws[0] ? ' disabled' : ''} aria-label="schmaler">−</button><span>${o.w} cm</span><button type="button" data-o="w+"${o.w >= ws[ws.length - 1] ? ' disabled' : ''} aria-label="breiter">+</button></div><div class="kp-pb"><button type="button" data-o="l" aria-label="nach links">←</button><button type="button" data-o="r" aria-label="nach rechts">→</button><button type="button" data-o="del" class="kp-del">Entfernen</button></div>`;
    pop.hidden = false;
    const cands = [$(`[data-pop="${o.id}"]`), $(`[data-op="${o.id}"]`, wallsEl)].filter(el => el && el.getBoundingClientRect().width > 0);
    const r = cands.length ? cands[0].getBoundingClientRect() : null; if (!r) { pop.hidden = true; return; }
    const pw = pop.offsetWidth; let left = r.left + r.width / 2 - pw / 2; left = Math.max(8, Math.min(innerWidth - pw - 8, left));
    pop.style.left = left + 'px'; pop.style.top = (r.top - pop.offsetHeight - 10 < 70 ? r.bottom + 10 : r.top - pop.offsetHeight - 10) + 'px';
  }
  pop.addEventListener('click', e => {
    const ob = e.target.closest('[data-o]');
    if (ob) { const o = opById(selOp); if (!o) return; const k = ob.dataset.o, ws = OPW[o.t];
      if (k === 'w-' || k === 'w+') { let i = ws.indexOf(o.w); if (i < 0) i = ws.findIndex(v => v >= o.w); const c = o.s + o.w / 2; o.w = ws[Math.max(0, Math.min(ws.length - 1, i + (k === 'w+' ? 1 : -1)))]; o.s = clampOp(o, c - o.w / 2); }
      if (k === 'l') o.s = clampOp(o, o.s - 10); if (k === 'r') o.s = clampOp(o, o.s + 10);
      if (k === 'del') { const i = P.op.indexOf(o); P.op.splice(i, 1); selOp = null; toast(`${OPN[o.t]} entfernt`, () => { P.op.splice(i, 0, o); change(); }); }
      change(); return; }
    const b = e.target.closest('[data-p]'); if (!b) return; const f = findSel(); if (!f) return; const { w, i, m } = f, c = M[m.t];
    const k = b.dataset.p;
    if (k === 'w-' || k === 'w+') { const wi = c.ws.indexOf(m.w); m.w = c.ws[Math.max(0, Math.min(c.ws.length - 1, wi + (k === 'w+' ? 1 : -1)))]; if (k === 'w+') makeRoom(w, m); }
    if (k === 'l' && i > 0) { P.rows[w].splice(i, 1); P.rows[w].splice(i - 1, 0, m); }
    if (k === 'r' && i < P.rows[w].length - 1) { P.rows[w].splice(i, 1); P.rows[w].splice(i + 1, 0, m); }
    if (k === 'swap') { m.t = m.t === 'us' ? 'ut' : 'us'; if (!M[m.t].ws.includes(m.w)) m.w = 60; }
    if (k === 'del') { P.rows[w].splice(i, 1); sel = null; toast(`${c.n} entfernt`, () => { P.rows[w].splice(i, 0, m); change(); }); }
    change();
  });
  addEventListener('resize', () => renderPop());
  addEventListener('scroll', () => { if (!pop.hidden) renderPop(); }, { passive: true });
  addEventListener('keydown', e => { if (/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) return; if ((e.key === 'Delete' || e.key === 'Backspace') && selOp) { P.op = P.op.filter(o => o.id !== selOp); selOp = null; change(); e.preventDefault(); return; } if ((e.key === 'Delete' || e.key === 'Backspace') && sel) { const f = findSel(); if (f) { P.rows[f.w].splice(f.i, 1); sel = null; change(); } e.preventDefault(); } if (e.key === 'Escape') { sel = null; selOp = null; renderWalls(); } if ((e.ctrlKey || e.metaKey) && e.key === 'z') { undo(); e.preventDefault(); } });

  /* ---------------- Grundriss: Fenster & Türen ---------------- */
  const planEl = $('[data-kp-plan]');
  // Wand-Laufrichtung wie in 3D: N links→rechts, E oben→unten, S rechts→links, W unten→oben
  function seg(wall, a, len) { const W = P.room.w, D = P.room.d; return { N: [a, 0, a + len, 0], S: [W - a, D, W - a - len, D], W: [0, D - a, 0, D - a - len], E: [W, a, W, a + len] }[wall]; }
  function cab(wall, a, len, dep) { const W = P.room.w, D = P.room.d; return { N: [a, 0, len, dep], S: [W - a - len, D - dep, len, dep], W: [0, D - a - len, dep, len], E: [W - dep, a, dep, len] }[wall]; }
  const INW = { N: [0, 1], S: [0, -1], W: [1, 0], E: [-1, 0] };
  function renderPlan() {
    if (!planEl) return;
    const W = P.room.w, D = P.room.d; let s = `<rect x="0" y="0" width="${W}" height="${D}" fill="#f7f2ea"/>`;
    for (const w in P.rows) { let x = range(w)[0]; P.rows[w].forEach(m => { const [cx, cy, cw, ch] = cab(w, x, m.w, 60), tall = M[m.t].h === 't'; s += `<rect x="${cx}" y="${cy}" width="${cw}" height="${ch}" fill="${tall ? '#cdbfab' : '#e6dccd'}" stroke="#a89880" stroke-width="1.2"/>`; const mx = cx + cw / 2, my = cy + ch / 2; if (m.t === 'sp') s += `<rect x="${mx - 17}" y="${my - 14}" width="34" height="28" rx="6" fill="#fff" stroke="#8d9296" stroke-width="1.5"/>`; if (m.t === 'kf' || m.t === 'ko') [[-11, -11], [11, -11], [-11, 11], [11, 11]].forEach(([a, b]) => s += `<circle cx="${mx + a}" cy="${my + b}" r="7" fill="none" stroke="#45474b" stroke-width="1.6"/>`); if (m.t === 'kue') s += `<text x="${mx}" y="${my + 5}" font-size="15" text-anchor="middle" fill="#6e655b" font-family="system-ui">❄</text>`; x += m.w; }); }
    if (P.form === 'insel') { const z = Math.max(210, Math.min(D - 120, 225)); s += `<rect x="${W / 2 - P.island.w / 2}" y="${z - 50}" width="${P.island.w}" height="100" rx="4" fill="#e6dccd" stroke="#a89880" stroke-width="1.2"/>`; }
    s += `<rect x="-6" y="-6" width="${W + 12}" height="${D + 12}" fill="none" stroke="#2b2724" stroke-width="12"/>`;
    P.op.forEach(o => {
      const [x1, y1, x2, y2] = seg(o.wall, o.s, o.w), [nx, ny] = INW[o.wall], on = selOp === o.id, c = on ? ACC : '#4f8fc6';
      let g = `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#f7f2ea" stroke-width="13"/>`;
      if (o.t === 'tuer') { const r = o.w, hx = x2, hy = y2, ex = hx + nx * r, ey = hy + ny * r; g += `<line x1="${hx}" y1="${hy}" x2="${ex}" y2="${ey}" stroke="${on ? ACC : '#2b2724'}" stroke-width="4"/><path d="M${ex} ${ey}A${r} ${r} 0 0 ${((ex - hx) * (y1 - hy) - (ey - hy) * (x1 - hx)) > 0 ? 1 : 0} ${x1} ${y1}" fill="none" stroke="${on ? ACC : '#2b2724'}" stroke-width="1.4" stroke-dasharray="6 5"/>`; }
      else { const o2 = 4; g += `<line x1="${x1 - nx * o2}" y1="${y1 - ny * o2}" x2="${x2 - nx * o2}" y2="${y2 - ny * o2}" stroke="${c}" stroke-width="2.6"/><line x1="${x1 + nx * o2}" y1="${y1 + ny * o2}" x2="${x2 + nx * o2}" y2="${y2 + ny * o2}" stroke="${c}" stroke-width="2.6"/>`; if (o.t === 'balkon') g += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="7" opacity=".35"/>`; }
      const mx = (x1 + x2) / 2 + nx * 26, my = (y1 + y2) / 2 + ny * 26;
      g += `<text x="${mx}" y="${my + 5}" font-size="15" font-weight="700" text-anchor="middle" fill="${on ? ACC : '#4f6b84'}" font-family="system-ui">${o.t === 'tuer' ? 'Tür' : o.t === 'balkon' ? 'Balkon' : 'Fenster'}</text>`;
      const hx0 = Math.min(x1, x2) - 14 + (nx ? -8 : 0), hy0 = Math.min(y1, y2) - 14 + (ny ? -8 : 0), hw = Math.abs(x2 - x1) + 28 + (nx ? 40 : 0), hh = Math.abs(y2 - y1) + 28 + (ny ? 40 : 0);
      s += `<g data-pop="${o.id}" class="kp-pop-op${on ? ' on' : ''}">${g}<rect x="${nx < 0 ? hx0 - 32 : hx0}" y="${ny < 0 ? hy0 - 32 : hy0}" width="${hw}" height="${hh}" fill="transparent"/></g>`;
    });
    s += `<g font-family="system-ui" font-size="15" fill="#8a7f72" text-anchor="middle"><text x="${W / 2}" y="${-22}">${(W / 100).toFixed(2).replace('.', ',')} m</text><text transform="translate(${-22} ${D / 2}) rotate(-90)">${(D / 100).toFixed(2).replace('.', ',')} m</text></g>`;
    planEl.innerHTML = `<svg viewBox="-44 -44 ${W + 88} ${D + 80}" xmlns="http://www.w3.org/2000/svg" aria-label="Grundriss mit Fenstern und Türen">${s}</svg>`;
  }
  function planPt(e) { const svg = $('svg', planEl), p = svg.createSVGPoint(); p.x = e.clientX; p.y = e.clientY; return p.matrixTransform(svg.getScreenCTM().inverse()); }
  function planMove(e) {
    const o = opById(drag.oid); if (!o) return; const W = P.room.w, D = P.room.d, p = planPt(e);
    const d = { N: Math.abs(p.y), S: Math.abs(p.y - D), W: Math.abs(p.x), E: Math.abs(p.x - W) };
    const wall = Object.keys(d).sort((a, b) => d[a] - d[b])[0], along = { N: p.x, S: W - p.x, W: D - p.y, E: p.y }[wall];
    if (o.wall !== wall) { o.wall = wall; if (o.w > wallLen(wall) - 20) o.w = OPW[o.t].filter(v => v <= wallLen(wall) - 20).pop() || o.w; }
    o.s = clampOp(o, along - o.w / 2); renderWalls(); renderTips(); schedule3D();
  }
  if (planEl) planEl.addEventListener('pointerdown', e => { const g = e.target.closest('[data-pop]'); if (!g) { if (selOp) { selOp = null; renderWalls(); } return; } startDrag(e, 'plan', { oid: +g.dataset.pop }); e.preventDefault(); });
  function addOp(t) {
    if (P.op.length >= 8) { toast('Mehr als 8 Fenster und Türen passen nicht in den Plan.'); return; }
    const w0 = t === 'tuer' ? 90 : t === 'balkon' ? 120 : 100, kitchen = Object.keys(P.rows), others = ['N', 'E', 'S', 'W'].filter(w => !kitchen.includes(w));
    const order = t === 'fenster' ? ['N', ...kitchen.filter(w => w !== 'N'), ...others] : [...others, ...kitchen];
    for (const wall of order) {
      const L = wallLen(wall), o = { id: uid++, t, wall, w: Math.min(w0, L - 40), s: 0 }, ok = [];
      for (let s0 = 10; s0 <= L - o.w - 10; s0 += 5) {
        if (P.op.some(q => q.wall === wall && s0 + o.w > q.s - 20 && s0 < q.s + q.w + 20)) continue;
        if (P.rows[wall]) { let x = range(wall)[0], bad = false; P.rows[wall].forEach(m => { if (s0 + o.w > x + 2 && s0 < x + m.w - 2 && (t !== 'fenster' || M[m.t].h === 't' || m.t === 'kf' || m.t === 'ko')) bad = true; x += m.w; }); if (bad) continue; }
        ok.push(s0);
      }
      if (ok.length) { o.s = ok.sort((a, b) => Math.abs(a + o.w / 2 - L / 2) - Math.abs(b + o.w / 2 - L / 2))[0]; P.op.push(o); selOp = o.id; sel = null; change(); toast(`${OPN[t]} eingesetzt – zum Verschieben anfassen.`); return; }
    }
    toast(`Kein freier Platz für ${t === 'tuer' ? 'eine Tür' : t === 'balkon' ? 'eine Balkontür' : 'ein Fenster'} – erst etwas verschieben oder entfernen.`);
  }
  $$('[data-addop]').forEach(b => b.addEventListener('click', () => addOp(b.dataset.addop)));

  /* ---------------- Toast ---------------- */
  const tst = $('[data-kp-toast]'); let tT = 0;
  function toast(msg, und) { tst.innerHTML = `<span>${msg}</span>${und ? '<button type="button">Rückgängig</button>' : ''}`; tst.hidden = false; tst.classList.add('on'); clearTimeout(tT); tT = setTimeout(() => { tst.classList.remove('on'); }, 4200); const b = $('button', tst); if (b) b.onclick = () => { und(); tst.classList.remove('on'); }; }

  /* ---------------- Tipps (live) ---------------- */
  function tips() {
    const out = [], all = []; for (const w in P.rows) P.rows[w].forEach((m, i) => all.push({ w, i, m }));
    const has = t => all.some(x => x.m.t === t) ;
    const ok = (t) => out.push(['ok', t]), warn = (t) => { if (!out.some(x => x[1] === t)) out.push(['warn', t]); };
    const isl = P.form === 'insel';
    has('sp') || (isl && P.island.v === 'spuele') ? ok('Spüle') : warn('Noch keine Spüle – einfach reinziehen');
    has('kf') || has('ko') || (isl && P.island.v === 'kochfeld') ? ok('Kochfeld') : warn('Noch kein Kochfeld oder Herd');
    has('kue') ? ok('Kühlschrank') : warn('Noch kein Kühlschrank');
    for (const w in P.rows) { const f = free(w); if (f < -0.5) warn(`${WN[w]} ist ${Math.round(-f)} cm zu lang`); }
    // Spülmaschine neben Spüle
    const gs = all.filter(x => x.m.t === 'gs');
    if (gs.length && has('sp')) { const adj = gs.some(g => { const r = P.rows[g.w]; return (r[g.i - 1] && r[g.i - 1].t === 'sp') || (r[g.i + 1] && r[g.i + 1].t === 'sp'); }); adj ? ok('Spülmaschine neben der Spüle') : warn('Spülmaschine gehört direkt neben die Spüle'); }
    // Arbeitsfläche zwischen Spüle und Kochfeld
    for (const w in P.rows) { const r = P.rows[w], a = r.findIndex(x => x.t === 'sp'), b = r.findIndex(x => x.t === 'kf' || x.t === 'ko'); if (a >= 0 && b >= 0) { const [lo, hi] = a < b ? [a, b] : [b, a]; const mid = r.slice(lo + 1, hi); const wd = mid.filter(x => M[x.t].h === 'b' && x.t !== 'gs').reduce((s, x) => s + x.w, 0) + mid.filter(x => x.t === 'gs').reduce((s, x) => s + x.w, 0); if (mid.some(x => M[x.t].h === 't')) warn('Hochschrank zwischen Spüle und Kochfeld'); else wd >= 60 ? ok(`${wd} cm Arbeitsfläche zum Schnippeln`) : warn(`Nur ${wd} cm Platz zwischen Spüle und Kochfeld – 60 bis 120 cm sind ideal`); } }
    // Kochfeld nicht direkt an Hochschrank/Wand
    for (const w in P.rows) { const r = P.rows[w]; r.forEach((m, i) => { if (m.t !== 'kf' && m.t !== 'ko') return; const [a, b] = range(w); const L = locate(w, i); const nb = [r[i - 1], r[i + 1]]; if (nb.some(x => x && M[x.t].h === 't') || L.x0 - a < 1 && a === 0 || (i === r.length - 1 && L.x0 + L.w >= b - 1 && b === wallLen(w))) warn('Neben dem Kochfeld etwas Ablage lassen (min. 30 cm)'); }); }
    // Hochschrank vor dem Fenster
    P.op.forEach(o => { const r = P.rows[o.wall]; if (!r) return; r.forEach((m, i) => { const L = locate(o.wall, i); if (!opOver(o, L.x0, L.w)) return; if (o.t === 'fenster') { if (M[m.t].h === 't') warn('Ein Hochschrank steht vor dem Fenster'); } else warn(o.t === 'tuer' ? 'Vor der Tür stehen Schränke – Tür im Grundriss verschieben' : 'Vor der Balkontür stehen Schränke'); }); });
    if (!P.op.some(o => o.t === 'tuer' || o.t === 'balkon')) warn('Noch keine Tür – wie kommt man in die Küche?');
    if (isl && P.room.d < 380) warn('Für eine Insel sollte der Raum mind. 3,80 m tief sein');
    return out;
  }
  function renderTips() {
    const t = tips(), w = t.filter(x => x[0] === 'warn');
    $('[data-kp-tips]').innerHTML = (w.length ? w : [['ok', 'Alles im grünen Bereich – so würde ' + PERSON + ' das auch planen.']]).slice(0, 3).map(([k, s]) => `<li class="${k}"><i>${k === 'ok' ? '✓' : '!'}</i>${s}</li>`).join('');
    $$('[data-kp-score]').forEach(el => { const okN = t.filter(x => x[0] === 'ok').length; el.textContent = w.length ? `${w.length} Tipp${w.length > 1 ? 's' : ''}` : 'Passt ✓'; el.classList.toggle('ok', !w.length); });
  }

  /* ---------------- 3D ---------------- */
  function toState() {
    const W = P.room.w, D = P.room.d, items = [], open = [];
    const pos = (w, along, d) => ({ N: { x: along, z: d / 2, r: 0 }, S: { x: W - along, z: D - d / 2, r: 180 }, W: { x: d / 2, z: D - along, r: 90 }, E: { x: W - d / 2, z: along, r: 270 } })[w];
    const map = m => ({ us: { t: 'us', v: 'schub' }, ut: { t: 'us', v: 'tuer' }, sp: { t: 'sp' }, kf: { t: 'kf', v: 'normal' }, ko: { t: 'kf', v: 'ofen' }, gs: { t: 'gs' }, bo: { t: 'hs', v: 'backofen' }, kue: { t: 'hs', v: 'kuehl' }, vo: { t: 'hs', v: 'vorrat' } })[m.t];
    for (const w in P.rows) {
      let x = range(w)[0];
      P.rows[w].forEach(m => {
        const it = { ...map(m), w: m.w, ...pos(w, x + m.w / 2, 60) }; items.push(it);
        const k = overKind(w, m, x);
        if (k === 'hood') items.push({ t: 'hb', w: Math.min(90, Math.max(60, m.w)), ...pos(w, x + m.w / 2, 50) });
        if (k === 'cab') items.push({ t: 'ws', v: 'tuer', w: m.w, ...pos(w, x + m.w / 2, 35) });
        if (M[m.t].h === 'b' && P.style.back && P.style.back !== 'wand') items.push({ t: 'ns', w: m.w, h: nsH(w, m, x), ...pos(w, x + m.w / 2, 2) });
        x += m.w;
      });
    }
    if (P.form === 'insel') { const z = Math.max(60 + 100 + 50, Math.min(D - 120, 60 + 115 + 50)); items.push({ t: 'in', w: P.island.w, d: 100, v: P.island.v, x: W / 2, z, r: 0 }); }
    P.op.forEach(o => open.push(o.t === 'fenster' ? { t: 'fenster', wall: o.wall, s: o.s, w: o.w, y: 105, h: 115 } : o.t === 'balkon' ? { t: 'fenster', wall: o.wall, s: o.s, w: o.w, y: 2, h: 216 } : { t: 'tuer', wall: o.wall, s: o.s, w: o.w }));
    return { room: { w: W, d: D, walls: { N: 1, E: 1, S: 1, W: 1 } }, open, items, style: { ...P.style, front: P.style.wood ? '#ffffff' : P.style.front } };
  }
  let K = null, t3 = 0;
  const host3 = $('[data-kp-3d]');
  function schedule3D() { if (t3) return; t3 = setTimeout(() => { t3 = 0; K && K.set(toState()); }, 60); }
  function load3D() {
    return new Promise((res, rej) => { if (window.PelPlanner3D) return res(); const s = document.createElement('script'); s.src = 'js/planner3d.js?v=4'; s.onload = res; s.onerror = rej; document.head.appendChild(s); })
      .then(() => { const l = $('.kp-load', host3); if (l) l.remove(); K = PelPlanner3D(host3, {}); K.set(toState()); })
      .catch(() => { const l = $('.kp-load', host3); if (l) l.textContent = '3D-Ansicht konnte nicht geladen werden.'; });
  }
  let night = false;
  $$('[data-mood]').forEach(b => b.addEventListener('click', () => { night = !night; $$('[data-mood]').forEach(x => { x.classList.toggle('on', night); x.setAttribute('aria-pressed', night); x.innerHTML = night ? '☀︎ Tag' : '☾ Abend'; }); root.classList.toggle('kp-night', night); K && K.mood && K.mood(night ? 'abend' : 'tag', toState()); }));
  $$('[data-cam]').forEach(b => b.addEventListener('click', () => { $$('[data-cam]').forEach(x => x.classList.toggle('on', x === b)); K && K.view(b.dataset.cam); }));

  /* ---------------- Verlauf / Link ---------------- */
  const hist = [], fut = [];
  const ser = () => JSON.stringify({ f: P.form, r: P.room, rw: Object.fromEntries(Object.entries(P.rows).map(([k, v]) => [k, v.map(m => [m.t, m.w])])), tp: P.top, op: P.op.map(o => [o.t, o.wall, o.s, o.w]), is: P.island, s: P.style, ah: P.ah || 90 });
  function des(j) {
    const o = JSON.parse(j); P = { form: o.f, room: o.r, rows: {}, top: o.tp, op: [], island: o.is, style: o.s, ah: o.ah || 90 }; for (const k in o.rw) P.rows[k] = o.rw[k].map(([t, w]) => mk(t, w)); sel = null; selOp = null;
    if (o.op) P.op = o.op.map(([t, wall, s, w]) => ({ id: uid++, t, wall, s, w }));
    else { if (o.wi) P.op.push({ id: uid++, t: 'fenster', wall: o.wi.wall, s: o.wi.s, w: o.wi.w }); P.op.push(defaultDoor()); } // ältere Links
  }
  const b64 = s => btoa(unescape(encodeURIComponent(s))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  const unb64 = s => decodeURIComponent(escape(atob(s.replace(/-/g, '+').replace(/_/g, '/'))));
  let lastHash = '';
  function change(noHist) {
    const j = ser(); if (!noHist && hist[hist.length - 1] !== j) { hist.push(j); if (hist.length > 60) hist.shift(); fut.length = 0; }
    lastHash = '#k=' + b64(j); history.replaceState(null, '', lastHash);
    renderWalls(); renderTips(); syncUI(); schedule3D(); $$('[data-undo]').forEach(b => b.disabled = hist.length < 2);
  }
  function undo() { if (hist.length < 2) return; fut.push(hist.pop()); des(hist[hist.length - 1]); change(true); }
  $$('[data-undo]').forEach(b => b.addEventListener('click', undo));
  function fromHash() {
    let h = location.hash.slice(1); if (!h && /[?&]gesendet=1/.test(location.search)) { try { h = (sessionStorage.getItem('kp-last') || '').slice(1); } catch (er) {} } if (!h) return false;
    try {
      if (h.startsWith('k=')) { des(unb64(h.slice(2))); return true; }
      const p = h.split('|'); const fm = { zeile: 'zeile', zwei: 'zwei', l: 'l', u: 'u', insel: 'insel', theke: 'l' }[p[0]];
      if (fm) { fresh(fm); if (p[1]) { P.style.front = '#' + p[1]; } if (p[3] && TOPS.some(t => t[0] === p[3])) P.style.top = p[3]; if (p[4]) P.style.handle = p[4]; P.style.wood = p[5] || null; if (p[2]) P.style.finish = p[2]; return true; }
    } catch (e) { }
    return false;
  }

  /* ---------------- Schritte & Bedienfelder ---------------- */
  const steps = $$('[data-kstep]'), panes = $$('[data-kpane]');
  function go(i) { steps.forEach((b, j) => { b.classList.toggle('on', j === i); b.classList.toggle('done', j < i); }); panes.forEach((p, j) => p.classList.toggle('on', j === i)); root.dataset.step = i; if (innerWidth < 1000) { const t = i === 3 ? $('[data-kpane].on') : $('.kp-stage'); if (t && i !== 1) t.scrollIntoView({ behavior: 'smooth', block: 'start' }); } renderPop(); }
  steps.forEach((b, i) => b.addEventListener('click', () => go(i)));
  $$('[data-kgo]').forEach(b => b.addEventListener('click', () => go(+b.dataset.kgo)));
  // Form
  $('[data-kp-forms]').innerHTML = Object.entries(FORMS).map(([k, f]) => `<button type="button" data-form="${k}"><svg viewBox="0 0 64 46" aria-hidden="true"><rect x="2" y="2" width="60" height="42" rx="3" fill="none" stroke="currentColor" stroke-opacity=".25"/><path d="${f.p}"/></svg><b>${f.n}</b><small>${f.d}</small></button>`).join('');
  $('[data-kp-forms]').addEventListener('click', e => { const b = e.target.closest('[data-form]'); if (!b) return; const st = P.style, room = { ...P.room }; fresh(b.dataset.form, { style: st, room }); sel = null; change(); K && K.view('perspektive'); });
  const rw = $('[data-kp-rw]'), rd = $('[data-kp-rd]');
  function roomIn() { P.room.w = +rw.value; P.room.d = +rd.value; for (const w in P.rows) makeRoomQuiet(w); P.op.forEach(o => { if (o.w > wallLen(o.wall) - 20) o.w = OPW[o.t].filter(v => v <= wallLen(o.wall) - 20).pop() || o.w; o.s = clampOp(o, o.s); }); syncRoomOut(); renderWalls(); renderTips(); schedule3D(); }
  function makeRoomQuiet(w) { let over = -free(w); if (over <= 0) { fillGap(w); return; } const R = [...P.rows[w]].reverse().filter(x => x.t === 'us'); for (const x of R) { if (over <= 0.5) break; const fit = M.us.ws.filter(v => v <= x.w - over).pop(); if (fit) { over -= x.w - fit; x.w = fit; } else { over -= x.w; P.rows[w] = P.rows[w].filter(y => y !== x); } } }
  function fillGap(w) { const f = free(w); if (f >= 30) { const last = [...P.rows[w]].reverse().find(x => x.t === 'us'); const grow = last && M.us.ws.filter(v => v <= last.w + f).pop(); if (last && grow > last.w) last.w = grow; else fillRest(w); } }
  [rw, rd].forEach(el => { el.addEventListener('input', roomIn); el.addEventListener('change', () => change()); });
  const ahIn = $('[data-kp-ah]');
  if (ahIn) { ahIn.addEventListener('input', () => { P.ah = +ahIn.value; $('[data-kp-aho]').textContent = P.ah + ' cm'; renderWalls(); }); ahIn.addEventListener('change', () => change()); }
  function syncRoomOut() { if (ahIn) { ahIn.value = P.ah || 90; $('[data-kp-aho]').textContent = (P.ah || 90) + ' cm'; } $('[data-kp-rwo]').textContent = (P.room.w / 100).toFixed(2).replace('.', ',') + ' m'; $('[data-kp-rdo]').textContent = (P.room.d / 100).toFixed(2).replace('.', ',') + ' m'; }
  $$('[data-kp-top]').forEach(b => b.addEventListener('click', () => { const on = !Object.values(P.top).some(Boolean); for (const k in P.top) P.top[k] = on ? 1 : 0; change(); }));
  // Stil
  $('[data-kp-fronts]').innerHTML = FRONTS.map(([n, c]) => `<button type="button" class="kp-sw" data-front="${c}" style="--c:${c.startsWith('wood') ? WOOD[c.slice(5)] : c}"><i></i><span>${n}</span></button>`).join('');
  $('[data-kp-handles]').innerHTML = HANDLES.map(([k, n]) => `<button type="button" data-handle="${k}"><svg viewBox="0 0 40 26" aria-hidden="true"><rect x="1" y="1" width="38" height="24" rx="2" fill="#e9e4dc" stroke="#cfc6b9"/>${k === 'grifflos' ? '<rect x="1" y="1" width="38" height="3" fill="#8b8379"/>' : `<rect x="12" y="6" width="16" height="2.4" rx="1.2" fill="${HCOL[k]}"/>`}</svg>${n}</button>`).join('');
  const sw = (sel, html) => { const el = $(sel); if (el) el.innerHTML = html; };
  sw('[data-kp-finish]', FINISHES.map(([k, n]) => `<button type="button" data-finish="${k}">${n}</button>`).join(''));
  sw('[data-kp-backs]', BACKS.map(([k, n]) => `<button type="button" class="kp-sw" data-back="${k}"><i class="kp-bk kp-bk-${k}"></i><span>${n}</span></button>`).join(''));
  sw('[data-kp-wallc]', WALLC.map(([n, c]) => `<button type="button" class="kp-sw" data-wallc="${c}" style="--c:${c}"><i></i><span>${n}</span></button>`).join(''));
  sw('[data-kp-floors]', FLOORS.map(([k, n, c]) => `<button type="button" class="kp-sw" data-floor="${k}" style="--c:${c}"><i></i><span>${n}</span></button>`).join(''));
  $('[data-kp-tops]').innerHTML = TOPS.map(([k, n, c]) => `<button type="button" class="kp-sw" data-top="${k}" style="--c:${c}"><i></i><span>${n}</span></button>`).join('');
  root.addEventListener('click', e => {
    const f = e.target.closest('[data-front]'), h = e.target.closest('[data-handle]'), t = e.target.closest('[data-top]'), st = e.target.closest('[data-style]');
    const fi = e.target.closest('[data-finish]'), bk = e.target.closest('[data-back]'), wc = e.target.closest('[data-wallc]'), fl = e.target.closest('[data-floor]');
    if (fi || bk || wc || fl) { if (fi) P.style.finish = fi.dataset.finish; if (bk) P.style.back = bk.dataset.back; if (wc) P.style.wall = wc.dataset.wallc; if (fl) P.style.floor = fl.dataset.floor; change(); return; }
    if (f) { const v = f.dataset.front; if (v.startsWith('wood:')) P.style.wood = v.slice(5); else { P.style.front = v; P.style.wood = null; } }
    else if (h) P.style.handle = h.dataset.handle; else if (t) P.style.top = t.dataset.top;
    else if (st) { const S = STY[st.dataset.style]; Object.assign(P.style, S); }
    else return;
    change(); renderPal();
  });
  const STY = { hell: { front: '#f1eee8', wood: null, handle: 'grifflos', top: 'eiche' }, dunkel: { front: '#232426', wood: null, handle: 'grifflos', top: 'eiche' }, natur: { front: '#d9cfbf', wood: null, handle: 'gold', top: 'keramik' }, holz: { wood: 'eiche', handle: 'schwarz', top: 'marmor' }, farbe: { front: '#7f8e77', wood: null, handle: 'gold', top: 'keramik' }, blau: { front: '#22304a', wood: null, handle: 'gold', top: 'keramik' } };
  function syncUI() {
    const s = P.style;
    $$('[data-front]').forEach(b => b.classList.toggle('on', s.wood ? b.dataset.front === 'wood:' + s.wood : b.dataset.front === s.front));
    $$('[data-handle]').forEach(b => b.classList.toggle('on', b.dataset.handle === s.handle));
    $$('[data-top]').forEach(b => b.classList.toggle('on', b.dataset.top === s.top));
    $$('[data-finish]').forEach(b => b.classList.toggle('on', b.dataset.finish === (s.finish || 'matt')));
    $$('[data-back]').forEach(b => b.classList.toggle('on', b.dataset.back === (s.back || 'wand')));
    $$('[data-wallc]').forEach(b => b.classList.toggle('on', b.dataset.wallc === (s.wall || '#f3efe9')));
    $$('[data-floor]').forEach(b => b.classList.toggle('on', b.dataset.floor === (s.floor || 'eiche')));
    $$('.kp-bk').forEach(i => { i.style.setProperty('--tc', topCol()); i.style.setProperty('--fc', s.wood ? '#2a2420' : s.front); });
    $$('[data-form]').forEach(b => b.classList.toggle('on', b.dataset.form === P.form));
    $$('[data-kp-top]').forEach(b => { const on = Object.values(P.top).some(Boolean); b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    rw.value = P.room.w; rd.value = P.room.d; syncRoomOut();
    const n = Object.values(P.rows).reduce((a, r) => a + r.length, 0) + (P.form === 'insel' ? 1 : 0);
    $$('[data-kp-count]').forEach(el => el.textContent = n + ' Elemente');
  }

  /* ---------------- Senden ---------------- */
  function summary() {
    const s = P.style, fr = FRONTS.find(f => s.wood ? f[1] === 'wood:' + s.wood : f[1] === s.front);
    const L = [`Form: ${FORMS[P.form].n} · Raum ${P.room.w} × ${P.room.d} cm`];
    for (const w in P.rows) L.push(`${WN[w]}: ` + P.rows[w].map(m => `${M[m.t].n}${m.t === 'us' || m.t === 'ut' ? ' (' + M[m.t].s + ')' : ''} ${m.w}`).join(' · '));
    if (P.form === 'insel') L.push(`Insel: ${P.island.w} cm, ${({ kochfeld: 'mit Kochfeld', spuele: 'mit Spüle', frei: 'freie Arbeitsfläche' })[P.island.v]}`);
    L.push(`Arbeitshöhe: ${P.ah || 90} cm`);
    if (P.op.length) L.push('Fenster & Türen: ' + P.op.map(o => `${OPN[o.t]} ${o.w} cm (${WN[o.wall]}, ab ${o.s} cm)`).join(' · '));
    L.push(`Fronten: ${fr ? fr[0] : s.front} · Griffe: ${HANDLES.find(h => h[0] === s.handle)[1]} · Arbeitsplatte: ${TOPS.find(t => t[0] === s.top)[1]} · Hängeschränke: ${Object.values(P.top).some(Boolean) ? 'ja' : 'nein'}`);
    L.push(`Oberfläche: ${(FINISHES.find(f => f[0] === (s.finish || 'matt')) || FINISHES[0])[1]} · Nischenrückwand: ${(BACKS.find(b => b[0] === (s.back || 'wand')) || BACKS[0])[1]} · Wand: ${(WALLC.find(c => c[1] === s.wall) || ['eigene Farbe'])[0]} · Boden: ${(FLOORS.find(f => f[0] === s.floor) || FLOORS[0])[1]}`);
    const w = tips().filter(x => x[0] === 'warn').map(x => x[1]); if (w.length) L.push('Hinweise: ' + w.join('; '));
    return L.join('\n');
  }
  function elevImg(w) { return new Promise(res => { const L = wallLen(w); const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 30 ${L + 8} ${H - 4}" width="${(L + 8) * 2}" height="${(H - 4) * 2}">${DEFS}${drawWall(w, {})}</svg>`; const im = new Image(); im.onload = () => res(im); im.onerror = () => res(null); im.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg); }); }
  async function composite() {
    const c = document.createElement('canvas'); c.width = 1800; c.height = 1100; const g = c.getContext('2d');
    g.fillStyle = '#f7f3ec'; g.fillRect(0, 0, 1800, 1100);
    if (K) { const im = await new Promise(r => { const i = new Image(); i.onload = () => r(i); i.src = K.snapshot(); }); const s = Math.max(640 / im.height, 1800 / im.width); g.save(); g.beginPath(); g.rect(0, 0, 1800, 640); g.clip(); g.drawImage(im, (1800 - im.width * s) / 2, (640 - im.height * s) / 2, im.width * s, im.height * s); g.restore(); }
    const ws = Object.keys(P.rows); const imgs = await Promise.all(ws.map(elevImg)); let x = 40; const tot = ws.reduce((a, w) => a + wallLen(w) + 8, 0), sc = Math.min(1.25, (1720 - 30 * (ws.length - 1)) / tot);
    imgs.forEach((im, i) => { if (!im) return; const w = (wallLen(ws[i]) + 8) * sc, h = (H - 4) * sc; g.drawImage(im, x, 1060 - h, w, h); x += w + 30; });
    g.fillStyle = 'rgba(20,18,16,.72)'; g.fillRect(0, 0, 1800, 84); g.fillStyle = '#fff'; g.font = '600 34px Georgia, serif'; g.fillText('Mein Küchenentwurf', 40, 54); g.font = '19px system-ui, sans-serif'; g.fillText(STUDIO, 420, 54);
    return c;
  }
  $$('[data-ksend]').forEach(b => b.addEventListener('click', async () => {
    const k = b.dataset.ksend, name = ($('[name="Name"]') || {}).value || '';
    const link = location.href.split('#')[0] + lastHash;
    const text = `${GREET},\n\nich habe meine Küche online geplant:\n\n${summary()}\n\nEntwurf ansehen: ${link}${name ? '\n\n' + name : ''}`;
    if (k === 'wa') window.open(WA + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
    if (k === 'img') { const c = await composite(); const a = document.createElement('a'); a.download = 'mein-kuechenentwurf.jpg'; a.href = c.toDataURL('image/jpeg', .9); a.click(); }
    if (k === 'link') { try { await navigator.clipboard.writeText(link); b.textContent = 'Link kopiert ✓'; } catch (e) { prompt('Link zum Entwurf:', link); } }
  }));
  const form = $('[data-kp-form]');
  if (form) {
    const b0 = $('[type="submit"]', form);
    form.addEventListener('submit', async e => {
      const fi = $('[data-files]', form), files = fi ? fi.files : []; let total = 0; for (const f of files) total += f.size;
      if (total > 9.5e6) { e.preventDefault(); $('[data-form-msg]', form).textContent = 'Die Dateien sind zusammen größer als 10 MB.'; return; }
      $('[name="Entwurf"]', form).value = summary() + '\n\nLink: ' + location.href.split('#')[0] + lastHash;
      $('[name="_next"]', form).value = location.href.split('#')[0].split('?')[0] + '?gesendet=1'; try { sessionStorage.setItem('kp-last', lastHash); } catch (er) {}
      if (window.DataTransfer) {
        e.preventDefault(); b0.disabled = true; b0.textContent = 'Wird gesendet …';
        try { const c = await composite(); const blob = await new Promise(r => c.toBlob(r, 'image/jpeg', .85)); const dt = new DataTransfer(); dt.items.add(new File([blob], 'kuechenentwurf.jpg', { type: 'image/jpeg' })); $('[name="Entwurf-Bild"]', form).files = dt.files; } catch (err) { }
        HTMLFormElement.prototype.submit.call(form);
      }
    });
    const fi = $('[data-files]', form); if (fi) fi.addEventListener('change', e => { $('[data-filelist]', form).innerHTML = [...e.target.files].map(f => `<li>${f.name} <em>${(f.size / 1e6).toFixed(1).replace('.', ',')} MB</em></li>`).join(''); });
  }

  /* ---------------- Start ---------------- */
  if (!fromHash()) fresh('l');
  const qAh = +(new URLSearchParams(location.search).get('ah') || 0);
  if (qAh >= 80 && qAh <= 110) { P.ah = qAh; setTimeout(() => toast(`Ihre Arbeitshöhe ${qAh} cm ist übernommen – sehen Sie den höheren Sockel?`), 2600); }
  renderPal(); change(); go(/[?&]gesendet=1/.test(location.search) ? 3 : 1);
  if (/[?&]gesendet=1/.test(location.search)) { const n = $('[data-sent]'); if (n) n.hidden = false; }
  const io = new IntersectionObserver(([en]) => { if (en.isIntersecting) { io.disconnect(); load3D(); } }); io.observe(host3);
  // Einmaliger Hinweis
  setTimeout(() => toast(innerWidth < 1000 ? 'Tipp: Schrank unten antippen oder nach oben in die Wand ziehen.' : 'Tipp: Schränke links anfassen und in die Wand ziehen.'), 900);
})();
