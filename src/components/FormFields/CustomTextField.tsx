import { Stack, TextField, TextFieldProps, Typography } from "@mui/material";
import {
  useController,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";

interface IProps<T extends FieldValues> extends UseControllerProps<T> {
  textFieldProps?: TextFieldProps;
}

const CustomTextField = <FValues extends FieldValues>({
  control,
  name,
  textFieldProps,
}: IProps<FValues>) => {
  const {
    field,
    formState: { errors },
  } = useController({ control, name });
  return (
    <Stack width="100%">
      <TextField fullWidth size="small" {...field} {...textFieldProps} />
      {errors && errors[name]?.message && (
        <Typography color="error">{errors[name].message.toString()}</Typography>
      )}
    </Stack>
  );
};

export default CustomTextField;
