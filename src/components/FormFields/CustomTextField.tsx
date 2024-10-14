import { forwardRef, Ref } from "react";

import { TextField, TextFieldProps } from "@mui/material";

const CustomTextField = forwardRef(
  (props: TextFieldProps, ref: Ref<HTMLInputElement>) => {
    return <TextField size="small" {...props} ref={ref} />;
  }
);

export default CustomTextField;
