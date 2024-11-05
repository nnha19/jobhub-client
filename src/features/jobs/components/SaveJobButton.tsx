import { IconButton, Tooltip } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useToggleSaveJobMutation from "../api/useToggleSaveJobMutation";

interface IProps {
  isSaved: boolean;
  jobId: string;
}

const SaveJobButton = ({ isSaved, jobId }: IProps) => {
  const toggleSaveJobMutation = useToggleSaveJobMutation(jobId);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    toggleSaveJobMutation.mutate();
  };

  if (isSaved) {
    return (
      <Tooltip title="Unsave this job">
        <IconButton onClick={handleClick}>
          <FavoriteIcon />
        </IconButton>
      </Tooltip>
    );
  }

  return (
    <Tooltip title="Save this job">
      <IconButton onClick={handleClick}>
        <FavoriteBorderIcon />
      </IconButton>
    </Tooltip>
  );
};

export default SaveJobButton;
