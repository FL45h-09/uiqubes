import { BannerSection } from "@/_components/organisms/banner/BannerSection";
import { FeatureSection } from "@/_components/organisms/features/FeatureSection";
import { MarqueeSection } from "@/_components/organisms/marquee/MarqueeSection";
import { FaqSection } from "@/_components/organisms/faq/FaqSection";
import { ShowcaseSection } from "@/_components/organisms/showcase/ShowcaseSection";
import { BottomCtaSection } from "@/_components/organisms/cta/BottomCtaSection";

export default function HomePage() {
  return (
    <div className="bg-[var(--background)]">
        <BannerSection />
        <MarqueeSection />
        <FeatureSection />
        <ShowcaseSection />
        <FaqSection />
        <BottomCtaSection />
    </div>
  );
}