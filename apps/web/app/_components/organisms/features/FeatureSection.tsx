import { CodeBlock } from '@/_components/organisms/features/CodeBlock';

const CopyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
  </svg>
);

const PaletteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.879-5.831a1.5 1.5 0 00-1.4-2.241h-2.146l-4.226 6.33a15.996 15.996 0 00-2.492 4.385l-.261.005zm-3.42-3.42a15.996 15.996 0 00-4.385 2.492l-6.33 4.226a1.5 1.5 0 002.241 1.4h2.146l5.83-3.879a15.995 15.995 0 004.648-4.764z" />
  </svg>
);

export const FeatureSection = () => {
  return (
    <div className="featuresec overflow-hidden py-24 sm:py-32 relative z-10 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">Everything you need</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
            Zero bloat. Complete control.
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            UiQubes isn&apos;t just another component library. It&apos;s a precise collection of modular building blocks that you own entirely.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-2">
            
            <div className="flex p-px lg:col-span-1 rounded-2xl bg-gradient-to-b from-gray-800 to-[#111] overflow-hidden group hover:from-indigo-500/50 transition-colors duration-500">
                <div className="w-full flex flex-col justify-end bg-[#111] rounded-2xl p-8 sm:p-10 border border-gray-800/50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-30 blur-2xl w-64 h-64 bg-indigo-500 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500 relative z-10 shadow-lg shadow-indigo-500/30">
                    <CopyIcon className="size-5 text-white" />
                  </div>
                  <h3 className="mt-8 text-lg/7 font-semibold text-white relative z-10">Accessible by Default</h3>
                  <p className="mt-2 text-sm/6 text-gray-400 relative z-10">
                    Built natively on top of established Radix UI primitives ensuring complete WAI-ARIA compliance. Screen readers love it natively.
                  </p>
                </div>
            </div>

            <div className="flex p-px lg:col-span-1 lg:row-span-2 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-[#111] overflow-hidden group">
              <div className="w-full bg-[#0a0a0a] rounded-2xl border border-gray-800/50 flex flex-col p-8 lg:p-10 relative">
                <div className="flex-none mb-8 relative z-10">
                  <h3 className="text-lg/7 font-semibold text-white">Developer Experience First</h3>
                  <p className="mt-2 text-sm/6 text-gray-400">
                    Stop fighting against opinionated APIs. Drop the code into your project and modify it directly in your IDE cleanly.
                  </p>
                </div>
                <div className="flex-1 w-full relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative h-full w-full bg-[#111] border border-gray-800 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center p-2">
                    <CodeBlock />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex p-px lg:col-span-1 rounded-2xl bg-gradient-to-t from-gray-800 to-[#111] overflow-hidden group hover:from-cyan-500/50 transition-colors duration-500">
                <div className="w-full flex flex-col bg-[#111] rounded-2xl p-8 sm:p-10 border border-gray-800/50 relative overflow-hidden">
                   <div className="absolute bottom-0 left-0 -ml-20 -mb-20 opacity-30 blur-2xl w-64 h-64 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                   <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500 relative z-10 shadow-lg shadow-cyan-500/30">
                     <PaletteIcon className="size-5 text-white" />
                   </div>
                   <h3 className="mt-8 text-lg/7 font-semibold text-white relative z-10">Fully Customizable</h3>
                   <p className="mt-2 text-sm/6 text-gray-400 relative z-10">
                     Powered precisely by Tailwind CSS and CVA. Match your brand&apos;s aesthetics without writing a single line of custom conflicting CSS.
                   </p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
