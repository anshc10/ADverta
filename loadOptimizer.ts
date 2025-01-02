// Performance optimization utilities
export const optimizeInitialLoad = () => {
  // Defer non-critical CSS
  const deferNonCriticalCSS = () => {
    document.querySelectorAll('link[data-non-critical]').forEach(link => {
      if (link instanceof HTMLLinkElement) {
        link.media = 'print';
        link.onload = () => { link.media = 'all'; };
      }
    });
  };

  // Preload critical assets
  const preloadCriticalAssets = () => {
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

  // Implement lazy loading for images
  const setupLazyLoading = () => {
    if ('loading' in HTMLImageElement.prototype) {
      document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        if (img instanceof HTMLImageElement) {
          img.loading = 'lazy';
        }
      });
    }
  };

  deferNonCriticalCSS();
  preloadCriticalAssets();
  setupLazyLoading();
};