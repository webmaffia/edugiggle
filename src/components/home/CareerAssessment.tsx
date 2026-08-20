const BENEFITS = [
  "Your top career options",
  "Recommended courses",
  "Skills you should focus on",
  "Personalized roadmap",
];

export default function CareerAssessment() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-blue-100">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-blue-200 text-xs font-semibold text-primary mb-4 shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              FREE CAREER CLARITY ASSESSMENT
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">Not Sure What&apos;s Right for You?</h2>
            <p className="text-textMuted mb-6">Take our 2-min assessment and get:</p>
            <ul className="space-y-3 mb-8">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-xl text-white bg-primary hover:bg-opacity-90 shadow-lg shadow-indigo-200 transition-all" href="#">
              Take Free Assessment Now
              <svg className="h-4 w-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-sm w-full">
              <h3 className="text-sm font-bold text-gray-500 mb-4 text-center">Your Career Match</h3>
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full border-4 border-green-500 flex items-center justify-center text-2xl font-extrabold text-secondary relative">
                  92%
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Match</div>
                </div>
              </div>
              <div className="text-center mb-6">
                <p className="text-xs text-textMuted uppercase font-semibold">Great Fit For</p>
                <p className="text-xl font-bold text-secondary">Data Analyst</p>
              </div>
              <p className="text-xs font-semibold text-gray-500 mb-2 text-center">Top Skills To Develop</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">SQL</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">Python</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">Statistics</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">Data Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
