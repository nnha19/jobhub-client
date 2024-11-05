import { Pagination, Stack } from "@mui/material";

import WithDataFetchingStates from "../../../../components/WithDataFetchionStates";
import { Job } from "../../api/types";
import JobCard from "./JobCard";
import ListJobsSkeleton from "./ListJobsSkeleton";
import NoJobsErrorMessage from "./NoJobsErrorMessage";

interface IProps {
  jobs: Job[];
  isLoading: boolean;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginatedJobsList = ({
  isLoading,
  jobs,
  totalPages,
  page,
  onPageChange,
}: IProps) => (
  <WithDataFetchingStates
    isFetching={isLoading}
    spinner={<ListJobsSkeleton />}
    noDataMessage={<NoJobsErrorMessage />}
    data={jobs}
  >
    {(jobs) => (
      <>
        {jobs.map((job) => (
          <JobCard key={job._id} {...job} />
        ))}
        <Stack alignItems="center">
          <Pagination
            count={totalPages}
            color="primary"
            sx={{ justifyContent: "center" }}
            page={page}
            onChange={(_, newPage) => onPageChange(newPage)}
          />
        </Stack>
      </>
    )}
  </WithDataFetchingStates>
);

export default PaginatedJobsList;
