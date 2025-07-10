import Link from "next/link";
import { BgSquareSvg } from "@/_components/atoms/svgIcons/SvgIcons";

export const GetStartedSection = () => {
  return (
    <section className="getstartedsec relative overflow-hidden text-white py-40">
      <div className="container">
        <BgSquareSvg />
        <BlobBg />
        <div className="relative z-10 mx-auto max-w-[700px] text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug sm:leading-snug">Boost your productivity. <span className="block">Build UIs Faster | Better | Together.</span></h2>
          <p className="text-lg text-gray-300 mb-8">UIBrix gives you ready-to-use React + Tailwind components built by devs, for devs. Copy, customize, and ship beautiful interfaces without wasting hours reinventing buttons.</p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <Link href="/brix" className="inline-block rounded-md bg-indigo-500 px-6 py-3 text-white font-semibold hover:bg-indigo-600 transition">Get started</Link>
            {/* <Link href="" className="inline-block text-indigo-300 hover:text-indigo-100 font-medium">Contribute <span aria-hidden="true">→</span></Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

const BlobBg = ()=>{
    return(
        <div aria-hidden="true" className="absolute inset-0 z-0 blur-3xl opacity-30">
        <div className="h-full w-full bg-gradient-to-tr from-[var(--color-primary)] via-purple-500 to-[var(--color-secondary)]" 
        style={{
            clipPath: 'polygon(93.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
        }}
        />
      </div>
    )
}