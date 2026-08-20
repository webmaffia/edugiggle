const EVENTS = [
  { day: "24", month: "MAY", title: "How to Choose the Right Course After 12th", when: "Sat, 24 May | 4:00 PM" },
  { day: "27", month: "MAY", title: "Best Online Degrees for Working Professionals", when: "Tue, 27 May | 7:00 PM" },
  { day: "30", month: "MAY", title: "Career Opportunities in Data Science & AI", when: "Fri, 30 May | 6:00 PM" },
  { day: "02", month: "JUN", title: "Study in India vs Study Abroad", when: "Mon, 02 Jun | 5:00 PM" },
];

export default function Webinars() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-secondary">Upcoming Webinars &amp; Events</h2>
          <a className="text-sm font-bold text-primary hover:underline items-center gap-1 hidden sm:flex" href="#">
            View All Events
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {EVENTS.map((event) => (
            <div key={event.title} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-blue-50 text-center rounded-lg p-2 min-w-[60px]">
                <span className="block text-xl font-bold text-primary leading-none">{event.day}</span>
                <span className="block text-[10px] font-bold text-primary uppercase mt-1">{event.month}</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-secondary mb-1">{event.title}</h3>
                <p className="text-xs text-textMuted mb-2">{event.when}</p>
                <a className="text-xs font-bold text-primary hover:underline" href="#">Register Now →</a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center sm:hidden">
          <a className="text-sm font-bold text-primary hover:underline flex items-center justify-center gap-1" href="#">
            View All Events
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
