import { useSearchParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import styles from './PrivacyPage.module.css'

const cookieMatrix = [
  {
    type: '⚙️ Essential Preferences',
    status: 'Active',
    desc: 'Local browser storage for last-searched municipality and UI theme caching.',
  },
  {
    type: '📍 Background GPS Tracking',
    status: 'Disabled',
    desc: 'Zero background GPS coordinate harvesting. Searches use approximate geocoding only.',
  },
  {
    type: '📊 Server Telemetry Logs',
    status: 'Active',
    desc: 'Aggregated IP traffic & load balancer statistics for typhoon server scalability.',
  },
  {
    type: '📢 Advertising Tags',
    status: 'Standard',
    desc: 'Google AdSense DoubleClick DART cookies for relevant storm safety campaigns.',
  },
]

const complianceFrameworks = [
  {
    flag: '🇵🇭',
    name: 'Republic Act No. 10173 (DPA)',
    detail: 'Full adherence to National Privacy Commission (NPC) data principles.',
  },
  {
    flag: '🇪🇺',
    name: 'EU GDPR (Articles 13 & 14)',
    detail: 'Guaranteed access, rectification, and erasure rights for all visitors.',
  },
  {
    flag: '🇺🇸',
    name: 'California CCPA / CPRA',
    detail: 'Zero commercial sale, rental, or brokerage of visitor personal data.',
  },
  {
    flag: '🔒',
    name: 'HTTPS TLS 1.3 Cryptography',
    detail: '256-bit end-to-end encrypted transmission over secure transport layer.',
  },
]

export function PrivacyPage() {
  const [searchParams] = useSearchParams()
  const viewParam = searchParams.get('view')
  const activeMobileView = viewParam === 'compliance' ? 'compliance' : 'policy'

  return (
    <main
      className={`${styles.dashboardContainer} grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-0 pt-0 w-full max-w-full min-w-0 overflow-x-hidden`}
      aria-label="StormCast PH Privacy Policy &amp; Data Governance"
    >
      <SEO
        title="Privacy Policy &amp; Google AdSense Cookie Disclosure | StormCast PH"
        description="Official Privacy Policy for StormCast PH. Read our transparent disclosures regarding Google AdSense cookies, DART technology, location data processing, and user data protection rights."
        canonical="https://stormcastph.com/privacy-policy"
        keywords="StormCast PH privacy policy, Google AdSense cookies, DART cookie opt-out, weather data privacy, GDPR CCPA compliance, RA 10173"
      />

      {/* ── LEFT COLUMN (Column 1 - 4/12 Col): Cookie Matrix & Compliance Standards ── */}
      <section
        id="compliance"
        className={`${styles.leftPanel} ${activeMobileView !== 'compliance' ? styles.mobileHidden : ''} lg:col-span-4 space-y-4 m-0 p-0 w-full min-w-0`}
        aria-label="Privacy Standards and Legal Governance"
      >
        {/* 1. Hero Overview Banner */}
        <header className={styles.privacyBanner}>
          <div className={styles.bannerTag}>
            <span className={styles.pulseDot} aria-hidden="true" />
            <span>Data Protection Standards</span>
          </div>
          <h1 className={styles.bannerTitle}>Privacy Policy &amp; Disclosures</h1>
          <p className={styles.bannerText}>
            Transparent, open-access meteorological data governance aligned with the Philippine Data Privacy Act of 2012 (RA 10173), GDPR, CCPA, and Google AdSense publisher requirements.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Philippine Law</span>
              <strong className={styles.statVal}>RA 10173 (DPA)</strong>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>GPS Tracking</span>
              <strong className={styles.statVal}>Zero Background</strong>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Storage Model</span>
              <strong className={styles.statVal}>Local Device</strong>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Data Sales</span>
              <strong className={styles.statVal}>Zero Brokerage</strong>
            </div>
          </div>
        </header>

        {/* 2. Cookie & Tracking Transparency Matrix */}
        <article className={styles.cookieMatrixCard} aria-label="Cookie and Tracking Matrix">
          <div className={styles.cardHeaderStack}>
            <div className={styles.badgeRow}>
              <span className={styles.topBadgeCookie}>🍪 Cookie Audit</span>
              <span className={styles.sourceBadgePrivacy}>Storage Scope</span>
            </div>
            <h2 className={styles.cardTitle}>Cookie &amp; Tracking Transparency</h2>
          </div>
          <div className={styles.matrixList}>
            {cookieMatrix.map((item) => (
              <div key={item.type} className={styles.matrixItem}>
                <div className={styles.matrixTop}>
                  <strong className={styles.matrixType}>{item.type}</strong>
                  <span
                    className={
                      item.status === 'Disabled'
                        ? styles.matrixBadgeDisabled
                        : styles.matrixBadgeActive
                    }
                  >
                    {item.status}
                  </span>
                </div>
                <p className={styles.matrixDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </article>

        {/* 3. Regulatory Compliance Frameworks */}
        <article className={styles.complianceCard} aria-label="Regulatory Compliance Badges">
          <div className={styles.cardHeaderStack}>
            <div className={styles.badgeRow}>
              <span className={styles.topBadgeCompliance}>⚖️ Legal Standards</span>
              <span className={styles.sourceBadgePrivacy}>Global Protections</span>
            </div>
            <h2 className={styles.cardTitle}>Regulatory Compliance Standards</h2>
          </div>
          <div className={styles.complianceList}>
            {complianceFrameworks.map((law) => (
              <div key={law.name} className={styles.complianceItem}>
                <span className={styles.complianceFlag} aria-hidden="true">{law.flag}</span>
                <div className={styles.complianceBody}>
                  <strong className={styles.complianceName}>{law.name}</strong>
                  <span className={styles.complianceDetail}>{law.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* 4. Data Lifecycle & Retention Summary */}
        <article className={styles.retentionCard} aria-label="Data Lifecycle and Retention">
          <div className={styles.cardHeaderStack}>
            <div className={styles.badgeRow}>
              <span className={styles.topBadgeRetention}>🗄️ Lifecycle</span>
              <span className={styles.sourceBadgePrivacy}>Auto-Purge</span>
            </div>
            <h2 className={styles.cardTitle}>Data Retention Lifecycle</h2>
          </div>
          <div className={styles.retentionList}>
            <div className={styles.retentionItem}>
              <span className={styles.retentionLabel}>Searched Cities:</span>
              <strong className={styles.retentionVal}>Client Device Only</strong>
            </div>
            <div className={styles.retentionItem}>
              <span className={styles.retentionLabel}>Server Traffic Logs:</span>
              <strong className={styles.retentionVal}>30-Day Auto-Purge</strong>
            </div>
            <div className={styles.retentionItem}>
              <span className={styles.retentionLabel}>Account Database:</span>
              <strong className={styles.retentionVal}>None (Zero Profiling)</strong>
            </div>
          </div>
        </article>
      </section>

      {/* ── RIGHT COLUMN (Column 2 - 8/12 Col): Legal Policy Articles ── */}
      <section
        id="policy"
        className={`${styles.rightPanel} ${activeMobileView !== 'policy' ? styles.mobileHidden : ''} lg:col-span-8 space-y-6 m-0 p-0 w-full min-w-0`}
        aria-label="Full Privacy Policy Document"
      >
        <article className={styles.docCard}>
          <div className={styles.cardHeaderStack}>
            <div className={styles.badgeRow}>
              <span className={styles.topBadgeDoc}>🔒 Privacy Governance</span>
              <span className={styles.lastUpdatedTag}>Effective: August 2026</span>
            </div>
            <h2 className={styles.docHeaderTitle}>Official Privacy Governance Document</h2>
            <p className={styles.docHeaderSubtitle}>
              Comprehensive data handling transparency, Google AdSense cookie disclosures, and user rights.
            </p>
          </div>

          {/* Section 1 */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.numBadge}>1</span>
              <span>Commitment to User Privacy</span>
            </h3>
            <p className={styles.sectionBody}>
              StormCast PH (&ldquo;the Platform,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is dedicated to maintaining rigorous privacy standards. This policy details our data handling protocols in strict compliance with the <strong>Philippine Data Privacy Act of 2012 (Republic Act No. 10173)</strong>, the European Union General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and Google AdSense Publisher Policies.
            </p>
          </div>

          {/* Section 2 */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.numBadge}>2</span>
              <span>Google AdSense &amp; Third-Party Advertising (DART Cookies)</span>
            </h3>
            <p className={styles.sectionBody}>
              We partner with Google AdSense and accredited third-party advertising networks to serve advertisements across our platform.
            </p>
            <ul className={styles.sectionList}>
              <li>
                <strong>Google DART Cookie:</strong> Google is a third-party vendor on StormCast PH. Google uses cookies, specifically the DoubleClick DART cookie, to serve tailored advertisements to visitors based upon their visits to StormCast PH and other websites across the Internet.
              </li>
              <li>
                <strong>User Opt-Out Channels:</strong> Visitors may opt out of the use of the DART cookie and personalized advertising by visiting the{' '}
                <a
                  href="https://policies.google.com/technologies/ads"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.externalLink}
                >
                  Google Advertising and Privacy Policy ↗
                </a>{' '}
                or by visiting the Network Advertising Initiative Opt-Out portal at{' '}
                <a
                  href="https://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.externalLink}
                >
                  aboutads.info/choices ↗
                </a>
                .
              </li>
              <li>
                <strong>Third-Party Ad Servers:</strong> Other third-party ad servers or ad networks may also use cookies, JavaScript, or Web Beacons in their respective advertisements to measure campaign effectiveness. StormCast PH has no access to or control over cookies used by third-party advertisers.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.numBadge}>3</span>
              <span>Municipal Geolocation &amp; Weather Search Queries</span>
            </h3>
            <p className={styles.sectionBody}>
              When searching for weather forecasts, the city or municipal name you type is sent directly to Open-Meteo geocoding services to retrieve approximate latitude and longitude coordinates.
            </p>
            <ul className={styles.sectionList}>
              <li>
                StormCast PH <strong>does not</strong> silently collect, store, or track your device&apos;s background GPS coordinates.
              </li>
              <li>
                Searched locations are stored strictly in your local browser storage (session storage) to provide instant reload performance and are never transmitted to commercial profiling databases.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.numBadge}>4</span>
              <span>Automated Server Logs &amp; Performance Analytics</span>
            </h3>
            <p className={styles.sectionBody}>
              Like most standard online services, our hosting infrastructure records standard server log files. This information includes Internet Protocol (IP) addresses, browser user-agent strings, date/time stamps, referring/exit pages, and platform click counts. This non-personally identifiable telemetry is analyzed exclusively to ensure server scalability, DDoS defense, and load balancing during severe typhoon events.
            </p>
          </div>

          {/* Section 5 */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.numBadge}>5</span>
              <span>User Data Protection Rights (GDPR &amp; CCPA)</span>
            </h3>
            <p className={styles.sectionBody}>
              Every user is entitled to specific fundamental data protection rights:
            </p>
            <ul className={styles.sectionList}>
              <li><strong>Right to Access:</strong> You may request confirmation regarding whether your data is processed.</li>
              <li><strong>Right to Erasure:</strong> You may request the deletion of any submitted communications.</li>
              <li><strong>Right to Restrict Processing:</strong> You may object to specific data processing operations.</li>
              <li><strong>Do Not Sell My Information (CCPA):</strong> StormCast PH does not sell, rent, or trade any personal user data to commercial data brokers.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className={styles.sectionBlock}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.numBadge}>6</span>
              <span>External Services &amp; Embedded Links</span>
            </h3>
            <p className={styles.sectionBody}>
              Our platform contains references and outbound links to external authorities including DOST-PAGASA, Windy.com, Open-Meteo, and Wikipedia. We strongly encourage users to review the respective privacy documentation of any third-party website they visit.
            </p>
          </div>
        </article>
      </section>
    </main>
  )
}

export default PrivacyPage
