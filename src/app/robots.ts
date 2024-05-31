import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://preps-ai.com';

  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/faq',
        '/policies',
        '/policies/privacy-policy',
        '/policies/terms-of-use',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
