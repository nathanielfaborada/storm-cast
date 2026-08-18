import { SITE_URL } from '../site.config.js'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import {
  ClimateDriversCard,
  DecadeDamageStatsCard,
  HistoricalTrackViewerCard,
  HistoricalTrendsCard,
  HistoryArchiveFilterBar,
  LandfallHotspotsCard,
  RecordBreakersGrid,
  RetiredNamesRegistryTable,
  TyphoonCompareCard,
} from '../components/history'
import { namedTyphoonTopics, typhoonYearTopics } from '../data/weatherContent'
import styles from './TyphoonHistoryPage.module.css'

const batchSize = 6

export function TyphoonHistoryPage() {
  const [query, setQuery] = useState('')
  const [selectedPeriod, setSelectedPeriod] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedRegion, setSelectedRegion] = useState('All')
  const [visibleCount, setVisibleCount] = useState(batchSize)
  const [searchParams] = useSearchParams()
  const viewParam = searchParams.get('view')
  const activeMobileView = viewParam === 'analytics' ? 'analytics' : 'archives'

  // Master historical records (Named storms + yearly seasons)
  const allRecords = useMemo(() => {
    const named = namedTyphoonTopics.map((topic) => ({
      type: 'storm',
      title: topic.title,
      year: topic.year,
      localName: topic.localName,
      category: topic.category || 'Typhoon',
      maxWinds: topic.maxWinds,
      impactedAreas: topic.impactedAreas,
      extract: topic.fallback,
      sourceUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent(topic.title)}`,
    }))

    const seasons = typhoonYearTopics.map((topic) => ({
      type: 'season',
      title: topic.title,
      year: topic.year,
      category: 'Western Pacific Season',
      impactedAreas: 'Philippine Area of Responsibility',
      extract: topic.fallback,
      sourceUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent(topic.title)}`,
    }))

    return [...named, ...seasons].sort((a, b) => (b.year || 0) - (a.year || 0))
  }, [])

  // Filter computation
  const filteredRecords = useMemo(() => {
    const q = query.trim().toLowerCase()

    return allRecords.filter((rec) => {
      // 1. Text search
      const matchesSearch =
        !q ||
        `${rec.title} ${rec.localName || ''} ${rec.year || ''} ${rec.impactedAreas || ''}`
          .toLowerCase()
          .includes(q)

      // 2. Decade filter
      let matchesDecade = true
      if (selectedPeriod === '2020s') matchesDecade = rec.year >= 2020 && rec.year <= 2029
      else if (selectedPeriod === '2010s') matchesDecade = rec.year >= 2010 && rec.year <= 2019
      else if (selectedPeriod === '2000s') matchesDecade = rec.year >= 2000 && rec.year <= 2009
      else if (selectedPeriod === 'Pre-2000s') matchesDecade = rec.year < 2000

      // 3. Category filter
      let matchesCat = true
      if (selectedCategory !== 'All') {
        matchesCat = rec.category.toLowerCase().includes(selectedCategory.toLowerCase())
      }

      // 4. Region filter
      let matchesReg = true
      if (selectedRegion !== 'All') {
        matchesReg = (rec.impactedAreas || '')
          .toLowerCase()
          .includes(selectedRegion.toLowerCase())
      }

      return matchesSearch && matchesDecade && matchesCat && matchesReg
    })
  }, [allRecords, query, selectedPeriod, selectedCategory, selectedRegion])

  const visibleRecords = filteredRecords.slice(0, visibleCount)
  const hasMoreRecords = visibleCount < filteredRecords.length

  function handleResetFilters() {
    setQuery('')
    setSelectedPeriod('All')
    setSelectedCategory('All')
    setSelectedRegion('All')
    setVisibleCount(batchSize)
  }

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 w-full max-w-full min-w-0 overflow-x-hidden box-border">
      <SEO
        title="Philippine Typhoon Historical Archives & Case Studies | StormCast PH"
        description="Comprehensive historical database of Philippine tropical cyclones, side-by-side storm comparison tool, trajectory waypoints, retired storm names registry, and meteorological records."
        canonical={`${SITE_URL}/history`}
        keywords="Philippine typhoon history, Yolanda, Odette, Kristine, Pepito, retired storm names, PAGASA TCWS archives, typhoon trajectory"
      />

      <div className={`${styles.dashboardContainer} grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-0 pt-0 w-full`}>
        {/* LEFT COLUMN (Column 1): Complete Historical Analytics & Educational Suite */}
        <section
          id="analytics"
          className={`${styles.leftPanel} ${activeMobileView !== 'analytics' ? styles.mobileHidden : ''} lg:col-span-4 space-y-4 m-0 p-0`}
          aria-label="Climatology and Typhoon Analytics"
        >
          {/* 1. Historical Climatology Trends */}
          <HistoricalTrendsCard />

          {/* 2. Side-by-Side Typhoon Comparison Tool */}
          <TyphoonCompareCard />

          {/* 3. National Weather Record Breakers */}
          <RecordBreakersGrid />

          {/* 4. Regional Landfall Hotspots Ranking */}
          <LandfallHotspotsCard />

          {/* 5. Pacific Climate Drivers (ENSO Modulation) */}
          <ClimateDriversCard />

          {/* 6. Decadal Damage & Casualty Toll Stats */}
          <DecadeDamageStatsCard />
        </section>

        {/* RIGHT COLUMN (Column 2): Case Studies, Trajectory Map, and Retired Names */}
        <section
          id="archives"
          className={`${styles.rightPanel} ${activeMobileView !== 'archives' ? styles.mobileHidden : ''} lg:col-span-8 space-y-6 m-0 p-0`}
          aria-label="Storm Archives and Case Studies"
        >
          <header className={`${styles.overviewBanner} m-0 mt-0`}>
            <span className={styles.bannerBadge}>Historical Meteorological Repository</span>
            <h1 className={styles.bannerTitle}>Philippine Typhoon Archives & Case Studies</h1>
            <p className={styles.bannerText}>
              Historical documentation of significant tropical cyclones, landfall trajectories, atmospheric pressures, and disaster risk reduction milestones across the Philippine Area of Responsibility (PAR).
            </p>
          </header>

          <HistoryArchiveFilterBar
            query={query}
            onQueryChange={(val) => {
              setQuery(val)
              setVisibleCount(batchSize)
            }}
            selectedPeriod={selectedPeriod}
            onPeriodChange={(p) => {
              setSelectedPeriod(p)
              setVisibleCount(batchSize)
            }}
            selectedCategory={selectedCategory}
            onCategoryChange={(c) => {
              setSelectedCategory(c)
              setVisibleCount(batchSize)
            }}
            selectedRegion={selectedRegion}
            onRegionChange={(r) => {
              setSelectedRegion(r)
              setVisibleCount(batchSize)
            }}
            resultsCount={filteredRecords.length}
            onClear={handleResetFilters}
          />

          <HistoricalTrackViewerCard />

          {/* Chronological Typhoon Case Studies Section */}
          <section className={styles.recordsSection} aria-label="Chronological Typhoon Case Studies">
            <div className={styles.sectionHeader}>
              <div className={styles.sectionTitleRow}>
                <span className={styles.sectionIcon} aria-hidden="true">🌪️</span>
                <h2 className={styles.sectionTitle}>
                  {query ? `Results for "${query}"` : 'Chronological Typhoon Case Studies'}
                </h2>
              </div>
              <span className={styles.recordsCount}>{filteredRecords.length} records</span>
            </div>

            <div className={styles.recordsGrid}>
              {visibleRecords.map((record) => (
                <article key={`${record.title}-${record.year}`} className={styles.caseStudyCard}>
                  <div className={styles.cardMain}>
                    <div className={styles.cardTop}>
                      <span className={styles.yearTag}>{record.year || 'Historic'}</span>
                      <span className={styles.catPill}>{record.category}</span>
                    </div>

                    <h3 className={styles.cardTitle}>{record.title}</h3>
                    {record.localName && (
                      <span className={styles.localNameText}>
                        🇵🇭 PAGASA Local Name: <strong>{record.localName}</strong>
                      </span>
                    )}

                    <div className={styles.metaRow}>
                      {record.maxWinds && (
                        <span>💨 <strong>Peak:</strong> {record.maxWinds}</span>
                      )}
                      {record.impactedAreas && (
                        <span>📍 <strong>Areas:</strong> {record.impactedAreas}</span>
                      )}
                    </div>

                    <p className={styles.extractText}>{record.extract}</p>
                  </div>

                  <footer className={styles.cardFooter}>
                    <span className={styles.studyTypeTag}>
                      {record.type === 'storm' ? 'Landfall Study' : 'Season Overview'}
                    </span>
                    <a
                      href={record.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.wikiLink}
                    >
                      Wikipedia Archive ↗
                    </a>
                  </footer>
                </article>
              ))}

              {visibleRecords.length === 0 && (
                <div className={styles.emptyCard}>
                  <p>No historical typhoons matched your search criteria.</p>
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className={styles.loadMoreBtn}
                    style={{ width: 'auto', padding: '6px 16px' }}
                  >
                    Reset All Filters
                  </button>
                </div>
              )}
            </div>

            {hasMoreRecords && (
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + batchSize)}
                className={styles.loadMoreBtn}
              >
                Load Older Typhoon Records ({filteredRecords.length - visibleCount} remaining) ↓
              </button>
            )}
          </section>

          {/* Retired Storm Names Registry */}
          <RetiredNamesRegistryTable />
        </section>
      </div>
    </div>
  )
}

export default TyphoonHistoryPage
