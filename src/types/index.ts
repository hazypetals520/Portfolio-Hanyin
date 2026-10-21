export interface EducationItem {
  id: string;
  institution: string;
  level: string;
  major?: string;
  period?: string;
  description?: string;
}

export interface AchievementItem {
  id: string;
  badge: string;
  title: string;
  competition: string;
  certificateUrl: string;
  description?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  partner?: string;
  period: string;
  badge?: string;
  logo?: string;
  overview: string;
  keyLearnings: {
    title: string;
    description: string;
  }[];
  tags: string[];
}

export interface SkillItem {
  name: string;
  percentage: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'ui-ux' | 'programming';
  categoryLabel: string;
  tagline: string;
  overview: string;
  problemStatement: string;
  solution: string;
  myRole: string;
  tools: string[];
  thumbnail: string;
  projectUrl?: string;
  figmaUrl?: string;
  githubUrl?: string;
  year: string;
  deliverables?: string[];
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  iconName?: string;
}
