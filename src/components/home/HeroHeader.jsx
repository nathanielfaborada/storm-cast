import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './HeroHeader.module.css'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
})

const popularHubs = [
  'Manila, Philippines',
  'Cebu City, Philippines',
  'Davao City, Philippines',
  'Baguio, Philippines',
  'Legazpi, Albay',
  'Iloilo City, Philippines',
  'Tacloban, Leyte',
  'Zamboanga City, Philippines',
]

function formatForecastDate(todayForecast) {
  if (!todayForecast?.date) {
    return dateFormatter.format(new Date())
  }
  return dateFormatter.format(new Date(`${todayForecast.date}T00:00:00`))
}

export function HeroHeader({
  location,
  onClear,
  onSearch,
  searchError,
  searchStatus,
  todayForecast,
}) {
  const [query, setQuery] = useState('')
  const [alertDismissed, setAlertDismissed] = useState(false)

  const currentDate = useMemo(
    () => formatForecastDate(todayForecast),
    [todayForecast],
  )

  function handleSubmit(event) {
    event.preventDefault()
    if (!query.trim()) return
    onSearch(query)
    setQuery('')
  }

  function handleSelectHub(hubName) {
    onSearch(hubName)
  }

  function handleClear() {
    setQuery('')
    onClear()
  }

  return (
    <header
      className={`${styles.headerContainer} w-full max-w-full min-w-0 overflow-hidden`}
      style={{ width: '100%', maxWidth: '100%', minWidth: 0, boxSizing: 'border-box', overflow: 'hidden' }}
      aria-label="Location search and meteorological status bar"
    >
      {/* 1. Live PAR Alert Banner */}
      {!alertDismissed && (
        <aside className={styles.alertBanner} aria-label="Philippine Area of Responsibility Status">
          <div className={styles.alertLeft}>
            <div className={styles.alertBadgeRow}>
              <span className={styles.pulseDot} aria-hidden="true" />
              <strong className={styles.alertTag}>PAR MONITORING</strong>
            </div>
            <span className={styles.alertMessage}>
              🟢 <strong>Normal Maritime Flow:</strong> No active tropical cyclone inside PAR today. Convective rainbands active.
            </span>
          </div>

          <div className={styles.alertActions}>
            <Link to="/history" className={styles.alertCta}>
              TCWS Guide
            </Link>
            <button
              type="button"
              className={styles.alertDismiss}
              onClick={() => setAlertDismissed(true)}
              aria-label="Dismiss alert banner"
            >
              ×
            </button>
          </div>
        </aside>
      )}

      {/* 2. Main Row: Location & Search Input Side-by-Side */}
      <div className={styles.mainRow}>
        <div className={styles.locationBlock}>
          <div className={styles.locationPill}>
            <span aria-hidden="true">📍</span>
            <strong className={styles.locationName}>{location.name}</strong>
          </div>
          <span className={styles.datePill}>📅 {currentDate}</span>
        </div>

        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <span className={styles.searchLens} aria-hidden="true">⌕</span>
            <input
              autoComplete="off"
              id="weather-search-input"
              name="search"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search municipality..."
              type="search"
              value={query}
              className={styles.searchInput}
            />
            {searchStatus === 'searching' && (
              <small className={styles.searchFeedback}>Searching...</small>
            )}
            {searchError && (
              <small className={`${styles.searchFeedback} ${styles.error}`}>{searchError}</small>
            )}
          </div>

          <button type="submit" className={styles.searchBtn}>
            Search
          </button>

          {(query || location.name !== 'Pandi, Philippines') && (
            <button
              type="button"
              className={styles.resetBtn}
              onClick={handleClear}
              title="Reset location"
            >
              Reset
            </button>
          )}
        </form>
      </div>

      {/* 3. Compact Major Hub Chips */}
      <div className={styles.hubsRow}>
        <span className={styles.hubsTitle}>Hubs:</span>
        <div className={styles.chipsScroll}>
          {popularHubs.map((hub) => {
            const shortName = hub.split(',')[0]
            const isSelected = location.name.includes(shortName)
            return (
              <button
                key={hub}
                type="button"
                className={`${styles.hubChip} ${isSelected ? styles.active : ''}`}
                onClick={() => handleSelectHub(hub)}
              >
                {shortName}
              </button>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default HeroHeader
