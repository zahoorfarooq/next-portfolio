import AnimatedText from "@/components/AnimatedText";
import FeaturedBlog from "@/components/FeaturedBlog";
import Blog from "@/components/Blog";
import TransitionEffect from "@/components/TransitionEffect";

async function getBlogs() {
  try {
    const res = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query {
            publication(host: "zahoorfarooq.hashnode.dev") {
              posts(first: 20) {
                edges {
                  node {
                    id
                    slug
                    title
                    coverImage { url }
                    brief
                    readTimeInMinutes
                    publishedAt
                  }
                }
              }
            }
          }
        `,
      }),
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json?.data?.publication?.posts?.edges || [];
  } catch {
    return [];
  }
}

export const metadata = {
  title: "Blogs | Zahoor Farooq",
  description: "Technical articles on DevOps, cloud infrastructure, and full-stack development.",
};

export default async function Blogs() {
  const blogs = await getBlogs();
  const featuredBlogs = blogs.slice(0, 2);
  const recentBlogs = blogs.slice(2);

  return (
    <>
      <TransitionEffect />
      <div className="w-full h-full inline-block z-0 bg-light dark:bg-dark pt-16 p-32 xl:p-24 lg:p-16 md:p-12 md:pt-16 sm:p-8">
        <main className="w-full flex flex-col items-center justify-center overflow-hidden text-dark dark:text-light">
          <AnimatedText
            text="Tech Blogs: Shaping Tomorrow with Words"
            className="mb-16 !text-center !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
          />

          {blogs.length === 0 ? (
            <div className="w-full text-center py-24 flex flex-col items-center gap-4">
              <p className="text-xl text-dark/50 dark:text-light/50">No blog posts found.</p>
              <a
                href="https://zahoorfarooq.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-primaryDark underline underline-offset-4 font-medium"
              >
                Visit Hashnode directly →
              </a>
            </div>
          ) : (
            <>
              {/* Featured — first 2 posts */}
              <ul className="w-full grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
                {featuredBlogs.map((blog) => (
                  <FeaturedBlog
                    key={blog.node.id}
                    thumbNailImg={blog.node.coverImage?.url || ""}
                    title={blog.node.title}
                    time={blog.node.readTimeInMinutes || 5}
                    summary={blog.node.brief || ""}
                    link={`https://zahoorfarooq.hashnode.dev/${blog.node.slug}`}
                  />
                ))}
              </ul>

              {/* Latest articles list */}
              {recentBlogs.length > 0 && (
                <div className="w-full mt-20">
                  <h2 className="text-3xl font-bold mb-6 text-dark dark:text-light">
                    Latest Articles
                  </h2>
                  <ul className="w-full">
                    {recentBlogs.map((blog) => (
                      <Blog
                        key={blog.node.id}
                        thumbNailImg={blog.node.coverImage?.url || ""}
                        title={blog.node.title}
                        date={blog.node.publishedAt}
                        link={`https://zahoorfarooq.hashnode.dev/${blog.node.slug}`}
                      />
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          {/* Footer CTA */}
          <div className="mt-24 mb-8 text-center">
            <a
              href="https://zahoorfarooq.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg font-semibold text-primary dark:text-primaryDark hover:underline underline-offset-4 transition-colors"
            >
              View all articles on Hashnode
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
