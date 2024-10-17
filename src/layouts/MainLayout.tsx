import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import Appbar from "./MainAppbar";

const MainLayout = () => {
  return (
    <Box minHeight="100vh" bgcolor="background.default">
      <Appbar />
      <Container maxWidth={false} sx={{ mt: 2 }}>
        <Box height="100%">
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
};

export default MainLayout;
