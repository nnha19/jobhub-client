import { Paper, Stack, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";

import CustomTextField from "../../../components/FormFields/CustomTextField";
import CustomRadioButton from "../../../components/FormFields/CusotmRadioButton";
import useUserRegisterMutation, {
  type RegisterUserFormValues,
} from "../api/useUserRegisterMutation";
import { useAuthContext } from "../../../contexts/AuthContext";

const USER_TYPE_OPTIONS = [
  { label: "Candidate", value: "candidate" },
  { label: "Recruiter", value: "recruiter" },
];

const SignUpForm = () => {
  const mutation = useUserRegisterMutation();
  const { handleLogin } = useAuthContext();

  const { register, handleSubmit } = useForm<RegisterUserFormValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      userType: "candidate",
    },
  });

  const onSubmit = (signUpFormValues: RegisterUserFormValues) => {
    mutation.mutate(signUpFormValues, {
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
          Create an account
        </Typography>

        <CustomTextField {...register("username")} label="Username" />
        <CustomTextField {...register("email")} label="Email" />
        <CustomTextField {...register("password")} label="Password" />
        <CustomRadioButton
          options={USER_TYPE_OPTIONS}
          radioGroupProps={{
            ...register("userType"),
            defaultValue: "candidate",
          }}
        />
        <Button type="submit" variant="contained">
          Create Account
        </Button>
      </Paper>
    </Stack>
  );
};

export default SignUpForm;
