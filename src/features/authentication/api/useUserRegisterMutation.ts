import { useMutation } from "react-query";
import api from "../../../lib/axios";
import { User } from "../../../api/users/types";

export type UserTypeEnum = "recruiter" | "candidate";

export type RegisterUserArgs = Pick<User, "email" | "userType" | "username"> & {
  password: string;
};

export type RegisterUserFormResponse = Omit<User, "password"> & {
  token: string;
};

const useUserRegisterMutation = () => {
  return useMutation({
    mutationFn: async (registerFormValues: RegisterUserArgs) => {
      const resp = await api.post<RegisterUserFormResponse>(
        "/users/register",
        registerFormValues
      );
      return resp.data;
    },
  });
};

export default useUserRegisterMutation;
