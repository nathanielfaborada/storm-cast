import { SITE_URL } from '../site.config.js'
import { useSearchParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { ClimateDriversCard } from '../components/history/ClimateDriversCard'
import { MonsoonScheduleCard } from '../components/climate/MonsoonScheduleCard'
import { WarmPoolMetricsCard } from '../components/climate/WarmPoolMetricsCard'
import styles from './ClimateInsightsPage.module.css'

export function ClimateInsightsPage() {
  const [searchParams] = useSearchParams()
  const viewParam = searchParams.get('view')
  const activeMobileView = viewParam === 'telemetry' ? 'telemetry' : 'dynamics'

  return (
    <main
      className={`${styles.dashboardContainer} grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-0 pt-0 w-full max-w-full min-w-0 overflow-x-hidden`}
      aria-label="Philippine Climate Insights and Climatological Dynamics"
    >
      <SEO
        title="Philippine Climate Insights | Monsoons, ENSO Teleconnections & Sea Surface Temperatures | StormCast PH"
        description="Detailed meteorological analysis of the Philippine climate regime: Amihan and Habagat monsoon schedules, ITCZ rainbands, ENSO cycles (El Niño & La Niña), and Western Pacific ocean heat content."
        canonical={`${SITE_URL}/climate`}
        keywords="Philippine climate, Amihan, Habagat, southwest monsoon, northeast monsoon, ITCZ, ENSO, El Niño, La Niña, sea surface temperature, PAR climatology"
      />

      {/* ── LEFT COLUMN (Column 1): Seasonal Telemetry & Ocean Monitors (4 Cols Desktop) ── */}
      <section
        id="telemetry"
        className={`${styles.leftPanel} ${activeMobileView !== 'telemetry' ? styles.mobileHidden : ''} lg:col-span-4 space-y-4 m-0 p-0 w-full min-w-0`}
        aria-label="Seasonal Telemetry and Ocean Monitors"
      >
        {/* 1. Active Monsoon Schedule Tracker */}
        <MonsoonScheduleCard />

        {/* 2. Western Pacific Warm Pool & SST Monitor */}
        <WarmPoolMetricsCard />

        {/* 3. ENSO El Niño vs. La Niña Teleconnections Card */}
        <ClimateDriversCard />
      </section>

      {/* ── RIGHT COLUMN (Column 2): Macro Systems & Climate Dynamics (8 Cols Desktop) ── */}
      <section
        id="dynamics"
        className={`${styles.rightPanel} ${activeMobileView !== 'dynamics' ? styles.mobileHidden : ''} lg:col-span-8 space-y-6 m-0 p-0 w-full min-w-0`}
        aria-label="Macro Systems and Climate Dynamics"
      >
        {/* 1. Header Overview Banner */}
        <header className={`${styles.overviewBanner} m-0 mt-0`}>
          <span className={styles.bannerTag}>Meteorological Intelligence</span>
          <h1 className={styles.bannerTitle}>Philippine Climatology & Macro-Atmospheric Drivers</h1>
          <p className={styles.bannerText}>
            An authoritative analysis of the physical drivers governing weather patterns across the Philippine archipelago—from seasonal monsoon reversals to equatorial Pacific ocean heat anomalies.
          </p>
        </header>

        {/* 2. 3-Pillar Macro Circulation Grid (Habagat, Amihan, ITCZ) */}
        <div className={styles.macroGrid}>
          {/* Southwest Monsoon (Habagat) */}
          <article className={`${styles.driverCard} ${styles.habagatCard}`}>
            <div className={styles.driverTop}>
              <div className={styles.driverTitleGroup}>
                <span className={styles.driverIcon} aria-hidden="true">🌧️</span>
                <h2 className={styles.driverTitle}>Habagat (SW Monsoon)</h2>
              </div>
              <span className={`${styles.seasonPill} ${styles.habagatPill}`}>MAY – OCT</span>
            </div>

            <p className={styles.driverSummary}>
              Driven by Asian continental thermal low-pressures pulling deep moisture across the West Philippine Sea.
            </p>

            <div className={styles.keyPointsStack}>
              <div className={styles.keyPointRow}>
                <span className={styles.pointTagBlue}>Suction Effect</span>
                <p className={styles.pointText}>Typhoons north of Luzon amplify southwesterly moisture rainbands.</p>
              </div>
              <div className={styles.keyPointRow}>
                <span className={styles.pointTagBlue}>Impact Zones</span>
                <p className={styles.pointText}>Prolonged non-stop rains across NCR, Bataan, Zambales, and Panay.</p>
              </div>
            </div>
          </article>

          {/* Northeast Monsoon (Amihan) */}
          <article className={`${styles.driverCard} ${styles.amihanCard}`}>
            <div className={styles.driverTop}>
              <div className={styles.driverTitleGroup}>
                <span className={styles.driverIcon} aria-hidden="true">💨</span>
                <h2 className={styles.driverTitle}>Amihan (NE Monsoon)</h2>
              </div>
              <span className={`${styles.seasonPill} ${styles.amihanPill}`}>NOV – MAR</span>
            </div>

            <p className={styles.driverSummary}>
              Originates from the Siberian High, channeling crisp, cool continental air masses southward toward the tropics.
            </p>

            <div className={styles.keyPointsStack}>
              <div className={styles.keyPointRow}>
                <span className={styles.pointTagCyan}>Thermal Dip</span>
                <p className={styles.pointText}>Brings crisp 9°C–12°C morning temperatures to Baguio and Northern Luzon.</p>
              </div>
              <div className={styles.keyPointRow}>
                <span className={styles.pointTagCyan}>Pacific Swells</span>
                <p className={styles.pointText}>Causes heavy cloudiness and rough seas along Cagayan, Isabela, and Quezon.</p>
              </div>
            </div>
          </article>

          {/* ITCZ */}
          <article className={`${styles.driverCard} ${styles.itczCard}`}>
            <div className={styles.driverTop}>
              <div className={styles.driverTitleGroup}>
                <span className={styles.driverIcon} aria-hidden="true">⚡</span>
                <h2 className={styles.driverTitle}>ITCZ Convergence</h2>
              </div>
              <span className={`${styles.seasonPill} ${styles.itczPill}`}>YEAR-ROUND</span>
            </div>

            <p className={styles.driverSummary}>
              Equatorial thermal collision zone where trade winds converge, producing dense convective thunderstorm clusters.
            </p>

            <div className={styles.keyPointsStack}>
              <div className={styles.keyPointRow}>
                <span className={styles.pointTagPurple}>Cyclone Nursery</span>
                <p className={styles.pointText}>Low-pressure areas frequently germinate inside equatorial ITCZ troughs.</p>
              </div>
              <div className={styles.keyPointRow}>
                <span className={styles.pointTagPurple}>Convective Rain</span>
                <p className={styles.pointText}>Generates widespread afternoon convective downpours across Davao & Caraga.</p>
              </div>
            </div>
          </article>
        </div>

        {/* 3. Deep Dive: Western Pacific Warm Pool & Rapid Intensification */}
        <article className={styles.contentCard}>
          <div className={styles.cardHeaderStack}>
            <span className={styles.oceanBadge}>🌊 Ocean Thermodynamics</span>
            <h2 className={styles.cardTitle}>Western Pacific Warm Pool: Cyclone Thermodynamic Engine</h2>
          </div>

          <p className={styles.cardBodyText}>
            The Philippine Sea sits at the western terminus of the <strong>Western Pacific Warm Pool</strong>—the largest expanse of warm ocean water on Earth, releasing massive latent heat flux into passing low-pressure systems.
          </p>

          {/* 2-Column Telemetry Metrics Grid */}
          <div className={styles.telemetryGrid}>
            <div className={styles.telemetryBox}>
              <span className={styles.telemetryLabel}>SST Threshold</span>
              <strong className={styles.telemetryVal}>28.5°C – 30.5°C</strong>
              <span className={styles.telemetrySub}>Latent heat flux trigger</span>
            </div>
            <div className={styles.telemetryBox}>
              <span className={styles.telemetryLabel}>Isotherm Depth</span>
              <strong className={styles.telemetryVal}>&gt;100 Meters</strong>
              <span className={styles.telemetrySub}>Deep thermal reservoir</span>
            </div>
          </div>

          {/* Highlighted Rapid Intensification Callout Box */}
          <div className={styles.riCalloutBox}>
            <strong className={styles.riBadge}>⚡ Rapid Intensification (RI) Trigger:</strong>
            <p className={styles.riText}>
              This deep thermal reservoir is the primary reason storms entering PAR escalate from <strong>Category 1 to Category 5 Super Typhoons in under 24 hours</strong> (e.g., <em>Super Typhoon Yolanda</em> &amp; <em>Super Typhoon Rolly</em>).
            </p>
          </div>
        </article>

        {/* 4. Long-Term Climate Change Projections for the Philippine Archipelago */}
        <article className={styles.contentCard}>
          <div className={styles.cardHeaderStack}>
            <span className={styles.projectionBadge}>📈 DOST-PAGASA &amp; CMIP6 Ensembles</span>
            <h2 className={styles.cardTitle}>Long-Term PAR Climatology Projections</h2>
          </div>

          <p className={styles.cardBodyText}>
            Observational climate records and multi-model simulations indicate key long-term structural shifts in the Philippine climate regime:
          </p>

          <div className={styles.projectionGrid}>
            <div className={styles.projBox}>
              <div className={styles.projTopRow}>
                <strong className={styles.projTitle}>Sea Level Rise (SLR)</strong>
                <span className={styles.projBigBadge}>~3× Global Rate</span>
              </div>
              <p className={styles.projDetail}>
                Local subsidence and Pacific trade wind pile-up accelerate coastal inundation across Manila Bay and Leyte Gulf.
              </p>
            </div>

            <div className={styles.projBox}>
              <div className={styles.projTopRow}>
                <strong className={styles.projTitle}>Super Typhoon Ratio</strong>
                <span className={styles.projBigBadge}>+18% Peak Winds</span>
              </div>
              <p className={styles.projDetail}>
                While total yearly storm counts remain ~20, the proportion of destructive Category 4–5 Super Typhoons is rising.
              </p>
            </div>

            <div className={styles.projBox}>
              <div className={styles.projTopRow}>
                <strong className={styles.projTitle}>Extreme Deluge Events</strong>
                <span className={styles.projBigBadge}>+22% Rain Volume</span>
              </div>
              <p className={styles.projDetail}>
                Warmer atmosphere holds 7% more moisture per 1°C increase, elevating flash flood hazards from monsoon troughs.
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}

export default ClimateInsightsPage
