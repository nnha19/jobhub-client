import { Box, Container } from "@mui/material";
import Appbar from "./MainAppbar";

interface IProps {
  children: JSX.Element;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <Box height="100vh">
      <Appbar />
      <Container sx={{ mt: 2 }}>
        <Box height="100%">{children}</Box>
      </Container>
    </Box>
  );
};

export default MainLayout;
