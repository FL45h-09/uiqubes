import React from 'react';
import Link from "next/link";
import { Github, Twitter, Mail } from "lucide-react";

export const MainFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="space-y-6 xl:col-span-1">
            <span className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                <div className="w-3 h-3 bg-white rounded-sm"></div>
              </div>
              UI Qubes
            </span>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Stop rebuilding from scratch. Beautifully designed, accessible, and customizable React components delivered right to your codebase.
            </p>
            <div className="flex space-x-5">
              <a href="https://github.com/FL45h-09/uiqubes" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#1DA1F2] transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-400 transition-colors">
                <span className="sr-only">Email</span>
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Library</h3>
                <ul role="list" className="mt-4 space-y-3 relative z-20">
                  <li><Link href="/qubes" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">All Components</Link></li>
                  <li><Link href="/qubes" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">UI Elements</Link></li>
                  <li><Link href="/qubes" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Page Blocks</Link></li>
                  <li><Link href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">Templates <span className="text-[10px] bg-indigo-500/20 text-indigo-400 px-1.5 py-0.5 rounded border border-indigo-500/30">Soon</span></Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Project</h3>
                <ul role="list" className="mt-4 space-y-3 relative z-20">
                  <li><Link href="/about-us" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">About Us</Link></li>
                  <li><Link href="/contributors" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Contributors</Link></li>
                  <li><Link href="/designs" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Design Showcase</Link></li>
                  <li><a href="https://github.com/FL45h-09/uiqubes" target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">GitHub Repository</a></li>
                  <li><a href="https://github.com/FL45h-09/uiqubes/issues" target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Report an Issue</a></li>
                  <li><a href="https://digitizedkosmos.com/" target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Digitized Kosmos</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
                <ul role="list" className="mt-4 space-y-3 relative z-20">
                  <li><Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
                  <li><a href="https://github.com/FL45h-09/uiqubes/blob/main/LICENSE" target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">License</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} UI Qubes by <a href="https://digitizedkosmos.com/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">Digitized Kosmos</a>. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs text-gray-500">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
