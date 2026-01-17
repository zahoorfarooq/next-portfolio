import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import emailjs from "@emailjs/browser";
import conf from "@/conf/conf";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata = {
  title: {
    default: "Zahoor Farooq | DevOps Engineer & Full Stack Developer",
    template: "%s | Zahoor Farooq",
  },
  description: "Passionate DevOps Engineer with expertise in Docker, Kubernetes, AWS, and full-stack web development. Building scalable, innovative solutions.",
  keywords: ["DevOps", "Full Stack Developer", "Next.js", "React", "Docker", "Kubernetes", "AWS", "MERN"],
  authors: [{ name: "Zahoor Farooq" }],
  creator: "Zahoor Farooq",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zahoorfarooq.dev",
    title: "Zahoor Farooq | DevOps Engineer & Full Stack Developer",
    description: "Passionate DevOps Engineer with expertise in cloud technologies and full-stack development",
    siteName: "Zahoor Farooq Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zahoor Farooq",
    description: "DevOps Engineer & Full Stack Developer",
    creator: "@ZFarooq624",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "follow, index",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1b1b1b" />
        <link rel="canonical" href="https://zahoorfarooq.dev" />
      </head>
      <body className={`${montserrat.variable} font-mont bg-light text-dark dark:bg-dark dark:text-light transition-colors duration-300`}>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }`}
        </Script>
        <NavBar />
        <main className="min-h-screen">
          {children}
        </main>
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
      <Script
        id="email-js-cdn"
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        strategy="lazyOnload"
      ></Script>
      <Script id="email-js-init" type="text/javascript" strategy="lazyOnload">
        {(function () {
          if (window.emailjs) {
            window.emailjs.init({
              publicKey: conf.emailjsPublicKey,
            });
          }
        })()}
      </Script>
    </html>
  );
}
