import styles from './WarmPoolMetricsCard.module.css'

export function WarmPoolMetricsCard() {
  return (
    <article className={`${styles.cardContainer} w-full`} aria-label="Western Pacific Ocean Heat Content and SST Metrics">
      {/* ── Top Header Stack (Clean, Uncrowded Hierarchy) ── */}
      <div className={styles.cardHeaderStack}>
        <div className={styles.badgeRow}>
          <span className={styles.topBadge}>🌊 Ocean Telemetry</span>
          <span className={styles.badge}>Thermodynamics</span>
        </div>
        <h3 className={styles.title}>Warm Pool &amp; SST Monitor</h3>
        <p className={styles.subtitle}>
          Ocean thermal energy fueling cyclone rapid intensification.
        </p>
      </div>

      {/* ── 2-Column Key Metrics Grid ── */}
      <div className={styles.metricsGrid}>
        <div className={styles.metricTile}>
          <span className={styles.metricLabel}>Sea Surface Temp (SST)</span>
          <strong className={styles.metricVal}>29.4°C</strong>
          <span className={styles.metricHint}>+1.4°C Above RI Threshold</span>
        </div>

        <div className={styles.metricTile}>
          <span className={styles.metricLabel}>Ocean Heat Content</span>
          <strong className={styles.metricVal}>95 kJ/cm²</strong>
          <span className={styles.metricHint}>Cat 5 Super Typhoon Potential</span>
        </div>
      </div>

      {/* ── Rapid Intensification Fuel Gauge ── */}
      <div className={styles.fuelBarCard}>
        <div className={styles.fuelHeader}>
          <strong className={styles.fuelTitle}>Rapid Intensification (RI) Index</strong>
          <span className={styles.fuelStatus}>HIGH RISK</span>
        </div>
        <div className={styles.barTrack}>
          <div className={styles.barFill} />
        </div>
        <p className={styles.fuelDesc}>
          Water layer &gt;26.5°C extends down to 100+ meters depth east of Mindanao and Samar, preventing storm cold-wake upwelling.
        </p>
      </div>
    </article>
  )
}

export default WarmPoolMetricsCard
