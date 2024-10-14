import axios from "axios";
import { useMutation } from "react-query";

export type RegisterUserFormValues = {
  username: string;
  email: string;
  password: string;
  userType: string;
};

const useUserRegisterMutation = () => {
  return useMutation({
    mutationFn: async (registerFormValues: RegisterUserFormValues) => {
      const resp = await axios.post(
        "http://localhost:3000/users/register",
        registerFormValues
      );
      return resp.data;
    },
  });
};

export default useUserRegisterMutation;
