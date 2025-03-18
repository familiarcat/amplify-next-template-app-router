export const isBrowser = typeof window !== 'undefined';

export const canUseDOM: boolean = isBrowser &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined';
