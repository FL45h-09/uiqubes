import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy - UI Qubes",
    description: "Privacy Policy for the UI Qubes open-source component library."
}

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] flex flex-col relative overflow-hidden pt-32 pb-24 border-t border-white/5">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
            
            <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10 w-full">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">Privacy Policy</h1>
                    <p className="text-gray-400">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                </div>

                <div className="prose prose-invert prose-indigo max-w-none text-gray-300">
                    <section className="mb-12">
                        <p className="leading-relaxed text-lg mb-8">
                            At UI Qubes, accessible at uiqubes.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by UI Qubes and how we use it.
                        </p>

                        <h2 className="text-2xl font-bold text-white mb-4">1. Information Collection</h2>
                        <p className="leading-relaxed mb-4">
                            UI Qubes is an open-source library. We do not require visitors to register, log in, or provide personal identity information to browse documentation or copy our component codes. 
                        </p>
                        <p className="leading-relaxed mb-4">
                            If you contact us directly (e.g., via GitHub issues or email), we may receive additional information about you such as your name, email address, the contents of the message, and any other information you may choose to provide.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Cookies and Tracking</h2>
                        <p className="leading-relaxed mb-4">
                            Like any other website, UI Qubes may use basic analytics tools or "cookies" to understand how users interact with our documentation (e.g., page views, component popularity) in order to improve the developer experience. 
                            These cookies do not track personally identifiable information.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Services</h2>
                        <p className="leading-relaxed mb-4">
                            Our components may rely on or link to third-party services (such as Radix UI, Tailwind CSS, or Clerk for authentication examples). These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                        <p className="leading-relaxed mb-4">
                            We value your trust in using our open-source tools. We strive to use commercially acceptable means of protecting our infrastructure, but remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable.
                        </p>
                    </section>

                    <section className="mb-12 border-t border-gray-800 pt-8 mt-12">
                        <h2 className="text-2xl font-bold text-white mb-4">Consent</h2>
                        <p className="leading-relaxed">
                            By using our website, you hereby consent to our Privacy Policy and agree to its Terms.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
