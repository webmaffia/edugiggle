import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ConsultationModalProvider } from "@/lib/consultation-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactIcons from "@/components/FloatingContactIcons";
import MobileStickyCta from "@/components/MobileStickyCta";
import ConsultationModal from "@/components/ConsultationModal";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edugiggle.com"),
  title: "EduGiggle - Career Counselling & Course Guidance for Students & Professionals",
  description:
    "EduGiggle offers personalized career counselling and course guidance for students and working professionals. Get expert 1:1 advice, explore top online university courses, and plan your future with confidence.",
  keywords:
    "career counselling, course selection, career guidance, online degree courses, education counselling India, career counselling for students, career change guidance",
  robots: "index, follow",
  authors: [{ name: "EduGiggle" }],
  icons: {
    icon: "/fav.png",
  },
  openGraph: {
    title: "EduGiggle - Career Counselling & Course Guidance",
    description:
      "Personalized counselling for students & working professionals to choose the right career path and the right course.",
    type: "website",
    siteName: "EduGiggle",
    images: ["/logo.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EduGiggle - Career Counselling & Course Guidance",
    description:
      "Personalized counselling for students & working professionals to choose the right career path and the right course.",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="bg-white pb-20 md:pb-0 font-sans">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MTZS8SDME2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MTZS8SDME2');
          `}
        </Script>
        <ConsultationModalProvider>
          <Header />
          {children}
          <Footer />
          <FloatingContactIcons />
          <ConsultationModal />
          <MobileStickyCta />
        </ConsultationModalProvider>
      </body>
    </html>
  );
}
