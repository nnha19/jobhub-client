import { Box, Container, Typography } from "@mui/material";

interface IProps {
  children: JSX.Element;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <Container>
      <Typography variant="h1">Jobhub project</Typography>
      <Box>{children}</Box>
    </Container>
  );
};

export default MainLayout;
