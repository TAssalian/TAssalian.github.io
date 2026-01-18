import Link from "next/link";
import Introduction from "../../components/Introduction";
import { ProjectCard } from "../../components/ProjectCard";
import { ThemeToggle } from "../../components/ThemeToggle";
import { contactLinks } from "../../data/contact";
import { projects } from "../../data/project";

export default function ProjectsPage() {
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
    </div>
  );
}
