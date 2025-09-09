"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
        setAnimate(true); // trigger bounce animation
        setTimeout(() => setAnimate(false), 600); // remove after animation finishes
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6">
      <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`relative flex items-center justify-center w-14 h-14 rounded-full 
      bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg 
      transition-all duration-300 hover:scale-110 hover:shadow-xl group
      ${isVisible ? "opacity-100" : "opacity-0"}
      ${animate ? "animate-bounceIn" : ""}
      ${isVisible && !animate ? "animate-wiggle" : ""}`}
    >
      <ChevronUp size={28} strokeWidth={3} />

        {/* Tooltip */}
        <span
          className="absolute bottom-16 whitespace-nowrap px-3 py-1 text-sm 
          rounded-lg bg-gradient-to-r from-red-500 to-orange-400 text-white 
          opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-300 ease-out shadow-md"
        >
          Back to top
          {/* Rounded arrow */}
          <span
            className="absolute left-1/2 -translate-x-1/2 top-full w-3 h-3 
            bg-gradient-to-r from-red-500 to-orange-400 rotate-45 rounded-sm"
          ></span>
        </span>
      </button>
    </div>
  );
}