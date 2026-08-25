import type { Metadata } from "next";
import { readSection } from "@/lib/content-store";

export const metadata: Metadata = {
  title: "Privacy Policy - EduGiggle",
  description:
    "Read the EduGiggle Privacy Policy to understand how we collect, use, and protect your personal information.",
  robots: "index, follow",
  authors: [{ name: "EduGiggle" }],
};

type PrivacyData = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: { title: string; content: string }[];
};

const DEFAULT_DATA: PrivacyData = {
  title: "Privacy Policy",
  lastUpdated: "August 22, 2026",
  intro:
    "At EduGiggle, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the data you share with us when you use our website and services.",
  sections: [
    { title: "Information We Collect", content: "We collect information you provide directly to us, such as when you fill out a consultation form, register for an account, subscribe to our newsletter, or contact us. This may include your name, email address, phone number, educational background, career interests, and any other information you choose to provide." },
    { title: "How We Use Your Information", content: "We use the information we collect to provide, maintain, and improve our services; to personalise your experience and deliver content relevant to your career and education goals; to communicate with you about our services, events, and updates; to process transactions and send related information; and to comply with legal obligations." },
    { title: "Information Sharing", content: "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as described in this policy. We may share your information with trusted university and education partners solely to facilitate admissions and counselling services you have requested. We may also share information when required by law or to protect our rights." },
    { title: "Data Security", content: "We implement a variety of security measures to maintain the safety of your personal information. Your personal data is stored in secured networks and is only accessible by a limited number of authorised personnel who are required to keep the information confidential. However, no method of transmission over the Internet or electronic storage is 100% secure." },
    { title: "Cookies", content: "We use cookies and similar tracking technologies to enhance your experience on our website. Cookies help us understand how you use our site, remember your preferences, and improve our services. You can choose to disable cookies through your browser settings, though this may affect certain functionality of the website." },
    { title: "Third-Party Links", content: "Our website may contain links to third-party websites or services that are not operated by us. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policy of every site you visit." },
    { title: "Your Rights", content: "You have the right to access, correct, or delete your personal information at any time. You may also opt out of receiving marketing communications from us by following the unsubscribe link in our emails or by contacting us directly. If you wish to exercise any of these rights, please reach out to us at hello@edugiggle.com." },
    { title: "Children's Privacy", content: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete that information promptly." },
    { title: "Changes to This Policy", content: "We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page and updating the effective date." },
    { title: "Contact Us", content: "If you have any questions or concerns about this Privacy Policy, please contact us at hello@edugiggle.com or reach us at +91 81694 70610." },
  ],
};

export default async function PrivacyPolicyPage() {
  const data = await readSection<PrivacyData>("privacy.body", DEFAULT_DATA);

  return (
    <main>
      <section className="relative bg-surface overflow-hidden py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700 mb-6 shadow-sm">
            LEGAL
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight mb-6">{data.title}</h1>
          <p className="text-sm text-textMuted max-w-2xl mx-auto">Last updated: {data.lastUpdated}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <p className="text-textMuted leading-relaxed mb-10 text-lg">{data.intro}</p>

            <div className="space-y-10">
              {data.sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-xl font-bold text-secondary mb-3">{section.title}</h2>
                  <p className="text-textMuted leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
