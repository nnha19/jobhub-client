import { useMutation } from "react-query";
import api from "../../../lib/axios";

export type UserTypeEnum = "recruiter" | "candidate";

export type RegisterUserFormValues = {
  username: string;
  email: string;
  password: string;
  userType: UserTypeEnum;
};

export type RegisterUserFormResponse = Omit<
  RegisterUserFormValues,
  "password"
> & {
  _id: string;
  joinedDate: string;
  token: string;
};

const useUserRegisterMutation = () => {
  return useMutation({
    mutationFn: async (registerFormValues: RegisterUserFormValues) => {
      const resp = await api.post<RegisterUserFormResponse>(
        "/users/register",
        registerFormValues
      );
      return resp.data;
    },
  });
};

export default useUserRegisterMutation;
