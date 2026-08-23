"use client";

import { useEffect, useState } from "react";
import StepConsultForm from "./StepConsultForm";

const FLOATING_ICONS = [
  { icon: "🎓", class: "hero-float-icon-1", pos: "top-16 left-[8%]", size: "text-2xl" },
  { icon: "💼", class: "hero-float-icon-2", pos: "top-32 right-[12%]", size: "text-xl" },
  { icon: "📚", class: "hero-float-icon-3", pos: "bottom-24 left-[15%]", size: "text-2xl" },
  { icon: "🎯", class: "hero-float-icon-1", pos: "bottom-40 right-[6%]", size: "text-xl" },
  { icon: "🏆", class: "hero-float-icon-2", pos: "top-1/2 left-[3%]", size: "text-lg" },
  { icon: "✨", class: "hero-float-icon-3", pos: "top-24 left-[45%]", size: "text-lg" },
];

const TYPING_WORDS = ["Stream Selection", "Course Guidance", "Career Switch", "College Admission"];

const BENEFITS = [
  "1:1 attention from a certified career counsellor, not a call-center script",
  "Personalized roadmap based on your interests, strengths & constraints",
  "Honest advice — we recommend what fits you, not what pays us commission",
  "Ongoing support until you're confident and enrolled in the right path",
];

const TESTIMONIALS = [
  { name: "Aditya K.", role: "12th Student, Pune", text: "My counsellor actually listened before suggesting anything — felt like talking to a mentor." },
  { name: "Sneha P.", role: "Working Professional", text: "EduGiggle helped me map out a realistic switch into data science with an actual plan." },
  { name: "Karan M.", role: "BCom Graduate", text: "The free session alone gave me more clarity than months of googling." },
];

const NOTIFICATIONS = [
  { name: "Priya", city: "Delhi" },
  { name: "Rahul", city: "Mumbai" },
  { name: "Ananya", city: "Bangalore" },
  { name: "Vikram", city: "Hyderabad" },
  { name: "Sneha", city: "Chennai" },
  { name: "Arjun", city: "Pune" },
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

export default function CounsellingHero() {
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
        <div className="lg:grid lg:grid-cols-10 lg:gap-6 items-stretch">
          {/* Left Column - Content */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 mb-10 lg:mb-0">
            {/* Animated Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/10 text-xs sm:text-sm font-semibold text-secondary mb-6 shadow-sm w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              100% FREE · 1:1 EXPERT CAREER COUNSELLING
            </div>

            {/* Enhanced Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-secondary tracking-tight leading-[1.1] mb-3">
              Get Career Clarity in{" "}
              <span className="hero-headline-gradient relative">
                One Free Session.
                <svg className="hero-underline absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8 C50 2, 100 12, 150 6 S250 0, 298 8" stroke="#f26e22" strokeWidth="3" strokeLinecap="round" className="hero-underline-path" />
                </svg>
              </span>
            </h1>

            {/* Typing tagline */}
            <div className="flex items-center gap-2 mb-5 h-7">
              <span className="text-sm text-textMuted">We help with</span>
              <span className="text-sm font-bold text-primary">
                {typingText}
                <span className="hero-typing-cursor">|</span>
              </span>
            </div>

            <p className="text-base text-textMuted mb-6 leading-relaxed">
              Talk to a real expert counsellor who maps out a plan built around you — not a sales pitch.
            </p>

            {/* Live Counter */}
            <div className="hero-live-counter flex items-center gap-3 mb-5 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100 w-fit">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-sm font-semibold text-secondary">
                <span className="text-primary font-extrabold tabular-nums">{studentCount.toLocaleString()}</span> students guided this month
              </span>
            </div>

            {/* Social Proof + Rotating Testimonial */}
            <div className="hero-social-proof flex flex-col gap-4">
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
              <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-gray-100 shadow-sm max-w-[280px]">
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

          {/* Right Column - Form */}
          <div className="lg:col-span-4 relative order-1 lg:order-2 mb-10 lg:mb-0">
            {/* Floating annotation */}
            <div className="hero-annotation flex justify-center mb-3 hidden sm:flex items-center gap-1.5 bg-accent/10 text-accent text-xs font-bold px-3 py-1.5 rounded-full border border-accent/20 w-fit mx-auto lg:mx-0 lg:ml-auto">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Takes less than 30 sec!
            </div>

            {/* Live notification badge */}
            <div className={`hero-notification absolute -right-4 lg:-right-8 bottom-8 z-30 bg-white rounded-xl px-3 py-2 shadow-lg border border-gray-100 flex items-center gap-2 max-w-[200px] transition-all duration-300 ${notifVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"}`}>
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold text-secondary truncate">Consultation Booked!</p>
                <p className="text-[9px] text-textMuted truncate">{NOTIFICATIONS[notifIdx].name} from {NOTIFICATIONS[notifIdx].city} just now</p>
              </div>
            </div>

            {/* Glowing card wrapper */}
            <div className="relative z-20 mx-auto lg:mr-0 lg:ml-0 max-w-md w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-400/20 to-primary/20 rounded-3xl blur-lg opacity-60 animate-pulse-slow pointer-events-none" />
              <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-xl">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-1.5 bg-primary/5 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    100% Free Counselling
                  </div>
                  <h2 className="text-2xl font-extrabold text-secondary mb-1">Book Your Free Session</h2>
                  <p className="text-sm text-textMuted">Fill the form &amp; our expert will reach out</p>
                </div>
                <StepConsultForm id="counsellingHeroForm" />
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-center gap-4 text-xs text-gray-500 font-medium flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    100% Free
                  </span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Reply in 24-48 hrs
                  </span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Confidential
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Row */}
        <div className="mt-16 lg:mt-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <ul className="space-y-3">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 hero-feature">
                    <svg className="h-5 w-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    <span className="text-sm text-textMuted">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary">No commission-based recommendations</p>
                  <p className="text-xs text-textMuted">We only suggest what&apos;s best for you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
