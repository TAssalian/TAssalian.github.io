import Introduction from "../components/Introduction";
import Link from "next/link";
import { contactLinks } from "../data/contact";
import { ThemeToggle } from "../components/ThemeToggle";

export default function Home() {
  return (
    <div className="home" id="top">
      <Introduction contacts={contactLinks} />

      <div className="intro-details">
        <h2 className="section-title">Home</h2>
        <div className="description">
          <h3>I'm a software engineering student with 3+ years of experience across coding, software engineering, and artificial intelligence. I have a passion for backend engineering, LLM-based systems, mathematics, theoretical computer science, and lifelong learning. I have previous experience at UKG, Alstom and TELUS.</h3>
          <br></br>
          <h3>If you would like to reach out, feel free to contact me via any of my contact information above.</h3>
        </div>
        <div className="intro-image-grid">
          <img
            className="intro-image"
            src="/image-1.JPG"
            alt="Photo 1"
          />
          <img
            className="intro-image"
            src="/image-2.jpeg"
            alt="Photo 2"
          />
        </div>
      </div>

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
