"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] sm:w-[90%] mx-auto flex flex-col items-start justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 sm:text-sm">
          {time} | {address}
        </span>
        <br /><br />
        <div className="font-medium w-full sm:text-sm">
          {work.map((points, index) => {
            return (<><p key={index}>{points}</p><br /></>);
          })}
        </div>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-32">
      <h2 className="font-bold text-8xl pb-28 w-full text-center sm:text-5xl sm:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative sm:mx-0 sm:w-full">
        <motion.div
          className="absolute left-9 top-0 bg-dark dark:bg-light w-[4px] h-full origin-top sm:left-0"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 ">

          <Details
            position="DevOps Engineer 1"
            company="BQE SOFTWARE"
            companyLink="https://www.bqe.com/"
            time="Oct 2024 - current"
            address="Srinagar, India"
            work={[
              "• Deploying stuff",
            ]}
          />
          <Details
            position="Full Stack Developer"
            company="TECHPLEMENT"
            companyLink="https://techplement.com/"
            time="Apr 2024 - Sep 2024"
            address="Remote, India"
            work={[
              "• Provideding client solution and worked on NextJS and ReactJS frameworks",
              "• Key role in developing B2C eCommerce platform on Salesforce Commerce Cloud, boosting online sales and user experience.",
              "• Resolved bugs, integrated new features for enhanced functionality and user experience.",
              "• Ensured ADA compliance for website.",
            ]}
          />
          <Details
            position="Gen AI freelancer"
            company="Scale AI."
            companyLink="https://scale.com/"
            time="Sep 2023 - Jul. 2024"
            address="Remote, India"
            work={[
              "During this Period, I",
              "• Contributed to 5 generative Al projects, supplying over 2000 instances of training data and improving coding skills",
              "• Created 15 effective problem solving solutions, each supported by 100+ thorough testcases to ensure code reliability.",
              "• Worked on software testing principles with a strong command of testing frameworks including JUnit and pytest.",
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
