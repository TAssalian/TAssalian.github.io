export type Experience = {
    company_name: string;
    company_url: string;
    title: string;
    year: string;
    location: string;
    description: string;
}
type ExperienceProps = {
    experience: Experience;
}

export function ExperienceCard({experience} : ExperienceProps) {
    const {
        company_name,
        company_url,
        title,
        location,
        description
    } = experience;
    
    return (
        <div className="experience">
            <h3 className="experience-title">{title}</h3>
            <div className="experience-company">
                <a href={company_url} target="_blank" rel="noreferrer">
                    {company_name}
                </a>
            </div>
            <p className="experience-location">{location}</p>
            <p className="experience-description">{description}</p>
        </div>
    )
}