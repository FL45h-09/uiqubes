'use client';
import { useEffect, useState } from 'react';

export const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-[2px] z-50">
      <div
        className="h-full transition-all duration-50"
        style={{
          width: `${scrollWidth}%`,
          backgroundColor: scrollWidth > 0 ? 'var(--color-primary)' : 'transparent',
        }}
      />
    </div>
  );
};