import { navItems } from '../data/weatherContent'
import stormcastLogo from '../assets/stormcast-logo.png'

export function Header({ activePage, onNavigate }) {
  return (
    <header className="site-header">
      <div className="brand-row">
        <img className="brand-mark" src={stormcastLogo} alt="StormCast PH logo" />
        <div>
          <h1>StormCast PH</h1>
          <p>Weather and Typhoon</p>
        </div>
      </div>

      <nav className="main-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <button
            className={item === activePage ? 'active' : undefined}
            key={item}
            type="button"
            onClick={() => onNavigate(item)}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  )
}
