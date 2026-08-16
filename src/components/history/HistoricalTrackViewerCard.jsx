import { useState } from 'react'
import styles from './HistoricalTrackViewerCard.module.css'

const trackData = {
  yolanda: {
    name: 'Super Typhoon Yolanda (Haiyan)',
    shortName: 'Yolanda',
    year: 2013,
    category: 'Cat 5 Super Typhoon',
    summary:
      'Yolanda entered PAR as a pinnacle Category 5 Super Typhoon with estimated 1-min sustained winds of 315 km/h. It made initial catastrophic landfall in Guiuan, Eastern Samar before crossing Leyte, Cebu, Iloilo, and Palawan.',
    waypoints: [
      { stage: '1. PAR Entry', loc: '128.0°E, 7.5°N', wind: '260 km/h', date: 'Nov 6, 2013' },
      { stage: '2. Peak Intensity', loc: 'East of Samar', wind: '315 km/h (895 hPa)', date: 'Nov 7, 2013' },
      { stage: '3. Guiuan Landfall', loc: 'Guiuan, E. Samar', wind: '310 km/h Surge', date: 'Nov 8, 4:40 AM' },
      { stage: '4. WPS Exit', loc: 'Busuanga, Palawan', wind: '230 km/h Exit', date: 'Nov 9, 2013' },
    ],
  },
  odette: {
    name: 'Super Typhoon Odette (Rai)',
    shortName: 'Odette',
    year: 2021,
    category: 'Cat 5 Super Typhoon',
    summary:
      'Odette underwent explosive rapid intensification immediately before striking Siargao Island and the Dinagat Islands. It executed 9 separate landfalls across Southern Leyte, Bohol, Cebu, Negros Oriental, and Palawan.',
    waypoints: [
      { stage: '1. PAR Entry', loc: '130.0°E, 7.4°N', wind: '120 km/h', date: 'Dec 14, 2021' },
      { stage: '2. Explosive RI', loc: 'East of Surigao', wind: '260 km/h (915 hPa)', date: 'Dec 16, 2021' },
      { stage: '3. Siargao Landfall', loc: 'Siargao Island', wind: '260 km/h Peak', date: 'Dec 16, 1:30 PM' },
      { stage: '4. Sulu Sea Exit', loc: 'Roxas, Palawan', wind: '175 km/h Exit', date: 'Dec 17, 2021' },
    ],
  },
  pepito: {
    name: 'Super Typhoon Pepito (Man-yi)',
    shortName: 'Pepito',
    year: 2024,
    category: 'Cat 5 Super Typhoon',
    summary:
      'Pepito was the 6th consecutive tropical cyclone to strike the Philippines in under 30 days during late 2024. It made landfall in Panganiban, Catanduanes and later in Dipaculao, Aurora with violent destructive winds.',
    waypoints: [
      { stage: '1. PAR Entry', loc: '135.0°E, 10.5°N', wind: '150 km/h', date: 'Nov 14, 2024' },
      { stage: '2. Rapid Intensify', loc: 'East of Bicol', wind: '260 km/h (920 hPa)', date: 'Nov 16, 2024' },
      { stage: '3. Catanduanes', loc: 'Catanduanes', wind: '260 km/h Eyewall', date: 'Nov 16, 9:40 PM' },
      { stage: '4. Aurora Landfall', loc: 'Dipaculao, Aurora', wind: '185 km/h Cross', date: 'Nov 17, 3:20 PM' },
    ],
  },
  kristine: {
    name: 'Severe Tropical Storm Kristine (Trami)',
    shortName: 'Kristine',
    year: 2024,
    category: 'Severe Tropical Storm',
    summary:
      'Though classified as an STS, Kristine possessed an abnormally massive wind & rain field (over 1,000 km wide). It dumped historic rainfall exceeding 700 mm over Albay and Camarines Sur, triggering widespread catastrophic flooding.',
    waypoints: [
      { stage: '1. PAR Entry', loc: '134.0°E, 13.0°N', wind: '65 km/h', date: 'Oct 21, 2024' },
      { stage: '2. Outer Swell', loc: 'East of Samar', wind: '95 km/h (Rain Pump)', date: 'Oct 22, 2024' },
      { stage: '3. Isabela Landfall', loc: 'Divilacan, Isabela', wind: '110 km/h Max', date: 'Oct 23, 11:30 PM' },
      { stage: '4. WPS Exit', loc: 'Ilocos Sur Coast', wind: '95 km/h West Exit', date: 'Oct 24, 2024' },
    ],
  },
}

export function HistoricalTrackViewerCard() {
  const [selectedStorm, setSelectedStorm] = useState('yolanda')
  const storm = trackData[selectedStorm] || trackData.yolanda

  return (
    <article className={`${styles.cardContainer} w-full`} aria-label="Historical Track and Landfall Waypoint Viewer">
      <div className={styles.headerRow}>
        <div className={styles.titleBlock}>
          <div className={styles.titleRow}>
            <span className={styles.mapIcon} aria-hidden="true">🗺️</span>
            <h3 className={styles.title}>Trajectory & Landfall Waypoint Viewer</h3>
          </div>
          <p className={styles.subtitle}>Historical PAR entry, peak intensification node & landfall coordinates</p>
        </div>

        {/* Storm Selector Tabs */}
        <div className={styles.stormTabs} role="tablist" aria-label="Historical Storms">
          {Object.entries(trackData).map(([k, s]) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={selectedStorm === k}
              onClick={() => setSelectedStorm(k)}
              className={`${styles.stormTabBtn} ${selectedStorm === k ? styles.active : ''}`}
            >
              {s.shortName} ({s.year})
            </button>
          ))}
        </div>
      </div>

      {/* Visual Track Waypoint Stage */}
      <div className={styles.trackVisualBox}>
        <div className={styles.trackHeader}>
          <div className={styles.stormIdentity}>
            <h4 className={styles.stormName}>{storm.name}</h4>
            <div className={styles.badgeGroup}>
              <span className={styles.stormYearPill}>{storm.year}</span>
              <span className={styles.catBadge}>{storm.category}</span>
            </div>
          </div>
        </div>

        {/* 4 Waypoints Timeline - Pure Vertical Stack Inside Each Card */}
        <div className={styles.waypointStack}>
          {storm.waypoints.map((wp) => (
            <div key={wp.stage} className={styles.waypointCard}>
              <span className={styles.wpStage}>{wp.stage}</span>
              <span className={styles.wpDate}>{wp.date}</span>
              <strong className={styles.wpLocation}>{wp.loc}</strong>
              <span className={styles.wpWind}>💨 {wp.wind}</span>
            </div>
          ))}
        </div>

        <div className={styles.summaryContainer}>
          <strong className={styles.summaryHeading}>📌 Meteorological Synopsis:</strong>
          <p className={styles.trackSummaryText}>{storm.summary}</p>
        </div>
      </div>
    </article>
  )
}

export default HistoricalTrackViewerCard
