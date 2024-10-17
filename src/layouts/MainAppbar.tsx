import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { useAuthContext } from "../contexts/AuthContext";
import RecruiterAppbar from "./RecruiterAppbar";
import { NavLink } from "react-router-dom";

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
        <NavLink to="login">
          <Button color="inherit">Login</Button>
        </NavLink>
        <NavLink to="signup">
          <Button variant="contained" color="secondary">
            Sign Up
          </Button>
        </NavLink>
      </Stack>
    </AppbarWrapper>
  );
};

export default Appbar;
