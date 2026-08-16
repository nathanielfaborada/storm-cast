import { useEffect, useMemo, useState } from 'react'
import {
  climateTopicsData,
  defaultSynthesizedClimate,
} from '../data/philippineClimateIntelligence'

const wikipediaSummaryUrl = (title) =>
  `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
    title,
  )}`

/**
 * Custom Hook: useWikipediaSummary (Refactored to Synthesized Weather Intelligence)
 *
 * Rather than returning raw scraped API text, this hook synthesizes scientific
 * baseline definitions with localized Philippine Area of Responsibility (PAR)
 * dynamics, regional vulnerability analysis, and actionable disaster safety protocols.
 */
export function useWikipediaSummary(title = 'Climate', fallbackSummary = null) {
  const localSynthesis = climateTopicsData[title] || defaultSynthesizedClimate

  const initialSummary = {
    title: localSynthesis.title || title,
    scientificBaseline: fallbackSummary?.extract || localSynthesis.scientificBaseline,
    extract: localSynthesis.scientificBaseline,
    parContext: localSynthesis.parContext,
    regionalImpact: localSynthesis.regionalImpact,
    seasonalCycles: localSynthesis.seasonalCycles,
    actionableProtocols: localSynthesis.actionableProtocols,
    sourceUrl: fallbackSummary?.sourceUrl || `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`,
    isSynthesized: true,
  }

  const [summary, setSummary] = useState(initialSummary)
  const [status, setStatus] = useState('loading')

  const apiUrl = useMemo(() => wikipediaSummaryUrl(title), [title])

  useEffect(() => {
    const controller = new AbortController()

    async function loadSynthesizedIntelligence() {
      setStatus('loading')

      try {
        const response = await fetch(apiUrl, {
          headers: {
            Accept: 'application/json',
          },
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`External source request failed: ${response.status}`)
        }

        const data = await response.json()
        const rawExtract = data.extract || localSynthesis.scientificBaseline

        // Synthesize external scientific baseline with localized Philippine intelligence
        setSummary({
          title: localSynthesis.title || data.title,
          scientificBaseline: rawExtract,
          extract: rawExtract,
          parContext: localSynthesis.parContext,
          regionalImpact: localSynthesis.regionalImpact,
          seasonalCycles: localSynthesis.seasonalCycles,
          actionableProtocols: localSynthesis.actionableProtocols,
          sourceUrl: data.content_urls?.desktop?.page || localSynthesis.sourceUrl || `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`,
          isSynthesized: true,
        })
        setStatus('ready')
      } catch (error) {
        if (error.name !== 'AbortError') {
          // Fallback seamlessly to proprietary synthesized intelligence
          setSummary(initialSummary)
          setStatus('ready')
        }
      }
    }

    loadSynthesizedIntelligence()

    return () => controller.abort()
  }, [apiUrl, title])

  return { status, summary }
}

export default useWikipediaSummary
