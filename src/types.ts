export type Language = 'es' | 'pt' | 'en';

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: number;
  type: 'journal' | 'book_chapter' | 'conference' | 'report' | 'working_paper';
  journalOrBook?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  handleConicet?: string;
  pdfUrl?: string;
  abstract: {
    es: string;
    pt: string;
    en: string;
  };
  keywords: string[];
  peerReviewed: boolean;
  openAccess: boolean;
  citationsCount?: number;
}

export interface ResearchLine {
  id: string;
  title: {
    es: string;
    pt: string;
    en: string;
  };
  description: {
    es: string;
    pt: string;
    en: string;
  };
  period: string;
  fundingBody: string;
  status: 'active' | 'completed';
  tags: string[];
}

export interface EducationItem {
  degree: {
    es: string;
    pt: string;
    en: string;
  };
  institution: string;
  location: string;
  year: string;
  thesisTitle?: string;
  advisor?: string;
}

export interface AcademicPosition {
  title: {
    es: string;
    pt: string;
    en: string;
  };
  institution: string;
  department: string;
  period: string;
  type: 'research' | 'teaching' | 'fellowship';
}

export interface TeachingCourse {
  courseName: {
    es: string;
    pt: string;
    en: string;
  };
  level: {
    es: string;
    pt: string;
    en: string;
  };
  institution: string;
  role: {
    es: string;
    pt: string;
    en: string;
  };
  period: string;
}
