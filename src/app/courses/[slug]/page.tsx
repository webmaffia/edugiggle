import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import BookConsultButton from "@/components/BookConsultButton";
import ConsultForm from "@/components/ConsultForm";
import { COURSES, getCourseBySlug, getUniversityBySlug } from "@/lib/courses";

export function generateStaticParams() {
  return COURSES.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};

  const title = `${course.fullName} (${course.name}) - Fees, Eligibility & Top Universities | EduGiggle`;
  const description = `${course.description} Compare ${course.name} programs across top universities — duration, fees, mode and eligibility.`;

  return {
    title,
    description,
    keywords: `${course.name}, ${course.fullName}, ${course.name} eligibility, ${course.name} fees, ${course.name} online, ${course.name} distance education`,
    robots: "index, follow",
    authors: [{ name: "EduGiggle" }],
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "EduGiggle",
      images: [course.image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [course.image],
    },
  };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-surface overflow-hidden pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="text-sm text-textMuted mb-6">
            <Link className="hover:text-primary" href="/courses">Courses</Link>
            <span className="mx-2">/</span>
            <span className="text-secondary font-medium">{course.name}</span>
          </nav>
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-7 mb-10 lg:mb-0">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700 mb-6 shadow-sm">
                {course.level === "UG" ? "UNDERGRADUATE PROGRAM" : "POSTGRADUATE PROGRAM"} · {course.duration}
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight leading-[1.1] mb-5">
                {course.fullName} <span className="gradient-text">({course.name})</span>
              </h1>
              <p className="text-lg text-textMuted mb-8 max-w-xl leading-relaxed">{course.description}</p>
              <div className="flex flex-wrap gap-3">
                <BookConsultButton className="inline-flex items-center justify-center px-7 py-3.5 border border-transparent text-sm font-bold rounded-xl text-white bg-primary hover:bg-opacity-90 shadow-lg shadow-indigo-200 transition-all">
                  Get Free Guidance for {course.name}
                </BookConsultButton>
                <a
                  href="#compare"
                  className="inline-flex items-center justify-center px-7 py-3.5 border border-primary text-sm font-bold rounded-xl text-primary bg-white hover:bg-primary hover:text-white transition-colors"
                >
                  Compare Universities
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div
                className="w-full h-64 lg:h-80 rounded-3xl shadow-xl border border-gray-100 bg-cover bg-center"
                style={{ backgroundImage: `url(${course.image})` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold text-secondary mb-3">Eligibility</h2>
              <p className="text-textMuted leading-relaxed">{course.eligibility}</p>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-secondary mb-4">Program Highlights</h2>
              <ul className="space-y-3">
                {course.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    <span className="text-textMuted">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-secondary mb-4">Career Prospects</h2>
              <div className="flex flex-wrap gap-3">
                {course.careerProspects.map((c) => (
                  <span key={c} className="text-sm font-semibold px-4 py-2 rounded-full bg-blue-50 text-primary">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-surface rounded-2xl border border-gray-100 p-6 h-fit">
            <h3 className="text-lg font-bold text-secondary mb-4">Quick Facts</h3>
            <dl className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-gray-200 pb-3">
                <dt className="text-textMuted">Level</dt>
                <dd className="font-semibold text-secondary">{course.level === "UG" ? "Undergraduate" : "Postgraduate"}</dd>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-3">
                <dt className="text-textMuted">Duration</dt>
                <dd className="font-semibold text-secondary">{course.duration}</dd>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-3">
                <dt className="text-textMuted">Mode</dt>
                <dd className="font-semibold text-secondary">Online / Distance</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-textMuted">Universities Offering</dt>
                <dd className="font-semibold text-secondary">{course.offerings.length}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* University comparison */}
      <section className="py-16 bg-surface" id="compare">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-secondary mb-4 relative inline-block">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
              {course.name} Across Our University Partners
            </h2>
            <p className="text-textMuted">
              Indicative duration, mode and fees for {course.name} at each partner university. Talk to a counsellor for the latest, exact fee structure.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary text-white text-left">
                  <th className="px-6 py-4 font-semibold">University</th>
                  <th className="px-6 py-4 font-semibold">Mode</th>
                  <th className="px-6 py-4 font-semibold">Duration</th>
                  <th className="px-6 py-4 font-semibold">Indicative Fees</th>
                  <th className="px-6 py-4 font-semibold"></th>
                </tr>
              </thead>
              <tbody>
                {course.offerings.map((offering) => {
                  const uni = getUniversityBySlug(offering.universitySlug);
                  if (!uni) return null;
                  return (
                    <tr key={uni.slug} className="border-t border-gray-100 hover:bg-surface/60 transition-colors">
                      <td className="px-6 py-4 font-semibold text-secondary">
                        <div className="flex items-center gap-3">
                          <div className="w-20 h-12 shrink-0 flex items-center justify-center bg-white rounded-lg border border-gray-100 p-1.5">
                            <Image alt={`${uni.name} logo`} className="max-h-9 max-w-full w-auto h-auto object-contain" src={uni.logo} width={160} height={56} />
                          </div>
                          <div>
                            {uni.name}
                            {offering.note && <p className="text-xs font-normal text-textMuted mt-0.5">{offering.note}</p>}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-textMuted">{offering.mode}</td>
                      <td className="px-6 py-4 text-textMuted">{offering.duration}</td>
                      <td className="px-6 py-4 text-textMuted">{offering.fees}</td>
                      <td className="px-6 py-4">
                        <BookConsultButton className="inline-flex items-center justify-center px-4 py-2 border border-primary text-xs font-bold rounded-lg text-primary bg-white hover:bg-primary hover:text-white transition-colors whitespace-nowrap">
                          Enquire
                        </BookConsultButton>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-textMuted mt-4">
            * Fees and durations are compiled from official university sources and may change by batch, specialization or university updates. Contact us for the latest, verified fee details before applying.
          </p>
        </div>
      </section>

      {/* CTA with form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden grid md:grid-cols-2">
            <div className="p-10 lg:p-12 bg-secondary text-white flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold mb-4">Still Deciding on {course.name}?</h2>
              <p className="text-indigo-200 mb-8 leading-relaxed">
                Get a free 1:1 session with a counsellor to compare universities, check eligibility and pick the right fit for your goals and budget.
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
              <ConsultForm compact id={`courseDetailForm-${course.slug}`} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
