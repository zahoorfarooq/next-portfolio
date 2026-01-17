export const metadata = {
  title: "Projects | Zahoor Farooq - DevOps & Full Stack Portfolio",
  description: "Explore Zahoor Farooq's portfolio of projects including real-time applications, video streaming platforms, social networks, and AI-powered tools built with modern tech stacks.",
  keywords: ["projects", "portfolio", "DevOps", "MERN", "React", "Node.js", "GitHub"],
  openGraph: {
    title: "Zahoor Farooq's Projects",
    description: "Featured and recent projects showcasing full-stack and DevOps expertise",
    type: "website",
  },
};

export default function ProjectsPageLayout({ children }) {
  return (
    <section>
      {children}
    </section>
  );
}