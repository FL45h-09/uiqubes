import * as React from "react"
import { cn } from "@uiqubes/utils"

export interface NotificationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  count?: number;
  notifications?: { message: string; time: string }[];
}

export const NotificationCard = React.forwardRef<HTMLDivElement, NotificationCardProps>(
  ({ className, title = "Notifications", count = 3, notifications = [], ...props }, ref) => {
    
    const defaultNotifs = [
      { message: "Your component library deployment was successful.", time: "2m ago" },
      { message: "New version of UI Qubes available.", time: "1h ago" },
      { message: "Alex sent you a message.", time: "3h ago" }
    ];
    
    const displayNotifs = notifications.length > 0 ? notifications : defaultNotifs;

    return (
      <div 
        ref={ref}
        className={cn("w-full bg-[#111] border border-gray-800 rounded-2xl p-5 shadow-xl hover:border-gray-700 transition duration-300 relative group overflow-hidden", className)}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <div className="flex justify-between items-center mb-4 relative z-10">
          <h4 className="text-white font-medium text-sm">{title}</h4>
          {count > 0 && <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/20 text-[10px] text-indigo-300">{count}</span>}
        </div>
        
        <div className="space-y-4 relative z-10">
          {displayNotifs.map((n, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
              <div>
                <p className="text-gray-300 text-sm leading-tight">{n.message}</p>
                <span className="text-gray-500 text-xs mt-1 block">{n.time}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full text-center text-sm text-gray-400 hover:text-white mt-4 border border-gray-800 rounded py-1.5 relative z-10 hover:bg-gray-800 transition-colors">Mark all as read</button>
      </div>
    )
  }
)
NotificationCard.displayName = "NotificationCard"
