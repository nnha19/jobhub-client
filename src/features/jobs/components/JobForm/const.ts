import { EmploymentType, JobType } from "../../api/types";

export type EmploymentTypeOption = {
  label: string;
  value: EmploymentType;
};

export type JobTypeOption = {
  label: string;
  value: JobType;
};

export const EMPLOYMENT_TYPE: EmploymentTypeOption[] = [
  { label: "Full Time", value: "full-time" },
  { label: "Part Time", value: "part-time" },
  { label: "Contract", value: "contract" },
  { label: "Freelance", value: "freelance" },
  { label: "Internship", value: "internship" },
];

export const JOB_TYPE_OPTIONS: JobTypeOption[] = [
  { label: "Remote", value: "remote" },
  {
    label: "On-site",
    value: "on-site",
  },
  {
    label: "Hybrid",
    value: "hybrid",
  },
];
