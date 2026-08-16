export function ContactPage() {
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
            We welcome data inquiries, meteorological corrections, and user feedback.
            Reach out to our editorial and development team via email.
          </p>

          <a className="map-open-link" href="mailto:contact@stormcastph.com">
            Email StormCast PH Team
          </a>
        </article>

        <aside className="contact-side">
          <article className="panel contact-card">
            <div className="contact-section-header">
              <span>Platforms</span>
              <h2>Reach out</h2>
            </div>
            <div className="contact-link-list">
              <a href="mailto:contact@stormcastph.com">
                <span>Official Email</span>
                <strong>contact@stormcastph.com</strong>
              </a>
              <a href="mailto:admin@stormcastph.com">
                <span>Inquiries & Compliance</span>
                <strong>admin@stormcastph.com</strong>
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
              follow PAGASA and your local disaster risk reduction office (LDRRMO).
            </p>
          </article>
        </aside>
      </section>
    </main>
  )
}
