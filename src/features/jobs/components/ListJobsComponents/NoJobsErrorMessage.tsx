import { Box, Typography } from "@mui/material";

const NoJobsErrorMessage = () => {
  return (
    <Box my={4}>
      <img
        style={{
          height: 400,
          width: 400,
          display: "block",
          margin: "auto",
        }}
        src="/images/no-jobs-found.png"
      />
      <Typography textAlign="center">
        No jobs found with the selected fiter
      </Typography>
    </Box>
  );
};

export default NoJobsErrorMessage;
