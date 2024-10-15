import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
} from "@mui/material";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";

export type RadioOption = {
  label: string;
  value: string;
};

interface IProps<FValues extends FieldValues>
  extends UseControllerProps<FValues> {
  options: RadioOption[];
  radioGroupProps?: RadioGroupProps;
  label: string;
}

const CustomRadioButton = <FValues extends FieldValues>({
  options,
  name,
  control,
  label,
}: IProps<FValues>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <FormControl>
          <FormLabel id={label}>{label}</FormLabel>
          <RadioGroup
            aria-labelledby={label}
            sx={{ display: "flex", flexDirection: "row", gap: 2 }}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          >
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};

export default CustomRadioButton;
