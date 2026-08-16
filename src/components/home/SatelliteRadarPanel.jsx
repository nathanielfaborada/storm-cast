import { useState } from 'react'
import styles from './SatelliteRadarPanel.module.css'

const windySatelliteUrl = 'https://www.windy.com/-Satellite-satellite?satellite,13.0,122.0,5'
const windyRadarUrl = 'https://www.windy.com/-Weather-radar-radar?radar,13.0,122.0,5'
const windyWindUrl = 'https://www.windy.com/-Wind-wind?wind,13.0,122.0,5'

export function SatelliteRadarPanel() {
  const [activeLayer, setActiveLayer] = useState('satellite')

  function getTargetUrl() {
    if (activeLayer === 'radar') return windyRadarUrl
    if (activeLayer === 'wind') return windyWindUrl
    return windySatelliteUrl
  }

  return (
    <section className={styles.panelContainer} aria-label="Near-real-time satellite weather map">
      <div className={styles.panelHeader}>
        <div>
          <h2 className={styles.title}>Near-Real-Time Satellite & Radar</h2>
          <p className={styles.subtitle}>Western Pacific & PAR Multi-Layer Feeds</p>
        </div>
        <a
          className={styles.fullscreenLink}
          href={getTargetUrl()}
          target="_blank"
          rel="noreferrer"
        >
          Launch Fullscreen Map ↗
        </a>
      </div>

      {/* Layer Switcher Tabs */}
      <div className={styles.layerTabs}>
        <button
          type="button"
          className={`${styles.layerTab} ${activeLayer === 'satellite' ? styles.active : ''}`}
          onClick={() => setActiveLayer('satellite')}
        >
          🛰️ Infrared Satellite
        </button>
        <button
          type="button"
          className={`${styles.layerTab} ${activeLayer === 'radar' ? styles.active : ''}`}
          onClick={() => setActiveLayer('radar')}
        >
          🌧️ Rain Radar
        </button>
        <button
          type="button"
          className={`${styles.layerTab} ${activeLayer === 'wind' ? styles.active : ''}`}
          onClick={() => setActiveLayer('wind')}
        >
          💨 Wind Streams
        </button>
      </div>

      <div className={styles.satelliteFrame}>
        <div className={styles.satelliteFallback}>
          <strong className={styles.fallbackTitle}>
            {activeLayer === 'radar'
              ? 'Live Doppler Rain Radar'
              : activeLayer === 'wind'
                ? 'Atmospheric Wind Stream Field'
                : 'Himawari-9 Multispectral Satellite Feed'}
          </strong>
          <p className={styles.fallbackDesc}>
            Track storm clouds, monsoonal rainbands, and tropical cyclone eye
            formations in real-time across the Philippine archipelago.
          </p>
          <div className={styles.tagRow}>
            <span className={styles.tag}>Himawari-9</span>
            <span className={styles.tag}>Doppler</span>
            <span className={styles.tag}>PAR Bound</span>
          </div>
          <a
            href={getTargetUrl()}
            target="_blank"
            rel="noreferrer"
            className={styles.radarLauncherBtn}
          >
            Open Live {activeLayer === 'radar' ? 'Radar' : activeLayer === 'wind' ? 'Wind Stream' : 'Satellite'} Feed
          </a>
        </div>
      </div>
    </section>
  )
}

export default SatelliteRadarPanel
