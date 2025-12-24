import { Code2, Database } from "lucide-react";

export type Skill = {
    name: string;
    startDate: string;
    color: string;
    icon: React.ElementType;
    projects: number;
}

export const skills: Skill[] = [
    { 
      name: 'Java', 
      startDate: '2021-09-20', 
      color: '#f89820',
      icon: Code2,
      projects: 6 
    },
    { 
      name: 'SQL', 
      startDate: '2021-09-20', 
      color: '#00758f',
      icon: Database,
      projects: 2
    },
    { 
      name: 'Python', 
      startDate: '2024-09-16', 
      color: '#3776ab',
      icon: Code2,
      projects: 5
    },
    { 
      name: 'Typescript & React', 
      startDate: '2025-09-01', 
      color: '#61dafb',
      icon: Code2,
      projects: 1
    },
];
