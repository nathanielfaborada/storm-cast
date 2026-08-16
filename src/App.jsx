import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ScrollToTop } from './components/ScrollToTop'
import { defaultLocation } from './data/weatherContent'
import { useForecastData } from './hooks/useForecastData'

// Pages
import { AboutPage } from './pages/AboutPage'
import { ClimateInsightsPage } from './pages/ClimateInsightsPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { LiveRadarPage } from './pages/LiveRadarPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PreparednessHubPage } from './pages/PreparednessHubPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'
import { TyphoonHistoryPage } from './pages/TyphoonHistoryPage'

const geocodingUrl = (query) =>
  `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    query,
  )}&count=1&language=en&format=json`

export default function App() {
  const [location, setLocation] = useState(defaultLocation)
  const [searchStatus, setSearchStatus] = useState('idle')
  const [searchError, setSearchError] = useState('')
  const { currentMetrics, forecastDays, hourlyForecast, status, todayForecast } =
    useForecastData(location)

  async function handleLocationSearch(query) {
    const trimmedQuery = query.trim()

    if (!trimmedQuery) {
      setSearchError('Type a city or municipality.')
      return
    }

    setSearchStatus('searching')
    setSearchError('')

    try {
      const response = await fetch(geocodingUrl(trimmedQuery))

      if (!response.ok) {
        throw new Error('Search failed.')
      }

      const data = await response.json()
      const result = data.results?.[0]

      if (!result) {
        setSearchError('Location not found.')
        setSearchStatus('idle')
        return
      }

      const adminName = result.admin1 ? `, ${result.admin1}` : ''
      const countryName = result.country ? `, ${result.country}` : ''

      setLocation({
        name: `${result.name}${adminName}${countryName}`,
        latitude: result.latitude,
        longitude: result.longitude,
      })
      setSearchStatus('idle')
    } catch (error) {
      setSearchError(error.message || 'Unable to search right now.')
      setSearchStatus('idle')
    }
  }

  function handleSearchClear() {
    setLocation(defaultLocation)
    setSearchError('')
    setSearchStatus('idle')
  }

  return (
    <div className="app-shell">
      <ScrollToTop />
      <Navbar />
      <div className="main-content">
        <Routes>
          {/* 1. Home Dashboard */}
          <Route
            path="/"
            element={
              <HomePage
                currentMetrics={currentMetrics}
                forecastDays={forecastDays}
                hourlyForecast={hourlyForecast}
                location={location}
                onLocationClear={handleSearchClear}
                onLocationSearch={handleLocationSearch}
                searchError={searchError}
                searchStatus={searchStatus}
                status={status}
                todayForecast={todayForecast}
              />
            }
          />

          {/* 2. Typhoon History & Case Studies */}
          <Route path="/history" element={<TyphoonHistoryPage />} />
          <Route path="/typhoon-history" element={<Navigate to="/history" replace />} />
          <Route path="/typhoons" element={<Navigate to="/history" replace />} />

          {/* 3. Climate Insights */}
          <Route path="/climate" element={<ClimateInsightsPage />} />
          <Route path="/climate-insights" element={<Navigate to="/climate" replace />} />

          {/* 4. Preparedness Hub */}
          <Route path="/preparedness" element={<PreparednessHubPage />} />
          <Route path="/disaster-preparedness" element={<Navigate to="/preparedness" replace />} />

          {/* 5. Live Radar */}
          <Route path="/radar" element={<LiveRadarPage />} />
          <Route path="/satellite-radar" element={<Navigate to="/radar" replace />} />

          {/* 6. About Platform */}
          <Route path="/about" element={<AboutPage />} />

          {/* 7. Emergency & Contact */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/hotlines" element={<Navigate to="/contact?view=hotlines" replace />} />
          <Route path="/emergency" element={<Navigate to="/contact?view=hotlines" replace />} />
          <Route path="/emergency-hotlines" element={<Navigate to="/contact?view=hotlines" replace />} />
          <Route path="/directory" element={<Navigate to="/contact?view=directory" replace />} />

          {/* Legal & Auxiliary */}
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
