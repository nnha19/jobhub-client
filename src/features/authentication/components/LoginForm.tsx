import { Paper, Stack, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

import CustomTextField from "../../../components/FormFields/CustomTextField";
import { useAuthContext } from "../../../contexts/AuthContext";
import useUsersLoginMutation, {
  LoginFormValues,
} from "../api/useUsersLoginMutation";

const LoginForm = () => {
  const navigate = useNavigate();
  const mutation = useUsersLoginMutation();
  const { handleLogin } = useAuthContext();

  const { control, handleSubmit } = useForm<LoginFormValues>({
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
      onSettled: (user) => {
        if (!user) return;

        if (user.userType === "recruiter") {
          navigate("/recruiter/dashboard");
        } else {
          navigate("/jobs");
        }
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

        <CustomTextField
          control={control}
          name="email"
          textFieldProps={{
            label: "Email",
          }}
        />
        <CustomTextField
          control={control}
          name="password"
          textFieldProps={{
            label: "Password",
            type: "password",
          }}
        />
        <Button type="submit" variant="contained">
          Log In
        </Button>

        <NavLink to="/signup">
          <Typography
            color="secondary.main"
            sx={{
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Don't have an account? Signup
          </Typography>
        </NavLink>
      </Paper>
    </Stack>
  );
};

export default LoginForm;
