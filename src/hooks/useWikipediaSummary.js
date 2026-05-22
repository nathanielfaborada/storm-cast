import { useEffect, useMemo, useState } from 'react'

const wikipediaSummaryUrl = (title) =>
  `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
    title,
  )}`

export function useWikipediaSummary(title, fallbackSummary) {
  const [summary, setSummary] = useState(fallbackSummary)
  const [status, setStatus] = useState('loading')

  const apiUrl = useMemo(() => wikipediaSummaryUrl(title), [title])

  useEffect(() => {
    const controller = new AbortController()

    async function loadSummary() {
      setStatus('loading')

      try {
        const response = await fetch(apiUrl, {
          headers: {
            Accept: 'application/json',
          },
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`Wikipedia request failed: ${response.status}`)
        }

        const data = await response.json()

        setSummary({
          title: data.title || fallbackSummary.title,
          extract: data.extract || fallbackSummary.extract,
          sourceUrl: data.content_urls?.desktop?.page || fallbackSummary.sourceUrl,
        })
        setStatus('ready')
      } catch (error) {
        if (error.name !== 'AbortError') {
          setSummary(fallbackSummary)
          setStatus('error')
        }
      }
    }

    loadSummary()

    return () => controller.abort()
  }, [apiUrl, fallbackSummary])

  return { status, summary }
}
