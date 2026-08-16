import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="legal-page not-found-page" aria-label="Page Not Found">
      <section className="panel legal-hero-panel" style={{ textAlign: 'center', padding: '60px 24px' }}>
        <span style={{ fontSize: '1.2rem', color: '#1f73e8', fontWeight: 700 }}>404 Error</span>
        <h2 style={{ fontSize: '2.5rem', margin: '16px 0' }}>Page Not Found</h2>
        <p style={{ maxWidth: '540px', margin: '0 auto 28px', color: '#555' }}>
          The weather forecast or typhoon archive page you are looking for does not exist or has been relocated.
        </p>
        <Link
          to="/"
          className="map-open-link"
          style={{ display: 'inline-block', padding: '12px 28px', textDecoration: 'none' }}
        >
          Return to Weather Dashboard
        </Link>
      </section>
    </main>
  )
}
