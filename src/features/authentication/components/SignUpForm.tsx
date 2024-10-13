import { Paper, Stack, Typography, Button } from "@mui/material";

import CustomTextField from "../../../components/FormFields/CustomTextField";
import CustomRadioButton from "../../../components/FormFields/CusotmRadioButton";

const SignUpForm = () => {
  return (
    <Stack
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          padding: 4,
          width: "25rem",
          m: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography textAlign="center" variant="h5" mb={4}>
          Create an account
        </Typography>
        <CustomTextField label="Username" />
        <CustomTextField label="Email" />
        <CustomTextField label="Password" />
        <CustomRadioButton />
        <Button variant="contained">Create Account</Button>
      </Paper>
    </Stack>
  );
};

export default SignUpForm;
