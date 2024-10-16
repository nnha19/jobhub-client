import { Typography } from "@mui/material";
import useUsersCurrentRetrieveQuery from "../api/users/useUsersCurrentRetrieveQuery";

interface IProps {
  children: React.ReactNode;
}

const RecruiterRoute = ({ children }: IProps) => {
  const { data } = useUsersCurrentRetrieveQuery();

  if (data?.userType !== "recruiter")
    return <Typography>You can't access this page</Typography>;

  return <div>{children}</div>;
};

export default RecruiterRoute;
