export function GoogleAdSlot({ className = '', label = 'Advertisement' }) {
  return (
    <aside className={`panel google-ad-slot ${className}`} aria-label={label}>
      <span>Google Ad</span>
      <strong>{label}</strong>
    </aside>
  )
}
