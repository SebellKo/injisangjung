import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/certify',
    },
    sitemap: 'https://sebell.site/sitemap.xml',
    host: 'https://sebell.site',
  };
}
