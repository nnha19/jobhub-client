import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import Appbar from "./MainAppbar";

const MainLayout = () => {
  return (
    <Box height="100vh">
      <Appbar />
      <Container sx={{ mt: 2 }}>
        <Box height="100%">
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
};

export default MainLayout;
