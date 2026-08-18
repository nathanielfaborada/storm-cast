import { SITE_URL } from '../site.config.js'
import { Link, useSearchParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import {
  EmergencyRadioFrequenciesCard,
  EvacuationRiskEstimator,
  FamilyEmergencyPlanGenerator,
  HouseholdSupplyCalculator,
  PostFloodHealthGuide,
} from '../components/preparedness'
import styles from './PreparednessHubPage.module.css'

export function PreparednessHubPage() {
  const [searchParams] = useSearchParams()
  const viewParam = searchParams.get('view')
  const activeMobileView = viewParam === 'calculators' ? 'calculators' : 'plans'

  return (
    <main
      className={`${styles.dashboardContainer} grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-0 pt-0 w-full max-w-full min-w-0 overflow-x-hidden`}
      aria-label="Philippine Disaster Preparedness Hub"
    >
      <SEO
        title="Philippine Disaster Preparedness Hub | Interactive Emergency Plan, Supply Calculator & Life-Safety Suite | StormCast PH"
        description="Comprehensive life-safety suite for Philippine typhoons: Interactive Family Emergency Action Plan generator, 72h household supply & water calculator, evacuation risk estimator, emergency radio dials, and leptospirosis prevention."
        canonical={`${SITE_URL}/preparedness`}
        keywords="Philippine disaster preparedness, family emergency action plan generator, go bag calculator, evacuation risk estimator, emergency radio frequencies DZRH DZBB, leptospirosis prevention"
      />

      {/* ── LEFT COLUMN (Column 1): Emergency Calculators & Offline Comms (4 Cols Desktop) ── */}
      <section
        id="calculators"
        className={`${styles.leftPanel} ${activeMobileView !== 'calculators' ? styles.mobileHidden : ''} lg:col-span-4 space-y-4 m-0 p-0 w-full min-w-0`}
        aria-label="Emergency Calculators and Offline Communications"
      >
        {/* 1. Dynamic 72-Hour Supply & Water Calculator */}
        <HouseholdSupplyCalculator />

        {/* 2. Evacuation Urgency & Structural Risk Estimator */}
        <EvacuationRiskEstimator />

        {/* 3. Offline Emergency Radio Dials & Cell Broadcast Guide */}
        <EmergencyRadioFrequenciesCard />
      </section>

      {/* ── RIGHT COLUMN (Column 2): Family Action Plans & Safety Protocols (8 Cols Desktop) ── */}
      <section
        id="plans"
        className={`${styles.rightPanel} ${activeMobileView !== 'plans' ? styles.mobileHidden : ''} lg:col-span-8 space-y-6 m-0 p-0 w-full min-w-0`}
        aria-label="Family Action Plans and Safety Protocols"
      >
        {/* 1. Header Overview Banner */}
        <header className={`${styles.overviewBanner} m-0 mt-0`}>
          <span className={styles.bannerTag}>Civil Defense &amp; Resilience Suite</span>
          <h1 className={styles.bannerTitle}>Philippine Disaster Preparedness &amp; Action Hub</h1>
          <p className={styles.bannerText}>
            Interactive life-safety tools, emergency water and food estimators, structural evacuation risk calculators, and printable family action cards aligned with NDRRMC, DOST-PAGASA, and DOH protocols.
          </p>
        </header>

        {/* 2. Interactive Printable Family Emergency Plan Generator */}
        <FamilyEmergencyPlanGenerator />

        {/* 3. Cyclone Landfall Action Timeline */}
        <article className={styles.contentCard}>
          <div className={styles.cardHeader}>
            <span className={styles.cardHeaderIcon} aria-hidden="true">⏱️</span>
            <h2 className={styles.cardTitle}>Tropical Cyclone Landfall Action Timeline</h2>
          </div>

          <div className={styles.actionStepList}>
            <div className={styles.stepItem}>
              <div className={styles.stepNumberBadge}>1</div>
              <div className={styles.stepBody}>
                <strong className={styles.stepTitle}>48 Hours Before Landfall (Alert Phase)</strong>
                <p className={styles.stepDesc}>
                  Inspect roof tie-downs and GI sheet fasteners, trim hazardous tree branches near power cables, charge all portable powerbanks, and confirm family assembly points.
                </p>
              </div>
            </div>

            <div className={styles.stepItem}>
              <div className={styles.stepNumberBadge}>2</div>
              <div className={styles.stepBody}>
                <strong className={styles.stepTitle}>24 Hours Before Landfall (Precautionary Phase)</strong>
                <p className={styles.stepDesc}>
                  Fill sealed containers with 72h potable water reserves, prepare non-perishable pull-tab canned meals, secure pets with leashes/carriers, and monitor LGU barangay DRRMC advisories.
                </p>
              </div>
            </div>

            <div className={styles.stepItem}>
              <div className={styles.stepNumberBadge}>3</div>
              <div className={styles.stepBody}>
                <strong className={styles.stepTitle}>12 Hours Before Landfall (Immediate Preemptive Evacuation)</strong>
                <p className={styles.stepDesc}>
                  Households in coastal storm surge corridors, flood plains, or landslide-vulnerable mountain slopes must execute early evacuation to designated municipal evacuation centers in daylight.
                </p>
              </div>
            </div>

            <div className={styles.stepItem}>
              <div className={styles.stepNumberBadge}>4</div>
              <div className={styles.stepBody}>
                <strong className={styles.stepTitle}>During Eye Passage (False Calm Hazard)</strong>
                <p className={styles.stepDesc}>
                  Do not step outside during the sudden lull of the cyclone eye. Severe violent winds will abruptly reverse direction within 20–45 minutes as the trailing eyewall strikes.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* 4. Post-Flood Health, Leptospirosis & Water Sanitation */}
        <PostFloodHealthGuide />
      </section>
    </main>
  )
}

export default PreparednessHubPage
