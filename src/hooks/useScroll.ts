'use client';

import { useState, useEffect } from 'react';

interface ScrollData {
  scrollY: number;
  scrollDirection: 'up' | 'down';
  isScrolled: boolean;
}

export const useScroll = (threshold: number = 10): ScrollData => {
  const [scrollData, setScrollData] = useState<ScrollData>({
    scrollY: 0,
    scrollDirection: 'up',
    isScrolled: false,
  });

  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const updateScrollData = () => {
      const scrollY = window.scrollY;
      const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
      const isScrolled = scrollY > threshold;

      setScrollData({
        scrollY,
        scrollDirection,
        isScrolled,
      });

      lastScrollY = scrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollData);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    updateScrollData(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrollData;
};
