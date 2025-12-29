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
        longDescription:`
The **Visual Analytics** project collects multiple assignments developed during my Master's in **Software Development and Engineering (MSDE)**, with a strong focus on **data ingestion**, **cleaning**, **analysis**, and **visualization** using both Python ecosystems and big-data tools.

Each assignment explores a different aspect of visual analytics, progressively moving from exploratory data analysis to scalable data processing and interactive dashboards.

---

### Assignment 1: Data Exploration & Visualization with Python

This assignment focuses on exploratory data analysis using **Jupyter Notebooks** and Python libraries such as **Pandas**, **Matplotlib**, **Seaborn**, **GeoPandas**, and **Bokeh**.

Key activities included:
- Cleaning and transforming heterogeneous datasets (airports, countries, energy, routes, market values)
- Performing descriptive and comparative analyses
- Building static and geospatial visualizations to uncover patterns and trends

---

### Assignment 2: Visual Analytics with Elasticsearch & Kibana

This assignment introduces **search-driven analytics** using **Elasticsearch** and **Kibana** on a restaurant dataset.

Key components:
- Indexing CSV data into Elasticsearch
- Writing advanced queries and aggregations (filters, geospatial queries, bucket analysis)
- Creating interactive Kibana dashboards and Canvas visualizations
- Developing a **custom Elasticsearch ingest plugin** in Java to perform lookup-based text substitutions during document ingestion

This assignment demonstrates hands-on experience with **search engines**, **data pipelines**, and **custom plugin development**.

---

### Assignment 3: Big Data Processing with Polars & Apache Spark

The final assignment focuses on scalable data processing using **Polars** and **Apache Spark**.

Highlights include:
- Ingesting and cleaning large CSV datasets
- Efficient column-wise transformations
- Computing statistics and trends at scale
- Generating visual insights from processed data

---

### Group Project: Tech Jobs & Cost of Living Dashboard

As part of a group project, we built an **interactive dashboard** using **Pandas** and **Dash** to analyze the relationship between **tech job markets** and **cost of living** from 2015 to 2025.

The dashboard allows users to:
- Compare tech salaries against cost of living across cities
- Filter by region and job role
- Visually explore affordability and job density
`
,
        tech: [
        'Python',
        'Pandas',
        'Matplotlib',
        'Seaborn',
        'GeoPandas',
        'Bokeh',
        'Elasticsearch',
        'Kibana',
        'Apache Spark',
        'Polars',
        'Dash',
        'CSV',
        'Jupyter Notebook',
        ],
        image: visualImg,
        github: 'https://github.com/24luca24/visual-analytics',
    },
    {
        id: 'find-the-pitch',
        title: 'Find The Pitch',
        description:
        'Application to find and book sports pitches. Currently in development with upcoming features such as ranking, chat, and booking system.',
        longDescription:`
**Find The Pitch** is a full-stack application designed to simplify the discovery and booking of sports fields, including **beach volleyball**, **padel tennis**, and **football** pitches, across both **public and private venues**.

The project follows a **microservices architecture**, separating concerns between authentication, domain logic, and user experience to ensure scalability and maintainability.

### System Architecture

The backend is composed of two Spring Boot microservices:

- **Authentication Service**  
  Handles user registration, login, and authorization, providing secure access control across the platform.

- **Field Service**  
  Manages sports field data, including:
  - Field discovery and filtering
  - Availability management
  - Booking operations

The services communicate through REST APIs and are designed to be independently deployable.

### Frontend

The frontend is developed using **Flutter**, enabling a responsive and consistent user experience across platforms.  
It provides:
- Intuitive field search and filtering
- Field detail views
- Booking workflows integrated with backend services

### Infrastructure & DevOps

The application is containerized using **Docker** and designed with **Kubernetes** deployment in mind, allowing for scalable orchestration and service management.  
A **PostgreSQL** database is used to persist user, field, and booking data.

### Current Status & Future Features

The project is actively under development. Planned features include:
- Field ranking and reviews
- In-app chat between users and field owners
- Enhanced booking management and notifications
`,
        tech: ['Spring Boot', 'Flutter', 'PostgreSQL', 'Docker', 'Kubernetes'],
        image: findImg,
        github: 'https://github.com/24luca24/Find-The-Pitch',
    },
];
