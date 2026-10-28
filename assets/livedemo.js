/* Falcon Eye – Mitmach-Demo „Probiert's aus“ (Startseite, Abschnitt „Rechtes Auge“ #eure-seite)
   Was man eintippt (oder antippt), verändert die Mini-Seite wirklich: Farbe, Schrift, Überschrift, Dunkelmodus,
   Trommel, Button, Öffnungszeiten, Seifenblasen – und „Mit Drohnenflug“: Die Startseite wird zum echten FPV-Durchflug
   (Verkaufsidee: Drohnenfilm und Website aus einer Hand). Zeitraffer: Eingang → In Arbeit (Code) → Geprüft → Live.
   Es wird nichts verschickt. */
(() => {
  const root = document.querySelector('[data-ld]'); if (!root) return;
  const $ = (s, r = root) => r.querySelector(s), $$ = (s, r = root) => [...r.querySelectorAll(s)];
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mp = $('[data-mp]'), form = $('[data-tw-form]'), inp = $('#tw-in'), sub = $('[data-tw-form] button[type="submit"]'), live = $('[data-tw-live]');
  const st = $('[data-tw-st]'), prog = $('[data-tw-prog]'), steps = $$('[data-tw-steps] li'), msg = $('[data-ld-msg]'), code = $('[data-mp-code]'), badge = $('[data-mp-badge]'), wipe = $('[data-mp-wipe]'), fx = $('[data-mp-fx]'), chips = $('[data-ld-chips]');
  const H = $('[data-mp-h]'), drum = $('[data-mp-drum]'), rpmEl = $('[data-mp-rpm]'), disp = $('[data-mp-disp]');
  const flyV = $('[data-mp-fly]'), kickEl = $('[data-mp-kick]'), flyChip = chips && chips.querySelector('.ld-fly');
  const ad = root.closest('.tw-ad'), wa = ad && ad.querySelector('.tw-cta2 .wa'), waBase = wa && wa.getAttribute('href');
  if (!mp || !form) return;

  /* ---------- Zustand ---------- */
  const DEF = { acc: '#1f4fd6', bg: null, font: 'modern', dark: false, h: 'Alles dreht sich um Ihre Wäsche.', btn: 'Wäschezettel ausfüllen', big: 1, round: true, spin: 2, open: 'Heute bis 18 Uhr', ribbon: '', bubbles: 6, name: 'Weidenhof', size: 1, logo: 1, fly: false, kick: 'Wäscherei · Heißmangel · seit 1969' };
  const FLY_H = 'Erst durchfliegen, dann vorbeikommen.', FLY_KICK = 'Echter FPV-Durchflug';
  let S = { ...DEF };
  const FONTS = {
    modern: { f: '"Archivo",system-ui,sans-serif', w: 800, s: 1, n: 'modern', css: '"Archivo", sans-serif' },
    elegant: { f: '"Playfair Display",Georgia,serif', w: 700, s: 1.02, n: 'elegant', css: '"Playfair Display", serif' },
    verspielt: { f: '"Caveat","Comic Sans MS",cursive', w: 700, s: 1.32, n: 'verspielt', css: '"Caveat", cursive' },
    kraeftig: { f: '"Big Shoulders Display",Impact,sans-serif', w: 900, s: 1.2, n: 'kräftig', css: '"Big Shoulders", sans-serif', tt: 'uppercase' },
    tech: { f: '"Share Tech Mono",ui-monospace,monospace', w: 400, s: .9, n: 'technisch', css: '"Share Tech Mono", monospace' },
  };
  const RPM = [0, 400, 800, 1200, 1600], SPIN = [0, 3.2, 1.6, .8, .42];
  // Farbnamen (längere zuerst prüfen)
  const COLORS = [['dunkelblau', '#13306e', 'Dunkelblau'], ['nachtblau', '#14234f', 'Nachtblau'], ['marineblau', '#1b2f63', 'Marineblau'], ['navy', '#14234f', 'Navy'], ['hellblau', '#4aa3ff', 'Hellblau'], ['türkis', '#14b8a6', 'Türkis'], ['tuerkis', '#14b8a6', 'Türkis'], ['petrol', '#0f6b73', 'Petrol'], ['dunkelgrün', '#1f5d3a', 'Dunkelgrün'], ['tannengrün', '#1f4d36', 'Tannengrün'], ['mint', '#3cc9a0', 'Mint'], ['salbei', '#7d9a7a', 'Salbei'], ['oliv', '#7a7a3a', 'Oliv'], ['grün', '#1e9e57', 'Grün'], ['gruen', '#1e9e57', 'Grün'], ['weinrot', '#7f1d2d', 'Weinrot'], ['bordeaux', '#7a1730', 'Bordeaux'], ['dunkelrot', '#8f1d1d', 'Dunkelrot'], ['rot', '#e0352b', 'Rot'], ['orange', '#ff7a1a', 'Orange'], ['gold', '#c9a227', 'Gold'], ['gelb', '#ffcc00', 'Gelb'], ['lila', '#7c3aed', 'Lila'], ['violett', '#7c3aed', 'Violett'], ['magenta', '#d6338a', 'Magenta'], ['pink', '#ff3d8b', 'Pink'], ['rosa', '#f472b6', 'Rosa'], ['braun', '#7b5136', 'Braun'], ['beige', '#c8a97e', 'Beige'], ['sand', '#c8a97e', 'Sand'], ['anthrazit', '#2f3640', 'Anthrazit'], ['grau', '#6b7280', 'Grau'], ['schwarz', '#111111', 'Schwarz'], ['weiß', '#ffffff', 'Weiß'], ['weiss', '#ffffff', 'Weiß'], ['blau', '#1f4fd6', 'Blau']];

  /* ---------- Farbhilfen ---------- */
  const rgb = h => { const n = parseInt(h.slice(1), 16); return [n >> 16, (n >> 8) & 255, n & 255]; };
  const hex = a => '#' + a.map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
  const mix = (a, b, t) => { const A = rgb(a), B = rgb(b); return hex(A.map((v, i) => v + (B[i] - v) * t)); };
  const lum = h => { const [r, g, b] = rgb(h).map(v => { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }); return .2126 * r + .7152 * g + .0722 * b; };
  function look() {
    const acc = S.acc === '#ffffff' ? '#e8edf3' : S.acc, dark = S.dark || S.acc === '#111111';
    const bg = S.bg || (dark ? mix(acc, '#0b0e13', .88) : mix(acc, '#ffffff', .93));
    const ink = dark ? '#eef2f8' : (lum(bg) < .3 ? '#f4f6fa' : '#13233f');
    const card = dark ? mix(acc, '#151a22', .86) : (lum(bg) < .3 ? mix(bg, '#ffffff', .12) : '#ffffff');
    const onAcc = lum(acc) > .5 ? '#14110a' : '#ffffff';
    let em = acc; if (!dark && lum(acc) > .45) em = mix(acc, '#000000', .38); if (dark && lum(acc) < .06) em = mix(acc, '#ffffff', .55);
    return { acc: S.acc === '#111111' ? '#f2f2f2' : acc, bg, ink, card, onAcc: S.acc === '#111111' ? '#111111' : onAcc, em, dark, line: dark ? 'rgba(238,242,248,.14)' : 'rgba(19,35,63,.12)' };
  }
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const headHTML = (t, cursor) => { const w = t.trim().split(/\s+/); let last = w.pop() || ''; if (last.replace(/[.!?]/g, '').length <= 3 && w.length > 1) last = w.pop() + ' ' + last; return (w.length ? esc(w.join(' ')) + ' ' : '') + `<em>${esc(last)}</em>` + (cursor ? '<span class="cur"></span>' : ''); };

  /* ---------- Anwenden ---------- */
  function paint() {
    const L = look(), F = FONTS[S.font] || FONTS.modern, s = mp.style;
    s.setProperty('--mp-bg', L.bg); s.setProperty('--mp-ink', L.ink); s.setProperty('--mp-card', L.card); s.setProperty('--mp-acc', L.acc); s.setProperty('--mp-on', L.onAcc); s.setProperty('--mp-em', L.em); s.setProperty('--mp-line', L.line);
    s.setProperty('--mp-hf', F.f); s.setProperty('--mp-hw', F.w); s.setProperty('--mp-hs', (F.s * S.size).toFixed(3)); s.setProperty('--mp-tt', F.tt || 'none');
    s.setProperty('--mp-r', S.round ? '999px' : '.5cqw'); s.setProperty('--mp-bs', S.big); s.setProperty('--mp-ls2', S.logo);
    s.setProperty('--mp-spin', (SPIN[S.spin] || 1.6) + 's'); s.setProperty('--mp-play', S.spin ? 'running' : 'paused');
    mp.classList.toggle('dark', L.dark); mp.dataset.font = S.font;
    $('[data-mp-name]').textContent = S.name; $('[data-mp-logo]').textContent = S.name.trim().charAt(0).toUpperCase() || 'W';
    $('[data-mp-open]').textContent = S.open; $('[data-mp-btn]').textContent = S.btn;
    rpmEl.textContent = S.spin ? RPM[S.spin] + ' U/min' : 'Pause'; disp.textContent = S.spin ? (RPM[S.spin] / 1000).toFixed(1) + 'k' : '‖';
    const rb = $('[data-mp-el="ribbon"]'); rb.classList.toggle('on', !!S.ribbon); $('[data-mp-ribbon]').textContent = S.ribbon;
    bubbles(S.bubbles);
    // Drohnenflug: Video hinter der Startseite, Maschine tritt zur Seite; WhatsApp-Anfrage nimmt den Wunsch mit
    mp.classList.toggle('fly', !!S.fly); if (kickEl) kickEl.textContent = S.fly ? FLY_KICK : DEF.kick;
    flyChip && flyChip.classList.toggle('used', !!S.fly);
    if (wa && waBase) wa.setAttribute('href', S.fly ? waBase.split('?')[0] + '?text=' + encodeURIComponent('Hallo Falcon Eye, ich hätte auch gern so eine Website – gern mit Drohnenflug durch unseren Betrieb.') : waBase);
    flyPlay();
  }
  /* Video nur laden, wenn der Drohnenflug gewählt ist; nur abspielen, solange die Demo sichtbar ist */
  let flyVis = false;
  function flyPlay() {
    if (!flyV) return;
    if (!S.fly) { try { flyV.pause(); } catch (e) { } return; }
    if (!flyV.getAttribute('poster')) flyV.setAttribute('poster', flyV.dataset.poster);
    if (RM) return; // reduzierte Bewegung: nur das Standbild
    if (!flyV.getAttribute('src')) { flyV.src = flyV.dataset.src; flyV.preload = 'auto'; }
    if (flyVis && !document.hidden) { const p = flyV.play(); p && p.catch(() => { }); } else { try { flyV.pause(); } catch (e) { } }
  }
  if (flyV && 'IntersectionObserver' in window) new IntersectionObserver(([en]) => { flyVis = en.isIntersecting; flyPlay(); }, { rootMargin: '120px 0px' }).observe(mp);
  else flyVis = true;
  document.addEventListener('visibilitychange', () => flyPlay());
  let bubN = -1;
  function bubbles(n) {
    if (n === bubN) return; bubN = n; fx.innerHTML = '';
    if (RM) return;
    for (let i = 0; i < n; i++) { const b = document.createElement('i'); const sz = 2 + Math.random() * 4.5; b.style.cssText = `left:${(Math.random() * 100).toFixed(1)}%;--s:${sz.toFixed(1)}cqw;--d:${(7 + Math.random() * 8).toFixed(1)}s;--dl:${(-Math.random() * 12).toFixed(1)}s;--x:${(Math.random() * 16 - 8).toFixed(1)}cqw`; fx.appendChild(b); }
  }
  const hl = keys => keys.forEach(k => { const e = $(`[data-mp-el="${k}"]`); if (!e) return; e.classList.remove('hl'); void e.offsetWidth; e.classList.add('hl'); setTimeout(() => e.classList.remove('hl'), 1700); });

  /* ---------- Wunsch verstehen ---------- */
  function parse(raw) {
    const t = ' ' + raw.toLowerCase().replace(/[„“”«»]/g, '"').replace(/\s+/g, ' ') + ' ';
    const ch = {}, said = [], codeL = [];
    const q = (raw.match(/["„“»«]([^"„“»«]{2,60})["“”«»]/) || [])[1];
    const has = re => re.test(t);
    // Überschrift / Text
    let m = raw.match(/(?:überschrift|ueberschrift|titel|schlagzeile|slogan|headline)\s*(?:soll|auf|zu|wird|lautet|ist|:|=|-)*\s*(?:["„“»]\s*)?([^"“”«\n]{2,60})/i);
    let head = m ? m[1].replace(/\s+(und|plus|außerdem)\s+(farbe|schrift|button|knopf|maschine|dunkel|hell).*$/i, '').trim() : null;
    if (!head && q && !has(/button|knopf|name|firma/)) head = q;
    if (head) { head = head.replace(/[.!]+$/, '').slice(0, 56); ch.h = head + (/[.!?]$/.test(head) ? '' : '.'); said.push('Überschrift neu'); codeL.push(`<span class="k">&lt;h1&gt;</span>${esc(head)}<span class="k">&lt;/h1&gt;</span>`); }
    // Button-Text
    m = raw.match(/(?:button|knopf|schaltfläche)(?:text)?\s*(?::|=|soll|auf|heißt|heisst|lautet)+\s*["„“»]?([^"“”«\n]{2,34})/i);
    if (m && !/^(größer|grösser|groß|gross|kleiner|rund|runder|eckig)/i.test(m[1].trim())) { ch.btn = m[1].trim().replace(/[.!]+$/, ''); said.push('Button-Text'); codeL.push(`<span class="k">button</span>: "<span class="v">${esc(ch.btn)}</span>"`); }
    // Name
    m = raw.match(/(?:firmenname|name|firma)\s*(?::|=|soll|auf|heißt|heisst|lautet)+\s*["„“»]?([A-Za-zÄÖÜäöüß0-9&.\- ]{2,22})/i) || raw.match(/(?:heißt|heisst)\s+(?:jetzt\s+)?["„“»]?([A-ZÄÖÜ][A-Za-zÄÖÜäöüß0-9&.\-]{1,20})/);
    if (m) { ch.name = m[1].trim(); said.push('Name'); codeL.push(`<span class="k">logo</span>: "<span class="v">${esc(ch.name)}</span>"`); }
    // Öffnungszeiten
    m = raw.match(/((?:heute|morgen|täglich|werktags|montags?|dienstags?|mittwochs?|donnerstags?|freitags?|samstags?|sonntags?|mo|di|mi|do|fr|sa|so)\.?[a-zäöü\s.–-]*?(?:jetzt\s+|ab\s+sofort\s+|neu\s+)?(?:bis|ab|von)\s*\d{1,2}(?:[:.]\d{2})?\s*(?:[-–]\s*\d{1,2}(?:[:.]\d{2})?\s*)?uhr(?:\s*(?:geöffnet|offen|auf))?)/i);
    if (m) { const o = m[1].replace(/\s+/g, ' ').trim(); ch.open = o.charAt(0).toUpperCase() + o.slice(1); ch.ribbon = 'Neue Öffnungszeiten: ' + ch.open; said.push('Öffnungszeiten'); codeL.push(`<span class="k">öffnungszeiten</span>: "<span class="v">${esc(ch.open)}</span>"`); }
    if (!ch.ribbon && has(/urlaub|betriebsferien|geschlossen|feiertag|rabatt|aktion|angebot|prozent|%|gutschein|neu:/)) { ch.ribbon = raw.trim().slice(0, 80); said.push('Hinweisband'); codeL.push(`<span class="k">banner</span>: "<span class="v">${esc(ch.ribbon.slice(0, 40))}</span>"`); }
    // Dunkel / hell
    if (has(/dunkel ?modus|dark ?mode|nacht ?modus|dunkle[rns]? (modus|design|seite|hintergrund|look)|alles dunkel|dunkler machen|mach(e)? (es|sie|alles) dunkel/) || has(/ dunkler /) && !has(/dunkler (blau|grün|rot|braun|grau)/)) { ch.dark = true; said.push('Dunkelmodus'); codeL.push('<span class="k">theme</span>: <span class="v">dark</span>'); }
    else if (has(/hell ?modus|light ?mode|heller machen|hell machen|helle[rns]? (modus|design|seite|hintergrund)| heller /)) { ch.dark = false; said.push('heller'); codeL.push('<span class="k">theme</span>: <span class="v">light</span>'); }
    // Farbe
    let col = null; for (const c of COLORS) { const i = t.indexOf(c[0]); if (i >= 0 && (col == null || i < col.i || (i === col.i && c[0].length > col.c[0].length))) col = { c, i }; }
    if (col) {
      const [, hx, nm] = col.c, near = t.slice(Math.max(0, col.i - 22), col.i + 26);
      if (/hintergrund|background/.test(near)) { ch.bg = (lum(hx) < .25) ? hx : mix(hx, '#ffffff', .78); if (lum(hx) < .25) ch.dark = true; said.push('Hintergrund ' + nm); codeL.push(`<span class="k">--hintergrund</span>: <span class="v">${ch.bg}</span>;`); }
      else if (hx === '#111111' && !/button|knopf/.test(near)) { ch.dark = true; ch.acc = '#111111'; said.push('Schwarz'); codeL.push('<span class="k">theme</span>: <span class="v">schwarz</span>'); }
      else if (hx === '#ffffff') { ch.dark = false; ch.bg = '#ffffff'; said.push('Weiß'); codeL.push('<span class="k">--hintergrund</span>: <span class="v">#ffffff</span>;'); }
      else { ch.acc = hx; ch.bgReset = true; said.push('Farbe ' + nm); codeL.push(`<span class="k">--akzent</span>: <span class="v">${hx}</span>; <span class="c">/* ${nm} */</span>`); }
    }
    // Schrift
    const fnt = has(/elegant|edel|klassisch|serif|luxus|vornehm|schick|edler/) ? 'elegant' : has(/verspielt|handschrift|lustig|witzig|kinder|locker|comic|geschwungen|fröhlich/) ? 'verspielt' : has(/technisch|computer|mono|digital|nerd|code-schrift|programmier/) ? 'tech' : has(/kräftig|kraeftig|fett|bold|laut|krass|stark|knallig|mächtig|plakativ/) ? 'kraeftig' : has(/modern|clean|schlicht|minimal|normale schrift|standard/) ? 'modern' : null;
    if (fnt) { ch.font = fnt; said.push('Schrift ' + FONTS[fnt].n); codeL.push(`<span class="k">font-family</span>: <span class="v">${FONTS[fnt].css}</span>;`); }
    if (has(/(schrift|text|überschrift)[a-zäöü ]{0,12}(größer|grösser|groesser|riesig)|(größer|grösser|groesser)e? (schrift|überschrift|texte?)/)) { ch.size = Math.min(1.3, (S.size || 1) + .14); said.push('Schrift größer'); codeL.push(`<span class="k">font-size</span>: <span class="v">${Math.round(ch.size * 100)}%</span>;`); }
    else if (has(/(schrift|text|überschrift)[a-zäöü ]{0,12}kleiner|kleinere? (schrift|überschrift|texte?)/)) { ch.size = Math.max(.8, (S.size || 1) - .12); said.push('Schrift kleiner'); codeL.push(`<span class="k">font-size</span>: <span class="v">${Math.round(ch.size * 100)}%</span>;`); }
    // Drohnenflug als Startseite (echter FPV-Durchflug statt Bild) – oder wieder ohne
    const noFly = has(/ohne (drohne|drohnenflug|flug|video|durchflug)|kein(e|en)? (drohne|drohnenflug|flug|video|durchflug)|(drohne|drohnenflug|flug|video|durchflug) (aus|weg|raus)/);
    if (noFly) { ch.fly = false; said.push('ohne Drohnenflug'); codeL.push('<span class="k">hero</span>: <span class="v">bild</span>'); }
    else if (has(/drohne|durchflug|fpv|reinflieg|einflieg|flug durch|mit flug|luftaufnahme|video/)) { ch.fly = true; said.push('Startseite mit Drohnenflug'); codeL.push('<span class="k">hero</span>: <span class="v">FPV-Durchflug</span>', '<span class="k">video</span>: "<span class="v">durchflug.mp4</span>" <span class="c">/* echte Aufnahme */</span>'); }
    // Trommel / Maschine
    if (has(/masch|trommel|dreh|schleuder|wasch|schleud|rotier|spin/)) {
      let sp = S.spin;
      if (has(/stop|stopp|anhalten|halt an|aus |ausmachen|pause|steh|still/)) sp = 0;
      else if (has(/schneller|turbo|vollgas|schleuder|schnell|rasant|gas/)) sp = Math.min(4, Math.max(sp, 1) + 1 + (has(/turbo|vollgas|schleuder/) ? 1 : 0));
      else if (has(/langsam|ruhig|gemütlich|sanft|schonend/)) sp = Math.max(1, sp - 1);
      else if (!sp) sp = 2; else sp = Math.max(sp, 2);
      if (sp !== S.spin || has(/dreh/)) {
        ch.spin = Math.min(4, sp); said.push(sp ? `Trommel ${RPM[ch.spin]} U/min` : 'Trommel steht'); codeL.push(`<span class="k">.trommel</span> { speed: <span class="v">${sp ? RPM[ch.spin] + ' U/min' : 'pause'}</span> }`);
        if (S.fly && ch.fly == null) ch.fly = false; // die Maschine soll man sehen: Drohnenflug macht Platz
      }
    }
    // Überschrift passend zum Drohnenflug (nur solange die eigene Überschrift noch nicht geändert wurde)
    if (ch.fly === true && !ch.h && S.h === DEF.h) ch.h = FLY_H;
    if (ch.fly === false && !ch.h && S.h === FLY_H) ch.h = DEF.h;
    // Button
    if (has(/button|knopf|schaltfläche|cta/)) {
      if (has(/größer|grösser|groesser|groß|gross|riesig|auffällig/)) { ch.big = Math.min(1.45, (S.big || 1) + .2); said.push('Button größer'); }
      else if (has(/kleiner|dezent/)) { ch.big = Math.max(.8, (S.big || 1) - .15); said.push('Button kleiner'); }
      if (has(/rund/)) { ch.round = true; said.push('runde Ecken'); } else if (has(/eckig|kantig|gerade/)) { ch.round = false; said.push('eckig'); }
      if (ch.big != null || ch.round != null) codeL.push(`<span class="k">.button</span> { scale: <span class="v">${(ch.big || S.big).toFixed(2)}</span>; radius: <span class="v">${(ch.round ?? S.round) ? 'rund' : 'eckig'}</span> }`);
    }
    // Logo
    if (has(/logo/) && has(/größer|grösser|groß|gross/)) { ch.logo = Math.min(1.4, S.logo + .2); said.push('Logo größer'); codeL.push(`<span class="k">.logo</span> { scale: <span class="v">${ch.logo.toFixed(1)}</span> }`); }
    else if (has(/logo/) && has(/kleiner/)) { ch.logo = Math.max(.8, S.logo - .15); said.push('Logo kleiner'); codeL.push(`<span class="k">.logo</span> { scale: <span class="v">${ch.logo.toFixed(1)}</span> }`); }
    // Seifenblasen
    if (has(/seifenblas|blasen|schaum|bubbles/)) { ch.bubbles = has(/weniger|keine|ohne|weg/) ? (has(/keine|ohne|weg/) ? 0 : 3) : Math.min(28, S.bubbles + 10); said.push(ch.bubbles ? 'mehr Seifenblasen' : 'keine Seifenblasen'); codeL.push(`<span class="k">seifenblasen</span>: <span class="v">${ch.bubbles}</span>`); }
    return { ch, said, codeL };
  }

  /* ---------- Ablauf im Zeitraffer ---------- */
  let busy = false, timers = [];
  const at = (ms, fn) => timers.push(setTimeout(fn, RM ? 0 : ms));
  const stp = (i, label, cls, w) => { steps.forEach((s, j) => s.classList.toggle('on', j <= i)); st.textContent = label; st.className = cls; prog.style.width = w; };
  function typeCode(lines, done) {
    code.innerHTML = ''; code.classList.add('on'); if (RM) { code.innerHTML = lines.map(l => `<div>${l}</div>`).join(''); done && done(); return; }
    let i = 0;
    const next = () => { if (i >= lines.length) { done && done(); return; } const d = document.createElement('div'); d.innerHTML = lines[i++] + '<span class="cur"></span>'; code.appendChild(d); setTimeout(() => { const c = d.querySelector('.cur'); c && c.remove(); next(); }, 260); };
    next();
  }
  function typeHead(text, done) {
    if (RM) { H.innerHTML = headHTML(text); done && done(); return; }
    let n = 0; const go = () => { n++; H.innerHTML = esc(text.slice(0, n)) + '<span class="cur"></span>'; if (n < text.length) setTimeout(go, 34); else { H.innerHTML = headHTML(text); done && done(); } };
    H.innerHTML = '<span class="cur"></span>'; setTimeout(go, 120);
  }
  function apply(ch, keys) {
    const colorish = ch.acc || ch.bg || ch.dark != null || ch.bgReset;
    const changed = [];
    const swap = () => {
      if (ch.acc) S.acc = ch.acc; if (ch.bgReset) S.bg = null; if (ch.bg) S.bg = ch.bg; if (ch.dark != null) S.dark = ch.dark;
      ['btn', 'big', 'round', 'spin', 'open', 'ribbon', 'bubbles', 'name', 'size', 'logo', 'fly'].forEach(k => { if (ch[k] != null) S[k] = ch[k]; });
      const fontCh = ch.font && ch.font !== S.font; if (ch.font) S.font = ch.font;
      paint();
      if (colorish) changed.push('nav', 'btn', 'machine', 'logo'); if (ch.btn || ch.big != null || ch.round != null) changed.push('btn'); if (ch.open) changed.push('open', 'ribbon'); if (ch.ribbon) changed.push('ribbon'); if (ch.spin != null) changed.push('machine'); if (ch.name || ch.logo) changed.push('logo', 'name');
      if (fontCh && !RM && !ch.h) { H.animate([{ filter: 'blur(7px)', opacity: .2, transform: 'scale(.97)' }, { filter: 'blur(0)', opacity: 1, transform: 'none' }], { duration: 650, easing: 'cubic-bezier(.2,.8,.2,1)' }); changed.push('h'); }
      if (ch.h) { S.h = ch.h; typeHead(ch.h); changed.push('h'); }
      if (ch.size) changed.push('h');
      hl([...new Set(changed)]);
    };
    if (colorish && !RM) {
      const L0 = { ...S }; if (ch.acc) L0.acc = ch.acc; if (ch.bgReset) L0.bg = null; if (ch.bg) L0.bg = ch.bg; if (ch.dark != null) L0.dark = ch.dark;
      const keep = S; S = L0; const nb = look().bg; S = keep;
      wipe.style.setProperty('--wipe', nb);
      wipe.animate([{ clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0 0 0)' }], { duration: 420, easing: 'cubic-bezier(.6,0,.4,1)', fill: 'forwards' }).onfinish = () => {
        swap(); wipe.animate([{ clipPath: 'inset(0 0 0 0)' }, { clipPath: 'inset(0 0 0 100%)' }], { duration: 480, easing: 'cubic-bezier(.6,0,.4,1)', fill: 'forwards' });
      };
    } else swap();
  }
  let queued = null, curText = ''; // Wunsch, der während eines laufenden Zeitraffers kam – läuft danach (außer es ist derselbe)
  function run(text, fromChip) {
    text = (text || '').trim(); if (!text) return;
    if (busy) { if (text !== curText) queued = [text, fromChip]; return; }
    busy = true; curText = text; timers.forEach(clearTimeout); timers = []; inp.disabled = true; if (sub) sub.disabled = true;
    const { ch, said, codeL } = parse(text), unknown = !said.length;
    if (unknown) { ch.ribbon = text.slice(0, 80); codeL.push(`<span class="k">banner</span>: "<span class="v">${esc(text.slice(0, 40))}</span>"`); }
    const now = new Date(), hh = String(now.getHours()).padStart(2, '0'), mm = String(now.getMinutes()).padStart(2, '0'), nr = 1000 + Math.floor(Math.random() * 8999);
    live.classList.remove('done'); live.classList.add('busy'); badge.classList.remove('on'); msg.className = 'ld-msg';
    msg.innerHTML = `Eingegangen: „${esc(text.slice(0, 70))}“`;
    at(0, () => stp(0, `Ticket #${nr} · ${hh}:${mm}`, 'work', '16%'));
    at(500, () => { stp(1, 'in Arbeit …', 'work', '48%'); typeCode([`<span class="c">// Ticket #${nr} – ${esc(text.slice(0, 34))}${text.length > 34 ? '…' : ''}</span>`, ...codeL]); });
    const tCheck = 700 + codeL.length * 270 + 300;
    at(tCheck, () => { stp(2, 'geprüft ✓', 'work', '82%'); const d = document.createElement('div'); d.innerHTML = '<span class="ok">✓ Handy ✓ Tablet ✓ Desktop</span>'; code.appendChild(d); });
    at(tCheck + 650, () => {
      code.classList.remove('on'); apply(ch);
      stp(3, 'LIVE ✓', 'live', '100%'); live.classList.remove('busy'); live.classList.add('done');
      setTimeout(() => { badge.classList.add('on'); setTimeout(() => badge.classList.remove('on'), 2200); }, RM ? 0 : 520);
      msg.className = 'ld-msg' + (unknown ? ' no' : '');
      msg.innerHTML = unknown ? `Als <b>Hinweis-Band</b> eingebaut. Probiert auch Farbe, Schrift, Überschrift, Dunkelmodus, „Mit Drohnenflug“ oder „Maschine schneller“.` : `Live geändert: <b>${said.map(esc).join(' · ')}</b>` + (ch.fly === true ? '. In echt fliegen wir dafür einmal durch euren Betrieb.' : '');
      busy = false; curText = ''; inp.disabled = false; if (sub) sub.disabled = false; if (!fromChip) inp.value = '';
      if (queued) { const q = queued; queued = null; timers.push(setTimeout(() => { inp.value = q[0]; run(q[0], q[1]); }, RM ? 0 : 900)); }
    });
  }
  form.addEventListener('submit', e => { e.preventDefault(); stopAuto(); run(inp.value || inp.placeholder.replace(/^z\. B\.\s*/, '')); });
  chips && chips.addEventListener('click', e => { const b = e.target.closest('[data-ld-try]'); if (!b) return; stopAuto(); b.classList.add('used'); if (!busy) inp.value = b.dataset.ldTry; run(b.dataset.ldTry, true); });
  // Knöpfe außerhalb der Demo (z. B. „Unser Extra“): Demo ins Bild holen, dann den Wunsch abspielen
  document.querySelectorAll('[data-ld-run]').forEach(b => b.addEventListener('click', e => {
    if (b.tagName === 'A') e.preventDefault(); // Ohne Skript springt der Link einfach zur Demo
    stopAuto(); b.classList.add('used');
    const go = () => { if (!busy) inp.value = b.dataset.ldRun; run(b.dataset.ldRun, true); };
    const r = live.getBoundingClientRect(), hdr = (document.querySelector('.top') || {}).offsetHeight || 70;
    if (r.top < hdr || r.top > innerHeight * .55) {
      const y = Math.max(0, r.top + scrollY - Math.max(hdr + 12, (innerHeight - r.height) / 2));
      if (window.FE && window.FE.lenis) window.FE.lenis.scrollTo(y, { duration: 1.1 }); else scrollTo({ top: y, behavior: RM ? 'auto' : 'smooth' });
      setTimeout(go, RM ? 0 : 700);
    } else go();
  }));
  const rs = $('[data-ld-reset]'); rs && rs.addEventListener('click', () => { if (busy) return; stopAuto(); queued = null; const ch = { ...DEF, bgReset: true, h: DEF.h }; S.h = DEF.h; apply(ch); bubN = -1; $$('.used', chips).forEach(b => b.classList.remove('used')); msg.className = 'ld-msg'; msg.innerHTML = 'Zurückgesetzt – alles wieder wie am Anfang.'; stp(-1, 'bereit', '', '0'); live.classList.remove('done'); });

  /* ---------- Erster Sichtkontakt: Seite baut sich auf, dann tippt sich die Verkaufsidee von selbst ein:
     „Startseite mit Drohnenflug“ – die Mini-Seite startet mit einem echten FPV-Durchflug. ---------- */
  paint(); H.innerHTML = headHTML(S.h);
  let autoT = [], userActed = false; const stopAuto = () => { userActed = true; autoT.forEach(clearTimeout); autoT = []; };
  ['pointerdown', 'keydown', 'focusin'].forEach(ev => root.addEventListener(ev, e => { if (e.isTrusted) stopAuto(); }, { passive: true }));
  if (!RM) mp.classList.add('build');
  const start = () => {
    mp.classList.add('built');
    if (flyV && !flyV.getAttribute('poster')) flyV.setAttribute('poster', flyV.dataset.poster); // Standbild schon mal laden
    if (RM || userActed) return;
    const demo = 'Startseite mit Drohnenflug';
    autoT.push(setTimeout(() => {
      if (userActed) return; let i = 0;
      const tp = () => { if (userActed) return; inp.value = demo.slice(0, ++i); if (i < demo.length) autoT.push(setTimeout(tp, 55)); else autoT.push(setTimeout(() => { if (!userActed) { run(demo, true); autoT.push(setTimeout(() => chips && chips.classList.add('pulse'), 4200)); } }, 450)); };
      tp();
    }, 1400));
  };
  if ('IntersectionObserver' in window) { const io = new IntersectionObserver(([en]) => { if (en.isIntersecting) { io.disconnect(); start(); } }, { threshold: .45 }); io.observe(live); } else start();

  /* ---------- Handy-Feinschliff (vorher in twin.js) ---------- */
  if (inp && innerWidth <= 560) inp.placeholder = 'z. B. Hintergrund dunkelblau';
  // Ideen-Leiste: auf dem Handy eine Wischleiste. Impuls: rutscht beim ersten Sichtkontakt kurz an und zurück.
  const swipe = root.querySelector('.ld-swipe');
  if (chips) {
    let touched = false, auto = false;
    const mark = () => { if (touched) return; touched = true; swipe && swipe.classList.add('off'); };
    chips.addEventListener('pointerdown', mark, { passive: true });
    chips.addEventListener('wheel', mark, { passive: true });
    chips.addEventListener('scroll', () => { if (!auto && chips.scrollLeft > 6) mark(); }, { passive: true });
    if (!RM && 'IntersectionObserver' in window) {
      const io2 = new IntersectionObserver(([en]) => {
        if (!en.isIntersecting) return; io2.disconnect();
        if (chips.scrollWidth <= chips.clientWidth + 8) return;
        setTimeout(() => {
          if (touched) return; auto = true;
          chips.scrollTo({ left: Math.min(150, chips.scrollWidth - chips.clientWidth), behavior: 'smooth' });
          setTimeout(() => { if (!touched) chips.scrollTo({ left: 0, behavior: 'smooth' }); setTimeout(() => { auto = false; }, 800); }, 1150);
        }, 700);
      }, { threshold: .9 });
      io2.observe(chips);
    }
  }
})();
