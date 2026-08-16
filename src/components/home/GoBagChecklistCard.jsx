import { useState } from 'react'
import styles from './GoBagChecklistCard.module.css'

const initialItems = [
  {
    id: 'water',
    icon: '💧',
    label: 'Water & Sustenance',
    hint: '4L water/person + 3 days ready-to-eat food',
    checked: true,
  },
  {
    id: 'meds',
    icon: '🩹',
    label: 'First Aid & Maintenance Meds',
    hint: 'Bandages, antiseptics & 7-day prescriptions',
    checked: true,
  },
  {
    id: 'power',
    icon: '🔋',
    label: 'Powerbank & High-Lumen Light',
    hint: '20,000mAh+ bank, cables & extra batteries',
    checked: true,
  },
  {
    id: 'radio',
    icon: '📻',
    label: 'Emergency Radio & Whistle',
    hint: 'Battery AM/FM tuner & signaling whistle',
    checked: false,
  },
  {
    id: 'docs',
    icon: '📂',
    label: 'Waterproof Document Pouch',
    hint: 'IDs, land titles, cash & emergency contacts',
    checked: false,
  },
]

export function GoBagChecklistCard() {
  const [items, setItems] = useState(initialItems)

  const checkedCount = items.filter((i) => i.checked).length
  const totalCount = items.length
  const progressPercent = Math.round((checkedCount / totalCount) * 100)

  function toggleItem(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    )
  }

  function handleToggleAll() {
    const allChecked = checkedCount === totalCount
    setItems((prev) => prev.map((item) => ({ ...item, checked: !allChecked })))
  }

  return (
    <article className={`${styles.cardContainer} w-full`} aria-label="72-Hour Emergency Go-Bag Checklist">
      <div className={styles.headerRow}>
        <div className={styles.titleBlock}>
          <div className={styles.titleRow}>
            <span className={styles.bagIcon} aria-hidden="true">🎒</span>
            <h3 className={styles.title}>72-Hour Go-Bag Checklist</h3>
          </div>
          <p className={styles.subtitle}>Essential disaster survival readiness</p>
        </div>
        <span className={`${styles.progressBadge} ${progressPercent === 100 ? styles.complete : ''}`}>
          {checkedCount}/{totalCount} Ready
        </span>
      </div>

      {/* Dynamic Progress Bar */}
      <div className={styles.progressBarTrack} aria-hidden="true">
        <div className={styles.progressBarFill} style={{ width: `${progressPercent}%` }} />
      </div>

      {/* Checklist Items */}
      <div className={styles.itemList}>
        {items.map((item) => (
          <label
            key={item.id}
            className={`${styles.checkItem} ${item.checked ? styles.checked : ''}`}
          >
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => toggleItem(item.id)}
              className={styles.checkbox}
            />
            <span className={styles.itemIcon} aria-hidden="true">{item.icon}</span>
            <div className={styles.itemContent}>
              <span className={styles.itemLabel}>{item.label}</span>
              <span className={styles.itemHint}>{item.hint}</span>
            </div>
          </label>
        ))}
      </div>

      <div className={styles.actionRow}>
        <span className={styles.readinessStatus}>
          {progressPercent === 100 ? '✅ 100% Evacuation Ready' : `${progressPercent}% Packed`}
        </span>
        <button
          type="button"
          onClick={handleToggleAll}
          className={styles.toggleAllBtn}
        >
          {checkedCount === totalCount ? 'Reset All' : 'Mark All Ready'}
        </button>
      </div>
    </article>
  )
}

export default GoBagChecklistCard
