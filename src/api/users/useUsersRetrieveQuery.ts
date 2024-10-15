import { useQuery } from "react-query";
import api from "../../lib/axios";

const useUsersRetrieveQuery = () => {
  return useQuery({
    queryKey: ["Users"],
    queryFn: async () => {
      const user = await api.get("/users");
      return user.data;
    },
  });
};

export default useUsersRetrieveQuery;
