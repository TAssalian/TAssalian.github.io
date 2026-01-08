import Introduction from "../components/Introduction";
import { ExperienceCard } from "../components/ExperienceCard";
import { experiences } from "../data/experience";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/project";
import Link from "next/link";
import { contactLinks } from "../data/contact";
import { NavBar } from "../components/NavBar";
import { ThemeToggle } from "../components/ThemeToggle";

export default function Home() {
  const experiencesByYear = new Map<string, typeof experiences>();
  experiences.forEach((experience) => {
    const yearGroup = experiencesByYear.get(experience.year);
    if (yearGroup) {
      yearGroup.push(experience);
    } else {
      experiencesByYear.set(experience.year, [experience]);
    }
  });

  const projectsByYear = new Map<string, typeof projects>();
  projects.forEach((project) => {
    const yearGroup = projectsByYear.get(project.year);
    if (yearGroup) {
      yearGroup.push(project);
    } else {
      projectsByYear.set(project.year, [project]);
    }
  });

  return (
    <div className="home" id="top">
      <Introduction contacts={contactLinks} />

      <div className="experiences" id="experiences">
        <h2 className="section-title">Work</h2>
        {Array.from(experiencesByYear.entries()).map(([year, items]) => (
          <div className="year-group" key={`experience-${year}`}>
            <div className="year-label">{year}</div>
              <div className="year-items">
                  {items.map((experience) => (
                  <ExperienceCard key={experience.company_name} experience={experience} />
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="projects" id="projects">
        <h2 className="section-title">Projects</h2>
        {Array.from(projectsByYear.entries()).map(([year, items]) => (
          <div className="year-group" key={`project-${year}`}>
            <div className="year-label">{year}</div>
              <div className="year-items">              
                {items.map((project) => (
                  <ProjectCard key={project.project_url} project={project} />
                ))}
            </div>
          </div>
        ))}        
      </div>

      <div className="footer-actions">
        <div className="about-this-website-link">
          <Link className="underline" href="/about">
            about this website
          </Link>
        </div>
        <ThemeToggle />
      </div>

      <NavBar />
      
      <div className="toggle-dark-light-mode"></div>
    </div>
  );
}
