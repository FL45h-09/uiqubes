'use client';
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

type SliderWrapProps = {
  children: React.ReactNode;
  direction?: 'rtl' | 'ltr'; // default = 'left'
  speed?: number;
  className?: string;
};

export const SliderWrap = ({ children, direction = 'ltr', speed = 2, className = "",}: SliderWrapProps) => {
    const isRTL = direction === 'rtl';
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { 
            loop: true, 
            align: 'start', 
            dragFree: true,
            direction
        },
        [AutoScroll({ speed, stopOnInteraction: false, stopOnMouseEnter: true })]
    );

  useEffect(() => {
    if (!emblaApi) return;

    const plugin = emblaApi.plugins().autoScroll;
    const root = emblaApi.containerNode()?.parentElement;

    if (!plugin || !root) return;

    const handleMouseEnter = () => plugin.stop();
    const handleMouseLeave = () => plugin.play();

    root.addEventListener('mouseenter', handleMouseEnter);
    root.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      root.removeEventListener('mouseenter', handleMouseEnter);
      root.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [emblaApi]);

  return (
    <div className={`embla w-[110%] -ml-[5%] overflow-hidden ${isRTL ? 'rtl' : ''} ${className}`} ref={emblaRef}>
      <div className={`embla__container flex ${isRTL ? 'flex-row-reverse' : ''}`}>
        {children}
      </div>
    </div>
  );
};