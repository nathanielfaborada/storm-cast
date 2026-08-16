import { useState } from 'react'
import styles from './HouseholdSupplyCalculator.module.css'

export function HouseholdSupplyCalculator() {
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(1)
  const [seniors, setSeniors] = useState(1)
  const [pets, setPets] = useState(1)

  const totalHumans = adults + children + seniors
  // 72 Hours (3 Days)
  // Water: 4L per person per day (2.5L drinking + 1.5L sanitation) + 1L per pet per day
  const waterLiters = totalHumans * 4 * 3 + pets * 1 * 3
  const gallonJugs = Math.ceil(waterLiters / 19)
  // Meals: 3 meal portions per person per day
  const totalMeals = totalHumans * 3 * 3
  // Powerbank storage: 10,000 mAh per adult + senior
  const powerbankMah = (adults + seniors) * 10000

  return (
    <article className={`${styles.calcCard} w-full`} aria-label="Dynamic 72-Hour Household Supply & Water Estimator">
      {/* ── 1. Top Header Stack (Clean, Uncrowded Hierarchy) ── */}
      <div className={styles.cardHeaderStack}>
        <div className={styles.badgeRow}>
          <span className={styles.topBadge}>🧮 72h Rations</span>
          <span className={styles.badge}>PDRRMC Standard</span>
        </div>
        <h3 className={styles.title}>72-Hour Supply &amp; Water Calculator</h3>
        <p className={styles.subtitle}>
          Dynamic disaster survival rations calibrated for Philippine households.
        </p>
      </div>

      {/* ── 2. Demographic Counter Grid ── */}
      <div className={styles.counterGrid}>
        {/* Adults */}
        <div className={styles.counterItem}>
          <div className={styles.counterMeta}>
            <span className={styles.counterLabel}>Adults</span>
            <span className={styles.counterSub}>18–59 yrs</span>
          </div>
          <div className={styles.counterControls}>
            <button
              type="button"
              className={styles.counterBtn}
              onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
              aria-label="Decrease adults"
            >
              −
            </button>
            <span className={styles.counterVal}>{adults}</span>
            <button
              type="button"
              className={styles.counterBtn}
              onClick={() => setAdults((prev) => prev + 1)}
              aria-label="Increase adults"
            >
              +
            </button>
          </div>
        </div>

        {/* Children */}
        <div className={styles.counterItem}>
          <div className={styles.counterMeta}>
            <span className={styles.counterLabel}>Children</span>
            <span className={styles.counterSub}>0–17 yrs</span>
          </div>
          <div className={styles.counterControls}>
            <button
              type="button"
              className={styles.counterBtn}
              onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
              aria-label="Decrease children"
            >
              −
            </button>
            <span className={styles.counterVal}>{children}</span>
            <button
              type="button"
              className={styles.counterBtn}
              onClick={() => setChildren((prev) => prev + 1)}
              aria-label="Increase children"
            >
              +
            </button>
          </div>
        </div>

        {/* Seniors */}
        <div className={styles.counterItem}>
          <div className={styles.counterMeta}>
            <span className={styles.counterLabel}>Seniors</span>
            <span className={styles.counterSub}>60+ yrs</span>
          </div>
          <div className={styles.counterControls}>
            <button
              type="button"
              className={styles.counterBtn}
              onClick={() => setSeniors((prev) => Math.max(0, prev - 1))}
              aria-label="Decrease seniors"
            >
              −
            </button>
            <span className={styles.counterVal}>{seniors}</span>
            <button
              type="button"
              className={styles.counterBtn}
              onClick={() => setSeniors((prev) => prev + 1)}
              aria-label="Increase seniors"
            >
              +
            </button>
          </div>
        </div>

        {/* Pets */}
        <div className={styles.counterItem}>
          <div className={styles.counterMeta}>
            <span className={styles.counterLabel}>Pets</span>
            <span className={styles.counterSub}>Dogs/Cats</span>
          </div>
          <div className={styles.counterControls}>
            <button
              type="button"
              className={styles.counterBtn}
              onClick={() => setPets((prev) => Math.max(0, prev - 1))}
              aria-label="Decrease pets"
            >
              −
            </button>
            <span className={styles.counterVal}>{pets}</span>
            <button
              type="button"
              className={styles.counterBtn}
              onClick={() => setPets((prev) => prev + 1)}
              aria-label="Increase pets"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* ── 3. Horizontal Computed Output Rows ── */}
      <div className={styles.resultsList}>
        {/* Potable Drinking Water Row */}
        <div className={`${styles.resultRow} ${styles.water}`}>
          <div className={styles.rowLeft}>
            <span className={styles.rowIcon} aria-hidden="true">💧</span>
            <div className={styles.rowTextGroup}>
              <strong className={styles.rowTitle}>Potable Water (72h)</strong>
              <p className={styles.rowDetail}>
                4L/person/day + 1L/pet for drinking &amp; basic sanitation.
              </p>
            </div>
          </div>
          <div className={styles.rowRight}>
            <span className={styles.rowValue}>{waterLiters} Liters</span>
            <span className={styles.rowPill}>~{gallonJugs} Blue Jugs</span>
          </div>
        </div>

        {/* Non-Perishable Food Servings Row */}
        <div className={`${styles.resultRow} ${styles.food}`}>
          <div className={styles.rowLeft}>
            <span className={styles.rowIcon} aria-hidden="true">🥫</span>
            <div className={styles.rowTextGroup}>
              <strong className={styles.rowTitle}>Food Reserves (72h)</strong>
              <p className={styles.rowDetail}>
                Pull-tab canned meals, biscuits &amp; energy food.
              </p>
            </div>
          </div>
          <div className={styles.rowRight}>
            <span className={styles.rowValue}>{totalMeals} Servings</span>
            <span className={styles.rowPill}>3 Meals / Day</span>
          </div>
        </div>

        {/* Battery & Powerbanks Row */}
        <div className={`${styles.resultRow} ${styles.power}`}>
          <div className={styles.rowLeft}>
            <span className={styles.rowIcon} aria-hidden="true">⚡</span>
            <div className={styles.rowTextGroup}>
              <strong className={styles.rowTitle}>Power Reserves</strong>
              <p className={styles.rowDetail}>
                For {adults + seniors} emergency phones &amp; LED torches.
              </p>
            </div>
          </div>
          <div className={styles.rowRight}>
            <span className={styles.rowValue}>{powerbankMah.toLocaleString()} mAh</span>
            <span className={styles.rowPill}>72h Comms</span>
          </div>
        </div>
      </div>

      {/* ── 4. Baseline Reference Formula ── */}
      <div className={styles.formulaStrip}>
        <span className={styles.formulaIcon} aria-hidden="true">💡</span>
        <span className={styles.formulaText}>
          <strong>Formula Baseline:</strong> Philippine Red Cross standard: <strong>4 Liters/day/person</strong> for 72-hour family typhoon resilience.
        </span>
      </div>
    </article>
  )
}

export default HouseholdSupplyCalculator
