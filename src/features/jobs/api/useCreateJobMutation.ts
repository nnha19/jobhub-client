import { useMutation } from "react-query";

import { Job, NewJobApiArgs } from "./types";
import api from "../../../lib/axios";
import { useSnackbar } from "notistack";

const useCreateJobMutation = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: async (newJob: NewJobApiArgs) =>
      api.post<Job>("/jobs", newJob).then((resp) => resp.data),
    onSuccess: () => {
      enqueueSnackbar("Job created successfully", {
        variant: "success",
      });
    },
    onError: () => {
      enqueueSnackbar("Error creating job", {
        variant: "error",
      });
    },
  });
};

export default useCreateJobMutation;
