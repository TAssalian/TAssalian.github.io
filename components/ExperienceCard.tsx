export type Experience = {
    company_name: string;
    company_url: string;
    logo_src?: string;
    title: string;
    year: string;
    location: string;
    description: string[];
}
type ExperienceProps = {
    experience: Experience;
}

export function ExperienceCard({experience} : ExperienceProps) {
    const {
        company_name,
        title,
        location,
        description
    } = experience;
    
    return (
        <div className="experience">
            <h3 className="experience-title">{title}</h3>
            <div className="experience-company">
                <a href={experience.company_url} target="_blank" rel="noreferrer">
                    {company_name}
                    <span className="project-external" aria-hidden="true">
                        <svg viewBox="0 0 24 24" role="img" focusable="false">
                            <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                            <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z" />
                        </svg>
                    </span>
                </a>
            </div>
            <p className="experience-location">{location}</p>
            <ul className="experience-description">
                {description.map((item, index) => (
                    <li key={`${company_name}-${title}-desc-${index}`}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
