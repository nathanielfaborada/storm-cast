import { useState } from 'react'

const windySatelliteUrl = 'https://www.windy.com/-Satellite-satellite?satellite,13.0,122.0,5'
const windyRadarUrl = 'https://www.windy.com/-Weather-radar-radar?radar,13.0,122.0,5'
const windyWindUrl = 'https://www.windy.com/-Wind-wind?wind,13.0,122.0,5'

export function TyphoonTracker() {
  const [activeLayer, setActiveLayer] = useState('satellite')

  function getTargetUrl() {
    if (activeLayer === 'radar') return windyRadarUrl
    if (activeLayer === 'wind') return windyWindUrl
    return windySatelliteUrl
  }

  return (
    <section className="panel typhoon-panel modern-satellite-panel" aria-label="Near-real-time satellite weather map">
      <div className="typhoon-header">
        <div>
          <h2>Near-Real-Time Satellite & Radar</h2>
          <p>Western Pacific & Philippine Area of Responsibility (PAR) Multi-Layer Feeds</p>
        </div>
        <a
          className="map-open-link"
          href={getTargetUrl()}
          target="_blank"
          rel="noreferrer"
        >
          Launch Fullscreen Map ↗
        </a>
      </div>

      {/* Layer Switcher Tabs */}
      <div className="satellite-layer-tabs">
        <button
          type="button"
          className={`layer-tab ${activeLayer === 'satellite' ? 'active' : ''}`}
          onClick={() => setActiveLayer('satellite')}
        >
          🛰️ Infrared Satellite
        </button>
        <button
          type="button"
          className={`layer-tab ${activeLayer === 'radar' ? 'active' : ''}`}
          onClick={() => setActiveLayer('radar')}
        >
          🌧️ Precipitation Radar
        </button>
        <button
          type="button"
          className={`layer-tab ${activeLayer === 'wind' ? 'active' : ''}`}
          onClick={() => setActiveLayer('wind')}
        >
          💨 Wind Stream Field
        </button>
      </div>

      <div className="satellite-frame">
        <div className="satellite-preview" aria-hidden="true">
          <span className="cloud-band band-one" />
          <span className="cloud-band band-two" />
          <span className="storm-eye" />
          <span className="island island-one" />
          <span className="island island-two" />
          <span className="island island-three" />
        </div>

        <div className="satellite-fallback">
          <strong className="satellite-fallback-title">
            {activeLayer === 'radar'
              ? 'Live Doppler Rain Radar'
              : activeLayer === 'wind'
                ? 'Atmospheric Wind Stream Field'
                : 'Himawari-9 Multispectral Satellite Feed'}
          </strong>
          <p>
            Track storm clouds, monsoonal rainbands, and tropical cyclone eye
            formations in real-time across the Philippine archipelago.
          </p>
          <div className="satellite-tags">
            <span>Himawari-9</span>
            <span>Doppler Radar</span>
            <span>PAR Boundary</span>
            <span>Sea Surface Temp</span>
          </div>
          <a
            href={getTargetUrl()}
            target="_blank"
            rel="noreferrer"
            className="map-open-link"
          >
            Open Live Interactive {activeLayer === 'radar' ? 'Radar' : activeLayer === 'wind' ? 'Wind Stream' : 'Satellite'}
          </a>
        </div>
      </div>
    </section>
  )
}

export default TyphoonTracker
