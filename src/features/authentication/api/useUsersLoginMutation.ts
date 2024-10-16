import { useMutation } from "react-query";
import { useSnackbar } from "notistack";

import api from "../../../lib/axios";
import { User } from "../../../api/users/types";

export type LoginFormValues = {
  email: string;
  password: string;
};

export type LoginFormResponse = User & { token: string };

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
