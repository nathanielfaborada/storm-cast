import coldIcon from '../assets/weather/cold.png'
import heatIcon from '../assets/weather/heat.png'
import rainIcon from '../assets/weather/rain.png'
import windIcon from '../assets/weather/wind.png'

export function WeatherShortcuts({ status, todayForecast, currentMetrics }) {
  const temp = currentMetrics?.temp ?? todayForecast?.maxTemp ?? '--'
  const feelsLike = currentMetrics?.feelsLike ?? (todayForecast ? todayForecast.maxTemp + 3 : '--')
  const humidity = currentMetrics?.humidity ?? 75
  const pressure = currentMetrics?.pressure ?? 1012
  const windSpeed = currentMetrics?.windSpeed ?? todayForecast?.windSpeed ?? '--'
  const windDirection = currentMetrics?.windDirection ?? 'ENE'
  const rainChance = todayForecast?.rainChance ?? 20
  const conditionDesc = currentMetrics?.description || todayForecast?.description || 'Tropical Weather'

  return (
    <section className="panel compact-metrics-panel" aria-label="Current atmospheric metrics">
      {/* Integrated Weather Hero Bar */}
      <div className="compact-temp-hero">
        <div className="compact-temp-main">
          <div className="compact-temp-reading">
            <strong className="compact-temp-val">{status === 'loading' ? '...' : `${temp}°`}</strong>
            <span className="compact-temp-unit">C</span>
          </div>

          <div className="compact-temp-meta">
            <div className="compact-pill-row">
              <span className="compact-condition-badge">{conditionDesc}</span>
              <span className="compact-feels-text">Feels like {feelsLike}°C</span>
            </div>
            <span className="compact-subtext">Live Municipal Observation</span>
          </div>
        </div>

        <div className="compact-hero-stats">
          <div className="compact-hi-lo-pill">
            <span>High: <strong>{todayForecast?.maxTemp ?? '--'}°</strong></span>
            <span className="stat-pipe">|</span>
            <span>Low: <strong>{todayForecast?.minTemp ?? '--'}°</strong></span>
          </div>
          <div className="compact-quick-indicators">
            <span>💧 {humidity}% RH</span>
            <span>⏱️ {pressure} hPa</span>
          </div>
        </div>
      </div>

      {/* High-Density 4-Column Metric Grid */}
      <div className="compact-metrics-grid">
        {/* Rain Chance */}
        <div className="compact-metric-tile">
          <div className="tile-icon-box rain">
            <img src={rainIcon} alt="" />
          </div>
          <div className="tile-content">
            <span className="tile-label">Rain Chance</span>
            <strong className="tile-val">{status === 'loading' ? '...' : `${rainChance}%`}</strong>
          </div>
        </div>

        {/* Wind Speed & Direction */}
        <div className="compact-metric-tile">
          <div className="tile-icon-box wind">
            <img src={windIcon} alt="" />
          </div>
          <div className="tile-content">
            <span className="tile-label">Wind Velocity</span>
            <strong className="tile-val">{status === 'loading' ? '...' : `${windSpeed} km/h ${windDirection}`}</strong>
          </div>
        </div>

        {/* Daytime High */}
        <div className="compact-metric-tile">
          <div className="tile-icon-box heat">
            <img src={heatIcon} alt="" />
          </div>
          <div className="tile-content">
            <span className="tile-label">Peak Daytime</span>
            <strong className="tile-val">{status === 'loading' ? '...' : `${todayForecast?.maxTemp ?? '--'}°C`}</strong>
          </div>
        </div>

        {/* Night Minimum */}
        <div className="compact-metric-tile">
          <div className="tile-icon-box cold">
            <img src={coldIcon} alt="" />
          </div>
          <div className="tile-content">
            <span className="tile-label">Night Minimum</span>
            <strong className="tile-val">{status === 'loading' ? '...' : `${todayForecast?.minTemp ?? '--'}°C`}</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeatherShortcuts
