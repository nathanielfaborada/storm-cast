export function LazadaAd({ className = '' }) {
  return (
    <aside className={`panel lazada-ad ${className}`} aria-label="Lazada advertisement">
      <div className="lazada-mark" aria-hidden="true">
        <span />
      </div>
      <strong>Lazada</strong>
    </aside>
  )
}
