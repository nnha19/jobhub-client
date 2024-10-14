import axios from "axios";
import { useMutation } from "react-query";
import { RegisterUserFormResponse } from "./useUserRegisterMutation";

export type LoginFormValues = {
  email: string;
  password: string;
};

export type LoginFormResponse = RegisterUserFormResponse;

const useUsersLoginMutation = () => {
  return useMutation({
    mutationFn: async (loginFormValues: LoginFormValues) => {
      const resp = await axios.post<LoginFormResponse>(
        "http://localhost:3000/users/login",
        loginFormValues
      );

      return resp.data;
    },
  });
};

export default useUsersLoginMutation;
