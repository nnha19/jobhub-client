import { TextField, TextFieldProps } from "@mui/material";
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
  const { field } = useController({ control, name });
  return <TextField fullWidth size="small" {...field} {...textFieldProps} />;
};

export default CustomTextField;
