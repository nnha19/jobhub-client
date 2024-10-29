export type DatePostedValue = "24-hours" | "7-days" | "30-days";

export type DatePostedOption = {
  label: string;
  value: DatePostedValue;
};

export const DATE_POSTED_OPTIONS: DatePostedOption[] = [
  {
    label: "Last 24 hours",
    value: "24-hours",
  },
  {
    label: "Last 7 days",
    value: "7-days",
  },
  {
    label: "Last 30 days",
    value: "30-days",
  },
];
