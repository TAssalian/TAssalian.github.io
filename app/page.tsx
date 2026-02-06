import Introduction from "../components/Introduction";
import Link from "next/link";
import { contactLinks } from "../data/contact";
import { ThemeToggle } from "../components/ThemeToggle";

export default function Home() {
  return (
    <div className="home" id="top">
      {/* Layout Updated */}
      <Introduction contacts={contactLinks} />

      <div className="intro-details">
        <h2 className="section-title">Home</h2>
        <div className="description">
          <p>🌱 I'm a 3rd-year Computer Science student at Concordia University with 2+ years of experience spanning across software engineering and AI. I'm especially passionate about backend engineering, web applications, and building LLM-based systems.</p>
          <p>Previously, I interned at UKG, where I developed AI agent and RAG-powered web applications, and at Alstom, where I built Python data pipelines to extract, transform, and deliver insights through dashboards.</p>
          <p>I'm currently looking to deepen my backend engineering experience and to continue exploring new areas of software development. </p>
          <p>📥 If you would like to reach out, feel free to contact me via LinkedIn or email tom.assalian@gmail.com.</p>
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
