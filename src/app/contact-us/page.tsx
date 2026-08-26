import type { Metadata } from "next";
import ConsultForm from "@/components/ConsultForm";
import { readSection } from "@/lib/content-store";

export const dynamic = "force-dynamic";

type ContactData = {
  heroTitle: string;
  heroIntro: string;
  phone: string;
  email: string;
  location: string;
  sectionHeading: string;
  sectionIntro: string;
};

const DEFAULT_DATA: ContactData = {
  heroTitle: "Contact EduGiggle",
  heroIntro: "Have a question about counselling, courses, or admissions? Reach out and our team will get back to you shortly.",
  phone: "+91 81694 70610",
  email: "hello@edugiggle.com",
  location: "Navi Mumbai, India",
  sectionHeading: "We'd Love to Hear From You",
  sectionIntro: "Whether you're a student figuring out your next step or a working professional exploring a career change, our team is here to help.",
};

export const metadata: Metadata = {
  title: "Contact Us - EduGiggle | Get in Touch",
  description:
    "Get in touch with EduGiggle for career counselling, course guidance, and admissions support. Call, WhatsApp, email us, or book a free consultation.",
  keywords: "contact EduGiggle, EduGiggle phone number, EduGiggle email, career counselling contact",
  robots: "index, follow",
  authors: [{ name: "EduGiggle" }],
  openGraph: {
    title: "Contact Us - EduGiggle | Get in Touch",
    description:
      "Get in touch with EduGiggle for career counselling, course guidance, and admissions support.",
    type: "website",
    siteName: "EduGiggle",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - EduGiggle | Get in Touch",
    description:
      "Get in touch with EduGiggle for career counselling, course guidance, and admissions support.",
  },
};

const CONTACT_DETAIL_ICONS = [
  <path
    key="phone"
    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
  />,
  <path
    key="email"
    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
  />,
  <g key="location">
    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </g>,
];

export default async function ContactUsPage() {
  const data = await readSection<ContactData>("contact.body", DEFAULT_DATA);
  const phoneDigits = data.phone.replace(/\D/g, "");
  const contactDetails = [
    { label: "Call Us", value: data.phone, href: `tel:+${phoneDigits}` },
    { label: "Email Us", value: data.email, href: `mailto:${data.email}` },
    { label: "Location", value: data.location, href: undefined },
  ];

  return (
    <main>
      <section className="relative bg-surface overflow-hidden py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700 mb-6 shadow-sm">
            GET IN TOUCH
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary tracking-tight leading-[1.1] mb-6">{data.heroTitle}</h1>
          <p className="text-lg text-textMuted max-w-2xl mx-auto leading-relaxed">{data.heroIntro}</p>
        </div>
      </section>

      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
          <p className="text-white/90 font-semibold text-sm sm:text-base uppercase tracking-wide">
            Prefer to talk? Call us now
          </p>
          <a
            className="inline-flex items-center gap-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white hover:text-secondary transition-colors"
            href={`tel:+${phoneDigits}`}
          >
            <svg className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {CONTACT_DETAIL_ICONS[0]}
            </svg>
            <span className="animate-number-pop">{data.phone}</span>
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-primary mb-4">
                REACH OUT TO US
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-6">{data.sectionHeading}</h2>
              <p className="text-textMuted leading-relaxed mb-10">{data.sectionIntro}</p>

              <div className="space-y-6 mb-10">
                {contactDetails.map((item, i) => {
                  const Wrapper = item.href ? "a" : "div";
                  return (
                    <Wrapper
                      key={item.label}
                      className="flex items-center gap-4"
                      {...(item.href ? { href: item.href } : {})}
                    >
                      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          {CONTACT_DETAIL_ICONS[i]}
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-textMuted uppercase font-bold">{item.label}</p>
                        <p className="text-base font-semibold text-secondary">{item.value}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              <a
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-transparent text-sm font-bold rounded-xl text-white bg-green-500 hover:bg-green-600 shadow-sm transition-all"
                href={`https://wa.me/${phoneDigits}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            <div className="bg-surface rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-secondary mb-1">Send Us a Message</h3>
              <p className="text-sm text-textMuted mb-6">Fill out the form and we&apos;ll get back to you shortly.</p>
              <ConsultForm id="contact-us-form" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-[450px]">
        <iframe
          src={`https://www.google.com/maps?q=${encodeURIComponent(data.location)}&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`EduGiggle Location - ${data.location}`}
        />
      </section>
    </main>
  );
}
