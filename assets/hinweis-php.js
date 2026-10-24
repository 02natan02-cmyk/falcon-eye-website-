/* Hinweis zur PHP-Lücke (Oktober 2026) – eigenes Modul, damit es sich später mit einer Zeile entfernen lässt.
   Eingebunden auf index.html und webdesign.html mit:  <script src="assets/hinweis-php.js" defer></script>
   Läuft automatisch ab (ABLAUF). Schließen merkt sich der Browser (localStorage, mit try/catch).
   Fakten: PHP hat am 20.10.2026 zwei kritische Lücken gemeldet (CVE-2026-109618, CVE-2026-109619, CVSS 9,2),
   Patches am 21.10.; Behörden, Kliniken und der Betreiber von Wikipedia nahmen Seiten vorsorglich vom Netz.
   Wichtig: Pflege24-7 und Opieka24-7 laufen auf WordPress (PHP) – daher immer „unsere neuen Seiten“, nie „alle“. */
(() => {
  const ABLAUF = '2026-11-24T23:59:00+01:00';
  const MERKER = 'fe-hinweis-php-2026';
  const TELEFON = '4915156743442';
  if (Date.now() > Date.parse(ABLAUF)) return;
  try { if (localStorage.getItem(MERKER) === 'zu') return; } catch (e) { /* ohne Speicher: Hinweis einfach zeigen */ }
  const held = document.querySelector('main > section');
  if (!held || document.querySelector('.php-alarm')) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const css = `
.php-alarm{position:relative;padding:clamp(28px,4vw,56px) 0;background:var(--steel,#161b21);overflow:hidden}
.php-alarm .wrap{position:relative}
.pa-card{position:relative;border-radius:22px;background:linear-gradient(180deg,#1d242c,#171c22);border:1px solid rgba(255,59,48,.38);box-shadow:0 40px 80px -40px rgba(0,0,0,.85),inset 0 1px 0 rgba(255,255,255,.04);overflow:hidden;isolation:isolate}
.pa-card::before{content:"";position:absolute;inset:0;z-index:-1;background:repeating-linear-gradient(0deg,rgba(255,255,255,.018) 0 1px,transparent 1px 4px);pointer-events:none}
.pa-card::after{content:"";position:absolute;left:0;right:0;top:-30%;height:30%;z-index:-1;background:linear-gradient(180deg,transparent,rgba(255,59,48,.07),transparent);animation:pa-scan 5.5s linear infinite;pointer-events:none}
@keyframes pa-scan{to{transform:translateY(440%)}}
.pa-bar{display:flex;align-items:center;gap:14px;padding:12px 14px 12px clamp(16px,2.4vw,26px);background:linear-gradient(90deg,rgba(255,59,48,.2),rgba(255,59,48,.06) 60%,transparent);border-bottom:1px solid rgba(255,59,48,.28);font:400 13px/1.2 var(--osd,ui-monospace,monospace);letter-spacing:.16em;text-transform:uppercase}
.pa-dot{flex:none;width:10px;height:10px;border-radius:50%;background:var(--rec,#ff3b30);box-shadow:0 0 0 0 rgba(255,59,48,.6);animation:pa-blink 1.1s steps(2) infinite,pa-ring 2.2s ease-out infinite}
@keyframes pa-blink{50%{opacity:.25}}
@keyframes pa-ring{0%{box-shadow:0 0 0 0 rgba(255,59,48,.55)}100%{box-shadow:0 0 0 12px rgba(255,59,48,0)}}
.pa-k{color:#ff8a82;white-space:nowrap}
.pa-cve{flex:1;min-width:0;color:var(--muted,#9aa4ac);font-size:11px;letter-spacing:.12em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pa-x{flex:none;margin-left:auto;display:grid;place-items:center;width:38px;height:38px;border-radius:50%;border:1px solid var(--line,rgba(230,236,236,.14));background:rgba(22,27,33,.6);color:var(--wing,#e6ecec);cursor:pointer;transition:background .2s,border-color .2s,transform .2s}
.pa-x:hover{background:rgba(255,59,48,.18);border-color:rgba(255,59,48,.6);transform:rotate(90deg)}
.pa-x:focus-visible,.pa-go:focus-visible{outline:2px solid var(--signal,#ffd000);outline-offset:3px}
.pa-x svg{width:16px;height:16px}
.pa-body{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:clamp(22px,4vw,56px);align-items:center;padding:clamp(22px,3.2vw,40px) clamp(18px,2.8vw,40px) clamp(24px,3.2vw,40px)}
.php-alarm .pa-h{margin:0 0 14px;font:900 clamp(30px,3.6vw,54px)/.95 var(--display,Impact,sans-serif);text-transform:uppercase;letter-spacing:.004em;color:var(--wing,#e6ecec);text-wrap:balance}
.php-alarm .pa-h em{font-style:normal;color:var(--signal,#ffd000)}
.php-alarm .pa-p{margin:0 0 12px;max-width:34em;font:400 clamp(16px,1.3vw,19px)/1.5 var(--body,system-ui,sans-serif);color:var(--text-2,#c4ccd1)}
.php-alarm .pa-s{margin:0;font:400 13px/1.4 var(--osd,ui-monospace,monospace);letter-spacing:.08em;color:var(--muted,#9aa4ac)}
.php-alarm .pa-s b{font-weight:400;color:var(--ok,#3ddc84)}
.pa-side{display:grid;gap:18px}
.php-alarm .pa-nums{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
.pa-nums li{position:relative;padding:14px 12px 12px;border-radius:14px;background:rgba(22,27,33,.7);border:1px solid var(--line,rgba(230,236,236,.14));text-align:center}
.pa-nums li::after{content:"";position:absolute;left:14px;right:14px;bottom:0;height:2px;border-radius:2px;background:var(--ok,#3ddc84);transform:scaleX(1);transform-origin:0 50%;transition:transform .5s ease}
.php-alarm .pa-n{position:relative;display:block;font:900 clamp(44px,4.4vw,64px)/1 var(--display,Impact,sans-serif);color:var(--wing,#e6ecec);font-variant-numeric:tabular-nums}
.pa-n .pa-roll{position:absolute;inset:0;display:none;color:#ff8a82}
.pa-nums.rolling .pa-real{opacity:0}.pa-nums.rolling .pa-roll{display:block}
.pa-nums.rolling li::after{transform:scaleX(0)}
.php-alarm .pa-l{display:block;margin-top:6px;font:400 11px/1.25 var(--osd,ui-monospace,monospace);letter-spacing:.12em;text-transform:uppercase;color:var(--muted,#9aa4ac)}
.php-alarm .pa-go{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:15px 22px;border-radius:999px;background:var(--signal,#ffd000);color:var(--signal-ink,#1a1500);font:700 16px/1 var(--body,system-ui,sans-serif);text-decoration:none;transition:transform .2s,box-shadow .2s,gap .25s}
.php-alarm .pa-go:hover{transform:translateY(-2px);box-shadow:0 12px 30px -10px rgba(255,208,0,.6);gap:16px}
.php-alarm .pa-go svg{width:18px;height:18px}
.php-alarm.pa-zu{transition:opacity .35s ease,transform .35s ease;opacity:0;transform:translateY(-10px)}
@media (max-width:820px){
  .pa-body{grid-template-columns:minmax(0,1fr)}
  .pa-cve{display:none}
  .pa-k{white-space:normal;letter-spacing:.12em}
  .php-alarm .pa-go{width:100%}
}
@media (max-width:380px){.pa-nums li{padding:12px 6px 10px}.php-alarm .pa-l{font-size:10px;letter-spacing:.06em}}
@media (prefers-reduced-motion:reduce){.pa-card::after,.pa-dot{animation:none}.pa-x:hover{transform:none}}
`;
  const st = document.createElement('style');
  st.dataset.hinweis = 'php';
  st.textContent = css;
  document.head.appendChild(st);

  const wa = 'https://wa.me/' + TELEFON + '?text=' + encodeURIComponent('Hallo Falcon Eye, ist meine Website von der PHP-Lücke betroffen? Meine Adresse: ');
  const el = document.createElement('aside');
  el.className = 'php-alarm';
  el.setAttribute('aria-labelledby', 'pa-h');
  el.innerHTML = `
<div class="wrap"><div class="pa-card">
  <div class="pa-bar"><span class="pa-dot" aria-hidden="true"></span><span class="pa-k">PHP-Lücke diese Woche</span><span class="pa-cve">CVE-2026-109618 · CVE-2026-109619 · CVSS 9,2</span>
    <button class="pa-x" type="button" aria-label="Hinweis zur PHP-Lücke schließen"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>
  <div class="pa-body">
    <div>
      <h2 class="pa-h" id="pa-h">Behörden, Kliniken, sogar Wikipedia gingen vom Netz. <em>Unsere neuen Seiten liefen einfach weiter.</em></h2>
      <p class="pa-p">Sie kommen ganz ohne PHP aus – keine Datenbank, keine Plugins, nichts, wo diese Lücke ansetzen kann.</p>
      <p class="pa-s">PHP ist über 30 Jahre alt. <b>Unsere Technik ist von heute.</b></p>
    </div>
    <div class="pa-side">
      <ul class="pa-nums">
        <li><span class="pa-n"><span class="pa-real">0</span><span class="pa-roll" aria-hidden="true"></span></span><span class="pa-l">Zeilen PHP</span></li>
        <li><span class="pa-n"><span class="pa-real">0</span><span class="pa-roll" aria-hidden="true"></span></span><span class="pa-l">Datenbanken</span></li>
        <li><span class="pa-n"><span class="pa-real">0</span><span class="pa-roll" aria-hidden="true"></span></span><span class="pa-l">Plugins</span></li>
      </ul>
      <a class="pa-go" href="${wa}" target="_blank" rel="noopener">Seite prüfen lassen <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
    </div>
  </div>
</div></div>`;
  held.insertAdjacentElement('afterend', el);

  const nachLayout = () => {
    try { if (window.ScrollTrigger) window.ScrollTrigger.refresh(); } catch (e) { }
    try { if (window.FE && window.FE.lenis && window.FE.lenis.resize) window.FE.lenis.resize(); } catch (e) { }
  };
  if (document.readyState === 'complete') setTimeout(nachLayout, 60);
  else addEventListener('load', () => setTimeout(nachLayout, 60), { once: true });

  el.querySelector('.pa-x').addEventListener('click', () => {
    try { localStorage.setItem(MERKER, 'zu'); } catch (e) { }
    const weiter = el.nextElementSibling;
    el.classList.add('pa-zu');
    setTimeout(() => {
      el.remove(); st.remove(); nachLayout();
      const ziel = weiter && (weiter.querySelector('h2, a, button') || null);
      if (ziel && ziel.focus) { if (!ziel.hasAttribute('tabindex') && ziel.tagName === 'H2') ziel.setAttribute('tabindex', '-1'); ziel.focus({ preventScroll: true }); }
    }, reduce ? 0 : 360);
  });

  // Zahlenleiste: beim ersten Sichtkontakt rollen die Ziffern wild und landen auf 0
  const nums = el.querySelector('.pa-nums');
  if (reduce || !('IntersectionObserver' in window)) return;
  const rolls = [...nums.querySelectorAll('.pa-roll')];
  const io = new IntersectionObserver(es => {
    if (!es.some(e => e.isIntersecting)) return;
    io.disconnect();
    nums.classList.add('rolling');
    const start = performance.now(), dauer = [1500, 1800, 2100], stellen = [5, 2, 3];
    const tick = now => {
      let offen = 0;
      rolls.forEach((r, i) => {
        const t = (now - start) / dauer[i];
        if (t >= 1) { r.textContent = '0'; return; }
        offen++;
        const n = Math.max(1, Math.round(stellen[i] * (1 - t * t)));
        let s = ''; for (let k = 0; k < n; k++) s += (k === 0 ? 1 + Math.random() * 9 : Math.random() * 10) | 0;
        r.textContent = s;
      });
      if (offen) requestAnimationFrame(tick);
      else setTimeout(() => nums.classList.remove('rolling'), 120);
    };
    requestAnimationFrame(tick);
  }, { threshold: .45 });
  io.observe(nums);
})();
