import React from 'react';
import Link from "next/link";
import { GithubIcon } from "@/_assets/svgIcons/SvgIcons";

export const MainFooter = () => {
  return (
    <footer className='py-4 border-t-[1px] border-gray-100/20 border-opacity-15'>
      <div className="container flex justify-between gap-3">
        <p className="text-sm text-center text-gray-500 dark:text-gray-400">UI Brix is an open-source project by <a className="underline hover:text-[var(--color-secondary)] hover:no-underline transition-colors" href="https://digitizedkosmos.com/" target="_blank">Digitized Kosmos</a> — explore, fork, and contribute to the stash.</p>
        <div className="ctasec"><Link className="text-[25px] text-[var(--foreground)] hover:text-white" target="_blank" href="https://github.com/FL45h-09/uibrix"><GithubIcon/></Link></div>
      </div>
    </footer>
  )
}
