import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface AuthContextValues {
  isAuthenticated: boolean;
  handleLogin: (token: string) => void;
  handleLogout: () => void;
}

const AuthContext = createContext({} as AuthContextValues);

interface IProps {
  children: React.ReactNode;
}

const AuthContextProvider = ({ children }: IProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (token: string) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const memoizedValued = useMemo(
    () => ({
      isAuthenticated,
      handleLogin,
      handleLogout,
    }),
    [isAuthenticated]
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={memoizedValued}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;
