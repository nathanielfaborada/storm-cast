import { useState } from 'react'
import { SITE_URL } from '../../site.config.js'
import styles from './FamilyEmergencyPlanGenerator.module.css'

export function FamilyEmergencyPlanGenerator() {
  const [formData, setFormData] = useState({
    familyName: 'Dela Cruz Household',
    primaryMeetingPoint: 'Barangay Holy Spirit Covered Court',
    secondaryMeetingPoint: 'San Roque Parish Evacuation Site',
    outOfTownContact: 'Tita Elena (Cebu City) - 0917-555-1234',
    specialNeeds: 'Lola Carmen maintenance meds (Amlodipine), 2 Pet dogs with leash',
  })

  const [copied, setCopied] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleCopyPlan() {
    const textSnippet = `🚨 DISASTER EMERGENCY ACTION PLAN
👨‍👩‍👧‍👦 Household: ${formData.familyName || 'Family Plan'}
📍 Primary Meeting Point: ${formData.primaryMeetingPoint || 'None specified'}
📍 Backup Meeting Site: ${formData.secondaryMeetingPoint || 'None specified'}
📞 Safe-Zone Contact: ${formData.outOfTownContact || 'None specified'}
💊 Special Needs / Provisions: ${formData.specialNeeds || 'None listed'}
━━━━━━━━━━━━━━━━━━━━
Generated via StormCast PH (${SITE_URL}/preparedness)`

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textSnippet).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
      })
    }
  }

  function handlePrint() {
    window.print()
  }

  return (
    <article className={`${styles.generatorCard} w-full`} aria-label="Family Disaster Action Plan Generator">
      {/* ── Clean Single-Row Header ── */}
      <div className={styles.headerRow}>
        <div className={styles.titleGroup}>
          <div className={styles.titleRow}>
            <span className={styles.titleIcon} aria-hidden="true">👨‍👩‍👧‍👦</span>
            <h3 className={styles.title}>Family Disaster Action Plan</h3>
          </div>
          <p className={styles.subtitle}>
            Offline emergency action card for power and cellular network outages.
          </p>
        </div>
        <span className={styles.badge}>Interactive Tool</span>
      </div>

      {/* ── Interactive Input Form ── */}
      <form onSubmit={(e) => e.preventDefault()} className={styles.formGrid}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor="familyName">
            Family / Household Name:
          </label>
          <input
            id="familyName"
            name="familyName"
            type="text"
            className={styles.textInput}
            value={formData.familyName}
            onChange={handleChange}
            placeholder="e.g. Dela Cruz Family"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor="primaryMeetingPoint">
            Primary Evacuation Meeting Point:
          </label>
          <input
            id="primaryMeetingPoint"
            name="primaryMeetingPoint"
            type="text"
            className={styles.textInput}
            value={formData.primaryMeetingPoint}
            onChange={handleChange}
            placeholder="e.g. Barangay Evacuation Center"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor="secondaryMeetingPoint">
            Secondary / Backup Meeting Site:
          </label>
          <input
            id="secondaryMeetingPoint"
            name="secondaryMeetingPoint"
            type="text"
            className={styles.textInput}
            value={formData.secondaryMeetingPoint}
            onChange={handleChange}
            placeholder="e.g. High-ground relative residence"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor="outOfTownContact">
            Out-of-Town Relative Contact:
          </label>
          <input
            id="outOfTownContact"
            name="outOfTownContact"
            type="text"
            className={styles.textInput}
            value={formData.outOfTownContact}
            onChange={handleChange}
            placeholder="e.g. Tita Elena (Cebu) - 0917-555-1234"
          />
        </div>

        <div className={`${styles.inputGroup} ${styles.fullWidthGroup}`}>
          <label className={styles.inputLabel} htmlFor="specialNeeds">
            Special Needs / Elderly / Infant / Pet Provisions:
          </label>
          <textarea
            id="specialNeeds"
            name="specialNeeds"
            rows={2}
            className={styles.textAreaInput}
            value={formData.specialNeeds}
            onChange={handleChange}
            placeholder="e.g. Maintenance medicines (Amlodipine), baby formula, pet carrier cage"
          />
        </div>
      </form>

      {/* ── Live High-Contrast Action Card Preview (Real-Time) ── */}
      <div id="printable-emergency-card" className={styles.previewCard} aria-live="polite">
        <div className={styles.previewHeader}>
          <div className={styles.previewHeaderLeft}>
            <span className={styles.previewIcon} aria-hidden="true">📋</span>
            <strong className={styles.previewTitle}>
              {formData.familyName ? `${formData.familyName} Action Card` : 'Household Disaster Action Card'}
            </strong>
          </div>
          <span className={styles.previewTag}>NDRRMC Aligned</span>
        </div>

        <div className={styles.previewGrid}>
          <div className={styles.previewBox}>
            <span className={styles.previewBoxLabel}>📍 Primary Assembly Point</span>
            <strong className={styles.previewBoxValue}>
              {formData.primaryMeetingPoint || 'Not set'}
            </strong>
          </div>

          <div className={styles.previewBox}>
            <span className={styles.previewBoxLabel}>📍 Backup Meeting Site</span>
            <strong className={styles.previewBoxValue}>
              {formData.secondaryMeetingPoint || 'Not set'}
            </strong>
          </div>

          <div className={styles.previewBox}>
            <span className={styles.previewBoxLabel}>📞 Safe-Zone Contact</span>
            <strong className={styles.previewBoxValue}>
              {formData.outOfTownContact || 'Not set'}
            </strong>
          </div>

          <div className={styles.previewBox}>
            <span className={styles.previewBoxLabel}>💊 Special Medical &amp; Supplies</span>
            <strong className={styles.previewBoxValue}>
              {formData.specialNeeds || 'None listed'}
            </strong>
          </div>
        </div>
      </div>

      {/* ── Action Buttons Row ── */}
      <div className={styles.actionRow}>
        <button
          type="button"
          onClick={handleCopyPlan}
          className={`${styles.btnPrimary} ${copied ? styles.btnCopied : ''}`}
          aria-label="Copy emergency plan text to clipboard for SMS or messaging"
        >
          <span>{copied ? '✓' : '📋'}</span>
          <span>{copied ? 'Copied to Clipboard!' : 'Copy Plan for SMS / Messenger'}</span>
        </button>

        <button
          type="button"
          onClick={handlePrint}
          className={styles.btnSecondary}
          aria-label="Print or save family emergency action card as PDF"
        >
          <span>🖨️</span>
          <span>Print / Save PDF</span>
        </button>
      </div>
    </article>
  )
}

export default FamilyEmergencyPlanGenerator
