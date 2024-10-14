import MainLayout from "./layouts/MainLayout";
import SignupRoute from "./features/authentication/routes/signupRoute";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
  document.title = "Jobhub project";
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <SignupRoute />
      </MainLayout>
    </QueryClientProvider>
  );
};

export default App;
