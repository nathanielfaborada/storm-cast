const termsSections = [
  {
    title: 'Use of the site',
    body: 'StormCast PH is provided for weather awareness, learning, and general reference. You agree to use the site responsibly and not misuse, disrupt, or attempt to damage the app or its connected services.',
  },
  {
    title: 'No emergency guarantee',
    body: 'The app is not a replacement for official weather bulletins, government warnings, evacuation orders, or emergency services. Always follow PAGASA, local government units, and authorized emergency channels.',
  },
  {
    title: 'Third-party data',
    body: 'Forecasts, summaries, satellite links, and contact form handling may rely on third-party providers such as Open-Meteo, Wikipedia, Zoom Earth, and Web3Forms. Their data availability and accuracy are outside the direct control of StormCast PH.',
  },
  {
    title: 'Content accuracy',
    body: 'StormCast PH aims to present useful and accurate information, but weather and typhoon information can change quickly. The app may contain delays, missing data, or summary-level explanations.',
  },
  {
    title: 'External links',
    body: 'The site may link to external websites. StormCast PH is not responsible for the content, security, policies, or availability of those external services.',
  },
  {
    title: 'Changes to these terms',
    body: 'These terms may be updated as the project changes, especially when new data sources, contact services, or advertising providers are added.',
  },
]

export function TermsPage() {
  return (
    <main className="legal-page" aria-label="Terms and conditions">
      <section className="panel legal-hero-panel">
        <span>Terms</span>
        <h2>Terms and Conditions</h2>
        <p>
          These terms explain the basic rules and limitations for using
          StormCast PH as a weather, climate, and typhoon awareness project.
        </p>
      </section>

      <section className="panel legal-content-panel">
        <div className="legal-updated">Last updated: 2026</div>

        {termsSections.map((section) => (
          <article key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.body}</p>
          </article>
        ))}

        <article>
          <h3>Contact</h3>
          <p>
            For questions about these terms, use the Contact page and choose a
            relevant message topic.
          </p>
        </article>
      </section>
    </main>
  )
}
