/* Wäscherei Kleber – Interaktionen (Entwurf Falcon Eye) */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Header & Menü ---------- */
  var hdr = $('[data-hdr]'), dock = $('[data-dock]');
  function onScroll() {
    var y = scrollY;
    if (hdr) hdr.classList.toggle('solid', y > 30);
    if (dock) {
      var z = $('#zettel'), r = z ? z.getBoundingClientRect() : null;
      var inZ = r && r.top < innerHeight && r.bottom > 0;
      dock.classList.toggle('show', y > innerHeight * .6 && !inZ);
    }
  }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  var burger = $('[data-burger]'), mnav = $('[data-mnav]');
  if (burger) {
    burger.addEventListener('click', function () { var o = burger.getAttribute('aria-expanded') === 'true'; burger.setAttribute('aria-expanded', String(!o)); mnav.hidden = o; hdr.classList.add('solid'); });
    $$('a', mnav).forEach(function (a) { a.addEventListener('click', function () { burger.setAttribute('aria-expanded', 'false'); mnav.hidden = true; }); });
  }

  /* ---------- Öffnungszeiten live (Europe/Berlin) ---------- */
  var H = { 1: [9, 17], 2: [9, 17], 3: [9, 13], 4: [9, 17], 5: [9, 17], 6: [9, 13], 0: null };
  var DN = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
  function berlin() {
    var p = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Berlin', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    var o = {}; p.forEach(function (x) { o[x.type] = x.value; });
    return { d: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(o.weekday), h: parseInt(o.hour, 10) % 24, m: parseInt(o.minute, 10) };
  }
  function status() {
    var t = berlin(), now = t.h + t.m / 60, s = H[t.d], open = !!(s && now >= s[0] && now < s[1]);
    var main, sub;
    if (open) { var left = s[1] - now; main = 'Jetzt geöffnet'; sub = left < 1 ? 'schließt in ' + Math.round(left * 60) + ' Min.' : 'bis ' + s[1] + ' Uhr'; }
    else {
      var d = t.d, add = 0;
      if (s && now < s[0]) { main = 'Geschlossen'; sub = 'öffnet heute um ' + s[0] + ' Uhr'; }
      else { do { d = (d + 1) % 7; add++; } while (!H[d]); main = 'Geschlossen'; sub = 'öffnet ' + (add === 1 ? 'morgen' : DN[d]) + ' um ' + H[d][0] + ' Uhr'; }
    }
    var o = $('[data-open]'); if (o) { o.classList.toggle('is-open', open); $('[data-open-t]').textContent = open ? 'Geöffnet bis ' + s[1] + ' Uhr' : 'Jetzt geschlossen'; }
    var n = $('[data-now]'); if (n) { n.classList.toggle('is-open', open); $('[data-now-t]').textContent = main; $('[data-now-s]').textContent = '· ' + sub; }
    $$('[data-hours] li').forEach(function (li) { li.classList.toggle('today', +li.dataset.d === t.d); });
  }
  status(); setInterval(status, 30000);

  /* ---------- Name aufs Paket ---------- */
  var nameIn = $('[data-name]'), tagName = $('[data-tagname]'), tag = $('[data-tag]');
  var tkName = $('[data-tkname]');
  function swing() { if (!tag || reduce) return; tag.classList.remove('swing'); void tag.offsetWidth; tag.classList.add('swing'); }
  if (nameIn && tagName) {
    var saved = ''; try { saved = sessionStorage.getItem('kl-name') || ''; } catch (e) {}
    if (saved) { nameIn.value = saved; tagName.textContent = saved; if (tkName && !tkName.value) tkName.value = saved; }
    var tmr;
    nameIn.addEventListener('input', function () {
      var v = nameIn.value.trim(); tagName.textContent = v || 'Sie';
      try { sessionStorage.setItem('kl-name', v); } catch (e) {}
      if (tkName && (!tkName.value || tkName.dataset.auto === '1')) { tkName.value = v; tkName.dataset.auto = '1'; }
      clearTimeout(tmr); tmr = setTimeout(swing, 120);
    });
    if (tag) tag.addEventListener('animationend', function (e) { if (e.animationName === 'tagIn') { tag.style.opacity = 1; tag.style.animation = 'none'; tag.style.transform = 'rotate(14deg)'; } if (e.animationName === 'swing') tag.classList.remove('swing'); });
    $('[data-pack]') && $('[data-pack]').addEventListener('pointerenter', swing);
  }
  if (tkName) tkName.addEventListener('input', function () { tkName.dataset.auto = '0'; });

  /* ---------- Zahl hochzählen ---------- */
  $$('[data-count]').forEach(function (el) {
    var to = +el.dataset.count; if (reduce) return;
    new IntersectionObserver(function (es, ob) { es.forEach(function (e) { if (!e.isIntersecting) return; ob.disconnect(); var t0 = performance.now(); (function f(t) { var p = Math.min(1, (t - t0) / 1400); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); })(t0); }); }).observe(el);
  });

  /* ---------- Heißmangel (Scroll) ---------- */
  var mg = $('#mangel');
  if (mg) {
    var disp = $('[data-disp]', mg), sIn = $('[data-sheet-in]', mg), sOut = $('[data-sheet-out]', mg), folded = $('[data-folded]', mg);
    var temp = $('[data-temp]', mg), bar = $('[data-mgbar]', mg), steps = $$('.mg-steps li', mg), v = $('.mg-v', mg);
    var last = -1, idle;
    function mgUpd() {
      var r = mg.getBoundingClientRect(), total = mg.offsetHeight - innerHeight;
      var p = Math.max(0, Math.min(1, -r.top / (total || 1)));
      if (Math.abs(p - last) < .0005) return;
      var moving = last >= 0; last = p;
      // Laken: läuft von rechts in die Walze (x 330 -> 30), glatt kommt es links raus
      var feed = Math.min(1, p / .78);
      var x = 360 - feed * 320;
      sIn.setAttribute('transform', 'translate(' + (x - 360) + ' 0)');
      sOut.setAttribute('transform', 'translate(' + x + ' 0)');
      sOut.style.opacity = p > .8 ? Math.max(0, 1 - (p - .8) / .12) : 1;
      var fp = Math.max(0, (p - .74) / .26);
      folded.style.opacity = fp; folded.style.transform = 'translateY(' + ((1 - fp) * 20) + 'px)';
      temp.textContent = Math.round(20 + Math.min(1, p / .25) * 160);
      bar.parentNode.style.setProperty('--p', p.toFixed(3));
      var si = p < .33 ? 0 : p < .7 ? 1 : 2;
      steps.forEach(function (li, i) { li.classList.toggle('on', i === si); });
      if (moving) { v.style.setProperty('--st', 'running'); clearTimeout(idle); idle = setTimeout(function () { v.style.setProperty('--st', 'paused'); }, 180); }
    }
    addEventListener('scroll', function () { requestAnimationFrame(mgUpd); }, { passive: true }); addEventListener('resize', mgUpd); mgUpd();
  }

  /* ---------- Wäschezettel ---------- */
  var tk = $('[data-ticket]');
  if (tk) {
    var no = '1971-' + String(Math.floor(1000 + Math.random() * 8999));
    $('[data-tkno]').textContent = no; $('[data-tknoin]').value = no;
    var boxes = $$('input[name="Leistung"]', tk), stepEls = $$('.tk-steps li', tk);
    function upSteps() {
      var on = {}; boxes.forEach(function (b) { if (b.checked) b.dataset.steps.split('').forEach(function (c) { on[c] = 1; }); });
      stepEls.forEach(function (li, i) { var a = !!on[li.dataset.st]; if (a && !li.classList.contains('on')) li.style.transitionDelay = (i * 40) + 'ms'; li.classList.toggle('on', a); });
    }
    boxes.forEach(function (b) { b.addEventListener('change', upSteps); });
    $$('input[name="Kunde"]', tk).forEach(function (r) { r.addEventListener('change', function () { tk.classList.toggle('firm', r.value !== 'Privat' && r.checked); }); });
    $$('[data-pick]').forEach(function (a) { a.addEventListener('click', function () { a.dataset.pick.split(',').forEach(function (v) { var b = boxes.filter(function (x) { return x.value === v; })[0]; if (b) b.checked = true; }); upSteps(); }); });
    tk.addEventListener('submit', function (e) {
      e.preventDefault();
      if ($('input[name="_honey"]', tk).value) return;
      var btn = $('[data-tksend]', tk), ok = $('[data-tkok]', tk), err = $('[data-tkerr]', tk);
      var picked = boxes.filter(function (b) { return b.checked; }).map(function (b) { return b.value; });
      var fd = new FormData(tk); fd.delete('Leistung'); fd.append('Leistungen', picked.length ? picked.join(', ') : '— (bitte beraten)');
      btn.disabled = true; btn.textContent = 'Wird abgegeben …'; ok.hidden = true; err.hidden = true;
      fetch(tk.action, { method: 'POST', body: fd, headers: { Accept: 'application/json' } })
        .then(function (r) { return r.json(); })
        .then(function (j) {
          if (j && (j.success === true || j.success === 'true')) { $('[data-stampdate]', tk).textContent = new Date().toLocaleDateString('de-DE'); tk.classList.add('sent'); ok.hidden = false; btn.textContent = 'Abgegeben ✓'; }
          else throw new Error('x');
        })
        .catch(function () { err.hidden = false; btn.disabled = false; btn.textContent = 'Zettel abgeben'; });
    });
  }

  /* ---------- Lamellen sauber ziehen ---------- */
  var bl = $('[data-blinds]');
  if (bl) {
    var sled = $('[data-sled]', bl), lams = $$('.bl-set i', bl), cnt = $('[data-blcount]'), done = $('[data-bldone]');
    var p = 0, dragging = false, auto = !reduce, autoT = null;
    function setP(v) {
      p = Math.max(0, Math.min(1, v)); bl.style.setProperty('--p', p.toFixed(4));
      var n = Math.round(p * lams.length), c = 0;
      lams.forEach(function (l, i) { var cl = i < n; if (cl && !l.classList.contains('clean')) { l.style.setProperty('--sy', (20 + Math.random() * 60) + '%'); } l.classList.toggle('clean', cl); if (cl) c++; });
      cnt.textContent = c; done.hidden = c < lams.length;
    }
    function fromX(x) { var r = bl.getBoundingClientRect(); return (x - r.left - 26 - 17) / (r.width - 52 - 34); }
    sled.addEventListener('pointerdown', function (e) { dragging = true; auto = false; sled.setPointerCapture(e.pointerId); e.preventDefault(); });
    sled.addEventListener('pointermove', function (e) { if (dragging) setP(fromX(e.clientX)); });
    sled.addEventListener('pointerup', function () { dragging = false; });
    sled.addEventListener('pointercancel', function () { dragging = false; });
    bl.addEventListener('click', function (e) { if (e.target === sled || sled.contains(e.target)) return; auto = false; var tgt = fromX(e.clientX), st = p, t0 = performance.now(); (function f(t) { var k = Math.min(1, (t - t0) / 500); setP(st + (tgt - st) * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(f); })(t0); });
    // Kleiner Hinweis: Schlitten fährt beim ersten Sichtkontakt ein Stück an
    new IntersectionObserver(function (es, ob) { es.forEach(function (e) { if (!e.isIntersecting || !auto) return; ob.disconnect(); var t0 = performance.now(); (function f(t) { if (!auto) return; var k = Math.min(1, (t - t0) / 1600); setP(.3 * Math.sin(k * Math.PI / 2)); if (k < 1) requestAnimationFrame(f); })(t0); }); }, { threshold: .6 }).observe(bl);
    setP(0);
  }

  /* ---------- Chronik: ziehen & Pfeile ---------- */
  var row = $('[data-plrow]');
  if (row) {
    var down = false, sx = 0, sl = 0, moved = 0;
    row.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') return; down = true; sx = e.clientX; sl = row.scrollLeft; moved = 0; row.classList.add('drag'); });
    addEventListener('pointermove', function (e) { if (!down) return; moved = Math.abs(e.clientX - sx); row.scrollLeft = sl - (e.clientX - sx); });
    addEventListener('pointerup', function () { if (!down) return; down = false; row.classList.remove('drag'); });
    $$('[data-plstep]').forEach(function (b) { b.addEventListener('click', function () { var w = row.querySelector('.pl').offsetWidth + 30; row.scrollBy({ left: w * +b.dataset.plstep, behavior: 'smooth' }); }); });
  }
})();
