import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import UniversityPartners from "@/components/home/UniversityPartners";
import DegreePrograms from "@/components/home/DegreePrograms";
import AudienceSection from "@/components/home/AudienceSection";
import PainPoints from "@/components/home/PainPoints";
import PlacementSupport from "@/components/home/PlacementSupport";
import CounsellingProcess from "@/components/home/CounsellingProcess";
import CareerAssessment from "@/components/home/CareerAssessment";
import Webinars from "@/components/home/Webinars";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <UniversityPartners />
      <DegreePrograms />
      <AudienceSection />
      <PainPoints />
      <PlacementSupport />
      <CounsellingProcess />
      <CareerAssessment />
      <Webinars />
    </main>
  );
}
