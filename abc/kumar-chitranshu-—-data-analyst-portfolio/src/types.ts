export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tags: string[];
  description: string;
  githubUrl: string;
  type: 'dashboard' | 'pipeline' | 'basket';
  fullOverview?: string;
  keyMetrics?: { label: string; value: string }[];
  techStack?: string[];
  codeSnippet?: string;
}

export interface CredentialItem {
  title: string;
  issuerOrField: string;
  year?: string;
  link?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  location?: string;
}
