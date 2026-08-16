import styles from './RecordBreakersGrid.module.css'

const nationalRecords = [
  {
    icon: '🌬️',
    label: 'Highest Wind Speed',
    shortLabel: 'Max Wind Speed',
    value: '315 km/h',
    holder: 'Yolanda (2013) & Rolly (2020)',
  },
  {
    icon: '🌧️',
    label: 'Peak 24h Rainfall',
    shortLabel: 'Peak 24h Rain',
    value: '1,168 mm',
    holder: 'Baguio Observatory (1911)',
  },
  {
    icon: '⏱️',
    label: 'Lowest Pressure',
    shortLabel: 'Min Pressure',
    value: '895 hPa',
    holder: 'Super Typhoon Yolanda',
  },
  {
    icon: '💰',
    label: 'Costliest Cyclone',
    shortLabel: 'Costliest Storm',
    value: '₱95.5 Billion',
    holder: 'Super Typhoon Yolanda (2013)',
  },
]

export function RecordBreakersGrid() {
  return (
    <article className={`${styles.cardContainer} w-full`} aria-label="All-Time Philippine Meteorological Records">
      <div className={styles.headerRow}>
        <div className={styles.titleBlock}>
          <div className={styles.titleRow}>
            <span className={styles.titleIcon} aria-hidden="true">🏆</span>
            <h3 className={styles.title}>National Weather Records</h3>
          </div>
          <p className={styles.subtitle}>All-time meteorological extremes</p>
        </div>
        <span className={styles.recordBadge}>Historic Peaks</span>
      </div>

      <div className={styles.recordsGrid}>
        {nationalRecords.map((rec) => (
          <div key={rec.label} className={styles.recordTile}>
            <div className={styles.tileIconLabel}>
              <span className={styles.metricIcon} aria-hidden="true">{rec.icon}</span>
              <span className={styles.metricLabel}>{rec.shortLabel}</span>
            </div>
            <strong className={styles.recordValue}>{rec.value}</strong>
            <span className={styles.recordHolder}>{rec.holder}</span>
          </div>
        ))}
      </div>
    </article>
  )
}

export default RecordBreakersGrid
