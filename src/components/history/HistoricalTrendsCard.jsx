import styles from './HistoricalTrendsCard.module.css'

const decadeTrends = [
  { decade: '2020s', count: '108 storms', pct: 85, note: 'Intensification spike' },
  { decade: '2010s', count: '202 storms', pct: 95, note: 'Yolanda & Haiyan era' },
  { decade: '2000s', count: '194 storms', pct: 90, note: 'Ondoy & Reming' },
  { decade: '1990s', count: '198 storms', pct: 92, note: 'Uring & Rosing' },
  { decade: '1980s', count: '210 storms', pct: 100, note: 'High frequency decade' },
]

const monthDistribution = [
  { month: 'J', ht: 15, isPeak: false },
  { month: 'F', ht: 10, isPeak: false },
  { month: 'M', ht: 10, isPeak: false },
  { month: 'A', ht: 18, isPeak: false },
  { month: 'M', ht: 28, isPeak: false },
  { month: 'J', ht: 55, isPeak: false },
  { month: 'J', ht: 85, isPeak: true },
  { month: 'A', ht: 95, isPeak: true },
  { month: 'S', ht: 98, isPeak: true },
  { month: 'O', ht: 100, isPeak: true },
  { month: 'N', ht: 90, isPeak: true },
  { month: 'D', ht: 45, isPeak: false },
]

export function HistoricalTrendsCard() {
  return (
    <article className={`${styles.cardContainer} w-full`} aria-label="Historical Cyclone Frequencies and Seasonality Trends">
      <div className={styles.headerRow}>
        <div className={styles.titleBlock}>
          <h3 className={styles.title}>📈 Historical Climatology</h3>
          <p className={styles.subtitle}>Decadal storm counts & monthly PAR seasonality</p>
        </div>
      </div>

      {/* Decade Frequency Bars */}
      <div className={styles.decadeStack}>
        {decadeTrends.map((d) => (
          <div key={d.decade} className={styles.decadeRow}>
            <span className={styles.decadeLabel}>{d.decade}</span>
            <div className={styles.barTrack} aria-hidden="true">
              <div className={styles.barFill} style={{ width: `${d.pct}%` }} />
            </div>
            <span className={styles.countLabel}>{d.count}</span>
          </div>
        ))}
      </div>

      {/* Monthly Peak Activity Distribution */}
      <div className={styles.seasonCurveBox}>
        <div className={styles.seasonHeader}>
          <span className={styles.seasonTitle}>PAR Peak Activity Curve</span>
          <span className={styles.seasonBadge}>Jul – Nov Peak</span>
        </div>
        <div className={styles.monthBars} aria-label="Month by month storm distribution">
          {monthDistribution.map((m, idx) => (
            <div key={idx} className={styles.monthCol}>
              <div
                className={`${styles.monthPillar} ${m.isPeak ? styles.peak : ''}`}
                style={{ height: `${m.ht}%` }}
                title={`${m.month}: ${m.ht}% relative frequency`}
              />
              <span className={styles.monthName}>{m.month}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default HistoricalTrendsCard
