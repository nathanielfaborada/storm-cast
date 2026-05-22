import {
  climateComponents,
  fallbackClimateSummary,
} from '../data/weatherContent'
import earthClimateImage from '../assets/earth-climate.png'
import { useWikipediaSummary } from '../hooks/useWikipediaSummary'

export function ClimatePanel() {
  const { status, summary } = useWikipediaSummary(
    'Climate',
    fallbackClimateSummary,
  )

  return (
    <article className="panel climate-panel">
      <img
        className="earth-visual"
        src={earthClimateImage}
        alt="Earth from space"
      />

      <div className="climate-body">
        <h2>
          <span>{summary.title}</span>
        </h2>
        <p>{summary.extract}</p>
        <p className="wiki-source">
          {status === 'loading' ? 'Loading Wikipedia summary...' : 'Source:'}
          {status !== 'loading' && (
            <a href={summary.sourceUrl} target="_blank" rel="noreferrer">
              Wikipedia
            </a>
          )}
        </p>

        <h3>Components of Climate</h3>
        <p>The climate system consists of multiple interacting components:</p>

        <div className="component-list">
          {climateComponents.map((component) => (
            <details key={component.name} open={component.expanded}>
              <summary>
                <span className="beaker-icon" aria-hidden="true" />
                <span>{component.name}</span>
              </summary>
              <p>{component.description}</p>
              <ul>
                {component.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </article>
  )
}
