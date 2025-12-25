/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  async redirects() {
    return [];
  },
  
  // Add headers for sitemap.xml
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=43200',
          },
        ],
      },
      // Also add for sitemap-categories.xml if you create it
      {
        source: '/sitemap-categories.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=43200',
          },
        ],
      },
      // Add for individual sitemap files if using sitemap index
      {
        source: '/sitemap-:id.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=43200',
          },
        ],
      },
    ];
  },
  
  // Optional: Add trailing slash if needed for consistency
  trailingSlash: false,
  
  // Optional: Add images domain for optimized images
  images: {
    domains: ['image.preptive.in', 'www.preptive.in'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;