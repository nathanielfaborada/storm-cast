import { useState } from 'react'
import styles from './TyphoonCompareCard.module.css'

const compareData = {
  yolanda: {
    name: 'Yolanda (Haiyan)',
    shortName: 'Yolanda',
    year: 2013,
    category: 'Super Typhoon',
    maxWinds: '315 km/h',
    pressure: '895 hPa',
    rainfall: '450 mm / 24h',
    damage: '₱95.5 Billion',
    fatalities: '6,300+',
  },
  odette: {
    name: 'Odette (Rai)',
    shortName: 'Odette',
    year: 2021,
    category: 'Super Typhoon',
    maxWinds: '260 km/h',
    pressure: '915 hPa',
    rainfall: '480 mm / 24h',
    damage: '₱51.8 Billion',
    fatalities: '405',
  },
  pepito: {
    name: 'Pepito (Man-yi)',
    shortName: 'Pepito',
    year: 2024,
    category: 'Super Typhoon',
    maxWinds: '260 km/h',
    pressure: '920 hPa',
    rainfall: '380 mm / 24h',
    damage: '₱12.4 Billion',
    fatalities: '12',
  },
  kristine: {
    name: 'Kristine (Trami)',
    shortName: 'Kristine',
    year: 2024,
    category: 'Severe Tropical Storm',
    maxWinds: '110 km/h',
    pressure: '985 hPa',
    rainfall: '703 mm (Bicol)',
    damage: '₱17.6 Billion',
    fatalities: '160',
  },
  ondoy: {
    name: 'Ondoy (Ketsana)',
    shortName: 'Ondoy',
    year: 2009,
    category: 'Tropical Storm',
    maxWinds: '105 km/h',
    pressure: '980 hPa',
    rainfall: '455 mm / 6h',
    damage: '₱11.0 Billion',
    fatalities: '464',
  },
  rolly: {
    name: 'Rolly (Goni)',
    shortName: 'Rolly',
    year: 2020,
    category: 'Super Typhoon',
    maxWinds: '315 km/h',
    pressure: '905 hPa',
    rainfall: '320 mm / 24h',
    damage: '₱20.0 Billion',
    fatalities: '31',
  },
  ompong: {
    name: 'Ompong (Mangkhut)',
    shortName: 'Ompong',
    year: 2018,
    category: 'Super Typhoon',
    maxWinds: '285 km/h',
    pressure: '905 hPa',
    rainfall: '410 mm / 24h',
    damage: '₱33.9 Billion',
    fatalities: '127',
  },
}

const comparisonMetrics = [
  { key: 'category', label: 'CATEGORY' },
  { key: 'maxWinds', label: 'PEAK WINDS' },
  { key: 'pressure', label: 'MIN PRESSURE' },
  { key: 'rainfall', label: 'MAX RAINFALL' },
  { key: 'damage', label: 'EST. DAMAGE' },
  { key: 'fatalities', label: 'CASUALTIES' },
]

export function TyphoonCompareCard() {
  const [keyA, setKeyA] = useState('yolanda')
  const [keyB, setKeyB] = useState('odette')

  const stormA = compareData[keyA] || compareData.yolanda
  const stormB = compareData[keyB] || compareData.odette

  return (
    <article className={`${styles.cardContainer} w-full`} aria-label="Typhoon Comparison Tool">
      <div className={styles.headerRow}>
        <div className={styles.titleBlock}>
          <div className={styles.titleRow}>
            <span className={styles.icon} aria-hidden="true">⚖️</span>
            <h3 className={styles.title}>Typhoon Comparison</h3>
          </div>
          <p className={styles.subtitle}>Side-by-side historical telemetry</p>
        </div>
        <span className={styles.toolBadge}>Interactive</span>
      </div>

      {/* Storm Selectors */}
      <div className={styles.selectorGrid}>
        <div className={styles.selectGroup}>
          <label htmlFor="storm-select-a" className={styles.selectLabel}>
            <span className={styles.indicatorDotA} aria-hidden="true" /> Select Storm A:
          </label>
          <select
            id="storm-select-a"
            value={keyA}
            onChange={(e) => setKeyA(e.target.value)}
            className={`${styles.stormSelect} ${styles.selectA}`}
          >
            {Object.entries(compareData).map(([k, s]) => (
              <option key={k} value={k}>{s.shortName} ({s.year})</option>
            ))}
          </select>
        </div>

        <div className={styles.selectGroup}>
          <label htmlFor="storm-select-b" className={styles.selectLabel}>
            <span className={styles.indicatorDotB} aria-hidden="true" /> Select Storm B:
          </label>
          <select
            id="storm-select-b"
            value={keyB}
            onChange={(e) => setKeyB(e.target.value)}
            className={`${styles.stormSelect} ${styles.selectB}`}
          >
            {Object.entries(compareData).map(([k, s]) => (
              <option key={k} value={k}>{s.shortName} ({s.year})</option>
            ))}
          </select>
        </div>
      </div>

      {/* Comparison Table Box */}
      <div className={styles.compareTable}>
        {/* 1. Sticky Storm Header Row with Color Accents */}
        <div className={styles.tableHeaderRow}>
          <div className={styles.headerColA}>
            <span className={styles.headerTagA}>STORM A</span>
            <strong className={styles.headerStormNameA}>{stormA.name}</strong>
          </div>
          <span className={styles.headerVs}>VS</span>
          <div className={styles.headerColB}>
            <span className={styles.headerTagB}>STORM B</span>
            <strong className={styles.headerStormNameB}>{stormB.name}</strong>
          </div>
        </div>

        {/* 2. Structured Metric Rows with Centered Short Labels */}
        <div className={styles.metricList}>
          {comparisonMetrics.map((metric) => (
            <div key={metric.key} className={styles.compareRow}>
              <span className={styles.metricLabel}>{metric.label}</span>
              <div className={styles.valuesGrid}>
                <span className={styles.valA}>{stormA[metric.key]}</span>
                <span className={styles.valB}>{stormB[metric.key]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default TyphoonCompareCard
