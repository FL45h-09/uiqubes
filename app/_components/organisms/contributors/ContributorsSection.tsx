import React from 'react';
import { SliderWrap } from '@/_components/molecules/sliderContainer/SliderWrap';

export const ContributorsSection = () => {
  return (
    <section className='overflow-hidden'>
        <div className="container">
            <h2 className='text-base/7 font-semibold text-indigo-400'>Recent <span className='block mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl'>Contributors</span></h2>
        </div>
        <div className="slider-grid py-32">
            <SliderWrap className="rotate-[5deg]">
                {Array.from({ length: 20 }).map((_, i) => (
                   <div key={i} className="shrink-0 px-2 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 rounded-2xl overflow-hidden">
                        <div className="bg-[var(--color-primary)] p-6 shadow-[var(--btn-shadow)] text-center w-full h-full">
                            Slide {i + 1}
                        </div>
                    </div>
                ))}
            </SliderWrap>
            <SliderWrap className='-mt-5 -rotate-[5deg]' direction="rtl">
                {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="shrink-0 px-2 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 rounded-2xl overflow-hidden">
                        <div className="bg-[var(--color-primary)] p-6 shadow-[var(--btn-shadow)] text-center w-full h-full">
                            Slide {i + 1}
                        </div>
                    </div>
                ))}
            </SliderWrap>
        </div>
    </section>
  )
}
