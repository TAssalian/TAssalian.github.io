import type { Project } from "../components/ProjectCard";

export const projects: Project[] = [
    {
        project_name: "Compiler from Scratch (In Progress)",
        project_url: "https://github.com/TAssalian/compiler",
        year: "2025",
        description: [
            "Currently contains the compiler front-end only (a lexer + token generation system) for a custom language, \
            producing standardized token streams for parsing.",
            "Includes validation rules + error reporting for malformed lexemes, reserved word misuse, and invalid identifiers."
        ],
        tools: ["Python", "Theoretical Computer Science"],
    },
    {
        project_name: "Agentic RAG (UKG Hackathon)",
        project_url: "null",
        year: "2025",
        description: [
            "Built a containerized agentic RAG service with agent orchestration, concurrent multi-tool execution, semantic\
            caching, and MongoDB vector search.",
            "Improved end-to-end latency by 45% and retrieval relevance by 30% via caching + pipeline optimization."
        ],
        tools: ["Python", "LangChain", "MongoDB", "Docker", "Redis", "Google Gemini", "CSS"],
    },
    {
        project_name: "AI Scheduling Assistant",
        project_url: "https://github.com/TAssalian/scheduling-assistant",
        year: "2024",
        description: [
            "Developed a React, AI agent web application that integrates Google Calendar with natural speech commands\
            powered by Google Gemini and Web Speech API, reducing event management time by 62%",
            "Implemented a back-end pipeline to process user requests via Google Gemini API, outputting structured JSON\
            to Google Calendar"
        ],
        tools: ["React", "Google Gemini", "Supabase Auth", "Web Speech", "Google Calendar"],
    },
    {
        project_name: "Employee Management System",
        project_url: "null2",
        year: "2024",
        description: [
            "Developed a full-stack system enabling secure file uploads for 1,000+ employee profiles, reducing upload failures\
            by 90% using S3-backed storage + metadata persistence.",
            "Implemented local + cloud storage support with AWS SDK, containerized deployment, and IAM access."
        ],
        tools: ["AWS", "Java", "Spring Boot", "React", "Docker", "PostgreSQL"],
    },
]
