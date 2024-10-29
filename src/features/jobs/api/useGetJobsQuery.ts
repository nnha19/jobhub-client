import { useQuery } from "react-query";

import api from "../../../lib/axios";
import { EmploymentType, Job, JobType } from "./types";

export type GetJobsListApiResponse = Job[];

export type GetJobsListApiArgs = {
  query?: string;
  jobType?: JobType | null;
  employmentType?: EmploymentType | null;
  datePosted?: string | null;
  page?: number;
};

const useGetJobsQuery = (params: GetJobsListApiArgs) =>
  useQuery({
    queryKey: ["Jobs", params],
    queryFn: () =>
      api
        .get<GetJobsListApiResponse>(`/jobs`, {
          params,
        })
        .then((resp) => resp.data),
  });

export default useGetJobsQuery;
