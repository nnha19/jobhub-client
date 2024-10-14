import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { useAuthContext } from "../contexts/AuthContext";
import RecruiterAppbar from "./RecruiterAppbar";

interface AppbarWrapperProps {
  children: React.ReactNode;
}

export const AppbarWrapper = ({ children }: AppbarWrapperProps) => (
  <Toolbar disableGutters>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          JobHub
        </Typography>
        {children}
      </Toolbar>
    </AppBar>
  </Toolbar>
);

const Appbar = () => {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) return <RecruiterAppbar />;

  return (
    <AppbarWrapper>
      <Stack direction="row" spacing={2}>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Sign Up</Button>
      </Stack>
    </AppbarWrapper>
  );
};

export default Appbar;
