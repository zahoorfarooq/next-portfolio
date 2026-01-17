import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import profileImage from "public/profile/developer-pic-1-removed-bg-removebg.png";
import lightBulb from "../../public/svgs/light_bulb.svg";
import TransitionEffect from "@/components/TransitionEffect";
import conf from "@/conf/conf";

export const metadata = {
  title: "Zahoor Farooq | DevOps Engineer & Full Stack Developer",
  description: "Passionate DevOps Engineer with expertise in Docker, Kubernetes, AWS, and full-stack web development. Building scalable solutions with automation and innovation.",
  keywords: ["DevOps", "Full Stack Developer", "Next.js", "React", "Docker", "Kubernetes", "AWS"],
  openGraph: {
    title: "Zahoor Farooq | DevOps Engineer Portfolio",
    description: "Passionate DevOps Engineer with strong technical skills",
    type: "website",
  },
};

export default function Home() {
  const stats = [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Tech Skills", value: "20+" },
  ];

  return (
    <>
      <TransitionEffect />
      <div className="w-full h-full inline-block z-0 pt-0 pb-1 px-32 bg-light dark:bg-dark xl:p-24 lg:p-16 md:p-12 md:pt-16 sm:p-8">
        <main className="flex items-center w-full text-dark dark:text-light">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="z-10 w-1/2 h-1/2 md:w-full">
              <Image
                src={profileImage}
                alt="Zahoor Farooq - DevOps Engineer"
                priority
                className="w-full h-auto mix-blend-multiply lg:hidden md:inline-block md:w-full"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Coding Visions: Turning Dreams into Digital Reality"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="py-4 text-base font-medium md:text-sm xs:text-xs">
                A passionate DevOps Engineer with strong technical
                skills, an eye for design and a commitment to delivering
                innovative, user‑friendly software solutions.
              </p>

              {/* Stats Section */}
              <div className="flex justify-between gap-12 my-6 w-full lg:gap-4 md:gap-2 xs:gap-1 md:justify-center">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-primary dark:text-primaryDark md:text-2xl xs:text-lg">
                      {stat.value}
                    </span>
                    <p className="text-sm text-dark/75 dark:text-light/75 md:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center self-start mt-2 lg:self-center gap-4 flex-wrap">
                <a
                  href={conf.resumeLink || 'https://drive.google.com/file/d/1qrUj_zcjjtDKJD514qWIWZ3vf3AYGTEu/view?usp=sharing'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-dark hover:bg-light text-light hover:text-dark p-2.5 px-6 rounded-lg font-semibold border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base transition-all duration-300"
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </a>
                <Link
                  href={"/projects"}
                  className="flex items-center bg-primary dark:bg-primaryDark text-light dark:text-dark p-2.5 px-6 rounded-lg font-semibold border-2 border-solid border-primary dark:border-primaryDark hover:bg-opacity-80 md:p-2 md:px-4 md:text-base transition-all duration-300"
                >
                  View Projects
                </Link>
                <Link
                  href={"/contact"}
                  className="ml-0 text-lg font-medium capitalize underline text-dark dark:text-light md:text-base hover:text-primary dark:hover:text-primaryDark transition-colors duration-300"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute right-6 bottom-8 w-24 md:hidden xl:w-20">
            <Image
              src={lightBulb}
              alt="lightBulb"
              priority
              className="w-full h-auto"
            />
          </div>
        </main>
      </div>
    </>
  );
}
