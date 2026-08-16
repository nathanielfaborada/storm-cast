import styles from './EmergencyRadioFrequenciesCard.module.css'

export function EmergencyRadioFrequenciesCard() {
  return (
    <article className={`${styles.radioCard} w-full`} aria-label="Offline Emergency Radio Frequencies and Cell Broadcast Alerts">
      {/* ── 1. Top Header Stack ── */}
      <div className={styles.cardHeaderStack}>
        <div className={styles.badgeRow}>
          <span className={styles.topBadge}>📻 Offline Comms</span>
          <span className={styles.sourceBadge}>National Relays</span>
        </div>
        <h3 className={styles.title}>Emergency Radio &amp; Alerts Guide</h3>
        <p className={styles.subtitle}>
          Essential broadcast channels &amp; NDRRMC mobile alerts during grid blackouts.
        </p>
      </div>

      <div className={styles.stackedSections}>
        {/* ── 2. AM Radio Frequencies ── */}
        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitleGroup}>
              <span className={styles.sectionIcon} aria-hidden="true">📡</span>
              <h4 className={styles.sectionTitle}>AM Transistor Radio Dials</h4>
            </div>
            <span className={styles.sectionTag}>Battery-Powered AM</span>
          </div>

          <div className={styles.freqList}>
            {/* Station 1: Radyo Pilipinas */}
            <div className={styles.freqItem}>
              <div className={styles.freqLeft}>
                <div className={styles.stationTitleRow}>
                  <strong className={styles.freqStation}>Radyo Pilipinas 1 (PBS)</strong>
                  <span className={styles.govTag}>Govt Lead</span>
                </div>
                <span className={styles.freqDesc}>Official National NDRRMC, PAGASA &amp; OCD Bulletins</span>
              </div>
              <span className={`${styles.freqDial} ${styles.dialBlue}`}>738 kHz AM</span>
            </div>

            {/* Station 2: DZBB */}
            <div className={styles.freqItem}>
              <div className={styles.freqLeft}>
                <div className={styles.stationTitleRow}>
                  <strong className={styles.freqStation}>DZBB Super Radyo (GMA)</strong>
                </div>
                <span className={styles.freqDesc}>Luzon Flood Updates, River Gauges &amp; Rescue Hotlines</span>
              </div>
              <span className={`${styles.freqDial} ${styles.dialBlue}`}>594 kHz AM</span>
            </div>

            {/* Station 3: DZRH */}
            <div className={styles.freqItem}>
              <div className={styles.freqLeft}>
                <div className={styles.stationTitleRow}>
                  <strong className={styles.freqStation}>DZRH Nationwide (MBC)</strong>
                </div>
                <span className={styles.freqDesc}>Archipelago-wide Provincial Relay Network</span>
              </div>
              <span className={`${styles.freqDial} ${styles.dialBlue}`}>666 kHz AM</span>
            </div>

            {/* Station 4: Bombo Radyo */}
            <div className={styles.freqItem}>
              <div className={styles.freqLeft}>
                <div className={styles.stationTitleRow}>
                  <strong className={styles.freqStation}>Bombo Radyo Philippines</strong>
                </div>
                <span className={styles.freqDesc}>Visayas &amp; Mindanao Provincial Emergency Desks</span>
              </div>
              <span className={`${styles.freqDial} ${styles.dialSlate}`}>Regional AM</span>
            </div>
          </div>
        </div>

        {/* ── 3. Cell Broadcast Emergency Alerts Setup (RA 10639) ── */}
        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitleGroup}>
              <span className={styles.sectionIcon} aria-hidden="true">📲</span>
              <h4 className={styles.sectionTitle}>NDRRMC Cell Broadcasts</h4>
            </div>
            <span className={styles.sectionTagGreen}>RA 10639 • Free</span>
          </div>

          <div className={styles.guideList}>
            {/* iOS */}
            <div className={styles.guideCard}>
              <div className={styles.guideOsHeader}>
                <span aria-hidden="true">🍎</span>
                <strong className={styles.guideOs}>Apple iOS (iPhone)</strong>
              </div>
              <div className={styles.stepPath}>
                <span className={styles.pathNode}>Settings</span>
                <span className={styles.pathArrow}>›</span>
                <span className={styles.pathNode}>Notifications</span>
                <span className={styles.pathArrow}>›</span>
                <span className={styles.pathHighlight}>Emergency Alerts</span>
              </div>
            </div>

            {/* Android */}
            <div className={styles.guideCard}>
              <div className={styles.guideOsHeader}>
                <span aria-hidden="true">🤖</span>
                <strong className={styles.guideOs}>Android Devices</strong>
              </div>
              <div className={styles.stepPath}>
                <span className={styles.pathNode}>Settings</span>
                <span className={styles.pathArrow}>›</span>
                <span className={styles.pathNode}>Safety &amp; Emergency</span>
                <span className={styles.pathArrow}>›</span>
                <span className={styles.pathHighlight}>Wireless Alerts</span>
              </div>
            </div>
          </div>

          {/* Cell Broadcast Feature Badges */}
          <div className={styles.cbFeatureGrid}>
            <div className={styles.cbFeatureItem}>
              <span className={styles.cbFeatureIcon} aria-hidden="true">⚡</span>
              <div className={styles.cbFeatureText}>
                <strong>Zero Load Needed</strong>
                <span>Tower broadcast with zero SIM balance.</span>
              </div>
            </div>
            <div className={styles.cbFeatureItem}>
              <span className={styles.cbFeatureIcon} aria-hidden="true">🔊</span>
              <div className={styles.cbFeatureText}>
                <strong>Siren Alarm Sound</strong>
                <span>Overrides phone Silent &amp; Vibrate modes.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default EmergencyRadioFrequenciesCard
