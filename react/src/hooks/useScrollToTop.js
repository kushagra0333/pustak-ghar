import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll position and show/hide scroll to top button
 * @param {number} threshold - The scroll position threshold to show the button (default: 300px)
 * @returns {object} - Object containing isVisible state and scrollToTop function
 */
export const useScrollToTop = (threshold = 300) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Throttle scroll events for better performance
    let timeoutId = null;
    const handleScroll = () => {
      if (timeoutId) {
        cancelAnimationFrame(timeoutId);
      }
      timeoutId = requestAnimationFrame(toggleVisibility);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        cancelAnimationFrame(timeoutId);
      }
    };
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return { isVisible, scrollToTop };
};
