import {
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

interface IProps {
  dialogProps: DialogProps;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CustomDialog = ({ dialogProps, isOpen, onClose, children }: IProps) => {
  const handleCloseDialog = () => {
    onClose();
  };

  return (
    <Dialog {...dialogProps} open={isOpen} onClose={handleCloseDialog}>
      <DialogTitle>
        <Stack>
          <Typography>Title goes here</Typography>
          <IconButton onClick={handleCloseDialog}>
            <ClearIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
