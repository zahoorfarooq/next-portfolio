import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

const ProjectCard = ({ title, imageSrc, vercelLink, githubLink, description }) => (
  <div className="bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl p-6 flex flex-col items-center">
    <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
    <div className="relative w-full h-[200px] mb-4">
      <Image
        src={imageSrc}
        alt={title}
        layout="fill"
        objectFit="cover" // Ensure image fills the box
        className="rounded-lg object-center" // Center the image within the box
      />
    </div>
    <p className="text-center text-gray-700 dark:text-gray-300 mb-4">{description}</p> {/* Add description here */}
    <div className="flex justify-center space-x-4">
      <Link href={vercelLink} target="_blank" rel="noopener noreferrer"
        className="bg-dark text-light dark:bg-light dark:text-dark py-2 px-4 rounded-md hover:bg-opacity-80">
        View Live
      </Link>
      <Link href={githubLink} target="_blank" rel="noopener noreferrer"
        className="bg-gray-200 text-dark dark:bg-gray-700 dark:text-light py-2 px-4 rounded-md hover:bg-opacity-80">
        GitHub
      </Link>
    </div>
  </div>
);

export default function Projects() {
  const projects = [
    {
      title: "Talk-a-Tive",
      imageSrc: "/profile/project1.png",
      vercelLink: "https://your-project1-url.vercel.app",
      githubLink: "https://github.com/Zaydfarooq/Talk-a-Tive",
      description: "A real-time chat application with group chat functionality and private messaging.",
    },
    {
      title: "ViewTube- A YT Alternative",
      imageSrc: "/profile/project2.png",
      vercelLink: "https://your-project2-url.vercel.app",
      githubLink: "https://github.com/Zaydfarooq/ViewTube-Alternative-app",
      description: "An alternative YouTube platform that allows users to watch and share videos.",
    },
    {
      title: "SocioMeet-Social Blog App",
      imageSrc: "/profile/project3.png",
      vercelLink: "https://your-project3-url.vercel.app",
      githubLink: "https://github.com/Zaydfarooq/socialmeet",
      description: "A Text Based social media platform where users can post blogs and interact with others.",
    },
    {
      title: "PowerPDF-AI integrated pdf tool",
      imageSrc: "/profile/project4.png",
      vercelLink: "https://your-project4-url.vercel.app",
      githubLink: "https://github.com/Zaydfarooq/PowerPDF",
      description: "An AI-powered tool for talking, summerizing PDF documents.",
    },
  ];

  return (
    <>
      <TransitionEffect />
      <div className="w-full h-full inline-block z-0 bg-light dark:bg-dark pt-16 p-32 xl:p-24 lg:p-16 md:p-12 md:pt-16 sm:p-8">
        <main className="w-full flex flex-col items-center justify-center">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 !text-center !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
