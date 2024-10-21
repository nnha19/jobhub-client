import { Button, Divider, Grid2, Paper, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";

import { NewJobApiArgs } from "../../api/types";
import JobDetailsSection from "./JobFormSections/JobDetailsSection";
import CompanyInfoSection from "./JobFormSections/CompanyInfoSection";
import jobValidationSchema from "./jobValidationSchema";
import useCreateJobMutation from "../../api/useCreateJobMutation";
import { useNavigate } from "react-router-dom";

const JobForm = () => {
  const navigate = useNavigate();
  const mutation = useCreateJobMutation();
  const { enqueueSnackbar } = useSnackbar();

  const { control, handleSubmit } = useForm<NewJobApiArgs>({
    mode: "onChange",
    // We don't want to validate all the fields. That's why using any here
    resolver: yupResolver(jobValidationSchema) as any,
  });

  const onSubmit = (data: NewJobApiArgs) => {
    mutation.mutate(data, {
      onSuccess: (resp) => {
        navigate(`/jobs/${resp._id}`);
      },
    });
  };

  const onInvalid = () => {
    enqueueSnackbar("Please fill in all required fields", {
      variant: "error",
    });
  };

  return (
    <Paper
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      component="form"
      sx={{ height: "auto", mx: "auto" }}
    >
      <Typography sx={{ p: 2 }} textAlign="center" variant="h5">
        Create a new job
      </Typography>
      <Divider />
      <Grid2 p={2} spacing={2} container direction="column">
        <Grid2>
          <JobDetailsSection control={control} />
        </Grid2>
        <Grid2>
          <CompanyInfoSection control={control} />
        </Grid2>
        <Button type="submit" variant="contained" fullWidth>
          Submit
        </Button>
      </Grid2>
    </Paper>
  );
};

export default JobForm;
