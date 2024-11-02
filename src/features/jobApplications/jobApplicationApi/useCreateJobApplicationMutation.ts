import { useMutation } from "react-query";

import api from "../../../lib/axios";
import { JobApplication } from "../types";
import { useSnackbar } from "notistack";

export type JobApplicationApiArgs = Pick<JobApplication, "customDetails">;

const useCreateJobApplicationMutation = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (data: JobApplicationApiArgs) =>
      api
        .post<JobApplication>("/job-applications", data)
        .then((resp) => resp.data),
    onSuccess: () => {
      enqueueSnackbar("Job application submitted successfully.", {
        variant: "success",
      });
    },

    onError: (error) => {
      enqueueSnackbar(
        JSON.stringify(error) || "An error occurred. Please try again later.",
        {
          variant: "error",
        }
      );
    },
  });
};

export default useCreateJobApplicationMutation;
