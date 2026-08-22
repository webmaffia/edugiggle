import type { Metadata } from "next";
import Image from "next/image";
import BookConsultButton from "@/components/BookConsultButton";
import StepConsultForm from "@/components/counselling/StepConsultForm";
import StatsBar from "@/components/home/StatsBar";
import CounsellingProcess from "@/components/home/CounsellingProcess";
import FaqAccordion from "@/components/counselling/FaqAccordion";

export const metadata: Metadata = {
  title: "Free Career Counselling for Students & Professionals | EduGiggle",
  description:
    "Book a free 1:1 career counselling session with EduGiggle's expert counsellors. Get personalized guidance on the right course, college, or career switch — no obligation, no cost.",
  keywords:
    "career counselling, free career counselling, student counselling, career guidance for professionals, course selection counselling, career counsellor India",
  robots: "index, follow",
  authors: [{ name: "EduGiggle" }],
  openGraph: {
    title: "Free Career Counselling for Students & Professionals | EduGiggle",
    description:
      "Get 1:1 guidance from an expert counsellor. Free, personalized, and built around your goals — not sales targets.",
    type: "website",
    siteName: "EduGiggle",
    images: ["/logo.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Career Counselling for Students & Professionals | EduGiggle",
    description:
      "Get 1:1 guidance from an expert counsellor. Free, personalized, and built around your goals — not sales targets.",
    images: ["/logo.jpeg"],
  },
};

const AUDIENCE_CARDS = [
  {
    title: "10th / 12th Students",
    description: "Confused about streams, subjects, or which entrance exam to prepare for? We help you choose with clarity.",
    bg: "bg-blue-50",
    border: "border-blue-100",
    color: "text-primary",
    icon: <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  },
  {
    title: "Undergrad & College Students",
    description: "Not sure which specialization, degree, or online program fits your goals? Get a roadmap tailored to you.",
    bg: "bg-green-50",
    border: "border-green-100",
    color: "text-green-600",
    icon: <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  },
  {
    title: "Working Professionals",
    description: "Stuck in a role that doesn't fit, or want to upskill and switch careers? We help you plan the transition.",
    bg: "bg-orange-50",
    border: "border-orange-100",
    color: "text-accent",
    icon: <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  },
];

const BENEFITS = [
  "1:1 attention from a certified career counsellor, not a call-center script",
  "Personalized roadmap based on your interests, strengths & constraints",
  "Honest advice — we recommend what fits you, not what pays us commission",
  "Ongoing support until you're confident and enrolled in the right path",
];

const COUNSELLORS = [
  {
    name: "Saumya Dubey",
    role: "Founder & Lead Counsellor · 6+ yrs",
    focus: "Has personally guided 1000+ students & professionals to career clarity.",
    image: "/about-us/founder-saumya-dubey.jpeg",
  },
  {
    name: "Rohan Verma",
    role: "Career Transition Coach · 11+ yrs",
    focus: "Helps working professionals plan confident career switches.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    name: "Ananya Iyer",
    role: "Higher Education Counsellor · 8+ yrs",
    focus: "Guides undergrads on specializations & online degree programs.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400&q=80",
  },
];

const TESTIMONIALS = [
  {
    name: "Aditya Kulkarni",
    role: "12th Student, Pune",
    quote: "I had no idea which stream to pick until my EduGiggle session. My counsellor actually listened before suggesting anything — it felt like talking to a mentor, not a salesperson.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Sneha Patil",
    role: "Working Professional, Bengaluru",
    quote: "After 4 years in a job I didn't enjoy, EduGiggle helped me map out a realistic switch into data science — with an actual plan, not just motivation.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Karan Mehta",
    role: "BCom Graduate, Mumbai",
    quote: "The free session alone gave me more clarity than months of googling. They recommended a course path that actually matched my goals and budget.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
  },
];

export default function CounsellingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-surface overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700 mb-6 shadow-sm">
              <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center text-primary">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
                </svg>
              </div>
              100% FREE · 1:1 EXPERT CAREER COUNSELLING
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary tracking-tight leading-[1.1]">
              Get Career Clarity in <span className="gradient-text">One Free Session.</span>
            </h1>
          </div>

          <div className="lg:grid lg:grid-cols-10 lg:gap-6 mb-16 items-stretch">
            <div className="relative lg:col-span-7 mb-6 lg:mb-0">
              <div className="bg-white rounded-2xl p-6 sm:p-8 form-shadow border border-gray-100 w-full h-full relative z-20">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-extrabold text-secondary mb-2">Book Your Free Counselling Session</h2>
                  <p className="text-base text-textMuted">Takes less than 30 seconds. No spam, no obligation.</p>
                </div>
                <StepConsultForm id="counsellingHeroForm" />
                <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500 font-medium flex-wrap">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 100% Free
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Reply in 24-48 hrs
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 100% Confidential
                  </span>
                </div>
              </div>
              <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-100 to-blue-50 rounded-full blur-3xl -z-10 opacity-70 pointer-events-none"></div>
            </div>

            <div className="hidden lg:block relative lg:col-span-3 rounded-2xl overflow-hidden shadow-xl border border-gray-100 min-h-[280px] lg:min-h-0">
              <Image
                alt="Students getting guided career advice from a mentor"
                className="object-cover"
                fill
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&h=900&q=80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-bold">1,000+ students &amp; professionals guided</p>
              </div>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-6 mb-12 lg:mb-0">
              <p className="text-lg text-textMuted mb-8 max-w-xl leading-relaxed">
                Whether you&apos;re picking a stream, choosing a course, or planning a career switch — talk to a real expert counsellor who maps out a plan built around you.
              </p>

              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 max-w-lg">
                <Image
                  alt="Career counsellor guiding a student through course options"
                  className="w-full h-64 object-cover"
                  height={480}
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=480&q=80"
                  width={800}
                />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-xl px-4 py-2.5 shadow-md flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-blue-200 border-2 border-white"></div>
                    <div className="w-7 h-7 rounded-full bg-purple-200 border-2 border-white"></div>
                    <div className="w-7 h-7 rounded-full bg-orange-200 border-2 border-white"></div>
                  </div>
                  <span className="text-xs font-bold text-secondary">1,000+ guided so far</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ul className="space-y-3">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    <span className="text-sm text-textMuted">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Why counselling */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-100 to-blue-50 rounded-3xl -z-10 blur-2xl opacity-70"></div>
              <Image
                alt="Students studying together after receiving career guidance"
                className="w-full rounded-3xl shadow-xl border border-gray-100 object-cover"
                height={480}
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&h=600&q=80"
                width={800}
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-primary mb-4">
                WHY IT MATTERS
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-6">
                One Wrong Decision Can Cost You Years — Counselling Removes the Guesswork
              </h2>
              <div className="space-y-4 text-textMuted leading-relaxed">
                <p>
                  Most students and professionals choose a stream, college, or career move based on peer pressure, incomplete information, or pure guesswork — and only realize the mismatch years later.
                </p>
                <p>
                  A structured career counselling session helps you understand your own strengths, interests, and constraints, and translates that into a concrete, actionable plan — instead of vague advice.
                </p>
                <p>
                  Our counsellors don&apos;t push a college or a commission-based course. They ask the right questions, listen, and recommend what genuinely fits you.
                </p>
              </div>
              <BookConsultButton className="inline-flex items-center justify-center mt-8 px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-primary hover:bg-opacity-90 shadow-lg shadow-indigo-200 transition-all">
                Talk to a Counsellor — It&apos;s Free
                <svg className="h-4 w-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </BookConsultButton>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4 relative inline-block">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
              Counselling for Every Stage of Your Journey
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {AUDIENCE_CARDS.map((card) => (
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

      <CounsellingProcess />

      {/* Meet counsellors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4 relative inline-block">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
              Meet Our Expert Counsellors
            </h2>
            <p className="text-textMuted">Certified, experienced, and genuinely invested in your outcome.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {COUNSELLORS.map((person) => (
              <div key={person.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden text-center">
                <Image
                  alt={person.name}
                  className="w-full h-56 object-cover"
                  height={224}
                  src={person.image}
                  width={400}
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-secondary mb-1">{person.name}</h3>
                  <p className="text-xs font-semibold text-primary mb-3">{person.role}</p>
                  <p className="text-sm text-textMuted">{person.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Real Stories, Real Clarity</h2>
            <p className="text-indigo-200">Hear it from students &amp; professionals we&apos;ve guided.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-[#112240] p-8 rounded-2xl border border-gray-700">
                <div className="flex text-yellow-400 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <Image alt={t.name} className="w-10 h-10 rounded-full object-cover" height={40} src={t.image} width={40} />
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 overflow-hidden">
        <Image
          alt=""
          className="object-cover"
          fill
          priority={false}
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&h=1200&q=80"
        />
        <div className="absolute inset-0 bg-secondary/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 bg-white rounded-2xl px-8 py-6 shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-primary mb-4">
              GOT QUESTIONS?
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">Frequently Asked Questions</h2>
            <p className="text-textMuted">Everything you need to know before booking your free session.</p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* Final CTA with form */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden grid md:grid-cols-2">
            <div className="p-10 lg:p-12 bg-secondary text-white flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold mb-4">Still Weighing Your Options?</h2>
              <p className="text-indigo-200 mb-8 leading-relaxed">
                Don&apos;t let another semester or another year go by without a clear plan. Book your free session today — our counsellors are ready to help.
              </p>
              <ul className="space-y-3">
                {["No cost, no pressure", "Personalized to your goals", "Get matched within 24-48 hrs"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-indigo-100">
                    <svg className="h-5 w-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 lg:p-10">
              <StepConsultForm compact id="counsellingFinalForm" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
