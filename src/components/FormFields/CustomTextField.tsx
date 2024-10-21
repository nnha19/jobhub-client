import { Stack, TextField, TextFieldProps } from "@mui/material";
import {
  useController,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

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
      <ErrorMessage errors={errors} name={name} />
    </Stack>
  );
};

export default CustomTextField;
