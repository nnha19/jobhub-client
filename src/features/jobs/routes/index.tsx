import { Route, Routes } from "react-router-dom";

import JobsRoute from "./JobsRoute";
import NewJobRoute from "./NewJobRoute";
import RecruiterRoute from "../../../layouts/RecruiterRoute";

const JobsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JobsRoute />} />
      <Route
        path="/new"
        element={
          <RecruiterRoute>
            <NewJobRoute />
          </RecruiterRoute>
        }
      />
    </Routes>
  );
};

export default JobsRoutes;
