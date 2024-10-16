import { Routes, Route } from "react-router-dom";

import RecruiterDashboardRoute from "./Dashboard";
import RecruiterRoute from "../../../layouts/RecruiterRoute";

const RecruiterRoutes = () => {
  return (
    <Routes>
      <Route
        path="/recruiter"
        element={
          <RecruiterRoute>
            <RecruiterDashboardRoute />
          </RecruiterRoute>
        }
      />
    </Routes>
  );
};

export default RecruiterRoutes;
