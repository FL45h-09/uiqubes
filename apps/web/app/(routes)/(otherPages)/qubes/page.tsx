'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const componentsList = [
  { name: 'Button', slug: 'button', category: 'Elements', description: 'Interactive button component with multiple variants.' },
  { name: 'Input', slug: 'input', category: 'Forms', description: 'Text input field with accessible label.' },
  { name: 'Checkbox', slug: 'checkbox', category: 'Forms', description: 'A control that allows the user to toggle between checked and not checked.' },
  { name: 'Switch', slug: 'switch', category: 'Forms', description: 'A control that allows the user to toggle between checked and not checked.' },
  { name: 'Dialog', slug: 'dialog', category: 'Overlays', description: 'A window overlaid on either the primary window or another dialog window.' },
  { name: 'Accordion', slug: 'accordion', category: 'Elements', description: 'A vertically stacked set of interactive headings that each reveal a section of content.' },
  { name: 'Hero Block', slug: 'hero', category: 'Blocks', description: 'A large, prominent banner area typically placed front and center.' },
  { name: 'Auth Form', slug: 'auth-form', category: 'Blocks', description: 'A complete authentication form with email and OAuth options.' },
  { name: 'Pricing Card', slug: 'pricing-card', category: 'Blocks', description: 'A premium pricing tier card.' },
  { name: 'Notification Card', slug: 'notification-card', category: 'Blocks', description: 'A stylized notifications widget.' },
  { name: 'Profile Card', slug: 'profile-card', category: 'Blocks', description: 'A user identity and profile summary widget.' },
];

export default function QubesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Elements', 'Forms', 'Overlays', 'Blocks'];
  
  const filtered = activeCategory === 'All' 
    ? componentsList 
    : componentsList.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-[var(--background)] pt-24 pb-12 relative z-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-4">
            Component Library
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Beautifully designed, accessible, and customizable components. Open source and ready to drop into your Next.js applications.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Categories</h3>
            <ul className="space-y-2">
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${activeCategory === cat ? 'bg-indigo-500/10 text-indigo-400 font-medium' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((comp) => (
                <Link key={comp.slug} href={`/qubes/${comp.slug}`} className="group relative rounded-2xl border border-gray-800 bg-[#0a0a0a] p-6 hover:border-indigo-500/50 transition-colors overflow-hidden flex flex-col h-full shadow-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Decorative Abstract Preview Area */}
                  <div className="h-32 w-full rounded-xl bg-[#111] border border-gray-800/50 mb-6 flex items-center justify-center relative overflow-hidden group-hover:bg-[#151515] transition-colors">
                     <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
                     {comp.category === 'Blocks' ? (
                       <div className="w-20 h-16 border border-indigo-500/30 rounded-lg bg-indigo-500/10 flex flex-col gap-1.5 p-2 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
                         <div className="w-full h-2 bg-indigo-500/20 rounded-sm"></div>
                         <div className="w-2/3 h-2 bg-indigo-500/20 rounded-sm"></div>
                         <div className="w-full h-5 bg-indigo-500/40 rounded mt-auto"></div>
                       </div>
                     ) : (
                       <div className="w-14 h-14 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.15)] relative">
                          <span className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse"></span>
                          <span className="absolute inset-0 rounded-lg border border-cyan-400 opacity-20 group-hover:scale-110 transition-transform duration-500"></span>
                       </div>
                     )}
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">{comp.name}</h3>
                  <p className="text-sm text-gray-400 flex-grow">{comp.description}</p>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-gray-800 bg-gray-900 text-gray-300">
                      {comp.category}
                    </span>
                    <span className="text-sm font-medium text-indigo-400 group-hover:text-indigo-300 flex items-center gap-1">
                      View <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="py-20 text-center border border-dashed border-gray-800 rounded-2xl">
                 <p className="text-gray-500">No components found in this category.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
