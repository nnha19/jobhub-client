import {
  Box,
  capitalize,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

import SaveJobButton from "../SaveJobButton";
import { Job } from "../../api/types";
import TruncatedTypography from "../../../../components/TruncatedTypography";
import { displaySalary } from "../../utils";

const JobCard = ({
  title,
  jobType,
  employmentType,
  postedDate,
  salary,
  description,
  requiredSkills,
  company,
  isSaved,
  _id,
}: Job) => {
  const navigate = useNavigate();

  const handleNavigateToJobDetails = () => {
    navigate(`/jobs/${_id}`);
  };

  return (
    <Card
      onClick={handleNavigateToJobDetails}
      sx={{
        "&:hover": {
          bgcolor: (theme) => theme.palette.grey[100],
          cursor: "pointer",
        },
      }}
    >
      <CardHeader
        title={title}
        action={<SaveJobButton jobId={_id} isSaved={isSaved} />}
        subheader={
          <Box>
            {company?.name && (
              <Typography variant="subtitle1" mb={2}>
                {company.name}
              </Typography>
            )}
            {salary && <Typography>{displaySalary(salary)}</Typography>}
            <Stack mt={1} spacing={1} direction="row">
              <Typography>{capitalize(jobType)}</Typography>
              <Typography>{capitalize(employmentType || "")}</Typography>
              <Typography>
                ({formatDistanceToNow(postedDate, { addSuffix: true })})
              </Typography>
            </Stack>
          </Box>
        }
      />
      <CardContent>
        <TruncatedTypography text={description} wordLimit={50} />
        <Stack mt={2} direction="row" spacing={1}>
          {requiredSkills.map((skill) => (
            <Chip key={skill} label={skill} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default JobCard;
