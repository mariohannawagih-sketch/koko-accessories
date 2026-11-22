/**
 * KOKO ACCESSORIES - CATALOG DATABASE
 * Auto-saved directly to: D:\projects\koko accessories\products.js
 * Last updated: 2026-11-21 22:55:01
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
  },
  {
    "id": "calipercovers",
    "name": "CALIPER COVERS"
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
    "id": "cupra-key-gloss-black-red",
    "name": "CUPRA GLOSS KEY COVER (BLACK & RED)",
    "brand": "cupra",
    "category": "keyscover",
    "fitment": "Cupra Formentor, Leon, Ateca",
    "description": "High-gloss dual finish key fob protection case in deep black and metallic crimson red. Full front button access and rear emblem cutout.",
    "image": "images/cupra_key_gloss_black_red_front.jpg",
    "images": [
      "images/cupra_key_gloss_black_red_front.jpg",
      "images/cupra_key_gloss_black_red_back.jpg"
    ]
  },
  {
    "id": "cupra-key-alcantara-red-stitch",
    "name": "CUPRA ALCANTARA SUEDE KEY CASE (RED STITCH)",
    "brand": "cupra",
    "category": "keyscover",
    "fitment": "Cupra Smart Key Fob",
    "description": "Handcrafted premium Alcantara suede key fob cover with contrasting red perimeter stitching, matching two-tone red strap and gunmetal carabiner ring.",
    "image": "images/cupra_key_alcantara_red_front.jpg",
    "images": [
      "images/cupra_key_alcantara_red_front.jpg",
      "images/cupra_key_alcantara_red_back.jpg"
    ]
  },
  {
    "id": "cupra-key-red-carbon-fiber-case",
    "name": "CUPRA RED CARBON FIBER KEY CASE (GIFT BOX)",
    "brand": "cupra",
    "category": "keyscover",
    "fitment": "Cupra Leon, Formentor, Ateca Smart Key",
    "description": "Real composite carbon fiber key fob shell in vivid metallic red gloss weave. Presented in collector display gift box.",
    "image": "images/cupra_key_red_carbon_box_front.jpg",
    "images": [
      "images/cupra_key_red_carbon_box_front.jpg",
      "images/cupra_key_red_carbon_box_back.jpg"
    ]
  },
  {
    "id": "cupra-key-gloss-carbon-fiber-shell",
    "name": "CUPRA GLOSS CARBON FIBER KEY SHELL",
    "brand": "cupra",
    "category": "keyscover",
    "fitment": "Cupra / Seat Smart Key Chassis",
    "description": "Lightweight high-rigidity carbon fiber weave replacement key shell. Features precise button cutouts and circular rear badge portal.",
    "image": "images/cupra_key_gloss_carbon_shell_front.jpg",
    "images": [
      "images/cupra_key_gloss_carbon_shell_front.jpg",
      "images/cupra_key_gloss_carbon_shell_back.jpg"
    ]
  },
  {
    "id": "cupra-key-matte-carbon-woven-strap",
    "name": "CUPRA CARBON MATTE KEY CASE & LEATHER RING",
    "brand": "cupra",
    "category": "keyscover",
    "fitment": "Cupra Smart Key Fob",
    "description": "Matte 3D twill carbon textured shell paired with a braided leather keychain strap and precision installation screwdriver.",
    "image": "images/cupra_key_carbon_braided_front.jpg",
    "images": [
      "images/cupra_key_carbon_braided_front.jpg",
      "images/cupra_key_carbon_braided_back.jpg"
    ]
  },
  {
    "id": "cupra-key-woodgrain-metal-armor",
    "name": "CUPRA WOODGRAIN & GUNMETAL ARMOR KEY CASE",
    "brand": "cupra",
    "category": "keyscover",
    "fitment": "Cupra Smart Key Fob",
    "description": "Luxury dark natural woodgrain back inlay paired with high-durability gunmetal alloy armor cage and precision assembly hardware.",
    "image": "images/cupra_key_woodgrain_armor_back.jpg",
    "images": [
      "images/cupra_key_woodgrain_armor_back.jpg",
      "images/cupra_key_woodgrain_armor_front.jpg"
    ]
  },
  {
    "id": "cupra-key-carbon-metal-armor",
    "name": "CUPRA CARBON & GUNMETAL ARMOR KEY CASE",
    "brand": "cupra",
    "category": "keyscover",
    "fitment": "Cupra Smart Key Fob",
    "description": "Sport carbon weave rear panel with embossed Cupra emblem housed in a rugged gunmetal protective alloy shell.",
    "image": "images/cupra_key_carbon_armor_back.jpg",
    "images": [
      "images/cupra_key_carbon_armor_back.jpg",
      "images/cupra_key_carbon_armor_front.jpg"
    ]
  },
  {
    "id": "cupra-cnc-bronze-paddle-shifters",
    "name": "CUPRA CNC BRONZE EXTENDED PADDLE SHIFTERS",
    "brand": "cupra",
    "category": "padelshifts",
    "fitment": "Cupra Formentor, Leon, Ateca (Steering Wheel)",
    "description": "Billet CNC aircraft aluminum paddle extensions finished in signature Cupra anodized copper bronze. Contoured finger grip rear profiling.",
    "image": "images/cupra_paddles_bronze_front.jpg",
    "images": [
      "images/cupra_paddles_bronze_front.jpg",
      "images/cupra_paddles_bronze_back.jpg"
    ]
  },
  {
    "id": "cupra-sport-steering-wheel-cover",
    "name": "CUPRA SPORT STEERING WHEEL COVER (COPPER)",
    "brand": "cupra",
    "category": "coverwheelsteering",
    "fitment": "Universal 37-38cm / Cupra Cockpit",
    "description": "Perforated black leather sport grip with aerodynamic copper contouring and centered copper 3D Cupra emblem at 12 o clock.",
    "image": "images/cupra_steering_cover_full.jpg",
    "images": [
      "images/cupra_steering_cover_full.jpg",
      "images/cupra_steering_cover_grip.jpg",
      "images/cupra_steering_cover_emblem.jpg"
    ]
  },
  {
    "id": "cupra-racing-seatbelt-webbing",
    "name": "CUPRA RACING SEATBELT WEBBING ROLL",
    "brand": "cupra",
    "category": "seatbelt",
    "fitment": "Universal / All Cupra Cockpits",
    "description": "FIA-grade high tensile polyester seatbelt webbing roll featuring dark carbon twill weave center, copper side borders and repeated Cupra motif.",
    "image": "images/cupra_seatbelt_racing_roll_banner.jpg",
    "images": [
      "images/cupra_seatbelt_racing_roll_banner.jpg",
      "images/cupra_seatbelt_racing_roll_top.jpg"
    ]
  },
  {
    "id": "cupra-seatbelt-silencer-clips",
    "name": "CUPRA SEATBELT SILENCER & EXTENSION CLIPS",
    "brand": "cupra",
    "category": "seatbelt",
    "fitment": "Universal Cupra Seatbelt Receivers",
    "description": "Gunmetal alloy seatbelt alarm silencer and extension inserts featuring polished high-gloss Cupra logo faceplates.",
    "image": "images/cupra_seatbelt_clip_logo.jpg",
    "images": [
      "images/cupra_seatbelt_clip_logo.jpg",
      "images/cupra_seatbelt_clip_front_back.jpg"
    ]
  },
  {
    "id": "cupra-custom-floor-mats-set",
    "name": "CUPRA CUSTOM CAR FLOOR MATS (5-PIECE SET)",
    "brand": "cupra",
    "category": "carfloormats",
    "fitment": "Cupra Formentor, Leon, Ateca",
    "description": "Complete 5-piece automotive carpet floor mat ensemble with reinforced non-slip driver heel pad and heavy embroidered copper Cupra badge.",
    "image": "images/cupra_floor_mats_complete_set.jpg",
    "images": [
      "images/cupra_floor_mats_complete_set.jpg"
    ]
  },
  {
    "id": "cupra-tobb-wheel-caps-copper-4pcs",
    "name": "CUPRA WHEEL CENTER CAPS - COPPER 3D (4 PCS)",
    "brand": "cupra",
    "category": "tobb",
    "fitment": "Cupra Factory & Aftermarket Alloy Wheels",
    "description": "Full 4-piece wheel center hub cap kit with OEM clip retention system. Textured matte black surface with raised 3D copper Cupra insignia.",
    "image": "images/cupra_wheel_caps_copper_set.jpg",
    "images": [
      "images/cupra_wheel_caps_copper_set.jpg",
      "images/cupra_wheel_cap_copper_front.jpg",
      "images/cupra_wheel_cap_clips_back.jpg",
      "images/cupra_wheel_cap_installed_rim.jpg"
    ]
  },
  {
    "id": "cupra-wheel-caps-silver-chrome-4pcs",
    "name": "CUPRA WHEEL CENTER BADGES - SILVER (4 PCS)",
    "brand": "cupra",
    "category": "tobb",
    "fitment": "Wheel Cap Surface / Hub Face",
    "description": "4-piece high-impact acrylic wheel hub emblem overlays with mirror silver chrome Cupra logo on deep gloss black backing.",
    "image": "images/cupra_wheel_badges_silver_set.jpg",
    "images": [
      "images/cupra_wheel_badges_silver_set.jpg"
    ]
  },
  {
    "id": "cupra-wheel-caps-gold-bronze-4pcs",
    "name": "CUPRA WHEEL CENTER BADGES - GOLD (4 PCS)",
    "brand": "cupra",
    "category": "tobb",
    "fitment": "Wheel Cap Surface / Hub Face",
    "description": "4-piece acrylic wheel hub badges featuring vibrant metallic gold/bronze Cupra insignia on mirror gloss black.",
    "image": "images/cupra_wheel_badges_gold_set.jpg",
    "images": [
      "images/cupra_wheel_badges_gold_set.jpg"
    ]
  },
  {
    "id": "cupra-copper-rear-trunk-lettering",
    "name": "CUPRA 3D REAR TRUNK LETTERING (COPPER BRONZE)",
    "brand": "cupra",
    "category": "carnameslogo",
    "fitment": "Rear Tailgate / Trunk Lid",
    "description": "OEM specification 3D individual lettering spellout CUPRA in signature high-luster copper bronze with pre-aligned automotive adhesive template.",
    "image": "images/cupra_lettering_copper_single.jpg",
    "images": [
      "images/cupra_lettering_copper_single.jpg",
      "images/cupra_lettering_copper_pack.jpg",
      "images/cupra_lettering_copper_topdown.jpg"
    ]
  },
  {
    "id": "cupra-black-rear-trunk-lettering",
    "name": "CUPRA 3D REAR TRUNK LETTERING (GLOSS BLACK)",
    "brand": "cupra",
    "category": "carnameslogo",
    "fitment": "Rear Tailgate / Trunk Lid",
    "description": "Stealth gloss piano black 3D trunk lettering in factory spacing template with heavy-duty weather-sealed automotive 3M adhesive.",
    "image": "images/cupra_lettering_black_pack.jpg",
    "images": [
      "images/cupra_lettering_black_pack.jpg"
    ]
  },
  {
    "id": "cupra-3d-triangle-emblems-bronze-black",
    "name": "CUPRA 3D TRIANGLE METAL EMBLEMS (BRONZE & BLACK)",
    "brand": "cupra",
    "category": "carnameslogo",
    "fitment": "Front Grille, Tailgate, Fenders",
    "description": "Chiseled 3D metal alloy triangle badges available in antique brushed bronze and gloss jet black.",
    "image": "images/cupra_emblems_collection_bronze_black.jpg",
    "images": [
      "images/cupra_emblems_collection_bronze_black.jpg",
      "images/cupra_emblems_quad_bronze_black.jpg",
      "images/cupra_emblems_quad_bronze_all.jpg"
    ]
  },
  {
    "id": "cupra-mini-steering-emblems-chrome-black",
    "name": "CUPRA MINI TRIANGLE BADGES (CHROME & BLACK)",
    "brand": "cupra",
    "category": "steeringwheelsymbols",
    "fitment": "Steering Wheel Center, Smart Key, Interior Trim",
    "description": "Miniature metal adhesive 3D Cupra triangle badges for steering wheel spokes, key fobs, or dashboard accents.",
    "image": "images/cupra_mini_emblems_chrome_black.jpg",
    "images": [
      "images/cupra_mini_emblems_chrome_black.jpg"
    ]
  },
  {
    "id": "cupra-checkered-racing-flag-grille-badge",
    "name": "CUPRA CHECKERED RACING FLAG EMBLEM",
    "brand": "cupra",
    "category": "carnameslogo",
    "fitment": "Front Radiator Grille / Rear Trunk",
    "description": "Enamelled motorsport badge featuring Cupra emblem with racing checkered flag and red accent bar.",
    "image": "images/cupra_badge_checkered_flag.jpg",
    "images": [
      "images/cupra_badge_checkered_flag.jpg",
      "images/cupra_badge_collection_shark.jpg"
    ]
  },
  {
    "id": "cupra-heritage-leather-keychains",
    "name": "CUPRA HERITAGE LEATHER KEYCHAINS (TRIO)",
    "brand": "cupra",
    "category": "medals",
    "fitment": "Key Fob / Keyring",
    "description": "Vegetable-tanned genuine leather strap keychains with heat-stamped Cupra logo and matte gunmetal clasp hardware.",
    "image": "images/cupra_leather_keychains_trio.jpg",
    "images": [
      "images/cupra_leather_keychains_trio.jpg",
      "images/cupra_leather_keychains_display.jpg"
    ]
  },
  {
    "id": "cupra-metallic-round-enamel-keychains",
    "name": "CUPRA HEAVY METAL CIRCULAR KEYCHAINS",
    "brand": "cupra",
    "category": "medals",
    "fitment": "Key Fob / Keyring",
    "description": "Solid die-cast medal keyring with dual-hinged joint. Gloss red and piano black baked enamel with 3D chrome Cupra logo.",
    "image": "images/cupra_metal_round_keychains_quad.jpg",
    "images": [
      "images/cupra_metal_round_keychains_quad.jpg",
      "images/cupra_metal_round_keychains_pair.jpg"
    ]
  },
  {
    "id": "cupra-3d-metal-triangle-keychains",
    "name": "CUPRA 3D METAL TRIANGLE KEYCHAINS",
    "brand": "cupra",
    "category": "medals",
    "fitment": "Key Fob / Keyring",
    "description": "Geometric open-frame metal alloy Cupra triangle pendant keychains in brilliant chrome silver and tactical matte black.",
    "image": "images/cupra_keychain_triangle_pair.jpg",
    "images": [
      "images/cupra_keychain_triangle_pair.jpg",
      "images/cupra_keychain_triangle_chrome_hang.jpg",
      "images/cupra_keychain_triangle_chrome_flat.jpg"
    ]
  },
  {
    "id": "cupra-carbon-teal-racing-keychain",
    "name": "CUPRA RACING CARBON & TEAL KEYCHAIN",
    "brand": "cupra",
    "category": "medals",
    "fitment": "Key Fob / Keyring",
    "description": "High-density woven racing ribbon with authentic carbon fiber center and turquoise motorsport stripe, locked with engraved Cupra clasp.",
    "image": "images/cupra_carbon_teal_strap_keychain.jpg",
    "images": [
      "images/cupra_carbon_teal_strap_keychain.jpg"
    ]
  },
  {
    "id": "cupra-checkered-flag-keyring",
    "name": "CUPRA MOTORSPORT CHECKERED FLAG KEYRING",
    "brand": "cupra",
    "category": "medals",
    "fitment": "Key Fob / Keyring",
    "description": "Slimline enameled zinc alloy bar keychain with Cupra racing typography and checkered motorsport flag.",
    "image": "images/cupra_keyring_flag_flat.jpg",
    "images": [
      "images/cupra_keyring_flag_flat.jpg",
      "images/cupra_keyring_flag_hang.jpg"
    ]
  },
  {
    "id": "cupra-rearview-mirror-hanging-ornament",
    "name": "CUPRA REARVIEW MIRROR HANGING MEDAL",
    "brand": "cupra",
    "category": "medals",
    "fitment": "Interior Rearview Mirror / Cockpit",
    "description": "Large stylized Cupra symbol acrylic pendant with suede suspension cord for cockpit rearview mirror customization.",
    "image": "images/cupra_mirror_pendant_red.jpg",
    "images": [
      "images/cupra_mirror_pendant_red.jpg",
      "images/cupra_mirror_pendant_grey.jpg"
    ]
  },
  {
    "id": "cupra-copper-brake-caliper-covers",
    "name": "CUPRA COPPER BRAKE CALIPER COVERS (PAIR)",
    "brand": "cupra",
    "category": "calipercovers",
    "fitment": "Cupra Formentor, Leon, Ateca (Front / Rear)",
    "description": "High-temperature resistant aluminum brake caliper covers finished in signature Cupra metallic copper bronze with black embossed Cupra racing insignia.",
    "image": "images/cupra_brake_caliper_covers_copper.jpg",
    "images": [
      "images/cupra_brake_caliper_covers_copper.jpg"
    ]
  }
];

function getCatalogData() {
  try {
    const saved = localStorage.getItem('koko_catalog_data');
    if (saved) {
      const parsed = JSON.parse(saved);
      let prods = Array.isArray(parsed) ? parsed : (parsed && Array.isArray(parsed.products) ? parsed.products : null);
      if (prods && prods.length >= DEFAULT_PRODUCTS.length) {
        return {
          brands: (parsed && Array.isArray(parsed.brands) && parsed.brands.length > 0) ? parsed.brands : DEFAULT_CAR_BRANDS,
          categories: (parsed && Array.isArray(parsed.categories) && parsed.categories.length > 0) ? parsed.categories : DEFAULT_CATEGORIES,
          products: prods
        };
      }
    }
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
