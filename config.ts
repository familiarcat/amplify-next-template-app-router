export const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
export const isApple = typeof window !== 'undefined' && 
  /Mac|iPod|iPhone|iPad/.test(navigator.platform);
