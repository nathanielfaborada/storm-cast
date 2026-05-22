import { useState } from 'react'
import './App.css'
import { AboutPage } from './components/AboutPage'
import { ClimatePanel } from './components/ClimatePanel'
import { ForecastStrip } from './components/ForecastStrip'
import { GoogleAdSlot } from './components/GoogleAdSlot'
import { Header } from './components/Header'
import { PrivacyPage } from './components/PrivacyPage'
import { SearchBar } from './components/SearchBar'
import { TermsPage } from './components/TermsPage'
import { TyphoonHistoryPage } from './components/TyphoonHistoryPage'
import { TyphoonTracker } from './components/TyphoonTracker'
import { WeatherShortcuts } from './components/WeatherShortcuts'
import { defaultLocation } from './data/weatherContent'
import { useForecastData } from './hooks/useForecastData'

const geocodingUrl = (query) =>
  `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    query,
  )}&count=1&language=en&format=json`

function ContactPage() {
  return (
    <main className="contact-page" aria-label="Contact StormCast PH">
      <section className="panel contact-hero-panel">
        <div>
          <span>Contact</span>
          <h2>Send a note about weather data, typhoon history, or the site.</h2>
          <p>
            Use this page for feedback, corrections, collaboration, or general
            questions about StormCast PH.
          </p>
        </div>
      </section>

      <section className="contact-grid">
        <article className="panel contact-form">
          <div className="contact-section-header">
            <span>Message</span>
            <h2>Send a note</h2>
          </div>

          <p>
            The contact form provider is not configured in this local build.
            For now, send your message directly by email.
          </p>

          <a className="map-open-link" href="mailto:hello@niela.com">
            Email StormCast PH
          </a>
        </article>

        <aside className="contact-side">
          <article className="panel contact-card">
            <div className="contact-section-header">
              <span>Platforms</span>
              <h2>Reach out</h2>
            </div>
            <div className="contact-link-list">
              <a href="mailto:hello@niela.com">
                <span>Email</span>
                <strong>hello@niela.com</strong>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <span>LinkedIn</span>
                <strong>linkedin</strong>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <span>Instagram</span>
                <strong>instagram</strong>
              </a>
              <a href="https://www.indeed.com/" target="_blank" rel="noreferrer">
                <span>Indeed</span>
                <strong>indeed</strong>
              </a>
            </div>
          </article>

          <article className="panel contact-card emergency-note">
            <div className="contact-section-header">
              <span>Reminder</span>
              <h2>For emergencies</h2>
            </div>
            <p>
              StormCast PH is not an emergency response channel. For urgent
              weather warnings, evacuation notices, and official advisories,
              follow PAGASA and your local government unit.
            </p>
          </article>
        </aside>
      </section>
    </main>
  )
}

function HomePage({
  forecastDays,
  location,
  onLocationClear,
  onLocationSearch,
  searchError,
  searchStatus,
  status,
  todayForecast,
}) {
  return (
    <main className="dashboard">
      <section className="left-column">
        <ClimatePanel />
        <GoogleAdSlot className="sidebar-google-ad" label="Climate sponsor" />
      </section>

      <section className="right-column">
        <SearchBar
          location={location}
          onClear={onLocationClear}
          onSearch={onLocationSearch}
          searchError={searchError}
          searchStatus={searchStatus}
          todayForecast={todayForecast}
        />

        <div className="top-grid">
          <WeatherShortcuts status={status} todayForecast={todayForecast} />
          <GoogleAdSlot className="wide-google-ad" label="Weather sponsor" />
        </div>

        <ForecastStrip
          forecastDays={forecastDays}
          location={location}
          status={status}
        />
        <GoogleAdSlot className="inline-google-ad" label="Forecast sponsor" />
        <TyphoonTracker />
      </section>
    </main>
  )
}

function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <p>
        <span>
          © 2026 <strong>niela.com</strong>
        </span>
        <span>•</span>
        <button type="button" onClick={() => onNavigate('Privacy')}>
          privacy
        </button>
        <span>•</span>
        <button type="button" onClick={() => onNavigate('Terms')}>
          terms and conditions
        </button>
      </p>

      
    </footer>
  )
}

export default function App() {
  const [activePage, setActivePage] = useState('Home')
  const [location, setLocation] = useState(defaultLocation)
  const [searchStatus, setSearchStatus] = useState('idle')
  const [searchError, setSearchError] = useState('')
  const { forecastDays, status, todayForecast } = useForecastData(location)

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

  function handleNavigate(page) {
    setActivePage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function renderPage() {
    if (activePage === 'Typhoon History') return <TyphoonHistoryPage />
    if (activePage === 'About') return <AboutPage />
    if (activePage === 'Contact') return <ContactPage />
    if (activePage === 'Privacy') return <PrivacyPage />
    if (activePage === 'Terms') return <TermsPage />

    return (
      <HomePage
        forecastDays={forecastDays}
        location={location}
        onLocationClear={handleSearchClear}
        onLocationSearch={handleLocationSearch}
        searchError={searchError}
        searchStatus={searchStatus}
        status={status}
        todayForecast={todayForecast}
      />
    )
  }

  return (
    <div className="app-shell">
      <Header activePage={activePage} onNavigate={handleNavigate} />
      {renderPage()}
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}
