import React from 'react';
import Link from 'next/link';

export const BottomCtaSection = () => {
  return (
    <section className="relative overflow-hidden py-32 border-t border-gray-800/50">
      {/* Dynamic Background Effect */}
      <div className="absolute inset-0 bg-[#0a0a0a]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 blur-[100px] pointer-events-none rounded-full"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Ready to supercharge your workflow?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl">
          Join hundreds of developers who are shipping faster, cleaner, and more accessible interfaces with UI Qubes.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link href="/qubes" className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Explore Components
          </Link>
          <Link href="https://github.com/FL45h-09/uiqubes" target="_blank" className="w-full sm:w-auto px-8 py-3.5 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 transition-colors border border-gray-700">
            View on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};
