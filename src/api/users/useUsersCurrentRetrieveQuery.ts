import { useQuery } from "react-query";
import api from "../../lib/axios";
import { RegisterUserFormResponse } from "../../features/authentication/api/useUserRegisterMutation";

const useUsersCurrentRetrieveQuery = () =>
  useQuery({
    queryKey: ["UsersCurrent"],
    queryFn: async () => {
      const user = await api.get<RegisterUserFormResponse>("/users/current");
      return user.data;
    },
  });

export default useUsersCurrentRetrieveQuery;
