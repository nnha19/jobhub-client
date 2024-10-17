import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

type Option = {
  label: string;
  value: string | number;
};

interface IProps<FValues extends FieldValues>
  extends UseControllerProps<FValues> {
  options: Option[];
  label: string;
}

const CustomSelectField = <FValues extends FieldValues>({
  control,
  name,
  options,
  label,
}: IProps<FValues>) => {
  const { field } = useController({ control, name });

  return (
    <FormControl fullWidth size="small">
      <InputLabel>{label}</InputLabel>
      <Select label={label} {...field}>
        {options.map((option) => (
          <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelectField;
