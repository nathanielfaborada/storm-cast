import cloudIcon from '../assets/weather/forecast-cloud.png'
import rainIcon from '../assets/weather/forecast-rain.png'
import stormIcon from '../assets/weather/forecast-storm.png'
import sunIcon from '../assets/weather/forecast-sun.png'

const conditionIcons = {
  cloud: cloudIcon,
  rain: rainIcon,
  storm: stormIcon,
  sun: sunIcon,
}

export function HourlyForecastStrip({ hourlyForecast, status }) {
  if (!hourlyForecast || hourlyForecast.length === 0) return null

  return (
    <section className="panel modern-hourly-panel" aria-label="24-hour hourly forecast">
      <div className="hourly-panel-header">
        <div>
          <h2>24-Hour Atmospheric Outlook</h2>
          <p>Hourly temperature trends and precipitation probability</p>
        </div>
        <span className="hourly-live-badge">Hourly NWP Stream</span>
      </div>

      {status === 'loading' && (
        <p className="forecast-message">Loading hourly telemetry...</p>
      )}

      <div className="hourly-scroll-strip">
        {hourlyForecast.map((hour) => (
          <article className="hourly-card" key={hour.time}>
            <span className="hourly-time">{hour.hourLabel}</span>
            <img
              className="hourly-icon"
              src={conditionIcons[hour.condition] || cloudIcon}
              alt=""
            />
            <strong className="hourly-temp">{hour.temp}°</strong>
            <div className="hourly-rain-wrap">
              <span className="hourly-rain-text">{hour.rainChance}%</span>
              <div className="hourly-rain-bar">
                <div
                  className="hourly-rain-fill"
                  style={{ height: `${Math.max(4, hour.rainChance)}%` }}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HourlyForecastStrip
