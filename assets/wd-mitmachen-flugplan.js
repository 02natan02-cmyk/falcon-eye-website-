/* Falcon Eye – Webdesign: Anfrage als „Flugplan“.
   Liest nur mit, was im Formular steht, und baut daraus die Vorschaukarte „Ihre Seite entsteht“ und den Fortschritt.
   Der Versand bleibt komplett in landing.js (Web3Forms, Prüfung, Erfolg und Fehler) – hier wird nichts abgeschickt.
   Erfolg erkennt die Tafel an „is-sent“ am Formular und dem sichtbaren Danke-Text: dann hebt die Drohne mit dem Umschlag ab.
   Ohne GSAP oder bei reduzierter Bewegung: alles sofort im fertigen Zustand. */
(function () {
  'use strict';
  var form = document.getElementById('anfrage');
  var fp = form && form.querySelector('[data-wdm-fp]');
  if (!fp) return;
  var sec = form.closest('section') || document.body;
  var G = window.gsap;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var q = function (s, r) { return (r || fp).querySelector(s); };
  var qa = function (s, r) { return [].slice.call((r || fp).querySelectorAll(s)); };

  var cardL = q('.wdm-fp-l'), card = q('[data-fp-card]'), urlEl = q('[data-fp-url]'), mono = q('[data-fp-mono]'), nm = q('[data-fp-nm]');
  var img = q('[data-fp-img]'), hEl = q('[data-fp-h]'), msgEl = q('[data-fp-msg]'), codeEl = q('[data-fp-code]');
  var pctEl = q('[data-fp-pct]'), stEl = q('[data-fp-st]'), rw = q('.wdm-fp-rw'), fly = q('[data-fp-fly]');
  var cTel = q('[data-fp-c="tel"]'), cMail = q('[data-fp-c="mail"]');
  var wps = {}; qa('[data-wp]').forEach(function (li) { wps[li.dataset.wp] = li; });
  var btn = form.querySelector('button[type=submit]'), okBox = form.querySelector('[data-af-ok]');
  var E = form.elements;

  var BR = { 'Handwerk & Service': 'handwerk', 'Küche & Wohnen': 'kueche', 'Auto & Werkstatt': 'auto', 'Gesundheit & Pflege': 'praxis', 'Gastro & Café': 'gastro', 'Laden & Handel': 'laden', 'Verein': 'verein', 'Etwas anderes': 'anders' };
  var HL = { handwerk: 'Ehrliche Arbeit. Gleich um die Ecke.', kueche: 'Hier wird gekocht, gelacht, gelebt.', auto: 'Ihr Auto ist bei uns in guten Händen.', praxis: 'Ankommen. Durchatmen.', gastro: 'Wie bei Oma. Nur mit Reservierung.', laden: 'Fragen Sie ruhig. Wir kennen uns aus.', verein: 'Mitmachen lohnt sich.', anders: 'Ihre Geschichte. Ihre Seite.' };
  var H0 = 'Ihre Geschichte. Ihre Seite.';

  var val = function (n) { var f = E[n]; return f && typeof f.value === 'string' ? f.value.trim() : ''; };
  var read = function () { return { name: val('name'), firma: val('firma'), tel: val('telefon'), mail: val('email'), branche: val('branche'), msg: val('nachricht'), code: val('code') }; };
  var slug = function (s) { return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/ß/g, 'ss').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 22); };
  var initial = function (s) { var t = String(s).replace(/^(der|die|das)\s+/i, '').trim(); return (t.charAt(0) || 'I').toUpperCase(); };
  var pop = function (el) { if (reduce) return; el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); };
  var scan = function () { if (reduce) return; card.classList.remove('is-scan'); void card.offsetWidth; card.classList.add('is-scan'); };
  var setText = function (el, t) { if (el.textContent !== t) el.textContent = t; };

  /* ---------- Szene und Farbe je Branche ---------- */
  var curB = '';
  function setBranch(b, anim) {
    if (b === curB) return;
    curB = b;
    fp.dataset.b = b || 'anders';
    fp.classList.toggle('has-branche', !!b);
    setHead(b ? HL[b] : H0, anim);
    var old = qa('.wdm-sc', img), Z = window.WDM_SZENEN;
    if (!b || !Z || !Z.svg[b]) { old.forEach(function (n) { n.remove(); }); return; }
    var sc = document.createElement('div');
    sc.className = 'wdm-sc'; sc.dataset.sc = b; sc.innerHTML = Z.svg[b];
    img.insertBefore(sc, img.firstChild);
    if (anim && G && !reduce) {
      G.fromTo(sc, { clipPath: 'inset(0 0 0 100%)' }, { clipPath: 'inset(0 0 0 0%)', duration: .6, ease: 'power3.inOut', onComplete: function () { old.forEach(function (n) { n.remove(); }); sc.style.clipPath = ''; } });
      G.fromTo(sc.querySelector('svg'), { scale: 1.18 }, { scale: 1, duration: 1.1, ease: 'power3.out', transformOrigin: '50% 60%' });
    } else old.forEach(function (n) { n.remove(); });
  }
  function setHead(t, anim) {
    if (hEl.dataset.t === t) return;
    hEl.dataset.t = t;
    hEl.textContent = '';
    t.split(' ').forEach(function (w, i, a) {
      var s = document.createElement('span'); s.className = 'w'; s.textContent = w;
      hEl.appendChild(s); if (i < a.length - 1) hEl.appendChild(document.createTextNode(' '));
    });
    if (anim && G && !reduce) G.from(qa('.w', hEl), { yPercent: 70, opacity: 0, stagger: .06, duration: .45, ease: 'back.out(2)', delay: .15 });
  }

  /* ---------- Fortschritt und Vorschau ---------- */
  var last = null, pctN = 0, pctTw = null;
  function setPct(n, anim) {
    if (pctTw) { pctTw.kill(); pctTw = null; }
    if (!anim || !G || reduce) { pctN = n; pctEl.textContent = n + ' %'; return; }
    var o = { v: pctN };
    pctTw = G.to(o, { v: n, duration: .5, ease: 'power2.out', onUpdate: function () { pctN = Math.round(o.v); pctEl.textContent = pctN + ' %'; } });
  }
  function render(anim) {
    if (demoTl) return;
    var d = read(), p = last || {};
    var on = { name: !!d.name, kontakt: !!(d.tel || d.mail), firma: !!d.firma, branche: !!d.branche, nachricht: !!d.msg };
    var n = 0;
    Object.keys(on).forEach(function (k) { if (on[k]) n++; if (wps[k]) wps[k].classList.toggle('on', on[k]); });
    rw.style.setProperty('--i', n); rw.style.setProperty('--im', Math.max(1, n)); rw.classList.toggle('is-zero', !n);
    setPct(n * 20, anim);
    var go = on.name && on.kontakt;
    fp.classList.toggle('is-go', go); form.classList.toggle('wdm-go', go);
    if (!fp.classList.contains('is-sending') && !fp.classList.contains('is-fly') && !fp.classList.contains('is-hold')) {
      var miss = []; if (!on.name) miss.push('Name'); if (!on.kontakt) miss.push('Kontakt');
      setText(stEl, go ? (n === 5 ? 'Startklar ✓ Alles an Bord' : 'Startklar ✓') : 'Fehlt noch: ' + miss.join(' · '));
    }
    /* Logo und Adresse aus dem Firmennamen */
    var firma = d.firma.slice(0, 40);
    fp.classList.toggle('has-firma', !!firma);
    setText(nm, firma || 'Ihr Betrieb');
    var ini = initial(firma || 'Ihr Betrieb');
    if (mono.textContent !== ini) { mono.textContent = ini; if (anim) pop(mono); }
    setText(urlEl, (slug(firma) || 'ihr-betrieb') + '.de');
    /* Branche: Farbe, Bild, Überschrift */
    setBranch(BR[d.branche] || (d.branche ? 'anders' : ''), anim);
    /* eigene Worte als Text auf der Seite */
    fp.classList.toggle('has-msg', !!d.msg);
    setText(msgEl, d.msg.slice(0, 140));
    /* Kontaktknöpfe leuchten auf */
    [[cTel, !!d.tel], [cMail, !!d.mail]].forEach(function (x) { var was = x[0].classList.contains('on'); x[0].classList.toggle('on', x[1]); if (anim && x[1] && !was) pop(x[0]); });
    /* Code (z. B. BlackFriday45 aus dem Angebot) */
    fp.classList.toggle('has-code', !!d.code);
    if (d.code) setText(codeEl, d.code.slice(0, 24) + ' ✓');
    if (anim && (d.firma !== p.firma || d.branche !== p.branche || d.msg !== p.msg)) scan();
    last = d;
  }

  /* ---------- Hinweis bis zur ersten Eingabe ---------- */
  var used = false;
  function markUsed() {
    if (used) return; used = true;
    fp.classList.remove('is-hint');
    if (demoTl) stopDemo();
  }
  ['input', 'change'].forEach(function (ev) { form.addEventListener(ev, function (e) { if (e.target && e.target.name) { markUsed(); render(true); } }); });
  form.addEventListener('focusin', function (e) { if (e.target && e.target.name && e.target.name !== 'botcheck') { markUsed(); render(false); } });

  /* Tippen auf die Vorschau: springt zum nächsten fehlenden Feld */
  cardL.addEventListener('click', function () {
    if (fp.classList.contains('is-fly')) return;
    var d = read(), next = !d.name ? 'name' : !(d.tel || d.mail) ? 'telefon' : !d.firma ? 'firma' : !d.branche ? 'branche' : !d.msg ? 'nachricht' : 'name';
    var f = E[next]; if (f && f.focus) f.focus();
  });

  /* ---------- Selbst-Impuls: Probelauf beim ersten Sichtkontakt ---------- */
  var demoTl = null, demoDone = false;
  function stopDemo() {
    if (!demoTl) return;
    demoTl.kill(); demoTl = null;
    fp.classList.remove('is-demo');
    curB = '__'; render(false);
  }
  function runDemo() {
    if (demoDone) return; demoDone = true;
    var d = read();
    if (reduce || !G || used || d.name || d.firma || d.tel || d.mail || d.branche || d.msg) { if (!used) fp.classList.add('is-hint'); return; }
    fp.classList.add('is-demo');
    setText(stEl, 'Probelauf …');
    var keys = ['name', 'kontakt', 'firma', 'branche', 'nachricht'];
    var tl = G.timeline({
      onComplete: function () {
        demoTl = null; fp.classList.remove('is-demo');
        keys.forEach(function (k) { wps[k].classList.remove('on'); });
        render(false);
        if (!used) fp.classList.add('is-hint');
      }
    });
    demoTl = tl;
    ['handwerk', 'gastro', 'praxis'].forEach(function (b, i) { tl.call(function () { setBranch(b, true); scan(); }, null, .2 + i * 1.05); });
    keys.forEach(function (k, i) {
      tl.call(function () {
        wps[k].classList.add('on'); rw.style.setProperty('--i', i + 1); rw.style.setProperty('--im', i + 1); rw.classList.remove('is-zero');
        setPct((i + 1) * 20, true);
      }, null, .35 + i * .5);
    });
    tl.call(function () { setText(stEl, 'So einfach geht es'); }, null, 2.9);
    tl.call(function () { setBranch('', false); }, null, 3.6);
    tl.to({}, { duration: .2 }, 3.7);
  }

  /* ---------- Versand beobachten (landing.js schickt ab) ---------- */
  var ctx = null, wasSent = false;
  /* nach dem Absenden wird das Formular kürzer: Tafel und Danke-Text gemeinsam ins Bild holen */
  function bringIntoView() {
    var top = document.querySelector('.top'), hh = top ? top.offsetHeight : 66, r = fp.getBoundingClientRect();
    if (r.top >= hh + 4 && r.bottom <= innerHeight - 20) return 0;
    var y = Math.max(0, r.top + scrollY - hh - 14);
    if (window.FE && window.FE.lenis && window.FE.lenis.scrollTo) window.FE.lenis.scrollTo(y, { duration: reduce ? 0 : .7, force: true });
    else scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
    return reduce ? 0 : .45;
  }
  function takeoff() {
    fp.classList.remove('is-sending', 'is-hint', 'is-hold');
    fp.classList.add('is-fly');
    qa('[data-wp]').forEach(function (li) { li.classList.add('on'); });
    rw.style.setProperty('--i', 5); rw.style.setProperty('--im', 5); rw.classList.remove('is-zero');
    setPct(100, true);
    setText(stEl, 'Übertragen ✓');
    var dl = bringIntoView();
    if (reduce || !G) { fp.classList.add('is-flown'); return; }
    var s = q('svg', fly), pkg = q('.f-pkg', s), env = q('.f-env', s), flap = q('.f-flap', s), dr = q('.f-dr', s), teth = q('.f-teth', s), trail = q('.f-trail', s), ok = q('.wdm-fp-ok', fly);
    var L = trail.getTotalLength ? trail.getTotalLength() : 300;
    ctx = G.context(function () {
      var tl = G.timeline({ delay: dl, onComplete: function () { fp.classList.add('is-flown'); } });
      tl.to(card, { scale: .4, y: 24, opacity: 0, duration: .5, ease: 'power2.in' }, 0)
        .to(q('.wdm-fp-code'), { opacity: 0, duration: .25 }, 0)
        .to(q('.wdm-fp-cap'), { opacity: 0, duration: .25 }, 0)
        .fromTo(env, { scale: .3, opacity: 0, svgOrigin: '120 131' }, { scale: 1, opacity: 1, svgOrigin: '120 131', duration: .45, ease: 'back.out(2.2)' }, .32)
        .fromTo(flap, { scaleY: -1, svgOrigin: '120 113' }, { scaleY: 1, svgOrigin: '120 113', duration: .35, ease: 'power2.out' }, .62)
        .fromTo(dr, { y: -160, opacity: 0 }, { y: 0, opacity: 1, duration: .75, ease: 'power3.out' }, .5)
        .fromTo(teth, { scaleY: 0, svgOrigin: '120 84' }, { scaleY: 1, svgOrigin: '120 84', duration: .22, ease: 'power1.out' }, 1.2)
        .to(pkg, { y: -16, duration: .4, ease: 'power1.inOut' }, 1.45)
        .set(trail, { opacity: .9, strokeDasharray: L + ' ' + L, strokeDashoffset: L }, 1.8)
        .to(pkg, { x: 140, y: -230, scale: .32, rotation: 16, svgOrigin: '120 110', duration: 1.05, ease: 'power2.in' }, 1.85)
        .to(trail, { strokeDashoffset: 0, duration: 1.05, ease: 'power2.in' }, 1.85)
        .set(trail, { strokeDasharray: '2 7', strokeDashoffset: 0 }, 2.95)
        .fromTo(ok, { opacity: 0, y: 14, scale: .9 }, { opacity: 1, y: 0, scale: 1, duration: .5, ease: 'back.out(2)' }, 2.35)
        .from(q('b span', ok), { scale: 0, rotation: -40, duration: .5, ease: 'back.out(3)' }, 2.6);
    }, fp);
  }
  function resetFlight() {
    if (ctx) { ctx.revert(); ctx = null; }
    fp.classList.remove('is-fly', 'is-flown', 'is-hold', 'is-sending');
    curB = '__'; last = null; render(false);
  }
  if ('MutationObserver' in window) {
    new MutationObserver(function () {
      var sent = form.classList.contains('is-sent');
      if (sent && !wasSent) {
        wasSent = true;
        if (okBox && !okBox.hidden) takeoff();
        else { fp.classList.remove('is-sending'); fp.classList.add('is-hold'); setText(stEl, 'Bitte per WhatsApp oder E-Mail senden'); bringIntoView(); }
      } else if (!sent && wasSent) { wasSent = false; resetFlight(); }
    }).observe(form, { attributes: true, attributeFilter: ['class'] });
    if (btn) new MutationObserver(function () {
      if (btn.disabled) { fp.classList.add('is-sending'); setText(stEl, 'Startfreigabe …'); }
      else if (fp.classList.contains('is-sending')) { fp.classList.remove('is-sending'); if (!form.classList.contains('is-sent')) render(false); }
    }).observe(btn, { attributes: true, attributeFilter: ['disabled'] });
    /* Code wird von außen gesetzt (Angebot „Platz sichern“, Code kopieren, ?code=) */
    var codeWrap = E.code && E.code.closest('.af-f');
    if (codeWrap) new MutationObserver(function () { render(true); }).observe(codeWrap, { attributes: true, attributeFilter: ['class'] });
  }

  /* ---------- Sichtbarkeit ---------- */
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      es.forEach(function (e) { sec.classList.toggle('wdm-off', !e.isIntersecting); if (e.isIntersecting) render(false); });
    }, { rootMargin: '50% 0px 50% 0px', threshold: 0 }).observe(fp);
    new IntersectionObserver(function (es, io) {
      es.forEach(function (e) { if (e.isIntersecting) { io.disconnect(); setTimeout(runDemo, 350); } });
    }, { threshold: .6 }).observe(fp);
  } else { fp.classList.add('is-hint'); }

  render(false);
})();
