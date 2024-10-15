import { useState } from "react";

import { Avatar, Badge, IconButton, Stack, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import { AppbarWrapper } from "./MainAppbar";
import RecruiterProfilePopover from "../features/recruiters";
import { deepPurple } from "@mui/material/colors";

const RecruiterAppbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

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
        <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>N</Avatar>
        </IconButton>
        <RecruiterProfilePopover
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
        />
      </Stack>
    </AppbarWrapper>
  );
};

export default RecruiterAppbar;
