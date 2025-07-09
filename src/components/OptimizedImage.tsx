'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';
import { images, ImageKey, getImageData, getResponsiveSizes } from '../lib/images';

interface OptimizedImageProps extends Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> {
  imageKey: ImageKey;
  alt?: string;
  responsive?: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    default?: string;
  };
  className?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  imageKey,
  alt,
  responsive,
  className,
  priority,
  placeholder = 'blur',
  ...props
}) => {
  const imageData = getImageData(imageKey);
  
  // Use provided alt text or fall back to image data alt
  const altText = alt || imageData.alt;
  
  // Calculate sizes if responsive breakpoints are provided
  const sizes = responsive 
    ? getResponsiveSizes(responsive)
    : props.sizes || '100vw';
  
  // Determine if image should be priority based on image data or prop
  const isPriority = priority !== undefined ? priority : imageData.priority;

  return (
    <Image
      src={imageData.src}
      alt={altText}
      width={imageData.width}
      height={imageData.height}
      blurDataURL={imageData.blurDataURL}
      placeholder={placeholder}
      priority={isPriority}
      sizes={sizes}
      className={className}
      {...props}
    />
  );
};

export default OptimizedImage;
