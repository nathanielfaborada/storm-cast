import { useState } from 'react'
import styles from './RetiredNamesRegistryTable.module.css'

const retiredTyphoons = [
  {
    localName: 'Yolanda',
    intlName: 'Haiyan',
    year: 2013,
    impact: 'Catastrophic Cat 5 storm surge; 6,300+ dead in Tacloban & Leyte',
    damage: '₱95.5 Billion',
    replacement: 'Yasmin',
  },
  {
    localName: 'Odette',
    intlName: 'Rai',
    year: 2021,
    impact: 'Category 5 island-hopping cyclone; Siargao, Bohol & Cebu devastated',
    damage: '₱51.8 Billion',
    replacement: 'Opong',
  },
  {
    localName: 'Pepito',
    intlName: 'Man-yi',
    year: 2024,
    impact: 'Violent Category 5 landfall over Catanduanes & Aurora',
    damage: '₱12.4 Billion',
    replacement: 'Perla (Proposed)',
  },
  {
    localName: 'Kristine',
    intlName: 'Trami',
    year: 2024,
    impact: 'Gigantic 1,000km wide rain shield; 700mm+ record deluge in Bicol',
    damage: '₱17.6 Billion',
    replacement: 'Karding (Proposed)',
  },
  {
    localName: 'Carina',
    intlName: 'Gaemi',
    year: 2024,
    impact: 'Enhanced Habagat super-monsoon; historic NCR & Central Luzon floods',
    damage: '₱10.2 Billion',
    replacement: 'Clara (Proposed)',
  },
  {
    localName: 'Egay',
    intlName: 'Doksuri',
    year: 2023,
    impact: 'Severe Cat 5 eyewall across Babuyan Islands; severe agricultural losses',
    damage: '₱15.3 Billion',
    replacement: 'Emil',
  },
  {
    localName: 'Ulysses',
    intlName: 'Vamco',
    year: 2020,
    impact: 'Worst flooding in Cagayan Valley & Marikina River since Ondoy',
    damage: '₱20.2 Billion',
    replacement: 'Unding',
  },
  {
    localName: 'Rolly',
    intlName: 'Goni',
    year: 2020,
    impact: 'Pinnacle 315 km/h landfall in Tiwi, Albay & Catanduanes',
    damage: '₱20.0 Billion',
    replacement: 'Romina',
  },
  {
    localName: 'Ompong',
    intlName: 'Mangkhut',
    year: 2018,
    impact: 'Violent landfall in Baggao, Cagayan; massive Itogon landslides',
    damage: '₱33.9 Billion',
    replacement: 'Obet',
  },
  {
    localName: 'Ondoy',
    intlName: 'Ketsana',
    year: 2009,
    impact: '455mm torrential cloudburst in 6 hours; submerged Metro Manila',
    damage: '₱11.0 Billion',
    replacement: 'Onyok',
  },
  {
    localName: 'Sendong',
    intlName: 'Washi',
    year: 2011,
    impact: 'Overnight flashfloods along riverbanks in Cagayan de Oro & Iligan',
    damage: '₱2.1 Billion',
    replacement: 'Sarah',
  },
  {
    localName: 'Pablo',
    intlName: 'Bopha',
    year: 2012,
    impact: 'Rare low-latitude Category 5 Super Typhoon striking Davao Oriental',
    damage: '₱42.2 Billion',
    replacement: 'Pepito',
  },
]

export function RetiredNamesRegistryTable() {
  const [filterQuery, setFilterQuery] = useState('')

  const filteredList = retiredTyphoons.filter((t) => {
    const q = filterQuery.toLowerCase()
    return (
      t.localName.toLowerCase().includes(q) ||
      t.intlName.toLowerCase().includes(q) ||
      String(t.year).includes(q) ||
      t.impact.toLowerCase().includes(q)
    )
  })

  return (
    <article className={`${styles.tableCard} w-full`} aria-label="Registry of Decommissioned Philippine Typhoon Names">
      <div className={styles.tableHeaderRow}>
        <div className={styles.titleBlock}>
          <div className={styles.titleRow}>
            <span className={styles.registryIcon} aria-hidden="true">📜</span>
            <h3 className={styles.title}>Retired Storm Names Registry</h3>
          </div>
          <p className={styles.subtitle}>PAGASA decommissioned typhoons (causing ≥₱1B damage or ≥300 deaths)</p>
        </div>

        <div className={styles.searchWrapper}>
          <span className={styles.searchIcon} aria-hidden="true">🔍</span>
          <input
            type="search"
            placeholder="Search retired name or year..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            className={styles.searchInput}
            aria-label="Filter retired typhoon names"
          />
        </div>
      </div>

      {/* 1. Desktop Tabular View (Visible on Desktop / Tablets >= 768px) */}
      <div className={styles.tableResponsive}>
        <table className={styles.registryTable}>
          <thead>
            <tr>
              <th>PAGASA Name</th>
              <th>Int'l Name</th>
              <th>Year</th>
              <th>Impact & Key Affected Provinces</th>
              <th>Est. Damage</th>
              <th>Replacement</th>
            </tr>
          </thead>
          <tbody>
            {filteredList.map((storm) => (
              <tr key={storm.localName}>
                <td className={styles.localNameCell}>🇵🇭 {storm.localName}</td>
                <td className={styles.intlNameCell}>{storm.intlName}</td>
                <td>
                  <span className={styles.yearPill}>{storm.year}</span>
                </td>
                <td>{storm.impact}</td>
                <td className={styles.damageCell}>{storm.damage}</td>
                <td>
                  <span className={styles.replacementBadge}>{storm.replacement}</span>
                </td>
              </tr>
            ))}
            {filteredList.length === 0 && (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '16px', color: '#64748b' }}>
                  No retired typhoon matched "{filterQuery}"
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 2. Mobile Responsive Card List (Visible on Mobile < 768px) */}
      <div className={styles.mobileCardList}>
        {filteredList.map((storm) => (
          <div key={storm.localName} className={styles.mobileRetiredCard}>
            <div className={styles.mobileCardTop}>
              <div className={styles.mobileNameRow}>
                <strong className={styles.mobileLocalName}>🇵🇭 {storm.localName}</strong>
                <span className={styles.mobileIntlName}>({storm.intlName})</span>
              </div>
              <span className={styles.yearPill}>{storm.year}</span>
            </div>

            <p className={styles.mobileImpact}>{storm.impact}</p>

            <div className={styles.mobileMetaRow}>
              <span className={styles.mobileDamage}>💥 <strong>Damage:</strong> {storm.damage}</span>
              <span className={styles.mobileReplacement}>
                🔄 Replaced by: <strong>{storm.replacement}</strong>
              </span>
            </div>
          </div>
        ))}
        {filteredList.length === 0 && (
          <div style={{ textAlign: 'center', padding: '16px', color: '#64748b' }}>
            No retired typhoon matched "{filterQuery}"
          </div>
        )}
      </div>

      <p className={styles.footerNote}>
        📌 <strong>PAGASA Retirement Protocol:</strong> A domestic name is permanently decommissioned from the 4-year rotational naming list if it causes at least 300 fatalities or exceeds ₱1,000,000,000 in socio-economic damage.
      </p>
    </article>
  )
}

export default RetiredNamesRegistryTable
