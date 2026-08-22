import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - EduGiggle",
  description:
    "Read the EduGiggle Terms and Conditions governing your use of our website, counselling services, and educational guidance platform.",
  robots: "index, follow",
  authors: [{ name: "EduGiggle" }],
};

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using the EduGiggle website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services. We reserve the right to modify these terms at any time, and continued use of our services constitutes acceptance of any changes.",
  },
  {
    title: "Services Overview",
    content:
      "EduGiggle provides career counselling, education guidance, and admission consultation services. Our services include career assessments, personalised counselling sessions, university and course recommendations, and application assistance. The information provided on our website is for general informational and educational purposes only.",
  },
  {
    title: "User Responsibilities",
    content:
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate, current, and complete information during registration and to update such information as necessary. You agree not to use our services for any unlawful or unauthorised purpose.",
  },
  {
    title: "Consultation and Counselling",
    content:
      "EduGiggle provides counselling and guidance based on the information available at the time of consultation. Career and education recommendations are advisory in nature and should be considered alongside your own research and judgement. Admission outcomes depend on various factors including university policies, eligibility criteria, and competitive processes that are beyond our control.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content on this website, including text, graphics, logos, images, and software, is the property of EduGiggle or its content suppliers and is protected by Indian and international copyright laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.",
  },
  {
    title: "Limitation of Liability",
    content:
      "EduGiggle shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our services. We do not guarantee specific outcomes from our counselling or advisory services. Your use of our services is at your sole risk.",
  },
  {
    title: "Payment and Refund Policy",
    content:
      "Fees for counselling and consultation services are communicated prior to engagement. Payment is required before services are rendered. Refund requests are evaluated on a case-by-case basis. Please contact us at hello@edugiggle.com for any payment or refund queries.",
  },
  {
    title: "Termination",
    content:
      "We reserve the right to suspend or terminate your access to our services at our sole discretion, without notice, for conduct that we determine violates these terms or is harmful to other users, us, or third parties, or for any other reason.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Navi Mumbai, Maharashtra, India.",
  },
  {
    title: "Changes to Terms",
    content:
      "We may update these Terms and Conditions from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated terms on this page.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about these Terms and Conditions, please contact us at hello@edugiggle.com or call us at +91 81694 70610.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main>
      <section className="relative bg-surface overflow-hidden py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700 mb-6 shadow-sm">
            LEGAL
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight mb-6">
            Terms and Conditions
          </h1>
          <p className="text-sm text-textMuted max-w-2xl mx-auto">
            Last updated: August 22, 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-textMuted leading-relaxed mb-10 text-lg">
            Welcome to EduGiggle. These Terms and Conditions outline the rules and regulations for using our website and services. By using our platform, you accept these terms in full.
          </p>

          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-secondary mb-3">{section.title}</h2>
                <p className="text-textMuted leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
