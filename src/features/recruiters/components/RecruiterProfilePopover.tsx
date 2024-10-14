import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popover,
  Stack,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import { useAuthContext } from "../../../contexts/AuthContext";

interface IProps {
  anchorEl: HTMLButtonElement | null;
  onClose: () => void;
}

const RecruiterProfilePopover = ({ anchorEl, onClose }: IProps) => {
  const open = Boolean(anchorEl);

  const { handleLogout } = useAuthContext();

  return (
    <Popover
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      onClose={onClose}
      anchorEl={anchorEl}
      open={open}
    >
      <Paper sx={{ width: "14rem" }}>
        <Stack>
          <List>
            <ListItem disablePadding disableGutters>
              <ListItemButton>
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText primary="My Jobs" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding disableGutters>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
            <Divider />

            <ListItem disablePadding disableGutters>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Stack>
      </Paper>
    </Popover>
  );
};

export default RecruiterProfilePopover;
