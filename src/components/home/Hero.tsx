"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BookConsultButton from "../BookConsultButton";
import ConsultForm from "../ConsultForm";

const FEATURES = [
  {
    title: "Expert Counselors",
    subtitle: "10+ yrs experience",
    icon: (
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    ),
  },
  {
    title: "Personalized Guidance",
    subtitle: "Tailored for you",
    icon: (
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    ),
  },
  {
    title: "Trusted by 1,000+",
    subtitle: "Students & Professionals",
    icon: (
      <>
        <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M12 14v7l-9-5V9l9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </>
    ),
  },
];

const FLOATING_ICONS = [
  { icon: "🎓", class: "hero-float-icon-1", pos: "top-16 left-[8%]", size: "text-2xl" },
  { icon: "💼", class: "hero-float-icon-2", pos: "top-32 right-[12%]", size: "text-xl" },
  { icon: "📚", class: "hero-float-icon-3", pos: "bottom-24 left-[15%]", size: "text-2xl" },
  { icon: "🎯", class: "hero-float-icon-1", pos: "bottom-40 right-[6%]", size: "text-xl" },
  { icon: "🏆", class: "hero-float-icon-2", pos: "top-1/2 left-[3%]", size: "text-lg" },
  { icon: "✨", class: "hero-float-icon-3", pos: "top-24 left-[45%]", size: "text-lg" },
];

const TESTIMONIALS = [
  { name: "Priya S.", role: "BBA Student", text: "EduGiggle helped me choose the right university!" },
  { name: "Rahul M.", role: "Working Professional", text: "Best career guidance I've ever received." },
  { name: "Ananya K.", role: "MBA Aspirant", text: "Finally clear about my career path." },
];

function useAnimatedCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
}

const TYPING_WORDS = ["Career Planning", "Course Selection", "University Admission", "Study Abroad"];

const NOTIFICATIONS = [
  { name: "Priya", city: "Delhi" },
  { name: "Rahul", city: "Mumbai" },
  { name: "Ananya", city: "Bangalore" },
  { name: "Vikram", city: "Hyderabad" },
  { name: "Sneha", city: "Chennai" },
  { name: "Arjun", city: "Pune" },
  { name: "Kavya", city: "Jaipur" },
  { name: "Rohan", city: "Kolkata" },
];

function useTypingEffect() {
  const [wordIdx, setWordIdx] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = TYPING_WORDS[wordIdx];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIdx((prev) => (prev + 1) % TYPING_WORDS.length);
    } else {
      const delta = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setText(isDeleting ? currentWord.substring(0, text.length - 1) : currentWord.substring(0, text.length + 1));
      }, delta);
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIdx]);

  return text;
}

export default function Hero() {
  const studentCount = useAnimatedCounter(1247, 2500);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [notifIdx, setNotifIdx] = useState(0);
  const [notifVisible, setNotifVisible] = useState(true);
  const typingText = useTypingEffect();

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setNotifVisible(false);
      setTimeout(() => {
        setNotifIdx((prev) => (prev + 1) % NOTIFICATIONS.length);
        setNotifVisible(true);
      }, 300);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-14 lg:pb-28 hero-gradient-bg">
      {/* Animated floating shapes + emoji icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-float-1 absolute top-20 left-[10%] w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-300/10 rotate-12 blur-sm" />
        <div className="hero-float-2 absolute top-40 right-[15%] w-12 h-12 rounded-full bg-gradient-to-br from-accent/10 to-orange-200/10 blur-sm" />
        <div className="hero-float-3 absolute bottom-20 left-[20%] w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-200/10 to-primary/10 -rotate-12 blur-sm" />
        <div className="hero-float-2 absolute bottom-32 right-[8%] w-14 h-14 rounded-xl bg-gradient-to-br from-purple-200/10 to-indigo-200/10 rotate-45 blur-sm" />
        {FLOATING_ICONS.map((item, i) => (
          <div key={i} className={`absolute ${item.pos} ${item.class} ${item.size} opacity-20 select-none`}>
            {item.icon}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 lg:pr-8 mb-12 lg:mb-0">
            {/* Animated Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/10 text-xs sm:text-sm font-semibold text-secondary mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              INDIA&apos;S TRUSTED EDUCATION &amp; CAREER GUIDANCE PLATFORM
            </div>

            {/* Enhanced Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-secondary tracking-tight leading-[1.1] mb-4">
              Confused About Your Career or Next Step?{" "}
              <span className="block hero-headline-gradient relative mt-2">
                Let&apos;s Make It Clear.
                <svg className="hero-underline absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8 C50 2, 100 12, 150 6 S250 0, 298 8" stroke="#f26e22" strokeWidth="3" strokeLinecap="round" className="hero-underline-path" />
                </svg>
              </span>
            </h1>

            {/* Typing tagline */}
            <div className="flex items-center gap-2 mb-6 h-8">
              <span className="text-sm text-textMuted">We help you with</span>
              <span className="text-sm font-bold text-primary">
                {typingText}
                <span className="hero-typing-cursor">|</span>
              </span>
            </div>

            <p className="text-lg text-textMuted mb-8 max-w-xl leading-relaxed">
              Personalized counselling for students &amp; working professionals to choose the right path and the right course.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {FEATURES.map((feature, i) => (
                <div
                  key={feature.title}
                  className={`hero-feature flex items-start gap-3 ${i === 2 ? "col-span-2 md:col-span-1" : ""}`}
                >
                  <div className="mt-1 bg-primary/5 p-2.5 rounded-xl text-primary group-hover:bg-primary/10 transition-colors">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      {feature.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-secondary">{feature.title}</h3>
                    <p className="text-xs text-textMuted">{feature.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <BookConsultButton className="hero-cta-primary group relative inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-2xl text-white bg-primary shadow-lg shadow-primary/25 transition-all text-center hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 overflow-hidden">
                <span className="hero-shimmer absolute inset-0 pointer-events-none" />
                <div className="text-left relative z-10">
                  <span className="block">Book Free Consultation</span>
                  <span className="block text-xs font-normal text-indigo-200 mt-0.5">Get 1:1 guidance with an expert</span>
                </div>
                <svg className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </BookConsultButton>
              <Link className="hero-cta-secondary inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-base font-bold rounded-2xl text-secondary bg-white hover:bg-gray-50 shadow-sm transition-all text-center hover:shadow-md hover:-translate-y-0.5" href="/courses">
                <div className="text-left">
                  <span className="block text-primary">Explore Courses</span>
                  <span className="block text-xs font-normal text-textMuted mt-0.5">Find the right program</span>
                </div>
              </Link>
            </div>

            {/* Live Counter */}
            <div className="hero-live-counter flex items-center gap-3 mb-6 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100 w-fit">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-sm font-semibold text-secondary">
                <span className="text-primary font-extrabold tabular-nums">{studentCount.toLocaleString()}</span> students guided this month
              </span>
            </div>

            {/* Social Proof + Rotating Testimonial */}
            <div className="hero-social-proof flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-purple-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm">A</div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-orange-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm">R</div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm">P</div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm">S</div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm">+1K</div>
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <span className="text-textMuted">Loved by <strong className="text-secondary">1,000+ students</strong></span>
                </div>
              </div>
              {/* Rotating mini testimonial */}
              <div className="hidden sm:block bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-gray-100 shadow-sm max-w-[240px]">
                <div className="hero-testimonial-fade relative h-14 overflow-hidden">
                  {TESTIMONIALS.map((t, i) => (
                    <div
                      key={i}
                      className={`absolute inset-0 transition-all duration-500 ${i === testimonialIdx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                    >
                      <p className="text-xs text-textMuted italic leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                      <p className="text-xs font-bold text-secondary mt-1">{t.name} <span className="font-normal text-textMuted">· {t.role}</span></p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form Card */}
          <div className="lg:col-span-6 relative lg:pl-8">
            {/* Floating annotation - top of form */}
            <div className="hero-annotation flex justify-center mb-3 hidden sm:flex items-center gap-1.5 bg-accent/10 text-accent text-xs font-bold px-3 py-1.5 rounded-full border border-accent/20 w-fit mx-auto lg:mx-0 lg:ml-auto">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Takes less than 30 sec!
            </div>

            {/* Live notification badge */}
            <div className={`hero-notification absolute -left-4 lg:-left-8 bottom-8 z-30 bg-white rounded-xl px-3 py-2 shadow-lg border border-gray-100 flex items-center gap-2 max-w-[200px] transition-all duration-300 ${notifVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"}`}>
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold text-secondary truncate">Consultation Booked!</p>
                <p className="text-[9px] text-textMuted truncate">{NOTIFICATIONS[notifIdx].name} from {NOTIFICATIONS[notifIdx].city} just now</p>
              </div>
            </div>

            {/* Glowing card wrapper */}
            <div className="hero-form-glow relative z-20 mx-auto lg:ml-auto lg:mr-0 max-w-md w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-400/20 to-primary/20 rounded-3xl blur-lg opacity-60 animate-pulse-slow pointer-events-none" />
              <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-xl">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-1.5 bg-primary/5 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    100% Free Consultation
                  </div>
                  <h2 className="text-2xl font-extrabold text-secondary mb-1">Book Your Free Consultation</h2>
                  <p className="text-sm text-textMuted">Fill the form &amp; our expert will call you</p>
                </div>
                <ConsultForm id="heroConsultForm" />
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-center gap-4 text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    100% Free
                  </span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    No Spam
                  </span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Quick Call
                  </span>
                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-100/60 to-blue-50/60 rounded-full blur-3xl -z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
