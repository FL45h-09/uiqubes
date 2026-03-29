// import BannerScene from "@/_components/molecules/splineScene/BannerScene"
import { SquaresBg } from "@/_components/atoms/backgrouds/SquaresBg";
import { SearchBar } from "@/_components/atoms/search/SearchBar";
import Link from "next/link";

export const BannerSection = () => {
  return (
    <div className="bannersec pt-32 pb-24 relative banner-bg overflow-hidden">
        <div className="container relative z-10 flex flex-col items-center text-center mx-auto px-4">
            
            {/* Announcement Badge */}
            <Link href="/qubes" className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full hover:bg-indigo-500/20 transition-colors backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_10px_2px_rgba(99,102,241,0.5)]"></span>
              Introducing UI Qubes v1.0
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>

            {/* Hero Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Build interfaces <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 animate-gradient-x">
                  at the speed of thought.
                </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10">
                Beautifully designed, accessible, and customizable React + Next.js components. 
                <span className="text-gray-200 font-medium"> Copy. Paste. Ship.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full sm:w-auto">
                <Link href="/qubes" className="h-12 px-8 inline-flex items-center justify-center rounded-md bg-white text-black font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto">
                  Browse Components
                </Link>
                
                <div className="flex items-center justify-between h-12 pl-4 pr-2 bg-[#111] border border-gray-800 rounded-md text-gray-300 font-mono text-sm w-full sm:w-auto min-w-[280px]">
                  <span>npm i @uiqubes/ui</span>
                  <button className="p-2 ml-4 hover:bg-gray-800 rounded-md text-gray-400 hover:text-white transition-colors" title="Copy to clipboard">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                  </button>
                </div>
            </div>

            {/* Search */}
            <div className="w-full max-w-md hidden md:block">
              <SearchBar />
            </div>
            
        </div>
        <div className="bannerscene absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background)]/20 to-[var(--background)] z-[1]"></div>
          <SquaresBg speed={0.2} squareSize={40} direction='diagonal' borderColor='#343637' hoverFillColor='#6366f1' />
        </div>
    </div>
  )
}
