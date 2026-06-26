/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  category: string;
}

export interface Skill {
  name: string;
  category: 'Programming' | 'Frontend' | 'Database' | 'AI & Data Science' | 'Version Control';
  level: number; // 0 to 100 for visual indicator
  iconName: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
  tech: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  grade?: string;
  details: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export interface GithubRepo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
}
