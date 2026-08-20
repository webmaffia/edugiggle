type Course = {
  name: string;
  fullName: string;
  duration: string;
  tag: string;
  icon: React.ReactNode;
};

const UG_COURSES: Course[] = [
  {
    name: "BBA",
    fullName: "Bachelor of Business Administration",
    duration: "3 Years Duration",
    tag: "Multiple Specializations",
    icon: <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  },
  {
    name: "BA",
    fullName: "Bachelor of Arts",
    duration: "3 Years Duration",
    tag: "Flexible Learning",
    icon: <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  },
  {
    name: "B.Com",
    fullName: "Bachelor of Commerce",
    duration: "3 Years Duration",
    tag: "Career Oriented",
    icon: <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  },
  {
    name: "BCA",
    fullName: "Bachelor of Computer Applications",
    duration: "3 Years Duration",
    tag: "Technology Focused",
    icon: <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  },
  {
    name: "B.Sc",
    fullName: "Bachelor of Science",
    duration: "3 Years Duration",
    tag: "Multiple Disciplines",
    icon: <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  },
];

const MASTERS_COURSES: Course[] = [
  {
    name: "MBA",
    fullName: "Master of Business Administration",
    duration: "2 Years Duration",
    tag: "Industry Focused",
    icon: <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  },
  {
    name: "MA",
    fullName: "Master of Arts",
    duration: "2 Years Duration",
    tag: "Flexible Learning",
    icon: <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  },
  {
    name: "M.Com",
    fullName: "Master of Commerce",
    duration: "2 Years Duration",
    tag: "Commerce Specialization",
    icon: <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  },
  {
    name: "MCA",
    fullName: "Master of Computer Applications",
    duration: "2 Years Duration",
    tag: "Technology Focused",
    icon: <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  },
  {
    name: "M.Sc",
    fullName: "Master of Science",
    duration: "2 Years Duration",
    tag: "Advanced Learning",
    icon: <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  },
];

const CHECK_ICON = (
  <svg className="h-3.5 w-3.5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
  </svg>
);

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center text-center">
      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary mb-3">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {course.icon}
        </svg>
      </div>
      <h4 className="font-bold text-secondary">{course.name}</h4>
      <p className="text-xs text-textMuted mb-4">{course.fullName}</p>
      <ul className="space-y-1.5 text-left w-full mt-auto">
        <li className="flex items-center gap-2 text-xs font-normal text-gray-700">{CHECK_ICON}{course.duration}</li>
        <li className="flex items-center gap-2 text-xs font-normal text-gray-700">{CHECK_ICON}UGC Approved</li>
        <li className="flex items-center gap-2 text-xs font-normal text-gray-700">{CHECK_ICON}{course.tag}</li>
      </ul>
    </div>
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
        <a className="inline-flex items-center justify-center gap-1 px-5 py-2.5 border border-primary text-sm font-semibold rounded-lg text-primary bg-white hover:bg-primary hover:text-white transition-colors shrink-0" href="#">
          {ctaLabel}
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.name} course={course} />
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
          ctaLabel="Enquire for UG Courses"
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
          ctaLabel="Enquire for Master's"
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
