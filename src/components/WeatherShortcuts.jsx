import { shortcutCards } from '../data/weatherContent'
import coldIcon from '../assets/weather/cold.png'
import heatIcon from '../assets/weather/heat.png'
import rainIcon from '../assets/weather/rain.png'
import windIcon from '../assets/weather/wind.png'

const shortcutIcons = {
  cold: coldIcon,
  heat: heatIcon,
  rain: rainIcon,
  wind: windIcon,
}

function getShortcutValue(icon, todayForecast, status) {
  if (status === 'loading') return '...'
  if (status === 'error' || !todayForecast) return '--'

  const values = {
    cold: `${todayForecast.minTemp}°C`,
    heat: `${todayForecast.maxTemp}°C`,
    rain: `${todayForecast.rainChance}%`,
    wind: `${todayForecast.windSpeed} km/h`,
  }

  return values[icon]
}

function getShortcutDescription(icon) {
  const descriptions = {
    cold: 'Low',
    heat: 'High',
    rain: 'Rain',
    wind: 'Wind',
  }

  return descriptions[icon]
}

export function WeatherShortcuts({ status, todayForecast }) {
  return (
    <section className="panel shortcut-panel" aria-label="Weather shortcuts">
      {shortcutCards.map((card) => (
        <button type="button" className="shortcut-card" key={card.label}>
          <img src={shortcutIcons[card.icon]} alt="" />
          <strong>{getShortcutValue(card.icon, todayForecast, status)}</strong>
          <span>{getShortcutDescription(card.icon)}</span>
          <span className="sr-only">{card.label}</span>
        </button>
      ))}
    </section>
  )
}
