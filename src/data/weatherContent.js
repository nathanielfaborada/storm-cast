export const navItems = [
  { label: 'Home', path: '/' },
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
    maxWinds: '195 km/h (gusts up to 240 km/h)',
    impactedAreas: 'Catanduanes, Aurora, Polillo Islands, Central Luzon',
    fallback:
      'Super Typhoon Pepito (Man-yi) made landfall as an intense super typhoon in Catanduanes and Aurora, bringing catastrophic storm surges, torrential rains, and severe wind destruction.',
  },
  {
    title: 'Severe Tropical Storm Trami',
    year: 2024,
    localName: 'Kristine',
    category: 'Severe Tropical Storm',
    maxWinds: '95 km/h (gusts up to 140 km/h)',
    impactedAreas: 'Bicol Region, Batangas, Quezon, Northern Luzon',
    fallback:
      'Severe Tropical Storm Kristine (Trami) dumped historic volumes of rainfall across the Bicol Region and Southern Luzon, triggering massive flash floods and landslides.',
  },
  {
    title: 'Typhoon Gaemi',
    year: 2024,
    localName: 'Carina',
    category: 'Typhoon / Habagat Enhancement',
    maxWinds: '165 km/h',
    impactedAreas: 'Metro Manila, Rizal, Bulacan, Bataan, Northern Luzon',
    fallback:
      'Typhoon Carina (Gaemi) supercharged the Southwest Monsoon (Habagat), resulting in intense non-stop precipitation and widespread urban flooding across Metro Manila and surrounding provinces.',
  },
  {
    title: 'Typhoon Doksuri',
    year: 2023,
    localName: 'Egay',
    category: 'Super Typhoon',
    maxWinds: '175 km/h',
    impactedAreas: 'Babuyan Islands, Cagayan, Ilocos Norte, Northern Luzon',
    fallback:
      'Typhoon Doksuri, locally known as Egay, battered northern Luzon with destructive eyewall winds, high storm surges, and extensive agricultural and infrastructure damage.',
  },
  {
    title: 'Typhoon Noru',
    year: 2022,
    localName: 'Karding',
    category: 'Super Typhoon',
    maxWinds: '195 km/h',
    impactedAreas: 'Polillo Islands, Aurora, Nueva Ecija, Bulacan',
    fallback:
      'Typhoon Noru, locally known as Karding, underwent explosive rapid intensification before striking Luzon with violent winds and heavy rainfall.',
  },
  {
    title: 'Typhoon Rai',
    year: 2021,
    localName: 'Odette',
    category: 'Super Typhoon (Category 5)',
    maxWinds: '195 km/h (gusts up to 260 km/h)',
    impactedAreas: 'Siargao, Dinagat Islands, Bohol, Cebu, Palawan',
    fallback:
      'Typhoon Rai, locally known as Odette, tore through the Visayas and Mindanao, causing catastrophic wind devastation, total blackouts, and coastal damage comparable to Haiyan.',
  },
  {
    title: 'Typhoon Vamco',
    year: 2020,
    localName: 'Ulysses',
    category: 'Typhoon',
    maxWinds: '155 km/h',
    impactedAreas: 'Metro Manila, Marikina, Rizal, Cagayan Valley',
    fallback:
      'Typhoon Vamco (Ulysses) brought severe river flooding along Marikina and Cagayan river basins following consecutive tropical cyclones in late 2020.',
  },
  {
    title: 'Typhoon Goni',
    year: 2020,
    localName: 'Rolly',
    category: 'Super Typhoon (Category 5)',
    maxWinds: '225 km/h (10-min sustained)',
    impactedAreas: 'Catanduanes, Albay, Bicol Region, Southern Luzon',
    fallback:
      'Typhoon Goni (Rolly) was one of the strongest landfalling tropical cyclones in global history upon striking Catanduanes and Albay with devastating winds and lahar flows.',
  },
  {
    title: 'Typhoon Mangkhut',
    year: 2018,
    localName: 'Ompong',
    category: 'Super Typhoon',
    maxWinds: '205 km/h',
    impactedAreas: 'Cagayan, Benguet, Ilocos Region, Cordilleras',
    fallback:
      'Typhoon Mangkhut (Ompong) struck northern Luzon with catastrophic winds and triggered severe mountain landslides in Itogon, Benguet.',
  },
  {
    title: 'Typhoon Haiyan',
    year: 2013,
    localName: 'Yolanda',
    category: 'Super Typhoon (Category 5)',
    maxWinds: '230 km/h (1-min: 315 km/h)',
    impactedAreas: 'Tacloban, Leyte, Samar, Eastern Visayas',
    fallback:
      'Typhoon Haiyan (Yolanda) was one of the most powerful and deadly tropical cyclones ever recorded, causing massive 5-meter storm surges and catastrophic destruction in Tacloban and Eastern Visayas.',
  },
  {
    title: 'Typhoon Bopha',
    year: 2012,
    localName: 'Pablo',
    category: 'Super Typhoon (Category 5)',
    maxWinds: '185 km/h',
    impactedAreas: 'Davao Oriental, Compostela Valley, Mindanao',
    fallback:
      'Typhoon Bopha (Pablo) was an unusually intense low-latitude super typhoon that caused catastrophic flash floods and debris flows in eastern Mindanao.',
  },
  {
    title: 'Typhoon Ketsana',
    year: 2009,
    localName: 'Ondoy',
    category: 'Typhoon / Extreme Rainfall',
    maxWinds: '130 km/h',
    impactedAreas: 'Metro Manila, Rizal, Laguna, Bulacan',
    fallback:
      'Typhoon Ketsana (Ondoy) delivered a month of rainfall in just six hours, causing catastrophic flash floods across Metro Manila and reshaping Philippine flood management.',
  },
  {
    title: 'Typhoon Fengshen',
    year: 2008,
    localName: 'Frank',
    category: 'Typhoon',
    maxWinds: '165 km/h',
    impactedAreas: 'Iloilo, Panay Island, Romblon, Central Philippines',
    fallback:
      'Typhoon Frank caused severe river flooding in Iloilo and was associated with the tragic sinking of the MV Princess of the Stars off Romblon.',
  },
  {
    title: 'Typhoon Durian',
    year: 2006,
    localName: 'Reming',
    category: 'Super Typhoon (Category 4)',
    maxWinds: '195 km/h',
    impactedAreas: 'Albay, Legazpi City, Bicol Region',
    fallback:
      'Typhoon Reming triggered massive volcanic mudslides (lahar) from the slopes of Mount Mayon, burying surrounding villages in Albay.',
  },
  {
    title: 'Tropical Storm Thelma',
    year: 1991,
    localName: 'Uring',
    category: 'Tropical Storm',
    maxWinds: '85 km/h',
    impactedAreas: 'Ormoc City, Leyte, Visayas',
    fallback:
      'Tropical Storm Thelma (Uring) produced sudden devastating flash flooding down deforested mountainsides around Ormoc City, resulting in thousands of casualties.',
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
