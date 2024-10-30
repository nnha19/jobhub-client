import { formatISO } from "date-fns";
import { DatePostedValue } from "./components/ListJobsComponents/JobFilters/consts";
import { Salary } from "./api/types";

const datePostedToTimestamp = (
  datePosted: DatePostedValue | null
): string | null => {
  if (datePosted === null) return null;

  const date = new Date();
  switch (datePosted) {
    case "24-hours":
      date.setDate(date.getDate() - 1);
      break;
    case "7-days":
      date.setDate(date.getDate() - 7);
      break;

    case "30-days":
      date.setDate(date.getDate() - 30);
      break;
    default:
      break;
  }

  return formatISO(date);
};

export const displaySalary = (salary: Salary) =>
  `$${salary.min} - $${salary.max}`;

export default datePostedToTimestamp;
