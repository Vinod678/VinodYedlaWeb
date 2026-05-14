/**
 * Application type definitions and interfaces
 */

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface EducationType {
  level: string;
  school: string;
  field: string;
  year: string;
  details?: string;
}

export interface ExperienceType {
  title: string;
  company: string;
  duration: string;
  description: string;
  highlights?: string[];
}

export interface SkillType {
  category: string;
  skills: string[];
}
