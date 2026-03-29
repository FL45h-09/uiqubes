import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service - UI Qubes",
    description: "Terms of Service and Usage Guidelines for the UI Qubes open-source library."
}

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-[var(--background)] flex flex-col relative overflow-hidden pt-32 pb-24 border-t border-white/5">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
            
            <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10 w-full">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">Terms of Service</h1>
                    <p className="text-gray-400">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                </div>

                <div className="prose prose-invert prose-indigo max-w-none text-gray-300">
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                        <p className="leading-relaxed mb-4">
                            By accessing or using the UI Qubes component library and website ("Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Open Source License</h2>
                        <p className="leading-relaxed mb-4">
                            The UI Qubes components and source code are provided under the MIT License. You are free to use, modify, distribute, and integrate the code into your personal and commercial projects without attribution, though it is appreciated.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Use of the Website</h2>
                        <p className="leading-relaxed mb-4">
                            The UI Qubes documentation website and infrastructure are maintained by Digitized Kosmos. You agree not to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-400 mb-6">
                            <li>Use the site in any way that violates applicable laws or regulations.</li>
                            <li>Attempt to disrupt or compromise the integrity of our servers or networks.</li>
                            <li>Scrape, mine, or extract data from the site for malicious purposes.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
                        <p className="leading-relaxed mb-4">
                            While the core component code is open-source (MIT), the UI Qubes logo, branding, and original site layout remain the intellectual property of Digitized Kosmos and its creators.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Disclaimer of Warranties</h2>
                        <p className="leading-relaxed mb-4">
                            The UI Qubes components are provided "as is" and "as available" without any warranty of any kind, explicit or implied. We do not guarantee that the components will meet your specific requirements, be uninterrupted, or error-free.
                        </p>
                    </section>

                    <section className="mb-12 border-t border-gray-800 pt-8 mt-12">
                        <h2 className="text-2xl font-bold text-white mb-4">Questions?</h2>
                        <p className="leading-relaxed">
                            If you have questions about these Terms of Service, please reach out via our GitHub repository.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
