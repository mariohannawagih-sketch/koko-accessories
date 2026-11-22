/**
 * KOKO ACCESSORIES - STOREFRONT ENGINE
 * Focus: Car Selection -> Filter Accessories for that Car -> View Details.
 * Fully resilient with self-healing catalog recovery.
 */

// Safe Catalog Loader
function getSafeCatalog() {
  let cat = null;
  try {
    if (typeof getCatalogData === 'function') {
      cat = getCatalogData();
    }
  } catch (e) {
    console.error("getCatalogData error:", e);
  }

  if (!cat || typeof cat !== 'object') {
    cat = {};
  }

  const defaultBrands = (typeof DEFAULT_CAR_BRANDS !== 'undefined' && Array.isArray(DEFAULT_CAR_BRANDS)) 
    ? DEFAULT_CAR_BRANDS : [];
  const defaultCats = (typeof DEFAULT_CATEGORIES !== 'undefined' && Array.isArray(DEFAULT_CATEGORIES)) 
    ? DEFAULT_CATEGORIES : [];
  const defaultProds = (typeof DEFAULT_PRODUCTS !== 'undefined' && Array.isArray(DEFAULT_PRODUCTS)) 
    ? DEFAULT_PRODUCTS : [];

  let brands = Array.isArray(cat.brands) && cat.brands.length > 0 ? cat.brands : defaultBrands;
  let categories = Array.isArray(cat.categories) && cat.categories.length > 0 ? cat.categories : defaultCats;
  let products = Array.isArray(cat.products) ? cat.products : (Array.isArray(cat) ? cat : defaultProds);

  // If brands doesn't have "all", prepend it
  if (!brands.some(b => b.id === 'all')) {
    brands.unshift({ id: "all", name: "ALL CARS", logo: "ALL" });
  }

  return { brands, categories, products };
}

// Application State
const state = {
  selectedBrand: 'all',
  selectedCategory: 'all',
  searchQuery: '',
  catalog: getSafeCatalog()
};

// DOM Elements Holder
let el = {};

function initElements() {
  el = {
    carBrandsContainer: document.getElementById('carBrandsContainer'),
    categoriesContainer: document.getElementById('categoriesContainer'),
    accessoriesGrid: document.getElementById('accessoriesGrid'),
    itemCountDisplay: document.getElementById('itemCountDisplay'),
    activeCarBanner: document.getElementById('activeCarBanner'),
    activeCarTitle: document.getElementById('activeCarTitle'),
    searchInput: document.getElementById('searchInput'),
    detailModal: document.getElementById('detailModal'),
    detailContent: document.getElementById('detailContent'),
    toast: document.getElementById('toastNotice')
  };
}

// ============================================================
// THEME MANAGEMENT (LIGHT & DARK MODE)
// ============================================================
function initTheme() {
  let theme = 'dark'; // Default as requested
  try {
    const saved = localStorage.getItem('koko_theme');
    if (saved === 'light' || saved === 'dark') {
      theme = saved;
    }
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
  try {
    localStorage.setItem('koko_theme', theme);
  } catch (e) {}
}

window.toggleTheme = function() {
  const isDark = document.documentElement.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark');
};

// Init Application
async function initApp() {
  try {
    initTheme();
    initElements();
    state.catalog = getSafeCatalog();
    
    renderCarBrands();
    renderCategories();
    renderAccessories();
    setupSearch();

    // Check Cloudflare Cloud Database for real-time catalog updates
    try {
      const cloudRes = await fetch('/api/catalog');
      if (cloudRes.ok) {
        const cloudData = await cloudRes.json();
        if (cloudData && Array.isArray(cloudData.products) && cloudData.products.length > 0) {
          state.catalog = cloudData;
          saveCatalogData(cloudData);
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

// Render Car Brand Selector Cards
function renderCarBrands() {
  if (!el.carBrandsContainer) el.carBrandsContainer = document.getElementById('carBrandsContainer');
  if (!el.carBrandsContainer) return;

  const brands = state.catalog.brands || [];
  const products = state.catalog.products || [];
  
  el.carBrandsContainer.innerHTML = brands.map(b => {
    if (!b || !b.id) return '';
    const isActive = state.selectedBrand === b.id;
    
    // Count accessories for this brand
    const count = b.id === 'all' 
      ? products.length 
      : products.filter(p => p && (p.brand === b.id || p.brand === 'universal')).length;

    const countLabel = count === 1 ? '1 ACCESSORY' : `${count} ACCESSORIES`;

    return `
      <div 
        class="car-brand-card ${isActive ? 'active' : ''}" 
        onclick="selectCarBrand('${b.id}')"
      >
        <span class="car-brand-name block text-xs mb-1">${b.name || b.id.toUpperCase()}</span>
        <span class="car-brand-count block">${countLabel}</span>
      </div>
    `;
  }).join('');
}

// Select Car Brand
window.selectCarBrand = function(brandId) {
  state.selectedBrand = brandId;
  renderCarBrands();
  renderAccessories();
  updateCarBanner();

  const gridSection = document.getElementById('accessoriesSection');
  if (gridSection) {
    gridSection.scrollIntoView({ behavior: 'smooth' });
  }
};

// Update Top Filter Banner
function updateCarBanner() {
  if (!el.activeCarBanner) el.activeCarBanner = document.getElementById('activeCarBanner');
  if (!el.activeCarTitle) el.activeCarTitle = document.getElementById('activeCarTitle');
  if (!el.activeCarBanner) return;

  if (state.selectedBrand === 'all') {
    el.activeCarBanner.classList.add('hidden');
  } else {
    const brands = state.catalog.brands || [];
    const currentBrand = brands.find(b => b.id === state.selectedBrand);
    const brandName = currentBrand ? currentBrand.name : state.selectedBrand.toUpperCase();
    
    if (el.activeCarTitle) {
      el.activeCarTitle.textContent = `${brandName}`;
    }
    el.activeCarBanner.classList.remove('hidden');
  }
}

// Reset Car Filter to All
window.resetCarFilter = function() {
  selectCarBrand('all');
  state.selectedCategory = 'all';
  renderCategories();
};

// Render Category Filter Tabs
function renderCategories() {
  if (!el.categoriesContainer) el.categoriesContainer = document.getElementById('categoriesContainer');
  if (!el.categoriesContainer) return;

  const cats = state.catalog.categories || [];

  el.categoriesContainer.innerHTML = cats.map(c => {
    if (!c || !c.id) return '';
    const isActive = state.selectedCategory === c.id;
    return `
      <button 
        class="category-tab ${isActive ? 'active' : ''}" 
        onclick="selectCategory('${c.id}')"
      >
        ${c.name || c.id.toUpperCase()}
      </button>
    `;
  }).join('');
}

window.selectCategory = function(catId) {
  state.selectedCategory = catId;
  renderCategories();
  renderAccessories();
};

// Render Accessories Grid
function renderAccessories() {
  if (!el.accessoriesGrid) el.accessoriesGrid = document.getElementById('accessoriesGrid');
  if (!el.itemCountDisplay) el.itemCountDisplay = document.getElementById('itemCountDisplay');
  if (!el.accessoriesGrid) return;

  const products = state.catalog.products || [];
  const brands = state.catalog.brands || [];

  const filtered = products.filter(p => {
    if (!p) return false;

    // 1. Car Brand Filter
    if (state.selectedBrand !== 'all') {
      if (p.brand !== state.selectedBrand && p.brand !== 'universal') {
        return false;
      }
    }

    // 2. Category Filter
    if (state.selectedCategory !== 'all') {
      if (p.category !== state.selectedCategory) {
        return false;
      }
    }

    // 3. Search Query
    if (state.searchQuery && state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      const matchName = (p.name || '').toLowerCase().includes(q);
      const matchFit = (p.fitment || '').toLowerCase().includes(q);
      const matchDesc = (p.description || '').toLowerCase().includes(q);
      const matchBrand = (p.brand || '').toLowerCase().includes(q);
      if (!matchName && !matchFit && !matchDesc && !matchBrand) {
        return false;
      }
    }

    return true;
  });

  // Update item count
  if (el.itemCountDisplay) {
    el.itemCountDisplay.textContent = `${filtered.length} ACCESSORIES AVAILABLE`;
  }

  // Empty state
  if (filtered.length === 0) {
    el.accessoriesGrid.innerHTML = `
      <div class="col-span-full py-20 text-center">
        <p class="font-editorial text-2xl uppercase tracking-wider text-neutral-400 mb-2">NO ACCESSORIES FOUND</p>
        <p class="text-xs uppercase tracking-zara text-neutral-500 mb-6">NO ACCESSORIES MATCH THIS SELECTION YET.</p>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <button onclick="resetCarFilter()" class="btn-black py-2.5 px-5 text-xs">SHOW ALL ACCESSORIES (${products.length})</button>
          <a href="admin.html" class="btn-outline py-2.5 px-5 text-xs">+ ADD ACCESSORY IN ADMIN</a>
        </div>
      </div>
    `;
    return;
  }

  // Render cards
  el.accessoriesGrid.innerHTML = filtered.map(item => {
    const brandObj = brands.find(b => b.id === item.brand);
    const brandName = brandObj ? brandObj.name : (item.brand ? item.brand.toUpperCase() : 'CUSTOM');
    const photoUrl = (item.images && item.images.length > 0) ? item.images[0] : (item.image || 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80');
    const photoCount = (item.images && item.images.length > 1) ? item.images.length : 1;

    return `
      <div class="accessory-card group" onclick="openDetailModal('${item.id}')">
        <div class="accessory-img-box relative">
          <img 
            src="${photoUrl}" 
            alt="${item.name || 'Accessory'}" 
            class="accessory-img"
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'"
          />
          <div class="absolute top-2.5 left-2.5">
            <span class="bg-black/90 text-white text-[9px] font-semibold tracking-zara-wide uppercase px-2 py-0.5">
              ${brandName}
            </span>
          </div>
          ${photoCount > 1 ? `
            <div class="absolute bottom-2 right-2 bg-black/80 text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-wide">
              ${photoCount} PHOTOS
            </div>
          ` : ''}
        </div>

        <div class="pt-3 pb-4">
          <span class="block text-[10px] uppercase tracking-zara-wide text-neutral-400 mb-1">
            ${(item.category || '').toUpperCase()}
          </span>
          <h3 class="text-xs uppercase font-medium tracking-zara text-black dark:text-white group-hover:text-neutral-500 dark:group-hover:text-neutral-300 transition-colors line-clamp-1 mb-1.5">
            ${item.name || 'Accessory'}
          </h3>
          <p class="text-[11px] text-neutral-600 dark:text-neutral-400 line-clamp-1">
            <span class="font-semibold text-black dark:text-white">FIT:</span> ${item.fitment || 'All Models'}
          </p>
          <div class="mt-2 pt-2 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[10px] uppercase tracking-zara-wide text-neutral-900 dark:text-neutral-300 font-semibold group-hover:underline">
            <span>VIEW PHOTOS &amp; DETAILS &rarr;</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Helper to generate full WhatsApp inquiry URL
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

  const lines = [
    'Hello KOKO ACCESSORIES!',
    'How much is this item?',
    '',
    `*Item:* ${product.name || 'Accessory'}`,
    `*Compatibility:* ${product.fitment || 'All Models'}`
  ];
  if (photoLink) {
    lines.push(`*Photo Link:* ${photoLink}`);
  }

  return 'https://wa.me/201117781675?text=' + encodeURIComponent(lines.join('\n'));
}

// Multi-Photo Detail Modal
window.currentModalImages = [];
window.currentModalImgIndex = 0;

window.openDetailModal = function(productId) {
  const product = state.catalog.products.find(p => p.id === productId);
  if (!product) return;

  if (!el.detailModal) el.detailModal = document.getElementById('detailModal');
  if (!el.detailContent) el.detailContent = document.getElementById('detailContent');
  if (!el.detailModal || !el.detailContent) return;

  const brands = state.catalog.brands || [];
  const brandObj = brands.find(b => b.id === product.brand);
  const brandName = brandObj ? brandObj.name : (product.brand ? product.brand.toUpperCase() : 'CUSTOM');
  
  const allImages = (product.images && Array.isArray(product.images) && product.images.length > 0)
    ? product.images 
    : [product.image || 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'];

  window.currentModalImages = allImages;
  window.currentModalImgIndex = 0;

  el.detailContent.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
      <!-- Photo Area -->
      <div class="relative bg-[#f7f7f7] aspect-square md:aspect-auto min-h-[360px] overflow-hidden flex items-center justify-center p-4 group">
        <!-- Main Large Photo (Full, uncropped view) -->
        <img 
          id="modalMainImg" 
          src="${allImages[0]}" 
          alt="${product.name}" 
          class="w-full h-full max-h-[520px] object-contain transition-opacity duration-300"
        />

        <!-- Left / Right Navigation Arrows if multiple photos -->
        ${allImages.length > 1 ? `
          <button 
            type="button"
            onclick="prevModalPhoto(event)"
            class="absolute left-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white w-9 h-9 flex items-center justify-center text-lg transition-colors z-10"
            title="Previous Photo"
          >
            &#10094;
          </button>
          <button 
            type="button"
            onclick="nextModalPhoto(event)"
            class="absolute right-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white w-9 h-9 flex items-center justify-center text-lg transition-colors z-10"
            title="Next Photo"
          >
            &#10095;
          </button>

          <!-- Photo Counter Indicator -->
          <div class="absolute top-3 left-3 bg-black/85 text-white text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 z-10">
            <span id="modalPhotoCounter">PHOTO 1 OF ${allImages.length}</span>
          </div>

          <!-- Bottom Clickable Thumbnails Row -->
          <div class="absolute bottom-3 left-3 right-3 flex justify-center gap-2 p-1.5 bg-black/60 backdrop-blur-sm z-10 overflow-x-auto">
            ${allImages.map((imgUrl, i) => `
              <button 
                type="button"
                onclick="setModalPhotoIndex(${i})"
                id="modalThumbBtn_${i}"
                class="w-11 h-11 border ${i === 0 ? 'border-white ring-2 ring-white' : 'border-white/40 opacity-60 hover:opacity-100'} overflow-hidden flex-shrink-0 transition-all bg-neutral-800"
                title="Photo ${i + 1}"
              >
                <img src="${imgUrl}" class="w-full h-full object-cover" />
              </button>
            `).join('')}
          </div>
        ` : ''}
      </div>

      <!-- Detail Info -->
      <div class="p-8 md:p-10 flex flex-col justify-between bg-white">
        <div>
          <div class="flex items-center justify-between text-[11px] tracking-zara-wide text-neutral-400 uppercase mb-2">
            <span>${brandName}</span>
            <span class="text-black font-semibold uppercase">${product.category || 'ACCESSORY'}</span>
          </div>

          <h2 class="font-editorial text-2xl uppercase tracking-wider text-black mb-4 leading-tight">
            ${product.name}
          </h2>

          <!-- Compatibility Box -->
          <div class="p-4 bg-neutral-50 border border-neutral-200 mb-6">
            <span class="text-[10px] font-bold uppercase tracking-zara-wide text-black block mb-1">
              GUARANTEED FITMENT / COMPATIBILITY:
            </span>
            <p class="text-xs uppercase text-neutral-700 leading-relaxed font-medium">
              ${product.fitment || 'Compatible with all models'}
            </p>
          </div>

          <!-- Description -->
          <div class="mb-6">
            <span class="text-[10px] font-bold uppercase tracking-zara-wide text-neutral-400 block mb-1.5">
              ACCESSORY SPECIFICATIONS:
            </span>
            <p class="text-xs text-neutral-700 leading-relaxed uppercase">
              ${product.description || 'Premium crafted automotive accessory engineered specifically for your vehicle.'}
            </p>
          </div>

          ${allImages.length > 1 ? `
            <div class="text-[10px] uppercase tracking-zara text-neutral-500 mb-4 flex items-center gap-2">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span>${allImages.length} Photos (Use arrows to switch Front / Back)</span>
            </div>
          ` : ''}
        </div>

        <!-- Inquire Button -->
        <div class="space-y-3 pt-6 border-t border-neutral-200">
          <a 
            href="${getProductWhatsAppUrl(product, allImages)}"
            target="_blank"
            class="bg-[#25D366] hover:bg-[#20ba5a] text-white w-full py-4 text-xs font-bold text-center flex items-center justify-center gap-2 tracking-zara-wide shadow-md transition-all hover:shadow-lg"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span>INQUIRE ON WHATSAPP &bull; ASK PRICE</span>
          </a>
          <button 
            onclick="closeDetailModal()"
            class="btn-outline w-full py-3 text-xs text-center"
          >
            CLOSE PREVIEW
          </button>
        </div>
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
  if (mainImg) {
    mainImg.src = window.currentModalImages[idx];
  }

  const counter = document.getElementById('modalPhotoCounter');
  if (counter) {
    counter.textContent = `PHOTO ${idx + 1} OF ${window.currentModalImages.length}`;
  }

  // Update active thumbnail borders
  window.currentModalImages.forEach((_, i) => {
    const btn = document.getElementById(`modalThumbBtn_${i}`);
    if (btn) {
      if (i === idx) {
        btn.className = "w-11 h-11 border border-white ring-2 ring-white overflow-hidden flex-shrink-0 transition-all opacity-100 bg-neutral-800";
      } else {
        btn.className = "w-11 h-11 border border-white/40 overflow-hidden flex-shrink-0 transition-all opacity-60 hover:opacity-100 bg-neutral-800";
      }
    }
  });
};

window.nextModalPhoto = function(e) {
  if (e) e.stopPropagation();
  if (!window.currentModalImages || window.currentModalImages.length <= 1) return;
  let nextIdx = window.currentModalImgIndex + 1;
  if (nextIdx >= window.currentModalImages.length) nextIdx = 0;
  setModalPhotoIndex(nextIdx);
};

window.prevModalPhoto = function(e) {
  if (e) e.stopPropagation();
  if (!window.currentModalImages || window.currentModalImages.length <= 1) return;
  let prevIdx = window.currentModalImgIndex - 1;
  if (prevIdx < 0) prevIdx = window.currentModalImages.length - 1;
  setModalPhotoIndex(prevIdx);
};

window.closeDetailModal = function() {
  if (!el.detailModal) el.detailModal = document.getElementById('detailModal');
  if (el.detailModal) {
    el.detailModal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

// Search Setup
function setupSearch() {
  if (!el.searchInput) el.searchInput = document.getElementById('searchInput');
  if (!el.searchInput) return;

  el.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderAccessories();
  });
}

// Toast
function showToast(msg) {
  if (!el.toast) el.toast = document.getElementById('toastNotice');
  if (!el.toast) return;
  el.toast.textContent = msg;
  el.toast.classList.add('show');
  setTimeout(() => el.toast.classList.remove('show'), 2600);
}
