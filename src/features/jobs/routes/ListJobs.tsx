import { Paper, Stack } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

import useGetJobsQuery from "../api/useGetJobsQuery";
import JobsQueryTextField from "../components/ListJobsComponents/JobsQueryTextField";
import JobFilters from "../components/ListJobsComponents/JobFilters";
import useJobFilterReducer from "../components/ListJobsComponents/JobFilters/useJobFilterReducer";
import datePostedToTimestamp from "../utils";
import PaginatedJobsList from "../components/ListJobsComponents/PaginatedJobsList";

const ListJobs = () => {
  const [state, dispatch] = useJobFilterReducer();
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();

  const { data, isFetching } = useGetJobsQuery({
    query: searchParams.get("query") || undefined,
    jobType: state.selectedJobType,
    employmentType: state.employmentType,
    datePosted: datePostedToTimestamp(state.datePosted),
    page,
  });

  return (
    <Paper sx={{ minHeight: "100vh", p: 2 }}>
      <Stack spacing={2} width="80%" mx="auto">
        <Stack spacing={2}>
          <JobsQueryTextField />
          <JobFilters state={state} dispatch={dispatch} />
        </Stack>
        <PaginatedJobsList
          isLoading={isFetching}
          jobs={data?.results || []}
          page={page}
          totalPages={data?.totalPages || 1}
          onPageChange={setPage}
        />
      </Stack>
    </Paper>
  );
};

export default ListJobs;
