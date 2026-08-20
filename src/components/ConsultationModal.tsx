"use client";

import { useConsultationModal } from "@/lib/consultation-context";
import ConsultForm from "./ConsultForm";

export default function ConsultationModal() {
  const { isOpen, close } = useConsultationModal();

  return (
    <div
      className={`fixed inset-0 z-[60] ${isOpen ? "flex" : "hidden"} items-center justify-center p-4`}
      id="consultationModal"
    >
      <div className="absolute inset-0 bg-black/60" onClick={close} />
      <div className="bg-white rounded-2xl p-4 sm:p-8 form-shadow border border-gray-100 mx-auto max-w-md w-full relative z-10 max-h-[85vh] overflow-y-auto">
        <button
          aria-label="Close"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 bg-white rounded-full p-1"
          onClick={close}
          type="button"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </button>
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-2xl font-extrabold text-secondary mb-1 sm:mb-2">Book Your Free Consultation</h2>
          <p className="text-xs sm:text-sm text-textMuted">Take the first step towards a better future.</p>
        </div>
        <ConsultForm id="modalConsultForm" compact />
        <div className="mt-3 sm:mt-5 flex items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-gray-500 font-medium">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            100% Free
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            No Obligation
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            Quick Response
          </span>
        </div>
      </div>
    </div>
  );
}
