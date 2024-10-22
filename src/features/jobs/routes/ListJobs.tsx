import { Paper, Stack } from "@mui/material";

import useGetJobsQuery from "../api/useGetJobsQuery";
import JobCard from "../components/ListJobsComponents/JobCard";

const ListJobs = () => {
  const { data: jobs } = useGetJobsQuery();

  if (!jobs) return null;

  return (
    <Paper sx={{ minHeight: "100vh", p: 2 }}>
      <Stack spacing={2} width="80%" mx="auto">
        {jobs.map((job) => (
          <JobCard key={job._id} {...job} />
        ))}
      </Stack>
    </Paper>
  );
};

export default ListJobs;
