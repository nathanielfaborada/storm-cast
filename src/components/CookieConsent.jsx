import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './CookieConsent.module.css'

const STORAGE_KEY = 'stormcast_cookie_consent'

/**
 * CookieConsent Banner — Required for Google AdSense approval.
 *
 * Discloses:
 *  - Use of cookies for site functionality
 *  - Google AdSense / DoubleClick DART third-party advertising cookies
 *  - Link to full Privacy Policy
 *
 * Consent state is persisted to localStorage. The banner does not render
 * on the server (SSR-safe) and only mounts after hydration.
 */
export function CookieConsent() {
  // null = not yet determined (SSR / first paint), 'shown' or 'hidden'
  const [bannerState, setBannerState] = useState(null)

  useEffect(() => {
    // Only runs client-side after hydration
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) {
      setBannerState('shown')
    } else {
      setBannerState('hidden')
    }
  }, [])

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setBannerState('hiding')
    setTimeout(() => setBannerState('hidden'), 320)
  }

  function handleDecline() {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setBannerState('hiding')
    setTimeout(() => setBannerState('hidden'), 320)
  }

  // Don't render anything until we know the consent state (prevents SSR mismatch)
  if (bannerState === null || bannerState === 'hidden') return null

  return (
    <div
      className={`${styles.banner} ${bannerState === 'hiding' ? styles.hiding : styles.visible}`}
      role="dialog"
      aria-modal="false"
      aria-label="Cookie and Privacy Consent"
    >
      <div className={styles.inner}>
        {/* Left: Icon + text */}
        <div className={styles.content}>
          <span className={styles.icon} aria-hidden="true">🍪</span>
          <div className={styles.text}>
            <p className={styles.headline}>
              This site uses cookies for weather services &amp; advertising.
            </p>
            <p className={styles.body}>
              StormCast PH uses functional cookies to deliver forecasts and
              Google AdSense / DoubleClick DART cookies to serve relevant ads.
              Third-party advertisers may also use cookies.{' '}
              <Link to="/privacy-policy" className={styles.policyLink}>
                Learn more in our Privacy Policy.
              </Link>
            </p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className={styles.actions}>
          <button
            type="button"
            id="cookie-accept-btn"
            className={styles.acceptBtn}
            onClick={handleAccept}
          >
            Accept All
          </button>
          <button
            type="button"
            id="cookie-decline-btn"
            className={styles.declineBtn}
            onClick={handleDecline}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
