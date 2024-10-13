import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";

const Appbar = () => {
  return (
    <Toolbar disableGutters>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            JobHub
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Toolbar>
  );
};

export default Appbar;
