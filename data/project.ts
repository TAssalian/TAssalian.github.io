import type { Project } from "../components/ProjectCard";

export const projects: Project[] = [
    {
        project_name: "Neurograb - UKG Hackathon",
        project_url: "null",
        year: "2025",
        description: "Designed a containerized full-stack application for an Agentic RAG service using LangChain. \n Reduced response time by up to 23x and saved UKG $200k annually by implementing Redis' semantic caching.",
        tools: ["Python", "LangChain", "MongoDB", "Docker", "Redis", "Google Gemini", "CSS"],
    },
    {
        project_name: "TalentBase",
        project_url: "null2",
        year: "2024",
        description: "Full-stack web application using AWS tools and hosting, Spring Boot and React.",
        tools: ["AWS", "Java", "Spring Boot", "React", "Docker", "PostgreSQL"],
    },
]