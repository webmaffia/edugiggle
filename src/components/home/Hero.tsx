import { readSection } from "@/lib/content-store";
import HeroClient, { type HeroData } from "./HeroClient";

const DEFAULT_DATA: HeroData = {
  badgeText: "INDIA'S TRUSTED EDUCATION & CAREER GUIDANCE PLATFORM",
  headlineLine1: "Confused About Your Career or Next Step?",
  headlineLine2: "Let's Make It Clear.",
  subheadline: "Personalized counselling for students & working professionals to choose the right path and the right course.",
  typingWords: ["Career Planning", "Course Selection", "University Admission", "Study Abroad"],
  features: [
    { title: "Expert Counselors", subtitle: "10+ yrs experience" },
    { title: "Personalized Guidance", subtitle: "Tailored for you" },
    { title: "Trusted by 1,000+", subtitle: "Students & Professionals" },
  ],
  testimonials: [
    { name: "Priya S.", role: "BBA Student", text: "EduGiggle helped me choose the right university!" },
    { name: "Rahul M.", role: "Working Professional", text: "Best career guidance I've ever received." },
    { name: "Ananya K.", role: "MBA Aspirant", text: "Finally clear about my career path." },
  ],
  studentCount: "1247",
};

export default async function Hero() {
  const data = await readSection<HeroData>("home.hero", DEFAULT_DATA);
  return <HeroClient data={data} />;
}
