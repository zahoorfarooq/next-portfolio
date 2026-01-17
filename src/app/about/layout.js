export const metadata = {
  title: "About Zahoor Farooq | DevOps Engineer & Full Stack Developer",
  description: "Learn about Zahoor Farooq's professional journey, skills, experience, and education. A passionate DevOps Engineer with expertise in cloud technologies and full-stack development.",
  keywords: ["zahoorfarooq", "DevOps Engineer", "Full Stack Developer", "experience", "skills", "education"],
  openGraph: {
    title: "About Zahoor Farooq",
    description: "Professional profile and expertise",
    type: "profile",
  },
};

export default function AboutPageLayout({ children }) {
  return (
    <section>
      {children}
    </section>
  );
}
