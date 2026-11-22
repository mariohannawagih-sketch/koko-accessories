/**
 * KOKO ACCESSORIES - CATALOG DATABASE
 * Auto-saved directly to: D:\projects\koko accessories\products.js
 * Last updated: 2026-11-22 09:07:30
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
  }
];;

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
