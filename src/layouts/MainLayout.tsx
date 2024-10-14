import { Box, Container, Typography } from "@mui/material";
import { useAuthContext } from "../contexts/AuthContext";
import { Outlet } from "react-router-dom";
import RecruiterAppbar from "./RecruiterAppbar";

const MainLayout = () => {
  const { isAuthenticated } = useAuthContext();

  return (
    <Box height="100vh">
      <RecruiterAppbar />
      <Container sx={{ mt: 2 }}>
        {isAuthenticated && <Typography> Authenticated</Typography>}
        <Box height="100%">
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
};

export default MainLayout;
