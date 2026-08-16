import { DynamicWeatherIcon } from './DynamicWeatherIcon'
import { defaultBaselineState } from '../../hooks/useForecastData'
import styles from './HourlyForecastPanel.module.css'

export function HourlyForecastPanel({ hourlyForecast }) {
  // Never unmount: use provided list or fall back to permanent baseline
  const activeHourly = (hourlyForecast && hourlyForecast.length > 0)
    ? hourlyForecast
    : defaultBaselineState.hourlyForecast

  return (
    <section className={styles.panelContainer} aria-label="24-hour hourly forecast">
      <div className={styles.panelHeader}>
        <div className={styles.titleGroup}>
          <div className={styles.titleRow}>
            <span className={styles.clockIcon} aria-hidden="true">⏱️</span>
            <h2 className={styles.title}>24-Hour Atmospheric Outlook</h2>
          </div>
          <p className={styles.subtitle}>Hourly temperature & precipitation probability</p>
        </div>
        <span className={styles.streamBadge}>LIVE 24-HR</span>
      </div>

      {/* Dedicated Momentum Scroll Strip */}
      <div className={styles.scrollStrip}>
        {activeHourly.map((hour, index) => {
          const isFirstHour = index === 0
          return (
            <article
              key={hour.time || index}
              className={`${styles.hourCard} ${isFirstHour ? styles.currentHourCard : ''}`}
            >
              <div className={styles.timeTag}>
                {isFirstHour ? 'Now' : hour.hourLabel}
              </div>

              <div className={styles.iconWrapper} aria-hidden="true">
                <DynamicWeatherIcon
                  condition={hour.condition || 'cloud'}
                  className={styles.hourIconSvg}
                />
              </div>

              <strong className={styles.hourTemp}>{hour.temp}°</strong>

              <div className={styles.rainWrap}>
                <span className={styles.rainText}>
                  {hour.rainChance > 0 ? `💧${hour.rainChance}%` : '0%'}
                </span>
                <div className={styles.rainBar} title={`Rain Chance: ${hour.rainChance}%`}>
                  <div
                    className={styles.rainFill}
                    style={{ height: `${Math.max(6, hour.rainChance)}%` }}
                  />
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default HourlyForecastPanel
