import { defaultLocation } from '../data/weatherContent'
import cloudIcon from '../assets/weather/forecast-cloud.png'
import rainIcon from '../assets/weather/forecast-rain.png'
import stormIcon from '../assets/weather/forecast-storm.png'
import sunIcon from '../assets/weather/forecast-sun.png'

const forecastIcons = {
  cloud: cloudIcon,
  rain: rainIcon,
  storm: stormIcon,
  sun: sunIcon,
}

export function ForecastStrip({ forecastDays, location = defaultLocation, status }) {
  return (
    <section className="panel forecast-panel modern-forecast-panel" aria-label="7-day municipal forecast">
      <div className="forecast-panel-header">
        <div>
          <h2>7-Day Meteorological Outlook</h2>
          <p>Multi-model daily forecast for {location.name}</p>
        </div>
        <span className="forecast-accuracy-badge">7-Day Ensembles</span>
      </div>

      {status === 'loading' && (
        <p className="forecast-message">Loading latest forecast...</p>
      )}

      {status === 'error' && (
        <p className="forecast-message">
          Unable to load the latest forecast right now. Please verify network connection.
        </p>
      )}

      <div className="forecast-strip modern-forecast-strip">
        {forecastDays.map((day, index) => {
          const isToday = index === 0
          return (
            <article
              className={`forecast-card modern-forecast-card ${isToday ? 'today-highlight' : ''}`}
              key={day.date}
            >
              <div className="forecast-card-top">
                <span className="forecast-day-name">{isToday ? 'Today' : day.day}</span>
                <span className="forecast-day-date">{day.date.slice(5)}</span>
              </div>

              <img
                className="forecast-weather-icon"
                src={forecastIcons[day.condition] || cloudIcon}
                alt={day.description || day.condition}
              />

              <div className="forecast-temp-range">
                <span className="forecast-max-temp">{day.maxTemp}°</span>
                <span className="forecast-temp-divider">/</span>
                <span className="forecast-min-temp">{day.minTemp}°</span>
              </div>

              <div className="forecast-rain-pill">
                <span className="rain-drop-symbol">💧</span>
                <span>{day.rainChance}% rain</span>
              </div>

              <span className="forecast-desc-label">{day.description || 'Fair Weather'}</span>
              <span className="sr-only">{day.label}</span>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ForecastStrip
