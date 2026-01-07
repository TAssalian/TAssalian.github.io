import type { Project } from "../components/ProjectCard";

export const projects: Project[] = [
    {
        project_name: "Agentic RAG service",
        project_url: "null",
        year: "2025",
        description: "Designed a containerized full-stack application for an Agentic RAG web application. \n Reduced response time by up to 23x and saved UKG $200k annually by implementing Redis' semantic caching.",
        tools: ["Python", "LangChain", "MongoDB", "Docker", "Redis", "Google Gemini", "CSS"],
    },
    {
        project_name: "Scheduling Assistant",
        project_url: "https://github.com/TAssalian/scheduling-assistant",
        year: "2024",
        description: "An AI agent web application that allows for event creation inside of Google Calendar using natural speech",
        tools: ["React", "Google Gemini", "Web Speech", "Google Calendar"],
    },
    {
        project_name: "TalentBase",
        project_url: "null2",
        year: "2024",
        description: "A full-stack web application using AWS tools and hosting, Spring Boot and React.",
        tools: ["AWS", "Java", "Spring Boot", "React", "Docker", "PostgreSQL"],
    },
]