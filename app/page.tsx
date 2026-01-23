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
          <h3>🌱 I'm a 3rd-year Computer Science student at Concordia University with 2+ years of experience spanning across software engineering and AI. I'm especially passionate about backend engineering, web applications, and building LLM-based systems.</h3>  
          <br/>
          <h3>Previously, I interned at UKG, where I developed AI agent and RAG-powered web applications, and at Alstom, where I built Python data pipelines to extract, transform, and deliver insights through dashboards.</h3>
          <br/>
          <h3>I'm currently looking to deepen my backend engineering experience while continuing to explore new areas of software development. </h3>
          <br/>
          <h3>📥 If you would like to reach out, feel free to contact me via LinkedIn or email tom.assalian@gmail.com.</h3>
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
