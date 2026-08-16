import { useState } from 'react'
import { climateComponents, fallbackClimateSummary } from '../data/weatherContent'
import earthClimateImage from '../assets/earth-climate.png'
import { useWikipediaSummary } from '../hooks/useWikipediaSummary'

export function ClimatePanel() {
  const [selectedTopic, setSelectedTopic] = useState('Climate')
  const { status, summary } = useWikipediaSummary(selectedTopic, fallbackClimateSummary)

  return (
    <article className="panel compact-climate-panel" aria-label="Philippine Climate and Weather Intelligence">
      <div className="compact-satellite-header">
        <img
          className="compact-earth-visual"
          src={earthClimateImage}
          alt="Satellite view of Earth and the Western Pacific"
        />
        <div className="compact-satellite-overlay">
          <span className="compact-live-tag">PAR SYNTHESIS</span>
        </div>
      </div>

      <div className="compact-climate-body">
        {/* Topic Toggle Tabs */}
        <div className="compact-topic-bar">
          <button
            type="button"
            className={`compact-topic-btn ${selectedTopic === 'Climate' ? 'active' : ''}`}
            onClick={() => setSelectedTopic('Climate')}
          >
            Climate & Monsoons
          </button>
          <button
            type="button"
            className={`compact-topic-btn ${selectedTopic === 'Tropical cyclone' ? 'active' : ''}`}
            onClick={() => setSelectedTopic('Tropical cyclone')}
          >
            Cyclones & PAR
          </button>
        </div>

        <h2 className="compact-panel-title">
          <span>{summary.title}</span>
        </h2>

        {/* Scientific Baseline */}
        <p className="compact-baseline-text">
          {summary.scientificBaseline || summary.extract}
        </p>

        {/* Localized PAR Context Box */}
        {summary.parContext && (
          <div className="compact-par-callout">
            <strong className="callout-heading">📍 PAR Atmospheric Context</strong>
            <p className="callout-body">{summary.parContext}</p>
          </div>
        )}

        {/* Regional Threat Matrix */}
        {summary.regionalImpact && summary.regionalImpact.length > 0 && (
          <div className="compact-section-wrap">
            <h3 className="compact-subheading">Regional Vulnerability Matrix</h3>
            <div className="compact-threat-stack">
              {summary.regionalImpact.map((item) => (
                <div key={item.region} className="compact-threat-item">
                  <div className="threat-item-top">
                    <strong>{item.region}</strong>
                    <span className="threat-pill">{item.threatLevel}</span>
                  </div>
                  <p className="threat-detail">{item.vulnerabilityDetail}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Seasonal Monsoon Regimes */}
        {summary.seasonalCycles && summary.seasonalCycles.length > 0 && (
          <div className="compact-section-wrap">
            <h3 className="compact-subheading">Philippine Monsoon Cycles</h3>
            <div className="compact-season-stack">
              {summary.seasonalCycles.map((cycle) => (
                <div key={cycle.name} className="compact-season-item">
                  <div className="season-top">
                    <strong>{cycle.name}</strong>
                    <span className="season-period">{cycle.period}</span>
                  </div>
                  <p className="season-desc">{cycle.characteristics}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interacting Earth System Spheres */}
        <div className="compact-section-wrap">
          <h3 className="compact-subheading">5 Interacting Earth Spheres</h3>
          <div className="compact-component-list">
            {climateComponents.map((component) => (
              <details key={component.name} open={component.name === 'Atmosphere'}>
                <summary>
                  <span className="beaker-icon-mini" aria-hidden="true" />
                  <span>{component.name}</span>
                </summary>
                <p>{component.description}</p>
              </details>
            ))}
          </div>
        </div>

        <p className="compact-source-footnote">
          {status === 'loading' ? 'Synthesizing atmospheric telemetry...' : 'Reference Baseline:'}
          {status !== 'loading' && (
            <a href={summary.sourceUrl} target="_blank" rel="noreferrer">
              WMO / Meteorological Standards
            </a>
          )}
        </p>
      </div>
    </article>
  )
}

export default ClimatePanel
