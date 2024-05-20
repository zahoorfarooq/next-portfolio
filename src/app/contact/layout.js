import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Zahoor farooq | Contact",
  description: "Portfolio Website",
  keywords: ["zahoor farooq", "zahoor", "farooq"],
};

export default function ContactPageLayout({ children }) {
  return (
    <section>
      {children}
      <Toaster />
    </section>
  );
}
