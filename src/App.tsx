import { QueryClient, QueryClientProvider } from "react-query";

import MainLayout from "./layouts/MainLayout";
import SignupRoute from "./features/authentication/routes/signupRoute";
import AuthContextProvider from "./contexts/AuthContext";
import { LoginRoute } from "./features/authentication";

const App = () => {
  document.title = "Jobhub project";
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <MainLayout>
          <>
            <SignupRoute />
            <LoginRoute />
          </>
        </MainLayout>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default App;
