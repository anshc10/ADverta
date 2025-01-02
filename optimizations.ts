// Core optimization utilities
export const preloadCriticalAssets = () => {
  const assets = [
    // Critical fonts
    { type: 'font', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' },
    // Critical images (update with your actual critical images)
    { type: 'image', href: '/logo.svg' }
  ];

  assets.forEach(asset => {
    const link = document.createElement('link');
    link.rel = asset.type === 'font' ? 'preload' : 'prefetch';
    link.href = asset.href;
    if (asset.type === 'font') link.as = 'style';
    if (asset.type === 'image') link.as = 'image';
    document.head.appendChild(link);
  });
};

export const deferNonCriticalCSS = () => {
  const nonCriticalStyles = document.querySelectorAll('link[data-non-critical]');
  nonCriticalStyles.forEach(style => {
    (style as HTMLLinkElement).media = 'print';
    (style as HTMLLinkElement).onload = () => {
      (style as HTMLLinkElement).media = 'all';
    };
  });
};