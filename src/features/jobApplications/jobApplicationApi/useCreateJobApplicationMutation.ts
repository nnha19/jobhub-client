import { useMutation, useQueryClient } from "react-query";

import api from "../../../lib/axios";
import { JobApplication } from "../types";
import { useSnackbar } from "notistack";

export type JobApplicationApiArgs = Pick<JobApplication, "customDetails">;

const useCreateJobApplicationMutation = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: ({
      data,
      jobId,
    }: {
      data: JobApplicationApiArgs;
      jobId: string;
    }) =>
      api
        .post<JobApplication>(`/job-applications/${jobId}`, data)
        .then((resp) => resp.data),
    onSuccess: (_, { jobId }) => {
      enqueueSnackbar("Job application submitted successfully.", {
        variant: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["Jobs", jobId],
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
