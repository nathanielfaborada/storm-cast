/**
 * prerender.js — StormCast PH Static Site Generation Script
 *
 * This script:
 * 1. Runs `vite build` (client bundle)
 * 2. Runs `vite build --ssr` (server bundle)
 * 3. For each route, calls the SSR render() function and injects
 *    the resulting HTML into index.html, writing a static .html file.
 *
 * Output: dist/ contains a pre-rendered .html for every route —
 * readable by Googlebot without JavaScript execution.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const distDir = path.join(rootDir, 'dist')

// ── All routes to pre-render ──────────────────────────────────────────────────
// Keep this in sync with App.jsx routes. Redirect-only routes are excluded.
const routesToRender = [
  '/',
  '/history',
  '/climate',
  '/preparedness',
  '/radar',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms',
]

// ── Per-route SEO meta (title + description injected into each HTML file) ──────
const routeMeta = {
  '/': {
    title: 'StormCast PH | Philippine Weather Forecast & Typhoon Tracker',
    description:
      'Real-time Philippine weather forecasts, PAGASA-aligned storm awareness, and Western Pacific typhoon history tracking.',
  },
  '/history': {
    title: 'Typhoon History & Case Studies | StormCast PH',
    description:
      'Historical archive of Western Pacific tropical cyclones, Philippine landfall data, storm surge records, and typhoon case studies from 1970 to present.',
  },
  '/climate': {
    title: 'Philippine Climate Insights | Monsoons, ENSO & Sea Surface Temperatures | StormCast PH',
    description:
      'Detailed meteorological analysis of the Philippine climate: Amihan, Habagat, ITCZ, ENSO cycles, and Western Pacific ocean heat content.',
  },
  '/preparedness': {
    title: 'Philippine Disaster Preparedness Hub | Emergency Plan & Supply Calculator | StormCast PH',
    description:
      'Interactive life-safety tools for Philippine typhoons: family emergency plan generator, 72h supply calculator, evacuation risk estimator, and emergency radio dials.',
  },
  '/radar': {
    title: 'Live Philippine Radar & Satellite | Doppler & Himawari-9 | StormCast PH',
    description:
      'Real-time Doppler precipitation radar, Himawari-9 infrared satellite imagery, and wind stream visualizations for the Philippine Area of Responsibility.',
  },
  '/about': {
    title: 'About StormCast PH | Mission, Climatology & Data Transparency',
    description:
      "Learn about StormCast PH's mission to deliver accessible Philippine weather intelligence, meteorological data sources, and community disaster preparedness education.",
  },
  '/contact': {
    title: 'Contact StormCast PH | Emergency Hotlines & Agency Directory',
    description:
      'Contact StormCast PH, access Philippine emergency hotlines (911, 143), DOST-PAGASA, NDRRMC, and the verified disaster agency directory.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy & Google AdSense Cookie Disclosure | StormCast PH',
    description:
      'Official Privacy Policy for StormCast PH. Transparent disclosures regarding Google AdSense cookies, DART technology, location data processing, and user data protection rights.',
  },
  '/terms': {
    title: 'Terms of Service | StormCast PH',
    description:
      'Terms and conditions governing use of the StormCast PH meteorological platform, data attribution, and disclaimer of liability for weather forecast information.',
  },
}

async function prerender() {
  console.log('\n🌀 StormCast PH — Static Site Generation\n')

  // ── Step 1: Client build ────────────────────────────────────────────────────
  console.log('📦 Step 1/3: Building client bundle...')
  await build({ root: rootDir, logLevel: 'warn' })
  console.log('   ✅ Client bundle built → dist/\n')

  // ── Step 2: SSR build ───────────────────────────────────────────────────────
  console.log('🖥️  Step 2/3: Building SSR bundle...')
  await build({
    root: rootDir,
    logLevel: 'warn',
    build: {
      ssr: true,
      outDir: 'dist/server',
      rollupOptions: {
        input: path.join(rootDir, 'src/entry-server.jsx'),
      },
    },
  })
  console.log('   ✅ SSR bundle built → dist/server/\n')

  // ── Step 3: Pre-render each route ──────────────────────────────────────────
  console.log('🗺️  Step 3/3: Pre-rendering routes...')

  // Load the SSR bundle (pathToFileURL handles Windows drive letters correctly)
  const serverEntryPath = path.join(distDir, 'server/entry-server.js')
  const { render } = await import(pathToFileURL(serverEntryPath).href)

  // Read the client index.html template
  const templateHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

  for (const route of routesToRender) {
    // Render the React tree to HTML string
    const { html: appHtml } = render(route)

    // Get per-route meta
    const meta = routeMeta[route] || routeMeta['/']

    // Build the final HTML:
    // 1. Inject the rendered app HTML into #root
    // 2. Inject per-route title and description into <head>
    let pageHtml = templateHtml

    // Replace <div id="root"></div> with pre-rendered content
    pageHtml = pageHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`,
    )

    // Inject/replace the <title> tag
    pageHtml = pageHtml.replace(
      /<title>.*?<\/title>/,
      `<title>${escapeHtml(meta.title)}</title>`,
    )

    // Inject/replace the description meta tag
    if (pageHtml.includes('name="description"')) {
      pageHtml = pageHtml.replace(
        /<meta name="description" content=".*?".*?\/>/,
        `<meta name="description" content="${escapeHtml(meta.description)}" />`,
      )
    } else {
      pageHtml = pageHtml.replace(
        '</head>',
        `  <meta name="description" content="${escapeHtml(meta.description)}" />\n</head>`,
      )
    }

    // Inject static canonical <link> tag — visible to crawlers without JS
    const canonicalUrl = `https://stormcast-ph.netlify.app${route === '/' ? '/' : route}`
    if (pageHtml.includes('rel="canonical"')) {
      pageHtml = pageHtml.replace(
        /<link rel="canonical" href=".*?".*?>/,
        `<link rel="canonical" href="${canonicalUrl}" />`,
      )
    } else {
      pageHtml = pageHtml.replace(
        '</head>',
        `  <link rel="canonical" href="${canonicalUrl}" />\n</head>`,
      )
    }

    // Determine output file path
    // '/'          → dist/index.html
    // '/about'     → dist/about/index.html (for clean URLs on Netlify)
    const routePath = route === '/' ? '/index.html' : `${route}/index.html`
    const outPath = path.join(distDir, routePath)

    // Create directory if needed
    fs.mkdirSync(path.dirname(outPath), { recursive: true })
    fs.writeFileSync(outPath, pageHtml)

    console.log(`   ✅ ${route.padEnd(20)} → dist${routePath}`)
  }

  // ── Cleanup: Remove the SSR server bundle (not needed at runtime) ───────────
  fs.rmSync(path.join(distDir, 'server'), { recursive: true, force: true })
  console.log('\n🎉 Pre-render complete! All routes have static HTML.\n')
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

prerender().catch((err) => {
  console.error('❌ Pre-render failed:', err)
  process.exit(1)
})
