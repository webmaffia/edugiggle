import type { Metadata } from "next";
import Image from "next/image";
import BookConsultButton from "@/components/BookConsultButton";
import StepConsultForm from "@/components/counselling/StepConsultForm";
import StatsBar from "@/components/home/StatsBar";
import CounsellingProcess from "@/components/home/CounsellingProcess";
import PlacementSupport from "@/components/home/PlacementSupport";
import RecruiterPartners from "@/components/home/RecruiterPartners";
import { getCourses } from "@/lib/courses";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Placement Support Powered by JobGiggle | EduGiggle",
  description:
    "EduGiggle students get end-to-end placement support through JobGiggle, our dedicated placement partner — resume building, mock interviews, and direct access to 500+ hiring partners.",
  keywords:
    "placement support, JobGiggle, EduGiggle placements, campus placements, job assistance, hiring partners, resume building, mock interviews",
  robots: "index, follow",
  authors: [{ name: "EduGiggle" }],
  openGraph: {
    title: "Placement Support Powered by JobGiggle | EduGiggle",
    description:
      "From classroom to career — JobGiggle, EduGiggle's placement partner, connects you directly with recruiters actively hiring.",
    type: "website",
    siteName: "EduGiggle",
    images: ["/logo.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Placement Support Powered by JobGiggle | EduGiggle",
    description:
      "From classroom to career — JobGiggle, EduGiggle's placement partner, connects you directly with recruiters actively hiring.",
    images: ["/logo.jpeg"],
  },
};

const JOBGIGGLE_PILLARS = [
  {
    title: "Verified Job Openings",
    description: "Every role on JobGiggle is sourced directly from hiring partners — no fake listings, no dead ends.",
    icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  },
  {
    title: "Dedicated Placement Cell",
    description: "A JobGiggle placement manager tracks your applications and pushes your profile to relevant recruiters.",
    icon: <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  },
  {
    title: "Interview-Ready Profiles",
    description: "JobGiggle preps your resume and LinkedIn profile so you show up the way recruiters expect.",
    icon: <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  },
];

const PLACEMENT_FAQS = [
  {
    q: "What is JobGiggle and how is it related to EduGiggle?",
    a: "JobGiggle is EduGiggle's dedicated placement partner platform. Once you enroll in an EduGiggle course, you get direct access to JobGiggle's job board, placement cell, and recruiter network at no extra cost.",
  },
  {
    q: "Is placement support only for final-semester students?",
    a: "No. JobGiggle works with you as soon as you enroll — starting with resume building and skill mapping — so you're interview-ready well before you graduate.",
  },
  {
    q: "Does EduGiggle guarantee a job?",
    a: "We don't sell false guarantees. What we do guarantee is real preparation, verified openings, and consistent recruiter access through JobGiggle until you land the right role.",
  },
  {
    q: "Which companies hire through JobGiggle?",
    a: "JobGiggle's hiring partner network includes 500+ companies across IT, BFSI, and core sectors — including several of the recruiters shown below.",
  },
];

export default async function PlacementPage() {
  const courses = await getCourses();

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            alt=""
            className="object-cover"
            fill
            priority={false}
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&h=1200&q=80"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-indigo-100 mb-6">
            PLACEMENT SUPPORT
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold max-w-3xl mb-6 leading-tight">
            From Classroom to Career — Powered by <span className="text-accent">JobGiggle</span>
          </h1>
          <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed mb-8">
            Every EduGiggle student gets end-to-end placement support through{" "}
            <strong className="text-accent">JobGiggle</strong>, our dedicated placement partner — resume building,
            mock interviews, and direct access to 500+ recruiters actively hiring.
          </p>
          <BookConsultButton className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-primary hover:bg-opacity-90 shadow-lg shadow-indigo-900/40 transition-all">
            Talk to a Placement Counsellor
            <svg className="h-4 w-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
          </BookConsultButton>
        </div>
      </section>

      <StatsBar />

      {/* JobGiggle spotlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-primary mb-4">
                MEET OUR PLACEMENT PARTNER
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-6">
                JobGiggle Is the Placement Engine Behind Every EduGiggle Course
              </h2>
              <div className="space-y-4 text-textMuted leading-relaxed">
                <p>
                  JobGiggle is EduGiggle&apos;s in-house placement platform, built to close the gap between finishing
                  a course and actually getting hired. It&apos;s not a job board you browse alone — it&apos;s a
                  dedicated team working your profile against a live network of hiring partners.
                </p>
                <p>
                  As soon as you enroll with EduGiggle, you&apos;re onboarded onto JobGiggle — your resume, skills,
                  and career goals are mapped to relevant openings, and you&apos;re guided through every step until
                  an offer is on the table.
                </p>
              </div>
              <div className="grid sm:grid-cols-1 gap-4 mt-8">
                {JOBGIGGLE_PILLARS.map((pillar) => (
                  <div key={pillar.title} className="flex items-start gap-4 bg-surface rounded-xl p-4 border border-gray-100">
                    <div className="w-10 h-10 shrink-0 bg-blue-50 rounded-full flex items-center justify-center text-primary">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {pillar.icon}
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-secondary mb-1">{pillar.title}</h3>
                      <p className="text-sm text-textMuted">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-100 to-blue-50 rounded-3xl -z-10 blur-2xl opacity-70"></div>
              <div className="bg-secondary rounded-3xl shadow-xl border border-gray-100 p-10 text-white">
                <p className="text-xs font-bold tracking-widest text-indigo-300 mb-2">PLACEMENT PARTNER</p>
                <p className="text-4xl font-extrabold mb-6">JobGiggle</p>
                <ul className="space-y-4">
                  {[
                    "500+ active hiring partners",
                    "Dedicated placement manager per batch",
                    "Resume, LinkedIn & mock interview prep",
                    "Support until you're placed",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-indigo-100">
                      <svg className="h-5 w-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <BookConsultButton className="inline-flex items-center justify-center mt-8 px-6 py-3 border border-transparent text-sm font-bold rounded-xl text-secondary bg-white hover:bg-opacity-90 shadow-lg transition-all">
                  Get Started with JobGiggle
                </BookConsultButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PlacementSupport />

      <CounsellingProcess />

      <RecruiterPartners />

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-primary mb-4">
              GOT QUESTIONS?
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">Placement &amp; JobGiggle FAQs</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {PLACEMENT_FAQS.map((item) => (
              <details key={item.q} className="group bg-surface rounded-xl border border-gray-100 px-6 py-4">
                <summary className="flex items-center justify-between cursor-pointer text-sm font-bold text-secondary list-none">
                  {item.q}
                  <svg className="h-4 w-4 text-primary shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </summary>
                <p className="text-sm text-textMuted mt-3 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with form */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden grid md:grid-cols-2">
            <div className="p-10 lg:p-12 bg-secondary text-white flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold mb-4">Ready to Get Placement-Ready?</h2>
              <p className="text-indigo-200 mb-8 leading-relaxed">
                Talk to our team about how JobGiggle plugs into your EduGiggle course — and start building your path
                to an offer letter, not just a certificate.
              </p>
              <ul className="space-y-3">
                {["Free profile review", "Matched with JobGiggle recruiters", "Guidance until you're placed"].map((item) => (
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
              <StepConsultForm compact id="placementFinalForm" courses={courses} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
