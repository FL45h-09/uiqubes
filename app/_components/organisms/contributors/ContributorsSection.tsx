import React from 'react';
import { SliderWrap } from '@/_components/molecules/sliderContainer/SliderWrap';

export const ContributorsSection = () => {
  return (
    <section>
        <h2 className='text-base/7 font-semibold text-indigo-400'>Recent <span className='block mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl'>Contributors</span></h2>
        <SliderWrap className="rotate-12">
            {Array.from({ length: 20 }).map((_, i) => (
            <div
                key={i}
                className="embla__slide shrink-0 px-2 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
            >
                <div className="bg-white p-4 rounded shadow text-center">
                Slide {i + 1}
                </div>
            </div>
            ))}
        </SliderWrap>
        <SliderWrap className='-rotate-12' direction="rtl">
            {Array.from({ length: 20 }).map((_, i) => (
            <div
                key={i}
                className="embla__slide shrink-0 px-2 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
            >
                <div className="bg-white p-4 rounded shadow text-center">
                Slide {i + 1}
                </div>
            </div>
            ))}
        </SliderWrap>
    </section>
  )
}
