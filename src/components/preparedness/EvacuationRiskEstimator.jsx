import { useState } from 'react'
import styles from './EvacuationRiskEstimator.module.css'

export function EvacuationRiskEstimator() {
  const [houseType, setHouseType] = useState('light')
  const [hazardLocation, setHazardLocation] = useState('river')
  const [stormWarning, setStormWarning] = useState('tcws3')

  // Calculate dynamic urgency logic
  let riskLevel = 'critical'
  let statusBadge = '🚨 MANDATORY IMMEDIATE EVACUATION'
  let statusTitle = 'Critical Life-Safety Threat Detected'
  let advice =
    'Your housing structure or geographic exposure presents severe life-safety threats under current typhoon forecasts. Execute early preemptive evacuation in daylight before roads flood or winds exceed 60 km/h.'
  let actionPoints = [
    'Grab your 72-hour family emergency Go-Bag',
    'Shut off the main electrical circuit breaker and LPG regulator',
    'Relocate immediately to your designated LGU / Barangay Evacuation Center',
  ]

  const isLight = houseType === 'light'
  const isSemi = houseType === 'semi'
  const isSurge = hazardLocation === 'surge'
  const isRiverOrSlope = hazardLocation === 'river' || hazardLocation === 'slope'
  const isInland = hazardLocation === 'inland'

  if (stormWarning === 'normal') {
    riskLevel = 'safe'
    statusBadge = '🟢 SAFE TO SHELTER IN PLACE'
    statusTitle = 'Low Threat — Normal Precautions'
    advice =
      'No active severe tropical cyclone threat. Standard household monitoring and routine preparedness are recommended.'
    actionPoints = [
      'Keep 72-hour emergency go-bag stocked and accessible',
      'Ensure family communication channels are active',
    ]
  } else if (
    !isLight &&
    isInland &&
    (stormWarning === 'tcws1' || stormWarning === 'tcws2' || stormWarning === 'tcws3')
  ) {
    riskLevel = 'safe'
    statusBadge = '🟢 SAFE TO SHELTER IN PLACE'
    statusTitle = 'Adequate Structural & Elevation Shelter'
    advice =
      'Your reinforced concrete structure on inland elevated ground provides adequate shelter for current storm conditions. Fortify doors, latch all windows, and stay indoors.'
    actionPoints = [
      'Lock and brace exterior windows and doors',
      'Store loose outdoor objects and secure rooftop fixtures',
      'Keep portable powerbanks charged and stay tuned to AM/FM radio',
    ]
  } else if (
    (!isLight && isRiverOrSlope && stormWarning === 'tcws1') ||
    (isSemi && isInland && stormWarning === 'tcws2')
  ) {
    riskLevel = 'high'
    statusBadge = '🟡 PRECAUTIONARY STANDBY ALERT'
    statusTitle = 'Elevated Vulnerability — Prepare to Evacuate'
    advice =
      'Monitor barangay DRRMC advisories closely. Pack your Go-Bags and be ready to move immediately if rivers crest, slope debris shifts, or winds strengthen.'
    actionPoints = [
      'Stage go-bags and emergency documents near the front exit',
      'Identify the safest daytime evacuation route to the municipal shelter',
      'Move elderly, infants, and pets to ground-secure or upper rooms',
    ]
  } else {
    // Default to critical for all high-danger combinations (TCWS 4/5, Light materials, Surge zones, Red rainfall, etc.)
    riskLevel = 'critical'
    statusBadge = '🚨 MANDATORY IMMEDIATE EVACUATION'
    statusTitle = 'Critical Life-Safety Threat Detected'
    advice =
      'Your housing structure or geographic exposure presents severe life-safety threats under current typhoon forecasts. Execute early preemptive evacuation in daylight before roads flood or winds exceed 60 km/h.'
    actionPoints = [
      'Grab your 72-hour family emergency Go-Bag and maintenance medicines',
      'Shut off the main electrical circuit breaker and LPG regulator',
      'Relocate immediately to your designated LGU / Barangay Evacuation Center',
    ]
  }

  return (
    <article className={`${styles.riskCard} w-full`} aria-label="Evacuation Urgency and House Structural Risk Estimator">
      {/* ── 1. Top Header Stack ── */}
      <div className={styles.cardHeaderStack}>
        <div className={styles.badgeRow}>
          <span className={styles.topBadge}>🚨 Risk Algorithm</span>
          <span className={styles.sourceBadge}>NDRRMC Guidelines</span>
        </div>
        <h3 className={styles.title}>Evacuation &amp; Structural Risk Estimator</h3>
        <p className={styles.subtitle}>
          Assess if your household should execute preemptive evacuation or fortify and shelter in place.
        </p>
      </div>

      {/* ── 2. Selectors Grid ── */}
      <div className={styles.selectorsGrid}>
        <div className={styles.selectGroup}>
          <label className={styles.selectLabel} htmlFor="houseType">
            🏠 Housing Structure Type:
          </label>
          <select
            id="houseType"
            className={styles.dropdown}
            value={houseType}
            onChange={(e) => setHouseType(e.target.value)}
          >
            <option value="light">Light Materials (Wood / GI Sheet / Nipa)</option>
            <option value="semi">Semi-Concrete (1-Storey Masonry)</option>
            <option value="concrete">Reinforced 2-Storey Concrete</option>
          </select>
        </div>

        <div className={styles.selectGroup}>
          <label className={styles.selectLabel} htmlFor="hazardLocation">
            📍 Geographic Hazard Exposure:
          </label>
          <select
            id="hazardLocation"
            className={styles.dropdown}
            value={hazardLocation}
            onChange={(e) => setHazardLocation(e.target.value)}
          >
            <option value="river">Within 500m of River / Flood Basin</option>
            <option value="surge">Coastal Littoral / Storm Surge Zone</option>
            <option value="slope">Mountain Foot / Landslide Slope</option>
            <option value="inland">Inland Elevated / High Ground</option>
          </select>
        </div>

        <div className={styles.selectGroup}>
          <label className={styles.selectLabel} htmlFor="stormWarning">
            🌪️ Active PAGASA Warning:
          </label>
          <select
            id="stormWarning"
            className={styles.dropdown}
            value={stormWarning}
            onChange={(e) => setStormWarning(e.target.value)}
          >
            <option value="normal">No Active Threat (Normal / Signal #0)</option>
            <option value="tcws1">TCWS #1 (Strong Breeze 39–61 km/h)</option>
            <option value="tcws2">TCWS #2 (Gale Winds 62–88 km/h)</option>
            <option value="tcws3">TCWS #3 (Destructive Winds 89–117 km/h)</option>
            <option value="tcws4_5">TCWS #4 / #5 (Typhoon / Super Typhoon 118+ km/h)</option>
            <option value="red_rain">Red Heavy Rainfall Warning (Torrential)</option>
          </select>
        </div>
      </div>

      {/* ── 3. High-Contrast Recommendation Card ── */}
      <div className={`${styles.outcomeBox} ${styles[riskLevel]}`} aria-live="polite">
        <div className={styles.outcomeHeader}>
          <span className={`${styles.statusBadge} ${styles[`badge_${riskLevel}`]}`}>
            {statusBadge}
          </span>
          <h4 className={styles.outcomeTitle}>{statusTitle}</h4>
        </div>

        <p className={styles.outcomeText}>{advice}</p>

        <div className={styles.actionPointsList}>
          <span className={styles.actionPointsTitle}>Recommended Safety Actions:</span>
          <ul className={styles.actionList}>
            {actionPoints.map((action, idx) => (
              <li key={idx} className={styles.actionItem}>
                <span className={styles.actionBullet}>•</span>
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default EvacuationRiskEstimator
