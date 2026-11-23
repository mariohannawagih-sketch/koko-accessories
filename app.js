/**
 * KOKO ACCESSORIES - RESPONSIVE PC & MOBILE STOREFRONT ENGINE
 * Features:
 *  - Dynamic Cloudflare KV & Admin Sync (100% compatible with additions/edits)
 *  - 2-Layer Bilingual Translation Engine (English & Arabic RTL with Cairo font)
 *  - Restored KOKO Button & Card Styling + German Logo Underline
 *  - Dual Stocked Vehicle Selector (Desktop Cards + Mobile Touch Bar & Pills)
 *  - Multi-Angle Studio Gallery with 2nd-Photo Hover Crossfade
 *  - LocalStorage & Cross-Tab Storage Event Synchronization
 */

// ============================================================
// 1. DYNAMIC CATALOG ACCESS & STORAGE SYNC
// ============================================================
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

// ============================================================
// 2. BILINGUAL TRANSLATION ENGINE & AUTOMOTIVE DICTIONARY
// ============================================================
const BRAND_AR_MAP = {
  all: 'كل السيارات',
  universal: 'عام لجميع السيارات',
  audi: 'أودي',
  audislien: 'أودي S-Line',
  audirs: 'أودي RS',
  cupra: 'كوبرا',
  minicooper: 'ميني كوبر',
  skoda: 'سكودا',
  seat: 'سيات',
  vwgti: 'فولكس فاجن GTI',
  vwr: 'فولكس فاجن VWR',
  volkswagen: 'فولكس فاجن',
  vw: 'فولكس فاجن',
  bmw: 'بي إم دبليو',
  mercedes: 'مرسيدس',
  mercedesbenz: 'مرسيدس بنز',
  porsche: 'بورشه',
  mg: 'إم جي',
  opel: 'أوبل',
  peugeot: 'بيجو',
  citroen: 'ستروين',
  renault: 'رينو',
  kia: 'كيا',
  hyundai: 'هيونداي',
  nissan: 'نيسان',
  toyota: 'تويوتا',
  honda: 'هوندا',
  subaru: 'سوبارو',
  lancer: 'لانسر',
  mitsubishi: 'ميتسوبيشي',
  abarth: 'أبارث',
  fiat: 'فيات',
  alfa: 'ألفا روميو',
  landrover: 'لاند روفر',
  jeep: 'جيب',
  dodge: 'دودج',
  ford: 'فورد',
  chevrolet: 'شيفروليه',
  chery: 'شيري',
  jetour: 'جيتور',
  byd: 'بي واي دي',
  geely: 'جيلي',
  changan: 'شانجان',
  haval: 'هافال',
  suzuki: 'سوزوكي',
  bbs: 'جنوط BBS'
};

const CAT_AR_MAP = {
  all: 'كل الإكسسوارات',
  tobb: 'حماية وتوب',
  tags: 'شعارات وتاجات',
  keys: 'مفاتيح',
  keyscover: 'جرابات مفاتيح',
  medals: 'ميداليات',
  carfloormats: 'دواسات أرضية',
  carwipers: 'مساحات زجاج',
  spoiler: 'سبويلر',
  carbonspoilers: 'سبويلرات كاربون',
  spoilers: 'سبويلرات',
  carnameslogo: 'حروف وشعارات الشنطة',
  steeringwheelsymbols: 'شعارات الطارة',
  coverwheelsteering: 'كفر طارة',
  padelshifts: 'شيفتات ودواسات',
  seatbelt: 'إكسسوارات الحزام',
  scatbelt: 'أحزمة أمان',
  calipercovers: 'كفرات كاليبر',
  exhausttips: 'ديفوزر ومخارج شكمان',
  ambientlight: 'إضاءة محيطية'
};

const PHRASE_DICT_AR = [
  ['all-weather floor mats', 'دواسات أرضية لجميع الفصول'],
  ['floor mats', 'دواسات أرضية'],
  ['rubber mats', 'دواسات رابر'],
  ['paddle shifter extensions', 'تطويلة شيفتات طارة'],
  ['paddle shifters', 'شيفتات طارة'],
  ['paddle extensions', 'تطويلة شيفتات طارة'],
  ['steering wheel cover', 'كفر طارة دركسيون'],
  ['steering wheel', 'طارة الدركسيون'],
  ['smart key fob', 'مفتاح سمارت'],
  ['key cover', 'جراب مفتاح'],
  ['key case', 'جراب مفتاح'],
  ['key shell', 'كفر مفتاح'],
  ['keychain', 'ميدالية مفاتيح'],
  ['keyring', 'ميدالية مفاتيح'],
  ['rear trunk lettering', 'حروف شنطة خلفية'],
  ['trunk letters', 'حروف شنطة'],
  ['trunk emblem', 'شعار شنطة'],
  ['grille emblem', 'شعار شبكة أمامية'],
  ['wheel center caps', 'أغطية سنتر كاب جنوط'],
  ['wheel center hub caps', 'أغطية سنتر كاب جنوط'],
  ['caliper covers', 'كفرات كاليبر فرامل'],
  ['seatbelt silencer', 'كاتم صوت حزام الأمان'],
  ['seatbelt', 'حزام أمان'],
  ['rear spoiler', 'سبويلر خلفي'],
  ['spoiler', 'سبويلر'],
  ['diffuser', 'ديفوزر'],
  ['lip', 'سبويلر أمامي (ليب)'],
  ['sports pedals', 'دواسات سبورت'],
  ['sport pedals', 'دواسات سبورت'],
  ['pedal cover', 'أغطية دواسات'],
  ['sill guards', 'عتب أبواب'],
  ['handle', 'مقابض أبواب'],
  ['antenna', 'أنتينا سقف'],
  ['gloss carbon fiber', 'كاربون فايبر لامع'],
  ['real carbon fiber', 'كاربون فايبر أصلي'],
  ['carbon fiber', 'كاربون فايبر'],
  ['gloss black', 'أسود لامع'],
  ['matte black', 'أسود مطفي'],
  ['piano black', 'أسود بيانو'],
  ['brushed aluminum', 'ألمنيوم مصقول'],
  ['chrome & red', 'كروم وأحمر'],
  ['black & red', 'أسود وأحمر'],
  ['alcantara suede', 'ألكانتارا سويد'],
  ['chrome', 'كروم'],
  ['bronze', 'برونزي'],
  ['copper', 'نحاسي'],
  ['silver', 'فضي'],
  ['gold', 'ذهبي'],
  ['red', 'أحمر'],
  ['cyan', 'سماوي'],
  ['leather', 'جلد'],
  ['metal', 'معدن'],
  ['emblem', 'شعار'],
  ['badge', 'شارة'],
  ['set of 4', '(طقم 4 قطع)'],
  ['pair', '(زوج)']
];

function hasArabic(str) {
  return /[\u0600-\u06FF]/.test(str || '');
}

function autoTranslateTextAr(text) {
  if (!text) return '';
  if (hasArabic(text)) return text;
  let out = ' ' + text.trim() + ' ';
  for (const [en, ar] of PHRASE_DICT_AR) {
    const re = new RegExp(en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    out = out.replace(re, ar);
  }
  for (const [bid, bar] of Object.entries(BRAND_AR_MAP)) {
    if (bid.length < 3 || bid === 'all' || bid === 'bbs') continue;
    const reB = new RegExp(`\\b${bid}\\b`, 'gi');
    out = out.replace(reB, bar);
  }
  return out.trim().replace(/\s+/g, ' ');
}

function getBrandDisplayName(brandObj, fallbackId) {
  if (!brandObj) return (fallbackId || 'CUSTOM').toUpperCase();
  if (brandObj.id === 'audislien' && brandObj.name === 'AUDI S LIEN') return 'AUDI S LINE';
  return brandObj.name || brandObj.id.toUpperCase();
}

function getBrandLabel(brandObj, fallbackId) {
  const id = (brandObj && brandObj.id) || fallbackId || 'other';
  const en = getBrandDisplayName(brandObj, fallbackId);
  if (state.lang !== 'ar') return en;
  if (brandObj && brandObj.nameAr) return brandObj.nameAr;
  if (hasArabic(en)) return en;
  const normKey = id.toLowerCase().replace(/[^a-z0-9]/g, '');
  return BRAND_AR_MAP[normKey] || autoTranslateTextAr(en);
}

function getCatLabel(catObj) {
  if (!catObj) return '';
  if (state.lang !== 'ar') return catObj.name;
  if (catObj.nameAr) return catObj.nameAr;
  if (hasArabic(catObj.name)) return catObj.name;
  const normKey = normCat(catObj.id || catObj.name);
  return CAT_AR_MAP[normKey] || autoTranslateTextAr(catObj.name);
}

function getProdTitle(item) {
  if (state.lang !== 'ar') return item.name;
  if (item.nameAr) return item.nameAr;
  return autoTranslateTextAr(item.name);
}

function getProdFit(item) {
  if (state.lang !== 'ar') return item.fitment || '';
  if (item.fitmentAr) return item.fitmentAr;
  return autoTranslateTextAr(item.fitment || 'Compatible Models');
}

const UI_STR = {
  en: {
    navCars: 'Cars',
    navCatalog: 'Accessories',
    navHow: 'How to Order',
    navContact: 'Contact',
    searchPh: 'Search car model or part...',
    searchMobPh: 'Search Audi, Cupra, Key Cover...',
    heroKicker: 'KOKO AUTOMOTIVE ATELIER • EGYPT',
    heroTitle: 'Precision Accessories Tailored for Your Car.',
    heroDesc: 'Browse real multi-angle hardware photos across every stocked vehicle make. Select your car, check stock instantly, and order via WhatsApp — updated live with the Admin Portal.',
    heroBtnCar: 'CHOOSE YOUR CAR',
    heroBtnBrowse: 'BROWSE ALL PARTS',
    factParts: 'Accessories',
    factBrands: 'Car Makes Ready',
    factSync: 'Cloud Synced',
    step1Title: 'Step 1 • Select Your Vehicle',
    step1Hint: 'Showing in-stock brands first • Tap + More Brands for all makes',
    step1MobileLabel: 'Step 1 • Your Vehicle',
    changeCarBtn: 'CHOOSE CAR ▾',
    showingFor: 'Showing accessories for:',
    showAllBtn: 'SHOW ALL ×',
    inStockOnly: 'IN STOCK ONLY',
    itemLoading: 'LOADING ACCESSORIES...',
    partSingular: 'ACCESSORY AVAILABLE',
    partPlural: 'ACCESSORIES AVAILABLE',
    noMatches: 'No matching accessories found. Try another car or category.',
    howKicker: 'FAST ORDERING',
    howTitle: 'How to Order in 3 Simple Steps',
    stepCard1Title: 'Select Your Car & Category',
    stepCard1Desc: 'Pick your vehicle brand to filter all compatible accessories, or inspect any item\'s front & back studio photos.',
    stepCard2Title: 'Confirm Fitment via WhatsApp',
    stepCard2Desc: 'Click Order on WhatsApp from any accessory page — it pre-fills the exact item name so we confirm model & year immediately.',
    stepCard3Title: 'Fast Doorstep Delivery',
    stepCard3Desc: 'Delivery across Cairo & all Egyptian governorates with flexible payment on delivery or Instapay.',
    footerAbout: 'Automotive badges, smart key shells, floor mats & cockpit styling accessories across Egypt. Everything syncs live with your Admin Portal.',
    footerCars: 'Popular Car Brands',
    footerContact: 'Direct Support',
    backToTop: 'Back to Top ↑',
    footerNote: '© KOKO ACCESSORIES • Precision Automotive Atelier',
    adminPortalLink: 'Admin Portal →',
    footerLangLabel: 'Language:',
    bottomSwitch: '🌐 العربية',
    modalCarTitle: 'Choose Your Car Brand',
    availableInStock: 'Available In Stock',
    comingSoon: 'Coming Soon (0 Items Yet)',
    showMoreMakes: 'Show More Makes',
    hideMoreMakes: 'Hide Empty Makes',
    inStock: 'In Stock',
    soldOut: 'Sold Out',
    photosTag: 'PHOTOS',
    detailsCta: 'Details →',
    fitPrefix: 'Fit:',
    compatTitle: 'COMPATIBLE CAR MODELS & YEARS',
    availBanner: 'AVAILABLE IN STOCK',
    soldBanner: 'CURRENTLY SOLD OUT',
    orderWaBtn: 'ORDER VIA WHATSAPP (01117781675)',
    orderSoldWaBtn: 'INQUIRE AVAILABILITY ON WHATSAPP'
  },
  ar: {
    navCars: 'السيارات',
    navCatalog: 'الإكسسوارات',
    navHow: 'طريقة الطلب',
    navContact: 'تواصل معنا',
    searchPh: 'ابحث باسم السيارة أو القطعة...',
    searchMobPh: 'ابحث: أودي، كوبرا، ميني...',
    heroKicker: 'كوكو لإكسسوارات السيارات • مصر',
    heroTitle: 'إكسسوارات فاخرة مصممة بدقة لسيارتك.',
    heroDesc: 'تصفح الصور الحقيقية من كل الزوايا لجميع أنواع السيارات المضافة في الموقع. اختر سيارتك وتأكد من التوفر واطلب مباشرة عبر واتساب.',
    heroBtnCar: 'اختر سيارتك',
    heroBtnBrowse: 'تصفح كل الإكسسوارات',
    factParts: 'قطعة متوفرة',
    factBrands: 'ماركة سيارات',
    factSync: 'مزامنة سحابية',
    step1Title: 'الخطوة ١ • اختر سيارتك',
    step1Hint: 'تظهر السيارات المتوفرة أولاً • اضغط ماركات أخرى للمزيد',
    step1MobileLabel: 'الخطوة ١ • نوع سيارتك',
    changeCarBtn: 'اختر سيارة ▾',
    showingFor: 'عرض القطع المناسبة لـ:',
    showAllBtn: 'عرض الكل ×',
    inStockOnly: 'المتوفر فقط',
    itemLoading: 'جاري تحميل الإكسسوارات...',
    partSingular: 'إكسسوار متوفر',
    partPlural: 'إكسسوارات متوفرة',
    noMatches: 'لا توجد نتائج مطابقة. جرب سيارة أو تصنيف آخر.',
    howKicker: 'طلب سهل وسريع',
    howTitle: 'كيف تطلب في ٣ خطوات بسيطة',
    stepCard1Title: 'اختر سيارتك والتصنيف',
    stepCard1Desc: 'حدد ماركة سيارتك لعرض الإكسسوارات المتوافقة تماماً، وتصفح صور المنتج عالية الدقة من الأمام والخلف.',
    stepCard2Title: 'تأكيد التوافق عبر واتساب',
    stepCard2Desc: 'اضغط طلب عبر واتساب من صفحة أي قطعة — يُكتب اسم القطعة تلقائياً لنؤكد معك الموديل وسنة الصنع فوراً.',
    stepCard3Title: 'توصيل سريع لباب بيتك',
    stepCard3Desc: 'شحن لجميع محافظات مصر مع إمكانية المعاينة والدفع عند الاستلام أو عبر إنستاباي.',
    footerAbout: 'إكسسوارات السيارات الفاخرة وشعارات وميداليات ودواسات وجرابات المفاتيح الذكية بمصر.',
    footerCars: 'أشهر ماركات السيارات',
    footerContact: 'الدعم والمبيعات',
    backToTop: 'العودة للأعلى ↑',
    footerNote: '© كوكو لإكسسوارات السيارات • دقة وأناقة لكل سيارة',
    adminPortalLink: 'بوابة الإدارة ←',
    footerLangLabel: 'اللغة:',
    bottomSwitch: '🌐 English',
    modalCarTitle: 'اختر ماركة سيارتك',
    availableInStock: 'متوفر في المخزون',
    comingSoon: 'قريباً (لا توجد قطع حالياً)',
    showMoreMakes: 'إظهار ماركات أخرى',
    hideMoreMakes: 'إخفاء الماركات الفارغة',
    inStock: 'متوفر الآن',
    soldOut: 'نفذت الكمية',
    photosTag: 'صور',
    detailsCta: 'التفاصيل ←',
    fitPrefix: 'يناسب:',
    compatTitle: 'السيارات وسنوات الصنع المتوافقة',
    availBanner: 'متوفر في المخزون الآن',
    soldBanner: 'نفذت الكمية حالياً',
    orderWaBtn: 'اطلب الآن عبر واتساب (01117781675)',
    orderSoldWaBtn: 'استفسر عن التوفر القادم عبر واتساب'
  }
};

// ============================================================
// 3. APPLICATION STATE & DOM REFERENCES
// ============================================================
let initialLang = 'en';
try {
  const savedLang = localStorage.getItem('koko_lang');
  if (savedLang === 'ar' || savedLang === 'en') initialLang = savedLang;
} catch (e) {}

const state = {
  selectedBrand: 'all',
  selectedCategory: 'all',
  searchQuery: '',
  stockFilterOnly: false,
  showEmptyBrands: false,
  lang: initialLang,
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
    stockFilterBtn: document.getElementById('stockFilterBtn'),
    searchInput: document.getElementById('searchInput'),
    searchInputMobile: document.getElementById('searchInputMobile'),
    carSelectorModal: document.getElementById('carSelectorModal'),
    detailModal: document.getElementById('detailModal'),
    detailContent: document.getElementById('detailContent'),
    modalDetailBrandTitle: document.getElementById('modalDetailBrandTitle'),
    bottomLangBtn: document.getElementById('bottomLangBtn'),
    footerBrandsList: document.getElementById('footerBrandsList'),
    toast: document.getElementById('toastNotice')
  };
}

// ============================================================
// 4. THEME & LANGUAGE MANAGEMENT
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
    if (label) label.textContent = state.lang === 'ar' ? 'داكن' : 'DARK';
  } else {
    html.classList.remove('dark');
    if (icon) icon.textContent = '☀️';
    if (label) label.textContent = state.lang === 'ar' ? 'فاتح' : 'LIGHT';
  }
  try { localStorage.setItem('koko_theme', theme); } catch (e) {}
}

window.toggleTheme = function() {
  const isDark = document.documentElement.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark');
};

function applyLanguage(lang) {
  state.lang = lang;
  try { localStorage.setItem('koko_lang', lang); } catch (e) {}

  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Update i18n text nodes
  const t = UI_STR[lang] || UI_STR.en;
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (t[key]) elem.textContent = t[key];
  });

  // Update inputs placeholder
  if (el.searchInput) el.searchInput.placeholder = t.searchPh;
  if (el.searchInputMobile) el.searchInputMobile.placeholder = t.searchMobPh;

  // Update bottom switcher button
  if (el.bottomLangBtn) {
    el.bottomLangBtn.textContent = lang === 'ar' ? '🌐 English' : '🌐 العربية';
  }

  // Update theme toggle label
  const isDark = html.classList.contains('dark');
  const label = document.getElementById('themeToggleLabel');
  if (label) label.textContent = lang === 'ar' ? (isDark ? 'داكن' : 'فاتح') : (isDark ? 'DARK' : 'LIGHT');

  // Re-render UI components with translated texts
  renderHeroStats();
  renderCarBrands();
  renderCategories();
  renderAccessories();
  updateCarBanner();
  renderFooterBrands();
  if (el.carSelectorModal && el.carSelectorModal.classList.contains('active')) {
    renderCarSelectorModal();
  }
}

window.toggleLanguage = function() {
  const next = state.lang === 'ar' ? 'en' : 'ar';
  applyLanguage(next);
};

window.setLanguage = function(lang) {
  if (lang === state.lang) return;
  applyLanguage(lang);
};

// ============================================================
// 5. INITIALIZATION & CLOUDFLARE KV MERGE
// ============================================================
async function initApp() {
  try {
    initElements();
    initTheme();
    state.catalog = getSafeCatalog();
    applyLanguage(state.lang);
    setupSearch();
    setupStorageListener();

    // Fetch live Cloudflare KV catalog
    try {
      const cloudRes = await fetch('/api/catalog');
      if (cloudRes.ok) {
        const cloudData = await cloudRes.json();
        if (cloudData && Array.isArray(cloudData.products)) {
          const defaultItems = (typeof DEFAULT_PRODUCTS !== 'undefined' && Array.isArray(DEFAULT_PRODUCTS)) ? DEFAULT_PRODUCTS : [];
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

          const defaultBrands = (typeof DEFAULT_CAR_BRANDS !== 'undefined' && Array.isArray(DEFAULT_CAR_BRANDS)) ? DEFAULT_CAR_BRANDS : [];
          const defaultCats = (typeof DEFAULT_CATEGORIES !== 'undefined' && Array.isArray(DEFAULT_CATEGORIES)) ? DEFAULT_CATEGORIES : [];

          state.catalog = {
            brands: (cloudData.brands && cloudData.brands.length >= defaultBrands.length) ? cloudData.brands : defaultBrands,
            categories: (cloudData.categories && cloudData.categories.length > 0) ? cloudData.categories : defaultCats,
            products: mergedProducts
          };

          if (typeof saveCatalogData === 'function') {
            saveCatalogData(state.catalog);
          }

          renderHeroStats();
          renderCarBrands();
          renderCategories();
          renderAccessories();
          renderFooterBrands();
        }
      }
    } catch (eCloud) {
      // Local or offline mode: uses getSafeCatalog seamlessly
    }
  } catch (err) {
    console.error("Initialization error:", err);
  }
}

// Cross-tab synchronization when Admin adds/updates products
function setupStorageListener() {
  window.addEventListener('storage', (e) => {
    if (e.key === 'koko_catalog_data' || e.key === 'koko_theme' || e.key === 'koko_lang') {
      if (e.key === 'koko_theme') initTheme();
      if (e.key === 'koko_lang' && e.newValue) applyLanguage(e.newValue);
      if (e.key === 'koko_catalog_data') {
        state.catalog = getSafeCatalog();
        renderHeroStats();
        renderCarBrands();
        renderCategories();
        renderAccessories();
        renderFooterBrands();
      }
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// ============================================================
// 6. HERO SECTION DYNAMIC STATS & COLLAGE
// ============================================================
function renderHeroStats() {
  const products = state.catalog.products || [];
  const brands = state.catalog.brands || [];

  const statParts = document.getElementById('heroStatParts');
  const statBrands = document.getElementById('heroStatBrands');

  if (statParts) statParts.textContent = products.length;
  if (statBrands) {
    const stockedCount = brands.filter(b => b.id !== 'all' && getBrandCount(b.id, products) > 0).length;
    statBrands.textContent = stockedCount > 0 ? stockedCount : brands.length;
  }

  // Populate hero collage with first 3 distinct featured products
  const collageItems = products.slice(0, 3);
  collageItems.forEach((item, idx) => {
    const imgEl = document.getElementById(`heroImg${idx}`);
    const badgeEl = document.getElementById(`heroBadge${idx}`);
    if (imgEl && item.image) imgEl.src = item.image;
    if (badgeEl) {
      const bObj = brands.find(b => b.id === item.brand);
      const bLabel = getBrandLabel(bObj, item.brand);
      badgeEl.textContent = `${bLabel} • ${getProdTitle(item).split(' ').slice(0, 2).join(' ')}`.toUpperCase();
    }
  });
}

window.openHeroCollageItem = function(idx) {
  const products = state.catalog.products || [];
  if (products[idx]) {
    openDetailModal(products[idx].id);
  }
};

// ============================================================
// 7. VEHICLE BRAND SELECTOR
// ============================================================
function renderCarBrands() {
  const brands = state.catalog.brands || [];
  const products = state.catalog.products || [];
  const t = UI_STR[state.lang] || UI_STR.en;

  const activeObj = brands.find(b => b.id === state.selectedBrand);
  const activeCount = getBrandCount(state.selectedBrand, products);
  if (el.mobileActiveCarName) el.mobileActiveCarName.textContent = getBrandLabel(activeObj, state.selectedBrand);
  if (el.mobileActiveCarCount) el.mobileActiveCarCount.textContent = activeCount;

  const stocked = brands.filter(b => b && b.id && getBrandCount(b.id, products) > 0);
  const emptyCount = brands.filter(b => b && b.id && getBrandCount(b.id, products) === 0).length;

  // PC Stocked Brand Cards
  if (el.carBrandsContainer) {
    el.carBrandsContainer.innerHTML = stocked.map(b => {
      const isActive = state.selectedBrand === b.id;
      const count = getBrandCount(b.id, products);
      const countLabel = count === 1 ? `1 ${t.partSingular}` : `${count} ${t.partPlural}`;
      return `
        <div class="pc-brand-card ${isActive ? 'active' : ''}" onclick="selectCarBrand('${b.id}')">
          <span class="pc-brand-name">${getBrandLabel(b, b.id)}</span>
          <span class="pc-brand-count">${countLabel}</span>
        </div>
      `;
    }).join('') + (emptyCount > 0 ? `
      <div class="pc-brand-card more-brands-card" onclick="openCarModal()">
        <span class="pc-brand-name">+ ${t.showMoreMakes}</span>
        <span class="pc-brand-count">${emptyCount} ${t.comingSoon}</span>
      </div>
    ` : '');
  }

  // Mobile Quick Brand Pills
  if (el.mobileQuickBrands) {
    el.mobileQuickBrands.innerHTML = stocked.map(b => {
      const isActive = state.selectedBrand === b.id;
      const count = getBrandCount(b.id, products);
      const shortName = b.id === 'all' ? (state.lang === 'ar' ? 'الكل' : 'ALL') : getBrandLabel(b, b.id);
      return `
        <button type="button" class="brand-pill ${isActive ? 'active' : ''}" onclick="selectCarBrand('${b.id}')">
          ${shortName}<span class="brand-pill-count">${count}</span>
        </button>
      `;
    }).join('') + `
      <button type="button" class="brand-pill" onclick="openCarModal()" style="border-style:dashed;">
        + ${state.lang === 'ar' ? 'كل السيارات' : 'ALL CARS'}
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
    if (el.activeCarTitle) el.activeCarTitle.textContent = getBrandLabel(currentBrand, state.selectedBrand);
    el.activeCarBanner.classList.remove('hidden');
  }
}

window.resetCarFilter = function() {
  state.selectedBrand = 'all';
  state.selectedCategory = 'all';
  state.searchQuery = '';
  state.stockFilterOnly = false;
  if (el.stockFilterBtn) el.stockFilterBtn.classList.remove('active');
  if (el.searchInput) el.searchInput.value = '';
  if (el.searchInputMobile) el.searchInputMobile.value = '';
  renderCarBrands();
  renderCategories();
  renderAccessories();
  updateCarBanner();
};

// ============================================================
// 8. CATEGORY PILLS & STOCK FILTER
// ============================================================
function renderCategories() {
  if (!el.categoriesContainer) return;
  const categories = state.catalog.categories || [];
  const products = state.catalog.products || [];

  const filteredByBrand = products.filter(p => matchesBrand(p, state.selectedBrand));

  el.categoriesContainer.innerHTML = categories.map(cat => {
    const isAll = cat.id === 'all';
    const normC = normCat(cat.id);
    const count = isAll ? filteredByBrand.length : filteredByBrand.filter(p => normCat(p.category) === normC).length;
    if (!isAll && count === 0) return '';
    const isActive = state.selectedCategory === cat.id;

    return `
      <button type="button" class="cat-pill ${isActive ? 'active' : ''}" onclick="selectCategory('${cat.id}')">
        ${getCatLabel(cat)} (${count})
      </button>
    `;
  }).join('');
}

window.selectCategory = function(catId) {
  state.selectedCategory = catId;
  renderCategories();
  renderAccessories();
};

window.toggleStockFilter = function() {
  state.stockFilterOnly = !state.stockFilterOnly;
  if (el.stockFilterBtn) {
    el.stockFilterBtn.classList.toggle('active', state.stockFilterOnly);
  }
  renderAccessories();
};

// ============================================================
// 9. PRODUCT SHOWCASE GRID (WITH 2ND PHOTO HOVER)
// ============================================================
function renderAccessories() {
  if (!el.accessoriesGrid) return;
  const products = state.catalog.products || [];
  const brands = state.catalog.brands || [];
  const t = UI_STR[state.lang] || UI_STR.en;

  const q = (state.searchQuery || '').trim().toLowerCase();

  const filtered = products.filter(p => {
    if (!matchesBrand(p, state.selectedBrand)) return false;
    if (state.selectedCategory !== 'all') {
      if (normCat(p.category) !== normCat(state.selectedCategory)) return false;
    }
    if (state.stockFilterOnly && p.soldOut) return false;
    if (q) {
      const matchName = (p.name || '').toLowerCase().includes(q);
      const matchNameAr = (p.nameAr || '').toLowerCase().includes(q);
      const matchFit = (p.fitment || '').toLowerCase().includes(q);
      const matchBrand = (p.brand || '').toLowerCase().includes(q);
      if (!matchName && !matchNameAr && !matchFit && !matchBrand) return false;
    }
    return true;
  });

  if (el.itemCountDisplay) {
    const countLabel = filtered.length === 1 ? `1 ${t.partSingular}` : `${filtered.length} ${t.partPlural}`;
    el.itemCountDisplay.textContent = countLabel;
  }

  if (filtered.length === 0) {
    el.accessoriesGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <p style="font-size: 15px; margin-bottom: 12px;">${t.noMatches}</p>
        <button type="button" class="btn-black" onclick="resetCarFilter()">${t.showAllBtn}</button>
      </div>
    `;
    return;
  }

  el.accessoriesGrid.innerHTML = filtered.map(item => {
    const brandObj = brands.find(b => b.id === item.brand);
    const brandLabel = getBrandLabel(brandObj, item.brand);
    const title = getProdTitle(item);
    const fit = getProdFit(item);
    const isSoldOut = Boolean(item.soldOut);

    const images = Array.isArray(item.images) && item.images.length > 0 ? item.images : [item.image];
    const firstImg = images[0] || 'images/fallback.jpg';
    const secondImg = images.length > 1 ? images[1] : null;

    const hoverImgHtml = secondImg ? `
      <img src="${secondImg}" alt="${title}" class="accessory-img-hover" loading="lazy" />
    ` : '';

    return `
      <article class="accessory-card ${isSoldOut ? 'sold-out' : ''}" onclick="openDetailModal('${item.id}')">
        <div class="accessory-img-box">
          <span class="card-brand-tag">${brandLabel}</span>
          ${isSoldOut ? `<span class="card-soldout-tag">${t.soldOut}</span>` : ''}
          ${images.length > 1 ? `<span class="card-photos-pill">${images.length} ${t.photosTag}</span>` : ''}
          <img src="${firstImg}" alt="${title}" class="accessory-img" loading="lazy" />
          ${hoverImgHtml}
        </div>
        <div class="card-body">
          <div>
            <h3 class="card-title">${title}</h3>
            ${fit ? `<p class="card-fit">${t.fitPrefix} ${fit}</p>` : ''}
          </div>
          <div class="card-meta-row">
            ${isSoldOut
              ? `<span class="status-sold-out"><span style="width:6px;height:6px;border-radius:99px;background:var(--soldout-red);"></span> ${t.soldOut}</span>`
              : `<span class="status-in-stock"><span style="width:6px;height:6px;border-radius:99px;background:var(--stock-green);"></span> ${t.inStock}</span>`
            }
            <span class="card-tap-hint">${t.detailsCta}</span>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ============================================================
// 10. PRODUCT DETAIL MODAL & DYNAMIC WHATSAPP ORDER
// ============================================================
window.currentModalImages = [];
window.currentModalImgIndex = 0;

window.openDetailModal = function(prodId) {
  const products = state.catalog.products || [];
  const brands = state.catalog.brands || [];
  const t = UI_STR[state.lang] || UI_STR.en;

  const item = products.find(p => p.id === prodId);
  if (!item || !el.detailModal || !el.detailContent) return;

  const brandObj = brands.find(b => b.id === item.brand);
  const brandLabel = getBrandLabel(brandObj, item.brand);
  const title = getProdTitle(item);
  const fit = getProdFit(item);
  const isSoldOut = Boolean(item.soldOut);

  window.currentModalImages = Array.isArray(item.images) && item.images.length > 0 ? item.images : [item.image];
  window.currentModalImgIndex = 0;

  if (el.modalDetailBrandTitle) {
    el.modalDetailBrandTitle.textContent = `${brandLabel} • ACCESSORY`;
  }

  // Pre-filled WhatsApp message in English or Arabic
  let waMsg = '';
  if (state.lang === 'ar') {
    waMsg = isSoldOut
      ? `مرحباً كوكو إكسسوارات! أرغب في الاستفسار عن موعد توفر القطعة: ${item.name} (${brandLabel}). هل ستتوفر قريباً؟`
      : `مرحباً كوكو إكسسوارات! أود طلب: ${item.name} (${brandLabel}) لسيارتي. برجاء تأكيد التوافق وسعر الشحن.`;
  } else {
    waMsg = isSoldOut
      ? `Hello KOKO ACCESSORIES! I want to inquire about when this item will be back in stock: ${item.name} (${brandLabel}).`
      : `Hello KOKO ACCESSORIES! I would like to order: ${item.name} (${brandLabel}). Please confirm model compatibility and shipping.`;
  }
  const waUrl = `https://wa.me/201117781675?text=${encodeURIComponent(waMsg)}`;

  el.detailContent.innerHTML = `
    <div class="product-modal-split">
      <div>
        <div class="modal-gallery">
          <img id="modalMainImg" src="${window.currentModalImages[0]}" alt="${title}" />
          ${window.currentModalImages.length > 1 ? `
            <button type="button" class="gallery-nav gallery-prev" onclick="prevModalPhoto(event)">&lsaquo;</button>
            <button type="button" class="gallery-nav gallery-next" onclick="nextModalPhoto(event)">&rsaquo;</button>
          ` : ''}
        </div>
        ${window.currentModalImages.length > 1 ? `
          <div class="thumb-strip">
            ${window.currentModalImages.map((src, idx) => `
              <button type="button" id="modalThumbBtn_${idx}" class="thumb-btn ${idx === 0 ? 'active' : ''}" onclick="setModalPhotoIndex(${idx})">
                <img src="${src}" alt="Thumb ${idx + 1}" />
              </button>
            `).join('')}
          </div>
        ` : ''}
      </div>

      <div class="detail-col">
        <div>
          <span style="font-size:11px;font-weight:700;color:var(--de-gold);letter-spacing:0.08em;text-transform:uppercase;">${brandLabel}</span>
          <h2 style="font-size:18px;font-weight:700;margin-top:4px;color:var(--text-main);line-height:1.3;">${title}</h2>
        </div>

        <div class="status-banner ${isSoldOut ? 'soldout' : 'instock'}">
          <span>${isSoldOut ? t.soldBanner : t.availBanner}</span>
          <span id="modalPhotoCounter">${window.currentModalImages.length > 1 ? `1 / ${window.currentModalImages.length}` : ''}</span>
        </div>

        ${fit ? `
          <div class="fitment-box">
            <strong>${t.compatTitle}</strong>
            <span>${fit}</span>
          </div>
        ` : ''}

        <p style="font-size:12.5px;color:var(--text-sub);line-height:1.6;">
          ${state.lang === 'ar'
            ? 'تم تصوير جميع القطع لدينا بكاميرات عالية الدقة من مختلف الزوايا لتأكيد أعلى معايير الجودة والمطابقة التامة لمقاسات سيارتك.'
            : 'All accessories are captured in studio lighting from multiple angles to ensure factory-grade fitment and finish on your vehicle.'}
        </p>

        <a href="${waUrl}" target="_blank" rel="noopener" class="wa-cta ${isSoldOut ? 'soldout-cta' : ''}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          ${isSoldOut ? t.orderSoldWaBtn : t.orderWaBtn}
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
// 11. CHOOSE CAR MODAL
// ============================================================
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
  const t = UI_STR[state.lang] || UI_STR.en;

  const searchEl = document.getElementById('sheetBrandSearch');
  const q = (searchEl ? searchEl.value : '').trim().toLowerCase();

  const filtered = brands.filter(b => {
    if (!b || !b.id) return false;
    if (!q) return true;
    const nameMatch = (b.name || '').toLowerCase().includes(q);
    const idMatch = (b.id || '').toLowerCase().includes(q);
    const labelMatch = (getBrandLabel(b, b.id) || '').toLowerCase().includes(q);
    return nameMatch || idMatch || labelMatch;
  });

  const stocked = filtered.filter(b => b.id === 'all' || getBrandCount(b.id, products) > 0);
  const empty = filtered.filter(b => b.id !== 'all' && getBrandCount(b.id, products) === 0);

  const stockedContainer = document.getElementById('stockedBrandsList');
  if (stockedContainer) {
    stockedContainer.innerHTML = stocked.map(b => {
      const isActive = state.selectedBrand === b.id;
      const count = getBrandCount(b.id, products);
      const countLabel = b.id === 'all' ? (state.lang === 'ar' ? 'الكل' : 'ALL') : `${count}`;
      return `
        <button type="button" class="sheet-brand-btn ${isActive ? 'active' : ''}" onclick="pickBrandFromModal('${b.id}')">
          <span class="sheet-brand-name">${getBrandLabel(b, b.id)}</span>
          <span class="sheet-brand-count">${countLabel}</span>
        </button>
      `;
    }).join('');
  }

  const toggleBtn = document.getElementById('toggleEmptyBrandsBtn');
  const emptyWrap = document.getElementById('emptyBrandsWrap');
  const emptyContainer = document.getElementById('emptyBrandsList');

  if (toggleBtn && emptyWrap && emptyContainer) {
    if (empty.length === 0) {
      toggleBtn.style.display = 'none';
      emptyWrap.style.display = 'none';
    } else {
      toggleBtn.style.display = 'block';
      toggleBtn.textContent = state.showEmptyBrands
        ? `${t.hideMoreMakes} (${empty.length})`
        : `+ ${t.showMoreMakes} (${empty.length} ${t.comingSoon})`;

      emptyWrap.style.display = state.showEmptyBrands ? 'block' : 'none';
      emptyContainer.innerHTML = empty.map(b => `
        <button type="button" class="sheet-brand-btn empty ${state.selectedBrand === b.id ? 'active' : ''}" onclick="pickBrandFromModal('${b.id}')">
          <span class="sheet-brand-name">${getBrandLabel(b, b.id)}</span>
          <span class="sheet-brand-count">0</span>
        </button>
      `).join('');
    }
  }
};

// ============================================================
// 12. DYNAMIC FOOTER POPULAR BRANDS
// ============================================================
function renderFooterBrands() {
  if (!el.footerBrandsList) return;
  const brands = state.catalog.brands || [];
  const products = state.catalog.products || [];

  const topBrands = brands
    .filter(b => b.id !== 'all' && getBrandCount(b.id, products) > 0)
    .sort((a, b) => getBrandCount(b.id, products) - getBrandCount(a.id, products))
    .slice(0, 6);

  el.footerBrandsList.innerHTML = topBrands.map(b => `
    <li>
      <button type="button" onclick="selectCarBrand('${b.id}'); document.getElementById('catalogSection').scrollIntoView({behavior:'smooth'});">
        ${getBrandLabel(b, b.id)} (${getBrandCount(b.id, products)})
      </button>
    </li>
  `).join('');
}

// ============================================================
// 13. SEARCH HANDLING
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
