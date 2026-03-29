import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Designer Registration - UI Qubes",
    description: "Apply to be a verified UI Qubes designer."
}

export default function SignUpPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] px-4 pt-32 pb-20 relative overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
            
            <div className="mb-8 text-center max-w-sm mt-auto md:mt-0">
               <h1 className="text-3xl font-bold text-white mb-2">Join the Roster</h1>
               <p className="text-gray-400">Create your Designer account to start submitting layouts to the community.</p>
            </div>

            <SignUp 
                appearance={{
                    elements: {
                        card: "bg-[#0a0a0a] border border-gray-800 shadow-2xl rounded-2xl",
                        headerTitle: "hidden", // We use our own custom header above
                        headerSubtitle: "hidden", 
                        socialButtonsBlockButton: "border border-gray-700 bg-[#111] hover:bg-white/5 text-white transition-colors",
                        socialButtonsBlockButtonText: "text-white font-medium",
                        dividerLine: "bg-gray-800",
                        dividerText: "text-gray-500",
                        formFieldLabel: "text-gray-300",
                        formFieldInput: "bg-[#111] border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 outline-none",
                        formButtonPrimary: "bg-white text-black font-bold hover:bg-gray-200 transition-colors rounded-lg",
                        footerActionText: "text-gray-400",
                        footerActionLink: "text-cyan-400 hover:text-cyan-300",
                        identityPreviewText: "text-white",
                        identityPreviewEditButton: "text-cyan-400 hover:text-cyan-300",
                        formFieldSuccessText: "text-green-400",
                        formFieldErrorText: "text-red-400"
                    }
                }} 
            />
            
            {/* Back to Home linking */}
            <div className="mt-8">
               <a href="/" className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-1">
                   &larr; Back to Platform
               </a>
            </div>
        </div>
    );
}
