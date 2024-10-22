import { IconButton, Tooltip } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const SaveJobButton = () => {
  return (
    <Tooltip title="Save this job">
      <IconButton>
        <FavoriteBorderIcon />
      </IconButton>
    </Tooltip>
  );
};

export default SaveJobButton;
