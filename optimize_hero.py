from PIL import Image
import os

src = r'D:/vibecoderproject/cupcafe-production/public/hero.png'
webp = r'D:/vibecoderproject/cupcafe-production/public/hero.webp'
webp_lg = r'D:/vibecoderproject/cupcafe-production/public/hero-lg.webp'
webp_mobile = r'D:/vibecoderproject/cupcafe-production/public/hero-mobile.webp'

img = Image.open(src)
print(f'Original: {img.size}, {os.path.getsize(src)/1024/1024:.1f}MB')

img.save(webp, 'WEBP', quality=80)
print(f'WebP q80: {os.path.getsize(webp)/1024:.0f}KB')

if img.width > 1200:
    r = 1200 / img.width
    thumb = img.resize((1200, int(img.height * r)), Image.LANCZOS)
    thumb.save(webp_lg, 'WEBP', quality=82)
    print(f'WebP 1200px: {os.path.getsize(webp_lg)/1024:.0f}KB')

if img.width > 600:
    r = 600 / img.width
    thumb = img.resize((600, int(img.height * r)), Image.LANCZOS)
    thumb.save(webp_mobile, 'WEBP', quality=80)
    print(f'WebP 600px: {os.path.getsize(webp_mobile)/1024:.0f}KB')

# keep original for fallback
print('Done!')
