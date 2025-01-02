import React from 'react';
import { getOptimizedImageUrl, generateSrcSet } from '../utils/imageOptimizer';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  className?: string;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 800,
  className = '',
  priority = false
}) => {
  const optimizedSrc = getOptimizedImageUrl(src, width);
  const srcSet = generateSrcSet(src);

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      srcSet={srcSet}
      sizes="(max-width: 768px) 100vw, 800px"
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      className={`${className} ${!priority ? 'transition-opacity duration-300' : ''}`}
    />
  );
};

export default OptimizedImage;