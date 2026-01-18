import Introduction from "../components/Introduction";
import Link from "next/link";
import { contactLinks } from "../data/contact";
import { ThemeToggle } from "../components/ThemeToggle";

export default function Home() {
  return (
    <div className="home" id="top">
      <Introduction contacts={contactLinks} showDetails />

      <div className="footer-actions">
        <div className="about-this-website-link">
          <Link className="underline" href="/about">
            about this website
          </Link>
        </div>
        <ThemeToggle />
      </div>
      
      <div className="toggle-dark-light-mode"></div>
    </div>
  );
}
