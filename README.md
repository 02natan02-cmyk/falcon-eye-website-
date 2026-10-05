# falcon-eye.de – Website von Falcon Eye

Stand: 5. Oktober 2026. Erstellt von Claude (Anthropic) im Auftrag von Natan Wojtasczyk.

Diese Datei erklärt, wo die Website liegt, wer Zugriff hat und wie man sie ändert – ohne Vorwissen.

---

## 1. Auf einen Blick

| Was | Wo |
|---|---|
| Live-Adresse | https://falcon-eye.de (auch www.falcon-eye.de) |
| Code und Dateien | GitHub-Repository **02natan02-cmyk/falcon-eye-website-** – https://github.com/02natan02-cmyk/falcon-eye-website- |
| GitHub-Konto (Inhaber) | **02natan02-cmyk** (Natan Wojtasczyk) |
| Hosting | **GitHub Pages**, kostenlos. Einstellungen: Repository → Settings → Pages |
| Domain falcon-eye.de | **IONOS** (Konto von Natan, Vertrag „IONOS Domain“) |
| DNS-Einstellungen | IONOS → Domains & SSL → falcon-eye.de → DNS |
| E-Mail info@falcon-eye.de | weiterhin bei **IONOS** (unverändert) |
| Kosten Website | 0 € (GitHub Pages). Nur die Domain kostet bei IONOS. |

Zugangsdaten, Passwörter und Kundennummern stehen hier bewusst **nicht** drin – das Repository ist öffentlich (nötig für kostenloses GitHub Pages). Sie liegen bei Natan.

---

## 2. Wie die Seite online kommt

1. Alle Dateien in diesem Repository (Branch `main`, Hauptordner) sind die fertige Website.
2. GitHub Pages veröffentlicht bei jeder Änderung an `main` automatisch neu (dauert 1–2 Minuten).
3. Die Datei `CNAME` (Inhalt: `falcon-eye.de`) sagt GitHub, unter welcher Domain die Seite läuft. **Nicht löschen.**
4. Die Datei `.nojekyll` schaltet die GitHub-Umwandlung ab, damit alle Ordner 1:1 ausgeliefert werden. **Nicht löschen.**

### DNS bei IONOS (so muss es stehen)

| Typ | Hostname | Wert |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | 02natan02-cmyk.github.io |
| MX, TXT (SPF), CNAME (DKIM, DMARC, autodiscover) | – | **E-Mail von IONOS – nicht anfassen** |

HTTPS: Zertifikat von GitHub ausgestellt, „Enforce HTTPS“ ist aktiv (seit 5. Oktober 2026). http und www leiten automatisch auf https://falcon-eye.de um.

Alte IONOS-Adresse: `defaultsite.html` und `defaultsite/` leiten Besucher, deren Browser noch die alte IONOS-Weiterleitung gespeichert hat, auf die Startseite. Kann ab 2027 gelöscht werden.

---

## 3. Ordner und Dateien

```
index.html          Startseite (Falkenauge-Einstieg, Durchflüge, Projekt-Auswahl, Reels, Kino)
projekte.html       11 Fallstudien mit Filter
leistungen.html     Leistungen + häufige Fragen
ueber-uns.html      Crew, Hangar, Sicherheit
flight-club.html    Partner Flight Club Saar e.V.
kontakt.html        Anfrage-Planer (WhatsApp / E-Mail), Kontaktdaten
impressum.html      Impressum (DDG, MStV)
datenschutz.html    Datenschutzerklärung (GitHub Pages, keine Cookies)
404.html            Fehlerseite
assets/site.css     Design für alle Seiten (Farben, Schriften, Layout)
assets/site.js      Interaktionen für alle Seiten (Menü, Buchungsleiste, Videos, Formular, Durchflüge)
assets/home.js      Nur Startseite: Falkenauge, Projekt-Auswahl, Reels-Handy
js/                 Bibliotheken: GSAP + ScrollTrigger (Animation), Lenis (weiches Scrollen), falcon-path.js (Logo als Vektor)
fonts/              Schriften lokal (Big Shoulders Display, Archivo, Share Tech Mono) – keine Google-Verbindung
media/              Videos (.mp4), Standbilder (.jpg), Logo (logo.png, bird.png, wordmark.png)
seq/  seq2/         Einzelbilder für die zwei Scroll-Durchflüge (Dive / Polizeipräsidium)
tools/              Bau-Skripte (siehe Abschnitt 5) – nicht Teil der sichtbaren Seite
robots.txt, sitemap.xml   für Google
```

Keine Datenbank, kein Server, kein CMS. Alles sind statische Dateien.

---

## 4. Häufige Änderungen

### Text ändern
Die passende `.html`-Datei auf GitHub öffnen → Stift-Symbol („Edit“) → Text ändern → „Commit changes“. Nach 1–2 Minuten ist es live.
Wichtig: Kopfzeile, Menü und Fußzeile stehen in jeder Seite. Wer dort etwas ändert, sollte es in allen Seiten ändern – oder über das Bau-Skript (Abschnitt 5).

### Video austauschen
Neues Video mit **gleichem Dateinamen** in `media/` hochladen (GitHub: Ordner öffnen → „Add file“ → „Upload files“). Empfehlung:
- MP4 (H.264), ohne Ton, 960×540 Pixel, 4–8 Sekunden, unter 3 MB
- Passendes Standbild `.jpg` mit gleichem Namen (z. B. `nacht.mp4` + `nacht.jpg`)
- GitHub erlaubt max. 100 MB pro Datei; für die Seite sollten Videos deutlich kleiner sein.

### Telefonnummer / E-Mail ändern
In allen `.html`-Dateien suchen und ersetzen: `0151 56743442`, `4915156743442` (WhatsApp-Links), `info@falcon-eye.de`.
Außerdem in `assets/site.js` die Zeile `const PHONE = '4915156743442';`.

### Farben ändern
`assets/site.css`, ganz oben im Block `:root` – z. B. `--signal:#ffd000;` (Gelb) und `--steel:#161b21;` (Hintergrund).

---

## 5. Bau-Skripte (für Programmierer)

Die HTML-Seiten werden aus `tools/build.py` erzeugt (Python 3, keine Abhängigkeiten). Dort stehen alle Inhalte zentral: Projekte (`CASES`), Leistungen (`SVC`), FAQ, Kunden-Laufband (`TICKER`), YouTube-Filme (`KINO`), Hangar, Impressum, Datenschutz.

Ablauf:
1. In `tools/build.py` ganz oben `OUT` auf einen Arbeitsordner setzen, in dem `assets/`, `fonts/`, `js/`, `media/`, `seq/`, `seq2/` liegen.
2. `python3 tools/build.py` – erzeugt alle Seiten.
3. `python3 tools/deploy.py` – ergänzt SEO-Angaben (canonical, Open Graph, Firmendaten), `CNAME`, `robots.txt`, `sitemap.xml`, `404.html`.
4. Ergebnis in dieses Repository kopieren und auf `main` pushen.

Videos wurden mit `ffmpeg` geschnitten, mit `vidstab` stabilisiert und aufgehellt. Durchflug-Einzelbilder: `ffmpeg -i clip.mp4 -vf fps=14,scale=1152:648 -q:v 10 seq/f%03d.jpg`.

Wer nur kleine Änderungen macht, kann die `.html`-Dateien auch direkt bearbeiten – dann aber `tools/build.py` nicht mehr ausführen, sonst werden die Änderungen überschrieben (oder sie dort nachtragen).

---

## 6. Zugriffe und Konten

| Dienst | Konto | Wofür |
|---|---|---|
| GitHub | 02natan02-cmyk | Code, Hosting (GitHub Pages) |
| GitHub-App „Claude“ | auf 02natan02-cmyk installiert | Claude darf das Repository aktualisieren. Entziehen: GitHub → Settings → Applications → Claude |
| IONOS | Konto von Natan (Kundennummer im IONOS-Login) | Domain falcon-eye.de, DNS, E-Mail-Postfach |
| Instagram | @falconeyesaar | verlinkt |
| YouTube | Falcon Eye und @Booyaka | verlinkt (Bereich „Mehr Kino“) |
| Facebook | Seite Falcon Eye | verlinkt |

Einen Programmierer hinzufügen: GitHub → Repository → Settings → Collaborators → „Add people“.

---

## 7. Rechtliches

- Impressum und Datenschutz liegen in `impressum.html` und `datenschutz.html` (Stand Oktober 2026).
- Keine Cookies, kein Tracking, keine eingebetteten Fremd-Inhalte. Schriften und Videos werden mit der Seite ausgeliefert.
- Hoster: GitHub B.V. / GitHub, Inc. (EU-US Data Privacy Framework) – steht in der Datenschutzerklärung.
- Gezeigte Kundenprojekte: Nutzungsrechte laut Kundenverträgen.
- Bei Änderungen am Angebot (z. B. Kontaktformular mit Server, Google Analytics, YouTube-Einbettung) muss die Datenschutzerklärung angepasst werden.

---

## 8. Offene Punkte

- IONOS: „MyWebsite Now Starter“ (zum 21.12.2026) und „marketingRadar“ (zum 25.11.2026) kündigen. Der Vertrag „IONOS Domain“ bleibt, denn daran hängen Domain und E-Mail-Postfach.
- Neue Clips: Ordner `OneDrive\Falcon Eye\_Website_Neu\Neue_Clips` – Lambert Reisen, Addicted to Dance 2026, Hochzeit, Motocross, Norwegen, Asien-Reisen.
