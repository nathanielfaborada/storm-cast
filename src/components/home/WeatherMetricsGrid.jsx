import coldIcon from '../../assets/weather/cold.png'
import heatIcon from '../../assets/weather/heat.png'
import rainIcon from '../../assets/weather/rain.png'
import windIcon from '../../assets/weather/wind.png'
import { DynamicWeatherIcon } from './DynamicWeatherIcon'
import styles from './WeatherMetricsGrid.module.css'

export function WeatherMetricsGrid({ currentMetrics, todayForecast }) {
  // Defensive fallback data to ensure continuous permanent rendering
  const temp = currentMetrics?.temp ?? todayForecast?.maxTemp ?? 30
  const feelsLike = currentMetrics?.feelsLike ?? (todayForecast?.maxTemp ? todayForecast.maxTemp + 3 : 33)
  const humidity = currentMetrics?.humidity ?? 75
  const pressure = currentMetrics?.pressure ?? 1012
  const windSpeed = currentMetrics?.windSpeed ?? todayForecast?.windSpeed ?? 12
  const windDirection = currentMetrics?.windDirection ?? 'ENE'
  const rainChance = todayForecast?.rainChance ?? 20
  const maxTemp = todayForecast?.maxTemp ?? 32
  const minTemp = todayForecast?.minTemp ?? 24
  const condition = currentMetrics?.condition || todayForecast?.condition || 'cloud'
  const conditionDesc = currentMetrics?.description || todayForecast?.description || 'Partly Cloudy'

  return (
    <section className={styles.metricsContainer} aria-label="Current atmospheric metrics">
      {/* 1. Fully-Utilized Blue Hero Banner */}
      <div className={styles.heroBanner}>
        {/* Left Side: Primary Temperature, Status, Feels Like */}
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
            Live Observation • Convective Telemetry
          </p>
        </div>

        {/* Right Side: High/Low, Humidity, Pressure, Wind & Dynamic Graphic */}
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

      {/* 2. Responsive 4-Column Metric Grid */}
      <div className={styles.gridCards}>
        {/* Card 1: Rain Probability */}
        <div className={styles.metricCard}>
          <div className={`${styles.iconBox} ${styles.rain}`}>
            <img src={rainIcon} alt="Rain chance" />
          </div>
          <div className={styles.cardInfo}>
            <span className={styles.cardLabel}>Rain Probability</span>
            <strong className={styles.cardValue}>{rainChance}%</strong>
            <span className={styles.cardHint}>Precipitation Likelihood</span>
          </div>
        </div>
        

        {/* Card 2: Wind Velocity */}
        <div className={styles.metricCard}>
          <div className={`${styles.iconBox} ${styles.wind}`}>
            <img src={windIcon} alt="Wind speed" />
          </div>
          <div className={styles.cardInfo}>
            <span className={styles.cardLabel}>Wind Velocity</span>
            <strong className={styles.cardValue}>{windSpeed} km/h {windDirection}</strong>
            <span className={styles.cardHint}>Surface Wind Vector</span>
          </div>
        </div>

        {/* Card 3: Daytime Peak */}
        <div className={styles.metricCard}>
          <div className={`${styles.iconBox} ${styles.heat}`}>
            <img src={heatIcon} alt="Daytime high" />
          </div>
          <div className={styles.cardInfo}>
            <span className={styles.cardLabel}>Daytime Peak</span>
            <strong className={styles.cardValue}>{maxTemp}°C</strong>
            <span className={styles.cardHint}>Max Expected Temp</span>
          </div>
        </div>

        {/* Card 4: Night Minimum (Permanently Rendered) */}
        <div className={styles.metricCard}>
          <div className={`${styles.iconBox} ${styles.cold}`}>
            <img src={coldIcon} alt="Night minimum" />
          </div>
          <div className={styles.cardInfo}>
            <span className={styles.cardLabel}>Night Minimum</span>
            <strong className={styles.cardValue}>{minTemp}°C</strong>
            <span className={styles.cardHint}>Overnight Low Temp</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeatherMetricsGrid
