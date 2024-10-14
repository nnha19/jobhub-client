import { Badge, IconButton, Stack, Tooltip } from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import AddIcon from "@mui/icons-material/Add";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import { AppbarWrapper } from "./MainAppbar";

const RecruiterAppbar = () => {
  return (
    <AppbarWrapper>
      <Stack alignItems="center" spacing={2} direction="row">
        <IconButton>
          <Badge badgeContent={4} color="error">
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>
        <Tooltip title="Add New Job">
          <IconButton>
            <AddIcon />
          </IconButton>
        </Tooltip>
        <IconButton>
          <Person2Icon />
        </IconButton>
      </Stack>
    </AppbarWrapper>
  );
};

export default RecruiterAppbar;
