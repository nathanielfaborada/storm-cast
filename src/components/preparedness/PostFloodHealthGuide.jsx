import styles from './PostFloodHealthGuide.module.css'

export function PostFloodHealthGuide() {
  return (
    <article className={`${styles.healthCard} w-full`} aria-label="Post-Flood Health Sanitation and Leptospirosis Protocols">
      {/* ── Top Header Stack (Clean, Uncrowded Hierarchy) ── */}
      <div className={styles.cardHeaderStack}>
        <div className={styles.badgeRow}>
          <span className={styles.topBadge}>🩹 Health &amp; Sanitation</span>
          <span className={styles.sourceBadge}>DOH Guidelines</span>
        </div>
        <h3 className={styles.title}>Post-Flood Health Protocols</h3>
        <p className={styles.subtitle}>
          Medical precautions, water purification &amp; safe recovery steps.
        </p>
      </div>

      <div className={styles.guidelinesGrid}>
        {/* Card 1: Leptospirosis Prevention */}
        <div className={`${styles.guideCard} ${styles.leptoCard}`}>
          <div className={styles.guideTop}>
            <div className={styles.guideTitleGroup}>
              <span className={styles.guideIcon} aria-hidden="true">🐀</span>
              <h4 className={styles.guideTitle}>Leptospirosis Prevention</h4>
            </div>
            <span className={`${styles.actionPill} ${styles.rosePill}`}>⏱️ 24–48h Window</span>
          </div>

          <div className={styles.actionPointsList}>
            <div className={styles.pointRow}>
              <span className={styles.pointTagRose}>Immediate Action</span>
              <p className={styles.pointText}>
                Wash flood-exposed skin and wounds immediately with clean water and antibacterial soap.
              </p>
            </div>
            <div className={styles.pointRow}>
              <span className={styles.pointTagRose}>Prophylaxis</span>
              <p className={styles.pointText}>
                Visit your Barangay Health Center for <strong>Doxycycline preventive prophylaxis</strong> within 24–48 hours of wading.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Water Purification */}
        <div className={`${styles.guideCard} ${styles.waterCard}`}>
          <div className={styles.guideTop}>
            <div className={styles.guideTitleGroup}>
              <span className={styles.guideIcon} aria-hidden="true">💧</span>
              <h4 className={styles.guideTitle}>Water Sanitation &amp; Boiling</h4>
            </div>
            <span className={`${styles.actionPill} ${styles.bluePill}`}>3-Min Rolling Boil</span>
          </div>

          <div className={styles.actionPointsList}>
            <div className={styles.pointRow}>
              <span className={styles.pointTagBlue}>Boiling Guide</span>
              <p className={styles.pointText}>
                Municipal tap water is often contaminated after floods. <strong>Boil water vigorously for at least 3 full minutes</strong>.
              </p>
            </div>
            <div className={styles.pointRow}>
              <span className={styles.pointTagBlue}>Chlorination</span>
              <p className={styles.pointText}>
                If boiling is not possible, treat clear water with <strong>1 Aquatab / chlorine tablet per 20 Liters</strong> (let stand 30 mins).
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Electrical & Mold Hazards */}
        <div className={`${styles.guideCard} ${styles.powerCard}`}>
          <div className={styles.guideTop}>
            <div className={styles.guideTitleGroup}>
              <span className={styles.guideIcon} aria-hidden="true">⚡</span>
              <h4 className={styles.guideTitle}>Electrical &amp; Appliance Safety</h4>
            </div>
            <span className={`${styles.actionPill} ${styles.amberPill}`}>Breaker Lockout</span>
          </div>

          <div className={styles.actionPointsList}>
            <div className={styles.pointRow}>
              <span className={styles.pointTagAmber}>Main Breaker</span>
              <p className={styles.pointText}>
                <strong>Never energize the main breaker</strong> if the panel, meter, or wall outlets were submerged under floodwaters.
              </p>
            </div>
            <div className={styles.pointRow}>
              <span className={styles.pointTagAmber}>Inspection</span>
              <p className={styles.pointText}>
                Ensure circuits and major appliances are 100% dry and certified safe by a licensed electrician before restoring power.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PostFloodHealthGuide
