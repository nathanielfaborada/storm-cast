import styles from './ClimateDriversCard.module.css'

export function ClimateDriversCard() {
  return (
    <article className={`${styles.cardContainer} w-full`} aria-label="Pacific Climate Drivers and ENSO Impact on PAR">
      {/* ── Top Header Stack (Clean, Uncrowded Hierarchy) ── */}
      <div className={styles.cardHeaderStack}>
        <div className={styles.badgeRow}>
          <span className={styles.topBadge}>🌊 Teleconnections</span>
          <span className={styles.ensoBadge}>NOAA / WMO</span>
        </div>
        <h3 className={styles.title}>Pacific Climate Drivers (ENSO)</h3>
        <p className={styles.subtitle}>
          How El Niño &amp; La Niña shift cyclone genesis and frequency.
        </p>
      </div>

      <div className={styles.driverGrid}>
        {/* 1. El Niño Phase */}
        <div className={`${styles.driverTile} ${styles.elNinoTile}`}>
          <div className={styles.tileTop}>
            <div className={styles.phaseTitleGroup}>
              <span className={styles.dotIcon} aria-hidden="true">🔴</span>
              <strong className={`${styles.phaseName} ${styles.elNino}`}>
                El Niño (Warm Pacific Phase)
              </strong>
            </div>
            <span className={`${styles.freqPill} ${styles.warm}`}>12 – 15 Storms / Yr</span>
          </div>

          <p className={styles.driverDetail}>
            Reduced overall cyclone frequency in PAR, but storms tend to track further eastward with extended ocean residency, yielding a higher proportion of <strong>Category 5 Super Typhoons</strong>.
          </p>
        </div>

        {/* 2. La Niña Phase */}
        <div className={`${styles.driverTile} ${styles.laNinaTile}`}>
          <div className={styles.tileTop}>
            <div className={styles.phaseTitleGroup}>
              <span className={styles.dotIcon} aria-hidden="true">🔵</span>
              <strong className={`${styles.phaseName} ${styles.laNina}`}>
                La Niña (Cool Pacific Phase)
              </strong>
            </div>
            <span className={`${styles.freqPill} ${styles.cool}`}>22 – 28 Storms / Yr</span>
          </div>

          <p className={styles.driverDetail}>
            Significantly elevated cyclone formation rate. Storm genesis shifts closer to the Philippine archipelago with frequent landfalls and <strong>hyper-enhanced Habagat monsoon floods</strong>.
          </p>
        </div>
      </div>
    </article>
  )
}

export default ClimateDriversCard
