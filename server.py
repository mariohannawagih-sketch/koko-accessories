r"""
KOKO ACCESSORIES - LOCAL AUTO-SAVE SERVER
Runs locally from D:\projects\koko accessories
Saves any changes made in admin.html directly to:
- D:\projects\koko accessories\products.js
- D:\projects\koko accessories\images\
"""

import http.server
import json
import os
import re
import sys
import webbrowser
import base64
import time

PORT = 5500
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class KokoAutoSaveHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, HEAD')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        if self.path == '/api/health':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(b'{"status":"ok","autoSave":true}')
            return
        super().do_GET()

    def do_POST(self):
        if self.path == '/api/save':
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            try:
                data = json.loads(body.decode('utf-8'))
                products_file = os.path.join(DIRECTORY, 'products.js')
                images_dir = os.path.join(DIRECTORY, 'images')
                os.makedirs(images_dir, exist_ok=True)

                # Process base64 uploaded images (multi-photo support for front, back, etc.)
                for prod in data.get('products', []):
                    raw_images = prod.get('images', [])
                    if not raw_images and prod.get('image'):
                        raw_images = [prod.get('image')]
                    
                    processed_images = []
                    for idx, img_val in enumerate(raw_images):
                        if img_val and isinstance(img_val, str) and img_val.startswith('data:image'):
                            match = re.match(r'data:image/(\w+);base64,(.+)', img_val)
                            if match:
                                ext = match.group(1).lower()
                                if ext == 'jpeg':
                                    ext = 'jpg'
                                raw_b64 = match.group(2)
                                safe_name = re.sub(r'[^a-zA-Z0-9]', '_', prod.get('id', 'item'))
                                filename = f"{safe_name}_{int(time.time())}_{idx}.{ext}"
                                filepath = os.path.join(images_dir, filename)
                                with open(filepath, 'wb') as img_f:
                                    img_f.write(base64.b64decode(raw_b64))
                                processed_images.append(f"images/{filename}")
                        elif img_val and isinstance(img_val, str):
                            # Already saved local path or URL
                            processed_images.append(img_val)
                    
                    if processed_images:
                        prod['images'] = processed_images
                        prod['image'] = processed_images[0]
                    elif prod.get('image'):
                        prod['images'] = [prod.get('image')]

                # Generate formatted products.js content
                brands_json = json.dumps(data.get('brands', []), indent=2)
                cats_json = json.dumps(data.get('categories', []), indent=2)
                prods_json = json.dumps(data.get('products', []), indent=2)

                content = f"""/**
 * KOKO ACCESSORIES - CATALOG DATABASE
 * Auto-saved directly to: D:\\projects\\koko accessories\\products.js
 * Last updated: {time.strftime('%Y-%m-%d %H:%M:%S')}
 */

const DEFAULT_CAR_BRANDS = {brands_json};

const DEFAULT_CATEGORIES = {cats_json};

const DEFAULT_PRODUCTS = {prods_json};

function getCatalogData() {{
  try {{
    const saved = localStorage.getItem('koko_catalog_data');
    if (saved) {{
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {{
        return {{
          brands: DEFAULT_CAR_BRANDS,
          categories: DEFAULT_CATEGORIES,
          products: parsed
        }};
      }}
      if (parsed && typeof parsed === 'object') {{
        return {{
          brands: (Array.isArray(parsed.brands) && parsed.brands.length > 0) ? parsed.brands : DEFAULT_CAR_BRANDS,
          categories: (Array.isArray(parsed.categories) && parsed.categories.length > 0) ? parsed.categories : DEFAULT_CATEGORIES,
          products: Array.isArray(parsed.products) ? parsed.products : DEFAULT_PRODUCTS
        }};
      }}
    }}
  }} catch (e) {{
    console.error("Error reading localStorage:", e);
  }}
  return {{
    brands: DEFAULT_CAR_BRANDS,
    categories: DEFAULT_CATEGORIES,
    products: DEFAULT_PRODUCTS
  }};
}}

function saveCatalogData(data) {{
  try {{
    localStorage.setItem('koko_catalog_data', JSON.stringify(data));
  }} catch (e) {{
    console.error("Error saving to localStorage:", e);
  }}
}}
"""
                with open(products_file, 'w', encoding='utf-8') as f:
                    f.write(content)

                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                response = {
                    'status': 'ok',
                    'message': 'Successfully saved directly to products.js and images/ on D: drive',
                    'products': data.get('products', [])
                }
                self.wfile.write(json.dumps(response).encode('utf-8'))
                print(f"[AUTO-SAVE SUCCESS] Changes written to {products_file}")

            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'status': 'error', 'error': str(e)}).encode('utf-8'))
                print(f"[AUTO-SAVE ERROR] {e}")
        else:
            self.send_response(404)
            self.end_headers()

if __name__ == '__main__':
    server_address = ('', PORT)
    httpd = http.server.ThreadingHTTPServer(server_address, KokoAutoSaveHandler)
    print(f"======================================================")
    print(f"  KOKO ACCESSORIES - AUTO-SAVE SERVER IS ACTIVE")
    print(f"  Saving changes automatically to: D:\\projects\\koko accessories")
    print(f"  Opening Admin Panel at: http://localhost:{PORT}/admin.html")
    print(f"======================================================")
    
    # Auto-open Admin in browser
    webbrowser.open(f"http://localhost:{PORT}/admin.html")
    
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
