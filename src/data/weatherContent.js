export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Weather Guides', path: '/guides' },
  { label: 'Typhoon History', path: '/history' },
  { label: 'Climate Insights', path: '/climate' },
  { label: 'Preparedness Hub', path: '/preparedness' },
  { label: 'Live Radar', path: '/radar' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const navSections = [
  {
    category: 'Home Overview',
    items: [
      { label: 'Weather Forecast', path: '/?view=forecast', icon: '🌤️', desc: 'Live metrics, 24-hr & 7-day municipal outlook' },
      { label: 'Disaster Readiness', path: '/?view=readiness', icon: '🛡️', desc: 'Satellite synthesis, Go-Bag & TCWS guide' },
    ],
  },
  {
    category: 'Weather Guides & Knowledge',
    items: [
      { label: 'Meteorological Guides', path: '/guides', icon: '📚', desc: '8 in-depth guides on typhoons, monsoons & radar physics' },
      { label: 'Climatology FAQs', path: '/guides#faq', icon: '❓', desc: 'Expert Q&A on PAGASA signals, storm surge & safety' },
    ],
  },
  {
    category: 'Typhoon History',
    items: [
      { label: 'Storm Archives & Case Studies', path: '/history?view=archives', icon: '📖', desc: 'Chronological storm archive, trajectories & retired names' },
      { label: 'Climatology & Analytics', path: '/history?view=analytics', icon: '📊', desc: 'Record breakers, storm comparison & climatology trends' },
    ],
  },
  {
    category: 'Climate Insights',
    items: [
      { label: 'Macro Systems & Climate Dynamics', path: '/climate?view=dynamics', icon: '🌊', desc: 'Monsoons (Habagat/Amihan), ITCZ & warm pool thermodynamics' },
      { label: 'Seasonal Telemetry & Ocean Monitors', path: '/climate?view=telemetry', icon: '📊', desc: 'Active monsoon tracker, SST metrics & ENSO teleconnections' },
    ],
  },
  {
    category: 'Preparedness Hub',
    items: [
      { label: 'Family Action Plans & Safety Protocols', path: '/preparedness?view=plans', icon: '📋', desc: 'Emergency plan generator, landfall timeline & health guides' },
      { label: 'Emergency Calculators & Offline Comms', path: '/preparedness?view=calculators', icon: '🎒', desc: '72-hr household supply estimator, evac risk & radio dials' },
    ],
  },
  {
    category: 'Tracking & Radar',
    items: [
      { label: 'Interactive Multi-Layer Radar Map', path: '/radar?view=interactive', icon: '🛰️', desc: 'Doppler precipitation, Himawari-9 satellite & wind vectors' },
      { label: 'PAGASA Doppler Network & Array', path: '/radar?view=network', icon: '📡', desc: '8 national Doppler radar stations, frequencies & live telemetry' },
    ],
  },
  {
    category: 'Platform Information',
    items: [
      { label: 'Platform Capabilities & FAQs', path: '/about?view=platform', icon: '⚙️', desc: 'Core architecture, Philippine climatology & weather FAQs' },
      { label: 'Mission Mandate & Data Sources', path: '/about?view=mandate', icon: '🏛️', desc: '100% open-access mission, PAGASA data sources & attribution' },
      { label: 'Verified Agency Directory', path: '/contact?view=directory', icon: '📞', desc: 'Searchable directory of verified national disaster agencies & hotlines' },
      { label: 'Priority Dials & Protocols', path: '/contact?view=hotlines', icon: '🚨', desc: 'One-touch emergency dials (911, 143, 136, 1555) & calling guides' },
      { label: 'Terms of Service Agreement', path: '/terms?view=agreement', icon: '📜', desc: 'Official terms of service agreement & emergency disclaimers' },
      { label: 'Operational Governance & Rules', path: '/terms?view=governance', icon: '⚖️', desc: 'Acceptable use matrix, non-agency notice & Philippine jurisdiction' },
      { label: 'Privacy Policy Document', path: '/privacy-policy?view=policy', icon: '🔒', desc: 'Official privacy governance, AdSense disclosures & RA 10173' },
      { label: 'Cookie Matrix & Compliance', path: '/privacy-policy?view=compliance', icon: '🍪', desc: 'Cookie transparency, data retention & NPC legal principles' },
    ],
  },
]

export const climateComponents = [
  {
    name: 'Atmosphere',
    expanded: true,
    description:
      'The atmosphere is the blanket of gases around Earth. It controls how heat is stored and moved, carries moisture, and produces the weather we experience every day.',
    details: [
      'It includes nitrogen, oxygen, water vapor, carbon dioxide, and other trace gases.',
      'Wind, clouds, rain, storms, and typhoons all form within the atmosphere.',
      'Greenhouse gases help keep Earth warm, but too much can raise global temperatures.',
    ],
  },
  {
    name: 'Hydrosphere',
    expanded: false,
    description:
      'The hydrosphere includes all liquid water on Earth, from oceans and rivers to groundwater. It stores heat and supplies moisture that later becomes clouds and rainfall.',
    details: [
      'Oceans absorb and release large amounts of heat, which affects monsoons and typhoon strength.',
      'Evaporation from seas, lakes, and rivers adds water vapor to the atmosphere.',
      'Changes in sea temperature can influence droughts, floods, and tropical cyclone activity.',
    ],
  },
  {
    name: 'Cryosphere',
    expanded: false,
    description:
      'The cryosphere is made of Earth frozen water systems, including snow, glaciers, ice sheets, and sea ice. It helps regulate temperature by reflecting sunlight back to space.',
    details: [
      'Bright snow and ice reflect solar energy, helping cool the planet.',
      'Melting land ice contributes to sea level rise.',
      'Loss of sea ice can warm nearby oceans and shift weather patterns.',
    ],
  },
  {
    name: 'Lithosphere',
    expanded: false,
    description:
      'The lithosphere is Earth solid outer layer, including landforms, rocks, soil, mountains, and volcanoes. It affects local climate through elevation, terrain, and land surface type.',
    details: [
      'Mountains can block moist air, creating wet windward areas and dry rain shadows.',
      'Soil and land cover influence how much heat and water the surface absorbs.',
      'Volcanic eruptions can temporarily cool climate by sending particles into the atmosphere.',
    ],
  },
  {
    name: 'Biosphere',
    expanded: false,
    description:
      'The biosphere includes all living things, such as plants, animals, forests, farms, and microorganisms. Life interacts with climate by exchanging carbon, water, and energy.',
    details: [
      'Plants absorb carbon dioxide and release water vapor through transpiration.',
      'Forests can cool nearby areas by shading land and recycling moisture.',
      'Human activities such as deforestation and burning fossil fuels strongly affect climate.',
    ],
  },
]

export const fallbackClimateSummary = {
  title: 'Climate',
  extract:
    'Climate is the long-term pattern of weather in a region, including average conditions and variability over decades, typically measured over 30 years. More rigorously, it is the mean and variability of meteorological variables over a time spanning from months to millions of years. Some of the meteorological variables that are commonly measured are temperature, humidity, atmospheric pressure, wind, and precipitation.',
  sourceUrl: 'https://en.wikipedia.org/wiki/Climate',
}

export const shortcutCards = [
  { label: 'Heat index', icon: 'heat' },
  { label: 'Cold front', icon: 'cold' },
  { label: 'Rainfall', icon: 'rain' },
  { label: 'Wind speed', icon: 'wind' },
]

export const defaultLocation = {
  name: 'Pandi, Philippines',
  latitude: 14.865,
  longitude: 120.957,
}

export const typhoonFallbackOverview = {
  title: 'List of Philippine typhoons',
  extract:
    'The Philippines is a typhoon-prone country, with approximately twenty tropical cyclones entering its area of responsibility per year. Locally known generally as bagyo, typhoons regularly form in the Philippine Sea and less often in the South China Sea.',
  sourceUrl: 'https://en.wikipedia.org/wiki/List_of_Philippine_typhoons',
}

export const typhoonYearTopics = [
  {
    year: 2025,
    title: '2025 Pacific typhoon season',
    fallback:
      'The 2025 Pacific typhoon season covers tropical cyclone activity in the western Pacific basin, including systems that may enter or affect the Philippine Area of Responsibility.',
  },
  {
    year: 2024,
    title: '2024 Pacific typhoon season',
    fallback:
      'The 2024 Pacific typhoon season includes western Pacific storms monitored by regional meteorological agencies, with several systems affecting or threatening the Philippines.',
  },
  {
    year: 2023,
    title: '2023 Pacific typhoon season',
    fallback:
      'The 2023 Pacific typhoon season produced multiple western Pacific tropical cyclones, with some storms entering the Philippine Area of Responsibility.',
  },
  {
    year: 2022,
    title: '2022 Pacific typhoon season',
    fallback:
      'The 2022 Pacific typhoon season featured a number of tropical storms and typhoons across the western Pacific, including systems that brought rainfall and wind impacts to the Philippines.',
  },
  {
    year: 2021,
    title: '2021 Pacific typhoon season',
    fallback:
      'The 2021 Pacific typhoon season included several notable storms in the western Pacific, with Philippine impacts from rainfall, floods, landslides, and coastal hazards.',
  },
  {
    year: 2020,
    title: '2020 Pacific typhoon season',
    fallback:
      'The 2020 Pacific typhoon season included powerful systems such as Goni and Vamco, which caused major damage and flooding in parts of the Philippines.',
  },
  {
    year: 2019,
    title: '2019 Pacific typhoon season',
    fallback:
      'The 2019 Pacific typhoon season had multiple tropical cyclone events in the western Pacific, including storms that entered the Philippine Area of Responsibility.',
  },
  {
    year: 2018,
    title: '2018 Pacific typhoon season',
    fallback:
      'The 2018 Pacific typhoon season included Typhoon Mangkhut, locally known as Ompong, which affected northern Luzon with destructive winds and rain.',
  },
  {
    year: 2017,
    title: '2017 Pacific typhoon season',
    fallback:
      'The 2017 Pacific typhoon season formed multiple storms across the western Pacific, several of which were monitored by Philippine weather agencies.',
  },
  {
    year: 2016,
    title: '2016 Pacific typhoon season',
    fallback:
      'The 2016 Pacific typhoon season included several significant storms in the western Pacific basin, with some systems affecting the Philippines.',
  },
  {
    year: 2015,
    title: '2015 Pacific typhoon season',
    fallback:
      'The 2015 Pacific typhoon season included many tropical cyclones in the western Pacific, including systems that brought damaging weather to parts of the Philippines.',
  },
]

export const namedTyphoonTopics = [
  {
    title: 'Super Typhoon Man-yi',
    year: 2024,
    localName: 'Pepito',
    category: 'Super Typhoon (Category 5)',
    maxWinds: '195 km/h sustained (gusts to 260 km/h)',
    centralPressure: '920 hPa',
    impactedAreas: 'Catanduanes, Aurora, Polillo Islands, Quirino, Nueva Vizcaya',
    fallback:
      'Super Typhoon Pepito (Man-yi) was the culmination of an unprecedented series of six consecutive tropical cyclones impacting the Philippines in November 2024. Pepito reached Category 5 super typhoon intensity with 10-minute sustained winds of 195 km/h before making its initial landfall in Panganiban, Catanduanes, followed by a second violent landfall in Dipaculao, Aurora. It produced destructive storm surges up to 4.5 meters in Baler and Catanduanes, uprooted century-old trees, and sheared transmission lines across Central and Northern Luzon.',
  },
  {
    title: 'Severe Tropical Storm Trami',
    year: 2024,
    localName: 'Kristine',
    category: 'Severe Tropical Storm',
    maxWinds: '95 km/h (gusts up to 140 km/h)',
    centralPressure: '985 hPa',
    impactedAreas: 'Bicol Region, Naga City, Batangas, Quezon, Northern Luzon',
    fallback:
      'Severe Tropical Storm Kristine (Trami) became one of the most hydro-meteorologically devastating storms of recent decades. Despite having moderate wind speeds (95 km/h), its massive 700-kilometer circulation dumped over 709 mm of torrential rainfall in Daet, Camarines Norte within 24 hours — exceeding two months of normal regional precipitation. Naga City and surrounding Bicol municipalities suffered catastrophic submergence, while massive volcanic debris flows and saturated mudslides swept through Talisay and Agoncillo in Batangas.',
  },
  {
    title: 'Typhoon Gaemi',
    year: 2024,
    localName: 'Carina',
    category: 'Typhoon / Habagat Enhancement',
    maxWinds: '165 km/h',
    centralPressure: '940 hPa',
    impactedAreas: 'Metro Manila, Rizal, Bulacan, Bataan, Cavite, Northern Luzon',
    fallback:
      'Although Typhoon Carina (Gaemi) tracked east of Taiwan without directly making landfall on Philippine soil, its powerful cyclonic vortex acted as a massive atmospheric siphon, pulling the Southwest Monsoon (Habagat) directly across Western Luzon. Over 460 mm of relentless monsoon rain fell over Metro Manila in 24 hours, causing the Marikina River to reach 20.7 meters (exceeding its 3rd Alarm evacuation threshold) and submerging EDSA, España, and vast residential districts across Malabon, Navotas, and Bulacan.',
  },
  {
    title: 'Typhoon Doksuri',
    year: 2023,
    localName: 'Egay',
    category: 'Super Typhoon',
    maxWinds: '175 km/h (gusts up to 215 km/h)',
    centralPressure: '935 hPa',
    impactedAreas: 'Babuyan Islands, Cagayan, Ilocos Norte, Apayao',
    fallback:
      'Typhoon Doksuri (Egay) battered Northern Luzon with destructive eyewall winds, performing a looping cyclonic trajectory near the Babuyan Islands. Fuga and Calayan Islands sustained direct eyewall strikes with wind gusts exceeding 215 km/h. Egay caused extensive storm surges, severed bridges across Cagayan Valley, triggered massive landslides in the Cordillera Administrative Region, and damaged more than ₱15 billion in agricultural and public infrastructure.',
  },
  {
    title: 'Typhoon Noru',
    year: 2022,
    localName: 'Karding',
    category: 'Super Typhoon',
    maxWinds: '195 km/h (gusts up to 240 km/h)',
    centralPressure: '920 hPa',
    impactedAreas: 'Polillo Islands, Burdeos, Aurora, Nueva Ecija, Bulacan',
    fallback:
      'Super Typhoon Karding (Noru) holds the meteorological distinction of one of the fastest rapidly intensifying tropical cyclones ever recorded in the Western Pacific, exploding from a Category 1 storm to a Category 5 super typhoon with winds jumping by 90 km/h in just 6 hours over the Philippine Sea. It slammed directly into the Polillo Islands and Dingalan, Aurora, flattening the rice granary of Central Luzon right before harvest season with severe wind shear and riverine flooding.',
  },
  {
    title: 'Typhoon Rai',
    year: 2021,
    localName: 'Odette',
    category: 'Super Typhoon (Category 5)',
    maxWinds: '195 km/h sustained (gusts up to 260 km/h)',
    centralPressure: '915 hPa',
    impactedAreas: 'Siargao, Dinagat Islands, Southern Leyte, Bohol, Cebu, Palawan',
    fallback:
      'Super Typhoon Odette (Rai) tore through Visayas and northern Mindanao with nine separate landfalls, beginning at Siargao Island. Odette underwent unexpected rapid intensification right before landfall, reaching Category 5 status with catastrophic 260 km/h gusts. It leveled entire resort communities in Siargao and Dinagat Islands, destroyed high-voltage electrical grids across Bohol and Metro Cebu, knocked out municipal water distribution for weeks, and caused damages exceeding ₱51 billion.',
  },
  {
    title: 'Typhoon Vamco',
    year: 2020,
    localName: 'Ulysses',
    category: 'Typhoon',
    maxWinds: '155 km/h (gusts up to 205 km/h)',
    centralPressure: '955 hPa',
    impactedAreas: 'Metro Manila, Marikina, Rodriguez, Rizal, Cagayan Valley',
    fallback:
      'Typhoon Ulysses (Vamco) struck just days after Super Typhoon Rolly had saturated Luzon soils. Ulysses crossed Quezon and Rizal, delivering historic nighttime rainfall over the Sierra Madre catchment. The Marikina River surged to 22.0 meters, exceeding Typhoon Ondoy 2009 levels and trapping thousands of residents on rooftops in Provident Village and San Mateo. Massive emergency water releases from Magat Dam subsequently inundated the entire Cagayan Valley under vast lakes of muddy water.',
  },
  {
    title: 'Typhoon Goni',
    year: 2020,
    localName: 'Rolly',
    category: 'Super Typhoon (Category 5)',
    maxWinds: '225 km/h 10-min sustained (1-min: 315 km/h)',
    centralPressure: '905 hPa',
    impactedAreas: 'Catanduanes, Albay, Camarines Sur, Batangas',
    fallback:
      'Super Typhoon Rolly (Goni) ranks as the strongest landfalling tropical cyclone in recorded global meteorological history by 1-minute sustained wind standards (315 km/h). Rolly made its initial direct landfall in Bato, Catanduanes, obliterating 90% of local infrastructure. Its violent second landfall near Tiwi, Albay triggered volcanic mudflows (lahar) down the slopes of Mount Mayon, burying entire communities in San Francisco and Guinobatan under boulders and volcanic ash.',
  },
  {
    title: 'Typhoon Mangkhut',
    year: 2018,
    localName: 'Ompong',
    category: 'Super Typhoon',
    maxWinds: '205 km/h (gusts up to 285 km/h)',
    centralPressure: '905 hPa',
    impactedAreas: 'Cagayan, Baggao, Benguet, Ilocos Norte, Cordilleras',
    fallback:
      'Super Typhoon Ompong (Mangkhut) possessed a massive cloud diameter spanning over 900 kilometers when it made landfall in Baggao, Cagayan. Its extreme gales shattered agricultural canopies and knocked out communications across northern Luzon. Most tragically, its orographic precipitation loosened mountain slopes in the mining town of Itogon, Benguet, triggering a colossal mountain landslide that engulfed a bunkhouse community and claimed over 100 lives.',
  },
  {
    title: 'Typhoon Haiyan',
    year: 2013,
    localName: 'Yolanda',
    category: 'Super Typhoon (Category 5)',
    maxWinds: '230 km/h 10-min sustained (1-min: 315 km/h)',
    centralPressure: '895 hPa',
    impactedAreas: 'Guiuan, Tacloban, Leyte, Eastern Samar, Iloilo, Palawan',
    fallback:
      'Super Typhoon Yolanda (Haiyan) was one of the most powerful tropical cyclones ever documented on Earth, reaching an astonishing central pressure of 895 hPa. It made landfall in Guiuan, Eastern Samar before devastating Tacloban City with a 5.2-meter (17-foot) storm surge funneled through shallow San Pedro Bay. Yolanda claimed over 6,300 lives, displaced 4 million citizens, and transformed national and international disaster risk reduction, warning terminology, and building codes.',
  },
  {
    title: 'Typhoon Bopha',
    year: 2012,
    localName: 'Pablo',
    category: 'Super Typhoon (Category 5)',
    maxWinds: '185 km/h (gusts up to 230 km/h)',
    centralPressure: '930 hPa',
    impactedAreas: 'Davao Oriental, Baganga, Compostela Valley, New Bataan',
    fallback:
      'Typhoon Pablo (Bopha) was an extraordinarily rare meteorological phenomenon: a Category 5 super typhoon forming at an exceptionally low latitude (just 7.4°N). Mindanao, traditionally outside the main typhoon highway, was unprepared for such extreme wind forces. Pablo struck Baganga, Davao Oriental, flattening coconut plantations and funneling billions of gallons of rain down mountain ravines in New Bataan, Compostela Valley, creating a catastrophic debris flow of mud and boulders.',
  },
  {
    title: 'Typhoon Ketsana',
    year: 2009,
    localName: 'Ondoy',
    category: 'Typhoon / Extreme Rainfall',
    maxWinds: '130 km/h',
    centralPressure: '960 hPa',
    impactedAreas: 'Metro Manila, Marikina, Quezon City, Rizal, Laguna, Bulacan',
    fallback:
      'Typhoon Ondoy (Ketsana) is permanently etched into Philippine memory for its catastrophic precipitation rate: dumping 455 mm (17.9 inches) of rain over Metro Manila in a single 24-hour period — surpassing the area’s average monthly rainfall in just six hours. The resulting flash floods submerged 80% of Metro Manila and Rizal province, prompting the passage of the Philippine Disaster Risk Reduction and Management Act of 2010 (Republic Act 10121).',
  },
  {
    title: 'Typhoon Fengshen',
    year: 2008,
    localName: 'Frank',
    category: 'Typhoon',
    maxWinds: '165 km/h',
    centralPressure: '955 hPa',
    impactedAreas: 'Iloilo, Panay Island, Romblon, Central Visayas',
    fallback:
      'Typhoon Frank caused devastating flash floods across Iloilo and Panay Island when it unexpectedly shifted westward. Frank is also remembered for the maritime catastrophe of the passenger ferry MV Princess of the Stars, which capsized off San Fernando, Romblon amid 165 km/h winds and towering 10-meter swells, leading to major maritime safety reforms by the Philippine Coast Guard and MARINA.',
  },
  {
    title: 'Typhoon Durian',
    year: 2006,
    localName: 'Reming',
    category: 'Super Typhoon (Category 4)',
    maxWinds: '195 km/h',
    centralPressure: '915 hPa',
    impactedAreas: 'Albay, Legazpi City, Daraga, Guinobatan, Bicol Region',
    fallback:
      'Typhoon Reming (Durian) struck the Bicol Peninsula with violent gusts up to 260 km/h. While wind damage was severe, the primary catastrophe occurred when intense rainfall mixed with millions of tons of loose volcanic ash deposits on the slopes of Mount Mayon volcano, creating massive pyroclastic mudslides (lahars) that buried entire villages in Padang and Guinobatan.',
  },
  {
    title: 'Tropical Storm Thelma',
    year: 1991,
    localName: 'Uring',
    category: 'Tropical Storm',
    maxWinds: '85 km/h',
    centralPressure: '992 hPa',
    impactedAreas: 'Ormoc City, Leyte, Visayas',
    fallback:
      'Tropical Storm Uring (Thelma) serves as a classic hydrological case study on how severe deforestation amplifies meteorological disasters. Despite having modest wind speeds of 85 km/h, Uring dumped intense rains over the deforested watershed of the Anilao and Malbasag rivers in Leyte, sending a 3-meter wall of water and debris crashing into Ormoc City within 15 minutes, causing over 5,000 casualties.',
  },
]

export const typhoonHistoryMilestones = [
  {
    period: 'Pre-1970s',
    title: 'Early records and community memory',
    detail:
      'Before modern satellite monitoring, many Philippine typhoon records came from ship reports, weather stations, newspapers, and local disaster accounts.',
  },
  {
    period: '1970s-1990s',
    title: 'Warning systems improved',
    detail:
      'Weather monitoring expanded through radar, satellite imagery, and stronger public storm warning systems, helping communities prepare earlier.',
  },
  {
    period: '2000s',
    title: 'Urban flooding became a major concern',
    detail:
      'Rapid urbanization made rainfall-driven floods more damaging, especially in dense areas such as Metro Manila and major river basins.',
  },
  {
    period: '2010s-present',
    title: 'Focus on storm surge and risk reduction',
    detail:
      'After catastrophic events such as Haiyan, disaster planning placed greater emphasis on storm surge maps, evacuation, and local risk communication.',
  },
]
