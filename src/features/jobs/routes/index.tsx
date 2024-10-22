import { Route, Routes } from "react-router-dom";

import ListJobs from "./ListJobs";
import CreateJob from "./CreateJob";
import RecruiterRoute from "../../../layouts/RecruiterRoute";

const JobsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ListJobs />} />
      <Route
        path="/new"
        element={
          <RecruiterRoute>
            <CreateJob />
          </RecruiterRoute>
        }
      />
    </Routes>
  );
};

export default JobsRoutes;
