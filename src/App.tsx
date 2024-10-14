import MainLayout from "./layouts/MainLayout";
import SignupRoute from "./features/authentication/routes/signupRoute";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthContextProvider from "./contexts/AuthContext";

const App = () => {
  document.title = "Jobhub project";
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <MainLayout>
          <SignupRoute />
        </MainLayout>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default App;
