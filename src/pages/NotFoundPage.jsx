import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'

export function NotFoundPage() {
  return (
    <main className="legal-page not-found-page" aria-label="404 Page Not Found">
      <SEO
        title="404 Page Not Found | StormCast PH"
        description="The weather forecast or typhoon archive page you requested cannot be found. Return to StormCast PH Home for Philippine forecasts and radar."
        canonical="https://stormcastph.com/404"
      />

      <section
        className="panel legal-hero-panel"
        style={{
          textAlign: 'center',
          padding: '64px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontSize: '4.5rem',
            fontWeight: 900,
            lineHeight: 1,
            color: '#1f73e8',
            marginBottom: '12px',
          }}
        >
          404
        </div>
        <span
          style={{
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            fontWeight: 800,
            letterSpacing: '0.08em',
            background: '#eef4ff',
            color: '#1f73e8',
            padding: '6px 14px',
            borderRadius: '999px',
            marginBottom: '18px',
          }}
        >
          Forecast Lost in Storm
        </span>

        <h2 style={{ fontSize: '2rem', margin: '0 0 14px', color: '#11131a' }}>
          Page or Weather Archive Not Found
        </h2>

        <p
          style={{
            maxWidth: '520px',
            margin: '0 auto 28px',
            color: '#5f6368',
            fontSize: '1rem',
            lineHeight: 1.6,
          }}
        >
          The page you are looking for may have been moved, renamed, or is
          temporarily unavailable. Use the navigation above or return to the live
          Philippine weather dashboard.
        </p>

        <Link
          to="/"
          className="map-open-link"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 28px',
            fontSize: '1rem',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          <span>←</span> Back to Weather Dashboard
        </Link>
      </section>
    </main>
  )
}

export default NotFoundPage
