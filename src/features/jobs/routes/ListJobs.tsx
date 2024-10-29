import { Pagination, Paper, Stack } from "@mui/material";

import useGetJobsQuery from "../api/useGetJobsQuery";
import JobCard from "../components/ListJobsComponents/JobCard";
import JobsQueryTextField from "../components/ListJobsComponents/JobsQueryTextField";
import { useSearchParams } from "react-router-dom";
import JobFilters from "../components/ListJobsComponents/JobFilters";
import useJobFilterReducer from "../components/ListJobsComponents/JobFilters/useJobFilterReducer";
import { useState } from "react";

const ListJobs = () => {
  const [state, dispatch] = useJobFilterReducer();
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();

  const { data: jobs } = useGetJobsQuery({
    query: searchParams.get("query") || "",
  });

  if (!jobs) return null;

  return (
    <Paper sx={{ minHeight: "100vh", p: 2 }}>
      <Stack spacing={2} width="80%" mx="auto">
        <Stack spacing={2}>
          <JobsQueryTextField />
          <JobFilters state={state} dispatch={dispatch} />
        </Stack>
        {jobs.map((job) => (
          <JobCard key={job._id} {...job} />
        ))}
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
