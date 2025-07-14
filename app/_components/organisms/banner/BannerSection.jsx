'use client';
// import BannerScene from "@/_components/molecules/splineScene/BannerScene"
import { SquaresBg } from "@/_components/atoms/backgrouds/SquaresBg";
import { SearchBar } from "@/_components/atoms/search/SearchBar";
import { usePageMeta } from "@/libs/PageMeta";
import { InnerPgContent } from "@/_components/molecules/innerContent/InnerPgContent";

export const BannerSection = () => {
//   const isHome = useIsHome();
  const { isHome, title, isBrick } = usePageMeta();
  return (
    <>{isHome? (
        <div className="bannersec pt-32 pb-16 relative banner-bg">
            <div className="container flex justify-center">
                <div className="bannercaption relative z-[1] text-center inline-block border-box mx-auto py-8 px-3">
                    <h1 className="text-[60px] leading-none font-medium text-white mb-6">Reusable UI <span className="block">Components</span></h1>
                    <p className="text-gray-500 text-base">Build faster with <span className="text-gray-300">plug-and-play UI components</span> for React and Next.js <span className="block">Copy - Paste, Ship faster, Contribute your own and power the open-source dev flow</span></p>
                    <div className="searchbar mt-8 flex justify-center"><SearchBar /></div>
                </div>
            </div>
            <div className="bannerscene absolute inset-0 w-full h-full overflow-hidden"><SquaresBg speed={0.2} squareSize={40} direction='diagonal' borderColor='#343637' hoverFillColor='#9ca3af' /></div>
        </div>
      ) : isBrick?(
        <div className="innerbannersec pt-24 pb-12 relative">
          <div className="container">
              <div className="bannercaption relative z-[1] border-box px-3">
                  <h1 className="text-[40px] leading-none font-medium text-white mb-6">{title}</h1>
                  <InnerPgContent />
              </div>
          </div>
          {/* <div className="bannerscene absolute inset-0 w-full h-full overflow-hidden">
              <DotGrid dotSize={7} gap={15} baseColor="#afafaf" activeColor="#6c47ff" proximity={120} shockRadius={250} shockStrength={5} resistance={750} returnDuration={1.5} />
          </div> */}
      </div>
      ) :  (null)}</>
  )
}
