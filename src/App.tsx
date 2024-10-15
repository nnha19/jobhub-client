import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthContextProvider from "./contexts/AuthContext";
import { LoginRoute } from "./features/authentication";
import MainLayout from "./layouts/MainLayout";
import SignupRoute from "./features/authentication/routes/signupRoute";
import JobsRoute from "./features/jobs";
import { RecruiterDashboardRoute } from "./features/recruiters";
import { SnackbarProvider } from "notistack";
import ProtectedRoute from "./layouts/ProtectedRoute";

const App = () => {
  document.title = "Jobhub project";
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <SnackbarProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route path="/login" element={<LoginRoute />} />
                <Route path="/signup" element={<SignupRoute />} />

                <Route
                  path="/jobs"
                  element={
                    <ProtectedRoute>
                      <JobsRoute />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/recruiter"
                  element={
                    <ProtectedRoute>
                      <RecruiterDashboardRoute />
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </SnackbarProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default App;
