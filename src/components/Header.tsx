"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BookConsultButton from "./BookConsultButton";

const NAV_LINKS = [
  { label: "Counselling", href: "/counselling" },
  { label: "Courses", href: "/courses" },
  { label: "Placement", href: "/placement", badge: "New" },
  { label: "About Us", href: "/about-us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link className="flex-shrink-0 flex items-center gap-3" href="/">
            <Image alt="EduGiggle Logo" className="h-12 w-auto object-contain" src="/logo.jpeg" width={160} height={48} priority />
          </Link>

          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                className="relative text-secondary font-semibold hover:text-primary transition-colors"
                href={link.href}
              >
                {link.label}
                {link.badge && (
                  <span className="absolute -top-3 -right-4 px-1.5 py-0.5 rounded-full bg-accent text-white text-[10px] font-bold leading-none animate-blink">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link className="text-secondary font-semibold hover:text-primary transition-colors" href="/contact-us">
              Contact Us
            </Link>
            <BookConsultButton className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-semibold rounded-lg text-white bg-primary hover:bg-opacity-90 shadow-sm transition-all group">
              Book Free Consultation
              <svg className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </BookConsultButton>
          </div>

          <div className="md:hidden flex items-center">
            <button
              aria-controls="mobileMenu"
              aria-expanded={menuOpen}
              className="text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary p-2"
              onClick={() => setMenuOpen((v) => !v)}
              type="button"
            >
              <svg className={`h-6 w-6 ${menuOpen ? "hidden" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
              <svg className={`h-6 w-6 ${menuOpen ? "" : "hidden"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${menuOpen ? "" : "hidden"} border-t border-gray-100 bg-white`} id="mobileMenu">
        <nav className="flex flex-col px-4 sm:px-6 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              className="flex items-center gap-2 text-secondary font-semibold hover:text-primary hover:bg-surface rounded-lg px-3 py-2.5 transition-colors"
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
              {link.badge && (
                <span className="px-1.5 py-0.5 rounded-full bg-accent text-white text-[10px] font-bold leading-none animate-blink">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
          <Link
            className="text-secondary font-semibold hover:text-primary hover:bg-surface rounded-lg px-3 py-2.5 transition-colors"
            href="/contact-us"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          <BookConsultButton className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-semibold rounded-lg text-white bg-primary hover:bg-opacity-90 shadow-sm transition-all mt-2 animate-blink">
            Book Free Consultation
          </BookConsultButton>
        </nav>
      </div>
    </header>
  );
}
