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
    <section className="panel forecast-panel" aria-label="7-day forecast">
      <h2>7-Day Forecast for {location.name}</h2>

      {status === 'loading' && (
        <p className="forecast-message">Loading latest forecast...</p>
      )}

      {status === 'error' && (
        <p className="forecast-message">
          Unable to load the latest forecast right now.
        </p>
      )}

      <div className="forecast-strip">
        {forecastDays.map((day) => (
          <article className="forecast-card" key={day.date}>
            <img src={forecastIcons[day.condition]} alt="" />
            <strong>{day.day}</strong>
            <span>{day.maxTemp}&deg; / {day.minTemp}&deg;</span>
            <small>{day.rainChance}% rain</small>
            <span className="sr-only">{day.label}</span>
          </article>
        ))}
      </div>
    </section>
  )
}
