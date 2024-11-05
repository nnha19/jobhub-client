import { useState } from "react";

import { Box, Paper, Tab, Tabs } from "@mui/material";
import NotImplementedYet from "../../../components/NotImplementedYet";
import useGetJobsQuery from "../api/useGetJobsQuery";
import PaginatedJobsList from "../components/ListJobsComponents/PaginatedJobsList";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MyJobs = () => {
  const { data } = useGetJobsQuery({ page: 1 });
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ width: "80%", mx: "auto", p: 3 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Applied Jobs" {...a11yProps(0)} />
          <Tab label="Saved Jobs" {...a11yProps(1)} />
          <NotImplementedYet>
            <Tab label="In Progess" {...a11yProps(2)} />
          </NotImplementedYet>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <PaginatedJobsList
          isLoading={false}
          jobs={data?.results || []}
          page={1}
          totalPages={data?.totalPages || 1}
          onPageChange={() => {}}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Saved Jobs
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Paper>
  );
};

export default MyJobs;
