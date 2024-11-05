import {
  Box,
  Button,
  capitalize,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import ShareIcon from "@mui/icons-material/Share";

import useRetrieveJobQuery from "../api/useRetrieveJobQuery";
import ViewJobSkeletons from "../components/ViewJobComponents/ViewJobSkeletons";
import { formatDistanceToNow } from "date-fns";
import { displaySalary } from "../utils";
import NotImplementedYet from "../../../components/NotImplementedYet";
import { JobApplicationForm } from "../../jobApplications";
import SanitizedHTML from "../../../components/SanitizedHTML";
import useDisclosure from "../../../hooks/useDisclosure";
import SaveJobButton from "../components/SaveJobButton";

const ViewJob = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { jobId } = useParams();
  const { data, isFetching } = useRetrieveJobQuery(jobId || "");

  if (!data || !jobId)
    return <Typography>No job found with the given id.</Typography>;

  if (isFetching) return <ViewJobSkeletons />;

  return (
    <>
      {isOpen && (
        <JobApplicationForm
          isOpen={isOpen}
          onClose={onClose}
          companyName={data.company?.name || ""}
          jobPosition={data.title}
          jobId={jobId}
        />
      )}
      <Card
        sx={{
          overflow: "unset",
        }}
      >
        <CardHeader
          sx={{
            top: 0,
            position: "sticky",
            backgroundColor: "background.paper",
            boxShadow: 1,
            borderRadius: "4px",
          }}
          title={data.title}
          subheader={
            <Box>
              {data.company?.name && (
                <Typography color="primary" variant="h6" mb={2}>
                  {data.company.name} - {data.company.address}
                </Typography>
              )}
              {data.salary && (
                <Typography>{displaySalary(data.salary)}</Typography>
              )}
              <Stack mt={1} spacing={1} direction="row">
                <Typography>{capitalize(data.jobType)}</Typography>
                <Typography>{capitalize(data.employmentType || "")}</Typography>
                <Typography>
                  ({formatDistanceToNow(data.postedDate, { addSuffix: true })})
                </Typography>
              </Stack>
              <Stack mt={1} direction="row" alignItems="center" spacing={2}>
                <Button
                  disabled={Boolean(data.currentUserApplication)}
                  onClick={onOpen}
                  sx={{ mt: 2 }}
                  variant="contained"
                >
                  Apply Now
                </Button>
                {data.currentUserApplication && (
                  <NavLink
                    to={`/job-applications/${data.currentUserApplication}`}
                    className="link"
                  >
                    <Typography>Application Submitted</Typography>
                  </NavLink>
                )}
              </Stack>
            </Box>
          }
          action={
            <Stack direction="row" spacing={1}>
              <SaveJobButton jobId={data._id} isSaved={data.isSaved} />
              <NotImplementedYet>
                <IconButton>
                  <ShareIcon />
                </IconButton>
              </NotImplementedYet>
            </Stack>
          }
        />
        <CardContent>
          <Typography variant="h6" mb={2}>
            Job Description
          </Typography>
          <SanitizedHTML p={0} className="ql-editor" html={data.description} />
          <Divider />
          <Stack mt={2} spacing={2}>
            <Typography variant="h6">Required Skills</Typography>
            <Stack spacing={1} direction="row">
              {data.requiredSkills.map((skill) => (
                <Chip key={skill} label={skill} />
              ))}
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default ViewJob;
