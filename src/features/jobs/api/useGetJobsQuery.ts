import { useQuery } from "react-query";

import api from "../../../lib/axios";
import { Job } from "./types";

export type GetJobsListApiResponse = Job[];

const useGetJobsQuery = () =>
  useQuery({
    queryKey: ["Jobs"],
    queryFn: () =>
      api.get<GetJobsListApiResponse>("/jobs").then((resp) => resp.data),
  });

export default useGetJobsQuery;
