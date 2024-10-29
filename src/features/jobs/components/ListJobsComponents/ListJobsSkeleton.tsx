import { Skeleton, Stack } from "@mui/material";

const ListJobsSkeleton = () => (
  <Stack spacing={2}>
    <Skeleton variant="rectangular" width="100%" height={200} />
    <Skeleton variant="rectangular" width="100%" height={200} />
    <Skeleton variant="rectangular" width="100%" height={200} />
    <Skeleton variant="rectangular" width="100%" height={200} />
    <Skeleton variant="rectangular" width="100%" height={200} />
  </Stack>
);

export default ListJobsSkeleton;
