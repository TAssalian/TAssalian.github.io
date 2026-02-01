export type Contact = {
  label: string;
  href: string;
  kind: "linkedin" | "github" | "email" | "resume";
  download?: boolean | string;
};

export const contactLinks: Contact[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/thomasassalian", kind: "linkedin" },
  { label: "GitHub", href: "https://github.com/TAssalian", kind: "github" },
  { label: "Email", href: "mailto:tom.assalian@gmail.com", kind: "email" },
  { label: "Resume", href: "/Thomas_Assalian_CV.pdf", kind: "resume" },
];
