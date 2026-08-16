import styles from './DecadeDamageStatsCard.module.css'

const decadeStats = [
  {
    decade: '2020s',
    era: 'Ongoing',
    damage: '₱245.8 Billion',
    pct: 65,
    fatalities: '1,480+ Fatalities',
    keyStorms: 'Kristine, Pepito, Carina, Odette, Rolly',
  },
  {
    decade: '2010s',
    era: 'Catastrophic Era',
    damage: '₱382.4 Billion',
    pct: 100,
    fatalities: '11,200+ Fatalities',
    keyStorms: 'Yolanda (Haiyan), Pablo, Sendong, Ompong',
  },
  {
    decade: '2000s',
    era: 'Urban Deluge',
    damage: '₱168.2 Billion',
    pct: 45,
    fatalities: '5,850+ Fatalities',
    keyStorms: 'Ondoy (Ketsana), Reming, Frank, Milenyo',
  },
  {
    decade: '1990s',
    era: 'Flashflood Era',
    damage: '₱112.5 Billion',
    pct: 30,
    fatalities: '8,900+ Fatalities',
    keyStorms: 'Uring (Ormoc), Rosing, Ruping',
  },
]

export function DecadeDamageStatsCard() {
  return (
    <article className={`${styles.cardContainer} w-full`} aria-label="Decadal Damage and Casualty Toll Statistics">
      <div className={styles.headerRow}>
        <div className={styles.titleBlock}>
          <div className={styles.titleRow}>
            <span className={styles.icon} aria-hidden="true">📊</span>
            <h3 className={styles.title}>Decadal Damage & Casualties</h3>
          </div>
          <p className={styles.subtitle}>Cumulative socio-economic loss in PAR</p>
        </div>
        <span className={styles.statBadge}>NDRRMC Records</span>
      </div>

      <div className={styles.decadeStack}>
        {decadeStats.map((item) => (
          <div key={item.decade} className={styles.decadeItem}>
            {/* Row 1: Decade Label + Status Badge (Left) vs. Total Loss Value (Right) */}
            <div className={styles.decadeTop}>
              <div className={styles.decadeIdentity}>
                <strong className={styles.decadeName}>{item.decade}</strong>
                <span className={styles.eraPill}>{item.era}</span>
              </div>
              <span className={styles.damageVal}>{item.damage}</span>
            </div>

            {/* Row 2: Full-width Progress Bar */}
            <div className={styles.barTrack} aria-hidden="true">
              <div className={styles.barFill} style={{ width: `${item.pct}%` }} />
            </div>

            {/* Row 3: Fatalities Count + Notable Cyclones List */}
            <div className={styles.decadeBottom}>
              <span className={styles.casualtyBadge}>🕊️ {item.fatalities}</span>
              <div className={styles.stormsRow}>
                <span className={styles.stormsLabel}>Storms:</span>
                <span className={styles.stormsList}>{item.keyStorms}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default DecadeDamageStatsCard
