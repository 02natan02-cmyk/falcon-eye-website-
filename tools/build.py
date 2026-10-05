#!/usr/bin/env python3
"""Builds the multi-page Falcon Eye site into site2/ (real site) and a stripped home for the artifact preview."""
import re, os, html
OUT = './build/'
PHONE_HUMAN = '0151 56743442'
WA = 'https://wa.me/4915156743442?text=' + 'Hallo%20Falcon%20Eye%2C%20wir%20m%C3%B6chten%20einen%20Dreh%20anfragen.'
NAV = [('./', 'Start', 'index'), ('projekte.html', 'Projekte', 'projekte'), ('leistungen.html', 'Leistungen', 'leistungen'),
       ('ueber-uns.html', 'Über uns', 'ueber-uns'), ('flight-club.html', 'Flight Club', 'flight-club'), ('kontakt.html', 'Kontakt', 'kontakt')]
WA_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.4-.3Z"/></svg>'

def head(title, desc, page):
    return f'''<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{title}</title>
<meta name="description" content="{html.escape(desc)}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{html.escape(desc)}">
<meta property="og:image" content="media/hero.jpg">
<meta name="theme-color" content="#161b21">
<link rel="icon" href="media/bird.png">
<link rel="preload" href="fonts/big-shoulders-display-latin-900-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="assets/site.css">
</head>
<body class="p-{page}">
<a class="skip" href="#main">Zum Inhalt springen</a>
'''

def header(active):
    links = ''.join(f'<a href="{h}"{" aria-current=page" if k == active else ""}>{t}</a>' for h, t, k in NAV[1:])
    mlinks = ''.join(f'<a href="{h}"{" aria-current=page" if k == active else ""}>{t}</a>' for h, t, k in NAV)
    return f'''<header class="top{" inhero" if active == "index" else ""}">
  <a class="brand" href="./" aria-label="Falcon Eye – zur Startseite"><span class="bird"><img src="media/bird.png" alt="" width="934" height="207"></span><img class="word" src="media/wordmark.png" alt="Falcon Eye" width="956" height="175"></a>
  <nav aria-label="Hauptmenü">{links}<a class="btn sm" href="kontakt.html">Dreh anfragen</a></nav>
  <button class="burger" aria-label="Menü öffnen" aria-expanded="false" aria-controls="mmenu"><i></i><i></i><i></i></button>
</header>
<div class="mmenu" id="mmenu" aria-hidden="true">
  {mlinks}
  <div class="row"><a class="btn" href="kontakt.html">Dreh anfragen</a><a class="btn wa" href="{WA}" target="_blank" rel="noopener">{WA_ICON}WhatsApp</a></div>
</div>
<div class="dock" aria-label="Schnell buchen">
  <a class="btn" href="kontakt.html">Dreh anfragen</a>
  <a class="btn wa" href="{WA}" target="_blank" rel="noopener">{WA_ICON}WhatsApp</a>
</div>
'''

LIGHTBOX = '''<div class="lb" id="lb" hidden role="dialog" aria-modal="true" aria-label="Video">
  <button class="x">Schließen</button>
  <div><video controls playsinline loop></video>
  <div class="meta"><b></b><a class="btn" href="kontakt.html">Ähnlichen Dreh anfragen</a></div></div>
</div>
'''

def footer():
    return LIGHTBOX + f'''<footer>
  <div class="wrap">
    <div class="grid">
      <div><img src="media/logo.png" alt="Falcon Eye" width="2000" height="249"><p>FPV-Drohnenfilme aus Saarbrücken – für Firmen, Events, Sport und alle, die gesehen werden wollen.</p>
        <p><a class="btn sm" href="kontakt.html">Dreh anfragen</a></p></div>
      <div><h4>Seiten</h4><ul><li><a href="projekte.html">Projekte</a></li><li><a href="leistungen.html">Leistungen</a></li><li><a href="ueber-uns.html">Über uns &amp; Hangar</a></li><li><a href="flight-club.html">Partner: Flight Club Saar</a></li><li><a href="kontakt.html">Kontakt</a></li></ul></div>
      <div><h4>Kontakt</h4><ul><li><a href="{WA}" target="_blank" rel="noopener">WhatsApp</a></li><li>Telefon {PHONE_HUMAN}</li><li>info@falcon-eye.de</li><li>Römerstr. 25<br>66125 Saarbrücken</li></ul></div>
      <div><h4>Folgt uns</h4><ul><li><a href="https://www.instagram.com/falconeyesaar" target="_blank" rel="noopener">Instagram @falconeyesaar</a></li><li><a href="https://www.youtube.com/channel/UCSpNx9Xw74DpDg3IRXK67fw" target="_blank" rel="noopener">YouTube</a></li><li><a href="https://www.facebook.com/profile.php?id=61559258413801" target="_blank" rel="noopener">Facebook</a></li><li><a href="https://www.youtube.com/@Booyaka/videos" target="_blank" rel="noopener">YouTube: Kinofilme</a></li><li><a href="https://www.instagram.com/flightclubsaar" target="_blank" rel="noopener">Instagram @flightclubsaar</a></li><li><a href="https://flightclub-saar.de/" target="_blank" rel="noopener">flightclub-saar.de</a></li></ul></div>
    </div>
    <div class="legalrow"><span>© <span data-year>2026</span> Falcon Eye, Natan Wojtasczyk</span><span><a href="impressum.html">Impressum</a> &nbsp; <a href="datenschutz.html">Datenschutz</a></span></div>
  </div>
</footer>
'''

def scripts(extra=''):
    return f'''<script src="js/gsap.min.js"></script>
<script src="js/ScrollTrigger.min.js"></script>
<script src="js/lenis.min.js"></script>
<script src="assets/site.js"></script>
{extra}</body>
</html>
'''

def band(title, text, quick=True):
    q = ''
    if quick:
        q = '<div class="quick">' + ''.join(f'<a href="kontakt.html#{k}">{t}</a>' for k, t in [('event', 'Event / Firmenfeier'), ('imagefilm', 'Imagefilm'), ('social', 'Social-Media-Clips'), ('sport', 'Sport &amp; Stadion'), ('hochzeit', 'Hochzeit'), ('immobilie', 'Immobilie / Gewerbe')]) + '</div>'
    return f'''<section class="band" aria-label="Anfrage starten">
  <div class="wrap">
    <div><h2>{title}</h2><p>{text}</p>{q}</div>
    <div class="ctas"><a class="btn dark" href="kontakt.html">Dreh anfragen</a><a class="btn ghost" href="{WA}" target="_blank" rel="noopener">WhatsApp schreiben</a></div>
  </div>
</section>
'''

def clip(key, title, sub, cls='', anlass='event', poster=None):
    return f'''<figure class="clip {cls}"><video muted loop playsinline preload="none" poster="media/{poster or key}.jpg" src="media/{key}.mp4"></video><span class="tc">00:00:00</span><span class="hint">&#9664; ziehen &#9654;</span><i class="bar"></i><figcaption class="cap"><b>{title}</b><small>{sub}</small></figcaption><button class="open" data-lb="media/{key}.mp4" data-title="{title}" data-anlass="{anlass}" aria-label="{title} im Vollbild ansehen"></button></figure>'''

def phero(video, h1, lede, ctas=True, poster=None):
    c = f'<div class="ctas"><a class="btn" href="kontakt.html">Dreh anfragen</a><a class="btn ghost" href="{WA}" target="_blank" rel="noopener">WhatsApp</a></div>' if ctas else ''
    return f'''<section class="phero">
  <video data-auto muted loop playsinline preload="none" poster="media/{poster or video}.jpg" src="media/{video}.mp4" aria-hidden="true"></video>
  <div class="wrap"><h1>{h1}</h1><p class="lede">{lede}</p>{c}</div>
</section>
'''


SAFETY = '''<div class="safe">
  <div class="reveal"><h3>Versichert</h3><p>Jeder gewerbliche Flug ist über unsere Drohnen-Haftpflicht abgesichert.</p></div>
  <div class="reveal"><h3>Registriert und geprüft</h3><p>Registrierter Betreiber beim Luftfahrt-Bundesamt, Piloten mit EU-Kompetenznachweis.</p></div>
  <div class="reveal"><h3>Spotter bei jedem FPV-Flug</h3><p>Einer fliegt mit Brille, einer behält die Drohne und die Menschen im Blick.</p></div>
  <div class="reveal"><h3>Genehmigungen geklärt</h3><p>Wo nötig, holen wir Erlaubnisse von Behörden und Eigentümern vor dem Drehtag ein.</p></div>
  <div class="reveal"><h3>Leichte Drohnen nah an Menschen</h3><p>Indoor und im Publikum fliegen wir kleine Cinewhoops mit Propellerschutz.</p></div>
  <div class="reveal"><h3>Nutzungsrechte klar geregelt</h3><p>Ihr bekommt die Rechte für Website, Social Media und Werbung – schriftlich im Vertrag.</p></div>
</div>'''

STEPS = '''<ol class="steps">
  <li class="reveal"><h3>Anfrage</h3><p>Ihr sagt uns, was, wo und wann. Per Formular, Anruf oder WhatsApp.</p></li>
  <li class="reveal"><h3>Angebot</h3><p>Ihr bekommt einen Festpreis und eine Idee für den Flug.</p></li>
  <li class="reveal"><h3>Flugplan</h3><p>Route, Drohne, Shots und Genehmigungen planen wir vor dem Termin.</p></li>
  <li class="reveal"><h3>Drehtag</h3><p>Pilot, Spotter, Ersatzakkus. Ihr müsst nur da sein.</p></li>
  <li class="reveal"><h3>Lieferung</h3><p>Geschnitten für euren Kanal: quer, hochkant, mit Musik und Farbe.</p></li>
</ol>'''

def write(name, s):
    open(OUT + name, 'w').write(s)


KINO_OLD = [('p9bCAF_xBAE', 'Trollstigen, Norwegen', 'Serpentinen und Wasserfälle'), ('IWh6n2F3AAU', 'Pyrenäen Offroad', 'Yamaha, Honda und Ducati'),
        ('hSStODGSEQY', 'Windräder Tanz', 'Longrange in einem Take'), ('a8_Q94-Q-nY', 'Motocross Nassweiler 2024', 'Saisonstart in 4K'),
        ('inhbzcjcNnA', 'Catch me if you can', 'Verfolgungsjagd in Saarlouis'), ('zM0jxz7P4M4', 'Kho Phi Phi, Thailand', 'Inseln aus der Luft'),
        ('BlDrnifhgco', 'FPV Fire', 'Feuer und Funken'), ('9ovWdsLJET0', 'FPV Club Saar', 'Keiner fliegt höher')]
_old_cards = ''.join(f'<a class="kino-card" href="https://www.youtube.com/watch?v={i}" target="_blank" rel="noopener"><img src="media/yt_{i}.jpg" alt="" loading="lazy"><span class="play" aria-hidden="true"></span><b>{t}</b><small>{d}</small></a>' for i, t, d in KINO_OLD)
FILMS = [('pyrenaeen', 'Pyrenäen Offroad', 'Enduro-Tour durch Spanien und Frankreich'), ('longrange', 'Longrange', 'Berge, Fjorde und Sonnenuntergang'),
  ('goettelborn', 'Förderturm Göttelborn', 'One-Take durch die Industriekultur'), ('immobilien', 'Immobilien', 'Durchflug für Exposé und Vermarktung'),
  ('nassweiler', 'Motocross Nassweiler', 'Saisonstart 2024 mit dem Flight Club'), ('fire', 'FPV Fire', 'Am Windrad entlang in die Wolken'),
  ('hochwasser', 'Hochwasser Saarbrücken', 'Für Fridays for Future'), ('graffiti', 'Graffiti-Workshop', 'Teamevent bei Triple A Trainer'),
  ('lostplaces', 'Lost Places', 'Hallen, Ruinen und Felsen'), ('feuerwerk', 'Feuerwerk', 'Mitten durch die Raketen'),
  ('halong', 'Ha Long Bay, Vietnam', 'Zwischen den Kalkfelsen'), ('strand', 'Strand-Enduro', 'Tief über dem Sand')]
kino_cards = ''.join(f'<button class="kino-card" type="button" data-lb="media/film_{k}.mp4" data-title="{t}"><img src="media/film_{k}.jpg" alt="" loading="lazy"><span class="play" aria-hidden="true"></span><b>{t}</b><small>{d}</small></button>' for k, t, d in FILMS)
KINO_SEC = f'''<section class="block kino" aria-labelledby="kino-h">
  <div class="wrap">
    <div class="head-row"><div><p class="kicker">Mit Ton</p><h2 class="h2 reveal" id="kino-h">Mehr Kino</h2><p class="intro reveal">Unsere Filme in voller Länge – direkt hier abspielen. Lautsprecher an.</p></div></div>
    <div class="kino-grid">{kino_cards}</div>
  </div>
</section>
'''
WORLD = [('halong', 'halong', 'Vietnam', 'Ha Long Bay'), ('trollstigen', 'r_trollstigen', 'Norwegen', 'Trollstigen'),
  ('mongolei', 'r_mongolei', 'Mongolei', 'Wildpferde und Enduro'), ('gobi', 'r_gobi', 'Mongolei', 'Wüste Gobi'),
  ('wasserfall', 'r_wasserfall', 'Norwegen', 'Wasserfall-Dive'), ('vietnam', 'r_vietnam', 'Vietnam', 'Resort-Auftrag'),
  ('norway', 'r_norway', 'Norwegen', 'Fjell und Gischt'), ('phiphi', 'phiphi', 'Thailand', 'Kho Phi Phi')]
world_tiles = ''.join(f'<button class="wtile{"" if l.startswith("r_") else " wide"}" type="button" data-lb="media/film_{f}.mp4" data-title="{c} – {t}" data-tall="{1 if l.startswith("r_") else 0}"><video data-auto muted loop playsinline preload="none" poster="media/{l}.jpg" src="media/{l}.mp4" aria-hidden="true"></video><span class="loc">{c}</span><b>{t}</b><span class="play" aria-hidden="true"></span></button>' for f, l, c, t in WORLD)
WORLD_SEC = f'''<section class="block world" aria-labelledby="world-h">
  <div class="wrap">
    <div class="head-row"><div><p class="kicker">Auch weltweit</p><h2 class="h2 reveal" id="world-h">Weltweit geflogen.</h2><p class="intro reveal">Schon in über 20 Ländern geflogen – Norwegen, Mongolei, Vietnam, Thailand, Pyrenäen und mehr. Aufträge und Touren rund um die Welt. Antippen für den ganzen Film.</p></div><a class="btn" href="kontakt.html">Dreh anfragen – auch im Ausland</a></div>
  </div>
  <div class="wrow" tabindex="0" aria-label="Filme aus aller Welt, seitlich wischen">{world_tiles}</div>
</section>
'''


# ====================================================================== HOME
MISSIONS = [
  ('Ludwigspark', 'stadion2', 'Saarbrücken / Tribüne bis Mittelkreis', 'Durch die Tribüne, zwischen den Zuschauern durch und runter auf den Rasen – in einem Flug.', 'ludwigspark', 'sport'),
  ('Polizeipräsidium', 'revier', 'Filmdreh / Tiefgarage', 'Ein Take von der Einfahrt bis zu den Darstellern, zwischen Streifenwagen hindurch.', 'polizei', 'imagefilm'),
  ('Möbel Martin', 'nacht', 'Promi-Dinner / Nacht', 'Vom leuchtenden Schriftzug bis an die Tische: das Dinner von außen und mittendrin.', 'moebel-martin', 'event'),
  ('Weinloft 23', 'gastro', 'Gastro / Indoor', 'Durch Bar, Gewölbe und Weinregale – der Laden, bevor der erste Gast kommt.', 'weinloft', 'imagefilm'),
  ('Z &amp; H Aufbereitung', 'zh_fpv', 'Kirkel / Imagefilm', 'Fahrzeugaufbereitung im Imagefilm: Vorher, Nachher, durchs Fenster und von oben über den Betrieb.', 'zh-aufbereitung', 'imagefilm'),
  ('Partyboot', 'boot', 'Saar / Electronic Cruise', 'Über Deck, durch die Menge, vorbei am DJ-Pult.', 'partyboot', 'event'),
  ('Förderturm', 'gang', 'Göttelborn / One-Take', 'Ein Take durch den Förderturm: Gänge, Stahl und Treppen – Industriekultur aus Pilotensicht.', 'goettelborn', 'event'),
  ('Hochwasser', 'hochwasser', 'Saarbrücken / Fridays for Future', 'Tief über der überfluteten Saar, zwischen den Bäumen hindurch – Aufnahmen, die Fridays for Future gekauft hat.', 'hochwasser', 'social'),
  ('Triple A', 'mallen', 'Teamevent / Graffiti', 'Vom Dach durch den Hof bis zur Wand, die das Team gerade bemalt.', 'triple-a', 'event'),
]
mlist = ''.join(f'<li><button role="tab" aria-selected="false" data-src="media/{v}.mp4" data-poster="media/{v}.jpg" data-meta="{m}" data-text="{t}" data-link="projekte.html#{l}" data-anlass="{a}"><span class="no">{i+1:02d}</span><span class="nm">{n}</span><small>{m}</small><i class="pl" aria-hidden="true"></i></button></li>' for i, (n, v, m, t, l, a) in enumerate(MISSIONS))

REELS = [('r_atd', 'Addicted to Dance', 'Über der Tanzfläche – drei Jahre in Folge dabei.'), ('r_revier', 'Polizeipräsidium', 'Ein Take durch die Tiefgarage.'),
         ('r_hochzeit', 'Hochzeit', 'Vom Schlosshof bis zum ersten Tanz.'), ('r_stadion2', 'Ludwigspark', 'Durch die Tribüne bis aufs Feld.'),
         ('r_kalinski', 'Kalinski Brüder', 'Event am Silo in Saarbrücken.'), ('r_mmlogo', 'Möbel Martin', 'Logo bei Nacht – gebaut für die Story.'),
         ('r_atd2', 'Addicted to Dance', 'Mittendrin in der Show.'), ('r_wohnmobil', 'Z &amp; H Aufbereitung', 'Durchs Fenster ins Wohnmobil.'),
         ('r_wasserfall', 'Norwegen', 'Senkrecht den Wasserfall hinunter.'), ('r_gobi', 'Wüste Gobi', 'Enduro über die Dünen.')]
reel_items = ''.join(f'<div class="item"><video muted loop playsinline preload="none" poster="media/{k}.jpg" src="media/{k}.mp4"></video><p class="cap"><b>@falconeyesaar</b>{t}: {c}</p></div>' for k, t, c in REELS)
reel_dots = ''.join('<i></i>' for _ in REELS)

SVC_HOME = [('events', 'events', 'Events &amp; Firmenfeiern', 'Mitten durch Bühne, Tanzfläche und Publikum.'), ('imagefilm', 'rolltreppe', 'Imagefilme', 'Euer Unternehmen in einem einzigen Flug.'),
            ('social', 'zh_detail', 'Social-Media-Clips', 'Hochkant, mit Hook in der ersten Sekunde.'), ('sport', 'tafel', 'Sport &amp; Stadion', 'Tempo, das kein Kameramann hinterherkommt.'),
            ('gastro', 'gastro', 'Gastro &amp; Hotels', 'Euer Laden, bevor der Gast da ist.'), ('immobilie', 'img:hoermann_DJI_0726', 'Immobilien &amp; Gewerbe', 'Luftbilder, Durchflüge und Dachaufnahmen.')]
svc_cards = ''.join(f'<a class="svc-card" href="leistungen.html#{i}">' + (f'<img src="media/{v[4:]}.jpg" alt="" loading="lazy">' if v.startswith('img:') else f'<video data-auto muted loop playsinline preload="none" poster="media/{v}.jpg" src="media/{v}.mp4" aria-hidden="true"></video>') + f'<h3>{t}</h3><p>{d}</p><span class="go">Mehr dazu</span></a>' for i, v, t, d in SVC_HOME)

TICKER = ['Möbel Martin', 'Addicted to Dance', 'Weinloft 23', 'Hörmann', 'Z &amp; H Aufbereitung', 'Lambert Reisen', 'Saarländischer Rundfunk', 'Saarlouis Hornets', 'Lokschuppen Dillingen', 'ayedo', 'Triple A Trainer', 'Dancefield', 'Fridays for Future', 'Küche Ruppenthal', 'Kalinski Brüder', 'MCC Warndt', 'Schneider Apparatebau', 'A2DC Contest', 'Flight Club Saar']
ticker = '<div class="ticker" aria-label="Kunden und Partner"><div class="row">' + ''.join(f'<span>{t}</span>' for t in TICKER) + '</div></div>'

home_main = f'''<main id="main">
<section class="eye" aria-label="Falcon Eye">
  <div class="stage">
    <video id="heroVid" src="media/hero.mp4" poster="media/hero.jpg" data-mobile-src="media/r_norway.mp4" data-mobile-poster="media/r_norway.jpg" muted loop playsinline autoplay preload="auto" aria-hidden="true"></video>
    <canvas id="eyeCanvas" aria-hidden="true"></canvas>
    <div class="scan"></div>
    <div class="boot" aria-hidden="true"><span>FALCON EYE OSD</span><span>GPS 14 SAT &nbsp; LINK 100%</span><span>CAM 6K &nbsp; 50 FPS</span><span>LIPO 6S 25.2V</span></div>
    <div class="armed" aria-hidden="true">ARMED</div>
    <p class="tagline">FPV-Drohnenfilme aus dem Saarland</p>
    <p class="scrollhint" aria-hidden="true"><span>Scrollen und abheben</span><i></i></p>
    <div class="osd" aria-hidden="true">
      <div class="tl"><span class="rec">REC <b data-osd-clock>00:00</b></span><span>SAARLAND</span></div>
      <div class="tr"><span data-osd-volt>25.2V</span><span>LINK &#9646;&#9646;&#9646;&#9646;</span></div>
      <div class="cross"></div><div class="horizon"></div>
    </div>
    <div class="hero-copy">
      <h1>Wir fliegen<br>da durch.</h1>
      <p class="lede">Durch Hallen, Fenster, Stadien und Menschenmengen – so nah dran, wie keine andere Kamera kommt. FPV-Drohnenfilme für Firmen, Events und Sport aus dem Saarland.</p>
      <div class="ctas"><a class="btn" href="kontakt.html">Dreh anfragen</a><a class="btn wa" href="{WA}" target="_blank" rel="noopener">{WA_ICON}WhatsApp</a></div>
    </div>
  </div>
</section>

{ticker}
<div class="trust">
  <div><b>Fast 100</b><span>Projekte: Partys, Events, Firmen, Sport und Vereine</span></div>
  <div><b data-count="100" data-suffix="+">100+</b><span>Drohnen im Hangar, viele selbst gebaut – vom flüsterleisen 50-Gramm-Whoop bis zum Kino-Lifter</span></div>
  <div><b data-count="20" data-suffix="+">20+</b><span>Länder, in denen wir schon geflogen sind – seit Jahren, mit selbst gebauten Coptern</span></div>
  <div><b>0 €</b><span>für Anfrage und Angebot – ihr wisst vorher, was es kostet</span></div>
</div>

<section class="fly" style="height:420vh" data-frames="127" data-src="seq/f{{n}}.jpg" data-alt="12" data-alt-to="1.2" data-secs="9" aria-label="Durchflug: Scrollen steuert die Drohne">
  <div class="stage">
    <canvas aria-hidden="true"></canvas><div class="scan"></div>
    <div class="osd" aria-hidden="true"><div class="tl"><span class="rec">REC <b data-clk>00:00</b></span><span>ALT <b data-alt>12</b> m</span></div><div class="tr"><span><b data-spd>0</b> km/h</span><span data-volt>25.2V</span></div><div class="cross"></div></div>
    <div class="callout" data-at="0.04"><p class="kicker">Durchflug 1 von 3</p><h3>Ihr steuert.</h3><p>Scrollt weiter – und fliegt selbst vom Balkon bis durch den Eingang.</p></div>
    <div class="callout right" data-at="0.42"><h3>Zentimeterarbeit.</h3><p>Wo andere Drohnen umdrehen, fängt FPV erst an: durch Türen, Fenster und Gänge.</p></div>
    <div class="callout" data-at="0.8" data-hold="1"><h3>Kein Schnitt nötig.</h3><p>Ein Flug erzählt euren ganzen Ort. Genau das bleibt bei Kunden hängen.</p><a class="btn" href="kontakt.html#imagefilm">So einen Flug anfragen</a></div>
    <div class="chapters" aria-hidden="true"><span data-a="0" data-b=".35"><i><b></b></i><em>Absprung</em></span><span data-a=".35" data-b=".7"><i><b></b></i><em>Sturzflug</em></span><span data-a=".7" data-b="1.01"><i><b></b></i><em>Eingang</em></span></div>
  </div>
</section>

<section class="block" aria-labelledby="vs-h">
  <div class="wrap">
    <div class="head-row"><div><p class="kicker">Zieh den Regler</p><h2 class="h2 reveal" id="vs-h">Drohne oder FPV?</h2><p class="intro reveal">Eine normale Drohne zeigt euer Gebäude von oben. Eine FPV-Drohne fliegt hinein. Beides am selben Ort: Möbel Martin, Saarbrücken.</p></div></div>
    <div class="compare" style="--split:50%">
      <video class="a" muted loop playsinline preload="none" poster="media/cmp_drohne.jpg" src="media/cmp_drohne.mp4" aria-label="Normale Drohne: Zeitraffer von oben"></video>
      <video class="b" muted loop playsinline preload="none" poster="media/rolltreppe.jpg" src="media/rolltreppe.mp4" aria-label="FPV-Drohne: Flug durch das Möbelhaus"></video>
      <span class="lab l">Normale Drohne</span><span class="lab r">FPV</span>
      <div class="handle"><button aria-label="Vergleich verschieben (Pfeiltasten)">&#8596;</button></div>
    </div>
    <div class="vs"><div><h3>Normale Drohne</h3><p>Ruhige Übersicht aus 40 bis 120 Metern. Perfekt für Lage, Größe und Umgebung.</p></div><div><h3>FPV</h3><p>Fliegt durch Türen, über Rolltreppen, zwischen Menschen. Zeigt, wie sich euer Ort anfühlt. Wir machen beides – oft im selben Dreh.</p></div></div>
  </div>
</section>

<section class="sim" aria-labelledby="sim-h" data-nodock>
  <div class="sim-stage">
    <video muted loop playsinline preload="none" poster="media/halong.jpg" src="media/halong.mp4" aria-hidden="true"></video>
    <div class="sim-osd" aria-hidden="true"><div class="hz"><i></i></div><div class="cross"></div>
      <div class="tl"><span class="rec">SIM</span><span>THR <b data-sim="thr">0</b>%</span><span>SPD <b data-sim="spd">0</b> km/h</span></div><div class="tr"><span>ROLL <b data-sim="roll">0</b>°</span><span>PITCH <b data-sim="pitch">0</b>°</span></div></div>
    <div class="sim-copy"><p class="kicker">Probiert es selbst</p><h2 class="h2" id="sim-h">Ihr habt die Sticks.</h2><p>Zieht an den Sticks – auf dem Handy mit beiden Daumen, am Rechner mit Maus oder W A S D und den Pfeiltasten. Linker Stick hoch = Gas, runter = bremsen. So fühlt sich FPV an.</p></div>
    <div class="sticks"><div class="stick" data-stick="l" aria-label="Linker Stick: Gas und Drehen"><i></i><span>Gas / Gier</span></div><div class="stick" data-stick="r" aria-label="Rechter Stick: Rollen und Nicken"><i></i><span>Rollen / Nicken</span></div></div>
  </div>
</section>
<section class="missions" aria-label="Projekte auswählen">
  <div class="bg"><video muted loop playsinline preload="none"></video><video muted loop playsinline preload="none"></video></div>
  <div class="wrap">
    <div><p class="kicker">Wählt einen Flug <span class="mhint">Antippen zum Abspielen</span></p><ul class="mlist" role="tablist">{mlist}</ul></div>
    <div class="mside"><span class="meta" data-m="meta"></span><p data-m="text"></p><div class="mnav"><button type="button" data-m="prev" aria-label="Vorheriger Flug">&#8592;</button><div class="mprog"><i></i></div><button type="button" data-m="next" aria-label="Nächster Flug">&#8594;</button></div><div class="ctas"><a class="btn" data-m="ask" href="kontakt.html">So etwas anfragen</a><a class="btn ghost" data-m="link" href="projekte.html">Projekt ansehen</a></div></div>
  </div>
</section>

<section class="fly" style="height:460vh" data-frames="148" data-src="seq2/r{{n}}.jpg" data-alt="2.4" data-alt-to="1.1" data-secs="21" aria-label="Durchflug durch das Polizeipräsidium">
  <div class="stage">
    <canvas aria-hidden="true"></canvas><div class="scan"></div>
    <div class="osd" aria-hidden="true"><div class="tl"><span class="rec">REC <b data-clk>00:00</b></span><span>ALT <b data-alt>2</b> m</span></div><div class="tr"><span><b data-spd>0</b> km/h</span><span data-volt>25.2V</span></div><div class="cross"></div></div>
    <div class="callout" data-at="0.04"><p class="kicker">Durchflug 2 von 3</p><h3>Ein Take.</h3><p>Filmdreh im Polizeipräsidium: von der Einfahrt bis zu den Darstellern, ohne einen einzigen Schnitt.</p></div>
    <div class="callout right" data-at="0.36"><h3>Zwischen Streifen&shy;wagen.</h3><p>Zwei Meter hoch, zentimetergenau an Spiegeln und Säulen vorbei.</p></div>
    <div class="callout" data-at="0.78" data-hold="1"><h3>Für Film und Werbung.</h3><p>Plansequenzen wie im Kino – für Musikvideos, Werbespots und Imagefilme.</p><a class="btn" href="kontakt.html#imagefilm">Dreh anfragen</a></div>
    <div class="chapters" aria-hidden="true"><span data-a="0" data-b=".18"><i><b></b></i><em>Einfahrt</em></span><span data-a=".18" data-b=".45"><i><b></b></i><em>Tiefgarage</em></span><span data-a=".45" data-b=".7"><i><b></b></i><em>Streifenwagen</em></span><span data-a=".7" data-b="1.01"><i><b></b></i><em>Darsteller</em></span></div>
  </div>
</section>

<section class="block" aria-labelledby="reels-h">
  <div class="wrap reels">
    <div>
      <div class="phone"><div class="screen"><span class="island"></span><div class="feed" tabindex="0" aria-label="Hochkant-Clips, zum Wechseln wischen">{reel_items}</div><div class="dots">{reel_dots}</div></div></div>
      <div class="phone-ctrl"><button data-reel="prev" aria-label="Vorheriger Clip">&#8593;</button><button data-reel="next" aria-label="Nächster Clip">&#8595;</button></div>
    </div>
    <div>
      <p class="kicker">Wischt durch</p>
      <h2 class="h2 reveal" id="reels-h">Gemacht für Reels und TikTok.</h2>
      <p class="intro reveal">FPV ist das Format, bei dem niemand weiterwischt. Wir drehen und schneiden direkt hochkant – mit Hook in der ersten Sekunde.</p>
      <ul class="ticks"><li>Hochkant 9:16 und quer 16:9 aus einem Dreh</li><li>Schnitt auf Musik und Beat</li><li>Fertig zum Posten, mit Untertiteln auf Wunsch</li></ul>
      <div class="ctas"><a class="btn" href="kontakt.html#social">Clips anfragen</a><a class="btn ghost" href="https://www.instagram.com/falconeyesaar" target="_blank" rel="noopener">Instagram @falconeyesaar</a></div>
    </div>
  </div>
</section>

{WORLD_SEC}
<section class="fly" style="height:440vh" data-frames="204" data-src="seq3/w{{n}}.jpg" data-alt="3" data-alt-to="140" data-secs="17" aria-label="Durchflug Norwegen: unter der Brücke in den Wasserfall">
  <div class="stage">
    <canvas aria-hidden="true"></canvas><div class="scan"></div>
    <div class="osd" aria-hidden="true"><div class="tl"><span class="rec">REC <b data-clk>00:00</b></span><span>ALT <b data-alt>3</b> m</span></div><div class="tr"><span><b data-spd>0</b> km/h</span><span data-volt>25.2V</span></div><div class="cross"></div></div>
    <div class="callout" data-at="0.03"><p class="kicker">Durchflug 3 von 3 · Norwegen</p><h3>Unter der Brücke durch.</h3><p>Eine alte Steinbrücke, dahinter tobt der Wasserfall. Scrollt – ihr fliegt.</p></div>
    <div class="callout right" data-at="0.34"><h3>Mitten in die Gischt.</h3><p>Zentimeter neben dem Fels, durch den Sprühnebel nach oben.</p></div>
    <div class="callout" data-at="0.76" data-hold="1"><h3>Über die Kante.</h3><p>Solche Flüge planen wir auch für euch – im Saarland und überall sonst.</p><a class="btn" href="kontakt.html">Dreh anfragen</a></div>
    <div class="chapters" aria-hidden="true"><span data-a="0" data-b=".12"><i><b></b></i><em>Brücke</em></span><span data-a=".12" data-b=".7"><i><b></b></i><em>Wasserfall</em></span><span data-a=".7" data-b="1.01"><i><b></b></i><em>Fjell</em></span></div>
  </div>
</section>
{KINO_SEC}
<section class="block" style="padding-top:0" aria-labelledby="svc-h">
  <div class="wrap">
    <div class="head-row"><div><h2 class="h2 reveal" id="svc-h">Was wir fliegen</h2><p class="intro reveal">Von 15 Sekunden für Instagram bis zum Imagefilm in 6K.</p></div><a class="btn ghost" href="leistungen.html">Alle Leistungen</a></div>
    <div class="svc-grid">{svc_cards}</div>
  </div>
</section>

<section class="block process" aria-labelledby="ablauf-h">
  <div class="wrap"><h2 class="h2 reveal" id="ablauf-h">So läuft ein Dreh</h2>{STEPS}</div>
</section>

<section class="block" aria-labelledby="safe-h">
  <div class="wrap"><h2 class="h2 reveal" id="safe-h">Sicher in der Luft</h2><p class="intro reveal">FPV sieht wild aus. Dahinter steckt Planung.</p>{SAFETY}</div>
</section>

{band('Was wollt ihr filmen?', 'Tippt an, worum es geht – das Formular ist dann schon ausgefüllt. Antwort mit Idee und Festpreis.')}
</main>
'''
home = head('Falcon Eye – FPV-Drohnenfilme im Saarland', 'Falcon Eye fliegt FPV-Drohnenfilme im Saarland: durch Hallen, Stadien und Menschenmengen. Imagefilme, Events, Sport, Social-Media-Clips. Jetzt Dreh anfragen.', 'index') + header('index') + home_main + footer() + scripts('<script src="js/falcon-path.js"></script>\n<script src="assets/home.js"></script>\n')
write('index.html', home)

# ====================================================================== PROJEKTE
CASES = [
  ('moebel-martin', 'event firma', 'Möbel Martin', 'Promi-Dinner im Möbelhaus', [('nacht', 'Schriftzug bei Nacht'), ('kueche', 'Küchenstudio'), ('rolltreppe', 'Rolltreppen'), ('indoor', 'Dinner')],
   [('Kunde', 'Möbel Martin, Saarbrücken'), ('Anlass', 'Promi-Dinner'), ('Gedreht', 'Februar 2025'), ('Drohnen', 'FPV-Cinewhoop, DJI Avata 2, DJI Mini')],
   'Ein Abend, drei Perspektiven: der leuchtende Schriftzug von außen, ein Zeitraffer von oben und FPV-Flüge durchs Haus – über die Rolltreppen, durchs Küchenstudio bis an die Tische der Gäste.', 'event'),
  ('ludwigspark', 'sport event', 'Ludwigspark', 'Stadiondreh in Saarbrücken', [('stadion2', 'Durch die Tribüne'), ('tafel', 'Über dem Rasen'), ('rasen', 'Mit den Spielern'), ('mitte', 'Mittelkreis'), ('stadion', 'Flip')],
   [('Ort', 'Ludwigsparkstadion, Saarbrücken'), ('Gedreht', 'Februar 2025'), ('Drohnen', 'DJI O4, 5-Zoll-FPV'), ('Format', '16:9 und 9:16')],
   'Wir sind durch die Tribüne geflogen, zwischen den Zuschauern die Treppe hinunter und dann flach über den Rasen bis in den Mittelkreis. Dazu Flips und Orbits über dem Spielfeld.', 'sport'),
  ('polizei', 'firma', 'Polizeipräsidium', 'Filmdreh in der Tiefgarage', [('revier', 'Ein Take'), ('aussteigen', 'Streifenwagen'), ('polizei', 'Orbit draußen')],
   [('Anlass', 'Filmproduktion'), ('Gedreht', 'Februar 2025'), ('Drohnen', 'FPV-Cinewhoop'), ('Besonderheit', 'Plansequenz ohne Schnitt')],
   'Eine Plansequenz wie im Kino: von der Einfahrt durch die Tiefgarage, zwischen Streifenwagen hindurch bis zu den Darstellern. Dazu Orbits um das Gebäude.', 'imagefilm'),
  ('weinloft', 'gastro firma', 'Weinloft 23', 'Indoor-Flug durch die Location', [('gastro', 'Durch die Location')],
   [('Kunde', 'Weinloft 23'), ('Gedreht', 'November 2025'), ('Drohnen', 'DJI O4 Cinewhoop'), ('Einsatz', 'Website, Social Media')],
   'Vom beleuchteten Logo durch Gewölbe, Bar und Weinregale. Ein Flug, der zeigt, wie sich der Laden anfühlt – bevor der erste Gast kommt.', 'imagefilm'),
  ('hoermann', 'firma', 'Hörmann', 'Luftbilder vom Werk', [],
   [('Kunde', 'Hörmann'), ('Art', 'Luftbilder'), ('Drohne', 'DJI Kameradrohne'), ('Einsatz', 'Unternehmenskommunikation')],
   'Hochauflösende Luftbilder von Werk, Hallen und Schriftzug – für Website, Presse und Präsentationen.', 'immobilie'),
  ('zh-aufbereitung', 'firma social', 'Z &amp; H Aufbereitung', 'Imagefilm für eine Fahrzeugaufbereitung', [('zh_fpv', 'FPV durchs Fahrzeug'), ('zh_luft', 'Betrieb von oben'), ('zh_detail', 'Details'), ('zh_vorher', 'Vorher / Nachher'), ('wohnmobil', 'Durchs Fenster')],
   [('Kunde', 'Z &amp; H Aufbereitung, Ali Fakih'), ('Ort', 'Kirkel-Altstadt'), ('Format', 'Imagefilm, knapp 2 Minuten'), ('Drohnen', 'DJI O3, DJI Mini, Bodenkamera')],
   'Ein kompletter Imagefilm: Makroaufnahmen von Logos und Lack, Vorher-Nachher-Vergleiche, ein FPV-Flug durchs offene Fenster ins Wohnmobil und Luftaufnahmen über den Betrieb in Kirkel-Altstadt.', 'imagefilm'),
  ('partyboot', 'event', 'Partyboot', 'Electronic Cruise auf der Saar', [('boot', 'An Deck')],
   [('Anlass', 'Party auf dem Schiff'), ('Gedreht', 'Juni 2024'), ('Drohnen', 'DJI Avata, GoPro, O3'), ('Nachbearbeitung', 'Gyroflow-stabilisiert')],
   'Über Deck, durch die feiernde Menge und vorbei am DJ-Pult – während das Schiff über die Saar fährt.', 'event'),
  ('dance', 'event', 'Dance-Events', 'Shows in der Halle', [('events', 'Freestyle'), ('arena', 'Publikum')],
   [('Anlass', 'Tanzwettbewerb'), ('Gedreht', 'September 2024'), ('Drohnen', 'FPV-Cinewhoop'), ('Einsatz', 'Aftermovie')],
   'Mitten über die Tanzfläche, um die Tänzer herum und über das Publikum – ohne die Show zu stören. Bei Addicted to Dance sind wir inzwischen drei Jahre in Folge dabei; die Clips von diesem Jahr laufen auf Instagram.', 'event'),
  ('triple-a', 'event firma', 'Triple A Trainer', 'Teamevent mit Graffiti', [('mallen', 'Anflug zum Team'), ('kunst', 'An der Wand')],
   [('Kunde', 'Triple A Trainer'), ('Anlass', 'Teamevent'), ('Drohnen', 'DJI Avata 2, Axisflying O3'), ('Einsatz', 'Social Media')],
   'Vom Dach durch den Hof bis zur Wand, die das Team gerade bemalt. Dazu ein Sturzflug vom Balkon bis durch den Eingang.', 'event'),
  ('goettelborn', 'event', 'Förderturm Göttelborn', 'Mit dem Flight Club Saar', [('gang', 'Durch den Förderturm'), ('turm', 'Am Förderturm')],
   [('Ort', 'Göttelborn'), ('Gedreht', 'Juni 2026'), ('Mit', 'Flight Club Saar e.V.'), ('Drohnen', 'DJI Neo 2, 5-Zoll O4 Pro')],
   'Ein Flugtag am Förderturm: Industriekultur aus Pilotensicht, gemeinsam mit unserem Verein.', 'event'),
  ('hochwasser', 'firma social', 'Hochwasser Saarbrücken', 'Footage für Fridays for Future', [('hochwasser', 'Über der überfluteten Saar')],
   [('Kunde', 'Fridays for Future'), ('Anlass', 'Pfingsthochwasser'), ('Gedreht', 'Mai 2024'), ('Lizenz', 'Aufnahmen verkauft')],
   'Als die Saar über die Ufer trat, waren wir in der Luft: tief über überflutete Straßen, Promenaden und Parkplätze in Saarbrücken. Fridays for Future hat die Aufnahmen für ihre Kanäle gekauft – wir verkaufen auch fertiges Material.', 'social'),
  ('hochzeit', 'event', 'Hochzeit', 'Vom Schlosshof bis zur Tanzfläche', [('r_hochzeit', 'Hochzeitstag')],
   [('Anlass', 'Hochzeit'), ('Partner', 'Union of Love, DJ Maito'), ('Drohnen', 'FPV-Cinewhoop, Kameradrohne'), ('Format', '9:16 und 16:9')],
   'Ringtausch, Schlosshof von oben, Paarshooting und Party: ein Hochzeitsfilm, den die Gäste so noch nicht gesehen haben – hochkant für Instagram und quer für den großen Bildschirm.', 'event', 'tall'),
  ('musikvideo', 'social', 'Musikvideo', 'Rap-Dreh an der Baustelle', [('bagger', 'Am Bagger')],
   [('Anlass', 'Musikvideo'), ('Gedreht', 'März 2025'), ('Drohnen', 'DJI O4'), ('Format', '16:9 und 9:16')],
   'Dämmerung, Baustelle, Bagger: FPV-Flüge, die den Beat mitnehmen.', 'social'),
]
CASE_FILM = {'zh-aufbereitung': ('zh_film', 'Z &amp; H Aufbereitung – Imagefilm'), 'goettelborn': ('film_goettelborn', 'Förderturm Göttelborn'),
             'triple-a': ('film_graffiti', 'Graffiti-Workshop bei Triple A Trainer'), 'hochwasser': ('film_hochwasser', 'Hochwasser Saarbrücken'),
             'hochzeit': ('film_hochzeit', 'Hochzeit'), 'dance': ('film_atd', 'Addicted to Dance')}
def case_html(i, c):
    cid, tags, name, sub, clips, facts, text, anlass = c[:8]
    tall = len(c) > 8
    if clips:
        k0 = clips[0][0]
        media = f'''<figure class="clip{' tall' if tall else ''}" id="cm-{cid}" style="aspect-ratio:{'9/14' if tall else '16/10'}"><video muted loop playsinline preload="none" poster="media/{k0}.jpg" src="media/{k0}.mp4"></video><span class="tc">00:00:00</span><span class="hint">&#9664; ziehen &#9654;</span><i class="bar"></i><button class="open" data-lb="media/{k0}.mp4" data-title="{name}" data-anlass="{anlass}" aria-label="{name} im Vollbild ansehen"></button></figure>'''
        thumbs = ''
        if len(clips) > 1:
            thumbs = f'<div class="filters" data-switch="#cm-{cid}" style="margin-top:12px">' + ''.join(f'<button type="button" data-src="media/{k}.mp4" data-poster="media/{k}.jpg" aria-pressed="false" aria-selected="{"true" if j == 0 else "false"}">{t}</button>' for j, (k, t) in enumerate(clips)) + '</div>'
        media = f'<div class="media-wrap">{media}{thumbs}</div>'
    else:
        media = '<div class="media-wrap"><div class="media"><img src="media/hoermann_DJI_0726.jpg" alt="Luftbild Hörmann-Werk mit Schriftzug" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover"></div><div class="media" style="margin-top:12px;aspect-ratio:16/7"><img src="media/hoermann_DJI_0648.jpg" alt="Luftbild Hörmann-Hallen von hinten" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover"></div></div>'
    dl = ''.join(f'<dt>{a}</dt><dd>{b}</dd>' for a, b in facts)
    extra = f'<button class="btn ghost" type="button" data-lb="media/{CASE_FILM[cid][0]}.mp4" data-title="{CASE_FILM[cid][1]}" data-anlass="{anlass}" data-tall="{1 if cid in ("hochzeit", "dance") else 0}">Ganzen Film ansehen (mit Ton)</button>' if cid in CASE_FILM else ''
    return f'''<article class="case" id="{cid}" data-tags="{tags}">
  {media}
  <div><p class="kicker">{sub}</p><h2 class="h3">{name}</h2><p>{text}</p><dl class="facts">{dl}</dl><div class="ctas"><a class="btn" href="kontakt.html#{anlass}">Ähnlichen Dreh anfragen</a>{extra}</div></div>
</article>'''
cases = ''.join(case_html(i, c) for i, c in enumerate(CASES))
filters = ''.join(f'<button type="button" data-f="{k}" aria-pressed="{"true" if k == "alle" else "false"}">{t}</button>' for k, t in [('alle', 'Alle'), ('event', 'Events'), ('firma', 'Firmen'), ('sport', 'Sport'), ('gastro', 'Gastro'), ('social', 'Social Media')])
proj = head('Projekte – Falcon Eye FPV', 'Echte FPV-Projekte von Falcon Eye: Möbel Martin, Ludwigspark, Polizeipräsidium, Weinloft 23, Hörmann und mehr.', 'projekte') + header('projekte') + f'''<main id="main">
{phero('stadion2', 'Projekte', 'Alles echte Flüge. Fahrt mit der Maus über ein Video oder wischt auf dem Handy seitlich – dann steuert ihr selbst durch den Flug.')}
<section class="block" style="padding-top:60px">
  <div class="wrap">
    <div class="filters" role="group" aria-label="Projekte filtern">{filters}</div>
    <div class="cases">{cases}</div>
  </div>
</section>
{KINO_SEC}
{band('Euer Projekt als nächstes?', 'Schickt uns kurz, was ihr vorhabt. Ihr bekommt eine Flugidee und einen Festpreis.')}
</main>
''' + footer() + scripts()
proj = proj.replace('.case .media{', '.case .media{')
write('projekte.html', proj)

# ====================================================================== LEISTUNGEN
SVC = [
  ('events', 'events', 'Events &amp; Firmenfeiern', 'Wir fliegen mitten durch Bühne, Tanzfläche und Publikum. Die Gäste sehen sich am nächsten Tag in einem Film, den niemand mit dem Handy hinbekommt.',
   ['Aftermovie und Social-Clips aus einem Dreh', 'Leise, leichte Drohnen nah an Menschen', 'Indoor und outdoor, auch bei Nacht'], 'event'),
  ('imagefilm', 'rolltreppe', 'Imagefilme', 'Ein einziger Flug durch euer Unternehmen – vom Parkplatz durch die Tür bis an den Arbeitsplatz. Zeigt in einer Minute, wofür andere eine Werksführung brauchen.',
   ['Planung von Route und Story vorab', 'Kombiniert mit Bodenkamera auf Wunsch', 'Schnitt, Farbe und Musik inklusive'], 'imagefilm'),
  ('social', 'wohnmobil', 'Social-Media-Clips', 'FPV ist das Format, bei dem niemand weiterwischt. Wir drehen hochkant mit, schneiden auf den Beat und liefern fertig zum Posten.',
   ['9:16 für Reels, TikTok, Shorts', 'Hook in der ersten Sekunde', 'Mehrere Clips aus einem Drehtag'], 'social'),
  ('sport', 'tafel', 'Sport &amp; Stadion', 'Tempo, Flips, tiefe Überflüge: Wir halten mit, wo kein Kameramann hinterherkommt – vom Stadion bis zur Motocross-Strecke.',
   ['5-Zoll-FPV für hohes Tempo', 'Live-Bild auf Leinwand möglich', 'Highlight-Clips für Verein und Sponsoren'], 'sport'),
  ('gastro', 'gastro', 'Gastro &amp; Hotels', 'Ein Flug durch euren Laden zeigt Atmosphäre besser als jedes Foto: Eingang, Bar, Küche, Terrasse.',
   ['Cinewhoop mit Propellerschutz für Innenräume', 'Dreh vor oder während dem Betrieb', 'Für Website, Google-Profil und Social Media'], 'imagefilm'),
  ('immobilie', 'img:hoermann_DJI_0726', 'Immobilien &amp; Gewerbe', 'Luftbilder und Durchflüge für Exposés, Werksgelände und Bauprojekte – dazu Dachaufnahmen für PV-Planung und Inspektion.',
   ['Luftbilder in hoher Auflösung', 'Durchflug innen und außen', 'Dachaufnahmen für Solar und Gutachter'], 'immobilie'),
  ('hochzeit', 'r_hochzeit', 'Hochzeiten', 'Flüsterleise Mini-Drohnen ab 50 Gramm mit 4K-Bild, die niemanden stören: der Einzug, die Gäste, die Location von oben – Aufnahmen, die kein Gast mit dem Handy hinbekommt.',
   ['Leise und unauffällig', 'Abgestimmt mit Fotograf und Videograf', 'Kurzer Film plus Clips für die Gäste'], 'hochzeit'),
  ('live', 'arena', 'Live-Übertragung', 'Das FPV-Bild live auf Leinwand oder in den Stream – für Sportevents, Shows und Messen.',
   ['Digitales FPV-Livebild', 'Übergabe an Regie oder Stream', 'Flugshow-Einlagen möglich'], 'live'),
  ('kino', 'nacht', 'Kino-Qualität 6K', 'Unser Cinelifter trägt eine Blackmagic 6K. Für Werbespots, Musikvideos und Produktionen, die auf die große Leinwand sollen.',
   ['Blackmagic 6K mit Wechselobjektiven', 'Raw-Material für die Farbkorrektur', 'Zusammenarbeit mit Produktionsfirmen'], 'imagefilm'),
]
def svc_row(s, i):
    sid, vid, t, d, ticks, anlass = s
    media = (f'<div class="media"><img src="media/{vid[4:]}.jpg" alt="Luftbild Hörmann-Werk" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover"></div>' if vid and vid.startswith('img:') else clip(vid, t, 'Ziehen zum Steuern', anlass=anlass)) if vid else '<div class="clip" style="cursor:default"><div class="nosig"><canvas></canvas><span>Clip folgt</span></div></div>'
    film = ''
    if sid == 'hochzeit':
        media = media.replace('<figure class="clip ', '<figure style="aspect-ratio:9/14" class="clip tall ').replace('data-lb="media/r_hochzeit.mp4"', 'data-lb="media/film_hochzeit.mp4" data-tall="1"')
        film = '<button class="btn ghost" type="button" data-lb="media/film_hochzeit.mp4" data-title="Hochzeit – der ganze Film" data-anlass="hochzeit" data-tall="1">Hochzeitsfilm ansehen (mit Ton)</button>'
    tk = ''.join(f'<li>{x}</li>' for x in ticks)
    return f'''<article class="case" id="{sid}" data-tags="x">
  <div class="media-wrap">{media}</div>
  <div><h2 class="h3">{t}</h2><p>{d}</p><ul class="ticks">{tk}</ul><div class="ctas"><a class="btn" href="kontakt.html#{anlass}">{t.split(" ")[0].replace("&amp;","")} anfragen</a>{film}</div></div>
</article>'''
svc_rows = ''.join(svc_row(s, i) for i, s in enumerate(SVC))
FAQ = [
  ('Was kostet ein FPV-Dreh?', 'Das hängt von Ort, Dauer, Anzahl der Flüge und dem Schnitt ab. Nach eurer Anfrage bekommt ihr ein festes Angebot – die Anfrage selbst kostet nichts.'),
  ('Ist das sicher, wenn Menschen in der Nähe sind?', 'Nah an Menschen und in Innenräumen fliegen wir kleine, leichte Drohnen mit Propellerschutz. Jede Route wird vorher geplant, und ein Spotter behält alles im Blick.'),
  ('Braucht ihr Genehmigungen?', 'Je nach Ort ja – zum Beispiel über Menschenansammlungen, in Kontrollzonen oder über fremden Grundstücken. Das klären wir vor dem Drehtag mit Behörden und Eigentümern.'),
  ('Was passiert bei schlechtem Wetter?', 'Indoor fliegen wir bei jedem Wetter. Draußen verschieben wir bei Regen oder starkem Wind gemeinsam mit euch auf einen Ersatztermin.'),
  ('Wie schnell bekommen wir die Videos?', 'Social-Clips meist innerhalb weniger Tage, längere Imagefilme je nach Umfang. Den Liefertermin nennen wir im Angebot.'),
  ('Dürfen wir die Videos überall nutzen?', 'Ja. Ihr bekommt die Nutzungsrechte für Website, Social Media und Werbung, schriftlich im Vertrag. Ausgewählte Szenen zeigen wir als Referenz.'),
  ('Wo seid ihr unterwegs?', 'Von Saarbrücken aus im ganzen Saarland und in der Region bis Luxemburg und Frankreich. Für besondere Projekte auch weiter – geflogen sind wir schon in über 20 Ländern, von Norwegen bis Vietnam.'),
  ('Könnt ihr auch klassische Drohnenfotos?', 'Ja. Neben FPV haben wir Kameradrohnen für Luftbilder, Zeitraffer und ruhige Überflüge – oft im selben Termin.'),
]
faq = ''.join(f'<details><summary>{q}</summary><p>{a}</p></details>' for q, a in FAQ)
leist = head('Leistungen – Falcon Eye FPV', 'FPV-Drohnenfilme für Events, Imagefilme, Social Media, Sport, Gastro, Immobilien, Hochzeiten und Live-Übertragungen im Saarland.', 'leistungen') + header('leistungen') + f'''<main id="main">
{phero('rolltreppe', 'Leistungen', 'Ihr sagt uns, wofür ihr den Film braucht. Wir planen den Flug, fliegen ihn und liefern ihn fertig geschnitten.')}
<section class="block" style="padding-top:60px">
  <div class="wrap">
    <nav class="filters" aria-label="Zu Leistung springen">{''.join(f'<a class="btn ghost sm" href="#{s[0]}">{s[2]}</a>' for s in SVC)}</nav>
    <div class="cases">{svc_rows}</div>
  </div>
</section>
<section class="block process"><div class="wrap"><h2 class="h2 reveal">So läuft ein Dreh</h2>{STEPS}</div></section>
<section class="block" aria-labelledby="faq-h"><div class="wrap"><h2 class="h2 reveal" id="faq-h">Häufige Fragen</h2><div class="faq">{faq}</div></div></section>
{band('Welche Leistung braucht ihr?', 'Tippt an, worum es geht. Den Rest klären wir am Telefon oder per WhatsApp.')}
</main>
''' + footer() + scripts()
write('leistungen.html', leist)

# ====================================================================== ÜBER UNS
HANGAR = [
  ('Whoop', 'Ab 50 g', 'events', 'Flüsterleise Mini-Whoops ab 50 Gramm – und trotzdem 4K-Bild dank DJI O4 Pro Air Unit. Für Hochzeiten, Bühnen und Räume voller Menschen.', 'ab 50 g|4K|O4 Pro|flüsterleise'),
  ('Micro', 'Unter 250 g', 'turm', 'DJI Neo 2 und Co. Leise, leicht, fast überall erlaubt. Für Hochzeiten, Feiern und alles, was ganz nah an Menschen passiert.', '4K|leise|unter 250 g'),
  ('Cinewhoop', 'Indoor', 'kueche', 'Mit Propellerschutz durch Hallen, Küchen, Showrooms und Treppenhäuser. Butterweiche Bilder bis 240 fps.', '4K|240 fps|Propellerschutz'),
  ('Freestyle', '5 Zoll', 'stadion', 'Schnell und wendig für Sport, Flips und Action. Hält mit, wo jede andere Kamera aufgibt.', '4K|120 km/h+|Flips'),
  ('Kameradrohne', 'Luftbild', 'luft', 'Ruhige Überflüge, Luftbilder und Zeitraffer aus großer Höhe – für Übersicht, Lage und Größe.', '4K|Foto|Zeitraffer'),
  ('Cinelifter', '6K Kino', None, 'Trägt eine Blackmagic 6K. Für Werbung und Filme, die auf die große Leinwand sollen.', '6K RAW|Blackmagic|Wechselobjektive'),
]
hbtns = ''.join(f'<button type="button" role="tab" aria-selected="{"true" if i == 0 else "false"}" data-src="{("media/" + v + ".mp4") if v else ""}" data-poster="{("media/" + v + ".jpg") if v else ""}" data-desc="{d}" data-spec="{"".join(f"<span>{x}</span>" for x in sp.split("|"))}" data-name="{n}"><span class="n">{i+1:02d}</span><span class="cls">{c}</span><b>{n}</b></button>' for i, (n, c, v, d, sp) in enumerate(HANGAR))
h0 = HANGAR[0]
ueber = head('Über uns – Falcon Eye FPV', 'Die Crew hinter Falcon Eye: FPV-Piloten aus dem Saarland, über 100 Drohnen im Hangar, Partner des Flight Club Saar.', 'ueber-uns') + header('ueber-uns') + f'''<main id="main">
{phero('turm', 'Über uns', 'Piloten aus dem Saarland, die seit Jahren fliegen – in über 20 Ländern, mit Coptern, die wir selbst bauen.')}
<section class="block">
  <div class="wrap two-col">
    <div>
      <h2 class="h2 reveal">Die Crew</h2>
      <p class="intro reveal">Angefangen hat alles mit einer Brille, einer Drohne und viel zu vielen Akkus. Heute fliegen wir für Möbelhäuser, Stadien, Filmproduktionen und Weinbars – und haben immer noch dasselbe Grinsen unter der Brille.</p>
      <p class="reveal">Unsere Copter bauen wir selbst: Rahmen, Motoren, Elektronik, Kamera. Wir kennen jede Schraube unserer Technik – und können sie genau auf euren Dreh abstimmen. Geflogen sind wir seit Jahren und schon in über 20 Ländern.</p>
      <ul class="crew">
        <li class="reveal"><b>Natan Wojtasczyk</b><span>Gründer, FPV-Pilot, Kamera</span></li>
        <li class="reveal"><b>Manuel Hoffstetter</b><span>Regie, zweite Kamera, Spotter, Schnitt</span></li>
      </ul>
      <div class="ctas" style="margin-top:28px"><a class="btn" href="kontakt.html">Mit uns drehen</a></div>
    </div>
    <aside class="panel reveal" aria-label="Partner Flight Club Saar">
      <img src="media/flightclub.png" alt="Flight Club Saar" width="768" height="515">
      <h3 class="h3">Partner: Flight Club Saar e.V.</h3>
      <p>Unser Heimatverein für FPV im Saarland. Hier trainieren unsere Piloten, testen neue Drohnen und bringen Neulingen das Fliegen bei.</p>
      <div class="ctas"><a class="btn" href="flight-club.html">Mehr zum Verein</a></div>
    </aside>
  </div>
</section>
<section class="block process" id="hangar" aria-labelledby="hg-h">
  <div class="wrap">
    <h2 class="h2 reveal" id="hg-h">Der Hangar</h2>
    <p class="intro reveal">Wählt eine Drohnenklasse – rechts seht ihr, was sie im Einsatz filmt.</p>
    <div class="hangar-ui">
      <div class="hangar-list" role="tablist" data-switch="#hscreen">{hbtns}</div>
      <div class="hangar-view">
        <div class="screen" id="hscreen"><video data-auto muted loop playsinline preload="none" poster="media/{h0[2]}.jpg" src="media/{h0[2]}.mp4"></video><div class="nosig" hidden><canvas></canvas><span>Clip folgt</span></div><div class="osd" aria-hidden="true"><div class="tl"><span class="rec">REC <b data-osd-clock>00:00</b></span></div><div class="tr"><span data-osd-volt>25.2V</span></div></div></div>
        <div class="spec" data-fill="spec">{"".join(f"<span>{x}</span>" for x in h0[4].split("|"))}</div>
        <p data-fill="desc">{h0[3]}</p>
      </div>
    </div>
    <div class="count reveal"><b data-count="100" data-suffix="+">100+</b><span>Drohnen und mehr im Hangar – vom Winzling bis zum Kino-Lifter.</span></div>
  </div>
</section>
<section class="block" aria-labelledby="safe-h"><div class="wrap"><h2 class="h2 reveal" id="safe-h">Sicher in der Luft</h2><p class="intro reveal">FPV sieht wild aus. Dahinter steckt Planung.</p>{SAFETY}</div></section>
{band('Lust, mit uns zu fliegen?', 'Erzählt uns von eurem Projekt – wir melden uns mit einer Flugidee.')}
</main>
''' + footer() + scripts()
write('ueber-uns.html', ueber)

# ====================================================================== FLIGHT CLUB
fc = head('Flight Club Saar – Partner von Falcon Eye', 'Der Flight Club Saar e.V. ist der FPV-Verein im Saarland und Partner von Falcon Eye.', 'flight-club') + header('flight-club') + f'''<main id="main">
{phero('turm', 'Flight Club Saar', 'Der FPV-Verein im Saarland – und die Werkstatt, in der unsere Piloten groß geworden sind.', ctas=False)}
<section class="block">
  <div class="wrap reels">
    <div><div class="phone"><div class="screen"><span class="island"></span><div class="feed"><div class="item"><video data-auto muted loop playsinline preload="none" poster="media/r_fcsbanner.jpg" src="media/r_fcsbanner.mp4"></video><p class="cap"><b>Flight Club Saar e.V.</b>Flugtag am Förderturm Göttelborn</p></div></div></div></div></div>
    <div>
      <img src="media/flightclub.png" alt="Flight Club Saar" width="768" height="515" style="width:min(220px,55%);height:auto;margin-bottom:24px">
      <h2 class="h2 reveal">Fliegen lernt man nicht allein.</h2>
      <p class="intro reveal">Der Flight Club Saar e.V. ist einer der größten FPV-Vereine im Saarland. Wir treffen uns zum gemeinsamen Fliegen, Schrauben und Fachsimpeln – und für Flugtage an besonderen Orten: Lost Places, Industriekultur und der Förderturm in Göttelborn.</p>
      <ul class="ticks"><li>Gemeinsame Flugtage an Lost Places und Industrie-Spots</li><li>Eigene Mitgliedskarte für jedes Mitglied</li><li>Hilfe für Einsteiger – vom Simulator bis zum ersten Flug</li><li>Natan Wojtasczyk ist im Vorstand des Vereins</li></ul>
      <div class="ctas"><a class="btn" href="https://flightclub-saar.de/" target="_blank" rel="noopener">Zum Flight Club Saar</a><a class="btn ghost" href="https://www.instagram.com/flightclubsaar" target="_blank" rel="noopener">Instagram @flightclubsaar</a><button class="btn ghost" type="button" data-lb="media/film_goettelborn.mp4" data-title="Flight Club Saar – Förderturm Göttelborn">Vereinsflug ansehen</button></div>
    </div>
  </div>
</section>
<section class="block process">
  <div class="wrap two-col">
    <div><h2 class="h2 reveal">Verein und Firma</h2><p class="intro reveal">Falcon Eye ist das, was passiert, wenn aus dem Hobby im Verein ein Beruf wird. Im Club probieren wir neue Drohnen und Manöver aus – was dort sitzt, fliegen wir später für Kunden.</p></div>
    <div class="panel"><h3 class="h3">Selbst FPV fliegen?</h3><p>Wer das Fliegen lernen will, ist im Flight Club Saar richtig – Erwachsene und Jugendliche.</p><div class="trust" style="grid-template-columns:repeat(3,minmax(0,1fr));border:0"><div style="background:var(--plate);padding:12px 0"><b style="font-size:44px">30 €</b><span>Jahresbeitrag</span></div><div style="background:var(--plate);padding:12px 0"><b style="font-size:44px">20 €</b><span>unter 18 Jahren</span></div><div style="background:var(--plate);padding:12px 0"><b style="font-size:44px">20 €</b><span>einmalige Aufnahme</span></div></div><p>Alles Weitere zur Mitgliedschaft direkt beim Verein.</p><div class="ctas"><a class="btn" href="https://flightclub-saar.de/" target="_blank" rel="noopener">Mitglied werden</a></div></div>
  </div>
</section>
{band('Ihr braucht Piloten für euer Projekt?', 'Dafür ist Falcon Eye da. Schreibt uns, was ihr filmen wollt.')}
</main>
''' + footer() + scripts()
write('flight-club.html', fc)

# ====================================================================== KONTAKT
ANL = [('event', 'Event / Firmenfeier'), ('imagefilm', 'Imagefilm'), ('social', 'Social-Media-Clips'), ('sport', 'Sport / Stadion'), ('hochzeit', 'Hochzeit'), ('immobilie', 'Immobilie / Gewerbe'), ('live', 'Live-Übertragung'), ('sonstiges', 'Etwas anderes')]
chips = ''.join(f'<input type="radio" name="anlass" id="a-{k}" value="{t}" data-key="{k}"><label for="a-{k}">{t}</label>' for k, t in ANL)
kontakt = head('Kontakt – Falcon Eye FPV', 'Dreh bei Falcon Eye anfragen: Formular, WhatsApp, Telefon oder E-Mail. Antwort mit Flugidee und Festpreis.', 'kontakt') + header('kontakt').replace('<div class="dock"', '<div class="dock" hidden') + f'''<main id="main">
<section class="block" style="padding-top:calc(130px + var(--safe-top))">
  <div class="wrap mission-grid">
    <div>
      <p class="kicker">Mission planen</p>
      <h1 class="h2">Dreh anfragen</h1>
      <p class="intro">Drei kurze Schritte. Ihr bekommt eine Flugidee und einen Festpreis – kostenlos und unverbindlich.</p>
      <ul class="promise"><li>Antwort meist am selben Werktag</li><li>Festpreis vor dem Dreh</li><li>Nutzungsrechte schriftlich im Vertrag</li></ul>
      <div class="direct">
        <div class="ch ch2"><div><span>WhatsApp &amp; Telefon</span><b>{PHONE_HUMAN}</b></div><div class="chb"><a class="btn wa sm" href="{WA}" target="_blank" rel="noopener">{WA_ICON}WhatsApp</a><a class="btn ghost sm" href="tel:+4915156743442">Anrufen</a></div></div>
        <div class="ch"><div><span>E-Mail</span><b>info@falcon-eye.de</b></div><button class="btn ghost sm" type="button" data-copy="info@falcon-eye.de">Adresse kopieren</button></div>
      </div>
    </div>
    <form class="plan" id="planner" novalidate>
      <div class="steps-ind" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
      <fieldset class="pstep"><legend>1. Worum geht's?</legend><div class="chips">{chips}</div></fieldset>
      <div class="pstep" hidden>
        <p class="lbl" style="font-weight:700;margin:0">2. Wo und wann?</p>
        <div class="f2"><div><label class="lbl" for="ort">Ort</label><input type="text" id="ort" name="ort" placeholder="z. B. Saarbrücken, Halle am Hafen"></div>
        <div><label class="lbl" for="datum">Datum</label><input type="date" id="datum" name="datum"></div></div>
        <div style="margin-top:16px"><label class="lbl" for="umfang">Umfang</label><select id="umfang" name="umfang"><option>Noch unklar</option><option>Ein paar Social-Media-Clips</option><option>Imagefilm (1–2 Minuten)</option><option>Ganzer Event-Tag</option><option>Luftbilder / Fotos</option><option>Live-Übertragung</option></select></div>
        <div class="ctas" style="margin-top:20px"><button class="btn ghost" type="button" data-back>Zurück</button><button class="btn" type="button" data-next>Weiter</button></div>
      </div>
      <div class="pstep" hidden>
        <p class="lbl" style="font-weight:700;margin:0">3. Wer seid ihr?</p>
        <div><label class="lbl" for="msg">Was soll man im Film sehen?</label><textarea id="msg" name="msg" placeholder="Erzählt kurz von eurem Ort, Event oder Produkt."></textarea></div>
        <div class="f2" style="margin-top:16px"><div><label class="lbl" for="name">Name</label><input type="text" id="name" name="name" autocomplete="name"></div>
        <div><label class="lbl" for="kontakt">E-Mail oder Telefon</label><input type="text" id="kontakt" name="kontakt" autocomplete="email"></div></div>
        <div class="ctas" style="margin-top:20px"><button class="btn ghost" type="button" data-back>Zurück</button><button class="btn" type="submit">Anfrage senden</button></div><input type="checkbox" name="botcheck" tabindex="-1" autocomplete="off" style="display:none">
        <p class="fine" style="margin-top:14px">Eure Angaben nutzen wir nur, um euch zu antworten. Mehr in der <a href="datenschutz.html">Datenschutzerklärung</a>.</p>
      </div>
      <div class="pstep sent" hidden>
        <p class="ok-sent" hidden><b>Danke, eure Anfrage ist bei uns!</b> Wir melden uns meist noch am selben Werktag. Wenn es eilt: schickt sie zusätzlich per WhatsApp.</p>
        <p class="ok-manual"><b>Eure Anfrage ist fertig.</b> Schickt sie uns mit einem Klick per WhatsApp oder E-Mail.</p>
        <pre id="planText"></pre>
        <div class="ctas"><a class="btn wa" id="waSend" href="#" target="_blank" rel="noopener">{WA_ICON}Per WhatsApp senden</a><a class="btn" id="mailSend" href="#">Per E-Mail senden</a><button class="btn ghost" type="button" id="planCopy" data-copy="">Text kopieren</button></div>
        <p class="fine">Falls sich nichts öffnet: Text kopieren und an info@falcon-eye.de schicken.</p>
        <div><button class="btn ghost sm" type="button" data-back>Angaben ändern</button></div>
      </div>
      <p class="err" id="planErr" role="alert"></p>
    </form>
  </div>
</section>
<section class="block process" aria-labelledby="gebiet-h">
  <div class="wrap two-col">
    <div><h2 class="h2 reveal" id="gebiet-h">Wo wir fliegen</h2><p class="intro reveal">Von Saarbrücken aus im ganzen Saarland und der Region – Saarlouis, Neunkirchen, Homburg, Trier, Kaiserslautern, Luxemburg und Lothringen. Für besondere Projekte auch weiter weg.</p></div>
    <div class="panel"><h3 class="h3">Falcon Eye</h3><p>Natan Wojtasczyk<br>Römerstr. 25<br>66125 Saarbrücken</p><p>Telefon {PHONE_HUMAN}<br>info@falcon-eye.de</p></div>
  </div>
</section>
</main>
''' + footer() + scripts()
write('kontakt.html', kontakt)

# ====================================================================== IMPRESSUM
imp = head('Impressum – Falcon Eye', 'Impressum von Falcon Eye, Natan Wojtasczyk, Saarbrücken.', 'legal') + header('legal') + f'''<main id="main" class="legal"><div class="wrap">
<h1>Impressum</h1>
<p class="stand">Stand: Oktober 2026</p>
<h2>Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</h2>
<p>Falcon Eye<br>Inhaber: Natan Wojtasczyk<br>Römerstr. 25<br>66125 Saarbrücken<br>Deutschland</p>
<h2>Kontakt</h2>
<p>Telefon: {PHONE_HUMAN}<br>E-Mail: info@falcon-eye.de</p>
<h2>Umsatzsteuer-ID</h2>
<p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE320387908</p>
<h2>Redaktionell verantwortlich gemäß § 18 Abs. 2 MStV</h2>
<p>Natan Wojtasczyk, Römerstr. 25, 66125 Saarbrücken</p>
<h2>Verbraucherstreitbeilegung</h2>
<p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).</p>
<h2>Haftung für Inhalte</h2>
<p>Wir erstellen die Inhalte dieser Seiten mit Sorgfalt. Als Diensteanbieter sind wir für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich. Für fremde Informationen, die wir nur übermitteln oder speichern, gelten die Haftungsregeln der Art. 4 bis 6 der Verordnung (EU) 2022/2065 (Digital Services Act). Sobald wir von einer Rechtsverletzung erfahren, entfernen wir die betreffenden Inhalte umgehend.</p>
<h2>Haftung für Links</h2>
<p>Unsere Seiten verlinken auf externe Websites, etwa Instagram, YouTube, Facebook, WhatsApp und den Flight Club Saar. Auf deren Inhalte haben wir keinen Einfluss; verantwortlich ist der jeweilige Anbieter. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar. Werden uns solche bekannt, entfernen wir den Link.</p>
<h2>Urheberrecht</h2>
<p>Alle Videos, Fotos und Texte auf dieser Website stammen von Falcon Eye und sind urheberrechtlich geschützt. Gezeigte Kundenprojekte veröffentlichen wir mit vertraglich vereinbarter Erlaubnis. Eine Nutzung außerhalb dieser Website ist nur mit unserer schriftlichen Zustimmung erlaubt. Die Marken und Logos der genannten Kunden gehören den jeweiligen Unternehmen.</p>
</div></main>
''' + footer() + scripts()
write('impressum.html', imp)

# ====================================================================== DATENSCHUTZ
ds = head('Datenschutz – Falcon Eye', 'Datenschutzerklärung von Falcon Eye: keine Cookies, kein Tracking, Schriften lokal.', 'legal') + header('legal') + f'''<main id="main" class="legal"><div class="wrap">
<h1>Datenschutz</h1>
<p class="stand">Stand: Oktober 2026</p>
<h2>1. Das Wichtigste in Kürze</h2>
<p>Diese Website setzt keine Cookies, nutzt kein Tracking und keine Werbung. Schriften, Videos, Vorschaubilder und Skripte werden zusammen mit der Website ausgeliefert – beim Besuch werden keine Daten an Google, YouTube, Meta oder andere Dritte übertragen, nur an unseren Hoster GitHub (siehe Abschnitt 3). Daten verarbeiten wir nur, wenn ihr uns kontaktiert, etwa über das Anfrageformular (Abschnitt 5).</p>
<h2>2. Verantwortlicher</h2>
<p>Natan Wojtasczyk, Falcon Eye, Römerstr. 25, 66125 Saarbrücken<br>Telefon: {PHONE_HUMAN}, E-Mail: info@falcon-eye.de</p>
<h2>3. Hosting über GitHub Pages</h2>
<p>Diese Website wird über GitHub Pages ausgeliefert. Anbieter ist die GitHub B.V., Prins Bernhardplein 200, 1097 JB Amsterdam, Niederlande, eine Tochter der GitHub, Inc., 88 Colin P. Kelly Jr. St., San Francisco, CA 94107, USA. Beim Aufruf der Seite verarbeitet GitHub technisch notwendige Daten wie eure IP-Adresse, Datum und Uhrzeit, aufgerufene Seite und Browser. GitHub speichert die IP-Adressen von Besuchern aus Sicherheitsgründen, auch wenn ihr kein GitHub-Konto habt. Dabei können Daten in die USA übertragen werden; GitHub ist nach dem EU-US Data Privacy Framework zertifiziert, das ein angemessenes Datenschutzniveau sicherstellt (Art. 45 DSGVO). Rechtsgrundlage ist unser berechtigtes Interesse an einer sicheren und stabilen Auslieferung der Website (Art. 6 Abs. 1 lit. f DSGVO). Mehr dazu in der Datenschutzerklärung von GitHub: docs.github.com/site-policy/privacy-policies.</p>
<h2>4. Verschlüsselung</h2>
<p>Die Verbindung zu dieser Website ist per TLS verschlüsselt. Ihr erkennt das am Schloss-Symbol und an „https://“ in der Adresszeile.</p>
<h2>5. Anfrageformular</h2>
<p>Wenn ihr das Formular auf der Kontaktseite absendet, werden eure Angaben (Anlass, Ort, Datum, Umfang, Nachricht, Name sowie E-Mail-Adresse oder Telefonnummer) über den Formulardienst Web3Forms an unser Postfach info@falcon-eye.de weitergeleitet. Anbieter ist Web3Creative mit Sitz in Indien; der Dienst nutzt Server von Amazon Web Services, Cloudflare und Hetzner, sodass Daten auch außerhalb der EU verarbeitet werden können. Grundlage dafür sind die EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO) im Auftragsverarbeitungsvertrag von Web3Forms. Laut Web3Forms werden Übermittlungen höchstens drei Jahre gespeichert; Details unter web3forms.com/privacy. Rechtsgrundlage ist die Beantwortung eurer Anfrage bzw. die Anbahnung eines Auftrags (Art. 6 Abs. 1 lit. b DSGVO). Wer das nicht möchte, kann die Anfrage stattdessen per WhatsApp oder E-Mail schicken – das Formular bietet dafür ebenfalls Knöpfe an.</p>
<h2>6. Kontakt per E-Mail und Telefon</h2>
<p>Wenn ihr uns schreibt oder anruft, verarbeiten wir eure Angaben (z. B. Name, Kontaktdaten, Inhalt der Anfrage), um die Anfrage zu beantworten und ein Angebot zu erstellen (Art. 6 Abs. 1 lit. b DSGVO). Kommt kein Auftrag zustande, löschen wir die Daten nach Abschluss der Anfrage, spätestens nach 12 Monaten. Bei einem Auftrag gelten die gesetzlichen Aufbewahrungsfristen (bis zu 10 Jahre nach HGB und AO).</p>
<h2>7. Kontakt per WhatsApp</h2>
<p>Die WhatsApp-Schaltflächen sind einfache Links. Erst wenn ihr darauf tippt, öffnet sich WhatsApp, und es gelten die Datenschutzbestimmungen der WhatsApp Ireland Ltd. (Meta). Dabei können Daten in die USA übertragen werden. Wenn ihr das nicht möchtet, nutzt bitte E-Mail oder Telefon.</p>
<h2>8. Links zu sozialen Netzwerken</h2>
<p>Instagram, YouTube, Facebook und die Website des Flight Club Saar sind nur verlinkt, nicht eingebunden. Das gilt auch für die Filme im Bereich „Mehr Kino“: Die Vorschaubilder liegen bei uns, das Video startet erst auf YouTube. Erst beim Anklicken verlasst ihr unsere Seite; dann gelten die Datenschutzbestimmungen des jeweiligen Anbieters.</p>
<h2>9. Personen in unseren Videos</h2>
<p>Die gezeigten Aufnahmen stammen aus Aufträgen unserer Kunden, die der Veröffentlichung zugestimmt haben. Wenn ihr euch in einem Video erkennt und nicht gezeigt werden wollt, schreibt uns – wir entfernen oder ändern die Szene.</p>
<h2>10. Eure Rechte</h2>
<p>Ihr habt das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21 DSGVO). Eine Nachricht an info@falcon-eye.de genügt.</p>
<h2>11. Beschwerderecht</h2>
<p>Ihr könnt euch bei einer Datenschutz-Aufsichtsbehörde beschweren, zum Beispiel beim Unabhängigen Datenschutzzentrum Saarland, Fritz-Dobisch-Straße 12, 66111 Saarbrücken.</p>
</div></main>
''' + footer() + scripts()
write('datenschutz.html', ds)

print('built', sorted(f for f in os.listdir(OUT) if f.endswith('.html')))

# ---------------- artifact preview: home without document wrapper
s = open(OUT + 'index.html').read()
s = s.replace('<!doctype html>\n<html lang="de">\n<head>\n', '')
s = re.sub(r'<meta charset="utf-8">\n<meta name="viewport"[^>]*>\n', '', s)
s = s.replace('</head>\n', '').replace('</body>\n</html>\n', '')
s = re.sub(r'<body class="([^"]*)">\n', r'<div hidden data-bodyclass="\1"></div><script>document.body.classList.add("\1")</script>\n', s)
s = s.replace('<title>Falcon Eye – FPV-Drohnenfilme im Saarland</title>', '<title>Falcon Eye Website</title>')
open(OUT + 'preview.html', 'w').write(s)
print('preview ok')
