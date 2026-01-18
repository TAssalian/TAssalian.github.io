export type Project = {
    project_name: string;
    project_url: string;
    year: string;
    description: string[];
    tools: string[];
}
type ProjectProps = {
    project: Project;
}

export function ProjectCard({project} : ProjectProps) {
    const {
        project_name,
        project_url,
        description,
        tools
    } = project;
    
    return (
        <div className="project">
            <div className="project-name">
                <a href={project_url} target="_blank" rel="noreferrer">
                    {project_name}
                    <span className="project-external" aria-hidden="true">
                        <svg viewBox="0 0 24 24" role="img" focusable="false">
                            <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                            <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z" />
                        </svg>
                    </span>
                </a>
            </div>
            <ul className="project-description">
                {description.map((item, index) => (
                    <li key={`${project_name}-desc-${index}`}>{item}</li>
                ))}
            </ul>
            <div className="project-tools">
                {tools.map((tool) => (
                    <span className="project-tool" key={`${project_name}-${tool}`}>
                        {tool}
                    </span>
                ))}
            </div>
        </div>
    )
}
