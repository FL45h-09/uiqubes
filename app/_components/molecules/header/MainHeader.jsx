'use client';
import { LogoSection } from "@/_components/atoms/logo/LogoSection";
import { Navbar } from "@/_components/atoms/navbar/Navbar";
import { ClerkButtons } from "@/_components/atoms/buttons/ClerkButtons";
import { ScrollProgress } from "@/_components/atoms/scrollProgress/ScrollProgress";

export const MainHeader = () => {
  const baseClass = "w-[100%] fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 py-2 will-change-transform border-opacity-0 backdrop-blur-[54px] bg-black/50 z-10 transform-gpu opacity-[97%] border-b-[1px] border-gray-100/20";

  return (
    <header className={`${baseClass}`}>
      <div className="container flex justify-between gap-4 items-center">
        <LogoSection />
        <div className="menusec"><Navbar /></div>
        <div className="clearkbtns min-w-36">
          <ClerkButtons />
        </div>
      </div>
      <ScrollProgress />
    </header>
  );
};
