import type { Contact } from "../data/contact";
import { RxEnvelopeClosed } from "react-icons/rx";
import { GoDownload } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type ContactProps = {
  contact: Contact;
};

export function ContactButton({contact} : ContactProps) {
  const {
    href,
    label,
    kind,
    download
  } = contact;
  
  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  const target = isExternal ? "_blank" : undefined;
  const rel = isExternal ? "noreferrer" : undefined;
  const isResume = kind === "resume";

  const icon = (() => {
    if (kind === "linkedin") {
      return (
        <FaLinkedin aria-hidden="true" className="theme-icon" />
      );
    }

    if (kind === "github") {
      return (
        <FaGithub aria-hidden="true" className="theme-icon" />
      );
    }

    return <RxEnvelopeClosed />
  
  })();

  return (
    <a
      className={`contact-button ${
        isResume ? "contact-button--resume" : `contact-button--${kind} contact-button--icon`
      }`}
      href={href}
      target={target}
      rel={rel}
      download={download}
      aria-label={label}
    >
      {isResume ? (
        <>
          <span className="contact-label">Resume</span>
          <span className="contact-icon" aria-hidden="true">
          <GoDownload />
          </span>
        </>
      ) : (
        <span className="contact-icon" aria-hidden="true">
          {icon}
        </span>
      )}
    </a>
  );
}
