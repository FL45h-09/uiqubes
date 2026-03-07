import Image from "next/image";
import Link from "next/link";
import { LogoIcon } from "../svgIcons/SvgIcons";

export const LogoSection = () => {
  return (
    // <div className='logo box-border font-brockmann text-[30px] leading-[0] font-medium'><Link className="flex gap-2 items-center" href="/"><span className="inline-block w-12 "><Image src="/images/logo.png" width={300} height={300} alt="React Next Component Logo"/></span> UI Brix</Link></div>
    <div className='logo box-border font-brockmann text-[30px] leading-[0] font-medium text-white'><Link className="flex gap-2 items-center" href="/"><span className="inline-block bg-[var(--color-primary)] p-1.5 rounded box-border text-2xl"><LogoIcon /></span> UI Brix</Link></div>
  )
}
