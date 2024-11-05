import { useMutation, useQueryClient } from "react-query";

import api from "../../../lib/axios";
import { useSnackbar } from "notistack";

type JobSaveMutationApiResponse = {
  message: string;
};

const useToggleSaveJobMutation = (jobId: string) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: () =>
      api
        .post<JobSaveMutationApiResponse>(`/jobs/saved`, {
          jobId,
        })
        .then((resp) => resp.data),
    onSuccess: (resp) => {
      enqueueSnackbar(resp.message, { variant: "success" });
      queryClient.invalidateQueries({
        queryKey: ["Jobs", jobId],
      });

      queryClient.invalidateQueries({
        queryKey: ["Jobs"],
      });
    },
  });
};

export default useToggleSaveJobMutation;
