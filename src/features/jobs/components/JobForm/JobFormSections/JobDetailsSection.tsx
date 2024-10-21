import { Control } from "react-hook-form";

import { Card, CardContent, CardHeader, Stack } from "@mui/material";
import CustomTextField from "../../../../../components/FormFields/CustomTextField";
import { NewJobApiArgs } from "../../../api/types";
import CustomSelectField from "../../../../../components/FormFields/CustomSelectField";
import { EMPLOYMENT_TYPE, JOB_TYPE_OPTIONS } from "../const";
import RequiredSkillsField from "../RequiredSkillsField";

const JobDetailsSection = ({
  control,
}: {
  control: Control<NewJobApiArgs>;
}) => {
  return (
    <Card>
      <CardHeader title="Job Details" />
      <CardContent>
        <Stack spacing={2}>
          <CustomTextField
            textFieldProps={{
              label: "Job Title",
            }}
            control={control}
            name="title"
          />
          <Stack spacing={2} direction="row">
            <CustomTextField
              textFieldProps={{
                type: "number",
                label: "Minimum Salary",
              }}
              control={control}
              name="salary.minimum"
            />
            <CustomTextField
              control={control}
              name="salary.maximum"
              textFieldProps={{
                type: "number",
                label: "Maximum Salary",
              }}
            />
          </Stack>
          <CustomSelectField
            label="Employment Type"
            control={control}
            name="employmentType"
            options={EMPLOYMENT_TYPE}
          />
          <CustomSelectField
            label="Job Type"
            control={control}
            name="jobType"
            options={JOB_TYPE_OPTIONS}
          />
          <RequiredSkillsField control={control} />
          <CustomTextField
            control={control}
            name="description"
            textFieldProps={{
              label: "Job Description",
              multiline: true,
              rows: 14,
            }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default JobDetailsSection;
