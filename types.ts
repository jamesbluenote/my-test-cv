
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export interface Project {
  title: string;
  client: string;
  period: string;
  overview: string;
  role: string;
}

export interface CVData {
  name: string;
  title: string;
  contact: {
    address: string;
    office: string;
    mobile: string;
    emails: string[];
  };
  education: Education[];
  experiences: Experience[];
  projects: Project[];
  otherExperiences: Array<{
    title: string;
    period: string;
    overview: string;
    role: string;
  }>;
  awards: string[];
  skills: {
    languages: string[];
    programming: string[];
    qualifications: string[];
  };
}
