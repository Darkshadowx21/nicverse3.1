/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://notnicto.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/admin/*']
      },
    ],
    additionalSitemaps: [
      'https://notnicto.com/server-sitemap.xml', // If you have dynamic pages
    ],
  },
  transform: async (config, path) => {
    // Custom priority for specific pages
    const priorities = {
      '/': 1.0,
      '/projects': 0.8,
    }
    
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    }
  },
} 