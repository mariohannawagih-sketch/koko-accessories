/**
 * KOKO ACCESSORIES - CATALOG DATABASE
 * Auto-saved directly to: D:\projects\koko accessories\products.js
 * Last updated: 2026-11-25 03:10:00
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
    "id": "audi",
    "name": "AUDI",
    "logo": "AUDI"
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
  },
  {
    "id": "volkswagen",
    "name": "VOLKSWAGEN",
    "logo": "VOLKSWAGEN"
  },
  {
    "id": "hyundai",
    "name": "HYUNDAI",
    "logo": "HYUNDAI"
  },
  {
    "id": "jeep",
    "name": "JEEP",
    "logo": "JEEP"
  },
  {
    "id": "fiat",
    "name": "FIAT",
    "logo": "FIAT"
  },
  {
    "id": "alfaromeo",
    "name": "ALFA ROMEO",
    "logo": "ALFA ROMEO"
  },
  {
    "id": "toyota",
    "name": "TOYOTA",
    "logo": "TOYOTA"
  },
  {
    "id": "universal",
    "name": "UNIVERSAL",
    "logo": "UNIVERSAL"
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
    "id": "skoda-vrs-black-badge",
    "name": "SKODA VRS BLACK EDITION TRUNK EMBLEM",
    "brand": "skoda",
    "category": "tags",
    "fitment": "Skoda Octavia, Superb, Kodiaq, Karoq (vRS Models)",
    "description": "High-gloss black finish vRS racing badge with vibrant red slash accent. Engineered for rear trunk lid OEM styling with automotive adhesive.",
    "isSoldOut": false,
    "image": "images/skoda_vrs_black_badge.jpg",
    "images": [
      "images/skoda_vrs_black_badge.jpg",
      "images/skoda_mwqnjmb9_1795281630.jpg"
    ]
  },
  {
    "id": "skoda-kodiaq-sports-pedals",
    "name": "SKODA KODIAQ BRUSHED ALUMINUM SPORTS PEDALS SET",
    "brand": "skoda",
    "category": "padel shifts",
    "fitment": "Skoda Kodiaq, Karoq, Superb, Octavia (DSG / Automatic)",
    "description": "Brushed aluminum accelerator and brake pedals featuring engraved KODIAQ logo with molded anti-slip rubber pads for superior grip.",
    "isSoldOut": false,
    "image": "images/skoda_kodiaq_sports_pedals.jpg",
    "images": [
      "images/skoda_kodiaq_sports_pedals.jpg"
    ]
  },
  {
    "id": "audi-rs5-black-red-emblem",
    "name": "AUDI RS5 GLOSS BLACK & RED GRILLE / TRUNK EMBLEM",
    "brand": "audirs",
    "category": "car names logo",
    "fitment": "Audi RS5 / A5 / S5 (B8 / B9 / B9.5)",
    "description": "High-gloss black RS5 badge with precision racing red inlay. Includes mounting clips for front grille and adhesive backing for rear trunk lid.",
    "isSoldOut": false,
    "image": "images/audi_rs5_black_red_emblem_1.jpg",
    "images": [
      "images/audi_rs5_black_red_emblem_1.jpg",
      "images/audi_rs5_black_red_emblem_2.jpg",
      "images/audi_rs5_black_red_emblem_3.jpg",
      "images/audi_rs5_black_red_emblem_4.jpg",
      "images/audi_rs5_black_red_emblem_5.jpg"
    ]
  },
  {
    "id": "audi-rs3-black-red-emblem",
    "name": "AUDI RS3 GLOSS BLACK & RED GRILLE / TRUNK EMBLEM",
    "brand": "audirs",
    "category": "car names logo",
    "fitment": "Audi RS3 / A3 / S3 (8P / 8V / 8Y)",
    "description": "Factory styling black and red RS3 emblem badge crafted from durable automotive-grade ABS. Weatherproof, UV-resistant finish.",
    "isSoldOut": false,
    "image": "images/audi_rs3_black_red_emblem_1.jpg",
    "images": [
      "images/audi_rs3_black_red_emblem_1.jpg",
      "images/audi_rs3_black_red_emblem_2.jpg",
      "images/audi_rs3_black_red_emblem_3.jpg"
    ]
  },
  {
    "id": "audi-s3-gloss-black-red-emblem",
    "name": "AUDI S3 GLOSS BLACK & RED SPORT EMBLEM",
    "brand": "audislien",
    "category": "car names logo",
    "fitment": "Audi S3 / A3 (8V / 8Y Chassis)",
    "description": "Premium gloss black S3 badge with racing red parallelogram accent. Engineered for direct OEM fitment.",
    "isSoldOut": false,
    "image": "images/audi_s3_gloss_black_red_emblem_1.jpg",
    "images": [
      "images/audi_s3_gloss_black_red_emblem_1.jpg",
      "images/audi_s3_gloss_black_red_emblem_2.jpg"
    ]
  },
  {
    "id": "audi-rs5-red-chrome-emblem",
    "name": "AUDI RS5 RED & CHROME TRUNK EMBLEM",
    "brand": "audirs",
    "category": "car names logo",
    "fitment": "Audi RS5 / A5 / S5 (All Generations)",
    "description": "Classic mirror-polished chrome RS5 rear trunk badge featuring red motorsport diamond accent.",
    "isSoldOut": false,
    "image": "images/audi_rs5_red_chrome_emblem.jpg",
    "images": [
      "images/audi_rs5_red_chrome_emblem.jpg"
    ]
  },
  {
    "id": "audi-rs-black-red-trunk-badge",
    "name": "AUDI RS RED DIAMOND GLOSS BLACK TRUNK BADGE",
    "brand": "audirs",
    "category": "car names logo",
    "fitment": "Audi RS Models (RS3, RS4, RS5, RS6, RS7, TT RS)",
    "description": "Universal Audi Sport RS emblem badge in gloss black with red racing rhombus, automotive self-adhesive backing.",
    "isSoldOut": false,
    "image": "images/audi_rs_black_red_trunk_badge_1.jpg",
    "images": [
      "images/audi_rs_black_red_trunk_badge_1.jpg",
      "images/audi_rs_black_red_trunk_badge_2.jpg"
    ]
  },
  {
    "id": "audi-ttrs-chrome-trunk-emblem",
    "name": "AUDI TT RS CHROME & RED MOTORSPORT EMBLEM",
    "brand": "audirs",
    "category": "car names logo",
    "fitment": "Audi TT / TT RS / TTS (8J / 8S)",
    "description": "Mirror chrome finish TT RS trunk badge with OEM styling and precision alignment transfer tape.",
    "isSoldOut": false,
    "image": "images/audi_ttrs_chrome_trunk_emblem_1.jpg",
    "images": [
      "images/audi_ttrs_chrome_trunk_emblem_1.jpg",
      "images/audi_ttrs_chrome_trunk_emblem_2.jpg"
    ]
  },
  {
    "id": "audi-a3-black-red-sport-badge",
    "name": "AUDI A3 RED ACCENT & GLOSS BLACK REAR EMBLEM",
    "brand": "audislien",
    "category": "car names logo",
    "fitment": "Audi A3 Sportback & Sedan (8V / 8Y)",
    "description": "Striking red rhombus emblem with gloss black A3 rear badge kit, direct replacement.",
    "isSoldOut": false,
    "image": "images/audi_a3_black_red_sport_badge.jpg",
    "images": [
      "images/audi_a3_black_red_sport_badge.jpg"
    ]
  },
  {
    "id": "audi-a3-chrome-trunk-letters",
    "name": "AUDI A3 OEM CHROME REAR TRUNK LETTERING",
    "brand": "audi",
    "category": "car names logo",
    "fitment": "Audi A3 All Generations",
    "description": "Factory chrome-finish A3 individual letters emblem badge with factory curvature alignment template.",
    "isSoldOut": false,
    "image": "images/audi_a3_chrome_trunk_letters.jpg",
    "images": [
      "images/audi_a3_chrome_trunk_letters.jpg"
    ]
  },
  {
    "id": "audi-q5-chrome-trunk-letters",
    "name": "AUDI Q5 OEM CHROME REAR TRUNK LETTERING",
    "brand": "audi",
    "category": "car names logo",
    "fitment": "Audi Q5 / SQ5 SUV (8R / FY)",
    "description": "Precision chrome Q5 tailgate emblem badge with 3M automotive adhesive for secure long-lasting fit.",
    "isSoldOut": false,
    "image": "images/audi_q5_chrome_trunk_letters.jpg",
    "images": [
      "images/audi_q5_chrome_trunk_letters.jpg"
    ]
  },
  {
    "id": "audi-30-tfsi-chrome-letters",
    "name": "AUDI 30 TFSI CHROME ENGINE DISPLACEMENT BADGE",
    "brand": "audi",
    "category": "car names logo",
    "fitment": "Audi A3, A4, Q2, Q3 (30 TFSI Models)",
    "description": "Original chrome 30 TFSI tailgate lettering badge, pre-spaced on factory transfer sheet.",
    "isSoldOut": false,
    "image": "images/audi_30_tfsi_chrome_letters.jpg",
    "images": [
      "images/audi_30_tfsi_chrome_letters.jpg"
    ]
  },
  {
    "id": "audi-quattro-gecko-lizard-mascot",
    "name": "AUDI QUATTRO GECKO / LIZARD 3D CHROME MASCOT EMBLEM",
    "brand": "audi",
    "category": "tags",
    "fitment": "Universal Audi Fitment (Grille / Trunk / Interior / Dash)",
    "description": "Iconic legendary Audi Quattro Gecko lizard 3D chrome emblem, precision metal casting with strong adhesive base.",
    "isSoldOut": false,
    "image": "images/audi_quattro_gecko_lizard_mascot_1.jpg",
    "images": [
      "images/audi_quattro_gecko_lizard_mascot_1.jpg",
      "images/audi_quattro_gecko_lizard_mascot_2.jpg"
    ]
  },
  {
    "id": "audi-quattro-chrome-badges-pair",
    "name": "AUDI QUATTRO MIRROR CHROME RECTANGLE BADGES",
    "brand": "audi",
    "category": "tags",
    "fitment": "Audi All Quattro AWD Models",
    "description": "Sleek chrome Quattro script badges for interior dash trim, side fenders, or rear trunk lid.",
    "isSoldOut": false,
    "image": "images/audi_quattro_chrome_badges_pair_1.jpg",
    "images": [
      "images/audi_quattro_chrome_badges_pair_1.jpg",
      "images/audi_quattro_chrome_badges_pair_2.jpg"
    ]
  },
  {
    "id": "audi-sline-chrome-red-emblem-stack",
    "name": "AUDI S LINE CHROME & RED FENDER EMBLEMS (SET)",
    "brand": "audislien",
    "category": "tags",
    "fitment": "Audi S-Line Models (A3, A4, A5, A6, Q3, Q5, Q7)",
    "description": "High-gloss chrome finish with bold red racing S-Line inset. Ideal for front quarter fenders and trunk lid.",
    "isSoldOut": false,
    "image": "images/audi_sline_chrome_red_emblem_stack_1.jpg",
    "images": [
      "images/audi_sline_chrome_red_emblem_stack_1.jpg",
      "images/audi_sline_chrome_red_emblem_stack_2.jpg",
      "images/audi_sline_chrome_red_emblem_stack_3.jpg",
      "images/audi_sline_chrome_red_emblem_stack_4.jpg"
    ]
  },
  {
    "id": "audi-steering-wheel-rings-frame-chrome",
    "name": "AUDI STEERING WHEEL CHROME 4-RINGS LOGO SURROUND TRIM",
    "brand": "audislien",
    "category": "steering wheel symbols",
    "fitment": "Audi A3, A4, A5, A6, A7, Q3, Q5, Q7 Steering Wheels",
    "description": "Mirror chrome electroplated surround bezel and 4-rings center trim frame. Snaps over steering wheel horn button.",
    "isSoldOut": false,
    "image": "images/audi_steering_wheel_rings_frame_chrome_1.jpg",
    "images": [
      "images/audi_steering_wheel_rings_frame_chrome_1.jpg",
      "images/audi_steering_wheel_rings_frame_chrome_2.jpg",
      "images/audi_steering_wheel_rings_frame_chrome_3.jpg",
      "images/audi_steering_wheel_rings_frame_chrome_4.jpg",
      "images/audi_steering_wheel_rings_frame_chrome_5.jpg",
      "images/audi_steering_wheel_rings_frame_chrome_6.jpg",
      "images/audi_steering_wheel_rings_frame_chrome_7.jpg",
      "images/audi_steering_wheel_rings_frame_chrome_8.jpg"
    ]
  },
  {
    "id": "audi-steering-wheel-sline-silver-clip",
    "name": "AUDI STEERING WHEEL S-LINE MATTE SILVER ACCENT CLIP",
    "brand": "audislien",
    "category": "steering wheel symbols",
    "fitment": "Audi S-Line Sport Flat-Bottom Steering Wheels",
    "description": "Satin matte aluminum S-Line lower spoke badge insert. Clips securely into steering wheel base.",
    "isSoldOut": false,
    "image": "images/audi_steering_wheel_sline_silver_clip_1.jpg",
    "images": [
      "images/audi_steering_wheel_sline_silver_clip_1.jpg",
      "images/audi_steering_wheel_sline_silver_clip_2.jpg"
    ]
  },
  {
    "id": "audi-star-wheel-center-caps-grey",
    "name": "AUDI STAR 5-ARM WHEEL HUB CENTER CAPS (SET OF 4)",
    "brand": "audi",
    "category": "caliper covers",
    "fitment": "Audi Factory OEM 5-Arm Star Alloy Wheels (A3, A4, A5, A6, S4, S5)",
    "description": "Complete set of 4 titanium grey 5-arm star wheel hub caps with raised chrome Audi 4-rings emblem and secure rear retaining clips.",
    "isSoldOut": false,
    "image": "images/audi_star_wheel_center_caps_grey_1.jpg",
    "images": [
      "images/audi_star_wheel_center_caps_grey_1.jpg",
      "images/audi_star_wheel_center_caps_grey_2.jpg",
      "images/audi_star_wheel_center_caps_grey_3.jpg"
    ]
  },
  {
    "id": "audi-wheel-center-caps-gloss-black",
    "name": "AUDI PIANO BLACK WHEEL CENTER HUB CAPS (SET OF 4)",
    "brand": "audi",
    "category": "caliper covers",
    "fitment": "Audi Alloy Wheels (Standard 68mm / 60mm Center Bore)",
    "description": "Set of 4 piano black gloss wheel hub caps with polished chrome ring accents. Enhances wheel aesthetics with a sport blackout appearance.",
    "isSoldOut": false,
    "image": "images/audi_wheel_center_caps_gloss_black_1.jpg",
    "images": [
      "images/audi_wheel_center_caps_gloss_black_1.jpg",
      "images/audi_wheel_center_caps_gloss_black_2.jpg"
    ]
  },
  {
    "id": "audi-rings-gloss-black-grille-trunk-set",
    "name": "AUDI 4-RINGS GLOSS BLACKOUT FRONT GRILLE & TRUNK EMBLEMS",
    "brand": "audirs",
    "category": "car names logo",
    "fitment": "Audi A3, A4, A5, A6, RS3, RS5 (2020 - 2024)",
    "description": "Gloss black front and rear 4-rings replacement emblems kit. High-temp automotive ABS engineered for direct OEM snap-in fit.",
    "isSoldOut": false,
    "image": "images/audi_rings_gloss_black_grille_trunk_set_1.jpg",
    "images": [
      "images/audi_rings_gloss_black_grille_trunk_set_1.jpg",
      "images/audi_rings_gloss_black_grille_trunk_set_2.jpg",
      "images/audi_rings_gloss_black_grille_trunk_set_3.jpg",
      "images/audi_rings_gloss_black_grille_trunk_set_4.jpg",
      "images/audi_rings_gloss_black_grille_trunk_set_5.jpg"
    ]
  },
  {
    "id": "audi-a6-luxury-rubber-floor-mats",
    "name": "AUDI A6 LUXURY CUSTOM-FIT ALL-WEATHER FLOOR MATS (SET OF 4)",
    "brand": "audi",
    "category": "car floor mats",
    "fitment": "Audi A6 / S6 / RS6 (C7 / C8 Chassis)",
    "description": "Heavy-duty odorless vulcanized rubber floor mats with molded red A6 logos, deep channel spill containment, and anti-slip backing.",
    "isSoldOut": false,
    "image": "images/audi_a6_luxury_rubber_floor_mats.jpg",
    "images": [
      "images/audi_a6_luxury_rubber_floor_mats.jpg"
    ]
  },
  {
    "id": "audi-a7-luxury-rubber-floor-mats",
    "name": "AUDI A7 SPORTBACK CUSTOM-FIT ALL-WEATHER FLOOR MATS (SET OF 4)",
    "brand": "audi",
    "category": "car floor mats",
    "fitment": "Audi A7 / S7 / RS7 Sportback (4G / 4K Chassis)",
    "description": "Tailored custom rubber floor protection mats featuring embossed red A7 sport designation. Complete cabin front and rear coverage.",
    "isSoldOut": false,
    "image": "images/audi_a7_luxury_rubber_floor_mats.jpg",
    "images": [
      "images/audi_a7_luxury_rubber_floor_mats.jpg"
    ]
  },
  {
    "id": "audi-a8-luxury-rubber-floor-mats",
    "name": "AUDI A8 / S8 FLAGSHIP ALL-WEATHER RUBBER MATS (SET OF 4)",
    "brand": "audi",
    "category": "car floor mats",
    "fitment": "Audi A8 / A8L / S8 (D4 / D5 Chassis)",
    "description": "Executive all-weather waterproof heavy-duty floor mat system with red A8 insignia, engineered for ultimate cabin luxury protection.",
    "isSoldOut": false,
    "image": "images/audi_a8_luxury_rubber_floor_mats_1.jpg",
    "images": [
      "images/audi_a8_luxury_rubber_floor_mats_1.jpg",
      "images/audi_a8_luxury_rubber_floor_mats_2.jpg",
      "images/audi_a8_luxury_rubber_floor_mats_3.jpg"
    ]
  },
  {
    "id": "audi-sline-brushed-aluminum-sport-pedals",
    "name": "AUDI S-LINE BRUSHED ALUMINUM SPORT PEDALS SET (AUTOMATIC)",
    "brand": "audislien",
    "category": "padel shifts",
    "fitment": "Audi A3, A4, A5, A6, Q3, Q5, TT (S-Tronic / Automatic)",
    "description": "CNC machined brushed aluminum brake and accelerator pedals with anti-slip rubber grip studs. No drilling required, direct slip-on.",
    "isSoldOut": false,
    "image": "images/audi_sline_brushed_aluminum_sport_pedals.jpg",
    "images": [
      "images/audi_sline_brushed_aluminum_sport_pedals.jpg"
    ]
  },
  {
    "id": "audi-carbon-fiber-paddle-shifter-extensions",
    "name": "AUDI REAL CARBON FIBER STEERING WHEEL PADDLE EXTENSIONS",
    "brand": "audislien",
    "category": "padel shifts",
    "fitment": "Audi A3, S3, RS3, A4, S4, A5, S5, Q5 (Paddle Shifter Models)",
    "description": "Dry carbon fiber extended paddle shifters with glossy clear-coat finish and ergonomic thumb indents for lightning-fast gear changes.",
    "isSoldOut": false,
    "image": "images/audi_carbon_fiber_paddle_shifter_extensions_1.jpg",
    "images": [
      "images/audi_carbon_fiber_paddle_shifter_extensions_1.jpg",
      "images/audi_carbon_fiber_paddle_shifter_extensions_2.jpg"
    ]
  },
  {
    "id": "audi-sport-paddle-shifters-racing-red",
    "name": "AUDI SPORT ALUMINUM PADDLE SHIFTER EXTENSIONS (RACING RED)",
    "brand": "audislien",
    "category": "padel shifts",
    "fitment": "Audi S3, S4, S5, RS3, RS4, RS5, TT RS",
    "description": "Anodized CNC billet aluminum extended paddle shifters in fiery motorsport red with engraved + and - gear indicators.",
    "isSoldOut": false,
    "image": "images/audi_sport_paddle_shifters_racing_red.jpg",
    "images": [
      "images/audi_sport_paddle_shifters_racing_red.jpg"
    ]
  },
  {
    "id": "audi-sport-paddle-shifters-bronze-metallic",
    "name": "AUDI SPORT ALUMINUM PADDLE SHIFTER EXTENSIONS (BRONZE)",
    "brand": "audislien",
    "category": "padel shifts",
    "fitment": "Audi S-Line & RS Models",
    "description": "Precision crafted aluminum alloy extended shift paddles in sophisticated champagne bronze metallic.",
    "isSoldOut": false,
    "image": "images/audi_sport_paddle_shifters_bronze_metallic.jpg",
    "images": [
      "images/audi_sport_paddle_shifters_bronze_metallic.jpg"
    ]
  },
  {
    "id": "audi-gloss-carbon-key-fob-cover-shell",
    "name": "AUDI GLOSS CARBON FIBER SMART KEY FOB PROTECTIVE COVER",
    "brand": "audislien",
    "category": "keys cover",
    "fitment": "Audi 3-Button Smart Remote Key (A3, A4, A5, A6, Q5, Q7)",
    "description": "2-piece ultra-lightweight carbon pattern protective key armor case with quick-release metal clip keychain. Scratch and drop resistant.",
    "isSoldOut": false,
    "image": "images/audi_gloss_carbon_key_fob_cover_shell_1.jpg",
    "images": [
      "images/audi_gloss_carbon_key_fob_cover_shell_1.jpg",
      "images/audi_gloss_carbon_key_fob_cover_shell_2.jpg",
      "images/audi_gloss_carbon_key_fob_cover_shell_3.jpg",
      "images/audi_gloss_carbon_key_fob_cover_shell_4.jpg",
      "images/audi_gloss_carbon_key_fob_cover_shell_5.jpg",
      "images/audi_gloss_carbon_key_fob_cover_shell_6.jpg",
      "images/audi_gloss_carbon_key_fob_cover_shell_7.jpg"
    ]
  },
  {
    "id": "audi-smart-key-tpu-protective-cases-pack",
    "name": "AUDI SMART KEY TPU PROTECTIVE CASES (MULTI-COLOR COLLECTION)",
    "brand": "audi",
    "category": "keys cover",
    "fitment": "Audi Smart Keys (Red, Metallic Blue, Piano Black, Space Grey)",
    "description": "Gloss flexible TPU silicone key fob covers with chrome-edge accenting. Shields remote buttons from everyday dust and wear.",
    "isSoldOut": false,
    "image": "images/audi_smart_key_tpu_protective_cases_pack.jpg",
    "images": [
      "images/audi_smart_key_tpu_protective_cases_pack.jpg"
    ]
  },
  {
    "id": "audi-smart-key-replacement-shell-piano-black",
    "name": "AUDI 3-BUTTON SMART KEY FOB REPLACEMENT SHELL (PIANO BLACK)",
    "brand": "audi",
    "category": "keys",
    "fitment": "Audi Smart Keys (A4, A5, Q5, A6, A7, A8)",
    "description": "Brand-new OEM replacement key fob casing with chrome 4-rings logo, battery tray, and uncut emergency blade.",
    "isSoldOut": false,
    "image": "images/audi_smart_key_replacement_shell_piano_black_1.jpg",
    "images": [
      "images/audi_smart_key_replacement_shell_piano_black_1.jpg",
      "images/audi_smart_key_replacement_shell_piano_black_2.jpg",
      "images/audi_smart_key_replacement_shell_piano_black_3.jpg",
      "images/audi_smart_key_replacement_shell_piano_black_4.jpg",
      "images/audi_smart_key_replacement_shell_piano_black_5.jpg"
    ]
  },
  {
    "id": "audi-sline-leather-stainless-keychain",
    "name": "AUDI S LINE LEATHER & STAINLESS STEEL LUXURY KEYCHAIN",
    "brand": "audislien",
    "category": "medals",
    "fitment": "Universal Audi Keys",
    "description": "Handcrafted premium leather loop strap with contrast stitching and laser-engraved S-Line brushed stainless steel badge.",
    "isSoldOut": false,
    "image": "images/audi_sline_leather_stainless_keychain_1.jpg",
    "images": [
      "images/audi_sline_leather_stainless_keychain_1.jpg",
      "images/audi_sline_leather_stainless_keychain_2.jpg",
      "images/audi_sline_leather_stainless_keychain_3.jpg"
    ]
  },
  {
    "id": "audi-sline-vertical-metal-keychain",
    "name": "AUDI S LINE VERTICAL CHROME & RED METAL KEYCHAIN",
    "brand": "audislien",
    "category": "medals",
    "fitment": "Universal Audi Keys",
    "description": "Heavy solid metal vertical bar keychain featuring high-relief S-Line typography with enamel red motorsport accent.",
    "isSoldOut": false,
    "image": "images/audi_sline_vertical_metal_keychain_1.jpg",
    "images": [
      "images/audi_sline_vertical_metal_keychain_1.jpg",
      "images/audi_sline_vertical_metal_keychain_2.jpg"
    ]
  },
  {
    "id": "audi-sport-chrome-rings-keychain",
    "name": "AUDI SPORT CHROME 4-RINGS ENGRAVED METAL KEYCHAIN",
    "brand": "audi",
    "category": "medals",
    "fitment": "Universal Audi Keys",
    "description": "Mirror polished stainless steel bar keychain with laser-etched Audi 4-rings logo and Audi Sport racing script.",
    "isSoldOut": false,
    "image": "images/audi_sport_chrome_rings_keychain.jpg",
    "images": [
      "images/audi_sport_chrome_rings_keychain.jpg"
    ]
  },
  {
    "id": "audi-sport-rs-red-silhouette-keychain",
    "name": "AUDI RS RED SILHOUETTE METAL MOTORSPORT KEYCHAIN",
    "brand": "audirs",
    "category": "medals",
    "fitment": "Audi RS Owners & Enthusiasts",
    "description": "Full metal RS emblem keychain finished in vibrant gloss red enamel with heavy-duty keyring clip.",
    "isSoldOut": false,
    "image": "images/audi_sport_rs_red_silhouette_keychain.jpg",
    "images": [
      "images/audi_sport_rs_red_silhouette_keychain.jpg"
    ]
  },
  {
    "id": "audi-seatbelt-silencer-buckle-stopper-pair",
    "name": "AUDI SEATBELT SILENCER CHROME RINGS BUCKLE CLIPS (PAIR)",
    "brand": "audi",
    "category": "seat belt",
    "fitment": "Universal Audi Seatbelt Receptacles",
    "description": "Pair of heavy-duty alloy seatbelt silencer clip stoppers with raised Audi 4-rings emblem and integrated bottle opener function.",
    "isSoldOut": false,
    "image": "images/audi_seatbelt_silencer_buckle_stopper_pair.jpg",
    "images": [
      "images/audi_seatbelt_silencer_buckle_stopper_pair.jpg"
    ]
  },
  {
    "id": "audi-sline-leather-seatbelt-shoulder-pad",
    "name": "AUDI S LINE EMBROIDERED LEATHER SEATBELT COMFORT STRAP",
    "brand": "audislien",
    "category": "scat belt",
    "fitment": "Universal Audi Seatbelts",
    "description": "Soft micro-perforated breathable leather seatbelt comfort shoulder sleeve with embroidered S-Line motorsport crest and velcro closure.",
    "isSoldOut": false,
    "image": "images/audi_sline_leather_seatbelt_shoulder_pad.jpg",
    "images": [
      "images/audi_sline_leather_seatbelt_shoulder_pad.jpg"
    ]
  },
  {
    "id": "audi-sline-racing-stripe-exterior-decal-pack",
    "name": "AUDI S-LINE DUAL RACING STRIPES HOOD & ROOF DECAL PACK",
    "brand": "audislien",
    "category": "spoiler",
    "fitment": "Universal Audi Body Panels (Hood, Roof, Trunk, Rockers)",
    "description": "High-performance vinyl motorsport racing stripes in gloss white/silver. UV-stable, pressure-washer safe.",
    "isSoldOut": false,
    "image": "images/audi_sline_racing_stripe_exterior_decal_pack.jpg",
    "images": [
      "images/audi_sline_racing_stripe_exterior_decal_pack.jpg"
    ]
  },
  {
    "id": "audi-sport-rs-dashboard-parking-card-plate",
    "name": "AUDI SPORT RS METALLIC PARKING CARD & DASH VISOR EMBLEM",
    "brand": "audirs",
    "category": "tags",
    "fitment": "Audi Cockpit Interior / Windshield / Sun Visor",
    "description": "Brushed silver Audi Sport RS temporary parking telephone number plate with magnetic numeral tiles.",
    "isSoldOut": false,
    "image": "images/audi_sport_rs_dashboard_parking_card_plate.jpg",
    "images": [
      "images/audi_sport_rs_dashboard_parking_card_plate.jpg"
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
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
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-cooper-s-red-trunk-badge",
    "name": "MINI COOPER S RED METAL TRUNK EMBLEM",
    "brand": "minicooper",
    "category": "carnameslogo",
    "fitment": "Mini Cooper S F54, F55, F56, F57, Countryman F60, R56",
    "description": "Chassis-grade alloy 'S' rear emblem finished in brilliant gloss red enamel with mirror chrome outline. Automotive grade 3M adhesive backing.",
    "image": "images/mini_cooper_s_red_trunk_badge_front.jpg",
    "images": [
      "images/mini_cooper_s_red_trunk_badge_front.jpg",
      "images/mini_cooper_s_red_trunk_badge_angle.jpg",
      "images/mini_cooper_s_red_trunk_badge_pair.jpg",
      "images/mini_cooper_s_union_jack_badge_pair.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-cooper-s-chrome-letters-trunk",
    "name": "MINI COOPER S REAR TRUNK CHROME LETTERING",
    "brand": "minicooper",
    "category": "carnameslogo",
    "fitment": "Mini Cooper S Hatch, Clubman, Countryman, Convertible",
    "description": "Individual factory-spacing OEM replacement letters in triple-chrome plated alloy with red accent 'S' for trunk lid customization.",
    "image": "images/mini_cooper_s_chrome_letters_trunk.jpg",
    "images": [
      "images/mini_cooper_s_chrome_letters_trunk.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-countryman-letters-black",
    "name": "MINI COUNTRYMAN GLOSS BLACK TRUNK LETTERS",
    "brand": "minicooper",
    "category": "carnameslogo",
    "fitment": "Mini Countryman F60, R60 (All Generations)",
    "description": "Individual gloss piano black tailgate block letters with pre-aligned spacing template for rear trunk lid.",
    "image": "images/mini_countryman_letters_black_flat.jpg",
    "images": [
      "images/mini_countryman_letters_black_flat.jpg",
      "images/mini_countryman_letters_black_angled.jpg",
      "images/mini_countryman_letters_black_strip.jpg",
      "images/mini_countryman_letters_black_display.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-clubman-letters-black",
    "name": "MINI CLUBMAN GLOSS BLACK TRUNK LETTERS",
    "brand": "minicooper",
    "category": "carnameslogo",
    "fitment": "Mini Clubman F54, R55 Split Rear Doors",
    "description": "Full gloss piano black individual lettering kit engineered specifically for Clubman split barn-door rear tailgate.",
    "image": "images/mini_clubman_letters_black_strip.jpg",
    "images": [
      "images/mini_clubman_letters_black_strip.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-wings-gloss-black-grille",
    "name": "MINI GLOSS BLACK WINGS FRONT GRILLE EMBLEM",
    "brand": "minicooper",
    "category": "carnameslogo",
    "fitment": "Mini Cooper F55, F56, F57 LCI & LCI2 Front Grille",
    "description": "OEM-fit front radiator grille wing badge in high-gloss piano black with factory rear mounting tabs and locking clips.",
    "image": "images/mini_wings_gloss_black_front.jpg",
    "images": [
      "images/mini_wings_gloss_black_front.jpg",
      "images/mini_wings_gloss_black_back_tabs.jpg",
      "images/mini_wings_gloss_black_alt_front.jpg",
      "images/mini_wings_gloss_black_alt_back.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-wings-matte-black-pair",
    "name": "MINI MATTE BLACK WINGS EMBLEM SET (HOOD & TRUNK)",
    "brand": "minicooper",
    "category": "carnameslogo",
    "fitment": "Mini Cooper R56, R57, R58, F55, F56, F54, F60",
    "description": "Pair of tactical stealth matte black Mini wings badges for hood front and boot rear de-chroming.",
    "image": "images/mini_wings_matte_black_pair.jpg",
    "images": [
      "images/mini_wings_matte_black_pair.jpg",
      "images/mini_wings_matte_black_single.jpg",
      "images/mini_wings_matte_black_with_cap.jpg",
      "images/mini_wings_matte_black_display.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-wings-chrome-oem-pair",
    "name": "MINI CHROME WINGS OEM EMBLEM PAIR (HOOD & BOOT)",
    "brand": "minicooper",
    "category": "carnameslogo",
    "fitment": "Mini One, Cooper, Cooper S, JCW (All Chassis)",
    "description": "Factory specification brilliant mirror chrome winged insignia with deep black high-gloss center medallion.",
    "image": "images/mini_wings_chrome_front_closeup.jpg",
    "images": [
      "images/mini_wings_chrome_front_closeup.jpg",
      "images/mini_wings_chrome_pair.jpg",
      "images/mini_wings_chrome_pack_large.jpg",
      "images/mini_wings_chrome_pack_small.jpg",
      "images/mini_wings_chrome_display.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-wings-black-red-sport",
    "name": "MINI GLOSS BLACK & RED WINGS SPORT EMBLEM",
    "brand": "minicooper",
    "category": "carnameslogo",
    "fitment": "Mini Cooper S, JCW F54, F55, F56, F57, F60",
    "description": "Performance edition wings emblem featuring high-gloss piano black outer frame with striking crimson red center ring.",
    "image": "images/mini_wings_black_red_closeup.jpg",
    "images": [
      "images/mini_wings_black_red_closeup.jpg",
      "images/mini_wings_black_red_pair.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-wings-crimson-red-edition",
    "name": "MINI CRIMSON RED WINGS EDITION EMBLEM",
    "brand": "minicooper",
    "category": "carnameslogo",
    "fitment": "Mini Cooper S, John Cooper Works (Hood / Trunk)",
    "description": "Special edition winged badge in deep metallic crimson red with contrasting gloss black Mini wordmark center.",
    "image": "images/mini_wings_crimson_red_closeup.jpg",
    "images": [
      "images/mini_wings_crimson_red_closeup.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-jcw-oval-chrome-red-emblem",
    "name": "MINI JOHN COOPER WORKS (JCW) CHROME OVAL EMBLEM",
    "brand": "minicooper",
    "category": "carnameslogo",
    "fitment": "Front Grille / Tailgate / Side Scuttles",
    "description": "Precision embossed John Cooper Works motorsport insignia with baked enamel red highlight on polished chrome alloy plate.",
    "image": "images/mini_jcw_oval_chrome_red_trio.jpg",
    "images": [
      "images/mini_jcw_oval_chrome_red_trio.jpg",
      "images/mini_jcw_oval_chrome_red_pair.jpg",
      "images/mini_jcw_oval_chrome_red_single.jpg",
      "images/mini_jcw_oval_chrome_red_pack.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-jcw-blackout-grille-emblem",
    "name": "MINI JCW BLACKOUT FRONT GRILLE EMBLEM KIT",
    "brand": "minicooper",
    "category": "carnameslogo",
    "fitment": "Mini Cooper S / JCW Front Radiator Honeycomb Grille",
    "description": "Tactical blackout John Cooper Works metal badge equipped with dual bolt-through grille bracket hardware.",
    "image": "images/mini_jcw_blackout_grille_hardware.jpg",
    "images": [
      "images/mini_jcw_blackout_grille_hardware.jpg",
      "images/mini_jcw_blackout_emblem_single.jpg",
      "images/mini_jcw_blackout_badge_wide.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-motorsport-international-badge",
    "name": "MINI MOTORSPORT INTERNATIONAL LIMITED BADGE",
    "brand": "minicooper",
    "category": "carnameslogo",
    "fitment": "Rear Tailgate / Dashboard / Fender",
    "description": "Brushed aluminum motorsport commemorative plate with racing checkered flag and engraved serial typography.",
    "image": "images/mini_motorsport_international_badge.jpg",
    "images": [
      "images/mini_motorsport_international_badge.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-jcw-wheel-center-caps",
    "name": "MINI JCW WHEEL CENTER CAPS WITH RED RING (SET OF 4)",
    "brand": "minicooper",
    "category": "medals",
    "fitment": "OEM & Aftermarket Mini Alloy Wheels (54mm / 56mm)",
    "description": "Set of 4 John Cooper Works wheel hub center caps with piano black face and vivid motorsport red perimeter accent ring.",
    "image": "images/mini_jcw_wheel_center_caps_set.jpg",
    "images": [
      "images/mini_jcw_wheel_center_caps_set.jpg",
      "images/mini_jcw_wheel_center_cap_installed.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-wheel-caps-piano-black",
    "name": "MINI PIANO BLACK WHEEL CENTER HUB CAPS (SET OF 4)",
    "brand": "minicooper",
    "category": "medals",
    "fitment": "Mini Cooper Alloy Rims (All Generations)",
    "description": "Full gloss piano black concave wheel center caps with chrome embossed Mini typography for clean stealth wheel styling.",
    "image": "images/mini_wheel_caps_piano_black_quad.jpg",
    "images": [
      "images/mini_wheel_caps_piano_black_quad.jpg",
      "images/mini_wheel_caps_piano_black_set5.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-antenna-union-jack",
    "name": "MINI SHORT ROOF SPORT ANTENNA (UNION JACK)",
    "brand": "minicooper",
    "category": "tobb",
    "fitment": "All Mini Cooper Roof Antenna Mounts (M5 & M6 Thread)",
    "description": "10.5cm CNC billet aluminum and carbon fiber short stubby roof antenna featuring classic British Union Jack flag motif.",
    "image": "images/mini_antenna_union_jack_closeup.jpg",
    "images": [
      "images/mini_antenna_union_jack_closeup.jpg",
      "images/mini_antenna_union_jack_trio.jpg",
      "images/mini_antenna_union_jack_quad.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-antenna-checkered",
    "name": "MINI SHORT ROOF SPORT ANTENNA (CHECKERED RACING)",
    "brand": "minicooper",
    "category": "tobb",
    "fitment": "All Mini Cooper Roof Antenna Mounts (M5 & M6 Thread)",
    "description": "High-density carbon fiber and alloy stubby aerial with motorsport checkered flag pattern for improved clearance and aesthetics.",
    "image": "images/mini_antenna_checkered_closeup.jpg",
    "images": [
      "images/mini_antenna_checkered_closeup.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-antenna-paul-smith",
    "name": "MINI SHORT ROOF SPORT ANTENNA (PAUL SMITH STRIPES)",
    "brand": "minicooper",
    "category": "tobb",
    "fitment": "All Mini Cooper Roof Antenna Mounts (M5 & M6 Thread)",
    "description": "Designer edition short stubby roof antenna featuring iconic designer multi-color vertical motorsport stripes.",
    "image": "images/mini_antenna_paul_smith_closeup.jpg",
    "images": [
      "images/mini_antenna_paul_smith_closeup.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-model-pair-union-jack",
    "name": "MINI COOPER UNION JACK DIECAST DESK & COCKPIT MODEL (PAIR)",
    "brand": "minicooper",
    "category": "medals",
    "fitment": "Interior Dashboard / Display / Collector Fob",
    "description": "Precision metal diecast 1:36 scale Mini Cooper models in Chili Red and British Racing Green with functioning doors and Union Jack roof graphics.",
    "image": "images/mini_model_pair_front_doors_open.jpg",
    "images": [
      "images/mini_model_pair_front_doors_open.jpg",
      "images/mini_model_red_union_jack_closeup.jpg",
      "images/mini_model_green_union_jack_closeup.jpg",
      "images/mini_model_pair_roof_view.jpg",
      "images/mini_model_red_rear_view.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-keychain-cooper-s-red-metal",
    "name": "MINI COOPER S RED ENAMEL SOLID METAL KEYCHAIN",
    "brand": "minicooper",
    "category": "medals",
    "fitment": "Key Fob / Keyring",
    "description": "Solid zinc alloy 3D Cooper S letter keychain with baked vibrant red enamel inlay and heavy-duty 360 swivel carabiner.",
    "image": "images/mini_keychain_cooper_s_red_metal.jpg",
    "images": [
      "images/mini_keychain_cooper_s_red_metal.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-keychain-motorsport-ribbon",
    "name": "MINI MOTORSPORT GERMAN TRI-COLOR STRAP KEYCHAIN",
    "brand": "minicooper",
    "category": "medals",
    "fitment": "Key Fob / Keyring",
    "description": "High-tensile woven racing ribbon keychain in German tricolor stripes with laser-engraved Mini metal lock clip.",
    "image": "images/mini_keychain_motorsport_ribbon.jpg",
    "images": [
      "images/mini_keychain_motorsport_ribbon.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-sports-pedals-aluminum",
    "name": "MINI SPORT ALUMINUM & RUBBER PEDAL COVER SET",
    "brand": "minicooper",
    "category": "padelshifts",
    "fitment": "Mini Cooper One, S, JCW F54, F55, F56, F57, F60 (Automatic)",
    "description": "Brushed matte aluminum pedal covers with non-slip rubber studs and laser-engraved Mini wing insignia. Direct clip-on installation.",
    "image": "images/mini_sports_pedals_aluminum_set.jpg",
    "images": [
      "images/mini_sports_pedals_aluminum_set.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-seatbelt-silencer-clips",
    "name": "MINI SEATBELT BUCKLE ALARM STOPPER CLIPS (PAIR)",
    "brand": "minicooper",
    "category": "seatbelt",
    "fitment": "All Mini Cooper Seat Belt Buckles",
    "description": "Heavy-duty matte black alloy seatbelt chime silencer clips with laser-etched Mini wings insignia for off-road/harness use.",
    "image": "images/mini_seatbelt_silencer_clips_pair.jpg",
    "images": [
      "images/mini_seatbelt_silencer_clips_pair.jpg",
      "images/mini_seatbelt_silencer_clips_display.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-valve-stem-caps-tool-kit",
    "name": "MINI TIRE VALVE STEM CAPS & KEYCHAIN TOOL KIT",
    "brand": "minicooper",
    "category": "medals",
    "fitment": "All Mini Cooper Tires / Wheels",
    "description": "Set of 4 anti-theft hex alloy valve caps with rubber airtight seal rings and matching Mini keychain wrench spanner.",
    "image": "images/mini_valve_stem_caps_tool_kit.jpg",
    "images": [
      "images/mini_valve_stem_caps_tool_kit.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-key-fob-cover-cyan",
    "name": "MINI COOPER GLOSS CYAN SMART KEY FOB SHELL",
    "brand": "minicooper",
    "category": "keyscover",
    "fitment": "Mini Cooper 3-Button Round Smart Key (F54, F55, F56, F57, F60)",
    "description": "Gloss high-impact polycarbonate replacement key shell in vibrant electric cyan blue for round smart key fob.",
    "image": "images/mini_key_fob_cover_cyan.jpg",
    "images": [
      "images/mini_key_fob_cover_cyan.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-door-handle-scratch-guards",
    "name": "MINI DOOR HANDLE RECESS ANTI-SCRATCH GUARDS (SET OF 4)",
    "brand": "minicooper",
    "category": "tobb",
    "fitment": "Mini Cooper 3-Door, 5-Door, Clubman, Countryman",
    "description": "Clear 3D resin protective decals featuring Mini wings typography designed to prevent fingernail scratches under door handles.",
    "image": "images/mini_door_handle_scratch_guards.jpg",
    "images": [
      "images/mini_door_handle_scratch_guards.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-interior-wing-badges",
    "name": "MINI INTERIOR COCKPIT WING BADGE EMBLEMS (SET OF 4)",
    "brand": "minicooper",
    "category": "steeringwheelsymbols",
    "fitment": "Mini Cooper Steering Wheel, Speaker Grilles, Dashboard",
    "description": "Miniature chrome and Union Jack metal alloy wing badges for interior cockpit trim accents and speaker grilles.",
    "image": "images/mini_interior_wing_badges_set4.jpg",
    "images": [
      "images/mini_interior_wing_badges_set4.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "mini-jcw-door-sill-protectors",
    "name": "MINI JOHN COOPER WORKS (JCW) CARBON SILL GUARDS (PAIR)",
    "brand": "minicooper",
    "category": "tobb",
    "fitment": "Mini Cooper F55, F56, R56 Door Sills",
    "description": "Textured carbon fiber vinyl door sill entry guards with red and white John Cooper Works typography and checkered accents.",
    "image": "images/mini_jcw_door_sill_protectors.jpg",
    "images": [
      "images/mini_jcw_door_sill_protectors.jpg"
    ],
    "isSoldOut": false
  },
  {
    "id": "abarth-scorpion-squircle-emblem-set",
    "name": "ABARTH SCORPION ROUNDED SHIELD EMBLEM SET (GLOSS BLACK)",
    "brand": "abarth",
    "category": "carnameslogo",
    "fitment": "Abarth 500, 595, 695 (Front & Rear)",
    "description": "Gloss black rimmed Abarth scorpion front grille and rear tailgate emblem set with gold and red shield detailing.",
    "isSoldOut": false,
    "image": "images/catalog/abarth/abarth-scorpion-squircle-emblem-set_1.jpg",
    "images": [
      "images/catalog/abarth/abarth-scorpion-squircle-emblem-set_1.jpg",
      "images/catalog/abarth/abarth-scorpion-squircle-emblem-set_2.jpg",
      "images/catalog/abarth/abarth-scorpion-squircle-emblem-set_3.jpg"
    ]
  },
  {
    "id": "abarth-wheel-center-caps-set",
    "name": "ABARTH SCORPION WHEEL CENTER CAPS (SET OF 4)",
    "brand": "abarth",
    "category": "calipercovers",
    "fitment": "Abarth 500, 595, 695 Alloy Wheels",
    "description": "Set of 4 gloss black Abarth wheel hub center caps featuring the signature gold, red, and black scorpion shield.",
    "isSoldOut": false,
    "image": "images/catalog/abarth/abarth-wheel-center-caps-set_1.jpg",
    "images": [
      "images/catalog/abarth/abarth-wheel-center-caps-set_1.jpg"
    ]
  },
  {
    "id": "abarth-3d-scorpion-matte-black-emblem",
    "name": "ABARTH 3D SCORPION EMBLEM (MATTE BLACK)",
    "brand": "abarth",
    "category": "carnameslogo",
    "fitment": "Abarth 500, 595, 695, Punto (Trunk / Fender)",
    "description": "Matte black 3D sculpted Abarth scorpion emblem with pre-applied automotive adhesive.",
    "isSoldOut": false,
    "image": "images/catalog/abarth/abarth-3d-scorpion-matte-black-emblem_1.jpg",
    "images": [
      "images/catalog/abarth/abarth-3d-scorpion-matte-black-emblem_1.jpg"
    ]
  },
  {
    "id": "abarth-scorpion-emblems-6piece-kit",
    "name": "ABARTH SCORPION EMBLEMS & ITALIAN FLAG KIT (6 PCS)",
    "brand": "abarth",
    "category": "carnameslogo",
    "fitment": "Abarth 500, 595, 695, 124 Spider",
    "description": "Complete 6-piece Abarth styling pack including front and rear emblems and Italian flag lightning fender shields.",
    "isSoldOut": false,
    "image": "images/catalog/abarth/abarth-scorpion-emblems-6piece-kit_1.jpg",
    "images": [
      "images/catalog/abarth/abarth-scorpion-emblems-6piece-kit_1.jpg"
    ]
  },
  {
    "id": "abarth-shield-oval-gloss-black-emblem",
    "name": "ABARTH SHIELD OVAL EMBLEM (GLOSS BLACK)",
    "brand": "abarth",
    "category": "carnameslogo",
    "fitment": "Abarth 500, 595, 695 Hood & Trunk",
    "description": "Gloss black oval-shield Abarth hood and trunk emblem with red 3M backing and alignment pins.",
    "isSoldOut": false,
    "image": "images/catalog/abarth/abarth-shield-oval-gloss-black-emblem_1.jpg",
    "images": [
      "images/catalog/abarth/abarth-shield-oval-gloss-black-emblem_1.jpg",
      "images/catalog/abarth/abarth-shield-oval-gloss-black-emblem_2.jpg"
    ]
  },
  {
    "id": "alfaromeo-quadrifoglio-clover-fender-pair",
    "name": "ALFA ROMEO QUADRIFOGLIO CLOVER FENDER BADGES (PAIR)",
    "brand": "alfaromeo",
    "category": "tags",
    "fitment": "Alfa Romeo Giulia, Stelvio, Giulietta, MiTo",
    "description": "Pair of Alfa Romeo Quadrifoglio four-leaf green clover fender badges with polished chrome borders.",
    "isSoldOut": false,
    "image": "images/catalog/alfaromeo/alfaromeo-quadrifoglio-clover-fender-pair_1.jpg",
    "images": [
      "images/catalog/alfaromeo/alfaromeo-quadrifoglio-clover-fender-pair_1.jpg"
    ]
  },
  {
    "id": "audi-tfsi-gloss-black-trunk-badge",
    "name": "AUDI TFSI ENGINE BADGE (GLOSS BLACK)",
    "brand": "audi",
    "category": "tags",
    "fitment": "Audi A3, A4, A5, A6, Q3, Q5 TFSI",
    "description": "Gloss black OEM-font TFSI trunk engine displacement badge on transfer alignment sheet.",
    "isSoldOut": false,
    "image": "images/catalog/audi/audi-tfsi-gloss-black-trunk-badge_1.jpg",
    "images": [
      "images/catalog/audi/audi-tfsi-gloss-black-trunk-badge_1.jpg"
    ]
  },
  {
    "id": "audi-a4-gloss-black-trunk-letters",
    "name": "AUDI A4 REAR TRUNK LETTERING (GLOSS BLACK)",
    "brand": "audi",
    "category": "carnameslogo",
    "fitment": "Audi A4 Sedan & Avant (All Generations)",
    "description": "Gloss black Audi A4 rear trunk model lettering on clear alignment transfer sheet.",
    "isSoldOut": false,
    "image": "images/catalog/audi/audi-a4-gloss-black-trunk-letters_1.jpg",
    "images": [
      "images/catalog/audi/audi-a4-gloss-black-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "audi-star-wheel-center-cap-gloss-black",
    "name": "AUDI STAR 5-ARM WHEEL CENTER CAP (GLOSS BLACK)",
    "brand": "audi",
    "category": "calipercovers",
    "fitment": "Audi 5-Arm Star Alloy Wheels (A3, A4, A5, A6)",
    "description": "Gloss black Audi 5-arm star wheel hub center cap with chrome 4-rings center emblem and chrome lug tips.",
    "isSoldOut": false,
    "image": "images/catalog/audi/audi-star-wheel-center-cap-gloss-black_1.jpg",
    "images": [
      "images/catalog/audi/audi-star-wheel-center-cap-gloss-black_1.jpg"
    ]
  },
  {
    "id": "audi-b8-leather-metallic-tpu-key-covers",
    "name": "AUDI B8 TRIANGLE SMART KEY LEATHER & TPU COVERS (3 COLORS)",
    "brand": "audi",
    "category": "keyscover",
    "fitment": "Audi A4, A5, A6, Q5 B8 3-Button Key",
    "description": "Pack of 3 pebbled black leather smart key covers with metallic silver, red, and blue TPU frames.",
    "isSoldOut": false,
    "image": "images/catalog/audi/audi-b8-leather-metallic-tpu-key-covers_1.jpg",
    "images": [
      "images/catalog/audi/audi-b8-leather-metallic-tpu-key-covers_1.jpg"
    ]
  },
  {
    "id": "audi-b9-leather-metallic-tpu-key-covers",
    "name": "AUDI B9 VERTICAL SMART KEY LEATHER & TPU COVERS (3 COLORS)",
    "brand": "audi",
    "category": "keyscover",
    "fitment": "Audi A3, A4, A5, Q5, Q7 B9 3-Button Key",
    "description": "Pack of 3 black pebbled leather B9 smart key protective covers trimmed in blue, silver, and red metallic TPU.",
    "isSoldOut": false,
    "image": "images/catalog/audi/audi-b9-leather-metallic-tpu-key-covers_1.jpg",
    "images": [
      "images/catalog/audi/audi-b9-leather-metallic-tpu-key-covers_1.jpg"
    ]
  },
  {
    "id": "audi-a4-2017-chrome-grille-rings",
    "name": "AUDI A4 B9 CHROME 4-RINGS FRONT GRILLE EMBLEM",
    "brand": "audi",
    "category": "carnameslogo",
    "fitment": "Audi A4 B9 (2017 - 2019 Front Grille)",
    "description": "Mirror chrome 4-rings front grille emblem engineered for Audi A4 B9 2017 to 2019.",
    "isSoldOut": false,
    "image": "images/catalog/audi/audi-a4-2017-chrome-grille-rings_1.jpg",
    "images": [
      "images/catalog/audi/audi-a4-2017-chrome-grille-rings_1.jpg"
    ]
  },
  {
    "id": "audi-s4-gloss-black-red-trunk-badge",
    "name": "AUDI S4 TRUNK EMBLEM (GLOSS BLACK & RED)",
    "brand": "audi",
    "category": "tags",
    "fitment": "Audi S4 / A4 B8, B9",
    "description": "Audi S4 rear trunk emblem with red rhombus accent and gloss black lettering.",
    "isSoldOut": false,
    "image": "images/catalog/audi/audi-s4-gloss-black-red-trunk-badge_1.jpg",
    "images": [
      "images/catalog/audi/audi-s4-gloss-black-red-trunk-badge_1.jpg"
    ]
  },
  {
    "id": "audi-s5-gloss-black-red-trunk-badge",
    "name": "AUDI S5 TRUNK EMBLEM (GLOSS BLACK & RED)",
    "brand": "audi",
    "category": "tags",
    "fitment": "Audi S5 / A5 B8, B9",
    "description": "Audi S5 rear trunk emblem combining vibrant red diamond graphic and gloss black S5 characters.",
    "isSoldOut": false,
    "image": "images/catalog/audi/audi-s5-gloss-black-red-trunk-badge_1.jpg",
    "images": [
      "images/catalog/audi/audi-s5-gloss-black-red-trunk-badge_1.jpg"
    ]
  },
  {
    "id": "audi-sport-red-rhombus-metal-keychain",
    "name": "AUDI SPORT RED RHOMBUS METAL KEYCHAIN",
    "brand": "audi",
    "category": "medals",
    "fitment": "Audi Smart Key Fobs & Keyrings",
    "description": "Polished chrome metal Sport keychain accented with the signature Audi slanted red rhombus.",
    "isSoldOut": false,
    "image": "images/catalog/audi/audi-sport-red-rhombus-metal-keychain_1.jpg",
    "images": [
      "images/catalog/audi/audi-sport-red-rhombus-metal-keychain_1.jpg"
    ]
  },
  {
    "id": "audi-quattro-gecko-colored-trio",
    "name": "AUDI QUATTRO GECKO 3D EMBLEMS (BLACK, BLUE & RED TRIO)",
    "brand": "audi",
    "category": "tags",
    "fitment": "Universal Audi Exterior & Dashboard",
    "description": "Three 3D Audi Quattro gecko mascot adhesive emblems in gloss black, racing blue, and glossy red.",
    "isSoldOut": false,
    "image": "images/catalog/audi/audi-quattro-gecko-colored-trio_1.jpg",
    "images": [
      "images/catalog/audi/audi-quattro-gecko-colored-trio_1.jpg"
    ]
  },
  {
    "id": "audi-sline-black-red-fender-pair",
    "name": "AUDI S LINE FENDER & TRUNK BADGES (GLOSS BLACK & RED PAIR)",
    "brand": "audislien",
    "category": "tags",
    "fitment": "Audi S-Line A3, A4, A5, Q3, Q5, Q7",
    "description": "Matched pair of gloss black S line fender and rear trunk badges with signature red parallelogram graphic.",
    "isSoldOut": false,
    "image": "images/catalog/audislien/audi-sline-black-red-fender-pair_1.jpg",
    "images": [
      "images/catalog/audislien/audi-sline-black-red-fender-pair_1.jpg",
      "images/catalog/audislien/audi-sline-black-red-fender-pair_2.jpg"
    ]
  },
  {
    "id": "audi-sline-matte-black-red-grille-badge",
    "name": "AUDI S LINE FRONT GRILLE EMBLEM WITH MOUNTING KIT (MATTE BLACK)",
    "brand": "audislien",
    "category": "tags",
    "fitment": "Audi S-Line Front Honeycomb & Slatted Grilles",
    "description": "Matte black and red S line front grille emblem supplied complete with metal mounting bracket, rods, and nuts.",
    "isSoldOut": false,
    "image": "images/catalog/audislien/audi-sline-matte-black-red-grille-badge_1.jpg",
    "images": [
      "images/catalog/audislien/audi-sline-matte-black-red-grille-badge_1.jpg"
    ]
  },
  {
    "id": "audi-sline-chrome-red-fender-blades",
    "name": "AUDI S LINE TAPERED FENDER BLADE BADGES (CHROME PAIR)",
    "brand": "audislien",
    "category": "tags",
    "fitment": "Audi A3, A4, A5, A6, Q3, Q5 S-Line",
    "description": "Pair of tapered silver/chrome side fender blade extensions featuring red and silver S line logos.",
    "isSoldOut": false,
    "image": "images/catalog/audislien/audi-sline-chrome-red-fender-blades_1.jpg",
    "images": [
      "images/catalog/audislien/audi-sline-chrome-red-fender-blades_1.jpg"
    ]
  },
  {
    "id": "bbs-black-silver-domed-cap-overlays",
    "name": "BBS GLOSS BLACK & SILVER DOMED WHEEL CAP OVERLAYS (SET OF 4)",
    "brand": "bbs",
    "category": "calipercovers",
    "fitment": "BBS & Aftermarket Alloy Wheel Center Caps",
    "description": "Set of 4 gloss black domed wheel center cap emblems with raised metallic silver BBS lettering.",
    "isSoldOut": false,
    "image": "images/catalog/bbs/bbs-black-silver-domed-cap-overlays_1.jpg",
    "images": [
      "images/catalog/bbs/bbs-black-silver-domed-cap-overlays_1.jpg"
    ]
  },
  {
    "id": "bbs-matte-black-blank-wheel-caps",
    "name": "BBS BLANK MATTE BLACK WHEEL CENTER CAPS (SET OF 4)",
    "brand": "bbs",
    "category": "calipercovers",
    "fitment": "BBS Rims (OEM Part 09.24.030 Spec)",
    "description": "Set of 4 matte black smooth blank BBS wheel center hub caps stamped W.-Germany 09.24.030 on rear clips.",
    "isSoldOut": false,
    "image": "images/catalog/bbs/bbs-matte-black-blank-wheel-caps_1.jpg",
    "images": [
      "images/catalog/bbs/bbs-matte-black-blank-wheel-caps_1.jpg"
    ]
  },
  {
    "id": "bmw-m-gloss-black-tricolor-trunk-badge",
    "name": "BMW M TRICOLOR TRUNK BADGE (GLOSS BLACK)",
    "brand": "bmw",
    "category": "tags",
    "fitment": "BMW All M Sport & M Performance Models",
    "description": "BMW M Performance trunk badge with classic M tricolor stripes paired with a gloss black M letter.",
    "isSoldOut": false,
    "image": "images/catalog/bmw/bmw-m-gloss-black-tricolor-trunk-badge_1.jpg",
    "images": [
      "images/catalog/bmw/bmw-m-gloss-black-tricolor-trunk-badge_1.jpg"
    ]
  },
  {
    "id": "bmw-xdrive-matte-black-badge",
    "name": "BMW XDRIVE AWD TRUNK & FENDER BADGE (MATTE BLACK)",
    "brand": "bmw",
    "category": "tags",
    "fitment": "BMW X1, X3, X4, X5, X6, 3/5 Series xDrive",
    "description": "Stealth matte black xDrive emblem on precision transfer sheet for rear trunk or front fenders.",
    "isSoldOut": false,
    "image": "images/catalog/bmw/bmw-xdrive-matte-black-badge_1.jpg",
    "images": [
      "images/catalog/bmw/bmw-xdrive-matte-black-badge_1.jpg"
    ]
  },
  {
    "id": "bmw-f82-m4-yellow-mirror-ornament",
    "name": "BMW M4 F82 YELLOW REARVIEW MIRROR HANGING ORNAMENT",
    "brand": "bmw",
    "category": "medals",
    "fitment": "BMW Enthusiasts / Interior Mirror",
    "description": "Austin Yellow BMW M4 F82 rear-angle hanging mirror accessory with black cord.",
    "isSoldOut": false,
    "image": "images/catalog/bmw/bmw-f82-m4-yellow-mirror-ornament_1.jpg",
    "images": [
      "images/catalog/bmw/bmw-f82-m4-yellow-mirror-ornament_1.jpg"
    ]
  },
  {
    "id": "bmw-e46-m3-blue-mirror-ornament",
    "name": "BMW E46 M3 BLUE REARVIEW MIRROR HANGING ORNAMENT",
    "brand": "bmw",
    "category": "medals",
    "fitment": "BMW Enthusiasts / Interior Mirror",
    "description": "Laguna Seca Blue BMW E46 M3 rear-angle hanging mirror ornament with quad exhaust detail.",
    "isSoldOut": false,
    "image": "images/catalog/bmw/bmw-e46-m3-blue-mirror-ornament_1.jpg",
    "images": [
      "images/catalog/bmw/bmw-e46-m3-blue-mirror-ornament_1.jpg"
    ]
  },
  {
    "id": "bmw-m-silver-black-idrive-knob-cover",
    "name": "BMW M PERFORMANCE IDRIVE KNOB COVER (SILVER & BLACK)",
    "brand": "bmw",
    "category": "tobb",
    "fitment": "BMW F-Series / iDrive Multimedia Knob",
    "description": "Brushed silver alloy ring and matte black top iDrive rotary controller cover featuring colored BMW M logo.",
    "isSoldOut": false,
    "image": "images/catalog/bmw/bmw-m-silver-black-idrive-knob-cover_1.jpg",
    "images": [
      "images/catalog/bmw/bmw-m-silver-black-idrive-knob-cover_1.jpg",
      "images/catalog/bmw/bmw-m-silver-black-idrive-knob-cover_2.jpg"
    ]
  },
  {
    "id": "bmw-f-series-sport-line-key-shell",
    "name": "BMW F-SERIES SPORT LINE 3-BUTTON KEY REPLACEMENT SHELL",
    "brand": "bmw",
    "category": "keys",
    "fitment": "BMW F20, F30, F10, F15, F25 3-Button Key",
    "description": "Black and red Sport Line 3-button replacement key fob housing with textured matte back and BMW logo mount.",
    "isSoldOut": false,
    "image": "images/catalog/bmw/bmw-f-series-sport-line-key-shell_1.jpg",
    "images": [
      "images/catalog/bmw/bmw-f-series-sport-line-key-shell_1.jpg",
      "images/catalog/bmw/bmw-f-series-sport-line-key-shell_2.jpg"
    ]
  },
  {
    "id": "bmw-m3-gloss-black-fender-blades",
    "name": "BMW M3 GLOSS BLACK FENDER BLADE BADGES (PAIR)",
    "brand": "bmw",
    "category": "tags",
    "fitment": "BMW M3 / F80 / E92 / G80 Front Fenders",
    "description": "Pair of tapered gloss black fender blade emblems featuring BMW M stripes and silver M3 lettering.",
    "isSoldOut": false,
    "image": "images/catalog/bmw/bmw-m3-gloss-black-fender-blades_1.jpg",
    "images": [
      "images/catalog/bmw/bmw-m3-gloss-black-fender-blades_1.jpg"
    ]
  },
  {
    "id": "bmw-f-series-carbon-gear-shift-cover",
    "name": "BMW F-SERIES CARBON FIBER GEAR SHIFT KNOB COVER",
    "brand": "bmw",
    "category": "tobb",
    "fitment": "BMW F20, F30, F10, F25 Automatic Shifter",
    "description": "Gloss carbon-fiber pattern ABS automatic gear selector trim cover engineered for BMW F-series shifters.",
    "isSoldOut": false,
    "image": "images/catalog/bmw/bmw-f-series-carbon-gear-shift-cover_1.jpg",
    "images": [
      "images/catalog/bmw/bmw-f-series-carbon-gear-shift-cover_1.jpg",
      "images/catalog/bmw/bmw-f-series-carbon-gear-shift-cover_2.jpg"
    ]
  },
  {
    "id": "bmw-alcantara-red-stitch-key-fob-cover",
    "name": "BMW ALCANTARA SUEDE KEY FOB COVER & KEYCHAIN (RED STITCH)",
    "brand": "bmw",
    "category": "keyscover",
    "fitment": "BMW F20, F30, F10, F25 3-Button Smart Key",
    "description": "Black Alcantara suede smart key fob case with contrast red stitching and black-red strap keychain.",
    "isSoldOut": false,
    "image": "images/catalog/bmw/bmw-alcantara-red-stitch-key-fob-cover_1.jpg",
    "images": [
      "images/catalog/bmw/bmw-alcantara-red-stitch-key-fob-cover_1.jpg",
      "images/catalog/bmw/bmw-alcantara-red-stitch-key-fob-cover_2.jpg"
    ]
  },
  {
    "id": "bmw-pebbled-black-leather-key-fob-cover",
    "name": "BMW PEBBLED BLACK LEATHER SMART KEY FOB COVER",
    "brand": "bmw",
    "category": "keyscover",
    "fitment": "BMW F20, F30, F10, F25 3-Button Smart Key",
    "description": "Classic black pebbled leather smart key fob cover with embossed back button and roundel window.",
    "isSoldOut": false,
    "image": "images/catalog/bmw/bmw-pebbled-black-leather-key-fob-cover_1.jpg",
    "images": [
      "images/catalog/bmw/bmw-pebbled-black-leather-key-fob-cover_1.jpg",
      "images/catalog/bmw/bmw-pebbled-black-leather-key-fob-cover_2.jpg"
    ]
  },
  {
    "id": "citroen-gloss-black-silver-wheel-caps",
    "name": "CITROEN GLOSS BLACK & SILVER WHEEL CENTER CAPS (SET OF 4)",
    "brand": "citroen",
    "category": "calipercovers",
    "fitment": "Citroen C3, C4, C5, DS3, DS4, C-Elysee",
    "description": "Set of 4 gloss black Citroen wheel center caps with silver double chevron logo and chrome outer rim.",
    "isSoldOut": false,
    "image": "images/catalog/citroen/citroen-gloss-black-silver-wheel-caps_1.jpg",
    "images": [
      "images/catalog/citroen/citroen-gloss-black-silver-wheel-caps_1.jpg",
      "images/catalog/citroen/citroen-gloss-black-silver-wheel-caps_2.jpg"
    ]
  },
  {
    "id": "citroen-chrome-trunk-lettering",
    "name": "CITROEN REAR TRUNK CHROME LETTERING",
    "brand": "citroen",
    "category": "carnameslogo",
    "fitment": "Citroen C3, C4, C5, C-Elysee",
    "description": "Mirror chrome OEM-style CITROEN trunk lettering strip sealed in clear alignment film.",
    "isSoldOut": false,
    "image": "images/catalog/citroen/citroen-chrome-trunk-lettering_1.jpg",
    "images": [
      "images/catalog/citroen/citroen-chrome-trunk-lettering_1.jpg"
    ]
  },
  {
    "id": "citroen-double-chevron-black-chrome-emblem",
    "name": "CITROEN DOUBLE CHEVRON EMBLEM (GLOSS BLACK & CHROME)",
    "brand": "citroen",
    "category": "carnameslogo",
    "fitment": "Citroen Hood & Rear Tailgate",
    "description": "Two-piece gloss black Citroen double chevron logo outlined in chrome on adhesive transfer sheet.",
    "isSoldOut": false,
    "image": "images/catalog/citroen/citroen-double-chevron-black-chrome-emblem_1.jpg",
    "images": [
      "images/catalog/citroen/citroen-double-chevron-black-chrome-emblem_1.jpg"
    ]
  },
  {
    "id": "citroen-gloss-hard-key-covers-pair",
    "name": "CITROEN HARD SHELL SMART KEY COVERS (BLACK & CARBON PAIR)",
    "brand": "citroen",
    "category": "keyscover",
    "fitment": "Citroen C4, C5 Aircross, C3 Smart Key",
    "description": "Dual finish Citroen smart key hard covers (gloss black and carbon weave) with chrome double chevron rear badge.",
    "isSoldOut": false,
    "image": "images/catalog/citroen/citroen-gloss-hard-key-covers-pair_1.jpg",
    "images": [
      "images/catalog/citroen/citroen-gloss-hard-key-covers-pair_1.jpg"
    ]
  },
  {
    "id": "cupra-matte-black-gunmetal-armor-key-kit",
    "name": "CUPRA MATTE BLACK & GUNMETAL ARMOR KEY COVER KIT",
    "brand": "cupra",
    "category": "keyscover",
    "fitment": "Cupra Formentor, Leon, Ateca Smart Key",
    "description": "Gunmetal zinc-alloy outer armor frame with matte black soft-touch Cupra backplate, keychain, and screwdriver.",
    "isSoldOut": false,
    "image": "images/catalog/cupra/cupra-matte-black-gunmetal-armor-key-kit_1.jpg",
    "images": [
      "images/catalog/cupra/cupra-matte-black-gunmetal-armor-key-kit_1.jpg",
      "images/catalog/cupra/cupra-matte-black-gunmetal-armor-key-kit_2.jpg"
    ]
  },
  {
    "id": "cupra-stealth-copper-brake-caliper-pair",
    "name": "CUPRA STEALTH COPPER BRAKE CALIPER COVERS (PAIR)",
    "brand": "cupra",
    "category": "calipercovers",
    "fitment": "Cupra Formentor, Leon, Ateca Brake Calipers",
    "description": "Pair of metallic stealth copper-bronze 3D brake caliper covers matching Cupra factory copper styling.",
    "isSoldOut": false,
    "image": "images/catalog/cupra/cupra-stealth-copper-brake-caliper-pair_1.jpg",
    "images": [
      "images/catalog/cupra/cupra-stealth-copper-brake-caliper-pair_1.jpg"
    ]
  },
  {
    "id": "cupra-leather-alloy-armor-key-cover",
    "name": "CUPRA LEATHER & ALLOY ARMOR KEY COVER WITH KEYCHAIN",
    "brand": "cupra",
    "category": "keyscover",
    "fitment": "Cupra Formentor, Leon, Ateca 3-Button Key",
    "description": "Chrome-gunmetal zinc-alloy frame paired with black leather Cupra back shell, matching leather strap keychain, and driver.",
    "isSoldOut": false,
    "image": "images/catalog/cupra/cupra-leather-alloy-armor-key-cover_1.jpg",
    "images": [
      "images/catalog/cupra/cupra-leather-alloy-armor-key-cover_1.jpg",
      "images/catalog/cupra/cupra-leather-alloy-armor-key-cover_2.jpg"
    ]
  },
  {
    "id": "cupra-mini-copper-18mm-key-emblem",
    "name": "CUPRA MINI 18MM COPPER TRIANGLE KEY FOB EMBLEM",
    "brand": "cupra",
    "category": "carnameslogo",
    "fitment": "Cupra Key Fobs & Interior Trim",
    "description": "Compact 18mm 3D copper-bronze Cupra triangle adhesive emblem sized for key fobs and interior accents.",
    "isSoldOut": false,
    "image": "images/catalog/cupra/cupra-mini-copper-18mm-key-emblem_1.jpg",
    "images": [
      "images/catalog/cupra/cupra-mini-copper-18mm-key-emblem_1.jpg"
    ]
  },
  {
    "id": "cupra-vz-chrome-silver-trunk-badge",
    "name": "CUPRA VZ CHROME & SILVER TRUNK EMBLEM",
    "brand": "cupra",
    "category": "tags",
    "fitment": "Cupra Formentor VZ / Leon VZ",
    "description": "Mirror chrome 3D VZ rear trunk performance badge on white transfer sheet.",
    "isSoldOut": false,
    "image": "images/catalog/cupra/cupra-vz-chrome-silver-trunk-badge_1.jpg",
    "images": [
      "images/catalog/cupra/cupra-vz-chrome-silver-trunk-badge_1.jpg"
    ]
  },
  {
    "id": "dodge-gloss-black-trunk-letters",
    "name": "DODGE REAR TRUNK LETTERING (GLOSS BLACK)",
    "brand": "dodge",
    "category": "carnameslogo",
    "fitment": "Dodge Charger, Challenger, Durango, Journey",
    "description": "Gloss black OEM-font DODGE rear trunk lettering spaced on transfer tape.",
    "isSoldOut": false,
    "image": "images/catalog/dodge/dodge-gloss-black-trunk-letters_1.jpg",
    "images": [
      "images/catalog/dodge/dodge-gloss-black-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "dodge-chrome-red-stripe-bar-emblem",
    "name": "DODGE CHROME & RED DUAL SLASHES TRUNK EMBLEM",
    "brand": "dodge",
    "category": "carnameslogo",
    "fitment": "Dodge Charger, Challenger, Durango",
    "description": "Chrome DODGE bar emblem accented with signature twin slanted red SRT stripes on gloss black baseplate.",
    "isSoldOut": false,
    "image": "images/catalog/dodge/dodge-chrome-red-stripe-bar-emblem_1.jpg",
    "images": [
      "images/catalog/dodge/dodge-chrome-red-stripe-bar-emblem_1.jpg"
    ]
  },
  {
    "id": "dodge-ram-chrome-wheel-center-caps",
    "name": "DODGE RAM HEAD CHROME WHEEL CENTER CAPS (SET OF 4)",
    "brand": "dodge",
    "category": "calipercovers",
    "fitment": "Dodge Charger, Challenger, Ram Alloy Wheels",
    "description": "Set of 4 polished chrome Dodge Ram head wheel center caps matching OEM clip spec 1LB72TRMAA.",
    "isSoldOut": false,
    "image": "images/catalog/dodge/dodge-ram-chrome-wheel-center-caps_1.jpg",
    "images": [
      "images/catalog/dodge/dodge-ram-chrome-wheel-center-caps_1.jpg",
      "images/catalog/dodge/dodge-ram-chrome-wheel-center-caps_2.jpg"
    ]
  },
  {
    "id": "fiat-matte-black-3button-flip-key-cover",
    "name": "FIAT MATTE BLACK 3-BUTTON FLIP KEY COVER",
    "brand": "fiat",
    "category": "keyscover",
    "fitment": "Fiat 500, Tipo, Punto, Panda 3-Button Flip Key",
    "description": "Textured matte black protective sleeve engineered for Fiat 3-button flip key fobs.",
    "isSoldOut": false,
    "image": "images/catalog/fiat/fiat-matte-black-3button-flip-key-cover_1.jpg",
    "images": [
      "images/catalog/fiat/fiat-matte-black-3button-flip-key-cover_1.jpg",
      "images/catalog/fiat/fiat-matte-black-3button-flip-key-cover_2.jpg",
      "images/catalog/fiat/fiat-matte-black-3button-flip-key-cover_3.jpg"
    ]
  },
  {
    "id": "honda-powered-by-3d-metal-badge",
    "name": "POWERED BY HONDA 3D METAL BADGE (RED & CHROME)",
    "brand": "honda",
    "category": "tags",
    "fitment": "Honda Civic, Accord, CR-V, City",
    "description": "3D metal Powered by Honda emblem with red Honda H insignia and silver lettering.",
    "isSoldOut": false,
    "image": "images/catalog/honda/honda-powered-by-3d-metal-badge_1.jpg",
    "images": [
      "images/catalog/honda/honda-powered-by-3d-metal-badge_1.jpg"
    ]
  },
  {
    "id": "honda-civic-chrome-trunk-letters",
    "name": "HONDA CIVIC CHROME REAR TRUNK LETTERING",
    "brand": "honda",
    "category": "carnameslogo",
    "fitment": "Honda Civic Sedan & Hatchback",
    "description": "OEM-font chrome CIVIC rear trunk badge strip ready for clean installation.",
    "isSoldOut": false,
    "image": "images/catalog/honda/honda-civic-chrome-trunk-letters_1.jpg",
    "images": [
      "images/catalog/honda/honda-civic-chrome-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "honda-brand-chrome-trunk-letters",
    "name": "HONDA CHROME REAR TRUNK LETTERING",
    "brand": "honda",
    "category": "carnameslogo",
    "fitment": "Honda Civic, Accord, City, CR-V",
    "description": "Mirror chrome HONDA rear trunk lettering strip on alignment carrier film.",
    "isSoldOut": false,
    "image": "images/catalog/honda/honda-brand-chrome-trunk-letters_1.jpg",
    "images": [
      "images/catalog/honda/honda-brand-chrome-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "hyundai-gloss-black-chrome-wheel-caps",
    "name": "HYUNDAI GLOSS BLACK & CHROME WHEEL CENTER CAPS (SET OF 4)",
    "brand": "hyundai",
    "category": "calipercovers",
    "fitment": "Hyundai Elantra, Tucson, Sonata, Accent Alloy Rims",
    "description": "Set of 4 gloss black wheel hub center caps featuring raised chrome Hyundai H oval emblem.",
    "isSoldOut": false,
    "image": "images/catalog/hyundai/hyundai-gloss-black-chrome-wheel-caps_1.jpg",
    "images": [
      "images/catalog/hyundai/hyundai-gloss-black-chrome-wheel-caps_1.jpg"
    ]
  },
  {
    "id": "hyundai-large-grooved-silver-wheel-caps",
    "name": "HYUNDAI SCULPTED SILVER WHEEL CENTER CAPS (SET OF 4)",
    "brand": "hyundai",
    "category": "calipercovers",
    "fitment": "Hyundai Tucson, Santa Fe, Sonata Alloy Rims",
    "description": "Set of 4 large grooved silver Hyundai wheel center hub caps with chrome emblem and heavy-duty retention clips.",
    "isSoldOut": false,
    "image": "images/catalog/hyundai/hyundai-large-grooved-silver-wheel-caps_1.jpg",
    "images": [
      "images/catalog/hyundai/hyundai-large-grooved-silver-wheel-caps_1.jpg",
      "images/catalog/hyundai/hyundai-large-grooved-silver-wheel-caps_2.jpg",
      "images/catalog/hyundai/hyundai-large-grooved-silver-wheel-caps_3.jpg",
      "images/catalog/hyundai/hyundai-large-grooved-silver-wheel-caps_4.jpg"
    ]
  },
  {
    "id": "hyundai-smooth-domed-silver-wheel-caps",
    "name": "HYUNDAI BRUSHED SILVER SMOOTH WHEEL CAPS (SET OF 4)",
    "brand": "hyundai",
    "category": "calipercovers",
    "fitment": "Hyundai Elantra, i30, Accent, Creta",
    "description": "Set of 4 smooth domed brushed silver Hyundai wheel center caps with raised chrome H logo.",
    "isSoldOut": false,
    "image": "images/catalog/hyundai/hyundai-smooth-domed-silver-wheel-caps_1.jpg",
    "images": [
      "images/catalog/hyundai/hyundai-smooth-domed-silver-wheel-caps_1.jpg"
    ]
  },
  {
    "id": "jeep-5button-smart-key-replacement-shell",
    "name": "JEEP 5-BUTTON SMART KEY REPLACEMENT SHELL (MATTE BLACK)",
    "brand": "jeep",
    "category": "keys",
    "fitment": "Jeep Grand Cherokee, Cherokee, Compass, Wrangler",
    "description": "Matte black 5-button smart key housing (Lock, Unlock, Trunk, Remote Start, Panic) with metallic Jeep logo bar.",
    "isSoldOut": false,
    "image": "images/catalog/jeep/jeep-5button-smart-key-replacement-shell_1.jpg",
    "images": [
      "images/catalog/jeep/jeep-5button-smart-key-replacement-shell_1.jpg",
      "images/catalog/jeep/jeep-5button-smart-key-replacement-shell_2.jpg"
    ]
  },
  {
    "id": "jeep-limited-chrome-trunk-badge",
    "name": "JEEP LIMITED CHROME REAR TRUNK BADGE",
    "brand": "jeep",
    "category": "tags",
    "fitment": "Jeep Grand Cherokee, Cherokee, Compass Limited",
    "description": "Block-letter chrome LIMITED rear trunk trim badge in clear alignment carrier.",
    "isSoldOut": false,
    "image": "images/catalog/jeep/jeep-limited-chrome-trunk-badge_1.jpg",
    "images": [
      "images/catalog/jeep/jeep-limited-chrome-trunk-badge_1.jpg"
    ]
  },
  {
    "id": "kia-gdi-silver-red-trunk-badge",
    "name": "KIA GDI BRUSHED SILVER & RED TRUNK BADGE",
    "brand": "kia",
    "category": "tags",
    "fitment": "Kia Cerato, Sportage, Optima, Rio GDI",
    "description": "Brushed aluminum-plate GDI rear trunk engine badge with vibrant red lettering.",
    "isSoldOut": false,
    "image": "images/catalog/kia/kia-gdi-silver-red-trunk-badge_1.jpg",
    "images": [
      "images/catalog/kia/kia-gdi-silver-red-trunk-badge_1.jpg"
    ]
  },
  {
    "id": "kia-k3-chrome-trunk-letters",
    "name": "KIA K3 / CERATO CHROME TRUNK EMBLEM",
    "brand": "kia",
    "category": "carnameslogo",
    "fitment": "Kia K3 / Cerato Sedan & Hatchback",
    "description": "Mirror chrome K3 rear trunk model emblem pre-aligned in foam carrier.",
    "isSoldOut": false,
    "image": "images/catalog/kia/kia-k3-chrome-trunk-letters_1.jpg",
    "images": [
      "images/catalog/kia/kia-k3-chrome-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "kia-sportage-chrome-trunk-letters",
    "name": "KIA SPORTAGE CHROME REAR TRUNK LETTERING",
    "brand": "kia",
    "category": "carnameslogo",
    "fitment": "Kia Sportage (All Generations)",
    "description": "Factory-style chrome SPORTAGE rear tailgate lettering strip.",
    "isSoldOut": false,
    "image": "images/catalog/kia/kia-sportage-chrome-trunk-letters_1.jpg",
    "images": [
      "images/catalog/kia/kia-sportage-chrome-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "kia-new-logo-steering-airbag-cover",
    "name": "KIA NEW KN LOGO STEERING WHEEL AIRBAG COVER (MATTE BLACK)",
    "brand": "kia",
    "category": "steeringwheelsymbols",
    "fitment": "Kia K3, Cerato, Sportage, K5 Steering Wheel",
    "description": "Matte black steering wheel center cover embossed with the modern Kia KN emblem and AIRBAG lettering.",
    "isSoldOut": false,
    "image": "images/catalog/kia/kia-new-logo-steering-airbag-cover_1.jpg",
    "images": [
      "images/catalog/kia/kia-new-logo-steering-airbag-cover_1.jpg",
      "images/catalog/kia/kia-new-logo-steering-airbag-cover_2.jpg"
    ]
  },
  {
    "id": "kia-cerato-chrome-trunk-letters",
    "name": "KIA CERATO CHROME REAR TRUNK LETTERING",
    "brand": "kia",
    "category": "carnameslogo",
    "fitment": "Kia Cerato / Forte Models",
    "description": "Chrome-finished CERATO rear trunk badge in clear alignment sleeve.",
    "isSoldOut": false,
    "image": "images/catalog/kia/kia-cerato-chrome-trunk-letters_1.jpg",
    "images": [
      "images/catalog/kia/kia-cerato-chrome-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "kia-koup-gloss-black-red-badge",
    "name": "KIA KOUP GLOSS BLACK & RED TRUNK EMBLEM",
    "brand": "kia",
    "category": "carnameslogo",
    "fitment": "Kia Cerato Koup / Forte Koup",
    "description": "Gloss black KOUP trunk badge with signature red left vertical accent bar.",
    "isSoldOut": false,
    "image": "images/catalog/kia/kia-koup-gloss-black-red-badge_1.jpg",
    "images": [
      "images/catalog/kia/kia-koup-gloss-black-red-badge_1.jpg"
    ]
  },
  {
    "id": "kia-sportage-gloss-black-trunk-letters",
    "name": "KIA SPORTAGE GLOSS BLACK TRUNK LETTERING",
    "brand": "kia",
    "category": "carnameslogo",
    "fitment": "Kia Sportage (All Generations)",
    "description": "Stealth gloss black wide-spaced SPORTAGE trunk lettering supplied inside alignment stencil.",
    "isSoldOut": false,
    "image": "images/catalog/kia/kia-sportage-gloss-black-trunk-letters_1.jpg",
    "images": [
      "images/catalog/kia/kia-sportage-gloss-black-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "lancer-evo9-mirror-hanging-ornament",
    "name": "MITSUBISHI LANCER EVO IX MIRROR HANGING ORNAMENT",
    "brand": "lancer",
    "category": "medals",
    "fitment": "Mitsubishi Lancer EX / Evolution / Enthusiasts",
    "description": "White Lancer Evo 9 cartoon rearview mirror hanging charm featuring Mitsubishi grille badge and Recaro detail.",
    "isSoldOut": false,
    "image": "images/catalog/lancer/lancer-evo9-mirror-hanging-ornament_1.jpg",
    "images": [
      "images/catalog/lancer/lancer-evo9-mirror-hanging-ornament_1.jpg"
    ]
  },
  {
    "id": "lancer-3d-shark-outline-emblems",
    "name": "LANCER SHARK 3D METAL OUTLINE EMBLEMS (CHROME & BLACK)",
    "brand": "lancer",
    "category": "tags",
    "fitment": "Mitsubishi Lancer EX Shark (Trunk / Fender)",
    "description": "3D metal shark silhouette trunk and fender emblems in gloss black and polished chrome finishes.",
    "isSoldOut": false,
    "image": "images/catalog/lancer/lancer-3d-shark-outline-emblems_1.jpg",
    "images": [
      "images/catalog/lancer/lancer-3d-shark-outline-emblems_1.jpg",
      "images/catalog/lancer/lancer-3d-shark-outline-emblems_2.jpg"
    ]
  },
  {
    "id": "lancer-3diamond-gloss-black-emblem",
    "name": "MITSUBISHI LANCER 3-DIAMOND EMBLEM (GLOSS BLACK)",
    "brand": "lancer",
    "category": "carnameslogo",
    "fitment": "Mitsubishi Lancer EX / Outlander / Eclipse Hood & Trunk",
    "description": "One-piece gloss black 3D triple-diamond Mitsubishi front/rear emblem.",
    "isSoldOut": false,
    "image": "images/catalog/lancer/lancer-3diamond-gloss-black-emblem_1.jpg",
    "images": [
      "images/catalog/lancer/lancer-3diamond-gloss-black-emblem_1.jpg"
    ]
  },
  {
    "id": "lancer-3diamond-red-black-emblem",
    "name": "MITSUBISHI LANCER 3-DIAMOND EMBLEM (RED & BLACK)",
    "brand": "lancer",
    "category": "carnameslogo",
    "fitment": "Mitsubishi Lancer EX Hood & Trunk",
    "description": "Sport red 3-diamond Mitsubishi emblem mounted on a gloss black outline backing.",
    "isSoldOut": false,
    "image": "images/catalog/lancer/lancer-3diamond-red-black-emblem_1.jpg",
    "images": [
      "images/catalog/lancer/lancer-3diamond-red-black-emblem_1.jpg"
    ]
  },
  {
    "id": "lancer-3button-leather-armor-key-cover",
    "name": "MITSUBISHI LANCER SMART KEY ARMOR & LEATHER COVER",
    "brand": "lancer",
    "category": "keyscover",
    "fitment": "Mitsubishi Lancer EX 3-Button Key Fob",
    "description": "Gunmetal zinc-alloy and black leather 3-button key fob cover featuring Mitsubishi 3-diamond back logo and strap keychain.",
    "isSoldOut": false,
    "image": "images/catalog/lancer/lancer-3button-leather-armor-key-cover_1.jpg",
    "images": [
      "images/catalog/lancer/lancer-3button-leather-armor-key-cover_1.jpg",
      "images/catalog/lancer/lancer-3button-leather-armor-key-cover_2.jpg"
    ]
  },
  {
    "id": "lancer-red-carbon-steering-emblems-3pcs",
    "name": "MITSUBISHI RED FORGED CARBON STEERING EMBLEMS (3 PCS)",
    "brand": "lancer",
    "category": "steeringwheelsymbols",
    "fitment": "Mitsubishi Lancer / Evo Steering Wheel Hub",
    "description": "3-piece red forged carbon-fiber resin triple-diamond steering wheel center emblem overlays.",
    "isSoldOut": false,
    "image": "images/catalog/lancer/lancer-red-carbon-steering-emblems-3pcs_1.jpg",
    "images": [
      "images/catalog/lancer/lancer-red-carbon-steering-emblems-3pcs_1.jpg"
    ]
  },
  {
    "id": "lancer-mitsubishi-chrome-trunk-letters-set",
    "name": "MITSUBISHI & LANCER CHROME TRUNK LETTERING SET",
    "brand": "lancer",
    "category": "carnameslogo",
    "fitment": "Mitsubishi Lancer EX / Galant / Evolution",
    "description": "Complete chrome MITSUBISHI with red triple-diamond logo plus LANCER rear trunk lettering set.",
    "isSoldOut": false,
    "image": "images/catalog/lancer/lancer-mitsubishi-chrome-trunk-letters-set_1.jpg",
    "images": [
      "images/catalog/lancer/lancer-mitsubishi-chrome-trunk-letters-set_1.jpg"
    ]
  },
  {
    "id": "landrover-heritage-and-dark-green-pair",
    "name": "LAND ROVER GREEN & SILVER OVAL EMBLEM",
    "brand": "landrover",
    "category": "carnameslogo",
    "fitment": "Land Rover Range Rover, Discovery, Defender, Evoque",
    "description": "Green and silver silver-rimmed LAND ROVER oval grille and tailgate emblems in heritage bright and dark forest green.",
    "isSoldOut": false,
    "image": "images/catalog/landrover/landrover-heritage-and-dark-green-pair_1.jpg",
    "images": [
      "images/catalog/landrover/landrover-heritage-and-dark-green-pair_1.jpg",
      "images/catalog/landrover/landrover-heritage-and-dark-green-pair_2.jpg"
    ]
  },
  {
    "id": "mercedes-benz-classic-black-trunk-letters",
    "name": "MERCEDES-BENZ CLASSIC TRUNK LETTERING (GLOSS BLACK)",
    "brand": "mercedesbenz",
    "category": "carnameslogo",
    "fitment": "Mercedes-Benz C, E, S, GLC, GLA Classes",
    "description": "Stealth gloss black classic serif Mercedes-Benz rear trunk lettering on alignment film.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-benz-classic-black-trunk-letters_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-benz-classic-black-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "mercedes-amg-gloss-black-trunk-badge",
    "name": "MERCEDES-BENZ AMG TRUNK EMBLEM (GLOSS BLACK)",
    "brand": "mercedesbenz",
    "category": "tags",
    "fitment": "Mercedes-Benz AMG & AMG-Line Models",
    "description": "High-gloss black ///AMG trunk performance badge on clear transfer sheet.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-amg-gloss-black-trunk-badge_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-amg-gloss-black-trunk-badge_1.jpg"
    ]
  },
  {
    "id": "mercedes-amg-centerlock-wheel-caps-set",
    "name": "MERCEDES AMG CENTER-LOCK STYLE WHEEL CAPS (150MM SET OF 4)",
    "brand": "mercedesbenz",
    "category": "calipercovers",
    "fitment": "Mercedes-Benz C, E, S, CLS, CLA, GLC Alloy Wheels",
    "description": "Set of 4 150mm center-lock style Mercedes wheel caps with gloss black ///AMG outer ring and chrome star center.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-amg-centerlock-wheel-caps-set_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-amg-centerlock-wheel-caps-set_1.jpg",
      "images/catalog/mercedesbenz/mercedes-amg-centerlock-wheel-caps-set_2.jpg",
      "images/catalog/mercedesbenz/mercedes-amg-centerlock-wheel-caps-set_3.jpg",
      "images/catalog/mercedesbenz/mercedes-amg-centerlock-wheel-caps-set_4.jpg",
      "images/catalog/mercedesbenz/mercedes-amg-centerlock-wheel-caps-set_5.jpg"
    ]
  },
  {
    "id": "mercedes-w204-mirror-hanging-ornament",
    "name": "MERCEDES-BENZ C-CLASS W204 MIRROR HANGING ORNAMENT",
    "brand": "mercedesbenz",
    "category": "medals",
    "fitment": "Mercedes-Benz W204 Owners / Interior Mirror",
    "description": "White W204 C-Class front-view hanging mirror accessory with black cord.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-w204-mirror-hanging-ornament_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-w204-mirror-hanging-ornament_1.jpg"
    ]
  },
  {
    "id": "mercedes-w205-amg-mirror-ornament",
    "name": "MERCEDES-BENZ W205 C-CLASS AMG MIRROR ORNAMENT",
    "brand": "mercedesbenz",
    "category": "medals",
    "fitment": "Mercedes-Benz W205 Owners / Interior Mirror",
    "description": "White W205 AMG C-Class 3/4-view hanging rearview mirror ornament.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-w205-amg-mirror-ornament_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-w205-amg-mirror-ornament_1.jpg"
    ]
  },
  {
    "id": "mercedes-silver-steering-button-trim-set",
    "name": "MERCEDES BRUSHED SILVER STEERING BUTTON TRIM SET (L & R)",
    "brand": "mercedesbenz",
    "category": "steeringwheelsymbols",
    "fitment": "Mercedes A, B, C, E, GLC, GLE, GLB (2019 - 2020)",
    "description": "Brushed silver left and right multifunction steering wheel switch cover overlays.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-silver-steering-button-trim-set_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-silver-steering-button-trim-set_1.jpg"
    ]
  },
  {
    "id": "mercedes-c63-gloss-black-trunk-letters",
    "name": "MERCEDES-AMG C63 TRUNK EMBLEM (GLOSS BLACK)",
    "brand": "mercedesbenz",
    "category": "carnameslogo",
    "fitment": "Mercedes-Benz C-Class W204 / W205",
    "description": "Gloss black C63 rear trunk badge pre-spaced on white template backing.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-c63-gloss-black-trunk-letters_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-c63-gloss-black-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "mercedes-w205-gloss-black-grille-star",
    "name": "MERCEDES-BENZ W205 FLAT FRONT GRILLE STAR (GLOSS BLACK)",
    "brand": "mercedesbenz",
    "category": "carnameslogo",
    "fitment": "Mercedes-Benz W205 C-Class / Distronic Flat Grille",
    "description": "Twist-lock W205 gloss black flat front grille 3-pointed star emblem with rear mounting tabs.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-w205-gloss-black-grille-star_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-w205-gloss-black-grille-star_1.jpg",
      "images/catalog/mercedesbenz/mercedes-w205-gloss-black-grille-star_2.jpg"
    ]
  },
  {
    "id": "mercedes-amg-silver-steering-spoke-insert",
    "name": "MERCEDES-AMG SILVER STEERING SPOKE INSERT BADGE",
    "brand": "mercedesbenz",
    "category": "steeringwheelsymbols",
    "fitment": "Mercedes-AMG Flat-Bottom Steering Wheels",
    "description": "Brushed silver metallic ///AMG lower steering wheel spoke trim badge insert.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-amg-silver-steering-spoke-insert_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-amg-silver-steering-spoke-insert_1.jpg"
    ]
  },
  {
    "id": "mercedes-e200-gloss-black-trunk-letters",
    "name": "MERCEDES-BENZ E200 TRUNK LETTERING (GLOSS BLACK)",
    "brand": "mercedesbenz",
    "category": "carnameslogo",
    "fitment": "Mercedes-Benz E-Class W212 / W213",
    "description": "Gloss black E200 rear trunk model badge ready for clean adhesive mounting.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-e200-gloss-black-trunk-letters_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-e200-gloss-black-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "mercedes-laurel-wreath-black-wheel-caps",
    "name": "MERCEDES BLACK LAUREL WREATH WHEEL CENTER CAPS (SET OF 4)",
    "brand": "mercedesbenz",
    "category": "calipercovers",
    "fitment": "Mercedes-Benz Alloy Wheels (A167 401 69 00 Spec)",
    "description": "Set of 4 gloss black Mercedes-Benz wheel center caps with silver laurel wreath rim and chrome star.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-laurel-wreath-black-wheel-caps_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-laurel-wreath-black-wheel-caps_1.jpg",
      "images/catalog/mercedesbenz/mercedes-laurel-wreath-black-wheel-caps_2.jpg",
      "images/catalog/mercedesbenz/mercedes-laurel-wreath-black-wheel-caps_3.jpg",
      "images/catalog/mercedesbenz/mercedes-laurel-wreath-black-wheel-caps_4.jpg"
    ]
  },
  {
    "id": "mercedes-glk300-gloss-black-trunk-letters",
    "name": "MERCEDES-BENZ GLK300 TRUNK LETTERING (GLOSS BLACK)",
    "brand": "mercedesbenz",
    "category": "carnameslogo",
    "fitment": "Mercedes-Benz GLK-Class X204",
    "description": "Gloss black GLK300 rear tailgate badge sealed in alignment wrap.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-glk300-gloss-black-trunk-letters_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-glk300-gloss-black-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "mercedes-amg-chrome-trunk-letters",
    "name": "MERCEDES-BENZ AMG TRUNK EMBLEM (CHROME)",
    "brand": "mercedesbenz",
    "category": "tags",
    "fitment": "Mercedes-Benz All AMG & AMG-Line Models",
    "description": "Mirror chrome ///AMG rear trunk emblem mounted in clear alignment stencil.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-amg-chrome-trunk-letters_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-amg-chrome-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "mercedes-chrome-star-steering-airbag-emblem",
    "name": "MERCEDES CHROME 3-POINTED STAR STEERING AIRBAG EMBLEM",
    "brand": "mercedesbenz",
    "category": "steeringwheelsymbols",
    "fitment": "Mercedes-Benz Steering Wheel Center Airbag Hub",
    "description": "Polished chrome Mercedes 3-pointed star steering wheel emblem with 12-pin rear mounting ring.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-chrome-star-steering-airbag-emblem_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-chrome-star-steering-airbag-emblem_1.jpg",
      "images/catalog/mercedesbenz/mercedes-chrome-star-steering-airbag-emblem_2.jpg"
    ]
  },
  {
    "id": "mercedes-blue-efficiency-fender-pair",
    "name": "MERCEDES BLUE EFFICIENCY FENDER BADGES (PAIR)",
    "brand": "mercedesbenz",
    "category": "tags",
    "fitment": "Mercedes-Benz C, E, S, GLK BlueEfficiency",
    "description": "Pair of chrome and blue Mercedes-Benz Blue Efficiency side fender emblems.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-blue-efficiency-fender-pair_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-blue-efficiency-fender-pair_1.jpg"
    ]
  },
  {
    "id": "mercedes-63-amg-chrome-fender-badge",
    "name": "MERCEDES 6.3 AMG CHROME FENDER BADGE",
    "brand": "mercedesbenz",
    "category": "tags",
    "fitment": "Mercedes-Benz AMG C63 / E63 / S63 Fenders",
    "description": "Polished chrome 6.3 ///AMG side fender performance badge.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-63-amg-chrome-fender-badge_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-63-amg-chrome-fender-badge_1.jpg"
    ]
  },
  {
    "id": "mercedes-gloss-black-star-wheel-caps",
    "name": "MERCEDES GLOSS BLACK & CHROME STAR WHEEL CAPS (SET OF 4)",
    "brand": "mercedesbenz",
    "category": "calipercovers",
    "fitment": "Mercedes-Benz 75mm Alloy Wheels",
    "description": "Set of 4 modern gloss black Mercedes-Benz wheel hub center caps with bold chrome 3-pointed star.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-gloss-black-star-wheel-caps_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-gloss-black-star-wheel-caps_1.jpg",
      "images/catalog/mercedesbenz/mercedes-gloss-black-star-wheel-caps_2.jpg"
    ]
  },
  {
    "id": "mercedes-flared-centerlock-cap-duo",
    "name": "MERCEDES FLARED CENTER-LOCK WHEEL CAP STYLES (CHROME & AMG BLACK)",
    "brand": "mercedesbenz",
    "category": "calipercovers",
    "fitment": "Mercedes-Benz AMG & Multi-Spoke Rims",
    "description": "Comparison pair of flared center-lock style Mercedes wheel caps: classic chrome star and black AMG surround.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-flared-centerlock-cap-duo_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-flared-centerlock-cap-duo_1.jpg"
    ]
  },
  {
    "id": "mercedes-blue-silver-mesh-hood-emblem",
    "name": "MERCEDES-BENZ 57MM BLUE & SILVER MESH FLAT HOOD EMBLEM",
    "brand": "mercedesbenz",
    "category": "carnameslogo",
    "fitment": "Mercedes-Benz C, E, S Hood & Trunk (57mm)",
    "description": "57mm flat Mercedes-Benz laurel wreath hood emblem with dark blue border and silver textured center.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-blue-silver-mesh-hood-emblem_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-blue-silver-mesh-hood-emblem_1.jpg"
    ]
  },
  {
    "id": "mercedes-gloss-black-laurel-hood-emblem",
    "name": "MERCEDES-BENZ 57MM GLOSS BLACK LAUREL HOOD EMBLEM",
    "brand": "mercedesbenz",
    "category": "carnameslogo",
    "fitment": "Mercedes-Benz C, E, S Hood & Trunk (57mm)",
    "description": "57mm flat gloss black Mercedes-Benz laurel wreath hood emblem with chrome 3-pointed star.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-gloss-black-laurel-hood-emblem_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-gloss-black-laurel-hood-emblem_1.jpg"
    ]
  },
  {
    "id": "mercedes-amg-black-red-seatbelt-webbing",
    "name": "MERCEDES AMG BLACK & RED TRIM SEATBELT WEBBING ROLL",
    "brand": "mercedesbenz",
    "category": "scatbelt",
    "fitment": "Universal Mercedes-Benz Sport Seatbelt Retrofit",
    "description": "Black racing seatbelt strap roll bordered in red with bold silver and red ///AMG insignia.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-amg-black-red-seatbelt-webbing_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-amg-black-red-seatbelt-webbing_1.jpg"
    ]
  },
  {
    "id": "mercedes-63-amg-gloss-black-chrome-pair",
    "name": "MERCEDES 6.3 AMG CHROME ON GLOSS BLACK BADGES (PAIR)",
    "brand": "mercedesbenz",
    "category": "tags",
    "fitment": "Mercedes-AMG C63 / E63 / CLS63 Fenders",
    "description": "Pair of chrome 6.3 ///AMG side fender badges mounted on gloss black plates.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-63-amg-gloss-black-chrome-pair_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-63-amg-gloss-black-chrome-pair_1.jpg"
    ]
  },
  {
    "id": "mercedes-gloss-hard-key-covers-pair",
    "name": "MERCEDES HARD SHELL KEY COVERS (BLACK & CARBON PAIR)",
    "brand": "mercedesbenz",
    "category": "keyscover",
    "fitment": "Mercedes-Benz W205, W213, W222 Smart Key",
    "description": "Two hard shell key fob covers in gloss black and carbon fiber weave with blue-silver Mercedes crest.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-gloss-hard-key-covers-pair_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-gloss-hard-key-covers-pair_1.jpg"
    ]
  },
  {
    "id": "mercedes-star-black-and-maybach-emblems",
    "name": "MERCEDES GLOSS BLACK STAR & CHROME MAYBACH EMBLEM SET",
    "brand": "mercedesbenz",
    "category": "carnameslogo",
    "fitment": "Mercedes-Benz C, E, S & Maybach Trunk / Pillars",
    "description": "Assortment of gloss black Mercedes 3-pointed star emblems alongside chrome Maybach double-M crests.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-star-black-and-maybach-emblems_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-star-black-and-maybach-emblems_1.jpg"
    ]
  },
  {
    "id": "mercedes-affalterbach-amg-hood-emblem",
    "name": "MERCEDES AFFALTERBACH AMG CREST FLAT HOOD EMBLEM",
    "brand": "mercedesbenz",
    "category": "carnameslogo",
    "fitment": "Mercedes-AMG C, E, S, GT Hood & Trunk",
    "description": "Silver and black Affalterbach AMG tree crest flat hood and trunk emblem with red 3M adhesive backing.",
    "isSoldOut": false,
    "image": "images/catalog/mercedesbenz/mercedes-affalterbach-amg-hood-emblem_1.jpg",
    "images": [
      "images/catalog/mercedesbenz/mercedes-affalterbach-amg-hood-emblem_1.jpg",
      "images/catalog/mercedesbenz/mercedes-affalterbach-amg-hood-emblem_2.jpg"
    ]
  },
  {
    "id": "mg6-gloss-black-trunk-letters",
    "name": "MG6 REAR TRUNK LETTERING (GLOSS BLACK)",
    "brand": "mg",
    "category": "carnameslogo",
    "fitment": "MG6 Sedan (All Generations)",
    "description": "Gloss black MG6 rear trunk emblem letters aligned on clear transfer sheet.",
    "isSoldOut": false,
    "image": "images/catalog/mg/mg6-gloss-black-trunk-letters_1.jpg",
    "images": [
      "images/catalog/mg/mg6-gloss-black-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "mg6-black-red-trunk-letters",
    "name": "MG6 REAR TRUNK LETTERING (BLACK & RED 6)",
    "brand": "mg",
    "category": "carnameslogo",
    "fitment": "MG6 Sedan & Trophy Models",
    "description": "MG6 rear trunk lettering combining gloss black MG letters with vibrant red 6 accent.",
    "isSoldOut": false,
    "image": "images/catalog/mg/mg6-black-red-trunk-letters_1.jpg",
    "images": [
      "images/catalog/mg/mg6-black-red-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "mg-trophy-gloss-black-script-pair",
    "name": "MG TROPHY CURSIVE SCRIPT BADGES & MG7 COMBO (GLOSS BLACK)",
    "brand": "mg",
    "category": "tags",
    "fitment": "MG5, MG6, MG7, MG HS Trophy Editions",
    "description": "Gloss black cursive Trophy edition badges shown individually and bundled with MG 7 gunmetal trunk lettering.",
    "isSoldOut": false,
    "image": "images/catalog/mg/mg-trophy-gloss-black-script-pair_1.jpg",
    "images": [
      "images/catalog/mg/mg-trophy-gloss-black-script-pair_1.jpg",
      "images/catalog/mg/mg-trophy-gloss-black-script-pair_2.jpg"
    ]
  },
  {
    "id": "mg-grey-black-mirror-hanging-ornament",
    "name": "MG OCTAGON LOGO MIRROR HANGING ORNAMENT (GREY & BLACK)",
    "brand": "mg",
    "category": "medals",
    "fitment": "All MG Vehicles / Interior Mirror",
    "description": "Grey and black octagonal MG logo hanging charm for rearview mirrors.",
    "isSoldOut": false,
    "image": "images/catalog/mg/mg-grey-black-mirror-hanging-ornament_1.jpg",
    "images": [
      "images/catalog/mg/mg-grey-black-mirror-hanging-ornament_1.jpg"
    ]
  },
  {
    "id": "mg-octagon-solid-gloss-black-emblem",
    "name": "MG OCTAGON HOOD & TRUNK EMBLEM (SOLID GLOSS BLACK)",
    "brand": "mg",
    "category": "carnameslogo",
    "fitment": "MG5, MG6, ZS, HS, RX5 Hood & Trunk",
    "description": "Solid-backed gloss black octagonal MG emblem with factory-grade 3M adhesive backing.",
    "isSoldOut": false,
    "image": "images/catalog/mg/mg-octagon-solid-gloss-black-emblem_1.jpg",
    "images": [
      "images/catalog/mg/mg-octagon-solid-gloss-black-emblem_1.jpg",
      "images/catalog/mg/mg-octagon-solid-gloss-black-emblem_2.jpg"
    ]
  },
  {
    "id": "mg-octagon-chrome-black-emblem",
    "name": "MG OCTAGON HOOD & TRUNK EMBLEM (CHROME & BLACK)",
    "brand": "mg",
    "category": "carnameslogo",
    "fitment": "MG5, MG6, ZS, HS, RX5 Hood & Trunk",
    "description": "Classic chrome-rimmed gloss black octagonal MG hood and trunk emblem.",
    "isSoldOut": false,
    "image": "images/catalog/mg/mg-octagon-chrome-black-emblem_1.jpg",
    "images": [
      "images/catalog/mg/mg-octagon-chrome-black-emblem_1.jpg",
      "images/catalog/mg/mg-octagon-chrome-black-emblem_2.jpg"
    ]
  },
  {
    "id": "mg-flip-key-matte-black-gunmetal-armor",
    "name": "MG 3-BUTTON FLIP KEY ARMOR COVER (GUNMETAL & MATTE BLACK)",
    "brand": "mg",
    "category": "keyscover",
    "fitment": "MG5, MG6, ZS, HS 3-Button Flip Key",
    "description": "Dark gunmetal alloy outer frame and matte black MG-branded back cover with 3-button silicone pad.",
    "isSoldOut": false,
    "image": "images/catalog/mg/mg-flip-key-matte-black-gunmetal-armor_1.jpg",
    "images": [
      "images/catalog/mg/mg-flip-key-matte-black-gunmetal-armor_1.jpg",
      "images/catalog/mg/mg-flip-key-matte-black-gunmetal-armor_2.jpg"
    ]
  },
  {
    "id": "mg-octagon-hollow-cutout-black-emblem",
    "name": "MG HOLLOW CUT-OUT OCTAGON EMBLEM (GLOSS BLACK)",
    "brand": "mg",
    "category": "carnameslogo",
    "fitment": "MG5, MG6, ZS, HS, MG7 Front & Rear",
    "description": "Skeleton cut-out style gloss black MG octagon emblem with open recesses between letters and frame.",
    "isSoldOut": false,
    "image": "images/catalog/mg/mg-octagon-hollow-cutout-black-emblem_1.jpg",
    "images": [
      "images/catalog/mg/mg-octagon-hollow-cutout-black-emblem_1.jpg"
    ]
  },
  {
    "id": "mg-netblue-chrome-blue-badge-pair",
    "name": "MG NETBLUE ENGINE BADGES (CHROME & BLUE PAIR)",
    "brand": "mg",
    "category": "tags",
    "fitment": "MG5, MG6, ZS, HS, RX5 NetBlue Models",
    "description": "Pair of chrome and black MG NetBlue trunk/fender badges featuring 3D blue pyramid cube.",
    "isSoldOut": false,
    "image": "images/catalog/mg/mg-netblue-chrome-blue-badge-pair_1.jpg",
    "images": [
      "images/catalog/mg/mg-netblue-chrome-blue-badge-pair_1.jpg"
    ]
  },
  {
    "id": "mg7-chrome-and-gunmetal-trunk-duo",
    "name": "MG 7 REAR TRUNK LETTERING (CHROME, GUNMETAL & GLOSS BLACK)",
    "brand": "mg",
    "category": "carnameslogo",
    "fitment": "MG7 Fastback Sedan",
    "description": "Wide-spaced MG 7 rear trunk lettering strips available in bright chrome, dark gunmetal, and stealth gloss black.",
    "isSoldOut": false,
    "image": "images/catalog/mg/mg7-chrome-and-gunmetal-trunk-duo_1.jpg",
    "images": [
      "images/catalog/mg/mg7-chrome-and-gunmetal-trunk-duo_1.jpg",
      "images/catalog/mg/mg7-chrome-and-gunmetal-trunk-duo_2.jpg"
    ]
  },
  {
    "id": "mg-large-octagon-gloss-black-chrome",
    "name": "MG LARGE OCTAGON EMBLEM (BLACK & CHROME OUTLINE)",
    "brand": "mg",
    "category": "carnameslogo",
    "fitment": "MG7, MG5, MG6, HS Front Grille & Trunk",
    "description": "Large black MG octagon front and rear emblem with crisp silver-chrome outline.",
    "isSoldOut": false,
    "image": "images/catalog/mg/mg-large-octagon-gloss-black-chrome_1.jpg",
    "images": [
      "images/catalog/mg/mg-large-octagon-gloss-black-chrome_1.jpg"
    ]
  },
  {
    "id": "mg-large-octagon-all-chrome-emblem",
    "name": "MG LARGE OCTAGON EMBLEM (FULL CHROME)",
    "brand": "mg",
    "category": "carnameslogo",
    "fitment": "MG7, MG5, MG6, HS Front Grille & Trunk",
    "description": "Large full-chrome octagonal MG emblem on precision adhesive transfer backing.",
    "isSoldOut": false,
    "image": "images/catalog/mg/mg-large-octagon-all-chrome-emblem_1.jpg",
    "images": [
      "images/catalog/mg/mg-large-octagon-all-chrome-emblem_1.jpg"
    ]
  },
  {
    "id": "mg-black-leather-metal-keychain",
    "name": "MG BLACK LEATHER & ENGRAVED METAL KEYCHAIN",
    "brand": "mg",
    "category": "medals",
    "fitment": "All MG Key Fobs & Keyrings",
    "description": "Black white-stitched leather strap keychain with brushed silver top engraved with the MG octagon emblem.",
    "isSoldOut": false,
    "image": "images/catalog/mg/mg-black-leather-metal-keychain_1.jpg",
    "images": [
      "images/catalog/mg/mg-black-leather-metal-keychain_1.jpg"
    ]
  },
  {
    "id": "mg7-gloss-black-octagon-letters-combo",
    "name": "MG 7 GLOSS BLACK EMBLEM & TRUNK LETTERING COMBO",
    "brand": "mg",
    "category": "carnameslogo",
    "fitment": "MG7 Fastback Sedan",
    "description": "Matched stealth gloss black kit including large MG octagon emblem and MG 7 trunk letters.",
    "isSoldOut": false,
    "image": "images/catalog/mg/mg7-gloss-black-octagon-letters-combo_1.jpg",
    "images": [
      "images/catalog/mg/mg7-gloss-black-octagon-letters-combo_1.jpg"
    ]
  },
  {
    "id": "mg7-chrome-octagon-letters-combo",
    "name": "MG 7 CHROME EMBLEM & TRUNK LETTERING COMBO",
    "brand": "mg",
    "category": "carnameslogo",
    "fitment": "MG7 Fastback Sedan",
    "description": "Matched chrome styling set pairing a large MG octagon emblem with chrome MG 7 trunk letters.",
    "isSoldOut": false,
    "image": "images/catalog/mg/mg7-chrome-octagon-letters-combo_1.jpg",
    "images": [
      "images/catalog/mg/mg7-chrome-octagon-letters-combo_1.jpg"
    ]
  },
  {
    "id": "mg-gloss-hard-key-covers-collection",
    "name": "MG HARD SHELL SMART KEY COVERS (CARBON, BLACK & RED)",
    "brand": "mg",
    "category": "keyscover",
    "fitment": "MG5, MG6, ZS, HS, MG7 Smart Key",
    "description": "Glossy hard shell MG smart key fob covers in carbon fiber, gloss black, and metallic red with chrome MG crest.",
    "isSoldOut": false,
    "image": "images/catalog/mg/mg-gloss-hard-key-covers-collection_1.jpg",
    "images": [
      "images/catalog/mg/mg-gloss-hard-key-covers-collection_1.jpg",
      "images/catalog/mg/mg-gloss-hard-key-covers-collection_2.jpg"
    ]
  },
  {
    "id": "mini-cooper-s-union-jack-chrome-badge",
    "name": "MINI COOPER S UNION JACK CHROME BADGE",
    "brand": "minicooper",
    "category": "tags",
    "fitment": "Mini Cooper S, Countryman, Clubman F54/F55/F56/F60",
    "description": "3D metal MINI Cooper S badge pairing monochrome Union Jack crest with polished chrome S.",
    "isSoldOut": false,
    "image": "images/catalog/minicooper/mini-cooper-s-union-jack-chrome-badge_1.jpg",
    "images": [
      "images/catalog/minicooper/mini-cooper-s-union-jack-chrome-badge_1.jpg"
    ]
  },
  {
    "id": "mini-antenna-black-jack",
    "name": "MINI SHORT ROOF SPORT ANTENNA (BLACK JACK UNION FLAG)",
    "brand": "minicooper",
    "category": "tobb",
    "fitment": "All Mini Cooper Roof Antenna Mounts (M5 & M6)",
    "description": "Compact roof sport antenna in monochrome Black Jack Union Flag finish with brass thread adapters.",
    "isSoldOut": false,
    "image": "images/catalog/minicooper/mini-antenna-black-jack_1.jpg",
    "images": [
      "images/catalog/minicooper/mini-antenna-black-jack_1.jpg"
    ]
  },
  {
    "id": "mini-union-jack-seatbelt-silencer-pair",
    "name": "MINI UNION JACK SEATBELT SILENCER BUCKLE CLIPS (PAIR)",
    "brand": "minicooper",
    "category": "seatbelt",
    "fitment": "All Mini Cooper Seatbelt Buckles",
    "description": "Pair of Mini Cooper Union Jack flag seatbelt alarm silencer clips with black metal latch.",
    "isSoldOut": false,
    "image": "images/catalog/minicooper/mini-union-jack-seatbelt-silencer-pair_1.jpg",
    "images": [
      "images/catalog/minicooper/mini-union-jack-seatbelt-silencer-pair_1.jpg"
    ]
  },
  {
    "id": "mini-jcw-checkered-and-black-badges",
    "name": "MINI JOHN COOPER WORKS BADGES (CHECKERED & BLACK DUO)",
    "brand": "minicooper",
    "category": "tags",
    "fitment": "Mini Cooper S & JCW Grille / Trunk",
    "description": "Two distinct John Cooper Works performance badges: brushed silver checkered flag plaque and gloss black cutout.",
    "isSoldOut": false,
    "image": "images/catalog/minicooper/mini-jcw-checkered-and-black-badges_1.jpg",
    "images": [
      "images/catalog/minicooper/mini-jcw-checkered-and-black-badges_1.jpg"
    ]
  },
  {
    "id": "mini-cooper-s-union-jack-black-badge",
    "name": "MINI COOPER S UNION JACK & GLOSS BLACK S EMBLEM",
    "brand": "minicooper",
    "category": "tags",
    "fitment": "Mini Cooper S F54, F55, F56, F57, F60",
    "description": "3D Union Jack UK flag square emblem paired with stealth gloss black S character.",
    "isSoldOut": false,
    "image": "images/catalog/minicooper/mini-cooper-s-union-jack-black-badge_1.jpg",
    "images": [
      "images/catalog/minicooper/mini-cooper-s-union-jack-black-badge_1.jpg"
    ]
  },
  {
    "id": "opel-blitz-silver-wheel-center-caps",
    "name": "OPEL BLITZ METALLIC SILVER WHEEL CENTER CAPS (SET OF 4)",
    "brand": "opel",
    "category": "calipercovers",
    "fitment": "Opel Astra, Insignia, Corsa, Mokka, Grandland",
    "description": "Set of 4 metallic silver Opel wheel hub center caps featuring chrome Blitz lightning emblem.",
    "isSoldOut": false,
    "image": "images/catalog/opel/opel-blitz-silver-wheel-center-caps_1.jpg",
    "images": [
      "images/catalog/opel/opel-blitz-silver-wheel-center-caps_1.jpg",
      "images/catalog/opel/opel-blitz-silver-wheel-center-caps_2.jpg"
    ]
  },
  {
    "id": "opel-brand-gloss-black-trunk-letters",
    "name": "OPEL GLOSS BLACK REAR TRUNK LETTERING",
    "brand": "opel",
    "category": "carnameslogo",
    "fitment": "Opel Astra, Insignia, Corsa, Grandland",
    "description": "Stealth gloss black OPEL rear trunk lettering spaced on transfer carrier.",
    "isSoldOut": false,
    "image": "images/catalog/opel/opel-brand-gloss-black-trunk-letters_1.jpg",
    "images": [
      "images/catalog/opel/opel-brand-gloss-black-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "opel-astra-complete-gloss-black-combo",
    "name": "OPEL & ASTRA COMPLETE GLOSS BLACK EMBLEM COMBO SET",
    "brand": "opel",
    "category": "carnameslogo",
    "fitment": "Opel Astra J / K / L All Generations",
    "description": "Full gloss black blackout kit combining OPEL letters, ASTRA letters, and matching gloss black Opel Blitz round emblem.",
    "isSoldOut": false,
    "image": "images/catalog/opel/opel-astra-complete-gloss-black-combo_1.jpg",
    "images": [
      "images/catalog/opel/opel-astra-complete-gloss-black-combo_1.jpg",
      "images/catalog/opel/opel-astra-complete-gloss-black-combo_2.jpg"
    ]
  },
  {
    "id": "peugeot-lion-shield-black-pair",
    "name": "PEUGEOT NEW LION SHIELD EMBLEMS (BLACK & CHROME PAIR)",
    "brand": "peugeot",
    "category": "carnameslogo",
    "fitment": "Peugeot 208, 308, 2008, 3008, 508, 5008",
    "description": "Pair of modern gloss black Peugeot lion-head crest emblems outlined in chrome with PEUGEOT header.",
    "isSoldOut": false,
    "image": "images/catalog/peugeot/peugeot-lion-shield-black-pair_1.jpg",
    "images": [
      "images/catalog/peugeot/peugeot-lion-shield-black-pair_1.jpg"
    ]
  },
  {
    "id": "peugeot-standing-lion-chrome-emblem",
    "name": "PEUGEOT STANDING LION TRUNK EMBLEM (CHROME)",
    "brand": "peugeot",
    "category": "carnameslogo",
    "fitment": "Peugeot 301, 308, 508, 3008, 5008",
    "description": "Classic sculpted chrome Peugeot standing lion emblem for hood, grille, or trunk.",
    "isSoldOut": false,
    "image": "images/catalog/peugeot/peugeot-standing-lion-chrome-emblem_1.jpg",
    "images": [
      "images/catalog/peugeot/peugeot-standing-lion-chrome-emblem_1.jpg"
    ]
  },
  {
    "id": "peugeot-508-gloss-black-trunk-letters",
    "name": "PEUGEOT 508 GLOSS BLACK TRUNK LETTERING",
    "brand": "peugeot",
    "category": "carnameslogo",
    "fitment": "Peugeot 508 Fastback & SW",
    "description": "Gloss black 508 rear trunk emblem in white alignment template.",
    "isSoldOut": false,
    "image": "images/catalog/peugeot/peugeot-508-gloss-black-trunk-letters_1.jpg",
    "images": [
      "images/catalog/peugeot/peugeot-508-gloss-black-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "peugeot-508-chrome-trunk-letters",
    "name": "PEUGEOT 508 CHROME TRUNK LETTERING",
    "brand": "peugeot",
    "category": "carnameslogo",
    "fitment": "Peugeot 508 Fastback & SW",
    "description": "Mirror chrome 508 rear trunk lettering in precision white template sleeve.",
    "isSoldOut": false,
    "image": "images/catalog/peugeot/peugeot-508-chrome-trunk-letters_1.jpg",
    "images": [
      "images/catalog/peugeot/peugeot-508-chrome-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "peugeot-psa-forged-carbon-armor-cover",
    "name": "PEUGEOT & PSA FORGED CARBON SMART KEY ARMOR COVER",
    "brand": "peugeot",
    "category": "keyscover",
    "fitment": "Peugeot 2008, 3008, 5008, 508 / Citroen / Opel 3-Button Key",
    "description": "Hexagonal gunmetal zinc-alloy smart key armor frame with marbled forged carbon back shell and strap keychain.",
    "isSoldOut": false,
    "image": "images/catalog/peugeot/peugeot-psa-forged-carbon-armor-cover_1.jpg",
    "images": [
      "images/catalog/peugeot/peugeot-psa-forged-carbon-armor-cover_1.jpg",
      "images/catalog/peugeot/peugeot-psa-forged-carbon-armor-cover_2.jpg"
    ]
  },
  {
    "id": "peugeot-psa-woven-carbon-armor-cover",
    "name": "PEUGEOT & PSA WOVEN CARBON SMART KEY ARMOR COVER",
    "brand": "peugeot",
    "category": "keyscover",
    "fitment": "Peugeot 2008, 3008, 5008, 508 / Citroen / Opel 3-Button Key",
    "description": "Gunmetal zinc-alloy smart key cover with 3K woven carbon fiber backplate, strap keychain, and screwdriver.",
    "isSoldOut": false,
    "image": "images/catalog/peugeot/peugeot-psa-woven-carbon-armor-cover_1.jpg",
    "images": [
      "images/catalog/peugeot/peugeot-psa-woven-carbon-armor-cover_1.jpg",
      "images/catalog/peugeot/peugeot-psa-woven-carbon-armor-cover_2.jpg"
    ]
  },
  {
    "id": "peugeot-3008-gloss-black-trunk-letters",
    "name": "PEUGEOT 3008 GLOSS BLACK TRUNK LETTERING",
    "brand": "peugeot",
    "category": "carnameslogo",
    "fitment": "Peugeot 3008 SUV",
    "description": "Stealth gloss black 3008 rear trunk badge pre-spaced on white transfer template.",
    "isSoldOut": false,
    "image": "images/catalog/peugeot/peugeot-3008-gloss-black-trunk-letters_1.jpg",
    "images": [
      "images/catalog/peugeot/peugeot-3008-gloss-black-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "peugeot-301-chrome-trunk-letters",
    "name": "PEUGEOT 301 CHROME TRUNK LETTERING",
    "brand": "peugeot",
    "category": "carnameslogo",
    "fitment": "Peugeot 301 Sedan",
    "description": "OEM mirror chrome 301 rear trunk badge in alignment frame.",
    "isSoldOut": false,
    "image": "images/catalog/peugeot/peugeot-301-chrome-trunk-letters_1.jpg",
    "images": [
      "images/catalog/peugeot/peugeot-301-chrome-trunk-letters_1.jpg",
      "images/catalog/peugeot/peugeot-301-chrome-trunk-letters_2.jpg"
    ]
  },
  {
    "id": "peugeot-classic-bold-chrome-trunk-letters",
    "name": "PEUGEOT CLASSIC BOLD CHROME TRUNK LETTERING",
    "brand": "peugeot",
    "category": "carnameslogo",
    "fitment": "Peugeot 301, 308, 508, 3008",
    "description": "Classic bold chrome PEUGEOT trunk lettering strip on white adhesive carrier.",
    "isSoldOut": false,
    "image": "images/catalog/peugeot/peugeot-classic-bold-chrome-trunk-letters_1.jpg",
    "images": [
      "images/catalog/peugeot/peugeot-classic-bold-chrome-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "peugeot-standing-lion-gloss-black-trunk",
    "name": "PEUGEOT STANDING LION TRUNK EMBLEM (GLOSS BLACK)",
    "brand": "peugeot",
    "category": "carnameslogo",
    "fitment": "Peugeot 301, 208, 308, 508 Rear Trunk",
    "description": "Compact gloss black Peugeot standing lion rear trunk emblem on adhesive backing.",
    "isSoldOut": false,
    "image": "images/catalog/peugeot/peugeot-standing-lion-gloss-black-trunk_1.jpg",
    "images": [
      "images/catalog/peugeot/peugeot-standing-lion-gloss-black-trunk_1.jpg"
    ]
  },
  {
    "id": "peugeot-standing-lion-gloss-black-large",
    "name": "PEUGEOT STANDING LION LARGE GRILLE EMBLEM (GLOSS BLACK)",
    "brand": "peugeot",
    "category": "carnameslogo",
    "fitment": "Peugeot 3008, 5008, 508 Front & Large Trunk",
    "description": "Oversized gloss black Peugeot standing lion emblem for main front grille or large tailgates.",
    "isSoldOut": false,
    "image": "images/catalog/peugeot/peugeot-standing-lion-gloss-black-large_1.jpg",
    "images": [
      "images/catalog/peugeot/peugeot-standing-lion-gloss-black-large_1.jpg"
    ]
  },
  {
    "id": "peugeot-modern-spaced-black-trunk-letters",
    "name": "PEUGEOT MODERN SPACED TRUNK LETTERING (GLOSS BLACK)",
    "brand": "peugeot",
    "category": "carnameslogo",
    "fitment": "Peugeot 208, 2008, 3008, 5008, 508",
    "description": "Slim modern wide-spaced gloss black PEUGEOT rear tailgate lettering in clear sleeve.",
    "isSoldOut": false,
    "image": "images/catalog/peugeot/peugeot-modern-spaced-black-trunk-letters_1.jpg",
    "images": [
      "images/catalog/peugeot/peugeot-modern-spaced-black-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "peugeot-lion-shield-large-emblem",
    "name": "PEUGEOT LARGE NEW LION SHIELD GRILLE EMBLEM",
    "brand": "peugeot",
    "category": "carnameslogo",
    "fitment": "Peugeot New-Gen 308, 408, 3008, 5008",
    "description": "Oversized modern gloss black Peugeot lion shield emblem with brushed chrome borders and crest.",
    "isSoldOut": false,
    "image": "images/catalog/peugeot/peugeot-lion-shield-large-emblem_1.jpg",
    "images": [
      "images/catalog/peugeot/peugeot-lion-shield-large-emblem_1.jpg"
    ]
  },
  {
    "id": "peugeot-lion-shield-fender-pair",
    "name": "PEUGEOT NEW LION SHIELD FENDER EMBLEMS (PAIR)",
    "brand": "peugeot",
    "category": "carnameslogo",
    "fitment": "Peugeot Front Fenders / Side Pillars",
    "description": "Pair of compact new-generation Peugeot black and chrome lion shield fender badges.",
    "isSoldOut": false,
    "image": "images/catalog/peugeot/peugeot-lion-shield-fender-pair_1.jpg",
    "images": [
      "images/catalog/peugeot/peugeot-lion-shield-fender-pair_1.jpg"
    ]
  },
  {
    "id": "peugeot-silver-standing-lion-wheel-caps",
    "name": "PEUGEOT METALLIC SILVER STANDING LION WHEEL CAPS (SET OF 4)",
    "brand": "peugeot",
    "category": "calipercovers",
    "fitment": "Peugeot 301, 308, 508, 3008 Alloy Rims",
    "description": "Set of 4 metallic silver Peugeot wheel center caps with raised Peugeot standing lion emblem.",
    "isSoldOut": false,
    "image": "images/catalog/peugeot/peugeot-silver-standing-lion-wheel-caps_1.jpg",
    "images": [
      "images/catalog/peugeot/peugeot-silver-standing-lion-wheel-caps_1.jpg"
    ]
  },
  {
    "id": "peugeot-black-chrome-lion-wheel-caps",
    "name": "PEUGEOT GLOSS BLACK & CHROME LION WHEEL CAPS (SET OF 4)",
    "brand": "peugeot",
    "category": "calipercovers",
    "fitment": "Peugeot 2008, 3008, 5008, 508 Alloy Rims",
    "description": "Set of 4 gloss black Peugeot wheel center hub caps accented with polished chrome standing lion logo.",
    "isSoldOut": false,
    "image": "images/catalog/peugeot/peugeot-black-chrome-lion-wheel-caps_1.jpg",
    "images": [
      "images/catalog/peugeot/peugeot-black-chrome-lion-wheel-caps_1.jpg"
    ]
  },
  {
    "id": "peugeot-gloss-hard-key-covers-pair",
    "name": "PEUGEOT HARD SHELL SMART KEY COVERS (BLACK & CARBON PAIR)",
    "brand": "peugeot",
    "category": "keyscover",
    "fitment": "Peugeot 2008, 3008, 5008, 508 Smart Key",
    "description": "Gloss black and carbon-fiber pattern Peugeot hard smart key covers with chrome lion back crest.",
    "isSoldOut": false,
    "image": "images/catalog/peugeot/peugeot-gloss-hard-key-covers-pair_1.jpg",
    "images": [
      "images/catalog/peugeot/peugeot-gloss-hard-key-covers-pair_1.jpg"
    ]
  },
  {
    "id": "peugeot-lion-shield-round-keychain",
    "name": "PEUGEOT NEW LION SHIELD ENAMEL METAL KEYCHAIN",
    "brand": "peugeot",
    "category": "medals",
    "fitment": "All Peugeot Key Fobs",
    "description": "Polished chrome metal keychain inset with black enamel disc and modern Peugeot lion shield crest.",
    "isSoldOut": false,
    "image": "images/catalog/peugeot/peugeot-lion-shield-round-keychain_1.jpg",
    "images": [
      "images/catalog/peugeot/peugeot-lion-shield-round-keychain_1.jpg"
    ]
  },
  {
    "id": "porsche-satin-gold-crest-hood-emblem",
    "name": "PORSCHE GOLD CREST HOOD EMBLEM (SATIN GOLD FINISH)",
    "brand": "porsche",
    "category": "carnameslogo",
    "fitment": "Porsche 911, Cayenne, Macan, Panamera, Boxster",
    "description": "Satin gold Porsche crest front hood emblem with black PORSCHE lettering and crimson enamel bars.",
    "isSoldOut": false,
    "image": "images/catalog/porsche/porsche-satin-gold-crest-hood-emblem_1.jpg",
    "images": [
      "images/catalog/porsche/porsche-satin-gold-crest-hood-emblem_1.jpg"
    ]
  },
  {
    "id": "porsche-polished-gold-crest-hood-emblem",
    "name": "PORSCHE GOLD CREST HOOD EMBLEM (POLISHED GLOSSY GOLD)",
    "brand": "porsche",
    "category": "carnameslogo",
    "fitment": "Porsche 911, Cayenne, Macan, Panamera, Cayman",
    "description": "Mirror-polished glossy gold Porsche crest front hood emblem with dark raised STUTTGART shield detail.",
    "isSoldOut": false,
    "image": "images/catalog/porsche/porsche-polished-gold-crest-hood-emblem_1.jpg",
    "images": [
      "images/catalog/porsche/porsche-polished-gold-crest-hood-emblem_1.jpg"
    ]
  },
  {
    "id": "porsche-cayenne-stainless-sport-pedals-set",
    "name": "PORSCHE CAYENNE BRUSHED STAINLESS SPORT PEDALS (3 PCS)",
    "brand": "porsche",
    "category": "padelshifts",
    "fitment": "Porsche Cayenne (955/957/958), VW Touareg, Audi Q7",
    "description": "3-piece brushed stainless steel & grip rubber automatic pedal set including parking brake pedal.",
    "isSoldOut": false,
    "image": "images/catalog/porsche/porsche-cayenne-stainless-sport-pedals-set_1.jpg",
    "images": [
      "images/catalog/porsche/porsche-cayenne-stainless-sport-pedals-set_1.jpg"
    ]
  },
  {
    "id": "seat-ibiza-block-gloss-black-letters",
    "name": "SEAT IBIZA BLOCK REAR TRUNK LETTERING (GLOSS BLACK)",
    "brand": "seat",
    "category": "carnameslogo",
    "fitment": "SEAT Ibiza Mk4 / Mk5",
    "description": "Uppercase block gloss black IBIZA rear tailgate lettering on transfer sheet.",
    "isSoldOut": false,
    "image": "images/catalog/seat/seat-ibiza-block-gloss-black-letters_1.jpg",
    "images": [
      "images/catalog/seat/seat-ibiza-block-gloss-black-letters_1.jpg"
    ]
  },
  {
    "id": "seat-ibiza-chrome-cursive-letters",
    "name": "SEAT IBIZA CURSIVE SCRIPT LETTERING (CHROME)",
    "brand": "seat",
    "category": "carnameslogo",
    "fitment": "SEAT Ibiza Mk5 Facelift",
    "description": "Modern signature handwritten chrome Ibiza rear tailgate emblem on white carrier.",
    "isSoldOut": false,
    "image": "images/catalog/seat/seat-ibiza-chrome-cursive-letters_1.jpg",
    "images": [
      "images/catalog/seat/seat-ibiza-chrome-cursive-letters_1.jpg"
    ]
  },
  {
    "id": "seat-leon-chrome-cursive-letters",
    "name": "SEAT LEON CURSIVE SCRIPT LETTERING (CHROME)",
    "brand": "seat",
    "category": "carnameslogo",
    "fitment": "SEAT Leon Mk4 (KL)",
    "description": "Mirror chrome handwritten Leon rear trunk badge on alignment carrier.",
    "isSoldOut": false,
    "image": "images/catalog/seat/seat-leon-chrome-cursive-letters_1.jpg",
    "images": [
      "images/catalog/seat/seat-leon-chrome-cursive-letters_1.jpg"
    ]
  },
  {
    "id": "seat-leon-block-gloss-black-letters",
    "name": "SEAT LEON BLOCK REAR TRUNK LETTERING (GLOSS BLACK)",
    "brand": "seat",
    "category": "carnameslogo",
    "fitment": "SEAT Leon Mk3 (5F) & Mk4",
    "description": "Bold gloss black wide-spaced uppercase LEON rear tailgate lettering.",
    "isSoldOut": false,
    "image": "images/catalog/seat/seat-leon-block-gloss-black-letters_1.jpg",
    "images": [
      "images/catalog/seat/seat-leon-block-gloss-black-letters_1.jpg"
    ]
  },
  {
    "id": "seat-fr-3d-emblems-trio-pack",
    "name": "SEAT FR 3D METAL BADGES (RED & BLACK TRIO VARIATIONS)",
    "brand": "seat",
    "category": "tags",
    "fitment": "SEAT Leon, Ibiza, Ateca, Arona FR",
    "description": "Trio showcase of 3D metal SEAT FR front and rear emblems in black/red and reverse red/black trims.",
    "isSoldOut": false,
    "image": "images/catalog/seat/seat-fr-3d-emblems-trio-pack_1.jpg",
    "images": [
      "images/catalog/seat/seat-fr-3d-emblems-trio-pack_1.jpg"
    ]
  },
  {
    "id": "seat-fr-black-red-metal-keychain",
    "name": "SEAT FR METAL KEYCHAIN (BLACK F & RED R)",
    "brand": "seat",
    "category": "medals",
    "fitment": "All SEAT Key Fobs",
    "description": "Heavy chrome-framed metal SEAT FR keychain with gloss black F and red enamel R.",
    "isSoldOut": false,
    "image": "images/catalog/seat/seat-fr-black-red-metal-keychain_1.jpg",
    "images": [
      "images/catalog/seat/seat-fr-black-red-metal-keychain_1.jpg"
    ]
  },
  {
    "id": "seat-grey-black-mirror-hanging-ornament",
    "name": "SEAT S LOGO MIRROR HANGING ORNAMENT (GREY & BLACK)",
    "brand": "seat",
    "category": "medals",
    "fitment": "All SEAT Vehicles / Interior Mirror",
    "description": "Grey and black S logo hanging charm for interior rearview mirror.",
    "isSoldOut": false,
    "image": "images/catalog/seat/seat-grey-black-mirror-hanging-ornament_1.jpg",
    "images": [
      "images/catalog/seat/seat-grey-black-mirror-hanging-ornament_1.jpg"
    ]
  },
  {
    "id": "seat-leon-fr-mirror-hanging-ornament",
    "name": "SEAT LEON FR 5F MIRROR HANGING ORNAMENT",
    "brand": "seat",
    "category": "medals",
    "fitment": "SEAT Leon 5F / Ibiza / Enthusiasts",
    "description": "White SEAT Leon Mk3 FR front-view cartoon hanging mirror accessory with red FR grille detail.",
    "isSoldOut": false,
    "image": "images/catalog/seat/seat-leon-fr-mirror-hanging-ornament_1.jpg",
    "images": [
      "images/catalog/seat/seat-leon-fr-mirror-hanging-ornament_1.jpg"
    ]
  },
  {
    "id": "seat-s-black-red-65mm-wheel-caps",
    "name": "SEAT S 65MM BLACK & RED WHEEL CENTER CAPS (SET OF 4)",
    "brand": "seat",
    "category": "calipercovers",
    "fitment": "SEAT Leon, Ateca, Tarraco, Exeo 65mm Rims",
    "description": "Set of 4 larger ~65mm gloss black SEAT wheel caps featuring chrome S outlined in racing red.",
    "isSoldOut": false,
    "image": "images/catalog/seat/seat-s-black-red-65mm-wheel-caps_1.jpg",
    "images": [
      "images/catalog/seat/seat-s-black-red-65mm-wheel-caps_1.jpg",
      "images/catalog/seat/seat-s-black-red-65mm-wheel-caps_2.jpg"
    ]
  },
  {
    "id": "seat-s-black-red-56mm-wheel-caps",
    "name": "SEAT S 56MM BLACK & RED WHEEL CENTER CAPS (SET OF 4)",
    "brand": "seat",
    "category": "calipercovers",
    "fitment": "SEAT Ibiza, Arona, Leon 56mm Rims",
    "description": "Set of 4 compact ~56mm gloss black SEAT wheel center caps with chrome and red S logo.",
    "isSoldOut": false,
    "image": "images/catalog/seat/seat-s-black-red-56mm-wheel-caps_1.jpg",
    "images": [
      "images/catalog/seat/seat-s-black-red-56mm-wheel-caps_1.jpg"
    ]
  },
  {
    "id": "seat-ateca-chrome-trunk-letters",
    "name": "SEAT ATECA CHROME REAR TRUNK LETTERING",
    "brand": "seat",
    "category": "carnameslogo",
    "fitment": "SEAT Ateca SUV",
    "description": "Factory-font chrome Ateca rear trunk badge in clear carrier tape.",
    "isSoldOut": false,
    "image": "images/catalog/seat/seat-ateca-chrome-trunk-letters_1.jpg",
    "images": [
      "images/catalog/seat/seat-ateca-chrome-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "seat-fr-matte-silver-adhesive-badge",
    "name": "SEAT FR BRUSHED MATTE SILVER TRUNK BADGE",
    "brand": "seat",
    "category": "tags",
    "fitment": "SEAT Leon, Ibiza, Ateca FR",
    "description": "Minimalist brushed matte silver FR rear trunk performance emblem.",
    "isSoldOut": false,
    "image": "images/catalog/seat/seat-fr-matte-silver-adhesive-badge_1.jpg",
    "images": [
      "images/catalog/seat/seat-fr-matte-silver-adhesive-badge_1.jpg"
    ]
  },
  {
    "id": "seat-s-classic-chrome-grille-emblem",
    "name": "SEAT S CLASSIC CHROME GRILLE & TRUNK EMBLEM",
    "brand": "seat",
    "category": "carnameslogo",
    "fitment": "SEAT Leon, Ibiza, Altea, Toledo Grilles",
    "description": "Classic SEAT 3-bar chrome & black S front grille emblem with 6 perimeter mounting clips.",
    "isSoldOut": false,
    "image": "images/catalog/seat/seat-s-classic-chrome-grille-emblem_1.jpg",
    "images": [
      "images/catalog/seat/seat-s-classic-chrome-grille-emblem_1.jpg",
      "images/catalog/seat/seat-s-classic-chrome-grille-emblem_2.jpg"
    ]
  },
  {
    "id": "seat-leon-gloss-black-cursive-letters",
    "name": "SEAT LEON CURSIVE SCRIPT LETTERING (GLOSS BLACK)",
    "brand": "seat",
    "category": "carnameslogo",
    "fitment": "SEAT Leon Mk4 (KL)",
    "description": "Gloss black modern handwritten Leon tailgate emblem on alignment template.",
    "isSoldOut": false,
    "image": "images/catalog/seat/seat-leon-gloss-black-cursive-letters_1.jpg",
    "images": [
      "images/catalog/seat/seat-leon-gloss-black-cursive-letters_1.jpg"
    ]
  },
  {
    "id": "seat-fr-chrome-black-fender-blades",
    "name": "SEAT FR TAPERED FENDER BLADE BADGES (CHROME & BLACK PAIR)",
    "brand": "seat",
    "category": "tags",
    "fitment": "SEAT Leon, Ibiza, Ateca Side Fenders",
    "description": "Pair of gloss black and chrome-framed side fender wing blades with red/chrome FR emblem.",
    "isSoldOut": false,
    "image": "images/catalog/seat/seat-fr-chrome-black-fender-blades_1.jpg",
    "images": [
      "images/catalog/seat/seat-fr-chrome-black-fender-blades_1.jpg"
    ]
  },
  {
    "id": "seat-fr-large-red-black-emblem",
    "name": "SEAT FR OVERSIZED RED & BLACK TRUNK EMBLEM",
    "brand": "seat",
    "category": "tags",
    "fitment": "SEAT Leon, Ibiza, Ateca",
    "description": "Oversized 3D SEAT FR grille/trunk emblem featuring red F and gloss black R inside chrome border.",
    "isSoldOut": false,
    "image": "images/catalog/seat/seat-fr-large-red-black-emblem_1.jpg",
    "images": [
      "images/catalog/seat/seat-fr-large-red-black-emblem_1.jpg"
    ]
  },
  {
    "id": "seat-fr-silver-mini-badge-and-key-dot",
    "name": "SEAT FR MINI SILVER BADGE & KEY FOB EMBLEM STICKER",
    "brand": "seat",
    "category": "tags",
    "fitment": "SEAT Key Fobs & Cockpit Trim",
    "description": "Compact brushed-silver FR mini badge bundled with domed black and chrome SEAT S key fob sticker.",
    "isSoldOut": false,
    "image": "images/catalog/seat/seat-fr-silver-mini-badge-and-key-dot_1.jpg",
    "images": [
      "images/catalog/seat/seat-fr-silver-mini-badge-and-key-dot_1.jpg"
    ]
  },
  {
    "id": "seat-fr-carbon-red-mini-badge-and-key-dot",
    "name": "SEAT FR MINI CARBON & RED BADGE + KEY FOB STICKER",
    "brand": "seat",
    "category": "tags",
    "fitment": "SEAT Key Fobs & Cockpit Trim",
    "description": "Compact black carbon and red FR mini badge paired with domed SEAT S key emblem overlay.",
    "isSoldOut": false,
    "image": "images/catalog/seat/seat-fr-carbon-red-mini-badge-and-key-dot_1.jpg",
    "images": [
      "images/catalog/seat/seat-fr-carbon-red-mini-badge-and-key-dot_1.jpg"
    ]
  },
  {
    "id": "seat-fr-black-red-seatbelt-webbing",
    "name": "SEAT FR BLACK & RED SEATBELT WEBBING STRAP ROLL",
    "brand": "seat",
    "category": "scatbelt",
    "fitment": "Universal SEAT Sport Seatbelt Retrofit",
    "description": "Black heavy-duty racing seatbelt webbing with bright red borders and red/silver SEAT FR print.",
    "isSoldOut": false,
    "image": "images/catalog/seat/seat-fr-black-red-seatbelt-webbing_1.jpg",
    "images": [
      "images/catalog/seat/seat-fr-black-red-seatbelt-webbing_1.jpg"
    ]
  },
  {
    "id": "seat-mqb-evo-woodgrain-carbon-key-trio",
    "name": "SEAT SMART KEY ARMOR COVERS (WOODGRAIN, CARBON & FORGED)",
    "brand": "seat",
    "category": "keyscover",
    "fitment": "SEAT Leon Mk4, Tarraco, Formentor MQB Evo Key",
    "description": "Three SEAT metal-frame smart key covers finished in walnut woodgrain, woven carbon, and forged carbon with S logo.",
    "isSoldOut": false,
    "image": "images/catalog/seat/seat-mqb-evo-woodgrain-carbon-key-trio_1.jpg",
    "images": [
      "images/catalog/seat/seat-mqb-evo-woodgrain-carbon-key-trio_1.jpg"
    ]
  },
  {
    "id": "seat-red-logo-vertical-strap-keychain",
    "name": "SEAT VERTICAL BLACK LEATHER STRAP KEYCHAIN (RED S)",
    "brand": "seat",
    "category": "medals",
    "fitment": "All SEAT Key Fobs",
    "description": "Vertical black leather strap keychain with metal ring, red S badge, and silver SEAT lettering.",
    "isSoldOut": false,
    "image": "images/catalog/seat/seat-red-logo-vertical-strap-keychain_1.jpg",
    "images": [
      "images/catalog/seat/seat-red-logo-vertical-strap-keychain_1.jpg"
    ]
  },
  {
    "id": "seat-fr-mini-6finishes-adhesive-set",
    "name": "SEAT FR MINI ADHESIVE BADGES (6 FINISHES COLLECTION)",
    "brand": "seat",
    "category": "tags",
    "fitment": "SEAT Steering Wheel, Key Fobs, Fenders & Trim",
    "description": "Assortment of 6 miniature SEAT FR adhesive badges in matte black, gloss black, chrome, silver, and black/red finishes.",
    "isSoldOut": false,
    "image": "images/catalog/seat/seat-fr-mini-6finishes-adhesive-set_1.jpg",
    "images": [
      "images/catalog/seat/seat-fr-mini-6finishes-adhesive-set_1.jpg"
    ]
  },
  {
    "id": "seat-ibiza-gloss-black-cursive-letters",
    "name": "SEAT IBIZA CURSIVE SCRIPT LETTERING (GLOSS BLACK)",
    "brand": "seat",
    "category": "carnameslogo",
    "fitment": "SEAT Ibiza Mk5 Facelift",
    "description": "Stealth gloss black signature cursive Ibiza rear tailgate emblem.",
    "isSoldOut": false,
    "image": "images/catalog/seat/seat-ibiza-gloss-black-cursive-letters_1.jpg",
    "images": [
      "images/catalog/seat/seat-ibiza-gloss-black-cursive-letters_1.jpg"
    ]
  },
  {
    "id": "skoda-vrs-black-green-red-badge",
    "name": "SKODA VRS TRUNK EMBLEM (MATTE & GLOSS BLACK, GREEN & RED)",
    "brand": "skoda",
    "category": "tags",
    "fitment": "Skoda Octavia vRS, Kodiaq vRS, Fabia vRS",
    "description": "Matte and gloss black vRS rear adhesive trunk badges featuring green and red performance stripes.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-vrs-black-green-red-badge_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-vrs-black-green-red-badge_1.jpg",
      "images/catalog/skoda/skoda-vrs-black-green-red-badge_2.jpg"
    ]
  },
  {
    "id": "skoda-graffiti-red-black-mirror-ornament",
    "name": "SKODA GRAFFITI ROUND MIRROR ORNAMENT (RED & BLACK)",
    "brand": "skoda",
    "category": "medals",
    "fitment": "All Skoda Vehicles / Interior Mirror",
    "description": "Red and black dripping-style winged-arrow Skoda hanging rearview mirror ornament.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-graffiti-red-black-mirror-ornament_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-graffiti-red-black-mirror-ornament_1.jpg"
    ]
  },
  {
    "id": "skoda-graffiti-grey-black-mirror-ornament",
    "name": "SKODA GRAFFITI ROUND MIRROR ORNAMENT (GREY & BLACK)",
    "brand": "skoda",
    "category": "medals",
    "fitment": "All Skoda Vehicles / Interior Mirror",
    "description": "Grey and black dripping-style winged-arrow Skoda hanging rearview mirror ornament.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-graffiti-grey-black-mirror-ornament_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-graffiti-grey-black-mirror-ornament_1.jpg"
    ]
  },
  {
    "id": "skoda-red-black-emblems-vrs-combo-kit",
    "name": "SKODA RED & BLACK EMBLEMS + VRS COMBO KIT (4 PCS)",
    "brand": "skoda",
    "category": "carnameslogo",
    "fitment": "Skoda Octavia, Superb, Kodiaq, Fabia",
    "description": "4-piece styling pack combining large, medium, and mini red-and-black Skoda emblems with a black/red vRS badge.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-red-black-emblems-vrs-combo-kit_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-red-black-emblems-vrs-combo-kit_1.jpg"
    ]
  },
  {
    "id": "skoda-round-gloss-black-emblem",
    "name": "SKODA WINGED ARROW ROUND EMBLEM (ALL GLOSS BLACK)",
    "brand": "skoda",
    "category": "carnameslogo",
    "fitment": "Skoda Octavia, Superb, Kodiaq, Karoq Hood & Trunk",
    "description": "Stealth full gloss black round Skoda winged-arrow hood and trunk emblem.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-round-gloss-black-emblem_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-round-gloss-black-emblem_1.jpg",
      "images/catalog/skoda/skoda-round-gloss-black-emblem_2.jpg"
    ]
  },
  {
    "id": "skoda-leather-strap-keychain-trio",
    "name": "SKODA LEATHER STRAP KEYCHAINS WITH CARABINER (3 COLORS)",
    "brand": "skoda",
    "category": "medals",
    "fitment": "All Skoda Key Fobs",
    "description": "Trio of textured leather Skoda keychains with dark gunmetal carabiner in black, grey, and olive green.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-leather-strap-keychain-trio_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-leather-strap-keychain-trio_1.jpg"
    ]
  },
  {
    "id": "skoda-mqb-evo-woodgrain-armor-key-cover",
    "name": "SKODA MQB EVO WOODGRAIN & GUNMETAL ARMOR KEY COVER",
    "brand": "skoda",
    "category": "keyscover",
    "fitment": "Skoda Octavia A8, Superb, Kodiaq, Scala Smart Key",
    "description": "Zinc-alloy armor key cover featuring brown woodgrain backplate with black Skoda emblem.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-mqb-evo-woodgrain-armor-key-cover_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-mqb-evo-woodgrain-armor-key-cover_1.jpg"
    ]
  },
  {
    "id": "skoda-mqb-evo-forged-carbon-armor-cover",
    "name": "SKODA MQB EVO FORGED CARBON ARMOR KEY COVER",
    "brand": "skoda",
    "category": "keyscover",
    "fitment": "Skoda Octavia A8, Superb, Kodiaq, Scala Smart Key",
    "description": "Marbled forged-carbon backplate with silver Skoda winged-arrow emblem inside gunmetal alloy armor frame.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-mqb-evo-forged-carbon-armor-cover_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-mqb-evo-forged-carbon-armor-cover_1.jpg",
      "images/catalog/skoda/skoda-mqb-evo-forged-carbon-armor-cover_2.jpg"
    ]
  },
  {
    "id": "skoda-classic-green-silver-round-emblem",
    "name": "SKODA CLASSIC GREEN & SILVER LAUREL ROUND EMBLEM",
    "brand": "skoda",
    "category": "carnameslogo",
    "fitment": "Skoda Octavia Mk1/Mk2, Fabia, Superb, Roomster",
    "description": "Heritage green winged-arrow Skoda hood/trunk emblem framed with silver laurel wreath and 3M tape.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-classic-green-silver-round-emblem_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-classic-green-silver-round-emblem_1.jpg",
      "images/catalog/skoda/skoda-classic-green-silver-round-emblem_2.jpg",
      "images/catalog/skoda/skoda-classic-green-silver-round-emblem_3.jpg"
    ]
  },
  {
    "id": "skoda-vrs-red-v-chrome-rs-badge",
    "name": "SKODA VRS ADHESIVE EMBLEM (RED V & CHROME RS)",
    "brand": "skoda",
    "category": "tags",
    "fitment": "Skoda Octavia, Kodiaq, Superb vRS",
    "description": "Sculpted 3D Skoda vRS badge pairing vibrant red V stripes with mirror chrome RS characters.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-vrs-red-v-chrome-rs-badge_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-vrs-red-v-chrome-rs-badge_1.jpg"
    ]
  },
  {
    "id": "skoda-kodiaq-chrome-trunk-letters",
    "name": "SKODA KODIAQ CHROME TRUNK LETTERING",
    "brand": "skoda",
    "category": "carnameslogo",
    "fitment": "Skoda Kodiaq SUV (All Generations)",
    "description": "OEM mirror chrome KODIAQ rear tailgate lettering sealed in transfer tape.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-kodiaq-chrome-trunk-letters_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-kodiaq-chrome-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "skoda-round-chrome-black-emblem",
    "name": "SKODA WINGED ARROW ROUND EMBLEM (CHROME & GLOSS BLACK)",
    "brand": "skoda",
    "category": "carnameslogo",
    "fitment": "Skoda Octavia A7/A8, Superb, Kodiaq, Karoq Hood & Trunk",
    "description": "Factory-style polished chrome winged arrow set against a deep gloss black round base.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-round-chrome-black-emblem_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-round-chrome-black-emblem_1.jpg",
      "images/catalog/skoda/skoda-round-chrome-black-emblem_2.jpg"
    ]
  },
  {
    "id": "skoda-s-caron-chrome-black-emblem",
    "name": "SKODA MODERN S CARON ROUND EMBLEM (CHROME & BLACK)",
    "brand": "skoda",
    "category": "carnameslogo",
    "fitment": "Skoda Elroq / Enyaq / Octavia / Kodiaq Custom",
    "description": "Next-gen Skoda flat round emblem featuring chrome S with caron/hacek on gloss black background.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-s-caron-chrome-black-emblem_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-s-caron-chrome-black-emblem_1.jpg"
    ]
  },
  {
    "id": "skoda-s-caron-gloss-black-emblem",
    "name": "SKODA MODERN S CARON ROUND EMBLEM (ALL GLOSS BLACK)",
    "brand": "skoda",
    "category": "carnameslogo",
    "fitment": "Skoda Elroq / Enyaq / Octavia / Kodiaq Custom",
    "description": "Full gloss black modern Skoda S-caron round hood and trunk emblem.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-s-caron-gloss-black-emblem_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-s-caron-gloss-black-emblem_1.jpg"
    ]
  },
  {
    "id": "skoda-sportline-chrome-and-black-set",
    "name": "SKODA SPORTLINE FENDER BADGES (CHROME & ALL BLACK 4 PCS)",
    "brand": "skoda",
    "category": "tags",
    "fitment": "Skoda Kodiaq, Karoq, Octavia, Superb, Scala Sportline",
    "description": "Skoda SPORTLINE front fender badge set available in chrome/black and stealth gloss black finishes.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-sportline-chrome-and-black-set_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-sportline-chrome-and-black-set_1.jpg",
      "images/catalog/skoda/skoda-sportline-chrome-and-black-set_2.jpg"
    ]
  },
  {
    "id": "skoda-kodiaq-2024-sahler-floor-mats",
    "name": "SKODA KODIAQ 2024+ SAHLER 4.5D TPE RUBBER FLOOR MATS (5 PCS)",
    "brand": "skoda",
    "category": "carfloormats",
    "fitment": "Skoda Kodiaq 2024+ New Generation",
    "description": "Sahler 4.5D Ultra Plus custom-fit black TPE all-weather rubber floor mat set including center tunnel mat.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-kodiaq-2024-sahler-floor-mats_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-kodiaq-2024-sahler-floor-mats_1.jpg"
    ]
  },
  {
    "id": "skoda-gloss-black-chrome-wheel-caps",
    "name": "SKODA GLOSS BLACK & CHROME WHEEL CENTER CAPS (SET OF 4)",
    "brand": "skoda",
    "category": "calipercovers",
    "fitment": "Skoda Octavia, Superb, Kodiaq, Karoq Alloy Wheels",
    "description": "Set of 4 Skoda wheel center caps featuring chrome winged-arrow logo on gloss black base.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-gloss-black-chrome-wheel-caps_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-gloss-black-chrome-wheel-caps_1.jpg",
      "images/catalog/skoda/skoda-gloss-black-chrome-wheel-caps_2.jpg"
    ]
  },
  {
    "id": "skoda-vrs-chrome-black-fender-blades",
    "name": "SKODA VRS TAPERED FENDER BLADE BADGES (CHROME & BLACK PAIR)",
    "brand": "skoda",
    "category": "tags",
    "fitment": "Skoda Octavia, Kodiaq, Superb Side Fenders",
    "description": "Pair of tapered gloss black and chrome fender trim blades featuring Skoda vRS racing badge.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-vrs-chrome-black-fender-blades_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-vrs-chrome-black-fender-blades_1.jpg"
    ]
  },
  {
    "id": "skoda-valve-stem-caps-wrench-keychain-kit",
    "name": "SKODA TIRE VALVE STEM CAPS & WRENCH KEYCHAIN KIT",
    "brand": "skoda",
    "category": "medals",
    "fitment": "All Skoda Wheels & Tires",
    "description": "Blister gift set containing 4 chrome hex Skoda logo valve stem caps plus matching mini spanner wrench keychain.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-valve-stem-caps-wrench-keychain-kit_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-valve-stem-caps-wrench-keychain-kit_1.jpg"
    ]
  },
  {
    "id": "skoda-vrs-red-splatter-seatbelt-webbing",
    "name": "SKODA VRS BLACK & RED SPLATTER SEATBELT WEBBING ROLL",
    "brand": "skoda",
    "category": "scatbelt",
    "fitment": "Universal Skoda vRS Sport Seatbelt Retrofit",
    "description": "Black racing seatbelt strap roll printed with dynamic red splatter graphic and red vRS logo.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-vrs-red-splatter-seatbelt-webbing_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-vrs-red-splatter-seatbelt-webbing_1.jpg"
    ]
  },
  {
    "id": "skoda-vrs-vertical-chrome-keychains-pair",
    "name": "SKODA VRS VERTICAL CHROME METAL KEYCHAINS (PAIR)",
    "brand": "skoda",
    "category": "medals",
    "fitment": "All Skoda Key Fobs",
    "description": "Two heavy chrome vertical bar keychains featuring green/red and bold red Skoda vRS inlays.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-vrs-vertical-chrome-keychains-pair_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-vrs-vertical-chrome-keychains-pair_1.jpg"
    ]
  },
  {
    "id": "skoda-wide-chrome-and-black-letters-duo",
    "name": "SKODA WIDE-SPACED TAILGATE LETTERING (CHROME, SILVER & BLACK)",
    "brand": "skoda",
    "category": "carnameslogo",
    "fitment": "Skoda Octavia A8, Kodiaq, Karoq, Superb, Scala",
    "description": "OEM-aligned wide-spaced S K O D A tailgate lettering strips in chrome, satin silver, and gloss black finishes.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-wide-chrome-and-black-letters-duo_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-wide-chrome-and-black-letters-duo_1.jpg",
      "images/catalog/skoda/skoda-wide-chrome-and-black-letters-duo_2.jpg",
      "images/catalog/skoda/skoda-wide-chrome-and-black-letters-duo_3.jpg"
    ]
  },
  {
    "id": "skoda-octavia-chrome-and-black-letters",
    "name": "SKODA OCTAVIA TRUNK LETTERING (CHROME & BLACK DUO)",
    "brand": "skoda",
    "category": "carnameslogo",
    "fitment": "Skoda Octavia A7 / A8",
    "description": "OEM OCTAVIA rear trunk lettering strips available in mirror chrome and stealth gloss black finishes.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-octavia-chrome-and-black-letters_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-octavia-chrome-and-black-letters_1.jpg",
      "images/catalog/skoda/skoda-octavia-chrome-and-black-letters_2.jpg"
    ]
  },
  {
    "id": "skoda-vrs-black-green-grille-trunk-pair",
    "name": "SKODA VRS FRONT GRILLE BAR & TRUNK BADGE SET",
    "brand": "skoda",
    "category": "tags",
    "fitment": "Skoda Octavia, Kodiaq, Fabia vRS Grille & Tailgate",
    "description": "Skoda vRS front grille emblem bar with mounting hardware paired with flat adhesive rear trunk emblem.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-vrs-black-green-grille-trunk-pair_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-vrs-black-green-grille-trunk-pair_1.jpg",
      "images/catalog/skoda/skoda-vrs-black-green-grille-trunk-pair_2.jpg"
    ]
  },
  {
    "id": "skoda-classic-flip-key-replacement-shell",
    "name": "SKODA 3-BUTTON FLIP KEY REPLACEMENT SHELL (CLASSIC & UPGRADE)",
    "brand": "skoda",
    "category": "keys",
    "fitment": "Skoda Octavia, Superb, Fabia, Rapid 3-Button Flip Key",
    "description": "Gloss black 3-button MQB flip key replacement housing with chrome release trim and Skoda rear emblem.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-classic-flip-key-replacement-shell_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-classic-flip-key-replacement-shell_1.jpg",
      "images/catalog/skoda/skoda-classic-flip-key-replacement-shell_2.jpg",
      "images/catalog/skoda/skoda-classic-flip-key-replacement-shell_3.jpg",
      "images/catalog/skoda/skoda-classic-flip-key-replacement-shell_4.jpg"
    ]
  },
  {
    "id": "skoda-gloss-black-seatbelt-silencer-pair",
    "name": "SKODA WINGED ARROW SEATBELT SILENCER CLIPS (PAIR)",
    "brand": "skoda",
    "category": "seatbelt",
    "fitment": "All Skoda Seatbelt Buckles",
    "description": "Pair of gloss black alloy seatbelt alarm silencer buckle clips stamped with Skoda emblem.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-gloss-black-seatbelt-silencer-pair_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-gloss-black-seatbelt-silencer-pair_1.jpg"
    ]
  },
  {
    "id": "skoda-compact-black-and-chrome-letters",
    "name": "SKODA COMPACT TRUNK LETTERING (GLOSS BLACK & CHROME)",
    "brand": "skoda",
    "category": "carnameslogo",
    "fitment": "Skoda Octavia A7, Superb, Fabia, Rapid",
    "description": "Compact SKODA rear trunk emblem strips available in stealth gloss black and mirror chrome finishes.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-compact-black-and-chrome-letters_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-compact-black-and-chrome-letters_1.jpg",
      "images/catalog/skoda/skoda-compact-black-and-chrome-letters_2.jpg",
      "images/catalog/skoda/skoda-compact-black-and-chrome-letters_3.jpg",
      "images/catalog/skoda/skoda-compact-black-and-chrome-letters_4.jpg"
    ]
  },
  {
    "id": "skoda-gunmetal-hard-key-cover-keychain",
    "name": "SKODA GUNMETAL HARD KEY FOB COVER & LEATHER KEYCHAIN",
    "brand": "skoda",
    "category": "keyscover",
    "fitment": "Skoda Octavia A8, Kodiaq, Superb MQB Evo Key",
    "description": "Gunmetal metallic hard shell smart key cover featuring ŠKODA rear branding, leather keychain, and mini screwdriver.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-gunmetal-hard-key-cover-keychain_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-gunmetal-hard-key-cover-keychain_1.jpg",
      "images/catalog/skoda/skoda-gunmetal-hard-key-cover-keychain_2.jpg"
    ]
  },
  {
    "id": "skoda-superb-allweather-rubber-mats",
    "name": "SKODA SUPERB ALL-WEATHER RUBBER FLOOR MATS (5 PCS)",
    "brand": "skoda",
    "category": "carfloormats",
    "fitment": "Skoda Superb Sedan & Combi (DZ-RR-026)",
    "description": "5-piece black heavy-duty rubber floor mat set with raised edges and red Superb branding.",
    "isSoldOut": false,
    "image": "images/catalog/skoda/skoda-superb-allweather-rubber-mats_1.jpg",
    "images": [
      "images/catalog/skoda/skoda-superb-allweather-rubber-mats_1.jpg"
    ]
  },
  {
    "id": "subaru-impreza-black-chrome-trunk-pair",
    "name": "SUBARU IMPREZA REAR TRUNK LETTERING (BLACK & CHROME)",
    "brand": "subaru",
    "category": "carnameslogo",
    "fitment": "Subaru Impreza WRX / Sedan / Hatchback",
    "description": "IMPREZA rear trunk model lettering in both gloss black and mirror chrome finishes.",
    "isSoldOut": false,
    "image": "images/catalog/subaru/subaru-impreza-black-chrome-trunk-pair_1.jpg",
    "images": [
      "images/catalog/subaru/subaru-impreza-black-chrome-trunk-pair_1.jpg"
    ]
  },
  {
    "id": "subaru-pleiades-oval-emblem-3m",
    "name": "SUBARU BLUE & CHROME STARS OVAL GRILLE & TRUNK EMBLEM",
    "brand": "subaru",
    "category": "carnameslogo",
    "fitment": "Subaru Impreza, WRX, Forester, Outback, Legacy",
    "description": "Iconic deep blue Subaru Pleiades six-star oval emblem with polished chrome rim and 3M backing.",
    "isSoldOut": false,
    "image": "images/catalog/subaru/subaru-pleiades-oval-emblem-3m_1.jpg",
    "images": [
      "images/catalog/subaru/subaru-pleiades-oval-emblem-3m_1.jpg",
      "images/catalog/subaru/subaru-pleiades-oval-emblem-3m_2.jpg",
      "images/catalog/subaru/subaru-pleiades-oval-emblem-3m_3.jpg"
    ]
  },
  {
    "id": "subaru-brand-chrome-trunk-letters",
    "name": "SUBARU CHROME REAR TRUNK LETTERING",
    "brand": "subaru",
    "category": "carnameslogo",
    "fitment": "Subaru Impreza, Forester, Outback, XV",
    "description": "Sealed alignment strip of chrome SUBARU rear tailgate lettering.",
    "isSoldOut": false,
    "image": "images/catalog/subaru/subaru-brand-chrome-trunk-letters_1.jpg",
    "images": [
      "images/catalog/subaru/subaru-brand-chrome-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "subaru-gloss-black-pleiades-wheel-cap",
    "name": "SUBARU GLOSS BLACK STARS WHEEL CENTER CAP",
    "brand": "subaru",
    "category": "calipercovers",
    "fitment": "Subaru Impreza, WRX, Forester Alloy Wheels",
    "description": "All-gloss-black Subaru wheel center hub cap featuring embossed Pleiades star oval.",
    "isSoldOut": false,
    "image": "images/catalog/subaru/subaru-gloss-black-pleiades-wheel-cap_1.jpg",
    "images": [
      "images/catalog/subaru/subaru-gloss-black-pleiades-wheel-cap_1.jpg"
    ]
  },
  {
    "id": "subaru-symmetrical-awd-chrome-letters",
    "name": "SUBARU SYMMETRICAL AWD CHROME TRUNK LETTERING SET",
    "brand": "subaru",
    "category": "carnameslogo",
    "fitment": "Subaru Forester, Outback, Impreza, Legacy",
    "description": "Chrome SUBARU plus SYMMETRICAL AWD rear tailgate lettering set in precision foam stencil.",
    "isSoldOut": false,
    "image": "images/catalog/subaru/subaru-symmetrical-awd-chrome-letters_1.jpg",
    "images": [
      "images/catalog/subaru/subaru-symmetrical-awd-chrome-letters_1.jpg"
    ]
  },
  {
    "id": "subaru-awd-complete-emblem-combo-kit",
    "name": "SUBARU SYMMETRICAL AWD & DUAL OVAL EMBLEMS COMBO KIT",
    "brand": "subaru",
    "category": "carnameslogo",
    "fitment": "Subaru Impreza, Forester, Outback Hood & Trunk",
    "description": "Complete combo kit including large and small blue/chrome Subaru oval emblems plus Symmetrical AWD lettering.",
    "isSoldOut": false,
    "image": "images/catalog/subaru/subaru-awd-complete-emblem-combo-kit_1.jpg",
    "images": [
      "images/catalog/subaru/subaru-awd-complete-emblem-combo-kit_1.jpg"
    ]
  },
  {
    "id": "toyota-gazoo-racing-gr-badge",
    "name": "TOYOTA GAZOO RACING GR BADGE (BLACK & RED)",
    "brand": "toyota",
    "category": "tags",
    "fitment": "Toyota Corolla, Yaris, Supra, Camry, C-HR GR Sport",
    "description": "Black and crimson red Toyota Gazoo Racing GR emblem framed in crisp chrome border.",
    "isSoldOut": false,
    "image": "images/catalog/toyota/toyota-gazoo-racing-gr-badge_1.jpg",
    "images": [
      "images/catalog/toyota/toyota-gazoo-racing-gr-badge_1.jpg"
    ]
  },
  {
    "id": "universal-checkered-flag-red-r-badge",
    "name": "CHECKERED RACING FLAG & RED R 3D EMBLEM",
    "brand": "universal",
    "category": "tags",
    "fitment": "Universal Performance & Racing Vehicles",
    "description": "3D motorsport emblem pairing black-and-white checkered racing flag with bold red R lettering.",
    "isSoldOut": false,
    "image": "images/catalog/universal/universal-checkered-flag-red-r-badge_1.jpg",
    "images": [
      "images/catalog/universal/universal-checkered-flag-red-r-badge_1.jpg"
    ]
  },
  {
    "id": "universal-brembo-red-brake-caliper-covers",
    "name": "BREMBO RACING RED 3D BRAKE CALIPER COVERS (PAIR)",
    "brand": "universal",
    "category": "calipercovers",
    "fitment": "Universal 16-Inch+ Alloy Wheel Vehicles",
    "description": "Pair of glossy racing red 3D Brembo brake caliper covers with realistic metallic silver lettering and bleeder detail.",
    "isSoldOut": false,
    "image": "images/catalog/universal/universal-brembo-red-brake-caliper-covers_1.jpg",
    "images": [
      "images/catalog/universal/universal-brembo-red-brake-caliper-covers_1.jpg",
      "images/catalog/universal/universal-brembo-red-brake-caliper-covers_2.jpg"
    ]
  },
  {
    "id": "universal-german-stripes-mesh-grille-badge",
    "name": "GERMAN RACING STRIPES BOLT-ON MESH GRILLE BADGE",
    "brand": "universal",
    "category": "tags",
    "fitment": "Universal Front Honeycomb & Mesh Grilles",
    "description": "Parallelogram bolt-on mesh grille badge accented with 5 yellow and 5 red motorsport stripes.",
    "isSoldOut": false,
    "image": "images/catalog/universal/universal-german-stripes-mesh-grille-badge_1.jpg",
    "images": [
      "images/catalog/universal/universal-german-stripes-mesh-grille-badge_1.jpg"
    ]
  },
  {
    "id": "universal-silver-sharkfin-roof-antenna",
    "name": "UNIVERSAL METALLIC SILVER SHARK-FIN ROOF ANTENNA COVER",
    "brand": "universal",
    "category": "tobb",
    "fitment": "Universal Vehicle Roofs with Gasket Base",
    "description": "Aerodynamic metallic silver shark-fin roof antenna cover complete with black weatherproof rubber gasket.",
    "isSoldOut": false,
    "image": "images/catalog/universal/universal-silver-sharkfin-roof-antenna_1.jpg",
    "images": [
      "images/catalog/universal/universal-silver-sharkfin-roof-antenna_1.jpg"
    ]
  },
  {
    "id": "universal-kn-air-filter-precharger-wrap",
    "name": "K&N PERFORMANCE AIR FILTER PRE-CHARGER WRAP (22-8033PK)",
    "brand": "universal",
    "category": "tobb",
    "fitment": "Universal Conical Cold Air Intake Filters",
    "description": "Black breathable polyester air filter protective wrap designed to extend intake service intervals.",
    "isSoldOut": false,
    "image": "images/catalog/universal/universal-kn-air-filter-precharger-wrap_1.jpg",
    "images": [
      "images/catalog/universal/universal-kn-air-filter-precharger-wrap_1.jpg"
    ]
  },
  {
    "id": "universal-gloss-black-lug-nut-covers-20pcs",
    "name": "UNIVERSAL GLOSS BLACK HEX WHEEL LUG NUT COVERS (20 PCS)",
    "brand": "universal",
    "category": "tobb",
    "fitment": "Universal Hex Wheel Bolts with Removal Clips",
    "description": "Full set of 20 gloss black hexagonal wheel lug nut caps supplied with 2 red extraction pullers.",
    "isSoldOut": false,
    "image": "images/catalog/universal/universal-gloss-black-lug-nut-covers-20pcs_1.jpg",
    "images": [
      "images/catalog/universal/universal-gloss-black-lug-nut-covers-20pcs_1.jpg"
    ]
  },
  {
    "id": "universal-carbon-fiber-stubby-antenna",
    "name": "UNIVERSAL CARBON FIBER SHORT STUBBY ROOF ANTENNA",
    "brand": "universal",
    "category": "tobb",
    "fitment": "Universal Threaded Roof Mounts (Multiple Adapters)",
    "description": "Compact black carbon-fiber stubby sport roof antenna packaged with multiple screw adapters and washers.",
    "isSoldOut": false,
    "image": "images/catalog/universal/universal-carbon-fiber-stubby-antenna_1.jpg",
    "images": [
      "images/catalog/universal/universal-carbon-fiber-stubby-antenna_1.jpg",
      "images/catalog/universal/universal-carbon-fiber-stubby-antenna_2.jpg"
    ]
  },
  {
    "id": "universal-chrome-bear-rabbit-keychains",
    "name": "METALLIC 3D BEAR & RABBIT FIGURINE KEYCHAIN CHARMS",
    "brand": "universal",
    "category": "medals",
    "fitment": "Universal Car Keys & Bag Charms",
    "description": "Heavy chrome metallic 3D designer bear and dark-chrome rabbit keychain collectibles.",
    "isSoldOut": false,
    "image": "images/catalog/universal/universal-chrome-bear-rabbit-keychains_1.jpg",
    "images": [
      "images/catalog/universal/universal-chrome-bear-rabbit-keychains_1.jpg"
    ]
  },
  {
    "id": "universal-forged-carbon-seatbelt-silencers",
    "name": "FORGED CARBON SEATBELT SILENCER CLIPS IN GIFT BOX (PAIR)",
    "brand": "universal",
    "category": "seatbelt",
    "fitment": "Universal Car Seatbelt Buckles",
    "description": "Pair of forged carbon-fiber pattern and gunmetal seatbelt alarm silencer clips in black foam gift box.",
    "isSoldOut": false,
    "image": "images/catalog/universal/universal-forged-carbon-seatbelt-silencers_1.jpg",
    "images": [
      "images/catalog/universal/universal-forged-carbon-seatbelt-silencers_1.jpg"
    ]
  },
  {
    "id": "universal-3d-chrome-italic-gt-badge-pair",
    "name": "UNIVERSAL 3D CHROME ITALIC & SLANTED GT EMBLEMS",
    "brand": "universal",
    "category": "tags",
    "fitment": "Universal Front Grille, Trunk & Side Fenders",
    "description": "Sculpted 3D mirror chrome GT adhesive sport emblems available as a single slanted badge or matched pair.",
    "isSoldOut": false,
    "image": "images/catalog/universal/universal-3d-chrome-italic-gt-badge-pair_1.jpg",
    "images": [
      "images/catalog/universal/universal-3d-chrome-italic-gt-badge-pair_1.jpg",
      "images/catalog/universal/universal-3d-chrome-italic-gt-badge-pair_2.jpg"
    ]
  },
  {
    "id": "universal-gloss-black-fender-vent-blades",
    "name": "UNIVERSAL GLOSS BLACK SIDE FENDER VENT TRIM BLADES (PAIR)",
    "brand": "universal",
    "category": "tobb",
    "fitment": "Universal Side Fenders & Door Garnish",
    "description": "Pair of aerodynamic curved gloss black ABS side fender vent accent blades.",
    "isSoldOut": false,
    "image": "images/catalog/universal/universal-gloss-black-fender-vent-blades_1.jpg",
    "images": [
      "images/catalog/universal/universal-gloss-black-fender-vent-blades_1.jpg"
    ]
  },
  {
    "id": "universal-3d-checkered-flag-red-r-badge",
    "name": "3D CHROME CHECKERED FLAG & RED ITALIC R EMBLEM",
    "brand": "universal",
    "category": "tags",
    "fitment": "Universal Trunk, Grille & Fenders",
    "description": "Chrome-outlined black/silver checkered racing flag paired with glossy red italic R performance badge.",
    "isSoldOut": false,
    "image": "images/catalog/universal/universal-3d-checkered-flag-red-r-badge_1.jpg",
    "images": [
      "images/catalog/universal/universal-3d-checkered-flag-red-r-badge_1.jpg"
    ]
  },
  {
    "id": "vw-passat-b8-wide-black-letters",
    "name": "VW PASSAT B8 WIDE-SPACED TRUNK LETTERS (GLOSS BLACK)",
    "brand": "volkswagen",
    "category": "carnameslogo",
    "fitment": "Volkswagen Passat B8 / B8.5 (2015 - 2023)",
    "description": "Modern wide-spaced gloss black PASSAT center tailgate lettering strip.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-passat-b8-wide-black-letters_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-passat-b8-wide-black-letters_1.jpg"
    ]
  },
  {
    "id": "vw-tiguan-chrome-black-trunk-duo",
    "name": "VW TIGUAN TRUNK LETTERING (CHROME & GLOSS BLACK DUO)",
    "brand": "volkswagen",
    "category": "carnameslogo",
    "fitment": "Volkswagen Tiguan Mk1 / Mk2",
    "description": "TIGUAN rear tailgate lettering strips in bright mirror chrome and stealth gloss black finishes.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-tiguan-chrome-black-trunk-duo_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-tiguan-chrome-black-trunk-duo_1.jpg",
      "images/catalog/volkswagen/vw-tiguan-chrome-black-trunk-duo_2.jpg"
    ]
  },
  {
    "id": "vw-golf-mk8-wide-black-letters",
    "name": "VW GOLF MK8 WIDE-SPACED TRUNK LETTERS (GLOSS BLACK)",
    "brand": "volkswagen",
    "category": "carnameslogo",
    "fitment": "Volkswagen Golf Mk8 (2020+)",
    "description": "Modern center-tailgate wide-spaced gloss black G O L F lettering strip.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-golf-mk8-wide-black-letters_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-golf-mk8-wide-black-letters_1.jpg"
    ]
  },
  {
    "id": "vw-golf-mk7-bold-black-letters",
    "name": "VW GOLF MK7 CLASSIC BOLD TRUNK LETTERS (GLOSS BLACK)",
    "brand": "volkswagen",
    "category": "carnameslogo",
    "fitment": "Volkswagen Golf Mk6 / Mk7 / Mk7.5",
    "description": "Classic bold-font gloss black GOLF rear trunk emblem lettering.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-golf-mk7-bold-black-letters_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-golf-mk7-bold-black-letters_1.jpg"
    ]
  },
  {
    "id": "vw-jetta-mk6-bold-black-letters",
    "name": "VW JETTA MK6 BOLD TRUNK LETTERS (GLOSS BLACK)",
    "brand": "volkswagen",
    "category": "carnameslogo",
    "fitment": "Volkswagen Jetta Mk5 / Mk6",
    "description": "Classic bold-font gloss black JETTA rear trunk badge.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-jetta-mk6-bold-black-letters_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-jetta-mk6-bold-black-letters_1.jpg"
    ]
  },
  {
    "id": "vw-passat-b6-bold-black-letters",
    "name": "VW PASSAT B6/B7 BOLD TRUNK LETTERS (GLOSS BLACK)",
    "brand": "volkswagen",
    "category": "carnameslogo",
    "fitment": "Volkswagen Passat B6 / B7 / CC",
    "description": "Bold gloss black PASSAT trunk lettering on clear alignment tape.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-passat-b6-bold-black-letters_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-passat-b6-bold-black-letters_1.jpg"
    ]
  },
  {
    "id": "vw-jetta-mk7-wide-black-letters",
    "name": "VW JETTA MK7 WIDE-SPACED TRUNK LETTERS (GLOSS BLACK)",
    "brand": "volkswagen",
    "category": "carnameslogo",
    "fitment": "Volkswagen Jetta Mk7 (2019+)",
    "description": "Sleek wide-spaced gloss black J E T T A rear trunk lettering.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-jetta-mk7-wide-black-letters_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-jetta-mk7-wide-black-letters_1.jpg"
    ]
  },
  {
    "id": "vw-tsi-gloss-black-engine-badge",
    "name": "VW TSI ENGINE TRUNK BADGE (GLOSS BLACK)",
    "brand": "volkswagen",
    "category": "tags",
    "fitment": "Volkswagen Golf, Passat, Tiguan, Jetta, Polo TSI",
    "description": "Gloss black TSI rear turbo engine badge on alignment film.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-tsi-gloss-black-engine-badge_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-tsi-gloss-black-engine-badge_1.jpg"
    ]
  },
  {
    "id": "vw-20t-gloss-black-engine-badge",
    "name": "VW 2.0T ENGINE TRUNK BADGE (GLOSS BLACK)",
    "brand": "volkswagen",
    "category": "tags",
    "fitment": "Volkswagen & Audi 2.0T Models",
    "description": "Stealth gloss black 2.0T engine displacement trunk emblem.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-20t-gloss-black-engine-badge_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-20t-gloss-black-engine-badge_1.jpg"
    ]
  },
  {
    "id": "vw-volkswagen-script-black-letters",
    "name": "VOLKSWAGEN FULL TRUNK LETTERING (GLOSS BLACK)",
    "brand": "volkswagen",
    "category": "carnameslogo",
    "fitment": "Volkswagen Golf, Passat, Tiguan, Touareg",
    "description": "Full gloss black Volkswagen rear trunk script lettering strip.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-volkswagen-script-black-letters_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-volkswagen-script-black-letters_1.jpg"
    ]
  },
  {
    "id": "vw-rline-red-chrome-metal-keychain",
    "name": "VW R LINE METAL KEYCHAIN (RED ENAMEL & CHROME)",
    "brand": "volkswagen",
    "category": "medals",
    "fitment": "Volkswagen R-Line Vehicles & Key Fobs",
    "description": "Chrome metal keychain inlaid with bright red enamel R Line motorsport plate.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-rline-red-chrome-metal-keychain_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-rline-red-chrome-metal-keychain_1.jpg"
    ]
  },
  {
    "id": "vw-rline-black-chrome-grille-badge",
    "name": "VW R-LINE FRONT GRILLE EMBLEM WITH BRACKET (CHROME & BLACK)",
    "brand": "volkswagen",
    "category": "tags",
    "fitment": "Volkswagen Golf, Tiguan, Passat, Polo, Arteon R-Line",
    "description": "Mirror chrome and gloss black R Line front grille emblem supplied with metal mounting brackets and nuts.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-rline-black-chrome-grille-badge_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-rline-black-chrome-grille-badge_1.jpg"
    ]
  },
  {
    "id": "vw-round-matte-black-pair",
    "name": "VW ROUND FRONT & REAR EMBLEM PAIR (MATTE BLACK)",
    "brand": "volkswagen",
    "category": "carnameslogo",
    "fitment": "Volkswagen Golf, Polo, Tiguan, Passat",
    "description": "Matched front and rear matte black VW round emblem pair in protective film.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-round-matte-black-pair_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-round-matte-black-pair_1.jpg"
    ]
  },
  {
    "id": "vw-carbon-flip-key-armor-cover",
    "name": "VOLKSWAGEN CARBON & GUNMETAL FLIP KEY ARMOR COVER",
    "brand": "volkswagen",
    "category": "keyscover",
    "fitment": "VW Golf 7, Tiguan, Passat, Polo, Jetta 3-Button Flip Key",
    "description": "Gunmetal black-chrome alloy flip key cover featuring carbon backplate with VW logo, silicone pad, and mini screwdriver.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-carbon-flip-key-armor-cover_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-carbon-flip-key-armor-cover_1.jpg",
      "images/catalog/volkswagen/vw-carbon-flip-key-armor-cover_2.jpg"
    ]
  },
  {
    "id": "vw-red-black-mirror-hanging-ornament",
    "name": "VW LOGO MIRROR HANGING ORNAMENT (RED & BLACK)",
    "brand": "volkswagen",
    "category": "medals",
    "fitment": "All Volkswagen Vehicles / Interior Mirror",
    "description": "Red and black round VW crest hanging rearview mirror charm with cord.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-red-black-mirror-hanging-ornament_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-red-black-mirror-hanging-ornament_1.jpg"
    ]
  },
  {
    "id": "vw-grey-black-mirror-hanging-ornament",
    "name": "VW LOGO MIRROR HANGING ORNAMENT (GREY & BLACK)",
    "brand": "volkswagen",
    "category": "medals",
    "fitment": "All Volkswagen Vehicles / Interior Mirror",
    "description": "Grey and black round VW crest hanging rearview mirror charm with cord.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-grey-black-mirror-hanging-ornament_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-grey-black-mirror-hanging-ornament_1.jpg"
    ]
  },
  {
    "id": "vw-chrome-120mm-front-grille-emblem",
    "name": "VW 120MM CHROME ROUND FRONT GRILLE EMBLEM",
    "brand": "volkswagen",
    "category": "carnameslogo",
    "fitment": "Volkswagen Golf, Jetta, Polo, Passat (120mm Grille)",
    "description": "120mm mirror chrome Volkswagen front grille emblem with factory fitment sizing.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-chrome-120mm-front-grille-emblem_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-chrome-120mm-front-grille-emblem_1.jpg",
      "images/catalog/volkswagen/vw-chrome-120mm-front-grille-emblem_2.jpg"
    ]
  },
  {
    "id": "vw-mqb-evo-gloss-black-chrome-tpu-cover",
    "name": "VW MQB EVO 3-BUTTON TPU KEY COVER (BLACK & CHROME BORDER)",
    "brand": "volkswagen",
    "category": "keyscover",
    "fitment": "VW Golf 8, ID.3, ID.4 / Skoda Octavia A8 / Seat Leon Mk4",
    "description": "Gloss black soft TPU 3-button smart key cover with metallic silver-chrome edge trim and rear logo window (1pc & 3pc packs).",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-mqb-evo-gloss-black-chrome-tpu-cover_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-mqb-evo-gloss-black-chrome-tpu-cover_1.jpg",
      "images/catalog/volkswagen/vw-mqb-evo-gloss-black-chrome-tpu-cover_2.jpg",
      "images/catalog/volkswagen/vw-mqb-evo-gloss-black-chrome-tpu-cover_3.jpg"
    ]
  },
  {
    "id": "vw-rline-steering-spoke-clip-set",
    "name": "VW R LINE STEERING WHEEL LOWER SPOKE CLIP (RED & BLACK)",
    "brand": "volkswagen",
    "category": "steeringwheelsymbols",
    "fitment": "Volkswagen Flat-Bottom Sport Steering Wheels",
    "description": "Clip-on brushed silver R Line lower steering spoke insert available with red or black Line plate.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-rline-steering-spoke-clip-set_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-rline-steering-spoke-clip-set_1.jpg",
      "images/catalog/volkswagen/vw-rline-steering-spoke-clip-set_2.jpg",
      "images/catalog/volkswagen/vw-rline-steering-spoke-clip-set_3.jpg",
      "images/catalog/volkswagen/vw-rline-steering-spoke-clip-set_4.jpg"
    ]
  },
  {
    "id": "vw-rline-side-fender-wing-kit",
    "name": "VW R LINE SIDE FENDER WING EMBLEM KIT (4 PCS)",
    "brand": "volkswagen",
    "category": "tags",
    "fitment": "Volkswagen Golf, Tiguan, Passat, Arteon R-Line",
    "description": "4-piece R Line fender styling kit combining chrome/black R Line badges with matching fender wing blades.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-rline-side-fender-wing-kit_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-rline-side-fender-wing-kit_1.jpg"
    ]
  },
  {
    "id": "vw-mqb-flip-gloss-black-chrome-tpu-cover",
    "name": "VW MQB 3-BUTTON FLIP KEY TPU COVER (BLACK & CHROME TRIM)",
    "brand": "volkswagen",
    "category": "keyscover",
    "fitment": "VW Golf 7, Tiguan, Passat, Polo / Skoda / Seat Flip Key",
    "description": "Gloss black TPU protective cover with chrome rim and open flip cutout for 3-button VAG flip keys.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-mqb-flip-gloss-black-chrome-tpu-cover_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-mqb-flip-gloss-black-chrome-tpu-cover_1.jpg",
      "images/catalog/volkswagen/vw-mqb-flip-gloss-black-chrome-tpu-cover_2.jpg"
    ]
  },
  {
    "id": "vw-wide-silver-ring-wheel-caps",
    "name": "VW WIDE BRUSHED SILVER RING WHEEL CENTER CAPS (SET OF 4)",
    "brand": "volkswagen",
    "category": "calipercovers",
    "fitment": "Volkswagen Golf, Passat, Tiguan, Jetta Alloy Rims",
    "description": "Set of 4 Volkswagen wheel center hub caps featuring wide brushed silver outer border and 3-style comparison.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-wide-silver-ring-wheel-caps_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-wide-silver-ring-wheel-caps_1.jpg",
      "images/catalog/volkswagen/vw-wide-silver-ring-wheel-caps_2.jpg"
    ]
  },
  {
    "id": "vw-classic-chrome-black-wheel-caps",
    "name": "VW CLASSIC CHROME & BLACK WHEEL CENTER CAPS (SET OF 4)",
    "brand": "volkswagen",
    "category": "calipercovers",
    "fitment": "Volkswagen Golf, Jetta, Passat, Polo Rims",
    "description": "Set of 4 classic bold chrome Volkswagen logo wheel center caps with silver beveled outer rim.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-classic-chrome-black-wheel-caps_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-classic-chrome-black-wheel-caps_1.jpg"
    ]
  },
  {
    "id": "vw-2020-thin-silver-black-wheel-caps",
    "name": "VW 2020+ NEW FLAT LOGO WHEEL CENTER CAPS (BLACK & CHROME)",
    "brand": "volkswagen",
    "category": "calipercovers",
    "fitment": "Volkswagen Golf 8, Tiguan Facelift, Arteon, Passat B8.5",
    "description": "New-generation flat silver and blackout VW logo wheel center caps shown in 4-piece and 20-piece dealer packs.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-2020-thin-silver-black-wheel-caps_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-2020-thin-silver-black-wheel-caps_1.jpg",
      "images/catalog/volkswagen/vw-2020-thin-silver-black-wheel-caps_2.jpg"
    ]
  },
  {
    "id": "vw-passat-b8-wide-chrome-letters",
    "name": "VW PASSAT B8 WIDE-SPACED CHROME TRUNK LETTERS",
    "brand": "volkswagen",
    "category": "carnameslogo",
    "fitment": "Volkswagen Passat B8 / B8.5",
    "description": "Factory wide-spaced mirror chrome P A S S A T rear tailgate lettering strip.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-passat-b8-wide-chrome-letters_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-passat-b8-wide-chrome-letters_1.jpg"
    ]
  },
  {
    "id": "vw-golf75-smoked-black-front-rear-set",
    "name": "VW GOLF 7.5 SMOKED GLOSS BLACK FRONT RADAR & REAR EMBLEMS",
    "brand": "volkswagen",
    "category": "carnameslogo",
    "fitment": "Volkswagen Golf Mk7.5 (2017 - 2020 Radar Grille & Trunk)",
    "description": "Boxed VW Golf 7.5 two-piece smooth smoked gloss black front ACC radar and rear flip trunk emblem set.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-golf75-smoked-black-front-rear-set_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-golf75-smoked-black-front-rear-set_1.jpg"
    ]
  },
  {
    "id": "vw-hollow-black-emblem-backing-plate",
    "name": "VW HOLLOW GLOSS BLACK EMBLEM WITH BACKING PLATE",
    "brand": "volkswagen",
    "category": "carnameslogo",
    "fitment": "Volkswagen Golf, Polo, Passat Hood & Trunk",
    "description": "Two-piece VW round emblem featuring a cut-out gloss black logo over a separate backing insert.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-hollow-black-emblem-backing-plate_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-hollow-black-emblem-backing-plate_1.jpg"
    ]
  },
  {
    "id": "vw-solid-recessed-gloss-black-emblem",
    "name": "VW SOLID RECESSED GLOSS BLACK 1-PIECE EMBLEM",
    "brand": "volkswagen",
    "category": "carnameslogo",
    "fitment": "Volkswagen Hood & Tailgate",
    "description": "Single-piece beveled recessed gloss black round VW hood and trunk emblem.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-solid-recessed-gloss-black-emblem_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-solid-recessed-gloss-black-emblem_1.jpg",
      "images/catalog/volkswagen/vw-solid-recessed-gloss-black-emblem_2.jpg"
    ]
  },
  {
    "id": "vw-passat-compact-chrome-trunk-letters",
    "name": "VW PASSAT COMPACT CHROME TRUNK LETTERS",
    "brand": "volkswagen",
    "category": "carnameslogo",
    "fitment": "Volkswagen Passat B6 / B7 / CC",
    "description": "Compact-spaced OEM chrome PASSAT rear trunk badge strip.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-passat-compact-chrome-trunk-letters_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-passat-compact-chrome-trunk-letters_1.jpg"
    ]
  },
  {
    "id": "vw-tsi-all-chrome-engine-badge",
    "name": "VW TSI ALL-CHROME ENGINE TRUNK BADGE",
    "brand": "volkswagen",
    "category": "tags",
    "fitment": "Volkswagen Golf, Passat, Tiguan, Jetta TSI",
    "description": "Classic all-chrome 3D TSI rear engine designation badge.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-tsi-all-chrome-engine-badge_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-tsi-all-chrome-engine-badge_1.jpg"
    ]
  },
  {
    "id": "vw-chrome-black-adhesive-round-emblem",
    "name": "VW CHROME & BLACK ROUND ADHESIVE EMBLEM (3M)",
    "brand": "volkswagen",
    "category": "carnameslogo",
    "fitment": "Volkswagen Rear Tailgate / Custom Trim",
    "description": "Flat-back chrome and gloss black round VW emblem backed with high-bond red 3M adhesive.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-chrome-black-adhesive-round-emblem_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-chrome-black-adhesive-round-emblem_1.jpg",
      "images/catalog/volkswagen/vw-chrome-black-adhesive-round-emblem_2.jpg"
    ]
  },
  {
    "id": "vw-chrome-black-clip-in-grille-emblem",
    "name": "VW CHROME & BLACK CLIP-IN FRONT GRILLE EMBLEM",
    "brand": "volkswagen",
    "category": "carnameslogo",
    "fitment": "Volkswagen Front Grilles (Factory Clip-In)",
    "description": "Chrome and gloss black VW front grille emblem equipped with factory plastic locking clips.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-chrome-black-clip-in-grille-emblem_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-chrome-black-clip-in-grille-emblem_1.jpg",
      "images/catalog/volkswagen/vw-chrome-black-clip-in-grille-emblem_2.jpg"
    ]
  },
  {
    "id": "vw-mqb-flip-key-replacement-shell",
    "name": "VW MQB UPGRADE 3-BUTTON FLIP KEY REPLACEMENT SHELL",
    "brand": "volkswagen",
    "category": "keys",
    "fitment": "Volkswagen Golf 7, Passat B8, Tiguan, Polo Flip Key",
    "description": "Gloss black upgrade 3-button flip key replacement shell featuring chrome release button and blue/silver VW back emblem.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-mqb-flip-key-replacement-shell_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-mqb-flip-key-replacement-shell_1.jpg",
      "images/catalog/volkswagen/vw-mqb-flip-key-replacement-shell_2.jpg"
    ]
  },
  {
    "id": "vw-tsi-chrome-red-i-engine-badge",
    "name": "VW TSI CHROME & RED-I ENGINE TRUNK BADGE",
    "brand": "volkswagen",
    "category": "tags",
    "fitment": "Volkswagen Golf, Passat, Tiguan, Jetta TSI",
    "description": "Mirror chrome T and S letters paired with red-accent I trunk engine badge.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-tsi-chrome-red-i-engine-badge_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-tsi-chrome-red-i-engine-badge_1.jpg"
    ]
  },
  {
    "id": "vw-mqb-evo-piano-black-hard-key-cover",
    "name": "VW MQB EVO PIANO BLACK 2-PIECE HARD KEY COVER",
    "brand": "volkswagen",
    "category": "keyscover",
    "fitment": "VW Golf 8 / Skoda Octavia A8 / Seat Leon Mk4 Key",
    "description": "Minimalist smoked gloss piano black 2-piece hard key fob case with circular rear emblem window.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-mqb-evo-piano-black-hard-key-cover_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-mqb-evo-piano-black-hard-key-cover_1.jpg",
      "images/catalog/volkswagen/vw-mqb-evo-piano-black-hard-key-cover_2.jpg"
    ]
  },
  {
    "id": "vw-jetta-golf5-gloss-black-emblem-set",
    "name": "VW JETTA & GOLF 5 GLOSS BLACK FRONT & REAR EMBLEM SET",
    "brand": "volkswagen",
    "category": "carnameslogo",
    "fitment": "Volkswagen Golf Mk5 / Jetta Mk5 (ZSB 1T0 853)",
    "description": "Clip-in gloss black front grille emblem and adhesive rear trunk emblem matched for Golf 5 and Jetta 5.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-jetta-golf5-gloss-black-emblem-set_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-jetta-golf5-gloss-black-emblem-set_1.jpg",
      "images/catalog/volkswagen/vw-jetta-golf5-gloss-black-emblem-set_2.jpg"
    ]
  },
  {
    "id": "vw-passat-b6-gloss-black-emblem-set",
    "name": "VW PASSAT B6 GLOSS BLACK FRONT & REAR EMBLEM SET",
    "brand": "volkswagen",
    "category": "carnameslogo",
    "fitment": "Volkswagen Passat B6 Sedan & Variant",
    "description": "Clip-in front grille emblem and rear trunk badge finished in gloss black for VW Passat B6.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-passat-b6-gloss-black-emblem-set_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-passat-b6-gloss-black-emblem-set_1.jpg",
      "images/catalog/volkswagen/vw-passat-b6-gloss-black-emblem-set_2.jpg"
    ]
  },
  {
    "id": "vw-golf6-flip-trunk-black-emblem-set",
    "name": "VW GOLF 6 GLOSS BLACK GRILLE & FLIP-HANDLE EMBLEM SET",
    "brand": "volkswagen",
    "category": "carnameslogo",
    "fitment": "Volkswagen Golf Mk6 (OEM 5K0 853 630)",
    "description": "Complete VW Golf 6 blackout set with front grille emblem and rear flip-handle / boxed trunk emblems.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-golf6-flip-trunk-black-emblem-set_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-golf6-flip-trunk-black-emblem-set_1.jpg",
      "images/catalog/volkswagen/vw-golf6-flip-trunk-black-emblem-set_2.jpg",
      "images/catalog/volkswagen/vw-golf6-flip-trunk-black-emblem-set_3.jpg"
    ]
  },
  {
    "id": "vw-ap17-dsg-paddle-shifter-extensions",
    "name": "VW DSG PADDLE SHIFTER EXTENSIONS (CARBON & BLACK AP17)",
    "brand": "volkswagen",
    "category": "padelshifts",
    "fitment": "Volkswagen Golf, Passat, Tiguan, Polo DSG Steering Wheel",
    "description": "AP17 mold steering wheel paddle shifter extensions available in gloss carbon fiber weave and gloss black.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-ap17-dsg-paddle-shifter-extensions_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-ap17-dsg-paddle-shifter-extensions_1.jpg",
      "images/catalog/volkswagen/vw-ap17-dsg-paddle-shifter-extensions_2.jpg"
    ]
  },
  {
    "id": "vw-golf6-jetta-gloss-black-grille-emblem",
    "name": "VW GOLF 6 & JETTA SINGLE GLOSS BLACK GRILLE EMBLEM",
    "brand": "volkswagen",
    "category": "carnameslogo",
    "fitment": "Volkswagen Golf Mk6 / Jetta Front Grille",
    "description": "Single clip-in gloss black VW front grille emblem with upper alignment tab.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-golf6-jetta-gloss-black-grille-emblem_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-golf6-jetta-gloss-black-grille-emblem_1.jpg",
      "images/catalog/volkswagen/vw-golf6-jetta-gloss-black-grille-emblem_2.jpg"
    ]
  },
  {
    "id": "vw-rline-black-chrome-trunk-badge",
    "name": "VW R LINE GLOSS BLACK & CHROME TRUNK BADGE",
    "brand": "volkswagen",
    "category": "tags",
    "fitment": "Volkswagen Golf, Tiguan, Passat, T-Roc R-Line",
    "description": "Adhesive gloss black and chrome R Line rear trunk or side fender badge.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-rline-black-chrome-trunk-badge_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-rline-black-chrome-trunk-badge_1.jpg"
    ]
  },
  {
    "id": "vw-rline-black-chrome-metal-keychain",
    "name": "VW R LINE METAL KEYCHAIN (BLACK & CHROME)",
    "brand": "volkswagen",
    "category": "medals",
    "fitment": "Volkswagen R-Line Vehicles & Key Fobs",
    "description": "Gloss black and chrome metal R Line rectangular keychain with heavy split ring.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-rline-black-chrome-metal-keychain_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-rline-black-chrome-metal-keychain_1.jpg"
    ]
  },
  {
    "id": "vw-valve-stem-caps-wrench-keychain-kit",
    "name": "VW TIRE VALVE STEM CAPS & WRENCH KEYCHAIN KIT",
    "brand": "volkswagen",
    "category": "medals",
    "fitment": "All Volkswagen Wheels & Tires",
    "description": "Retail pack of 4 chrome hexagonal VW logo tire valve stem caps with matching spanner wrench keychain.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-valve-stem-caps-wrench-keychain-kit_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-valve-stem-caps-wrench-keychain-kit_1.jpg"
    ]
  },
  {
    "id": "vw-black-metal-seatbelt-silencer-pair",
    "name": "VW VOLKSWAGEN BLACK METAL SEATBELT SILENCER CLIPS (PAIR)",
    "brand": "volkswagen",
    "category": "seatbelt",
    "fitment": "All Volkswagen Seatbelt Buckles",
    "description": "Pair of black alloy seatbelt alarm silencer clips detailed with VW crest and VOLKSWAGEN wording.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-black-metal-seatbelt-silencer-pair_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-black-metal-seatbelt-silencer-pair_1.jpg"
    ]
  },
  {
    "id": "vw-carbon-mqb-flip-shell-braided-chain",
    "name": "VW MQB CARBON HARD SHELL KEY COVER & BRAIDED KEYCHAIN",
    "brand": "volkswagen",
    "category": "keyscover",
    "fitment": "VW Golf 7, Polo, Tiguan, Passat / Seat / Skoda Flip Key",
    "description": "Hard carbon-fiber pattern flip key shell paired with braided black leather and gunmetal keychain.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-carbon-mqb-flip-shell-braided-chain_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-carbon-mqb-flip-shell-braided-chain_1.jpg",
      "images/catalog/volkswagen/vw-carbon-mqb-flip-shell-braided-chain_2.jpg"
    ]
  },
  {
    "id": "vw-golf6-dsg-perforated-shift-knob-boot",
    "name": "VW GOLF 6 DSG SHIFT KNOB & RED-STITCH LEATHER BOOT",
    "brand": "volkswagen",
    "category": "tobb",
    "fitment": "Volkswagen Golf Mk6 / Jetta / Passat DSG Automatic",
    "description": "Gloss black and perforated leather DSG gear shift knob complete with red-stitched boot and P-R-N-D bezel.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-golf6-dsg-perforated-shift-knob-boot_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-golf6-dsg-perforated-shift-knob-boot_1.jpg"
    ]
  },
  {
    "id": "vw-honeycomb-silicone-hook-key-cover",
    "name": "VW MQB SILICONE HONEYCOMB RED STRIPE & HOOK KEY COVER",
    "brand": "volkswagen",
    "category": "keyscover",
    "fitment": "VW Golf 7, Passat, Polo / Seat / Skoda Flip Key",
    "description": "Matte black grip-textured honeycomb silicone flip key cover with red stripe and angled lanyard hook.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-honeycomb-silicone-hook-key-cover_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-honeycomb-silicone-hook-key-cover_1.jpg",
      "images/catalog/volkswagen/vw-honeycomb-silicone-hook-key-cover_2.jpg"
    ]
  },
  {
    "id": "vw-silicone-diagonal-red-stripe-cover",
    "name": "VW MQB SILICONE DIAGONAL RED STRIPE FLIP KEY COVER",
    "brand": "volkswagen",
    "category": "keyscover",
    "fitment": "VW Golf 7, Polo, Tiguan / Seat / Skoda Flip Key",
    "description": "Matte black 3-button flip key silicone case accented with a sporty diagonal red racing stripe.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-silicone-diagonal-red-stripe-cover_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-silicone-diagonal-red-stripe-cover_1.jpg",
      "images/catalog/volkswagen/vw-silicone-diagonal-red-stripe-cover_2.jpg"
    ]
  },
  {
    "id": "vw-20t-chrome-red-t-trunk-badge",
    "name": "VW 2.0T CHROME & RED-T ENGINE TRUNK BADGE",
    "brand": "volkswagen",
    "category": "tags",
    "fitment": "Volkswagen & Audi 2.0T Models",
    "description": "Mirror chrome 2.0 lettering paired with bold red chrome-trimmed T engine badge.",
    "isSoldOut": false,
    "image": "images/catalog/volkswagen/vw-20t-chrome-red-t-trunk-badge_1.jpg",
    "images": [
      "images/catalog/volkswagen/vw-20t-chrome-red-t-trunk-badge_1.jpg"
    ]
  },
  {
    "id": "vwgti-chrome-bevel-trunk-badge",
    "name": "VW GTI HOLLOW CHROME BEVEL TRUNK BADGE",
    "brand": "vwgti",
    "category": "tags",
    "fitment": "Volkswagen Golf GTI Mk5, Mk6, Mk7, Mk8",
    "description": "Reflective chrome-bevel GTI trunk emblem with recessed dark center on transfer sheet.",
    "isSoldOut": false,
    "image": "images/catalog/vwgti/vwgti-chrome-bevel-trunk-badge_1.jpg",
    "images": [
      "images/catalog/vwgti/vwgti-chrome-bevel-trunk-badge_1.jpg"
    ]
  },
  {
    "id": "vwgti-black-chrome-outline-badge",
    "name": "VW GTI ONE-PIECE BLACK & CHROME OUTLINE BADGE",
    "brand": "vwgti",
    "category": "tags",
    "fitment": "Volkswagen Golf GTI & Polo GTI",
    "description": "Joined-base gloss black GTI emblem outlined in bright mirror chrome.",
    "isSoldOut": false,
    "image": "images/catalog/vwgti/vwgti-black-chrome-outline-badge_1.jpg",
    "images": [
      "images/catalog/vwgti/vwgti-black-chrome-outline-badge_1.jpg"
    ]
  },
  {
    "id": "vwgti-white-chrome-outline-badge",
    "name": "VW GTI WHITE & CHROME OUTLINE TRUNK BADGE",
    "brand": "vwgti",
    "category": "tags",
    "fitment": "Volkswagen Golf GTI",
    "description": "Clean gloss white GTI rear trunk emblem trimmed with bright silver-chrome edges.",
    "isSoldOut": false,
    "image": "images/catalog/vwgti/vwgti-white-chrome-outline-badge_1.jpg",
    "images": [
      "images/catalog/vwgti/vwgti-white-chrome-outline-badge_1.jpg"
    ]
  },
  {
    "id": "vwgti-rabbit-chrome-red-grille-badge",
    "name": "VW RABBIT GTI FRONT GRILLE EMBLEM WITH BRACKET",
    "brand": "vwgti",
    "category": "tags",
    "fitment": "Volkswagen Golf GTI Honeycomb Front Grille",
    "description": "Classic leaping chrome Rabbit mascot paired with red chrome-trimmed GTI badge and mounting hardware.",
    "isSoldOut": false,
    "image": "images/catalog/vwgti/vwgti-rabbit-chrome-red-grille-badge_1.jpg",
    "images": [
      "images/catalog/vwgti/vwgti-rabbit-chrome-red-grille-badge_1.jpg"
    ]
  },
  {
    "id": "vwgti-red-chrome-grille-badge",
    "name": "VW GTI RED & CHROME FRONT GRILLE EMBLEM WITH BRACKET",
    "brand": "vwgti",
    "category": "tags",
    "fitment": "Volkswagen Golf GTI Honeycomb Grille",
    "description": "Red GTI emblem mounted on gloss black grille baseplate with metal bracket, screws, and nuts.",
    "isSoldOut": false,
    "image": "images/catalog/vwgti/vwgti-red-chrome-grille-badge_1.jpg",
    "images": [
      "images/catalog/vwgti/vwgti-red-chrome-grille-badge_1.jpg"
    ]
  },
  {
    "id": "vwgti-chrome-matte-black-grille-badge",
    "name": "VW GTI CHROME FRONT GRILLE EMBLEM WITH CLIP BRACKET",
    "brand": "vwgti",
    "category": "tags",
    "fitment": "Volkswagen Golf GTI Mk6 / Mk7 Grille",
    "description": "Mirror chrome GTI letters on stealth matte black baseplate with plastic clip mounting bracket.",
    "isSoldOut": false,
    "image": "images/catalog/vwgti/vwgti-chrome-matte-black-grille-badge_1.jpg",
    "images": [
      "images/catalog/vwgti/vwgti-chrome-matte-black-grille-badge_1.jpg"
    ]
  },
  {
    "id": "vwgti-mk7-clubsport-mirror-ornament",
    "name": "VW GOLF MK7 GTI CLUBSPORT MIRROR HANGING ORNAMENT",
    "brand": "vwgti",
    "category": "medals",
    "fitment": "VW Golf GTI Enthusiasts / Interior Mirror",
    "description": "White Golf Mk7 GTI Clubsport front-view hanging mirror charm with red grille stripe and GTI badge.",
    "isSoldOut": false,
    "image": "images/catalog/vwgti/vwgti-mk7-clubsport-mirror-ornament_1.jpg",
    "images": [
      "images/catalog/vwgti/vwgti-mk7-clubsport-mirror-ornament_1.jpg"
    ]
  },
  {
    "id": "vwgti-racing-rabbit-chrome-red-badge",
    "name": "VW GTI RACING RABBIT ADHESIVE TRUNK BADGE",
    "brand": "vwgti",
    "category": "tags",
    "fitment": "Volkswagen Golf GTI / Rabbit Editions",
    "description": "Red GTI Racing badge bundled with silver leaping Rabbit mascot emblem.",
    "isSoldOut": false,
    "image": "images/catalog/vwgti/vwgti-racing-rabbit-chrome-red-badge_1.jpg",
    "images": [
      "images/catalog/vwgti/vwgti-racing-rabbit-chrome-red-badge_1.jpg"
    ]
  },
  {
    "id": "vwgti-rabbit-black-seatbelt-silencer-pair",
    "name": "VW GTI RABBIT SEATBELT SILENCER BUCKLE CLIPS (PAIR)",
    "brand": "vwgti",
    "category": "seatbelt",
    "fitment": "All Volkswagen Seatbelt Buckles",
    "description": "Pair of gloss black alloy seatbelt alarm silencer clips detailed with Rabbit mascot and red GTI logo.",
    "isSoldOut": false,
    "image": "images/catalog/vwgti/vwgti-rabbit-black-seatbelt-silencer-pair_1.jpg",
    "images": [
      "images/catalog/vwgti/vwgti-rabbit-black-seatbelt-silencer-pair_1.jpg"
    ]
  },
  {
    "id": "vwgti-onepiece-chrome-blackplate-emblem",
    "name": "VW GOLF GTI ONE-PIECE CHROME & BLACK PLATE EMBLEM",
    "brand": "vwgti",
    "category": "carnameslogo",
    "fitment": "Volkswagen Golf GTI Trunk & Grille",
    "description": "One-piece chrome GOLF GTI nameplate molded on solid black backing bar.",
    "isSoldOut": false,
    "image": "images/catalog/vwgti/vwgti-onepiece-chrome-blackplate-emblem_1.jpg",
    "images": [
      "images/catalog/vwgti/vwgti-onepiece-chrome-blackplate-emblem_1.jpg"
    ]
  },
  {
    "id": "vwgti-chrome-black-fender-blades",
    "name": "VW GTI TAPERED FENDER BLADE BADGES (CHROME & BLACK PAIR)",
    "brand": "vwgti",
    "category": "tags",
    "fitment": "Volkswagen Golf GTI Mk7 / Mk7.5 Side Fenders",
    "description": "Pair of OEM-style tapered chrome and gloss black GTI front fender blade emblems.",
    "isSoldOut": false,
    "image": "images/catalog/vwgti/vwgti-chrome-black-fender-blades_1.jpg",
    "images": [
      "images/catalog/vwgti/vwgti-chrome-black-fender-blades_1.jpg"
    ]
  },
  {
    "id": "vwgti-chrome-black-inlay-trunk-badge",
    "name": "VW GTI CHROME WITH BLACK INLAY TRUNK BADGE",
    "brand": "vwgti",
    "category": "tags",
    "fitment": "Volkswagen Golf GTI Mk7 / Mk8",
    "description": "Mirror chrome GTI badge accented with matte black interior infill.",
    "isSoldOut": false,
    "image": "images/catalog/vwgti/vwgti-chrome-black-inlay-trunk-badge_1.jpg",
    "images": [
      "images/catalog/vwgti/vwgti-chrome-black-inlay-trunk-badge_1.jpg"
    ]
  },
  {
    "id": "vwgti-red-chrome-outline-trunk-badge",
    "name": "VW GTI RED WITH CHROME OUTLINE TRUNK BADGE",
    "brand": "vwgti",
    "category": "tags",
    "fitment": "Volkswagen Golf GTI Performance / Clubsport",
    "description": "Glossy racing red GTI trunk emblem trimmed in crisp mirror chrome.",
    "isSoldOut": false,
    "image": "images/catalog/vwgti/vwgti-red-chrome-outline-trunk-badge_1.jpg",
    "images": [
      "images/catalog/vwgti/vwgti-red-chrome-outline-trunk-badge_1.jpg"
    ]
  },
  {
    "id": "vwgti-red-chrome-metal-keychain",
    "name": "VW GTI RED ENAMEL & CHROME METAL KEYCHAIN",
    "brand": "vwgti",
    "category": "medals",
    "fitment": "All Volkswagen GTI Key Fobs",
    "description": "Solid metal keychain with vibrant red enamel GTI lettering and chrome rim.",
    "isSoldOut": false,
    "image": "images/catalog/vwgti/vwgti-red-chrome-metal-keychain_1.jpg",
    "images": [
      "images/catalog/vwgti/vwgti-red-chrome-metal-keychain_1.jpg"
    ]
  },
  {
    "id": "vwgti-black-metal-seatbelt-silencer-pair",
    "name": "VW GTI BLACK METAL SEATBELT SILENCER CLIPS (PAIR)",
    "brand": "vwgti",
    "category": "seatbelt",
    "fitment": "All Volkswagen Seatbelt Buckles",
    "description": "Pair of heavy black metal GTI engraved seatbelt alarm stopper clips.",
    "isSoldOut": false,
    "image": "images/catalog/vwgti/vwgti-black-metal-seatbelt-silencer-pair_1.jpg",
    "images": [
      "images/catalog/vwgti/vwgti-black-metal-seatbelt-silencer-pair_1.jpg"
    ]
  },
  {
    "id": "vwgti-black-red-trim-seatbelt-webbing",
    "name": "VW GTI BLACK WITH RED TRIM SEATBELT WEBBING ROLL",
    "brand": "vwgti",
    "category": "scatbelt",
    "fitment": "Universal VW Golf GTI Seatbelt Retrofit",
    "description": "Black racing seatbelt strap roll bordered in red edge stripes with bold red GTI emblem.",
    "isSoldOut": false,
    "image": "images/catalog/vwgti/vwgti-black-red-trim-seatbelt-webbing_1.jpg",
    "images": [
      "images/catalog/vwgti/vwgti-black-red-trim-seatbelt-webbing_1.jpg"
    ]
  },
  {
    "id": "vwgti-red-splatter-seatbelt-webbing",
    "name": "VW GTI BLACK & RED SPLATTER SEATBELT WEBBING ROLL",
    "brand": "vwgti",
    "category": "scatbelt",
    "fitment": "Universal VW Golf GTI Seatbelt Retrofit",
    "description": "Custom black seatbelt webbing roll patterned with red paint splatter and red GTI badge.",
    "isSoldOut": false,
    "image": "images/catalog/vwgti/vwgti-red-splatter-seatbelt-webbing_1.jpg",
    "images": [
      "images/catalog/vwgti/vwgti-red-splatter-seatbelt-webbing_1.jpg"
    ]
  },
  {
    "id": "vwgti-clark-tartan-plaid-seatbelt-webbing",
    "name": "VW GTI CLARK TARTAN PLAID SEATBELT WEBBING ROLL",
    "brand": "vwgti",
    "category": "scatbelt",
    "fitment": "Volkswagen Golf GTI Classic Interior Match",
    "description": "Iconic VW GTI Clark tartan plaid woven pattern racing seatbelt webbing strap roll.",
    "isSoldOut": false,
    "image": "images/catalog/vwgti/vwgti-clark-tartan-plaid-seatbelt-webbing_1.jpg",
    "images": [
      "images/catalog/vwgti/vwgti-clark-tartan-plaid-seatbelt-webbing_1.jpg"
    ]
  },
  {
    "id": "vwgti-rabbit-black-and-chrome-pair",
    "name": "VW RABBIT GTI TRUNK BADGES (MATTE BLACK & CHROME DUO)",
    "brand": "vwgti",
    "category": "tags",
    "fitment": "Volkswagen Golf GTI Trunk & Grille",
    "description": "Matched duo of leaping Rabbit badges with GTI lettering in matte black and mirror chrome finishes.",
    "isSoldOut": false,
    "image": "images/catalog/vwgti/vwgti-rabbit-black-and-chrome-pair_1.jpg",
    "images": [
      "images/catalog/vwgti/vwgti-rabbit-black-and-chrome-pair_1.jpg"
    ]
  },
  {
    "id": "vwgti-red-chrome-fender-blades-pair",
    "name": "VW GTI RED & CHROME SIDE FENDER BLADE BADGES (PAIR)",
    "brand": "vwgti",
    "category": "tags",
    "fitment": "Volkswagen Golf GTI Mk7 / Mk7.5 Fenders",
    "description": "Pair of tapered gloss red GTI front fender wing blades accented with mirror chrome lettering.",
    "isSoldOut": false,
    "image": "images/catalog/vwgti/vwgti-red-chrome-fender-blades-pair_1.jpg",
    "images": [
      "images/catalog/vwgti/vwgti-red-chrome-fender-blades-pair_1.jpg"
    ]
  },
  {
    "id": "vwr-classic-chrome-waving-flag-badge",
    "name": "VW R CLASSIC SOLID CHROME WAVING FLAG EMBLEM",
    "brand": "vwr",
    "category": "tags",
    "fitment": "Volkswagen Golf R, Scirocco R, Passat R36",
    "description": "Classic bold italic chrome R emblem paired with sculpted waving flag crest.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-classic-chrome-waving-flag-badge_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-classic-chrome-waving-flag-badge_1.jpg"
    ]
  },
  {
    "id": "vwr-slim-chrome-adhesive-badge",
    "name": "VW R MODERN SLIM CHROME TRUNK & FENDER EMBLEM",
    "brand": "vwr",
    "category": "tags",
    "fitment": "Volkswagen Golf 8 R, Tiguan R, T-Roc R",
    "description": "Modern slimline mirror chrome VW R adhesive badge packed in protective foil sleeve.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-slim-chrome-adhesive-badge_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-slim-chrome-adhesive-badge_1.jpg"
    ]
  },
  {
    "id": "vwr-slim-red-chrome-outline-badge",
    "name": "VW R MODERN SLIM RED & CHROME EMBLEM",
    "brand": "vwr",
    "category": "tags",
    "fitment": "Volkswagen Golf 8 R / R Performance",
    "description": "Modern slimline VW R adhesive emblem finished in glossy red with polished chrome border.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-slim-red-chrome-outline-badge_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-slim-red-chrome-outline-badge_1.jpg",
      "images/catalog/vwr/vwr-slim-red-chrome-outline-badge_2.jpg"
    ]
  },
  {
    "id": "vwr-classic-red-chrome-flag-badge",
    "name": "VW R CLASSIC RED FLAG & CHROME ITALIC R EMBLEM",
    "brand": "vwr",
    "category": "tags",
    "fitment": "Volkswagen Golf R / Scirocco R",
    "description": "Classic red-and-chrome waving racing flag paired with bold italic chrome R emblem.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-classic-red-chrome-flag-badge_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-classic-red-chrome-flag-badge_1.jpg"
    ]
  },
  {
    "id": "vwr-heritage-red-enamel-flag-badge",
    "name": "VW R HERITAGE RED ENAMEL WAVING FLAG BADGE",
    "brand": "vwr",
    "category": "tags",
    "fitment": "Volkswagen Golf R, Passat R",
    "description": "Deep red enamel inlaid flag bars matched with high-polish chrome italic R badge.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-heritage-red-enamel-flag-badge_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-heritage-red-enamel-flag-badge_1.jpg"
    ]
  },
  {
    "id": "vwr-gloss-black-silver-fender-blades",
    "name": "VW R GLOSS BLACK FENDER BLADES (SILVER R PAIR)",
    "brand": "vwr",
    "category": "tags",
    "fitment": "Volkswagen Golf R, T-Roc R, Tiguan R Fenders",
    "description": "Pair of gloss black front fender blade badges featuring modern silver/white VW R logo.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-gloss-black-silver-fender-blades_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-gloss-black-silver-fender-blades_1.jpg"
    ]
  },
  {
    "id": "vwr-gloss-black-red-fender-blades",
    "name": "VW R GLOSS BLACK FENDER BLADES (RED R PAIR)",
    "brand": "vwr",
    "category": "tags",
    "fitment": "Volkswagen Golf R, T-Roc R Fenders",
    "description": "Pair of gloss black front fender blade badges accented with modern racing red VW R emblem.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-gloss-black-red-fender-blades_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-gloss-black-red-fender-blades_1.jpg"
    ]
  },
  {
    "id": "vwr-steering-wheel-red-spoke-trim",
    "name": "VW R STEERING WHEEL LOWER SPOKE TRIM (SATIN RED)",
    "brand": "vwr",
    "category": "steeringwheelsymbols",
    "fitment": "Volkswagen Golf 8 R, Tiguan R Sport Steering Wheel",
    "description": "Metallic satin red V-frame lower steering wheel spoke trim with gloss black center and chrome R logo.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-steering-wheel-red-spoke-trim_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-steering-wheel-red-spoke-trim_1.jpg"
    ]
  },
  {
    "id": "vwr-steering-wheel-black-spoke-trim",
    "name": "VW R STEERING WHEEL LOWER SPOKE TRIM (GLOSS BLACK)",
    "brand": "vwr",
    "category": "steeringwheelsymbols",
    "fitment": "Volkswagen Golf 8 R, Tiguan R Sport Steering Wheel",
    "description": "All-gloss-black V-frame lower steering wheel spoke cover featuring raised chrome modern R emblem.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-steering-wheel-black-spoke-trim_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-steering-wheel-black-spoke-trim_1.jpg"
    ]
  },
  {
    "id": "vwr-slim-parallelogram-fender-badges",
    "name": "VW R PARALLELOGRAM ADHESIVE FENDER BADGES (BLACK & CHROME)",
    "brand": "vwr",
    "category": "tags",
    "fitment": "Volkswagen Golf R, Tiguan R, Arteon R",
    "description": "Gloss black parallelogram side fender badges available in both black-on-black and chrome-outline R finishes.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-slim-parallelogram-fender-badges_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-slim-parallelogram-fender-badges_1.jpg",
      "images/catalog/vwr/vwr-slim-parallelogram-fender-badges_2.jpg",
      "images/catalog/vwr/vwr-slim-parallelogram-fender-badges_3.jpg"
    ]
  },
  {
    "id": "vwr-clip-on-black-chrome-grille-emblem",
    "name": "VW R CLIP-ON FRONT GRILLE EMBLEM (BLACK & CHROME)",
    "brand": "vwr",
    "category": "tags",
    "fitment": "Volkswagen Golf 8 R / Tiguan R Honeycomb Grille",
    "description": "Modern VW R clip-in front radiator grille emblem with chrome R outline on gloss black housing.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-clip-on-black-chrome-grille-emblem_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-clip-on-black-chrome-grille-emblem_1.jpg",
      "images/catalog/vwr/vwr-clip-on-black-chrome-grille-emblem_2.jpg",
      "images/catalog/vwr/vwr-clip-on-black-chrome-grille-emblem_3.jpg"
    ]
  },
  {
    "id": "vwr-r32-chrome-flag-trunk-badge",
    "name": "VW R32 CLASSIC FLAG & CHROME TRUNK EMBLEM",
    "brand": "vwr",
    "category": "tags",
    "fitment": "Volkswagen Golf R32 Mk4 / Mk5",
    "description": "Classic stylized chrome R32 trunk emblem with integrated waving racing flag.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-r32-chrome-flag-trunk-badge_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-r32-chrome-flag-trunk-badge_1.jpg"
    ]
  },
  {
    "id": "vwr-matte-black-seatbelt-silencer-pair",
    "name": "VW R MATTE BLACK SEATBELT SILENCER CLIPS (PAIR)",
    "brand": "vwr",
    "category": "seatbelt",
    "fitment": "All Volkswagen Seatbelt Buckles",
    "description": "Pair of matte black metal seatbelt alarm silencer clips detailed with modern silver R emblem.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-matte-black-seatbelt-silencer-pair_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-matte-black-seatbelt-silencer-pair_1.jpg"
    ]
  },
  {
    "id": "vwr-slim-black-red-badges-multipack",
    "name": "VW R MODERN SLIM EMBLEMS DISPLAY (BLACK & RED VARIANTS)",
    "brand": "vwr",
    "category": "tags",
    "fitment": "Volkswagen Golf R, Tiguan R, Arteon R, Keys & Interior",
    "description": "Modern slimline adhesive VW R badges offered in chrome-trimmed gloss black and red finishes.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-slim-black-red-badges-multipack_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-slim-black-red-badges-multipack_1.jpg"
    ]
  },
  {
    "id": "vwr-motorsport-wrc-r-hard-key-cover",
    "name": "VW MOTORSPORT WRC R HARD KEY COVER & STRAP KEYCHAIN",
    "brand": "vwr",
    "category": "keyscover",
    "fitment": "Volkswagen Golf 8 R / Tiguan R Smart Key",
    "description": "VW Motorsport WRC R-Line hard key shell with matching WRC R lanyard keychain and mini screwdriver.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-motorsport-wrc-r-hard-key-cover_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-motorsport-wrc-r-hard-key-cover_1.jpg",
      "images/catalog/vwr/vwr-motorsport-wrc-r-hard-key-cover_2.jpg"
    ]
  },
  {
    "id": "vwr-slim-solid-gloss-red-emblem",
    "name": "VW R MODERN SLIM SOLID GLOSS RED EMBLEM",
    "brand": "vwr",
    "category": "tags",
    "fitment": "Volkswagen Golf R / R-Line Custom",
    "description": "Borderless glossy solid racing red modern VW R adhesive badge.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-slim-solid-gloss-red-emblem_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-slim-solid-gloss-red-emblem_1.jpg"
    ]
  },
  {
    "id": "vwr-r32-chrome-grille-and-trunk-set",
    "name": "VW R32 CHROME FRONT GRILLE & TRUNK BADGE SET",
    "brand": "vwr",
    "category": "tags",
    "fitment": "Volkswagen Golf R32 Front & Rear",
    "description": "Chrome Golf R32 front grille stud-mount badges paired with flat adhesive rear tailgate emblem.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-r32-chrome-grille-and-trunk-set_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-r32-chrome-grille-and-trunk-set_1.jpg",
      "images/catalog/vwr/vwr-r32-chrome-grille-and-trunk-set_2.jpg",
      "images/catalog/vwr/vwr-r32-chrome-grille-and-trunk-set_3.jpg"
    ]
  },
  {
    "id": "vwr-bold-black-chrome-3d-badge",
    "name": "VW R CLASSIC BOLD 3D METAL BADGE (BLACK & CHROME)",
    "brand": "vwr",
    "category": "tags",
    "fitment": "Volkswagen Golf 6 R, Golf 7 R, Scirocco R",
    "description": "Classic bold-profile 3D metal VW R emblem with gloss black inlay and polished chrome frame.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-bold-black-chrome-3d-badge_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-bold-black-chrome-3d-badge_1.jpg"
    ]
  },
  {
    "id": "vwr-classic-chrome-black-fender-blades",
    "name": "VW R CLASSIC FENDER BLADE BADGES (CHROME & BLACK PAIR)",
    "brand": "vwr",
    "category": "tags",
    "fitment": "Volkswagen Golf 7 / 7.5 R Side Fenders",
    "description": "Pair of OEM-style tapered chrome and gloss black front fender blade emblems with classic R logo.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-classic-chrome-black-fender-blades_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-classic-chrome-black-fender-blades_1.jpg"
    ]
  },
  {
    "id": "vwr-slim-black-outline-fender-blades",
    "name": "VW R NEW BLACKOUT CHROME-OUTLINE FENDER BLADES (PAIR)",
    "brand": "vwr",
    "category": "tags",
    "fitment": "Volkswagen Golf 8 R / T-Roc R Side Fenders",
    "description": "Stealth gloss black tapered front fender blade badges featuring chrome-outlined modern R symbol.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-slim-black-outline-fender-blades_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-slim-black-outline-fender-blades_1.jpg"
    ]
  },
  {
    "id": "vwr-red-black-logo-seatbelt-webbing",
    "name": "VW R RACING RED SEATBELT WEBBING WITH BLACK R LOGO",
    "brand": "vwr",
    "category": "scatbelt",
    "fitment": "Universal VW Golf R Sport Seatbelt Retrofit",
    "description": "Solid racing red seatbelt webbing strap roll patterned with modern black VW R crest.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-red-black-logo-seatbelt-webbing_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-red-black-logo-seatbelt-webbing_1.jpg"
    ]
  },
  {
    "id": "vwr-blue-splatter-seatbelt-webbing",
    "name": "VW R BLACK & RACING BLUE SPLATTER SEATBELT WEBBING",
    "brand": "vwr",
    "category": "scatbelt",
    "fitment": "Universal VW Golf R Seatbelt Retrofit",
    "description": "Black racing seatbelt webbing roll printed with electric Lapiz blue splatter and white modern R emblem.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-blue-splatter-seatbelt-webbing_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-blue-splatter-seatbelt-webbing_1.jpg"
    ]
  },
  {
    "id": "vwr-black-blue-trim-seatbelt-webbing",
    "name": "VW R BLACK WITH BLUE EDGE TRIM SEATBELT WEBBING",
    "brand": "vwr",
    "category": "scatbelt",
    "fitment": "Universal VW Golf R Seatbelt Retrofit",
    "description": "Black heavy-duty seatbelt strap roll bordered in VW R blue with crisp white modern R logo.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-black-blue-trim-seatbelt-webbing_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-black-blue-trim-seatbelt-webbing_1.jpg"
    ]
  },
  {
    "id": "vwr-solid-blue-black-seatbelt-webbing",
    "name": "VW R LAPIZ BLUE SEATBELT WEBBING WITH BLACK R LOGO",
    "brand": "vwr",
    "category": "scatbelt",
    "fitment": "Universal VW Golf R Seatbelt Retrofit",
    "description": "Full Lapiz blue racing seatbelt webbing roll branded with modern black VW R insignia.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-solid-blue-black-seatbelt-webbing_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-solid-blue-black-seatbelt-webbing_1.jpg"
    ]
  },
  {
    "id": "vwr-metallic-blue-door-striker-covers",
    "name": "VW R METALLIC BLUE DOOR LOCK STRIKER COVERS (SET OF 4)",
    "brand": "vwr",
    "category": "tobb",
    "fitment": "Volkswagen Golf, Passat, Tiguan, Polo, Jetta Doors",
    "description": "Set of 4 metallic Lapiz blue stainless steel door lock latch striker covers stamped with white VW R logo.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-metallic-blue-door-striker-covers_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-metallic-blue-door-striker-covers_1.jpg"
    ]
  },
  {
    "id": "vwr-r32-chrome-and-matte-black-4pc-kit",
    "name": "VW GOLF R32 CHROME & MATTE BLACK EMBLEMS KIT",
    "brand": "vwr",
    "category": "tags",
    "fitment": "Volkswagen Golf R32 Mk4 / Mk5 Grille & Trunk",
    "description": "Stealth matte black and polished chrome Golf R32 front grille and rear trunk badge kit.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-r32-chrome-and-matte-black-4pc-kit_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-r32-chrome-and-matte-black-4pc-kit_1.jpg",
      "images/catalog/vwr/vwr-r32-chrome-and-matte-black-4pc-kit_2.jpg"
    ]
  },
  {
    "id": "vwr-gloss-black-door-striker-covers",
    "name": "VW R GLOSS BLACK DOOR LOCK STRIKER COVERS (SET OF 4)",
    "brand": "vwr",
    "category": "tobb",
    "fitment": "Volkswagen Golf, Passat, Tiguan, Polo, Jetta Doors",
    "description": "Set of 4 stealth gloss black stainless steel door striker lock covers featuring silver-white VW R emblem.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-gloss-black-door-striker-covers_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-gloss-black-door-striker-covers_1.jpg"
    ]
  },
  {
    "id": "vwr-matte-black-red-flag-badge",
    "name": "VW R MATTE BLACK & RED WAVING FLAG BADGE",
    "brand": "vwr",
    "category": "tags",
    "fitment": "Volkswagen Golf R / Scirocco R",
    "description": "Stealth matte black R emblem joined with a deep red and black waving racing flag.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-matte-black-red-flag-badge_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-matte-black-red-flag-badge_1.jpg"
    ]
  },
  {
    "id": "vwr-bold-red-chrome-3d-metal-badges",
    "name": "VW R CLASSIC BOLD 3D METAL BADGE (RED & CHROME)",
    "brand": "vwr",
    "category": "tags",
    "fitment": "Volkswagen Golf 6 R, Golf 7 R, Scirocco R",
    "description": "Classic bold-profile 3D metal VW R emblem with vibrant red infill and polished chrome outline.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-bold-red-chrome-3d-metal-badges_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-bold-red-chrome-3d-metal-badges_1.jpg",
      "images/catalog/vwr/vwr-bold-red-chrome-3d-metal-badges_2.jpg"
    ]
  },
  {
    "id": "vwr-honeycomb-silicone-red-stripe-cover",
    "name": "VW R HONEYCOMB SILICONE & RED STRIPE KEY COVER",
    "brand": "vwr",
    "category": "keyscover",
    "fitment": "VW Golf R, Polo, Tiguan, Passat 3-Button Flip Key",
    "description": "Matte black grip-textured honeycomb silicone key cover featuring vertical red racing stripe and white modern VW R logo.",
    "isSoldOut": false,
    "image": "images/catalog/vwr/vwr-honeycomb-silicone-red-stripe-cover_1.jpg",
    "images": [
      "images/catalog/vwr/vwr-honeycomb-silicone-red-stripe-cover_1.jpg",
      "images/catalog/vwr/vwr-honeycomb-silicone-red-stripe-cover_2.jpg"
    ]
  }
];;

function getCatalogData() {
  let deletedIds = [];
  let deletedBrands = [];
  let deletedCats = [];
  let fallbackUpdatedAt = 0;
  try {
    deletedIds = JSON.parse(localStorage.getItem('koko_catalog_deleted_ids') || '[]');
  } catch (e) {}
  try {
    deletedBrands = JSON.parse(localStorage.getItem('koko_catalog_deleted_brands') || '[]');
  } catch (e) {}
  try {
    deletedCats = JSON.parse(localStorage.getItem('koko_catalog_deleted_cats') || '[]');
  } catch (e) {}
  try {
    fallbackUpdatedAt = Number(localStorage.getItem('koko_catalog_updated_at') || 0) || 0;
  } catch (e) {}

  try {
    const saved = localStorage.getItem('koko_catalog_data');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed === 'object') {
        let prods = Array.isArray(parsed) ? parsed : (Array.isArray(parsed.products) ? parsed.products : null);
        let brands = Array.isArray(parsed.brands) ? parsed.brands : null;
        let categories = Array.isArray(parsed.categories) ? parsed.categories : null;

        if (Array.isArray(parsed.deletedProductIds)) {
          deletedIds = Array.from(new Set([...deletedIds, ...parsed.deletedProductIds]));
        }
        if (Array.isArray(parsed.deletedBrandIds)) {
          deletedBrands = Array.from(new Set([...deletedBrands, ...parsed.deletedBrandIds]));
        }
        if (Array.isArray(parsed.deletedCategoryIds)) {
          deletedCats = Array.from(new Set([...deletedCats, ...parsed.deletedCategoryIds]));
        }

        if (prods !== null) {
          const normalizedProds = prods
            .filter(p => p && p.id && !deletedIds.includes(p.id))
            .map(p => {
              const copy = { ...p, isSoldOut: Boolean(p.isSoldOut || p.soldOut) };
              if ('soldOut' in copy) delete copy.soldOut;
              return copy;
            });

          return {
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
          };
        }
      }
    }
  } catch (e) {
    console.error("Error reading localStorage:", e);
  }

  return {
    brands: DEFAULT_CAR_BRANDS.filter(b => !deletedBrands.includes(b.id)),
    categories: DEFAULT_CATEGORIES.filter(c => !deletedCats.includes(c.id)),
    products: DEFAULT_PRODUCTS
      .filter(p => p && p.id && !deletedIds.includes(p.id))
      .map(p => ({ ...p, isSoldOut: Boolean(p.isSoldOut || p.soldOut) })),
    deletedProductIds: deletedIds,
    deletedBrandIds: deletedBrands,
    deletedCategoryIds: deletedCats,
    updatedAt: fallbackUpdatedAt
  };
}

function saveCatalogData(data, options) {
  const opts = (options && typeof options === 'object') ? options : {};
  const replaceTombstones = Boolean(opts.replaceTombstones);

  try {
    if (data && typeof data === 'object') {
      if (Array.isArray(data.deletedProductIds)) {
        try {
          if (replaceTombstones) {
            localStorage.setItem('koko_catalog_deleted_ids', JSON.stringify(Array.from(new Set(data.deletedProductIds))));
          } else {
            const cur = JSON.parse(localStorage.getItem('koko_catalog_deleted_ids') || '[]');
            const merged = Array.from(new Set([...cur, ...data.deletedProductIds]));
            localStorage.setItem('koko_catalog_deleted_ids', JSON.stringify(merged));
          }
        } catch (e) {}
      }
      if (Array.isArray(data.deletedBrandIds)) {
        try {
          if (replaceTombstones) {
            localStorage.setItem('koko_catalog_deleted_brands', JSON.stringify(Array.from(new Set(data.deletedBrandIds))));
          } else {
            const cur = JSON.parse(localStorage.getItem('koko_catalog_deleted_brands') || '[]');
            const merged = Array.from(new Set([...cur, ...data.deletedBrandIds]));
            localStorage.setItem('koko_catalog_deleted_brands', JSON.stringify(merged));
          }
        } catch (e) {}
      }
      if (Array.isArray(data.deletedCategoryIds)) {
        try {
          if (replaceTombstones) {
            localStorage.setItem('koko_catalog_deleted_cats', JSON.stringify(Array.from(new Set(data.deletedCategoryIds))));
          } else {
            const cur = JSON.parse(localStorage.getItem('koko_catalog_deleted_cats') || '[]');
            const merged = Array.from(new Set([...cur, ...data.deletedCategoryIds]));
            localStorage.setItem('koko_catalog_deleted_cats', JSON.stringify(merged));
          }
        } catch (e) {}
      }
      if (data.updatedAt) {
        try {
          localStorage.setItem('koko_catalog_updated_at', String(data.updatedAt));
        } catch (e) {}
      }
    }

    localStorage.setItem('koko_catalog_data', JSON.stringify(data));
    return true;
  } catch (e) {
    console.warn("Primary localStorage save exceeded quota, attempting lightweight cache fallback:", e);
    try {
      localStorage.removeItem('koko_catalog_data');
      if (data && typeof data === 'object' && Array.isArray(data.products)) {
        const isHugeInline = v => typeof v === 'string' && v.startsWith('data:image/') && v.length > 100000;
        const liteCatalog = {
          ...data,
          products: data.products.map(p => {
            if (!p || typeof p !== 'object') return p;
            const filteredImgs = Array.isArray(p.images) ? p.images.filter(im => !isHugeInline(im)) : [];
            const liteImg = isHugeInline(p.image) ? (filteredImgs[0] || '') : p.image;
            return {
              ...p,
              image: liteImg,
              images: filteredImgs.length > 0 ? filteredImgs : (liteImg ? [liteImg] : [])
            };
          })
        };
        localStorage.setItem('koko_catalog_data', JSON.stringify(liteCatalog));
        return false;
      }
    } catch (eFallback) {
      console.error("Failed lightweight localStorage fallback:", eFallback);
    }
    return false;
  }
}
