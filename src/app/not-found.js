import React from "react";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

export const metadata = {
  title: "Page Not Found | Zahoor Farooq",
  description: "The page you're looking for doesn't exist. Return to home or explore other sections.",
};

export default function NotFound() {
  return (
    <>
      <TransitionEffect />
      <div className="w-full h-screen inline-block z-0 bg-light dark:bg-dark flex flex-col items-center justify-center px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8">
        <AnimatedText
          text="404 - Page Not Found"
          className="!text-6xl !text-center mb-8 xl:!text-5xl lg:!text-5xl md:!text-4xl sm:!text-3xl"
        />
        
        <div className="text-center mb-12">
          <p className="text-2xl font-semibold text-dark dark:text-light mb-4">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-lg text-dark/75 dark:text-light/75 mb-8">
            But don't worry, you can always go back or explore other sections of the portfolio.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <Link
            href="/"
            className="bg-dark dark:bg-light text-light dark:text-dark px-8 py-3 rounded-lg font-semibold hover:opacity-80 transition-opacity text-center"
          >
            Go Back Home
          </Link>
          <Link
            href="/projects"
            className="bg-primary dark:bg-primaryDark text-light dark:text-dark px-8 py-3 rounded-lg font-semibold hover:opacity-80 transition-opacity text-center"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="border-2 border-dark dark:border-light text-dark dark:text-light px-8 py-3 rounded-lg font-semibold hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all text-center"
          >
            Contact Me
          </Link>
        </div>

        <div className="mt-16 text-center text-dark/50 dark:text-light/50">
          <p className="text-sm">Error Code: 404</p>
        </div>
      </div>
    </>
  );
}
