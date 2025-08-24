import React from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import './ScrollToTop.css';

const ScrollToTopAdvanced = ({ 
  threshold = 300,
  showProgress = false,
  position = 'bottom-right',
  size = 'medium',
  variant = 'primary'
}) => {
  const { isVisible, scrollToTop } = useScrollToTop(threshold);

  // Calculate scroll progress for progress ring
  const getScrollProgress = () => {
    if (!showProgress) return 0;
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return (scrollTop / docHeight) * 100;
  };

  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    if (!showProgress) return;

    const updateProgress = () => {
      setScrollProgress(getScrollProgress());
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, [showProgress]);

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6'
  };

  const sizeClasses = {
    'small': 'w-10 h-10',
    'medium': 'w-12 h-12',
    'large': 'w-14 h-14'
  };

  const variantClasses = {
    'primary': 'bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
    'secondary': 'bg-gray-600 hover:bg-gray-700',
    'accent': 'bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
  };

  return (
    <>
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className={`scroll-to-top-advanced fixed ${positionClasses[position]} ${sizeClasses[size]} ${variantClasses[variant]} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 z-50 flex items-center justify-center group relative overflow-hidden`}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          {showProgress && (
            <svg
              className="absolute inset-0 w-full h-full transform -rotate-90"
              viewBox="0 0 36 36"
            >
              <path
                className="text-white text-opacity-20"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                className="text-white"
                strokeDasharray={`${scrollProgress}, 100`}
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
          
          <svg
            className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform duration-200 relative z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M7 14l5-5 5 5"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTopAdvanced;
