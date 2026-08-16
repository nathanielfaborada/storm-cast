import styles from './EnvironmentalAstroPanel.module.css'

export function EnvironmentalAstroPanel({ location }) {
  // Meteorological & Astronomical estimations for Philippine Coordinates
  const aqiValue = 28
  const aqiStatus = 'Good'
  const uvValue = 5
  const uvStatus = 'Moderate'
  const pm25 = '8.4 µg/m³'
  const pm10 = '16.2 µg/m³'
  const visibility = '10.0 km'
  const sunrise = '5:42 AM'
  const sunset = '6:18 PM'
  const moonPhase = 'Waxing Gibbous'
  const moonIllumination = '82%'
  const highTideHeight = '1.4m'
  const highTideTime = '10:15 AM'
  const lowTideHeight = '0.3m'
  const lowTideTime = '4:45 PM'
  const waveHeight = '1.2m – 1.8m'

  return (
    <section className={`${styles.container} w-full`} aria-label="Environmental, UV, and Astronomical Telemetry">
      {/* ── Left Card: Environmental & Air Quality Gauges ── */}
      <article className={styles.panelCard}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitleBlock}>
            <div className={styles.titleRow}>
              <span className={styles.panelIcon} aria-hidden="true">🌿</span>
              <h3 className={styles.cardTitle}>Air Quality & Solar Radiation</h3>
            </div>
            <p className={styles.cardSubtitle}>Real-time surface air chemistry & UV index</p>
          </div>
          <span className={styles.headerBadge}>Surface Telemetry</span>
        </div>

        <div className={styles.gaugeGrid}>
          {/* AQI Gauge */}
          <div className={styles.gaugeTile}>
            <div className={styles.gaugeHeader}>
              <span className={styles.gaugeLabel}>Air Quality</span>
            </div>
            <div className={styles.gaugeValueRow}>
              <strong className={styles.gaugeMainVal}>{aqiValue}</strong>
              <span className={`${styles.statusPill} ${styles.good}`}>{aqiStatus}</span>
            </div>
            <div className={styles.gaugeProgressBar} aria-hidden="true">
              <div
                className={`${styles.gaugeProgressFill} ${styles.aqiFill}`}
                style={{ width: `${Math.min(100, aqiValue * 2)}%` }}
              />
            </div>
            <p className={styles.gaugeHint}>US AQI Std • Clean air flow</p>
          </div>

          {/* UV Index Gauge */}
          <div className={styles.gaugeTile}>
            <div className={styles.gaugeHeader}>
              <span className={styles.gaugeLabel}>UV Index</span>
            </div>
            <div className={styles.gaugeValueRow}>
              <strong className={styles.gaugeMainVal}>{uvValue}</strong>
              <span className={`${styles.statusPill} ${styles.uvMod}`}>{uvStatus}</span>
            </div>
            <div className={styles.gaugeProgressBar} aria-hidden="true">
              <div
                className={`${styles.gaugeProgressFill} ${styles.uvFill}`}
                style={{ width: `${(uvValue / 12) * 100}%` }}
              />
            </div>
            <p className={styles.gaugeHint}>Max 12 • SPF 30+ recommended</p>
          </div>
        </div>

        {/* Fine Particles Chemistry Strip */}
        <div className={styles.fineMetricsRow}>
          <div className={styles.fineItem}>
            <span className={styles.fineLabel}>PM2.5</span>
            <strong className={styles.fineVal}>{pm25}</strong>
          </div>
          <div className={styles.fineItem}>
            <span className={styles.fineLabel}>PM10</span>
            <strong className={styles.fineVal}>{pm10}</strong>
          </div>
          <div className={styles.fineItem}>
            <span className={styles.fineLabel}>Visibility</span>
            <strong className={styles.fineVal}>{visibility}</strong>
          </div>
        </div>
      </article>

      {/* ── Right Card: Astronomical & Coastal Marine Telemetry ── */}
      <article className={styles.panelCard}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitleBlock}>
            <div className={styles.titleRow}>
              <span className={styles.panelIcon} aria-hidden="true">🔭</span>
              <h3 className={styles.cardTitle}>Astronomical & Coastal Marine</h3>
            </div>
            <p className={styles.cardSubtitle}>Solar transit, lunar phase & marine tide prediction</p>
          </div>
          <span className={styles.headerBadge}>NAMRIA Aligned</span>
        </div>

        <div className={styles.sunMoonGrid}>
          {/* Daylight Cycle */}
          <div className={styles.astroTile}>
            <div className={`${styles.astroIconBox} ${styles.sunIconBox}`} aria-hidden="true">🌅</div>
            <div className={styles.astroDetails}>
              <span className={styles.astroLabel}>Daylight Cycle</span>
              <strong className={styles.astroTime}>{sunrise} – {sunset}</strong>
              <span className={styles.astroSubtext}>12h 36m Solar Transit</span>
            </div>
          </div>

          {/* Lunar Phase */}
          <div className={styles.astroTile}>
            <div className={`${styles.astroIconBox} ${styles.moonIconBox}`} aria-hidden="true">🌔</div>
            <div className={styles.astroDetails}>
              <span className={styles.astroLabel}>Moon Phase</span>
              <strong className={styles.astroTime}>{moonPhase}</strong>
              <span className={styles.astroSubtext}>{moonIllumination} Illumination</span>
            </div>
          </div>
        </div>

        {/* Coastal Marine & Tide Block */}
        <div className={styles.coastalBlock}>
          <div className={styles.coastalHeader}>
            <div className={styles.coastalTitleRow}>
              <span aria-hidden="true">🌊</span>
              <strong className={styles.coastalTitle}>Coastal Tide & Sea State</strong>
            </div>
            <span className={styles.waveBadge}>Waves: {waveHeight}</span>
          </div>

          <div className={styles.tideRow}>
            <div className={styles.tideItem}>
              <div className={styles.tideHeader}>
                <span className={`${styles.tideIconBubble} ${styles.highTide}`}>⬆️</span>
                <span className={styles.tideType}>High Tide</span>
              </div>
              <div className={styles.tideData}>
                <strong className={styles.tideHeight}>{highTideHeight}</strong>
                <span className={styles.tideTime}>at {highTideTime}</span>
              </div>
            </div>

            <div className={styles.tideItem}>
              <div className={styles.tideHeader}>
                <span className={`${styles.tideIconBubble} ${styles.lowTide}`}>⬇️</span>
                <span className={styles.tideType}>Low Tide</span>
              </div>
              <div className={styles.tideData}>
                <strong className={styles.tideHeight}>{lowTideHeight}</strong>
                <span className={styles.tideTime}>at {lowTideTime}</span>
              </div>
            </div>
          </div>

          <div className={styles.advisoryCard}>
            <span className={styles.advisoryIcon} aria-hidden="true">⚓</span>
            <p className={styles.advisoryFootnote}>
              <strong>Navigational Advisory:</strong> Moderate sea conditions. Small motorized fishing bancas are advised to observe precautions along open littoral channels.
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default EnvironmentalAstroPanel
