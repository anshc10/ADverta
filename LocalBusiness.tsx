import React from 'react';

const LocalBusiness = () => {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "ADverta Los Angeles",
        "description": "AI-powered lead generation and business automation solutions in Los Angeles",
        "image": "/logo.svg",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Los Angeles",
          "addressRegion": "CA",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "34.0522",
          "longitude": "-118.2437"
        },
        "url": "https://adverta.ai",
        "telephone": "+1-213-555-0123",
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "34.0522",
            "longitude": "-118.2437"
          },
          "geoRadius": "50000"
        },
        "serviceArea": ["Los Angeles", "Beverly Hills", "Santa Monica", "Pasadena", "Long Beach"],
        "priceRange": "$$"
      })}
    </script>
  );
};

export default LocalBusiness;