/* Falcon Eye — Webdesign-Hero: eine Website montiert sich beim Scrollen selbst (WebGL)
   01 Vermessen  – FPV-Drohne scannt Laptop und Handy mit dem Laser, Maßketten zählen hoch
   02 Raster     – Gehäuse setzen sich zusammen, Deckel klappt auf, Bildschirm zeigt das Raster
   03 Bausteine  – echte Ausschnitte einer Kundenseite fliegen ein und rasten mit Funken ein
   04 Code       – eigener Code tippt sich, der Laser-Scan füllt die Seite
   05 Live       – Licht an, die Seite ist online
   06 Referenzen – Kamera zieht zurück, zehn echte Kundenseiten stehen nebeneinander */
import * as THREE from 'three';
import { RoomEnvironment } from '../js/addons/RoomEnvironment.js';
import { RoundedBoxGeometry } from '../js/addons/RoundedBoxGeometry.js';

const hero = document.getElementById('montage');
const canvas = document.getElementById('wdc');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const QA = /[?&]qa\b/.test(location.search);

function fail(e) {
  document.documentElement.classList.remove('wd3-on');
  if (hero) hero.classList.add('no-gl');
  if (e && window.console) console.warn('3D deaktiviert:', e && e.message ? e.message : e);
}

if (hero && canvas) {
  try { init(); } catch (e) { fail(e); }
}

function init() {
  if (/[?&]nogl\b/.test(location.search)) { fail(); return; }
  const test = document.createElement('canvas');
  const tgl = test.getContext('webgl2') || test.getContext('webgl');
  if (!tgl) { fail(); return; }
  const lose = tgl.getExtension('WEBGL_lose_context'); if (lose) lose.loseContext();

  const flowMQ = matchMedia('(max-width: 900px), (max-height: 620px)');
  let flow = flowMQ.matches;
  const lowQ = matchMedia('(pointer: coarse)').matches || matchMedia('(max-width: 900px)').matches;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', alpha: false });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, lowQ ? 1.5 : 1.75));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;

  const scene = new THREE.Scene();
  const BG = new THREE.Color('#161b21');
  scene.background = BG;
  scene.fog = new THREE.Fog(BG, 17, 52);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), .04).texture;

  const camera = new THREE.PerspectiveCamera(32, 1, .1, 140);
  const maxAniso = Math.min(4, renderer.capabilities.getMaxAnisotropy());

  /* ---------------- Helfer ---------------- */
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const seg = (p, a, b) => clamp((p - a) / (b - a));
  const lerp = (a, b, t) => a + (b - a) * t;
  const eOut = t => 1 - Math.pow(1 - t, 3);
  const eIn = t => t * t * t;
  const eInOut = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const eBack = t => { const c1 = 1.55, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); };
  let seed = 11; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
  const tmp = V(), tmp2 = V(), tmp3 = V();
  let perfNow = performance.now() / 1000, wake = () => {}, intro = 0, t0 = perfNow;

  const loader = new THREE.TextureLoader();
  function tex(url) {
    const t = loader.load(url, () => wake());
    t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = maxAniso;
    return t;
  }
  function canvasTex(w, h, draw) {
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const g = c.getContext('2d'); draw(g, w, h);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = maxAniso;
    t.userData.redraw = fn => { g.clearRect(0, 0, w, h); fn(g, w, h); t.needsUpdate = true; };
    return t;
  }
  const MONO = '"Share Tech Mono", ui-monospace, Consolas, monospace';

  /* ---------------- Texturen ---------------- */
  const TEX_D = tex('media/wd/hudalla_d.webp?v=2');
  const TEX_M = tex('media/wd/hudalla_m.webp?v=2');
  const radial = canvasTex(128, 128, (g, w, h) => {
    const r = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(.22, 'rgba(255,255,255,.5)'); r.addColorStop(.6, 'rgba(255,255,255,.12)'); r.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = r; g.fillRect(0, 0, w, h);
  });
  const softBox = canvasTex(256, 256, (g, w, h) => { // weicher Schatten / Lichtfleck, rechteckig
    const img = g.createImageData(w, h);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const dx = Math.max(0, Math.abs(x / w - .5) * 2 - .45) / .55, dy = Math.max(0, Math.abs(y / h - .5) * 2 - .3) / .7;
      const a = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy)); const i = (y * w + x) * 4;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = 255; img.data[i + 3] = Math.round(255 * a * a);
    }
    g.putImageData(img, 0, 0);
  });
  function drawBlueprint(g, w, h, cols, label) {
    g.fillStyle = '#0b1015'; g.fillRect(0, 0, w, h);
    const m = w * .055, gw = (w - 2 * m), gut = gw * .022, cw = (gw - gut * (cols - 1)) / cols;
    g.fillStyle = 'rgba(255,208,0,.055)';
    for (let i = 0; i < cols; i++) g.fillRect(m + i * (cw + gut), 0, cw, h);
    g.lineWidth = 1;
    const st = w / 36;
    for (let x = 0; x <= w; x += st) { g.strokeStyle = 'rgba(255,208,0,.07)'; g.beginPath(); g.moveTo(x + .5, 0); g.lineTo(x + .5, h); g.stroke(); }
    for (let y = 0; y <= h; y += st) { g.strokeStyle = 'rgba(255,208,0,.07)'; g.beginPath(); g.moveTo(0, y + .5); g.lineTo(w, y + .5); g.stroke(); }
    g.strokeStyle = 'rgba(255,208,0,.32)';
    for (let x = 0, i = 0; x <= w; x += st, i++) { const l = i % 6 ? 5 : 11; g.beginPath(); g.moveTo(x + .5, 0); g.lineTo(x + .5, l); g.stroke(); }
    for (let y = 0, i = 0; y <= h; y += st, i++) { const l = i % 6 ? 5 : 11; g.beginPath(); g.moveTo(0, y + .5); g.lineTo(l, y + .5); g.stroke(); }
    g.strokeStyle = 'rgba(255,208,0,.5)'; g.lineWidth = 1.5;
    const cx = w / 2, cy = h / 2, k = w * .03;
    g.beginPath(); g.moveTo(cx - k, cy); g.lineTo(cx + k, cy); g.moveTo(cx, cy - k); g.lineTo(cx, cy + k); g.stroke();
    g.fillStyle = 'rgba(255,208,0,.75)'; g.font = `${Math.round(w * .028)}px ${MONO}`; g.textAlign = 'right';
    g.fillText(label, w - m * .6, h - m * .5);
    g.textAlign = 'left'; g.fillText(cols + ' SPALTEN · RASTER', m * .6, h - m * .5);
  }
  const bpD = canvasTex(720, 450, (g, w, h) => drawBlueprint(g, w, h, 12, '1440 × 900'));
  const bpM = canvasTex(240, 408, (g, w, h) => drawBlueprint(g, w, h, 4, '390 × 664'));
  const keysT = canvasTex(1024, 672, (g, w, h) => {
    g.fillStyle = '#20262d'; g.fillRect(0, 0, w, h);
    const rows = 6, cols = 14, mx = 60, top = 40, kh = 42, gap = 9, kw = (w - 2 * mx - gap * (cols - 1)) / cols;
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      let x = mx + c * (kw + gap), ww = kw;
      if (r === 5 && c > 3 && c < 10) { if (c > 4) continue; ww = kw * 6 + gap * 5; }
      const y = top + r * (kh + gap) + (r === 0 ? 0 : 6);
      const hh = r === 0 ? kh * .62 : kh;
      g.fillStyle = '#0c0f13'; roundRect(g, x, y, ww, hh, 6); g.fill();
      g.fillStyle = 'rgba(255,255,255,.035)'; roundRect(g, x + 2, y + 2, ww - 4, hh * .4, 4); g.fill();
    }
    g.fillStyle = '#272e36'; roundRect(g, w * .33, h * .56, w * .34, h * .38, 14); g.fill();
    g.strokeStyle = 'rgba(255,255,255,.06)'; g.lineWidth = 2; roundRect(g, w * .33, h * .56, w * .34, h * .38, 14); g.stroke();
  });
  function roundRect(g, x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }

  /* ---------------- Materialien ---------------- */
  const M = {
    alu: new THREE.MeshStandardMaterial({ color: '#3a434e', metalness: .88, roughness: .32, envMapIntensity: 1.1 }),
    aluD: new THREE.MeshStandardMaterial({ color: '#1f252c', metalness: .7, roughness: .4, envMapIntensity: .9 }),
    bezel: new THREE.MeshStandardMaterial({ color: '#040608', metalness: .4, roughness: .16, envMapIntensity: 1.2 }),
    keys: new THREE.MeshStandardMaterial({ map: keysT, metalness: .5, roughness: .55, envMapIntensity: .6 }),
    floor: new THREE.MeshBasicMaterial({ color: '#171c22', toneMapped: false }),
    tileBody: new THREE.MeshStandardMaterial({ color: '#2a323b', metalness: .6, roughness: .35, envMapIntensity: .9 }),
    carbon: new THREE.MeshStandardMaterial({ color: '#181c21', metalness: .3, roughness: .5, envMapIntensity: .8 }),
    motor: new THREE.MeshStandardMaterial({ color: '#8d969f', metalness: 1, roughness: .28 }),
    prop: new THREE.MeshStandardMaterial({ color: '#ffd000', roughness: .45, metalness: .05, emissive: '#3a2f00' }),
    propBlur: new THREE.MeshBasicMaterial({ color: '#ffd000', transparent: true, opacity: .13, depthWrite: false, side: THREE.DoubleSide }),
    ledY: new THREE.MeshBasicMaterial({ color: '#ffd000', toneMapped: false }),
    ledR: new THREE.MeshBasicMaterial({ color: '#ff3b30', toneMapped: false }),
    lens: new THREE.MeshStandardMaterial({ color: '#05070a', metalness: .2, roughness: .05, envMapIntensity: 1.6 }),
    laser: new THREE.MeshBasicMaterial({ color: '#ffd000', transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false, fog: false, toneMapped: false }),
    fan: new THREE.MeshBasicMaterial({ color: '#ffd000', transparent: true, opacity: .08, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false, toneMapped: false }),
    dim: new THREE.MeshBasicMaterial({ color: '#ffd000', transparent: true, opacity: 1, depthWrite: false, fog: false, toneMapped: false }),
    shadow: new THREE.MeshBasicMaterial({ map: softBox, color: '#000000', transparent: true, opacity: .75, depthWrite: false }),
    glow: new THREE.MeshBasicMaterial({ map: softBox, color: '#fff3c9', transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false, fog: false }),
    spill: new THREE.MeshBasicMaterial({ map: radial, color: '#ffe9a6', transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })
  };

  /* ---------------- Raum: Blaupausen-Boden ---------------- */
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(160, 160), M.floor);
  floor.rotation.x = -Math.PI / 2; scene.add(floor);
  const spot = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: radial, color: '#2c3540', transparent: true, opacity: .55, depthWrite: false, toneMapped: false }));
  spot.rotation.x = -Math.PI / 2; spot.scale.set(16, 12, 1); spot.position.set(.9, .002, .3); scene.add(spot);
  function grid(size, div, color, op) {
    const gH = new THREE.GridHelper(size, div, color, color);
    gH.material.transparent = true; gH.material.opacity = op; gH.material.depthWrite = false; gH.position.y = .004; scene.add(gH); return gH;
  }
  const gridFine = grid(160, 320, '#ffd000', .05);
  const gridMajor = grid(160, 64, '#ffd000', .11);

  /* ---------------- Licht ---------------- */
  const hemi = new THREE.HemisphereLight('#a9bacb', '#0b0d10', .55); scene.add(hemi);
  const key = new THREE.DirectionalLight('#fff4e2', 1.7); key.position.set(6, 9, 7); scene.add(key);
  const rim = new THREE.DirectionalLight('#ffd000', 1.25); rim.position.set(-7, 4, -6); scene.add(rim);
  const screenLight = new THREE.PointLight('#fff1cf', 0, 9, 2); screenLight.position.set(.2, 1.6, 2.2); scene.add(screenLight);

  /* ---------------- Maße ---------------- */
  const LW = 3.5, LD = 2.3, LT = .1, LIDH = 2.3, LIDT = .06;
  const SW = 3.2, SH = 2.0, SY = 1.19;             // Bildschirm 16:10, Mitte im Deckel
  const PW = 1.04, PH = 1.76, PT = .09, PSW = .94, PSH = 1.6; // Handy, 390 × 664
  const OPEN = -.24;                               // Deckelwinkel offen
  const G = {
    base: new RoundedBoxGeometry(LW, LT, LD, 3, .05),
    lid: new RoundedBoxGeometry(LW, LIDH, LIDT, 3, .028),
    bezel: new THREE.PlaneGeometry(LW - .06, LIDH - .06),
    screen: new THREE.PlaneGeometry(SW, SH),
    keys: new THREE.PlaneGeometry(LW - .26, LD * .92),
    phone: new RoundedBoxGeometry(PW, PH, PT, 4, .13),
    pbez: new RoundedBoxGeometry(PW - .04, PH - .04, .004, 4, .11),
    pscreen: new THREE.PlaneGeometry(PSW, PSH),
    stand: new THREE.BoxGeometry(.5, .5, .1),
    unit: new THREE.PlaneGeometry(1, 1),
    box: new THREE.BoxGeometry(1, 1, 1)
  };

  function makeLaptop(screenMat) {
    const g = new THREE.Group();
    const base = new THREE.Mesh(G.base, M.alu); base.position.y = LT / 2; g.add(base);
    const kb = new THREE.Mesh(G.keys, M.keys); kb.rotation.x = -Math.PI / 2; kb.position.set(0, LT + .002, .02); g.add(kb);
    const lid = new THREE.Group(); lid.position.set(0, LT, -LD / 2 + .03); g.add(lid);
    const shell = new THREE.Mesh(G.lid, M.alu); shell.position.set(0, LIDH / 2, 0); lid.add(shell);
    const bez = new THREE.Mesh(G.bezel, M.bezel); bez.position.set(0, LIDH / 2, LIDT / 2 + .001); lid.add(bez);
    const scr = new THREE.Mesh(G.screen, screenMat); scr.position.set(0, SY, LIDT / 2 + .003); lid.add(scr);
    lid.rotation.x = OPEN;
    const sh = new THREE.Mesh(G.unit, M.shadow); sh.rotation.x = -Math.PI / 2; sh.scale.set(LW * 1.5, LD * 1.6, 1); sh.position.set(0, .006, -.15); g.add(sh);
    return { g, base, kb, lid, shell, bez, scr, sh };
  }
  function makePhone(screenMat) {
    const g = new THREE.Group();
    const body = new THREE.Group(); g.add(body);
    body.position.y = PH / 2 + .02; body.rotation.x = -.1;
    const shell = new THREE.Mesh(G.phone, M.alu); body.add(shell);
    const bez = new THREE.Mesh(G.pbez, M.bezel); bez.position.z = PT / 2 + .001; body.add(bez);
    const scr = new THREE.Mesh(G.pscreen, screenMat); scr.position.z = PT / 2 + .005; body.add(scr);
    const stand = new THREE.Mesh(G.stand, M.aluD); stand.position.set(0, .16, -.2); stand.rotation.x = .55; g.add(stand);
    const sh = new THREE.Mesh(G.unit, M.shadow); sh.rotation.x = -Math.PI / 2; sh.scale.set(PW * 1.9, 1.1, 1); sh.position.set(0, .006, -.1); g.add(sh);
    return { g, body, shell, bez, scr, stand, sh };
  }

  /* ---------------- Hauptgeräte ---------------- */
  const scrMatD = new THREE.MeshBasicMaterial({ map: bpD, toneMapped: false });
  const scrMatM = new THREE.MeshBasicMaterial({ map: bpM, toneMapped: false });
  const L = makeLaptop(scrMatD); scene.add(L.g);
  const P = makePhone(scrMatM); scene.add(P.g);
  const PHONE_HOME = V(2.4, 0, .95), PHONE_ROT = -.2;
  P.g.position.copy(PHONE_HOME); P.g.rotation.y = PHONE_ROT;
  L.g.updateMatrixWorld(true); P.g.updateMatrixWorld(true);

  // Referenzpunkte im fertigen Zustand (für Laser, Maße, Badge)
  const lidRef = new THREE.Object3D(); lidRef.position.copy(L.lid.position); lidRef.rotation.x = OPEN; L.g.add(lidRef);
  const phoneRef = new THREE.Object3D(); phoneRef.position.copy(P.body.position); phoneRef.rotation.copy(P.body.rotation); P.g.add(phoneRef);
  scene.updateMatrixWorld(true);
  const lidM = lidRef.matrixWorld.clone(), phoneM = phoneRef.matrixWorld.clone(); // fest: Endlage, auch während die Geräte noch einfliegen
  const onLid = (x, y, z = .04) => V(x, y, z).applyMatrix4(lidM);
  const onPhone = (x, y, z = .06) => V(x, y, z).applyMatrix4(phoneM);

  // Füll-Ebene: legt die echte Seite von oben nach unten frei (UVs werden live gesetzt)
  function fillPlane(w, h, texture, parent, y, z) {
    const geo = new THREE.PlaneGeometry(w, h); geo.translate(0, -h / 2, 0);
    const mat = new THREE.MeshBasicMaterial({ map: texture, toneMapped: false, transparent: true, opacity: 1 });
    const m = new THREE.Mesh(geo, mat); m.position.set(0, y + h / 2, z); parent.add(m); m.visible = false;
    m.userData.set = s => {
      s = Math.max(.0001, s); m.scale.y = s;
      const uv = geo.attributes.uv; // Reihenfolge PlaneGeometry: oben links, oben rechts, unten links, unten rechts
      uv.setXY(0, 0, 1); uv.setXY(1, 1, 1); uv.setXY(2, 0, 1 - s); uv.setXY(3, 1, 1 - s); uv.needsUpdate = true;
    };
    return m;
  }
  const fillD = fillPlane(SW, SH, TEX_D, L.lid, SY, LIDT / 2 + .005);
  const fillM = fillPlane(PSW, PSH, TEX_M, P.body, 0, PT / 2 + .007);
  // Einschalt-Blitz
  const flashMat = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
  const flashD = new THREE.Mesh(G.screen, flashMat); flashD.position.set(0, SY, LIDT / 2 + .03); L.lid.add(flashD);
  const flashM = new THREE.Mesh(G.pscreen, flashMat); flashM.position.z = PT / 2 + .03; P.body.add(flashM);
  // Glow hinter dem Deckel + Lichtfleck am Boden
  const haloD = new THREE.Mesh(G.unit, M.glow); haloD.scale.set(LW * 1.9, LIDH * 1.9, 1); haloD.position.set(0, LIDH / 2, -.08); L.lid.add(haloD);
  const haloM = new THREE.Mesh(G.unit, M.glow); haloM.scale.set(PW * 2.6, PH * 1.9, 1); haloM.position.set(0, 0, -.08); P.body.add(haloM);
  const spill = new THREE.Mesh(G.unit, M.spill); spill.rotation.x = -Math.PI / 2; spill.scale.set(8.5, 5.5, 1); spill.position.set(.6, .01, 1.7); scene.add(spill);

  /* ---------------- Geister-Umrisse (Blaupause) ---------------- */
  function ghostLines(geos) {
    const parts = geos.map(([geo, mtx]) => { const e = new THREE.EdgesGeometry(geo, 30); e.applyMatrix4(mtx); return e; });
    let n = 0; parts.forEach(p => n += p.attributes.position.count);
    const pos = new Float32Array(n * 3); let o = 0;
    parts.forEach(p => { pos.set(p.attributes.position.array, o); o += p.attributes.position.array.length; });
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.LineDashedMaterial({ color: '#ffd000', transparent: true, opacity: 0, dashSize: 0, gapSize: 1e4, depthWrite: false, fog: false, toneMapped: false });
    const ls = new THREE.LineSegments(geo, mat); ls.computeLineDistances();
    const d = geo.attributes.lineDistance; ls.userData.total = d.getX(d.count - 1);
    scene.add(ls); return ls;
  }
  const mBase = new THREE.Matrix4().makeTranslation(0, LT / 2, 0);
  const mLid = new THREE.Matrix4().multiplyMatrices(lidM, new THREE.Matrix4().makeTranslation(0, LIDH / 2, 0));
  const mScr = new THREE.Matrix4().multiplyMatrices(lidM, new THREE.Matrix4().makeTranslation(0, SY, LIDT / 2 + .01));
  const ghostL = ghostLines([[new THREE.BoxGeometry(LW, LT, LD), mBase], [new THREE.BoxGeometry(LW, LIDH, LIDT), mLid], [new THREE.PlaneGeometry(SW, SH), mScr]]);
  const ghostP = ghostLines([[new THREE.BoxGeometry(PW, PH, PT), phoneM.clone()], [new THREE.PlaneGeometry(PSW, PSH), phoneM.clone().multiply(new THREE.Matrix4().makeTranslation(0, 0, PT / 2 + .01))]]);

  /* ---------------- Bausteine: echte Ausschnitte der Seite ---------------- */
  // [x0, y0, x1, y1] in Pixeln des Screenshots
  const TILES_D = [
    [0, 0, 1440, 72], [76, 130, 532, 166], [76, 170, 612, 252], [76, 252, 446, 337], [76, 337, 446, 418], [76, 418, 502, 502],
    [700, 236, 1366, 662], [76, 514, 652, 652], [74, 666, 298, 734], [298, 666, 484, 734], [700, 664, 1366, 730],
    [74, 750, 224, 842], [224, 750, 424, 842], [424, 750, 562, 842]
  ];
  const TILES_M = [[0, 0, 780, 142], [26, 200, 694, 250], [26, 254, 752, 340], [26, 340, 562, 426], [26, 426, 462, 512], [30, 534, 750, 1098], [30, 1104, 750, 1182], [18, 1180, 762, 1312]];
  const CODE = [
    '<nav class="top">', '<p class="kicker">Nieder-Olm</p>', '<h1>Sie brauchen sich', 'um nichts', 'zu kümmern.</h1>', '</section>',
    '<img src="herbst.webp" alt="">', 'p{max-width:34ch}', '.btn{background:#ffc21a}', 'a.ghost{border-radius:99px}', 'saison.textContent=jetzt',
    '<b data-count="26">', '★ 4,5 · 10 Bewertungen', '8–17 Uhr erreichbar'
  ];
  const CODE_M = ['@media (max-width:600px)', 'font-size:clamp(34px,9vw,52px)', 'h1{line-height:1.02}', '.zu{white-space:nowrap}', 'grid-template-columns:1fr', 'aspect-ratio:4/3', 'touch-action:pan-y', '.dock{position:fixed}'];

  const tiles = [];
  const edgeGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1));
  function makeTiles(list, iw, ih, texture, parent, sw, sh, cy, z0, code, phone) {
    list.forEach((r, i) => {
      const [x0, y0, x1, y1] = r;
      const w = (x1 - x0) / iw * sw, h = (y1 - y0) / ih * sh;
      const cx = ((x0 + x1) / 2 / iw - .5) * sw, cyy = cy + (.5 - (y0 + y1) / 2 / ih) * sh;
      const grp = new THREE.Group();
      const geo = new THREE.PlaneGeometry(w, h); const uv = geo.attributes.uv;
      const u0 = x0 / iw, u1 = x1 / iw, v0 = 1 - y1 / ih, v1 = 1 - y0 / ih;
      for (let k = 0; k < uv.count; k++) uv.setXY(k, lerp(u0, u1, uv.getX(k)), lerp(v0, v1, uv.getY(k)));
      const face = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: texture, toneMapped: false }));
      face.position.z = .001; grp.add(face);
      const body = new THREE.Mesh(G.box, M.tileBody); body.scale.set(w, h, .035); body.position.z = -.018; grp.add(body);
      const edgeMat = new THREE.LineBasicMaterial({ color: '#ffd000', transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false, fog: false });
      const edge = new THREE.LineSegments(edgeGeo, edgeMat); edge.scale.set(w + .012, h + .012, .04); edge.position.z = -.012; grp.add(edge);
      const home = V(cx, cyy, z0);
      const a = rnd() * Math.PI * 2;
      const from = V(cx * .5 + Math.cos(a) * (phone ? 1.4 : 2.6), cyy + Math.sin(a) * (phone ? 1.0 : 1.5) + .5, z0 + (phone ? 1.6 : 2.2) + rnd() * 2.2);
      const rot = V((rnd() - .5) * 1.6, (rnd() - .5) * 2.2, (rnd() - .5) * 1.4);
      grp.position.copy(from); grp.visible = false; parent.add(grp);
      tiles.push({ grp, face, edge, edgeMat, home, from, rot, w, h, phone, code: code[i % code.length], last: 0, i });
    });
  }
  makeTiles(TILES_D, 1440, 900, TEX_D, L.lid, SW, SH, SY, LIDT / 2 + .03, CODE, false);
  makeTiles(TILES_M, 780, 1328, TEX_M, P.body, PSW, PSH, 0, PT / 2 + .03, CODE_M, true);
  const nD = TILES_D.length, nM = TILES_M.length;
  // Zeitplan: Laptop 0,30–0,53, Handy 0,40–0,55
  tiles.forEach(t => {
    t.a = t.phone ? .395 + t.i * .018 : .292 + t.i * .0168;
    t.b = t.a + (t.phone ? .03 : .034);
  });

  /* ---------------- Funken ---------------- */
  const NS = lowQ ? 320 : 640;
  const sp = { p: new Float32Array(NS * 3), v: new Float32Array(NS * 3), life: new Float32Array(NS), max: new Float32Array(NS), i: 0 };
  const sGeo = new THREE.BufferGeometry();
  const sPos = new Float32Array(NS * 6), sCol = new Float32Array(NS * 6);
  sGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
  sGeo.setAttribute('color', new THREE.BufferAttribute(sCol, 3));
  const sparks = new THREE.LineSegments(sGeo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false, toneMapped: false }));
  sparks.frustumCulled = false; scene.add(sparks);
  let sparksAlive = 0;
  function emit(pt, dir, n, spd = 1) {
    for (let k = 0; k < n; k++) {
      const i = sp.i = (sp.i + 1) % NS, j = i * 3;
      sp.p[j] = pt.x; sp.p[j + 1] = pt.y; sp.p[j + 2] = pt.z;
      const s = (1.2 + rnd() * 3.2) * spd;
      sp.v[j] = dir.x * s + (rnd() - .5) * 2.4; sp.v[j + 1] = dir.y * s + 1 + rnd() * 2.6; sp.v[j + 2] = dir.z * s + (rnd() - .5) * 2.4;
      sp.max[i] = sp.life[i] = .35 + rnd() * .6;
    }
    sparksAlive = NS;
  }
  function stepSparks(dt) {
    if (!sparksAlive) return 0;
    let alive = 0;
    for (let i = 0; i < NS; i++) {
      const j = i * 3, o = i * 6;
      if (sp.life[i] <= 0) { sCol[o] = sCol[o + 1] = sCol[o + 2] = sCol[o + 3] = sCol[o + 4] = sCol[o + 5] = 0; continue; }
      alive++;
      sp.life[i] -= dt; sp.v[j + 1] -= 11 * dt;
      sp.p[j] += sp.v[j] * dt; sp.p[j + 1] += sp.v[j + 1] * dt; sp.p[j + 2] += sp.v[j + 2] * dt;
      if (sp.p[j + 1] < .01 && sp.v[j + 1] < 0) { sp.v[j + 1] *= -.32; sp.v[j] *= .55; sp.v[j + 2] *= .55; sp.p[j + 1] = .01; }
      const f = Math.max(0, sp.life[i] / sp.max[i]);
      sPos[o] = sp.p[j]; sPos[o + 1] = sp.p[j + 1]; sPos[o + 2] = sp.p[j + 2];
      sPos[o + 3] = sp.p[j] - sp.v[j] * .03; sPos[o + 4] = sp.p[j + 1] - sp.v[j + 1] * .03; sPos[o + 5] = sp.p[j + 2] - sp.v[j + 2] * .03;
      sCol[o] = 1.7 * f; sCol[o + 1] = 1.35 * f; sCol[o + 2] = .45 * f * f;
      sCol[o + 3] = .9 * f; sCol[o + 4] = .45 * f; sCol[o + 5] = 0;
    }
    sGeo.attributes.position.needsUpdate = true; sGeo.attributes.color.needsUpdate = true;
    sparksAlive = alive;
    return alive;
  }

  /* ---------------- Glow-Blitze beim Einrasten ---------------- */
  const flashes = [];
  for (let i = 0; i < 8; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: radial, color: '#ffd76a', transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false, fog: false }));
    s.visible = false; scene.add(s); flashes.push({ s, t: 0, max: 0, size: 1 });
  }
  let flashI = 0;
  function flashAt(pt, size) { const f = flashes[flashI = (flashI + 1) % flashes.length]; f.s.position.copy(pt); f.t = f.max = .5; f.size = size; f.s.visible = true; }
  function stepFlashes(dt) {
    let n = 0;
    for (const f of flashes) {
      if (f.t <= 0) { f.s.visible = false; continue; }
      n++; f.t -= dt; const k = Math.max(0, f.t / f.max);
      f.s.material.opacity = k * k * 1.1; f.s.scale.setScalar(f.size * (1.6 - k * .6));
    }
    return n;
  }

  /* ---------------- Code-Zeilen ---------------- */
  function drawCode(g, w, h, text, size) {
    g.font = `${size}px ${MONO}`; g.textBaseline = 'middle';
    const parts = text.split(/(<\/?[a-z0-9]+|[{}:;()=>]|"[^"]*"|'[^']*'|#[0-9a-f]{3,6}\b)/i).filter(Boolean);
    let x = 6;
    for (const p of parts) {
      g.fillStyle = /^<|^[{}:;()=>]$/.test(p) ? '#ffd000' : /^["'#]/.test(p) ? '#ffe680' : '#eef3f3';
      g.fillText(p, x, h / 2 + 1); x += g.measureText(p).width;
    }
    return x + 6;
  }
  const CW = 1024, CH = 64;
  function codeMesh() {
    const t = canvasTex(CW, CH, () => {});
    t.minFilter = THREE.LinearFilter; t.generateMipmaps = false;
    const mat = new THREE.MeshBasicMaterial({ map: t, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false, fog: false });
    const geo = new THREE.PlaneGeometry(1, 1); geo.translate(.5, 0, 0);
    const m = new THREE.Mesh(geo, mat); m.visible = false;
    m.userData = { t, mat, geo, wFrac: 1, text: '' };
    m.userData.setText = (text) => {
      if (m.userData.text === text) return; m.userData.text = text;
      let wpx = 0; t.userData.redraw((g, w, h) => { wpx = drawCode(g, w, h, text, 40); });
      m.userData.wFrac = Math.min(1, wpx / CW);
    };
    m.userData.reveal = (r, height) => { // Schreibmaschine: Breite und UVs wachsen mit
      const f = m.userData.wFrac * Math.max(.001, r);
      m.scale.set(height * CW / CH * f, height, 1);
      const uv = geo.attributes.uv; uv.setX(1, f); uv.setX(3, f); uv.needsUpdate = true;
    };
    return m;
  }
  const pops = [];
  for (let i = 0; i < 6; i++) { const m = codeMesh(); scene.add(m); pops.push({ m, t: 0 }); }
  let popI = 0;
  function popCode(text, pt, quat) {
    const o = pops[popI = (popI + 1) % pops.length];
    o.m.userData.setText(text); o.m.position.copy(pt); o.m.quaternion.copy(quat); o.t = 1.15; o.m.visible = true;
  }
  function stepPops(dt) {
    let n = 0;
    for (const o of pops) {
      if (o.t <= 0) { o.m.visible = false; continue; }
      n++; o.t -= dt; const age = 1.15 - o.t;
      o.m.userData.reveal(eOut(clamp(age / .32)), .13);
      o.m.userData.mat.opacity = Math.min(1, age * 6) * clamp(o.t / .35) * (.85 + .15 * Math.sin(perfNow * 50));
      o.m.position.y += dt * .08;
    }
    return n;
  }
  // Code-Panel für Kapitel 04 (scroll-gesteuert)
  const PANEL = [
    '<section class="hero" data-saison="herbst">',
    '  <h1>Sie brauchen sich <em>um nichts</em> zu kümmern.</h1>',
    '  <a class="btn" href="#check">Objekt-Check starten</a>',
    '</section>',
    '.btn{background:#ffc21a;border-radius:999px}',
    'gsap.to(".hero h1 span",{y:0,stagger:.08})',
    'laub.forEach(b => b.fall(wind))',
    'document.documentElement.classList.add("live")'
  ];
  const panel = new THREE.Group(); scene.add(panel);
  const panelLines = PANEL.map((txt, i) => { const m = codeMesh(); m.userData.setText(txt); m.position.set(0, -i * .2, 0); panel.add(m); return m; });
  panel.position.set(-.95, 2.15, 1.55); panel.rotation.set(-.05, .32, 0);

  /* ---------------- Drohne (Falcon-Eye-FPV) ---------------- */
  const drone = new THREE.Group(); scene.add(drone);
  const dBody = new THREE.Group(); drone.add(dBody);
  const add = (geo, mat, x, y, z, sx = 1, sy = 1, sz = 1, parent = dBody) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.scale.set(sx, sy, sz); parent.add(m); return m; };
  add(G.box, M.carbon, 0, 0, 0, .3, .05, .44);
  add(G.box, M.carbon, 0, .055, -.03, .22, .06, .26);
  add(G.box, M.aluD, 0, .1, -.06, .16, .03, .14);
  const props = [];
  const cyl = new THREE.CylinderGeometry(1, 1, 1, 20);
  for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) {
    const arm = add(G.box, M.carbon, sx * .2, -.005, sz * .2, .065, .03, .5); arm.rotation.y = Math.atan2(sx, sz);
    add(cyl, M.motor, sx * .34, .03, sz * .34, .05, .06, .05);
    const hub = new THREE.Group(); hub.position.set(sx * .34, .07, sz * .34); dBody.add(hub);
    const blade = new THREE.Mesh(G.box, M.prop); blade.scale.set(.42, .006, .045); hub.add(blade);
    const blade2 = blade.clone(); blade2.rotation.y = Math.PI / 2 * 1.2; hub.add(blade2);
    const disc = new THREE.Mesh(new THREE.CircleGeometry(.22, 28), M.propBlur); disc.rotation.x = -Math.PI / 2; disc.position.y = .004; hub.add(disc);
    props.push({ hub, dir: sx * sz });
  }
  const cam = new THREE.Group(); cam.position.set(0, .04, .22); dBody.add(cam);
  add(G.box, M.aluD, 0, 0, 0, .1, .08, .06, cam);
  const lens = add(cyl, M.lens, 0, 0, .04, .03, .03, .03, cam); lens.rotation.x = Math.PI / 2;
  const lensRing = add(new THREE.TorusGeometry(1, .18, 8, 24), M.ledY, 0, 0, .046, .032, .032, .032, cam);
  const ledRec = add(new THREE.SphereGeometry(1, 10, 8), M.ledR, .07, .09, -.15, .016, .016, .016);
  add(new THREE.SphereGeometry(1, 10, 8), M.ledY, -.07, .09, -.15, .014, .014, .014);
  const ant = add(cyl, M.carbon, 0, .16, -.17, .008, .2, .008); ant.rotation.x = -.4;
  drone.scale.setScalar(1.15);
  const dShadow = new THREE.Mesh(G.unit, M.shadow.clone()); dShadow.material.opacity = .35; dShadow.rotation.x = -Math.PI / 2; dShadow.scale.set(.9, .9, 1); scene.add(dShadow);

  // Laser: Linie + Fächer
  const bar = () => { const m = new THREE.Mesh(G.box, M.laser); m.visible = false; scene.add(m); return m; };
  function setBar(m, A, B, th) { m.position.copy(A).add(B).multiplyScalar(.5); m.scale.set(th, th, Math.max(.0001, A.distanceTo(B))); m.lookAt(B); }
  const lLine = bar(), lBeamA = bar(), lBeamB = bar();
  const fan = new THREE.Mesh(new THREE.BufferGeometry(), M.fan); fan.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(9), 3)); fan.frustumCulled = false; fan.visible = false; scene.add(fan);
  const lDot = new THREE.Sprite(new THREE.SpriteMaterial({ map: radial, color: '#ffd000', transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false, fog: false })); lDot.visible = false; scene.add(lDot);
  function laser(A, B, C, on) {
    const vis = on > .01;
    [lLine, lBeamA, lBeamB, fan, lDot].forEach(o => o.visible = vis);
    if (!vis) return;
    setBar(lLine, B, C, .016); setBar(lBeamA, A, B, .006); setBar(lBeamB, A, C, .006);
    const p = fan.geometry.attributes.position; p.setXYZ(0, A.x, A.y, A.z); p.setXYZ(1, B.x, B.y, B.z); p.setXYZ(2, C.x, C.y, C.z); p.needsUpdate = true;
    M.laser.opacity = on * (.85 + .15 * Math.sin(perfNow * 45)); M.fan.opacity = .09 * on;
    lDot.position.copy(A); lDot.scale.setScalar(.35 + .1 * Math.sin(perfNow * 30)); lDot.material.opacity = on;
  }

  /* ---------------- Maßketten ---------------- */
  const dimsEl = hero.querySelector('.wd3-dims');
  const dims = [];
  function dim(A, B, label, total, a, b, fadeA, fadeB) {
    const g = new THREE.Group(); scene.add(g);
    const line = new THREE.Mesh(G.box, M.dim), t1 = new THREE.Mesh(G.box, M.dim), t2 = new THREE.Mesh(G.box, M.dim);
    g.add(line, t1, t2);
    const el = document.createElement('div'); el.className = 'dim'; el.innerHTML = '<b></b><i>' + label + '</i>'; dimsEl && dimsEl.appendChild(el);
    const d = { g, line, t1, t2, A, B, el, val: el.querySelector('b'), total, a, b, fadeA, fadeB, shown: '' };
    dims.push(d); return d;
  }
  const fmt = v => Math.round(v).toLocaleString('de-DE');
  dim(onLid(-SW / 2, SY + SH / 2 + .2), onLid(SW / 2, SY + SH / 2 + .2), 'Breite', 1440, .045, .1, .27, .3);
  dim(onLid(-SW / 2 - .2, SY - SH / 2), onLid(-SW / 2 - .2, SY + SH / 2), 'Höhe', 900, .06, .11, .27, .3);
  dim(onPhone(-PSW / 2, PSH / 2 + .16), onPhone(PSW / 2, PSH / 2 + .16), 'Handy', 390, .085, .125, .27, .3);

  /* ---------------- Referenz-Galerie ---------------- */
  // [Datei, Name, Index der Referenz-Karte unten, Gerät: d = Laptop, m = Handy]
  const REFS = [
    ['kleber', 'Wäscherei Kleber', 2, 'd'], ['verena', 'Praxis Verena Paul', 7, 'm'], ['pellegrin', 'Pellegrin Küchen', 4, 'd'],
    ['zh', 'Z&H Aufbereitung', 6, 'm'], ['holding', 'Natan Holding', 0, 'd'], ['gartentraum', 'Der Garten-Traum', 3, 'm'],
    ['erbelding', 'Küchenstudio Erbelding', 5, 'd'], ['kowollik', 'Karosserie Kowollik', 8, 'm'], ['natan', 'Natan Küchenmontage', 9, 'm']
  ];
  // Plätze im Endbild (Bildschirmkoordinaten des Fußpunkts); daraus werden Bodenpositionen berechnet
  const SLOTS_D = [[.655, .43], [.765, .44], [.87, .43], [.585, .285], [.665, .28], [.75, .285], [.83, .28], [.915, .285], [.925, .67]];
  const SLOTS_M = [[.23, .425], [.53, .435], [.81, .425], [.15, .315], [.38, .31], [.6, .32], [.82, .31], [.3, .228], [.68, .228]];
  const tagsEl = hero.querySelector('.wd3-tags');
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  const lineup = [];
  const pickables = [];
  const mainTag = document.createElement('span'); mainTag.textContent = 'Hausmeisterservice Hudalla'; tagsEl && tagsEl.appendChild(mainTag);
  const mainItem = { g: L.g, el: mainTag, ref: 1, home: V(), anchor: V(0, 2.75, -1.6), main: true };
  [L.scr, P.scr, fillD, fillM].forEach(m => { m.userData.item = mainItem; pickables.push(m); });
  let lineupBuilt = false;
  function buildLineup() {
    if (lineupBuilt) return; lineupBuilt = true;
    REFS.forEach(([id, name, ref, kind], k) => {
      const g = new THREE.Group(); scene.add(g);
      const dev = kind === 'd'
        ? makeLaptop(new THREE.MeshBasicMaterial({ map: tex('media/wd3/' + id + '_d.webp'), toneMapped: false }))
        : makePhone(new THREE.MeshBasicMaterial({ map: tex('media/wd3/' + id + '_m.webp'), toneMapped: false }));
      g.add(dev.g);
      const ring = new THREE.Mesh(new THREE.RingGeometry(.96, 1, 64), new THREE.MeshBasicMaterial({ color: '#ffd000', transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false, fog: false }));
      ring.rotation.x = -Math.PI / 2; scene.add(ring);
      const el = document.createElement('span'); el.textContent = name; tagsEl && tagsEl.appendChild(el);
      const item = { g, dev, kind, ring, el, ref, k, home: V(), anchor: kind === 'd' ? V(0, 2.75, -1.6) : V(0, 2.05, 0), a: .81 + k * .0115, b: .81 + k * .0115 + .055 };
      dev.scr.userData.item = item; pickables.push(dev.scr);
      lineup.push(item);
    });
    layoutLineup();
  }
  function layoutLineup() {
    if (!lineup.length) return;
    const c2 = camera.clone();
    camAt(flow ? RIG_M : RIG_D, 1);
    c2.position.copy(camP).sub(camT).multiplyScalar(fitK).add(camT); c2.lookAt(camT);
    const [fx, fy] = flow ? [.5, .41] : [stageX, .5];
    c2.setViewOffset(W, H, -(fx - .5) * W, -(fy - .5) * H, W, H); c2.updateProjectionMatrix(); c2.updateMatrixWorld();
    const slots = flow ? SLOTS_M : SLOTS_D;
    lineup.forEach((it, k) => {
      const [sx, sy] = slots[k];
      ndc.set(sx * 2 - 1, -(sy * 2 - 1)); ray.setFromCamera(ndc, c2);
      const o = ray.ray.origin, d = ray.ray.direction, t = -o.y / Math.min(-.01, d.y);
      const x = o.x + d.x * t, z = o.z + d.z * t - (it.kind === 'd' ? .3 : 0);
      const yaw = Math.atan2(c2.position.x - x, c2.position.z - z) * .8;
      it.home.set(x, 0, z); it.g.position.copy(it.home); it.g.rotation.y = yaw;
      it.ring.position.set(x, .02, z); it.ring.userData.r = it.kind === 'd' ? 1.4 : .8;
    });
  }

  /* ---------------- Kamerafahrt ---------------- */
  function rig(KP, POS, TGT) {
    return { KP, cP: new THREE.CatmullRomCurve3(POS.map(a => V(...a)), false, 'centripetal'), cT: new THREE.CatmullRomCurve3(TGT.map(a => V(...a)), false, 'centripetal') };
  }
  const RIG_D = rig(
    [0, .1, .24, .36, .5, .62, .72, .86, 1],
    [[7.2, 5.4, 15.5], [5.2, 4.1, 13.4], [8.6, 4.8, 12.6], [4.0, 2.7, 12.2], [1.4, 2.5, 12.0], [5.6, 2.6, 11.2], [2.8, 2.5, 12.6], [1.8, 8.6, 17.5], [1.6, 10.2, 19]],
    [[.9, 1.15, 0], [.9, 1.15, 0], [.9, 1.0, .2], [.8, 1.25, .2], [.9, 1.2, .2], [.8, 1.2, .3], [.9, 1.15, .3], [1.8, .7, -4.5], [2.0, .6, -5.5]]
  );
  const RIG_M = rig(
    [0, .1, .24, .36, .5, .62, .72, .86, 1],
    [[5.2, 6.2, 15.5], [3.8, 4.3, 13.6], [6.8, 4.8, 13.2], [3.0, 2.7, 12.6], [.5, 2.5, 12.6], [4.2, 2.7, 12.0], [2.0, 2.6, 13.0], [1.0, 11.5, 17.5], [.8, 13.5, 19.5]],
    [[.6, 1.1, 0], [.6, 1.15, 0], [.6, 1.0, .2], [.55, 1.2, .2], [.6, 1.2, .2], [.55, 1.2, .3], [.6, 1.15, .3], [.9, .4, -6.5], [.9, .3, -8]]
  );
  const camP = V(), camT = V();
  function camAt(R, p) {
    const KP = R.KP; let i = 0; while (i < KP.length - 2 && p > KP[i + 1]) i++;
    const lt = eInOut(seg(p, KP[i], KP[i + 1]));
    const u = (i + lt) / (KP.length - 1);
    R.cP.getPoint(u, camP); R.cT.getPoint(u, camT);
  }
  // Drohnen-Flug: Position + Blickziel
  const DR = rig(
    [0, .06, .1, .14, .24, .36, .5, .58, .66, .76, .9, 1],
    [[3.3, 3.7, 3.4], [.4, 3.5, 3.7], [1.4, 3.4, 3.9], [2.7, 3.3, 3.6], [3.3, 3.4, 1.4], [3.1, 3.2, 1.0], [2.8, 3.1, 1.6], [.5, 3.9, 3.3], [2.1, 3.6, 3.6], [3.5, 2.9, 3.4], [2.6, 5.2, -2], [3.6, 5.6, -6]],
    [[.4, 1.2, 0], [0, 1.2, 0], [1, 1.1, .3], [2.4, .9, 1], [0, 1, 0], [0, 1.2, 0], [0, 1.2, 0], [0, 1.2, 0], [1.4, 1.1, .6], [.4, 1.2, 0], [4, 1, -8], [5, 1, -12]]
  );
  const drP = V(), drT = V(), drPrev = V(), drVel = V();

  /* ---------------- HUD ---------------- */
  const chaps = [...hero.querySelectorAll('[data-chap]')];
  const RANGES = [[0, .14], [.14, .28], [.28, .56], [.56, .68], [.68, .8], [.8, 1.01]];
  const capEl = hero.querySelector('.wd3-cap');
  const tcEl = hero.querySelector('[data-tc]');
  const teleEl = hero.querySelector('[data-tele]');
  const liveEl = hero.querySelector('.wd3-live');
  const headEl = hero.querySelector('.wd3-head');
  let lastStep = -1, lastTele = '', lastTc = '';

  /* ---------------- Zustand pro Fortschritt ---------------- */
  const qTmp = new THREE.Quaternion();
  let lastP = 0;
  function apply(p, dt) {
    const fwd = p >= lastP;

    // Intro beim Laden: Drohne fliegt ein, der Laser zeichnet den Bauplan
    intro = reduce || QA ? 1 : clamp((perfNow - t0) / 3.2);
    const gL = Math.max(eInOut(seg(intro, .3, .78)), seg(p, .02, .06)), gP = Math.max(eInOut(seg(intro, .72, 1)), seg(p, .04, .08));
    const gFade = 1 - seg(p, .3, .42), gUp = .45 + .4 * seg(p, .02, .1);
    ghostL.material.dashSize = ghostL.userData.total * gL; ghostL.material.opacity = gUp * Math.min(1, gL * 5) * gFade * (1 - .5 * seg(p, .16, .26));
    ghostP.material.dashSize = ghostP.userData.total * gP; ghostP.material.opacity = gUp * Math.min(1, gP * 5) * gFade * (1 - .5 * seg(p, .2, .28));
    ghostL.visible = ghostL.material.opacity > .004; ghostP.visible = ghostP.material.opacity > .004;

    // Laptop setzt sich zusammen
    const tb = seg(p, .14, .2), tk = seg(p, .16, .21), tl = seg(p, .18, .23), to = seg(p, .21, .27);
    L.g.visible = tb > 0;
    L.base.position.y = LT / 2 + (1 - eBack(tb)) * 2.4; L.base.rotation.z = (1 - eOut(tb)) * .25;
    L.kb.visible = tk > 0; L.kb.position.y = LT + .002 + (1 - eOut(tk)) * .9;
    L.lid.visible = tl > 0;
    L.lid.position.y = LT + (1 - eBack(tl)) * 2.2; L.lid.position.z = -LD / 2 + .03 - (1 - eOut(tl)) * .4;
    L.lid.rotation.x = lerp(Math.PI / 2 - .02, OPEN, eBack(to));
    L.sh.material.opacity = .75 * eOut(tb);
    scrMatD.color.setScalar(lerp(.25, 1, seg(p, .24, .28)));
    // Handy
    const tp = seg(p, .2, .27);
    P.g.visible = tp > 0;
    P.g.position.set(PHONE_HOME.x + (1 - eOut(tp)) * 1.4, (1 - eBack(tp)) * 2.6, PHONE_HOME.z + (1 - eOut(tp)) * 1.2);
    P.g.rotation.set(0, PHONE_ROT + (1 - eOut(tp)) * 2.4, (1 - eOut(tp)) * .5);
    scrMatM.color.setScalar(lerp(.25, 1, seg(p, .25, .28)));

    // Bausteine fliegen ein und rasten ein
    let placed = 0;
    for (const t of tiles) {
      const k = seg(p, t.a, t.b);
      const flush = seg(p, .685, .7);
      t.grp.visible = k > 0 && p < .705;
      if (k >= 1) placed++;
      if (!t.grp.visible) { t.last = k; continue; }
      const e = eOut(k), b = eBack(k);
      t.grp.position.lerpVectors(t.from, t.home, Math.min(1.08, b));
      t.grp.position.z = lerp(t.from.z, t.home.z, e) - flush * (t.home.z - (t.phone ? PT / 2 + .008 : LIDT / 2 + .006));
      t.grp.rotation.set(t.rot.x * (1 - e), t.rot.y * (1 - e), t.rot.z * (1 - e));
      const sc = .55 + .45 * Math.min(1, b);
      t.grp.scale.setScalar(sc);
      // Kantenglühen kurz vor und nach dem Einrasten
      t.edgeMat.opacity = k < 1 ? .25 + .75 * seg(k, .55, .95) : Math.max(0, 1 - seg(p, t.b, t.b + .03)) * .9;
      t.face.material.opacity = 1;
      if (fwd && t.last < 1 && k >= 1 && !reduce && dt > 0) snapFx(t);
      t.last = k;
    }

    // Kapitel 04: Code-Panel + Laser-Scan füllt die Seite
    const cIn = seg(p, .55, .6), cOut = seg(p, .655, .69);
    panel.visible = cIn > 0 && cOut < 1;
    if (panel.visible) {
      panelLines.forEach((m, i) => {
        const r = seg(p, .56 + i * .0105, .566 + i * .0105);
        m.visible = r > 0;
        m.userData.reveal(eOut(r), .13);
        m.userData.mat.opacity = (.35 + .65 * Math.min(1, r * 3)) * (1 - cOut) * (i === Math.floor(seg(p, .56, .645) * PANEL.length) ? 1 : .8);
      });
      panel.position.set(lerp(-.95, -.2, eIn(cOut)), lerp(2.15, 1.7, eIn(cOut)), lerp(1.55, .2, eIn(cOut)));
      panel.scale.setScalar(lerp(1, .35, eIn(cOut)));
    }
    const fD = seg(p, .575, .655), fM = seg(p, .63, .675);
    fillD.visible = fD > 0; if (fD > 0) fillD.userData.set(eInOut(fD));
    fillM.visible = fM > 0; if (fM > 0) fillM.userData.set(eInOut(fM));
    fillD.material.opacity = fillM.material.opacity = 1;

    // Drohne
    camAt(DR, p); drP.copy(camP); drT.copy(camT);
    if (intro < 1) { const k = eOut(seg(intro, 0, .42)); drP.set(lerp(9, drP.x, k), lerp(6.5, drP.y, k), lerp(5, drP.z, k)); }
    if (flow) { drP.x = lerp(.7, drP.x, .55); drT.x = lerp(.7, drT.x, .6); }
    const hov = reduce ? 0 : 1;
    drP.y += Math.sin(perfNow * 1.9) * .05 * hov; drP.x += Math.sin(perfNow * 1.3) * .035 * hov;
    drVel.subVectors(drP, drPrev).multiplyScalar(dt > 0 ? 1 / Math.max(dt, .008) : 0); drPrev.copy(drP);
    drone.position.copy(drP);
    const yaw = Math.atan2(drT.x - drP.x, drT.z - drP.z);
    tmp.set(Math.sin(yaw), 0, Math.cos(yaw));
    const fv = clamp(drVel.dot(tmp) * .06, -.35, .35), sv = clamp((drVel.x * Math.cos(yaw) - drVel.z * Math.sin(yaw)) * .06, -.35, .35);
    drone.rotation.set(fv + .08, yaw, -sv, 'YXZ');
    const camPitch = Math.atan2(drP.y - drT.y, Math.hypot(drT.x - drP.x, drT.z - drP.z));
    cam.rotation.x = clamp(camPitch - .08, -.2, 1.1);
    for (const pr of props) pr.hub.rotation.y += dt * 38 * pr.dir;
    ledRec.visible = Math.sin(perfNow * 6) > -.2 || p < .68;
    dShadow.position.set(drP.x, .007, drP.z); dShadow.scale.setScalar(Math.max(.4, 1.6 - drP.y * .18));
    dShadow.material.opacity = .3 * clamp(1.4 - drP.y * .2);

    // Laser: Kapitel 01 (Vermessen) und 04 (Scan)
    lens.getWorldPosition(tmp);
    let on = 0;
    if (p < .145) {
      on = Math.max(p < .03 ? seg(intro, .28, .4) * (1 - seg(p, .015, .03)) : 0, seg(p, .03, .04)) * (1 - seg(p, .13, .145));
      let B, C;
      if (p < .03) { // Leerlauf: Laser fährt den Bauplan ab (zeitgesteuert)
        const ph = intro < 1 ? seg(intro, .3, 1) * 2 : 2 + (perfNow - t0 - 3.2) * .22, w = ph % 2, s = eInOut(w < 1 ? w : 2 - w);
        if (ph < 1.5 || Math.floor(ph / 2) % 2 === 0) { const yy = SY + SH / 2 - SH * s; B = onLid(-SW / 2 - .05, yy); C = onLid(SW / 2 + .05, yy); }
        else { const yy = PSH / 2 - PSH * s; B = onPhone(-PSW / 2 - .04, yy); C = onPhone(PSW / 2 + .04, yy); }
      } else if (p < .095) { const s = eInOut(seg(p, .03, .09)); const yy = SY + SH / 2 - SH * s; B = onLid(-SW / 2 - .05, yy); C = onLid(SW / 2 + .05, yy); }
      else { const s = eInOut(seg(p, .095, .135)); const yy = PSH / 2 - PSH * s; B = onPhone(-PSW / 2 - .04, yy); C = onPhone(PSW / 2 + .04, yy); }
      laser(tmp, B, C, on);
    } else if (p > .565 && p < .68) {
      on = seg(p, .565, .58) * (1 - seg(p, .665, .68));
      let B, C;
      if (p < .63) { const s = eInOut(fD); const yy = SY + SH / 2 - SH * s; B = L.lid.localToWorld(tmp2.set(-SW / 2 - .05, yy, .06)).clone(); C = L.lid.localToWorld(tmp3.set(SW / 2 + .05, yy, .06)).clone(); }
      else { const s = eInOut(fM); const yy = PSH / 2 - PSH * s; B = P.body.localToWorld(tmp2.set(-PSW / 2 - .04, yy, .08)).clone(); C = P.body.localToWorld(tmp3.set(PSW / 2 + .04, yy, .08)).clone(); }
      laser(tmp, B, C, on);
    } else laser(tmp, tmp, tmp, 0);

    // Kapitel 05: Live
    const lv = seg(p, .69, .72), lv2 = eInOut(seg(p, .7, .78));
    const fl = seg(p, .688, .7) * (1 - seg(p, .7, .74));
    flashMat.opacity = fl * .72;
    flashD.visible = flashM.visible = fl > .01;
    M.glow.opacity = .55 * lv2 * (1 - .35 * seg(p, .84, .95));
    M.spill.opacity = .55 * lv2;
    haloD.visible = haloM.visible = spill.visible = lv2 > .01;
    screenLight.intensity = 6 * lv2;
    renderer.toneMappingExposure = 1 + .14 * lv2 + .25 * fl;
    key.intensity = 1.7 - .35 * lv2; hemi.intensity = .55 - .1 * lv2;
    gridMajor.material.opacity = .11 + .05 * lv2;

    // Kapitel 06: Galerie steigt aus dem Boden
    if (p > .78 && !lineupBuilt) buildLineup();
    for (const it of lineup) {
      const t = seg(p, it.a, it.b);
      it.g.visible = t > 0;
      it.g.position.y = it.home.y - (1 - eOut(t)) * 3.4;
      it.ring.visible = t > 0 && t < 1;
      if (it.ring.visible) { it.ring.material.opacity = Math.sin(t * Math.PI) * .9; it.ring.scale.setScalar(it.ring.userData.r * (1 + 1.4 * eOut(t))); }
    }

    // Nebel zieht sich am Ende zurück, damit die hintere Reihe hell bleibt
    const fz = eInOut(seg(p, .78, .95)); scene.fog.near = lerp(17, 34, fz); scene.fog.far = lerp(52, 95, fz);
    // Kamera
    const R = flow ? RIG_M : RIG_D;
    camAt(R, p);
    camera.position.copy(camP).sub(camT).multiplyScalar(fitK).add(camT);
    camera.position.x += par.x * .5; camera.position.y += par.y * .3;
    camera.lookAt(camT);
    // Bildausschnitt: Bühne rechts (Desktop) bzw. Mitte (Handy)
    if (flow) setView(.5, lerp(.6, .44, seg(p, -.05, .06)) - .03 * eInOut(seg(p, .8, .95)));
    else setView(stageX, .5);
    camera.updateMatrixWorld();

    // Maßketten
    for (const d of dims) {
      const inn = seg(p, d.a, d.b), out = seg(p, d.fadeA, d.fadeB);
      const vis = inn > 0 && out < 1;
      d.g.visible = vis; d.el.style.opacity = vis ? (Math.min(1, inn * 4) * (1 - out)).toFixed(3) : 0;
      if (!vis) continue;
      const e = eOut(inn);
      const Pp = tmp.copy(d.A).lerp(d.B, e);
      setBar(d.line, d.A, Pp, .012);
      const dir = tmp2.subVectors(d.B, d.A).normalize();
      const up = Math.abs(dir.y) > .9 ? tmp3.set(1, 0, 0) : tmp3.set(0, 1, 0);
      d.t1.position.copy(d.A); d.t1.scale.set(.012, .012, .16); d.t1.lookAt(tmp2.copy(d.A).add(up));
      d.t2.position.copy(Pp); d.t2.scale.set(.012, .012, .16); d.t2.lookAt(tmp2.copy(Pp).add(up));
      const v = fmt(d.total * e) + ' px';
      if (v !== d.shown) { d.val.textContent = v; d.shown = v; }
      tmp.copy(d.A).lerp(d.B, e / 2).project(camera);
      d.el.style.transform = `translate3d(${((tmp.x * .5 + .5) * W).toFixed(1)}px,${((-tmp.y * .5 + .5) * H).toFixed(1)}px,0)`;
    }

    // LIVE-Badge über dem Laptop
    if (liveEl) {
      const show = p > .715 && p < .86;
      liveEl.classList.toggle('on', show);
      if (show) {
        tmp.copy(onLid(SW / 2 - .1, SY + SH / 2 + .32, .1)).project(camera);
        liveEl.style.transform = `translate3d(${((tmp.x * .5 + .5) * W).toFixed(1)}px,${((-tmp.y * .5 + .5) * H).toFixed(1)}px,0)`;
      }
    }
    // Namensschilder der Galerie
    const tagsOn = p > .9 && !flow;
    hero.classList.toggle('tags-on', tagsOn);
    if (tagsOn) {
      for (const it of [mainItem, ...lineup]) {
        const base = it.g.localToWorld(tmp.copy(it.anchor));
        base.project(camera);
        const x = (base.x * .5 + .5) * W, y = (-base.y * .5 + .5) * H;
        const vis = base.z < 1 && x > -40 && x < W + 40 && y < H + 20;
        it.el.style.opacity = vis && (hovered === it || (it.main && !hovered)) ? 1 : 0;
        it.el.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0) translate(-50%,-100%)`;
        it.el.classList.toggle('hot', hovered === it);
      }
    }

    // HUD
    let si = RANGES.findIndex(r => p >= r[0] && p < r[1]); if (si < 0) si = 5;
    if (si !== lastStep) {
      chaps.forEach((s, i) => { s.classList.toggle('on', i === si); s.classList.toggle('done', i < si); });
      const s = chaps[si];
      if (capEl && s) {
        capEl.innerHTML = `<span>${s.dataset.n} / 06</span><strong>${s.dataset.t}</strong><em>${s.dataset.d}</em>`;
        capEl.classList.remove('in'); void capEl.offsetWidth; capEl.classList.add('in');
      }
      lastStep = si;
    }
    chaps.forEach((s, i) => s.style.setProperty('--f', seg(p, RANGES[i][0], Math.min(1, RANGES[i][1])).toFixed(3)));
    if (headEl) headEl.style.transform = `translateX(${(p * 100).toFixed(2)}%)`;
    const secs = p * 42, ff = Math.floor((secs % 1) * 25);
    const tc = `00:00:${String(Math.floor(secs)).padStart(2, '0')}:${String(ff).padStart(2, '0')}`;
    if (tcEl && tc !== lastTc) { tcEl.textContent = tc; lastTc = tc; }
    const tele = p < .14 ? 'VERMESSEN · ' + fmt(1440 * seg(p, .045, .1)) + ' × ' + fmt(900 * seg(p, .06, .11)) + ' PX'
      : p < .28 ? 'GERÄTE · RASTER 12 / 4 SPALTEN'
      : p < .56 ? 'BAUSTEINE ' + String(placed).padStart(2, '0') + ' / ' + (nD + nM)
      : p < .68 ? 'CODE · ' + Math.round(seg(p, .56, .675) * 100) + ' %'
      : p < .8 ? 'LIVE · FALCON-EYE.DE/ENTWURF/HUDALLA'
      : 'REFERENZEN · ' + Math.max(1, Math.round(seg(p, .81, .92) * 10)) + ' / 10';
    if (teleEl && tele !== lastTele) { teleEl.textContent = tele; lastTele = tele; }
    hero.style.setProperty('--p', p.toFixed(4));
    hero.classList.toggle('is-start', p < .02);
    hero.classList.toggle('is-pre', flow && rawP < -.05);
    if (flow && copy && !reduce) { // OSD erst zeigen, wenn der Einleitungstext aus dem Weg ist
      const cb = copy.getBoundingClientRect().bottom - 60;
      hero.style.setProperty('--ot', clamp((150 - cb) / 80).toFixed(3));
      hero.style.setProperty('--ob', clamp((H - 250 - cb) / 80).toFixed(3));
    } else { hero.style.removeProperty('--ot'); hero.style.removeProperty('--ob'); }
    hero.classList.toggle('is-live', p > .7 && p < .8);
    hero.classList.toggle('is-done', p > .86);
    lastP = p;
  }

  const qa = new THREE.Quaternion();
  function snapFx(t) {
    t.face.getWorldPosition(tmp);
    t.grp.getWorldQuaternion(qa);
    const n = tmp2.set(0, 0, 1).applyQuaternion(qa);
    const cnt = lowQ ? 16 : 34;
    // Funken an den Ecken
    for (const [sx, sy] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      tmp3.set(sx * t.w / 2, sy * t.h / 2, .02); t.grp.localToWorld(tmp3);
      emit(tmp3, V(sx * .6 + n.x, sy * .3 + n.y, n.z + .4), Math.ceil(cnt / 4), t.phone ? .7 : 1);
    }
    flashAt(tmp, Math.max(t.w, t.h) * 1.4 + .4);
    // Code blitzt auf
    tmp3.set(-t.w / 2, t.h / 2 + .12, .16); t.grp.localToWorld(tmp3);
    popCode(t.code, tmp3, qa);
    wakeFx = 1;
  }

  /* ---------------- Größe, Scroll, Loop ---------------- */
  let W = 1, H = 1, fitK = 1, vx = .5, vy = .5, stageX = .735;
  const par = { x: 0, y: 0, tx: 0, ty: 0 };
  function setView(fx, fy) {
    vx = fx; vy = fy;
    camera.setViewOffset(W, H, -(fx - .5) * W, -(fy - .5) * H, W, H);
  }
  function resize() {
    flow = flowMQ.matches;
    const r = canvas.parentElement.getBoundingClientRect();
    W = Math.max(1, r.width); H = Math.max(1, r.height);
    renderer.setSize(W, H, false);
    camera.aspect = W / H;
    camera.fov = camera.aspect < .8 ? 40 : camera.aspect < 1.2 ? 36 : 32;
    const tanH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.aspect;
    const narrow = camera.aspect < 1.45;
    stageX = narrow ? .765 : .735;
    const frac = flow ? .84 : narrow ? .33 : .38;
    fitK = clamp((.4588 * .4) / (tanH * frac), .75, 1.8);
    camera.updateProjectionMatrix();
    hero.toggleAttribute('data-nodock', !flow);
    if (lineupBuilt) layoutLineup();
  }
  addEventListener('resize', () => { resize(); warm = 0; wake(); }, { passive: true });
  resize();
  const fine = matchMedia('(pointer:fine)').matches;

  // Hover und Klick auf die Galerie
  let hovered = null, downAt = null;
  function pick(e) {
    if (prog < .86) return null;
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects(pickables.filter(m => m.visible), false)[0];
    return hit ? hit.object.userData.item : null;
  }
  canvas.addEventListener('pointermove', e => {
    if (fine && !reduce) { par.tx = (e.clientX / innerWidth - .5); par.ty = -(e.clientY / innerHeight - .5); }
    const h = pick(e);
    if (h !== hovered) { hovered = h; canvas.style.cursor = h ? 'pointer' : ''; }
    wake();
  }, { passive: true });
  canvas.addEventListener('pointerleave', () => { hovered = null; canvas.style.cursor = ''; par.tx = par.ty = 0; wake(); });
  canvas.addEventListener('pointerdown', e => { downAt = [e.clientX, e.clientY]; });
  canvas.addEventListener('click', e => {
    if (downAt && Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) > 8) return;
    const it = pick(e); if (!it) return;
    const li = document.querySelectorAll('.wd-ref')[it.ref]; if (!li) return;
    const top = document.querySelector('.top'), off = (top ? top.offsetHeight : 70) + 24;
    let y = 0; for (let el = li; el; el = el.offsetParent) y += el.offsetTop; // ohne Einblend-Transform
    if (window.FE && window.FE.lenis) window.FE.lenis.scrollTo(y - off);
    else scrollTo({ top: y - off, behavior: reduce ? 'auto' : 'smooth' });
  });

  const copy = hero.querySelector('.wd3-copy');
  function target() {
    if (reduce) return 1;
    const r = hero.getBoundingClientRect();
    const vh = innerHeight;
    const start = flow && copy ? Math.max(0, copy.offsetHeight - vh * (vh < 560 ? .3 : .55)) : 0;
    const range = r.height - vh - start;
    rawP = range > 0 ? (-r.top - start) / range : 1;
    return range > 0 ? clamp(rawP) : 1;
  }
  let rawP = 0;
  let prog = target(), last = performance.now(), visible = true, raf = 0, warm = 0, wakeFx = 0, lastDraw = 0, lastAct = performance.now();
  t0 = performance.now() / 1000;
  const io = new IntersectionObserver(es => { visible = es[0].isIntersecting; if (visible) wake(); }, { rootMargin: '120px' });
  io.observe(hero);
  function loop(now) {
    raf = 0;
    const dt = Math.min(.05, Math.max(.001, (now - last) / 1000)); last = now; perfNow = now / 1000;
    const tgt = target();
    prog += (tgt - prog) * (reduce || QA ? 1 : Math.min(1, dt * 9));
    if (Math.abs(tgt - prog) < .0002) prog = tgt;
    par.x += (par.tx - par.x) * Math.min(1, dt * 3); par.y += (par.ty - par.y) * Math.min(1, dt * 3);
    const moving = prog !== tgt || intro < 1 || Math.abs(par.tx - par.x) > .001 || Math.abs(par.ty - par.y) > .001;
    const fx = sparksAlive > 0 || wakeFx > 0;
    if (moving || fx) lastAct = now;
    // Ruhezustand: Drohne schwebt weiter, aber sparsam (30 bzw. 20 fps) und nach 15 s ohne Eingabe gar nicht mehr
    if (moving || fx || warm < 3 || now - lastDraw > (lowQ ? 49 : 32)) {
      apply(prog, dt);
      const a = stepSparks(dt), b = stepFlashes(dt), c = stepPops(dt);
      wakeFx = (a + b + c) > 0 ? 1 : 0;
      renderer.render(scene, camera);
      lastDraw = now; warm++;
    }
    if (visible && !reduce && !document.hidden && (QA || now - lastAct < 15000)) raf = requestAnimationFrame(loop);
  }
  wake = () => {
    if (reduce) { requestAnimationFrame(() => { apply(1, 0); renderer.render(scene, camera); }); return; }
    lastAct = performance.now();
    if (visible && !raf) { last = performance.now(); raf = requestAnimationFrame(loop); }
  };
  addEventListener('scroll', wake, { passive: true });
  document.addEventListener('visibilitychange', wake);

  // Schrift für Code-Texturen und Raster nachladen, dann neu zeichnen
  if (document.fonts && document.fonts.load) {
    Promise.race([document.fonts.load(`400 40px ${MONO}`), new Promise(r => setTimeout(r, 2500))]).then(() => {
      bpD.userData.redraw((g, w, h) => drawBlueprint(g, w, h, 12, '1440 × 900'));
      bpM.userData.redraw((g, w, h) => drawBlueprint(g, w, h, 4, '390 × 664'));
      [...pops.map(o => o.m), ...panelLines].forEach(m => { const t = m.userData.text; m.userData.text = ''; m.userData.setText(t); });
      wake();
    });
  }
  // Galerie-Texturen erst laden, wenn die Seite steht (nicht vor dem ersten Bild)
  if (reduce) buildLineup();
  else if ('requestIdleCallback' in window) requestIdleCallback(() => buildLineup(), { timeout: 4000 });
  else setTimeout(buildLineup, 2500);

  apply(prog, 0); renderer.render(scene, camera);
  hero.classList.add('gl-ready');
  window.__wd3 = { set: v => { prog = v; apply(v, .016); renderer.render(scene, camera); }, get p() { return prog; },
    proj: (x, y, z) => { const v = V(x, y, z).project(camera); return [+(v.x * .5 + .5).toFixed(3), +(-v.y * .5 + .5).toFixed(3)]; } };
  wake();
}
