"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "Is the first counselling session really free?",
    answer:
      "Yes. Your first 1:1 session with an EduGiggle expert is completely free, with no obligation to enroll in anything afterward. We believe you should experience the clarity first.",
  },
  {
    question: "Who will be counselling me?",
    answer:
      "You'll be matched with a certified career counsellor who specializes in your stage of life — whether you're a 10th/12th student, an undergraduate, or a working professional exploring a switch.",
  },
  {
    question: "Is the session online or offline?",
    answer:
      "Sessions are conducted online over video or phone call, so you can join from anywhere in India (or abroad) at a time that suits you.",
  },
  {
    question: "How long does a counselling session take?",
    answer:
      "A typical session runs 30-45 minutes. We keep it focused — understanding your background, goals, and concerns, then mapping out clear next steps.",
  },
  {
    question: "Will my information be kept confidential?",
    answer:
      "Absolutely. Everything you share with your counsellor is confidential and used only to give you better, more personalized guidance.",
  },
  {
    question: "How soon can I get a slot?",
    answer:
      "Most students and professionals get matched with a counsellor within 24-48 hours of submitting the form. Slots are limited each week, so we recommend booking early.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {FAQS.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq.question}
            className={`rounded-2xl border bg-white shadow-lg transition-colors ${
              isOpen ? "border-primary/60" : "border-gray-100 hover:border-gray-200"
            }`}
          >
            <button
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              type="button"
            >
              <span className="font-bold text-secondary">{faq.question}</span>
              <svg
                className={`h-5 w-5 text-primary shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>
            {isOpen && <p className="px-6 pb-5 text-sm text-textMuted leading-relaxed">{faq.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
