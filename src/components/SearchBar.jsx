import { useMemo, useState } from 'react'

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

export function SearchBar({
  location,
  onClear,
  onSearch,
  searchError,
  searchStatus,
  todayForecast,
}) {
  const [query, setQuery] = useState('')
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
    <section className="panel compact-search-bar" aria-label="Location search and quick selector">
      <div className="compact-search-main">
        {/* Left: Location & Date Pill */}
        <div className="compact-location-block">
          <div className="location-pill">
            <span className="pin-icon" aria-hidden="true">📍</span>
            <strong className="location-name">{location.name}</strong>
          </div>
          <span className="date-pill">📅 {currentDate}</span>
        </div>

        {/* Right: Integrated Search Form */}
        <form className="compact-search-form" onSubmit={handleSubmit}>
          <div className="compact-input-wrapper">
            <span className="search-lens-mini" aria-hidden="true">⌕</span>
            <input
              autoComplete="off"
              id="weather-search"
              name="search"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search city/municipality..."
              type="search"
              value={query}
            />
            {searchStatus === 'searching' && <small className="compact-feedback">Searching...</small>}
            {searchError && <small className="compact-feedback error">{searchError}</small>}
          </div>

          <button type="submit" className="compact-search-btn">
            Search
          </button>

          {(query || location.name !== 'Pandi, Philippines') && (
            <button type="button" className="compact-reset-btn" onClick={handleClear} title="Reset to default">
              Reset
            </button>
          )}
        </form>
      </div>

      {/* Quick City Suggestion Chips (Compact single line) */}
      <div className="compact-hubs-row">
        <span className="compact-hubs-title">Hubs:</span>
        <div className="compact-chips-scroll">
          {popularHubs.map((hub) => {
            const shortName = hub.split(',')[0]
            const isSelected = location.name.includes(shortName)
            return (
              <button
                key={hub}
                type="button"
                className={`compact-chip ${isSelected ? 'active' : ''}`}
                onClick={() => handleSelectHub(hub)}
              >
                {shortName}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SearchBar
