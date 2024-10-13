import { TextField, TextFieldProps } from "@mui/material";

// interface IProps extends TextFieldProps {
//   //
// }

const CustomTextField = ({ ...textFieldProps }: TextFieldProps) => {
  return <TextField size="small" {...textFieldProps} />;
};

export default CustomTextField;
