export const navItems = ['Home', 'Typhoon History', 'About', 'Contact']

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
    title: 'Typhoon Haiyan',
    year: 2013,
    localName: 'Yolanda',
    fallback:
      'Typhoon Haiyan, locally known as Yolanda, was one of the most devastating tropical cyclones to affect the Philippines, causing catastrophic storm surge and wind damage in Eastern Visayas.',
  },
  {
    title: 'Typhoon Rai',
    year: 2021,
    localName: 'Odette',
    fallback:
      'Typhoon Rai, locally known as Odette, crossed parts of the Philippines and caused severe wind damage, flooding, and disruption in Visayas and Mindanao.',
  },
  {
    title: 'Typhoon Doksuri',
    year: 2023,
    localName: 'Egay',
    fallback:
      'Typhoon Doksuri, locally known as Egay, affected northern Luzon with heavy rain, strong winds, flooding, and landslides.',
  },
  {
    title: 'Typhoon Noru',
    year: 2022,
    localName: 'Karding',
    fallback:
      'Typhoon Noru, locally known as Karding, rapidly intensified before affecting Luzon with destructive winds and rainfall.',
  },
  {
    title: 'Typhoon Vamco',
    year: 2020,
    localName: 'Ulysses',
    fallback:
      'Typhoon Vamco, locally known as Ulysses, caused widespread flooding in Luzon, including parts of Metro Manila and Cagayan Valley.',
  },
  {
    title: 'Typhoon Goni',
    year: 2020,
    localName: 'Rolly',
    fallback:
      'Typhoon Goni, locally known as Rolly, made landfall as an extremely intense tropical cyclone and caused major damage in the Bicol Region.',
  },
  {
    title: 'Typhoon Mangkhut',
    year: 2018,
    localName: 'Ompong',
    fallback:
      'Typhoon Mangkhut, locally known as Ompong, struck northern Luzon with destructive winds and heavy rainfall.',
  },
  {
    title: 'Typhoon Ketsana',
    year: 2009,
    localName: 'Ondoy',
    fallback:
      'Typhoon Ketsana, locally known as Ondoy, brought intense rainfall that triggered widespread flooding across Metro Manila and nearby provinces.',
  },
  {
    title: 'Typhoon Bopha',
    year: 2012,
    localName: 'Pablo',
    fallback:
      'Typhoon Bopha, locally known as Pablo, was unusually destructive in Mindanao and caused severe flooding and landslide impacts.',
  },
  {
    title: 'Tropical Storm Thelma',
    year: 1991,
    localName: 'Uring',
    fallback:
      'Tropical Storm Thelma, locally known as Uring, produced extreme rainfall and flooding that caused severe loss of life, especially around Ormoc, Leyte.',
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
