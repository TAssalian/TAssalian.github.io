import Link from "next/link";
import Introduction from "../../components/Introduction";
import { ExperienceCard } from "../../components/ExperienceCard";
import { ThemeToggle } from "../../components/ThemeToggle";
import { contactLinks } from "../../data/contact";
import { experiences } from "../../data/experience";

export default function WorkPage() {
  const experiencesByYear = new Map<string, typeof experiences>();
  experiences.forEach((experience) => {
    const yearGroup = experiencesByYear.get(experience.year);
    if (yearGroup) {
      yearGroup.push(experience);
    } else {
      experiencesByYear.set(experience.year, [experience]);
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
            {items.map((experience) => (
              <div className="year-row" key={`${year}-${experience.company_name}`}>
                <div className="year-item">
                  <ExperienceCard experience={experience} />
                </div>
              </div>
            ))}
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
