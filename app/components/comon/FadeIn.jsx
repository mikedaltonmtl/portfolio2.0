'use client';
import { useState, useRef, useEffect } from 'react';


export default function FadeIn({ children, threshold = 0.5 }) {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(textElement);
      }
    }, {
      threshold: threshold,
    });

    if (textElement) {
      observer.observe(textElement);
    }

    return () => {
      if (textElement) {
        observer.unobserve(textElement);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={textRef}
      className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    >
      {children}
    </div>
  );
}
