export function DynamicWeatherIcon({ condition = 'cloud', className = '' }) {
  const norm = String(condition).toLowerCase()

  if (norm.includes('sun') || norm.includes('clear')) {
    return (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sunGrad" x1="16" y1="16" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE047" />
            <stop offset="1" stopColor="#F59E0B" />
          </linearGradient>
          <filter id="sunGlow" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {/* Sun Core */}
        <circle cx="32" cy="32" r="15" fill="url(#sunGrad)" filter="url(#sunGlow)" />
        {/* Sun Rays */}
        <g stroke="#FDE047" strokeWidth="3" strokeLinecap="round" opacity="0.9">
          <line x1="32" y1="6" x2="32" y2="11" />
          <line x1="32" y1="53" x2="32" y2="58" />
          <line x1="6" y1="32" x2="11" y2="32" />
          <line x1="53" y1="32" x2="58" y2="32" />
          <line x1="13.6" y1="13.6" x2="17.2" y2="17.2" />
          <line x1="46.8" y1="46.8" x2="50.4" y2="50.4" />
          <line x1="13.6" y1="50.4" x2="17.2" y2="46.8" />
          <line x1="46.8" y1="17.2" x2="50.4" y2="13.6" />
        </g>
      </svg>
    )
  }

  if (norm.includes('rain') || norm.includes('drizzle') || norm.includes('shower')) {
    return (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cloudRainGrad" x1="12" y1="14" x2="48" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E2E8F0" />
            <stop offset="1" stopColor="#94A3B8" />
          </linearGradient>
          <linearGradient id="dropGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" />
            <stop offset="1" stopColor="#0284C7" />
          </linearGradient>
        </defs>
        {/* Cloud Body */}
        <path
          d="M20 38C15.58 38 12 34.42 12 30C12 25.86 15.14 22.45 19.2 22.04C20.65 16.29 25.83 12 32 12C39.4 12 45.48 17.76 45.96 25.04C49.44 25.68 52 28.69 52 32.3C52 36.55 48.55 40 44.3 40H20"
          fill="url(#cloudRainGrad)"
        />
        {/* Raindrops */}
        <g stroke="url(#dropGrad)" strokeWidth="2.5" strokeLinecap="round">
          <line x1="22" y1="44" x2="19" y2="52" />
          <line x1="31" y1="44" x2="28" y2="53" />
          <line x1="40" y1="44" x2="37" y2="52" />
        </g>
      </svg>
    )
  }

  if (norm.includes('storm') || norm.includes('thunder') || norm.includes('lightning') || norm.includes('typhoon')) {
    return (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="stormCloudGrad" x1="12" y1="12" x2="48" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#CBD5E1" />
            <stop offset="1" stopColor="#475569" />
          </linearGradient>
          <linearGradient id="boltGrad" x1="28" y1="34" x2="36" y2="58" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE047" />
            <stop offset="1" stopColor="#EAB308" />
          </linearGradient>
          <filter id="boltGlow" x="18" y="28" width="30" height="36" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {/* Darker Storm Cloud Body */}
        <path
          d="M20 36C15.58 36 12 32.42 12 28C12 23.86 15.14 20.45 19.2 20.04C20.65 14.29 25.83 10 32 10C39.4 10 45.48 15.76 45.96 23.04C49.44 23.68 52 26.69 52 30.3C52 34.55 48.55 38 44.3 38H20"
          fill="url(#stormCloudGrad)"
        />
        {/* Lightning Bolt */}
        <polygon
          points="33,32 24,44 31,44 27,56 40,41 33,41"
          fill="url(#boltGrad)"
          filter="url(#boltGlow)"
        />
      </svg>
    )
  }

  // Default: Partly Cloudy / Soft Cloud with Warm Sun
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="partlySunGrad" x1="30" y1="10" x2="52" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE047" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="partlyCloudGrad" x1="12" y1="20" x2="46" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#CBD5E1" />
        </linearGradient>
        <filter id="cloudShadow" x="8" y="16" width="50" height="38" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.25" />
        </filter>
      </defs>
      {/* Background Sun */}
      <circle cx="40" cy="22" r="12" fill="url(#partlySunGrad)" />
      <g stroke="#FDE047" strokeWidth="2.5" strokeLinecap="round" opacity="0.85">
        <line x1="40" y1="4" x2="40" y2="8" />
        <line x1="54" y1="12" x2="51" y2="15" />
        <line x1="58" y1="22" x2="54" y2="22" />
      </g>
      {/* Foreground Translucent Cloud */}
      <path
        d="M21 46C16.58 46 13 42.42 13 38C13 33.86 16.14 30.45 20.2 30.04C21.65 24.29 26.83 20 33 20C40.4 20 46.48 25.76 46.96 33.04C50.44 33.68 53 36.69 53 40.3C53 44.55 49.55 48 45.3 48H21"
        fill="url(#partlyCloudGrad)"
        filter="url(#cloudShadow)"
      />
    </svg>
  )
}

export default DynamicWeatherIcon
