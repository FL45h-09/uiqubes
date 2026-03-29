import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PenToolIcon, GithubIcon } from "lucide-react";

export const metadata: Metadata = {
    title: "Contributors & Designers - UI Qubes",
    description: "Meet the developers and designers building the future of open-source interfaces."
}

// Next.js static data fetching for GitHub contributors
async function getContributors() {
    try {
        const res = await fetch('https://api.github.com/repos/FL45h-09/uiqubes/contributors', {
            next: { revalidate: 3600 } // Revalidate every hour
        });

        if (!res.ok) {
            return [];
        }

        return res.json();
    } catch {
        return [];
    }
}

// Mock database call for approved designers (to be integrated with DB later)
async function getApprovedDesigners() {
    return [
        { id: "d1", name: "Sarah Connor", role: "Product Designer", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", portfolio: "#" },
        { id: "d2", name: "Alex Chen", role: "UI/UX Specialist", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d", portfolio: "#" },
    ];
}

export default async function ContributorsPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    // Next.js 15 requires awaiting searchParams
    const resolvedParams = await searchParams;
    const isDesignerTab = resolvedParams.tab === "designers";

    const contributors = await getContributors();
    const designers = await getApprovedDesigners();

    return (
        <div className="min-h-screen bg-[var(--background)] flex flex-col relative overflow-hidden pt-32 pb-24 border-t border-white/5">
            {/* Ambient Lighting */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Masterminds</span> Behind Qubes
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        UI Qubes is powered by a thriving community of open-source developers and talented designers. Meet the people shaping the ecosystem.
                    </p>
                </div>

                {/* Navigation Pills (Developers vs Designers) via URL Params */}
                <div className="flex justify-center mb-16">
                    <div className="inline-flex bg-[#0a0a0a] border border-gray-800 rounded-full p-1 shadow-2xl">
                        <Link
                            href="/contributors"
                            className={`px-6 py-2.5 text-sm font-medium rounded-full flex items-center gap-2 transition-all duration-300 ${!isDesignerTab ? 'bg-[#111] border border-gray-700 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                        >
                            <GithubIcon size={16} /> Developers
                        </Link>
                        <Link
                            href="/contributors?tab=designers"
                            className={`px-6 py-2.5 text-sm font-medium rounded-full flex items-center gap-2 transition-all duration-300 ${isDesignerTab ? 'bg-[#111] border border-gray-700 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                        >
                            <PenToolIcon size={16} /> Designers
                        </Link>
                    </div>
                </div>

                {/* Content Area */}
                {!isDesignerTab ? (
                    /* GitHub Contributors Grid */
                    contributors.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {contributors.map((user: any) => (
                                <div key={user.id} className="bg-[#111] border border-gray-800 rounded-3xl p-8 relative group overflow-hidden shadow-xl hover:border-indigo-500/50 transition-colors">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full pointer-events-none group-hover:bg-indigo-500/10 transition-colors"></div>

                                    <div className="flex items-center gap-5 mb-6">
                                        <div className="relative w-16 h-16 rounded-full overflow-hidden border border-gray-700">
                                            <Image
                                                src={user.avatar_url}
                                                alt={user.login}
                                                fill
                                                className="object-cover"
                                                unoptimized
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{user.login}</h3>
                                            <p className="text-sm text-indigo-400 font-medium">Core Contributor</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-800">
                                        <div className="flex flex-col">
                                            <span className="text-3xl font-black text-white">{user.contributions}</span>
                                            <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">{user.contributions === 1 ? 'commit' : 'commits'}</span>
                                        </div>
                                        <a
                                            href={user.html_url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-indigo-400 hover:text-white text-sm font-medium flex items-center gap-1 transition-colors bg-indigo-500/10 hover:bg-indigo-500/20 px-4 py-2 rounded-lg"
                                        >
                                            View GitHub &rarr;
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center border border-dashed border-gray-800 rounded-2xl bg-[#0a0a0a]/50">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 mb-4">
                                <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Loading Contributors</h3>
                            <p className="text-gray-400 max-w-md mx-auto">
                                Fetching the latest developers directly from the GitHub API...
                            </p>
                        </div>
                    )
                ) : (
                    /* Approved Designers Grid */
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {designers.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {designers.map((designer) => (
                                    <div key={designer.id} className="bg-[#111] border border-gray-800 rounded-3xl p-8 relative group overflow-hidden shadow-xl hover:border-cyan-500/50 transition-colors">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>

                                        <div className="flex items-center gap-5 mb-6">
                                            <div className="relative w-16 h-16 rounded-full overflow-hidden border border-gray-700">
                                                <Image src={designer.avatar} alt={designer.name} fill className="object-cover" unoptimized />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white">{designer.name}</h3>
                                                <p className="text-sm text-cyan-400">{designer.role}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                            Certified community designer contributing to premium, accessible UI layouts on UI Qubes.
                                        </p>
                                        <a href={designer.portfolio} className="text-indigo-400 hover:text-white text-sm font-medium flex items-center gap-1 transition-colors">
                                            View Portfolio &rarr;
                                        </a>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="py-20 text-center border border-dashed border-gray-800 rounded-2xl bg-[#0a0a0a]/50">
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 mb-4">
                                    <PenToolIcon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">No Designers Yet</h3>
                                <p className="text-gray-400 max-w-md mx-auto">
                                    We are launching our designer verification program soon!
                                </p>
                            </div>
                        )}

                        {/* Designer Registration CTA */}
                        <div className="mt-20 max-w-3xl mx-auto rounded-3xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/20 p-12 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                            <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Want to join the roster?</h2>
                            <p className="text-gray-300 mb-8 relative z-10 max-w-xl mx-auto">
                                Become an approved UI designer. Submit your Figma layouts or React components, gain exposure, and help developers ship faster.
                            </p>
                            <Link href="/sign-up" className="inline-flex px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors shadow-lg relative z-10">
                                Apply to be a Designer
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}