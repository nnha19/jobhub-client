import {
  Autocomplete,
  AutocompleteProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { FieldValues, useController } from "react-hook-form";
import BaseFormProps from "./types";

export type CustomAutoCompleteProps<Value> = Partial<
  AutocompleteProps<Value, boolean, boolean, boolean>
> & {
  options: AutocompleteProps<Value, boolean, boolean, boolean>["options"];
};

interface IProps<Value, FValues extends FieldValues>
  extends BaseFormProps<FValues> {
  autocompleteProps: CustomAutoCompleteProps<Value>;
  textFieldProps?: Omit<TextFieldProps, "label">;
}

const CustomAutocomplete = <Value, FValues extends FieldValues>({
  textFieldProps,
  autocompleteProps,
  control,
  name,
  label,
}: IProps<Value, FValues>) => {
  const {
    field: { onChange, ...field },
  } = useController({ control, name });

  return (
    <Autocomplete
      renderInput={(params) => (
        <TextField {...params} size="small" {...textFieldProps} label={label} />
      )}
      multiple
      {...autocompleteProps}
      {...field}
      onChange={(_, data) => onChange(data)}
    />
  );
};

export default CustomAutocomplete;
