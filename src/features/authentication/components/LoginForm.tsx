import { Paper, Stack, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

import CustomTextField from "../../../components/FormFields/CustomTextField";
import { useAuthContext } from "../../../contexts/AuthContext";
import useUsersLoginMutation, {
  LoginFormValues,
} from "../api/useUsersLoginMutation";

const LoginForm = () => {
  const mutation = useUsersLoginMutation();
  const { handleLogin } = useAuthContext();

  const { register, handleSubmit } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (loginFormValues: LoginFormValues) => {
    mutation.mutate(loginFormValues, {
      onSuccess: (data) => {
        handleLogin(data.token);
      },
    });
  };

  return (
    <Stack
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
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
          Log In
        </Typography>

        <CustomTextField {...register("email")} label="Email" />
        <CustomTextField {...register("password")} label="Password" />
        <Button type="submit" variant="contained">
          Create Account
        </Button>

        <NavLink to="/signup">
          <Typography>Don't have an account? Signup</Typography>
        </NavLink>
      </Paper>
    </Stack>
  );
};

export default LoginForm;
