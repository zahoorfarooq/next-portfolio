"use client";

import { useMotionValue, motion } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

const MovingImg = ({ title, thumbNailImg, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave() {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className="group/title"
    >
      <h2 className="text-lg font-semibold text-dark dark:text-light group-hover/title:text-primary dark:group-hover/title:text-primaryDark transition-colors duration-200">
        {title}
      </h2>
      <motion.img
        style={{ x, y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={thumbNailImg}
        alt={title}
        className="z-50 w-72 h-auto hidden absolute rounded-xl shadow-2xl pointer-events-none md:!hidden"
      />
    </Link>
  );
};

const Blog = ({ thumbNailImg, title, date, link }) => {
  const formatted = new Date(date);
  const dateStr = formatted.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-5 my-3 rounded-xl flex items-center justify-between gap-4
        bg-light dark:bg-dark text-dark dark:text-light
        border border-solid border-dark/15 dark:border-light/15
        border-r-4 border-b-4 border-r-dark/40 border-b-dark/40
        dark:border-r-light/40 dark:border-b-light/40
        hover:border-primary dark:hover:border-primaryDark
        hover:border-r-primary hover:border-b-primary
        dark:hover:border-r-primaryDark dark:hover:border-b-primaryDark
        transition-colors duration-200
        sm:flex-col sm:items-start"
    >
      {/* Left accent bar */}
      <span className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-primary dark:bg-primaryDark opacity-60" />

      <div className="pl-3 flex-1 min-w-0">
        <MovingImg title={title} thumbNailImg={thumbNailImg} link={link} />
      </div>

      <time className="shrink-0 text-sm font-medium text-dark/50 dark:text-light/50 sm:pl-3">
        {dateStr}
      </time>
    </motion.li>
  );
};

export default Blog;
