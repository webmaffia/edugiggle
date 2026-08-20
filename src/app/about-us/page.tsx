import type { Metadata } from "next";
import Image from "next/image";
import BookConsultButton from "@/components/BookConsultButton";

export const metadata: Metadata = {
  title: "About Us - EduGiggle | Meet Founder Saumya Dubey",
  description:
    "Meet Saumya Dubey, founder of EduGiggle. Learn why she started EduGiggle and our vision to help students and working professionals find clarity in their career and education choices.",
  keywords: "EduGiggle founder, Saumya Dubey, about EduGiggle, career counselling company, education guidance vision",
  robots: "index, follow",
  authors: [{ name: "EduGiggle" }],
  openGraph: {
    title: "About Us - EduGiggle | Meet Founder Saumya Dubey",
    description:
      "Meet Saumya Dubey, founder of EduGiggle, and learn why she started EduGiggle to bring honest, human career guidance to students and professionals.",
    type: "website",
    siteName: "EduGiggle",
    images: ["/about-us/founder-saumya-dubey.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - EduGiggle | Meet Founder Saumya Dubey",
    description:
      "Meet Saumya Dubey, founder of EduGiggle, and learn why she started EduGiggle to bring honest, human career guidance to students and professionals.",
    images: ["/about-us/founder-saumya-dubey.jpeg"],
  },
};

const VISION_CARDS = [
  {
    title: "Clarity Over Confusion",
    description: "Helping every student and professional make informed, confident choices about their future.",
    bg: "bg-blue-50",
    border: "border-blue-100",
    color: "text-primary",
    icon: <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  },
  {
    title: "People-First Guidance",
    description: "Counselling built around your goals and story, not sales targets or commissions.",
    bg: "bg-green-50",
    border: "border-green-100",
    color: "text-green-600",
    icon: <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  },
  {
    title: "Lasting Impact",
    description: "Empowering thousands of ambitious minds to build careers they truly love.",
    bg: "bg-orange-50",
    border: "border-orange-100",
    color: "text-accent",
    icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  },
];

export default function AboutUsPage() {
  return (
    <main>
      <section className="relative bg-surface overflow-hidden py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700 mb-6 shadow-sm">
            OUR STORY
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary tracking-tight leading-[1.1] mb-6">
            About <span className="gradient-text">EduGiggle</span>
          </h1>
          <p className="text-lg text-textMuted max-w-2xl mx-auto leading-relaxed">
            We started EduGiggle to bring honest, human guidance to a system that too often leaves students and professionals confused, alone, and unsure of their next step.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:justify-start">
              <div className="relative max-w-sm w-full">
                <div className="absolute -inset-4 bg-gradient-to-tr from-purple-100 to-blue-50 rounded-3xl -z-10 blur-2xl opacity-70"></div>
                <Image
                  alt="Saumya Dubey, Founder of EduGiggle"
                  className="w-full rounded-3xl shadow-xl border border-gray-100 object-cover"
                  src="/about-us/founder-saumya-dubey.jpeg"
                  width={400}
                  height={480}
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-primary mb-4">
                MEET OUR FOUNDER
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-2">Saumya Dubey</h2>
              <div className="flex items-center gap-3 mb-6">
                <p className="text-sm font-semibold text-textMuted">Founder, EduGiggle</p>
                <a
                  aria-label="Saumya Dubey on LinkedIn"
                  className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  href="https://in.linkedin.com/in/rinkymishra11"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                </a>
              </div>
              <div className="flex gap-8 mb-6">
                <div>
                  <p className="text-2xl font-extrabold text-primary">6+ Yrs</p>
                  <p className="text-xs text-textMuted font-medium">Consulting Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-primary">1000+</p>
                  <p className="text-xs text-textMuted font-medium">Candidates Guided</p>
                </div>
              </div>
              <div className="space-y-4 text-textMuted leading-relaxed">
                <p>
                  Saumya Dubey founded EduGiggle after seeing, time and again, how brilliant students and hardworking professionals were making life-altering education and career decisions with little more than guesswork, peer pressure, and unreliable information.
                </p>
                <p>
                  Having spent years navigating the world of counselling, admissions, and career transitions herself, Saumya understood how overwhelming the choices can feel — and how much clarity, confidence, and the right guidance can change a person&apos;s entire trajectory.
                </p>
                <p>
                  With over 6 years of experience working as a consultant, Saumya has personally guided more than 1000+ candidates — many of whom remain in touch with her to this day, now thriving in good companies.
                </p>
                <p>
                  Today, she leads EduGiggle with a simple belief: every student and professional deserves a mentor who genuinely listens, understands their story, and helps them choose a path they&apos;ll be proud of.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4 relative inline-block">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
              Why I Started EduGiggle
            </h2>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <p className="text-textMuted leading-relaxed mb-6">
              &ldquo;I have seen too many students choose a stream or a college because their friends did, not because it was right for them. I have seen working professionals stay stuck in careers that didn&apos;t fit, simply because no one ever sat down with them and asked the right questions.&rdquo;
            </p>
            <p className="text-textMuted leading-relaxed mb-6">
              &ldquo;That&apos;s why I started EduGiggle — to be the guide I wish more people had access to. Not another admissions agent pushing a college, but a genuine counsellor invested in helping you find clarity, whether that&apos;s picking the right course, switching careers, or building the confidence to take the next step.&rdquo;
            </p>
            <p className="text-textMuted leading-relaxed font-semibold text-secondary">— Saumya Dubey, Founder</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4 relative inline-block">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
              Our Vision
            </h2>
            <p className="text-textMuted">
              To become India&apos;s most trusted name in education and career guidance — a place where every decision starts with clarity, not confusion.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {VISION_CARDS.map((card) => (
              <div key={card.title} className={`${card.bg} p-8 rounded-2xl border ${card.border} text-center flex flex-col items-center`}>
                <div className={`w-14 h-14 bg-white rounded-full flex items-center justify-center ${card.color} mb-5 shadow-sm`}>
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {card.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">{card.title}</h3>
                <p className="text-sm text-textMuted">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Let&apos;s Find Clarity Together</h2>
          <p className="text-indigo-200 max-w-xl mx-auto mb-8">Book a free consultation and take the first step towards a future you&apos;re excited about.</p>
          <BookConsultButton className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-primary hover:bg-opacity-90 shadow-lg shadow-indigo-900/50 transition-all">
            Book Free Consultation
            <svg className="h-4 w-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
          </BookConsultButton>
        </div>
      </section>
    </main>
  );
}
