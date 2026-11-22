/**
 * KOKO ACCESSORIES - CATALOG DATABASE
 * Auto-saved directly to: D:\projects\koko accessories\products.js
 * Last updated: 2026-11-21 19:43:56
 */

const DEFAULT_CAR_BRANDS = [
  {
    "id": "all",
    "name": "ALL CARS",
    "logo": "ALL"
  },
  {
    "id": "cupra",
    "name": "CUPRA",
    "logo": "CUPRA"
  },
  {
    "id": "skoda",
    "name": "SKODA",
    "logo": "SKODA"
  },
  {
    "id": "seat",
    "name": "SEAT",
    "logo": "SEAT"
  },
  {
    "id": "minicooper",
    "name": "MINI COOPER",
    "logo": "MINI COOPER"
  },
  {
    "id": "vwgti",
    "name": "VW GTI",
    "logo": "VW GTI"
  },
  {
    "id": "vwr",
    "name": "VWR",
    "logo": "VWR"
  },
  {
    "id": "mg",
    "name": "MG",
    "logo": "MG"
  },
  {
    "id": "opel",
    "name": "OPEL",
    "logo": "OPEL"
  },
  {
    "id": "bbs",
    "name": "BBS",
    "logo": "BBS"
  },
  {
    "id": "audislien",
    "name": "AUDI S LIEN",
    "logo": "AUDI S LIEN"
  },
  {
    "id": "audirs",
    "name": "AUDI RS",
    "logo": "AUDI RS"
  },
  {
    "id": "bmw",
    "name": "BMW",
    "logo": "BMW"
  },
  {
    "id": "peugeot",
    "name": "PEUGEOT",
    "logo": "PEUGEOT"
  },
  {
    "id": "abarth",
    "name": "ABARTH",
    "logo": "ABARTH"
  },
  {
    "id": "landrover",
    "name": "LAND ROVER",
    "logo": "LAND ROVER"
  },
  {
    "id": "kia",
    "name": "KIA",
    "logo": "KIA"
  },
  {
    "id": "citroen",
    "name": "CITROEN",
    "logo": "CITROEN"
  },
  {
    "id": "lancer",
    "name": "LANCER",
    "logo": "LANCER"
  },
  {
    "id": "mercedesbenz",
    "name": "MERCEDES.BENZ",
    "logo": "MERCEDES.BENZ"
  },
  {
    "id": "subaru",
    "name": "SUBARU",
    "logo": "SUBARU"
  },
  {
    "id": "honda",
    "name": "HONDA",
    "logo": "HONDA"
  },
  {
    "id": "porsche",
    "name": "PORSCHE",
    "logo": "PORSCHE"
  },
  {
    "id": "dodge",
    "name": "DODGE",
    "logo": "DODGE"
  }
];

const DEFAULT_CATEGORIES = [
  {
    "id": "all",
    "name": "ALL ACCESSORIES"
  },
  {
    "id": "tobb",
    "name": "TOBB"
  },
  {
    "id": "tags",
    "name": "TAGS"
  },
  {
    "id": "keys",
    "name": "KEYS"
  },
  {
    "id": "keyscover",
    "name": "KEYS COVER"
  },
  {
    "id": "medals",
    "name": "MEDALS"
  },
  {
    "id": "carfloormats",
    "name": "CAR FLOOR MATS"
  },
  {
    "id": "carwipers",
    "name": "CAR WIPERS"
  },
  {
    "id": "spoiler",
    "name": "SPOILER"
  },
  {
    "id": "carnameslogo",
    "name": "CAR NAMES LOGO"
  },
  {
    "id": "steeringwheelsymbols",
    "name": "STEERING WHEEL SYMBOLS"
  },
  {
    "id": "coverwheelsteering",
    "name": "COVER WHEEL STEERING"
  },
  {
    "id": "padelshifts",
    "name": "PADEL SHIFTS"
  },
  {
    "id": "seatbelt",
    "name": "SEAT BELT"
  },
  {
    "id": "scatbelt",
    "name": "SCAT BELT"
  }
];

const DEFAULT_PRODUCTS = [
  {
    "id": "skoda-mwqnjmb9",
    "name": "tag vrs skoda",
    "brand": "skoda",
    "category": "tags",
    "fitment": "all models",
    "description": "",
    "image": "images/skoda_mwqnjmb9_1795281630.jpg",
    "images": [
      "images/skoda_mwqnjmb9_1795281630.jpg"
    ]
  },
  {
    "id": "cupra-mwpn26il",
    "name": "tobb cupra",
    "brand": "cupra",
    "category": "tobb",
    "fitment": "cupra,leon",
    "description": "",
    "image": "images/cupra_mwpn26il_1795281630.png",
    "images": [
      "images/cupra_mwpn26il_1795281630.png"
    ]
  }
];

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
