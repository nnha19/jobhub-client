import { useForm } from "react-hook-form";

import { Button, Stack, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import CustomTextField from "../../../../components/FormFields/CustomTextField";
import CustomDialog from "../../../../components/CustomDialog";
import useCreateJobApplicationMutation, {
  JobApplicationApiArgs,
} from "../../jobApplicationApi/useCreateJobApplicationMutation";
import jobApplicationValidationSchema from "./jobApplicationValidationSchema";
import FileUpload from "../../../../components/FileUpload";
import ControllerWithError from "../../../../lib/react-hook-form/ControllerWithError";

interface IProps {
  companyName: string;
  jobPosition: string;
  isOpen: boolean;
  onClose: () => void;
  jobId: string;
}

const JOB_APPLICATION_FORM_DEFAULT_VALUES: JobApplicationApiArgs = {
  customDetails: {
    firstName: "NYI NYI",
    lastName: "HMUE AUNG",
    email: "nyinyihmueaung19@gmail.com",
    phoneNumber: "+95 9768290598",
    coverLetter:
      "lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume",
    resume: "MY RESUME HERE",
  },
};

const JobApplicationForm = ({
  companyName,
  jobPosition,
  isOpen,
  onClose,
  jobId,
}: IProps) => {
  const createJobApplicationMutation = useCreateJobApplicationMutation();

  const {
    control,
    formState: { isDirty },
    handleSubmit,
  } = useForm<JobApplicationApiArgs>({
    defaultValues: JOB_APPLICATION_FORM_DEFAULT_VALUES,
    resolver: yupResolver(jobApplicationValidationSchema as any),
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const handleCheckDirtyAndClose = () => {
    if (isDirty) {
      const isConfirmed = window.confirm(
        "You have unsaved changes. Are you sure you want to close the dialog?"
      );
      if (isConfirmed) {
        onClose();
      }
      return;
    }

    onClose();
  };

  const onSubmit = (formData: JobApplicationApiArgs) => {
    createJobApplicationMutation.mutate(
      { data: formData, jobId },
      { onSuccess: onClose }
    );
  };

  return (
    <CustomDialog
      isOpen={isOpen}
      dialogProps={{
        fullWidth: true,
        maxWidth: "md",
        open: isOpen,
      }}
      onClose={handleCheckDirtyAndClose}
      title={
        <Typography variant="h5">
          Apply <b>{jobPosition}</b> position at <b>{companyName}</b>
        </Typography>
      }
    >
      <Stack onSubmit={handleSubmit(onSubmit)} component="form" spacing={2}>
        <Stack direction="row" spacing={2}>
          <CustomTextField
            textFieldProps={{
              label: "First Name",
            }}
            control={control}
            name="customDetails.firstName"
          />
          <CustomTextField
            textFieldProps={{
              label: "Last Name",
            }}
            control={control}
            name="customDetails.lastName"
          />
        </Stack>
        <CustomTextField
          textFieldProps={{
            label: "Email",
          }}
          control={control}
          name="customDetails.email"
        />
        <CustomTextField
          textFieldProps={{
            label: "Phone Number",
          }}
          control={control}
          name="customDetails.phoneNumber"
        />
        <ControllerWithError
          control={control}
          name="customDetails.resume"
          render={({ field: { onChange } }) => (
            <FileUpload label="Resume" onChange={onChange} />
          )}
        />
        <CustomTextField
          textFieldProps={{
            label: "Cover Letter",
            rows: 4,
            multiline: true,
          }}
          control={control}
          name="customDetails.coverLetter"
        />
        <Button type="submit" disabled={!isDirty} variant="contained">
          Submit
        </Button>
      </Stack>
    </CustomDialog>
  );
};

export default JobApplicationForm;
