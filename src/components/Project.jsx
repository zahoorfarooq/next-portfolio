"use client";

import React from "react";
import { GithubIcon } from "@/components/Icons";
import Link from "next/link";

const Project = ({ type, title, thumbNailImg, link, gitHubLink }) => {
  return (
    <article className="group relative w-full flex flex-col rounded-2xl overflow-hidden border border-solid border-dark/20 dark:border-light/20 bg-light dark:bg-dark shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%]" />

      <Link
        href={link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden bg-dark/5 dark:bg-light/5"
      >
        <div className="relative w-full aspect-video overflow-hidden">
          <img
            src={thumbNailImg}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      <div className="flex flex-col flex-1 p-5">
        <span className="text-primary dark:text-primaryDark font-medium text-sm mb-1">
          {type}
        </span>
        <Link
          href={link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary dark:hover:text-primaryDark transition-colors duration-200"
        >
          <h2 className="text-xl font-bold text-dark dark:text-light mb-3 line-clamp-2">
            {title}
          </h2>
        </Link>
        <div className="mt-auto flex items-center justify-between">
          <Link
            href={link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark transition-colors duration-200 underline underline-offset-2"
          >
            Visit Site
          </Link>
          <Link
            href={gitHubLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 hover:scale-110 transition-transform duration-200"
          >
            <GithubIcon className="fill-dark dark:fill-light" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
