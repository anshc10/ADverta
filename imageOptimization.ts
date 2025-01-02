export const getImageDimensions = (
  originalWidth: number,
  originalHeight: number,
  maxWidth: number
): { width: number; height: number } => {
  const ratio = originalHeight / originalWidth;
  const width = Math.min(originalWidth, maxWidth);
  const height = Math.round(width * ratio);
  
  return { width, height };
};

export const generateSrcSet = (url: string, sizes: number[]): string => {
  return sizes
    .map(size => `${url}?w=${size} ${size}w`)
    .join(', ');
};