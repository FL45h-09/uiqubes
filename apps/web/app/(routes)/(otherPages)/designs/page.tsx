import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Design Showcase - UI Qubes",
    description: "Browse curated open-source design layouts and components submitted by our community designers."
}

// Mock design database (to be swapped with real Database payload)
const approvedDesigns = [
    {
        id: "d1",
        title: "Neon Authentication Card",
        category: "Forms",
        designer: "Sarah Connor",
        likes: 142,
        imageUrl: "https://images.unsplash.com/photo-1629904853716-f0cb5417df05?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "d2",
        title: "Bento Analytics Dashboard",
        category: "Dashboards",
        designer: "Alex Chen",
        likes: 210,
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "d3",
        title: "Glassmorphic Settings Menu",
        category: "Modals",
        designer: "Alex Chen",
        likes: 89,
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "d4",
        title: "Dark Mode Pricing Table",
        category: "Blocks",
        designer: "Sarah Connor",
        likes: 175,
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    }
];

export default function DesignsPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] flex flex-col relative overflow-hidden pt-32 pb-24 border-t border-white/5">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
            
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4 border border-cyan-500/20">
                            Designer Showcase
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                            Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Designs</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                            Discover breathtaking interface concepts built and certified by our approved designers. Once vetted, these designs are scheduled to be coded into the open-source library.
                        </p>
                    </div>
                </div>

                {/* Filter / Tabs (Visual Only for now) */}
                <div className="flex gap-4 mb-10 overflow-x-auto pb-2 scrollbar-hide">
                    <button className="px-5 py-2 whitespace-nowrap bg-white text-black font-semibold rounded-full text-sm">All Designs</button>
                    <button className="px-5 py-2 whitespace-nowrap bg-[#111] text-gray-400 hover:text-white border border-gray-800 rounded-full text-sm transition-colors">Dashboards</button>
                    <button className="px-5 py-2 whitespace-nowrap bg-[#111] text-gray-400 hover:text-white border border-gray-800 rounded-full text-sm transition-colors">Forms</button>
                    <button className="px-5 py-2 whitespace-nowrap bg-[#111] text-gray-400 hover:text-white border border-gray-800 rounded-full text-sm transition-colors">Landing Pages</button>
                </div>

                {/* Designs Masonry/Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {approvedDesigns.map((design) => (
                        <div key={design.id} className="group relative bg-[#050505] border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(34,211,238,0.1)]">
                            <div className="relative h-72 w-full overflow-hidden">
                                {/* The design showcase image (Using Unsplash placeholders via standard unoptimized image since no config yet) */}
                                <Image 
                                    src={design.imageUrl} 
                                    alt={design.title} 
                                    fill 
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                
                                <div className="absolute top-4 left-4">
                                     <span className="bg-black/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                                         {design.category}
                                     </span>
                                </div>
                            </div>

                            <div className="p-6 flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{design.title}</h3>
                                    <p className="text-sm text-gray-500">by {design.designer}</p>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 border border-gray-800 px-3 py-1.5 rounded-full bg-[#111]">
                                    <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-sm font-bold">{design.likes}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
