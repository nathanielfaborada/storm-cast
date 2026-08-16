import { useSearchParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import styles from './AboutPage.module.css'

const coreFeatures = [
  {
    icon: '🌤️',
    title: '7-Day Municipal Forecasts',
    desc: 'High-precision Numerical Weather Prediction (NWP) calibrated for Philippine topography with hourly rain probability, thermal heat index, dew point, and barometric pressure.',
  },
  {
    icon: '🌀',
    title: 'PAGASA-Aligned TCWS Signals',
    desc: 'Dynamic Tropical Cyclone Wind Signal (TCWS #1 to #5) contextualization, track forecasts, sustained winds, and severe weather warning advisories.',
  },
  {
    icon: '📜',
    title: 'Historical Typhoon Archive',
    desc: 'Curated repository of Western Pacific tropical cyclone case studies, landfall barometric pressures, storm surge heights, and disaster mitigation lessons from 1970 to 2026.',
  },
  {
    icon: '💧',
    title: 'Disaster Preparedness Suite',
    desc: 'Interactive 72-hour household water and emergency supply estimators, offline emergency radio dials, and family evacuation plan workflows.',
  },
  {
    icon: '📡',
    title: 'Live Multi-Layer Radar',
    desc: 'Real-time Doppler precipitation reflectivity (dBZ), Himawari-9 infrared cloud-top temperatures, and atmospheric vector wind streams.',
  },
  {
    icon: '🌏',
    title: 'Philippine Climate Dynamics',
    desc: 'In-depth climatological breakdowns of the Southwest Monsoon (Habagat), Northeast Monsoon (Amihan), ITCZ, and Western Pacific Warm Pool rapid intensification.',
  },
]

const technicalSources = [
  {
    name: 'DOST-PAGASA (Official Baseline)',
    detail: 'Philippine Atmospheric, Geophysical and Astronomical Services Administration baseline storm classification standards, local naming schemes, and TCWS protocols.',
  },
  {
    name: 'Open-Meteo & ECMWF Ensembles',
    detail: 'Aggregates global Numerical Weather Prediction (NWP) ensembles including ECMWF (European Centre) and GFS (Global Forecast System) at high spatial resolution.',
  },
  {
    name: 'Himawari-9 Geosynchronous Satellite',
    detail: 'High-frequency multispectral infrared and visible satellite storm feeds monitored across the Western Pacific and Philippine Area of Responsibility (PAR).',
  },
  {
    name: 'Project NOAH & MGB Hazard Databases',
    detail: 'Terrain elevation, river catchment hydrology, and landslide susceptibility data for localized vulnerability context.',
  },
]

const meteorologicalFaqs = [
  {
    question: 'How do PAGASA Tropical Cyclone Wind Signals (TCWS) work?',
    answer:
      'TCWS alerts warn communities of impending tropical cyclone winds. Signal #1 (39–61 km/h within 36h), Signal #2 (62–88 km/h within 24h), Signal #3 (89–117 km/h within 18h), Signal #4 (118–184 km/h within 12h), and Signal #5 (≥185 km/h within 12h). Lead times allow LGUs and residents to execute timely evacuations.',
  },
  {
    question: 'Why is the Western Pacific Warm Pool so dangerous for typhoons?',
    answer:
      'The Western Pacific Warm Pool maintains year-round Sea Surface Temperatures (SST) above 28°C–29.5°C to depths exceeding 100 meters. This provides an immense thermodynamic engine that fuels Rapid Intensification (RI), transforming tropical storms into Super Typhoons within 24 hours.',
  },
  {
    question: 'What is the difference between Temperature and Heat Index?',
    answer:
      'Ambient temperature measures actual dry-bulb air temperature. Heat Index calculates how hot the human body actually feels when relative humidity is factored in. High humidity prevents sweat evaporation, significantly increasing the risk of heat exhaustion and heat stroke above 42°C.',
  },
  {
    question: 'How does Doppler Radar Reflectivity (dBZ) measure rainfall?',
    answer:
      'Doppler radars emit microwave pulses that bounce off airborne raindrops. The power reflected back (measured in decibels of reflectivity or dBZ) indicates rain intensity: 15–30 dBZ (light rain), 30–45 dBZ (moderate to heavy), and >50 dBZ (torrential downpour or severe convective hail).',
  },
]

const climateHighlights = [
  {
    icon: '🌊',
    title: 'Western Pacific Warm Pool',
    tag: 'SST > 28°C–29.5°C',
    desc: 'Deep thermal ocean layer providing thermodynamic energy that fuels Rapid Intensification (RI), transforming tropical storms into Super Typhoons within 24 hours.',
  },
  {
    icon: '🌧️',
    title: 'Southwest Monsoon (Habagat)',
    tag: 'May to October',
    desc: 'Warm, highly saturated equatorial air mass causing sustained torrential rains, enhanced habagat flooding, and active monsoon troughs.',
  },
  {
    icon: '❄️',
    title: 'Northeast Monsoon (Amihan)',
    tag: 'November to February',
    desc: 'Cool, dry continental air from the Siberian High, delivering brisk night winds and localized orographic precipitation along eastern seaboards.',
  },
  {
    icon: '⛰️',
    title: 'Sierra Madre Mountain Spine',
    tag: 'Topographic Barrier',
    desc: 'Eastern Luzon mountain spine that physically disrupts cyclonic wind circulation, weakening incoming Pacific typhoons before reaching Central Luzon plains.',
  },
]

export function AboutPage() {
  const [searchParams] = useSearchParams()
  const viewParam = searchParams.get('view')
  const activeMobileView = viewParam === 'mandate' ? 'mandate' : 'platform'

  return (
    <main
      className={`${styles.dashboardContainer} grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-0 pt-0 w-full max-w-full min-w-0 overflow-x-hidden`}
      aria-label="About StormCast PH Platform and Meteorological Standards"
    >
      <SEO
        title="About StormCast PH | Mission, Climatology & Data Transparency"
        description="Learn about StormCast PH's mission to deliver accessible Philippine weather intelligence, meteorological data sources, and community disaster preparedness education."
        canonical="https://stormcastph.com/about"
        keywords="StormCast PH about, Philippine climatology, Open-Meteo models, PAGASA DOST data, weather forecasting methodology, disaster risk reduction"
      />

      {/* ── LEFT COLUMN (Column 1 - 4/12 Col): Mission Mandate & Data Sources Attribution ── */}
      <section
        id="mandate"
        className={`${styles.leftPanel} ${activeMobileView !== 'mandate' ? styles.mobileHidden : ''} lg:col-span-4 space-y-4 m-0 p-0 w-full min-w-0`}
        aria-label="Platform Mission and Official Guidelines"
      >
        {/* 1. Mission Hero Banner */}
        <header className={styles.missionBanner}>
          <div className={styles.bannerTag}>
            <span className={styles.pulseDot} aria-hidden="true" />
            <span>Open Weather Intelligence</span>
          </div>
          <h1 className={styles.missionTitle}>About StormCast PH</h1>
          <p className={styles.missionText}>
            StormCast PH is an open-access Philippine meteorological intelligence and disaster preparedness platform engineered to deliver high-precision weather monitoring, historical typhoon case studies, and actionable survival tools.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Target Region</span>
              <strong className={styles.statVal}>Archipelago</strong>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Access Model</span>
              <strong className={styles.statVal}>100% Free</strong>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Data Calibrations</span>
              <strong className={styles.statVal}>PAGASA / ECMWF</strong>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Preparedness Suite</span>
              <strong className={styles.statVal}>Offline-Ready</strong>
            </div>
          </div>
        </header>

        {/* 2. Official Advisory Notice */}
        <article className={styles.advisoryCard} aria-label="Official Disaster Warning Mandate">
          <div className={styles.cardHeaderStack}>
            <div className={styles.badgeRow}>
              <span className={styles.advisoryTag}>⚠️ Official Mandate</span>
              <span className={styles.advisoryPrecedence}>Legal Precedence</span>
            </div>
            <strong className={styles.advisoryTitle}>Emergency Decisions &amp; Warnings</strong>
          </div>
          <p className={styles.advisoryText}>
            StormCast PH is designed for educational awareness, community preparedness, and meteorological analysis. For <strong>legally binding evacuation orders, class or work suspensions, and official hazard warnings</strong>, always follow <strong>DOST-PAGASA</strong>, the <strong>NDRRMC</strong>, and your <strong>Local Government Unit (LGU)</strong>.
          </p>
        </article>

        {/* 3. Data Sources & Transparency */}
        <article className={styles.sourcesCard} aria-label="Meteorological Data Attribution">
          <div className={styles.cardHeaderStack}>
            <div className={styles.badgeRow}>
              <span className={styles.topBadgeSources}>📚 Data Attribution</span>
              <span className={styles.sourceBadgeOverview}>Science Partners</span>
            </div>
            <h3 className={styles.sourcesTitle}>Meteorological Data Sources</h3>
            <p className={styles.sourcesSubtitle}>
              Institutional feeds, numerical forecasting ensembles, and geosynchronous satellite telemetry.
            </p>
          </div>

          <div className={styles.sourceItems}>
            {technicalSources.map((source) => (
              <div key={source.name} className={styles.sourceItem}>
                <div className={styles.sourceTop}>
                  <span className={styles.sourceDot} aria-hidden="true" />
                  <strong className={styles.sourceName}>{source.name}</strong>
                </div>
                <p className={styles.sourceDetail}>{source.detail}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* ── RIGHT COLUMN (Column 2 - 8/12 Col): Platform Capabilities & FAQs ── */}
      <section
        id="platform"
        className={`${styles.rightPanel} ${activeMobileView !== 'platform' ? styles.mobileHidden : ''} lg:col-span-8 space-y-6 m-0 p-0 w-full min-w-0`}
        aria-label="Platform Architecture, Climatological Context, and FAQs"
      >
        {/* 1. Core Platform Capabilities Grid */}
        <article className={styles.overviewCard}>
          <div className={styles.cardHeaderStack}>
            <div className={styles.badgeRow}>
              <span className={styles.topBadgeOverview}>⚙️ Architecture</span>
              <span className={styles.sourceBadgeOverview}>Full Suite Overview</span>
            </div>
            <h2 className={styles.overviewTitle}>Platform Architecture &amp; Core Capabilities</h2>
            <p className={styles.overviewSubtitle}>
              Engineered to bridge complex meteorological science with accessible, lifesaving insights for Filipino families, students, and disaster responders.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {coreFeatures.map((feat) => (
              <div key={feat.title} className={styles.featureCard}>
                <div className={styles.featureTop}>
                  <span className={styles.featureIcon}>{feat.icon}</span>
                  <strong className={styles.featureCardTitle}>{feat.title}</strong>
                </div>
                <p className={styles.featureCardDesc}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </article>

        {/* 2. Why Philippine Weather Is Globally Unique */}
        <article className={styles.climateCard}>
          <div className={styles.cardHeaderStack}>
            <div className={styles.badgeRow}>
              <span className={styles.topBadgeClimate}>🌏 Climatological Crossroads</span>
              <span className={styles.sourceBadgeOverview}>Archipelago Dynamics</span>
            </div>
            <h2 className={styles.climateTitle}>Why Philippine Climatology Is Globally Unique</h2>
            <p className={styles.climateSubtitle}>
              The volatile intersection of warm equatorial ocean basins, alternating monsoons, and high mountain topography.
            </p>
          </div>

          <div className={styles.climateGrid}>
            {climateHighlights.map((item) => (
              <div key={item.title} className={styles.climateBox}>
                <div className={styles.climateBoxHeader}>
                  <div className={styles.climateBoxTitleRow}>
                    <span className={styles.climateBoxIcon}>{item.icon}</span>
                    <strong className={styles.climateBoxTitle}>{item.title}</strong>
                  </div>
                  <span className={styles.climateBoxTag}>{item.tag}</span>
                </div>
                <p className={styles.climateBoxDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </article>

        {/* 3. Meteorological Knowledge Base (FAQs) */}
        <article className={styles.faqSection}>
          <div className={styles.cardHeaderStack}>
            <div className={styles.badgeRow}>
              <span className={styles.topBadgeFaq}>💡 Knowledge Base</span>
              <span className={styles.sourceBadgeOverview}>Meteorological FAQ</span>
            </div>
            <h2 className={styles.faqSectionTitle}>Frequently Asked Meteorological Questions</h2>
            <p className={styles.faqSubtitle}>
              Key concepts on TCWS wind alerts, rapid storm intensification, and Doppler radar reflectivity.
            </p>
          </div>

          <div className={styles.faqList}>
            {meteorologicalFaqs.map((faq) => (
              <details key={faq.question} className={styles.faqItem}>
                <summary className={styles.faqSummary}>
                  <span className={styles.faqQuestionText}>{faq.question}</span>
                  <span className={styles.faqChevron} aria-hidden="true">▼</span>
                </summary>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </details>
            ))}
          </div>
        </article>
      </section>
    </main>
  )
}

export default AboutPage
