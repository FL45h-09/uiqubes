'use client';
import { useEffect, useRef } from 'react';

export const ScrollProgress = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;

      if (progressRef.current) {
        progressRef.current.style.width = `${scrolled}%`;
        progressRef.current.style.backgroundColor =
          scrolled > 0 ? 'var(--color-primary)' : 'transparent';
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScroll(); // initial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-[2px] z-50">
      <div
        ref={progressRef}
        className="h-full"
        style={{
          width: '0%',
          backgroundColor: 'transparent',
          transition: 'width 0.1s ease-out',
        }}
      />
    </div>
  );
};