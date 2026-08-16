import { Link } from 'react-router-dom'
import stormcastLogo from '../assets/stormcast-logo.png'
import styles from './Footer.module.css'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footerRoot} aria-label="Site Footer">
      <div className={styles.footerContainer}>
        {/* ── Main 4-Column Grid ── */}
        <div className={styles.mainGrid}>
          {/* Col 1: Brand & Mission */}
          <div className={styles.brandCol}>
            <Link to="/" className={styles.brandRow} aria-label="StormCast PH Home">
              <img src={stormcastLogo} alt="StormCast PH logo" className={styles.brandLogo} />
              <div className={styles.brandTitleStack}>
                <span className={styles.brandTitle}>StormCast PH</span>
                <span className={styles.brandSubtitle}>Open Weather Intelligence</span>
              </div>
            </Link>
            <p className={styles.brandDesc}>
              Philippine Meteorological &amp; Typhoon Intelligence Platform delivering real-time PAR tracking, cyclone trajectory ensemble models, and disaster preparedness telemetry.
            </p>
            <div className={styles.badgeRowBrand}>
              <span className={styles.badgePhilippine}>
                🇵🇭 Dedicated to PH Resilience
              </span>
              <span className={styles.badgeOpenAccess}>
                🔓 100% Free &amp; Open Access
              </span>
            </div>
          </div>

          {/* Col 2: Quick Navigation & All Sub-Views */}
          <div className={styles.navCol}>
            <div className={styles.colHeaderStack}>
              <span className={styles.colHeaderBadge}>MODULES &amp; VIEWS</span>
              <h4 className={styles.colHeader}>Quick Navigation</h4>
            </div>

            <div className={styles.navGroupsGrid}>
              {/* Group 1: Tracking & Radar */}
              <div className={styles.navGroup}>
                <div className={styles.groupHeader}>
                  <span className={styles.groupIcon}>📡</span>
                  <span className={styles.groupTitle}>Radar &amp; Tracking</span>
                </div>
                <div className={styles.groupLinks}>
                  <Link to="/radar?view=interactive" className={styles.subNavLink}>
                    <span className={styles.bulletDot} aria-hidden="true" />
                    <span>Interactive Radar Map</span>
                  </Link>
                  <Link to="/radar?view=network" className={styles.subNavLink}>
                    <span className={styles.bulletDot} aria-hidden="true" />
                    <span>PAGASA Doppler Array</span>
                  </Link>
                </div>
              </div>

              {/* Group 2: Typhoon History */}
              <div className={styles.navGroup}>
                <div className={styles.groupHeader}>
                  <span className={styles.groupIcon}>🌀</span>
                  <span className={styles.groupTitle}>Typhoon Archives</span>
                </div>
                <div className={styles.groupLinks}>
                  <Link to="/history?view=archives" className={styles.subNavLink}>
                    <span className={styles.bulletDot} aria-hidden="true" />
                    <span>Historical Cyclone Tracks</span>
                  </Link>
                  <Link to="/history?view=analytics" className={styles.subNavLink}>
                    <span className={styles.bulletDot} aria-hidden="true" />
                    <span>Historical Analytics</span>
                  </Link>
                </div>
              </div>

              {/* Group 3: Climate & Preparedness */}
              <div className={styles.navGroup}>
                <div className={styles.groupHeader}>
                  <span className={styles.groupIcon}>🌍</span>
                  <span className={styles.groupTitle}>Climate &amp; Safety</span>
                </div>
                <div className={styles.groupLinks}>
                  <Link to="/climate?view=dynamics" className={styles.subNavLink}>
                    <span className={styles.bulletDot} aria-hidden="true" />
                    <span>Monsoons &amp; Dynamics</span>
                  </Link>
                  <Link to="/climate?view=systems" className={styles.subNavLink}>
                    <span className={styles.bulletDot} aria-hidden="true" />
                    <span>Atmospheric Systems</span>
                  </Link>
                  <Link to="/preparedness?view=plans" className={styles.subNavLink}>
                    <span className={styles.bulletDot} aria-hidden="true" />
                    <span>Evacuation Protocols</span>
                  </Link>
                  <Link to="/preparedness?view=kits" className={styles.subNavLink}>
                    <span className={styles.bulletDot} aria-hidden="true" />
                    <span>72-Hour Go-Bag Kit</span>
                  </Link>
                </div>
              </div>

              {/* Group 4: Platform & Governance */}
              <div className={styles.navGroup}>
                <div className={styles.groupHeader}>
                  <span className={styles.groupIcon}>ℹ️</span>
                  <span className={styles.groupTitle}>Platform &amp; Legal</span>
                </div>
                <div className={styles.groupLinks}>
                  <Link to="/about?view=platform" className={styles.subNavLink}>
                    <span className={styles.bulletDot} aria-hidden="true" />
                    <span>Platform Suite &amp; FAQs</span>
                  </Link>
                  <Link to="/about?view=mandate" className={styles.subNavLink}>
                    <span className={styles.bulletDot} aria-hidden="true" />
                    <span>Mission &amp; Attribution</span>
                  </Link>
                  <Link to="/contact?view=directory" className={styles.subNavLink}>
                    <span className={styles.bulletDot} aria-hidden="true" />
                    <span>Verified Agency Directory</span>
                  </Link>
                  <Link to="/contact?view=hotlines" className={styles.subNavLink}>
                    <span className={styles.bulletDot} aria-hidden="true" />
                    <span>Emergency Hotlines (911/143)</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Data Authority & Meteorological Feeds */}
          <div className={styles.sourcesCol}>
            <div className={styles.colHeaderStack}>
              <span className={styles.colHeaderBadge}>DATA FEEDS</span>
              <h4 className={styles.colHeader}>Official Data Sources</h4>
            </div>
            <div className={styles.sourceList}>
              <div className={styles.sourceItem}>
                <span className={styles.sourceIcon} aria-hidden="true">📡</span>
                <div className={styles.sourceContent}>
                  <strong className={styles.sourceTitle}>DOST-PAGASA</strong>
                  <span className={styles.sourceDesc}>TC Bulletins, Radar Array &amp; Warnings</span>
                </div>
              </div>
              <div className={styles.sourceItem}>
                <span className={styles.sourceIcon} aria-hidden="true">🛰️</span>
                <div className={styles.sourceContent}>
                  <strong className={styles.sourceTitle}>Himawari-9 Satellite</strong>
                  <span className={styles.sourceDesc}>Western Pacific Multispectral Imagery</span>
                </div>
              </div>
              <div className={styles.sourceItem}>
                <span className={styles.sourceIcon} aria-hidden="true">🌐</span>
                <div className={styles.sourceContent}>
                  <strong className={styles.sourceTitle}>WMO &amp; Open-Meteo</strong>
                  <span className={styles.sourceDesc}>ECMWF, GFS &amp; ICON Numerical Ensembles</span>
                </div>
              </div>
              <div className={styles.sourceItem}>
                <span className={styles.sourceIcon} aria-hidden="true">🛡️</span>
                <div className={styles.sourceContent}>
                  <strong className={styles.sourceTitle}>NDRRMC &amp; OCD</strong>
                  <span className={styles.sourceDesc}>Disaster Risk Reduction Directives</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Live Operational Status & Telemetry */}
          <div className={styles.telemetryCol}>
            <div className={styles.colHeaderStack}>
              <span className={styles.colHeaderBadge}>LIVE TELEMETRY</span>
              <h4 className={styles.colHeader}>System Operational Status</h4>
            </div>
            <div className={styles.statusCard}>
              <div className={styles.statusLivePill}>
                <span className={styles.pulseGreen} aria-hidden="true" />
                <span>PAR Systems Operational</span>
              </div>
              <div className={styles.telemetryGrid}>
                <div className={styles.telemetryItem}>
                  <span className={styles.telemetryLabel}>Domain Coverage</span>
                  <strong className={styles.telemetryVal}>Philippine PAR</strong>
                </div>
                <div className={styles.telemetryItem}>
                  <span className={styles.telemetryLabel}>Sync Stream</span>
                  <strong className={styles.telemetryVal}>Real-Time Active</strong>
                </div>
                <div className={styles.telemetryItem}>
                  <span className={styles.telemetryLabel}>NWP Ensemble</span>
                  <strong className={styles.telemetryVal}>ECMWF • GFS • ICON</strong>
                </div>
                <div className={styles.telemetryItem}>
                  <span className={styles.telemetryLabel}>Emergency Priority</span>
                  <strong className={styles.telemetryValAlert}>911 • 143 Active</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Sub-Footer Row with Mandatory Legal Links ── */}
        <div className={styles.subFooter}>
          <div className={styles.subFooterLeft}>
            <p className={styles.copyright}>
              &copy; {currentYear} <strong>StormCast PH</strong>. Non-commercial, open meteorological intelligence.
            </p>
            <p className={styles.disclaimerNote}>
              Official mandates &amp; storm warnings strictly originate from DOST-PAGASA &amp; NDRRMC.
            </p>
          </div>

          <div className={styles.legalLinks}>
            <Link to="/privacy-policy?view=policy" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <span className={styles.divider} aria-hidden="true">•</span>
            <Link to="/terms?view=agreement" className={styles.legalLink}>
              Terms of Service
            </Link>
            <span className={styles.divider} aria-hidden="true">•</span>
            <Link to="/contact?view=directory" className={styles.legalLink}>
              Agency Directory
            </Link>
            <span className={styles.divider} aria-hidden="true">•</span>
            <Link to="/contact?view=hotlines" className={styles.legalLink}>
              Emergency Hotlines
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
