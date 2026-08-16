import styles from './PAGASANamingProtocolCard.module.css'

export function PAGASANamingProtocolCard() {
  return (
    <article className={`${styles.cardContainer} w-full`} aria-label="PAGASA Tropical Cyclone Naming and Retirement System">
      <div className={styles.headerRow}>
        <div className={styles.titleBlock}>
          <h3 className={styles.title}>🏷️ PAGASA Naming Protocols</h3>
          <p className={styles.subtitle}>Rotational cycles & decommissioning rules</p>
        </div>
        <span className={styles.protocolBadge}>Official Policy</span>
      </div>

      <div className={styles.rulesList}>
        {/* Rule 1: 4-Year Rotation */}
        <div className={styles.ruleItem}>
          <strong className={styles.ruleTitle}>
            <span>🔄</span> 4-Year Rotational Sets
          </strong>
          <p className={styles.ruleText}>
            PAGASA maintains <strong>4 master sets of 25 names</strong> (Set 1: 2025/2029, Set 2: 2026/2030, etc.) cycled sequentially from A to Z whenever a depression forms inside or enters PAR.
          </p>
        </div>

        {/* Rule 2: Retirement Criteria */}
        <div className={styles.ruleItem}>
          <strong className={styles.ruleTitle}>
            <span>🚨</span> Decommissioning Thresholds
          </strong>
          <p className={styles.ruleText}>
            A name is permanently retired if a cyclone causes at least <strong>300 fatalities</strong> or exceeds <strong>₱1,000,000,000</strong> in verified socio-economic damage.
          </p>
        </div>

        {/* Rule 3: Auxiliary Replacement */}
        <div className={styles.ruleItem}>
          <strong className={styles.ruleTitle}>
            <span>📝</span> Auxiliary Replacement List
          </strong>
          <p className={styles.ruleText}>
            Retired names are replaced by a new domestic moniker starting with the same letter, drawn from the PAGASA auxiliary reserve list for future 4-year cycles.
          </p>
        </div>
      </div>
    </article>
  )
}

export default PAGASANamingProtocolCard
