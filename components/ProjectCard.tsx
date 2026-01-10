export type Project = {
    project_name: string;
    project_url: string;
    year: string;
    description: string;
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
                </a>
            </div>
            <p style={{ whiteSpace: "pre-line" }} className="project-description">{description}</p>
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
