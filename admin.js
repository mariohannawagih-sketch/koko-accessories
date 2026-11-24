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

  let deletedIds = [];
  let deletedBrands = [];
  let deletedCats = [];
  try {
    deletedIds = JSON.parse(localStorage.getItem('koko_catalog_deleted_ids') || '[]');
  } catch (e) {}
  try {
    deletedBrands = JSON.parse(localStorage.getItem('koko_catalog_deleted_brands') || '[]');
  } catch (e) {}
  try {
    deletedCats = JSON.parse(localStorage.getItem('koko_catalog_deleted_cats') || '[]');
  } catch (e) {}

  if (Array.isArray(cat.deletedProductIds)) {
    deletedIds = Array.from(new Set([...deletedIds, ...cat.deletedProductIds]));
  }
  if (Array.isArray(cat.deletedBrandIds)) {
    deletedBrands = Array.from(new Set([...deletedBrands, ...cat.deletedBrandIds]));
  }
  if (Array.isArray(cat.deletedCategoryIds)) {
    deletedCats = Array.from(new Set([...deletedCats, ...cat.deletedCategoryIds]));
  }

  const defaultBrands = (typeof DEFAULT_CAR_BRANDS !== 'undefined' && Array.isArray(DEFAULT_CAR_BRANDS)) ? DEFAULT_CAR_BRANDS : [];
  const defaultCats = (typeof DEFAULT_CATEGORIES !== 'undefined' && Array.isArray(DEFAULT_CATEGORIES)) ? DEFAULT_CATEGORIES : [];
  const defaultProds = (typeof DEFAULT_PRODUCTS !== 'undefined' && Array.isArray(DEFAULT_PRODUCTS)) ? DEFAULT_PRODUCTS : [];

  let rawBrands = Array.isArray(cat.brands) && cat.brands.length > 0 ? cat.brands : defaultBrands;
  let rawCats = Array.isArray(cat.categories) && cat.categories.length > 0 ? cat.categories : defaultCats;
  let rawProds = Array.isArray(cat.products) ? cat.products : (Array.isArray(cat) ? cat : defaultProds);

  let brands = rawBrands.filter(b => b && b.id && !deletedBrands.includes(b.id));
  let categories = rawCats.filter(c => c && c.id && !deletedCats.includes(c.id));
  let products = rawProds
    .filter(p => p && p.id && !deletedIds.includes(p.id))
    .map(p => {
      const copy = { ...p, isSoldOut: Boolean(p.isSoldOut || p.soldOut) };
      if ('soldOut' in copy) delete copy.soldOut;
      return copy;
    });

  if (!brands.some(b => b.id === 'all')) {
    brands.unshift({ id: "all", name: "ALL CARS", logo: "ALL" });
  }

  let updatedAt = Number(cat.updatedAt || 0) || 0;
  if (!updatedAt) {
    try { updatedAt = Number(localStorage.getItem('koko_catalog_updated_at') || 0) || 0; } catch (e) {}
  }

  return {
    brands,
    categories,
    products,
    deletedProductIds: deletedIds,
    deletedBrandIds: deletedBrands,
    deletedCategoryIds: deletedCats,
    updatedAt
  };
}

const CATALOG_DIRTY_KEY = 'koko_catalog_dirty';
const CATALOG_UPDATED_KEY = 'koko_catalog_updated_at';

function parseTimeMs(val) {
  if (!val) return 0;
  if (typeof val === 'number' && Number.isFinite(val)) return val;
  const asNum = Number(val);
  if (Number.isFinite(asNum) && asNum > 0) return asNum;
  const parsed = Date.parse(String(val));
  return Number.isFinite(parsed) ? parsed : 0;
}

function normCat(val) {
  return (val || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function getBrandDisplayName(brandObj, fallbackId) {
  if (!brandObj) return (fallbackId || 'CUSTOM').toUpperCase();
  if (brandObj.id === 'audislien' && brandObj.name === 'AUDI S LIEN') return 'AUDI S LINE';
  return brandObj.name || brandObj.id.toUpperCase();
}

function escapeHtml(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getTodayISO() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
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
  hasMergedCloudOnce: false,
  isSyncingCatalog: false,
  sales: [],
  salesPeriod: '7d',
  editingSaleId: null,
  hasLoadedCloudSalesOnce: false
};

const adminEl = {
  loginGate: document.getElementById('loginGate'),
  adminDashboard: document.getElementById('adminDashboard'),
  adminEmailInput: document.getElementById('adminEmailInput'),
  adminPassInput: document.getElementById('adminPassInput'),
  syncStatusBadge: document.getElementById('syncStatusBadge'),

  tabBtnAccessories: document.getElementById('tabBtnAccessories'),
  tabBtnSales: document.getElementById('tabBtnSales'),
  tabBtnCategories: document.getElementById('tabBtnCategories'),
  tabBtnBrands: document.getElementById('tabBtnBrands'),
  tabBtnExport: document.getElementById('tabBtnExport'),
  tabContentAccessories: document.getElementById('tabContentAccessories'),
  tabContentSales: document.getElementById('tabContentSales'),
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
  const label = document.getElementById('adminThemeLabel');
  if (theme === 'dark') {
    html.classList.add('dark');
    if (label) label.textContent = 'DARK';
  } else {
    html.classList.remove('dark');
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
  } else {
    checkDiskSyncConnection(false);
  }
  setInterval(() => checkDiskSyncConnection(false), 5000);
});

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && adminState.isLoggedIn) {
    checkDiskSyncConnection(true);
    loadSalesFromCloud(true);
  }
});

window.addEventListener('pageshow', (e) => {
  if (e.persisted && adminState.isLoggedIn) {
    checkDiskSyncConnection(true);
    loadSalesFromCloud(true);
  }
});

async function fetchCloudCatalog(force = false) {
  const isDirty = (() => {
    try { return localStorage.getItem(CATALOG_DIRTY_KEY) === '1'; } catch (e) { return false; }
  })();

  if (isDirty) {
    if (!adminState.isSyncingCatalog) {
      await syncToDisk(adminState.catalog);
    }
    return true;
  }

  if (adminState.hasMergedCloudOnce && !force) {
    return true;
  }

  try {
    const catRes = await fetch(`/api/catalog?_t=${Date.now()}`, { cache: 'no-store' });
    if (!catRes.ok) return false;
    const catData = await catRes.json();
    if (!catData || !Array.isArray(catData.products) || catData.status === "fallback") {
      return false;
    }

    adminState.hasMergedCloudOnce = true;

    const cloudUpdatedAt = parseTimeMs(catData.updatedAt);
    let localUpdatedAt = parseTimeMs(adminState.catalog && adminState.catalog.updatedAt);
    try {
      const storedTs = parseTimeMs(localStorage.getItem(CATALOG_UPDATED_KEY));
      if (storedTs > localUpdatedAt) localUpdatedAt = storedTs;
    } catch (e) {}

    // Protect against Cloudflare KV 60s edge cache serving an older snapshot right after a save
    if (localUpdatedAt > 0 && (Date.now() - localUpdatedAt) < 90000 && cloudUpdatedAt < localUpdatedAt) {
      return true;
    }

    const deletedIds = Array.isArray(catData.deletedProductIds) ? Array.from(new Set(catData.deletedProductIds)) : [];
    const deletedBrandIds = Array.isArray(catData.deletedBrandIds) ? Array.from(new Set(catData.deletedBrandIds)) : [];
    const deletedCatIds = Array.isArray(catData.deletedCategoryIds) ? Array.from(new Set(catData.deletedCategoryIds)) : [];

    const liveProducts = catData.products
      .filter(p => p && p.id && !deletedIds.includes(p.id))
      .map(p => {
        const copy = { ...p, isSoldOut: Boolean(p.isSoldOut || p.soldOut) };
        if ('soldOut' in copy) delete copy.soldOut;
        return copy;
      });

    const defaultBrands = (typeof DEFAULT_CAR_BRANDS !== 'undefined' && Array.isArray(DEFAULT_CAR_BRANDS)) ? DEFAULT_CAR_BRANDS : [];
    let liveBrands = (Array.isArray(catData.brands) && catData.brands.length > 0)
      ? catData.brands.filter(b => b && b.id && !deletedBrandIds.includes(b.id))
      : defaultBrands.filter(b => !deletedBrandIds.includes(b.id));
    if (!liveBrands.some(b => b.id === 'all')) {
      liveBrands.unshift({ id: "all", name: "ALL CARS", logo: "ALL" });
    }

    const defaultCats = (typeof DEFAULT_CATEGORIES !== 'undefined' && Array.isArray(DEFAULT_CATEGORIES)) ? DEFAULT_CATEGORIES : [];
    let liveCats = (Array.isArray(catData.categories) && catData.categories.length > 0)
      ? catData.categories.filter(c => c && c.id && !deletedCatIds.includes(c.id))
      : defaultCats.filter(c => !deletedCatIds.includes(c.id));

    adminState.catalog = {
      brands: liveBrands,
      categories: liveCats,
      products: liveProducts,
      deletedProductIds: deletedIds,
      deletedBrandIds: deletedBrandIds,
      deletedCategoryIds: deletedCatIds,
      updatedAt: cloudUpdatedAt || Date.now()
    };

    saveCatalogData(adminState.catalog, { replaceTombstones: true });
    populateBrandFilterDropdown();
    renderAdminAccessoriesTable();
    renderAdminCategories();
    renderAdminBrands();
    populateSalesFormOptions();
    updateAdminCounters();
    return true;
  } catch (eCat) {
    return false;
  }
}

async function checkDiskSyncConnection(forceCatalogFetch = false) {
  const isDirty = (() => {
    try { return localStorage.getItem(CATALOG_DIRTY_KEY) === '1'; } catch (e) { return false; }
  })();

  try {
    const cloudHealthRes = await fetch(`/api/health?_t=${Date.now()}`, { cache: 'no-store' });
    if (cloudHealthRes.ok) {
      const hData = await cloudHealthRes.json();
      if (hData && hData.status === 'ok') {
        if (hData.autoSave && !hData.cloudDatabase) {
          adminState.isDiskSyncConnected = true;
        } else {
          adminState.isCloudSyncConnected = true;
        }
        if (!adminState.isSyncingCatalog) {
          updateSyncStatusUI(isDirty ? 'error' : 'live');
        }

        if (adminState.isCloudSyncConnected) {
          await fetchCloudCatalog(forceCatalogFetch);
          if (!adminState.hasLoadedCloudSalesOnce) {
            adminState.hasLoadedCloudSalesOnce = true;
            loadSalesFromCloud();
          }
        }
        return true;
      }
    }
  } catch (eCloud) {}

  try {
    if ((window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') && window.location.port === '5500') {
      const res = await fetch('http://localhost:5500/api/health', { cache: 'no-cache' });
      if (res.ok) {
        adminState.isDiskSyncConnected = true;
        if (!adminState.isSyncingCatalog) {
          updateSyncStatusUI(isDirty ? 'error' : 'live');
        }
        return true;
      }
    }
  } catch (e) {}

  if (!adminState.isSyncingCatalog) {
    updateSyncStatusUI(isDirty ? 'error' : false);
  }
  return false;
}

window.forceSyncFromCloud = async function() {
  const isDirty = (() => {
    try { return localStorage.getItem(CATALOG_DIRTY_KEY) === '1'; } catch (e) { return false; }
  })();
  if (isDirty) {
    const ok = await syncToDisk(adminState.catalog);
    showToast(ok ? "✓ Pending changes synced to Cloud!" : "⚠ Cloud sync still failing — check internet connection");
  } else {
    showToast("Refreshing from Cloud...");
    const ok = await fetchCloudCatalog(true);
    await loadSalesFromCloud(true);
    showToast(ok ? "✓ Synced latest catalog from Cloud" : "⚠ Could not reach Cloud server");
  }
};

function updateSyncStatusUI(status) {
  if (!adminEl.syncStatusBadge) return;
  adminEl.syncStatusBadge.classList.remove('sync-error', 'syncing');

  let label = 'OFFLINE (LOCAL)';
  if (status === 'saving') {
    adminEl.syncStatusBadge.classList.add('syncing');
    label = 'SAVING TO CLOUD...';
  } else if (status === 'error') {
    adminEl.syncStatusBadge.classList.add('sync-error');
    label = 'SYNC RETRY NEEDED';
  } else if (status === 'live' || status === true) {
    label = 'CLOUD AUTO-SAVE LIVE';
  }

  adminEl.syncStatusBadge.innerHTML = `
    <span class="cloud-dot"></span>
    <span class="cloud-text">${label}</span>
  `;
}

async function syncToDisk(catalogData) {
  if (!catalogData || typeof catalogData !== 'object') return false;
  adminState.isSyncingCatalog = true;

  let prevTs = 0;
  try { prevTs = Number(localStorage.getItem(CATALOG_UPDATED_KEY) || 0) || 0; } catch (e) {}
  const nextTs = Math.max(Date.now(), prevTs + 1);
  catalogData.updatedAt = nextTs;

  if (Array.isArray(catalogData.products)) {
    catalogData.products.forEach(p => {
      if (p && typeof p === 'object') {
        p.isSoldOut = Boolean(p.isSoldOut || p.soldOut);
        if ('soldOut' in p) delete p.soldOut;
      }
    });
  }

  try { localStorage.setItem(CATALOG_DIRTY_KEY, '1'); } catch (e) {}
  try { localStorage.setItem(CATALOG_UPDATED_KEY, String(nextTs)); } catch (e) {}
  saveCatalogData(catalogData);
  updateSyncStatusUI('saving');

  let saved = false;
  const payloadStr = JSON.stringify(catalogData);

  const tryPostCloud = async () => {
    const cloudRes = await fetch('/api/catalog', {
      method: 'POST',
      cache: 'no-store',
      headers: { 'Content-Type': 'application/json' },
      body: payloadStr
    });
    if (!cloudRes.ok) {
      throw new Error(`HTTP ${cloudRes.status}`);
    }
    return cloudRes.json();
  };

  try {
    let resData = null;
    try {
      resData = await tryPostCloud();
    } catch (firstErr) {
      await new Promise(r => setTimeout(r, 800));
      resData = await tryPostCloud();
    }

    if (resData && resData.catalog && Array.isArray(resData.catalog.products)) {
      adminState.catalog = resData.catalog;
    } else if (resData && resData.updatedAt) {
      adminState.catalog.updatedAt = resData.updatedAt;
    }

    const finalTs = (adminState.catalog && adminState.catalog.updatedAt) || (resData && resData.updatedAt) || nextTs;
    try {
      localStorage.setItem(CATALOG_DIRTY_KEY, '0');
      localStorage.setItem(CATALOG_UPDATED_KEY, String(finalTs));
    } catch (e) {}
    saveCatalogData(adminState.catalog, { replaceTombstones: true });
    saved = true;
  } catch (errCloud) {
    console.warn("Cloud catalog POST failed:", errCloud);
  }

  // Optional local dev server mirror (when running server.py on localhost:5500)
  try {
    if (!adminState.isCloudSyncConnected && (adminState.isDiskSyncConnected || window.location.port === '5500')) {
      const res = await fetch('http://localhost:5500/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payloadStr
      });
      if (res.ok) {
        const result = await res.json();
        if (!saved && result.products) {
          adminState.catalog.products = result.products;
        }
        if (!saved) {
          try {
            localStorage.setItem(CATALOG_DIRTY_KEY, '0');
            localStorage.setItem(CATALOG_UPDATED_KEY, String(nextTs));
          } catch (e) {}
          saveCatalogData(adminState.catalog, { replaceTombstones: true });
        }
        saved = true;
      }
    }
  } catch (errLocal) {}

  adminState.isSyncingCatalog = false;
  updateSyncStatusUI(saved ? 'live' : 'error');
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

  if (!adminState.hasMergedCloudOnce) {
    adminState.catalog = getSafeCatalog();
  }
  loadLocalSales();
  populateBrandFilterDropdown();
  populateSalesFormOptions();
  renderAdminAccessoriesTable();
  renderAdminCategories();
  renderAdminBrands();
  updateSalesCounter();
  if (adminState.currentTab === 'sales') {
    renderSalesDashboard();
  }
  checkDiskSyncConnection(true);
  loadSalesFromCloud(true);
}

window.switchAdminTab = function(tabName) {
  adminState.currentTab = tabName;
  const tabs = ['accessories', 'sales', 'categories', 'brands', 'export'];
  tabs.forEach(t => {
    const cap = t.charAt(0).toUpperCase() + t.slice(1);
    const btn = document.getElementById(`tabBtn${cap}`);
    const content = document.getElementById(`tabContent${cap}`);
    if (btn) btn.classList.toggle('active', t === tabName);
    if (content) content.classList.toggle('hidden', t !== tabName);
  });

  const deskBtn = document.getElementById('desktopPrimaryActionBtn');
  const mobFab = document.getElementById('mobilePrimaryFab');
  if (tabName === 'sales') {
    if (deskBtn) {
      deskBtn.textContent = '+ LOG SALE';
      deskBtn.onclick = () => openSaleModal(null);
    }
    if (mobFab) {
      mobFab.textContent = "+ LOG TODAY'S SALE";
      mobFab.onclick = () => openSaleModal(null);
    }
    populateSalesFormOptions();
    renderSalesDashboard();
  } else {
    if (deskBtn) {
      deskBtn.textContent = '+ ADD ACCESSORY';
      deskBtn.onclick = () => openAddAccessoryModal();
    }
    if (mobFab) {
      mobFab.textContent = '+ ADD NEW ACCESSORY';
      mobFab.onclick = () => openAddAccessoryModal();
    }
  }

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
            <td dir="auto" style="font-weight:600;max-width:260px;text-transform:uppercase;">${item.name}</td>
            <td style="font-weight:700;color:var(--de-gold);text-transform:uppercase;">${brandName}</td>
            <td dir="auto" style="color:var(--text-sub);max-width:240px;">${item.fitment || '-'}</td>
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
                <div class="amc-title" dir="auto">${item.name}</div>
                <div class="amc-fit">FIT: <span dir="auto">${item.fitment || 'All Models'}</span></div>
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
  const synced = await syncToDisk(adminState.catalog);
  renderAdminAccessoriesTable();
  if (!synced) {
    showToast(`⚠ Changed locally ONLY — Cloud sync failed, retrying...`);
    return;
  }
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

async function compressImageFile(file, maxDim = 1000, quality = 0.8) {
  return new Promise((resolve, reject) => {
    const readOriginal = () => {
      const reader = new FileReader();
      reader.onload = ev => resolve(ev.target.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    };

    try {
      const objUrl = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        try {
          let w = img.naturalWidth || img.width;
          let h = img.naturalHeight || img.height;
          if (!w || !h) {
            URL.revokeObjectURL(objUrl);
            readOriginal();
            return;
          }
          if (w <= maxDim && h <= maxDim && file.size <= 150 * 1024) {
            URL.revokeObjectURL(objUrl);
            readOriginal();
            return;
          }
          if (w > maxDim || h > maxDim) {
            const scale = Math.min(maxDim / w, maxDim / h);
            w = Math.max(1, Math.round(w * scale));
            h = Math.max(1, Math.round(h * scale));
          }
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            URL.revokeObjectURL(objUrl);
            readOriginal();
            return;
          }
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, w, h);
          ctx.drawImage(img, 0, 0, w, h);
          let compressed = canvas.toDataURL('image/jpeg', quality);
          if (compressed && compressed.length > 350000 && quality > 0.52) {
            compressed = canvas.toDataURL('image/jpeg', 0.52);
          }
          URL.revokeObjectURL(objUrl);
          if (compressed && compressed.startsWith('data:image/')) {
            resolve(compressed);
          } else {
            readOriginal();
          }
        } catch (errCanvas) {
          URL.revokeObjectURL(objUrl);
          readOriginal();
        }
      };
      img.onerror = () => {
        URL.revokeObjectURL(objUrl);
        readOriginal();
      };
      img.src = objUrl;
    } catch (e) {
      readOriginal();
    }
  });
}

async function processMultipleImageFiles(fileList) {
  const imageFiles = fileList.filter(f => f.type.startsWith('image/'));
  if (imageFiles.length === 0) {
    alert("Please select or drop valid image files (JPG, PNG, WebP).");
    return;
  }

  showToast(`Compressing ${imageFiles.length} photo(s)...`);
  let added = 0;
  for (const file of imageFiles) {
    try {
      const dataUrl = await compressImageFile(file, 1000, 0.8);
      if (dataUrl) {
        adminState.activePhotos.push(dataUrl);
        added++;
      }
    } catch (e) {
      console.error("Failed reading image file:", e);
    }
  }
  renderPhotosGallery();
  showToast(`✓ Loaded ${added} compressed photo(s)!`);
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

  const saveBtn = document.getElementById('saveAccessoryBtn');
  const prevBtnTxt = saveBtn ? saveBtn.textContent : 'SAVE ACCESSORY';
  if (saveBtn) {
    saveBtn.disabled = true;
    saveBtn.textContent = 'SAVING...';
  }

  try {
    const primaryPhoto = adminState.activePhotos[0];
    const allPhotos = [...adminState.activePhotos];

    let savedProdId = null;
    if (adminState.editingAccessoryId) {
      const item = adminState.catalog.products.find(p => p.id === adminState.editingAccessoryId);
      if (item) {
        item.name = name;
        item.brand = brand;
        item.category = category;
        item.fitment = fitment;
        item.description = desc;
        item.isSoldOut = isSoldOut;
        if ('soldOut' in item) delete item.soldOut;
        item.image = primaryPhoto;
        item.images = allPhotos;
        savedProdId = item.id;
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
      savedProdId = newId;
    }

    // Untombstone if previously deleted
    if (savedProdId) {
      if (Array.isArray(adminState.catalog.deletedProductIds)) {
        adminState.catalog.deletedProductIds = adminState.catalog.deletedProductIds.filter(x => x !== savedProdId);
      }
      try {
        const curDel = JSON.parse(localStorage.getItem('koko_catalog_deleted_ids') || '[]');
        const filteredDel = curDel.filter(x => x !== savedProdId);
        localStorage.setItem('koko_catalog_deleted_ids', JSON.stringify(filteredDel));
      } catch (e) {}
    }

    const cloudSynced = await syncToDisk(adminState.catalog);
    renderAdminAccessoriesTable();
    populateSalesFormOptions();
    updateAdminCounters();
    closeAccessoryModal();
    showToast(cloudSynced ? "✓ SAVED & PUBLISHED LIVE!" : "⚠ Saved locally ONLY — Cloud sync failed, retrying...");
  } finally {
    if (saveBtn) {
      saveBtn.disabled = false;
      saveBtn.textContent = prevBtnTxt;
    }
  }
};

window.handleDeleteAccessory = async function(id) {
  const item = adminState.catalog.products.find(p => p.id === id);
  if (!item) return;

  if (confirm(`Delete "${item.name}"?`)) {
    adminState.catalog.products = adminState.catalog.products.filter(p => p.id !== id);
    if (!Array.isArray(adminState.catalog.deletedProductIds)) {
      adminState.catalog.deletedProductIds = [];
    }
    if (!adminState.catalog.deletedProductIds.includes(id)) {
      adminState.catalog.deletedProductIds.push(id);
    }
    try {
      const cur = JSON.parse(localStorage.getItem('koko_catalog_deleted_ids') || '[]');
      if (!cur.includes(id)) {
        cur.push(id);
        localStorage.setItem('koko_catalog_deleted_ids', JSON.stringify(cur));
      }
    } catch (e) {}

    const cloudSynced = await syncToDisk(adminState.catalog);
    renderAdminAccessoriesTable();
    populateSalesFormOptions();
    updateAdminCounters();
    showToast(cloudSynced ? "✓ Deleted & Saved to Cloud" : "⚠ Deleted locally ONLY — Cloud sync failed, retrying...");
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

  // Untombstone if previously deleted
  if (Array.isArray(adminState.catalog.deletedCategoryIds)) {
    adminState.catalog.deletedCategoryIds = adminState.catalog.deletedCategoryIds.filter(x => x !== id);
  }
  try {
    const curDel = JSON.parse(localStorage.getItem('koko_catalog_deleted_cats') || '[]');
    const filteredDel = curDel.filter(x => x !== id);
    localStorage.setItem('koko_catalog_deleted_cats', JSON.stringify(filteredDel));
  } catch (e) {}

  adminState.catalog.categories.push({ id, name: name.toUpperCase() });
  const synced = await syncToDisk(adminState.catalog);
  adminEl.newCategoryInput.value = '';
  renderAdminCategories();
  updateAdminCounters();
  showToast(synced ? "Added Category & Saved to Cloud" : "⚠ Added locally ONLY — Cloud sync failed, retrying...");
};

window.handleDeleteCategory = async function(catId) {
  if (confirm("Remove this category?")) {
    adminState.catalog.categories = adminState.catalog.categories.filter(c => c.id !== catId);
    if (!Array.isArray(adminState.catalog.deletedCategoryIds)) {
      adminState.catalog.deletedCategoryIds = [];
    }
    if (!adminState.catalog.deletedCategoryIds.includes(catId)) {
      adminState.catalog.deletedCategoryIds.push(catId);
    }
    try {
      const cur = JSON.parse(localStorage.getItem('koko_catalog_deleted_cats') || '[]');
      if (!cur.includes(catId)) {
        cur.push(catId);
        localStorage.setItem('koko_catalog_deleted_cats', JSON.stringify(cur));
      }
    } catch (e) {}

    const synced = await syncToDisk(adminState.catalog);
    renderAdminCategories();
    updateAdminCounters();
    showToast(synced ? "Category removed & Saved to Cloud" : "⚠ Removed locally ONLY — Cloud sync failed, retrying...");
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

  // Untombstone if previously deleted
  if (Array.isArray(adminState.catalog.deletedBrandIds)) {
    adminState.catalog.deletedBrandIds = adminState.catalog.deletedBrandIds.filter(x => x !== id);
  }
  try {
    const curDel = JSON.parse(localStorage.getItem('koko_catalog_deleted_brands') || '[]');
    const filteredDel = curDel.filter(x => x !== id);
    localStorage.setItem('koko_catalog_deleted_brands', JSON.stringify(filteredDel));
  } catch (e) {}

  adminState.catalog.brands.push({ id, name: name.toUpperCase(), logo: name.toUpperCase() });
  const synced = await syncToDisk(adminState.catalog);
  adminEl.newBrandInput.value = '';
  renderAdminBrands();
  populateBrandFilterDropdown();
  populateSalesFormOptions();
  updateAdminCounters();
  showToast(synced ? "Added Car Brand & Saved to Cloud" : "⚠ Added locally ONLY — Cloud sync failed, retrying...");
};

window.handleDeleteBrand = async function(brandId) {
  if (confirm("Remove this car brand?")) {
    adminState.catalog.brands = adminState.catalog.brands.filter(b => b.id !== brandId);
    if (!Array.isArray(adminState.catalog.deletedBrandIds)) {
      adminState.catalog.deletedBrandIds = [];
    }
    if (!adminState.catalog.deletedBrandIds.includes(brandId)) {
      adminState.catalog.deletedBrandIds.push(brandId);
    }
    try {
      const cur = JSON.parse(localStorage.getItem('koko_catalog_deleted_brands') || '[]');
      if (!cur.includes(brandId)) {
        cur.push(brandId);
        localStorage.setItem('koko_catalog_deleted_brands', JSON.stringify(cur));
      }
    } catch (e) {}

    const synced = await syncToDisk(adminState.catalog);
    renderAdminBrands();
    populateBrandFilterDropdown();
    populateSalesFormOptions();
    updateAdminCounters();
    showToast(synced ? "Car brand removed & Saved to Cloud" : "⚠ Removed locally ONLY — Cloud sync failed, retrying...");
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
  let deletedIds = [];
  let deletedBrands = [];
  let deletedCats = [];
  let fallbackUpdatedAt = 0;
  try { deletedIds = JSON.parse(localStorage.getItem('koko_catalog_deleted_ids') || '[]'); } catch (e) {}
  try { deletedBrands = JSON.parse(localStorage.getItem('koko_catalog_deleted_brands') || '[]'); } catch (e) {}
  try { deletedCats = JSON.parse(localStorage.getItem('koko_catalog_deleted_cats') || '[]'); } catch (e) {}
  try { fallbackUpdatedAt = Number(localStorage.getItem('koko_catalog_updated_at') || 0) || 0; } catch (e) {}
  try {
    const saved = localStorage.getItem('koko_catalog_data');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && Array.isArray(parsed.products)) {
        return {
          brands: (parsed.brands || DEFAULT_CAR_BRANDS).filter(b => b && b.id && !deletedBrands.includes(b.id)),
          categories: (parsed.categories || DEFAULT_CATEGORIES).filter(c => c && c.id && !deletedCats.includes(c.id)),
          products: parsed.products.filter(p => p && p.id && !deletedIds.includes(p.id)).map(p => ({ ...p, isSoldOut: Boolean(p.isSoldOut || p.soldOut) })),
          deletedProductIds: deletedIds,
          deletedBrandIds: deletedBrands,
          deletedCategoryIds: deletedCats,
          updatedAt: Number(parsed.updatedAt || fallbackUpdatedAt || 0) || 0
        };
      }
    }
  } catch (e) {
    console.error("Error reading localStorage:", e);
  }
  return {
    brands: DEFAULT_CAR_BRANDS.filter(b => !deletedBrands.includes(b.id)),
    categories: DEFAULT_CATEGORIES.filter(c => !deletedCats.includes(c.id)),
    products: DEFAULT_PRODUCTS.filter(p => !deletedIds.includes(p.id)).map(p => ({ ...p, isSoldOut: Boolean(p.isSoldOut || p.soldOut) })),
    deletedProductIds: deletedIds,
    deletedBrandIds: deletedBrands,
    deletedCategoryIds: deletedCats,
    updatedAt: fallbackUpdatedAt
  };
}

function saveCatalogData(data) {
  try {
    if (data && data.updatedAt) {
      localStorage.setItem('koko_catalog_updated_at', String(data.updatedAt));
    }
    localStorage.setItem('koko_catalog_data', JSON.stringify(data));
    return true;
  } catch (e) {
    console.error("Error saving to localStorage:", e);
    return false;
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
    localStorage.removeItem('koko_catalog_deleted_ids');
    localStorage.removeItem('koko_catalog_deleted_brands');
    localStorage.removeItem('koko_catalog_deleted_cats');
    localStorage.removeItem(CATALOG_UPDATED_KEY);
    const defBrands = (typeof DEFAULT_CAR_BRANDS !== 'undefined' && Array.isArray(DEFAULT_CAR_BRANDS)) ? JSON.parse(JSON.stringify(DEFAULT_CAR_BRANDS)) : [];
    const defCats = (typeof DEFAULT_CATEGORIES !== 'undefined' && Array.isArray(DEFAULT_CATEGORIES)) ? JSON.parse(JSON.stringify(DEFAULT_CATEGORIES)) : [];
    const defProds = (typeof DEFAULT_PRODUCTS !== 'undefined' && Array.isArray(DEFAULT_PRODUCTS)) ? JSON.parse(JSON.stringify(DEFAULT_PRODUCTS)) : [];
    adminState.catalog = {
      brands: defBrands,
      categories: defCats,
      products: defProds,
      deletedProductIds: [],
      deletedBrandIds: [],
      deletedCategoryIds: []
    };
    const synced = await syncToDisk(adminState.catalog);
    populateBrandFilterDropdown();
    renderAdminAccessoriesTable();
    renderAdminCategories();
    renderAdminBrands();
    populateSalesFormOptions();
    updateAdminCounters();
    showToast(synced ? "Reset to default catalog & Saved to Cloud" : "⚠ Reset locally ONLY — Cloud sync failed, retrying...");
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

// ============================================================
// SALES & PROFIT ANALYTICS ENGINE (WITH CLOUD KV SYNC)
// ============================================================
const SALES_STORAGE_KEY = 'koko_sales_ledger_v1';
const SALES_DIRTY_KEY = 'koko_sales_dirty';
const SALES_UPDATED_KEY = 'koko_sales_updated_at';
const SALES_DELETED_KEY = 'koko_sales_deleted_ids';

function fmtEGP(num) {
  return Math.round(Number(num) || 0).toLocaleString('en-US') + ' EGP';
}

function fmtSignedEGP(num) {
  const n = Math.round(Number(num) || 0);
  if (n < 0) return '-' + Math.abs(n).toLocaleString('en-US') + ' EGP';
  return '+' + n.toLocaleString('en-US') + ' EGP';
}

function getSalesBrandName(brandId) {
  if (!brandId || brandId === 'other') return 'OTHER / UNIVERSAL';
  const brands = (adminState.catalog && adminState.catalog.brands) || [];
  const found = brands.find(b => b.id === brandId);
  return getBrandDisplayName(found, brandId);
}

function updateSalesCounter() {
  const badge = document.getElementById('tabSalesCount');
  if (badge) badge.textContent = String((adminState.sales || []).length);
}

function saveLocalSales(dirtyFlag) {
  try {
    localStorage.setItem(SALES_STORAGE_KEY, JSON.stringify(adminState.sales || []));
    if (dirtyFlag !== undefined) {
      localStorage.setItem(SALES_DIRTY_KEY, dirtyFlag ? '1' : '0');
    }
  } catch (e) {
    console.error('Error saving local sales:', e);
  }
}

function loadLocalSales() {
  try {
    const raw = localStorage.getItem(SALES_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        adminState.sales = parsed;
        updateSalesCounter();
        return;
      }
    }
  } catch (e) {
    console.error('Error reading local sales:', e);
  }
  adminState.sales = [];
  updateSalesCounter();
}

async function syncSalesToCloud() {
  let prevTs = 0;
  try { prevTs = parseTimeMs(localStorage.getItem(SALES_UPDATED_KEY)); } catch (e) {}
  const nextTs = Math.max(Date.now(), prevTs + 1);
  try { localStorage.setItem(SALES_UPDATED_KEY, String(nextTs)); } catch (e) {}
  saveLocalSales(true);

  const payload = JSON.stringify({ sales: adminState.sales || [], updatedAt: nextTs });
  let synced = false;
  let serverTs = nextTs;

  const postCloudSales = async () => {
    const res = await fetch('/api/sales', {
      method: 'POST',
      cache: 'no-store',
      headers: { 'Content-Type': 'application/json' },
      body: payload
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  };

  try {
    let resData = null;
    try {
      resData = await postCloudSales();
    } catch (firstErr) {
      await new Promise(r => setTimeout(r, 800));
      resData = await postCloudSales();
    }
    if (resData && resData.updatedAt) {
      serverTs = parseTimeMs(resData.updatedAt) || nextTs;
    }
    synced = true;
    updateSyncStatusUI('live');
  } catch (eCloud) {}

  if (!synced && !adminState.isCloudSyncConnected && (adminState.isDiskSyncConnected || window.location.port === '5500')) {
    try {
      const localRes = await fetch('http://localhost:5500/api/sales', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload
      });
      if (localRes.ok) synced = true;
    } catch (eLocal) {}
  }

  if (synced) {
    try {
      localStorage.setItem(SALES_UPDATED_KEY, String(serverTs));
      localStorage.removeItem(SALES_DELETED_KEY);
    } catch (e) {}
    saveLocalSales(false);
  }
  return synced;
}

async function loadSalesFromCloud(force = false) {
  try {
    const res = await fetch(`/api/sales?_t=${Date.now()}`, { cache: 'no-store' });
    if (!res.ok) return;
    const data = await res.json();
    if (!data || !Array.isArray(data.sales)) return;

    const isDirty = localStorage.getItem(SALES_DIRTY_KEY) === '1';
    const localList = Array.isArray(adminState.sales) ? adminState.sales : [];
    const cloudUpdatedAt = parseTimeMs(data.updatedAt);
    let localUpdatedAt = 0;
    try { localUpdatedAt = parseTimeMs(localStorage.getItem(SALES_UPDATED_KEY)); } catch (e) {}

    if (isDirty) {
      let deletedSaleIds = [];
      try { deletedSaleIds = JSON.parse(localStorage.getItem(SALES_DELETED_KEY) || '[]'); } catch (e) {}
      const mergedMap = new Map();
      data.sales.forEach(s => {
        if (s && s.id && !deletedSaleIds.includes(s.id)) mergedMap.set(s.id, s);
      });
      localList.forEach(s => {
        if (s && s.id && !deletedSaleIds.includes(s.id)) mergedMap.set(s.id, s);
      });
      adminState.sales = Array.from(mergedMap.values());
      saveLocalSales(true);
      await syncSalesToCloud();
    } else if (localUpdatedAt > 0 && (Date.now() - localUpdatedAt) < 90000 && cloudUpdatedAt < localUpdatedAt) {
      return;
    } else if (data.sales.length === 0 && localList.length > 0 && data.status === 'empty') {
      // Initial migration if KV has not yet received local entries
      await syncSalesToCloud();
    } else {
      adminState.sales = data.sales;
      try {
        if (cloudUpdatedAt > 0) localStorage.setItem(SALES_UPDATED_KEY, String(cloudUpdatedAt));
        localStorage.removeItem(SALES_DELETED_KEY);
      } catch (e) {}
      saveLocalSales(false);
    }

    updateSalesCounter();
    if (adminState.currentTab === 'sales') {
      renderSalesDashboard();
    }
  } catch (e) {
    console.warn('Cloud sales sync skipped:', e);
  }
}

function populateSalesFormOptions() {
  const brandSel = document.getElementById('saleBrand');
  const dl = document.getElementById('catalogItemsDatalist');
  const brands = ((adminState.catalog && adminState.catalog.brands) || []).filter(b => b.id !== 'all');
  const products = (adminState.catalog && adminState.catalog.products) || [];

  if (brandSel) {
    const prev = brandSel.value;
    brandSel.innerHTML = brands.map(b => {
      return `<option value="${escapeHtml(b.id)}">${escapeHtml(getBrandDisplayName(b, b.id))}</option>`;
    }).join('') + `<option value="other">OTHER / UNIVERSAL</option>`;
    if (prev && Array.from(brandSel.options).some(o => o.value === prev)) {
      brandSel.value = prev;
    }
  }

  if (dl) {
    dl.innerHTML = products.map(p => `<option value="${escapeHtml(p.name)}">`).join('');
  }
}

function isDateInPeriod(dateStr, period) {
  if (!dateStr) return false;
  if (period === 'all') return true;
  const today = getTodayISO();
  if (period === 'today') return dateStr === today;
  if (period === 'month') return dateStr.slice(0, 7) === today.slice(0, 7);
  if (period === '7d') {
    const d = new Date(dateStr + 'T00:00:00');
    const ref = new Date(today + 'T00:00:00');
    const diffDays = (ref - d) / (1000 * 60 * 60 * 24);
    return diffDays >= 0 && diffDays <= 6;
  }
  return true;
}

function getFilteredPeriodSales() {
  const qEl = document.getElementById('salesSearchInput');
  const q = ((qEl && qEl.value) || '').trim().toLowerCase();
  return (adminState.sales || [])
    .filter(s => isDateInPeriod(s.date, adminState.salesPeriod))
    .filter(s => {
      if (!q) return true;
      const hay = `${s.itemName || ''} ${getSalesBrandName(s.brand)} ${s.payment || ''} ${s.note || ''}`.toLowerCase();
      return hay.includes(q);
    })
    .sort((a, b) => (b.date || '').localeCompare(a.date || '') || String(b.id || '').localeCompare(String(a.id || '')));
}

window.setSalesPeriod = function(period, btn) {
  adminState.salesPeriod = period;
  document.querySelectorAll('.period-pill').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderSalesDashboard();
};

function renderSalesKPIs(items) {
  let rev = 0, cost = 0, units = 0;
  items.forEach(s => {
    const q = Math.max(1, Number(s.qty) || 1);
    rev += (Number(s.sellPrice) || 0) * q;
    cost += (Number(s.buyPrice) || 0) * q;
    units += q;
  });
  const profit = rev - cost;
  const margin = rev > 0 ? Math.round((profit / rev) * 100) : 0;
  const avgProf = items.length > 0 ? Math.round(profit / items.length) : 0;

  const setText = (id, txt) => {
    const el = document.getElementById(id);
    if (el) el.textContent = txt;
  };
  setText('kpiRevenue', fmtEGP(rev));
  setText('kpiCost', fmtEGP(cost));
  setText('kpiProfit', fmtSignedEGP(profit));
  const profEl = document.getElementById('kpiProfit');
  if (profEl) profEl.style.color = profit < 0 ? 'var(--soldout-red)' : 'var(--profit-green)';
  setText('kpiMargin', `${margin}%`);
  setText('kpiOrders', `${items.length} (${units} pcs)`);
  setText('kpiAvgProfit', `Avg ${fmtSignedEGP(avgProf)} / order`);
}

function renderSales7DayChart() {
  const chart = document.getElementById('dailyBarChart');
  if (!chart) return;

  const ref = new Date(getTodayISO() + 'T00:00:00');
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const dt = new Date(ref);
    dt.setDate(ref.getDate() - i);
    const y = dt.getFullYear();
    const m = String(dt.getMonth() + 1).padStart(2, '0');
    const d = String(dt.getDate()).padStart(2, '0');
    const iso = `${y}-${m}-${d}`;

    const daySales = (adminState.sales || []).filter(s => s.date === iso);
    let rev = 0, prof = 0;
    daySales.forEach(s => {
      const q = Math.max(1, Number(s.qty) || 1);
      rev += (Number(s.sellPrice) || 0) * q;
      prof += ((Number(s.sellPrice) || 0) - (Number(s.buyPrice) || 0)) * q;
    });

    const label = i === 0 ? 'NOW' : dt.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
    days.push({ iso, label, rev, prof });
  }

  const maxVal = Math.max(100, ...days.map(d => Math.max(0, d.rev, d.prof)));
  chart.innerHTML = days.map(d => {
    const hRev = d.rev > 0 ? Math.max(4, Math.round((d.rev / maxVal) * 100)) : 3;
    const hProf = d.prof > 0 ? Math.max(4, Math.round((d.prof / maxVal) * 100)) : 3;
    const topAmt = d.prof > 0 ? ('+' + Math.round(d.prof)) : (d.prof < 0 ? String(Math.round(d.prof)) : '0');
    return `
      <div class="day-col" title="${escapeHtml(d.iso)}: Sales ${escapeHtml(fmtEGP(d.rev))} | Profit ${escapeHtml(fmtSignedEGP(d.prof))}">
        <span class="day-amt">${escapeHtml(topAmt)}</span>
        <div class="bars-pair">
          <div class="bar-rev" style="height:${hRev}%;"></div>
          <div class="bar-prof" style="height:${hProf}%;"></div>
        </div>
        <span class="day-label">${escapeHtml(d.label)}</span>
      </div>
    `;
  }).join('');
}

function renderSalesBrandBreakdown(items) {
  const listEl = document.getElementById('brandProfitList');
  if (!listEl) return;

  const byBrand = {};
  let totalPositive = 0;
  items.forEach(s => {
    const q = Math.max(1, Number(s.qty) || 1);
    const prof = ((Number(s.sellPrice) || 0) - (Number(s.buyPrice) || 0)) * q;
    const bName = getSalesBrandName(s.brand);
    byBrand[bName] = (byBrand[bName] || 0) + prof;
    if (prof > 0) totalPositive += prof;
  });

  const sorted = Object.entries(byBrand).sort((a, b) => b[1] - a[1]).slice(0, 4);
  const maxP = sorted.length ? Math.max(1, sorted[0][1]) : 1;

  listEl.innerHTML = sorted.map(([name, prof]) => {
    const pct = prof > 0 ? Math.max(6, Math.round((prof / maxP) * 100)) : 4;
    const share = totalPositive > 0 ? Math.max(0, Math.round((prof / totalPositive) * 100)) : 0;
    return `
      <div class="brand-bar-item">
        <div class="brand-bar-top">
          <span>${escapeHtml(name)} <span style="color:var(--text-muted);font-weight:500;">(${share}%)</span></span>
          <span style="color:${prof >= 0 ? 'var(--profit-green)' : 'var(--soldout-red)'};">${escapeHtml(fmtSignedEGP(prof))}</span>
        </div>
        <div class="brand-bar-track"><div class="brand-bar-fill" style="width:${pct}%;"></div></div>
      </div>
    `;
  }).join('') || '<div style="font-size:12px;color:var(--text-muted);">No sales recorded in this period.</div>';
}

function renderSalesTopItems(items) {
  const listEl = document.getElementById('topItemsList');
  if (!listEl) return;

  const byItem = {};
  items.forEach(s => {
    const q = Math.max(1, Number(s.qty) || 1);
    const prof = ((Number(s.sellPrice) || 0) - (Number(s.buyPrice) || 0)) * q;
    const key = s.itemName || 'Custom Item';
    if (!byItem[key]) byItem[key] = { qty: 0, prof: 0 };
    byItem[key].qty += q;
    byItem[key].prof += prof;
  });

  const sorted = Object.entries(byItem).sort((a, b) => b[1].prof - a[1].prof).slice(0, 3);
  listEl.innerHTML = sorted.map(([name, info], idx) => `
    <div class="top-item-row">
      <span class="top-item-name">#${idx + 1} ${escapeHtml(name)} <span style="color:var(--text-muted);">(${info.qty} pcs)</span></span>
      <span class="top-item-profit" style="color:${info.prof >= 0 ? 'var(--profit-green)' : 'var(--soldout-red)'};">${escapeHtml(fmtSignedEGP(info.prof))}</span>
    </div>
  `).join('') || '<div style="font-size:12px;color:var(--text-muted);">No items recorded in this period.</div>';
}

function renderSalesLog(items) {
  const pcBody = document.getElementById('salesTableBody');
  const mobList = document.getElementById('salesMobileList');

  if (pcBody) {
    pcBody.innerHTML = items.map(s => {
      const q = Math.max(1, Number(s.qty) || 1);
      const buyTot = (Number(s.buyPrice) || 0) * q;
      const sellTot = (Number(s.sellPrice) || 0) * q;
      const prof = sellTot - buyTot;
      const brandLabel = getSalesBrandName(s.brand);
      const sid = escapeHtml(s.id);

      return `
        <tr>
          <td style="white-space:nowrap;color:var(--text-sub);">${escapeHtml(s.date)}</td>
          <td>
            <div style="font-weight:600;max-width:260px;">${escapeHtml(s.itemName)}</div>
            <span class="brand-pill-tag" style="margin-top:3px;display:inline-block;">${escapeHtml(brandLabel)}</span>
            ${s.note ? `<span style="font-size:10.5px;color:var(--text-muted);margin-left:6px;">${escapeHtml(s.note)}</span>` : ''}
          </td>
          <td style="font-weight:700;">${q}</td>
          <td style="color:var(--text-sub);">${escapeHtml(fmtEGP(buyTot))}</td>
          <td style="font-weight:600;">${escapeHtml(fmtEGP(sellTot))}</td>
          <td class="profit-cell" style="color:${prof >= 0 ? 'var(--profit-green)' : 'var(--soldout-red)'};">${escapeHtml(fmtSignedEGP(prof))}</td>
          <td><span class="pay-pill">${escapeHtml(s.payment || 'Cash')}</span></td>
          <td style="text-align:right;white-space:nowrap;">
            <button type="button" class="row-action-btn" onclick="openSaleModal('${sid}')">EDIT</button>
            <button type="button" class="row-action-btn danger" style="margin-left:4px;" onclick="deleteSale('${sid}')">DEL</button>
          </td>
        </tr>
      `;
    }).join('') || '<tr><td colspan="8" style="text-align:center;padding:28px;color:var(--text-muted);">No sales in this range yet. Click "+ LOG SALE" to record your first sale.</td></tr>';
  }

  if (mobList) {
    mobList.innerHTML = items.map(s => {
      const q = Math.max(1, Number(s.qty) || 1);
      const buyTot = (Number(s.buyPrice) || 0) * q;
      const sellTot = (Number(s.sellPrice) || 0) * q;
      const prof = sellTot - buyTot;
      const brandLabel = getSalesBrandName(s.brand);
      const sid = escapeHtml(s.id);

      return `
        <div class="sale-card">
          <div class="sale-card-top">
            <div style="display:flex;align-items:center;gap:6px;">
              <span class="brand-pill-tag">${escapeHtml(brandLabel)}</span>
              <span style="font-size:10.5px;color:var(--text-muted);font-weight:600;">${escapeHtml(s.date)}</span>
            </div>
            <span class="pay-pill">${escapeHtml(s.payment || 'Cash')}</span>
          </div>
          <div class="sale-card-title">${escapeHtml(s.itemName)} ${q > 1 ? `<span style="color:var(--de-gold);">(&times;${q})</span>` : ''}</div>
          <div class="sale-card-metrics">
            <div class="metric-box">
              <span>Bought For</span>
              <strong>${escapeHtml(fmtEGP(buyTot))}</strong>
            </div>
            <div class="metric-box">
              <span>Sold For</span>
              <strong>${escapeHtml(fmtEGP(sellTot))}</strong>
            </div>
            <div class="metric-box">
              <span>Net Profit</span>
              <strong style="color:${prof >= 0 ? 'var(--profit-green)' : 'var(--soldout-red)'};">${escapeHtml(fmtSignedEGP(prof))}</strong>
            </div>
          </div>
          <div class="sale-card-foot">
            <span style="font-size:11px;color:var(--text-muted);">${escapeHtml(s.note || 'Manual entry')}</span>
            <div style="display:flex;gap:6px;">
              <button type="button" class="row-action-btn" onclick="openSaleModal('${sid}')">EDIT</button>
              <button type="button" class="row-action-btn danger" onclick="deleteSale('${sid}')">DEL</button>
            </div>
          </div>
        </div>
      `;
    }).join('') || `<div style="text-align:center;padding:28px;color:var(--text-muted);font-size:12px;">No sales logged yet. Tap "+ LOG TODAY'S SALE" below.</div>`;
  }
}

function renderSalesDashboard() {
  updateSalesCounter();
  const items = getFilteredPeriodSales();
  renderSalesKPIs(items);
  renderSales7DayChart();
  renderSalesBrandBreakdown(items);
  renderSalesTopItems(items);
  renderSalesLog(items);
}

window.openSaleModal = function(editId) {
  populateSalesFormOptions();
  adminState.editingSaleId = editId || null;
  const item = editId ? (adminState.sales || []).find(x => x.id === editId) : null;

  const titleEl = document.getElementById('saleModalTitle');
  if (titleEl) titleEl.textContent = item ? 'EDIT SALE ENTRY' : "LOG TODAY'S SALE";

  document.getElementById('saleEditId').value = item ? item.id : '';
  document.getElementById('saleDate').value = item ? item.date : getTodayISO();
  document.getElementById('salePayment').value = item ? (item.payment || 'Cash') : 'Cash';
  document.getElementById('saleItemName').value = item ? (item.itemName || '') : '';

  const brandSel = document.getElementById('saleBrand');
  if (brandSel) {
    const targetBrand = item ? item.brand : (brandSel.options.length ? brandSel.options[0].value : 'other');
    if (Array.from(brandSel.options).some(o => o.value === targetBrand)) {
      brandSel.value = targetBrand;
    } else if (brandSel.options.length) {
      brandSel.selectedIndex = 0;
    }
  }

  document.getElementById('saleQty').value = item ? (item.qty || 1) : 1;
  document.getElementById('saleBuyPrice').value = item ? item.buyPrice : '';
  document.getElementById('saleSellPrice').value = item ? item.sellPrice : '';
  document.getElementById('saleNote').value = item ? (item.note || '') : '';

  updateLiveProfitPreview();
  const modal = document.getElementById('saleModal');
  if (modal) modal.classList.add('active');
};

window.closeSaleModal = function() {
  const modal = document.getElementById('saleModal');
  if (modal) modal.classList.remove('active');
};

window.handleSaleItemInput = function() {
  const val = (document.getElementById('saleItemName').value || '').trim().toLowerCase();
  if (!val) return;
  const products = (adminState.catalog && adminState.catalog.products) || [];
  const match = products.find(p => (p.name || '').trim().toLowerCase() === val);
  if (match && match.brand) {
    const brandSel = document.getElementById('saleBrand');
    if (brandSel && Array.from(brandSel.options).some(o => o.value === match.brand)) {
      brandSel.value = match.brand;
    }
  }
};

window.adjustSaleQty = function(delta) {
  const inp = document.getElementById('saleQty');
  if (!inp) return;
  const next = Math.max(1, (parseInt(inp.value, 10) || 1) + delta);
  inp.value = next;
  updateLiveProfitPreview();
};

window.updateLiveProfitPreview = function() {
  const qty = Math.max(1, Number(document.getElementById('saleQty').value) || 1);
  const buy = Number(document.getElementById('saleBuyPrice').value) || 0;
  const sell = Number(document.getElementById('saleSellPrice').value) || 0;
  const totCost = buy * qty;
  const totRev = sell * qty;
  const profit = totRev - totCost;
  const margin = totRev > 0 ? Math.round((profit / totRev) * 100) : 0;

  const box = document.getElementById('profitPreviewBox');
  if (box) box.classList.toggle('is-loss', profit < 0);

  const valEl = document.getElementById('previewProfitVal');
  if (valEl) {
    valEl.textContent = fmtSignedEGP(profit);
    valEl.style.color = profit >= 0 ? 'var(--profit-green)' : 'var(--soldout-red)';
  }
  const metaEl = document.getElementById('previewMeta');
  if (metaEl) metaEl.textContent = `Rev: ${fmtEGP(totRev)} • Cost: ${fmtEGP(totCost)}`;

  const marginEl = document.getElementById('previewMargin');
  if (marginEl) {
    marginEl.textContent = `${margin}% Margin`;
    marginEl.style.color = profit >= 0 ? 'var(--profit-green)' : 'var(--soldout-red)';
  }
};

window.handleSaveSale = async function(e) {
  e.preventDefault();
  const submitBtn = document.getElementById('saleSubmitBtn');
  const prevBtnTxt = submitBtn ? submitBtn.textContent : 'SAVE SALE TO DASHBOARD';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'SAVING...';
  }

  try {
    const editId = document.getElementById('saleEditId').value || adminState.editingSaleId;
    const entryId = editId || ('sale_' + Date.now().toString(36));
    const entry = {
      id: entryId,
      date: document.getElementById('saleDate').value || getTodayISO(),
      payment: document.getElementById('salePayment').value || 'Cash',
      itemName: document.getElementById('saleItemName').value.trim(),
      brand: document.getElementById('saleBrand').value || 'other',
      qty: Math.max(1, Number(document.getElementById('saleQty').value) || 1),
      buyPrice: Number(document.getElementById('saleBuyPrice').value) || 0,
      sellPrice: Number(document.getElementById('saleSellPrice').value) || 0,
      note: document.getElementById('saleNote').value.trim(),
      updatedAt: new Date().toISOString()
    };

    if (editId) {
      const idx = adminState.sales.findIndex(x => x.id === editId);
      if (idx >= 0) adminState.sales[idx] = entry;
      else adminState.sales.unshift(entry);
    } else {
      adminState.sales.unshift(entry);
    }

    try {
      const delIds = JSON.parse(localStorage.getItem(SALES_DELETED_KEY) || '[]');
      localStorage.setItem(SALES_DELETED_KEY, JSON.stringify(delIds.filter(x => x !== entryId)));
    } catch (eDel) {}

    closeSaleModal();
    renderSalesDashboard();
    const synced = await syncSalesToCloud();
    const net = (entry.sellPrice - entry.buyPrice) * entry.qty;
    showToast(synced ? `✓ Sale Synced! Profit: ${fmtSignedEGP(net)}` : `⚠ Sale Saved Locally ONLY! Profit: ${fmtSignedEGP(net)}`);
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = prevBtnTxt;
    }
  }
};

window.deleteSale = async function(id) {
  const target = (adminState.sales || []).find(s => s.id === id);
  if (!target) return;
  if (!confirm(`Delete sale entry "${target.itemName}"?`)) return;

  adminState.sales = adminState.sales.filter(s => s.id !== id);
  try {
    const delIds = JSON.parse(localStorage.getItem(SALES_DELETED_KEY) || '[]');
    if (!delIds.includes(id)) {
      delIds.push(id);
      localStorage.setItem(SALES_DELETED_KEY, JSON.stringify(delIds));
    }
  } catch (eDel) {}
  renderSalesDashboard();
  const synced = await syncSalesToCloud();
  showToast(synced ? '✓ Entry removed & cloud synced' : '⚠ Entry removed locally ONLY — Cloud sync failed');
};

window.exportSalesCSV = function() {
  const items = getFilteredPeriodSales();
  const csvEsc = v => `"${String(v == null ? '' : v).replace(/"/g, '""')}"`;
  const rows = [['Date', 'Item', 'Brand', 'Qty', 'Bought For (Unit)', 'Sold For (Unit)', 'Total Cost', 'Total Revenue', 'Total Net Profit', 'Payment', 'Note']];
  items.forEach(s => {
    const q = Math.max(1, Number(s.qty) || 1);
    const buyTot = (Number(s.buyPrice) || 0) * q;
    const sellTot = (Number(s.sellPrice) || 0) * q;
    rows.push([
      s.date,
      csvEsc(s.itemName),
      csvEsc(getSalesBrandName(s.brand)),
      q,
      Number(s.buyPrice) || 0,
      Number(s.sellPrice) || 0,
      buyTot,
      sellTot,
      sellTot - buyTot,
      csvEsc(s.payment || 'Cash'),
      csvEsc(s.note || '')
    ]);
  });

  const blob = new Blob([rows.map(r => r.join(',')).join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `koko_sales_${adminState.salesPeriod}_${getTodayISO()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Downloaded Sales CSV Report');
};
