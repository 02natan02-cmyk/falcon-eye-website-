/* Freier Küchenplaner (Grundriss + 3D) – Entwurf Falcon Eye */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = $('[data-planner]'); if (!root) return;
  const MAIL = root.dataset.mail, WA = root.dataset.wa, STUDIO = root.dataset.studio || 'Pellegrin Küchenstudio · St. Wendel', GREET = root.dataset.greet || 'Hallo Herr Pellegrin', ACC = root.dataset.acc || '#c0673f';
  const SVGNS = 'http://www.w3.org/2000/svg';

  /* ---------------- Katalog ---------------- */
  const CAT = {
    us: { n: 'Unterschrank', k: 'US', g: 'unter', layer: 'base', d: 60, w: 60, ws: [30, 40, 45, 50, 60, 80, 90, 100, 120], vs: [['schub', 'Schubladen'], ['tuer', 'Tür']], hint: 'Mit Arbeitsplatte, 90 cm hoch' },
    sp: { n: 'Spülenschrank', k: 'SP', g: 'unter', layer: 'base', d: 60, w: 80, ws: [60, 80, 90, 100], hint: 'Mit Spüle und Armatur' },
    kf: { n: 'Kochfeldschrank', k: 'KF', g: 'unter', layer: 'base', d: 60, w: 80, ws: [60, 80, 90], vs: [['bora', 'Mit Abzug im Kochfeld'], ['normal', 'Ohne Abzug']], hint: 'Kochfeld mit Auszügen darunter' },
    gs: { n: 'Geschirrspüler', k: 'GS', g: 'unter', layer: 'base', d: 60, w: 60, ws: [45, 60], hint: 'Vollintegriert' },
    ec: { n: 'Eckschrank', k: 'EC', g: 'unter', layer: 'base', d: 60, w: 110, ws: [90, 100, 110, 120], hint: 'Mit Karussell oder LeMans-Auszug' },
    hs: { n: 'Hochschrank', k: 'HS', g: 'hoch', layer: 'base', tall: 1, d: 60, w: 60, ws: [45, 60], vs: [['backofen', 'Backofen auf Augenhöhe'], ['dampf', 'Backofen + Dampfgarer'], ['kuehl', 'Kühl-Gefrier-Kombi'], ['vorrat', 'Vorrat / Apothekerauszug']], hint: '216 cm hoch' },
    kfr: { n: 'Side-by-Side', k: 'SbS', g: 'hoch', layer: 'base', tall: 1, d: 70, w: 90, ws: [90], hint: 'Freistehender Kühlschrank' },
    ws: { n: 'Hängeschrank', k: 'HÄ', g: 'oben', layer: 'wall', d: 35, w: 60, ws: [30, 40, 45, 50, 60, 80, 90, 100, 120], vs: [['tuer', 'Geschlossen'], ['glas', 'Glastür'], ['offen', 'Offenes Regal']], hint: 'Mit LED-Unterbauleuchte' },
    hb: { n: 'Wandhaube', k: 'DA', g: 'oben', layer: 'wall', d: 50, w: 90, ws: [60, 90, 120], hint: 'Dunstabzug über dem Kochfeld' },
    rg: { n: 'Wandboard', k: 'BO', g: 'oben', layer: 'wall', d: 26, w: 120, ws: [60, 90, 120, 150, 180], hint: 'Offene Ablage' },
    in: { n: 'Kücheninsel', k: 'IN', g: 'insel', layer: 'base', free: 1, d: 100, ds: [90, 100, 120], w: 210, ws: [120, 150, 180, 210, 240, 270, 300], vs: [['kochfeld', 'Mit Kochfeld'], ['spuele', 'Mit Spüle'], ['frei', 'Freie Arbeitsfläche']], hint: 'Mit Sitzplätzen' },
    th: { n: 'Theke', k: 'TH', g: 'insel', layer: 'base', free: 1, d: 40, w: 150, ws: [120, 150, 180, 240], hint: 'Bar mit Hockern, 110 cm hoch' },
  };
  const GROUPS = [['unter', 'Unterschränke'], ['hoch', 'Hochschränke & Kühlen'], ['oben', 'Oben an der Wand'], ['insel', 'Insel & Theke']];
  const OPEN = { fenster: { n: 'Fenster', ws: [60, 80, 100, 120, 150, 200] }, tuer: { n: 'Tür', ws: [80, 90, 100] }, durchgang: { n: 'Offener Durchgang', ws: [100, 150, 200, 250] } };
  const FRONTS = [['Schwarz matt', '#2b2c2e'], ['Graphit', '#4a4c50'], ['Weiß', '#f4f2ee'], ['Kaschmir', '#ddd3c4'], ['Sand', '#c9b79c'], ['Salbei', '#7d8c75'], ['Nachtblau', '#1f2a3c'], ['Bordeaux', '#5e2229'], ['Eiche', 'wood:eiche'], ['Nussbaum', 'wood:nuss']];
  const TOPS = [['eiche', 'Eiche', '#b98a5c'], ['nuss', 'Nussbaum', '#6b4a32'], ['beton', 'Beton', '#9b9893'], ['marmor', 'Marmor schwarz', '#1d1d1f'], ['keramik', 'Keramik hell', '#ecebe7'], ['schwarz', 'Schwarz', '#161616']];
  const HANDLES = [['grifflos', 'Grifflos'], ['bar', 'Edelstahl'], ['schwarz', 'Schwarz'], ['gold', 'Messing']];
  const FINISHES = [['matt', 'Matt'], ['seide', 'Seidenmatt'], ['glanz', 'Hochglanz']];
  const FLOORS = [['eiche', 'Holz hell', '#c9a77f'], ['dunkel', 'Holz dunkel', '#5c4330'], ['grau', 'Fliese grau', '#a7a49f'], ['hell', 'Fliese hell', '#e8e4dd']];
  const WALLC = [['#f2eee8', 'Weiß'], ['#e6dccd', 'Creme'], ['#cfd6cf', 'Salbei'], ['#c9ccd2', 'Grau'], ['#2d2f33', 'Anthrazit']];
  const WALLS = { N: 'oben', E: 'rechts', S: 'unten', W: 'links' };

  /* ---------------- Zustand ---------------- */
  let uid = 1;
  const S = { room: { w: 480, d: 380, walls: { N: 1, E: 1, S: 1, W: 1 } }, open: [], items: [], style: { front: '#2b2c2e', wood: null, finish: 'matt', top: 'eiche', handle: 'grifflos', wall: '#f2eee8', floor: 'eiche' } };
  let sel = null, selOpen = null;
  const depth = it => it.d || CAT[it.t].d;
  const layer = it => CAT[it.t].layer;
  function bb(it) { const d = depth(it), rot = (it.r || 0) % 180 !== 0, hw = (rot ? d : it.w) / 2, hd = (rot ? it.w : d) / 2; return { x0: it.x - hw, x1: it.x + hw, z0: it.z - hd, z1: it.z + hd }; }
  const wallLen = w => (w === 'N' || w === 'S') ? S.room.w : S.room.d;
  const wallR = { N: 0, W: 90, S: 180, E: 270 };
  const rWall = r => ({ 0: 'N', 90: 'W', 180: 'S', 270: 'E' })[r];
  // Position eines Elements an einer Wand (along = Mitte entlang der Wand in Wandrichtung)
  function placeAt(it, wall, along) {
    const d = depth(it), W = S.room.w, D = S.room.d; it.r = wallR[wall];
    if (wall === 'N') { it.x = along; it.z = d / 2; } else if (wall === 'S') { it.x = W - along; it.z = D - d / 2; } else if (wall === 'W') { it.z = D - along; it.x = d / 2; } else { it.z = along; it.x = W - d / 2; }
  }
  function alongOf(it) { const wall = rWall(it.r), W = S.room.w, D = S.room.d; return { N: it.x, S: W - it.x, W: D - it.z, E: it.z }[wall]; }
  function conflict(a, b) { const la = layer(a), lb = layer(b); if (la === lb) return true; const ta = CAT[a.t].tall || a.t === 'kfr', tb = CAT[b.t].tall || b.t === 'kfr'; return (ta && lb === 'wall') || (tb && la === 'wall'); }
  function overlaps(a, b) { const A = bb(a), B = bb(b); return A.x0 < B.x1 - 1 && A.x1 > B.x0 + 1 && A.z0 < B.z1 - 1 && A.z1 > B.z0 + 1; }
  function collisions() { const bad = new Set(), pairs = []; for (let i = 0; i < S.items.length; i++) for (let j = i + 1; j < S.items.length; j++) { const a = S.items[i], b = S.items[j]; if (conflict(a, b) && overlaps(a, b)) { bad.add(a.id); bad.add(b.id); pairs.push([a, b]); } } S.items.forEach(it => { const B = bb(it); if (B.x0 < -1 || B.z0 < -1 || B.x1 > S.room.w + 1 || B.z1 > S.room.d + 1) bad.add(it.id); }); return { bad, pairs }; }
  function add(t, props = {}) { const c = CAT[t]; const it = { id: uid++, t, w: c.w, x: 0, z: 0, r: 0, ...(c.vs ? { v: c.vs[0][0] } : {}), ...(c.ds ? { d: c.d } : {}), ...props }; S.items.push(it); return it; }

  /* ---------------- Vorlagen ---------------- */
  function fillRow(wall, from, to, seq, opts = {}) {
    let a = from;
    const put = (t, w, v) => { const it = add(t, { w, ...(v ? { v } : {}) }); placeAt(it, wall, a + w / 2); a += w; return it; };
    seq.forEach(([t, w, v]) => { if (a + w <= to + .1) put(t, w, v); });
    const rest = [120, 100, 90, 80, 60, 50, 45, 40, 30];
    while (to - a >= 30) { const w = rest.find(x => x <= to - a); put('us', w); }
    if (opts.wallCab) { let b = from + (opts.wallFrom || 0); while (to - b >= 30) { const w = [90, 80, 60, 50, 45, 40, 30].find(x => x <= to - b); const it = add('ws', { w }); placeAt(it, wall, b + w / 2); b += w; } }
  }
  function preset(k) {
    S.items = []; S.open = []; const W = S.room.w, D = S.room.d;
    const win = (wall, s, w) => S.open.push({ id: uid++, t: 'fenster', wall, s, w, y: 105, h: 115 });
    const door = (wall, s, w = 90, t = 'tuer') => S.open.push({ id: uid++, t, wall, s, w });
    const tallN = [['hs', 60, 'kuehl'], ['hs', 60, 'backofen']];
    if (k === 'leer') { win('N', Math.round(W / 2 - 60), 120); door('S', 40); }
    if (k === 'zeile') { win('N', 260, 120); door('S', 60); fillRow('N', 0, W, [...tallN, ['us', 60], ['kf', 80, 'bora'], ['us', 60], ['sp', 80], ['gs', 60]]); wallsOver('N', 120, W); }
    if (k === 'zwei') { win('E', 60, 100); door('W', 40); fillRow('N', 0, W, [...tallN, ['us', 60], ['sp', 80], ['gs', 60]]); fillRow('S', 0, W - 100, [['us', 60], ['kf', 80, 'bora'], ['us', 60]]); wallsOver('N', 120, W); }
    if (k === 'l') { win('N', W - 200, 120); door('S', 40); fillRow('N', 0, W, [['ec', 110], ['us', 60], ['kf', 80, 'bora'], ['us', 60], ['us', 30], ['sp', 80], ['gs', 60]]); fillRow('W', 0, D - 60 - 110, [...tallN.reverse(), ['us', 60]], {}); wallsOver('N', 0, W); }
    if (k === 'u') { win('N', Math.round(W / 2 - 60), 120); door('S', Math.round(W / 2 - 45)); fillRow('N', 60, W - 60, [['us', 60], ['sp', 80], ['gs', 60]]); fillRow('W', 0, D - 60 - 40, [['us', 60], ['kf', 80, 'bora'], ['us', 60]]); fillRow('E', 40, D, [['us', 60], ['us', 60], ...tallN]); }
    if (k === 'insel') { win('N', Math.round(W / 2 + 20), 120); door('S', 40); fillRow('N', 0, W, [...tallN, ['hs', 60, 'vorrat'], ['us', 60], ['us', 60], ['sp', 80], ['gs', 60]]); const iw = Math.min(240, Math.max(150, W - 220)); add('in', { w: iw - iw % 30, d: 100, v: 'kochfeld', x: W / 2 + 20, z: 60 + 115 + 50, r: 0 }); wallsOver('N', 180, W); }
    if (k === 'theke') { win('N', W - 190, 120); door('E', D - 120); fillRow('N', 0, W, [['ec', 110], ['us', 60], ['kf', 80, 'bora'], ['us', 60], ['sp', 80], ['gs', 60]]); fillRow('W', 0, D - 170, [...tallN]); add('th', { w: 150, x: 60 + 120 + 75, z: D - 90, r: 180 }); wallsOver('N', 110, W); }
    // Fenster freihalten: Hängeschränke über Fenster entfernen
    S.items = S.items.filter(it => !(layer(it) === 'wall' && overWindow(it)));
    sel = null; selOpen = null;
  }
  function wallsOver(wall, from, to) { let b = from; while (to - b >= 30) { const w = [90, 80, 60, 50, 45, 40, 30].find(x => x <= to - b); const it = add('ws', { w }); placeAt(it, wall, b + w / 2); b += w; } }
  function overWindow(it) { const wall = rWall(it.r); if (!wall) return false; const a = alongOf(it); return S.open.some(o => o.t === 'fenster' && o.wall === wall && a + it.w / 2 > o.s + 2 && a - it.w / 2 < o.s + o.w - 2); }

  /* ---------------- Snapping ---------------- */
  function snapItem(it, px, pz) {
    const c = CAT[it.t], d = depth(it), W = S.room.w, D = S.room.d, wl = S.room.walls;
    if (c.free) { it.x = Math.round(px / 5) * 5; it.z = Math.round(pz / 5) * 5; edgeSnapFree(it); return; }
    const cand = [['N', pz - d / 2], ['S', D - pz - d / 2], ['W', px - d / 2], ['E', W - px - d / 2]].filter(([k]) => wl[k]).sort((a, b) => a[1] - b[1]);
    const lim = layer(it) === 'wall' ? 1e9 : 55;
    if (cand.length && cand[0][1] < lim) {
      const wall = cand[0][0], len = wallLen(wall);
      let along = { N: px, S: W - px, W: D - pz, E: pz }[wall];
      along = Math.max(it.w / 2, Math.min(len - it.w / 2, along));
      placeAt(it, wall, Math.round(along));
      // Kanten an Nachbarn / Ecken andocken
      const B = bb(it), horiz = wall === 'N' || wall === 'S';
      const lo = horiz ? B.x0 : B.z0, hi = horiz ? B.x1 : B.z1;
      const edges = [0, horiz ? W : D];
      S.items.forEach(o => { if (o === it) return; if (layer(o) !== layer(it) && !(layer(it) === 'wall' && layer(o) === 'base')) return; const ob = bb(o); edges.push(horiz ? ob.x0 : ob.z0, horiz ? ob.x1 : ob.z1); });
      let best = null;
      edges.forEach(e => { [[lo, e - lo], [hi, e - hi]].forEach(([, dlt]) => { if (Math.abs(dlt) < 14 && (!best || Math.abs(dlt) < Math.abs(best))) best = dlt; }); });
      if (best) { if (horiz) it.x += best; else it.z += best; }
      else { if (horiz) it.x = Math.round(it.x / 5) * 5; else it.z = Math.round(it.z / 5) * 5; }
    } else { it.x = Math.round(px / 5) * 5; it.z = Math.round(pz / 5) * 5; edgeSnapFree(it); }
  }
  function edgeSnapFree(it) {
    const B = bb(it); let bx = null, bz = null;
    S.items.forEach(o => { if (o === it || layer(o) !== layer(it)) return; const ob = bb(o); [[B.x0, ob.x0], [B.x0, ob.x1], [B.x1, ob.x0], [B.x1, ob.x1]].forEach(([a, b]) => { const d = b - a; if (Math.abs(d) < 8 && (bx === null || Math.abs(d) < Math.abs(bx))) bx = d; }); [[B.z0, ob.z0], [B.z0, ob.z1], [B.z1, ob.z0], [B.z1, ob.z1]].forEach(([a, b]) => { const d = b - a; if (Math.abs(d) < 8 && (bz === null || Math.abs(d) < Math.abs(bz))) bz = d; }); });
    if (bx) it.x += bx; if (bz) it.z += bz;
  }
  function findSpot(it) {
    if (CAT[it.t].free) { it.x = S.room.w / 2; it.z = S.room.d / 2 + 20; it.r = 0; return; }
    const order = ['N', 'W', 'E', 'S'].filter(k => S.room.walls[k]);
    for (const wall of order) { const len = wallLen(wall); for (let a = it.w / 2; a <= len - it.w / 2; a += 5) { placeAt(it, wall, a); if (layer(it) === 'wall' && overWindow(it)) continue; if (!S.items.some(o => o !== it && conflict(o, it) && overlaps(o, it))) return; } }
    it.x = S.room.w / 2; it.z = S.room.d / 2; it.r = 0;
  }

  /* ---------------- Prüfungen ---------------- */
  const isSink = it => it.t === 'sp' || (it.t === 'in' && it.v === 'spuele');
  const isCook = it => it.t === 'kf' || (it.t === 'in' && it.v === 'kochfeld');
  const isFridge = it => (it.t === 'hs' && it.v === 'kuehl') || it.t === 'kfr';
  const topCarrier = it => ['us', 'gs', 'ec', 'sp', 'kf'].includes(it.t);
  const cen = it => ({ x: it.x, z: it.z });
  function rowGap(a, b) { if (a.r !== b.r || CAT[a.t].free || CAT[b.t].free) return null; const wall = rWall(a.r); const ba = bb(a), bb2 = bb(b); const horiz = wall === 'N' || wall === 'S'; if (horiz ? Math.abs(ba.z0 - bb2.z0) > 2 : Math.abs(ba.x0 - bb2.x0) > 2) return null; const [a0, a1, b0, b1] = horiz ? [ba.x0, ba.x1, bb2.x0, bb2.x1] : [ba.z0, ba.z1, bb2.z0, bb2.z1]; const lo = Math.min(a1, b1), hi = Math.max(a0, b0); if (hi < lo) return 0; // Zwischenraum nur aus Arbeitsflächen?
    const blocked = S.items.some(o => o !== a && o !== b && o.r === a.r && !topCarrier(o) && layer(o) === 'base' && (() => { const ob = bb(o); const [o0, o1] = horiz ? [ob.x0, ob.x1] : [ob.z0, ob.z1]; return o0 < hi && o1 > lo; })());
    return blocked ? -1 : hi - lo; }
  function clearance() {
    // kleinster Abstand zwischen gegenüberliegenden Fronten (Laufweg)
    let min = null, where = '';
    const bases = S.items.filter(it => layer(it) === 'base');
    for (let i = 0; i < bases.length; i++) for (let j = i + 1; j < bases.length; j++) {
      const a = bases[i], b = bases[j]; if (!(CAT[a.t].free || CAT[b.t].free || Math.abs((a.r || 0) - (b.r || 0)) === 180)) continue;
      const A = bb(a), B = bb(b);
      const ox = Math.min(A.x1, B.x1) - Math.max(A.x0, B.x0), oz = Math.min(A.z1, B.z1) - Math.max(A.z0, B.z0);
      let gap = null; if (ox > 20 && oz <= 0) gap = Math.max(B.z0 - A.z1, A.z0 - B.z1); else if (oz > 20 && ox <= 0) gap = Math.max(B.x0 - A.x1, A.x0 - B.x1);
      if (gap !== null && gap >= 0 && (min === null || gap < min)) { min = gap; where = (CAT[a.t].free ? CAT[a.t].n : CAT[b.t].free ? CAT[b.t].n : 'den Zeilen'); }
    }
    return { min, where };
  }
  function checks() {
    const out = [], it = S.items, sinks = it.filter(isSink), cooks = it.filter(isCook), fr = it.filter(isFridge);
    const ok = (t, d) => out.push(['ok', t, d]), warn = (t, d) => out.push(['warn', t, d]), info = (t, d) => out.push(['info', t, d]);
    if (!it.length) { info('Noch leer', 'Wählen Sie unter „Raum" eine Vorlage oder stellen Sie unter „Einrichten" Schränke in den Raum.'); return out; }
    sinks.length ? ok('Spüle geplant', '') : warn('Noch keine Spüle', 'Fügen Sie einen Spülenschrank hinzu – am besten unter dem Fenster.');
    cooks.length ? ok('Kochfeld geplant', '') : warn('Noch kein Kochfeld', 'Fügen Sie einen Kochfeldschrank hinzu oder planen Sie das Kochfeld in der Insel.');
    fr.length ? ok('Kühlschrank geplant', '') : warn('Noch kein Kühlschrank', 'Ein Hochschrank „Kühl-Gefrier-Kombi" oder ein Side-by-Side fehlt.');
    const col = collisions(); if (col.bad.size) warn('Elemente überschneiden sich', `${col.bad.size} Elemente stoßen ineinander oder ragen aus dem Raum – im Grundriss rot markiert.`); else ok('Alles passt in den Raum', 'Keine Überschneidungen.');
    if (sinks.length && cooks.length) {
      let g = null; sinks.forEach(a => cooks.forEach(b => { const v = rowGap(a, b); if (v !== null && v >= 0 && (g === null || v < g)) g = v; }));
      if (g !== null) { if (g < 60) warn(`Nur ${Math.round(g)} cm Arbeitsfläche zwischen Spüle und Kochfeld`, 'Ideal sind 90–120 cm – hier wird geschnippelt. Schieben Sie einen Unterschrank dazwischen.'); else ok(`${Math.round(g)} cm Arbeitsfläche zwischen Spüle und Kochfeld`, g >= 90 ? 'Perfekt zum Vorbereiten.' : 'Reicht – 90 cm wären noch bequemer.'); }
      else ok('Spüle und Kochfeld getrennt', 'Zwei Arbeitszonen – praktisch, wenn zwei Personen kochen.');
    }
    const gs = it.filter(x => x.t === 'gs');
    if (gs.length && sinks.length) { const adj = gs.some(a => sinks.some(b => { const v = rowGap(a, b); return v !== null && v >= 0 && v <= 2; })); adj ? ok('Geschirrspüler neben der Spüle', 'Kurze Wege, kein Tropfen über den Boden.') : warn('Geschirrspüler nicht neben der Spüle', 'Direkt daneben sparen Sie Wege und Wasserleitungen.'); }
    else if (!gs.length) info('Kein Geschirrspüler', 'Gewollt? Er passt in 45 oder 60 cm Breite.');
    const cl = clearance(); if (cl.min !== null) { if (cl.min < 90) warn(`Laufweg bei ${cl.where} nur ${Math.round(cl.min)} cm`, 'Mindestens 100 cm, besser 120 cm – sonst wird es eng, wenn Schubladen offen sind.'); else ok(`Laufweg bei ${cl.where}: ${Math.round(cl.min)} cm`, cl.min >= 120 ? 'Genug Platz für zwei.' : 'Passt – 120 cm wären komfortabel.'); }
    if (sinks.length && cooks.length && fr.length) { const P = [cen(sinks[0]), cen(cooks[0]), cen(fr[0])]; const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z) / 100; const sum = dist(P[0], P[1]) + dist(P[1], P[2]) + dist(P[2], P[0]); (sum >= 3.6 && sum <= 7.9) ? ok(`Arbeitsdreieck ${sum.toFixed(1).replace('.', ',')} m`, 'Spüle, Kochfeld und Kühlschrank liegen gut zueinander.') : warn(`Arbeitsdreieck ${sum.toFixed(1).replace('.', ',')} m`, sum < 3.6 ? 'Sehr kompakt – achten Sie auf genug Abstellfläche.' : 'Lange Wege. Ideal sind 3,6 bis 7,9 m.'); }
    const nearTall = cooks.filter(c => c.t === 'kf').some(c => S.items.some(o => (CAT[o.t].tall) && rowGap(c, o) !== null && rowGap(c, o) >= 0 && rowGap(c, o) < 30) || (() => { const a = alongOf(c), len = wallLen(rWall(c.r)); return a - c.w / 2 < 30 || len - a - c.w / 2 < 30; })());
    if (nearTall) warn('Kochfeld zu dicht an Hochschrank oder Wand', 'Seitlich mindestens 30 cm Arbeitsfläche lassen – Töpfe und Griffe brauchen Platz.');
    if (it.some(x => layer(x) === 'wall' && overWindow(x))) warn('Hängeschrank vor dem Fenster', 'Verschieben Sie ihn oder planen Sie dort ein Wandboard.');
    if (it.some(x => x.t === 'hb') && !cooks.some(c => c.t === 'kf')) info('Wandhaube ohne Kochfeld darunter', 'Die Haube sollte direkt über dem Kochfeld hängen.');
    return out;
  }
  function bom() {
    const groups = {}; S.items.forEach(it => { const c = CAT[it.t]; const key = c.n + (it.v && c.vs ? ' – ' + c.vs.find(v => v[0] === it.v)[1] : ''); (groups[key] = groups[key] || []).push(it.w + (it.t === 'in' ? '×' + (it.d || 100) : '')); });
    const top = S.items.filter(topCarrier).reduce((a, b) => a + b.w, 0) + S.items.filter(x => x.t === 'in').reduce((a, b) => a + b.w, 0);
    return { groups, top };
  }

  /* ---------------- Grundriss (SVG) ---------------- */
  const svg = $('[data-plan2d]');
  let pxPerCm = 1;
  function frontFill() { return S.style.wood ? (S.style.wood === 'eiche' ? '#c79c6e' : '#7b5a40') : S.style.front; }
  function lum(hex) { const n = parseInt(hex.slice(1), 16); return ((n >> 16) * .3 + ((n >> 8) & 255) * .59 + (n & 255) * .11) / 255; }
  function wallSeg(o) { const W = S.room.w, D = S.room.d, a0 = o.s, a1 = o.s + o.w; return { N: [a0, 0, a1, 0], S: [W - a0, D, W - a1, D], W: [0, D - a0, 0, D - a1], E: [W, a0, W, a1] }[o.wall]; }
  function render2D() {
    const W = S.room.w, D = S.room.d, M = 70, col = collisions().bad;
    svg.setAttribute('viewBox', `${-M} ${-M} ${W + 2 * M} ${D + 2 * M}`);
    const r = svg.getBoundingClientRect(); pxPerCm = r.width ? Math.min(r.width / (W + 2 * M), r.height / (D + 2 * M)) : 1;
    const fs = Math.max(9, 12.5 / pxPerCm), sw = 1 / pxPerCm;
    const fF = frontFill(), tC = lum(fF) > .55 ? '#1c1a17' : '#fff';
    let h = `<defs><pattern id="pg" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M50 0H0V50" fill="none" stroke="rgba(28,26,23,.07)" stroke-width="${sw}"/></pattern><pattern id="ph" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="${ACC}" stroke-width="${1.6 * sw}" opacity=".5"/></pattern></defs>`;
    h += `<rect x="${-M}" y="${-M}" width="${W + 2 * M}" height="${D + 2 * M}" fill="#f7f3ec"/><rect x="0" y="0" width="${W}" height="${D}" fill="#fffdf9"/><rect x="0" y="0" width="${W}" height="${D}" fill="url(#pg)"/>`;
    // Wände
    const T = 14, wl = S.room.walls;
    const wallRect = { N: [-T, -T, W + 2 * T, T], S: [-T, D, W + 2 * T, T], W: [-T, -T, T, D + 2 * T], E: [W, -T, T, D + 2 * T] };
    for (const k in wallRect) { const [x, y, w, hh] = wallRect[k]; h += wl[k] ? `<rect data-wall="${k}" x="${x}" y="${y}" width="${w}" height="${hh}" fill="#3a352f"/>` : `<rect data-wall="${k}" x="${x}" y="${y}" width="${w}" height="${hh}" fill="transparent" stroke="#b9ada0" stroke-width="${sw}" stroke-dasharray="${6 * sw} ${5 * sw}"/>`; }
    // Öffnungen
    S.open.forEach(o => {
      if (!wl[o.wall]) return; const [x0, y0, x1, y1] = wallSeg(o), on = selOpen === o.id;
      const horiz = y0 === y1, nx = horiz ? 0 : (o.wall === 'W' ? 1 : -1), nz = horiz ? (o.wall === 'N' ? 1 : -1) : 0;
      const rx = Math.min(x0, x1) - (horiz ? 0 : (o.wall === 'W' ? T : 0)), ry = Math.min(y0, y1) - (horiz ? (o.wall === 'N' ? T : 0) : 0), rw = horiz ? Math.abs(x1 - x0) : T, rh = horiz ? T : Math.abs(y1 - y0);
      if (o.t === 'fenster') h += `<g data-open="${o.id}" style="cursor:grab"><rect x="${rx}" y="${ry}" width="${rw}" height="${rh}" fill="#dcefff" stroke="${on ? ACC : '#6f8fa8'}" stroke-width="${(on ? 3 : 1.2) * sw}"/><line x1="${x0 - nx * T / 2}" y1="${y0 - nz * T / 2}" x2="${x1 - nx * T / 2}" y2="${y1 - nz * T / 2}" stroke="#6f8fa8" stroke-width="${sw}"/></g>`;
      else { const len = o.w, sx = x0, sy = y0, ex = x0 + nx * len, ey = y0 + nz * len; h += `<g data-open="${o.id}" style="cursor:grab"><rect x="${rx}" y="${ry}" width="${rw}" height="${rh}" fill="#fffdf9" stroke="${on ? ACC : 'none'}" stroke-width="${3 * sw}"/>${o.t === 'tuer' ? `<path d="M${sx} ${sy} L${ex} ${ey} A${len} ${len} 0 0 ${(o.wall === 'N' || o.wall === 'E') ? 1 : 1} ${x1} ${y1}" fill="rgba(192,103,63,.05)" stroke="#9a8f82" stroke-width="${sw}" stroke-dasharray="${4 * sw} ${3 * sw}"/>` : ''}</g>`; }
    });
    // Maßketten
    h += `<g fill="#6e655b" font-family="DM Sans,system-ui,sans-serif" font-size="${fs}" text-anchor="middle"><text x="${W / 2}" y="${-T - 12 / pxPerCm}">${W} cm</text><text transform="translate(${-T - 12 / pxPerCm} ${D / 2}) rotate(-90)">${D} cm</text></g>`;
    // Elemente: erst Boden, dann Wandebene
    const draw = it => {
      const c = CAT[it.t], d = depth(it), isW = c.layer === 'wall', on = sel === it.id, bad = col.has(it.id);
      let inner = '';
      const body = isW ? `fill="url(#ph)" stroke="${bad ? '#d33' : on ? ACC : ACC}" stroke-dasharray="${on ? 0 : 5 * sw} ${3 * sw}"` : `fill="${c.free ? '#e8e1d6' : c.tall ? shade(fF, -.12) : fF}" stroke="${bad ? '#d33' : on ? ACC : 'rgba(0,0,0,.35)'}"`;
      inner += `<rect x="${-it.w / 2}" y="${-d / 2}" width="${it.w}" height="${d}" rx="${2}" ${body} stroke-width="${(on || bad ? 3 : 1) * sw}"/>`;
      if (!isW) inner += `<line x1="${-it.w / 2 + 2}" y1="${d / 2 - 2}" x2="${it.w / 2 - 2}" y2="${d / 2 - 2}" stroke="${tC}" stroke-opacity=".55" stroke-width="${2 * sw}"/>`;
      if (isSink(it)) { const cx = it.t === 'in' ? 0 : 0; inner += `<rect x="${cx - Math.min(25, it.w / 2 - 8)}" y="${-d / 2 + 12}" width="${Math.min(50, it.w - 16)}" height="36" rx="6" fill="#d9dde0" stroke="#555" stroke-width="${sw}"/><circle cx="${cx}" cy="${-d / 2 + 30}" r="3" fill="#555"/>`; }
      if (isCook(it)) { const s = Math.min(1, it.w / 80); [[-17, -12], [17, -12], [-17, 12], [17, 12]].forEach(([dx, dz]) => { inner += `<circle cx="${dx * s}" cy="${(it.t === 'in' ? -10 : -2) + dz}" r="${9 * s}" fill="none" stroke="${tC}" stroke-opacity=".8" stroke-width="${1.4 * sw}"/>`; }); }
      if (it.t === 'in' || it.t === 'th') { const n = Math.max(2, Math.floor(it.w / 55)); for (let i = 0; i < n; i++) inner += `<circle cx="${-it.w / 2 + it.w / (n + 1) * (i + 1)}" cy="${d / 2 + 22}" r="15" fill="#d8c8b4" stroke="rgba(0,0,0,.25)" stroke-width="${sw}"/>`; }
      const lbl = c.k + (c.ws.length > 1 ? ' ' + it.w : '');
      return `<g data-id="${it.id}" transform="translate(${it.x} ${it.z}) rotate(${-(it.r || 0)})" style="cursor:grab">${inner}</g><text x="${it.x}" y="${it.z + fs * .35}" font-family="DM Sans,system-ui,sans-serif" font-weight="700" font-size="${Math.min(fs, Math.max(it.w, d) / 3.4)}" text-anchor="middle" fill="${isW ? '#8a4a2a' : c.free ? '#5c534a' : tC}" pointer-events="none">${lbl}</text>`;
    };
    S.items.filter(it => layer(it) === 'base').forEach(it => h += draw(it));
    S.items.filter(it => layer(it) === 'wall').forEach(it => h += draw(it));
    svg.innerHTML = h;
    renderSel();
  }
  function shade(hex, a) { if (!hex.startsWith('#')) return hex; const n = parseInt(hex.slice(1), 16); let r = n >> 16, g = (n >> 8) & 255, b = n & 255; const f = v => Math.max(0, Math.min(255, Math.round(v + a * (a < 0 ? v : 255 - v)))); return '#' + ((1 << 24) + (f(r) << 16) + (f(g) << 8) + f(b)).toString(16).slice(1); }

  /* ---------------- Interaktion ---------------- */
  function svgPt(e) { const p = svg.createSVGPoint(); p.x = e.clientX; p.y = e.clientY; return p.matrixTransform(svg.getScreenCTM().inverse()); }
  let drag = null;
  svg.addEventListener('pointerdown', e => {
    const g = e.target.closest('[data-id]'), go = e.target.closest('[data-open]');
    if (g) { const it = S.items.find(x => x.id === +g.dataset.id); sel = it.id; selOpen = null; const p = svgPt(e); drag = { it, dx: p.x - it.x, dz: p.y - it.z, moved: false }; svg.setPointerCapture(e.pointerId); render2D(); e.preventDefault(); return; }
    if (go) { const o = S.open.find(x => x.id === +go.dataset.open); selOpen = o.id; sel = null; drag = { o, moved: false }; svg.setPointerCapture(e.pointerId); render2D(); e.preventDefault(); return; }
    const wEl = e.target.closest('[data-wall]'); if (wEl && e.detail === 2) { toggleWall(wEl.dataset.wall); return; }
    sel = null; selOpen = null; render2D();
  });
  svg.addEventListener('pointermove', e => {
    if (!drag) return; const p = svgPt(e); drag.moved = true;
    if (drag.it) { snapItem(drag.it, p.x - drag.dx, p.y - drag.dz); }
    else if (drag.o) moveOpen(drag.o, p.x, p.y);
    render2D(); schedule3D();
  });
  const endDrag = () => { if (drag && drag.moved) commit(); drag = null; };
  svg.addEventListener('pointerup', endDrag); svg.addEventListener('pointercancel', endDrag);
  svg.addEventListener('dblclick', e => { const w = e.target.closest('[data-wall]'); if (w) toggleWall(w.dataset.wall); });
  function moveOpen(o, px, pz) {
    const W = S.room.w, D = S.room.d, wl = S.room.walls;
    const cand = [['N', Math.abs(pz)], ['S', Math.abs(D - pz)], ['W', Math.abs(px)], ['E', Math.abs(W - px)]].filter(([k]) => wl[k]).sort((a, b) => a[1] - b[1]);
    if (!cand.length) return; o.wall = cand[0][0]; const along = { N: px, S: W - px, W: D - pz, E: pz }[o.wall];
    o.s = Math.round(Math.max(0, Math.min(wallLen(o.wall) - o.w, along - o.w / 2)) / 5) * 5;
  }
  function toggleWall(k) { S.room.walls[k] = S.room.walls[k] ? 0 : 1; commit(); renderAll(); }
  document.addEventListener('keydown', e => {
    if (/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) return;
    const it = S.items.find(x => x.id === sel); if (!it) return;
    const st = e.shiftKey ? 1 : 5, mv = { ArrowLeft: [-st, 0], ArrowRight: [st, 0], ArrowUp: [0, -st], ArrowDown: [0, st] }[e.key];
    if (mv) { it.x += mv[0]; it.z += mv[1]; e.preventDefault(); commit(); renderAll(); }
    if (e.key === 'Delete' || e.key === 'Backspace') { del(); e.preventDefault(); }
    if (e.key === 'r' || e.key === 'R') rot();
    if ((e.ctrlKey || e.metaKey) && e.key === 'z') { undo(); e.preventDefault(); }
  });
  function rot() { const it = S.items.find(x => x.id === sel); if (!it) return; it.r = ((it.r || 0) + 90) % 360; if (!CAT[it.t].free) { const wall = rWall(it.r); if (S.room.walls[wall]) placeAt(it, wall, Math.max(it.w / 2, Math.min(wallLen(wall) - it.w / 2, wall === 'N' ? it.x : wall === 'S' ? S.room.w - it.x : wall === 'W' ? S.room.d - it.z : it.z))); } commit(); renderAll(); }
  function del() { if (sel) S.items = S.items.filter(x => x.id !== sel); if (selOpen) S.open = S.open.filter(x => x.id !== selOpen); sel = selOpen = null; commit(); renderAll(); }
  function dup() { const it = S.items.find(x => x.id === sel); if (!it) return; const n = { ...it, id: uid++ }; S.items.push(n); if (CAT[n.t].free) { n.z += (n.d || CAT[n.t].d) + 20; } else findSpot(n); sel = n.id; commit(); renderAll(); }

  /* ---------------- Auswahl-Leiste ---------------- */
  const selBar = $('[data-selbar]');
  function renderSel() {
    const it = S.items.find(x => x.id === sel), o = S.open.find(x => x.id === selOpen);
    if (!it && !o) { selBar.hidden = true; return; }
    selBar.hidden = false;
    if (it) {
      const c = CAT[it.t], i = c.ws.indexOf(it.w);
      selBar.innerHTML = `<b>${c.n}</b><div class="sb-w"><button type="button" data-sb="w-" aria-label="schmaler"${i <= 0 ? ' disabled' : ''}>−</button><span>${it.w} cm</span><button type="button" data-sb="w+" aria-label="breiter"${i >= c.ws.length - 1 ? ' disabled' : ''}>+</button></div>${c.vs ? `<select data-sb="v" aria-label="Variante">${c.vs.map(([k, n]) => `<option value="${k}"${k === it.v ? ' selected' : ''}>${n}</option>`).join('')}</select>` : ''}${c.ds ? `<select data-sb="d" aria-label="Tiefe">${c.ds.map(d => `<option value="${d}"${d === (it.d || c.d) ? ' selected' : ''}>${d} cm tief</option>`).join('')}</select>` : ''}<button type="button" data-sb="rot" title="Drehen (R)">⟳ Drehen</button><button type="button" data-sb="dup" title="Kopieren">⧉</button><button type="button" data-sb="del" class="sb-del" title="Löschen (Entf)">✕</button>`;
    } else {
      const c = OPEN[o.t], i = c.ws.indexOf(o.w);
      selBar.innerHTML = `<b>${c.n}</b><div class="sb-w"><button type="button" data-sb="ow-"${i <= 0 ? ' disabled' : ''}>−</button><span>${o.w} cm</span><button type="button" data-sb="ow+"${i >= c.ws.length - 1 ? ' disabled' : ''}>+</button></div><span class="sb-h">Wand ${WALLS[o.wall]} · ziehen zum Verschieben</span><button type="button" data-sb="del" class="sb-del">✕</button>`;
    }
  }
  selBar.addEventListener('click', e => {
    const b = e.target.closest('[data-sb]'); if (!b || b.tagName === 'SELECT') return; const k = b.dataset.sb;
    const it = S.items.find(x => x.id === sel), o = S.open.find(x => x.id === selOpen);
    if (it && (k === 'w-' || k === 'w+')) { const c = CAT[it.t], i = c.ws.indexOf(it.w), n = c.ws[Math.max(0, Math.min(c.ws.length - 1, (i < 0 ? 0 : i) + (k === 'w+' ? 1 : -1)))]; it.w = n; if (!c.free && S.room.walls[rWall(it.r)]) snapItem(it, it.x, it.z); commit(); renderAll(); }
    if (o && (k === 'ow-' || k === 'ow+')) { const c = OPEN[o.t], i = c.ws.indexOf(o.w); o.w = c.ws[Math.max(0, Math.min(c.ws.length - 1, (i < 0 ? 0 : i) + (k === 'ow+' ? 1 : -1)))]; o.s = Math.min(o.s, wallLen(o.wall) - o.w); commit(); renderAll(); }
    if (k === 'rot') rot(); if (k === 'dup') dup(); if (k === 'del') del();
  });
  selBar.addEventListener('change', e => { const it = S.items.find(x => x.id === sel); if (!it) return; if (e.target.dataset.sb === 'v') it.v = e.target.value; if (e.target.dataset.sb === 'd') { it.d = +e.target.value; } commit(); renderAll(); });

  /* ---------------- 3D ---------------- */
  let K = null, t3 = 0, need3 = false;
  function schedule3D() { need3 = true; if (t3) return; t3 = setTimeout(() => { t3 = 0; if (need3 && K) { need3 = false; K.set(S); } }, 70); }
  const host3 = $('[data-plan3d]');
  function load3D() {
    return new Promise((res, rej) => { if (window.PelPlanner3D) return res(); const s = document.createElement('script'); s.src = 'js/planner3d.js'; s.onload = res; s.onerror = rej; document.head.appendChild(s); })
      .then(() => { const l = $('.pt-load', host3); if (l) l.remove(); K = PelPlanner3D(host3, {}); K.set(S); })
      .catch(() => { const l = $('.pt-load', host3); if (l) l.textContent = '3D-Ansicht konnte nicht geladen werden – der Grundriss funktioniert trotzdem.'; });
  }

  /* ---------------- Verlauf / URL ---------------- */
  const hist = [], fut = [];
  const ser = () => JSON.stringify({ r: S.room, o: S.open.map(({ id, ...o }) => o), i: S.items.map(({ id, ...i }) => i), s: S.style });
  function commit() { const j = ser(); if (hist[hist.length - 1] !== j) { hist.push(j); if (hist.length > 80) hist.shift(); fut.length = 0; } saveHash(j); updateUndo(); renderChecks(); }
  function load(j) { const o = JSON.parse(j); S.room = o.r; S.open = (o.o || []).map(x => ({ ...x, id: uid++ })); S.items = (o.i || []).map(x => ({ ...x, id: uid++ })); S.style = { ...S.style, ...o.s }; sel = selOpen = null; }
  function undo() { if (hist.length < 2) return; fut.push(hist.pop()); load(hist[hist.length - 1]); saveHash(hist[hist.length - 1]); renderAll(); updateUndo(); }
  function redo() { if (!fut.length) return; const j = fut.pop(); hist.push(j); load(j); saveHash(j); renderAll(); updateUndo(); }
  function updateUndo() { $('[data-undo]').disabled = hist.length < 2; $('[data-redo]').disabled = !fut.length; }
  const b64 = s => btoa(unescape(encodeURIComponent(s))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  const unb64 = s => decodeURIComponent(escape(atob(s.replace(/-/g, '+').replace(/_/g, '/'))));
  let lastHash = '';
  function saveHash(j) { lastHash = '#p=' + b64(j); history.replaceState(null, '', lastHash); }
  function fromHash() {
    const h = location.hash.slice(1); if (!h || '#' + h === lastHash) return false;
    try {
      if (h.startsWith('p=')) { load(unb64(h.slice(2))); return true; }
      const p = h.split('|'); // altes Format aus der Küchen-Galerie: form|front|finish|top|handle|wood
      const map = { zeile: 'zeile', zwei: 'zwei', l: 'l', u: 'u', insel: 'insel', theke: 'theke' };
      if (map[p[0]]) { preset(map[p[0]]); if (p[1]) S.style.front = '#' + p[1]; if (p[2]) S.style.finish = p[2]; if (p[3]) S.style.top = p[3]; if (p[4]) S.style.handle = p[4]; S.style.wood = p[5] || null; return true; }
    } catch (e) { }
    return false;
  }
  window.addEventListener('hashchange', () => { if (fromHash()) { commit(); renderAll(); } });

  /* ---------------- Panel ---------------- */
  const tabs = $$('[data-tab]'), panes = $$('[data-pane]');
  function goTab(i) { tabs.forEach((t, j) => { t.classList.toggle('on', j === i); t.setAttribute('aria-selected', j === i); }); panes.forEach((p, j) => p.classList.toggle('on', j === i)); if (i === 1 && innerWidth < 1100) setMode('plan'); if (i === 2 && innerWidth < 1100) setMode('3d'); if (i === 3) renderChecks(); }
  tabs.forEach((t, i) => t.addEventListener('click', () => goTab(i)));
  $$('[data-go]').forEach(b => b.addEventListener('click', () => goTab(+b.dataset.go)));
  // Raum
  const PRE = [['leer', 'Leerer Raum', 'M8 8h48v34H8z'], ['zeile', 'Zeile', 'M8 8h48v9H8z'], ['l', 'L-Form', 'M8 8h48v9H17v25H8z'], ['u', 'U-Form', 'M8 8h48v34h-9V17H17v25H8z'], ['insel', 'Mit Insel', 'M8 8h48v9H8zM20 28h26v10H20z'], ['zwei', 'Zweizeilig', 'M8 8h48v9H8zM8 33h40v9H8z'], ['theke', 'Mit Theke', 'M8 8h48v9H17v25H8zM28 32h22v6H28z']];
  $('[data-presets]').innerHTML = PRE.map(([k, n, p]) => `<button type="button" data-pre="${k}"><svg viewBox="0 0 64 50" aria-hidden="true"><path d="${p}"/></svg>${n}</button>`).join('');
  $('[data-presets]').addEventListener('click', e => { const b = e.target.closest('[data-pre]'); if (!b) return; if (S.items.length > 3 && !confirmReset()) return; preset(b.dataset.pre); commit(); renderAll(); K && K.view('perspektive'); });
  let resetAsk = 0; function confirmReset() { const n = $('[data-reset-note]'); if (Date.now() - resetAsk < 4000) { n.hidden = true; return true; } resetAsk = Date.now(); n.hidden = false; setTimeout(() => n.hidden = true, 4000); return false; }
  const rw = $('[data-room-w]'), rd = $('[data-room-d]');
  function roomInput() { const ow = S.room.w, od = S.room.d; S.room.w = Math.max(200, Math.min(900, +rw.value || 480)); S.room.d = Math.max(200, Math.min(800, +rd.value || 380)); // Elemente an S/E-Wänden mitziehen
    S.items.forEach(it => { if (CAT[it.t].free) { it.x *= S.room.w / ow; it.z *= S.room.d / od; return; } const wall = rWall(it.r); if (wall === 'S') { it.z += S.room.d - od; it.x += S.room.w - ow; } if (wall === 'E') it.x += S.room.w - ow; });
    S.open.forEach(o => { o.s = Math.min(o.s, wallLen(o.wall) - o.w); });
    $$('[data-room-out]').forEach(x => x.textContent = `${S.room.w} × ${S.room.d} cm · ${(S.room.w * S.room.d / 1e4).toFixed(1).replace('.', ',')} m²`); render2D(); schedule3D(); }
  [rw, rd].forEach(el => { el.addEventListener('input', roomInput); el.addEventListener('change', commit); });
  $$('[data-room-n]').forEach(n => n.addEventListener('change', () => { const t = n.dataset.roomN === 'w' ? rw : rd; t.value = n.value; roomInput(); commit(); syncRoom(); }));
  function syncRoom() { rw.value = S.room.w; rd.value = S.room.d; $$('[data-room-n]').forEach(n => n.value = n.dataset.roomN === 'w' ? S.room.w : S.room.d); $$('[data-room-out]').forEach(x => x.textContent = `${S.room.w} × ${S.room.d} cm · ${(S.room.w * S.room.d / 1e4).toFixed(1).replace('.', ',')} m²`); $$('[data-wallt]').forEach(b => b.classList.toggle('on', !!S.room.walls[b.dataset.wallt])); }
  $$('[data-wallt]').forEach(b => b.addEventListener('click', () => toggleWall(b.dataset.wallt)));
  $$('[data-addopen]').forEach(b => b.addEventListener('click', () => { const t = b.dataset.addopen; const wall = ['N', 'E', 'S', 'W'].find(k => S.room.walls[k]) || 'N'; const o = { id: uid++, t, wall, s: 20, w: OPEN[t].ws[Math.min(2, OPEN[t].ws.length - 1)], ...(t === 'fenster' ? { y: 105, h: 115 } : {}) }; const len = wallLen(wall); for (let s = 20; s <= len - o.w; s += 10) { o.s = s; if (!S.open.some(x => x.wall === wall && x.s < s + o.w && x.s + x.w > s)) break; } S.open.push(o); selOpen = o.id; sel = null; commit(); renderAll(); if (innerWidth < 1100) setMode('plan'); }));
  // Katalog
  $('[data-catalog]').innerHTML = GROUPS.map(([g, gn]) => `<p class="pl-l">${gn}</p><div class="cat">${Object.entries(CAT).filter(([, c]) => c.g === g).map(([k, c]) => `<button type="button" data-add="${k}"><i>${c.k}</i><b>${c.n}</b><small>${c.hint}</small><em>+</em></button>`).join('')}</div>`).join('');
  $('[data-catalog]').addEventListener('click', e => { const b = e.target.closest('[data-add]'); if (!b) return; const it = add(b.dataset.add); findSpot(it); sel = it.id; selOpen = null; commit(); renderAll(); if (innerWidth < 1100) setMode('plan'); flash(it); });
  function flash(it) { const g = svg.querySelector(`[data-id="${it.id}"] rect`); if (g) g.animate([{ opacity: .2 }, { opacity: 1 }], { duration: 500, iterations: 2 }); }
  // Stil
  $('[data-fronts]').innerHTML = FRONTS.map(([n, c]) => `<button type="button" class="sw" data-front="${c}" style="--c:${c.startsWith('wood') ? (c.includes('eiche') ? '#b98a5c' : '#6b4a32') : c}" aria-label="${n}"><span>${n}</span></button>`).join('');
  $('[data-tops]').innerHTML = TOPS.map(([k, n, c]) => `<button type="button" class="sw" data-top="${k}" style="--c:${c}" aria-label="${n}"><span>${n}</span></button>`).join('');
  $('[data-floors]').innerHTML = FLOORS.map(([k, n, c]) => `<button type="button" class="sw" data-floor="${k}" style="--c:${c}" aria-label="${n}"><span>${n}</span></button>`).join('');
  $('[data-wallcols]').innerHTML = WALLC.map(([c, n]) => `<button type="button" class="sw" data-wallc="${c}" style="--c:${c}" aria-label="${n}"><span>${n}</span></button>`).join('');
  $('[data-finish]').innerHTML = FINISHES.map(([k, n]) => `<button type="button" data-v="${k}">${n}</button>`).join('');
  $('[data-handle]').innerHTML = HANDLES.map(([k, n]) => `<button type="button" data-v="${k}">${n}</button>`).join('');
  root.addEventListener('click', e => {
    const f = e.target.closest('[data-front]'), t = e.target.closest('[data-top]'), fl = e.target.closest('[data-floor]'), wc = e.target.closest('[data-wallc]'), fi = e.target.closest('[data-finish] [data-v]'), ha = e.target.closest('[data-handle] [data-v]');
    if (f) { const v = f.dataset.front; if (v.startsWith('wood:')) S.style.wood = v.slice(5); else { S.style.front = v; S.style.wood = null; } }
    else if (t) S.style.top = t.dataset.top; else if (fl) S.style.floor = fl.dataset.floor; else if (wc) S.style.wall = wc.dataset.wallc; else if (fi) S.style.finish = fi.dataset.v; else if (ha) S.style.handle = ha.dataset.v; else return;
    commit(); syncStyle(); render2D(); schedule3D();
  });
  function syncStyle() { const s = S.style; $$('[data-front]').forEach(b => b.classList.toggle('on', s.wood ? b.dataset.front === 'wood:' + s.wood : b.dataset.front === s.front)); $$('[data-top]').forEach(b => b.classList.toggle('on', b.dataset.top === s.top)); $$('[data-floor]').forEach(b => b.classList.toggle('on', b.dataset.floor === s.floor)); $$('[data-wallc]').forEach(b => b.classList.toggle('on', b.dataset.wallc === s.wall)); $$('[data-finish] [data-v]').forEach(b => b.classList.toggle('on', b.dataset.v === s.finish)); $$('[data-handle] [data-v]').forEach(b => b.classList.toggle('on', b.dataset.v === s.handle)); }
  // Prüfen
  function renderChecks() {
    const c = checks(), warnN = c.filter(x => x[0] === 'warn').length;
    $('[data-checks]').innerHTML = c.map(([k, t, d]) => `<li class="ck ${k}"><i aria-hidden="true">${k === 'ok' ? '✓' : k === 'warn' ? '!' : 'i'}</i><div><b>${t}</b>${d ? `<span>${d}</span>` : ''}</div></li>`).join('');
    $$('[data-warn-n]').forEach(x => { x.textContent = warnN || '✓'; x.classList.toggle('ok', !warnN); });
    const b = bom(); $('[data-bom]').innerHTML = Object.entries(b.groups).map(([n, ws]) => `<li><span>${ws.length}× ${n}</span><em>${ws.join(', ')} cm</em></li>`).join('') + (b.top ? `<li class="sum"><span>Arbeitsplatte ca.</span><em>${(b.top / 100).toFixed(2).replace('.', ',')} lfm</em></li>` : '');
  }
  // Ansicht
  const ws = $('[data-ws]');
  function setMode(m) { ws.dataset.mode = m; $$('[data-mode]').forEach(b => b.classList.toggle('on', b.dataset.mode === m)); requestAnimationFrame(() => { render2D(); }); }
  $$('[data-mode]').forEach(b => b.addEventListener('click', () => setMode(b.dataset.mode)));
  $$('[data-view3]').forEach(b => b.addEventListener('click', () => { if (ws.dataset.mode === 'plan') setMode(innerWidth < 1100 ? '3d' : 'split'); K && K.view(b.dataset.view3); }));
  $('[data-undo]').addEventListener('click', undo); $('[data-redo]').addEventListener('click', redo);
  new ResizeObserver(() => render2D()).observe(svg);

  /* ---------------- Senden ---------------- */
  function summary() {
    const b = bom(), s = S.style, fr = FRONTS.find(f => (s.wood ? f[1] === 'wood:' + s.wood : f[1] === s.front));
    const L = [`Raum: ${S.room.w} × ${S.room.d} cm` + (Object.values(S.room.walls).includes(0) ? ' (teilweise offen: ' + Object.keys(S.room.walls).filter(k => !S.room.walls[k]).map(k => WALLS[k]).join(', ') + ')' : '')];
    const op = S.open.map(o => `${OPEN[o.t].n} ${o.w} cm (Wand ${WALLS[o.wall]})`); if (op.length) L.push('Fenster/Türen: ' + op.join(', '));
    L.push(`Fronten: ${fr ? fr[0] : s.front}, ${FINISHES.find(f => f[0] === s.finish)[1]} · Arbeitsplatte: ${TOPS.find(t => t[0] === s.top)[1]} · Griffe: ${HANDLES.find(h => h[0] === s.handle)[1]}`);
    L.push('Elemente:'); Object.entries(b.groups).forEach(([n, ws]) => L.push(`– ${ws.length}× ${n} (${ws.join(', ')} cm)`));
    if (b.top) L.push(`Arbeitsplatte ca. ${(b.top / 100).toFixed(2).replace('.', ',')} lfm`);
    const w = checks().filter(c => c[0] === 'warn').map(c => c[1]); if (w.length) L.push('Hinweise aus dem Planer: ' + w.join('; '));
    return L.join('\n');
  }
  function planPng() {
    return new Promise(res => { const W = S.room.w + 140, D = S.room.d + 140, sc = 900 / Math.max(W, D); const clone = svg.cloneNode(true); clone.setAttribute('xmlns', SVGNS); clone.setAttribute('width', W * sc); clone.setAttribute('height', D * sc); const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(clone)); const im = new Image(); im.onload = () => res(im); im.onerror = () => res(null); im.src = url; });
  }
  async function composite() {
    const c = document.createElement('canvas'); c.width = 1800; c.height = 1000; const g = c.getContext('2d');
    g.fillStyle = '#f7f3ec'; g.fillRect(0, 0, 1800, 1000);
    if (K) { const im = await new Promise(r => { const i = new Image(); i.onload = () => r(i); i.src = K.snapshot(); }); const s = Math.max(1000 / im.height, 1040 / im.width); g.save(); g.beginPath(); g.rect(0, 0, 1040, 1000); g.clip(); g.drawImage(im, (1040 - im.width * s) / 2, (1000 - im.height * s) / 2, im.width * s, im.height * s); g.restore(); }
    const p = await planPng(); if (p) { const s = Math.min(700 / p.width, 640 / p.height); g.drawImage(p, 1070 + (700 - p.width * s) / 2, 120, p.width * s, p.height * s); }
    g.fillStyle = '#1c1a17'; g.font = '600 34px Georgia, serif'; g.fillText('Mein Küchenentwurf', 1070, 70); g.font = '18px system-ui, sans-serif'; g.fillStyle = '#6e655b'; g.fillText(STUDIO, 1070, 98);
    g.font = '17px system-ui, sans-serif'; g.fillStyle = '#1c1a17'; let y = 800; summary().split('\n').slice(0, 7).forEach(l => { g.fillText(l.length > 70 ? l.slice(0, 68) + '…' : l, 1070, y); y += 26; });
    return c;
  }
  $$('[data-send]').forEach(b => b.addEventListener('click', async () => {
    const k = b.dataset.send, name = $('[name="Name"]').value.trim(), tel = $('[name="Telefon"]').value.trim();
    const text = `${GREET},\n\nich habe meine Küche online geplant:\n\n${summary()}\n\nEntwurf ansehen: ${location.href.split('#')[0]}${lastHash}\n\n${name}${tel ? '\nTel. ' + tel : ''}`;
    if (k === 'wa') window.open(WA + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
    if (k === 'mail') location.href = `mailto:${MAIL}?subject=${encodeURIComponent('Mein Küchenentwurf')}&body=${encodeURIComponent(text)}`;
    if (k === 'img') { const c = await composite(); const a = document.createElement('a'); a.download = 'kuechenentwurf-pellegrin.jpg'; a.href = c.toDataURL('image/jpeg', .9); a.click(); }
    if (k === 'link') { try { await navigator.clipboard.writeText(location.href.split('#')[0] + lastHash); b.textContent = 'Link kopiert ✓'; } catch (e) { prompt('Link zum Entwurf:', location.href); } }
  }));
  // Formular mit Anhängen (FormSubmit)
  const form = $('[data-sendform]');
  if (form) {
    form.addEventListener('submit', async e => {
      const files = $('[data-files]', form).files; let total = 0; for (const f of files) total += f.size;
      if (total > 9.5e6) { e.preventDefault(); $('[data-form-msg]').textContent = 'Die Dateien sind zusammen größer als 10 MB. Bitte weniger oder kleinere Dateien wählen.'; return; }
      $('[name="Entwurf"]', form).value = summary() + '\n\nLink: ' + location.href.split('#')[0] + lastHash;
      $('[name="_next"]', form).value = location.href.split('#')[0].split('?')[0] + '?gesendet=1' + lastHash;
      if ($('[data-attach-plan]', form).checked && window.DataTransfer) {
        e.preventDefault(); b0.disabled = true; b0.textContent = 'Wird gesendet …';
        try { const c = await composite(); const blob = await new Promise(r => c.toBlob(r, 'image/jpeg', .85)); const dt = new DataTransfer(); dt.items.add(new File([blob], 'kuechenentwurf.jpg', { type: 'image/jpeg' })); $('[name="Entwurf-Bild"]', form).files = dt.files; } catch (err) { }
        HTMLFormElement.prototype.submit.call(form);
      }
    });
    const b0 = $('[type="submit"]', form);
    $('[data-files]', form).addEventListener('change', e => { $('[data-filelist]', form).innerHTML = [...e.target.files].map(f => `<li>${f.name} <em>${(f.size / 1e6).toFixed(1).replace('.', ',')} MB</em></li>`).join(''); });
    if (/[?&]gesendet=1/.test(location.search)) { const n = $('[data-sent]'); if (n) n.hidden = false; goTab(4); }
  }

  /* ---------------- Start ---------------- */
  function renderAll() { syncRoom(); syncStyle(); render2D(); renderChecks(); schedule3D(); }
  if (!fromHash()) preset('insel');
  commit(); renderAll();
  setMode(innerWidth >= 1100 ? 'split' : '3d');
  const io = new IntersectionObserver(([en]) => { if (en.isIntersecting) { io.disconnect(); load3D(); } }); io.observe(host3);
  // Hinweis zur Bedienung einmal einblenden
  const tip = $('[data-tip]'); if (tip) setTimeout(() => tip.classList.add('off'), 9000);
})();
