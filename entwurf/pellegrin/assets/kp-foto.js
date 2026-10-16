/* Ihre Küche in Ihrem Raum – eigenes Raumfoto, geplante Küche perspektivisch hinein, Vorher/Nachher · Entwurf Falcon Eye
   Läuft komplett im Browser: keine KI, kein Server, kein Schlüssel. Das Foto verlässt das Gerät erst, wenn man es selbst mitschickt.
   Ausrichtung: 1 + 2 = hintere Ecken am Boden (Wandlänge aus dem Plan gibt den Maßstab), 3 + 4 = beliebige Punkte auf den
   Bodenkanten der Seitenwände (geben die Richtung in den Raum). Brennweite aus den Foto-Daten (EXIF) oder 0,5× / 1× / 2×. */
(function () {
  'use strict';
  const KP = window.KP; if (!KP || window.KPF) return;
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FACES = [['N', 'die Rückwand'], ['W', 'die linke Wand'], ['E', 'die rechte Wand'], ['S', 'die Wand gegenüber']];
  const LENS = [[13, '0,5×', 'Ultraweit'], [26, '1×', 'Standard'], [52, '2×', 'Zoom']];
  // Beispielfoto (Raum ca. 2,70 × 4 m) mit passender Beispielküche an der rechten Wand – die eigene Planung erscheint im eigenen Foto
  const SAMPLE = { src: 'img/ki/vorher.webp', pts: [[.189, .628], [.534, .574], [.812, .828], [.151, .958]], mm: 26, face: 'W',
    plan: { f: 'zeile', r: { w: 400, d: 270 }, rw: { N: [['kue', 60], ['bo', 60], ['kf', 80], ['s2', 60], ['sp', 80], ['gs', 60]] }, tp: { N: 1 }, op: [['fenster', 'W', 75, 120], ['tuer', 'S', 20, 90]], is: { w: 180, v: 'kochfeld' }, s: { front: '#f1eee8', wood: null, handle: 'grifflos', top: 'eiche', finish: 'matt', wall: '#f3efe9', floor: 'eiche' }, ah: 90 } };
  const DEF_PTS = [[.3, .58], [.7, .58], [.94, .9], [.06, .9]];
  const PN = ['hinten links', 'hinten rechts', 'vorne rechts', 'vorne links'];
  // kleine Vektorrechnung
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2], len = a => Math.hypot(a[0], a[1], a[2]);
  const sc = (a, k) => [a[0] * k, a[1] * k, a[2] * k], sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]], add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
  const nrm = a => sc(a, 1 / (len(a) || 1)), clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const fmt = (v, d = 2) => v.toFixed(d).replace('.', ',');

  let demo = null; const room = () => demo ? demo.room : KP.room(), st3 = () => demo ? demo.state : KP.state3d();
  let el, stage, fit, img, host, ov, loupe, K = null, ph = null, pts = null, face = 'N', mm = 26, mmSrc = 'std', rig = { x: 0, z: 0, ry: 0, s: 1 }, expo = 1, mode = 'align', cmp = 100, pose = null, back = null, shareOk = false;

  /* ---------------- Oberfläche ---------------- */
  const ICO = {
    x: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    cam: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 6.5h3l1.4-2h5.2l1.4 2h3v9.5H3z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="10" cy="11" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',
    img: '<svg viewBox="0 0 20 20" aria-hidden="true"><rect x="2.5" y="3.5" width="15" height="13" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M4 14l4-4 3 3 2-2 3 3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="13" cy="7.5" r="1.4" fill="currentColor"/></svg>',
  };
  const ILL = `<svg class="kpf-ill" viewBox="0 0 260 150" aria-hidden="true"><path d="M20 140L84 70h92l64 70" fill="none" stroke="currentColor" stroke-opacity=".35" stroke-width="2"/><path d="M84 70V14M176 70V14" stroke="currentColor" stroke-opacity=".35" stroke-width="2"/><rect x="104" y="26" width="52" height="30" rx="2" fill="none" stroke="currentColor" stroke-opacity=".25" stroke-width="2"/><g fill="var(--kpf-acc)"><circle cx="84" cy="70" r="8"/><circle cx="176" cy="70" r="8"/><circle cx="218" cy="116" r="8"/><circle cx="42" cy="116" r="8"/></g><g font-size="10" font-weight="700" fill="#fff" text-anchor="middle" font-family="system-ui"><text x="84" y="73.5">1</text><text x="176" y="73.5">2</text><text x="218" y="119.5">3</text><text x="42" y="119.5">4</text></g></svg>`;
  function buildDom() {
    el = document.createElement('div'); el.className = 'kpf'; el.hidden = true; el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); el.setAttribute('aria-labelledby', 'kpf-t');
    el.style.setProperty('--kpf-acc', KP.acc);
    el.innerHTML = `
<div class="kpf-top"><div class="kpf-tt"><b id="kpf-t">Ihre Küche in Ihrem Raum</b><span>Ihr Foto bleibt auf Ihrem Gerät.</span></div><button type="button" class="kpf-x" data-x aria-label="Schließen">${ICO.x}</button></div>
<div class="kpf-body">
  <div class="kpf-stage" data-stage>
    <div class="kpf-empty" data-empty>
      ${ILL}
      <h2>Ein Foto von Ihrem Raum – mehr braucht es nicht.</h2>
      <p>Am besten aus der Tür heraus und quer. Wichtig ist nur, dass man unten sieht, wo Wand und Boden zusammenstoßen.</p>
      <div class="kpf-up"><label class="btn btn-copper kpf-file">${ICO.cam}<span>Foto aufnehmen</span><input type="file" accept="image/*" capture="environment" data-file></label><label class="btn kpf-file kpf-file2">${ICO.img}<span>Foto auswählen</span><input type="file" accept="image/*,.heic,.heif" data-file></label></div>
      <button type="button" class="kpf-link" data-sample>Erst mal mit einem Beispielfoto ausprobieren</button>
      <p class="kpf-small" data-drophint>Sie können ein Foto auch einfach hierher ziehen.</p>
      <p class="kpf-err" data-err role="alert" hidden></p>
    </div>
    <div class="kpf-fit" data-fit hidden>
      <img data-photo alt="Ihr Raumfoto" draggable="false">
      <div class="kpf-3d" data-3d></div>
      <svg class="kpf-ov" data-ov viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true"></svg>
      <div class="kpf-cmp" data-cmpl hidden><i></i><span class="l">Vorher</span><span class="r">Nachher</span><b class="kpf-knob" aria-hidden="true"></b></div>
      <input class="kpf-cmpr" type="range" min="0" max="100" step=".5" value="50" data-cmpr aria-label="Vorher und Nachher vergleichen" hidden>
      ${PN.map((n, i) => `<button type="button" class="kpf-hd" data-h="${i}" aria-label="Punkt ${i + 1}: ${n} am Boden – mit den Pfeiltasten verschieben"><i>${i + 1}</i></button>`).join('')}
      <span class="kpf-wl" data-wl hidden></span>
      <div class="kpf-loupe" data-loupe hidden><i></i></div>
      <p class="kpf-gest" data-gest hidden>Ziehen = verschieben · zwei Finger = drehen &amp; Größe</p>
    </div>
    <p class="kpf-busy" data-busy hidden><i></i>Foto wird vorbereitet …</p>
  </div>
  <aside class="kpf-side" data-side hidden>
    <div class="kpf-tabs" role="tablist" aria-label="Schritte">
      <button type="button" role="tab" data-mode="align"><i>1</i>Ausrichten</button><button type="button" role="tab" data-mode="tune"><i>2</i>Feinschliff</button><button type="button" role="tab" data-mode="cmp"><i>3</i>Vergleichen</button>
    </div>
    <section class="kpf-pane" data-pane="align">
      <p class="kpf-lead">Ziehen Sie die vier Punkte auf den <b>Boden</b>:</p>
      <ol class="kpf-ol"><li><span>1</span><span>2</span><p>in die <b>hinteren Ecken</b> – genau dort, wo Wand und Boden zusammenstoßen.</p></li><li><span>3</span><span>4</span><p>weiter vorn auf die <b>Bodenkante der Seitenwände</b> – wie weit vorn, ist egal.</p></li></ol>
      <p class="kpf-sn" data-samplenote hidden>Beispielfoto mit einer Beispielküche (Küchenzeile 4 m an der rechten Wand). Mit Ihrem eigenen Foto erscheint dort Ihre eigene Planung.</p>
      <label class="kpf-field"><span>Die Wand hinten im Foto ist in Ihrem Plan …</span><select data-face>${FACES.map(([k, n]) => `<option value="${k}">${n}</option>`).join('')}</select></label>
      <p class="kpf-ok" data-hint aria-live="polite"></p>
      <div class="kpf-row"><button type="button" class="kpf-b" data-reset>Punkte zurücksetzen</button><button type="button" class="kpf-b kpf-go" data-goto="cmp">Passt – vergleichen →</button></div>
    </section>
    <section class="kpf-pane" data-pane="tune" hidden>
      <p class="kpf-lead">Im Bild <b>ziehen</b> verschiebt die Küche, <b>zwei Finger</b> drehen und skalieren (am Computer: Mausrad, Shift + Ziehen). Oder genau:</p>
      <div class="kpf-lens"><span>Mit welchem Objektiv fotografiert?</span><div class="kpf-seg" data-lens>${LENS.map(([v, n, d]) => `<button type="button" data-mm="${v}"><b>${n}</b><small>${d}</small></button>`).join('')}</div><small data-mmsrc></small></div>
      <label class="kpf-rg"><span>Brennweite</span><output data-o="mm"></output><input type="range" min="12" max="80" step="1" data-r="mm"></label>
      <label class="kpf-rg"><span>Drehen</span><output data-o="ry"></output><input type="range" min="-30" max="30" step=".5" data-r="ry"></label>
      <label class="kpf-rg"><span>Größe</span><output data-o="s"></output><input type="range" min="80" max="120" step="1" data-r="s"></label>
      <label class="kpf-rg"><span>Licht</span><output data-o="ex"></output><input type="range" min="60" max="150" step="1" data-r="ex"></label>
      <div class="kpf-row"><button type="button" class="kpf-b" data-doors aria-pressed="false">Türen öffnen</button><button type="button" class="kpf-b" data-retune>Feinschliff zurücksetzen</button></div>
    </section>
    <section class="kpf-pane" data-pane="cmp" hidden>
      <p class="kpf-lead">Ziehen Sie den Regler im Bild: <b>links</b> Ihr Raum heute, <b>rechts</b> mit Ihrer geplanten Küche.</p>
      <div class="kpf-row"><button type="button" class="kpf-b" data-cmpto="0">Nur vorher</button><button type="button" class="kpf-b" data-cmpto="50">Halb / halb</button><button type="button" class="kpf-b" data-cmpto="100">Nur nachher</button></div>
      <div class="kpf-row"><button type="button" class="kpf-b" data-doors aria-pressed="false">Türen öffnen</button></div>
    </section>
    <div class="kpf-acts">
      <button type="button" class="btn btn-copper kpf-send" data-attach>Mit meiner Anfrage senden</button>
      <label class="btn btn-copper kpf-send kpf-file" data-own hidden>${ICO.cam}<span>Jetzt mit eigenem Foto</span><input type="file" accept="image/*,.heic,.heif" data-file></label>
      <div class="kpf-row"><button type="button" class="kpf-b" data-save>Bild speichern</button><button type="button" class="kpf-b" data-share hidden>Teilen …</button><button type="button" class="kpf-b" data-again>Anderes Foto</button></div>
      <p class="kpf-note">Darstellung zur Orientierung – Maße, Geräte und Details plant ${KP.person} mit Ihnen millimetergenau.</p>
    </div>
  </aside>
</div>`;
    document.body.appendChild(el);
    stage = $('[data-stage]', el); fit = $('[data-fit]', el); img = $('[data-photo]', el); host = $('[data-3d]', el); ov = $('[data-ov]', el); loupe = $('[data-loupe]', el);
    $('[data-x]', el).addEventListener('click', close);
    el.addEventListener('keydown', e => { if (e.key === 'Escape') { e.preventDefault(); close(); } if (e.key === 'Tab') trap(e); });
    $$('[data-file]', el).forEach(i => i.addEventListener('change', e => { const f = e.target.files && e.target.files[0]; e.target.value = ''; loadFile(f); }));
    $('[data-sample]', el).addEventListener('click', loadSample);
    ['dragenter', 'dragover'].forEach(t => stage.addEventListener(t, e => { if (ph && !$('[data-empty]', el).offsetParent) return; e.preventDefault(); stage.classList.add('over'); }));
    ['dragleave', 'drop'].forEach(t => stage.addEventListener(t, () => stage.classList.remove('over')));
    stage.addEventListener('drop', e => { const f = e.dataTransfer && e.dataTransfer.files[0]; if (!f) return; e.preventDefault(); loadFile(f); });
    $$('[data-mode]', el).forEach(b => b.addEventListener('click', () => setMode(b.dataset.mode)));
    $$('[data-goto]', el).forEach(b => b.addEventListener('click', () => setMode(b.dataset.goto)));
    $('[data-face]', el).addEventListener('change', e => { face = e.target.value; update(); });
    $('[data-reset]', el).addEventListener('click', () => { pts = (ph && ph.sample ? SAMPLE.pts : DEF_PTS).map(p => p.slice()); update(); });
    $('[data-retune]', el).addEventListener('click', () => { rig = { x: 0, z: 0, ry: 0, s: 1 }; mm = ph && ph.mm ? ph.mm : 26; mmSrc = ph && ph.mm ? 'exif' : 'std'; expo = ph ? ph.expo : 1; K && K.exposure(expo); update(); });
    $$('[data-mm]', el).forEach(b => b.addEventListener('click', () => { mm = +b.dataset.mm; mmSrc = 'user'; update(); }));
    $$('[data-r]', el).forEach(r => r.addEventListener('input', () => { const k = r.dataset.r, v = +r.value; if (k === 'mm') { mm = v; mmSrc = 'user'; } if (k === 'ry') rig.ry = v * Math.PI / 180; if (k === 's') rig.s = v / 100; if (k === 'ex') { expo = v / 100; K && K.exposure(expo); } update(); }));
    $$('[data-doors]', el).forEach(b => b.addEventListener('click', () => { if (!K) return; const on = K.openAll(!K.isAllOpen()); $$('[data-doors]', el).forEach(x => { x.textContent = on ? 'Türen schließen' : 'Türen öffnen'; x.setAttribute('aria-pressed', on); }); }));
    $$('[data-cmpto]', el).forEach(b => b.addEventListener('click', () => setCmp(+b.dataset.cmpto, true)));
    const cr = $('[data-cmpr]', el); cr.addEventListener('input', () => setCmp(+cr.value));
    $('[data-save]', el).addEventListener('click', save);
    $('[data-share]', el).addEventListener('click', share);
    $('[data-again]', el).addEventListener('click', () => showEmpty());
    $('[data-attach]', el).addEventListener('click', attach);
    $$('[data-h]', el).forEach(bindHandle);
    bindStage();
    new ResizeObserver(() => layout()).observe(stage);
    if (!matchMedia('(pointer: coarse)').matches) { const lb = $$('.kpf-up .kpf-file', el); lb[0].hidden = true; lb[1].classList.add('btn-copper'); lb[1].classList.remove('kpf-file2'); }
    try { const f = new File([new Uint8Array(1)], 't.jpg', { type: 'image/jpeg' }); shareOk = !!(navigator.canShare && navigator.canShare({ files: [f] })); } catch (e) { shareOk = false; }
    $('[data-share]', el).hidden = !shareOk;
  }
  function trap(e) { const f = $$('button:not([hidden]):not([disabled]), input:not([hidden]):not([type="file"]), select, [tabindex="0"]', el).filter(x => x.offsetParent !== null); if (!f.length) return; const a = f[0], z = f[f.length - 1]; if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } }

  /* ---------------- Öffnen / Schließen ---------------- */
  function open(o = {}) {
    if (!el) buildDom();
    back = document.activeElement; el.hidden = false; document.documentElement.classList.add('kpf-on'); KP.pause3d(true);
    if (K) { K.pause(false); K.set(st3()); }
    if (o.sample) loadSample(); else if (!ph) showEmpty(); else { showFit(); update(); }
    requestAnimationFrame(() => { const x = $('[data-x]', el); x && x.focus({ preventScroll: true }); });
  }
  function close() {
    if (!el || el.hidden) return; el.hidden = true; document.documentElement.classList.remove('kpf-on'); KP.pause3d(false); if (K) K.pause(true);
    if (back && back.focus) try { back.focus({ preventScroll: true }); } catch (e) { }
  }
  function showEmpty() { $('[data-empty]', el).hidden = false; fit.hidden = true; $('[data-side]', el).hidden = true; $('[data-err]', el).hidden = true; stage.style.height = ''; el.classList.add('empty'); }
  function showFit() { $('[data-empty]', el).hidden = true; fit.hidden = false; $('[data-side]', el).hidden = false; el.classList.remove('empty'); layout(); }
  function busy(on) { $('[data-busy]', el).hidden = !on; }
  function err(msg) { const e = $('[data-err]', el); e.textContent = msg; e.hidden = false; busy(false); showEmpty(); e.hidden = false; }

  /* ---------------- Foto laden ---------------- */
  async function exifMM(file) {
    try {
      const buf = await file.slice(0, 262144).arrayBuffer(), v = new DataView(buf); if (v.byteLength < 12 || v.getUint16(0) !== 0xFFD8) return null;
      let o = 2;
      while (o + 10 < v.byteLength) {
        const mk = v.getUint16(o), ln = v.getUint16(o + 2); if ((mk & 0xFF00) !== 0xFF00) break;
        if (mk === 0xFFE1 && v.getUint32(o + 4) === 0x45786966) {
          const t = o + 10, le = v.getUint16(t) === 0x4949, g16 = p => v.getUint16(t + p, le), g32 = p => v.getUint32(t + p, le);
          const find = (p, tag) => { const n = g16(p); for (let i = 0; i < n; i++) { const e = p + 2 + i * 12; if (g16(e) === tag) return e; } return null; };
          const e0 = find(g32(4), 0x8769); if (e0 == null) return null; const e1 = find(g32(e0 + 8), 0xA405); if (e1 == null) return null;
          const val = g16(e1 + 8); return val >= 10 && val <= 300 ? val : null;
        }
        o += 2 + ln;
      }
    } catch (e) { }
    return null;
  }
  async function loadFile(f) {
    if (!f) return;
    if (!/^image\//.test(f.type) && !/\.(jpe?g|png|webp|heic|heif|gif|avif)$/i.test(f.name)) { err('Das ist leider kein Foto. Bitte ein Bild wählen (JPG, PNG, WebP oder HEIC).'); return; }
    busy(true);
    const exif = await exifMM(f);
    let bmp = null;
    try { bmp = await createImageBitmap(f, { imageOrientation: 'from-image' }); }
    catch (e) { try { bmp = await new Promise((res, rej) => { const im = new Image(); im.onload = () => res(im); im.onerror = rej; im.src = URL.createObjectURL(f); }); } catch (e2) { bmp = null; } }
    if (!bmp || !bmp.width) { err('Dieses Foto kann Ihr Browser nicht öffnen. Speichern Sie es bitte als JPG – oder wählen Sie ein anderes.'); return; }
    setPhoto(bmp, { mm: exif, name: f.name });
  }
  function loadSample() {
    if (!el) buildDom(); busy(true);
    const im = new Image(); im.onload = () => setPhoto(im, { sample: 1, mm: SAMPLE.mm, pts: SAMPLE.pts, face: SAMPLE.face }); im.onerror = () => err('Das Beispielfoto konnte nicht geladen werden.'); im.src = SAMPLE.src;
  }
  function setPhoto(src, o) {
    const W0 = src.naturalWidth || src.width, H0 = src.naturalHeight || src.height, r = Math.min(1, 2400 / Math.max(W0, H0));
    const c = document.createElement('canvas'); c.width = Math.round(W0 * r); c.height = Math.round(H0 * r); c.getContext('2d').drawImage(src, 0, 0, c.width, c.height);
    if (src.close) try { src.close(); } catch (e) { }
    // Helligkeit des Fotos → Licht der Küche
    const t = document.createElement('canvas'); t.width = t.height = 24; const g = t.getContext('2d'); g.drawImage(c, 0, 0, 24, 24); const d = g.getImageData(0, 0, 24, 24).data; let L = 0; for (let i = 0; i < d.length; i += 4) L += (d[i] * .3 + d[i + 1] * .59 + d[i + 2] * .11) / 255; L /= d.length / 4;
    ph = { cv: c, w: c.width, h: c.height, sample: !!o.sample, mm: o.mm || null, expo: clamp(.72 + L * .62, .82, 1.3) };
    img.src = c.toDataURL('image/jpeg', .9);
    pts = (o.pts || DEF_PTS).map(p => p.slice()); face = o.face || 'N'; $('[data-face]', el).value = face;
    mm = o.mm || 26; mmSrc = o.sample ? 'sample' : o.mm ? 'exif' : 'std'; rig = { x: 0, z: 0, ry: 0, s: 1 }; expo = ph.expo; cmp = 100;
    loupe.style.backgroundImage = `url("${img.src}")`;
    busy(false); showFit();
    demo = o.sample ? KP.stateOf(SAMPLE.plan) : null;
    if (!K) K = window.PelPlanner3D(host, { photo: true }); K.set(st3());
    K.pause(false); K.exposure(expo); K.openAll(false); $$('[data-doors]', el).forEach(x => { x.textContent = 'Türen öffnen'; x.setAttribute('aria-pressed', 'false'); });
    setMode('align'); update();
  }

  /* ---------------- Ausrichtung ---------------- */
  function faceCfg(F, W, D) {
    return { N: { O: [0, 0, 0], U: [1, 0, 0], V: [0, 0, 1], Lu: W, Lv: D }, E: { O: [W, 0, 0], U: [0, 0, 1], V: [-1, 0, 0], Lu: D, Lv: W }, S: { O: [W, 0, D], U: [-1, 0, 0], V: [0, 0, -1], Lu: W, Lv: D }, W: { O: [0, 0, D], U: [0, 0, -1], V: [1, 0, 0], Lu: D, Lv: W } }[F];
  }
  function norm2() { const a = ph.w / ph.h; return a >= 1 ? [1, 1 / a] : [a, 1]; }
  function solve() {
    const R = room(), W = R.w / 100, D = R.d / 100, cfg = faceCfg(face, W, D), [nW, nH] = norm2(), f = mm / 34.6;
    const q = pts.map(p => [(p[0] - .5) * nW / f, (p[1] - .5) * nH / f, 1]);
    // Kreuzt etwas? (1-2 hinten, 3/4 vorn, keine Überkreuzung)
    const side = (a, b, c) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
    const P = pts; if (side(P[0], P[1], P[2]) * side(P[0], P[1], P[3]) < 0 || side(P[1], P[2], P[3]) * side(P[1], P[2], P[0]) < 0 || side(P[3], P[0], P[1]) * side(P[3], P[0], P[2]) < 0) return { err: 'Die Linien überkreuzen sich – 1 und 2 gehören nach hinten, 3 rechts und 4 links nach vorn.' };
    let V = cross(cross(q[0], q[3]), cross(q[1], q[2])); if (len(V) < 1e-9) return { err: 'Bitte 3 und 4 etwas weiter von 1 und 2 weg ziehen.' }; V = nrm(V);
    if (Math.abs(V[2]) > 1e-4) { if (V[2] > 0) V = sc(V, -1); } else if (V[0] * (q[3][0] - q[0][0]) + V[1] * (q[3][1] - q[0][1]) < 0) V = sc(V, -1);
    let U = nrm(cross(cross(q[0], q[1]), V)); if (dot(cross(U, q[0]), cross(q[1], q[0])) < 0) U = sc(U, -1);
    const Y = cross(V, U), d0 = -dot(Y, q[0]), d1 = -dot(Y, q[1]);
    if (d0 <= 1e-6 || d1 <= 1e-6) return { err: 'So passt es nicht zusammen – liegen 1 und 2 wirklich unten in den Ecken am Boden?' };
    const p0 = sc(q[0], 1 / d0), p1 = sc(q[1], 1 / d1), h = cfg.Lu / len(sub(p1, p0)), P0 = sc(p0, h);
    const Rm = [0, 1, 2].map(i => [0, 1, 2].map(j => U[i] * cfg.U[j] + V[i] * cfg.V[j] + Y[i] * [0, 1, 0][j]));
    const RtP = [0, 1, 2].map(j => Rm[0][j] * P0[0] + Rm[1][j] * P0[1] + Rm[2][j] * P0[2]);
    const C = sub(cfg.O, RtP), dist = dot(sub(C, cfg.O), cfg.V);
    return { Rm, C, h, dist, f, nW, nH, cfg, W, D };
  }
  function quat(m) {
    const t = m[0][0] + m[1][1] + m[2][2]; let x, y, z, w, s;
    if (t > 0) { s = .5 / Math.sqrt(t + 1); w = .25 / s; x = (m[2][1] - m[1][2]) * s; y = (m[0][2] - m[2][0]) * s; z = (m[1][0] - m[0][1]) * s; }
    else if (m[0][0] > m[1][1] && m[0][0] > m[2][2]) { s = 2 * Math.sqrt(1 + m[0][0] - m[1][1] - m[2][2]); w = (m[2][1] - m[1][2]) / s; x = .25 * s; y = (m[0][1] + m[1][0]) / s; z = (m[0][2] + m[2][0]) / s; }
    else if (m[1][1] > m[2][2]) { s = 2 * Math.sqrt(1 + m[1][1] - m[0][0] - m[2][2]); w = (m[0][2] - m[2][0]) / s; x = (m[0][1] + m[1][0]) / s; y = .25 * s; z = (m[1][2] + m[2][1]) / s; }
    else { s = 2 * Math.sqrt(1 + m[2][2] - m[0][0] - m[1][1]); w = (m[1][0] - m[0][1]) / s; x = (m[0][2] + m[2][0]) / s; y = (m[1][2] + m[2][1]) / s; z = .25 * s; }
    return [x, y, z, w];
  }
  // Weltpunkt → Bildkoordinate 0..1 (oder null, wenn hinter der Kamera)
  function project(p, pw) { const d = sub(pw, p.C), c = [0, 1, 2].map(i => p.Rm[i][0] * d[0] + p.Rm[i][1] * d[1] + p.Rm[i][2] * d[2]); if (c[2] < .08) return null; return [c[0] / c[2] * p.f / p.nW + .5, c[1] / c[2] * p.f / p.nH + .5]; }
  function update() {
    if (!ph || !K) return;
    const p = solve(); pose = p.err ? null : p;
    const hint = $('[data-hint]', el), wn = KP.wn[face];
    if (p.err) { hint.textContent = p.err; hint.className = 'kpf-ok bad'; }
    else {
      const RtF = [0, 1, 2].map(i => [p.Rm[0][i], -p.Rm[1][i], -p.Rm[2][i]]);
      K.setPhoto({ pos: p.C, quat: quat(RtF), fov: 2 * Math.atan(p.nH / 2 / p.f) * 180 / Math.PI });
      const pv = add(p.cfg.O, sc(p.cfg.U, p.cfg.Lu / 2)); K.setRig({ ...rig, cx: pv[0], cz: pv[2] });
      const odd = p.h < .5 || p.h > 2.6 || p.dist < .3;
      hint.className = 'kpf-ok' + (odd ? ' warn' : '');
      hint.innerHTML = odd ? `Ungewöhnlich: Die Kamera wäre ${fmt(p.h)} m hoch. Liegen 1 und 2 unten in den Ecken? Stimmt die Wandlänge (${wn}: ${fmt(p.cfg.Lu)} m)?` : `Passt: Foto aus ca. <b>${fmt(p.h)} m</b> Höhe, <b>${fmt(p.dist, 1)} m</b> vor der Wand. ${wn} im Plan: ${fmt(p.cfg.Lu)} m – sonst im Planer unter „Form &amp; Raum“ anpassen.`;
    }
    drawOv(); syncUI();
  }
  function drawOv() {
    if (!ph) return; let s = '';
    const P = pts.map(([x, y]) => [x * 1000, y * 1000]), ln = (a, b, c, w = 2, da = '') => `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${c}" stroke-width="${w}" vector-effect="non-scaling-stroke"${da ? ` stroke-dasharray="${da}"` : ''}/>`;
    if (mode === 'align' && pose) {
      // Bodenraster des geplanten Raums (50 cm)
      const { cfg } = pose, poly = []; const grid = (a, b) => { const pts2 = []; for (let k = 0; k <= 24; k++) { const t = k / 24, w = add(add(cfg.O, sc(cfg.U, a[0] + (b[0] - a[0]) * t)), sc(cfg.V, a[1] + (b[1] - a[1]) * t)), q = project(pose, w); if (q) pts2.push(q[0] * 1000 + ',' + q[1] * 1000); } return pts2.length > 1 ? `<polyline points="${pts2.join(' ')}" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="1" vector-effect="non-scaling-stroke"/>` : ''; };
      for (let u = 0; u <= cfg.Lu + 1e-6; u += .5) poly.push(grid([u, 0], [u, cfg.Lv]));
      for (let v = 0; v <= cfg.Lv + 1e-6; v += .5) poly.push(grid([0, v], [cfg.Lu, v]));
      s += `<g opacity=".8">${poly.join('')}</g>`;
    }
    if (mode === 'align') {
      const ext = (a, b) => [a[0] + (b[0] - a[0]) * 1.6, a[1] + (b[1] - a[1]) * 1.6];
      s += ln(P[0], ext(P[0], P[3]), 'rgba(0,0,0,.35)', 4) + ln(P[1], ext(P[1], P[2]), 'rgba(0,0,0,.35)', 4) + ln(P[0], P[1], 'rgba(0,0,0,.35)', 5);
      s += ln(P[0], ext(P[0], P[3]), KP.acc, 2, '7 5') + ln(P[1], ext(P[1], P[2]), KP.acc, 2, '7 5') + ln(P[0], P[1], KP.acc, 3);
    }
    ov.innerHTML = s;
    $$('[data-h]', el).forEach((h, i) => { h.style.left = pts[i][0] * 100 + '%'; h.style.top = pts[i][1] * 100 + '%'; h.hidden = mode !== 'align'; });
    const wl = $('[data-wl]', el); wl.hidden = mode !== 'align'; if (mode === 'align') { wl.textContent = KP.wn[face] + (pose ? ' · ' + fmt(pose.cfg.Lu) + ' m' : ''); wl.style.left = (pts[0][0] + pts[1][0]) * 50 + '%'; wl.style.top = (pts[0][1] + pts[1][1]) * 50 + '%'; }
  }
  function syncUI() {
    $$('[data-mode]', el).forEach(b => { const on = b.dataset.mode === mode; b.classList.toggle('on', on); b.setAttribute('aria-selected', on); });
    $$('[data-pane]', el).forEach(p => p.hidden = p.dataset.pane !== mode);
    $$('[data-mm]', el).forEach(b => b.classList.toggle('on', Math.abs(+b.dataset.mm - mm) < 1.5));
    const set = (k, v, t) => { const r = $(`[data-r="${k}"]`, el), o = $(`[data-o="${k}"]`, el); if (r && document.activeElement !== r) r.value = v; if (o) o.textContent = t; };
    set('mm', mm, Math.round(mm) + ' mm'); set('ry', rig.ry * 180 / Math.PI, fmt(rig.ry * 180 / Math.PI, 1).replace(',0', '') + '°'); set('s', Math.round(rig.s * 100), Math.round(rig.s * 100) + ' %'); set('ex', Math.round(expo * 100), Math.round(expo * 100) + ' %');
    const src = $('[data-mmsrc]', el); if (src) src.textContent = mmSrc === 'exif' ? `Aus den Foto-Daten erkannt: ${Math.round(ph.mm)} mm (Kleinbild).` : mmSrc === 'sample' ? 'Beispielfoto: normales Handy-Objektiv (1×).' : mmSrc === 'user' ? '' : 'Unbekannt – angenommen: normales Handy-Objektiv (1×).';
    fit.classList.toggle('cmp', mode === 'cmp'); fit.classList.toggle('tune', mode === 'tune');
    const smp = !!(ph && ph.sample); $('[data-samplenote]', el).hidden = !smp; $('[data-attach]', el).hidden = smp; $('[data-own]', el).hidden = !smp;
    $('[data-cmpl]', el).hidden = mode !== 'cmp'; $('[data-cmpr]', el).hidden = mode !== 'cmp'; $('[data-gest]', el).hidden = mode !== 'tune';
    setCmp(mode === 'cmp' ? cmp : 100);
  }
  function setMode(m) { mode = m; if (m === 'cmp' && (cmp === 100 || cmp === 0)) cmp = 50; drawOv(); syncUI(); }
  function setCmp(v, anim) {
    if (mode === 'cmp') cmp = v; const val = mode === 'cmp' ? v : 100;
    host.style.clipPath = val >= 100 ? '' : `inset(0 0 0 ${val}%)`; const l = $('[data-cmpl]', el); l.style.setProperty('--p', val + '%'); const r = $('[data-cmpr]', el); if (document.activeElement !== r) r.value = val;
  }

  /* ---------------- Punkte ziehen ---------------- */
  function bindHandle(h) {
    const i = +h.dataset.h; let pid = null;
    const pos = e => { const r = fit.getBoundingClientRect(); return [clamp((e.clientX - r.left) / r.width, -.02, 1.02), clamp((e.clientY - r.top) / r.height, -.02, 1.02)]; };
    h.addEventListener('pointerdown', e => { pid = e.pointerId; h.setPointerCapture(pid); h.classList.add('on'); e.preventDefault(); e.stopPropagation(); showLoupe(e, i); });
    h.addEventListener('pointermove', e => { if (e.pointerId !== pid) return; pts[i] = pos(e); update(); showLoupe(e, i); });
    const up = e => { if (e.pointerId !== pid) return; pid = null; h.classList.remove('on'); loupe.hidden = true; };
    h.addEventListener('pointerup', up); h.addEventListener('pointercancel', up);
    h.addEventListener('keydown', e => { const k = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key]; if (!k) return; e.preventDefault(); const st = e.shiftKey ? .02 : .004; pts[i] = [clamp(pts[i][0] + k[0] * st, -.02, 1.02), clamp(pts[i][1] + k[1] * st, -.02, 1.02)]; update(); });
  }
  function showLoupe(e, i) {
    if (e.pointerType === 'mouse') { loupe.hidden = true; return; }
    const r = fit.getBoundingClientRect(), z = 2.6, L = 112, x = pts[i][0] * r.width, y = pts[i][1] * r.height;
    loupe.hidden = false; loupe.style.left = clamp(x - L / 2, -10, r.width - L + 10) + 'px'; loupe.style.top = (y - L - 46 < -40 ? y + 46 : y - L - 46) + 'px';
    loupe.style.backgroundSize = `${r.width * z}px ${r.height * z}px`; loupe.style.backgroundPosition = `${-(x * z - L / 2)}px ${-(y * z - L / 2)}px`;
  }

  /* ---------------- Küche im Bild bewegen (Feinschliff) ---------------- */
  function bindStage() {
    const P = new Map(); let g0 = null;
    const ndc = e => { const r = fit.getBoundingClientRect(); return [(e.clientX - r.left) / r.width * 2 - 1, -((e.clientY - r.top) / r.height * 2 - 1)]; };
    const two = () => { const [a, b] = [...P.values()]; return { a: Math.atan2(b.y - a.y, b.x - a.x), d: Math.hypot(b.x - a.x, b.y - a.y) }; };
    fit.addEventListener('pointerdown', e => {
      if (mode !== 'tune' || e.target.closest('[data-h]')) return; fit.setPointerCapture(e.pointerId); P.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (P.size === 1) { const n = ndc(e), f = K.floorAt(n[0], n[1]); g0 = { f, rot: e.shiftKey || e.button === 2, x: e.clientX, ry: rig.ry, rx: rig.x, rz: rig.z }; } else if (P.size === 2) g0 = { ...two(), ry: rig.ry, s: rig.s };
      e.preventDefault();
    });
    fit.addEventListener('pointermove', e => {
      if (!P.has(e.pointerId) || !g0) return; P.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (P.size === 2 && g0.d) { const t = two(); rig.ry = g0.ry - (t.a - g0.a); rig.s = clamp(g0.s * t.d / g0.d, .8, 1.2); }
      else if (P.size === 1 && g0.rot) rig.ry = g0.ry + (e.clientX - g0.x) * .006;
      else if (P.size === 1 && g0.f) { const n = ndc(e), f = K.floorAt(n[0], n[1]); if (f) { rig.x = g0.rx + f.x - g0.f.x; rig.z = g0.rz + f.z - g0.f.z; } }
      rig.ry = clamp(rig.ry, -Math.PI / 6, Math.PI / 6); update();
    });
    const end = e => { P.delete(e.pointerId); g0 = null; };
    fit.addEventListener('pointerup', end); fit.addEventListener('pointercancel', end);
    fit.addEventListener('contextmenu', e => { if (mode === 'tune') e.preventDefault(); });
    fit.addEventListener('wheel', e => { if (mode !== 'tune') return; e.preventDefault(); rig.s = clamp(rig.s * Math.exp(-e.deltaY * .0012), .8, 1.2); update(); }, { passive: false });
  }

  /* ---------------- Größe ---------------- */
  function layout() {
    if (!el || el.hidden || !ph || fit.hidden) return;
    const mob = innerWidth < 900, a = ph.w / ph.h;
    if (mob) { const top = $('.kpf-top', el).offsetHeight; stage.style.height = Math.round(Math.min((innerHeight - top) * .6, (innerWidth - 16) / a + 16)) + 'px'; } else stage.style.height = '';
    const r = stage.getBoundingClientRect(), pad = mob ? 8 : 20, aw = r.width - pad * 2, ah = r.height - pad * 2; let w = aw, h = w / a; if (h > ah) { h = ah; w = h * a; }
    fit.style.width = Math.round(w) + 'px'; fit.style.height = Math.round(h) + 'px'; drawOv();
  }
  addEventListener('resize', () => layout());

  /* ---------------- Bild, Teilen, Anhängen ---------------- */
  function compose(split, maxL = 1800, foot = true) {
    const s0 = Math.min(1, maxL / Math.max(ph.w, ph.h)), w = Math.round(ph.w * s0), h = Math.round(ph.h * s0), bar = foot ? Math.round(Math.max(w, h) * .042) : 0;
    const k3 = K.capture(w, h), c = document.createElement('canvas'); c.width = w; c.height = h + bar; const g = c.getContext('2d');
    g.drawImage(ph.cv, 0, 0, w, h);
    const sx = split == null ? 0 : Math.round(w * split / 100); if (sx < w) g.drawImage(k3, sx, 0, w - sx, h, sx, 0, w - sx, h);
    if (split != null && split > 0 && split < 100) {
      g.fillStyle = '#fff'; g.fillRect(sx - 2, 0, 4, h); const fs = Math.round(h * .032); g.font = `700 ${fs}px system-ui, sans-serif`;
      [['VORHER', 16, 'rgba(0,0,0,.55)'], ['NACHHER', w - 16, 'rgba(0,0,0,.55)']].forEach(([t, x, bg], i) => { const tw = g.measureText(t).width + fs * 1.2; const bx = i ? x - tw : x; g.fillStyle = bg; g.fillRect(bx, 16, tw, fs * 1.9); g.fillStyle = '#fff'; g.fillText(t, bx + fs * .6, 16 + fs * 1.33); });
    }
    if (bar) { g.fillStyle = '#16130f'; g.fillRect(0, h, w, bar); g.fillStyle = '#f3eee6'; g.font = `600 ${Math.round(bar * .42)}px Georgia, serif`; g.textBaseline = 'middle'; const LG = KP.logo; if (LG && LG.naturalWidth) { const lh = bar * .78, lw = lh * LG.naturalWidth / LG.naturalHeight; g.drawImage(LG, bar * .35, h + (bar - lh) / 2, lw, lh); } else g.fillText(KP.studio, bar * .5, h + bar / 2); g.font = `${Math.round(bar * .3)}px system-ui, sans-serif`; g.fillStyle = '#c9c0b4'; g.textAlign = 'right'; g.fillText('Geplante Küche im eigenen Raumfoto · Darstellung zur Orientierung', w - bar * .5, h + bar / 2); }
    return c;
  }
  const blob = (c, q = .86) => new Promise(r => c.toBlob(r, 'image/jpeg', q));
  async function save() { if (!pose) { flash('Bitte erst die vier Punkte setzen.'); return; } const c = compose(mode === 'cmp' ? cmp : null); const a = document.createElement('a'); a.download = 'meine-kueche-im-raum.jpg'; a.href = c.toDataURL('image/jpeg', .9); document.body.appendChild(a); a.click(); a.remove(); flash('Bild gespeichert.'); }
  async function share() { if (!pose) return; const b = await blob(compose(mode === 'cmp' ? cmp : null)), f = new File([b], 'meine-kueche-im-raum.jpg', { type: 'image/jpeg' }); try { await navigator.share({ files: [f], title: 'Meine Küche im Raum', text: 'Meine geplante Küche – ' + KP.studio }); } catch (e) { } }
  async function attach() {
    if (!pose) { flash('Bitte erst die vier Punkte setzen.'); return; }
    const btn = $('[data-attach]', el); btn.disabled = true; btn.textContent = 'Wird angehängt …';
    try {
      const after = compose(null), s0 = Math.min(1, 2000 / Math.max(ph.w, ph.h)), o = document.createElement('canvas'); o.width = Math.round(ph.w * s0); o.height = Math.round(ph.h * s0); o.getContext('2d').drawImage(ph.cv, 0, 0, o.width, o.height);
      const [bo, ba] = await Promise.all([blob(o), blob(after)]);
      const t = document.createElement('canvas'), tw = 360; t.width = tw; t.height = Math.round(tw * after.height / after.width); t.getContext('2d').drawImage(after, 0, 0, t.width, t.height);
      KP.setAttach({ files: [new File([bo], 'raumfoto-vorher.jpg', { type: 'image/jpeg' }), new File([ba], 'raumfoto-mit-kueche.jpg', { type: 'image/jpeg' })], thumb: t.toDataURL('image/jpeg', .8) });
      close(); KP.toSend(); KP.toast('Ihr Raumfoto mit Küche hängt jetzt an der Anfrage – Vorher und Nachher.');
    } finally { btn.disabled = false; btn.textContent = 'Mit meiner Anfrage senden'; }
  }
  function flash(m) { KP.toast(m); }

  window.KPF = { open, close, _solve: () => pose, _pts: () => pts, _set: p => { pts = p; update(); } };
})();
