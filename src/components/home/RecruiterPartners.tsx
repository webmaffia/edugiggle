import Image from "next/image";
import { readSection } from "@/lib/content-store";

type RecruiterPartnersData = {
  heading: string;
  subheading: string;
  logos: { alt: string; src: string }[];
};

const DEFAULT_DATA: RecruiterPartnersData = {
  heading: "Our Recruiter Partners",
  subheading: "Top companies that hire from our talent pool",
  logos: [
    { alt: "TCS logo", src: "/images/recruiters/tcs.png" },
    { alt: "Infosys logo", src: "/images/recruiters/infosys.png" },
    { alt: "Wipro logo", src: "/images/recruiters/wipro.png" },
    { alt: "HCL Technologies logo", src: "/images/recruiters/hcl.png" },
    { alt: "Tech Mahindra logo", src: "/images/recruiters/tech-mahindra.png" },
    { alt: "Reliance Industries logo", src: "/images/recruiters/reliance.png" },
    { alt: "HDFC Bank logo", src: "/images/recruiters/hdfc.png" },
    { alt: "ICICI Bank logo", src: "/images/recruiters/icici.png" },
    { alt: "Amazon logo", src: "/images/recruiters/amazon.png" },
    { alt: "Google logo", src: "/images/recruiters/google.png" },
    { alt: "Microsoft logo", src: "/images/recruiters/microsoft.png" },
  ],
};

function RecruiterLogo({ alt, src }: { alt: string; src: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 h-24 w-52 flex items-center justify-center border border-gray-100 hover:shadow-lg transition-all mx-3 shrink-0">
      <Image
        alt={alt}
        className="max-h-14 w-auto object-contain transition-transform hover:scale-105"
        src={src}
        width={160}
        height={56}
      />
    </div>
  );
}

export default async function RecruiterPartners() {
  const data = await readSection<RecruiterPartnersData>("home.recruiterPartners", DEFAULT_DATA);
  const mid = Math.ceil(data.logos.length / 2);
  const row1 = data.logos.slice(0, mid);
  const row2 = data.logos.slice(mid);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4 relative inline-block">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
            {data.heading}
          </h2>
          <p className="text-textMuted">{data.subheading}</p>
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
              {[...row1, ...row1].map((logo, i) => (
                <RecruiterLogo key={`${logo.alt}-${i}`} alt={logo.alt} src={logo.src} />
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
              {[...row2, ...row2].map((logo, i) => (
                <RecruiterLogo key={`${logo.alt}-${i}`} alt={logo.alt} src={logo.src} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
