import { Box, Container } from "@mui/material";
import Appbar from "./MainAppbar";

interface IProps {
  children: JSX.Element;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <Box>
      <Appbar />
      <Container>
        <Box>{children}</Box>
      </Container>
    </Box>
  );
};

export default MainLayout;
