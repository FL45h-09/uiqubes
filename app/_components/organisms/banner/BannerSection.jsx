'use client';
// import BannerScene from "@/_components/molecules/splineScene/BannerScene"
import { SquaresBg } from "@/_components/atoms/backgrouds/SquaresBg";
import { SearchBar } from "@/_components/atoms/search/SearchBar";
import { useIsHome } from "@/libs/isHomePath";

export const BannerSection = () => {
  const isHome = useIsHome();
  console.log(isHome);
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
      ) : (
        <div className="innerbannersec pt-32 pb-16 relative inner-ban-bg">
          <div className="container flex justify-center">
              <div className="bannercaption relative z-[1] text-center inline-block border-box mx-auto py-8 px-3">
                  <h1 className="text-[60px] leading-none font-medium text-white mb-6">Inner Page</h1>
              </div>
          </div>
          {/* <div className="bannerscene absolute inset-0 w-full h-full overflow-hidden"><SquaresBg speed={0.2} squareSize={40} direction='diagonal' borderColor='#343637' hoverFillColor='#9ca3af' /></div> */}
      </div>
      )}</>
  )
}
