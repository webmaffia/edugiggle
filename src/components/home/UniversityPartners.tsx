import Image from "next/image";

const TOP_ROW = [
  { alt: "Amity University logo", src: "/images/partners/amity.png" },
  { alt: "Manipal University Jaipur logo", src: "/images/partners/manipal-jaipur.svg" },
  { alt: "Sikkim Manipal University logo", src: "/images/partners/sikkim-manipal.svg" },
  { alt: "Dr. D. Y. Patil Vidyapeeth Pune logo", src: "/images/partners/dpu-pune.png" },
];

const BOTTOM_ROW = [
  { alt: "D Y Patil University Navi Mumbai logo", src: "/images/partners/dypatil-navimumbai.svg" },
  { alt: "NMIMS logo", src: "/images/partners/nmims.png" },
  { alt: "Swami Vivekanand Global University logo", src: "/images/partners/vgu.png" },
  { alt: "IIM logo", src: "/images/partners/iima.svg" },
];

function PartnerLogo({ alt, src }: { alt: string; src: string }) {
  return (
    <div className="bg-surface rounded-2xl p-6 h-28 w-56 flex items-center justify-center border border-gray-100 hover:shadow-md transition-shadow mx-3 shrink-0">
      <Image alt={alt} className="max-h-14 w-auto object-contain transition-transform hover:scale-105" src={src} width={160} height={56} />
    </div>
  );
}

export default function UniversityPartners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4 relative inline-block">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
            Our Esteemed University Partners
          </h2>
          <p className="text-textMuted">We collaborate with India&apos;s top universities to bring you the best programs</p>
        </div>
        <div className="space-y-6">
          <div
            className="marquee-wrapper overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div className="marquee-track animate-marquee-left">
              {[...TOP_ROW, ...TOP_ROW].map((logo, i) => (
                <PartnerLogo key={`${logo.alt}-${i}`} alt={logo.alt} src={logo.src} />
              ))}
            </div>
          </div>
          <div
            className="marquee-wrapper overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div className="marquee-track animate-marquee-right">
              {[...BOTTOM_ROW, ...BOTTOM_ROW].map((logo, i) => (
                <PartnerLogo key={`${logo.alt}-${i}`} alt={logo.alt} src={logo.src} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
