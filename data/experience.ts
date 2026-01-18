import type { Experience } from "../components/ExperienceCard";

export const experiences: Experience[] = [
    {
        company_name: "UKG",
        company_url: "https://www.ukg.com",
        logo_src: "/UKG.png",
        title: "AI Software Developer Intern",
        year: "2025",
        location: "Montreal, QC, Canada",
        description: [
            "Developed a scalable agentic RAG application, achieving 23× faster response times and $200,000 annual compute savings by \
            optimizing retrieval pipelines, caching strategies, and model orchestration.",
            "Engineered advanced Retrieval-Augmented Generation (RAG) pipelines in Python by using LangChain \
            and Google Vertex AI, improving document query relevance by 52%.",
            "Automated ingestion of 10,000+ internal files on Google Cloud Platform by chunking and embedding into\
            MongoDB with MySQL-backed metadata, streamlining RAG document retrieval.",
            "Built and deployed 15+ task-specific Agents in Python by using LangGraph and LangChain, orchestrating\
            REST APIs and internal tools via FastAPI to enable dynamic, goal-driven workflows.",
            "Refactored the AI agent SDK API for end-to-end async execution of agent tool calls; built a custom async\
            HTTP client for REST APIs, improving tool execution speed by up to 40%.",
            "Boosted test coverage to 98%+ by implementing unit and integration tests across AI agent and RAG services.",
            "Applied Object-Oriented Programming to RAG and Agent architectures, enabling scalable orchestration,\
            cleaner API integration, and more maintainable code.",
            "Containerized all services with Docker and deployed across Kubernetes clusters, achieving 99.9% up time.",
            "Tested and documented RESTful APIs using Postman and Swagger to validate proper functionality."
        ],
    },
    {
        company_name: "Alstom",
        company_url: "https://www.alstom.com",
        logo_src: "/Alstom.png",
        title: "Data Engineer Intern",
        year: "2024",
        location: "Montreal, QC, Canada",
        description: [
            "Engineered Python ETL pipelines (Pandas/NumPy) to extract, clean, and structure operational datasets\
            powering Tableau dashboards, improving efficiency by 80.2% and reducing manual reporting work by 95%.",
            "Delivered 100% data accuracy for 30+ stakeholders by building automated validation + reconciliation scripts and\
            partnering with business analysts to ensure reliable, decision-ready reporting."
        ],
    },
    {
        company_name: "TELUS Digital",
        company_url: "https://www.telusdigital.com",
        logo_src: "/Telus.png",
        title: "Data Analyst",
        year: "2024",
        location: "Remote",
        description: [
            "Verified datasets used in ML workflows, ensuring 100% compliance with AI project standards for accuracy and relevance",
            "Improved data quality by 20% by automating integrity checks and standardizing labeling + validation processes across multiple projects."
        ],
    }
]
