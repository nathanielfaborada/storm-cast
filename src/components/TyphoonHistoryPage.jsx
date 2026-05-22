import { useMemo, useState } from 'react'
import typhoonHistoryImage from '../assets/typhoon-history.png'
import { typhoonHistoryMilestones } from '../data/weatherContent'
import { useTyphoonHistory } from '../hooks/useTyphoonHistory'
import { GoogleAdSlot } from './GoogleAdSlot'

const batchSize = 4

const periodFilters = ['All', '2020s', '2010s']

function matchesPeriod(record, selectedPeriod) {
  if (selectedPeriod === 'All') return true
  if (!record.year) return false

  const decadeStart = Number(selectedPeriod.replace('s', ''))
  return record.year >= decadeStart && record.year <= decadeStart + 9
}

export function TyphoonHistoryPage() {
  const { namedRecords, overview, records } = useTyphoonHistory()
  const [query, setQuery] = useState('')
  const [selectedPeriod, setSelectedPeriod] = useState('All')
  const [showFilters, setShowFilters] = useState(false)
  const [visibleCount, setVisibleCount] = useState(batchSize)

  const filteredRecords = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    const isSearching = Boolean(normalizedQuery)
    const fallbackSearchRecords = [...namedRecords, ...records]
    const sourceRecords = isSearching ? fallbackSearchRecords : records

    return sourceRecords.filter((record) => {
      const matchesQuery =
        !isSearching ||
        `${record.title} ${record.localName || ''} ${record.year || ''}`
          .toLowerCase()
          .includes(normalizedQuery)

      return matchesQuery && (isSearching || matchesPeriod(record, selectedPeriod))
    })
  }, [namedRecords, query, records, selectedPeriod])
  const visibleRecords = filteredRecords.slice(0, visibleCount)
  const hasMoreRecords = visibleCount < filteredRecords.length

  function updateQuery(value) {
    setQuery(value)
    setSelectedPeriod('All')
    setVisibleCount(batchSize)

    if (!value.trim() || /^\d{4}$/.test(value.trim())) {
      return
    }
  }

  function updatePeriod(period) {
    setSelectedPeriod(period)
    setVisibleCount(batchSize)
  }

  function clearSearch() {
    setQuery('')
    setSelectedPeriod('All')
    setShowFilters(false)
    setVisibleCount(batchSize)
  }

  return (
    <main className="history-dashboard" aria-label="Typhoon history page">
      <section className="history-left-column">
        <article className="panel typhoon-info-panel">
          <img src={typhoonHistoryImage} alt="Satellite view of a typhoon near the Philippines" />
          <div className="typhoon-info-body">
            <h2>Typhoon</h2>
            <p>
              A typhoon is a complex rotating storm system powered by heat and
              moisture from warm ocean waters. Its destructive power comes from
              the calm eye, the intense eyewall, and the spiral rain bands that
              bring high winds, heavy rainfall, and storm surge.
            </p>

            <section className="typhoon-info-section">
              <h3>Main Parts of a Typhoon</h3>
              <ul>
                <li>
                  <strong>Eye</strong>
                  <span>The calm center of a strong tropical cyclone.</span>
                </li>
                <li>
                  <strong>Eyewall</strong>
                  <span>The ring of strongest winds and heaviest rain.</span>
                </li>
                <li>
                  <strong>Rain bands</strong>
                  <span>Curved bands that can trigger floods and landslides.</span>
                </li>
              </ul>
            </section>

            <section className="typhoon-info-section">
              <h3>Common Hazards</h3>
              <div className="hazard-list">
                <span>Strong winds</span>
                <span>Storm surge</span>
                <span>Flash floods</span>
                <span>Landslides</span>
                <span>Power outages</span>
                <span>Coastal waves</span>
              </div>
            </section>

            <section className="typhoon-info-section">
              <h3>Before Landfall</h3>
              <ol>
                <li>Monitor PAGASA bulletins and local advisories.</li>
                <li>Charge phones, power banks, and emergency lights.</li>
                <li>Prepare drinking water, food, medicines, and documents.</li>
                <li>Move away from coastal, flood-prone, and landslide-prone areas when advised.</li>
              </ol>
            </section>
          </div>
        </article>
        <GoogleAdSlot className="sidebar-google-ad" label="Sponsored safety updates" />
      </section>

      <section className="history-right-column">
        <section className="panel history-search-card" aria-label="Typhoon search">
          <form onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="typhoon-history-search">
              Search typhoon history
            </label>
            <div className="history-search-field">
              <span aria-hidden="true">⌕</span>
              <input
                id="typhoon-history-search"
                onChange={(event) => updateQuery(event.target.value)}
                placeholder="Search year or typhoon name"
                type="search"
                value={query}
              />
            </div>
            <button
              className="history-filter-button"
              type="button"
              onClick={() => setShowFilters((value) => !value)}
            >
              Filter
            </button>
            <button type="button" onClick={clearSearch}>
              <span className="clear-icon" aria-hidden="true">
                x
              </span>
              Clear
            </button>
          </form>

          {showFilters && (
            <div className="history-filter-row">
              {periodFilters.map((period) => (
                <button
                  className={period === selectedPeriod ? 'active' : undefined}
                  key={period}
                  type="button"
                  onClick={() => updatePeriod(period)}
                >
                  {period}
                </button>
              ))}
            </div>
          )}
        </section>

        <article className="panel history-overview-panel">
          <div className="history-section-header">
            <div>
              <span>Wikipedia overview</span>
              <h2>{overview.title}</h2>
            </div>
          </div>
          <p>{overview.extract}</p>
          <a href={overview.sourceUrl} target="_blank" rel="noreferrer">
            Read source on Wikipedia
          </a>
        </article>

        <GoogleAdSlot className="inline-google-ad" label="Sponsored typhoon resources" />

        <section
          className={`panel history-records-panel ${
            query.trim() ? 'search-records-panel' : 'yearly-records-panel'
          }`}
        >
          <div className="history-section-header">
            <div>
              <span>Newest to oldest</span>
              <h2>{query.trim() ? 'Typhoon Search Results' : 'Yearly Timeline'}</h2>
            </div>
            <strong>
              {filteredRecords.length} shown
            </strong>
          </div>

          <div className="history-record-grid">
            {visibleRecords.map((record) => (
              <article
                className={`history-record-card ${
                  record.type === 'season' ? 'yearly-record-card' : ''
                }`}
                key={record.title}
              >
                <div>
                  <span>{record.year || 'Wikipedia'}</span>
                  <h3>{record.title}</h3>
                  <strong>
                    {record.type === 'storm'
                      ? record.localName
                      : 'Western Pacific season'}
                  </strong>
                </div>
                <p>{record.extract}</p>
                <footer>
                  <span>
                    {record.type === 'storm'
                      ? record.year
                        ? `Named typhoon, ${record.year}`
                        : 'Named typhoon'
                      : record.year}
                  </span>
                  <a href={record.sourceUrl} target="_blank" rel="noreferrer">
                    Wikipedia
                  </a>
                </footer>
              </article>
            ))}

            {!visibleRecords.length && (
              <article className="history-empty-card">
                <h3>No matching typhoon found</h3>
                <p>
                  Try a local or international name, such as Yolanda, Haiyan,
                  Odette, Rai, Egay, or Doksuri.
                </p>
              </article>
            )}
          </div>

          {hasMoreRecords && (
            <button
              className="history-load-more"
              type="button"
              onClick={() => setVisibleCount((count) => count + batchSize)}
            >
              Load older years
            </button>
          )}
        </section>

        <GoogleAdSlot className="inline-google-ad" label="Sponsored typhoon history" />

        <section className="panel history-timeline-panel">
          <div className="history-section-header">
            <div>
              <span>Context</span>
              <h2>How Typhoon History Is Tracked</h2>
            </div>
          </div>
          <div className="history-timeline">
            {typhoonHistoryMilestones.map((milestone) => (
              <article key={milestone.period}>
                <span>{milestone.period}</span>
                <h3>{milestone.title}</h3>
                <p>{milestone.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}
