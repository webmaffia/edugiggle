import type { Metadata } from "next";
import Link from "next/link";
import BookConsultButton from "@/components/BookConsultButton";
import UniversityPartners from "@/components/home/UniversityPartners";
import { getCourses, type Course } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Explore UG & PG Courses Across Top Universities | EduGiggle",
  description:
    "Compare UG and PG degree courses — BBA, BCA, B.Com, MBA, MCA and more — offered across top partner universities. Check eligibility, duration, fees and career prospects before you enroll.",
  keywords: "online degree courses, distance education courses, UG courses, PG courses, MBA online, BBA online, course comparison universities",
  robots: "index, follow",
  authors: [{ name: "EduGiggle" }],
  openGraph: {
    title: "Explore UG & PG Courses Across Top Universities | EduGiggle",
    description: "Compare degree courses across top partner universities — eligibility, duration, fees and career prospects in one place.",
    type: "website",
    siteName: "EduGiggle",
    images: ["/logo.jpeg"],
  },
};

function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all"
    >
      <div className="w-full h-36 bg-cover bg-center" style={{ backgroundImage: `url(${course.image})` }} />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-secondary">{course.name}</h3>
        <p className="text-sm text-textMuted mb-4">{course.fullName}</p>
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-primary">{course.duration}</span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface text-secondary">{course.tag}</span>
        </div>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
          View Details &amp; Compare Universities
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
        </span>
      </div>
    </Link>
  );
}

export default async function CoursesPage() {
  const courses = await getCourses();
  const UG_COURSES = courses.filter((c) => c.level === "UG");
  const PG_COURSES = courses.filter((c) => c.level === "PG");

  return (
    <main>
      <section className="bg-surface pt-16 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700 mb-6 shadow-sm">
            TOP UNIVERSITY PARTNERS · UGC-DEB APPROVED PROGRAMS
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight mb-5">
            Explore Courses. <span className="gradient-text">Compare Universities.</span>
          </h1>
          <p className="text-lg text-textMuted max-w-2xl mx-auto mb-8 leading-relaxed">
            Every course below is compared across our partner universities — duration, mode and indicative fees — so you can choose with confidence.
          </p>
          <BookConsultButton className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-primary hover:bg-opacity-90 shadow-lg shadow-indigo-200 transition-all">
            Not Sure Which Course Fits You? Talk to a Counsellor
          </BookConsultButton>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <h2 className="text-2xl font-extrabold text-secondary mb-6">Undergraduate (UG) Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {UG_COURSES.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-secondary mb-6">Postgraduate (PG) Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PG_COURSES.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <UniversityPartners />
    </main>
  );
}
