#!/usr/bin/env python3
"""Baut webdesign.html aus dem Gerüst von leistungen.html (Header, Footer, Skripte bleiben identisch)."""
import re, time, html
ROOT = '/home/claude/fe-push/'
V = str(int(time.time()))
src = open(ROOT + 'leistungen.html').read()

TITLE = 'Webdesign – Falcon Eye'
DESC = 'Websites, die man nicht vergisst: animiert, mobil perfekt, mit echten Geschichten und echten Fotos. Kostenloser Entwurf vorab – aus Saarbrücken.'

REFS = [
  # key, Name, Branche/Ort, url, Hook, Tags, eigen?
  ('holding', 'Natan Holding GmbH', 'Holding · Saarbrücken', 'https://natanholding.de', 'Ein 3D-Globus mit 32 Stationen einer Reise – drehbar, mit Fotos, Live-Uhren und drei Sprachen.', ['WebGL-Globus', 'DE · PL · EN', 'Live'], True),
  ('hudalla', 'Hausmeisterservice D. Hudalla', 'Hausmeister · Nieder-Olm', 'entwurf/hudalla/', 'Wohnanlage mit vier Jahreszeiten zum Selbstmähen, Bus-Fahrt durch die Orte und ein Cookie-Banner mit echtem Hund.', ['Mitmach-Spiel', 'Live-Wetter', 'Objekt-Check'], False),
  ('kleber', 'Wäscherei Kleber', 'Wäscherei · Saarbrücken', 'entwurf/waescherei-kleber/', 'Ihr Name auf dem Wäschepaket, eine Heißmangel zum Durchscrollen und ein Wäschezettel statt Kontaktformular.', ['Seit 1971', 'Scroll-Mangel', 'Live-Öffnungszeiten'], False),
  ('pellegrin', 'Pellegrin Küchen', 'Küchenstudio · St. Wendel', 'entwurf/pellegrin/', 'Küche online in 3D zusammenziehen, Raumfoto hochladen – und echte Montagegeschichten mit Vorher/Nachher.', ['3D-Küchenplaner', 'Vorher/Nachher', 'BORA in 3D'], False),
  ('erbelding', 'Küchenstudio Erbelding', 'Küchenstudio · Kirkel-Limbach', 'entwurf/erbelding/', 'Zehn Jahre Zeitreise aus echten Posts, ein zerlegter BORA-Abzug und ein Rundgang durch die Ausstellung.', ['Zeitreise', 'Rundgang', 'Planer'], False),
  ('zh', 'Z&H Aufbereitung', 'Fahrzeugaufbereitung', 'entwurf/zh-aufbereitung/', 'FPV-Flug am Kirchturm vorbei auf den Hof – und eine Versiegelung, die man mit dem Finger wegwischt.', ['FPV-Hero', 'Wisch-Effekt', 'Simulator'], False),
  ('verena', 'Praxis Verena Paul', 'Naturheilpraxis · Marpingen', 'entwurf/verena-paul/', 'Ein Lebensbaum, der beim Scrollen wächst, eigene Musik und eine Atemübung mit blühender Blume.', ['Eigene Musik', 'Atemübung', 'Lebensbaum'], False),
  ('kowollik', 'Karosserie Kowollik', 'Karosserie & Lack', 'entwurf/kowollik/', 'Unfall-Checkliste fürs Handy, Werkstatt-Rundflug und QR-Codes direkt zum Ansprechpartner.', ['Unfall-Hilfe', 'Rundflug', 'QR'], False),
  ('natan', 'Natan Küchenmontage', 'Küchenmontage · Saarland', 'https://natan.saarland', 'Premium-Montagen mit Logbuch: jede Küche eine Geschichte – vom Aufmaß bis zur letzten Fuge.', ['Logbuch', 'Montage', 'Eigenes Projekt'], True),
]

def card(i, r):
    k, n, b, u, hook, tags, own = r
    ext = u.startswith('http')
    tgt = ' target="_blank" rel="noopener"' if ext else ''
    host = u.replace('https://', '') if ext else 'falcon-eye.de/' + u
    tg = ''.join(f'<li>{html.escape(t)}</li>' for t in tags)
    badge = '<span class="wd-badge live">Live</span>' if own else '<span class="wd-badge">Entwurf</span>'
    return f'''<li class="wd-ref" style="--i:{i}">
  <a class="wd-dev" href="{u}"{tgt} aria-label="{html.escape(n)} ansehen">
    <span class="wd-lap"><span class="wd-bar"><i></i><i></i><i></i><em>{html.escape(host)}</em></span><img src="media/wd/{k}_d.webp?v={V}" alt="Startseite {html.escape(n)} am Laptop" loading="{'eager' if i < 2 else 'lazy'}" decoding="async" width="1440" height="900"></span>
    <span class="wd-phone"><img src="media/wd/{k}_m.webp?v={V}" alt="Startseite {html.escape(n)} am Handy" loading="{'eager' if i < 2 else 'lazy'}" decoding="async" width="390" height="844"></span>
  </a>
  <div class="wd-txt">
    <p class="wd-k">{badge}{html.escape(b)}</p>
    <h3>{html.escape(n)}</h3>
    <p>{html.escape(hook)}</p>
    <ul class="wd-tags">{tg}</ul>
    <a class="wd-go" href="{u}"{tgt}>Seite öffnen <span aria-hidden="true">→</span></a>
  </div>
</li>'''

refs = ''.join(card(i, r) for i, r in enumerate(REFS))

MAIN = f'''<main id="main">
<section class="wd-hero">
  <div class="wd-grid" aria-hidden="true"></div>
  <div class="wrap">
    <p class="wd-kick"><span class="rec"></span> REC · WEBDESIGN</p>
    <h1>Websites, die man <em>nicht wegscrollt.</em></h1>
    <p class="lede">Wir bauen Seiten wie wir Filme drehen: mit einer Geschichte, echten Bildern und einem Moment, über den man redet. Animiert, auf dem Handy perfekt – und für jeden Betrieb komplett eigen.</p>
    <div class="ctas"><a class="btn" href="#entwurf">Kostenlosen Entwurf anfragen</a><a class="btn ghost" href="#referenzen">Referenzen ansehen</a></div>
    <ul class="wd-stats">
      <li><b data-wdc="9">9</b><span>Seiten in Arbeit &amp; live</span></li>
      <li><b>0&nbsp;€</b><span>für den ersten Entwurf</span></li>
      <li><b>100&nbsp;%</b><span>eigener Code, kein Baukasten</span></li>
    </ul>
  </div>
  <div class="wd-stack" aria-hidden="true">
    <img src="media/wd/holding_m.webp?v={V}" alt="" style="--r:-8deg;--x:-58%;--y:4%">
    <img src="media/wd/hudalla_m.webp?v={V}" alt="" style="--r:0deg;--x:-50%;--y:-4%">
    <img src="media/wd/kleber_m.webp?v={V}" alt="" style="--r:8deg;--x:-42%;--y:4%">
  </div>
</section>

<section class="wd-refs" id="referenzen" aria-labelledby="wd-r-h">
  <div class="wrap">
    <p class="wd-kick">Referenzen</p>
    <h2 id="wd-r-h">Keine Vorlage. <em>Jede Seite ein Unikat.</em></h2>
    <p class="lede">Ein Hausmeister bekommt keine Küchenseite und eine Wäscherei keinen Hausmeister-Baukasten. Wir hören zu, lesen jede alte Seite und jede Bewertung – und bauen dann genau eine Seite: Ihre.</p>
    <ul class="wd-list">{refs}</ul>
  </div>
</section>

<section class="wd-how" aria-labelledby="wd-h-h">
  <div class="wrap">
    <p class="wd-kick">So läuft’s</p>
    <h2 id="wd-h-h">Erst sehen. <em>Dann entscheiden.</em></h2>
    <ol class="wd-steps">
      <li><b>01</b><h3>Kennenlernen</h3><p>Kaffee, Telefon oder WhatsApp: Was macht Ihren Betrieb aus? Wir schauen uns Ihre alte Seite, Ihre Bewertungen und Ihre Fotos an.</p></li>
      <li><b>02</b><h3>Kostenloser Entwurf</h3><p>Sie bekommen einen echten, klickbaren Entwurf – auf dem Handy und am Rechner. Ohne Vertrag, ohne Risiko.</p></li>
      <li><b>03</b><h3>Feinschliff</h3><p>Ihre Wünsche, Ihre Fotos, Ihre Texte. Auf Wunsch drehen wir mit der FPV-Drohne die Bilder gleich selbst.</p></li>
      <li><b>04</b><h3>Live &amp; betreut</h3><p>Domain, Impressum, Datenschutz, Formulare – wir schalten alles live und kümmern uns danach weiter.</p></li>
    </ol>
  </div>
</section>

<section class="wd-inc" aria-labelledby="wd-i-h">
  <div class="wrap">
    <h2 id="wd-i-h">Immer <em>mit drin.</em></h2>
    <ul class="wd-chk">
      <li>Mobil perfekt – getestet auf iPhone, Android, Tablet</li><li>Animationen, die zu Ihrem Betrieb passen</li><li>Kontaktformular, WhatsApp, Anruf mit einem Tipp</li>
      <li>Google-Bewertungen und Karte eingebunden</li><li>Impressum &amp; Datenschutz sauber aufgesetzt</li><li>Schnell geladen, ohne Tracking-Ballast</li>
      <li>Eigene Domain &amp; E-Mail-Weiterleitung</li><li>FPV-Drohnenvideo auf Wunsch</li><li>Ansprechpartner aus Saarbrücken</li>
    </ul>
  </div>
</section>

<section class="band" id="entwurf">
  <div class="wrap">
    <h2>Wie soll Ihre <em>Seite aussehen?</em></h2>
    <p class="lede">Schicken Sie uns einfach Ihren Betrieb – Name, Ort, alte Website oder Instagram. In wenigen Tagen sehen Sie Ihren Entwurf.</p>
    <div class="ctas"><a class="btn" href="https://wa.me/4915156743442?text=Hallo%20Falcon%20Eye%2C%20ich%20h%C3%A4tte%20gern%20einen%20kostenlosen%20Website-Entwurf%20f%C3%BCr%20meinen%20Betrieb%3A%20" target="_blank" rel="noopener">Per WhatsApp anfragen</a><a class="btn ghost" href="mailto:info@falcon-eye.de?subject=Kostenloser%20Website-Entwurf">E-Mail schreiben</a><a class="btn ghost" href="tel:+4915156743442">0151 56743442</a></div>
  </div>
</section>
</main>'''

CSS = '''<style>
.p-webdesign main{background:var(--steel)}
.wd-kick{font:400 14px/1 var(--osd);letter-spacing:.2em;text-transform:uppercase;color:var(--signal);display:flex;align-items:center;gap:10px;margin:0 0 18px}
.wd-kick .rec{width:10px;height:10px;border-radius:50%;background:var(--rec);animation:wdrec 1.2s steps(2) infinite}
@keyframes wdrec{50%{opacity:.15}}
.p-webdesign h1,.p-webdesign h2{font:900 clamp(48px,8.4vw,128px)/.88 var(--display);text-transform:uppercase;margin:0 0 24px;letter-spacing:-.005em}
.p-webdesign h2{font-size:clamp(42px,6.4vw,96px)}
.p-webdesign h1 em,.p-webdesign h2 em{font-style:normal;color:var(--signal)}
.wd-hero{position:relative;min-height:100svh;display:flex;align-items:center;padding:calc(110px + var(--safe-top)) 0 80px;overflow:hidden}
.wd-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,208,0,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,208,0,.06) 1px,transparent 1px);background-size:64px 64px;mask:radial-gradient(70% 70% at 70% 50%,#000,transparent);-webkit-mask:radial-gradient(70% 70% at 70% 50%,#000,transparent)}
.wd-hero .wrap{position:relative;z-index:2;width:100%}
.wd-hero .lede{max-width:30em}
.wd-hero h1,.wd-hero .lede,.wd-hero .ctas,.wd-stats{max-width:min(720px,58%)}
.wd-stats{list-style:none;display:flex;flex-wrap:wrap;gap:28px;padding:0;margin:44px 0 0}
.wd-stats b{display:block;font:900 52px/1 var(--display);color:var(--wing)}
.wd-stats span{font:400 12px var(--osd);letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.wd-stack{position:absolute;right:max(var(--gutter),calc((100vw - var(--max))/2 + var(--gutter)));top:50%;width:min(38vw,520px);height:min(78vh,640px);transform:translateY(-46%);z-index:1}
.wd-stack img{position:absolute;left:50%;top:50%;width:46%;border-radius:28px;border:6px solid #0b0e12;box-shadow:0 40px 80px -30px rgba(0,0,0,.8);transform:translate(var(--x),calc(-50% + var(--y))) rotate(var(--r));animation:wdfl 7s ease-in-out infinite alternate}
.wd-stack img:nth-child(1){animation-delay:-2s;left:30%}.wd-stack img:nth-child(3){animation-delay:-4s;left:70%}.wd-stack img:nth-child(2){z-index:2;width:50%}
@keyframes wdfl{to{transform:translate(var(--x),calc(-50% + var(--y) - 14px)) rotate(calc(var(--r) * .6))}}
@media (max-width:900px){.wd-hero h1,.wd-hero .lede,.wd-hero .ctas,.wd-stats{max-width:none}.wd-stack{position:relative;right:auto;top:auto;transform:none;width:100%;height:420px;margin-top:40px}.wd-hero{display:block;min-height:0}}
.wd-refs{padding:clamp(80px,10vw,150px) 0}
.wd-list{list-style:none;padding:0;margin:clamp(40px,6vw,80px) 0 0;display:grid;gap:clamp(70px,9vw,130px)}
.wd-ref{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,1fr);gap:clamp(28px,5vw,80px);align-items:center}
.wd-ref:nth-child(even) .wd-dev{order:2}
.wd-dev{position:relative;display:block;padding:0 7% 7% 0;text-decoration:none;color:inherit}
.wd-lap{display:block;border-radius:14px;overflow:hidden;background:#0b0e12;border:1px solid var(--line);box-shadow:0 50px 90px -40px rgba(0,0,0,.9);transition:transform .6s cubic-bezier(.2,.7,.1,1)}
.wd-bar{display:flex;align-items:center;gap:6px;padding:9px 12px;background:#0f1318;border-bottom:1px solid var(--line)}
.wd-bar i{width:9px;height:9px;border-radius:50%;background:#2a3038}.wd-bar i:first-child{background:#ff5f57}.wd-bar i:nth-child(2){background:#febc2e}.wd-bar i:nth-child(3){background:#28c840}
.wd-bar em{flex:1;margin-left:10px;font:400 12px var(--osd);font-style:normal;color:var(--muted);background:#161b21;border-radius:6px;padding:4px 10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.wd-lap img{display:block;width:100%;height:auto}
.wd-phone{position:absolute;right:0;bottom:0;width:24%;border-radius:22px;overflow:hidden;border:5px solid #0b0e12;background:#0b0e12;box-shadow:0 30px 60px -20px rgba(0,0,0,.9);transition:transform .6s cubic-bezier(.2,.7,.1,1)}
.wd-phone img{display:block;width:100%;height:auto}
.wd-dev:hover .wd-lap{transform:translateY(-6px)}.wd-dev:hover .wd-phone{transform:translateY(-14px) rotate(-2deg)}
.wd-k{display:flex;align-items:center;gap:10px;font:400 13px var(--osd);letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin:0 0 10px}
.wd-badge{padding:4px 9px;border-radius:999px;border:1px solid var(--line);color:var(--wing)}
.wd-badge.live{background:var(--ok);border-color:var(--ok);color:#03210f}
.wd-txt h3{font:900 clamp(34px,4vw,58px)/.92 var(--display);text-transform:uppercase;margin:0 0 14px}
.wd-txt>p:not(.wd-k){color:var(--text-2);font-size:clamp(16px,1.3vw,19px);margin:0 0 18px;max-width:30em}
.wd-tags{list-style:none;display:flex;flex-wrap:wrap;gap:8px;padding:0;margin:0 0 22px}
.wd-tags li{padding:7px 12px;border-radius:999px;background:var(--plate);font:400 13px var(--osd);color:var(--wing)}
.wd-go{display:inline-flex;gap:10px;align-items:center;font:700 17px var(--body);color:var(--signal);text-decoration:none;border-bottom:2px solid rgba(255,208,0,.35);padding-bottom:4px;transition:gap .3s}
.wd-go:hover{gap:16px;border-color:var(--signal)}
.wd-ref{opacity:0;transform:translateY(60px);transition:opacity .9s,transform .9s cubic-bezier(.2,.7,.1,1)}.wd-ref.in{opacity:1;transform:none}
@media (max-width:900px){.wd-ref{grid-template-columns:1fr}.wd-ref:nth-child(even) .wd-dev{order:0}}
.wd-how{padding:clamp(80px,10vw,140px) 0;background:var(--plate)}
.wd-steps{list-style:none;padding:0;margin:40px 0 0;display:grid;grid-template-columns:repeat(4,1fr);gap:18px;counter-reset:s}
.wd-steps li{padding:26px;border-radius:22px;background:var(--steel);border:1px solid var(--line)}
.wd-steps b{font:900 54px/1 var(--display);color:var(--signal)}
.wd-steps h3{font:800 22px var(--body);margin:12px 0 8px}.wd-steps p{margin:0;color:var(--text-2)}
@media (max-width:1000px){.wd-steps{grid-template-columns:1fr 1fr}}@media (max-width:600px){.wd-steps{grid-template-columns:1fr}}
.wd-inc{padding:clamp(80px,10vw,140px) 0}
.wd-chk{list-style:none;padding:0;margin:20px 0 0;display:grid;grid-template-columns:repeat(3,1fr);gap:12px 28px}
.wd-chk li{padding:14px 0 14px 34px;border-bottom:1px solid var(--line);position:relative;font-size:17px}
.wd-chk li::before{content:"";position:absolute;left:0;top:18px;width:18px;height:10px;border-left:3px solid var(--signal);border-bottom:3px solid var(--signal);transform:rotate(-45deg)}
@media (max-width:900px){.wd-chk{grid-template-columns:1fr}}
</style>
<script>
(function(){var els=document.querySelectorAll('.wd-ref');if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -12% 0px'});els.forEach(function(e){io.observe(e)})})();
</script>'''

s = src
s = re.sub(r'<title>.*?</title>', f'<title>{TITLE}</title>', s)
s = re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{DESC}">\n<meta name="robots" content="noindex">', s)
s = re.sub(r'<meta property="og:title" content="[^"]*">', f'<meta property="og:title" content="{TITLE}">', s)
s = re.sub(r'<meta property="og:description" content="[^"]*">', f'<meta property="og:description" content="{DESC}">', s)
s = s.replace('https://falcon-eye.de/leistungen.html', 'https://falcon-eye.de/webdesign.html')
s = s.replace('<body class="p-leistungen">', '<body class="p-webdesign">')
s = s.replace(' aria-current=page', '')
a = s.index('<main id="main">'); b = s.index('</main>') + len('</main>')
s = s[:a] + MAIN + s[b:]
# Lightbox (nur für Videos auf Leistungen) entfernen
s = re.sub(r'<div class="lb" id="lb".*?</div>\n</div>\n', '', s, flags=re.S)
d0 = s.index('<div class="dock"'); d1 = s.index('</div>', d0)
dock = s[d0:d1].replace('<a class="btn" href="kontakt.html">Dreh anfragen</a>', '<a class="btn" href="#entwurf">Entwurf anfragen</a>').replace('wir%20m%C3%B6chten%20einen%20Dreh%20anfragen.', 'ich%20h%C3%A4tte%20gern%20einen%20kostenlosen%20Website-Entwurf.')
s = s[:d0] + dock + s[d1:]
s = s.replace('</body>', CSS + '\n</body>')
open(ROOT + 'webdesign.html', 'w').write(s)
print('ok', len(s))
