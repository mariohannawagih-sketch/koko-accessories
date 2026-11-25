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

function isProductSoldOut(p) {
  return Boolean(p && (p.isSoldOut || p.soldOut));
}

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
      const copy = { ...p, isSoldOut: isProductSoldOut(p) };
      if ('soldOut' in copy) delete copy.soldOut;
      return copy;
    });

  if (!brands.some(b => b.id === 'all')) {
    brands.unshift({ id: "all", name: "ALL CARS", logo: "ALL" });
  }

  let updatedAt = parseTimeMs(cat.updatedAt);
  if (!updatedAt) {
    try { updatedAt = parseTimeMs(localStorage.getItem(CATALOG_UPDATED_KEY)); } catch (e) {}
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

function normCat(val) {
  return (val || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function matchesBrand(prod, brandId) {
  if (!prod) return false;
  if (brandId === 'all') return true;
  const b = prod.brand;
  if (brandId === 'audi') return b === 'audi' || b === 'audislien' || b === 'audirs';
  if (brandId === 'audislien') return b === 'audislien' || b === 'audi';
  if (brandId === 'audirs') return b === 'audirs' || b === 'audi';
  return b === brandId;
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
  alfaromeo: 'ألفا روميو',
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
  tobb: 'طُبَب جنوط',
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
  exteriortrim: 'إكسسوارات خارجية وداخلية',
  exhausttips: 'ديفوزر ومخارج شكمان',
  ambientlight: 'إضاءة محيطية'
};

const PHRASE_DICT_AR = [
  ['tire valve stem caps & wrench keychain kit', 'طقم أغطية بلف الكاوتش وميدالية مفتاح ربط'],
  ['valve stem caps & wrench keychain kit', 'طقم أغطية بلف الكاوتش وميدالية مفتاح ربط'],
  ['steering wheel multifunction button', 'أزرار طارة الدركسيون المتعددة'],
  ['steering wheel lower spoke trim', 'إطار أسفل طارة الدركسيون'],
  ['steering wheel lower spoke clip', 'قطعة تزيين أسفل طارة الدركسيون'],
  ['steering wheel airbag cover', 'غطاء إيرباج طارة الدركسيون'],
  ['steering airbag emblem', 'شعار إيرباج طارة الدركسيون'],
  ['steering button trim set', 'طقم أزرار طارة الدركسيون'],
  ['steering spoke insert', 'قطعة تزيين ذراع الطارة'],
  ['seatbelt silencer buckle clips', 'مشابك كاتم صوت حزام الأمان'],
  ['seatbelt silencer clips', 'مشابك كاتم صوت حزام الأمان'],
  ['door handle recess anti-scratch guards', 'حماية مقابض الأبواب ضد الخدوش'],
  ['door lock striker covers', 'أغطية كالون وقفل الأبواب'],
  ['door striker lock covers', 'أغطية كالون وقفل الأبواب'],
  ['door striker covers', 'أغطية كالون الأبواب'],
  ['rearview mirror hanging ornament', 'ميدالية تعليق مرآة الصالون'],
  ['mirror hanging ornament', 'ميدالية تعليق مرآة الصالون'],
  ['mirror ornament', 'ميدالية مرآة الصالون'],
  ['shark-fin roof antenna cover', 'غطاء أنتينا سقف زعنفة قرش'],
  ['short roof sport antenna', 'أنتينا سقف رياضية قصيرة'],
  ['short stubby roof antenna', 'أنتينا سقف رياضية قصيرة'],
  ['roof antenna mounts', 'قواعد أنتينا السقف'],
  ['gear shift knob cover', 'غطاء فتيس الجير'],
  ['shift knob & red-stitch leather boot', 'مقبض فتيس أوتوماتيك مع جراب جلد'],
  ['idrive knob cover', 'غطاء بكرة تحكم iDrive'],
  ['air filter pre-charger wrap', 'جراب حماية فلتر الهواء الرياضي'],
  ['pre-charger wrap', 'جراب حماية فلتر الهواء'],
  ['wheel center cap overlays', 'شعارات سنتر كاب جنوط بارزة'],
  ['wheel center hub caps', 'أغطية سنتر كاب جنوط'],
  ['wheel center caps', 'أغطية سنتر كاب جنوط'],
  ['wheel center cap', 'غطاء سنتر كاب جنط'],
  ['wheel center badges', 'شعارات سنتر كاب جنوط'],
  ['wheel lug nut covers', 'أغطية مسامير العجل والجنوط'],
  ['wheel cap surface', 'سطح كاب الجنط'],
  ['center-lock style wheel caps', 'أغطية سنتر كاب جنوط استايل سنتر لوك'],
  ['center-lock wheel cap styles', 'أشكال أغطية جنوط سنتر لوك'],
  ['wheel caps', 'أغطية سنتر كاب جنوط'],
  ['wheel cap', 'غطاء سنتر كاب جنط'],
  ['multi-color collection', 'تشكيلة ألوان متعددة'],
  ['all-weather rubber mats', 'دواسات مطاط لجميع الفصول'],
  ['all-weather rubber floor mats', 'دواسات أرضية مطاط لجميع الفصول'],
  ['tpe rubber floor mats', 'دواسات أرضية مطاط TPE'],
  ['all-weather floor mats', 'دواسات أرضية لجميع الفصول'],
  ['paddle shifter extensions', 'تطويلة شيفتات طارة'],
  ['paddle shifters', 'شيفتات طارة'],
  ['paddle extensions', 'تطويلة شيفتات طارة'],
  ['paddle shifter', 'شيفتات الطارة'],
  ['sport pedals', 'دواسات سبورت'],
  ['sports pedals set', 'طقم دواسات سبورت'],
  ['sport pedals set', 'طقم دواسات سبورت'],
  ['sports pedals', 'دواسات سبورت'],
  ['pedal cover set', 'طقم أغطية دواسات'],
  ['pedal cover', 'غطاء دواسة'],
  ['engine displacement badge', 'شعار سعة المحرك'],
  ['engine trunk badge', 'شعار سعة المحرك للشنطة'],
  ['steering wheel center', 'منتصف طارة الدركسيون'],
  ['steering wheel cover', 'كفر طارة دركسيون'],
  ['steering wheels', 'طارات الدركسيون'],
  ['steering wheel', 'طارة الدركسيون'],
  ['smart key replacement shell', 'جراب مفتاح سمارت بديل أصلي'],
  ['flip key replacement shell', 'جراب مفتاح سويتش بديل أصلي'],
  ['flip key armor cover', 'جراب حماية مدرع لمفتاح سويتش'],
  ['smart key armor cover', 'جراب حماية مدرع لمفتاح سمارت'],
  ['armor key cover kit', 'طقم جراب مفتاح مدرع'],
  ['armor key cover', 'جراب مفتاح مدرع'],
  ['armor key case', 'جراب مفتاح مدرع'],
  ['smart remote key', 'مفتاح ريموت سمارت'],
  ['smart key fob', 'مفتاح سمارت'],
  ['smart key', 'مفتاح سمارت'],
  ['smart keys', 'المفاتيح الذكية'],
  ['flip key', 'مفتاح سويتش'],
  ['replacement shell', 'جراب بديل أصلي'],
  ['hard shell smart key covers', 'جرابات مفتاح هارد سمارت'],
  ['hard shell key covers', 'جرابات مفتاح هارد'],
  ['hard key cover', 'جراب مفتاح هارد'],
  ['hard key fob cover', 'جراب مفتاح هارد'],
  ['protective cover', 'جراب حماية'],
  ['protective cases', 'جرابات حماية'],
  ['key fob emblem', 'شعار مفتاح السيارة'],
  ['key fob cover', 'جراب مفتاح'],
  ['key cover', 'جراب مفتاح'],
  ['key covers', 'جرابات مفاتيح'],
  ['key case', 'جراب مفتاح'],
  ['key shell', 'كفر مفتاح'],
  ['keychain tool kit', 'طقم مفتاح وأداة ربط'],
  ['keychain charms', 'ميداليات مفاتيح مميزة'],
  ['keychains', 'ميداليات مفاتيح'],
  ['keychain', 'ميدالية مفاتيح'],
  ['keyring', 'ميدالية مفاتيح'],
  ['seatbelt webbing strap roll', 'لفة شريط حزام أمان رياضي'],
  ['seatbelt webbing roll', 'لفة شريط حزام أمان رياضي'],
  ['seatbelt webbing', 'شريط حزام أمان رياضي'],
  ['seatbelt silencer', 'كاتم صوت حزام الأمان'],
  ['seat belt buckles', 'أقفال حزام الأمان'],
  ['seatbelt buckles', 'أقفال حزام الأمان'],
  ['seatbelt comfort strap', 'حزام راحة حزام الأمان'],
  ['seatbelt receivers', 'أقفال حزام الأمان'],
  ['seatbelt receptacles', 'أقفال حزام الأمان'],
  ['seatbelts', 'أحزمة الأمان'],
  ['seatbelt', 'حزام أمان'],
  ['brake caliper covers', 'كفرات كاليبر فرامل'],
  ['caliper covers', 'كفرات كاليبر فرامل'],
  ['rearview mirror hanging medal', 'ميدالية مرآة صالون'],
  ['side fender vent trim blades', 'إضافات فتحات هواء الرفارف الجانبية'],
  ['side fender wing emblem kit', 'طقم شعارات وأجنحة الرفرف الجانبي'],
  ['fender blade badges', 'شارات أجنحة الرفارف'],
  ['fender blades', 'أجنحة رفارف'],
  ['fender emblems', 'شعارات رفارف'],
  ['fender badges', 'شارات رفارف'],
  ['fender badge', 'شارة رفرف'],
  ['wide-spaced tailgate lettering', 'حروف شنطة خلفية متباعدة'],
  ['wide-spaced trunk letters', 'حروف شنطة خلفية متباعدة'],
  ['wide-spaced chrome trunk letters', 'حروف شنطة متباعدة كروم'],
  ['rear trunk lettering', 'حروف شنطة خلفية'],
  ['tailgate lettering', 'حروف شنطة خلفية'],
  ['trunk lettering', 'حروف شنطة'],
  ['trunk letters', 'حروف شنطة'],
  ['trunk emblem', 'شعار شنطة'],
  ['trunk badge', 'شعار شنطة'],
  ['rear trunk', 'شنطة خلفية'],
  ['trunk lid', 'باب الشنطة'],
  ['front radiator grille', 'الشبكة الأمامية للردياتير'],
  ['mesh grille badge', 'شارة شبكة أمامية'],
  ['front grille emblem with mounting kit', 'شعار شبكة أمامية مع طقم التثبيت'],
  ['front grille emblem with bracket', 'شعار شبكة أمامية مع طقم تثبيت'],
  ['front grille emblem', 'شعار شبكة أمامية'],
  ['front grille star', 'نجمة شبكة أمامية'],
  ['grille emblem', 'شعار شبكة أمامية'],
  ['front grille', 'شبكة أمامية'],
  ['grille / trunk emblem', 'شعار شبكة أمامية وشنطة'],
  ['flat hood emblem', 'شعار كبوت مسطح'],
  ['hood & trunk emblem', 'شعار كبوت وشنطة'],
  ['front & rear emblem pair', 'طقم شعار أمامي وخلفي'],
  ['front & rear emblems', 'شعارات أمامية وخلفية'],
  ['front radar & rear emblems', 'شعار رادار أمامي وخلفي'],
  ['clip-in grille emblem', 'شعار شبكة أمامية بكلبسات'],
  ['clip-on front grille emblem', 'شعار شبكة أمامية بكلبسات'],
  ['bolt-on front grille badges', 'شارات شبكة أمامية بمسامير تثبيت'],
  ['one-piece', 'قطعة واحدة'],
  ['aftermarket alloy wheels', 'الجنوط الرياضية'],
  ['factory & aftermarket alloy wheels', 'الجنوط الأصلية والرياضية'],
  ['alloy wheels', 'جنوط ألمنيوم'],
  ['alloy rims', 'جنوط ألمنيوم'],
  ['alloy wheel rims', 'جنوط ألمنيوم'],
  ['door sill entry guards', 'عتب حماية للأبواب'],
  ['door sill', 'عتب الأبواب'],
  ['sill guards', 'عتب حماية الأبواب'],
  ['hood & trunk', 'الكبوت والشنطة'],
  ['hood & boot', 'الكبوت والشنطة'],
  ['hood & roof', 'الكبوت والسقف'],
  ['rubber floor mats', 'دواسات أرضية مطاط'],
  ['car floor mats', 'دواسات أرضية للسيارة'],
  ['floor mats', 'دواسات أرضية'],
  ['rubber mats', 'دواسات مطاط'],
  ['valve stem caps', 'أغطية بلف الكاوتش'],
  ['parking card & dash visor emblem', 'كارت انتظار معدني وشعار تابلوه'],
  ['short roof sport antenna', 'أنتينا سقف رياضية قصيرة'],
  ['antenna', 'أنتينا سقف'],
  ['john cooper works', 'جون كوبر وركس (JCW)'],
  ['quadrifoglio clover', 'شعار كوادريفوليو البرسيم'],
  ['quadrifoglio', 'كوادريفوليو'],
  ['gazoo racing gr badge', 'شارة جازو ريسنج GR'],
  ['gazoo racing', 'جازو ريسنج'],
  ['symmetrical awd', 'دفع رباعي SYMMETRICAL AWD'],
  ['blue efficiency', 'إصدار BlueEfficiency'],
  ['affalterbach amg crest', 'شعار أفالترباخ AMG'],
  ['laurel wreath', 'إكليل الغار'],
  ['double chevron', 'الشيفرون المزدوج'],
  ['winged arrow', 'السهم المجنح'],
  ['standing lion', 'الأسد الواقف'],
  ['new lion shield', 'شعار درع الأسد الجديد'],
  ['lion shield', 'شعار درع الأسد'],
  ['scorpion squircle', 'شعار العقرب'],
  ['scorpion', 'العقرب'],
  ['s caron', 'حرف Š'],
  ['caron', 'شعار'],
  ['ram head', 'شعار رأس رام'],
  ['pleiades', 'النجوم'],
  ['clark tartan plaid', 'كاروهات GTI الكلاسيك'],
  ['tartan plaid', 'كاروهات'],
  ['checkered racing flag', 'علم السباقات المربعات'],
  ['checkered racing', 'سباقات مربعات'],
  ['checkered flag', 'علم المربعات'],
  ['checkered', 'مربعات'],
  ['black jack union flag', 'علم بريطانيا الأسود'],
  ['union jack', 'علم بريطانيا'],
  ['paul smith stripes', 'خطوط بول سميث'],
  ['german racing stripes', 'الألوان الألمانية الرياضية'],
  ['german tri-color', 'الألوان الألمانية الثلاثية'],
  ['dual slashes', 'الشرطات المزدوجة'],
  ['tricolor', 'ثلاثي الألوان'],
  ['tri-color', 'ثلاثي الألوان'],
  ['racing red', 'أحمر رياضي'],
  ['crimson red', 'أحمر قرمزي'],
  ['satin red', 'أحمر مطفي'],
  ['lapiz blue', 'أزرق لابيز'],
  ['racing blue', 'أزرق رياضي'],
  ['metallic blue', 'أزرق ميتاليك'],
  ['metallic silver', 'فضي ميتاليك'],
  ['metallic red', 'أحمر ميتاليك'],
  ['metallic 3d', 'معدني ثلاثي الأبعاد'],
  ['satin gold', 'ذهبي ساتان'],
  ['polished glossy gold', 'ذهبي لامع'],
  ['stealth copper', 'نحاسي مطفي'],
  ['copper bronze', 'برونزي نحاسي'],
  ['matte silver', 'فضي مطفي'],
  ['matte black', 'أسود مطفي'],
  ['piano black', 'أسود بيانو لامع'],
  ['smoked gloss black', 'أسود لامع مدخن'],
  ['all gloss black', 'أسود لامع بالكامل'],
  ['gloss blackout', 'أسود لامع بالكامل'],
  ['solid gloss black', 'أسود لامع مصمت'],
  ['hollow cut-out', 'مفرغ'],
  ['gloss black', 'أسود لامع'],
  ['gloss white', 'أبيض لامع'],
  ['gloss red', 'أحمر لامع'],
  ['blackout', 'أسود معتم'],
  ['dark green', 'أخضر داكن'],
  ['bright green', 'أخضر زاهي'],
  ['bright', 'لامع'],
  ['dark', 'داكن'],
  ['stainless steel', 'ستانلس ستيل'],
  ['brushed stainless', 'ستانلس ستيل مصقول'],
  ['brushed aluminum', 'ألمنيوم مصقول'],
  ['brushed silver', 'فضي مصقول'],
  ['cnc bronze', 'برونزي CNC'],
  ['alcantara suede', 'ألكانتارا سويد'],
  ['alcantara', 'ألكانتارا'],
  ['forged carbon', 'كاربون فايبر فورجد'],
  ['woven carbon', 'كاربون فايبر منسوج'],
  ['real carbon fiber', 'كاربون فايبر أصلي'],
  ['gloss carbon fiber', 'كاربون فايبر لامع'],
  ['carbon fiber', 'كاربون فايبر'],
  ['carbon matte', 'كاربون مطفي'],
  ['gloss carbon', 'كاربون لامع'],
  ['gloss key cover', 'جراب مفتاح لامع'],
  ['pebbled black leather', 'جلد طبيعي أسود محبب'],
  ['leather strap', 'حزام جلد'],
  ['vertical black leather strap', 'حزام جلد أسود رأسي'],
  ['braided keychain', 'ميدالية جلد مضفر'],
  ['woodgrain & gunmetal armor', 'خشبي مع إطار معدن جان ميتال'],
  ['woodgrain', 'خشبي'],
  ['gunmetal armor', 'إطار معدن جان ميتال'],
  ['gunmetal', 'جان ميتال'],
  ['silicone', 'سيليكون'],
  ['honeycomb', 'شكل خلية النحل'],
  ['diagonal', 'مائل'],
  ['solid metal', 'معدن صلب'],
  ['heavy metal', 'معدن ثقيل'],
  ['metal', 'معدن'],
  ['metallic', 'معدني'],
  ['graphite', 'جرافيت'],
  ['chrome & red', 'كروم وأحمر'],
  ['black & red', 'أسود وأحمر'],
  ['red & black', 'أحمر وأسود'],
  ['grey & black', 'رمادي وأسود'],
  ['silver & black', 'فضي وأسود'],
  ['bronze & black', 'برونزي وأسود'],
  ['chrome & black', 'كروم وأسود'],
  ['blue & chrome', 'أزرق وكروم'],
  ['green & silver', 'أخضر وفضي'],
  ['black & chrome', 'أسود وكروم'],
  ['red & silver', 'أحمر وفضي'],
  ['red & chrome', 'أحمر وكروم'],
  ['chrome & gunmetal', 'كروم وجان ميتال'],
  ['gloss black & chrome', 'أسود لامع وكروم'],
  ['black & silver', 'أسود وفضي'],
  ['blue & silver', 'أزرق وفضي'],
  ['red-stitch', 'بخياطة حمراء'],
  ['red stitch', 'خياطة حمراء'],
  ['red accent', 'لمسة حمراء'],
  ['red diamond', 'ماسي أحمر'],
  ['red ring', 'حلقة حمراء'],
  ['leather ring', 'حلقة جلد'],
  ['all-chrome', 'كروم بالكامل'],
  ['silver-rim', 'بإطار فضي'],
  ['chrome-trimmed', 'بإطار كروم'],
  ['chrome-outline', 'بإطار كروم'],
  ['chrome outline', 'إطار كروم'],
  ['black inlay', 'حشو أسود'],
  ['hollow chrome bevel', 'كروم بارز مفرغ'],
  ['chrome bevel', 'كروم بارز'],
  ['cursive script', 'خط يد'],
  ['script', 'مكتوب'],
  ['block', 'خط بارز'],
  ['italic', 'مائل'],
  ['slanted', 'مائل'],
  ['smoked', 'مدخن'],
  ['flared', 'بارز'],
  ['domed', 'بارز'],
  ['sculpted', 'مجسم'],
  ['recessed', 'غائر'],
  ['compact', 'مضغوط'],
  ['wide-spaced', 'متباعد'],
  ['wide', 'عريض'],
  ['slim', 'رفيع'],
  ['thin', 'رفيع'],
  ['bold', 'عريض'],
  ['large', 'كبير'],
  ['oversized', 'حجم كبير'],
  ['mini', 'ميني'],
  ['round', 'دائري'],
  ['rounded shield', 'درع دائري'],
  ['rounded', 'دائري'],
  ['octagon', 'مثمن'],
  ['parallelogram', 'متوازي أضلاع'],
  ['diamond', 'ماسي'],
  ['triangle', 'مثلث'],
  ['rectangle', 'مستطيل'],
  ['oval', 'بيضاوي'],
  ['flat', 'مسطح'],
  ['star 5-arm', 'نجمة 5 أذرع'],
  ['4-rings', '4 حلقات'],
  ['3-pointed star', 'نجمة ثلاثية'],
  ['3-diamond', '3 ماسات'],
  ['gecko / lizard', 'شعار جيكو'],
  ['gecko', 'شعار جيكو'],
  ['mascot', 'تميمة'],
  ['rabbit', 'أرنب'],
  ['shark', 'قرش'],
  ['bear & rabbit', 'دب وأرنب'],
  ['figurine', 'مجسم'],
  ['graffiti', 'جرافيتي'],
  ['splatter', 'طرطشة ألوان'],
  ['waving flag', 'علم متموج'],
  ['clover', 'برسيم'],
  ['crest', 'شعار'],
  ['shield', 'درع'],
  ['laurel', 'غار'],
  ['enamel', 'مينا'],
  ['engraved', 'محفور'],
  ['mesh', 'شبكة'],
  ['filter', 'فلتر'],
  ['air intake', 'انتيك هواء'],
  ['hook', 'خطاف'],
  ['stripes', 'خطوط'],
  ['stripe', 'خط'],
  ['blue', 'أزرق'],
  ['green', 'أخضر'],
  ['yellow', 'أصفر'],
  ['grey', 'رمادي'],
  ['white', 'أبيض'],
  ['gold', 'ذهبي'],
  ['chrome', 'كروم'],
  ['bronze', 'برونزي'],
  ['copper', 'نحاسي'],
  ['silver', 'فضي'],
  ['red', 'أحمر'],
  ['black', 'أسود'],
  ['cyan', 'سماوي'],
  ['teal', 'تركواز'],
  ['glossy', 'لامع'],
  ['gloss', 'لامع'],
  ['matte', 'مطفي'],
  ['satin', 'ساتان'],
  ['leather', 'جلد'],
  ['sport', 'سبورت'],
  ['motorsport', 'موتورسبورت'],
  ['racing', 'سباقات'],
  ['luxury', 'فاخر'],
  ['classic', 'كلاسيك'],
  ['modern', 'مودرن'],
  ['new-gen', 'الجيل الجديد'],
  ['new', 'جديد'],
  ['heritage', 'تراثي'],
  ['stealth', 'ستيلث'],
  ['international limited', 'إصدار دولي محدود'],
  ['limited', 'ليمتد'],
  ['edition', 'إصدار خاص'],
  ['editions', 'إصدارات'],
  ['collection', 'تشكيلة'],
  ['showcase', 'تشكيلة'],
  ['comparison', 'مقارنة'],
  ['3-style', '3 أشكال'],
  ['3 colors', '3 ألوان'],
  ['6 finishes', '6 ألوان وتشطيبات'],
  ['combo kit', 'طقم متكامل'],
  ['combo set', 'طقم متكامل'],
  ['combo', 'مجموعة'],
  ['complete', 'متكامل'],
  ['custom-fit', 'تفصيل خاص'],
  ['custom fit', 'تفصيل خاص'],
  ['custom', 'خاص'],
  ['universal', 'عام'],
  ['automatic', 'أوتوماتيك'],
  ['manual', 'مانيوال'],
  ['all generations', 'جميع الأجيال'],
  ['compatible models', 'الموديلات المتوافقة'],
  ['all models', 'جميع الموديلات'],
  ['multi-fit', 'متعدد المقاسات'],
  ['models', 'موديلات'],
  ['rims', 'جنوط'],
  ['wheels', 'جنوط'],
  ['wheel', 'جنط'],
  ['tires', 'كاوتش'],
  ['tire', 'كاوتش'],
  ['hood', 'كبوت'],
  ['trunk', 'شنطة'],
  ['grille', 'شبكة أمامية'],
  ['grilles', 'شبكات أمامية'],
  ['fenders', 'رفارف'],
  ['fender', 'رفرف'],
  ['doors', 'أبواب'],
  ['door', 'باب'],
  ['roofs', 'سقف'],
  ['roof', 'سقف'],
  ['pillars', 'قوائم'],
  ['rear emblem', 'شعار خلفي'],
  ['rear', 'خلفي'],
  ['front', 'أمامي'],
  ['side', 'جانبي'],
  ['cockpit trim', 'تزيين المقصورة'],
  ['cockpit', 'مقصورة القيادة'],
  ['interior', 'داخلي'],
  ['exterior', 'خارجي'],
  ['dashboard', 'تابلوه'],
  ['emblems', 'شعارات'],
  ['emblem', 'شعار'],
  ['badges', 'شارات'],
  ['badge', 'شارة'],
  ['letters', 'حروف'],
  ['lettering', 'حروف'],
  ['letter', 'حرف'],
  ['logo', 'شعار'],
  ['clips', 'مشابك'],
  ['clip', 'مشبك'],
  ['extension', 'تطويلة'],
  ['extended', 'مطول'],
  ['silencer', 'كاتم صوت'],
  ['protectors', 'حماية'],
  ['protector', 'حماية'],
  ['anti-scratch guards', 'حماية ضد الخدوش'],
  ['diecast desk & cockpit model', 'مجسم معدني للتابلوه والمكتب'],
  ['rear spoiler', 'سبويلر خلفي'],
  ['spoiler', 'سبويلر'],
  ['diffuser', 'ديفوزر'],
  ['decal pack', 'طقم استيكرات'],
  ['dual racing stripes', 'خطوط سباق مزدوجة'],
  ['lip', 'سبويلر أمامي (ليب)'],
  ['vertical', 'رأسي'],
  ['circular', 'دائري'],
  ['mirror', 'مرآة'],
  ['woven strap', 'حزام قماش مضفر'],
  ['strap', 'حزام'],
  ['hanging', 'تعليق'],
  ['ornament', 'زينة'],
  ['cover', 'غطاء'],
  ['covers', 'أغطية'],
  ['shell', 'كفر'],
  ['bracket', 'قاعدة تثبيت'],
  ['plate', 'لوحة'],
  ['frame', 'إطار'],
  ['surround trim', 'إطار تزييني'],
  ['accent clip', 'قطعة تزيين'],
  ['trim', 'إطار'],
  ['ring', 'حلقة'],
  ['rings', 'حلقات'],
  ['sticker', 'استيكر'],
  ['overlay', 'تغليف'],
  ['overlays', 'تغليفات'],
  ['buttons', 'أزرار'],
  ['button', 'زر'],
  ['wrench', 'مفتاح ربط'],
  ['5-piece', 'طقم 5 قطع'],
  ['4-piece', '4 قطع'],
  ['3-piece', '3 قطع'],
  ['2-piece', 'قطعتين'],
  ['6-piece', '6 قطع'],
  ['5-button', '5 أزرار'],
  ['3-button', '3 أزرار'],
  ['set of 4', 'طقم 4 قطع'],
  ['4 pcs', '4 قطع'],
  ['3 pcs', '3 قطع'],
  ['6 pcs', '6 قطع'],
  ['5 pcs', '5 قطع'],
  ['20 pcs', '20 قطعة'],
  ['pair', 'زوج قطعتين'],
  ['duo', 'قطعتين'],
  ['trio', 'طقم 3 قطع'],
  ['set', 'طقم'],
  ['kit', 'طقم'],
  ['pack', 'عبوة'],
  ['tag', 'شعار'],
  ['vrs', 'vRS'],
  ['r-line', 'R-Line'],
  ['r line', 'R-Line'],
  ['sportline', 'سبورت لاين'],
  ['powered by honda', 'Powered by Honda'],
  ['blueefficiency', 'BlueEfficiency'],
  ['blue efficiency', 'BlueEfficiency'],
  ['netblue', 'NetBlue'],
  ['trophy', 'تروفي'],
  ['sahler', 'ساهلر'],
  ['brembo', 'بريمبو'],
  ['maybach', 'مايباخ'],
  ['affalterbach', 'أفالترباخ'],
  ['alfa romeo', 'ألفا روميو'],
  ['land rover', 'لاند روفر'],
  ['range rover', 'رينج روفر'],
  ['mercedes-benz', 'مرسيدس بنز'],
  ['mercedes-amg', 'مرسيدس AMG'],
  ['mercedes', 'مرسيدس'],
  ['mini cooper s', 'ميني كوبر S'],
  ['mini cooper', 'ميني كوبر'],
  ['john cooper', 'جون كوبر'],
  ['cooper', 'كوبر'],
  ['volkswagen', 'فولكس فاجن'],
  ['vw', 'فولكس فاجن'],
  ['mg7', 'إم جي MG7'],
  ['mg6', 'إم جي MG6'],
  ['mg5', 'إم جي MG5'],
  ['mg', 'إم جي'],
  ['passat', 'باسات'],
  ['tiguan', 'تيجوان'],
  ['golf', 'جولف'],
  ['jetta', 'جيتا'],
  ['polo', 'بولو'],
  ['arteon', 'أرتيون'],
  ['touareg', 'طوارق'],
  ['scirocco', 'شيروكو'],
  ['ibiza', 'إبيزا'],
  ['arona', 'أرونا'],
  ['tarraco', 'تاراكو'],
  ['altea', 'ألتيا'],
  ['toledo', 'توليدو'],
  ['exeo', 'إكسيو'],
  ['scala', 'سكالا'],
  ['fabia', 'فابيا'],
  ['rapid', 'رابيد'],
  ['roomster', 'رومستر'],
  ['elroq', 'إلروك'],
  ['enyaq', 'إنياك'],
  ['impreza', 'إمبريزا'],
  ['forester', 'فورستر'],
  ['outback', 'أوتباك'],
  ['legacy', 'ليجاسي'],
  ['cerato', 'سيراتو'],
  ['sportage', 'سبورتاج'],
  ['koup', 'كوب'],
  ['forte', 'فورتي'],
  ['optima', 'أوبتيما'],
  ['rio', 'ريو'],
  ['elantra', 'إلنترا'],
  ['tucson', 'توسان'],
  ['sonata', 'سوناتا'],
  ['accent', 'أكسنت'],
  ['creta', 'كريتا'],
  ['santa fe', 'سانتا في'],
  ['grand cherokee', 'جراند شيروكي'],
  ['cherokee', 'شيروكي'],
  ['compass', 'كومباس'],
  ['wrangler', 'رانجلر'],
  ['charger', 'تشارجر'],
  ['challenger', 'تشالنجر'],
  ['durango', 'دورانجو'],
  ['journey', 'جورني'],
  ['civic', 'سيفيك'],
  ['accord', 'أكورد'],
  ['city', 'سيتي'],
  ['astra', 'أسترا'],
  ['insignia', 'إنسجنيا'],
  ['corsa', 'كورسا'],
  ['grandland', 'جراند لاند'],
  ['mokka', 'موكا'],
  ['giulia', 'جوليا'],
  ['stelvio', 'ستيلفيو'],
  ['giulietta', 'جولييتا'],
  ['corolla', 'كورولا'],
  ['yaris', 'ياريس'],
  ['supra', 'سوبرا'],
  ['camry', 'كامري'],
  ['cayenne', 'كايين'],
  ['macan', 'ماكان'],
  ['panamera', 'باناميرا'],
  ['boxster', 'بوكستر'],
  ['cayman', 'كايمان'],
  ['discovery', 'ديسكفري'],
  ['defender', 'ديفندر'],
  ['evoque', 'إيفوك'],
  ['tipo', 'تيبو'],
  ['punto', 'بونتو'],
  ['panda', 'باندا'],
  ['spider', 'سبايدر'],
  ['galant', 'جالانت'],
  ['outlander', 'أوتلاندر'],
  ['eclipse', 'إكليبس'],
  ['mitsubishi', 'ميتسوبيشي'],
  ['sportback', 'سبورت باك'],
  ['convertible', 'كابورليه'],
  ['hatchback', 'هاتشباك'],
  ['sedan', 'سيدان'],
  ['fastback', 'فاست باك'],
  ['wagon', 'ستيشن'],
  ['countryman', 'كانتري مان'],
  ['clubman', 'كلاب مان'],
  ['c-elysee', 'سي إليزيه'],
  ['aircross', 'إيركروس'],
  ['generation', 'الجيل'],
  ['styles', 'أشكال'],
  ['style', 'استايل'],
  ['single', 'قطعة واحدة'],
  ['base', 'قاعدة'],
  ['left', 'يسار'],
  ['right', 'يمين'],
  ['all', 'جميع'],
  ['and', 'و'],
  ['owners & enthusiasts', 'وملاك السيارة'],
  ['l & r', 'يسار ويمين'],
  ['with', 'مع'],
  ['in', 'في'],
  ['on', 'على'],
  ['for', 'لـ'],
  ['italian flag', 'العلم الإيطالي'],
  ['italian', 'إيطالي'],
  ['flag', 'علم'],
  ['blitz', 'بليتز'],
  ['forged', 'فورجد'],
  ['carbon', 'كاربون'],
  ['hard shell', 'هارد صلب'],
  ['hard', 'هارد صلب'],
  ['armor', 'مدرع'],
  ['alloy', 'ألمنيوم سبائكي'],
  ['dual', 'مزدوج'],
  ['bar', 'شريط'],
  ['adhesive', 'لاصق'],
  ['flip-handle', 'مقبض الشنطة القلاب'],
  ['braided', 'مضفر'],
  ['airbag', 'إيرباج'],
  ['tapered', 'انسيابي'],
  ['hollow', 'مفرغ'],
  ['smooth', 'ناعم أملس'],
  ['solid', 'مصمت صلب'],
  ['bulk', 'كمية جملة'],
  ['mixed', 'متنوعة'],
  ['border', 'إطار'],
  ['outline', 'إطار خارجي'],
  ['full', 'كامل'],
  ['finish', 'تشطيب'],
  ['variations', 'أشكال متعددة'],
  ['variants', 'أشكال متعددة'],
  ['variant', 'شكل'],
  ['display', 'تشكيلة عرض'],
  ['backing', 'خلفية'],
  ['bag', 'كيس'],
  ['box', 'علبة'],
  ['bear', 'دب'],
  ['bolt-on', 'تثبيت بمسامير'],
  ['bolts', 'مسامير'],
  ['threaded', 'ملولب بمسامير'],
  ['adapters', 'وصلات تركيب'],
  ['mounts', 'قواعد تثبيت'],
  ['removal', 'أداة فك'],
  ['gasket', 'جوان كاوتش'],
  ['edge', 'حافة'],
  ['rhombus', 'الشكل الماسي'],
  ['stars', 'نجوم'],
  ['star', 'نجمة'],
  ['lion', 'الأسد'],
  ['wing', 'جناح'],
  ['hub', 'محور'],
  ['hex', 'سداسي'],
  ['brake', 'فرامل'],
  ['calipers', 'كاليبر فرامل'],
  ['knob', 'مقبض'],
  ['shifter', 'شيفتات'],
  ['steering', 'طارة'],
  ['spaced', 'متباعد'],
  ['space', 'مسافة'],
  ['tailgate', 'شنطة خلفية'],
  ['radar', 'رادار'],
  ['distronic', 'ديسترونيك'],
  ['facelift', 'فيس ليفت'],
  ['factory', 'فابريكة أصلي'],
  ['aftermarket', 'سبورت أفترماركت'],
  ['upgrade', 'مطور'],
  ['performance', 'أداء رياضي'],
  ['retrofit', 'تعديل وتجديد'],
  ['match', 'مطابق'],
  ['charms', 'ميداليات'],
  ['fobs', 'ريموت السيارة'],
  ['fob', 'ريموت'],
  ['keyrings', 'سلاسل مفاتيح'],
  ['keys', 'مفاتيح'],
  ['key', 'مفتاح'],
  ['carabiner', 'خطاف تعليق'],
  ['gift', 'هدية'],
  ['owners', 'ملاك'],
  ['enthusiasts', 'عشاق'],
  ['vehicles', 'سيارات'],
  ['vehicle', 'سيارة'],
  ['car', 'سيارة'],
  ['part', 'رقم قطعة'],
  ['spec', 'مواصفات'],
  ['piece', 'قطعة'],
  ['mini one', 'ميني وان'],
  ['one', 'واحدة'],
  ['bottom', 'سفلي'],
  ['rearview', 'مرآة الصالون'],
  ['slatted', 'بشرائح أفقية'],
  ['cold', 'بارد'],
  ['filters', 'فلاتر'],
  ['conical', 'مخروطي'],
  ['multimedia', 'ملتي ميديا'],
  ['multi-spoke', 'متعدد الأذرع'],
  ['garnish', 'زينة'],
  ['engine', 'محرك'],
  ['brushed', 'مصقول'],
  ['dealer', 'معرض'],
  ['multiple', 'متعددة'],
  ['avant', 'أفانت'],
  ['combi', 'كومبي'],
  ['series', 'فئة'],
  ['classes', 'فئات'],
  ['evolution', 'إيفوليوشن'],
  ['c-class', 'فئة C'],
  ['e-class', 'فئة E'],
  ['s-class', 'فئة S'],
  ['glk-class', 'فئة GLK'],
  ['5-arm', '5 أذرع'],
  ['flip key cover', 'جراب مفتاح سويتش'],
  ['flip', 'سويتش'],
  ['blank', 'سادة'],
  ['red-i', 'أحمر (I)'],
  ['red-t', 'أحمر (T)'],
  ['silver-white', 'فضي أبيض']
];

// Always match longest phrases first so shorter terms never break multi-word phrases
const SORTED_PHRASE_DICT_AR = [...PHRASE_DICT_AR].sort((a, b) => b[0].length - a[0].length);

const PRODUCT_AR_MAP = {
  'skoda-vrs-black-badge': {
    enName: 'SKODA VRS BLACK EDITION TRUNK EMBLEM',
    nameAr: 'شعار شنطة سكودا vRS الإصدار الأسود',
    fitmentAr: 'سكودا أوكتافيا، سوبرب، كودياك، كاروك (فئة vRS)'
  },
  'skoda-kodiaq-sports-pedals': {
    enName: 'SKODA KODIAQ BRUSHED ALUMINUM SPORTS PEDALS SET',
    nameAr: 'طقم دواسات سبورت ألمنيوم مصقول سكودا كودياك',
    fitmentAr: 'سكودا كودياك، كاروك، سوبرب، أوكتافيا (أوتوماتيك / DSG)'
  },
  'audi-rs5-black-red-emblem': {
    enName: 'AUDI RS5 GLOSS BLACK & RED GRILLE / TRUNK EMBLEM',
    nameAr: 'شعار شبكة وشنطة أودي RS5 أسود لامع وأحمر',
    fitmentAr: 'أودي RS5 / A5 / S5 (أجيال B8 / B9 / B9.5)'
  },
  'audi-rs3-black-red-emblem': {
    enName: 'AUDI RS3 GLOSS BLACK & RED GRILLE / TRUNK EMBLEM',
    nameAr: 'شعار شبكة وشنطة أودي RS3 أسود لامع وأحمر',
    fitmentAr: 'أودي RS3 / A3 / S3 (أجيال 8P / 8V / 8Y)'
  },
  'audi-s3-gloss-black-red-emblem': {
    enName: 'AUDI S3 GLOSS BLACK & RED SPORT EMBLEM',
    nameAr: 'شعار سبورت أودي S3 أسود لامع وأحمر',
    fitmentAr: 'أودي S3 / A3 (شاسيه 8V / 8Y)'
  },
  'audi-rs5-red-chrome-emblem': {
    enName: 'AUDI RS5 RED & CHROME TRUNK EMBLEM',
    nameAr: 'شعار شنطة أودي RS5 كروم وأحمر',
    fitmentAr: 'أودي RS5 / A5 / S5 (جميع الأجيال)'
  },
  'audi-rs-black-red-trunk-badge': {
    enName: 'AUDI RS RED DIAMOND GLOSS BLACK TRUNK BADGE',
    nameAr: 'شعار شنطة أودي RS أسود لامع مع الماسة الحمراء',
    fitmentAr: 'موديلات أودي RS (RS3, RS4, RS5, RS6, RS7, TT RS)'
  },
  'audi-ttrs-chrome-trunk-emblem': {
    enName: 'AUDI TT RS CHROME & RED MOTORSPORT EMBLEM',
    nameAr: 'شعار شنطة أودي TT RS كروم وأحمر موتورسبورت',
    fitmentAr: 'أودي TT / TT RS / TTS (أجيال 8J / 8S)'
  },
  'audi-a3-black-red-sport-badge': {
    enName: 'AUDI A3 RED ACCENT & GLOSS BLACK REAR EMBLEM',
    nameAr: 'شعار خلفي أودي A3 أسود لامع بلمسة حمراء',
    fitmentAr: 'أودي A3 سبورت باك وسيدان (8V / 8Y)'
  },
  'audi-a3-chrome-trunk-letters': {
    enName: 'AUDI A3 OEM CHROME REAR TRUNK LETTERING',
    nameAr: 'حروف شنطة خلفية أودي A3 كروم أصلي',
    fitmentAr: 'أودي A3 جميع الأجيال'
  },
  'audi-q5-chrome-trunk-letters': {
    enName: 'AUDI Q5 OEM CHROME REAR TRUNK LETTERING',
    nameAr: 'حروف شنطة خلفية أودي Q5 كروم أصلي',
    fitmentAr: 'أودي Q5 / SQ5 (أجيال 8R / FY)'
  },
  'audi-30-tfsi-chrome-letters': {
    enName: 'AUDI 30 TFSI CHROME ENGINE DISPLACEMENT BADGE',
    nameAr: 'شعار محرك 30 TFSI كروم أودي',
    fitmentAr: 'أودي A3, A4, Q2, Q3 (موديلات 30 TFSI)'
  },
  'audi-quattro-gecko-lizard-mascot': {
    enName: 'AUDI QUATTRO GECKO / LIZARD 3D CHROME MASCOT EMBLEM',
    nameAr: 'شعار كواترو جيكو 3D كروم أودي',
    fitmentAr: 'يناسب جميع سيارات أودي (الشبكة / الشنطة / التابلوه)'
  },
  'audi-quattro-chrome-badges-pair': {
    enName: 'AUDI QUATTRO MIRROR CHROME RECTANGLE BADGES',
    nameAr: 'شعارات كواترو كروم مرآة أودي',
    fitmentAr: 'جميع موديلات أودي Quattro'
  },
  'audi-sline-chrome-red-emblem-stack': {
    enName: 'AUDI S LINE CHROME & RED FENDER EMBLEMS (SET)',
    nameAr: 'طقم شعارات رفارف أودي S-Line كروم وأحمر',
    fitmentAr: 'موديلات أودي S-Line (A3, A4, A5, A6, Q3, Q5, Q7)'
  },
  'audi-steering-wheel-rings-frame-chrome': {
    enName: 'AUDI STEERING WHEEL CHROME 4-RINGS LOGO SURROUND TRIM',
    nameAr: 'إطار كروم لشعار طارة أودي (4 حلقات)',
    fitmentAr: 'طارات أودي A3, A4, A5, A6, A7, Q3, Q5, Q7'
  },
  'audi-steering-wheel-sline-silver-clip': {
    enName: 'AUDI STEERING WHEEL S-LINE MATTE SILVER ACCENT CLIP',
    nameAr: 'قطعة تزيين طارة أودي S-Line فضي مطفي',
    fitmentAr: 'طارات أودي S-Line الرياضية السفلية المسطحة'
  },
  'audi-star-wheel-center-caps-grey': {
    enName: 'AUDI STAR 5-ARM WHEEL HUB CENTER CAPS (SET OF 4)',
    nameAr: 'طقم 4 أغطية سنتر كاب جنوط أودي نجمة',
    fitmentAr: 'جنوط أودي 5 أذرع الأصلية (A3, A4, A5, A6, S4, S5)'
  },
  'audi-wheel-center-caps-gloss-black': {
    enName: 'AUDI PIANO BLACK WHEEL CENTER HUB CAPS (SET OF 4)',
    nameAr: 'طقم 4 أغطية سنتر كاب جنوط أودي أسود بيانو',
    fitmentAr: 'جنوط أودي (مقاس قياسي 68مم / 60مم)'
  },
  'audi-rings-gloss-black-grille-trunk-set': {
    enName: 'AUDI 4-RINGS GLOSS BLACKOUT FRONT GRILLE & TRUNK EMBLEMS',
    nameAr: 'طقم شعارات حلقات أودي أمامي وخلفي أسود لامع',
    fitmentAr: 'أودي A3, A4, A5, A6, RS3, RS5 (2020 - 2024)'
  },
  'audi-a6-luxury-rubber-floor-mats': {
    enName: 'AUDI A6 LUXURY CUSTOM-FIT ALL-WEATHER FLOOR MATS (SET OF 4)',
    nameAr: 'طقم 4 دواسات أرضية فاخرة تفصيل أودي A6',
    fitmentAr: 'أودي A6 / S6 / RS6 (شاسيه C7 / C8)'
  },
  'audi-a7-luxury-rubber-floor-mats': {
    enName: 'AUDI A7 SPORTBACK CUSTOM-FIT ALL-WEATHER FLOOR MATS (SET OF 4)',
    nameAr: 'طقم 4 دواسات أرضية تفصيل أودي A7 سبورت باك',
    fitmentAr: 'أودي A7 / S7 / RS7 سبورت باك (شاسيه 4G / 4K)'
  },
  'audi-a8-luxury-rubber-floor-mats': {
    enName: 'AUDI A8 / S8 FLAGSHIP ALL-WEATHER RUBBER MATS (SET OF 4)',
    nameAr: 'طقم 4 دواسات مطاط فاخرة أودي A8 / S8',
    fitmentAr: 'أودي A8 / A8L / S8 (شاسيه D4 / D5)'
  },
  'audi-sline-brushed-aluminum-sport-pedals': {
    enName: 'AUDI S-LINE BRUSHED ALUMINUM SPORT PEDALS SET (AUTOMATIC)',
    nameAr: 'طقم دواسات سبورت ألمنيوم مصقول أودي S-Line (أوتوماتيك)',
    fitmentAr: 'أودي A3, A4, A5, A6, Q3, Q5, TT (S-Tronic / أوتوماتيك)'
  },
  'audi-carbon-fiber-paddle-shifter-extensions': {
    enName: 'AUDI REAL CARBON FIBER STEERING WHEEL PADDLE EXTENSIONS',
    nameAr: 'تطويلة شيفتات طارة كاربون فايبر أصلي لأودي',
    fitmentAr: 'أودي A3, S3, RS3, A4, S4, A5, S5, Q5 (سيارات بشيفتات طارة)'
  },
  'audi-sport-paddle-shifters-racing-red': {
    enName: 'AUDI SPORT ALUMINUM PADDLE SHIFTER EXTENSIONS (RACING RED)',
    nameAr: 'تطويلة شيفتات طارة ألمنيوم أحمر رياضي لأودي',
    fitmentAr: 'أودي S3, S4, S5, RS3, RS4, RS5, TT RS'
  },
  'audi-sport-paddle-shifters-bronze-metallic': {
    enName: 'AUDI SPORT ALUMINUM PADDLE SHIFTER EXTENSIONS (BRONZE)',
    nameAr: 'تطويلة شيفتات طارة ألمنيوم برونزي لأودي',
    fitmentAr: 'موديلات أودي S-Line و RS'
  },
  'audi-gloss-carbon-key-fob-cover-shell': {
    enName: 'AUDI GLOSS CARBON FIBER SMART KEY FOB PROTECTIVE COVER',
    nameAr: 'جراب حماية مفتاح أودي سمارت كاربون فايبر لامع',
    fitmentAr: 'مفتاح أودي 3 أزرار (A3, A4, A5, A6, Q5, Q7)'
  },
  'audi-smart-key-replacement-shell-piano-black': {
    enName: 'AUDI 3-BUTTON SMART KEY FOB REPLACEMENT SHELL (PIANO BLACK)',
    nameAr: 'كفر بديل مفتاح أودي سمارت 3 أزرار أسود بيانو',
    fitmentAr: 'مفاتيح أودي الذكية (A4, A5, Q5, A6, A7, A8)'
  },
  'audi-sline-leather-stainless-keychain': {
    enName: 'AUDI S LINE LEATHER & STAINLESS STEEL LUXURY KEYCHAIN',
    nameAr: 'ميدالية مفاتيح فاخرة أودي S-Line جلد وستانلس ستيل',
    fitmentAr: 'جميع مفاتيح أودي'
  },
  'audi-sline-vertical-metal-keychain': {
    enName: 'AUDI S LINE VERTICAL CHROME & RED METAL KEYCHAIN',
    nameAr: 'ميدالية معدنية رأسية أودي S-Line كروم وأحمر',
    fitmentAr: 'جميع مفاتيح أودي'
  },
  'audi-sport-chrome-rings-keychain': {
    enName: 'AUDI SPORT CHROME 4-RINGS ENGRAVED METAL KEYCHAIN',
    nameAr: 'ميدالية أودي سبورت محفورة 4 حلقات كروم',
    fitmentAr: 'جميع مفاتيح أودي'
  },
  'audi-sport-rs-red-silhouette-keychain': {
    enName: 'AUDI RS RED SILHOUETTE METAL MOTORSPORT KEYCHAIN',
    nameAr: 'ميدالية معدنية موتورسبورت أودي RS أحمر',
    fitmentAr: 'سيارات أودي RS وعشاقها'
  },
  'audi-seatbelt-silencer-buckle-stopper-pair': {
    enName: 'AUDI SEATBELT SILENCER CHROME RINGS BUCKLE CLIPS (PAIR)',
    nameAr: 'زوج كاتم صوت حزام أمان أودي بحلقات كروم',
    fitmentAr: 'جميع أقفال حزام أمان أودي'
  },
  'audi-sline-leather-seatbelt-shoulder-pad': {
    enName: 'AUDI S LINE EMBROIDERED LEATHER SEATBELT COMFORT STRAP',
    nameAr: 'وسادة راحة حزام أمان أودي S-Line جلد مطرز',
    fitmentAr: 'جميع أحزمة أمان أودي'
  },
  'audi-sline-racing-stripe-exterior-decal-pack': {
    enName: 'AUDI S-LINE DUAL RACING STRIPES HOOD & ROOF DECAL PACK',
    nameAr: 'طقم استيكرات خطوط سباق مزدوجة أودي S-Line للكبوت والسقف',
    fitmentAr: 'جميع ألواح جسم أودي (كبوت، سقف، شنطة، جوانب)'
  },
  'audi-sport-rs-dashboard-parking-card-plate': {
    enName: 'AUDI SPORT RS METALLIC PARKING CARD & DASH VISOR EMBLEM',
    nameAr: 'كارت انتظار معدني وشعار تابلوه أودي سبورت RS',
    fitmentAr: 'مقصورة أودي / الزجاج الأمامي / شماسة السقف'
  },
  'cupra-key-gloss-black-red': {
    enName: 'CUPRA GLOSS KEY COVER (BLACK & RED)',
    nameAr: 'جراب مفتاح كوبرا لامع (أسود وأحمر)',
    fitmentAr: 'كوبرا فورمينتور، ليون، أتيكا'
  },
  'cupra-key-alcantara-red-stitch': {
    enName: 'CUPRA ALCANTARA SUEDE KEY CASE (RED STITCH)',
    nameAr: 'جراب مفتاح كوبرا ألكانتارا سويد بخياطة حمراء',
    fitmentAr: 'مفتاح كوبرا الذكي'
  },
  'cupra-key-red-carbon-fiber-case': {
    enName: 'CUPRA RED CARBON FIBER KEY CASE (GIFT BOX)',
    nameAr: 'جراب مفتاح كوبرا كاربون فايبر أحمر (بعلبة هدايا)',
    fitmentAr: 'مفتاح كوبرا ليون، فورمينتور، أتيكا'
  },
  'cupra-key-gloss-carbon-fiber-shell': {
    enName: 'CUPRA GLOSS CARBON FIBER KEY SHELL',
    nameAr: 'كفر مفتاح كوبرا كاربون فايبر لامع',
    fitmentAr: 'مفاتيح كوبرا وسيات الذكية'
  },
  'cupra-key-matte-carbon-woven-strap': {
    enName: 'CUPRA CARBON MATTE KEY CASE & LEATHER RING',
    nameAr: 'جراب مفتاح كوبرا كاربون مطفي مع حلقة جلد',
    fitmentAr: 'مفتاح كوبرا الذكي'
  },
  'cupra-key-woodgrain-metal-armor': {
    enName: 'CUPRA WOODGRAIN & GUNMETAL ARMOR KEY CASE',
    nameAr: 'جراب مفتاح كوبرا خشبي بإطار معدن جان ميتال',
    fitmentAr: 'مفتاح كوبرا الذكي'
  },
  'cupra-key-carbon-metal-armor': {
    enName: 'CUPRA CARBON & GUNMETAL ARMOR KEY CASE',
    nameAr: 'جراب مفتاح كوبرا كاربون بإطار معدن جان ميتال',
    fitmentAr: 'مفتاح كوبرا الذكي'
  },
  'cupra-cnc-bronze-paddle-shifters': {
    enName: 'CUPRA CNC BRONZE EXTENDED PADDLE SHIFTERS',
    nameAr: 'تطويلة شيفتات طارة كوبرا برونزي CNC',
    fitmentAr: 'كوبرا فورمينتور، ليون، أتيكا (طارة الدركسيون)'
  },
  'cupra-sport-steering-wheel-cover': {
    enName: 'CUPRA SPORT STEERING WHEEL COVER (COPPER)',
    nameAr: 'كفر طارة دركسيون سبورت كوبرا (نحاسي)',
    fitmentAr: 'مقاس قياسي 37-38 سم / مقصورة كوبرا'
  },
  'cupra-racing-seatbelt-webbing': {
    enName: 'CUPRA RACING SEATBELT WEBBING ROLL',
    nameAr: 'لفة شريط حزام أمان سباقات كوبرا',
    fitmentAr: 'عام / جميع مقصورات كوبرا'
  },
  'cupra-seatbelt-silencer-clips': {
    enName: 'CUPRA SEATBELT SILENCER & EXTENSION CLIPS',
    nameAr: 'مشابك كاتم صوت ووصلة حزام أمان كوبرا',
    fitmentAr: 'جميع أقفال حزام أمان كوبرا'
  },
  'cupra-custom-floor-mats-set': {
    enName: 'CUPRA CUSTOM CAR FLOOR MATS (5-PIECE SET)',
    nameAr: 'طقم 5 دواسات أرضية تفصيل كوبرا',
    fitmentAr: 'كوبرا فورمينتور، ليون، أتيكا'
  },
  'cupra-tobb-wheel-caps-copper-4pcs': {
    enName: 'CUPRA WHEEL CENTER CAPS - COPPER 3D (4 PCS)',
    nameAr: 'طقم 4 أغطية سنتر كاب جنوط كوبرا نحاسي 3D',
    fitmentAr: 'جنوط كوبرا الأصلية والرياضية'
  },
  'cupra-wheel-caps-silver-chrome-4pcs': {
    enName: 'CUPRA WHEEL CENTER BADGES - SILVER (4 PCS)',
    nameAr: 'طقم 4 شعارات سنتر كاب جنوط كوبرا فضي',
    fitmentAr: 'سطح كاب الجنط'
  },
  'cupra-wheel-caps-gold-bronze-4pcs': {
    enName: 'CUPRA WHEEL CENTER BADGES - GOLD (4 PCS)',
    nameAr: 'طقم 4 شعارات سنتر كاب جنوط كوبرا ذهبي',
    fitmentAr: 'سطح كاب الجنط'
  },
  'cupra-copper-rear-trunk-lettering': {
    enName: 'CUPRA 3D REAR TRUNK LETTERING (COPPER BRONZE)',
    nameAr: 'حروف شنطة خلفية كوبرا 3D (برونزي نحاسي)',
    fitmentAr: 'باب الشنطة الخلفي'
  },
  'cupra-black-rear-trunk-lettering': {
    enName: 'CUPRA 3D REAR TRUNK LETTERING (GLOSS BLACK)',
    nameAr: 'حروف شنطة خلفية كوبرا 3D (أسود لامع)',
    fitmentAr: 'باب الشنطة الخلفي'
  },
  'cupra-3d-triangle-emblems-bronze-black': {
    enName: 'CUPRA 3D TRIANGLE METAL EMBLEMS (BRONZE & BLACK)',
    nameAr: 'شعارات مثلث كوبرا معدن 3D (برونزي وأسود)',
    fitmentAr: 'الشبكة الأمامية، الشنطة الخلفية، الرفارف'
  },
  'cupra-mini-steering-emblems-chrome-black': {
    enName: 'CUPRA MINI TRIANGLE BADGES (CHROME & BLACK)',
    nameAr: 'شعارات مثلث كوبرا صغيرة (كروم وأسود)',
    fitmentAr: 'منتصف الطارة، المفتاح الذكي، التزيين الداخلي'
  },
  'cupra-checkered-racing-flag-grille-badge': {
    enName: 'CUPRA CHECKERED RACING FLAG EMBLEM',
    nameAr: 'شعار علم السباقات المربعات كوبرا',
    fitmentAr: 'الشبكة الأمامية للردياتير / الشنطة الخلفية'
  },
  'cupra-heritage-leather-keychains': {
    enName: 'CUPRA HERITAGE LEATHER KEYCHAINS (TRIO)',
    nameAr: 'ميداليات مفاتيح جلد تراثية كوبرا (طقم 3 قطع)',
    fitmentAr: 'مفتاح السيارة / حلقة المفاتيح'
  },
  'cupra-metallic-round-enamel-keychains': {
    enName: 'CUPRA HEAVY METAL CIRCULAR KEYCHAINS',
    nameAr: 'ميداليات مفاتيح دائرية معدن ثقيل كوبرا',
    fitmentAr: 'مفتاح السيارة / حلقة المفاتيح'
  },
  'cupra-3d-metal-triangle-keychains': {
    enName: 'CUPRA 3D METAL TRIANGLE KEYCHAINS',
    nameAr: 'ميداليات مثلث كوبرا معدن 3D',
    fitmentAr: 'مفتاح السيارة / حلقة المفاتيح'
  },
  'cupra-carbon-teal-racing-keychain': {
    enName: 'CUPRA RACING CARBON & TEAL KEYCHAIN',
    nameAr: 'ميدالية سباقات كوبرا كاربون وتركواز',
    fitmentAr: 'مفتاح السيارة / حلقة المفاتيح'
  },
  'cupra-checkered-flag-keyring': {
    enName: 'CUPRA MOTORSPORT CHECKERED FLAG KEYRING',
    nameAr: 'ميدالية موتورسبورت علم المربعات كوبرا',
    fitmentAr: 'مفتاح السيارة / حلقة المفاتيح'
  },
  'cupra-rearview-mirror-hanging-ornament': {
    enName: 'CUPRA REARVIEW MIRROR HANGING MEDAL',
    nameAr: 'ميدالية تعليق مرآة الصالون كوبرا',
    fitmentAr: 'مرآة الصالون الداخلية / المقصورة'
  },
  'cupra-copper-brake-caliper-covers': {
    enName: 'CUPRA COPPER BRAKE CALIPER COVERS (PAIR)',
    nameAr: 'زوج كفرات كاليبر فرامل نحاسي كوبرا',
    fitmentAr: 'كوبرا فورمينتور، ليون، أتيكا (أمامي / خلفي)'
  },
  'mini-cooper-s-red-trunk-badge': {
    enName: 'MINI COOPER S RED METAL TRUNK EMBLEM',
    nameAr: 'شعار شنطة ميني كوبر S معدن أحمر',
    fitmentAr: 'ميني كوبر S F54, F55, F56, F57, كانتري مان F60, R56'
  },
  'mini-cooper-s-chrome-letters-trunk': {
    enName: 'MINI COOPER S REAR TRUNK CHROME LETTERING',
    nameAr: 'حروف شنطة خلفية ميني كوبر S كروم',
    fitmentAr: 'ميني كوبر S هاتشباك، كلاب مان، كانتري مان، كابورليه'
  },
  'mini-countryman-letters-black': {
    enName: 'MINI COUNTRYMAN GLOSS BLACK TRUNK LETTERS',
    nameAr: 'حروف شنطة ميني كانتري مان أسود لامع',
    fitmentAr: 'ميني كانتري مان F60, R60 (جميع الأجيال)'
  },
  'mini-clubman-letters-black': {
    enName: 'MINI CLUBMAN GLOSS BLACK TRUNK LETTERS',
    nameAr: 'حروف شنطة ميني كلاب مان أسود لامع',
    fitmentAr: 'ميني كلاب مان F54, R55'
  },
  'mini-wings-gloss-black-grille': {
    enName: 'MINI GLOSS BLACK WINGS FRONT GRILLE EMBLEM',
    nameAr: 'شعار أجنحة ميني أسود لامع للشبكة الأمامية',
    fitmentAr: 'ميني كوبر F55, F56, F57 LCI و LCI2'
  },
  'mini-wings-matte-black-pair': {
    enName: 'MINI MATTE BLACK WINGS EMBLEM SET (HOOD & TRUNK)',
    nameAr: 'طقم شعارات أجنحة ميني أسود مطفي (للكبوت والشنطة)',
    fitmentAr: 'ميني كوبر R56, R57, R58, F55, F56, F54, F60'
  },
  'mini-wings-chrome-oem-pair': {
    enName: 'MINI CHROME WINGS OEM EMBLEM PAIR (HOOD & BOOT)',
    nameAr: 'زوج شعارات أجنحة ميني كروم أصلي (للكبوت والشنطة)',
    fitmentAr: 'ميني وان، كوبر، كوبر S، JCW (جميع الفئات)'
  },
  'mini-wings-black-red-sport': {
    enName: 'MINI GLOSS BLACK & RED WINGS SPORT EMBLEM',
    nameAr: 'شعار أجنحة ميني سبورت أسود لامع وأحمر',
    fitmentAr: 'ميني كوبر S, JCW F54, F55, F56, F57, F60'
  },
  'mini-wings-crimson-red-edition': {
    enName: 'MINI CRIMSON RED WINGS EDITION EMBLEM',
    nameAr: 'شعار أجنحة ميني إصدار أحمر قرمزي',
    fitmentAr: 'ميني كوبر S، جون كوبر وركس (للكبوت والشنطة)'
  },
  'mini-jcw-oval-chrome-red-emblem': {
    enName: 'MINI JOHN COOPER WORKS (JCW) CHROME OVAL EMBLEM',
    nameAr: 'شعار ميني جون كوبر وركس (JCW) كروم بيضاوي',
    fitmentAr: 'الشبكة الأمامية / باب الشنطة / الرفارف'
  },
  'mini-jcw-blackout-grille-emblem': {
    enName: 'MINI JCW BLACKOUT FRONT GRILLE EMBLEM KIT',
    nameAr: 'شعار ميني JCW أسود معتم للشبكة الأمامية',
    fitmentAr: 'شبكة الردياتير الأمامية ميني كوبر S / JCW'
  },
  'mini-motorsport-international-badge': {
    enName: 'MINI MOTORSPORT INTERNATIONAL LIMITED BADGE',
    nameAr: 'شارة ميني موتورسبورت الإصدار الدولي المحدود',
    fitmentAr: 'باب الشنطة الخلفي / التابلوه / الرفرف'
  },
  'mini-jcw-wheel-center-caps': {
    enName: 'MINI JCW WHEEL CENTER CAPS WITH RED RING (SET OF 4)',
    nameAr: 'طقم 4 أغطية سنتر كاب جنوط ميني JCW بحلقة حمراء',
    fitmentAr: 'جنوط ميني الأصلية والرياضية (54مم / 56مم)'
  },
  'mini-wheel-caps-piano-black': {
    enName: 'MINI PIANO BLACK WHEEL CENTER HUB CAPS (SET OF 4)',
    nameAr: 'طقم 4 أغطية سنتر كاب جنوط ميني أسود بيانو',
    fitmentAr: 'جنوط ميني كوبر (جميع الأجيال)'
  },
  'mini-antenna-union-jack': {
    enName: 'MINI SHORT ROOF SPORT ANTENNA (UNION JACK)',
    nameAr: 'أنتينا سقف رياضية قصيرة ميني (علم بريطانيا)',
    fitmentAr: 'جميع قواعد أنتينا سقف ميني كوبر (سن M5 و M6)'
  },
  'mini-antenna-checkered': {
    enName: 'MINI SHORT ROOF SPORT ANTENNA (CHECKERED RACING)',
    nameAr: 'أنتينا سقف رياضية قصيرة ميني (علم السباقات المربعات)',
    fitmentAr: 'جميع قواعد أنتينا سقف ميني كوبر (سن M5 و M6)'
  },
  'mini-antenna-paul-smith': {
    enName: 'MINI SHORT ROOF SPORT ANTENNA (PAUL SMITH STRIPES)',
    nameAr: 'أنتينا سقف رياضية قصيرة ميني (خطوط بول سميث)',
    fitmentAr: 'جميع قواعد أنتينا سقف ميني كوبر (سن M5 و M6)'
  },
  'mini-model-pair-union-jack': {
    enName: 'MINI COOPER UNION JACK DIECAST DESK & COCKPIT MODEL (PAIR)',
    nameAr: 'زوج مجسم ميني كوبر معدني للتابلوه والمكتب (علم بريطانيا)',
    fitmentAr: 'التابلوه الداخلي / للعرض / للمقتنيات'
  },
  'mini-keychain-cooper-s-red-metal': {
    enName: 'MINI COOPER S RED ENAMEL SOLID METAL KEYCHAIN',
    nameAr: 'ميدالية مفاتيح ميني كوبر S معدن ومينا حمراء',
    fitmentAr: 'مفتاح السيارة / حلقة المفاتيح'
  },
  'mini-keychain-motorsport-ribbon': {
    enName: 'MINI MOTORSPORT GERMAN TRI-COLOR STRAP KEYCHAIN',
    nameAr: 'ميدالية مفاتيح بشريط ألوان سباقات ميني',
    fitmentAr: 'مفتاح السيارة / حلقة المفاتيح'
  },
  'mini-sports-pedals-aluminum': {
    enName: 'MINI SPORT ALUMINUM & RUBBER PEDAL COVER SET',
    nameAr: 'طقم أغطية دواسات ميني سبورت ألمنيوم ومطاط',
    fitmentAr: 'ميني كوبر One, S, JCW F54, F55, F56, F57, F60 (أوتوماتيك)'
  },
  'mini-seatbelt-silencer-clips': {
    enName: 'MINI SEATBELT BUCKLE ALARM STOPPER CLIPS (PAIR)',
    nameAr: 'زوج كاتم صوت وإنذار حزام أمان ميني كوبر',
    fitmentAr: 'جميع أقفال حزام أمان ميني كوبر'
  },
  'mini-valve-stem-caps-tool-kit': {
    enName: 'MINI TIRE VALVE STEM CAPS & KEYCHAIN TOOL KIT',
    nameAr: 'طقم أغطية بلف كاوتش ميني مع ميدالية وأداة ربط',
    fitmentAr: 'جميع إطارات وجنوط ميني كوبر'
  },
  'mini-key-fob-cover-cyan': {
    enName: 'MINI COOPER GLOSS CYAN SMART KEY FOB SHELL',
    nameAr: 'جراب مفتاح ميني كوبر الدائري سمارت (سماوي لامع)',
    fitmentAr: 'مفتاح ميني كوبر الدائري 3 أزرار (F54, F55, F56, F57, F60)'
  },
  'mini-door-handle-scratch-guards': {
    enName: 'MINI DOOR HANDLE RECESS ANTI-SCRATCH GUARDS (SET OF 4)',
    nameAr: 'طقم 4 قطع حماية مقابض أبواب ميني ضد الخدوش',
    fitmentAr: 'ميني كوبر 3 أبواب، 5 أبواب، كلاب مان، كانتري مان'
  },
  'mini-interior-wing-badges': {
    enName: 'MINI INTERIOR COCKPIT WING BADGE EMBLEMS (SET OF 4)',
    nameAr: 'طقم 4 شعارات أجنحة ميني داخلية للمقصورة والطارة',
    fitmentAr: 'طارة ميني كوبر، شبكات السماعات، التابلوه'
  },
  'mini-jcw-door-sill-protectors': {
    enName: 'MINI JOHN COOPER WORKS (JCW) CARBON SILL GUARDS (PAIR)',
    nameAr: 'زوج عتب حماية أبواب ميني JCW كاربون فايبر',
    fitmentAr: 'أعتاب أبواب ميني كوبر F55, F56, R56'
  }
};

const PRODUCT_EN_MAP = {
  'vwr-mwu83fbi': {
    arName: 'حرف R للشبكه و شنطه',
    nameEn: 'VWR R FRONT GRILLE & TRUNK LETTER EMBLEM',
    fitmentEn: 'Volkswagen R Front Grille & Rear Trunk'
  }
};

function hasArabic(str) {
  return /[\u0600-\u06FF]/.test(str || '');
}

function normalizeArabicForMatch(str) {
  return String(str || '')
    .replace(/[\u064B-\u065F\u0670\u0640]/g, '')
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/\s+/g, ' ')
    .trim();
}

// Multi-word normalized Arabic -> English phrases (longest first)
const AR_PHRASE_DICT_EN = [
  ['اكسسوارات السيارات', 'Car Accessories'],
  ['اكسسوارات السيارة', 'Car Accessories'],
  ['دواسات ارضيه مطاط', 'All-Weather Rubber Floor Mats'],
  ['دواسات ارضيه', 'Floor Mats'],
  ['دواسات مطاط', 'Rubber Floor Mats'],
  ['طقم دواسات سبورت', 'Sports Pedals Set'],
  ['دواسات سبورت', 'Sports Pedals'],
  ['طقم دواسات', 'Pedals Set'],
  ['شيفتات طاره', 'Paddle Shifters'],
  ['تطويله شيفتات', 'Paddle Shifter Extensions'],
  ['كفر طاره دركسيون', 'Steering Wheel Cover'],
  ['كفر طاره', 'Steering Wheel Cover'],
  ['كفر دركسيون', 'Steering Wheel Cover'],
  ['طاره الدركسيون', 'Steering Wheel'],
  ['جراب مفتاح سمارت', 'Smart Key Fob Cover'],
  ['كفر مفتاح سمارت', 'Smart Key Fob Shell'],
  ['جراب مفتاح', 'Key Fob Cover'],
  ['كفر مفتاح', 'Key Fob Shell'],
  ['ميداليه مفاتيح', 'Keychain'],
  ['ميداليه مراه', 'Rearview Mirror Ornament'],
  ['كفر كاليبر فرامل', 'Brake Caliper Cover'],
  ['كفرات كاليبر فرامل', 'Brake Caliper Covers'],
  ['كفرات كاليبر', 'Brake Caliper Covers'],
  ['كفر كاليبر', 'Brake Caliper Cover'],
  ['سنتر كاب جنوط', 'Wheel Center Hub Caps'],
  ['اغطيه جنوط', 'Wheel Center Caps'],
  ['اغطيه بلف الكاوتش', 'Tire Valve Stem Caps'],
  ['بلوف كاوتش', 'Tire Valve Caps'],
  ['حزام امان', 'Seatbelt'],
  ['احزمه امان', 'Seatbelts'],
  ['كاتم صوت حزام الامان', 'Seatbelt Buckle Alarm Silencer'],
  ['كاتم حزام', 'Seatbelt Silencer'],
  ['قفل حزام', 'Seatbelt Buckle Clip'],
  ['حمايه مقابض الابواب', 'Door Handle Anti-Scratch Guards'],
  ['عتب حمايه ابواب', 'Door Sill Protectors'],
  ['عتب ابواب', 'Door Sill Guards'],
  ['عتب حمايه', 'Door Sill Protectors'],
  ['جون كوبر وركس', 'John Cooper Works (JCW)'],
  ['انتينا سقف رياضيه', 'Short Sport Roof Antenna'],
  ['انتينا سقف', 'Roof Antenna'],
  ['اريال سقف', 'Roof Antenna'],
  ['مساحات زجاج', 'Windshield Wipers'],
  ['كاربون فايبر اصلي', 'Real Carbon Fiber'],
  ['كاربون فايبر لامع', 'Gloss Carbon Fiber'],
  ['كاربون فايبر', 'Carbon Fiber'],
  ['كربون فايبر', 'Carbon Fiber'],
  ['المونيوم مصقول', 'Brushed Aluminum'],
  ['المنيوم مصقول', 'Brushed Aluminum'],
  ['ستانلس ستيل', 'Stainless Steel'],
  ['جلد مطرز', 'Embroidered Leather'],
  ['اسود لامع بالكامل', 'Gloss Blackout'],
  ['اسود لامع', 'Gloss Black'],
  ['اسود مطفي', 'Matte Black'],
  ['اسود مط', 'Matte Black'],
  ['فضي مطفي', 'Matte Silver'],
  ['احمر قرمزي', 'Crimson Red'],
  ['احمر رياضي', 'Racing Red'],
  ['معدن صلب', 'Solid Metal'],
  ['شبكه اماميه وشنطه', 'Front Grille & Trunk'],
  ['شبكه و شنطه', 'Grille & Trunk'],
  ['شنطه و شبكه', 'Trunk & Grille'],
  ['للشبكه و شنطه', 'Front Grille & Trunk'],
  ['للشبكه والشنطه', 'Front Grille & Trunk'],
  ['شبكه اماميه', 'Front Grille'],
  ['شنطه خلفيه', 'Rear Trunk'],
  ['باب الشنطه', 'Trunk Lid'],
  ['شعار شبكه', 'Grille Emblem'],
  ['شعار شنطه', 'Trunk Emblem'],
  ['علامه شنطه', 'Trunk Emblem'],
  ['حروف شنطه', 'Trunk Lettering'],
  ['جميع الموديلات', 'All Models'],
  ['كل الموديلات', 'All Models'],
  ['كل السيارات', 'All Cars'],
  ['جميع السيارات', 'All Cars'],
  ['جميع الاجيال', 'All Generations'],
  ['الموديلات المتوافقه', 'Compatible Models'],
  ['طقم 4 قطع', 'Set of 4'],
  ['طقم 5 قطع', '5-Piece Set'],
  ['زوج قطعتين', 'Pair'],
  ['فولكس فاجن', 'Volkswagen'],
  ['فولكس واجن', 'Volkswagen'],
  ['ميني كوبر', 'Mini Cooper'],
  ['بي ام دبليو', 'BMW'],
  ['مرسيدس بنز', 'Mercedes-Benz'],
  ['لاند روفر', 'Land Rover'],
  ['الفا روميو', 'Alfa Romeo'],
  ['بي واي دي', 'BYD'],
  ['ام جي', 'MG']
];

// Normalized single Arabic stems -> English words
const AR_WORD_DICT_EN = {
  'و': '&',
  'في': 'In',
  'علي': 'On',
  'مع': 'With',
  'من': 'From',
  'ل': 'For',
  'بدون': 'Without',
  'حرف': 'Letter',
  'حروف': 'Letters',
  'كلمه': 'Word',
  'شعار': 'Emblem',
  'شعارات': 'Emblems',
  'علامه': 'Emblem',
  'علامات': 'Emblems',
  'لوجو': 'Logo',
  'تاج': 'Badge',
  'تاجات': 'Badges',
  'بادج': 'Badge',
  'شاره': 'Badge',
  'شارات': 'Badges',
  'شبكه': 'Grille',
  'شبك': 'Grille',
  'شنطه': 'Trunk',
  'كبوت': 'Hood',
  'سقف': 'Roof',
  'باب': 'Door',
  'ابواب': 'Doors',
  'رفرف': 'Fender',
  'رفارف': 'Fenders',
  'مراه': 'Mirror',
  'مرايا': 'Mirrors',
  'مقبض': 'Handle',
  'مقابض': 'Handles',
  'تابلوه': 'Dashboard',
  'صالون': 'Interior',
  'مقصوره': 'Cockpit',
  'مفتاح': 'Key',
  'مفاتيح': 'Keys',
  'ريموت': 'Remote',
  'سمارت': 'Smart',
  'جراب': 'Cover',
  'جرابات': 'Covers',
  'كفر': 'Cover',
  'كفرات': 'Covers',
  'غطاء': 'Cover',
  'اغطيه': 'Covers',
  'غلاف': 'Shell',
  'حامي': 'Protector',
  'حمايه': 'Protection',
  'ميداليه': 'Keychain',
  'ميداليات': 'Keychains',
  'سلسله': 'Keyring',
  'دواسه': 'Pedal',
  'دواسات': 'Floor Mats',
  'فرش': 'Mats',
  'سجاد': 'Mats',
  'مطاط': 'Rubber',
  'شيفتات': 'Paddle Shifters',
  'بدالات': 'Pedals',
  'تطويله': 'Extension',
  'طاره': 'Steering Wheel',
  'دركسيون': 'Steering Wheel',
  'كاليبر': 'Caliper',
  'فرامل': 'Brake',
  'جنط': 'Wheel Rim',
  'جنوط': 'Alloy Wheels',
  'كاوتش': 'Tire',
  'عجل': 'Wheels',
  'بلف': 'Valve Cap',
  'بلوف': 'Valve Caps',
  'سبويلر': 'Spoiler',
  'جناح': 'Spoiler',
  'ديفوزر': 'Diffuser',
  'شكمان': 'Exhaust',
  'اكزوست': 'Exhaust',
  'مخارج': 'Tips',
  'مساحات': 'Wipers',
  'زجاج': 'Glass',
  'انتينا': 'Antenna',
  'اريال': 'Antenna',
  'حزام': 'Seatbelt',
  'احزمه': 'Seatbelts',
  'امان': 'Safety',
  'مشبك': 'Clip',
  'مشابك': 'Clips',
  'قفل': 'Buckle',
  'كاتم': 'Silencer',
  'صوت': 'Alarm',
  'عتب': 'Sill Guard',
  'اكصدام': 'Bumper',
  'فانوس': 'Headlight',
  'فوانيس': 'Lights',
  'اضاءه': 'Lighting',
  'محيطيه': 'Ambient',
  'استيكر': 'Sticker',
  'استيكرات': 'Decal Pack',
  'كارت': 'Card',
  'انتظار': 'Parking',
  'محفور': 'Engraved',
  'مجسم': 'Model',
  'تزيين': 'Trim',
  'اطار': 'Frame',
  'حلقه': 'Ring',
  'امامي': 'Front',
  'اماميه': 'Front',
  'خلفي': 'Rear',
  'خلفيه': 'Rear',
  'جانبي': 'Side',
  'داخلي': 'Interior',
  'داخليه': 'Interior',
  'خارجي': 'Exterior',
  'يمين': 'Right',
  'شمال': 'Left',
  'فوق': 'Upper',
  'اسفل': 'Lower',
  'كامل': 'Complete',
  'اصلي': 'OEM',
  'اوريجينال': 'OEM',
  'فاخر': 'Luxury',
  'فاخره': 'Luxury',
  'سبورت': 'Sport',
  'رياضي': 'Sport',
  'رياضيه': 'Sport',
  'موتورسبورت': 'Motorsport',
  'سباقات': 'Racing',
  'كاربون': 'Carbon',
  'كربون': 'Carbon',
  'فايبر': 'Fiber',
  'معدن': 'Metal',
  'معدني': 'Metallic',
  'صلب': 'Solid',
  'المونيوم': 'Aluminum',
  'المنيوم': 'Aluminum',
  'الومنيوم': 'Aluminum',
  'مصقول': 'Brushed',
  'ستانلس': 'Stainless',
  'ستيل': 'Steel',
  'جلد': 'Leather',
  'مطرز': 'Embroidered',
  'قطيفه': 'Suede',
  'الكانتارا': 'Alcantara',
  'سيليكون': 'Silicone',
  'بلاستيك': 'ABS Plastic',
  'كروم': 'Chrome',
  'نيكل': 'Chrome',
  'اسود': 'Black',
  'سمراء': 'Black',
  'احمر': 'Red',
  'حمراء': 'Red',
  'ابيض': 'White',
  'فضي': 'Silver',
  'سلفر': 'Silver',
  'رمادي': 'Grey',
  'جراي': 'Grey',
  'ذهبي': 'Gold',
  'برونزي': 'Bronze',
  'نحاسي': 'Copper',
  'ازرق': 'Blue',
  'كحلي': 'Navy',
  'سماوي': 'Cyan',
  'تركواز': 'Teal',
  'اخضر': 'Green',
  'اصفر': 'Yellow',
  'برتقالي': 'Orange',
  'لامع': 'Gloss',
  'لميع': 'Gloss',
  'مطفي': 'Matte',
  'مط': 'Matte',
  'معتم': 'Blackout',
  'ثلاثي': '3D',
  'الوان': 'Multi-Color',
  'طقم': 'Set',
  'زوج': 'Pair',
  'قطعه': 'Piece',
  'قطع': 'Pieces',
  'عبوه': 'Pack',
  'حبه': 'Piece',
  'توب': 'Top',
  'اكسسوار': 'Accessory',
  'اكسسوارات': 'Accessories',
  'اكسسورات': 'Accessories',
  'متوفر': 'Available',
  'مناسب': 'Fits',
  'يناسب': 'Fits',
  'توافق': 'Fitment',
  'متوافق': 'Compatible',
  'جميع': 'All',
  'كل': 'All',
  'موديل': 'Model',
  'موديلات': 'Models',
  'فئه': 'Edition',
  'اصدار': 'Edition',
  'خاص': 'Special',
  'محدود': 'Limited',
  'عام': 'Universal',
  'سياره': 'Car',
  'سيارات': 'Cars',
  'عربيه': 'Car',
  'عربيات': 'Cars',
  'اوتوماتيك': 'Automatic',
  'مانيوال': 'Manual',
  'اودي': 'Audi',
  'كوبرا': 'Cupra',
  'سكودا': 'Skoda',
  'سيات': 'Seat',
  'ميني': 'Mini',
  'فولكس': 'VW',
  'فاجن': 'Volkswagen',
  'مرسيدس': 'Mercedes',
  'بنز': 'Benz',
  'بورشه': 'Porsche',
  'بورش': 'Porsche',
  'اوبل': 'Opel',
  'بيجو': 'Peugeot',
  'ستروين': 'Citroen',
  'سيتروين': 'Citroen',
  'رينو': 'Renault',
  'كيا': 'Kia',
  'هيونداي': 'Hyundai',
  'نيسان': 'Nissan',
  'تويوتا': 'Toyota',
  'هوندا': 'Honda',
  'سوبارو': 'Subaru',
  'لانسر': 'Lancer',
  'ميتسوبيشي': 'Mitsubishi',
  'ابارث': 'Abarth',
  'فيات': 'Fiat',
  'دودج': 'Dodge',
  'فورد': 'Ford',
  'جيب': 'Jeep',
  'شيفروليه': 'Chevrolet',
  'شيري': 'Chery',
  'جيتور': 'Jetour',
  'جيلي': 'Geely',
  'شانجان': 'Changan',
  'هافال': 'Haval',
  'سوزوكي': 'Suzuki',
  'اوكتافيا': 'Octavia',
  'سوبرب': 'Superb',
  'كودياك': 'Kodiaq',
  'كاروك': 'Karoq',
  'فورمينتور': 'Formentor',
  'ليون': 'Leon',
  'اتيكا': 'Ateca',
  'تيجوان': 'Tiguan',
  'جولف': 'Golf',
  'باسات': 'Passat'
};

const AR_TRANSLIT_MAP = {
  'ا': 'a', 'أ': 'a', 'إ': 'i', 'آ': 'a', 'ٱ': 'a', 'ب': 'b', 'ت': 't', 'ث': 'th',
  'ج': 'g', 'ح': 'h', 'خ': 'kh', 'د': 'd', 'ذ': 'dh', 'ر': 'r', 'ز': 'z', 'س': 's',
  'ش': 'sh', 'ص': 's', 'ض': 'd', 'ط': 't', 'ظ': 'z', 'ع': 'a', 'غ': 'gh', 'ف': 'f',
  'ق': 'q', 'ك': 'k', 'ل': 'l', 'م': 'm', 'ن': 'n', 'ه': 'h', 'ة': 'a', 'و': 'w',
  'ي': 'y', 'ى': 'y', 'ئ': 'y', 'ؤ': 'w', 'ء': '', 'ـ': ''
};

function transliterateArabicWord(word) {
  let res = '';
  for (const ch of String(word || '')) {
    if (ch in AR_TRANSLIT_MAP) {
      res += AR_TRANSLIT_MAP[ch];
    } else if (/[\u0660-\u0669]/.test(ch)) {
      res += String(ch.charCodeAt(0) - 0x0660);
    }
  }
  return res || 'Item';
}

function translateSingleArabicToken(tok) {
  if (tok in AR_WORD_DICT_EN) return AR_WORD_DICT_EN[tok];
  if (tok.startsWith('وال') && tok.length >= 5) {
    const stem = tok.slice(3);
    if (stem in AR_WORD_DICT_EN) return `& ${AR_WORD_DICT_EN[stem]}`;
  }
  if (tok.startsWith('لل') && tok.length >= 4) {
    const stem = tok.slice(2);
    if (stem in AR_WORD_DICT_EN) return `For ${AR_WORD_DICT_EN[stem]}`;
  }
  if (tok.startsWith('بال') && tok.length >= 5) {
    const stem = tok.slice(3);
    if (stem in AR_WORD_DICT_EN) return AR_WORD_DICT_EN[stem];
  }
  if (tok.startsWith('ال') && tok.length >= 4) {
    const stem = tok.slice(2);
    if (stem in AR_WORD_DICT_EN) return AR_WORD_DICT_EN[stem];
  }
  if (tok.startsWith('و') && tok.length >= 4) {
    const stem = tok.slice(1);
    if (stem in AR_WORD_DICT_EN) return `& ${AR_WORD_DICT_EN[stem]}`;
  }
  if (tok.startsWith('ل') && tok.length >= 4) {
    const stem = tok.slice(1);
    if (stem in AR_WORD_DICT_EN) return `For ${AR_WORD_DICT_EN[stem]}`;
  }
  if (tok.startsWith('ب') && tok.length >= 4) {
    const stem = tok.slice(1);
    if (stem in AR_WORD_DICT_EN) return AR_WORD_DICT_EN[stem];
  }
  if (tok.endsWith('ات') && tok.length >= 5) {
    const sing = tok.slice(0, -2);
    if (sing in AR_WORD_DICT_EN) return `${AR_WORD_DICT_EN[sing]}s`;
    const singHe = sing + 'ه';
    if (singHe in AR_WORD_DICT_EN) return `${AR_WORD_DICT_EN[singHe]}s`;
  }
  return transliterateArabicWord(tok);
}

const PRESERVE_ACRONYMS = new Set([
  'VWR', 'VW', 'GTI', 'RS', 'S3', 'RS3', 'RS4', 'RS5', 'RS6', 'RS7',
  'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'S4', 'S5', 'S6', 'S7', 'S8',
  'Q2', 'Q3', 'Q5', 'Q7', 'SQ5', 'JCW', 'OEM', 'ABS', 'TPU', 'DSG',
  'BMW', 'MG', 'BYD', 'AMG', 'BBS', 'CNC', 'TFSI', 'TTRS', 'TT', 'TTS', 'R', 'S'
]);

function autoTranslateTextEn(text, opts = {}) {
  const raw = String(text || '').trim();
  if (!raw) return '';
  if (!hasArabic(raw)) {
    return opts.uppercase ? raw.toUpperCase() : raw;
  }

  let out = normalizeArabicForMatch(raw);

  // Replace longest-first multi-word Arabic phrases safely
  for (const [arPhrase, enPhrase] of AR_PHRASE_DICT_EN) {
    const re = new RegExp(`(^|[^\\u0600-\\u06FF])${arPhrase}(?=[^\\u0600-\\u06FF]|$)`, 'g');
    out = out.replace(re, (_, prefix) => `${prefix}${enPhrase}`);
  }

  // Translate any remaining Arabic script tokens word-by-word
  out = out.replace(/[\u0600-\u06FF]+/g, tok => translateSingleArabicToken(tok));

  // Normalize connectors & whitespace
  out = out
    .replace(/([A-Za-z0-9)])([A-Za-z0-9])/g, '$1$2')
    .replace(/\s*&\s*(&\s*)+/g, ' & ')
    .replace(/\bFor\s+&\s+/gi, '& ')
    .replace(/^&\s+|\s+&$/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (opts.uppercase) {
    return out.toUpperCase();
  }

  return out.split(' ').map(word => {
    const up = word.toUpperCase();
    if (up === 'VRS') return 'vRS';
    if (PRESERVE_ACRONYMS.has(up)) return up;
    if (word === '&' || word === '/' || word === '-') return word;
    if (/^[A-Za-z]/.test(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
  }).join(' ');
}

function autoTranslateTextAr(text) {
  if (!text) return '';
  if (hasArabic(text)) return text;
  let out = text.trim();

  // Translate multi-word & single-word automotive terms using safe boundaries (longest-first)
  for (const [en, ar] of SORTED_PHRASE_DICT_AR) {
    const escaped = en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(^|[^A-Za-z0-9])${escaped}(?=[^A-Za-z0-9]|$)`, 'gi');
    out = out.replace(re, (_, prefix) => prefix + ar);
  }

  for (const [bid, bar] of Object.entries(BRAND_AR_MAP)) {
    if (bid.length < 3 || bid === 'all' || bid === 'bbs') continue;
    const reB = new RegExp(`(^|[^A-Za-z0-9])${bid}(?=[^A-Za-z0-9]|$)`, 'gi');
    out = out.replace(reB, (_, prefix) => prefix + bar);
  }

  // Replace standalone '&' with 'و' (keeping a space before Latin/digit tokens so words never glue)
  out = out.replace(/\s+&\s+([A-Za-z0-9])/g, ' و $1');
  out = out.replace(/\s+&\s+/g, ' و');
  out = out.replace(/([\u0600-\u06FF])([A-Za-z])/g, '$1 $2');
  out = out.replace(/([A-Za-z])([\u0600-\u06FF])/g, '$1 $2');
  out = out.replace(/\(\(/g, '(').replace(/\)\)/g, ')');
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
  if (state.lang !== 'ar') {
    if (brandObj && brandObj.nameEn) return brandObj.nameEn;
    return hasArabic(en) ? autoTranslateTextEn(en, { uppercase: true }) : en;
  }
  if (brandObj && brandObj.nameAr) return brandObj.nameAr;
  if (hasArabic(en)) return en;
  const normKey = id.toLowerCase().replace(/[^a-z0-9]/g, '');
  return BRAND_AR_MAP[normKey] || autoTranslateTextAr(en);
}

function getCatLabel(catObj) {
  if (!catObj) return '';
  if (state.lang !== 'ar') {
    if (catObj.nameEn) return catObj.nameEn;
    return hasArabic(catObj.name) ? autoTranslateTextEn(catObj.name, { uppercase: true }) : catObj.name;
  }
  if (catObj.nameAr) return catObj.nameAr;
  if (hasArabic(catObj.name)) return catObj.name;
  const normKey = normCat(catObj.id || catObj.name);
  return CAT_AR_MAP[normKey] || autoTranslateTextAr(catObj.name);
}

function getProdTitle(item) {
  if (!item) return '';
  if (state.lang !== 'ar') {
    if (item.nameEn) return item.nameEn;
    if (hasArabic(item.name)) {
      const mapped = PRODUCT_EN_MAP[item.id];
      if (mapped && normalizeArabicForMatch(item.name) === normalizeArabicForMatch(mapped.arName)) {
        return mapped.nameEn;
      }
      return autoTranslateTextEn(item.name, { uppercase: true });
    }
    return (item.name || '').toUpperCase();
  }
  if (item.nameAr) return item.nameAr;
  if (hasArabic(item.name)) return item.name;
  const mapped = PRODUCT_AR_MAP[item.id];
  if (mapped && (item.name || '').trim().toUpperCase() === mapped.enName.toUpperCase()) {
    return mapped.nameAr;
  }
  return autoTranslateTextAr(item.name);
}

function getProdFit(item) {
  if (!item) return '';
  if (state.lang !== 'ar') {
    if (item.fitmentEn) return item.fitmentEn;
    if (hasArabic(item.fitment)) {
      const mapped = PRODUCT_EN_MAP[item.id];
      if (mapped && mapped.fitmentEn && normalizeArabicForMatch(item.name) === normalizeArabicForMatch(mapped.arName)) {
        return mapped.fitmentEn;
      }
      return autoTranslateTextEn(item.fitment);
    }
    return item.fitment || '';
  }
  if (item.fitmentAr) return item.fitmentAr;
  if (hasArabic(item.fitment)) return item.fitment;
  const mapped = PRODUCT_AR_MAP[item.id];
  if (mapped && mapped.fitmentAr && (item.name || '').trim().toUpperCase() === mapped.enName.toUpperCase()) {
    return mapped.fitmentAr;
  }
  return autoTranslateTextAr(item.fitment || 'Compatible Models');
}

const UI_STR = {
  en: {
    pageTitle: 'KOKO ACCESSORIES — Luxury Car Accessories Showcase',
    navCars: 'Cars',
    navCatalog: 'Accessories',
    navHow: 'How to Order',
    navContact: 'Contact',
    searchPh: 'Search car model or part...',
    searchMobPh: 'Search Audi, Cupra, Key Cover...',
    sheetBrandSearchPh: 'Find car brand (Audi, Cupra, Mini, BMW...)',
    heroKicker: 'KOKO AUTOMOTIVE ATELIER • EGYPT',
    heroTitle: 'Precision Accessories Tailored for Your Car.',
    heroDesc: 'Browse real multi-angle hardware photos across every stocked vehicle make. Select your car, check stock instantly, and order via WhatsApp — guaranteed perfect fitment.',
    heroBtnCar: 'CHOOSE YOUR CAR',
    heroBtnBrowse: 'BROWSE ALL PARTS',
    factParts: 'Accessories',
    factBrands: 'Car Makes Ready',
    factFitment: 'Guaranteed Fitment',
    step1Title: 'Step 1 • Select Your Vehicle',
    step1Hint: 'Showing in-stock brands first • Tap + More Brands for all makes',
    step1MobileLabel: 'Step 1 • Your Vehicle',
    changeCarBtn: 'CHOOSE CAR ▾',
    showingFor: 'Showing accessories for:',
    showAllBtn: 'SHOW ALL ×',
    inStockOnly: 'IN STOCK ONLY',
    resetFilters: 'Reset filters',
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
    footerBrandTitle: 'KOKO ACCESSORIES',
    footerAbout: 'Automotive badges, smart key shells, floor mats & cockpit styling accessories across Egypt — guaranteed OEM fitment.',
    footerCars: 'Popular Car Brands',
    footerContact: 'Direct Support',
    footerWhatsappLabel: 'WhatsApp:',
    backToTop: 'Back to Top ↑',
    footerNote: '© KOKO ACCESSORIES • Precision Automotive Atelier',
    adminPortalLink: 'Admin Portal →',
    footerLangLabel: 'Language:',
    bottomSwitch: '🌐 العربية',
    modalCarTitle: 'Choose Your Car Brand',
    availableInStock: 'Available In Stock',
    comingSoon: 'Coming Soon (0 Items Yet)',
    comingSoonShort: 'Coming Soon',
    showMoreMakes: 'Show More Makes',
    hideMoreMakes: 'Hide Empty Makes',
    accessoryDetailsTitle: 'ACCESSORY DETAILS',
    accessorySuffix: 'ACCESSORY',
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
    pageTitle: 'كوكو لإكسسوارات السيارات — إكسسوارات فاخرة لسيارتك',
    navCars: 'السيارات',
    navCatalog: 'الإكسسوارات',
    navHow: 'طريقة الطلب',
    navContact: 'تواصل معنا',
    searchPh: 'ابحث باسم السيارة أو القطعة...',
    searchMobPh: 'ابحث: أودي، كوبرا، ميني...',
    sheetBrandSearchPh: 'ابحث عن ماركة السيارة (أودي، كوبرا، ميني، بي إم...)',
    heroKicker: 'كوكو لإكسسوارات السيارات • مصر',
    heroTitle: 'إكسسوارات فاخرة مصممة بدقة لسيارتك.',
    heroDesc: 'تصفح الصور الحقيقية من كل الزوايا لجميع أنواع السيارات المضافة في الموقع. اختر سيارتك وتأكد من التوفر واطلب مباشرة عبر واتساب.',
    heroBtnCar: 'اختر سيارتك',
    heroBtnBrowse: 'تصفح كل الإكسسوارات',
    factParts: 'قطعة متوفرة',
    factBrands: 'ماركة سيارات',
    factFitment: 'ضمان تطابق المقاس',
    step1Title: 'الخطوة ١ • اختر سيارتك',
    step1Hint: 'تظهر السيارات المتوفرة أولاً • اضغط ماركات أخرى للمزيد',
    step1MobileLabel: 'الخطوة ١ • نوع سيارتك',
    changeCarBtn: 'اختر سيارة ▾',
    showingFor: 'عرض القطع المناسبة لـ:',
    showAllBtn: 'عرض الكل ×',
    inStockOnly: 'المتوفر فقط',
    resetFilters: 'إعادة تعيين الفلاتر',
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
    footerBrandTitle: 'كوكو لإكسسوارات السيارات',
    footerAbout: 'إكسسوارات السيارات الفاخرة وشعارات وميداليات ودواسات وجرابات المفاتيح الذكية في مصر — ضمان تطابق كامل.',
    footerCars: 'أشهر ماركات السيارات',
    footerContact: 'الدعم والمبيعات',
    footerWhatsappLabel: 'واتساب:',
    backToTop: 'العودة للأعلى ↑',
    footerNote: '© كوكو لإكسسوارات السيارات • دقة وأناقة لكل سيارة',
    adminPortalLink: 'بوابة الإدارة ←',
    footerLangLabel: 'اللغة:',
    bottomSwitch: '🌐 English',
    modalCarTitle: 'اختر ماركة سيارتك',
    availableInStock: 'متوفر في المخزون',
    comingSoon: 'قريباً (لا توجد قطع حالياً)',
    comingSoonShort: 'قريباً',
    showMoreMakes: 'إظهار ماركات أخرى',
    hideMoreMakes: 'إخفاء الماركات الفارغة',
    accessoryDetailsTitle: 'تفاصيل القطعة',
    accessorySuffix: 'تفاصيل القطعة',
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
  activeDetailProdId: null,
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
  const label = document.getElementById('themeToggleLabel');

  if (theme === 'dark') {
    html.classList.add('dark');
    if (label) label.textContent = state.lang === 'ar' ? 'داكن' : 'DARK';
  } else {
    html.classList.remove('dark');
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

  const t = UI_STR[lang] || UI_STR.en;
  if (t.pageTitle) document.title = t.pageTitle;

  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (t[key]) elem.textContent = t[key];
  });

  // Update inputs placeholder
  if (el.searchInput) el.searchInput.placeholder = t.searchPh;
  if (el.searchInputMobile) el.searchInputMobile.placeholder = t.searchMobPh;
  const sheetSearch = document.getElementById('sheetBrandSearch');
  if (sheetSearch && t.sheetBrandSearchPh) sheetSearch.placeholder = t.sheetBrandSearchPh;

  // Update bottom switcher & footer language buttons
  if (el.bottomLangBtn) {
    el.bottomLangBtn.textContent = lang === 'ar' ? '🌐 English' : '🌐 العربية';
  }
  const footerEnBtn = document.getElementById('footerEnBtn');
  const footerArBtn = document.getElementById('footerArBtn');
  if (footerEnBtn) footerEnBtn.classList.toggle('active', lang === 'en');
  if (footerArBtn) footerArBtn.classList.toggle('active', lang === 'ar');

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
  if (el.detailModal && el.detailModal.classList.contains('active') && state.activeDetailProdId) {
    openDetailModal(state.activeDetailProdId);
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
// 5. INITIALIZATION & CLOUDFLARE KV SYNC
// ============================================================
async function refreshCatalogFromCloud() {
  try {
    const isDirty = (() => {
      try { return localStorage.getItem(CATALOG_DIRTY_KEY) === '1'; } catch (e) { return false; }
    })();
    if (isDirty) return;

    const cloudRes = await fetch(`/api/catalog?_t=${Date.now()}`, { cache: 'no-store' });
    if (!cloudRes.ok) return;
    const cloudData = await cloudRes.json();
    if (!cloudData || !Array.isArray(cloudData.products) || cloudData.status === "fallback") {
      return;
    }

    const cloudUpdatedAt = parseTimeMs(cloudData.updatedAt);
    let localUpdatedAt = parseTimeMs(state.catalog && state.catalog.updatedAt);
    try {
      const storedTs = parseTimeMs(localStorage.getItem(CATALOG_UPDATED_KEY));
      if (storedTs > localUpdatedAt) localUpdatedAt = storedTs;
    } catch (e) {}

    // Protect against Cloudflare KV 60s edge cache serving an older snapshot right after a save on same device
    if (localUpdatedAt > 0 && (Date.now() - localUpdatedAt) < 90000 && cloudUpdatedAt < localUpdatedAt) {
      return;
    }

    const deletedIds = Array.isArray(cloudData.deletedProductIds) ? Array.from(new Set(cloudData.deletedProductIds)) : [];
    const deletedBrandIds = Array.isArray(cloudData.deletedBrandIds) ? Array.from(new Set(cloudData.deletedBrandIds)) : [];
    const deletedCatIds = Array.isArray(cloudData.deletedCategoryIds) ? Array.from(new Set(cloudData.deletedCategoryIds)) : [];

    const liveProducts = cloudData.products
      .filter(p => p && p.id && !deletedIds.includes(p.id))
      .map(p => {
        const copy = { ...p, isSoldOut: isProductSoldOut(p) };
        if ('soldOut' in copy) delete copy.soldOut;
        return copy;
      });

    const defaultBrands = (typeof DEFAULT_CAR_BRANDS !== 'undefined' && Array.isArray(DEFAULT_CAR_BRANDS)) ? DEFAULT_CAR_BRANDS : [];
    let liveBrands = (Array.isArray(cloudData.brands) && cloudData.brands.length > 0)
      ? cloudData.brands.filter(b => b && b.id && !deletedBrandIds.includes(b.id))
      : defaultBrands.filter(b => !deletedBrandIds.includes(b.id));
    if (!liveBrands.some(b => b.id === 'all')) {
      liveBrands.unshift({ id: "all", name: "ALL CARS", logo: "ALL" });
    }

    const defaultCats = (typeof DEFAULT_CATEGORIES !== 'undefined' && Array.isArray(DEFAULT_CATEGORIES)) ? DEFAULT_CATEGORIES : [];
    let liveCats = (Array.isArray(cloudData.categories) && cloudData.categories.length > 0)
      ? cloudData.categories.filter(c => c && c.id && !deletedCatIds.includes(c.id))
      : defaultCats.filter(c => !deletedCatIds.includes(c.id));

    state.catalog = {
      brands: liveBrands,
      categories: liveCats,
      products: liveProducts,
      deletedProductIds: deletedIds,
      deletedBrandIds: deletedBrandIds,
      deletedCategoryIds: deletedCatIds,
      updatedAt: cloudUpdatedAt || Date.now()
    };

    if (typeof saveCatalogData === 'function') {
      saveCatalogData(state.catalog, { replaceTombstones: true });
    }

    renderHeroStats();
    renderCarBrands();
    renderCategories();
    renderAccessories();
    updateCarBanner();
    renderFooterBrands();
    if (el.carSelectorModal && el.carSelectorModal.classList.contains('active')) {
      renderCarSelectorModal();
    }
    if (el.detailModal && el.detailModal.classList.contains('active') && state.activeDetailProdId) {
      if (state.catalog.products.some(p => p.id === state.activeDetailProdId)) {
        openDetailModal(state.activeDetailProdId);
      } else {
        closeDetailModal();
      }
    }
  } catch (eCloud) {
    // Local or offline mode: uses getSafeCatalog seamlessly
  }
}

async function initApp() {
  try {
    initElements();
    initTheme();
    state.catalog = getSafeCatalog();
    applyLanguage(state.lang);
    setupSearch();
    setupStorageListener();

    await refreshCatalogFromCloud();
  } catch (err) {
    console.error("Initialization error:", err);
  }
}

// Cross-tab & mobile tab-switch / bfcache synchronization
function setupStorageListener() {
  window.addEventListener('storage', (e) => {
    if (
      e.key === 'koko_catalog_data' ||
      e.key === 'koko_theme' ||
      e.key === 'koko_lang' ||
      e.key === 'koko_catalog_deleted_ids' ||
      e.key === 'koko_catalog_deleted_brands' ||
      e.key === 'koko_catalog_deleted_cats' ||
      e.key === 'koko_catalog_updated_at'
    ) {
      if (e.key === 'koko_theme') initTheme();
      if (e.key === 'koko_lang' && e.newValue) applyLanguage(e.newValue);
      if (
        e.key === 'koko_catalog_data' ||
        e.key === 'koko_catalog_deleted_ids' ||
        e.key === 'koko_catalog_deleted_brands' ||
        e.key === 'koko_catalog_deleted_cats' ||
        e.key === 'koko_catalog_updated_at'
      ) {
        state.catalog = getSafeCatalog();
        renderHeroStats();
        renderCarBrands();
        renderCategories();
        renderAccessories();
        updateCarBanner();
        renderFooterBrands();
      }
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      state.catalog = getSafeCatalog();
      renderHeroStats();
      renderCarBrands();
      renderCategories();
      renderAccessories();
      refreshCatalogFromCloud();
    }
  });

  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      state.catalog = getSafeCatalog();
      renderHeroStats();
      renderCarBrands();
      renderCategories();
      renderAccessories();
      refreshCatalogFromCloud();
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

  // Populate hero collage dynamically with first 3 featured products
  for (let idx = 0; idx < 3; idx++) {
    const item = products[idx];
    const cardEl = document.getElementById(`heroCard${idx}`);
    const imgEl = document.getElementById(`heroImg${idx}`);
    const badgeEl = document.getElementById(`heroBadge${idx}`);
    const nameEl = document.getElementById(`heroName${idx}`);

    if (!item) {
      if (cardEl) cardEl.style.display = 'none';
      continue;
    }
    if (cardEl) cardEl.style.display = '';
    const thumb = (Array.isArray(item.images) && item.images[0]) ? item.images[0] : item.image;
    if (imgEl && thumb) imgEl.src = thumb;
    if (badgeEl) {
      const bObj = brands.find(b => b.id === item.brand);
      const bLabel = getBrandLabel(bObj, item.brand);
      badgeEl.textContent = state.lang === 'ar' ? bLabel : bLabel.toUpperCase();
    }
    if (nameEl) {
      nameEl.textContent = getProdTitle(item);
    }
  }
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

  const hasAnyFilter = state.selectedBrand !== 'all' || state.selectedCategory !== 'all' || Boolean(q) || state.stockFilterOnly;
  if (el.resetFilterBtn) {
    el.resetFilterBtn.classList.toggle('visible', hasAnyFilter);
  }

  const filtered = products.filter(p => {
    if (!matchesBrand(p, state.selectedBrand)) return false;
    if (state.selectedCategory !== 'all') {
      if (normCat(p.category) !== normCat(state.selectedCategory)) return false;
    }
    if (state.stockFilterOnly && isProductSoldOut(p)) return false;
    if (q) {
      const brandObj = brands.find(b => b.id === p.brand);
      const matchName = (p.name || '').toLowerCase().includes(q);
      const matchNameAr = (getProdTitle(p) || '').toLowerCase().includes(q);
      const matchFit = (p.fitment || '').toLowerCase().includes(q);
      const matchFitAr = (getProdFit(p) || '').toLowerCase().includes(q);
      const matchBrand = (p.brand || '').toLowerCase().includes(q) || (getBrandLabel(brandObj, p.brand) || '').toLowerCase().includes(q);
      if (!matchName && !matchNameAr && !matchFit && !matchFitAr && !matchBrand) return false;
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
    const isSoldOut = isProductSoldOut(item);

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

  state.activeDetailProdId = prodId;

  const brandObj = brands.find(b => b.id === item.brand);
  const brandLabel = getBrandLabel(brandObj, item.brand);
  const title = getProdTitle(item);
  const fit = getProdFit(item);
  const isSoldOut = isProductSoldOut(item);

  window.currentModalImages = Array.isArray(item.images) && item.images.length > 0 ? item.images : [item.image];
  window.currentModalImgIndex = 0;

  if (el.modalDetailBrandTitle) {
    el.modalDetailBrandTitle.textContent = `${brandLabel} • ${t.accessorySuffix}`;
  }

  // Pre-filled WhatsApp message in English or Arabic
  let waMsg = '';
  if (state.lang === 'ar') {
    waMsg = isSoldOut
      ? `مرحباً كوكو إكسسوارات! أرغب في الاستفسار عن موعد توفر القطعة: ${title} (${brandLabel}). هل ستتوفر قريباً؟`
      : `مرحباً كوكو إكسسوارات! أود طلب: ${title} (${brandLabel}) لسيارتي. برجاء تأكيد التوافق وسعر الشحن.`;
  } else {
    waMsg = isSoldOut
      ? `Hello KOKO ACCESSORIES! I want to inquire about when this item will be back in stock: ${title} (${brandLabel}).`
      : `Hello KOKO ACCESSORIES! I would like to order: ${title} (${brandLabel}). Please confirm model compatibility and shipping.`;
  }
  const waUrl = `https://wa.me/201117781675?text=${encodeURIComponent(waMsg)}`;

  el.detailContent.innerHTML = `
    <div class="product-modal-split">
      <div>
        <div class="modal-gallery" dir="ltr">
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
          <span id="modalPhotoCounter" dir="ltr">${window.currentModalImages.length > 1 ? `1 / ${window.currentModalImages.length}` : ''}</span>
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
  state.activeDetailProdId = null;
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
        : `+ ${t.showMoreMakes} (${empty.length} ${t.comingSoonShort})`;

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
