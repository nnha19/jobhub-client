import { useQuery } from "react-query";

import { Job } from "./types";
import api from "../../../lib/axios";

const useRetrieveJobQuery = (jobId: string) => {
  return useQuery({
    queryKey: ["Jobs", jobId],
    queryFn: () => api.get<Job>(`/jobs/${jobId}`).then((resp) => resp.data),
  });
};

export default useRetrieveJobQuery;
