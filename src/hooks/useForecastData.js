import { useEffect, useMemo, useState } from 'react'
import { defaultLocation } from '../data/weatherContent'

const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'short' })

const forecastUrl = ({ latitude, longitude }) =>
  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max&timezone=auto`

function getCondition(maxTemp, rainChance) {
  if (rainChance >= 70) return 'storm'
  if (rainChance >= 35) return 'rain'
  if (maxTemp >= 32) return 'sun'
  return 'cloud'
}

function normalizeForecast(data) {
  const daily = data?.daily

  if (!daily?.time?.length) {
    return []
  }

  return daily.time.slice(0, 7).map((date, index) => {
    const maxTemp = Math.round(daily.temperature_2m_max[index])
    const minTemp = Math.round(daily.temperature_2m_min[index])
    const rainChance = daily.precipitation_probability_max[index] ?? 0
    const windSpeed = Math.round(daily.wind_speed_10m_max[index] ?? 0)
    const condition = getCondition(maxTemp, rainChance)

    return {
      date,
      day: dayFormatter.format(new Date(`${date}T00:00:00`)),
      condition,
      maxTemp,
      minTemp,
      rainChance,
      windSpeed,
      label: `${maxTemp} degrees high, ${minTemp} degrees low, ${rainChance}% rain chance, ${windSpeed} kilometers per hour wind`,
    }
  })
}

export function useForecastData(location = defaultLocation) {
  const [forecastDays, setForecastDays] = useState([])
  const [status, setStatus] = useState('loading')

  const apiUrl = useMemo(() => forecastUrl(location), [location])

  useEffect(() => {
    const controller = new AbortController()

    async function loadForecast() {
      setStatus('loading')
      setForecastDays([])

      try {
        const response = await fetch(apiUrl, { signal: controller.signal })

        if (!response.ok) {
          throw new Error(`Open-Meteo request failed: ${response.status}`)
        }

        const data = await response.json()
        setForecastDays(normalizeForecast(data))
        setStatus('ready')
      } catch (error) {
        if (error.name !== 'AbortError') {
          setStatus('error')
        }
      }
    }

    loadForecast()

    return () => controller.abort()
  }, [apiUrl])

  return {
    forecastDays,
    status,
    todayForecast: forecastDays[0],
  }
}
