import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Contact Zahoor Farooq | Get in Touch",
  description: "Reach out to Zahoor Farooq for collaboration, project inquiries, or just to say hello. Fill out the contact form or find social media links.",
  keywords: ["contact", "get in touch", "collaboration", "inquiry", "email"],
  openGraph: {
    title: "Contact Zahoor Farooq",
    description: "Connect with DevOps Engineer and Full Stack Developer",
    type: "website",
  },
};

export default function ContactPageLayout({ children }) {
  return (
    <section>
      {children}
      <Toaster />
    </section>
  );
}
