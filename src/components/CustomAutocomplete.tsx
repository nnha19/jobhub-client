import {
  Autocomplete,
  AutocompleteProps,
  Stack,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { FieldValues, useController } from "react-hook-form";
import BaseFormProps from "./types";
import ErrorMessage from "./FormFields/ErrorMessage";

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
    formState,
  } = useController({ control, name });

  return (
    <Stack>
      <Autocomplete
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            {...textFieldProps}
            label={label}
          />
        )}
        multiple
        {...autocompleteProps}
        {...field}
        onChange={(_, data) => onChange(data)}
      />
      <ErrorMessage errors={formState.errors} name={name} />
    </Stack>
  );
};

export default CustomAutocomplete;
