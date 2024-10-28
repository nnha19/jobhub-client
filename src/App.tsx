import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material";

import theme from "./themes/mainTheme";
import AuthContextProvider from "./contexts/AuthContext";
import AuthenticationRoutes from "./features/authentication";
import MainLayout from "./layouts/MainLayout";
import JobsRoutes from "./features/jobs/routes";
import { RecruiterRoutes } from "./features/recruiters";

const App = () => {
  document.title = "Jobhub project";
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <SnackbarProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route path="/" element={<Navigate to="/jobs" replace />} />
                  <Route path="/*" element={<AuthenticationRoutes />} />
                  <Route path="jobs/*" element={<JobsRoutes />} />
                  <Route path="recruiter/*" element={<RecruiterRoutes />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </SnackbarProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
