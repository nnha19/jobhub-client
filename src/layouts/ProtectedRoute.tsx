import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

interface IProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: IProps) => {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) return children;

  return <Navigate to="/login" />;
};

export default ProtectedRoute;
