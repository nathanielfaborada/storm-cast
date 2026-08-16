import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import stormcastLogo from '../assets/stormcast-logo.png'
import { navItems, navSections } from '../data/weatherContent'
import styles from './Navbar.module.css'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Close mobile dropdown automatically on route or search param change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname, location.search])

  function handleLinkNavigation(path) {
    setMobileMenuOpen(false)
    if (path.includes('#')) {
      const hash = path.split('#')[1]
      setTimeout(() => {
        const target = document.getElementById(hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }

  const currentFullUrl = `${location.pathname}${location.search}`

  return (
    <header className={styles.headerWrapper}>
      {/* ── Main Flex Container (max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16) ── */}
      <div className={styles.navContainer}>
        {/* Logo & Title Text (flex-1 min-w-0 container) */}
        <Link to="/" className={styles.brandRow} aria-label="StormCast PH Home">
          <img
            src={stormcastLogo}
            alt="StormCast PH logo"
            className={styles.brandLogo}
          />
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>StormCast PH</span>
            <span className={styles.brandSubtitle}>Weather and Typhoon</span>
          </div>
        </Link>

        {/* Navigation Links (Desktop only: Right Aligned, Text-Only Links) */}
        <nav className={styles.desktopNav} aria-label="Primary site navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger Button (flex-shrink: 0, visible on mobile) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className={styles.hamburgerBtn}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* ── Clean Mobile Dropdown Menu (Full-Width with Groupings) ── */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className={styles.mobileMenuWrapper}
        >
          <div className={styles.mobileMenuContainer}>
            {navSections.map((section) => (
              <div key={section.category} className={styles.mobileNavGroup}>
                <span className={styles.mobileGroupLabel}>{section.category}</span>
                {section.items.map((item) => {
                  const isItemActive = item.path.includes('?')
                    ? currentFullUrl === item.path ||
                      (item.path.startsWith(location.pathname) && !location.search && item.path.includes('forecast')) ||
                      (item.path.startsWith(location.pathname) && !location.search && item.path.includes('archives')) ||
                      (item.path.startsWith(location.pathname) && !location.search && item.path.includes('dynamics')) ||
                      (item.path.startsWith(location.pathname) && !location.search && item.path.includes('plans')) ||
                      (item.path.startsWith(location.pathname) && !location.search && item.path.includes('interactive')) ||
                      (item.path.startsWith(location.pathname) && !location.search && item.path.includes('platform')) ||
                      (item.path.startsWith(location.pathname) && !location.search && item.path.includes('directory')) ||
                      (item.path.startsWith(location.pathname) && !location.search && item.path.includes('agreement')) ||
                      (item.path.startsWith(location.pathname) && !location.search && item.path.includes('policy'))
                    : location.pathname === item.path

                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={`${styles.mobileLink} ${isItemActive ? styles.active : ''}`}
                      onClick={() => handleLinkNavigation(item.path)}
                    >
                      <span aria-hidden="true">{item.icon}</span>
                      <span className={styles.linkTitleText}>{item.label}</span>
                    </NavLink>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
