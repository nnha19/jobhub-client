//  Job Types

export type EmploymentType =
  | "full-time"
  | "part-time"
  | "contract"
  | "freelance"
  | "internship";

export type Salary = {
  max: number;
  min: number;
};

export type JobType = "remote" | "on-site" | "hybrid";

export type Job = {
  _id: string;
  title: string;
  company: Company;
  jobType: JobType;
  employmentType: EmploymentType;
  requiredSkills: string[];
  queries: string;
  description: string;
  postedDate: string;
  salary: Salary;
  applicants: string[];
  recruiter: string;
};

export type NewJobApiArgs = Omit<Job, "id" | "postedDate" | "company"> & {
  company: NewCompanyApiArgs;
};

// Company types
export type Company = {
  id: string;
  name: string;
  logo?: string;
  address?: string;
};
export type NewCompanyApiArgs = Omit<
  Company,
  "id" | "applicants" | "recruiter"
>;
