import { useEffect, useState } from 'react'
import {
  namedTyphoonTopics,
  typhoonYearTopics,
  typhoonFallbackOverview,
} from '../data/weatherContent'

const wikiSummaryUrl = (title) =>
  `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
    title,
  )}`

async function fetchWikiSummary(title, signal) {
  const response = await fetch(wikiSummaryUrl(title), {
    headers: { Accept: 'application/json' },
    signal,
  })

  if (!response.ok) {
    throw new Error(`Wikipedia request failed for ${title}`)
  }

  return response.json()
}

function normalizeTopic(topic, data) {
  return {
    ...topic,
    extract: data?.extract || topic.fallback,
    sourceUrl: data?.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${topic.title}`,
  }
}

export function useTyphoonHistory() {
  const [overview, setOverview] = useState(typhoonFallbackOverview)
  const [historyRecords, setHistoryRecords] = useState(() => ({
    namedRecords: namedTyphoonTopics.map((topic) => ({
      type: 'storm',
      ...topic,
      extract: topic.fallback,
      sourceUrl: `https://en.wikipedia.org/wiki/${topic.title}`,
    })),
    records: typhoonYearTopics.map((topic) => ({
      type: 'season',
      ...topic,
      extract: topic.fallback,
      sourceUrl: `https://en.wikipedia.org/wiki/${topic.title}`,
    })),
  }))
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const controller = new AbortController()

    async function loadHistory() {
      setStatus('loading')

      try {
        const [overviewData, ...topicData] = await Promise.all([
          fetchWikiSummary('List of Philippine typhoons', controller.signal),
          ...typhoonYearTopics.map((topic) =>
            fetchWikiSummary(topic.title, controller.signal).catch(() => null),
          ),
          ...namedTyphoonTopics.map((topic) =>
            fetchWikiSummary(topic.title, controller.signal).catch(() => null),
          ),
        ])
        const yearData = topicData.slice(0, typhoonYearTopics.length)
        const namedData = topicData.slice(typhoonYearTopics.length)

        setOverview({
          title: overviewData.title || typhoonFallbackOverview.title,
          extract: overviewData.extract || typhoonFallbackOverview.extract,
          sourceUrl:
            overviewData.content_urls?.desktop?.page ||
            typhoonFallbackOverview.sourceUrl,
        })
        setHistoryRecords({
          namedRecords: namedTyphoonTopics.map((topic, index) =>
            normalizeTopic({ type: 'storm', ...topic }, namedData[index]),
          ),
          records: typhoonYearTopics.map((topic, index) =>
            normalizeTopic({ type: 'season', ...topic }, yearData[index]),
          ),
        })
        setStatus('ready')
      } catch (error) {
        if (error.name !== 'AbortError') {
          setOverview(typhoonFallbackOverview)
          setHistoryRecords({
            namedRecords: namedTyphoonTopics.map((topic) => ({
              type: 'storm',
              ...topic,
              extract: topic.fallback,
              sourceUrl: `https://en.wikipedia.org/wiki/${topic.title}`,
            })),
            records: typhoonYearTopics.map((topic) => ({
              type: 'season',
              ...topic,
              extract: topic.fallback,
              sourceUrl: `https://en.wikipedia.org/wiki/${topic.title}`,
            })),
          })
          setStatus('fallback')
        }
      }
    }

    loadHistory()

    return () => controller.abort()
  }, [])

  return {
    namedRecords: historyRecords.namedRecords,
    overview,
    records: historyRecords.records,
    status,
  }
}
