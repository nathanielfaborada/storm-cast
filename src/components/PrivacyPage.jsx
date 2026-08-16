const privacySections = [
  {
    title: 'Information you enter',
    body: 'When you use the contact form, the name, email address, topic, and message you submit are sent through Web3Forms so the site owner can receive and respond to your message.',
  },
  {
    title: 'Weather and location searches',
    body: 'When you search for a location, the app sends the location text to Open-Meteo geocoding and forecast services. The app does not ask for GPS permission or collect your exact device location.',
  },
  {
    title: 'Wikipedia content',
    body: 'Some educational text is loaded from Wikipedia summaries. Requests may include the topic or page title needed to retrieve that public content.',
  },
  {
    title: 'Advertising placeholders',
    body: 'The current ad areas are placeholders. If Google AdSense or another ad network is added later, that provider may use cookies or similar technologies according to its own policies.',
  },
  {
    title: 'External links',
    body: 'Links to services such as Windy.com, Wikipedia, Open-Meteo, Instagram, LinkedIn, and other external sites open outside StormCast PH and follow their own privacy policies.',
  },
  {
    title: 'Data storage',
    body: 'StormCast PH does not maintain its own user database in this frontend app. Submitted contact messages are handled by the configured form provider.',
  },
]

export function PrivacyPage() {
  return (
    <main className="legal-page" aria-label="Privacy policy">
      <section className="panel legal-hero-panel">
        <span>Privacy</span>
        <h2>Privacy Policy</h2>
        <p>
          This page explains how StormCast PH handles information while you use
          the weather dashboard, typhoon history page, contact form, and
          external data sources.
        </p>
      </section>

      <section className="panel legal-content-panel">
        <div className="legal-updated">Last updated: 2026</div>

        {privacySections.map((section) => (
          <article key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.body}</p>
          </article>
        ))}

        <article>
          <h3>Contact</h3>
          <p>
            For privacy questions or correction requests, use the Contact page
            and choose the appropriate topic.
          </p>
        </article>
      </section>
    </main>
  )
}
