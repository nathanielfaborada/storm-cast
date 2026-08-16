import { useEffect, useMemo, useState } from 'react'
import { defaultLocation } from '../data/weatherContent'

const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'short' })
const hourFormatter = new Intl.DateTimeFormat('en-US', { hour: 'numeric', hour12: true })

const forecastUrl = ({ latitude, longitude }) =>
  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,surface_pressure,wind_speed_10m,wind_direction_10m,weather_code&hourly=temperature_2m,precipitation_probability,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,uv_index_max,weather_code&timezone=auto`

function getCondition(maxTemp = 30, rainChance = 20, weatherCode = 2) {
  if (weatherCode >= 95) return 'storm'
  if (weatherCode >= 51 || rainChance >= 50) return 'rain'
  if (weatherCode >= 1 && weatherCode <= 3) return 'cloud'
  if (rainChance >= 70) return 'storm'
  if (rainChance >= 35) return 'rain'
  if (maxTemp >= 32) return 'sun'
  return 'cloud'
}

function getWeatherDescription(weatherCode = 2, rainChance = 20) {
  if (weatherCode >= 95) return 'Thunderstorm & Gusts'
  if (weatherCode >= 80) return 'Scattered Rain Showers'
  if (weatherCode >= 61) return 'Moderate to Heavy Rain'
  if (weatherCode >= 51) return 'Light Drizzle / Rain'
  if (weatherCode === 3) return 'Overcast Skies'
  if (weatherCode === 2) return 'Partly Cloudy'
  if (weatherCode === 1) return 'Mainly Clear'
  if (weatherCode === 0) return 'Clear & Sunny'
  if (rainChance >= 60) return 'Rain Expected'
  return 'Fair Tropical Weather'
}

function getWindDirection(deg) {
  if (deg === undefined || deg === null || Number.isNaN(Number(deg))) return 'ENE'
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
  const index = Math.round(Number(deg) / 22.5) % 16
  return directions[index] || 'ENE'
}

// Generates stable 7-day default forecast so UI never flashes empty
function createDefaultDays() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const today = new Date()
  const todayIndex = today.getDay()

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    const dayName = days[(todayIndex + i) % 7]
    const dateString = d.toISOString().split('T')[0]

    return {
      date: dateString,
      day: i === 0 ? 'Today' : dayName,
      condition: i % 2 === 0 ? 'cloud' : 'sun',
      description: i % 2 === 0 ? 'Partly Cloudy' : 'Fair & Warm',
      maxTemp: 32 - (i % 3),
      minTemp: 24 + (i % 2),
      rainChance: 20 + (i * 5) % 40,
      windSpeed: 12 + (i % 4),
      uvIndex: 8,
      label: '32°C high, 24°C low, 20% rain chance',
    }
  })
}

// Generates stable 24-hour default forecast so hourly timeline never unmounts
function createDefaultHourly() {
  const now = new Date()
  const currentHour = now.getHours()

  return Array.from({ length: 24 }, (_, i) => {
    const targetHour = (currentHour + i) % 24
    const isPM = targetHour >= 12
    const displayHour = targetHour % 12 === 0 ? 12 : targetHour % 12
    const ampm = isPM ? 'PM' : 'AM'

    return {
      time: `hour-${i}`,
      hourLabel: i === 0 ? 'Now' : `${displayHour} ${ampm}`,
      temp: 29 + Math.round(Math.sin(i / 3) * 3),
      rainChance: 15 + ((i * 7) % 35),
      condition: i % 3 === 0 ? 'sun' : 'cloud',
      windSpeed: 10 + (i % 5),
    }
  })
}

export const defaultBaselineState = {
  dailyDays: createDefaultDays(),
  currentMetrics: {
    temp: 30,
    feelsLike: 34,
    humidity: 78,
    pressure: 1011,
    windSpeed: 12,
    windDirection: 'ENE',
    precipitation: 0.1,
    weatherCode: 2,
    condition: 'cloud',
    description: 'Partly Cloudy',
  },
  hourlyForecast: createDefaultHourly(),
}

function normalizeForecast(data, fallback = defaultBaselineState) {
  const daily = data?.daily
  const current = data?.current
  const hourly = data?.hourly

  // 1. Process 7-Day Forecast with Defensive Fallbacks
  const dailyDays = (daily?.time && daily.time.length > 0)
    ? daily.time.slice(0, 7).map((date, index) => {
        const maxTemp = Math.round(daily.temperature_2m_max?.[index] ?? 31)
        const minTemp = Math.round(daily.temperature_2m_min?.[index] ?? 24)
        const rainChance = Math.round(daily.precipitation_probability_max?.[index] ?? 20)
        const windSpeed = Math.round(daily.wind_speed_10m_max?.[index] ?? 12)
        const uvIndex = Math.round(daily.uv_index_max?.[index] ?? 7)
        const code = daily.weather_code?.[index] ?? 2
        const condition = getCondition(maxTemp, rainChance, code)
        const description = getWeatherDescription(code, rainChance)

        return {
          date,
          day: dayFormatter.format(new Date(`${date}T00:00:00`)),
          condition,
          description,
          maxTemp,
          minTemp,
          rainChance,
          windSpeed,
          uvIndex,
          label: `${maxTemp}°C high, ${minTemp}°C low, ${rainChance}% rain chance`,
        }
      })
    : fallback.dailyDays

  // 2. Process Current Metrics with Defensive Fallbacks
  const todayFirstDay = dailyDays[0] || fallback.dailyDays[0]
  const currentMetrics = current
    ? {
        temp: Math.round(current.temperature_2m ?? todayFirstDay.maxTemp ?? 30),
        feelsLike: Math.round(current.apparent_temperature ?? (current.temperature_2m ? current.temperature_2m + 3 : 33)),
        humidity: Math.round(current.relative_humidity_2m ?? 75),
        pressure: Math.round(current.surface_pressure ?? 1012),
        windSpeed: Math.round(current.wind_speed_10m ?? todayFirstDay.windSpeed ?? 12),
        windDirection: getWindDirection(current.wind_direction_10m),
        precipitation: Number(current.precipitation ?? 0),
        weatherCode: current.weather_code ?? 2,
        condition: getCondition(current.temperature_2m ?? 30, todayFirstDay.rainChance ?? 20, current.weather_code ?? 2),
        description: getWeatherDescription(current.weather_code ?? 2, todayFirstDay.rainChance ?? 20),
      }
    : fallback.currentMetrics

  // 3. Process 24-Hour Hourly Forecast
  const hourlyForecast = (hourly?.time && hourly.time.length > 0)
    ? hourly.time.slice(0, 24).map((time, idx) => {
        const temp = Math.round(hourly.temperature_2m?.[idx] ?? 29)
        const rainChance = Math.round(hourly.precipitation_probability?.[idx] ?? 20)
        const code = hourly.weather_code?.[idx] ?? 2
        const hourDate = new Date(time)

        return {
          time,
          hourLabel: idx === 0 ? 'Now' : hourFormatter.format(hourDate),
          temp,
          rainChance,
          condition: getCondition(temp, rainChance, code),
          windSpeed: Math.round(hourly.wind_speed_10m?.[idx] ?? 10),
        }
      })
    : fallback.hourlyForecast

  return { dailyDays, currentMetrics, hourlyForecast }
}

export function useForecastData(location = defaultLocation) {
  const [data, setData] = useState(defaultBaselineState)
  const [status, setStatus] = useState('loading')

  const apiUrl = useMemo(() => forecastUrl(location), [location])

  useEffect(() => {
    const controller = new AbortController()

    async function loadForecast() {
      setStatus('loading')

      try {
        const response = await fetch(apiUrl, { signal: controller.signal })

        if (!response.ok) {
          throw new Error(`Open-Meteo request failed: ${response.status}`)
        }

        const json = await response.json()
        setData((prev) => normalizeForecast(json, prev))
        setStatus('ready')
      } catch (error) {
        if (error.name !== 'AbortError') {
          // On network error, retain existing baseline data so UI never collapses
          setStatus('error')
        }
      }
    }

    loadForecast()

    return () => controller.abort()
  }, [apiUrl])

  return {
    forecastDays: data.dailyDays,
    currentMetrics: data.currentMetrics,
    hourlyForecast: data.hourlyForecast,
    status,
    todayForecast: data.dailyDays[0] || defaultBaselineState.dailyDays[0],
  }
}

export default useForecastData
