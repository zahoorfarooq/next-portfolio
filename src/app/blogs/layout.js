export const metadata = {
  title: "Tech Blogs | Zahoor Farooq - DevOps & Development Insights",
  description: "Read technical blog posts by Zahoor Farooq on DevOps, Docker, Kubernetes, AWS, Node.js, React, and modern software engineering practices.",
  keywords: ["blog", "tech articles", "DevOps", "Docker", "Kubernetes", "AWS", "Node.js", "React"],
  openGraph: {
    title: "Zahoor Farooq's Tech Blog",
    description: "Insights and knowledge sharing on DevOps and development",
    type: "website",
  },
};

export default function BlogsPageLayout({ children }) {
  return <section>{children}</section>;
}
