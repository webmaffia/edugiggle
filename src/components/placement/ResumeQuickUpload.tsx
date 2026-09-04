"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "@/lib/emailjs";

const RESUME_MAX_SIZE_BYTES = 5 * 1024 * 1024;
const RESUME_ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

type Status = { message: string; isError: boolean } | null;

export default function ResumeQuickUpload() {
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  function handleResumeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;
    setResumeError(null);
    if (!file) {
      setResumeFile(null);
      return;
    }
    if (!RESUME_ALLOWED_TYPES.includes(file.type)) {
      setResumeError("Please upload a PDF, DOC or DOCX file.");
      setResumeFile(null);
      e.target.value = "";
      return;
    }
    if (file.size > RESUME_MAX_SIZE_BYTES) {
      setResumeError("Resume must be smaller than 5MB.");
      setResumeFile(null);
      e.target.value = "";
      return;
    }
    setResumeFile(file);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!resumeFile) {
      setResumeError("Please attach your resume.");
      return;
    }
    if (!formRef.current) return;

    setSubmitting(true);
    setResumeError(null);

    const elements = formRef.current.elements;
    (elements.namedItem("title") as HTMLInputElement).value = `New Resume Submission from ${name}`;
    (elements.namedItem("time") as HTMLInputElement).value = new Date().toLocaleString();
    (elements.namedItem("message") as HTMLInputElement).value =
      `Email: ${email}\nWhatsApp Number: ${phone}\nResume attached: ${resumeFile.name}`;

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setStatus({ message: "Resume received! Our placement team will reach out shortly.", isError: false });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({ message: "Something went wrong. Please try again or WhatsApp us.", isError: true });
    } finally {
      setSubmitting(false);
    }
  }

  if (status && !status.isError) {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-secondary mb-2">Thank you, {name.split(" ")[0]}!</h3>
        <p className="text-sm text-textMuted">{status.message}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 text-left" onSubmit={handleSubmit}>
      <p className="text-xs font-bold tracking-widest text-primary mb-1">QUICK APPLY</p>
      <h3 className="text-xl font-extrabold text-secondary mb-5">Upload Your Resume</h3>

      <input type="hidden" name="to_email" value="giggle.leads@gmail.com" />
      <input type="hidden" name="title" />
      <input type="hidden" name="time" />
      <input type="hidden" name="message" />

      <div className="space-y-3.5">
        <input
          className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary text-sm p-3 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400 transition-colors"
          name="name"
          placeholder="Full Name"
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary text-sm p-3 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400 transition-colors"
          name="email"
          placeholder="Email Address"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary text-sm p-3 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400 transition-colors"
          placeholder="WhatsApp Number"
          required
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label
          className={`flex items-center gap-3 rounded-lg border border-dashed p-3 cursor-pointer transition-colors ${
            resumeFile ? "border-primary bg-blue-50/40" : "border-gray-300 bg-gray-50 hover:bg-gray-100"
          }`}
        >
          <svg className="h-5 w-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
          <span className="text-sm text-gray-600 truncate">
            {resumeFile ? resumeFile.name : "Attach resume — PDF, DOC or DOCX (max 5MB)"}
          </span>
          <input accept=".pdf,.doc,.docx" className="hidden" name="resume" onChange={handleResumeChange} type="file" />
        </label>
        {resumeError && <p className="text-xs font-medium text-red-600">{resumeError}</p>}
        {status && status.isError && <p className="text-xs font-medium text-red-600">{status.message}</p>}

        <button
          className="w-full py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          type="submit"
          disabled={submitting}
        >
          {submitting ? "Sending..." : "Submit Resume"}
        </button>
      </div>
    </form>
  );
}
