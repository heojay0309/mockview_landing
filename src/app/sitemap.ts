export default async function sitemap() {
  const baseUrl = 'https://preps-ai.com';
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/policies`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/policies/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/policies/terms-of-use`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
    },
  ];
}
