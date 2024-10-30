import { Skeleton, Stack } from "@mui/material";

const ViewJobSkeletons = () => (
  <Stack spacing={2}>
    <Skeleton variant="rectangular" height={200} width="100%" />
    <Skeleton variant="rectangular" height={1000} width="100%" />
  </Stack>
);

export default ViewJobSkeletons;
