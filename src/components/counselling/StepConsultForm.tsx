"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Image from "next/image";
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "@/lib/emailjs";
import type { Course } from "@/lib/courses";

type Status = { message: string; isError: boolean } | null;

type UserType = "Student (12th/UG)" | "Working Professional";

const INTEREST_AREAS: { key: string; label: string; ugSlug: string; pgSlug: string }[] = [
  { key: "business", label: "Business & Management", ugSlug: "bba", pgSlug: "mba" },
  { key: "commerce", label: "Commerce & Finance", ugSlug: "bcom", pgSlug: "mcom" },
  { key: "tech", label: "Computer Applications / IT", ugSlug: "bca", pgSlug: "mca" },
  { key: "arts", label: "Arts & Humanities", ugSlug: "ba", pgSlug: "ma" },
  { key: "science", label: "Science & Data", ugSlug: "bsc", pgSlug: "msc" },
];

const TOTAL_STEPS = 4;

export default function StepConsultForm({
  id,
  compact = false,
  courses,
}: {
  id: string;
  compact?: boolean;
  courses: Course[];
}) {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  const [userType, setUserType] = useState<UserType | "">("");
  const [interestKey, setInterestKey] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const inputClass = compact
    ? "w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary text-base p-3 sm:p-3.5 bg-gray-50 focus:bg-white transition-colors"
    : "w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary text-base sm:text-lg p-3.5 sm:p-4 bg-gray-50 focus:bg-white transition-colors";
  const labelClass = compact
    ? "block text-sm sm:text-base font-medium text-gray-700 mb-1.5"
    : "block text-base sm:text-lg font-medium text-gray-700 mb-2";

  const level: "UG" | "PG" | null = userType === "Working Professional" ? "PG" : userType === "Student (12th/UG)" ? "UG" : null;
  const interest = INTEREST_AREAS.find((a) => a.key === interestKey);
  const recommendedCourses = interest
    ? courses.filter((c) => c.slug === (level === "PG" ? interest.pgSlug : interest.ugSlug))
    : level
    ? courses.filter((c) => c.level === level)
    : [];

  function goNext() {
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }
  function goBack() {
    setStep((s) => Math.max(s - 1, 1));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const courseNames = recommendedCourses.map((c) => c.name).join(", ") || "Not specified";

    const params = {
      to_email: "giggle.leads@gmail.com",
      name,
      email,
      title: `New Consultation Request from ${name}`,
      time: new Date().toLocaleString(),
      message:
        `Email: ${email}\n` +
        `WhatsApp Number: ${phone}\n` +
        `I am a: ${userType}\n` +
        `Area of interest: ${interest?.label || "Not specified"}\n` +
        `Suggested course(s): ${courseNames}`,
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setStatus({ message: "Thank you! We will get in touch with you shortly.", isError: false });
      setStep(TOTAL_STEPS + 1);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({ message: "Something went wrong. Please try again or WhatsApp us.", isError: true });
    } finally {
      setSubmitting(false);
    }
  }

  if (step > TOTAL_STEPS && status && !status.isError) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-2">You&apos;re all set, {name.split(" ")[0]}!</h3>
        <p className="text-base sm:text-lg text-textMuted">{status.message}</p>
      </div>
    );
  }

  return (
    <div id={id}>
      <div className="flex items-center gap-2 mb-6">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div key={i} className={`h-2 flex-1 rounded-full ${i + 1 <= step ? "bg-primary" : "bg-gray-200"}`} />
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <p className={labelClass}>I am a</p>
          <div className="grid grid-cols-1 gap-3">
            {(["Student (12th/UG)", "Working Professional"] as UserType[]).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setUserType(option);
                  goNext();
                }}
                className={`w-full flex items-center justify-between gap-3 text-left px-5 py-4 rounded-xl border-2 transition-all font-semibold text-base sm:text-lg ${
                  userType === option
                    ? "border-primary bg-primary text-white shadow-md shadow-indigo-200 scale-[1.02]"
                    : "border-gray-200 hover:border-primary/50 text-secondary"
                }`}
              >
                {option}
                {userType === option && (
                  <svg className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-1">
            <button type="button" onClick={goBack} className="text-gray-400 hover:text-gray-600">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
            <p className={`${labelClass} mb-0`}>What are you most interested in?</p>
          </div>
          <div className="grid grid-cols-1 gap-2.5">
            {INTEREST_AREAS.map((area) => (
              <button
                key={area.key}
                type="button"
                onClick={() => {
                  setInterestKey(area.key);
                  goNext();
                }}
                className={`w-full flex items-center justify-between gap-3 text-left px-5 py-3.5 rounded-xl border-2 transition-all font-medium text-base sm:text-lg ${
                  interestKey === area.key
                    ? "border-primary bg-primary text-white shadow-md shadow-indigo-200 scale-[1.02] font-semibold"
                    : "border-gray-200 hover:border-primary/50 text-secondary"
                }`}
              >
                {area.label}
                {interestKey === area.key && (
                  <svg className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                )}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setInterestKey("");
                goNext();
              }}
              className="w-full text-center px-4 py-3 rounded-xl text-sm sm:text-base font-semibold text-gray-500 hover:text-primary"
            >
              Not sure yet — show me options
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-1">
            <button type="button" onClick={goBack} className="text-gray-400 hover:text-gray-600">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
            <p className={`${labelClass} mb-0`}>
              {recommendedCourses.length ? "Based on your answers, here's what fits:" : "Here are some options:"}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 max-h-80 overflow-y-auto pr-1">
            {recommendedCourses.map((course) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-primary/50 hover:bg-blue-50/40 transition-colors"
              >
                <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                  <Image alt={course.name} className="object-cover" fill src={course.image} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-bold text-secondary truncate">{course.fullName}</p>
                  <p className="text-sm text-textMuted">{course.duration} · {course.tag}</p>
                </div>
                <svg className="h-5 w-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </Link>
            ))}
          </div>
          <button
            type="button"
            onClick={goNext}
            className="w-full py-4 px-4 border border-transparent rounded-xl shadow-sm text-base sm:text-lg font-bold text-white bg-primary hover:bg-opacity-90 transition-colors"
          >
            Continue to Book My Free Session
          </button>
        </div>
      )}

      {step === 4 && (
        <form className={compact ? "space-y-2.5 sm:space-y-4" : "space-y-4"} onSubmit={handleSubmit}>
          <div className="flex items-center gap-2 mb-1">
            <button type="button" onClick={goBack} className="text-gray-400 hover:text-gray-600">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
            <p className={`${labelClass} mb-0`}>Almost done — where should we reach you?</p>
          </div>
          <div>
            <label className={labelClass}>Full Name</label>
            <input
              className={inputClass}
              placeholder="Enter your full name"
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>WhatsApp Number</label>
            <input
              className={inputClass}
              placeholder="Enter your WhatsApp number"
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Email Address</label>
            <input
              className={inputClass}
              placeholder="Enter your email address"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {status && status.isError && <p className="text-sm sm:text-base font-medium text-red-600">{status.message}</p>}
          <button
            className={`w-full ${compact ? "py-3.5 sm:py-4 mt-1 sm:mt-2" : "py-4 sm:py-5 mt-2"} px-4 border border-transparent rounded-xl shadow-sm text-base sm:text-lg font-bold text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:opacity-60 disabled:cursor-not-allowed`}
            type="submit"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Yes! I Want Expert Guidance"}
          </button>
        </form>
      )}
    </div>
  );
}
