import { MetadataRoute } from 'next';
import { servicesData } from '@/data/services';
import { industriesData } from '@/data/industries';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dataliveintelligence.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/industries`, lastModified: new Date() },
    { url: `${baseUrl}/about/company`, lastModified: new Date() },
    { url: `${baseUrl}/about/our-approach`, lastModified: new Date() },
    { url: `${baseUrl}/about/why-choose-us`, lastModified: new Date() },
    { url: `${baseUrl}/resources/case-studies`, lastModified: new Date() },
    { url: `${baseUrl}/resources/blog`, lastModified: new Date() },
    { url: `${baseUrl}/resources/faqs`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const industryRoutes: MetadataRoute.Sitemap = industriesData.map((i) => ({
    url: `${baseUrl}/industries/${i.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes];
}

