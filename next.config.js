/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Enable responsive images
    responsive: true,
    // Define device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Define image sizes for responsive images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Image formats to support
    formats: ['image/webp', 'image/avif'],
    // Minimum cache time for optimized images (in seconds)
    minimumCacheTTL: 60,
    // Enable image optimization
    unoptimized: false,
    // Domains for external images (if needed in the future)
    domains: [],
    // Remote patterns for external images (if needed in the future)
    remotePatterns: [],
  },
  // Enable static exports optimization
  trailingSlash: false,
  // Compress responses
  compress: true,
  // Optimize for production
  productionBrowserSourceMaps: false,
  // Enable SWC minification
  swcMinify: true,
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
        ],
      },
      {
        source:
          '/(.*\\.(js|css|png|jpg|jpeg|gif|webp|avif|svg|ico|woff|woff2|ttf|eot))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
