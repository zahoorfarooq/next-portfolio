import React from "react";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";

const Project = ({ type, title, thumbNailImg, link, gitHubLink }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href='https://github.com/zahoorfarooq/socialmeet'
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg max-h-[400px] flex items-center justify-center bg-gray-100 dark:bg-gray-800"
      >
        <img
          src={thumbNailImg}
          alt={title}
          className="w-full h-full object-contain rounded-lg"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href='https://github.com/zahoorfarooq/My-projects-/tree/main/student%20registration%20details'
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold text-dark dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={gitHubLink} target="_blank" className="w-8 md:w-6">
            <GithubIcon className={"fill-dark dark:fill-light"} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;