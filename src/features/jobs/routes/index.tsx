import { Route, Routes } from "react-router-dom";

import ListJobs from "./ListJobs";
import CreateJob from "./CreateJob";
import RecruiterRoute from "../../../layouts/RecruiterRoute";
import ViewJob from "./ViewJob";

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
      <Route path="/:jobId" element={<ViewJob />} />
    </Routes>
  );
};

export default JobsRoutes;
