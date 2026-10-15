/* KI-Vorschau: Vorher/Nachher + Stil-Chips + Anfrage */
(function () {
  'use strict';
  document.querySelectorAll('.ki').forEach(sec => {
    const ba = sec.querySelector('[data-ba]'), r = sec.querySelector('[data-ba-r]'), img = sec.querySelector('[data-ki-img]');
    if (ba && r) { const set = v => ba.style.setProperty('--p', v + '%'); r.addEventListener('input', () => set(r.value));
      // sanftes Einladen: einmal hin und her wischen, wenn sichtbar
      const io = new IntersectionObserver(([e]) => { if (!e.isIntersecting) return; io.disconnect(); if (matchMedia('(prefers-reduced-motion: reduce)').matches) return; let t0 = null; const step = t => { t0 = t0 || t; const k = (t - t0) / 2200; if (k >= 1) { set(52); r.value = 52; return; } const v = 52 + Math.sin(k * Math.PI * 2) * 34; set(v); r.value = v; requestAnimationFrame(step); }; setTimeout(() => requestAnimationFrame(step), 400); }, { threshold: .5 }); io.observe(ba); }
    const pre = {}; sec.querySelectorAll('[data-ki]').forEach(b => { const src = img.src.replace(/[^/]+\.webp$/, b.dataset.ki + '.webp'); pre[b.dataset.ki] = src; (new Image()).src = src;
      b.addEventListener('click', () => { sec.querySelectorAll('[data-ki]').forEach(x => x.classList.toggle('on', x === b)); img.animate ? img.animate([{ opacity: .2, filter: 'blur(6px)' }, { opacity: 1, filter: 'blur(0)' }], { duration: 500, easing: 'ease-out' }) : 0; img.src = src;
        const rad = sec.querySelector(`input[name="Stil"][value="${b.textContent}"]`); if (rad) rad.checked = true; }); });
    const f = sec.querySelector('[data-kiform]'); if (!f) return;
    f.addEventListener('submit', e => { const fi = f.querySelector('[data-files]'); let t = 0; for (const x of fi.files) t += x.size; if (t > 9.5e6) { e.preventDefault(); alert('Das Foto ist größer als 10 MB – bitte ein kleineres wählen.'); return; } f.querySelector('[name="_next"]').value = location.href.split('#')[0].split('?')[0] + '?vorschau=1#ki-vorschau'; });
    f.querySelector('[data-files]').addEventListener('change', e => { f.querySelector('[data-filelist]').innerHTML = [...e.target.files].map(x => `<li>${x.name} <em>${(x.size / 1e6).toFixed(1).replace('.', ',')} MB</em></li>`).join(''); });
    if (/[?&]vorschau=1/.test(location.search)) f.querySelector('[data-ki-sent]').hidden = false;
  });
})();
/* Arbeitshöhen-Rechner */
(function () {
  document.querySelectorAll('.ah').forEach(sec => {
    const r = sec.querySelector('[data-ah]'), S = 440 / 210; // px pro cm (Boden y=440)
    const y = cm => 440 - cm * S;
    function upd() {
      const K = +r.value, ideal = Math.round(.63 * K - 15), diff = ideal - 86;
      sec.querySelector('[data-ah-k]').textContent = K + ' cm';
      sec.querySelector('[data-ah-ideal]').textContent = ideal;
      sec.querySelector('[data-ah-msg]').textContent = Math.abs(diff) <= 1 ? 'Die Standardhöhe passt Ihnen fast genau.' : diff > 0 ? `Eine Standardküche wäre für Sie ${diff} cm zu niedrig – das spüren Sie nach jedem Kochen im Kreuz. Spüle gern noch 5 cm höher, Kochfeld 5 cm tiefer.` : `Eine Standardküche wäre für Sie ${-diff} cm zu hoch. Wir planen sie niedriger – mit passendem Sockel.`;
      sec.querySelector('[data-ah-std]').setAttribute('transform', `translate(0 ${y(86)})`);
      sec.querySelector('[data-ah-cnt]').setAttribute('transform', `translate(0 ${y(ideal)})`);
      sec.querySelector('[data-ah-lab]').textContent = 'Für Sie: ' + ideal + ' cm'; sec.querySelector('[data-ah-body2]').setAttribute('height', ideal * S - 10); sec.querySelector('[data-ah-std] text').setAttribute('y', 86 > ideal ? -8 : 26 + (ideal - 86) * S);
      // Figur: Kopf + Körper proportional zur Größe
      const top = y(K), h = K * S, hx = 120, sh = top + h * .18, hip = top + h * .52, el = y(ideal + 15);
      sec.querySelector('[data-ah-p] circle').setAttribute('cy', top + h * .065); sec.querySelector('[data-ah-p] circle').setAttribute('r', h * .062);
      sec.querySelector('[data-ah-body]').setAttribute('d', `M${hx - h * .11} ${sh} Q${hx} ${sh - h * .03} ${hx + h * .11} ${sh} L${hx + h * .09} ${hip} L${hx + h * .07} 440 L${hx + h * .02} 440 L${hx} ${hip + h * .05} L${hx - h * .02} 440 L${hx - h * .07} 440 L${hx - h * .09} ${hip} Z M${hx + h * .1} ${sh + 6} L${hx + h * .14} ${el} L210 ${el - 4} L210 ${el + 8} L${hx + h * .12} ${el + 10} Z`);
      const wa = sec.querySelector('[data-ah-wa]'); if (wa) wa.href = wa.href.split('?')[0] + '?text=' + encodeURIComponent(`Hallo, ich bin ${K} cm groß – laut Ihrem Rechner wäre ${ideal} cm meine ideale Arbeitshöhe. Können Sie mir dazu eine Küche planen?`);
    }
    r.addEventListener('input', upd); upd();
  });
})();
