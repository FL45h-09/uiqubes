import React from 'react';
import Link from 'next/link';
import { AuthForm, NotificationCard, PricingCard, ProfileCard } from '@uiqubes/ui';

export const ShowcaseSection = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-[var(--background)]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-sm font-semibold text-cyan-400 mb-2 tracking-wide uppercase">Extensive Library</h2>
          <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Beautiful blocks. Ready to drop in.
          </p>
          <p className="mt-4 text-lg text-gray-400">
            Stop wasting hours adjusting padding and margin. Grab production-ready, accessible blocks crafted with extreme attention to detail.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min items-start">
          
          {/* Column 1: Auth Form Mockup */}
          <div className="flex flex-col gap-6">
            <AuthForm />
          </div>

          {/* Column 2: Profile / Notifications Mockups */}
          <div className="flex flex-col gap-6">
            <ProfileCard />
            <NotificationCard />
            
            {/* Toggle Card */}
            <div className="w-full bg-[#111] border border-gray-800 rounded-2xl p-5 shadow-xl flex items-center justify-between">
              <div className="flex flex-col">
                <h4 className="text-white font-medium text-sm">Auto Deploy</h4>
                <span className="text-gray-500 text-xs">Deploy on push</span>
              </div>
              <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-500">
                <span className="inline-block h-4 w-4 translate-x-6 rounded-full bg-white transition"></span>
              </div>
            </div>
          </div>

          {/* Column 3: Stats/Pricing Mockups */}
          <div className="flex flex-col gap-6">
             <PricingCard />
          </div>
          
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/qubes" className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1">
            See all 50+ components <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
