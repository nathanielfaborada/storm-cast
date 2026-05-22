import { useMemo, useState } from 'react'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

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
    onSearch(query)
    setQuery('')
  }

  function handleClear() {
    setQuery('')
    onClear()
  }

  return (
    <section className="panel search-card" aria-label="Forecast search">
      <div className="date-location">
        <strong>{currentDate}</strong>
        <span>{location.name}</span>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="search-field">
          <label className="sr-only" htmlFor="weather-search">
            Search weather location
          </label>
          <input
            autoComplete="off"
            id="weather-search"
            name="search"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search location"
            type="search"
            value={query}
          />
          {searchStatus === 'searching' && <small>Searching...</small>}
          {searchError && <small>{searchError}</small>}
        </div>

        <button type="button" onClick={handleClear}>
          <span className="clear-icon" aria-hidden="true">
            x
          </span>
          Clear
        </button>
      </form>
    </section>
  )
}
