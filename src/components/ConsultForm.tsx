"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "@/lib/emailjs";

type Status = { message: string; isError: boolean } | null;

export default function ConsultForm({
  id,
  compact = false,
  onSuccess,
}: {
  id: string;
  compact?: boolean;
  onSuccess?: () => void;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  const labelClass = compact
    ? "block text-xs sm:text-sm font-medium text-gray-700 mb-1"
    : "block text-sm font-medium text-gray-700 mb-1";
  const inputClass = compact
    ? "w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary text-sm p-2.5 sm:p-3 bg-gray-50 focus:bg-white transition-colors"
    : "w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary text-sm p-3 bg-gray-50 focus:bg-white transition-colors";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("user_name") as string) || "";
    const email = (data.get("user_email") as string) || "";
    const phone = (data.get("user_phone") as string) || "";
    const userType = (data.get("user_type") as string) || "";
    const userGoal = (data.get("user_goal") as string) || "";

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
        `Need help with: ${userGoal}`,
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setStatus({ message: "Thank you! We will get in touch with you shortly.", isError: false });
      form.reset();
      onSuccess?.();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({ message: "Something went wrong. Please try again or WhatsApp us.", isError: true });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className={compact ? "space-y-2.5 sm:space-y-4" : "space-y-4"} id={id} onSubmit={handleSubmit}>
      <div>
        <label className={`${labelClass} flex items-center gap-2`}>
          <svg className={compact ? "h-4 w-4 text-gray-400 shrink-0" : "h-4 w-4 text-gray-400"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
          Full Name
        </label>
        <input className={inputClass} name="user_name" placeholder="Enter your full name" required type="text" />
      </div>
      <div>
        <label className={`${labelClass} flex items-center gap-2`}>
          <svg className={compact ? "h-4 w-4 text-green-500 shrink-0" : "h-4 w-4 text-green-500"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
          WhatsApp Number
        </label>
        <input className={inputClass} name="user_phone" placeholder="Enter your WhatsApp number" required type="tel" />
      </div>
      <div>
        <label className={`${labelClass} flex items-center gap-2`}>
          <svg className={compact ? "h-4 w-4 text-gray-400 shrink-0" : "h-4 w-4 text-gray-400"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
          Email Address
        </label>
        <input className={inputClass} name="user_email" placeholder="Enter your email address" required type="email" />
      </div>
      <div>
        <label className={labelClass}>I am a</label>
        <select className={inputClass} name="user_type" defaultValue="Select">
          <option>Select</option>
          <option>Student (12th/UG)</option>
          <option>Working Professional</option>
        </select>
      </div>
      <div>
        <label className={labelClass}>I need help with</label>
        <select className={inputClass} name="user_goal" defaultValue="Select your goal">
          <option>Select your goal</option>
          <option>Career Counselling</option>
          <option>Course Selection</option>
        </select>
      </div>
      {status && (
        <p className={`text-sm font-medium ${status.isError ? "text-red-600" : "text-green-600"}`}>
          {status.message}
        </p>
      )}
      <button
        className={`w-full ${compact ? "py-3 sm:py-4 mt-1 sm:mt-2" : "py-4 mt-2"} px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:opacity-60 disabled:cursor-not-allowed`}
        type="submit"
        disabled={submitting}
      >
        {submitting ? "Sending..." : "Yes! I Want Expert Guidance"}
      </button>
    </form>
  );
}
