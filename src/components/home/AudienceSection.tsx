import Image from "next/image";

export default function AudienceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4 relative inline-block">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
            We Help You, At Every Stage
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-blue-50 rounded-3xl overflow-hidden flex flex-col sm:flex-row relative group hover:shadow-xl transition-shadow border border-blue-100">
            <div className="sm:w-2/5 relative h-64 sm:h-auto overflow-hidden">
              <Image
                alt="Student with book"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida/AP1WRLtCEWTwyrNe2EohaML1-uKzNFUCnRfj85TtH-fi5tF6WuYb3XIZskPYGSfkX94U90D_MVkIZAN7lgealLXCcLWqAPwrJiJYGK3Ig27ljm37ttem9fYKfTlAr2ZMNrBudxvEEMrxx3dMioxahSlMq8eKVLyZxNi_9jmupC9RbLEmuCo0fbGW3gO5TNCT2YGxFUc_LYgprWMOqaaxjz_5UT0WIwA9pzBnWqbP5BZ9ID_TdBitHW11qLnEWlY"
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-50 sm:hidden"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-50 hidden sm:block w-1/4 right-0"></div>
            </div>
            <div className="p-8 sm:w-3/5 z-10 flex flex-col justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary mb-4 shadow-sm">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  <path d="M12 14v7l-9-5V9l9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-1">Students</h3>
              <p className="text-sm font-medium text-textMuted mb-6">Class 10th, 12th, Graduates</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span className="text-sm text-gray-700">Confused about which stream or course to choose?</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span className="text-sm text-gray-700">Not sure which college or university is right?</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span className="text-sm text-gray-700">Need help with admissions and career planning?</span>
                </li>
              </ul>
              <a className="inline-flex items-center text-primary font-bold hover:underline mt-auto" href="#">
                Get Guidance
                <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-green-50 rounded-3xl overflow-hidden flex flex-col sm:flex-row-reverse relative group hover:shadow-xl transition-shadow border border-green-100">
            <div className="sm:w-2/5 relative h-64 sm:h-auto overflow-hidden">
              <Image
                alt="Working Professional"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida/AP1WRLsj0MtHtPdPFtcj4CGmhkKCNQmuVkDCXp8k6Y_pT-oHTPDPdecv2Hbx5jagIanVMfQVL9ypZOXKS6D_qBi6DfTa0zkBwbwmYJV0NwihxkCuk50VQyb-W9mkelYW-FGVgIQC6cmr44eBCg46AjQ1rdyXdapanqAGLcsBFqrc_yS0KhXZ90EdtaK05UA_kScy-_KR9CBAuO09C6SyPavN7R429p8qEFaZN9YpCfBY4ahUzOOlGVpvn5XrIMJ-"
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-green-50 sm:hidden"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-green-50 hidden sm:block w-1/4 left-0"></div>
            </div>
            <div className="p-8 sm:w-3/5 z-10 flex flex-col justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-600 mb-4 shadow-sm">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-1">Working Professionals</h3>
              <p className="text-sm font-medium text-textMuted mb-6">Employees, Entrepreneurs, Job Seekers</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-green-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span className="text-sm text-gray-700">Want to switch your career but unsure how?</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-green-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span className="text-sm text-gray-700">Need to upskill for better growth or promotion?</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-green-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span className="text-sm text-gray-700">Looking for flexible online degree programs?</span>
                </li>
              </ul>
              <a className="inline-flex items-center text-green-600 font-bold hover:underline mt-auto" href="#">
                Get Guidance
                <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
