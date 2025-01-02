import { SEO_CONFIG } from '../../lib/config/seo';

export const generateMetaTags = (
  title: string,
  description: string,
  path: string,
  location?: {
    city: string;
    state: string;
    region: string;
  }
) => {
  const url = `${SEO_CONFIG.openGraph.url}${path}`;
  const baseMetaTags = {
    title: SEO_CONFIG.titleTemplate.replace('%s', title),
    description,
    canonical: url,
    openGraph: {
      ...SEO_CONFIG.openGraph,
      title,
      description,
      url,
    },
    twitter: {
      ...SEO_CONFIG.twitter,
      title,
      description,
    }
  };

  // Add location-specific meta tags if location is provided
  if (location) {
    const locationMetaTags = {
      ...baseMetaTags,
      additionalMetaTags: [
        ...SEO_CONFIG.additionalMetaTags,
        {
          name: 'geo.placename',
          content: `${location.city}, ${location.state}, USA`
        },
        {
          name: 'geo.region',
          content: `US-${location.state}`
        }
      ]
    };
    return locationMetaTags;
  }

  return baseMetaTags;
};