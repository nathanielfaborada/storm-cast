import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import styles from './ContactPage.module.css'

const reliableContacts = [
  // 1. National Disaster & Emergency Hotlines (Primary)
  {
    category: 'National Emergency',
    agency: 'Emergency 911 National Hotline',
    number: '911',
    tel: 'tel:911',
    coverage: 'Nationwide 24/7 central dispatch for Police, Fire, Medical Emergencies, and Search & Rescue.',
    tag: 'Nationwide Dispatch',
  },
  {
    category: 'National Emergency',
    agency: 'NDRRMC Operations Center',
    number: '(02) 8911-5061 to 65',
    tel: 'tel:0289115061',
    coverage: 'National Disaster Risk Reduction & Management Council central command, storm updates & evacuation directives.',
    tag: 'Camp Aguinaldo, QC',
  },
  {
    category: 'National Emergency',
    agency: 'DOST-PAGASA Central Weather Desk',
    number: '(02) 8284-0800',
    tel: 'tel:0282840800',
    coverage: 'Official Severe Weather Bulletins, Tropical Cyclone Wind Signals (TCWS), and flood advisories.',
    tag: 'Science Garden, QC',
  },
  {
    category: 'National Emergency',
    agency: 'Philippine Red Cross (PRC)',
    number: '143 / (02) 8527-8385',
    tel: 'tel:143',
    coverage: '24/7 Emergency ambulance dispatch, blood bank coordination, and disaster relief operations.',
    tag: 'National Blood & Relief',
  },

  // 2. Maritime, Flood Rescue & Evacuation
  {
    category: 'Flood & Maritime',
    agency: 'Philippine Coast Guard (PCG) Command',
    number: '(02) 8527-8481 / 0917-724-3682',
    tel: 'tel:0285278481',
    coverage: 'Maritime search and rescue, vessel stranding response, gale warnings, and port travel clearances.',
    tag: 'Maritime Safety',
  },
  {
    category: 'Flood & Maritime',
    agency: 'Bureau of Fire Protection (BFP) Special Rescue',
    number: '(02) 8426-0219 / (02) 8426-0246',
    tel: 'tel:0284260219',
    coverage: 'Urban flash flood extraction, swift water rescue, building collapsed structures, and fire response.',
    tag: 'National Rescue Unit',
  },
  {
    category: 'Flood & Maritime',
    agency: 'PNP Emergency Operations Desk',
    number: '117 / (02) 8722-0650',
    tel: 'tel:117',
    coverage: 'Law enforcement, peace and order security during mandatory evacuations, and search assistance.',
    tag: 'Camp Crame, QC',
  },
  {
    category: 'Flood & Maritime',
    agency: 'MMDA Metro Manila Flood Control',
    number: '136 / (02) 8882-4151',
    tel: 'tel:136',
    coverage: 'Metropolitan Manila flood water pump station status, road impassability, and rescue boats.',
    tag: 'Metro Manila Areas',
  },

  // 3. Health Emergency, Ambulance & Poison Control
  {
    category: 'Health & Medical',
    agency: 'DOH Health Emergency Management Bureau (HEMB)',
    number: '(02) 8651-7800 / 1555',
    tel: 'tel:1555',
    coverage: 'National hospital coordination, post-flood leptospirosis / waterborne disease alerts, and medical supplies.',
    tag: 'DOH Central Office',
  },
  {
    category: 'Health & Medical',
    agency: 'National Poison Management & Control (UP-PGH)',
    number: '(02) 8524-1078 / 0966-718-9904',
    tel: 'tel:0285241078',
    coverage: '24/7 Toxicology guidance for contaminated floodwater ingestion, chemical spills, and snake bites.',
    tag: 'Philippine General Hospital',
  },
  {
    category: 'Health & Medical',
    agency: 'National Center for Mental Health (NCMH) Crisis',
    number: '1553 / 0917-899-8727',
    tel: 'tel:1553',
    coverage: 'Toll-free 24/7 psychological first aid, post-disaster trauma assistance, and crisis counseling.',
    tag: 'Psychological Support',
  },

  // 4. Lifeline Utilities, Power Grid & Water Disruption
  {
    category: 'Lifeline Utilities',
    agency: 'Meralco Emergency Breakdown & Hazards',
    number: '16211 / (02) 8631-1111',
    tel: 'tel:16211',
    coverage: 'Report fallen electrical wires, exploded transformers, substation outages, and electrocution hazards.',
    tag: 'Luzon Power Grid',
  },
  {
    category: 'Lifeline Utilities',
    agency: 'National Grid Corporation of the Philippines (NGCP)',
    number: '(02) 8981-2100',
    tel: 'tel:0289812100',
    coverage: 'High-voltage transmission line damage reports, power grid system restoration bulletins.',
    tag: 'Transmission Grid',
  },
  {
    category: 'Lifeline Utilities',
    agency: 'Maynilad Water Emergency Hotline',
    number: '1626 / 0998-864-1446',
    tel: 'tel:1626',
    coverage: 'Water interruption advisories, pipe breakages, and tanker relief distribution for West Zone.',
    tag: 'West Metro Manila',
  },
  {
    category: 'Lifeline Utilities',
    agency: 'Manila Water Emergency Line',
    number: '1627 / (02) 7917-4222',
    tel: 'tel:1627',
    coverage: 'Emergency water tanker deployment, water contamination alerts, and East Zone repair status.',
    tag: 'East Metro Manila & Rizal',
  },
  {
    category: 'Lifeline Utilities',
    agency: 'DPWH Road Disaster & Clearing Hotline',
    number: '165-02 / (02) 8304-3000',
    tel: 'tel:16502',
    coverage: 'National highway landslide clearing, bridge structural damage reports, and impassable road bulletins.',
    tag: 'National Highways',
  },

  // 5. Social Welfare & Relief Logistics
  {
    category: 'Relief & Shelters',
    agency: 'DSWD Disaster Response Management Bureau (DRMB)',
    number: '(02) 8931-8101 / (02) 8951-7119',
    tel: 'tel:0289318101',
    coverage: 'Family food pack distribution logistics, evacuation center welfare, and post-calamity financial aid.',
    tag: 'National Social Welfare',
  },
  {
    category: 'Relief & Shelters',
    agency: 'Civil Defense Operations Center (OCD)',
    number: '(02) 8911-1406 / (02) 8912-5668',
    tel: 'tel:0289111406',
    coverage: 'Regional Office of Civil Defense operations and humanitarian logistics support during typhoons.',
    tag: 'Disaster Coordination',
  },
]

const categoryFilters = [
  'All Contacts',
  'National Emergency',
  'Flood & Maritime',
  'Health & Medical',
  'Lifeline Utilities',
  'Relief & Shelters',
]

export function ContactPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Contacts')
  const [searchParams] = useSearchParams()
  const viewParam = searchParams.get('view')
  const activeMobileView = viewParam === 'hotlines' ? 'hotlines' : 'directory'

  // Filter contacts based on search query and category tab
  const filteredContacts = useMemo(() => {
    return reliableContacts.filter((c) => {
      const matchesCategory =
        selectedCategory === 'All Contacts' || c.category === selectedCategory

      const matchesSearch =
        c.agency.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.coverage.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.tag.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  return (
    <main
      className={`${styles.dashboardContainer} grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-0 pt-0 w-full max-w-full min-w-0 overflow-x-hidden`}
      aria-label="Philippine Reliable Emergency and Disaster Contact Directory"
    >
      <SEO
        title="Verified Philippine Disaster & Emergency Contacts Directory | StormCast PH"
        description="Comprehensive, verified directory of reliable Philippine emergency hotlines: 911, NDRRMC, PAGASA Weather Desk, Coast Guard, Red Cross, BFP Rescue, DOH, and utility breakdown lines."
        canonical="https://stormcastph.com/contact"
        keywords="Philippine emergency hotlines, 911 Philippines, NDRRMC contact number, PAGASA hotline, Red Cross 143, Coast Guard rescue number, flood rescue hotlines"
      />

      {/* ── LEFT COLUMN (Column 1 - 4/12 Col): Priority Dials & Protocols ── */}
      <section
        id="hotlines"
        className={`${styles.leftPanel} ${activeMobileView !== 'hotlines' ? styles.mobileHidden : ''} lg:col-span-4 space-y-4 m-0 p-0 w-full min-w-0`}
        aria-label="Emergency Priority Hotlines and Protocol Guide"
      >
        {/* 1. Hero Overview Banner */}
        <header className={styles.contactBanner}>
          <div className={styles.bannerTag}>
            <span className={styles.pulseDot} aria-hidden="true" />
            <span>24/7 Verified Hotlines</span>
          </div>
          <h1 className={styles.bannerTitle}>Reliable Emergency &amp; Disaster Contacts</h1>
          <p className={styles.bannerText}>
            Direct, verified communications directory connecting Filipino communities with national response agencies, medical hotlines, search &amp; rescue, and lifeline utility teams.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Status</span>
              <strong className={styles.statVal}>24/7 Live</strong>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Coverage</span>
              <strong className={styles.statVal}>Archipelago</strong>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Standards</span>
              <strong className={styles.statVal}>NDRRMC Aligned</strong>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Access</span>
              <strong className={styles.statVal}>Toll-Free / Direct</strong>
            </div>
          </div>
        </header>

        {/* 2. Quick One-Touch Priority Dials */}
        <article className={styles.quickDialCard} aria-label="One-Touch Priority Emergency Numbers">
          <div className={styles.cardHeaderStack}>
            <div className={styles.badgeRow}>
              <span className={styles.quickDialTag}>🚨 Immediate Danger</span>
              <span className={styles.quickDialSubtag}>One-Touch Dial</span>
            </div>
            <h3 className={styles.quickDialTitle}>One-Touch Priority Hotlines</h3>
            <p className={styles.quickDialSub}>Direct emergency dispatch lines for immediate life-threatening situations.</p>
          </div>

          <div className={styles.priorityButtons}>
            <a href="tel:911" className={`${styles.priorityBtn} ${styles.btn911}`}>
              <span className={styles.priorityLabel}>National Police &amp; Rescue</span>
              <span className={styles.priorityNumber}>🚨 Dial 911</span>
            </a>
            <a href="tel:143" className={`${styles.priorityBtn} ${styles.btn143}`}>
              <span className={styles.priorityLabel}>Red Cross Ambulance</span>
              <span className={styles.priorityNumber}>🚑 Dial 143</span>
            </a>
            <a href="tel:136" className={`${styles.priorityBtn} ${styles.btn136}`}>
              <span className={styles.priorityLabel}>MMDA Flood Control</span>
              <span className={styles.priorityNumber}>🌊 Dial 136</span>
            </a>
            <a href="tel:1555" className={`${styles.priorityBtn} ${styles.btn1555}`}>
              <span className={styles.priorityLabel}>DOH Health Emergency</span>
              <span className={styles.priorityNumber}>🏥 Dial 1555</span>
            </a>
          </div>
        </article>

        {/* 3. Emergency Calling Protocol Guide */}
        <article className={styles.callingTipsCard} aria-label="Emergency Calling Guidelines">
          <div className={styles.cardHeaderStack}>
            <div className={styles.badgeRow}>
              <span className={styles.topBadgeGuide}>💡 Protocol</span>
              <span className={styles.sourceBadgeGuide}>911 Guidelines</span>
            </div>
            <h3 className={styles.callingTipsTitle}>Emergency Calling Guidelines</h3>
            <p className={styles.callingTipsSub}>Critical information to state immediately when calling emergency dispatchers.</p>
          </div>

          <div className={styles.tipsList}>
            <div className={styles.tipItem}>
              <span className={styles.tipIcon} aria-hidden="true">📍</span>
              <div className={styles.tipText}>
                <strong>Exact Location &amp; Landmarks:</strong> State your barangay, street name, and prominent structures (e.g., school, chapel, bridge).
              </div>
            </div>
            <div className={styles.tipItem}>
              <span className={styles.tipIcon} aria-hidden="true">🌊</span>
              <div className={styles.tipText}>
                <strong>Hazard &amp; Water Level:</strong> Report flood depth (knee/waist/roof level) and if water is rapidly rising with strong currents.
              </div>
            </div>
            <div className={styles.tipItem}>
              <span className={styles.tipIcon} aria-hidden="true">👥</span>
              <div className={styles.tipText}>
                <strong>Persons in Danger:</strong> Specify exact number of trapped individuals, elderly, infants, pregnant women, or injured persons.
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* ── RIGHT COLUMN (Column 2 - 8/12 Col): Searchable Verified Agency Directory ── */}
      <section
        id="directory"
        className={`${styles.rightPanel} ${activeMobileView !== 'directory' ? styles.mobileHidden : ''} lg:col-span-8 space-y-6 m-0 p-0 w-full min-w-0`}
        aria-label="Searchable Reliable Contact Directory"
      >
        {/* Search & Category Filter Card */}
        <article className={styles.searchFilterCard}>
          <div className={styles.cardHeaderStack}>
            <div className={styles.badgeRow}>
              <span className={styles.topBadgeDir}>📞 National Directory</span>
              <span className={styles.countBadge}>{filteredContacts.length} Verified Agencies</span>
            </div>
            <h2 className={styles.searchTitle}>National Disaster &amp; Public Service Directory</h2>
            <p className={styles.searchSub}>
              Searchable database of disaster responders, maritime rescue, hospital bureaus, and utility teams.
            </p>
          </div>

          {/* Search Input with Clear Button */}
          <div className={styles.searchInputWrapper}>
            <span className={styles.searchIcon} aria-hidden="true">🔍</span>
            <input
              type="text"
              placeholder="Search agency, hotline number, or coverage area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
              aria-label="Search contact directory"
            />
            {searchQuery && (
              <button
                type="button"
                className={styles.clearSearchBtn}
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Horizontal Scrollable Category Tabs */}
          <div className={styles.categoryTabs} role="tablist" aria-label="Agency Category Filters">
            {categoryFilters.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={selectedCategory === tab}
                className={`${styles.categoryTab} ${selectedCategory === tab ? styles.active : ''}`}
                onClick={() => setSelectedCategory(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </article>

        {/* Filtered Contact Cards Grid */}
        <section className={styles.categorySection} aria-label="Verified Contacts List">
          <div className={styles.sectionTopBar}>
            <div className={styles.activeFilterGroup}>
              <span className={styles.filterDot} aria-hidden="true" />
              <h3 className={styles.categoryTitle}>{selectedCategory}</h3>
            </div>
            <span className={styles.countTag}>{filteredContacts.length} Contacts Listed</span>
          </div>

          {filteredContacts.length === 0 ? (
            <div className={styles.emptyState}>
              <span style={{ fontSize: '2rem' }}>🔎</span>
              <p className={styles.emptyText}>Walang nahanap na agency para sa &ldquo;{searchQuery}&rdquo;.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All Contacts')
                }}
                className={styles.resetBtn}
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className={styles.contactsGrid}>
              {filteredContacts.map((contact) => (
                <article key={contact.agency} className={styles.contactCardItem}>
                  <div className={styles.contactTop}>
                    <div className={styles.agencyInfo}>
                      <strong className={styles.contactAgency}>{contact.agency}</strong>
                      <span className={styles.contactCategoryTag}>{contact.category}</span>
                    </div>
                    <a href={contact.tel} className={styles.callLink} title={`Call ${contact.agency}`}>
                      <span>📞</span>
                      <span>Call Now</span>
                    </a>
                  </div>

                  <div className={styles.contactNumberRow}>
                    <span className={styles.numIcon} aria-hidden="true">☎️</span>
                    <strong className={styles.contactNumber}>{contact.number}</strong>
                  </div>

                  <p className={styles.contactDesc}>{contact.coverage}</p>
                  <span className={styles.contactLocation}>📍 {contact.tag}</span>
                </article>
              ))}
            </div>
          )}
        </section>
      </section>
    </main>
  )
}

export default ContactPage
