export interface ContactInfo {
  name: string;
  phone: string;
  email: string;
  linkedin: string;
  resumeUrl: string;
  tagline: string;
}

export interface FocusArea {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectDetail {
  title: string;
  status?: string;
  problem: string;
  method: string;
  outcome: string;
  tools: string[];
  featured?: boolean;
}

export interface SkillGroup {
  domain: string;
  items: string[];
}

export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
}

export interface CredentialEntry {
  title: string;
  issuer?: string;
  period?: string;
}

export interface PublicationEntry {
  title: string;
  detail: string;
}

export interface UhiRecord {
  year: number;
  city: 'Delhi' | 'Chennai' | 'Bangalore' | 'Jaipur';
  lstAnomaly: number;
}
