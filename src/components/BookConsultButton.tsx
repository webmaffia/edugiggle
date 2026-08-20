"use client";

import { useConsultationModal } from "@/lib/consultation-context";

export default function BookConsultButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { open } = useConsultationModal();

  return (
    <button type="button" className={className} onClick={open}>
      {children}
    </button>
  );
}
