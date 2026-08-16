import { Link } from 'react-router-dom'
import styles from './EmergencyHotlinesPanel.module.css'

const nationalHotlines = [
  {
    name: 'NDRRMC Ops',
    role: 'Disaster Risk & Rescue',
    phone: '(02) 8911-5061',
    tel: 'tel:0289115061',
    icon: '🚨',
  },
  {
    name: 'PAGASA Radar',
    role: 'Severe Weather Central',
    phone: '(02) 8284-0800',
    tel: 'tel:0282840800',
    icon: '📡',
  },
  {
    name: 'Red Cross 143',
    role: '24/7 Medical & Rescue',
    phone: 'Hotline 143',
    tel: 'tel:143',
    icon: '🚑',
  },
  {
    name: 'Coast Guard',
    role: 'Maritime & Evacuation',
    phone: '(02) 8527-8481',
    tel: 'tel:0285278481',
    icon: '⚓',
  },
  {
    name: 'Fire Protection',
    role: 'Fire & Flood Response',
    phone: '(02) 8426-0219',
    tel: 'tel:0284260219',
    icon: '🚒',
  },
  {
    name: 'National 911',
    role: 'Police & Civil Defense',
    phone: 'Hotline 911',
    tel: 'tel:911',
    icon: '👮',
  },
  {
    name: 'DSWD Relief',
    role: 'Family Relief Packs',
    phone: '(02) 8931-8101',
    tel: 'tel:0289318101',
    icon: '📦',
  },
  {
    name: 'DOH Health',
    role: 'Hospital Emergency',
    phone: '(02) 8651-7800',
    tel: 'tel:0286517800',
    icon: '🏥',
  },
]

const regionalHotlines = [
  { region: 'NCR / MMDA', number: '136 / (02) 8882-4151', tel: 'tel:136' },
  { region: 'Northern Luzon', number: '(072) 607-6528', tel: 'tel:0726076528' },
  { region: 'Central Luzon', number: '(045) 455-1526', tel: 'tel:0454551526' },
  { region: 'CALABARZON / Bicol', number: '(049) 531-7266', tel: 'tel:0495317266' },
  { region: 'Visayas Command', number: '(032) 416-5025', tel: 'tel:0324165025' },
  { region: 'Mindanao Disaster Ops', number: '(082) 297-7915', tel: 'tel:0822977915' },
]

export function EmergencyHotlinesPanel() {
  return (
    <section className={`${styles.panelContainer} w-full`} aria-label="Philippine Disaster Response and Emergency Hotlines">
      <div className={styles.panelHeader}>
        <div className={styles.headerLeft}>
          <span className={styles.sosIcon} aria-hidden="true">🆘</span>
          <div className={styles.headerTitles}>
            <h3 className={styles.title}>Philippine Emergency Response & Hotlines</h3>
            <p className={styles.subtitle}>Direct 24/7 emergency dispatch and civil defense contacts</p>
          </div>
        </div>
        <span className={styles.nationalPill}>🔴 24/7 Active Dispatch</span>
      </div>

      {/* 8 Compact National Hotline Cards (2-Col Grid on Mobile, 4-Col on Desktop) */}
      <div className={styles.hotlinesGrid}>
        {nationalHotlines.map((hotline) => (
          <div key={hotline.name} className={styles.hotlineCard}>
            <div className={styles.cardHeaderRow}>
              <span className={styles.agencyIcon} aria-hidden="true">{hotline.icon}</span>
              <div className={styles.agencyMeta}>
                <strong className={styles.agencyName}>{hotline.name}</strong>
                <span className={styles.agencyRole}>{hotline.role}</span>
              </div>
            </div>
            <div className={styles.phoneBlock}>
              <a href={hotline.tel} className={styles.phoneNumber} aria-label={`Dial ${hotline.name}`}>
                {hotline.phone}
              </a>
              <a href={hotline.tel} className={styles.callBtn} aria-label={`Call ${hotline.name}`}>
                Call ↗
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Collapsible Regional Command Centers */}
      <div className={styles.accordionSection}>
        <details className={styles.accordionDetails}>
          <summary className={styles.accordionSummary}>
            <span>🏢 View Regional Command Centers (RDRRMC)</span>
            <span className={styles.chevronIcon} aria-hidden="true">▾</span>
          </summary>
          <div className={styles.regionalGrid}>
            {regionalHotlines.map((item) => (
              <div key={item.region} className={styles.regionalItem}>
                <strong className={styles.regionTitle}>{item.region}</strong>
                <a href={item.tel} className={styles.regionHotline} aria-label={`Call ${item.region}`}>
                  📞 {item.number}
                </a>
              </div>
            ))}
          </div>
        </details>
      </div>

      {/* Full Directory Link Button */}
      <div className={styles.bottomLinkRow}>
        <Link to="/contact?view=hotlines" className={styles.fullDirBtn}>
          <span>🚨 View Priority Dials &amp; Disaster Protocols</span>
          <span aria-hidden="true">→</span>
        </Link>
        <Link to="/contact?view=directory" className={styles.fullDirSecondaryBtn}>
          <span>📞 Search Verified Agency Directory (20+ Agencies)</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}

export default EmergencyHotlinesPanel
