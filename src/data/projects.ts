import aiAgentImg from '../assets/ai-agent.png'
import visualImg from '../assets/visual.png'
import sofAnaImg from '../assets/sof-ana.png'
import findImg from '../assets/find-the-pitch.png'

export type Project = {
    id: string
    title: string
    description: string;
    tech: string[];
    image: string;
    github?: string;
}

export const projects: Project[] = [
    {
        id: 'ai-agent',
        title: 'AI Agent System',
        description:
        'Autonomous agent system for complex task execution as part of my MSc thesis.',
        tech: ['Python', 'LangChain', 'LangGraph', 'RAG', 'VectorDB', 'Embeddings Model'],
        image: aiAgentImg,
    },
    {
        id: 'software-analysis',
        title: 'Software Analysis',
        description:
        'Formal methods project demonstrating algorithm verification, static analysis, and concurrent system modeling using industry-standard tools.',
        tech: ['Dafny', 'Infer', 'Spin'],
        image: sofAnaImg,
        github: 'https://github.com/24luca24/software-analysis',
    },
    {
        id: 'visual-analytics',
        title: 'Visual Analytics',
        description:
        'Visual analytics assignments covering data exploration with Python, Elasticsearch/Kibana dashboards, and big data processing with Spark.',
        tech: [
        'Python',
        'Pandas',
        'Matplotlib',
        'Seaborn',
        'GeoPandas',
        'Bokeh',
        ],
        image: visualImg,
        github: 'https://github.com/24luca24/visual-analytics',
    },
    {
        id: 'find-the-pitch',
        title: 'Find The Pitch',
        description:
        'Application to find and book sports pitches. Currently in development with upcoming features such as ranking, chat, and booking system.',
        tech: ['Spring Boot', 'Flutter', 'PostgreSQL', 'Docker', 'Kubernetes'],
        image: findImg,
        github: 'https://github.com/24luca24/Find-The-Pitch',
    },
];
