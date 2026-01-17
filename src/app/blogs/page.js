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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fetchedBlogs, setFetchedBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await gql(GET_USER_ARTICLES);
        
        if (response.errors) {
          throw new Error(response.errors[0]?.message || "Failed to fetch blogs");
        }
        
        const blogs = response.data?.publication?.posts?.edges || [];
        setFetchedBlogs(blogs);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blog posts. Please try again later.");
        setFetchedBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const renderSkeletons = (count = 2) => (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <div key={`skeleton-${idx}`}>
          {idx === 0 ? <FeaturedBlogSkeleton /> : <BlogSkeleton />}
        </div>
      ))}
    </>
  );

  return (
    <>
      <TransitionEffect />
      <div className="w-full h-full inline-block z-0 bg-light dark:bg-dark pt-16 p-32 xl:p-24 lg:p-16 md:p-12 md:pt-16 sm:p-8">
        <main className="w-full flex flex-col items-center justify-center overflow-hidden text-dark dark:text-light">
          <AnimatedText
            text="Tech Blogs: Shaping Tomorrow with Words"
            className="mb-16 !text-center !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
          />

          {error && (
            <div className="w-full max-w-4xl bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-800 dark:text-red-100 px-4 py-3 rounded mb-8">
              {error}
            </div>
          )}

          {/* Featured Blogs */}
          <ul className="w-full grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            {loading ? (
              renderSkeletons(2)
            ) : fetchedBlogs.length > 0 ? (
              fetchedBlogs.slice(0, 2).map((blog) => (
                <div key={blog.node.id}>
                  <FeaturedBlog
                    thumbNailImg={blog.node.coverImage?.url || "https://via.placeholder.com/600x400"}
                    title={blog.node.title}
                    time={blog.node.readTimeInMinutes || 5}
                    summary={blog.node.brief || "Check out this article"}
                    link={`https://zahoorfarooq.hashnode.dev/${blog.node.slug}`}
                  />
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <p className="text-lg text-dark/75 dark:text-light/75">No blog posts available yet.</p>
              </div>
            )}
          </ul>

          {/* Recent Blogs List */}
          {!loading && fetchedBlogs.length > 2 && (
            <div className="w-full mt-16">
              <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
              <ul className="w-full space-y-0">
                {fetchedBlogs.slice(2).map((blog) => (
                  <Blog
                    key={blog.node.id}
                    thumbNailImg={blog.node.coverImage?.url || "https://via.placeholder.com/400x300"}
                    title={blog.node.title}
                    date={blog.node.publishedAt}
                    link={`https://zahoorfarooq.hashnode.dev/${blog.node.slug}`}
                  />
                ))}
              </ul>
            </div>
          )}

          {/* CTA Section */}
          <div className="flex flex-col items-center w-full my-16 mt-32">
            <p className="text-lg text-dark dark:text-light mb-6 text-center">
              Want to read more technical content? Visit my Hashnode blog for in-depth articles on DevOps, development, and modern technologies.
            </p>
            <a
              href="https://zahoorfarooq.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-2xl font-semibold text-blue-600 dark:text-blue-400 hover:underline transition-colors"
            >
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#2962FF" />
                <path
                  d="M22.5 9.5L16 16L9.5 22.5"
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
