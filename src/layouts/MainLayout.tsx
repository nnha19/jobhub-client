import { Box, Container, Typography } from "@mui/material";
import Appbar from "./MainAppbar";
import { useAuthContext } from "../contexts/AuthContext";

interface IProps {
  children: JSX.Element;
}

const MainLayout = ({ children }: IProps) => {
  const { isAuthenticated } = useAuthContext();

  return (
    <Box height="100vh">
      <Appbar />
      <Container sx={{ mt: 2 }}>
        {isAuthenticated && <Typography> Authenticated</Typography>}
        <Box height="100%">{children}</Box>
      </Container>
    </Box>
  );
};

export default MainLayout;
