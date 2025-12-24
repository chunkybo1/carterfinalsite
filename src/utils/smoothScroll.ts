/**
 * Enhanced smooth scroll utility with better performance and easing
 * Provides smoother scrolling than native CSS scroll-behavior
 */

interface SmoothScrollOptions {
  duration?: number;
  easing?: (t: number) => number;
  offset?: number; // Offset from top (useful for fixed headers)
}

// Easing functions for smooth scrolling
const easingFunctions = {
  easeInOutCubic: (t: number): number => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  },
  easeOutCubic: (t: number): number => {
    return 1 - Math.pow(1 - t, 3);
  },
  easeInOutQuad: (t: number): number => {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  },
};

/**
 * Smooth scroll to a target element or position
 */
export const smoothScrollTo = (
  target: HTMLElement | number,
  options: SmoothScrollOptions = {}
): Promise<void> => {
  const {
    duration = 800,
    easing = easingFunctions.easeInOutCubic,
    offset = 0,
  } = options;

  return new Promise((resolve) => {
    const startPosition = window.pageYOffset;
    let targetPosition: number;

    if (typeof target === 'number') {
      targetPosition = target;
    } else {
      const elementTop = target.getBoundingClientRect().top + window.pageYOffset;
      targetPosition = elementTop - offset;
    }

    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easing(progress);

      window.scrollTo(0, startPosition + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        resolve();
      }
    };

    requestAnimationFrame(animateScroll);
  });
};

/**
 * Smooth scroll to element by selector
 */
export const smoothScrollToSelector = (
  selector: string,
  options: SmoothScrollOptions = {}
): Promise<void> => {
  const element = document.querySelector(selector) as HTMLElement;
  if (!element) {
    console.warn(`Element not found: ${selector}`);
    return Promise.resolve();
  }
  return smoothScrollTo(element, options);
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Smart smooth scroll that respects user preferences
 */
export const smartSmoothScroll = (
  target: HTMLElement | number | string,
  options: SmoothScrollOptions = {}
): Promise<void> => {
  if (prefersReducedMotion()) {
    // Use instant scroll for users who prefer reduced motion
    if (typeof target === 'string') {
      const element = document.querySelector(target) as HTMLElement;
      if (element) {
        element.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    } else if (typeof target === 'number') {
      window.scrollTo(0, target);
    } else {
      target.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
    return Promise.resolve();
  }

  // Use enhanced smooth scroll for others
  if (typeof target === 'string') {
    return smoothScrollToSelector(target, options);
  } else {
    return smoothScrollTo(target, options);
  }
};


