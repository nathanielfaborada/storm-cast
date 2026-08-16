import { useEffect } from 'react'

/**
 * SEO Component for Dynamic Document Head & OpenGraph Metadata
 * Updates title, meta description, canonical link, and social tags dynamically per route.
 */
export function SEO({
  title = 'StormCast PH | Philippine Weather Forecast & Typhoon Tracker',
  description = 'Real-time Philippine weather forecasts, PAGASA-aligned storm awareness, and Western Pacific typhoon history tracking.',
  canonical = 'https://stormcastph.com/',
  ogType = 'website',
  ogImage = 'https://stormcastph.com/og-preview.png',
  keywords = 'Philippine weather, typhoon tracker, PAGASA signals, bagyo history, Manila forecast, storm surge warning',
}) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title

    // 2. Helper to set or create meta tag
    const setMetaTag = (attribute, name, content) => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // 3. Set Primary Meta Tags
    setMetaTag('name', 'description', description)
    setMetaTag('name', 'keywords', keywords)
    setMetaTag('name', 'robots', 'index, follow')

    // 4. Set Open Graph Meta Tags
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', canonical)
    setMetaTag('property', 'og:type', ogType)
    setMetaTag('property', 'og:image', ogImage)
    setMetaTag('property', 'og:site_name', 'StormCast PH')

    // 5. Set Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', title)
    setMetaTag('name', 'twitter:description', description)
    setMetaTag('name', 'twitter:image', ogImage)

    // 6. Set Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonical)
  }, [title, description, canonical, ogType, ogImage, keywords])

  return null
}

export default SEO
