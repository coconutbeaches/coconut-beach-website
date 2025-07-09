'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';
import { ImageKey, getImageData, getResponsiveSizes } from '../lib/images';

interface OptimizedImageProps
  extends Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> {
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
  fill?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  imageKey,
  alt,
  responsive,
  className,
  priority,
  placeholder = 'blur',
  fill,
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

  // If fill is true, don't use width/height
  const imageProps = fill
    ? {
        src: imageData.src,
        alt: altText,
        fill: true,
        blurDataURL: imageData.blurDataURL,
        placeholder,
        priority: isPriority,
        sizes,
        className,
        ...props,
      }
    : {
        src: imageData.src,
        alt: altText,
        width: imageData.width,
        height: imageData.height,
        blurDataURL: imageData.blurDataURL,
        placeholder,
        priority: isPriority,
        sizes,
        className,
        ...props,
      };

  return <Image {...imageProps} />;
};

export default OptimizedImage;
