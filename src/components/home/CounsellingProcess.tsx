import { readSection } from "@/lib/content-store";

type CounsellingProcessData = {
  heading: string;
  steps: { number: string; title: string; description: string }[];
};

const DEFAULT_DATA: CounsellingProcessData = {
  heading: "Our Proven Counselling Process",
  steps: [
    { number: "01", title: "Understand You", description: "We learn about your interests, strengths & goals." },
    { number: "02", title: "Assess & Analyze", description: "Our experts analyze and suggest the best-suited options." },
    { number: "03", title: "Create Your Roadmap", description: "Get a clear step-by-step plan for your future." },
    { number: "04", title: "Achieve Success", description: "We support you at every step until you reach your goals." },
  ],
};

export default async function CounsellingProcess() {
  const data = await readSection<CounsellingProcessData>("home.counsellingProcess", DEFAULT_DATA);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4 relative inline-block">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
            {data.heading}
          </h2>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {data.steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center relative bg-white">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg border-4 border-white">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">{step.title}</h3>
                <p className="text-sm text-textMuted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
