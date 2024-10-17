export type JobLocation = {
  country: string;
  city: string;
  address: string;
};

export type EmploymentType =
  | "full-time"
  | "part-time"
  | "contract"
  | "freelance"
  | "internship";

export type Salary = {
  minimum: number;
  maximum: number;
};

export type JobType = "remote" | "on-site" | "hybrid";

export type Job = {
  id: string;
  title: string;
  company: string;
  location: JobLocation;
  jobType: JobType;
  employmentType: EmploymentType;
  requiredSkills: string;
  queries: string;
  description: string;
  postedDate: string;
  salary: Salary;
};
