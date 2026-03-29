import * as React from "react"
import { cn } from "@uiqubes/utils"
import { Button } from "../button"

export interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  tier?: string;
  price?: string;
  description?: string;
  features?: string[];
}

export const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  ({ className, tier = "Pro Plan", price = "$29", description = "Perfect for scaling applications with advanced features.", features, ...props }, ref) => {
    
    const defaultFeatures = ['Unlimited Projects', '100+ Premium Blocks', 'Priority Support', 'Figma Files'];
    const displayFeatures = features || defaultFeatures;

    return (
      <div 
        ref={ref}
        className={cn("w-full rounded-2xl p-6 shadow-2xl bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-gray-800/80 relative overflow-hidden group", className)}
        {...props}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/40 transition duration-500 pointer-events-none"></div>
        <div className="mb-4 relative z-10">
          <span className="inline-block px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wide">{tier}</span>
        </div>
        <div className="mb-2 flex items-baseline gap-1 relative z-10">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-sm text-gray-400">/mo</span>
        </div>
        <p className="text-sm text-gray-400 mb-6 relative z-10">{description}</p>
        
        <ul className="space-y-3 mb-6 relative z-10">
          {displayFeatures.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span className="text-sm text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
        
        <Button className="w-full bg-indigo-500 text-white hover:bg-indigo-600 shadow-[0_0_15px_rgba(99,102,241,0.5)] border-none relative z-10">
          Upgrade to Pro
        </Button>
      </div>
    )
  }
)
PricingCard.displayName = "PricingCard"
