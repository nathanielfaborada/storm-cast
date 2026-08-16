import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import {
  DynamicWeatherIcon,
  EmergencyHotlinesPanel,
  EnvironmentalAstroPanel,
  ForecastPanel,
  GoBagChecklistCard,
  HourlyForecastPanel,
  SatellitePanel,
  TcwsReferenceCard,
} from '../components/home'

// Weather icons
import coldIcon from '../assets/weather/cold.png'
import heatIcon from '../assets/weather/heat.png'
import rainIcon from '../assets/weather/rain.png'
import windIcon from '../assets/weather/wind.png'

import styles from './HomePage.module.css'

const keyHubs = [
  'Manila',
  'Cebu',
  'Davao',
  'Baguio',
  'Legazpi',
  'Iloilo',
  'Tacloban',
]

export function HomePage({
  currentMetrics,
  forecastDays,
  hourlyForecast,
  location,
  onLocationClear,
  onLocationSearch,
  searchError,
  searchStatus,
  status,
  todayForecast,
}) {
  const [query, setQuery] = useState('')
  const [alertDismissed, setAlertDismissed] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const viewParam = searchParams.get('view')
  const [activeMobileView, setActiveMobileView] = useState(
    viewParam === 'readiness' ? 'readiness' : 'forecast'
  )

  useEffect(() => {
    if (viewParam === 'readiness' || viewParam === 'forecast') {
      setActiveMobileView(viewParam)
    }
  }, [viewParam])

  function handleTabSelect(view) {
    setActiveMobileView(view)
    setSearchParams({ view }, { replace: true })
  }

  // Current Date String
  const currentDateFormatted = new Intl.DateTimeFormat('en-PH', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).format(new Date())

  // Telemetry metrics with defensive defaults
  const temp = currentMetrics?.temp ?? todayForecast?.maxTemp ?? 28
  const feelsLike = currentMetrics?.feelsLike ?? (todayForecast?.maxTemp ? todayForecast.maxTemp + 3 : 32)
  const humidity = currentMetrics?.humidity ?? 75
  const pressure = currentMetrics?.pressure ?? 1012
  const windSpeed = currentMetrics?.windSpeed ?? todayForecast?.windSpeed ?? 14
  const windDirection = currentMetrics?.windDirection ?? 'ENE'
  const rainChance = todayForecast?.rainChance ?? 20
  const maxTemp = todayForecast?.maxTemp ?? 33
  const minTemp = todayForecast?.minTemp ?? 24
  const condition = currentMetrics?.condition || todayForecast?.condition || 'cloud'
  const conditionDesc = currentMetrics?.description || todayForecast?.description || 'Partly Cloudy'

  function handleSearchSubmit(e) {
    e.preventDefault()
    if (query.trim()) {
      onLocationSearch(query.trim())
    }
  }

  function handleHubSelect(hub) {
    setQuery(hub)
    onLocationSearch(hub)
  }

  function handleClear() {
    setQuery('')
    onLocationClear()
  }

  return (
    <main className={`${styles.dashboardContainer} grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-0 pt-0 w-full max-w-full min-w-0 overflow-x-hidden`} aria-label="Philippine Weather Dashboard">
      <SEO
        title={`StormCast PH | Weather Forecast for ${location.name} & PAR Tracking`}
        description={`Real-time 7-day weather forecast, hourly rain probability, current heat index, and PAGASA-aligned cyclone intelligence for ${location.name}.`}
        canonical="https://stormcastph.com/"
        keywords="Philippine weather forecast, Manila weather, PAGASA typhoon tracker, rain radar, 7-day forecast, heat index, tropical weather"
      />

      {/* ── Left Panel (4/12 Col): Climate Intel & Disaster Readiness ── */}
      <section
        id="readiness"
        className={`${styles.leftPanel} ${activeMobileView !== 'readiness' ? styles.mobileHidden : ''} lg:col-span-4 space-y-4 m-0 p-0 w-full min-w-0`}
        aria-label="Regional Climate Intelligence & Disaster Preparedness"
      >
        <SatellitePanel />
        <GoBagChecklistCard />
        <TcwsReferenceCard />
      </section>

      {/* ── Right Panel (8/12 Col): Live Meteorological Stream ── */}
      <section
        id="forecast"
        className={`${styles.rightPanel} ${activeMobileView !== 'forecast' ? styles.mobileHidden : ''} lg:col-span-8 space-y-4 m-0 p-0 w-full min-w-0`}
        aria-label="Live Meteorological Data Stream"
      >
        {/* 1. Header Bar: Location, Search & PAR Alert */}
        <header className={`${styles.headerBar} m-0 mt-0`} aria-label="Search and status">
          {!alertDismissed && (
            <aside className={styles.alertBanner} aria-label="PAR Monitoring Alert">
              <div className={styles.alertLeft}>
                <span className={styles.pulseDot} aria-hidden="true" />
                <strong className={styles.alertTag}>PAR STATUS</strong>
                <span className={styles.alertMessage}>
                  🟢 <strong>Normal Maritime Flow:</strong> No active cyclone inside PAR today.
                </span>
              </div>
              <div className={styles.alertActions}>
                <Link to="/typhoon-history" className={styles.alertCta}>
                  View History →
                </Link>
                <button
                  type="button"
                  className={styles.alertDismiss}
                  onClick={() => setAlertDismissed(true)}
                  aria-label="Dismiss alert"
                >
                  ✕
                </button>
              </div>
            </aside>
          )}

          <div className={styles.searchRow}>
            <div className={styles.locationBlock}>
              <div className={styles.locationPill}>
                <span aria-hidden="true">📍</span>
                <span className={styles.locationName}>{location.name}</span>
              </div>
              <span className={styles.datePill}>{currentDateFormatted}</span>
            </div>

            <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
              <div className={styles.inputWrapper}>
                <span className={styles.searchLens} aria-hidden="true">⌕</span>
                <input
                  type="text"
                  placeholder="Search municipality..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className={styles.searchInput}
                  aria-label="Search city or municipality"
                />
              </div>
              <div className={styles.searchButtonRow}>
                <button
                  type="submit"
                  disabled={searchStatus === 'searching'}
                  className={styles.searchBtn}
                >
                  {searchStatus === 'searching' ? 'Searching...' : 'Search'}
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className={styles.resetBtn}
                  title="Reset to default location"
                >
                  Reset
                </button>
              </div>
              {searchError && (
                <span className={`${styles.searchFeedback} ${styles.error}`}>{searchError}</span>
              )}
            </form>
          </div>

          <div className={styles.hubsRow}>
            <span className={styles.hubsTitle}>Regional Hubs:</span>
            <div className={styles.chipsScroll}>
              {keyHubs.map((hub) => (
                <button
                  key={hub}
                  type="button"
                  onClick={() => handleHubSelect(hub)}
                  className={`${styles.hubChip} ${location.name.includes(hub) ? styles.active : ''}`}
                >
                  {hub}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* 2. Hero Blue Temperature Banner */}
        <div className={styles.heroBanner}>
          {/* Left Side: Primary Temperature, Weather Condition, Feels Like */}
          <div className={styles.heroLeft}>
            <div className={styles.tempRow}>
              <div className={styles.tempReading}>
                <strong className={styles.tempValue}>{temp}°</strong>
                <span className={styles.tempUnit}>C</span>
              </div>
              <div className={styles.conditionMeta}>
                <span className={styles.conditionBadge}>{conditionDesc}</span>
                <span className={styles.feelsLike}>Feels like <strong>{feelsLike}°C</strong></span>
              </div>
            </div>
            <p className={styles.observationSubtext}>
              Live Observation • Atmospheric Telemetry
            </p>
          </div>

          {/* Right Side: High/Low, Humidity, Barometric Pressure & Weather Icon */}
          <div className={styles.heroRight}>
            <div className={styles.telemetryStack}>
              <div className={styles.hiLoPill}>
                <span>High: <strong>{maxTemp}°C</strong></span>
                <span className={styles.statDivider}>•</span>
                <span>Low: <strong>{minTemp}°C</strong></span>
              </div>
              <div className={styles.atmosphericTags}>
                <span className={styles.metricTag}>💧 {humidity}% RH</span>
                <span className={styles.metricTag}>⏱️ {pressure} hPa</span>
                <span className={styles.metricTag}>💨 {windSpeed} km/h {windDirection}</span>
              </div>
            </div>

            <div className={styles.weatherGraphicBox} aria-hidden="true">
              <DynamicWeatherIcon condition={condition} className={styles.weatherGraphicSvg} />
            </div>
          </div>
        </div>

        {/* 3. Strict 4-Column Responsive Metrics Grid */}
        <div className={styles.gridCards}>
          {/* Card 1: Rain Chance */}
          <div className={styles.metricCard}>
            <div className={styles.cardHeaderRow}>
              <div className={`${styles.iconBox} ${styles.rain}`}>
                <img src={rainIcon} alt="Rain Chance" />
              </div>
              <span className={styles.cardLabel}>Rain Chance</span>
            </div>
            <div className={styles.cardInfo}>
              <strong className={styles.cardValue}>{rainChance}%</strong>
              <span className={styles.cardHint}>Precipitation</span>
            </div>
          </div>

          {/* Card 2: Wind Speed */}
          <div className={styles.metricCard}>
            <div className={styles.cardHeaderRow}>
              <div className={`${styles.iconBox} ${styles.wind}`}>
                <img src={windIcon} alt="Wind Speed" />
              </div>
              <span className={styles.cardLabel}>Wind Speed</span>
            </div>
            <div className={styles.cardInfo}>
              <strong className={styles.cardValue}>{windSpeed} km/h</strong>
              <span className={styles.cardHint}>{windDirection ? `Vector: ${windDirection}` : 'Surface Wind'}</span>
            </div>
          </div>

          {/* Card 3: Day High */}
          <div className={styles.metricCard}>
            <div className={styles.cardHeaderRow}>
              <div className={`${styles.iconBox} ${styles.heat}`}>
                <img src={heatIcon} alt="Day High" />
              </div>
              <span className={styles.cardLabel}>Day High</span>
            </div>
            <div className={styles.cardInfo}>
              <strong className={styles.cardValue}>{maxTemp}°C</strong>
              <span className={styles.cardHint}>Expected Peak</span>
            </div>
          </div>

          {/* Card 4: Night Low */}
          <div className={styles.metricCard}>
            <div className={styles.cardHeaderRow}>
              <div className={`${styles.iconBox} ${styles.cold}`}>
                <img src={coldIcon} alt="Night Low" />
              </div>
              <span className={styles.cardLabel}>Night Low</span>
            </div>
            <div className={styles.cardInfo}>
              <strong className={styles.cardValue}>{minTemp}°C</strong>
              <span className={styles.cardHint}>Overnight Low</span>
            </div>
          </div>
        </div>

        {/* 4. 24-Hour Hourly Timeline Visualizer */}
        <HourlyForecastPanel
          hourlyForecast={hourlyForecast}
          status={status}
        />

        {/* 5. 7-Day Municipal Forecast Outlook */}
        <ForecastPanel
          forecastDays={forecastDays}
          location={location}
          status={status}
        />

        {/* 6. Air Quality, UV & Astronomical Telemetry Grid */}
        <EnvironmentalAstroPanel location={location} />

        {/* 8. Regional Emergency Response & Hotlines Panel */}
        <EmergencyHotlinesPanel />
      </section>
    </main>
  )
}

export default HomePage
