import type { ReactNode } from "react";

export type Contact = {
  label: string;
  href: string;
  icon: ReactNode;
  download?: boolean | string;
};

export const contactLinks: Contact[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/thomasassalian", icon: "LI" },
  { label: "GitHub", href: "https://github.com/TAssalian", icon: "GH" },
  { label: "Email", href: "mailto:tom.assalian@gmail.com", icon: "@" },
  { label: "Resume", href: "/resume.pdf", icon: "CV", download: "Thomas-Assalian-Resume.pdf" },
];
