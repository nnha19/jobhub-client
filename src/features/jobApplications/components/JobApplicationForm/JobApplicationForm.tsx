import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
} from "@mui/material";
import CustomTextField from "../../../../components/FormFields/CustomTextField";
import { useForm } from "react-hook-form";

interface IProps {
  companyName: string;
  jobPosition: string;
  open: boolean;
  onClose: () => void;
}

const JobApplicationForm = ({
  companyName,
  jobPosition,
  open,
  onClose,
}: IProps) => {
  const { control } = useForm();

  return (
    <Dialog maxWidth="xl" open={open} onClose={onClose}>
      <DialogTitle>
        Apply <b>{jobPosition}</b> position at <b>{companyName}</b>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Stack spacing={2}>
          <CustomTextField
            textFieldProps={{
              label: "First Name",
            }}
            control={control}
            name="dm1"
          />
          <CustomTextField
            textFieldProps={{
              label: "Email",
            }}
            control={control}
            name="dm2"
          />
          <CustomTextField
            textFieldProps={{
              label: "Phone Number",
            }}
            control={control}
            name="dm3"
          />
          <CustomTextField
            textFieldProps={{
              label: "Resume",
            }}
            control={control}
            name="dm4"
          />
          <CustomTextField control={control} name="dm5" />
          <CustomTextField control={control} name="dm6" />
          <CustomTextField control={control} name="dm7" />
          <CustomTextField
            textFieldProps={{
              label: "Cover Letter",
              rows: 4,
              multiline: true,
            }}
            control={control}
            name="dm17"
          />
          <Button variant="contained">Submit</Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default JobApplicationForm;
