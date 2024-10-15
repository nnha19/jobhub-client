import { useMutation } from "react-query";
import { useSnackbar } from "notistack";

import { RegisterUserFormResponse } from "./useUserRegisterMutation";
import api from "../../../lib/axios";

export type LoginFormValues = {
  email: string;
  password: string;
};

export type LoginFormResponse = RegisterUserFormResponse;

const useUsersLoginMutation = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: async (loginFormValues: LoginFormValues) => {
      const resp = await api.post<LoginFormResponse>(
        "/users/login",
        loginFormValues
      );

      return resp.data;
    },
    onSuccess: () => {
      enqueueSnackbar("Login successful", { variant: "success" });
    },
    onError: () => {
      // enqueueSnackbar("Something went wrong...", { variant: "error" });
    },
  });
};

export default useUsersLoginMutation;
