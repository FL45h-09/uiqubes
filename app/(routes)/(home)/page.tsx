import { BannerSection } from "@/_components/organisms/banner/BannerSection";
import { FeatureSection } from "@/_components/organisms/features/FeatureSection";
import { GetStartedSection } from "@/_components/organisms/getStarted/GetStartedSection";

export default function HomePage() {
  return (
    <div className="">
        <BannerSection />
        <FeatureSection />
        <GetStartedSection />
    </div>
  );
}