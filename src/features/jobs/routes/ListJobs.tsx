import { Paper, Stack } from "@mui/material";

import useGetJobsQuery from "../api/useGetJobsQuery";
import JobCard from "../components/ListJobsComponents/JobCard";
import JobsQueryTextField from "../components/ListJobsComponents/JobsQueryTextField";
import { useSearchParams } from "react-router-dom";

const ListJobs = () => {
  const [searchParams] = useSearchParams();

  const { data: jobs } = useGetJobsQuery({
    query: searchParams.get("query") || "",
  });

  if (!jobs) return null;

  return (
    <Paper sx={{ minHeight: "100vh", p: 2 }}>
      <Stack spacing={2} width="80%" mx="auto">
        <JobsQueryTextField />
        {jobs.map((job) => (
          <JobCard key={job._id} {...job} />
        ))}
      </Stack>
    </Paper>
  );
};

export default ListJobs;
