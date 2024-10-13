import MainLayout from "./layouts/MainLayout";
import SignupRoute from "./features/authentication/routes/signupRoute";

const App = () => {
  document.title = "Jobhub project";

  return (
    <MainLayout>
      <SignupRoute />
    </MainLayout>
  );
};

export default App;
