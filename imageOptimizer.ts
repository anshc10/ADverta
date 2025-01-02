// Image optimization utilities
export const getOptimizedImageUrl = (url: string, width: number) => {
  if (url.includes('unsplash.com')) {
    // Optimize Unsplash images
    return `${url}&w=${width}&q=75&auto=format`;
  }
  return url;
};

export const generateSrcSet = (url: string) => {
  if (!url.includes('unsplash.com')) return undefined;
  
  const sizes = [320, 640, 768, 1024, 1280];
  return sizes
    .map(size => `${getOptimizedImageUrl(url, size)} ${size}w`)
    .join(', ');
};