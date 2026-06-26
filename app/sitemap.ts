import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://neuralflow.ai', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://neuralflow.ai/#features', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://neuralflow.ai/#pricing', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  ];
}
