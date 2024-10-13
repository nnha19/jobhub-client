import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const CustomRadioButton = () => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">
        User Type(Recruiter or Candidate)
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="candidate"
        name="radio-buttons-group"
        sx={{ display: "flex", flexDirection: "row", gap: 2 }}
      >
        <FormControlLabel
          value="candidate"
          control={<Radio />}
          label="Candidate"
        />
        <FormControlLabel
          value="recruiter"
          control={<Radio />}
          label="Recruiter"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default CustomRadioButton;
