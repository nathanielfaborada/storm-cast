import styles from './LandfallHotspotsCard.module.css'

const hotspots = [
  {
    rank: '1',
    region: 'Bicol Region (Region V)',
    riskLevel: 'extreme',
    riskLabel: 'Extreme Risk',
    pct: 32,
    detail: 'Catanduanes, Albay & Camarines Sur • Direct Pacific typhoon expressway',
  },
  {
    rank: '2',
    region: 'Eastern Visayas (Region VIII)',
    riskLevel: 'extreme',
    riskLabel: 'Extreme Risk',
    pct: 28,
    detail: 'Samar & Leyte corridor • Major storm surge vulnerability zone (Yolanda)',
  },
  {
    rank: '3',
    region: 'Cagayan Valley & CAR (Region II)',
    riskLevel: 'high',
    riskLabel: 'High Risk',
    pct: 22,
    detail: 'Isabela, Cagayan & Babuyan Islands • Primary super typhoon landfall gate',
  },
  {
    rank: '4',
    region: 'Central Luzon (Region III)',
    riskLevel: 'high',
    riskLabel: 'High Risk',
    pct: 18,
    detail: 'Aurora Pacific coast & Habagat-enhanced flooding in Pampanga basin',
  },
  {
    rank: '5',
    region: 'CALABARZON (Region IV-A)',
    riskLevel: 'moderate',
    riskLabel: 'Moderate Risk',
    pct: 14,
    detail: 'Polillo Island, Quezon & Batangas coastal crossing corridor',
  },
]

export function LandfallHotspotsCard() {
  return (
    <article className={`${styles.cardContainer} w-full`} aria-label="Philippine Regional Landfall Hotspots">
      <div className={styles.headerRow}>
        <div className={styles.titleBlock}>
          <div className={styles.titleRow}>
            <span className={styles.icon} aria-hidden="true">📍</span>
            <h3 className={styles.title}>Regional Landfall Hotspots</h3>
          </div>
          <p className={styles.subtitle}>Historical cyclone exposure rankings in PAR</p>
        </div>
        <span className={styles.geoBadge}>PAGASA Atlas</span>
      </div>

      <div className={styles.hotspotList}>
        {hotspots.map((spot) => (
          <div key={spot.region} className={styles.hotspotItem}>
            <div className={styles.itemHeader}>
              <div className={styles.rankTitleGroup}>
                <span className={styles.rankBadge}>{spot.rank}</span>
                <strong className={styles.regionName}>{spot.region}</strong>
              </div>
              <span className={`${styles.riskBadge} ${styles[spot.riskLevel]}`}>
                {spot.riskLabel}
              </span>
            </div>

            <div className={styles.barTrack} aria-hidden="true">
              <div className={styles.barFill} style={{ width: `${spot.pct * 2.8}%` }} />
            </div>

            <p className={styles.itemDetail}>{spot.detail}</p>
          </div>
        ))}
      </div>
    </article>
  )
}

export default LandfallHotspotsCard
