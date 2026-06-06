"use client";

import React from "react";
import Link from "next/link";

const FeaturedBlog = ({ thumbNailImg, title, time, summary, link }) => {
  return (
    <li className="col-span-1 relative group rounded-2xl overflow-hidden border border-solid border-dark/20 dark:border-light/20 bg-light dark:bg-dark shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />

      {/* Image with overlay */}
      <Link href={link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-dark/5 dark:bg-light/5">
          <img
            src={thumbNailImg}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/10 to-transparent" />
          <span className="absolute top-4 right-4 bg-primary dark:bg-primaryDark text-light dark:text-dark text-xs font-bold px-3 py-1 rounded-full shadow">
            {time} min read
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <h2 className="text-xl font-bold text-dark dark:text-light mb-3 line-clamp-2 hover:text-primary dark:hover:text-primaryDark transition-colors duration-200 leading-snug">
            {title}
          </h2>
        </Link>
        <p className="text-sm text-dark/65 dark:text-light/65 line-clamp-3 mb-5 leading-relaxed">
          {summary}
        </p>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-primaryDark group/cta"
        >
          Read Article
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform duration-200 group-hover/cta:translate-x-1"
          >
            <path
              d="M3 8H13M13 8L9 4M13 8L9 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </li>
  );
};

export default FeaturedBlog;
