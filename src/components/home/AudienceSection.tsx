import Image from "next/image";
import BookConsultButton from "@/components/BookConsultButton";
import { readSection } from "@/lib/content-store";

type AudienceSectionData = {
  heading: string;
  audiences: { title: string; subtitle: string; points: string[] }[];
};

const DEFAULT_DATA: AudienceSectionData = {
  heading: "We Help You, At Every Stage",
  audiences: [
    {
      title: "Students",
      subtitle: "Class 10th, 12th, Graduates",
      points: [
        "Confused about which stream or course to choose?",
        "Not sure which college or university is right?",
        "Need help with admissions and career planning?",
      ],
    },
    {
      title: "Working Professionals",
      subtitle: "Employees, Entrepreneurs, Job Seekers",
      points: [
        "Want to switch your career but unsure how?",
        "Need to upskill for better growth or promotion?",
        "Looking for flexible online degree programs?",
      ],
    },
  ],
};

const AUDIENCE_STYLES = [
  {
    bg: "bg-blue-50",
    border: "border-blue-100",
    color: "text-primary",
    image: "/images/student-guidance.jpg",
    imageAlt: "Student with book",
    reverse: false,
    icon: (
      <>
        <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        <path d="M12 14v7l-9-5V9l9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
      </>
    ),
  },
  {
    bg: "bg-green-50",
    border: "border-green-100",
    color: "text-green-600",
    image: "/images/professional-guidance.jpg",
    imageAlt: "Working Professional",
    reverse: true,
    icon: <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>,
  },
];

export default async function AudienceSection() {
  const data = await readSection<AudienceSectionData>("home.audienceSection", DEFAULT_DATA);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4 relative inline-block">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
            {data.heading}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {data.audiences.map((audience, i) => {
            const style = AUDIENCE_STYLES[i % AUDIENCE_STYLES.length];
            return (
              <div
                key={audience.title}
                className={`${style.bg} rounded-3xl overflow-hidden flex flex-col sm:flex-row${style.reverse ? "-reverse" : ""} relative group hover:shadow-xl transition-shadow border ${style.border}`}
              >
                <div className="sm:w-2/5 relative h-64 sm:h-auto overflow-hidden">
                  <Image
                    alt={style.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    src={style.image}
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                </div>
                <div className="p-8 sm:w-3/5 z-10 flex flex-col justify-center">
                  <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center ${style.color} mb-4 shadow-sm`}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      {style.icon}
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-1">{audience.title}</h3>
                  <p className="text-sm font-medium text-textMuted mb-6">{audience.subtitle}</p>
                  <ul className="space-y-3 mb-8">
                    {audience.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <svg className={`h-5 w-5 ${style.color} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        <span className="text-sm text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <BookConsultButton className={`inline-flex items-center ${style.color} font-bold hover:underline mt-auto`}>
                    Get Guidance
                    <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </BookConsultButton>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
