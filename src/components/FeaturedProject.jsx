"use client";

import React from "react";
import { GithubIcon } from "@/components/Icons";
import Link from "next/link";

const FeaturedProject = ({ type, title, summary, thumbNailImg, link, gitHubLink }) => {
  return (
    <article className="group w-full flex items-center justify-between rounded-3xl border border-solid border-dark/20 dark:border-light/20 bg-light dark:bg-dark shadow-xl hover:shadow-2xl transition-shadow duration-300 p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]" />

      {/* Image */}
      <Link
        href={link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="w-1/2 overflow-hidden rounded-2xl lg:w-full"
      >
        <div className="relative aspect-video w-full overflow-hidden bg-dark/5 dark:bg-light/5 rounded-2xl">
          <img
            src={thumbNailImg}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        </div>
      </Link>

      {/* Content */}
      <div className="w-1/2 flex flex-col items-start justify-between pl-8 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-semibold text-xl xs:text-base mb-1">
          {type}
        </span>
        <Link
          href={link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary dark:hover:text-primaryDark transition-colors duration-200"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold text-dark dark:text-light sm:text-2xl leading-tight">
            {title}
          </h2>
        </Link>
        <p className="my-3 font-medium text-dark/70 dark:text-light/70 leading-relaxed sm:text-sm">
          {summary}
        </p>
        <div className="mt-4 flex items-center gap-4">
          <Link
            href={gitHubLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 hover:scale-110 transition-transform duration-200"
          >
            <GithubIcon className="fill-dark dark:fill-light" />
          </Link>
          <Link
            href={link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-dark dark:bg-light text-light dark:text-dark px-6 py-2.5 text-base font-semibold hover:bg-primary dark:hover:bg-primaryDark hover:text-light dark:hover:text-dark border-2 border-dark dark:border-light hover:border-primary dark:hover:border-primaryDark transition-all duration-200 sm:px-4 sm:text-sm"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
