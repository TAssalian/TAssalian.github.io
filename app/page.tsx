import Introduction from "../components/Introduction";
import { ExperienceCard } from "../components/ExperienceCard";
import { experiences } from "../data/experience";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/project";
import Link from "next/link";
import { ContactButton } from "../components/ContactButton";
import { contactLinks } from "../data/contact";
import { NavBar } from "../components/NavBar";

export default function Home() {
  return (
    <div className="home" id="top">
      <Introduction />

      <div className="contact-information">
        {contactLinks.map((contact) => (
          <ContactButton key={contact.label} contact={contact} />
        ))}
      </div>

      <div className="experiences" id="experiences">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.company_name} experience={experience} />
        ))}
      </div>

      <div className="projects" id="projects">
        {projects.map((project) => (
          <ProjectCard key={project.project_url} project={project} />
        ))}        
      </div>

      <div className="about-this-website-link">
        <Link className="underline" href="/about">
          about this website
        </Link>
      </div>

      <NavBar />
      
      <div className="toggle-dark-light-mode"></div>
    </div>
  );
}
