import { Box, Container, Typography } from "@mui/material";
import Appbar from "./MainAppbar";
import { useAuthContext } from "../contexts/AuthContext";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const { isAuthenticated } = useAuthContext();

  return (
    <Box height="100vh">
      <Appbar />
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
