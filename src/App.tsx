import { Typography } from "@mui/material";

import MainLayout from "./layouts/MainLayout";

const App = () => {
  document.title = "Jobhub project";

  return (
    <MainLayout>
      <Typography>Hello World</Typography>
    </MainLayout>
  );
};

export default App;
