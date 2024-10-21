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

export type Company = {
  id: string;
  name: string;
  logo?: string;
  location: string;
};

export type NewCompanyApiArgs = Omit<
  Company,
  "id" | "applicants" | "recruiter"
>;

export type Job = {
  id: string;
  title: string;
  company: NewCompanyApiArgs;
  jobType: JobType;
  employmentType: EmploymentType;
  requiredSkills: string;
  queries: string;
  description: string;
  postedDate: string;
  salary: Salary;
  applicants: string[];
  recruiter: string;
};

export type NewJobApiArgs = Omit<Job, "id" | "postedDate">;
