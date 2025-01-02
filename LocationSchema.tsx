import React from 'react';
import { MAJOR_CITIES, REGIONS } from '../lib/config/locations';

const LocationSchema = () => {
  const locations = MAJOR_CITIES.map(city => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `ADverta ${city.name}`,
    "description": `AI-powered lead generation and business automation solutions in ${city.name}`,
    "image": "/logo.svg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.state,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.coordinates.lat,
      "longitude": city.coordinates.lng
    },
    "url": `https://adverta.ai/${city.name.toLowerCase().replace(' ', '-')}`,
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": city.coordinates.lat,
        "longitude": city.coordinates.lng
      },
      "geoRadius": "50000"
    },
    "serviceArea": REGIONS[city.region],
    "priceRange": "$$"
  }));

  return (
    <script type="application/ld+json">
      {JSON.stringify(locations)}
    </script>
  );
};

export default LocationSchema;