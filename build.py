"""Package the existing static site, preserving extensionless URLs."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit
import shutil,re
root=Path(__file__).resolve().parent
out=root/'dist'
if out.exists(): shutil.rmtree(out)
out.mkdir()
# Preserve legacy routes and assets while excluding archived site copies and Git files.
for f in root.glob('*.html'): shutil.copy2(f,out/f.name)
for f in root.glob('*.css'): shutil.copy2(f,out/f.name)
for name in ('img','images','css','js'):
 shutil.copytree(root/name,out/name)
for name in ('robots.txt','sitemap.xml','_redirects'): shutil.copy2(root/name,out/name)
# Relative assets must resolve on both /about and /about/.
for f in out.glob('*.html'):
 s=f.read_text()
 s=re.sub(r'((?:href|src)=")(?![a-z]+:|/|#)([^\"]+)',r'\1/\2',s)
 f.write_text(s)
 if f.stem!='index':
  d=out/f.stem;d.mkdir();(d/'index.html').write_text(s)
class Check(HTMLParser):
 def handle_starttag(self,tag,attrs):
  for k,v in attrs:
   if k not in ('src','href') or not v or v.startswith(('#','data:','mailto:','tel:','http:','https:')): continue
   path=urlsplit(v).path.lstrip('/')
   if path and not (out/path).exists(): raise ValueError(f'Missing local link: {v}')
for name in ('index','about','contact','column','column-01','privacy','thanks'):
 s=(out/f'{name}.html').read_text();Check().feed(s)
 assert s.count('<main ')==1 and s.count('</main>')==1,name
 assert 'contact-dock' in s and 'navigation.js' in s,name
 assert 'polish.css' not in s,name
print('Build passed: 7 primary pages, local links and shared navigation verified.')
