import styles from './TcwsReferenceCard.module.css'

const tcwsTiers = [
  {
    signal: 'TCWS #1',
    badgeClass: styles.s1,
    speed: '39 – 61 km/h',
    desc: 'Strong breeze • K-12 classes suspended',
    leadTime: '36h lead',
  },
  {
    signal: 'TCWS #2',
    badgeClass: styles.s2,
    speed: '62 – 88 km/h',
    desc: 'Gale force • Sea travel hazardous',
    leadTime: '24h lead',
  },
  {
    signal: 'TCWS #3',
    badgeClass: styles.s3,
    speed: '89 – 117 km/h',
    desc: 'Storm force • Evacuate coastal zones',
    leadTime: '18h lead',
  },
  {
    signal: 'TCWS #4 & #5',
    badgeClass: styles.s45,
    speed: '118+ km/h',
    desc: 'Typhoon / Super Typhoon • Extreme danger',
    leadTime: '12h lead',
  },
]

export function TcwsReferenceCard() {
  return (
    <article className={`${styles.cardContainer} w-full`} aria-label="PAGASA Tropical Cyclone Wind Signal Scale">
      <div className={styles.headerRow}>
        <div className={styles.titleBlock}>
          <div className={styles.titleRow}>
            <span className={styles.tcwsIcon} aria-hidden="true">🌪️</span>
            <h3 className={styles.title}>TCWS Wind Signals</h3>
          </div>
          <p className={styles.subtitle}>PAGASA Warning Standard Scale</p>
        </div>
        <span className={styles.pagasaTag}>DOST-PAGASA</span>
      </div>

      <div className={styles.signalStack}>
        {tcwsTiers.map((tier) => (
          <div key={tier.signal} className={styles.signalRow}>
            <div className={styles.signalTopRow}>
              <span className={`${styles.signalBadge} ${tier.badgeClass}`}>
                {tier.signal}
              </span>
              <span className={styles.leadTimeBadge}>⏱️ {tier.leadTime}</span>
            </div>
            <div className={styles.signalData}>
              <strong className={styles.signalSpeed}>{tier.speed}</strong>
              <span className={styles.signalDesc}>{tier.desc}</span>
            </div>
          </div>
        ))}
      </div>

      <p className={styles.footerNote}>
        📋 <strong>DepEd Order 37:</strong> Automatic class cancellation across public & private schools under active signal warnings.
      </p>
    </article>
  )
}

export default TcwsReferenceCard
