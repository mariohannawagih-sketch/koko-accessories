/**
 * KOKO ACCESSORIES - RESPONSIVE PC & MOBILE STOREFRONT ENGINE
 * Features: Smart Cloud Merge, Stocked-First Vehicle Selector, Dynamic Categories, Sold Out Support.
 */

function getSafeCatalog() {
  let cat = null;
  try {
    if (typeof getCatalogData === 'function') {
      cat = getCatalogData();
    }
  } catch (e) {
    console.error("getCatalogData error:", e);
  }

  if (!cat || typeof cat !== 'object') cat = {};

  const defaultBrands = (typeof DEFAULT_CAR_BRANDS !== 'undefined' && Array.isArray(DEFAULT_CAR_BRANDS)) ? DEFAULT_CAR_BRANDS : [];
  const defaultCats = (typeof DEFAULT_CATEGORIES !== 'undefined' && Array.isArray(DEFAULT_CATEGORIES)) ? DEFAULT_CATEGORIES : [];
  const defaultProds = (typeof DEFAULT_PRODUCTS !== 'undefined' && Array.isArray(DEFAULT_PRODUCTS)) ? DEFAULT_PRODUCTS : [];

  let brands = Array.isArray(cat.brands) && cat.brands.length > 0 ? cat.brands : defaultBrands;
  let categories = Array.isArray(cat.categories) && cat.categories.length > 0 ? cat.categories : defaultCats;
  let products = Array.isArray(cat.products) ? cat.products : (Array.isArray(cat) ? cat : defaultProds);

  if (!brands.some(b => b.id === 'all')) {
    brands.unshift({ id: "all", name: "ALL CARS", logo: "ALL" });
  }

  return { brands, categories, products };
}

function normCat(val) {
  return (val || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function getBrandDisplayName(brandObj, fallbackId) {
  if (!brandObj) return (fallbackId || 'CUSTOM').toUpperCase();
  if (brandObj.id === 'audislien' && brandObj.name === 'AUDI S LIEN') return 'AUDI S LINE';
  return brandObj.name || brandObj.id.toUpperCase();
}

function matchesBrand(prod, brandId) {
  if (!prod) return false;
  if (brandId === 'all') return true;
  const b = prod.brand;
  if (brandId === 'audi') return b === 'audi' || b === 'audislien' || b === 'audirs' || b === 'universal';
  if (brandId === 'audislien') return b === 'audislien' || b === 'audi' || b === 'universal';
  if (brandId === 'audirs') return b === 'audirs' || b === 'audi' || b === 'universal';
  return b === brandId || b === 'universal';
}

function getBrandCount(brandId, products) {
  if (brandId === 'all') return products.length;
  return products.filter(p => matchesBrand(p, brandId)).length;
}

const state = {
  selectedBrand: 'all',
  selectedCategory: 'all',
  searchQuery: '',
  showEmptyBrands: false,
  catalog: getSafeCatalog()
};

let el = {};

function initElements() {
  el = {
    carBrandsContainer: document.getElementById('carBrandsContainer'),
    mobileQuickBrands: document.getElementById('mobileQuickBrands'),
    mobileActiveCarName: document.getElementById('mobileActiveCarName'),
    mobileActiveCarCount: document.getElementById('mobileActiveCarCount'),
    categoriesContainer: document.getElementById('categoriesContainer'),
    accessoriesGrid: document.getElementById('accessoriesGrid'),
    itemCountDisplay: document.getElementById('itemCountDisplay'),
    resetFilterBtn: document.getElementById('resetFilterBtn'),
    activeCarBanner: document.getElementById('activeCarBanner'),
    activeCarTitle: document.getElementById('activeCarTitle'),
    searchInput: document.getElementById('searchInput'),
    searchInputMobile: document.getElementById('searchInputMobile'),
    carSelectorModal: document.getElementById('carSelectorModal'),
    detailModal: document.getElementById('detailModal'),
    detailContent: document.getElementById('detailContent'),
    modalDetailBrandTitle: document.getElementById('modalDetailBrandTitle'),
    toast: document.getElementById('toastNotice')
  };
}

// ============================================================
// THEME MANAGEMENT (EYE-COMFORTABLE DARK & LIGHT MODE)
// ============================================================
function initTheme() {
  let theme = 'dark';
  try {
    const saved = localStorage.getItem('koko_theme');
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch (e) {}
  applyTheme(theme);
}

function applyTheme(theme) {
  const html = document.documentElement;
  const icon = document.getElementById('themeToggleIcon');
  const label = document.getElementById('themeToggleLabel');

  if (theme === 'dark') {
    html.classList.add('dark');
    if (icon) icon.textContent = '🌙';
    if (label) label.textContent = 'DARK';
  } else {
    html.classList.remove('dark');
    if (icon) icon.textContent = '☀️';
    if (label) label.textContent = 'LIGHT';
  }
  try { localStorage.setItem('koko_theme', theme); } catch (e) {}
}

window.toggleTheme = function() {
  const isDark = document.documentElement.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark');
};

// ============================================================
// INITIALIZATION & CLOUDFLARE KV SMART MERGE
// ============================================================
async function initApp() {
  try {
    initTheme();
    initElements();
    state.catalog = getSafeCatalog();

    renderCarBrands();
    renderCategories();
    renderAccessories();
    setupSearch();

    try {
      const cloudRes = await fetch('/api/catalog');
      if (cloudRes.ok) {
        const cloudData = await cloudRes.json();
        if (cloudData && Array.isArray(cloudData.products)) {
          const defaultItems = (state.catalog && state.catalog.products) ? state.catalog.products : DEFAULT_PRODUCTS;
          const cloudItemsMap = new Map();
          cloudData.products.forEach(p => { if (p && p.id) cloudItemsMap.set(p.id, p); });

          const mergedProducts = defaultItems.map(item => {
            const cloudItem = cloudItemsMap.get(item.id);
            return cloudItem ? { ...item, ...cloudItem } : item;
          });

          const defaultIds = new Set(defaultItems.map(i => i.id));
          cloudData.products.forEach(p => {
            if (p && p.id && !defaultIds.has(p.id)) mergedProducts.push(p);
          });

          state.catalog = {
            brands: (cloudData.brands && cloudData.brands.length >= DEFAULT_CAR_BRANDS.length) ? cloudData.brands : DEFAULT_CAR_BRANDS,
            categories: (cloudData.categories && cloudData.categories.length > 0) ? cloudData.categories : DEFAULT_CATEGORIES,
            products: mergedProducts
          };

          saveCatalogData(state.catalog);
          renderCarBrands();
          renderCategories();
          renderAccessories();
        }
      }
    } catch (eCloud) {}
  } catch (err) {
    console.error("Initialization error:", err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// ============================================================
// VEHICLE BRAND SELECTOR (STOCKED FIRST + MODAL FOR ALL 25)
// ============================================================
function renderCarBrands() {
  const brands = state.catalog.brands || [];
  const products = state.catalog.products || [];

  const activeObj = brands.find(b => b.id === state.selectedBrand);
  const activeCount = getBrandCount(state.selectedBrand, products);
  if (el.mobileActiveCarName) el.mobileActiveCarName.textContent = getBrandDisplayName(activeObj, state.selectedBrand);
  if (el.mobileActiveCarCount) el.mobileActiveCarCount.textContent = activeCount;

  const stocked = brands.filter(b => b && b.id && getBrandCount(b.id, products) > 0);
  const emptyCount = brands.filter(b => b && b.id && getBrandCount(b.id, products) === 0).length;

  // PC Stocked Brand Cards + "+ More Brands"
  if (el.carBrandsContainer) {
    el.carBrandsContainer.innerHTML = stocked.map(b => {
      const isActive = state.selectedBrand === b.id;
      const count = getBrandCount(b.id, products);
      const countLabel = count === 1 ? '1 ACCESSORY' : `${count} ACCESSORIES`;
      return `
        <div class="pc-brand-card ${isActive ? 'active' : ''}" onclick="selectCarBrand('${b.id}')">
          <span class="pc-brand-name">${getBrandDisplayName(b, b.id)}</span>
          <span class="pc-brand-count">${countLabel}</span>
        </div>
      `;
    }).join('') + (emptyCount > 0 ? `
      <div class="pc-brand-card more-brands-card" onclick="openCarModal()">
        <span class="pc-brand-name">+ MORE BRANDS</span>
        <span class="pc-brand-count">${emptyCount} COMING SOON</span>
      </div>
    ` : '');
  }

  // Mobile 1-Line Stocked Quick Brand Pills
  if (el.mobileQuickBrands) {
    el.mobileQuickBrands.innerHTML = stocked.map(b => {
      const isActive = state.selectedBrand === b.id;
      const count = getBrandCount(b.id, products);
      const shortName = b.id === 'all' ? 'ALL' : getBrandDisplayName(b, b.id);
      return `
        <button type="button" class="brand-pill ${isActive ? 'active' : ''}" onclick="selectCarBrand('${b.id}')">
          ${shortName}<span class="brand-pill-count">${count}</span>
        </button>
      `;
    }).join('') + `
      <button type="button" class="brand-pill" onclick="openCarModal()" style="border-style:dashed;">
        + ALL ${brands.length} CARS
      </button>
    `;
  }
}

window.selectCarBrand = function(brandId) {
  state.selectedBrand = brandId;
  state.selectedCategory = 'all';
  renderCarBrands();
  renderCategories();
  renderAccessories();
  updateCarBanner();
};

function updateCarBanner() {
  if (!el.activeCarBanner) return;
  if (state.selectedBrand === 'all') {
    el.activeCarBanner.classList.add('hidden');
  } else {
    const brands = state.catalog.brands || [];
    const currentBrand = brands.find(b => b.id === state.selectedBrand);
    if (el.activeCarTitle) el.activeCarTitle.textContent = getBrandDisplayName(currentBrand, state.selectedBrand);
    el.activeCarBanner.classList.remove('hidden');
  }
}

window.resetCarFilter = function() {
  state.selectedBrand = 'all';
  state.selectedCategory = 'all';
  state.searchQuery = '';
  if (el.searchInput) el.searchInput.value = '';
  if (el.searchInputMobile) el.searchInputMobile.value = '';
  renderCarBrands();
  renderCategories();
  renderAccessories();
  updateCarBanner();
};

// Choose Your Car Modal / Bottom Sheet
window.openCarModal = function() {
  renderCarSelectorModal();
  if (el.carSelectorModal) {
    el.carSelectorModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

window.closeCarModal = function() {
  if (el.carSelectorModal) {
    el.carSelectorModal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

window.toggleEmptyBrands = function() {
  state.showEmptyBrands = !state.showEmptyBrands;
  renderCarSelectorModal();
};

window.pickBrandFromModal = function(brandId) {
  selectCarBrand(brandId);
  closeCarModal();
};

window.renderCarSelectorModal = function() {
  const brands = state.catalog.brands || [];
  const products = state.catalog.products || [];
  const searchEl = document.getElementById('sheetBrandSearch');
  const q = (searchEl ? searchEl.value : '').trim().toLowerCase();

  const filtered = brands.filter(b => {
    if (!b || !b.id) return false;
    const dName = getBrandDisplayName(b, b.id).toLowerCase();
    return !q || dName.includes(q) || b.id.toLowerCase().includes(q);
  });

  const stocked = filtered.filter(b => getBrandCount(b.id, products) > 0);
  const empty = filtered.filter(b => getBrandCount(b.id, products) === 0);

  const stockedListEl = document.getElementById('stockedBrandsList');
  if (stockedListEl) {
    stockedListEl.innerHTML = stocked.map(b => {
      const c = getBrandCount(b.id, products);
      const active = b.id === state.selectedBrand ? 'active' : '';
      return `
        <button type="button" class="sheet-brand-btn ${active}" onclick="pickBrandFromModal('${b.id}')">
          <span class="sheet-brand-name">${getBrandDisplayName(b, b.id)}</span>
          <span class="sheet-brand-count">${c}</span>
        </button>
      `;
    }).join('') || '<div style="grid-column:1/-1;font-size:12px;color:var(--text-muted);">No matching brands in stock</div>';
  }

  const toggleBtn = document.getElementById('toggleEmptyBrandsBtn');
  const emptyWrap = document.getElementById('emptyBrandsWrap');
  const emptyListEl = document.getElementById('emptyBrandsList');
  if (toggleBtn && emptyWrap && emptyListEl) {
    if (empty.length === 0) {
      toggleBtn.style.display = 'none';
      emptyWrap.style.display = 'none';
    } else {
      toggleBtn.style.display = 'block';
      toggleBtn.innerHTML = state.showEmptyBrands
        ? 'Hide Coming Soon Brands &#9652;'
        : `Show ${empty.length} Other Brands (Coming Soon) &#9662;`;
      emptyWrap.style.display = (state.showEmptyBrands || q.length > 0) ? 'block' : 'none';
      emptyListEl.innerHTML = empty.map(b => {
        const active = b.id === state.selectedBrand ? 'active' : '';
        return `
          <button type="button" class="sheet-brand-btn empty ${active}" onclick="pickBrandFromModal('${b.id}')">
            <span class="sheet-brand-name">${getBrandDisplayName(b, b.id)}</span>
            <span class="sheet-brand-count">0</span>
          </button>
        `;
      }).join('');
    }
  }
};

// ============================================================
// FILTERING & DYNAMIC CATEGORIES
// ============================================================
function getFilteredProducts(ignoreCategory = false) {
  const products = state.catalog.products || [];
  return products.filter(p => {
    if (!p) return false;
    if (!matchesBrand(p, state.selectedBrand)) return false;

    if (!ignoreCategory && state.selectedCategory !== 'all') {
      if (normCat(p.category) !== normCat(state.selectedCategory)) return false;
    }

    if (state.searchQuery && state.searchQuery.trim() !== '') {
      const q = state.searchQuery.trim().toLowerCase();
      const hay = `${p.name || ''} ${p.fitment || ''} ${p.description || ''} ${p.brand || ''} ${p.category || ''}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }

    return true;
  });
}

function renderCategories() {
  if (!el.categoriesContainer) return;
  const cats = state.catalog.categories || [];
  const brandMatched = getFilteredProducts(true);

  const validCats = cats.filter(c => {
    if (!c || !c.id) return false;
    if (c.id === 'all') return true;
    return brandMatched.some(p => normCat(p.category) === normCat(c.id));
  });

  el.categoriesContainer.innerHTML = validCats.map(c => {
    const isActive = normCat(state.selectedCategory) === normCat(c.id);
    const label = c.id === 'all' ? 'ALL' : (c.name || c.id.toUpperCase());
    return `
      <button type="button" class="cat-pill ${isActive ? 'active' : ''}" onclick="selectCategory('${c.id}')">
        ${label}
      </button>
    `;
  }).join('');
}

window.selectCategory = function(catId) {
  state.selectedCategory = catId;
  renderCategories();
  renderAccessories();
};

// ============================================================
// ACCESSORIES GRID RENDER
// ============================================================
function renderAccessories() {
  if (!el.accessoriesGrid) return;
  const brands = state.catalog.brands || [];
  const filtered = getFilteredProducts(false);

  if (el.itemCountDisplay) {
    el.itemCountDisplay.innerHTML = `Showing <strong>${filtered.length}</strong> accessories`;
  }

  const hasFilter = state.selectedBrand !== 'all' || state.selectedCategory !== 'all' || (state.searchQuery && state.searchQuery.trim() !== '');
  if (el.resetFilterBtn) {
    el.resetFilterBtn.classList.toggle('visible', Boolean(hasFilter));
  }

  if (filtered.length === 0) {
    el.accessoriesGrid.innerHTML = `
      <div style="grid-column:1 / -1;text-align:center;padding:56px 16px;">
        <p class="font-racing" style="font-size:18px;font-weight:700;color:var(--text-main);margin-bottom:6px;">NO ACCESSORIES FOUND</p>
        <p style="font-size:12px;color:var(--text-muted);margin-bottom:18px;">Try clearing filters or choosing another vehicle make.</p>
        <div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap;">
          <button type="button" onclick="resetCarFilter()" class="btn-black">SHOW ALL ACCESSORIES (${(state.catalog.products || []).length})</button>
          <a href="admin.html" class="btn-outline">+ ADD IN ADMIN</a>
        </div>
      </div>
    `;
    return;
  }

  el.accessoriesGrid.innerHTML = filtered.map(item => {
    const brandObj = brands.find(b => b.id === item.brand);
    const brandName = getBrandDisplayName(brandObj, item.brand);
    const photoUrl = (item.images && item.images.length > 0) ? item.images[0] : (item.image || 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80');
    const photoCount = (item.images && item.images.length > 1) ? item.images.length : 1;
    const isSoldOut = Boolean(item.isSoldOut);

    return `
      <article class="accessory-card ${isSoldOut ? 'sold-out' : ''}" onclick="openDetailModal('${item.id}')">
        <div class="accessory-img-box">
          <img
            src="${photoUrl}"
            alt="${item.name || 'Accessory'}"
            class="accessory-img"
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'"
          />
          <span class="card-brand-tag">${brandName}</span>
          ${isSoldOut ? '<span class="card-soldout-tag">SOLD OUT</span>' : ''}
          ${photoCount > 1 ? `<span class="card-photos-pill">${photoCount} PHOTOS</span>` : ''}
        </div>

        <div class="card-body">
          <div>
            <h3 class="card-title">${item.name || 'Accessory'}</h3>
            <p class="card-fit" style="margin-top:4px;">FIT: ${item.fitment || 'All Models'}</p>
          </div>
          <div class="card-meta-row">
            ${isSoldOut
              ? '<span class="status-sold-out">&#9679; Sold Out</span>'
              : '<span class="status-in-stock">&#9679; In Stock</span>'}
            <span class="card-tap-hint">Details &rarr;</span>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ============================================================
// WHATSAPP INQUIRY & MULTI-PHOTO DETAIL MODAL
// ============================================================
function getProductWhatsAppUrl(product, allImages) {
  let photoLink = '';
  if (allImages && allImages[0]) {
    const raw = allImages[0];
    if (raw.startsWith('http://') || raw.startsWith('https://')) {
      photoLink = raw;
    } else {
      const clean = raw.startsWith('/') ? raw.slice(1) : raw;
      photoLink = 'https://koko-accessories.pages.dev/' + clean;
    }
  }

  const isSoldOut = Boolean(product.isSoldOut);
  const lines = [
    'Hello KOKO ACCESSORIES!',
    isSoldOut ? 'When will this sold out item be back in stock?' : 'How much is this item?',
    '',
    `*Item:* ${product.name || 'Accessory'}${isSoldOut ? ' [CURRENTLY SOLD OUT]' : ''}`,
    `*Compatibility:* ${product.fitment || 'All Models'}`
  ];
  if (photoLink) lines.push(`*Photo Link:* ${photoLink}`);

  return 'https://wa.me/201117781675?text=' + encodeURIComponent(lines.join('\n'));
}

window.currentModalImages = [];
window.currentModalImgIndex = 0;

window.openDetailModal = function(productId) {
  const product = state.catalog.products.find(p => p.id === productId);
  if (!product || !el.detailModal || !el.detailContent) return;

  const brands = state.catalog.brands || [];
  const brandObj = brands.find(b => b.id === product.brand);
  const brandName = getBrandDisplayName(brandObj, product.brand);

  const allImages = (product.images && Array.isArray(product.images) && product.images.length > 0)
    ? product.images
    : [product.image || 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'];

  window.currentModalImages = allImages;
  window.currentModalImgIndex = 0;

  if (el.modalDetailBrandTitle) {
    el.modalDetailBrandTitle.textContent = `${brandName} • ${(product.category || 'ACCESSORY').toUpperCase()}`;
  }

  const isSoldOut = Boolean(product.isSoldOut);

  el.detailContent.innerHTML = `
    <div class="product-modal-split">
      <div>
        <div class="modal-gallery">
          <img id="modalMainImg" src="${allImages[0]}" alt="${product.name}" />
          ${allImages.length > 1 ? `
            <button type="button" class="gallery-nav gallery-prev" onclick="prevModalPhoto(event)" title="Previous Photo">&#10094;</button>
            <button type="button" class="gallery-nav gallery-next" onclick="nextModalPhoto(event)" title="Next Photo">&#10095;</button>
            <span id="modalPhotoCounter" class="card-brand-tag" style="top:12px;left:12px;">1 / ${allImages.length}</span>
          ` : ''}
        </div>
        ${allImages.length > 1 ? `
          <div class="thumb-strip">
            ${allImages.map((imgUrl, i) => `
              <button type="button" id="modalThumbBtn_${i}" class="thumb-btn ${i === 0 ? 'active' : ''}" onclick="setModalPhotoIndex(${i})">
                <img src="${imgUrl}" alt="Photo ${i + 1}" />
              </button>
            `).join('')}
          </div>
        ` : ''}
      </div>

      <div class="detail-col">
        <h2 style="font-size:17px;font-weight:700;line-height:1.3;text-transform:uppercase;color:var(--text-main);">
          ${product.name}
        </h2>

        <div class="status-banner ${isSoldOut ? 'soldout' : 'instock'}">
          <span>${isSoldOut ? '&#9679; CURRENTLY SOLD OUT • OUT OF STOCK' : '&#9679; IN STOCK & READY TO SHIP'}</span>
          <span style="font-size:10px;opacity:0.85;">${isSoldOut ? 'RESTOCK SOON' : 'AVAILABLE'}</span>
        </div>

        <div class="fitment-box">
          <strong>Guaranteed Fitment / Compatibility</strong>
          <span>${product.fitment || 'Compatible with all models'}</span>
        </div>

        <p style="font-size:12.5px;color:var(--text-sub);line-height:1.55;">
          ${product.description || 'Premium crafted automotive accessory engineered specifically for your vehicle.'}
        </p>

        <a href="${getProductWhatsAppUrl(product, allImages)}" target="_blank" class="wa-cta ${isSoldOut ? 'soldout-cta' : ''}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <span>${isSoldOut ? 'INQUIRE RESTOCK DATE ON WHATSAPP' : 'INQUIRE ON WHATSAPP • ASK PRICE'}</span>
        </a>
      </div>
    </div>
  `;

  el.detailModal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.setModalPhotoIndex = function(idx) {
  if (!window.currentModalImages || !window.currentModalImages[idx]) return;
  window.currentModalImgIndex = idx;

  const mainImg = document.getElementById('modalMainImg');
  if (mainImg) mainImg.src = window.currentModalImages[idx];

  const counter = document.getElementById('modalPhotoCounter');
  if (counter) counter.textContent = `${idx + 1} / ${window.currentModalImages.length}`;

  window.currentModalImages.forEach((_, i) => {
    const btn = document.getElementById(`modalThumbBtn_${i}`);
    if (btn) btn.classList.toggle('active', i === idx);
  });
};

window.nextModalPhoto = function(e) {
  if (e) e.stopPropagation();
  if (!window.currentModalImages || window.currentModalImages.length <= 1) return;
  const nextIdx = (window.currentModalImgIndex + 1) % window.currentModalImages.length;
  setModalPhotoIndex(nextIdx);
};

window.prevModalPhoto = function(e) {
  if (e) e.stopPropagation();
  if (!window.currentModalImages || window.currentModalImages.length <= 1) return;
  const prevIdx = (window.currentModalImgIndex - 1 + window.currentModalImages.length) % window.currentModalImages.length;
  setModalPhotoIndex(prevIdx);
};

window.closeDetailModal = function() {
  if (el.detailModal) {
    el.detailModal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

// ============================================================
// SEARCH & MOBILE SEARCH DRAWER
// ============================================================
function setupSearch() {
  const onSearchInput = (val) => {
    state.searchQuery = val;
    if (el.searchInput && el.searchInput.value !== val) el.searchInput.value = val;
    if (el.searchInputMobile && el.searchInputMobile.value !== val) el.searchInputMobile.value = val;
    renderAccessories();
  };

  if (el.searchInput) el.searchInput.addEventListener('input', e => onSearchInput(e.target.value));
  if (el.searchInputMobile) el.searchInputMobile.addEventListener('input', e => onSearchInput(e.target.value));
}

window.toggleMobileSearch = function() {
  const drawer = document.getElementById('mobileSearchDrawer');
  if (!drawer) return;
  drawer.classList.toggle('open');
  if (drawer.classList.contains('open') && el.searchInputMobile) {
    el.searchInputMobile.focus();
  }
};

window.clearMobileSearch = function() {
  state.searchQuery = '';
  if (el.searchInput) el.searchInput.value = '';
  if (el.searchInputMobile) el.searchInputMobile.value = '';
  const drawer = document.getElementById('mobileSearchDrawer');
  if (drawer) drawer.classList.remove('open');
  renderAccessories();
};

function showToast(msg) {
  if (!el.toast) el.toast = document.getElementById('toastNotice');
  if (!el.toast) return;
  el.toast.textContent = msg;
  el.toast.classList.add('show');
  setTimeout(() => el.toast.classList.remove('show'), 2600);
}
