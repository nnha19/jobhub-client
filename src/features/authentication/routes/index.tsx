import { Route, Routes } from "react-router-dom";

import LoginRoute from "./loginRoute";
import SignupRoute from "./signupRoute";

const AuthenticationRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginRoute />} />
      <Route path="/signup" element={<SignupRoute />} />
    </Routes>
  );
};

export default AuthenticationRoutes;
