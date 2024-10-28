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
import { NavLink } from "react-router-dom";

import SaveJobButton from "../SaveJobButton";
import { Job, Salary } from "../../api/types";
import { formatDistanceToNow } from "date-fns";
import TruncatedTypography from "../../../../components/TruncatedTypography";

const displaySalary = (salary: Salary) => `$${salary.min} - $${salary.max}`;

const JobCard = ({
  title,
  jobType,
  employmentType,
  postedDate,
  salary,
  description,
  requiredSkills,
  company,
  _id,
}: Job) => {
  return (
    <NavLink to={`/jobs/${_id}`}>
      <Card
        sx={{
          "&:hover": {
            bgcolor: (theme) => theme.palette.grey[100],
            cursor: "pointer",
          },
        }}
      >
        <CardHeader
          title={title}
          action={<SaveJobButton />}
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
    </NavLink>
  );
};

export default JobCard;
