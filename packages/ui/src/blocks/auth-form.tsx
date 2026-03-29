import * as React from "react"
import { cn } from "@uiqubes/utils"
import { Button } from "../button"
import { Input } from "../input"

export interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  onSignIn?: (e: React.FormEvent) => void;
  onGithubSignIn?: () => void;
}

export const AuthForm = React.forwardRef<HTMLDivElement, AuthFormProps>(
  ({ className, onSignIn, onGithubSignIn, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn("w-full bg-[#111] border border-gray-800 rounded-2xl p-6 shadow-2xl hover:border-gray-700 transition duration-300 relative group overflow-hidden", className)}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <h3 className="text-xl font-medium text-white mb-2 relative z-10">Sign in</h3>
        <p className="text-sm text-gray-400 mb-6 relative z-10">Enter your email and password to access your account.</p>
        
        <form onSubmit={onSignIn} className="space-y-4 relative z-10">
          <div>
            <label className="text-xs font-medium text-gray-400 mb-1.5 block">Email</label>
            <Input type="email" placeholder="name@example.com" required className="bg-[#0a0a0a] border-gray-800 text-white focus-visible:ring-indigo-500" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-medium text-gray-400 block">Password</label>
              <a href="#" className="text-xs text-indigo-400 hover:underline">Forgot password?</a>
            </div>
            <Input type="password" placeholder="••••••••" required className="bg-[#0a0a0a] border-gray-800 text-white focus-visible:ring-indigo-500" />
          </div>
          <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200 mt-2">
            Sign in
          </Button>
          
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-gray-800"></div>
            <span className="flex-shrink-0 mx-4 text-xs text-gray-500">Or continue with</span>
            <div className="flex-grow border-t border-gray-800"></div>
          </div>
          
          <Button type="button" variant="outline" onClick={onGithubSignIn} className="w-full bg-[#1a1a1a] border-gray-800 text-white hover:bg-gray-800 hover:text-white flex justify-center items-center gap-2">
             <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path></svg>
             GitHub
          </Button>
        </form>
      </div>
    )
  }
)
AuthForm.displayName = "AuthForm"
