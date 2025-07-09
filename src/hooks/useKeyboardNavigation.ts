'use client';

import { useEffect, useRef, MutableRefObject } from 'react';

interface KeyboardNavigationOptions {
  isOpen: boolean;
  onClose: () => void;
  onEscape?: () => void;
  onEnter?: () => void;
  autoFocus?: boolean;
  restoreFocus?: boolean;
}

export const useKeyboardNavigation = (
  containerRef: MutableRefObject<HTMLElement | null>,
  options: KeyboardNavigationOptions
) => {
  const { isOpen, onClose, onEscape, onEnter, autoFocus = true, restoreFocus = true } = options;
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Store the previously focused element
    if (restoreFocus) {
      previousActiveElement.current = document.activeElement as HTMLElement;
    }

    const container = containerRef.current;
    if (!container) return;

    // Get all focusable elements within the container
    const focusableElements = container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    const focusableArray = Array.from(focusableElements);
    const firstFocusableElement = focusableArray[0];
    const lastFocusableElement = focusableArray[focusableArray.length - 1];

    // Auto-focus the first element if enabled
    if (autoFocus && firstFocusableElement) {
      firstFocusableElement.focus();
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          event.preventDefault();
          onEscape ? onEscape() : onClose();
          break;

        case 'Tab':
          if (focusableArray.length === 0) {
            event.preventDefault();
            return;
          }

          if (event.shiftKey) {
            // Shift + Tab (backward)
            if (document.activeElement === firstFocusableElement) {
              event.preventDefault();
              lastFocusableElement?.focus();
            }
          } else {
            // Tab (forward)
            if (document.activeElement === lastFocusableElement) {
              event.preventDefault();
              firstFocusableElement?.focus();
            }
          }
          break;

        case 'Enter':
          if (onEnter) {
            onEnter();
          }
          break;

        case 'ArrowDown':
          event.preventDefault();
          const currentIndex = focusableArray.indexOf(document.activeElement as HTMLElement);
          const nextIndex = (currentIndex + 1) % focusableArray.length;
          focusableArray[nextIndex]?.focus();
          break;

        case 'ArrowUp':
          event.preventDefault();
          const currentIndexUp = focusableArray.indexOf(document.activeElement as HTMLElement);
          const prevIndex = currentIndexUp === 0 ? focusableArray.length - 1 : currentIndexUp - 1;
          focusableArray[prevIndex]?.focus();
          break;
      }
    };

    // Add event listener
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      
      // Restore focus to the previously focused element
      if (restoreFocus && previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen, onClose, onEscape, onEnter, autoFocus, restoreFocus, containerRef]);

  return {
    focusFirstElement: () => {
      const container = containerRef.current;
      if (!container) return;
      
      const firstFocusable = container.querySelector<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      
      firstFocusable?.focus();
    },
    
    focusLastElement: () => {
      const container = containerRef.current;
      if (!container) return;
      
      const focusableElements = container.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      
      const lastFocusable = focusableElements[focusableElements.length - 1];
      lastFocusable?.focus();
    }
  };
};

export default useKeyboardNavigation;
