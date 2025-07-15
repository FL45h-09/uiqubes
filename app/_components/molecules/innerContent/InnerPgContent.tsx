'use client';
import { useState, useRef, useEffect } from "react";

type ReadMoreProps = {
  collapsedHeight?: number;
  fadeOverlay?: boolean;
  className?: string;
};

export const InnerPgContent = ({
  collapsedHeight = 75,
  fadeOverlay = true,
  className = "",
}: ReadMoreProps) => {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [collapsedHeight]);

  return (
    <div className={`relative mx-auto shadow ${className}`}>
      <div ref={contentRef} className="overflow-hidden transition-all duration-500 ease-in-out relative" style={{ maxHeight: expanded ? contentHeight ?? 'none' : collapsedHeight }}>
        <div className="space-y-2 text-gray-200 text-sm font-normal">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis adipisci doloremque, fugiat temporibus labore voluptate iusto assumenda facilis?</p>
          <p>You can pass images, divs, or any JSX children. Smooth expand/collapse will work.</p>
          <p>Another paragraph to test overflow.</p>
          <p>Another one… keep going!</p>
          <p>Still more content. Yep. Works.</p>
        </div>

        {!expanded && fadeOverlay && (
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none" />
        )}
      </div>

      <div className="btnbox mt-3 flex justify-center relative before:absolute before:w-full before:h-[1px] before:bg-blue-200 before:left-0 before:top-1/2 before:z-20">
        <span className="px-0 z-20">
          <button
            onClick={() => setExpanded(!expanded)}
            className="min-w-[117px] bg-[var(--background)] hover:text-[var(--color-primary)] font-medium text-white text-sm cursor-pointer transition-all duration-300 ease-in-out pl-3 py-1 rounded-md flex justify-between items-center"
          >
            {expanded ? "Read Less" : "Read More"}
            <div className={`iconbox inline-block transition-transform duration-300 text-[30px] ease-in-out ${expanded ? 'rotate-180' : 'rotate-0'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor">
                <path d="M480-384 288-576h384L480-384Z" />
              </svg>
            </div>
          </button>
        </span>
      </div>
    </div>
  );
};
