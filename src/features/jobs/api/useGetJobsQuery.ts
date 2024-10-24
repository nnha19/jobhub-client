import { useQuery } from "react-query";

import api from "../../../lib/axios";
import { Job } from "./types";

export type GetJobsListApiResponse = Job[];

export type GetJobsListApiArgs = {
  query?: string;
};

const useGetJobsQuery = ({ query }: GetJobsListApiArgs) =>
  useQuery({
    queryKey: ["Jobs"],
    queryFn: () =>
      api
        .get<GetJobsListApiResponse>(`/jobs?${query}`)
        .then((resp) => resp.data),
  });

export default useGetJobsQuery;
