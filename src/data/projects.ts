import aiAgentImg from '../assets/ai-agent.png'
import visualImg from '../assets/visual.png'
import sofAnaImg from '../assets/sof-ana.png'
import findImg from '../assets/find-the-pitch.png'

export type Project = {
    id: string
    title: string
    description: string;
    longDescription: string;
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
        longDescription: "",
        tech: ['Python', 'LangChain', 'LangGraph', 'RAG', 'VectorDB', 'Embeddings Model'],
        image: aiAgentImg,
    },
    {
        id: 'software-analysis',
        title: 'Software Analysis',
        description:
            'Formal methods project demonstrating algorithm verification, static analysis, and concurrent system modeling using industry-standard tools.',
        longDescription: `This project collects the work developed during the **Software Analysis** course, focusing on **formal verification**, **static analysis**, and **concurrency model checking** through three hands-on assignments using industry-standard tools.

---

### **Algorithm Verification (Dafny)**
Applied formal specifications to classic algorithms such as **Selection Sort**, **Quicksort**, and **Mergesort**, verifying properties like **correctness**, **permutation**, and **ordering** through mathematical proofs.

---

### **Static Bug Detection (Infer)**
Used **Facebook’s Infer** to analyze a real software project, identifying bugs such as **resource leaks** and **null pointer issues**. The project was refactored based on Infer’s reports to improve **reliability** and **code quality**.

---

### **Concurrency Model Checking (Spin)**
Built and verified **Promela models** simulating concurrent worker systems. Defined and checked **safety** and **liveness properties** using **Linear Temporal Logic (LTL)**, analyzing counterexamples to understand and resolve concurrency issues.

---

Overall, this project demonstrates how **formal methods** and **automated analysis tools** can be effectively used to verify correctness, detect bugs early, and reason about **concurrent systems**.
`,
        tech: ['Dafny', 'Infer', 'Spin'],
        image: sofAnaImg,
        github: 'https://github.com/24luca24/software-analysis',
    },
    {
        id: 'visual-analytics',
        title: 'Visual Analytics',
        description:
        'Visual analytics assignments covering data exploration with Python, Elasticsearch/Kibana dashboards, and big data processing with Spark.',
        longDescription: "",
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
        longDescription: "",
        tech: ['Spring Boot', 'Flutter', 'PostgreSQL', 'Docker', 'Kubernetes'],
        image: findImg,
        github: 'https://github.com/24luca24/Find-The-Pitch',
    },
];
