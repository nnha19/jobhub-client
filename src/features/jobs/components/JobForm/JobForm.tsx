import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid2,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CustomTextField from "../../../../components/FormFields/CustomTextField";
import CustomSelectField from "../../../../components/FormFields/CustomSelectField";
import { useForm } from "react-hook-form";
import { Job } from "../../api/types";

const JobForm = () => {
  const { control } = useForm<Job>();

  return (
    <Paper component="form" sx={{ height: "auto", mx: "auto" }}>
      <Typography sx={{ p: 2 }} textAlign="center" variant="h5">
        Create a new job
      </Typography>
      <Divider />
      <Grid2 p={2} spacing={2} container>
        <Grid2 size={8}>
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
        </Grid2>

        <Grid2 size={4}>
          <Stack>
            <Card>
              <CardHeader title="Company Info" />
              <CardContent>
                <Stack spacing={2}>
                  <CustomTextField
                    control={control}
                    name="company.name"
                    textFieldProps={{
                      label: "Company Name",
                    }}
                  />
                  <CustomTextField
                    control={control}
                    name="company.address"
                    textFieldProps={{
                      label: "Company Address",
                    }}
                  />
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardHeader title="Job Requirements" />
              <CardContent>
                <Stack spacing={2}>
                  <CustomTextField
                    control={control}
                    name="requiredSkills"
                    textFieldProps={{
                      label: "Required Skills",
                    }}
                  />
                  <CustomSelectField
                    label="Job Type"
                    control={control}
                    name="jobType"
                    options={[
                      { label: "Full Time", value: "full-time" },
                      { label: "Part Time", value: "part-time" },
                      { label: "Contract", value: "contract" },
                      { label: "Freelance", value: "freelance" },
                      { label: "Internship", value: "internship" },
                    ]}
                  />
                  <CustomSelectField
                    label="Employment Type"
                    control={control}
                    name="employmentType"
                    options={[
                      { label: "Remote", value: "remote" },
                      {
                        label: "On-site",
                        value: "on-site",
                      },
                      {
                        label: "Hybrid",
                        value: "hybrid",
                      },
                    ]}
                  />
                  <CustomTextField
                    control={control}
                    name="queries"
                    textFieldProps={{
                      label: "Queries",
                    }}
                  />
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid2>
        <Button variant="contained" fullWidth>
          Submit
        </Button>
      </Grid2>
    </Paper>
  );
};

export default JobForm;
