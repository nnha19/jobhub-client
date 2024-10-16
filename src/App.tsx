import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import AuthContextProvider from "./contexts/AuthContext";
import AuthenticationRoutes from "./features/authentication";
import MainLayout from "./layouts/MainLayout";
import JobsRoutes from "./features/jobs/routes";
import { RecruiterRoutes } from "./features/recruiters";

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
                <Route path="/*" element={<AuthenticationRoutes />} />
                <Route path="/*" element={<JobsRoutes />} />
                <Route path="/*" element={<RecruiterRoutes />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </SnackbarProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default App;
