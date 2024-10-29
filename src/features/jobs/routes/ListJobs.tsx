import { Pagination, Paper, Stack } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

import useGetJobsQuery from "../api/useGetJobsQuery";
import JobCard from "../components/ListJobsComponents/JobCard";
import JobsQueryTextField from "../components/ListJobsComponents/JobsQueryTextField";
import JobFilters from "../components/ListJobsComponents/JobFilters";
import useJobFilterReducer from "../components/ListJobsComponents/JobFilters/useJobFilterReducer";
import ListJobsSkeleton from "../components/ListJobsComponents/ListJobsSkeleton";
import datePostedToTimestamp from "../utils";

const ListJobs = () => {
  const [state, dispatch] = useJobFilterReducer();
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();

  const { data: jobs, isFetching } = useGetJobsQuery({
    query: searchParams.get("query") || undefined,
    jobType: state.selectedJobType,
    employmentType: state.employmentType,
    datePosted: datePostedToTimestamp(state.datePosted),
  });

  return (
    <Paper sx={{ minHeight: "100vh", p: 2 }}>
      <Stack spacing={2} width="80%" mx="auto">
        <Stack spacing={2}>
          <JobsQueryTextField />
          <JobFilters state={state} dispatch={dispatch} />
        </Stack>
        {isFetching ? (
          <ListJobsSkeleton />
        ) : (
          jobs?.map((job) => <JobCard key={job._id} {...job} />)
        )}

        <Stack alignItems="center">
          <Pagination
            count={10}
            color="primary"
            sx={{ justifyContent: "center" }}
            page={page}
            onChange={(_, newPage) => setPage(newPage)}
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ListJobs;
