import { BannerSection } from "@/_components/organisms/banner/BannerSection";
import { MainHeader } from '@/_components/molecules/header/MainHeader';
import { MainFooter } from '@/_components/molecules/footer/MainFooter';

export default function MainLayout({ children, }: Readonly<{children: React.ReactNode;}>){
    return(
        <>
            <MainHeader />
            <BannerSection />
            <main className='pt-[0px]'>{children}</main>
            <MainFooter />
        </>
    )
}