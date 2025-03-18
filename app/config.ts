// Browser detection
export const isBrowser = typeof window !== 'undefined';

export const canUseDOM: boolean = isBrowser &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined';

// Note: These should not be used directly in components
// Use the useDevice hook instead for client-side detection
export const _deviceDetection = {
  isMobile: isBrowser && window.matchMedia('(pointer: coarse)').matches,
  isApple: isBrowser && /Mac|iPod|iPhone|iPad/.test(navigator.platform)
};

// App configuration
export const appConfig = {
  site: {
    name: 'Your Site Name',
    description: 'Your site description',
    // Add other site-wide configuration here
  },
  // Add other configuration sections as needed
};
