import styles from './MonsoonScheduleCard.module.css'

export function MonsoonScheduleCard() {
  const currentMonth = new Date().getMonth() + 1 // 1-12
  const isHabagat = currentMonth >= 5 && currentMonth <= 10
  const isAmihan = currentMonth >= 11 || currentMonth <= 3
  const isTransition = currentMonth === 4

  return (
    <article className={`${styles.cardContainer} w-full`} aria-label="Philippine Seasonal Monsoon Schedule">
      {/* ── Top Header Stack (Clean, Uncrowded Hierarchy) ── */}
      <div className={styles.cardHeaderStack}>
        <div className={styles.badgeRow}>
          <span className={styles.topBadge}>🧭 Monsoon Dynamics</span>
          <span className={styles.sourceBadge}>PAGASA Atlas</span>
        </div>
        <h3 className={styles.title}>Philippine Monsoon Schedules</h3>
        <p className={styles.subtitle}>
          Seasonal wind reversals &amp; archipelago precipitation patterns.
        </p>
      </div>

      <div className={styles.scheduleList}>
        {/* 1. Habagat */}
        <div className={`${styles.seasonItem} ${styles.habagatItem} ${isHabagat ? styles.active : ''}`}>
          <div className={styles.seasonTop}>
            <div className={styles.seasonTitleGroup}>
              <strong className={styles.seasonName}>
                <span className={styles.seasonEmoji} aria-hidden="true">🌧️</span> Southwest Monsoon (Habagat)
              </strong>
              <span className={styles.seasonMonthsPill}>📅 Late May – October</span>
            </div>
            <span className={`${styles.seasonPill} ${isHabagat ? styles.activePill : styles.inactivePill}`}>
              <span className={isHabagat ? styles.activeDot : styles.inactiveDot} aria-hidden="true" />
              {isHabagat ? 'ACTIVE NOW' : 'OFF-SEASON'}
            </span>
          </div>

          <p className={styles.seasonDesc}>
            Warm, moisture-laden southwesterly airstream causing torrential monsoon rains over Western Luzon, NCR, and Western Visayas.
          </p>
        </div>

        {/* 2. Amihan */}
        <div className={`${styles.seasonItem} ${styles.amihanItem} ${isAmihan ? styles.active : ''}`}>
          <div className={styles.seasonTop}>
            <div className={styles.seasonTitleGroup}>
              <strong className={styles.seasonName}>
                <span className={styles.seasonEmoji} aria-hidden="true">💨</span> Northeast Monsoon (Amihan)
              </strong>
              <span className={styles.seasonMonthsPill}>📅 November – March</span>
            </div>
            <span className={`${styles.seasonPill} ${isAmihan ? styles.activePill : styles.inactivePill}`}>
              <span className={isAmihan ? styles.activeDot : styles.inactiveDot} aria-hidden="true" />
              {isAmihan ? 'ACTIVE NOW' : 'OFF-SEASON'}
            </span>
          </div>

          <p className={styles.seasonDesc}>
            Cool, dry continental Siberian air bringing low morning temperatures to Luzon and cloud swells along the Eastern Seaboard.
          </p>
        </div>

        {/* 3. Transition / Warm-Dry */}
        <div className={`${styles.seasonItem} ${styles.transitionItem} ${isTransition ? styles.active : ''}`}>
          <div className={styles.seasonTop}>
            <div className={styles.seasonTitleGroup}>
              <strong className={styles.seasonName}>
                <span className={styles.seasonEmoji} aria-hidden="true">☀️</span> Inter-Monsoon Warm-Dry
              </strong>
              <span className={styles.seasonMonthsPill}>📅 April – Mid May</span>
            </div>
            <span className={`${styles.seasonPill} ${isTransition ? styles.activePill : styles.inactivePill}`}>
              <span className={isTransition ? styles.activeDot : styles.inactiveDot} aria-hidden="true" />
              {isTransition ? 'ACTIVE NOW' : 'OFF-SEASON'}
            </span>
          </div>

          <p className={styles.seasonDesc}>
            Peak heat index season dominated by the North Pacific High with localized afternoon convective thunderstorms.
          </p>
        </div>
      </div>
    </article>
  )
}

export default MonsoonScheduleCard
