import { SITE_URL } from '../site.config.js'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import styles from './LiveRadarPage.module.css'

const radarLayers = [
  {
    id: 'radar',
    label: '🌧️ Doppler Radar',
    embedUrl:
      'https://embed.windy.com/embed2.html?lat=13.0&lon=122.0&detailLat=14.5995&detailLon=120.9842&width=100%25&height=580&zoom=5&level=surface&overlay=radar&product=radar&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1',
    externalUrl: 'https://www.windy.com/-Weather-radar-radar?radar,13.0,122.0,5',
    desc: 'Real-time Doppler precipitation reflectivity and convective rainbands',
  },
  {
    id: 'satellite',
    label: '🛰️ Himawari-9 Satellite',
    embedUrl:
      'https://embed.windy.com/embed2.html?lat=13.0&lon=122.0&detailLat=14.5995&detailLon=120.9842&width=100%25&height=580&zoom=5&level=surface&overlay=satellite&product=satellite&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1',
    externalUrl: 'https://www.windy.com/-Satellite-satellite?satellite,13.0,122.0,5',
    desc: 'Multispectral infrared cloud-top cooling temperatures and spiral rainbands',
  },
  {
    id: 'wind',
    label: '💨 Wind Stream Vectors',
    embedUrl:
      'https://embed.windy.com/embed2.html?lat=13.0&lon=122.0&detailLat=14.5995&detailLon=120.9842&width=100%25&height=580&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1',
    externalUrl: 'https://www.windy.com/-Wind-wind?wind,13.0,122.0,5',
    desc: 'Surface wind velocity (km/h), monsoon streamlines, and gale-force gusts',
  },
  {
    id: 'rain',
    label: '⛈️ Convective Rain & Storms',
    embedUrl:
      'https://embed.windy.com/embed2.html?lat=13.0&lon=122.0&detailLat=14.5995&detailLon=120.9842&width=100%25&height=580&zoom=5&level=surface&overlay=rain&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1',
    externalUrl: 'https://www.windy.com/-Rain-thunder-rain?rain,13.0,122.0,5',
    desc: 'Precipitation forecast accumulation, convective thunderstorm cells and monsoon rainbands',
  },
]

const radarStations = [
  { name: 'Aparri Station (Cagayan)', freq: 'S-Band (2.8 GHz)', range: '480 km Radius', location: 'Northern Luzon Seaboard' },
  { name: 'Baler Station (Aurora)', freq: 'C-Band (5.6 GHz)', range: '400 km Radius', location: 'Central Pacific Coast' },
  { name: 'Tagaytay Station (Cavite)', freq: 'C-Band (5.6 GHz)', range: '400 km Radius', location: 'Greater Manila & CALABARZON' },
  { name: 'Virac Station (Catanduanes)', freq: 'S-Band (2.8 GHz)', range: '480 km Radius', location: 'Bicol Early Warning' },
  { name: 'Guiuan Station (E. Samar)', freq: 'S-Band (2.8 GHz)', range: '480 km Radius', location: 'Eastern Visayas Gateway' },
  { name: 'Cebu Station (Mactan)', freq: 'C-Band (5.6 GHz)', range: '400 km Radius', location: 'Central Visayas Corridor' },
  { name: 'Davao Station (Mintal)', freq: 'C-Band (5.6 GHz)', range: '400 km Radius', location: 'Southeastern Mindanao' },
  { name: 'Zamboanga Station', freq: 'C-Band (5.6 GHz)', range: '400 km Radius', location: 'Zamboanga & Sulu Sea' },
]

export function LiveRadarPage() {
  const [activeLayerId, setActiveLayerId] = useState('radar')
  const [searchParams] = useSearchParams()
  const viewParam = searchParams.get('view')
  const activeMobileView = viewParam === 'network' ? 'network' : 'interactive'

  const currentLayer = radarLayers.find((l) => l.id === activeLayerId) || radarLayers[0]

  return (
    <main
      className={`${styles.dashboardContainer} grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-0 pt-0 w-full max-w-full min-w-0 overflow-x-hidden`}
      aria-label="Philippine Doppler Radar and Satellite Meteorological Surveillance"
    >
      <SEO
        title="Live Philippine Doppler Weather Radar & Himawari-9 Satellite | StormCast PH"
        description="Real-time Philippine Doppler weather radar reflectivity, Himawari-9 multispectral satellite imagery, wind stream vectors, and DOST-PAGASA regional station status."
        canonical={`${SITE_URL}/radar`}
        keywords="Philippine weather radar, PAGASA Doppler radar, live rain radar, Himawari-9 satellite, Manila radar, typhoon radar tracker, dBZ reflectivity"
      />

      {/* ── LEFT COLUMN (Column 1 - 4/12 Col): PAGASA Doppler Network & Radar Array ── */}
      <section
        id="network"
        className={`${styles.leftPanel} ${activeMobileView !== 'network' ? styles.mobileHidden : ''} lg:col-span-4 space-y-4 m-0 p-0 w-full min-w-0`}
        aria-label="Radar Overview and DOST-PAGASA Network"
      >
        {/* 1. Complete Hero Overview Banner on the Left Side */}
        <header className={styles.leftHeaderBanner}>
          <div className={styles.bannerTag}>
            <span className={styles.pulseDot} aria-hidden="true" />
            <span>Doppler Stream Synchronized</span>
          </div>
          <h1 className={styles.leftBannerTitle}>Live Multi-Layer Radar &amp; Satellite</h1>
          <p className={styles.leftBannerText}>
            Real-time precipitation reflectivity (dBZ), cloud-top convective cooling temperatures, and vector atmospheric wind stream surveillance across the Philippine Area of Responsibility (PAR).
          </p>

          <div className={styles.syncMetricsGrid}>
            <div className={styles.syncMetricCard}>
              <span className={styles.syncMetricLabel}>Network Array</span>
              <strong className={styles.syncMetricVal}>8 / 8 Radars</strong>
            </div>
            <div className={styles.syncMetricCard}>
              <span className={styles.syncMetricLabel}>PAR Coverage</span>
              <strong className={styles.syncMetricVal}>Archipelago</strong>
            </div>
            <div className={styles.syncMetricCard}>
              <span className={styles.syncMetricLabel}>Refresh Latency</span>
              <strong className={styles.syncMetricVal}>5–10 Mins</strong>
            </div>
            <div className={styles.syncMetricCard}>
              <span className={styles.syncMetricLabel}>Stream Protocol</span>
              <strong className={styles.syncMetricVal}>Level-II dBZ</strong>
            </div>
          </div>
        </header>

        {/* 2. PAGASA Doppler Radar Station Array Card */}
        <article className={styles.stationCardList}>
          <div className={styles.cardHeaderStack}>
            <div className={styles.badgeRow}>
              <span className={styles.topBadgeStation}>📡 Ground Array</span>
              <span className={styles.activeCountBadge}>8 Active Online</span>
            </div>
            <h3 className={styles.stationCardTitle}>Doppler Radar Array</h3>
            <p className={styles.stationCardSub}>
              DOST-PAGASA National Radar Surveillance Network
            </p>
          </div>

          <div className={styles.stationRows}>
            {radarStations.map((st) => (
              <div key={st.name} className={styles.stationItem}>
                <div className={styles.stationItemTop}>
                  <strong className={styles.stationNameText}>{st.name}</strong>
                  <span className={styles.freqTag}>{st.freq.split(' ')[0]}</span>
                </div>
                <div className={styles.stationItemMeta}>
                  <span><strong>Range:</strong> {st.range} • {st.location}</span>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* 3. S-Band vs C-Band Technical Card */}
        <article className={styles.infoCardLeft}>
          <div className={styles.cardHeaderStack}>
            <div className={styles.badgeRow}>
              <span className={styles.topBadgeBand}>⚡ Frequency Bands</span>
              <span className={styles.sourceBadgeTech}>WMO Standards</span>
            </div>
            <h3 className={styles.infoCardTitle}>S-Band vs. C-Band Radar</h3>
            <p className={styles.infoCardSub}>
              Wavelength penetration &amp; hydrometeor signal attenuation comparison.
            </p>
          </div>

          <div className={styles.bandGrid}>
            {/* S-Band */}
            <div className={`${styles.bandCard} ${styles.bandCardS}`}>
              <div className={styles.bandCardHeader}>
                <strong className={styles.bandName}>S-Band Radar</strong>
                <span className={styles.wavelengthTagBlue}>10 cm (2.8 GHz)</span>
              </div>
              <p className={styles.bandDesc}>
                Penetrates violent typhoon eyewalls without signal attenuation or rain fade.
              </p>
              <div className={styles.bandFooter}>
                <span className={styles.bandLocation}>📍 Aparri, Virac, Guiuan</span>
              </div>
            </div>

            {/* C-Band */}
            <div className={`${styles.bandCard} ${styles.bandCardC}`}>
              <div className={styles.bandCardHeader}>
                <strong className={styles.bandName}>C-Band Radar</strong>
                <span className={styles.wavelengthTagIndigo}>5 cm (5.6 GHz)</span>
              </div>
              <p className={styles.bandDesc}>
                Higher reflectivity resolution for localized urban flash flood detection.
              </p>
              <div className={styles.bandFooter}>
                <span className={styles.bandLocation}>📍 Tagaytay, Cebu, Davao</span>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* ── RIGHT COLUMN (Column 2 - 8/12 Col): Interactive Multi-Layer Radar Map ── */}
      <section
        id="interactive"
        className={`${styles.rightPanel} ${activeMobileView !== 'interactive' ? styles.mobileHidden : ''} lg:col-span-8 space-y-6 m-0 p-0 w-full min-w-0`}
        aria-label="Interactive Map Viewport and Telemetry Analysis"
      >
        {/* 1. Interactive Radar Command Center Card */}
        <article className={styles.radarViewerCard} aria-label="Interactive Weather Map Viewport">
          <div className={styles.viewerHeader}>
            <div className={styles.viewerTitleGroup}>
              <h2 className={styles.viewerTitle}>
                <span className={styles.viewerIcon} aria-hidden="true">📡</span>
                <span>{currentLayer.label}</span>
              </h2>
              <p className={styles.viewerSub}>{currentLayer.desc}</p>
            </div>

            <a
              href={currentLayer.externalUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.fullscreenBtn}
              title="Open full interactive map in new tab"
            >
              <span>Full</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Horizontal Scrollable Layer Tab Navigation Strip */}
          <div className={styles.layerBar} role="tablist" aria-label="Radar Map Layers">
            {radarLayers.map((layer) => (
              <button
                key={layer.id}
                type="button"
                role="tab"
                aria-selected={activeLayerId === layer.id}
                className={`${styles.layerBtn} ${activeLayerId === layer.id ? styles.active : ''}`}
                onClick={() => setActiveLayerId(layer.id)}
              >
                {layer.label}
              </button>
            ))}
          </div>

          {/* Embedded Map Frame */}
          <div className={styles.mapViewport}>
            <iframe
              key={currentLayer.id}
              src={currentLayer.embedUrl}
              title={currentLayer.label}
              className={styles.mapIframe}
              loading="lazy"
              allow="fullscreen; geolocation; autoplay; accelerometer; gyroscope"
            />
          </div>

          {/* Compact Reflectivity dBZ Scale Bar */}
          <div className={styles.legendBar}>
            <span className={styles.legendLabel}>Reflectivity (dBZ):</span>
            <div className={styles.colorScaleTrack}>
              <div className={styles.scaleSegment}>
                <span className={`${styles.scaleColor} ${styles.light}`} />
                <span>Light (15–30)</span>
              </div>
              <div className={styles.scaleSegment}>
                <span className={`${styles.scaleColor} ${styles.moderate}`} />
                <span>Mod (30–40)</span>
              </div>
              <div className={styles.scaleSegment}>
                <span className={`${styles.scaleColor} ${styles.heavy}`} />
                <span>Heavy (40–50)</span>
              </div>
              <div className={styles.scaleSegment}>
                <span className={`${styles.scaleColor} ${styles.intense}`} />
                <span>Intense (50–55)</span>
              </div>
              <div className={styles.scaleSegment}>
                <span className={`${styles.scaleColor} ${styles.torrential}`} />
                <span>Torrential (&gt;55)</span>
              </div>
            </div>
          </div>
        </article>

        {/* 2. Deep Dive Technical Analysis */}
        <article className={styles.contentCard}>
          <div className={styles.cardHeaderStack}>
            <div className={styles.badgeRow}>
              <span className={styles.topBadgeTech}>🔬 Radar Physics</span>
              <span className={styles.sourceBadgeTech}>Doppler Telemetry</span>
            </div>
            <h3 className={styles.contentCardTitle}>
              Atmospheric Reflectivity &amp; Radar Mechanics
            </h3>
            <p className={styles.contentCardSub}>
              How microwave pulse echoes and Doppler frequency shifts calculate typhoon rainfall and storm velocity.
            </p>
          </div>

          {/* Structured Highlight Badges for Reflected Power vs Doppler Shift */}
          <div className={styles.physicsCompareGrid}>
            <div className={styles.physicsBox}>
              <div className={styles.physicsBoxHeader}>
                <span className={styles.physicsTagBlue}>Reflected Power (dBZ)</span>
                <span className={styles.physicsMetric}>Rain Volume</span>
              </div>
              <p className={styles.physicsDesc}>
                Microwave pulses bounce off airborne raindrops and hail. Higher returned energy indicates heavier precipitation volume per cubic meter.
              </p>
            </div>

            <div className={styles.physicsBox}>
              <div className={styles.physicsBoxHeader}>
                <span className={styles.physicsTagCyan}>Doppler Shift (Δf)</span>
                <span className={styles.physicsMetric}>Storm Velocity</span>
              </div>
              <p className={styles.physicsDesc}>
                Frequency shifts calculate real-time cloud circulation velocity and determine whether convective storm cells are advancing or receding.
              </p>
            </div>
          </div>

          {/* Technical Sub-Cards Grid */}
          <div className={styles.techGrid}>
            <div className={`${styles.techBox} ${styles.techBoxMeso}`}>
              <strong className={styles.techBoxTitle}>🌪️ Mesocyclone &amp; Eyewall Detection</strong>
              <p className={styles.techBoxText}>
                Velocity couplets (adjacent inbound and outbound wind signals) allow meteorologists to identify rotating mesocyclones and tornado funnels embedded inside typhoon spiral rainbands up to 30 minutes before touchdown.
              </p>
            </div>

            <div className={`${styles.techBox} ${styles.techBoxClutter}`}>
              <strong className={styles.techBoxTitle}>🏔️ Topographic Clutter Suppression</strong>
              <p className={styles.techBoxText}>
                The Sierra Madre and Cordillera mountain ranges create ground clutter echoes. Modern Doppler algorithms filter out stationary terrain returns using statistical clutter filtering and dual-polarization differential phase.
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}

export default LiveRadarPage
