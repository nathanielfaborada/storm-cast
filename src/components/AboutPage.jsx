const featureList = [
  '7-day local weather forecast powered by Open-Meteo',
  'Searchable location forecast for cities and municipalities',
  'Climate and typhoon learning panels with concise explanations',
  'Philippine typhoon history organized by year and searchable by storm name',
  'Quick access to live radar & satellite viewing through Windy',
]

const sourceList = [
  {
    name: 'Open-Meteo',
    detail: 'Weather forecast data, temperatures, rain probability, and wind speed.',
  },
  {
    name: 'Wikipedia',
    detail: 'Background summaries for climate and typhoon history topics.',
  },
  {
    name: 'Windy.com',
    detail: 'External live radar & satellite interactive map access for visual weather monitoring.',
  },
]

export function AboutPage() {
  return (
    <main className="about-page" aria-label="About StormCast PH">
      <section className="panel about-hero-panel">
        <div>
          <span>About StormCast PH</span>
          <h2>Weather and typhoon information for everyday awareness.</h2>
          <p>
            StormCast PH is a weather-focused web app for checking local
            forecasts, learning about climate systems, and exploring Philippine
            typhoon history in a clear and approachable way.
          </p>
        </div>
      </section>

      <section className="about-grid">
        <article className="panel about-card">
          <span>Purpose</span>
          <h2>Built for quick context</h2>
          <p>
            The app combines forecast data, educational summaries, and typhoon
            history references so users can understand both current weather and
            the broader risks that come with tropical cyclones.
          </p>
        </article>

        <article className="panel about-card">
          <span>Important note</span>
          <h2>Use official warnings for decisions</h2>
          <p>
            StormCast PH is for information and learning. For emergency
            decisions, evacuation, class suspensions, and official warnings,
            always follow PAGASA and local government advisories.
          </p>
        </article>
      </section>

      <section className="panel about-section">
        <div className="about-section-header">
          <span>Features</span>
          <h2>What you can do</h2>
        </div>
        <div className="about-feature-list">
          {featureList.map((feature) => (
            <article key={feature}>
              <span aria-hidden="true">✓</span>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel about-section">
        <div className="about-section-header">
          <span>Sources</span>
          <h2>Where the information comes from</h2>
        </div>
        <div className="about-source-list">
          {sourceList.map((source) => (
            <article key={source.name}>
              <h3>{source.name}</h3>
              <p>{source.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
