import type { Contact } from "../data/contact";

type ContactProps = {
  contact: Contact;
};

export function ContactButton({contact} : ContactProps) {
  const {
    href,
    label,
    icon,
    download
  } = contact;
  
  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  const target = isExternal ? "_blank" : undefined;
  const rel = isExternal ? "noreferrer" : undefined;

  return (
    <a
      className="contact-button"
      href={href}
      target={target}
      rel={rel}
      download={download}
    >
      <span className="contact-icon" aria-hidden="true">
        {icon}
      </span>
    </a>
  );
}
