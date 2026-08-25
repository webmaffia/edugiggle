import { readSection } from "@/lib/content-store";

type PainPointsData = {
  heading: string;
  subheading: string;
  cards: { title: string; description: string }[];
};

const DEFAULT_DATA: PainPointsData = {
  heading: "Why Thousands Trust EduGiggle",
  subheading: "We understand what's holding you back — and we help you move forward.",
  cards: [
    { title: "Fear of Making the Wrong Choice?", description: "We help you choose with clarity & confidence." },
    { title: "Overwhelmed by Too Many Options?", description: "Our experts simplify choices for you." },
    { title: "Don't Want to Waste Time & Money?", description: "We recommend the right courses that truly matter." },
    { title: "Need Flexibility in Learning?", description: "Discover online programs that fit your life." },
  ],
};

const CARD_ICONS = [
  <path key="0" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />,
  <path key="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />,
  <path key="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />,
  <path key="3" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />,
];

export default async function PainPoints() {
  const data = await readSection<PainPointsData>("home.painPoints", DEFAULT_DATA);

  return (
    <section className="py-20 bg-secondary text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{data.heading}</h2>
          <p className="text-indigo-200">{data.subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.cards.map((card, i) => (
            <div key={i} className="bg-[#112240] p-8 rounded-2xl border border-gray-700 hover:border-primary transition-colors text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {CARD_ICONS[i % CARD_ICONS.length]}
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">{card.title}</h3>
              <p className="text-sm text-gray-400">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
