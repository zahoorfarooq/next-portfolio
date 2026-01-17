"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import FeaturedProject from "@/components/FeaturedProject";
import Project from "@/components/Project";
import FeaturedProjectSkeleton from "@/components/skeletons/FeaturedProjectSkeleton";
import ProjectSkeleton from "@/components/skeletons/ProjectSkeleton";
import database from "@/appwrite/appwrite";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await database.getProjects();
        setProjects(response.documents || []);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects. Please try again later.");
        // Fallback projects
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Fallback projects data
  const fallbackProjects = [
    {
      type: "Real-time Chat App",
      title: "Talk-a-Tive",
      summary: "A comprehensive real-time chat application built with MERN stack featuring group chat, private messaging, and user-friendly interface.",
      thumbNailImg: "https://via.placeholder.com/600x400?text=Talk-a-Tive",
      deployedLink: "https://talkative-zahoor.vercel.app",
      githubRepoLink: "https://github.com/zahoorfarooq/Talk-a-Tive",
    },
    {
      type: "Video Streaming Platform",
      title: "ViewTube - A YouTube Alternative",
      summary: "A full-featured YouTube alternative platform with video upload, streaming, and social features powered by React and Node.js.",
      thumbNailImg: "https://via.placeholder.com/600x400?text=ViewTube",
      deployedLink: "https://viewtube-zahoor.vercel.app",
      githubRepoLink: "https://github.com/zahoorfarooq/ViewTube-Alternative-app",
    },
    {
      type: "Social Platform",
      title: "SocioMeet - Social Blog App",
      summary: "A text-based social media platform where users can create, share and interact with blog posts and other users.",
      thumbNailImg: "https://via.placeholder.com/600x400?text=SocioMeet",
      deployedLink: "https://sociomeet.vercel.app",
      githubRepoLink: "https://github.com/zahoorfarooq/socialmeet",
    },
    {
      type: "AI-Powered Tool",
      title: "PowerPDF - AI Integrated PDF Tool",
      summary: "An intelligent PDF management tool with AI integration for document analysis, summarization, and conversational features.",
      thumbNailImg: "https://via.placeholder.com/600x400?text=PowerPDF",
      deployedLink: "https://powerpdf-zahoor.vercel.app",
      githubRepoLink: "https://github.com/zahoorfarooq/PowerPDF",
    },
  ];

  const displayProjects = projects.length > 0 ? projects : fallbackProjects;
  const featuredProjects = displayProjects.slice(0, 2);
  const otherProjects = displayProjects.slice(2);

  return (
    <>
      <TransitionEffect />
      <div className="w-full h-full inline-block z-0 bg-light dark:bg-dark pt-16 p-32 xl:p-24 lg:p-16 md:p-12 md:pt-16 sm:p-8">
        <main className="w-full flex flex-col items-center justify-center">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 !text-center !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
          />

          {error && (
            <div className="w-full max-w-4xl bg-yellow-100 dark:bg-yellow-900 border border-yellow-400 dark:border-yellow-600 text-yellow-800 dark:text-yellow-100 px-4 py-3 rounded mb-8">
              {error}
            </div>
          )}

          {/* Featured Projects */}
          <div className="w-full max-w-7xl space-y-24 mb-12">
            <h2 className="text-4xl font-bold text-dark dark:text-light mb-8">
              Featured Projects
            </h2>
            {loading ? (
              <>
                <FeaturedProjectSkeleton />
                <FeaturedProjectSkeleton />
              </>
            ) : (
              featuredProjects.map((project, idx) => (
                <FeaturedProject
                  key={idx}
                  type={project.type}
                  title={project.title}
                  summary={project.summary}
                  thumbNailImg={project.thumbNailImg}
                  link={project.deployedLink}
                  gitHubLink={project.githubRepoLink}
                />
              ))
            )}
          </div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div className="w-full max-w-7xl">
              <h2 className="text-4xl font-bold text-dark dark:text-light mb-8">
                Other Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {loading ? (
                  <>
                    <ProjectSkeleton />
                    <ProjectSkeleton />
                  </>
                ) : (
                  otherProjects.map((project, idx) => (
                    <Project
                      key={idx}
                      type={project.type}
                      title={project.title}
                      thumbNailImg={project.thumbNailImg}
                      link={project.deployedLink}
                      gitHubLink={project.githubRepoLink}
                    />
                  ))
                )}
              </div>
            </div>
          )}

          {/* GitHub Link */}
          <div className="w-full max-w-7xl mt-16 text-center">
            <p className="text-lg text-dark dark:text-light mb-6">
              Want to see more? Check out my GitHub for additional projects and contributions.
            </p>
            <Link
              href="https://github.com/zahoorfarooq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-dark dark:bg-light text-light dark:text-dark px-8 py-3 rounded-lg font-semibold hover:opacity-80 transition-opacity"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.19.092-.926.35-1.556.636-1.914-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.986 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.697 1.028 1.59 1.028 2.683 0 3.842-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.48C17.137 18.192 20 14.442 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              View All Projects on GitHub
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
