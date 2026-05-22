export function WeatherIcon({ type }) {
  return (
    <span className={`weather-icon ${type}`} aria-hidden="true">
      <span className="sun-core" />
      <span className="cloud-one" />
      <span className="cloud-two" />
      <span className="rain-drop drop-one" />
      <span className="rain-drop drop-two" />
      <span className="rain-drop drop-three" />
      <span className="bolt bolt-one" />
      <span className="bolt bolt-two" />
      <span className="wind-line line-one" />
      <span className="wind-line line-two" />
      <span className="thermo" />
      <span className="flake" />
      <span className="water-drop" />
    </span>
  )
}
