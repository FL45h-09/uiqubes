// import { useEffect, useState } from 'react';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// import { CopyButton } from '@/_components/atoms/buttons/Buttons';
// import MainHeaderSrc from '@/_components/molecules/header/MainHeader.tsx';
import { CodeBlock } from '@/_components/organisms/features/CodeBlock';

export const FeatureSection = () => {
  return (
    <div className="featuresec overflow-hidden py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4">
                    <div className="lg:max-w-lg">
                        <h2 className="text-base/7 font-semibold text-indigo-400">Deploy faster <span className="block mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">A better workflow</span></h2>
                        <p className="mt-6 text-lg/8 text-gray-300">Improve your developer workflow with ready-to-use UI components for React/Next.js — just copy, paste, and start building smarter.</p>
                        <ul className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                            <li className="relative pl-10">
                                <span className="inline-block text-indigo-400 text-[30px] absolute left-0 top-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor"><path d="M620-163 450-333l56-56 114 114 226-226 56 56-282 282Zm220-397h-80v-200h-80v120H280v-120h-80v560h240v80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v200ZM480-760q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/></svg>
                                </span>
                                <p className="leading-normal"><span className='font-semibold text-white'>Instant Copy-Paste : </span>Skip the boilerplate. Drop in components and see results in seconds — no config needed.</p>
                            </li>
                            <li className="relative pl-10">
                                <span className="inline-block text-indigo-400 text-[30px] absolute left-0 top-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 -960 960 960" fill="currentColor"><path d="M216-192v-240h-72v-72h217v72h-73v240h-72Zm0-384v-192h72v192h-72Zm156 0v-72h72v-120h72v120h72v72H372Zm72 384v-312h72v312h-72Zm228 0v-120h-73v-72h217v72h-72v120h-72Zm0-264v-312h72v312h-72Z"/></svg>
                                </span>
                                <p className="leading-normal"><span className='font-semibold text-white'>Effortless Customization : </span>Tweak props or apply Tailwind classes to make every component fit your brand perfectly.</p>
                            </li>
                            <li className="relative pl-10">
                                <span className="inline-block text-indigo-400 text-[30px] absolute left-0 top-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 -960 960 960" fill="currentColor"><path d="m384-360 51-51-69-69 69-69-51-51-120 120 120 120Zm192 0 120-120-120-120-51 51 69 69-69 69 51 51ZM216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm0-72h528v-528H216v528Zm0-528v528-528Z"/></svg>
                                </span>
                                <p className="leading-normal"><span className='font-semibold text-white'>Production Ready : </span>Clean code, responsive design, and accessibility baked in — no compromises.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <CodeBlock />
            </div>
        </div>
    </div>
  )
}
