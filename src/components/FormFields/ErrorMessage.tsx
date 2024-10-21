import { FieldErrors, FieldValues, Path } from "react-hook-form";
import { Stack, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

interface IProps<FValues extends FieldValues> {
  errors: FieldErrors<FValues>;
  name: Path<FValues>;
}

const ErrorMessage = <FValues extends FieldValues>({
  errors,
  name,
}: IProps<FValues>) => {
  if (errors[name] && errors[name].message) {
    return (
      <Stack
        sx={{
          color: "error.main",
        }}
        spacing={1}
        direction="row"
        mt={1}
        alignItems="center"
      >
        <ErrorIcon />
        <Typography>{errors[name].message.toString()}</Typography>
      </Stack>
    );
  }
};

export default ErrorMessage;
