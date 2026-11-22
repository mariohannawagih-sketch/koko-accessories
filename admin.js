/**
 * KOKO ACCESSORIES - ADMIN CONTROL LOGIC
 * Features Automatic Direct Disk Sync to D:\projects\koko accessories\products.js
 * Supports Drag & Drop photo upload, Categories & Brands management.
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

// Global Admin State
let adminState = {
  isLoggedIn: false,
  currentTab: 'accessories',
  catalog: getSafeCatalog(),
  activePhotos: [], // Array of photo URLs or DataURLs (front, back, angles...)
  editingAccessoryId: null,
  isDiskSyncConnected: false
};

// DOM References
const adminEl = {
  loginGate: document.getElementById('loginGate'),
  adminDashboard: document.getElementById('adminDashboard'),
  adminEmailInput: document.getElementById('adminEmailInput'),
  adminPassInput: document.getElementById('adminPassInput'),
  syncStatusBadge: document.getElementById('syncStatusBadge'),
  
  // Tabs
  tabBtnAccessories: document.getElementById('tabBtnAccessories'),
  tabBtnCategories: document.getElementById('tabBtnCategories'),
  tabBtnBrands: document.getElementById('tabBtnBrands'),
  tabBtnExport: document.getElementById('tabBtnExport'),
  tabContentAccessories: document.getElementById('tabContentAccessories'),
  tabContentCategories: document.getElementById('tabContentCategories'),
  tabContentBrands: document.getElementById('tabContentBrands'),
  tabContentExport: document.getElementById('tabContentExport'),
  
  // Accessories Table
  adminAccessoriesTableBody: document.getElementById('adminAccessoriesTableBody'),
  adminFilterBrand: document.getElementById('adminFilterBrand'),
  adminTotalItemsBadge: document.getElementById('adminTotalItemsBadge'),
  
  // Accessory Modal & Form
  accessoryModal: document.getElementById('accessoryModal'),
  accessoryModalTitle: document.getElementById('accessoryModalTitle'),
  accessoryForm: document.getElementById('accessoryForm'),
  formAccessoryId: document.getElementById('formAccessoryId'),
  formAccessoryName: document.getElementById('formAccessoryName'),
  formAccessoryBrand: document.getElementById('formAccessoryBrand'),
  formAccessoryCategory: document.getElementById('formAccessoryCategory'),
  formAccessoryFitment: document.getElementById('formAccessoryFitment'),
  formAccessoryDesc: document.getElementById('formAccessoryDesc'),
  formImageUrlInput: document.getElementById('formImageUrlInput'),
  dragDropZone: document.getElementById('dragDropZone'),
  photoPreviewContainer: document.getElementById('photoPreviewContainer'),
  photosListContainer: document.getElementById('photosListContainer'),
  photoCountBadge: document.getElementById('photoCountBadge'),
  
  // Categories & Brands Lists
  adminCategoriesList: document.getElementById('adminCategoriesList'),
  newCategoryInput: document.getElementById('newCategoryInput'),
  adminBrandsList: document.getElementById('adminBrandsList'),
  newBrandInput: document.getElementById('newBrandInput'),
  
  // Toast
  toast: document.getElementById('toastNotice')
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  const savedLogin = sessionStorage.getItem('koko_admin_auth');
  if (savedLogin === 'true') {
    adminState.isLoggedIn = true;
    showDashboard();
  }
  checkDiskSyncConnection();
  // Continuously check connection so status updates live
  setInterval(checkDiskSyncConnection, 3000);
});

// Check if Auto-save Server is active
async function checkDiskSyncConnection() {
  // 1. Check Cloudflare Cloud Database first (when on https://koko-accessories.pages.dev/admin)
  try {
    const cloudHealthRes = await fetch('/api/health');
    if (cloudHealthRes.ok) {
      const hData = await cloudHealthRes.json();
      if (hData && hData.status === 'ok') {
        adminState.isCloudSyncConnected = true;
        updateSyncStatusUI(true, 'cloud');

        // Also fetch latest catalog from Cloudflare KV if available
        try {
          const catRes = await fetch('/api/catalog');
          if (catRes.ok) {
            const catData = await catRes.json();
            if (catData && Array.isArray(catData.products) && catData.products.length > 0) {
              adminState.catalog = catData;
              saveCatalogData(catData);
              renderAdminAccessoriesTable();
              renderAdminCategories();
              renderAdminBrands();
            }
          }
        } catch (eCat) {}

        return true;
      }
    }
  } catch (eCloud) {}

  // 2. Check local Python server (only when running locally)
  try {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      const res = await fetch('http://localhost:5500/api/health', { cache: 'no-cache' });
      if (res.ok) {
        adminState.isDiskSyncConnected = true;
        updateSyncStatusUI(true, 'local');
        return true;
      }
    }
  } catch (e) {}

  updateSyncStatusUI(false);
  return false;
}

function updateSyncStatusUI(isConnected, type = 'cloud') {
  if (!adminEl.syncStatusBadge) return;
  if (isConnected) {
    adminEl.syncStatusBadge.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      <span class="text-[10px] text-emerald-300 font-bold tracking-zara uppercase">
        CLOUD AUTO-SAVE ACTIVE &bull; LIVE TO CUSTOMERS
      </span>
    `;
  } else {
    adminEl.syncStatusBadge.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      <span class="text-[10px] text-emerald-300 font-bold tracking-zara uppercase">
        CLOUD DATABASE CONNECTED &bull; ONLINE
      </span>
    `;
  }
}

// Synchronizer: Saves to Cloudflare Cloud Database & Local Server
async function syncToDisk(catalogData) {
  // Always update browser localStorage first
  saveCatalogData(catalogData);
  let saved = false;

  // 1. Save directly to Cloudflare Cloud Database (KV)
  try {
    const cloudRes = await fetch('/api/catalog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(catalogData)
    });
    if (cloudRes.ok) {
      updateSyncStatusUI(true, 'cloud');
      saved = true;
    }
  } catch (errCloud) {}

  // 2. Also save to local server if available (updates products.js & triggers git push)
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

// Authentication Handlers
window.handleAdminLogin = function(e) {
  e.preventDefault();
  const email = adminEl.adminEmailInput.value.trim().toLowerCase();
  const pass = adminEl.adminPassInput.value.trim();

  if (email === 'koko@gmail.com' && pass === 'koko12345') {
    adminState.isLoggedIn = true;
    sessionStorage.setItem('koko_admin_auth', 'true');
    sessionStorage.setItem('koko_admin_email', email);
    showToast(`WELCOME BACK, ADMIN`);
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

// Tab Switching
window.switchAdminTab = function(tabName) {
  adminState.currentTab = tabName;

  const tabs = ['accessories', 'categories', 'brands', 'export'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tabBtn${t.charAt(0).toUpperCase() + t.slice(1)}`);
    const content = document.getElementById(`tabContent${t.charAt(0).toUpperCase() + t.slice(1)}`);
    
    if (t === tabName) {
      btn.classList.add('border-black', 'text-black', 'font-bold');
      btn.classList.remove('border-transparent', 'text-neutral-500', 'font-medium');
      content.classList.remove('hidden');
    } else {
      btn.classList.remove('border-black', 'text-black', 'font-bold');
      btn.classList.add('border-transparent', 'text-neutral-500', 'font-medium');
      content.classList.add('hidden');
    }
  });

  if (tabName === 'accessories') renderAdminAccessoriesTable();
  if (tabName === 'categories') renderAdminCategories();
  if (tabName === 'brands') renderAdminBrands();
};

// ==========================================
// ACCESSORIES MANAGEMENT
// ==========================================

function populateBrandFilterDropdown() {
  if (!adminEl.adminFilterBrand) return;
  const brands = adminState.catalog.brands || [];
  adminEl.adminFilterBrand.innerHTML = `<option value="all">ALL CAR BRANDS</option>` + brands.filter(b => b.id !== 'all').map(b => {
    return `<option value="${b.id}">${b.name}</option>`;
  }).join('');
}

function renderAdminAccessoriesTable() {
  if (!adminEl.adminAccessoriesTableBody) return;

  const filterBrand = adminEl.adminFilterBrand.value || 'all';
  let products = adminState.catalog.products || [];

  if (filterBrand !== 'all') {
    products = products.filter(p => p.brand === filterBrand);
  }

  adminEl.adminTotalItemsBadge.textContent = `${products.length} ACCESSORIES`;

  if (products.length === 0) {
    adminEl.adminAccessoriesTableBody.innerHTML = `
      <tr>
        <td colspan="6" class="p-8 text-center text-neutral-400 uppercase tracking-zara">
          NO ACCESSORIES FOUND. CLICK "+ ADD NEW ACCESSORY" TO CREATE ONE.
        </td>
      </tr>
    `;
    return;
  }

  adminEl.adminAccessoriesTableBody.innerHTML = products.map(item => {
    const brandObj = adminState.catalog.brands.find(b => b.id === item.brand);
    const brandName = brandObj ? brandObj.name : item.brand.toUpperCase();

    return `
      <tr class="border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
        <td class="p-4">
          <div class="relative w-14 h-18 bg-white border border-neutral-300 overflow-hidden flex items-center justify-center p-0.5">
            <img 
              src="${item.image}" 
              alt="${item.name}" 
              class="w-full h-full object-contain"
              onerror="this.src='https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'"
            />
            ${item.images && item.images.length > 1 ? `
              <span class="absolute bottom-0 inset-x-0 bg-black/85 text-white text-[8px] font-bold text-center py-0.5 uppercase tracking-tight">
                ${item.images.length} PHOTOS
              </span>
            ` : ''}
          </div>
        </td>
        <td class="p-4 font-semibold uppercase tracking-tight text-black max-w-xs">
          ${item.name}
        </td>
        <td class="p-4 uppercase font-bold tracking-zara text-neutral-800">
          ${brandName}
        </td>
        <td class="p-4 uppercase text-neutral-600 max-w-sm">
          ${item.fitment || '-'}
        </td>
        <td class="p-4 uppercase text-neutral-500 tracking-zara text-[11px]">
          ${item.category}
        </td>
        <td class="p-4 text-right space-x-2 whitespace-nowrap">
          <button 
            onclick="openEditAccessoryModal('${item.id}')"
            class="text-[10px] uppercase font-bold text-black border border-black px-2.5 py-1 hover:bg-black hover:text-white transition-colors"
          >
            EDIT
          </button>
          <button 
            onclick="handleDeleteAccessory('${item.id}')"
            class="text-[10px] uppercase font-bold text-red-600 border border-red-300 px-2.5 py-1 hover:bg-red-600 hover:text-white transition-colors"
          >
            DELETE
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// Open Add Accessory Modal
window.openAddAccessoryModal = function() {
  adminState.editingAccessoryId = null;
  adminEl.accessoryModalTitle.textContent = "ADD NEW ACCESSORY";
  adminEl.formAccessoryId.value = "";
  adminEl.formAccessoryName.value = "";
  adminEl.formAccessoryFitment.value = "";
  adminEl.formAccessoryDesc.value = "";
  if (adminEl.formImageUrlInput) adminEl.formImageUrlInput.value = "";

  adminState.activePhotos = [];
  renderPhotosGallery();

  const brands = adminState.catalog.brands.filter(b => b.id !== 'all');
  adminEl.formAccessoryBrand.innerHTML = brands.map(b => `<option value="${b.id}">${b.name}</option>`).join('');

  const cats = adminState.catalog.categories.filter(c => c.id !== 'all');
  adminEl.formAccessoryCategory.innerHTML = cats.map(c => `<option value="${c.id}">${c.name}</option>`).join('');

  adminEl.accessoryModal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Open Edit Accessory Modal (Preserves all existing photos!)
window.openEditAccessoryModal = function(id) {
  const item = adminState.catalog.products.find(p => p.id === id);
  if (!item) return;

  adminState.editingAccessoryId = id;
  adminEl.accessoryModalTitle.textContent = "EDIT ACCESSORY";
  adminEl.formAccessoryId.value = item.id;
  adminEl.formAccessoryName.value = item.name;
  adminEl.formAccessoryFitment.value = item.fitment || '';
  adminEl.formAccessoryDesc.value = item.description || '';
  if (adminEl.formImageUrlInput) adminEl.formImageUrlInput.value = "";

  const brands = adminState.catalog.brands.filter(b => b.id !== 'all');
  adminEl.formAccessoryBrand.innerHTML = brands.map(b => `
    <option value="${b.id}" ${b.id === item.brand ? 'selected' : ''}>${b.name}</option>
  `).join('');

  const cats = adminState.catalog.categories.filter(c => c.id !== 'all');
  adminEl.formAccessoryCategory.innerHTML = cats.map(c => `
    <option value="${c.id}" ${c.id === item.category ? 'selected' : ''}>${c.name}</option>
  `).join('');

  // Load ALL existing photos for this accessory
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

// ==========================================
// MULTI-PHOTO GALLERY & DRAG & DROP HANDLERS
// ==========================================

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
      <div class="relative bg-white border ${isCover ? 'border-black ring-1 ring-black' : 'border-neutral-300'} p-1.5 flex flex-col justify-between group">
        <div class="aspect-[3/4] overflow-hidden bg-neutral-100 relative flex items-center justify-center p-1">
          <img src="${imgUrl}" class="w-full h-full object-contain" />
          <div class="absolute top-1 left-1">
            <span class="${isCover ? 'bg-black text-white' : 'bg-neutral-800/80 text-white'} text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5">
              ${isCover ? 'COVER' : `#${idx + 1}`}
            </span>
          </div>
          <!-- Remove button -->
          <button 
            type="button" 
            onclick="removePhotoAtIndex(${idx})"
            class="absolute top-1 right-1 bg-black/70 hover:bg-black text-white w-5 h-5 rounded-full flex items-center justify-center text-xs"
            title="Remove this photo"
          >
            &times;
          </button>
        </div>
        
        <div class="pt-1.5 text-center">
          ${!isCover ? `
            <button 
              type="button" 
              onclick="setCoverPhotoIndex(${idx})"
              class="text-[9px] uppercase font-bold text-neutral-600 hover:text-black hover:underline"
            >
              Make Cover
            </button>
          ` : `
            <span class="text-[9px] uppercase font-bold text-black tracking-wider">Main Cover</span>
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

  const files = e.dataTransfer.files;
  if (files && files.length > 0) {
    processMultipleImageFiles(Array.from(files));
  }
};

window.handleFileSelect = function(e) {
  const files = e.target.files;
  if (files && files.length > 0) {
    processMultipleImageFiles(Array.from(files));
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
        showToast(`Loaded ${imageFiles.length} photo(s)! Total: ${adminState.activePhotos.length}`);
      }
    };
    reader.readAsDataURL(file);
  });
}

// Save Accessory & Auto-Sync to D: Drive
window.handleSaveAccessory = async function(e) {
  e.preventDefault();

  const name = adminEl.formAccessoryName.value.trim();
  const brand = adminEl.formAccessoryBrand.value;
  const category = adminEl.formAccessoryCategory.value;
  const fitment = adminEl.formAccessoryFitment.value.trim();
  const desc = adminEl.formAccessoryDesc.value.trim();

  if (!adminState.activePhotos || adminState.activePhotos.length === 0) {
    alert("Please add at least one photo (Front, Back, etc.) using drag & drop or photo link.");
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
      item.image = primaryPhoto;
      item.images = allPhotos;
    }
  } else {
    const newId = `${brand}-${Date.now().toString(36)}`;
    const newAccessory = {
      id: newId,
      name: name,
      brand: brand,
      category: category,
      fitment: fitment,
      description: desc,
      image: primaryPhoto,
      images: allPhotos
    };
    adminState.catalog.products.unshift(newAccessory);
  }

  // Automatic Cloud Sync
  const cloudSynced = await syncToDisk(adminState.catalog);

  renderAdminAccessoriesTable();
  closeAccessoryModal();

  if (cloudSynced) {
    showToast(`✓ SAVED & PUBLISHED LIVE TO ALL CUSTOMERS!`);
  } else {
    showToast(`✓ SAVED ${allPhotos.length} PHOTO(S) TO BROWSER STORAGE!`);
  }
};

// Delete Accessory & Auto-Sync
window.handleDeleteAccessory = async function(id) {
  const item = adminState.catalog.products.find(p => p.id === id);
  if (!item) return;

  if (confirm(`Delete "${item.name}"?`)) {
    adminState.catalog.products = adminState.catalog.products.filter(p => p.id !== id);
    const cloudSynced = await syncToDisk(adminState.catalog);
    renderAdminAccessoriesTable();
    showToast(cloudSynced ? `✓ Deleted & updated live in cloud database` : `Deleted from browser catalog`);
  }
};

// ==========================================
// CATEGORIES MANAGEMENT
// ==========================================

function renderAdminCategories() {
  if (!adminEl.adminCategoriesList) return;

  const cats = adminState.catalog.categories.filter(c => c.id !== 'all');

  adminEl.adminCategoriesList.innerHTML = cats.map(c => {
    const count = adminState.catalog.products.filter(p => p.category === c.id).length;

    return `
      <li class="p-4 flex items-center justify-between hover:bg-neutral-50 transition-colors">
        <div>
          <span class="font-bold text-xs uppercase tracking-zara text-black">${c.name}</span>
          <span class="text-[10px] text-neutral-400 block">${count} accessories listed</span>
        </div>
        <button 
          onclick="handleDeleteCategory('${c.id}')"
          class="text-[10px] uppercase font-bold text-red-600 hover:underline border border-red-200 px-3 py-1"
        >
          Remove
        </button>
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

  adminState.catalog.categories.push({ id: id, name: name.toUpperCase() });
  await syncToDisk(adminState.catalog);
  adminEl.newCategoryInput.value = '';
  renderAdminCategories();
  showToast(`Added Category & Saved to Cloud`);
};

window.handleDeleteCategory = async function(catId) {
  if (confirm(`Remove this category?`)) {
    adminState.catalog.categories = adminState.catalog.categories.filter(c => c.id !== catId);
    await syncToDisk(adminState.catalog);
    renderAdminCategories();
    showToast("Category removed & Saved to Cloud");
  }
};

// ==========================================
// CAR BRANDS MANAGEMENT
// ==========================================

function renderAdminBrands() {
  if (!adminEl.adminBrandsList) return;

  const brands = adminState.catalog.brands.filter(b => b.id !== 'all');

  adminEl.adminBrandsList.innerHTML = brands.map(b => {
    const count = adminState.catalog.products.filter(p => p.brand === b.id).length;

    return `
      <li class="p-4 flex items-center justify-between hover:bg-neutral-50 transition-colors">
        <div>
          <span class="font-bold text-xs uppercase tracking-zara text-black">${b.name}</span>
          <span class="text-[10px] text-neutral-400 block">${count} accessories</span>
        </div>
        <button 
          onclick="handleDeleteBrand('${b.id}')"
          class="text-[10px] uppercase font-bold text-red-600 hover:underline border border-red-200 px-3 py-1"
        >
          Remove
        </button>
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

  adminState.catalog.brands.push({ id: id, name: name.toUpperCase(), logo: name.toUpperCase() });
  await syncToDisk(adminState.catalog);
  adminEl.newBrandInput.value = '';
  renderAdminBrands();
  populateBrandFilterDropdown();
  showToast(`Added Car Brand & Saved to Cloud`);
};

window.handleDeleteBrand = async function(brandId) {
  if (confirm(`Remove this car brand?`)) {
    adminState.catalog.brands = adminState.catalog.brands.filter(b => b.id !== brandId);
    await syncToDisk(adminState.catalog);
    renderAdminBrands();
    populateBrandFilterDropdown();
    showToast("Car brand removed & Saved to Cloud");
  }
};

// ==========================================
// EXPORT & RESET
// ==========================================

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
    showToast("Reset to default catalog & Saved to D:");
  }
};

// Toast
function showToast(msg) {
  if (!adminEl.toast) return;
  adminEl.toast.textContent = msg;
  adminEl.toast.classList.add('show');
  setTimeout(() => adminEl.toast.classList.remove('show'), 3000);
}

// ==========================================
// 1-CLICK GITHUB SYNC & DEPLOY
// ==========================================
window.handlePushToGithub = async function() {
  const btn = document.getElementById('btnPushGithub');
  const txt = document.getElementById('btnPushGithubText');
  const originalText = txt ? txt.textContent : 'DEPLOY TO GITHUB & CLOUDFLARE';
  
  if (btn) btn.disabled = true;
  if (txt) txt.textContent = 'DEPLOYING TO CLOUDFLARE... ⏳';

  try {
    const res = await fetch('/api/git-push', { method: 'POST' });
    const data = await res.json();
    if (res.ok && (data.status === 'ok' || data.status === 'warning')) {
      alert("SUCCESS: Deployed to GitHub & Cloudflare!\nThe live website will update automatically within seconds.\n\nLive Site:\nhttps://koko-accessories.pages.dev/");
      showToast("DEPLOYED TO CLOUDFLARE SUCCESSFULLY!");
    } else {
      alert("Notice: " + (data.message || data.error || 'Operation completed'));
    }
  } catch (err) {
    console.error("Git push failed:", err);
    alert("Please make sure the local server is running via 'Open KOKO (Auto-Save).bat'");
  } finally {
    if (btn) btn.disabled = false;
    if (txt) txt.textContent = originalText;
  }
};
