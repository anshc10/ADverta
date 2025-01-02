import React, { useRef } from 'react';
import { useLazyLoad } from '../utils/performance';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = '' }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const isVisible = useLazyLoad(imageRef);

  return (
    <img
      ref={imageRef}
      src={isVisible ? src : ''}
      alt={alt}
      className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
      loading="lazy"
    />
  );
};

export default LazyImage;