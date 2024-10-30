import { Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useRetrieveJobQuery from "../api/useRetrieveJobQuery";

const ViewJob = () => {
  const { jobId } = useParams();

  const { data } = useRetrieveJobQuery(jobId || "");

  if (!data) return <Typography>No job found with the given id.</Typography>;

  return (
    <Stack>
      <Typography>{jobId}</Typography>
    </Stack>
  );
};

export default ViewJob;
