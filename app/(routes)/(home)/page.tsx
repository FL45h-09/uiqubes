import { FeatureSection } from "@/_components/organisms/features/FeatureSection";
import { GetStartedSection } from "@/_components/organisms/getStarted/GetStartedSection";
import { ContributorsSection } from "@/_components/organisms/contributors/ContributorsSection";

export default function HomePage() {
  return (
    <div className="">
        <FeatureSection />
        <ContributorsSection />
        <GetStartedSection />
    </div>
  );
}