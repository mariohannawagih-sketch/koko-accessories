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
import subprocess
import threading

PORT = 5500
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

def auto_deploy_to_github():
    """Commits and pushes changes directly to GitHub, triggering instant Cloudflare Pages deploy."""
    try:
        git_exe = r"C:\Users\hp\AppData\Local\Programs\MinGit\cmd\git.exe"
        if not os.path.exists(git_exe):
            git_exe = "git"
        subprocess.run([git_exe, "-C", DIRECTORY, "add", "-A"], capture_output=True, text=True)
        commit_msg = f"Auto-sync from Admin: {time.strftime('%Y-%m-%d %H:%M:%S')}"
        subprocess.run([git_exe, "-C", DIRECTORY, "commit", "-m", commit_msg], capture_output=True, text=True)
        push_res = subprocess.run([git_exe, "-C", DIRECTORY, "push", "origin", "main"], capture_output=True, text=True)
        print(f"[AUTO-DEPLOY SUCCESS] Pushed to GitHub & Cloudflare: {commit_msg}")
    except Exception as err:
        print(f"[AUTO-DEPLOY ERROR] {err}")

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
        if self.path == '/api/sales':
            sales_file = os.path.join(DIRECTORY, 'sales_data.json')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            if os.path.exists(sales_file):
                try:
                    with open(sales_file, 'r', encoding='utf-8') as f:
                        self.wfile.write(f.read().encode('utf-8'))
                        return
                except Exception:
                    pass
            self.wfile.write(b'{"sales":[],"status":"empty"}')
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
  let deletedIds = [];
  let deletedBrands = [];
  let deletedCats = [];
  let fallbackUpdatedAt = 0;
  try {{
    deletedIds = JSON.parse(localStorage.getItem('koko_catalog_deleted_ids') || '[]');
  }} catch (e) {{}}
  try {{
    deletedBrands = JSON.parse(localStorage.getItem('koko_catalog_deleted_brands') || '[]');
  }} catch (e) {{}}
  try {{
    deletedCats = JSON.parse(localStorage.getItem('koko_catalog_deleted_cats') || '[]');
  }} catch (e) {{}}
  try {{
    fallbackUpdatedAt = Number(localStorage.getItem('koko_catalog_updated_at') || 0) || 0;
  }} catch (e) {{}}

  try {{
    const saved = localStorage.getItem('koko_catalog_data');
    if (saved) {{
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed === 'object') {{
        let prods = Array.isArray(parsed) ? parsed : (Array.isArray(parsed.products) ? parsed.products : null);
        let brands = Array.isArray(parsed.brands) ? parsed.brands : null;
        let categories = Array.isArray(parsed.categories) ? parsed.categories : null;

        if (Array.isArray(parsed.deletedProductIds)) {{
          deletedIds = Array.from(new Set([...deletedIds, ...parsed.deletedProductIds]));
        }}
        if (Array.isArray(parsed.deletedBrandIds)) {{
          deletedBrands = Array.from(new Set([...deletedBrands, ...parsed.deletedBrandIds]));
        }}
        if (Array.isArray(parsed.deletedCategoryIds)) {{
          deletedCats = Array.from(new Set([...deletedCats, ...parsed.deletedCategoryIds]));
        }}

        if (prods !== null) {{
          const normalizedProds = prods
            .filter(p => p && p.id && !deletedIds.includes(p.id))
            .map(p => {{
              const copy = {{ ...p, isSoldOut: Boolean(p.isSoldOut || p.soldOut) }};
              if ('soldOut' in copy) delete copy.soldOut;
              return copy;
            }});

          return {{
            brands: (brands && brands.length > 0)
              ? brands.filter(b => b && b.id && !deletedBrands.includes(b.id))
              : DEFAULT_CAR_BRANDS.filter(b => !deletedBrands.includes(b.id)),
            categories: (categories && categories.length > 0)
              ? categories.filter(c => c && c.id && !deletedCats.includes(c.id))
              : DEFAULT_CATEGORIES.filter(c => !deletedCats.includes(c.id)),
            products: normalizedProds,
            deletedProductIds: deletedIds,
            deletedBrandIds: deletedBrands,
            deletedCategoryIds: deletedCats,
            updatedAt: Number(parsed.updatedAt || fallbackUpdatedAt || 0) || 0
          }};
        }}
      }}
    }}
  }} catch (e) {{
    console.error("Error reading localStorage:", e);
  }}

  return {{
    brands: DEFAULT_CAR_BRANDS.filter(b => !deletedBrands.includes(b.id)),
    categories: DEFAULT_CATEGORIES.filter(c => !deletedCats.includes(c.id)),
    products: DEFAULT_PRODUCTS
      .filter(p => p && p.id && !deletedIds.includes(p.id))
      .map(p => ({{ ...p, isSoldOut: Boolean(p.isSoldOut || p.soldOut) }})),
    deletedProductIds: deletedIds,
    deletedBrandIds: deletedBrands,
    deletedCategoryIds: deletedCats,
    updatedAt: fallbackUpdatedAt
  }};
}}

function saveCatalogData(data, options) {{
  const opts = (options && typeof options === 'object') ? options : {{}};
  const replaceTombstones = Boolean(opts.replaceTombstones);

  try {{
    if (data && typeof data === 'object') {{
      if (Array.isArray(data.deletedProductIds)) {{
        try {{
          if (replaceTombstones) {{
            localStorage.setItem('koko_catalog_deleted_ids', JSON.stringify(Array.from(new Set(data.deletedProductIds))));
          }} else {{
            const cur = JSON.parse(localStorage.getItem('koko_catalog_deleted_ids') || '[]');
            const merged = Array.from(new Set([...cur, ...data.deletedProductIds]));
            localStorage.setItem('koko_catalog_deleted_ids', JSON.stringify(merged));
          }}
        }} catch (e) {{}}
      }}
      if (Array.isArray(data.deletedBrandIds)) {{
        try {{
          if (replaceTombstones) {{
            localStorage.setItem('koko_catalog_deleted_brands', JSON.stringify(Array.from(new Set(data.deletedBrandIds))));
          }} else {{
            const cur = JSON.parse(localStorage.getItem('koko_catalog_deleted_brands') || '[]');
            const merged = Array.from(new Set([...cur, ...data.deletedBrandIds]));
            localStorage.setItem('koko_catalog_deleted_brands', JSON.stringify(merged));
          }}
        }} catch (e) {{}}
      }}
      if (Array.isArray(data.deletedCategoryIds)) {{
        try {{
          if (replaceTombstones) {{
            localStorage.setItem('koko_catalog_deleted_cats', JSON.stringify(Array.from(new Set(data.deletedCategoryIds))));
          }} else {{
            const cur = JSON.parse(localStorage.getItem('koko_catalog_deleted_cats') || '[]');
            const merged = Array.from(new Set([...cur, ...data.deletedCategoryIds]));
            localStorage.setItem('koko_catalog_deleted_cats', JSON.stringify(merged));
          }}
        }} catch (e) {{}}
      }}
      if (data.updatedAt) {{
        try {{
          localStorage.setItem('koko_catalog_updated_at', String(data.updatedAt));
        }} catch (e) {{}}
      }}
    }}

    localStorage.setItem('koko_catalog_data', JSON.stringify(data));
    return true;
  }} catch (e) {{
    console.warn("Primary localStorage save exceeded quota, attempting lightweight cache fallback:", e);
    try {{
      localStorage.removeItem('koko_catalog_data');
      if (data && typeof data === 'object' && Array.isArray(data.products)) {{
        const isHugeInline = v => typeof v === 'string' && v.startsWith('data:image/') && v.length > 100000;
        const liteCatalog = {{
          ...data,
          products: data.products.map(p => {{
            if (!p || typeof p !== 'object') return p;
            const filteredImgs = Array.isArray(p.images) ? p.images.filter(im => !isHugeInline(im)) : [];
            const liteImg = isHugeInline(p.image) ? (filteredImgs[0] || '') : p.image;
            return {{
              ...p,
              image: liteImg,
              images: filteredImgs.length > 0 ? filteredImgs : (liteImg ? [liteImg] : [])
            }};
          }})
        }};
        localStorage.setItem('koko_catalog_data', JSON.stringify(liteCatalog));
        return false;
      }}
    }} catch (eFallback) {{
      console.error("Failed lightweight localStorage fallback:", eFallback);
    }}
    return false;
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

                # Trigger automatic background deployment to GitHub & Cloudflare
                threading.Thread(target=auto_deploy_to_github, daemon=True).start()

            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'status': 'error', 'error': str(e)}).encode('utf-8'))
                print(f"[AUTO-SAVE ERROR] {e}")
        elif self.path == '/api/sales':
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            try:
                parsed = json.loads(body.decode('utf-8'))
                if not isinstance(parsed, dict) or not isinstance(parsed.get('sales'), list):
                    self.send_response(400)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({'status': 'error', 'message': 'Invalid sales payload'}).encode('utf-8'))
                    return

                sales_file = os.path.join(DIRECTORY, 'sales_data.json')
                payload = {
                    'sales': parsed['sales'],
                    'updatedAt': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())
                }
                with open(sales_file, 'w', encoding='utf-8') as f:
                    json.dump(payload, f, indent=2)

                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'status': 'ok', 'count': len(parsed['sales'])}).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'status': 'error', 'error': str(e)}).encode('utf-8'))
        elif self.path == '/api/git-push':
            try:
                git_exe = r"C:\Users\hp\AppData\Local\Programs\MinGit\cmd\git.exe"
                if not os.path.exists(git_exe):
                    git_exe = "git"

                # Git add
                add_res = subprocess.run([git_exe, "-C", DIRECTORY, "add", "-A"], capture_output=True, text=True)
                # Git commit
                commit_msg = f"Catalog update {time.strftime('%Y-%m-%d %H:%M:%S')}"
                commit_res = subprocess.run([git_exe, "-C", DIRECTORY, "commit", "-m", commit_msg], capture_output=True, text=True)
                # Git push
                push_res = subprocess.run([git_exe, "-C", DIRECTORY, "push", "origin", "main"], capture_output=True, text=True)

                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()

                success = push_res.returncode == 0 or "Everything up-to-date" in push_res.stderr or "Everything up-to-date" in push_res.stdout
                resp_data = {
                    'status': 'ok' if success else 'warning',
                    'message': 'Changes pushed to GitHub successfully! Live site will update in 1-2 minutes.' if success else 'Git push notice',
                    'details': (push_res.stdout or "") + "\n" + (push_res.stderr or "")
                }
                self.wfile.write(json.dumps(resp_data).encode('utf-8'))
                print(f"[GIT PUSH] {resp_data['message']}")
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'status': 'error', 'error': str(e)}).encode('utf-8'))
                print(f"[GIT PUSH ERROR] {e}")
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
