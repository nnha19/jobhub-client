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
  title: string | JSX.Element;
}

const CustomDialog = ({
  dialogProps,
  isOpen,
  onClose,
  children,
  title,
}: IProps) => {
  const handleCloseDialog = () => {
    onClose();
  };

  return (
    <Dialog {...dialogProps} open={isOpen} onClose={handleCloseDialog}>
      <DialogTitle>
        <Stack direction="row" justifyContent="space-between">
          {typeof title !== "string" ? (
            title
          ) : (
            <Typography variant="h5">{title}</Typography>
          )}
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
