// Performance optimization utilities
export const lazyLoadImages = () => {
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      if (img instanceof HTMLImageElement) {
        img.loading = 'lazy';
      }
    });
  }
};

export const deferNonCriticalCSS = () => {
  const nonCriticalStyles = document.querySelectorAll('link[data-non-critical]');
  nonCriticalStyles.forEach(style => {
    if (style instanceof HTMLLinkElement) {
      style.media = 'print';
      style.onload = () => { style.media = 'all'; };
    }
  });
};

export const preloadCriticalAssets = () => {
  const criticalAssets = [
    '/logo.svg',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
  ];

  criticalAssets.forEach(asset => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = asset;
    link.as = asset.endsWith('.svg') ? 'image' : 'style';
    document.head.appendChild(link);
  });
};