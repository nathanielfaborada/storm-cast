import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { SITE_URL } from '../site.config.js'
import { meteorologicalGuides, faqItems } from '../data/guidesContent'
import styles from './GuidesPage.module.css'

const categories = [
  'All',
  'Typhoon Science',
  'Monsoons & Climate',
  'Disaster Preparedness',
  'Radar & Technology',
]

export function GuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedGuideId, setExpandedGuideId] = useState(null)
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(null)

  const filteredGuides = useMemo(() => {
    return meteorologicalGuides.filter((guide) => {
      const matchesCategory =
        selectedCategory === 'All' || guide.category === selectedCategory
      const query = searchQuery.trim().toLowerCase()
      const matchesQuery =
        !query ||
        guide.title.toLowerCase().includes(query) ||
        guide.summary.toLowerCase().includes(query) ||
        guide.keyTakeaways.some((t) => t.toLowerCase().includes(query)) ||
        guide.content.toLowerCase().includes(query)

      return matchesCategory && matchesQuery
    })
  }, [selectedCategory, searchQuery])

  const faqStructuredData = useMemo(() => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    }
  }, [])

  function toggleGuide(id) {
    setExpandedGuideId((prev) => (prev === id ? null : id))
  }

  function toggleFaq(index) {
    setExpandedFaqIndex((prev) => (prev === index ? null : index))
  }

  return (
    <main className={styles.pageContainer} aria-label="Philippine Weather & Climatology Guides">
      <SEO
        title="Philippine Weather & Climatology Knowledge Hub | StormCast PH"
        description="Comprehensive educational guides on Philippine typhoons, Amihan and Habagat monsoons, DOST-PAGASA TCWS signals, storm surges, Sierra Madre dynamics, and Doppler radar."
        canonical={`${SITE_URL}/guides`}
        keywords="Philippine weather guides, typhoon science, Amihan Habagat explanation, PAGASA TCWS warning signals, storm surge Tacloban, Sierra Madre shield, Doppler radar Philippines, emergency go-bag checklist"
        structuredData={faqStructuredData}
      />

      {/* Hero Header */}
      <header className={styles.heroSection}>
        <div className={styles.heroBadgeRow}>
          <span className={styles.pulseDot} aria-hidden="true" />
          <span className={styles.heroBadgeText}>Educational Weather Intelligence</span>
        </div>
        <h1 className={styles.heroTitle}>Philippine Weather &amp; Climatology Guides</h1>
        <p className={styles.heroSubtitle}>
          In-depth, peer-aligned meteorological analysis, hazard survival manuals, and atmospheric physics for communities across the Philippine Area of Responsibility.
        </p>

        {/* Quick Nav Badges */}
        <div className={styles.quickNavRow}>
          <a href="#guides-list" className={styles.quickNavLink}>
            📚 8 In-Depth Guides
          </a>
          <a href="#faq" className={styles.quickNavLink}>
            ❓ Climatology FAQs
          </a>
          <Link to="/history" className={styles.quickNavLink}>
            🌪️ Typhoon Archive
          </Link>
          <Link to="/preparedness" className={styles.quickNavLink}>
            🎒 Preparedness Hub
          </Link>
        </div>
      </header>

      {/* Filter and Search Controls */}
      <section id="guides-list" className={styles.filterSection} aria-label="Filter Guides">
        <div className={styles.searchBarRow}>
          <div className={styles.inputWrapper}>
            <span className={styles.searchIcon} aria-hidden="true">⌕</span>
            <input
              type="text"
              placeholder="Search guides by topic, storm, monsoon, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
              aria-label="Search guides"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className={styles.clearBtn}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className={styles.categoryPillsRow} role="tablist" aria-label="Filter by Category">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`${styles.categoryPill} ${
                selectedCategory === cat ? styles.activeCategory : ''
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <span className={styles.resultsCount}>
          Showing {filteredGuides.length} of {meteorologicalGuides.length} meteorological guides
        </span>
      </section>

      {/* Guides Grid */}
      <section className={styles.guidesGrid} aria-label="Meteorological Articles List">
        {filteredGuides.map((guide) => {
          const isExpanded = expandedGuideId === guide.id

          return (
            <article key={guide.id} className={styles.guideCard} id={guide.id}>
              <div className={styles.guideHeader}>
                <div className={styles.metaBadgeRow}>
                  <span className={styles.categoryBadge}>{guide.category}</span>
                  <span className={styles.readTimeBadge}>⏱️ {guide.readTime}</span>
                </div>
                <h2 className={styles.guideTitle}>{guide.title}</h2>
                <div className={styles.authorRow}>
                  <span>By <strong>{guide.author}</strong></span>
                  <span className={styles.metaDot}>•</span>
                  <span>Published {guide.publishedDate}</span>
                </div>
              </div>

              <p className={styles.guideSummary}>{guide.summary}</p>

              {/* Key Takeaways Box */}
              <div className={styles.takeawaysBox}>
                <strong className={styles.takeawaysTitle}>📌 Key Scientific Insights</strong>
                <ul className={styles.takeawaysList}>
                  {guide.keyTakeaways.map((takeaway, i) => (
                    <li key={i}>{takeaway}</li>
                  ))}
                </ul>
              </div>

              {/* Expandable Full Content */}
              {isExpanded && (
                <div className={styles.fullContent}>
                  <div className={styles.markdownWrapper}>
                    {guide.content.split('\n\n').map((block, idx) => {
                      const trimmed = block.trim()
                      if (trimmed.startsWith('### ')) {
                        return <h3 key={idx} className={styles.contentH3}>{trimmed.replace('### ', '')}</h3>
                      }
                      if (trimmed.startsWith('#### ')) {
                        return <h4 key={idx} className={styles.contentH4}>{trimmed.replace('#### ', '')}</h4>
                      }
                      if (trimmed.startsWith('- ')) {
                        const items = trimmed.split('\n- ').map((it) => it.replace(/^- /, ''))
                        return (
                          <ul key={idx} className={styles.contentUl}>
                            {items.map((item, itemIdx) => (
                              <li key={itemIdx}>{item}</li>
                            ))}
                          </ul>
                        )
                      }
                      return <p key={idx} className={styles.contentPara}>{trimmed}</p>
                    })}
                  </div>
                </div>
              )}

              <footer className={styles.cardFooter}>
                <button
                  type="button"
                  onClick={() => toggleGuide(guide.id)}
                  className={styles.toggleGuideBtn}
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? '▲ Collapse Guide' : '▼ Read Full Meteorological Guide'}
                </button>
              </footer>
            </article>
          )
        })}

        {filteredGuides.length === 0 && (
          <div className={styles.noResultsCard}>
            <p>No guides found matching &quot;{searchQuery}&quot;.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
              }}
              className={styles.resetSearchBtn}
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Structured Climatology & Typhoon FAQ Section */}
      <section id="faq" className={styles.faqSection} aria-label="Frequently Asked Questions">
        <div className={styles.faqHeader}>
          <span className={styles.faqTag}>❓ Reference Knowledge</span>
          <h2 className={styles.faqTitle}>Philippine Climatology &amp; Disaster FAQs</h2>
          <p className={styles.faqSub}>
            Common questions regarding DOST-PAGASA protocols, monsoon dynamics, and emergency readiness.
          </p>
        </div>

        <div className={styles.faqList}>
          {faqItems.map((item, index) => {
            const isOpen = expandedFaqIndex === index

            return (
              <article key={index} className={styles.faqItem}>
                <button
                  type="button"
                  className={styles.faqQuestionBtn}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.faqQuestionText}>{item.q}</span>
                  <span className={styles.faqToggleIcon}>{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className={styles.faqAnswerBox}>
                    <p className={styles.faqAnswerText}>{item.a}</p>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </section>

      {/* Editorial Attribution & Authority Card */}
      <section className={styles.attributionCard} aria-label="Editorial Authorship and Scientific Integrity">
        <div className={styles.authorBadge}>🏛️ Verified Scientific Sources</div>
        <h3 className={styles.authorTitle}>StormCast PH Meteorological Editorial Desk</h3>
        <p className={styles.authorDesc}>
          Written, curated, and fact-checked by <strong>Nathaniel Faborada</strong> (Bulacan, Philippines)
          in adherence with operational bulletins published by the <strong>Department of Science and Technology – PAGASA</strong>,
          the <strong>World Meteorological Organization (WMO)</strong>, and the <strong>National Disaster Risk Reduction and Management Council (NDRRMC)</strong>.
        </p>
        <div className={styles.legalDisclaimer}>
          Disclaimer: StormCast PH is an open-access public service weather intelligence platform. Official evacuation orders and statutory disaster declarations must always be followed as issued by DOST-PAGASA and your respective Local Government Unit (LGU).
        </div>
      </section>
    </main>
  )
}

export default GuidesPage
