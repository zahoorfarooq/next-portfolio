import AnimatedText from "@/components/AnimatedText";
import FeaturedBlog from "@/components/FeaturedBlog";
import Blog from "@/components/Blog";
import TransitionEffect from "@/components/TransitionEffect";

function parseRSS(xml) {
  const blogs = [];
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)];

  for (const match of items) {
    const item = match[1];

    const extract = (tag) => {
      const cdata = item.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`));
      if (cdata) return cdata[1].trim();
      const plain = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
      return plain ? plain[1].trim() : "";
    };

    const title = extract("title");
    const link = extract("link") || item.match(/<link>(.*?)<\/link>/)?.[1]?.trim() || "";
    const pubDate = extract("pubDate");
    const description = extract("description") || extract("content:encoded") || "";

    // Cover image: try <media:content>, <enclosure>, then first <img> in description
    const mediaSrc =
      item.match(/<media:content[^>]+url="([^"]+)"/)?.[1] ||
      item.match(/<enclosure[^>]+url="([^"]+)"/)?.[1] ||
      description.match(/src="(https?:\/\/cdn\.hashnode\.com[^"]+)"/)?.[1] ||
      description.match(/src="(https?:\/\/[^"]+\.(?:jpg|jpeg|png|webp|gif)[^"]*)"/i)?.[1] ||
      "";

    const plainText = description.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    const brief = plainText.slice(0, 220).trimEnd() + (plainText.length > 220 ? "…" : "");
    const readTimeInMinutes = Math.max(1, Math.round(plainText.split(/\s+/).length / 200));
    const slug = link.split("/").filter(Boolean).pop() || "";

    if (title && link) {
      blogs.push({
        node: {
          id: slug,
          slug,
          title,
          url: link,
          coverImage: mediaSrc ? { url: mediaSrc } : null,
          brief,
          readTimeInMinutes,
          publishedAt: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
        },
      });
    }
  }

  return blogs;
}

async function getBlogs() {
  try {
    const res = await fetch("https://zahoorfarooq.hashnode.dev/rss.xml", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Accept: "application/rss+xml, application/xml, text/xml, */*",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error(`RSS returned ${res.status}`);
    const xml = await res.text();
    return parseRSS(xml);
  } catch (err) {
    console.error("[blogs] RSS fetch failed:", err.message);
    return [];
  }
}

export const metadata = {
  title: "Blogs | Zahoor Farooq",
  description:
    "Technical articles on DevOps, cloud infrastructure, and full-stack development.",
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
              <p className="text-xl text-dark/50 dark:text-light/50">
                Couldn&apos;t load blogs right now.
              </p>
              <a
                href="https://zahoorfarooq.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-primaryDark underline underline-offset-4 font-medium"
              >
                Read articles on Hashnode →
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
                    time={blog.node.readTimeInMinutes}
                    summary={blog.node.brief}
                    link={blog.node.url}
                  />
                ))}
              </ul>

              {/* Remaining posts */}
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
                        link={blog.node.url}
                      />
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          <div className="mt-24 mb-8 text-center">
            <a
              href="https://zahoorfarooq.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg font-semibold text-primary dark:text-primaryDark hover:underline underline-offset-4 transition-colors"
            >
              View all articles on Hashnode
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
