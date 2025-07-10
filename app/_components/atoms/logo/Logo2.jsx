import Link from "next/link";
import { LogoText } from "../svgIcons/SvgIcons";

export const Logo2 = () => {
  return (
     <div className='logo box-border flex items-center gap-4'>
        <button className="w-[50px] aspect-square"><Image src="/images/ques-mark.png" width={302} height={301} alt="React Next Component Logo"/></button>
        <Link href="/"><span className="text-[200px] text-white"><LogoText /></span></Link>
    </div>
  )
}
