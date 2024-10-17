import { Paper, Stack, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

import CustomTextField from "../../../components/FormFields/CustomTextField";
import CustomRadioButton from "../../../components/FormFields/CusotmRadioButton";
import useUserRegisterMutation, {
  type RegisterUserArgs,
} from "../api/useUserRegisterMutation";
import { useAuthContext } from "../../../contexts/AuthContext";

const USER_TYPE_OPTIONS = [
  { label: "Candidate", value: "candidate" },
  { label: "Recruiter", value: "recruiter" },
];

const SIGN_UP_FORM_DEFAULT_VALUES: RegisterUserArgs = {
  username: "",
  email: "",
  password: "",
  userType: "candidate",
};

const SignUpForm = () => {
  const navigate = useNavigate();
  const mutation = useUserRegisterMutation();
  const { handleLogin } = useAuthContext();

  const { register, handleSubmit, control } = useForm<RegisterUserArgs>({
    defaultValues: SIGN_UP_FORM_DEFAULT_VALUES,
  });

  const onSubmit = (signUpFormValues: RegisterUserArgs) => {
    mutation.mutate(signUpFormValues, {
      onSuccess: (data) => {
        handleLogin(data.token);
        if (data.userType === "recruiter") {
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
          Create an account
        </Typography>

        <CustomTextField {...register("username")} label="Username" />
        <CustomTextField {...register("email")} label="Email" />
        <CustomTextField
          {...register("password")}
          label="Password"
          type="password"
        />
        <CustomRadioButton
          options={USER_TYPE_OPTIONS}
          control={control}
          name="userType"
          label="Select user type"
        />
        <Button type="submit" variant="contained">
          Create Account
        </Button>

        <NavLink to="/login">
          <Typography
            color="secondary.main"
            sx={{
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Already have an account? Login
          </Typography>
        </NavLink>
      </Paper>
    </Stack>
  );
};

export default SignUpForm;
