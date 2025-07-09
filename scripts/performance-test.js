/* eslint-disable @typescript-eslint/no-require-imports */
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  baseUrl: 'http://localhost:3000',
  pages: [
    { path: '/', name: 'Homepage' },
    { path: '/about', name: 'About' },
    { path: '/bungalows', name: 'Bungalows' },
    { path: '/gallery', name: 'Gallery' },
    { path: '/services', name: 'Services' },
    { path: '/contact', name: 'Contact' },
  ],
  thresholds: {
    performance: 90,
    accessibility: 95,
    'best-practices': 90,
    seo: 90,
  },
  outputDir: 'performance-reports',
};

// Lighthouse options
const lighthouseOptions = {
  logLevel: 'info',
  output: 'json',
  onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  port: 9222,
};

// Chrome launch options
const chromeOptions = {
  chromeFlags: [
    '--headless',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--disable-extensions',
    '--disable-web-security',
    '--disable-features=TranslateUI',
    '--disable-ipc-flooding-protection',
  ],
};

async function runLighthouseAudit(url, chrome) {
  try {
    const result = await lighthouse(url, lighthouseOptions, null, chrome.port);
    return result;
  } catch (error) {
    console.error(`Error running Lighthouse audit for ${url}:`, error);
    return null;
  }
}

function extractScores(lhr) {
  const categories = lhr.categories || {};
  return {
    performance: Math.round((categories.performance?.score || 0) * 100),
    accessibility: Math.round((categories.accessibility?.score || 0) * 100),
    'best-practices': Math.round(
      (categories['best-practices']?.score || 0) * 100
    ),
    seo: Math.round((categories.seo?.score || 0) * 100),
  };
}

function checkThresholds(scores, thresholds) {
  const failures = [];
  for (const [category, score] of Object.entries(scores)) {
    if (score < thresholds[category]) {
      failures.push(
        `${category}: ${score} (threshold: ${thresholds[category]})`
      );
    }
  }
  return failures;
}

function generateReport(results) {
  const reportPath = path.join(config.outputDir, 'performance-summary.json');
  const htmlReportPath = path.join(
    config.outputDir,
    'performance-summary.html'
  );

  // Create summary data
  const summary = {
    timestamp: new Date().toISOString(),
    results: results,
    overallPass: results.every((r) => r.failures.length === 0),
    thresholds: config.thresholds,
  };

  // Write JSON report
  fs.writeFileSync(reportPath, JSON.stringify(summary, null, 2));

  // Generate HTML report
  const htmlReport = generateHtmlReport(summary);
  fs.writeFileSync(htmlReportPath, htmlReport);

  console.log(`\nPerformance reports generated:`);
  console.log(`- JSON: ${reportPath}`);
  console.log(`- HTML: ${htmlReportPath}`);

  return summary;
}

async function main() {
  console.log('🚀 Starting performance audit...');

  // Create output directory
  if (!fs.existsSync(config.outputDir)) {
    fs.mkdirSync(config.outputDir, { recursive: true });
  }

  // Launch Chrome
  const chrome = await chromeLauncher.launch(chromeOptions);
  console.log(`Chrome launched on port ${chrome.port}`);

  const results = [];

  try {
    // Run audits for each page
    for (const page of config.pages) {
      console.log(`\n📊 Auditing ${page.name} (${page.path})...`);
      const url = `${config.baseUrl}${page.path}`;

      const result = await runLighthouseAudit(url, chrome);

      if (result) {
        const scores = extractScores(result.lhr);
        const failures = checkThresholds(scores, config.thresholds);

        console.log(`  Performance: ${scores.performance}%`);
        console.log(`  Accessibility: ${scores.accessibility}%`);
        console.log(`  Best Practices: ${scores['best-practices']}%`);
        console.log(`  SEO: ${scores.seo}%`);

        if (failures.length > 0) {
          console.log(`  ❌ Threshold failures:`, failures);
        } else {
          console.log(`  ✅ All thresholds met!`);
        }

        // Save individual report
        const reportPath = path.join(
          config.outputDir,
          `${page.name.toLowerCase().replace(/\s+/g, '-')}-report.json`
        );
        fs.writeFileSync(reportPath, JSON.stringify(result.lhr, null, 2));

        results.push({
          page,
          scores,
          failures,
          reportPath,
        });
      } else {
        console.error(`  ❌ Failed to audit ${page.name}`);
        results.push({
          page,
          scores: {
            performance: 0,
            accessibility: 0,
            'best-practices': 0,
            seo: 0,
          },
          failures: ['Audit failed'],
          reportPath: null,
        });
      }
    }

    // Generate summary report
    generateReport(results);

    console.log('\n📋 Performance Audit Summary:');
    console.log('================================');

    const failedPages = results.filter((r) => r.failures.length > 0);

    if (failedPages.length === 0) {
      console.log('✅ All pages passed performance thresholds!');
      process.exit(0);
    } else {
      console.log(
        `❌ ${failedPages.length} page(s) failed performance thresholds:`
      );
      failedPages.forEach((result) => {
        console.log(`  - ${result.page.name}: ${result.failures.join(', ')}`);
      });
      process.exit(1);
    }
  } catch (error) {
    console.error('Error during performance audit:', error);
    process.exit(1);
  } finally {
    // Clean up Chrome
    await chrome.kill();
  }
}

function generateHtmlReport(summary) {
  const { results, overallPass, thresholds } = summary;

  const statusColor = overallPass ? '#28a745' : '#dc3545';
  const statusText = overallPass ? 'PASSED' : 'FAILED';

  const resultRows = results
    .map((result) => {
      const { page, scores, failures } = result;
      const rowClass = failures.length === 0 ? 'table-success' : 'table-danger';

      return `
      <tr class="${rowClass}">
        <td><strong>${page.name}</strong><br><small>${page.path}</small></td>
        <td class="text-center">${scores.performance}</td>
        <td class="text-center">${scores.accessibility}</td>
        <td class="text-center">${scores['best-practices']}</td>
        <td class="text-center">${scores.seo}</td>
        <td>
          ${
            failures.length === 0
              ? '✅ All thresholds met'
              : failures.map((f) => `❌ ${f}`).join('<br>')
          }
        </td>
      </tr>
    `;
    })
    .join('');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Performance Test Report</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
      <style>
        .status-badge {
          font-size: 1.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          color: white;
          background-color: ${statusColor};
        }
        .threshold-info {
          background-color: #f8f9fa;
          border-radius: 0.5rem;
          padding: 1rem;
        }
      </style>
    </head>
    <body>
      <div class="container mt-4">
        <div class="row">
          <div class="col-12">
            <h1>Performance Test Report</h1>
            <p class="text-muted">Generated on ${new Date(summary.timestamp).toLocaleString()}</p>
            
            <div class="alert alert-${overallPass ? 'success' : 'danger'}" role="alert">
              <h4 class="alert-heading">
                <span class="status-badge">${statusText}</span>
                Overall Status
              </h4>
              <p class="mb-0">
                ${
                  overallPass
                    ? 'All pages meet the performance thresholds!'
                    : 'Some pages failed to meet the performance thresholds.'
                }
              </p>
            </div>
            
            <div class="threshold-info mb-4">
              <h5>Performance Thresholds</h5>
              <ul class="list-unstyled">
                <li>🚀 Performance: ≥${thresholds.performance}%</li>
                <li>♿ Accessibility: ≥${thresholds.accessibility}%</li>
                <li>✅ Best Practices: ≥${thresholds['best-practices']}%</li>
                <li>🔍 SEO: ≥${thresholds.seo}%</li>
              </ul>
            </div>
            
            <div class="table-responsive">
              <table class="table table-striped table-hover">
                <thead class="table-dark">
                  <tr>
                    <th>Page</th>
                    <th class="text-center">Performance</th>
                    <th class="text-center">Accessibility</th>
                    <th class="text-center">Best Practices</th>
                    <th class="text-center">SEO</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  ${resultRows}
                </tbody>
              </table>
            </div>
            
            <div class="mt-4">
              <h5>Recommendations</h5>
              <ul>
                <li>Run <code>npm run build</code> and test with production build for accurate results</li>
                <li>Check individual Lighthouse reports for detailed recommendations</li>
                <li>Consider image optimization and lazy loading for better performance</li>
                <li>Ensure proper semantic HTML and ARIA attributes for accessibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

if (require.main === module) {
  main();
}

module.exports = { main, config };
