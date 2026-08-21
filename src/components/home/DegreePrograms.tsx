import Link from "next/link";
import { COURSES, type Course } from "@/lib/courses";

const UG_COURSES = COURSES.filter((c) => c.level === "UG");
const MASTERS_COURSES = COURSES.filter((c) => c.level === "PG");

const CHECK_ICON = (
  <svg className="h-3.5 w-3.5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
  </svg>
);

function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-0.5 transition-all"
    >
      <div
        className="w-full h-28 bg-cover bg-center"
        style={{ backgroundImage: `url(${course.image})` }}
      />
      <div className="p-6 flex flex-col items-center text-center w-full">
        <h4 className="text-lg sm:text-base font-bold text-secondary">{course.name}</h4>
        <p className="text-sm sm:text-xs text-textMuted mb-4">{course.fullName}</p>
        <ul className="space-y-1.5 text-left w-full mt-auto">
          <li className="flex items-center gap-2 text-sm sm:text-xs font-normal text-gray-700">{CHECK_ICON}{course.duration} Duration</li>
          <li className="flex items-center gap-2 text-sm sm:text-xs font-normal text-gray-700">{CHECK_ICON}UGC Approved</li>
          <li className="flex items-center gap-2 text-sm sm:text-xs font-normal text-gray-700">{CHECK_ICON}{course.tag}</li>
        </ul>
      </div>
    </Link>
  );
}

function CourseBlock({
  title,
  description,
  ctaLabel,
  courses,
  accentBg,
  accentBorder,
  icon,
}: {
  title: string;
  description: string;
  ctaLabel: string;
  courses: Course[];
  accentBg: string;
  accentBorder: string;
  icon: React.ReactNode;
}) {
  return (
    <div className={`${accentBg} rounded-3xl border ${accentBorder} p-6 sm:p-8`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-secondary">{title}</h3>
            <p className="text-sm text-textMuted">{description}</p>
          </div>
        </div>
        <Link className="inline-flex items-center justify-center gap-1 px-5 py-2.5 border border-primary text-sm font-semibold rounded-lg text-primary bg-white hover:bg-primary hover:text-white transition-colors shrink-0" href="/courses">
          {ctaLabel}
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}

export default function DegreePrograms() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <CourseBlock
          title="UG Courses"
          description="Start your journey with industry-relevant undergraduate programs."
          ctaLabel="View All UG Courses"
          courses={UG_COURSES}
          accentBg="bg-blue-50/60"
          accentBorder="border-blue-100"
          icon={
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M12 14v7l-9-5V9l9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          }
        />
        <CourseBlock
          title="Master's Courses"
          description="Advance your skills through specialized postgraduate programs."
          ctaLabel="View All Master's Courses"
          courses={MASTERS_COURSES}
          accentBg="bg-orange-50/60"
          accentBorder="border-orange-100"
          icon={
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" fillRule="evenodd" />
            </svg>
          }
        />
      </div>
    </section>
  );
}
