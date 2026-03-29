import * as React from "react"
import { cn } from "@uiqubes/utils"

export interface ProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  email?: string;
}

export const ProfileCard = React.forwardRef<HTMLDivElement, ProfileCardProps>(
  ({ className, name = "Alex Developer", email = "alex@example.com", ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn("w-full bg-[#111] border border-gray-800 rounded-2xl p-5 shadow-xl flex items-center gap-4 hover:border-gray-700 transition cursor-pointer group relative overflow-hidden", className)}
        {...props}
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 p-[2px] group-hover:rotate-12 transition duration-500">
          <div className="w-full h-full rounded-full border-2 border-[#111] overflow-hidden bg-gray-800"></div>
        </div>
        <div className="flex-1 relative z-10">
          <h4 className="text-white font-medium text-sm">{name}</h4>
          <p className="text-gray-400 text-xs">{email}</p>
        </div>
        <button className="px-3 py-1 rounded-full border border-gray-700 text-xs text-white hover:bg-gray-800 relative z-10 transition-colors">Edit</button>
      </div>
    )
  }
)
ProfileCard.displayName = "ProfileCard"
