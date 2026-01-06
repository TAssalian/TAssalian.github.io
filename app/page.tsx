import Introduction from "../components/Introduction";
import { ExperienceCard } from "../components/ExperienceCard";
import { experiences } from "../data/experience";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/project";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <Introduction />

      <div className="social-media">

      </div>

      <div className="experiences">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.company_name} experience={experience} />
        ))}
      </div>

      <div className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.project_url} project={project} />
        ))}        
      </div>

      <div className="about-this-website-link">
        <Link className="underline" href="/about">
          about this website
        </Link>
      </div>

      <div className="nav-bar"></div>

      <div className="toggle-dark-light-mode"></div>
    </div>
  );
}
