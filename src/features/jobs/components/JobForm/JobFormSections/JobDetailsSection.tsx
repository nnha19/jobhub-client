import { Control } from "react-hook-form";

import { Box, Card, CardContent, CardHeader, Stack } from "@mui/material";
import "react-quill/dist/quill.snow.css";

import CustomTextField from "../../../../../components/FormFields/CustomTextField";
import { NewJobApiArgs } from "../../../api/types";
import CustomSelectField from "../../../../../components/FormFields/CustomSelectField";
import { EMPLOYMENT_TYPE, JOB_TYPE_OPTIONS } from "../const";
import RequiredSkillsField from "../RequiredSkillsField";
import ControllerWithError from "../../../../../lib/react-hook-form/ControllerWithError";
import ReactQuill from "react-quill";

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
              name="salary.min"
            />
            <CustomTextField
              control={control}
              name="salary.max"
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
          <ControllerWithError
            control={control}
            name="description"
            render={({ field: { value, onChange } }) => (
              <Box
                sx={{
                  "& .ql-editor": {
                    height: "400px",
                  },
                }}
              >
                <ReactQuill theme="snow" value={value} onChange={onChange} />
              </Box>
            )}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default JobDetailsSection;
