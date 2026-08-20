const ITEMS = [
  {
    title: "100% Placement Assistance",
    description: "End-to-end support to help you land your dream job.",
    bg: "bg-blue-50",
    color: "text-primary",
    icon: <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  },
  {
    title: "Resume Building & Review",
    description: "Craft a standout resume with expert feedback.",
    bg: "bg-green-50",
    color: "text-green-600",
    icon: <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  },
  {
    title: "Mock Interviews with Experts",
    description: "Practice with industry professionals and gain confidence.",
    bg: "bg-purple-50",
    color: "text-purple-600",
    icon: <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  },
  {
    title: "Access to 500+ Hiring Partners",
    description: "Connect with top companies actively looking for talent.",
    bg: "bg-orange-50",
    color: "text-accent",
    icon: <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  },
];

export default function PlacementSupport() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4 relative inline-block">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
            Launch Your Career with Our Placement Support
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((item) => (
            <div key={item.title} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center ${item.color} mb-4`}>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">{item.title}</h3>
              <p className="text-sm text-textMuted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
