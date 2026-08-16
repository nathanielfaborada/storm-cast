import { useState } from 'react'
import { Link } from 'react-router-dom'

export function EmergencyBanner() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <section className="emergency-alert-banner" aria-label="Philippine Atmospheric Advisory Alert">
      <div className="alert-badge-row">
        <span className="pulse-indicator" aria-hidden="true" />
        <strong className="alert-tag">PAR MONITORING</strong>
        <span className="alert-text">
          🟢 <strong>Normal Maritime Flow:</strong> No active tropical cyclone inside the Philippine Area of Responsibility today. Southwest monsoon & localized convective storms active.
        </span>
      </div>

      <div className="alert-actions">
        <Link to="/typhoon-history" className="alert-link-btn">
          View TCWS Guide
        </Link>
        <button
          type="button"
          className="alert-close-btn"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss alert banner"
        >
          ×
        </button>
      </div>
    </section>
  )
}

export default EmergencyBanner
