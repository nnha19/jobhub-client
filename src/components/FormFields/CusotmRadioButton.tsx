import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
} from "@mui/material";
import { forwardRef, Ref } from "react";

export type RadioOption = {
  label: string;
  value: string;
};

interface IProps extends RadioGroupProps {
  options: RadioOption[];
  radioGroupProps?: RadioGroupProps;
}

const CustomRadioButton = forwardRef(
  ({ options, radioGroupProps }: IProps, ref: Ref<unknown>) => {
    console.log(radioGroupProps);

    return (
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          User Type(Recruiter or Candidate)
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          sx={{ display: "flex", flexDirection: "row", gap: 2 }}
          ref={ref}
          {...radioGroupProps}
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
    );
  }
);

export default CustomRadioButton;
