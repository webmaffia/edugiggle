import BookConsultButton from "./BookConsultButton";

export default function MobileStickyCta() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] p-3">
      <BookConsultButton className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-lg text-white bg-primary hover:bg-opacity-90 shadow-sm transition-all">
        Book Free Consultation
      </BookConsultButton>
    </div>
  );
}
