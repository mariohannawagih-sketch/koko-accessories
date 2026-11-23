/**
 * KOKO ACCESSORIES - RESPONSIVE PC & MOBILE ADMIN ENGINE
 * Supports Cloud KV Real-Time Sync, Local Auto-Save, Touch Cards on Phone & Full Table on PC.
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

let adminState = {
  isLoggedIn: false,
  currentTab: 'accessories',
  statusFilter: 'all',
  catalog: getSafeCatalog(),
  activePhotos: [],
  editingAccessoryId: null,
  isDiskSyncConnected: false,
  isCloudSyncConnected: false,
  hasMergedCloudOnce: false
};

const adminEl = {
  loginGate: document.getElementById('loginGate'),
  adminDashboard: document.getElementById('adminDashboard'),
  adminEmailInput: document.getElementById('adminEmailInput'),
  adminPassInput: document.getElementById('adminPassInput'),
  syncStatusBadge: document.getElementById('syncStatusBadge'),

  tabBtnAccessories: document.getElementById('tabBtnAccessories'),
  tabBtnCategories: document.getElementById('tabBtnCategories'),
  tabBtnBrands: document.getElementById('tabBtnBrands'),
  tabBtnExport: document.getElementById('tabBtnExport'),
  tabContentAccessories: document.getElementById('tabContentAccessories'),
  tabContentCategories: document.getElementById('tabContentCategories'),
  tabContentBrands: document.getElementById('tabContentBrands'),
  tabContentExport: document.getElementById('tabContentExport'),

  adminAccessoriesTableBody: document.getElementById('adminAccessoriesTableBody'),
  adminMobileCardsList: document.getElementById('adminMobileCardsList'),
  adminSearchInput: document.getElementById('adminSearchInput'),
  adminFilterBrand: document.getElementById('adminFilterBrand'),
  adminTotalItemsBadge: document.getElementById('adminTotalItemsBadge'),

  accessoryModal: document.getElementById('accessoryModal'),
  accessoryModalTitle: document.getElementById('accessoryModalTitle'),
  accessoryForm: document.getElementById('accessoryForm'),
  formAccessoryId: document.getElementById('formAccessoryId'),
  formAccessoryName: document.getElementById('formAccessoryName'),
  formAccessoryBrand: document.getElementById('formAccessoryBrand'),
  formAccessoryCategory: document.getElementById('formAccessoryCategory'),
  formAccessoryFitment: document.getElementById('formAccessoryFitment'),
  formAccessoryDesc: document.getElementById('formAccessoryDesc'),
  formAccessorySoldOut: document.getElementById('formAccessorySoldOut'),
  formImageUrlInput: document.getElementById('formImageUrlInput'),
  dragDropZone: document.getElementById('dragDropZone'),
  photoPreviewContainer: document.getElementById('photoPreviewContainer'),
  photosListContainer: document.getElementById('photosListContainer'),
  photoCountBadge: document.getElementById('photoCountBadge'),

  adminCategoriesList: document.getElementById('adminCategoriesList'),
  newCategoryInput: document.getElementById('newCategoryInput'),
  adminBrandsList: document.getElementById('adminBrandsList'),
  newBrandInput: document.getElementById('newBrandInput'),

  toast: document.getElementById('toastNotice')
};

// ============================================================
// THEME MANAGEMENT (SHARED WITH STOREFRONT)
// ============================================================
function initAdminTheme() {
  let theme = 'dark';
  try {
    const saved = localStorage.getItem('koko_theme');
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch (e) {}
  applyAdminTheme(theme);
}

function applyAdminTheme(theme) {
  const html = document.documentElement;
  const icon = document.getElementById('adminThemeIcon');
  const label = document.getElementById('adminThemeLabel');
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

window.toggleAdminTheme = function() {
  const isDark = document.documentElement.classList.contains('dark');
  applyAdminTheme(isDark ? 'light' : 'dark');
};

// ============================================================
// INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initAdminTheme();
  const savedLogin = sessionStorage.getItem('koko_admin_auth');
  if (savedLogin === 'true') {
    adminState.isLoggedIn = true;
    showDashboard();
  }
  checkDiskSyncConnection();
  setInterval(checkDiskSyncConnection, 5000);
});

async function checkDiskSyncConnection() {
  try {
    const cloudHealthRes = await fetch('/api/health');
    if (cloudHealthRes.ok) {
      const hData = await cloudHealthRes.json();
      if (hData && hData.status === 'ok') {
        adminState.isCloudSyncConnected = true;
        updateSyncStatusUI(true);

        if (!adminState.hasMergedCloudOnce) {
          adminState.hasMergedCloudOnce = true;
          try {
            const catRes = await fetch('/api/catalog');
            if (catRes.ok) {
              const catData = await catRes.json();
              if (catData && Array.isArray(catData.products)) {
                const defaultItems = (adminState.catalog && adminState.catalog.products) ? adminState.catalog.products : DEFAULT_PRODUCTS;
                const cloudItemsMap = new Map();
                catData.products.forEach(p => { if (p && p.id) cloudItemsMap.set(p.id, p); });

                const mergedProducts = defaultItems.map(item => {
                  const cloudItem = cloudItemsMap.get(item.id);
                  return cloudItem ? { ...item, ...cloudItem } : item;
                });

                const defaultIds = new Set(defaultItems.map(i => i.id));
                catData.products.forEach(p => {
                  if (p && p.id && !defaultIds.has(p.id)) mergedProducts.push(p);
                });

                adminState.catalog = {
                  brands: (catData.brands && catData.brands.length >= DEFAULT_CAR_BRANDS.length) ? catData.brands : DEFAULT_CAR_BRANDS,
                  categories: (catData.categories && catData.categories.length > 0) ? catData.categories : DEFAULT_CATEGORIES,
                  products: mergedProducts
                };
                saveCatalogData(adminState.catalog);
                syncToDisk(adminState.catalog);
                renderAdminAccessoriesTable();
                renderAdminCategories();
                renderAdminBrands();
              }
            }
          } catch (eCat) {}
        }
        return true;
      }
    }
  } catch (eCloud) {}

  try {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      const res = await fetch('http://localhost:5500/api/health', { cache: 'no-cache' });
      if (res.ok) {
        adminState.isDiskSyncConnected = true;
        updateSyncStatusUI(true);
        return true;
      }
    }
  } catch (e) {}

  updateSyncStatusUI(false);
  return false;
}

function updateSyncStatusUI(isConnected) {
  if (!adminEl.syncStatusBadge) return;
  const label = isConnected ? 'CLOUD AUTO-SAVE LIVE' : 'CLOUD CONNECTED';
  adminEl.syncStatusBadge.innerHTML = `
    <span class="cloud-dot"></span>
    <span class="cloud-text">${label}</span>
  `;
}

async function syncToDisk(catalogData) {
  saveCatalogData(catalogData);
  let saved = false;

  try {
    const cloudRes = await fetch('/api/catalog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(catalogData)
    });
    if (cloudRes.ok) {
      updateSyncStatusUI(true);
      saved = true;
    }
  } catch (errCloud) {}

  try {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      const res = await fetch('http://localhost:5500/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(catalogData)
      });
      if (res.ok) {
        const result = await res.json();
        if (result.products) {
          adminState.catalog.products = result.products;
          saveCatalogData(adminState.catalog);
        }
        saved = true;
      }
    }
  } catch (errLocal) {}

  return saved;
}

// ============================================================
// AUTHENTICATION & DASHBOARD
// ============================================================
window.handleAdminLogin = function(e) {
  e.preventDefault();
  const email = adminEl.adminEmailInput.value.trim().toLowerCase();
  const pass = adminEl.adminPassInput.value.trim();

  if (email === 'koko@gmail.com' && pass === 'koko12345') {
    adminState.isLoggedIn = true;
    sessionStorage.setItem('koko_admin_auth', 'true');
    sessionStorage.setItem('koko_admin_email', email);
    showToast("WELCOME BACK, ADMIN");
    showDashboard();
  } else {
    alert("Access Denied: Incorrect email or password.");
  }
};

window.handleAdminLogout = function() {
  adminState.isLoggedIn = false;
  sessionStorage.removeItem('koko_admin_auth');
  adminEl.loginGate.classList.remove('hidden');
  adminEl.adminDashboard.classList.add('hidden');
  showToast("Logged out successfully");
};

function showDashboard() {
  adminEl.loginGate.classList.add('hidden');
  adminEl.adminDashboard.classList.remove('hidden');

  adminState.catalog = getSafeCatalog();
  populateBrandFilterDropdown();
  renderAdminAccessoriesTable();
  renderAdminCategories();
  renderAdminBrands();
  checkDiskSyncConnection();
}

window.switchAdminTab = function(tabName) {
  adminState.currentTab = tabName;
  const tabs = ['accessories', 'categories', 'brands', 'export'];
  tabs.forEach(t => {
    const cap = t.charAt(0).toUpperCase() + t.slice(1);
    const btn = document.getElementById(`tabBtn${cap}`);
    const content = document.getElementById(`tabContent${cap}`);
    if (btn) btn.classList.toggle('active', t === tabName);
    if (content) content.classList.toggle('hidden', t !== tabName);
  });

  if (tabName === 'accessories') renderAdminAccessoriesTable();
  if (tabName === 'categories') renderAdminCategories();
  if (tabName === 'brands') renderAdminBrands();
};

// ============================================================
// ACCESSORIES MANAGEMENT (PC TABLE + PHONE TOUCH CARDS)
// ============================================================
function populateBrandFilterDropdown() {
  if (!adminEl.adminFilterBrand) return;
  const brands = adminState.catalog.brands || [];
  adminEl.adminFilterBrand.innerHTML = `<option value="all">ALL CAR BRANDS</option>` + brands.filter(b => b.id !== 'all').map(b => {
    return `<option value="${b.id}">${getBrandDisplayName(b, b.id)}</option>`;
  }).join('');
}

function updateAdminCounters() {
  const allProducts = adminState.catalog.products || [];
  const soldOutCount = allProducts.filter(p => Boolean(p.isSoldOut)).length;
  const inStockCount = allProducts.length - soldOutCount;

  const setText = (id, val) => { const node = document.getElementById(id); if (node) node.textContent = val; };
  setText('tabProdCount', allProducts.length);
  setText('tabCatCount', (adminState.catalog.categories || []).length);
  setText('tabBrandCount', (adminState.catalog.brands || []).length);
  setText('cntStatusAll', allProducts.length);
  setText('cntStatusIn', inStockCount);
  setText('cntStatusOut', soldOutCount);
}

window.setAdminStatusFilter = function(status, btn) {
  adminState.statusFilter = status;
  document.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderAdminAccessoriesTable();
};

function renderAdminAccessoriesTable() {
  updateAdminCounters();
  const filterBrand = (adminEl.adminFilterBrand && adminEl.adminFilterBrand.value) || 'all';
  const query = ((adminEl.adminSearchInput && adminEl.adminSearchInput.value) || '').trim().toLowerCase();

  let products = adminState.catalog.products || [];
  if (filterBrand !== 'all') {
    products = products.filter(p => p.brand === filterBrand);
  }
  if (adminState.statusFilter === 'instock') {
    products = products.filter(p => !p.isSoldOut);
  } else if (adminState.statusFilter === 'soldout') {
    products = products.filter(p => Boolean(p.isSoldOut));
  }
  if (query) {
    products = products.filter(p => {
      const hay = `${p.name || ''} ${p.fitment || ''} ${p.brand || ''} ${p.category || ''}`.toLowerCase();
      return hay.includes(query);
    });
  }

  if (adminEl.adminTotalItemsBadge) {
    adminEl.adminTotalItemsBadge.textContent = `${products.length} ACCESSORIES`;
  }

  const brands = adminState.catalog.brands || [];

  // 1. Render PC Table
  if (adminEl.adminAccessoriesTableBody) {
    if (products.length === 0) {
      adminEl.adminAccessoriesTableBody.innerHTML = `
        <tr>
          <td colspan="7" style="padding:36px;text-align:center;color:var(--text-muted);text-transform:uppercase;">
            NO ACCESSORIES FOUND. CLICK "+ ADD ACCESSORY" TO CREATE ONE.
          </td>
        </tr>
      `;
    } else {
      adminEl.adminAccessoriesTableBody.innerHTML = products.map(item => {
        const brandObj = brands.find(b => b.id === item.brand);
        const brandName = getBrandDisplayName(brandObj, item.brand);
        const photoUrl = (item.images && item.images.length > 0) ? item.images[0] : item.image;
        const isOut = Boolean(item.isSoldOut);

        return `
          <tr>
            <td>
              <div class="table-thumb-wrap">
                <img src="${photoUrl}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'" />
                ${item.images && item.images.length > 1 ? `<span class="amc-photo-badge">${item.images.length}</span>` : ''}
              </div>
            </td>
            <td style="font-weight:600;max-width:260px;text-transform:uppercase;">${item.name}</td>
            <td style="font-weight:700;color:var(--de-gold);text-transform:uppercase;">${brandName}</td>
            <td style="color:var(--text-sub);max-width:240px;">${item.fitment || '-'}</td>
            <td style="color:var(--text-muted);text-transform:uppercase;font-size:11px;">${item.category || '-'}</td>
            <td style="text-align:center;">
              <button type="button" onclick="toggleSoldOutStatus('${item.id}')" class="status-pill-btn ${isOut ? 'soldout' : 'instock'}" title="Click to toggle Sold Out">
                ${isOut ? '🔴 SOLD OUT' : '🟢 IN STOCK'}
              </button>
            </td>
            <td style="text-align:right;white-space:nowrap;">
              <button type="button" onclick="openEditAccessoryModal('${item.id}')" class="row-action-btn">EDIT</button>
              <button type="button" onclick="handleDeleteAccessory('${item.id}')" class="row-action-btn danger" style="margin-left:4px;">DELETE</button>
            </td>
          </tr>
        `;
      }).join('');
    }
  }

  // 2. Render Mobile Touch Cards
  if (adminEl.adminMobileCardsList) {
    if (products.length === 0) {
      adminEl.adminMobileCardsList.innerHTML = `
        <div style="text-align:center;padding:36px 16px;color:var(--text-muted);font-size:12px;">
          NO MATCHING ACCESSORIES. TAP "+ ADD NEW ACCESSORY" BELOW.
        </div>
      `;
    } else {
      adminEl.adminMobileCardsList.innerHTML = products.map(item => {
        const brandObj = brands.find(b => b.id === item.brand);
        const brandName = getBrandDisplayName(brandObj, item.brand);
        const photoUrl = (item.images && item.images.length > 0) ? item.images[0] : item.image;
        const count = (item.images && item.images.length > 1) ? item.images.length : 1;
        const isOut = Boolean(item.isSoldOut);

        return `
          <div class="admin-mobile-card">
            <div class="amc-top">
              <div class="amc-thumb-wrap">
                <img src="${photoUrl}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'" />
                ${count > 1 ? `<span class="amc-photo-badge">${count}</span>` : ''}
              </div>
              <div class="amc-info">
                <div class="amc-tags">
                  <span class="amc-tag">${brandName}</span>
                  <span class="amc-cat">${item.category || 'ACCESSORY'}</span>
                </div>
                <div class="amc-title">${item.name}</div>
                <div class="amc-fit">FIT: ${item.fitment || 'All Models'}</div>
              </div>
            </div>
            <div class="amc-actions">
              <button type="button" onclick="toggleSoldOutStatus('${item.id}')" class="status-pill-btn ${isOut ? 'soldout' : 'instock'}">
                ${isOut ? '🔴 SOLD OUT' : '🟢 IN STOCK'}
              </button>
              <button type="button" onclick="openEditAccessoryModal('${item.id}')" class="row-action-btn">EDIT</button>
              <button type="button" onclick="handleDeleteAccessory('${item.id}')" class="row-action-btn danger">DEL</button>
            </div>
          </div>
        `;
      }).join('');
    }
  }
}

window.toggleSoldOutStatus = async function(id) {
  const item = adminState.catalog.products.find(p => p.id === id);
  if (!item) return;

  item.isSoldOut = !item.isSoldOut;
  renderAdminAccessoriesTable();
  await syncToDisk(adminState.catalog);
  showToast(item.isSoldOut
    ? `🔴 "${item.name}" MARKED SOLD OUT`
    : `🟢 "${item.name}" RETURNED TO IN STOCK`
  );
};

window.openAddAccessoryModal = function() {
  adminState.editingAccessoryId = null;
  adminEl.accessoryModalTitle.textContent = "ADD NEW ACCESSORY";
  adminEl.formAccessoryId.value = "";
  adminEl.formAccessoryName.value = "";
  adminEl.formAccessoryFitment.value = "";
  adminEl.formAccessoryDesc.value = "";
  if (adminEl.formAccessorySoldOut) adminEl.formAccessorySoldOut.checked = false;
  if (adminEl.formImageUrlInput) adminEl.formImageUrlInput.value = "";

  adminState.activePhotos = [];
  renderPhotosGallery();

  const brands = adminState.catalog.brands.filter(b => b.id !== 'all');
  adminEl.formAccessoryBrand.innerHTML = brands.map(b => `<option value="${b.id}">${getBrandDisplayName(b, b.id)}</option>`).join('');

  const cats = adminState.catalog.categories.filter(c => c.id !== 'all');
  adminEl.formAccessoryCategory.innerHTML = cats.map(c => `<option value="${c.id}">${c.name}</option>`).join('');

  adminEl.accessoryModal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.openEditAccessoryModal = function(id) {
  const item = adminState.catalog.products.find(p => p.id === id);
  if (!item) return;

  adminState.editingAccessoryId = id;
  adminEl.accessoryModalTitle.textContent = "EDIT ACCESSORY";
  adminEl.formAccessoryId.value = item.id;
  adminEl.formAccessoryName.value = item.name;
  adminEl.formAccessoryFitment.value = item.fitment || '';
  adminEl.formAccessoryDesc.value = item.description || '';
  if (adminEl.formAccessorySoldOut) adminEl.formAccessorySoldOut.checked = Boolean(item.isSoldOut);
  if (adminEl.formImageUrlInput) adminEl.formImageUrlInput.value = "";

  const brands = adminState.catalog.brands.filter(b => b.id !== 'all');
  adminEl.formAccessoryBrand.innerHTML = brands.map(b => `
    <option value="${b.id}" ${b.id === item.brand ? 'selected' : ''}>${getBrandDisplayName(b, b.id)}</option>
  `).join('');

  const cats = adminState.catalog.categories.filter(c => c.id !== 'all');
  adminEl.formAccessoryCategory.innerHTML = cats.map(c => `
    <option value="${c.id}" ${normCat(c.id) === normCat(item.category) ? 'selected' : ''}>${c.name}</option>
  `).join('');

  if (item.images && Array.isArray(item.images) && item.images.length > 0) {
    adminState.activePhotos = [...item.images];
  } else if (item.image) {
    adminState.activePhotos = [item.image];
  } else {
    adminState.activePhotos = [];
  }
  renderPhotosGallery();

  adminEl.accessoryModal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeAccessoryModal = function() {
  adminEl.accessoryModal.classList.remove('active');
  document.body.style.overflow = '';
};

// ============================================================
// MULTI-PHOTO GALLERY & UPLOAD HANDLERS
// ============================================================
function renderPhotosGallery() {
  if (!adminEl.photosListContainer || !adminEl.photoPreviewContainer) return;
  const photos = adminState.activePhotos || [];

  if (photos.length === 0) {
    adminEl.photoPreviewContainer.classList.add('hidden');
    return;
  }

  adminEl.photoPreviewContainer.classList.remove('hidden');
  if (adminEl.photoCountBadge) {
    adminEl.photoCountBadge.textContent = `${photos.length} Photo${photos.length > 1 ? 's' : ''}`;
  }

  adminEl.photosListContainer.innerHTML = photos.map((imgUrl, idx) => {
    const isCover = idx === 0;
    return `
      <div style="background:var(--bg-surface);border:1.5px solid ${isCover ? 'var(--de-red)' : 'var(--border-soft)'};border-radius:10px;padding:4px;display:flex;flex-direction:column;justify-content:space-between;">
        <div style="aspect-ratio:1/1;overflow:hidden;border-radius:6px;background:var(--bg-img-box);position:relative;display:flex;align-items:center;justify-content:center;">
          <img src="${imgUrl}" style="width:100%;height:100%;object-fit:cover;" />
          <span style="position:absolute;top:4px;left:4px;background:${isCover ? 'var(--de-red)' : 'rgba(17,18,21,0.8)'};color:#fff;font-size:8px;font-weight:700;padding:1px 5px;border-radius:4px;">
            ${isCover ? 'COVER' : `#${idx + 1}`}
          </span>
          <button type="button" onclick="removePhotoAtIndex(${idx})" style="position:absolute;top:4px;right:4px;background:rgba(17,18,21,0.85);color:#fff;width:18px;height:18px;border-radius:99px;border:none;font-size:12px;cursor:pointer;line-height:1;">
            &times;
          </button>
        </div>
        <div style="padding-top:4px;text-align:center;">
          ${!isCover ? `
            <button type="button" onclick="setCoverPhotoIndex(${idx})" style="background:none;border:none;font-size:9px;font-weight:700;color:var(--text-sub);cursor:pointer;text-transform:uppercase;">
              Make Cover
            </button>
          ` : `
            <span style="font-size:9px;font-weight:700;color:var(--de-gold);text-transform:uppercase;">Main Cover</span>
          `}
        </div>
      </div>
    `;
  }).join('');
}

window.removePhotoAtIndex = function(idx) {
  adminState.activePhotos.splice(idx, 1);
  renderPhotosGallery();
  showToast("Photo removed");
};

window.setCoverPhotoIndex = function(idx) {
  const chosen = adminState.activePhotos.splice(idx, 1)[0];
  adminState.activePhotos.unshift(chosen);
  renderPhotosGallery();
  showToast("Set as main cover photo");
};

window.clearAllPhotos = function() {
  adminState.activePhotos = [];
  renderPhotosGallery();
  if (adminEl.formImageUrlInput) adminEl.formImageUrlInput.value = '';
};

window.handleAddUrlPhoto = function() {
  const url = adminEl.formImageUrlInput.value.trim();
  if (!url) return;
  adminState.activePhotos.push(url);
  adminEl.formImageUrlInput.value = '';
  renderPhotosGallery();
  showToast("Added photo link");
};

window.handleDragOver = function(e) {
  e.preventDefault();
  e.stopPropagation();
  adminEl.dragDropZone.classList.add('dragover');
};

window.handleDragLeave = function(e) {
  e.preventDefault();
  e.stopPropagation();
  adminEl.dragDropZone.classList.remove('dragover');
};

window.handleDropFile = function(e) {
  e.preventDefault();
  e.stopPropagation();
  adminEl.dragDropZone.classList.remove('dragover');
  if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    processMultipleImageFiles(Array.from(e.dataTransfer.files));
  }
};

window.handleFileSelect = function(e) {
  if (e.target.files && e.target.files.length > 0) {
    processMultipleImageFiles(Array.from(e.target.files));
  }
};

function processMultipleImageFiles(fileList) {
  const imageFiles = fileList.filter(f => f.type.startsWith('image/'));
  if (imageFiles.length === 0) {
    alert("Please select or drop valid image files (JPG, PNG, WebP).");
    return;
  }

  let loadedCount = 0;
  imageFiles.forEach(file => {
    const reader = new FileReader();
    reader.onload = function(event) {
      adminState.activePhotos.push(event.target.result);
      loadedCount++;
      if (loadedCount === imageFiles.length) {
        renderPhotosGallery();
        showToast(`Loaded ${imageFiles.length} photo(s)!`);
      }
    };
    reader.readAsDataURL(file);
  });
}

window.handleSaveAccessory = async function(e) {
  e.preventDefault();

  const name = adminEl.formAccessoryName.value.trim();
  const brand = adminEl.formAccessoryBrand.value;
  const category = adminEl.formAccessoryCategory.value;
  const fitment = adminEl.formAccessoryFitment.value.trim();
  const desc = adminEl.formAccessoryDesc.value.trim();
  const isSoldOut = adminEl.formAccessorySoldOut ? adminEl.formAccessorySoldOut.checked : false;

  if (!adminState.activePhotos || adminState.activePhotos.length === 0) {
    alert("Please add at least one photo using phone gallery, drag & drop, or photo link.");
    return;
  }

  const primaryPhoto = adminState.activePhotos[0];
  const allPhotos = [...adminState.activePhotos];

  if (adminState.editingAccessoryId) {
    const item = adminState.catalog.products.find(p => p.id === adminState.editingAccessoryId);
    if (item) {
      item.name = name;
      item.brand = brand;
      item.category = category;
      item.fitment = fitment;
      item.description = desc;
      item.isSoldOut = isSoldOut;
      item.image = primaryPhoto;
      item.images = allPhotos;
    }
  } else {
    const newId = `${brand}-${Date.now().toString(36)}`;
    adminState.catalog.products.unshift({
      id: newId,
      name, brand, category, fitment,
      description: desc,
      isSoldOut,
      image: primaryPhoto,
      images: allPhotos
    });
  }

  const cloudSynced = await syncToDisk(adminState.catalog);
  renderAdminAccessoriesTable();
  closeAccessoryModal();
  showToast(cloudSynced ? "✓ SAVED & PUBLISHED LIVE!" : `✓ SAVED ${allPhotos.length} PHOTO(S)!`);
};

window.handleDeleteAccessory = async function(id) {
  const item = adminState.catalog.products.find(p => p.id === id);
  if (!item) return;

  if (confirm(`Delete "${item.name}"?`)) {
    adminState.catalog.products = adminState.catalog.products.filter(p => p.id !== id);
    const cloudSynced = await syncToDisk(adminState.catalog);
    renderAdminAccessoriesTable();
    showToast(cloudSynced ? "✓ Deleted & synced to cloud" : "Deleted from catalog");
  }
};

// ============================================================
// CATEGORIES & CAR BRANDS MANAGEMENT
// ============================================================
function renderAdminCategories() {
  if (!adminEl.adminCategoriesList) return;
  const cats = adminState.catalog.categories.filter(c => c.id !== 'all');

  adminEl.adminCategoriesList.innerHTML = cats.map(c => {
    const count = adminState.catalog.products.filter(p => normCat(p.category) === normCat(c.id)).length;
    return `
      <li class="admin-list-row">
        <div>
          <strong style="font-size:12px;text-transform:uppercase;display:block;color:var(--text-main);">${c.name}</strong>
          <span style="font-size:10.5px;color:var(--text-muted);">${count} accessories listed</span>
        </div>
        <button type="button" onclick="handleDeleteCategory('${c.id}')" class="row-action-btn danger">Remove</button>
      </li>
    `;
  }).join('');
}

window.handleAddNewCategory = async function() {
  const name = adminEl.newCategoryInput.value.trim();
  if (!name) return;
  const id = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (adminState.catalog.categories.some(c => c.id === id)) {
    alert("A category with this name already exists.");
    return;
  }

  adminState.catalog.categories.push({ id, name: name.toUpperCase() });
  await syncToDisk(adminState.catalog);
  adminEl.newCategoryInput.value = '';
  renderAdminCategories();
  updateAdminCounters();
  showToast("Added Category & Saved to Cloud");
};

window.handleDeleteCategory = async function(catId) {
  if (confirm("Remove this category?")) {
    adminState.catalog.categories = adminState.catalog.categories.filter(c => c.id !== catId);
    await syncToDisk(adminState.catalog);
    renderAdminCategories();
    updateAdminCounters();
    showToast("Category removed & Saved to Cloud");
  }
};

function renderAdminBrands() {
  if (!adminEl.adminBrandsList) return;
  const brands = adminState.catalog.brands.filter(b => b.id !== 'all');

  adminEl.adminBrandsList.innerHTML = brands.map(b => {
    const count = adminState.catalog.products.filter(p => p.brand === b.id).length;
    return `
      <li class="admin-list-row">
        <div>
          <strong style="font-size:12px;text-transform:uppercase;display:block;color:var(--text-main);">${getBrandDisplayName(b, b.id)}</strong>
          <span style="font-size:10.5px;color:var(--text-muted);">${count} accessories</span>
        </div>
        <button type="button" onclick="handleDeleteBrand('${b.id}')" class="row-action-btn danger">Remove</button>
      </li>
    `;
  }).join('');
}

window.handleAddNewBrand = async function() {
  const name = adminEl.newBrandInput.value.trim();
  if (!name) return;
  const id = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (adminState.catalog.brands.some(b => b.id === id)) {
    alert("This car brand already exists.");
    return;
  }

  adminState.catalog.brands.push({ id, name: name.toUpperCase(), logo: name.toUpperCase() });
  await syncToDisk(adminState.catalog);
  adminEl.newBrandInput.value = '';
  renderAdminBrands();
  populateBrandFilterDropdown();
  updateAdminCounters();
  showToast("Added Car Brand & Saved to Cloud");
};

window.handleDeleteBrand = async function(brandId) {
  if (confirm("Remove this car brand?")) {
    adminState.catalog.brands = adminState.catalog.brands.filter(b => b.id !== brandId);
    await syncToDisk(adminState.catalog);
    renderAdminBrands();
    populateBrandFilterDropdown();
    updateAdminCounters();
    showToast("Car brand removed & Saved to Cloud");
  }
};

// ============================================================
// EXPORT & RESET
// ============================================================
window.exportUpdatedProductsJS = function() {
  const fileContent = `/**
 * KOKO ACCESSORIES - UPDATED CATALOG DATABASE
 * Exported from Admin Panel
 */

const DEFAULT_CAR_BRANDS = ${JSON.stringify(adminState.catalog.brands, null, 2)};

const DEFAULT_CATEGORIES = ${JSON.stringify(adminState.catalog.categories, null, 2)};

const DEFAULT_PRODUCTS = ${JSON.stringify(adminState.catalog.products, null, 2)};

function getCatalogData() {
  try {
    const saved = localStorage.getItem('koko_catalog_data');
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error("Error reading localStorage:", e);
  }
  return {
    brands: DEFAULT_CAR_BRANDS,
    categories: DEFAULT_CATEGORIES,
    products: DEFAULT_PRODUCTS
  };
}

function saveCatalogData(data) {
  try {
    localStorage.setItem('koko_catalog_data', JSON.stringify(data));
  } catch (e) {
    console.error("Error saving to localStorage:", e);
  }
}
`;

  const blob = new Blob([fileContent], { type: 'application/javascript;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'products.js';
  a.click();
  showToast("Downloaded products.js backup file");
};

window.handleResetToDefaultData = async function() {
  if (confirm("Reset all accessories, brands, and categories to the default sample state?")) {
    localStorage.removeItem('koko_catalog_data');
    adminState.catalog = getSafeCatalog();
    await syncToDisk(adminState.catalog);
    populateBrandFilterDropdown();
    renderAdminAccessoriesTable();
    renderAdminCategories();
    renderAdminBrands();
    showToast("Reset to default catalog & Saved");
  }
};

let toastTimer = null;
function showToast(msg) {
  if (!adminEl.toast) return;
  adminEl.toast.textContent = msg;
  adminEl.toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => adminEl.toast.classList.remove('show'), 2800);
}
