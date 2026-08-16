import { useSearchParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import styles from './TermsPage.module.css'

const conductRules = [
  {
    label: 'Personal & Family Safety Planning',
    status: 'Allowed',
    desc: 'Checking local forecasts, preparing household disaster kits, and monitoring typhoon tracks.',
  },
  {
    label: 'Academic & Classroom Education',
    status: 'Allowed',
    desc: 'Using historical typhoon data and climate insights for research and meteorological learning.',
  },
  {
    label: 'Automated Scraping & Denial of Service',
    status: 'Prohibited',
    desc: 'High-frequency automated bot scraping that degrades server responsiveness for emergency users.',
  },
  {
    label: 'Attribution Removal & Misrepresentation',
    status: 'Prohibited',
    desc: 'Rebranding or falsely claiming ownership of StormCast PH algorithms and synthesized data.',
  },
]

export function TermsPage() {
  const [searchParams] = useSearchParams()
  const viewParam = searchParams.get('view')
  const activeMobileView = viewParam === 'governance' ? 'governance' : 'agreement'

  return (
    <main
      className={`${styles.dashboardContainer} grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-0 pt-0 w-full max-w-full min-w-0 overflow-x-hidden`}
      aria-label="StormCast PH Terms and Conditions of Service"
    >
      <SEO
        title="Terms of Service & Emergency Disclaimer | StormCast PH"
        description="Official Terms of Service and Emergency Disclaimer for StormCast PH. Review our conditions of use, meteorological limitations of liability, and official warning directives."
        canonical="https://stormcastph.com/terms"
        keywords="StormCast PH terms of service, weather disclaimer, PAGASA emergency waiver, terms and conditions, disaster risk reduction terms"
      />

      {/* ── LEFT COLUMN (Column 1 - 4/12 Col): Terms Hero Banner, Mandatory Disclaimer & Acceptable Use ── */}
      <section
        id="governance"
        className={`${styles.leftPanel} ${activeMobileView !== 'governance' ? styles.mobileHidden : ''} lg:col-span-4 space-y-4 m-0 p-0 w-full min-w-0`}
        aria-label="Terms Overview and Operational Principles"
      >
        {/* 1. Terms Hero Banner */}
        <header className={styles.termsBanner}>
          <div className={styles.bannerTag}>
            <span className={styles.pulseDot} aria-hidden="true" />
            <span>Legal Governance Standards</span>
          </div>
          <h1 className={styles.bannerTitle}>Terms of Service &amp; Conditions</h1>
          <p className={styles.bannerText}>
            Operational conditions, open-access meteorological guidelines, and limitation of liability governing all users of StormCast PH.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Access Model</span>
              <strong className={styles.statVal}>100% Free</strong>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Platform Role</span>
              <strong className={styles.statVal}>Educational</strong>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Bot Scraping</span>
              <strong className={styles.statVal}>Prohibited</strong>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Governing Law</span>
              <strong className={styles.statVal}>Rep. Philippines</strong>
            </div>
          </div>
        </header>

        {/* 2. Mandatory Non-Agency Emergency Disclaimer */}
        <article className={styles.disclaimerCard} aria-label="Emergency Mandatory Disclaimer">
          <div className={styles.cardHeaderStack}>
            <div className={styles.badgeRow}>
              <span className={styles.disclaimerTag}>⚠️ Critical Mandate</span>
              <span className={styles.disclaimerSubtag}>Emergency Orders</span>
            </div>
            <strong className={styles.disclaimerTitle}>Non-Agency Disaster Disclaimer</strong>
          </div>
          <p className={styles.disclaimerText}>
            StormCast PH is <strong>NOT</strong> an official government disaster dispatch agency or civil defense operator. For <strong>binding evacuation mandates, Tropical Cyclone Wind Signals (TCWS #1 to #5), and school/work cancellations</strong>, always follow <strong>DOST-PAGASA</strong>, the <strong>NDRRMC</strong>, and your <strong>LGU</strong>.
          </p>
        </article>

        {/* 3. Acceptable Use & Conduct Matrix */}
        <article className={styles.conductCard} aria-label="Acceptable Use Policy">
          <div className={styles.cardHeaderStack}>
            <div className={styles.badgeRow}>
              <span className={styles.topBadgeConduct}>📋 Conduct Matrix</span>
              <span className={styles.sourceBadgeConduct}>Usage Rules</span>
            </div>
            <h2 className={styles.cardTitle}>Acceptable Use Matrix</h2>
          </div>
          <div className={styles.conductList}>
            {conductRules.map((rule) => (
              <div key={rule.label} className={styles.conductItem}>
                <div className={styles.conductTop}>
                  <strong className={styles.conductLabel}>{rule.label}</strong>
                  <span
                    className={
                      rule.status === 'Allowed'
                        ? styles.conductBadgeAllowed
                        : styles.conductBadgeProhibited
                    }
                  >
                    {rule.status}
                  </span>
                </div>
                <p className={styles.conductDesc}>{rule.desc}</p>
              </div>
            ))}
          </div>
        </article>

        {/* 4. Legal Jurisdiction Card */}
        <article className={styles.jurisdictionCard} aria-label="Governing Law and Jurisdiction">
          <div className={styles.cardHeaderStack}>
            <div className={styles.badgeRow}>
              <span className={styles.topBadgeJurisdiction}>⚖️ Jurisdiction</span>
              <span className={styles.sourceBadgeConduct}>Philippine Law</span>
            </div>
            <h3 className={styles.jurisdictionTitle}>Legal Jurisdiction &amp; Licensing</h3>
          </div>
          <p className={styles.jurisdictionText}>
            These Terms of Service are interpreted under the laws of the Republic of the Philippines. For institutional inquiries or technical licensing, email{' '}
            <a href="mailto:admin@stormcastph.com" className={styles.legalEmailLink}>
              admin@stormcastph.com
            </a>
            .
          </p>
        </article>
      </section>

      {/* ── RIGHT COLUMN (Column 2 - 8/12 Col): Complete Terms Document ── */}
      <section
        id="agreement"
        className={`${styles.rightPanel} ${activeMobileView !== 'agreement' ? styles.mobileHidden : ''} lg:col-span-8 space-y-6 m-0 p-0 w-full min-w-0`}
        aria-label="Full Terms of Service Document"
      >
        <article className={styles.docCard}>
          <div className={styles.cardHeaderStack}>
            <div className={styles.badgeRow}>
              <span className={styles.topBadgeDoc}>📜 Legal Agreement</span>
              <span className={styles.lastUpdatedTag}>Effective: August 2026</span>
            </div>
            <h2 className={styles.docHeaderTitle}>Official Terms of Service Agreement</h2>
            <p className={styles.docHeaderSubtitle}>
              Binding operational conditions, limitation of liability, and open meteorological service provisions.
            </p>
          </div>

          {/* Section 1 */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.numBadge}>1</span>
              <span>Acceptance of Terms &amp; Binding Agreement</span>
            </h3>
            <p className={styles.sectionBody}>
              By browsing, interacting with, or utilizing data from StormCast PH (&ldquo;the Platform,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be legally bound by these Terms and Conditions, applicable Philippine national laws, and international regulations. If you do not accept these terms, you must discontinue use of the platform immediately.
            </p>
          </div>

          {/* Section 2 */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.numBadge}>2</span>
              <span>Educational &amp; Informational Purpose</span>
            </h3>
            <p className={styles.sectionBody}>
              StormCast PH is developed and maintained as an independent, open-access meteorological education and atmospheric awareness platform. All forecasts, radar feeds, climate synthesis panels, and historical case studies are provided exclusively for <strong>general situational awareness and preparedness education</strong>.
            </p>
          </div>

          {/* Section 3 */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.numBadge}>3</span>
              <span>Critical Emergency Advisory &amp; Non-Agency Disclaimer</span>
            </h3>
            <p className={styles.sectionBody}>
              Meteorological models fluctuate rapidly during severe typhoons. Users must strictly distinguish between open educational feeds and legally enforceable government advisories.
            </p>
            <div className={styles.calloutBox}>
              <strong className={styles.calloutTitle}>⚠️ MANDATORY EMERGENCY DIRECTIVE</strong>
              <p className={styles.calloutText}>
                StormCast PH is <strong>NOT</strong> an official government disaster dispatch agency. For legally binding evacuation mandates, official Tropical Cyclone Wind Signals (TCWS #1 to #5), storm surge alerts, and class or work suspensions, you must always obey <strong>DOST-PAGASA</strong>, the <strong>National Disaster Risk Reduction and Management Council (NDRRMC)</strong>, and your respective <strong>Local Government Unit (LGU)</strong>.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.numBadge}>4</span>
              <span>Third-Party Data Continuity &amp; Prediction Accuracy</span>
            </h3>
            <p className={styles.sectionBody}>
              Meteorological models, hourly forecasts, and satellite feeds are retrieved via third-party APIs (including Open-Meteo, Windy.com, and WMO archives). While we implement rigorous validation filters:
            </p>
            <ul className={styles.sectionList}>
              <li>Atmospheric models are subject to rapid environmental unpredictability and chaos theory.</li>
              <li>We do not guarantee uninterrupted platform uptime during catastrophic infrastructure grid failures or power outages.</li>
              <li>Users must never make commercial, aviation, maritime, or life-safety decisions based solely on automated digital models.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.numBadge}>5</span>
              <span>Limitation of Liability &amp; As-Is Warranty Waiver</span>
            </h3>
            <p className={styles.sectionBody}>
              To the maximum extent permitted by applicable Philippine law, StormCast PH, its authors, contributors, and hosting providers shall not be held liable for any direct, indirect, consequential, or punitive damages, loss of property, or personal injury arising out of your access to, reliance upon, or inability to use this platform. The platform is provided on an <strong>&ldquo;AS IS&rdquo;</strong> and <strong>&ldquo;AS AVAILABLE&rdquo;</strong> basis without warranties of any kind.
            </p>
          </div>

          {/* Section 6 */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.numBadge}>6</span>
              <span>Intellectual Property, Attribution &amp; Fair Use</span>
            </h3>
            <p className={styles.sectionBody}>
              All custom frontend designs, original climate synthesis articles, interactive component algorithms, and branding elements are the intellectual property of StormCast PH. Public weather bulletins, tropical cyclone classifications, and historical storm names remain under their respective public domain educational standards.
            </p>
          </div>

          {/* Section 7 */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.numBadge}>7</span>
              <span>Network Security &amp; Anti-Scraping Policy</span>
            </h3>
            <p className={styles.sectionBody}>
              You agree not to perform automated scraping attacks, denial-of-service (DoS) operations, or attempt to reverse-engineer our backend APIs in a manner that degrades platform responsiveness for emergency users during active calamity periods.
            </p>
          </div>

          {/* Section 8 */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.numBadge}>8</span>
              <span>Modifications to Terms &amp; Legal Governance</span>
            </h3>
            <p className={styles.sectionBody}>
              We reserve the right to revise or modify these Terms of Service at any time. Continued use of StormCast PH after updates constitutes acceptance of the modified terms.
            </p>
          </div>
        </article>
      </section>
    </main>
  )
}

export default TermsPage
