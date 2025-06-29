"use client";

import AnimatedText from "@/components/AnimatedText";
import FeaturedBlog from "@/components/FeaturedBlog";
import Blog from "@/components/Blog";
import TransitionEffect from "@/components/TransitionEffect";
import { useEffect, useState } from "react";
import { GET_USER_ARTICLES, gql } from "@/hashode/hashnode";
import FeaturedBlogSkeleton from "@/components/skeletons/FeaturedBlogSkeleton";
import BlogSkeleton from "@/components/skeletons/BlogSkeleton";

export default function Blogs() {
  const [loading, setLoading] = useState(false);
  const [fetchedBlogs, setFetchedBlogs] = useState([]);

  useEffect(() => {
    gql(GET_USER_ARTICLES)
      .then((response) => {
        setFetchedBlogs(response.data.publication.posts.edges);
        setTimeout(() => {
          setLoading(true);
        }, 1000);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      <TransitionEffect />
      <div className="w-full h-full inline-block z-0 bg-light dark:bg-dark pt-16 p-32 xl:p-24 lg:p-16 md:p-12 md:pt-16 sm:p-8">
        <main className="w-full flex flex-col items-center justify-center overflow-hidden text-dark dark:text-light">
          <AnimatedText
            text="Tech Blogs: Shaping Tomorrow with Words"
            className="mb-16 !text-center !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
          />
          <ul className="w-full grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            {fetchedBlogs.slice(0, 2).map((blog) => (
              <div key={blog.id}>
                {loading ? (
                  <FeaturedBlog
                    thumbNailImg={blog.node.coverImage.url}
                    title={blog.node.title}
                    time={blog.node.readTimeInMinutes}
                    summary={blog.node.brief}
                    link={`https://zahoorfarooq.hashnode.dev/${blog.node.slug}`}
                  />
                ) : (
                  <FeaturedBlogSkeleton />
                )}
              </div>
            ))}
          </ul>
          <div className="flex flex-col items-center w-full my-16 mt-32">
            <a
              href="https://zahoorfarooq.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-2xl font-semibold text-blue-600 hover:underline"
            >
              {/* Hashnode SVG Icon */}
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#2962FF" />
                <path
                  d="M22.5 9.5L16 16L9.5 22.5"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.5 9.5L16 16L22.5 22.5"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Visit my Hashnode Blog
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
