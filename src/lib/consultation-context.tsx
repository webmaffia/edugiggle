"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type ConsultationModalContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const ConsultationModalContext = createContext<ConsultationModalContextValue | null>(null);

export function ConsultationModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (sessionStorage.getItem("consultationModalShown")) return;
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("consultationModalShown", "true");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  return (
    <ConsultationModalContext.Provider value={value}>
      {children}
    </ConsultationModalContext.Provider>
  );
}

export function useConsultationModal() {
  const ctx = useContext(ConsultationModalContext);
  if (!ctx) {
    throw new Error("useConsultationModal must be used within a ConsultationModalProvider");
  }
  return ctx;
}
