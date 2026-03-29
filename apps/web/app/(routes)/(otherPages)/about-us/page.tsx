import { Metadata } from "next";
import Link from "next/link";
import { CopyIcon, PaletteIcon, TerminalIcon } from "lucide-react";

export const metadata: Metadata = {
    title: "About UI Qubes - The Open Source UI Library",
    description: "Learn why we built UI Qubes and our mission to simplify React development."
}

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] flex flex-col relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
            
            {/* 1. Hero Section */}
            <section className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto text-center relative z-10 w-full border-b border-white/5">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
                    Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Future</span> of Interfaces.
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    UI Qubes wasn&apos;t born out of a desire for just another component library. 
                    It was born out of frustration with rigid systems that fought against our creativity. 
                    We believe you should own your components, not just rent them.
                </p>
            </section>

            {/* 2. The Mission Section */}
            <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto relative z-10 w-full border-b border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                        <div className="space-y-6 text-lg text-gray-400">
                            <p>
                                Every time we started a new Next.js project, we found ourselves wasting hours configuring Tailwind, setting up Radix UI primitives, and styling the same basic inputs and dropdowns over and over again.
                            </p>
                            <p>
                                Existing libraries were either too tightly coupled to their own CSS, impossible to customize heavily without writing terrifying CSS overrides, or lacked the accessibility standards modern web apps require. 
                            </p>
                            <p className="text-gray-300 font-medium border-l-2 border-indigo-500 pl-4 py-1">
                                We created UI Qubes so developers could grab beautifully crafted, accessible building blocks, and instantly drop them into their codebase with absolute layout control.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
                        <div className="relative bg-[#111] border border-gray-800 rounded-3xl p-8 shadow-2xl overflow-hidden group">
                           <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition duration-1000"></div>
                           <h3 className="text-xl font-mono text-indigo-400 mb-4">&gt; The Qubes Philosophy</h3>
                           <ul className="space-y-4 text-gray-300 font-mono text-sm leading-relaxed">
                             <li>1. Accessibility is non-negotiable.</li>
                             <li>2. You own the code. Copy, paste, modify.</li>
                             <li>3. Stay framework agnostic where possible, but optimize for React & Next.js.</li>
                             <li>4. Never abstract away Tailwind utility classes.</li>
                             <li>5. Beauty out-of-the-box.</li>
                           </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Core Values Grid */}
            <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto relative z-10 w-full">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white">Why developers love us</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-2xl hover:border-indigo-500/50 transition duration-300 relative group overflow-hidden shadow-xl">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 mb-6 group-hover:scale-110 transition">
                            <TerminalIcon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Copy. Paste. Ship.</h3>
                        <p className="text-gray-400 leading-relaxed">
                           No complex npm installations or bloated dependency trees. Grab the code, put it in your components folder, and you&apos;re done.
                        </p>
                    </div>
                    <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-2xl hover:border-cyan-500/50 transition duration-300 relative group overflow-hidden shadow-xl">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 mb-6 group-hover:scale-110 transition">
                            <PaletteIcon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Limitless Styling</h3>
                        <p className="text-gray-400 leading-relaxed">
                           Powered by Tailwind CSS and CVA. Change colors, layouts, and animations directly in your standard className strings.
                        </p>
                    </div>
                    <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-2xl hover:border-gray-500/50 transition duration-300 relative group overflow-hidden shadow-xl">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800 text-gray-300 mb-6 group-hover:scale-110 transition">
                            <CopyIcon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Accessible Primitives</h3>
                        <p className="text-gray-400 leading-relaxed">
                           Built primarily on top of Radix UI to ensure full keyboard navigation, focus management, and screen reader support natively.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. CTA */}
            <section className="py-24 px-6 lg:px-8 max-w-4xl mx-auto text-center relative z-10 w-full mb-12">
                <div className="bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 rounded-3xl p-12 relative overflow-hidden">
                   <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                   <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Stop rebuilding from scratch.</h2>
                   <p className="text-lg text-gray-300 mb-8 relative z-10">
                       Join the thousands of developers shipping faster, cleaner, and more accessible interfaces every single day.
                   </p>
                   <Link href="/qubes" className="inline-flex relative z-10 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                       Explore the Library
                   </Link>
                </div>
            </section>

        </div>
    )
}