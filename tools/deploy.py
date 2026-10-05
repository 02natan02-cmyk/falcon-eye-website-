import os, shutil, re, json
S='./build/'; D='./'  # S = Ausgabe von build.py, D = dieses Repository
for sub in ['assets','fonts','js','media','seq','seq2']:
    if os.path.exists(D+sub): shutil.rmtree(D+sub)
    shutil.copytree(S+sub, D+sub)
pages=[f for f in os.listdir(S) if f.endswith('.html') and f!='preview.html']
for f in pages:
    h=open(S+f).read()
    url='https://falcon-eye.de/'+('' if f=='index.html' else f)
    h=h.replace('<meta property="og:image" content="media/hero.jpg">',f'<meta property="og:image" content="https://falcon-eye.de/media/hero.jpg">\n<meta property="og:url" content="{url}">\n<link rel="canonical" href="{url}">')
    if f=='index.html':
        ld={"@context":"https://schema.org","@type":"LocalBusiness","name":"Falcon Eye","description":"FPV-Drohnenfilme aus dem Saarland: Imagefilme, Events, Sport, Social-Media-Clips.","url":"https://falcon-eye.de/","telephone":"+49 151 56743442","email":"info@falcon-eye.de","image":"https://falcon-eye.de/media/hero.jpg","logo":"https://falcon-eye.de/media/logo.png","address":{"@type":"PostalAddress","streetAddress":"Römerstr. 25","postalCode":"66125","addressLocality":"Saarbrücken","addressRegion":"Saarland","addressCountry":"DE"},"areaServed":"Saarland","founder":"Natan Wojtasczyk","sameAs":["https://www.instagram.com/falconeyesaar","https://www.youtube.com/channel/UCSpNx9Xw74DpDg3IRXK67fw","https://www.facebook.com/profile.php?id=61559258413801"]}
        h=h.replace('</head>','<script type="application/ld+json">'+json.dumps(ld,ensure_ascii=False)+'</script>\n</head>')
    open(D+f,'w').write(h)
open(D+'CNAME','w').write('falcon-eye.de\n')
open(D+'.nojekyll','w').write('')
open(D+'robots.txt','w').write('User-agent: *\nAllow: /\nSitemap: https://falcon-eye.de/sitemap.xml\n')
sm='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+''.join(f'  <url><loc>https://falcon-eye.de/{"" if p=="index.html" else p}</loc></url>\n' for p in sorted(pages))+'</urlset>\n'
open(D+'sitemap.xml','w').write(sm)
# 404: simple page reusing kontakt layout
k=open(S+'impressum.html').read()
a=k.index('<main id="main"'); b=k.index('</main>')+7
k=k[:a]+'<main id="main" class="legal"><div class="wrap"><h1>Notlandung</h1><p>Diese Seite gibt es nicht (mehr). Zurück zur <a href="/">Startseite</a> oder direkt einen <a href="/kontakt.html">Dreh anfragen</a>.</p></div></main>'+k[b:]
k=k.replace('<title>Impressum – Falcon Eye</title>','<title>Seite nicht gefunden – Falcon Eye</title>')
k=re.sub(r'(href|src)="(?!https?:|/|#|mailto|tel)([^"]+)"',r'\1="/\2"',k)
open(D+'404.html','w').write(k)
print(sorted(os.listdir(D)))
