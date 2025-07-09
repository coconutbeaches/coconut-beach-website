module.exports = {
  extends: 'lighthouse:default',
  settings: {
    // Run multiple audits for more reliable results
    throttling: {
      // Simulated throttling
      rttMs: 150,
      throughputKbps: 1.6 * 1024, // 1.6 Mbps
      cpuSlowdownMultiplier: 4,
      requestLatencyMs: 0,
      downloadThroughputKbps: 1.6 * 1024,
      uploadThroughputKbps: 750,
    },
    // Device emulation
    emulatedFormFactor: 'desktop',
    // Skip PWA audits for faster testing
    skipAudits: [
      'pwa-cross-browser',
      'pwa-page-transitions',
      'pwa-each-page-has-url',
    ],
    // Only run performance and accessibility audits
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    // Custom user agent
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  },
  audits: [
    // Add custom audits if needed
    'largest-contentful-paint',
    'first-contentful-paint',
    'cumulative-layout-shift',
    'total-blocking-time',
    'speed-index',
  ],
  categories: {
    performance: {
      title: 'Performance',
      auditRefs: [
        { id: 'first-contentful-paint', weight: 10 },
        { id: 'largest-contentful-paint', weight: 25 },
        { id: 'total-blocking-time', weight: 30 },
        { id: 'cumulative-layout-shift', weight: 25 },
        { id: 'speed-index', weight: 10 },
      ],
    },
  },
};
