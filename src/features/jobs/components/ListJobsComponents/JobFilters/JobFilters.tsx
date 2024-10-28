import { useState } from "react";

import { Stack } from "@mui/material";
import ButtonSelect from "../../../../../components/ButtonSelect";
import { EMPLOYMENT_TYPE, JOB_TYPE_OPTIONS } from "../../JobForm/const";
import { EmploymentType, JobType } from "../../../api/types";

const DATE_POSTED_OPTIONS = [
  {
    label: "Last 24 hours",
    value: "last-24-hours",
  },
  {
    label: "Last 7 days",
    value: "last-7-days",
  },
  {
    label: "Last 30 days",
    value: "last-30-days",
  },
];

const JobFilters = () => {
  const [datePosted, setDatePosted] = useState<string | null>(null);

  const [selectedJobType, setSelectedJobType] = useState<JobType | null>(
    "remote"
  );
  const [employmentType, setEmploymentType] = useState<EmploymentType | null>(
    "full-time"
  );

  return (
    <Stack spacing={2} justifyContent="flex-start" direction="row">
      <ButtonSelect
        value={employmentType}
        onChange={setEmploymentType}
        options={EMPLOYMENT_TYPE}
        label="Employment Type"
      />
      <ButtonSelect
        label="Job Type"
        value={selectedJobType}
        onChange={setSelectedJobType}
        options={JOB_TYPE_OPTIONS}
      />

      <ButtonSelect
        value={datePosted}
        label="Date Posted"
        onChange={setDatePosted}
        options={DATE_POSTED_OPTIONS}
      />
    </Stack>
  );
};

export default JobFilters;
