import Link from "next/link";
import BookConsultButton from "../BookConsultButton";
import ConsultForm from "../ConsultForm";

const FEATURES = [
  {
    title: "Expert Counselors",
    subtitle: "10+ yrs experience",
    icon: (
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    ),
  },
  {
    title: "Personalized Guidance",
    subtitle: "Tailored for you",
    icon: (
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    ),
  },
  {
    title: "Trusted by 1,000+",
    subtitle: "Students & Professionals",
    icon: (
      <>
        <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M12 14v7l-9-5V9l9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative bg-surface overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-6 lg:pr-8 mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[8px] sm:text-xs font-semibold text-gray-700 mb-6 shadow-sm">
              <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center text-primary">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
                </svg>
              </div>
              INDIA&apos;S TRUSTED EDUCATION &amp; CAREER GUIDANCE PLATFORM
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary tracking-tight leading-[1.1] mb-6">
              Confused About Your Career or Next Step? <br /><br />
              <span className="gradient-text">Let&apos;s Make It Clear.</span>
            </h1>
            <p className="text-lg text-textMuted mb-8 max-w-xl leading-relaxed">
              Personalized counselling for students &amp; working professionals to choose the right path and the right course.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {FEATURES.map((feature, i) => (
                <div
                  key={feature.title}
                  className={`flex items-start gap-3 ${i === 2 ? "col-span-2 md:col-span-1" : ""}`}
                >
                  <div className="mt-1 bg-purple-100 p-2 rounded-lg text-primary">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      {feature.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-secondary">{feature.title}</h3>
                    <p className="text-xs text-textMuted">{feature.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <BookConsultButton className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-primary hover:bg-opacity-90 shadow-lg shadow-indigo-200 transition-all text-center">
                <div>
                  <span className="block">Book Free Consultation</span>
                  <span className="block text-xs font-normal text-indigo-100 mt-0.5">Get 1:1 guidance with an expert</span>
                </div>
              </BookConsultButton>
              <Link className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-base font-bold rounded-xl text-secondary bg-white hover:bg-gray-50 shadow-sm transition-all text-center" href="/courses">
                <div>
                  <span className="block text-primary">Explore Courses</span>
                  <span className="block text-xs font-normal text-textMuted mt-0.5">Find the right program</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute -right-12 top-0 hidden xl:block text-primary text-center">
              <span className="text-lg italic block mb-1">Takes less<br />than 30 sec!</span>
              <svg className="w-16 h-16 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 form-shadow border border-gray-100 mx-auto max-w-md w-full relative z-20">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-extrabold text-secondary mb-2">Book Your Free Consultation</h2>
                <p className="text-sm text-textMuted">Take the first step towards a better future.</p>
              </div>
              <ConsultForm id="heroConsultForm" />
              <div className="mt-5 flex items-center justify-center gap-4 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 100% Free
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> No Obligation
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Quick Response
                </span>
              </div>
            </div>
            <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-100 to-blue-50 rounded-full blur-3xl -z-10 opacity-70 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
