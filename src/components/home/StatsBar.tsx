import { readSection } from "@/lib/content-store";

type StatsBarData = {
  stats: { value: string; label: string }[];
  ratingValue: string;
  ratingLabel: string;
};

const DEFAULT_DATA: StatsBarData = {
  stats: [
    { value: "1,000+", label: "Students Guided" },
    { value: "250+", label: "Expert Counselors" },
    { value: "50+", label: "University Partners" },
  ],
  ratingValue: "4.9/5",
  ratingLabel: "Average Rating",
};

const STAT_ICONS = [
  <>
    <path key="a" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path key="b" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path key="c" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </>,
  <path key="counselor" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
  <path key="uni" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />,
];

export default async function StatsBar() {
  const data = await readSection<StatsBarData>("home.statsBar", DEFAULT_DATA);

  return (
    <section className="bg-secondary text-white py-6 border-b-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-700">
          {data.stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center justify-center p-2">
              <svg className="h-8 w-8 text-indigo-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {STAT_ICONS[i % STAT_ICONS.length]}
              </svg>
              <div className="font-extrabold text-2xl lg:text-3xl">{stat.value}</div>
              <div className="text-xs lg:text-sm text-gray-300 mt-1">{stat.label}</div>
            </div>
          ))}
          <div className="flex flex-col items-center justify-center p-2">
            <svg className="h-8 w-8 text-yellow-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            <div className="font-extrabold text-2xl lg:text-3xl flex items-center justify-center gap-1">{data.ratingValue} <span className="text-yellow-400 text-lg">★</span></div>
            <div className="text-xs lg:text-sm text-gray-300 mt-1">{data.ratingLabel}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
