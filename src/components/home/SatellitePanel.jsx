import { useState } from 'react'
import earthClimateImage from '../../assets/earth-climate.png'
import { climateComponents, fallbackClimateSummary } from '../../data/weatherContent'
import { useWikipediaSummary } from '../../hooks/useWikipediaSummary'
import styles from './SatellitePanel.module.css'

export function SatellitePanel() {
  const [selectedTopic, setSelectedTopic] = useState('Climate')
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeIntelTab, setActiveIntelTab] = useState('threats')
  const { status, summary } = useWikipediaSummary(selectedTopic, fallbackClimateSummary)

  const baselineText = summary.scientificBaseline || summary.extract || ''
  const shouldTruncate = baselineText.length > 160
  const displayedBaseline = isExpanded || !shouldTruncate
    ? baselineText
    : `${baselineText.slice(0, 150)}...`

  return (
    <article className={styles.panelContainer} aria-label="Philippine Climate and Weather Intelligence">
      {/* 1. Constrained Satellite Visual Header */}
      <div className={styles.satelliteVisualHeader}>
        <img
          className={styles.earthImage}
          src={earthClimateImage}
          alt="Satellite view of Earth and the Western Pacific"
        />
        <div className={styles.overlayBadge}>
          <span className={styles.synthesisTag}>PAR CLIMATE INTEL</span>
        </div>
      </div>

      <div className={styles.panelBody}>
        {/* 2. Topic Switcher */}
        <div className={styles.topicTabs}>
          <button
            type="button"
            className={`${styles.topicBtn} ${selectedTopic === 'Climate' ? styles.active : ''}`}
            onClick={() => {
              setSelectedTopic('Climate')
              setIsExpanded(false)
            }}
          >
            Climate & Monsoons
          </button>
          <button
            type="button"
            className={`${styles.topicBtn} ${selectedTopic === 'Tropical cyclone' ? styles.active : ''}`}
            onClick={() => {
              setSelectedTopic('Tropical cyclone')
              setIsExpanded(false)
            }}
          >
            Cyclones & PAR
          </button>
        </div>

        <h2 className={styles.title}>
          {summary.title}
        </h2>

        {/* 3. Readable Baseline Analysis with Read More */}
        <div className={styles.baselineWrapper}>
          <p className={styles.baselineText}>
            {displayedBaseline}
          </p>
          {shouldTruncate && (
            <button
              type="button"
              className={styles.readMoreBtn}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show Less ▴' : 'Read Full Analysis ▾'}
            </button>
          )}
        </div>

        {/* 4. Localized PAR Callout Box */}
        {summary.parContext && (
          <div className={styles.parCallout}>
            <strong className={styles.calloutHeading}>📍 PAR Atmospheric Dynamics</strong>
            <p className={styles.calloutBody}>{summary.parContext}</p>
          </div>
        )}

        {/* 5. Sub-Navigation Tabs for Detailed Intelligence (3-Col Grid) */}
        <div className={styles.intelTabRow}>
          <button
            type="button"
            className={`${styles.intelTabBtn} ${activeIntelTab === 'threats' ? styles.active : ''}`}
            onClick={() => setActiveIntelTab('threats')}
            title="Regional Threat Matrix"
          >
            Threat Matrix
          </button>
          <button
            type="button"
            className={`${styles.intelTabBtn} ${activeIntelTab === 'monsoons' ? styles.active : ''}`}
            onClick={() => setActiveIntelTab('monsoons')}
            title="Philippine Monsoon Schedules"
          >
            Monsoons
          </button>
          <button
            type="button"
            className={`${styles.intelTabBtn} ${activeIntelTab === 'spheres' ? styles.active : ''}`}
            onClick={() => setActiveIntelTab('spheres')}
            title="5 Interacting Earth Spheres"
          >
            5 Spheres
          </button>
        </div>

        {/* 6. Active Tab Intelligence Content */}
        {activeIntelTab === 'threats' && summary.regionalImpact && (
          <div className={styles.sectionBlock}>
            <div className={styles.threatStack}>
              {summary.regionalImpact.map((item) => (
                <div key={item.region} className={styles.threatCard}>
                  <div className={styles.threatTop}>
                    <strong className={styles.threatRegion}>{item.region}</strong>
                    <span className={styles.threatPill}>{item.threatLevel}</span>
                  </div>
                  <p className={styles.threatDetail}>{item.vulnerabilityDetail}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeIntelTab === 'monsoons' && summary.seasonalCycles && (
          <div className={styles.sectionBlock}>
            <div className={styles.seasonStack}>
              {summary.seasonalCycles.map((cycle) => (
                <div key={cycle.name} className={styles.seasonCard}>
                  <div className={styles.seasonTop}>
                    <strong className={styles.seasonName}>{cycle.name}</strong>
                    <span className={styles.seasonPeriod}>{cycle.period}</span>
                  </div>
                  <p className={styles.seasonDesc}>{cycle.characteristics}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeIntelTab === 'spheres' && (
          <div className={styles.sectionBlock}>
            <div className={styles.componentList}>
              {climateComponents.map((component) => (
                <details key={component.name} open={component.name === 'Atmosphere'} className={styles.componentDetails}>
                  <summary>{component.name}</summary>
                  <p>{component.description}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        <p className={styles.sourceFootnote}>
          {status === 'loading' ? 'Synthesizing atmospheric telemetry...' : 'Reference Baseline:'}
          {status !== 'loading' && (
            <a href={summary.sourceUrl} target="_blank" rel="noreferrer">
              {' '}WMO / PAGASA Standards
            </a>
          )}
        </p>
      </div>
    </article>
  )
}

export default SatellitePanel
