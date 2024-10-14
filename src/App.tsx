import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthContextProvider from "./contexts/AuthContext";
import { LoginRoute } from "./features/authentication";
import MainLayout from "./layouts/MainLayout";
import SignupRoute from "./features/authentication/routes/signupRoute";

const App = () => {
  document.title = "Jobhub project";
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/login" element={<LoginRoute />} />
              <Route path="/signup" element={<SignupRoute />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default App;
