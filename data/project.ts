import type { Project } from "../components/ProjectCard";

export const projects: Project[] = [
    {
        project_name: "Compiler (In Progress)",
        project_url: "https://github.com/TAssalian/compiler",
        year: "2025",
        project_image: "/project-images/ast.png",
        description: [
            "Currently contains the compiler front-end only (a lexer + token generation system) for a custom language, \
            producing standardized token streams for parsing.",
            "Includes validation rules + error reporting for malformed lexemes, reserved word misuse, and invalid identifiers."
        ],
        tools: ["Python", "Theoretical Computer Science"],
    },
    {
        project_name: "Wooly - ConUHacks",
        project_url: "https://github.com/leticiahuang/wooly",
        year: "2025",
        project_image: "/project-images/excellent.png",
        description: [
            "Built a Chrome extension that parses e-commerce product pages to extract fabric composition and \
            compute a transparent quality score, helping users evaluate material value at the point of purchase.",
            "Implemented a weighted scoring engine, cross-site DOM scraping with content/background scripts, an AI chatbot, and an \
            interactive UI with real-time sync and fabric insights."
        ],
        tools: ["JavaScipt", "OpenAI", "HTML/CSS", "Web Scraping", "Backend API"],
    },
    {
        project_name: "Agentic RAG - UKG Hackathon",
        project_url: "null",
        year: "2025",
        project_image: "/project-images/agentic_rag.png",
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
        project_image: "/project-images/calendar.png",
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
        project_image: "/project-images/employees.png",
        description: [
            "Developed a full-stack system enabling secure file uploads for 1,000+ employee profiles, reducing upload failures\
            by 90% using S3-backed storage + metadata persistence.",
            "Implemented local + cloud storage support with AWS SDK, containerized deployment, and IAM access."
        ],
        tools: ["AWS", "Java", "Spring Boot", "React", "Docker", "PostgreSQL"],
    },
]
