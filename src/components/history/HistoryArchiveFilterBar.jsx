import styles from './HistoryArchiveFilterBar.module.css'

export function HistoryArchiveFilterBar({
  query,
  onQueryChange,
  selectedPeriod,
  onPeriodChange,
  selectedCategory,
  onCategoryChange,
  selectedRegion,
  onRegionChange,
  resultsCount,
  onClear,
}) {
  const hasActiveFilters =
    Boolean(query) ||
    selectedPeriod !== 'All' ||
    selectedCategory !== 'All' ||
    selectedRegion !== 'All'

  return (
    <section className={`${styles.filterContainer} w-full`} aria-label="Typhoon Archive Search and Filters">
      {/* Search Input Row */}
      <div className={styles.searchRow}>
        <div className={styles.searchInputWrapper}>
          <span className={styles.searchLens} aria-hidden="true">🔍</span>
          <input
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search typhoon name, year, or province..."
            className={styles.searchInput}
            aria-label="Search typhoon archive"
          />
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClear}
            className={styles.clearBtn}
          >
            ✕ Reset
          </button>
        )}
      </div>

      {/* Filter Select Controls */}
      <div className={styles.filterControlsRow}>
        <div className={styles.selectGroup}>
          <label htmlFor="period-select" className={styles.selectLabel}>Decade</label>
          <select
            id="period-select"
            value={selectedPeriod}
            onChange={(e) => onPeriodChange(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="All">All Decades</option>
            <option value="2020s">2020s (Recent)</option>
            <option value="2010s">2010s (Haiyan Era)</option>
            <option value="2000s">2000s (Ondoy Era)</option>
            <option value="Pre-2000s">Pre-2000s Historic</option>
          </select>
        </div>

        <div className={styles.selectGroup}>
          <label htmlFor="category-select" className={styles.selectLabel}>Intensity</label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="All">All Intensities</option>
            <option value="Super Typhoon">Super Typhoon (Cat 5)</option>
            <option value="Typhoon">Typhoon (Cat 1–4)</option>
            <option value="Severe Tropical Storm">Severe Tropical Storm</option>
            <option value="Tropical Storm">Tropical Storm</option>
          </select>
        </div>

        <div className={styles.selectGroup}>
          <label htmlFor="region-select" className={styles.selectLabel}>Region</label>
          <select
            id="region-select"
            value={selectedRegion}
            onChange={(e) => onRegionChange(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="All">All Regions</option>
            <option value="Luzon">Luzon / NCR</option>
            <option value="Visayas">Visayas</option>
            <option value="Mindanao">Mindanao</option>
            <option value="Bicol">Bicol Region</option>
          </select>
        </div>
      </div>

      {/* Metadata & Active Pills */}
      <div className={styles.resultsMetaRow}>
        <span>
          Showing <strong>{resultsCount}</strong> archived records
        </span>

        <div className={styles.activeFiltersPills}>
          {selectedPeriod !== 'All' && <span className={styles.filterPill}>{selectedPeriod}</span>}
          {selectedCategory !== 'All' && <span className={styles.filterPill}>{selectedCategory}</span>}
          {selectedRegion !== 'All' && <span className={styles.filterPill}>{selectedRegion}</span>}
        </div>
      </div>
    </section>
  )
}

export default HistoryArchiveFilterBar
