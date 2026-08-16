/**
 * Philippine Meteorological Intelligence & Climatological Synthesis Data
 * Provides original, localized contextual analysis for weather phenomena in the Philippines.
 */

export const climateTopicsData = {
  Climate: {
    topicId: 'Climate',
    title: 'Philippine Climate & Monsoon Dynamics',
    scientificBaseline:
      'The Philippine climate is shaped by tropical maritime air masses, mountain topography, and alternating seasonal monsoon regimes within the Western Pacific Warm Pool.',
    parContext:
      'With ocean temperatures consistently above 28°C–30°C, the Philippine Area of Responsibility (PAR) is one of the most active cyclogenesis zones globally.',
    regionalImpact: [
      {
        region: 'Luzon & Sierra Madre',
        threatLevel: 'High Inundation',
        vulnerabilityDetail:
          'Sierra Madre buffers wind speed but triggers intense orographic rainfall, resulting in major downstream flooding across Cagayan, Pampanga, and Marikina basins.',
      },
      {
        region: 'Visayas Archipelago',
        threatLevel: 'Storm Surge Risk',
        vulnerabilityDetail:
          'Fragmented shallow island coastlines create high susceptibility to catastrophic storm surges during intense westward-tracking Pacific typhoons.',
      },
      {
        region: 'Mindanao & Southern Basins',
        threatLevel: 'Flash Flood Risk',
        vulnerabilityDetail:
          'Lower cyclone frequency, but vulnerable to sudden low-latitude super typhoons and persistent ITCZ convergence over steep river catchments.',
      },
    ],
    seasonalCycles: [
      {
        name: 'Habagat (SW Monsoon)',
        period: 'May – Oct',
        characteristics:
          'Warm, humid southwest air flow. Interacts with offshore cyclones to cause prolonged heavy monsoon downpours across western seaboards.',
      },
      {
        name: 'Amihan (NE Monsoon)',
        period: 'Nov – Apr',
        characteristics:
          'Cool, dry continental air from the northeast. Brings cooler mornings and localized cloudbursts to eastern seaboards (Aurora, Quezon, Bicol).',
      },
      {
        name: 'ITCZ Convergence',
        period: 'Year-Round',
        characteristics:
          'Convergence zone of hemispheric trade winds, driving widespread convective thunderstorms and low-pressure clusters.',
      },
    ],
    actionableProtocols: [
      'Monitor DOST-PAGASA 24-hour public weather bulletins and flood advisories.',
      'Check local flood hazard maps for barangay-level inundation susceptibility.',
      'Maintain an all-weather emergency supply kit (72-hour food, water, medical kit).',
      'Follow local municipal evacuation orders before river cresting windows.',
    ],
  },

  'Tropical cyclone': {
    topicId: 'Tropical cyclone',
    title: 'Tropical Cyclones & Western Pacific Storm Dynamics',
    scientificBaseline:
      'Tropical cyclones are intense rotating storm systems driven by low atmospheric pressure, closed circulation, and thunderstorms producing violent winds and torrential rains.',
    parContext:
      'An average of 20 tropical cyclones enter the Philippine Area of Responsibility (PAR) annually, with 8 to 9 making direct landfall over eastern coastal corridors.',
    regionalImpact: [
      {
        region: 'Eastern Seaboard (Bicol, Samar, Leyte)',
        threatLevel: 'Primary Landfall Gate',
        vulnerabilityDetail:
          'First landfall entry zone for Category 4 & 5 Pacific super typhoons, absorbing maximum destructive eyewall winds and storm surges.',
      },
      {
        region: 'Northern Luzon & Cordilleras',
        threatLevel: 'Landslide Hazard',
        vulnerabilityDetail:
          'Steep mountainous terrain triggers heavy orographic rainfall, leading to rapid hillside slope failures, mudslides, and isolated access roads.',
      },
      {
        region: 'Metro Manila & Lowland Plains',
        threatLevel: 'Urban Drainage Flood',
        vulnerabilityDetail:
          'Dense urban sprawl and paved surfaces cause rapid storm runoff, overwhelming drainage pumping stations and river estuaries.',
      },
    ],
    seasonalCycles: [
      {
        name: 'Peak Typhoon Season',
        period: 'Jul – Nov',
        characteristics:
          'Highest frequency of intense typhoons and super typhoons, fueled by maximum sea surface temperatures and active monsoon troughs.',
      },
      {
        name: 'Off-Peak / Low-Latitude',
        period: 'Dec – Jun',
        characteristics:
          'Lower cyclone frequency, but systems often track further south across Visayas and Northern Mindanao at unexpected intensities.',
      },
    ],
    actionableProtocols: [
      'Track PAGASA Tropical Cyclone Wind Signals (TCWS #1 to #5) and associated lead times.',
      'Secure roof structures, storm shutters, and clear drainage debris prior to Signal #2.',
      'Avoid crossing swollen creeks, spillways, and flooded waterways.',
      'Keep backup emergency radios and power banks fully charged.',
    ],
  },
}

export const defaultSynthesizedClimate = climateTopicsData.Climate
