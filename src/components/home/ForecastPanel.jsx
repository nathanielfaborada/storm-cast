import { defaultLocation } from '../../data/weatherContent'
import cloudIcon from '../../assets/weather/forecast-cloud.png'
import rainIcon from '../../assets/weather/forecast-rain.png'
import stormIcon from '../../assets/weather/forecast-storm.png'
import sunIcon from '../../assets/weather/forecast-sun.png'
import { defaultBaselineState } from '../../hooks/useForecastData'
import styles from './ForecastPanel.module.css'

const forecastIcons = {
  cloud: cloudIcon,
  rain: rainIcon,
  storm: stormIcon,
  sun: sunIcon,
}

function formatDayLabel(dayName, isToday) {
  if (isToday) return 'Today'
  if (!dayName) return 'Day'
  const map = {
    Monday: 'Mon',
    Tuesday: 'Tue',
    Wednesday: 'Wed',
    Thursday: 'Thu',
    Friday: 'Fri',
    Saturday: 'Sat',
    Sunday: 'Sun',
  }
  return map[dayName] || dayName.slice(0, 3)
}

function formatDateLabel(dateStr) {
  if (!dateStr) return ''
  const parts = dateStr.split('-')
  if (parts.length === 3) {
    return `${parseInt(parts[1], 10)}/${parseInt(parts[2], 10)}`
  }
  return dateStr.slice(5)
}

export function ForecastPanel({
  forecastDays,
  location = defaultLocation,
}) {
  const activeDays = (forecastDays && forecastDays.length > 0)
    ? forecastDays
    : defaultBaselineState.dailyDays

  return (
    <section className={styles.panelContainer} aria-label="7-day municipal forecast">
      <div className={styles.panelHeader}>
        <div className={styles.titleGroup}>
          <div className={styles.titleRow}>
            <span className={styles.calendarIcon} aria-hidden="true">📅</span>
            <h2 className={styles.title}>7-Day Meteorological Outlook</h2>
          </div>
          <p className={styles.subtitle}>Multi-model daily forecast for {location.name}</p>
        </div>
        <span className={styles.ensembleBadge}>7-DAY ENSEMBLE</span>
      </div>

      <div className={styles.forecastStrip}>
        {activeDays.slice(0, 7).map((day, index) => {
          const isToday = index === 0
          const displayDay = formatDayLabel(day.day, isToday)
          const displayDate = formatDateLabel(day.date)

          return (
            <article
              className={`${styles.forecastCard} ${isToday ? styles.todayHighlight : ''}`}
              key={day.date || `day-${index}`}
            >
              <div className={styles.cardTop}>
                <span className={styles.dayName}>{displayDay}</span>
                <span className={styles.dayDate}>{displayDate}</span>
              </div>

              <div className={styles.iconBox}>
                <img
                  className={styles.weatherIcon}
                  src={forecastIcons[day.condition] || cloudIcon}
                  alt={day.description || day.condition || 'weather condition'}
                />
              </div>

              <div className={styles.tempRange}>
                <span className={styles.maxTemp}>{day.maxTemp ?? 32}°</span>
                <span className={styles.tempDivider}>/</span>
                <span className={styles.minTemp}>{day.minTemp ?? 24}°</span>
              </div>

              <div className={styles.rainPill}>
                <span aria-hidden="true">💧</span>
                <span>{day.rainChance ?? 20}%</span>
              </div>

              <span className={styles.descLabel} title={day.description || 'Fair Weather'}>
                {day.description || 'Fair Weather'}
              </span>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ForecastPanel
