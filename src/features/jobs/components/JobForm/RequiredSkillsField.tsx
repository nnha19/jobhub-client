import { Control } from "react-hook-form";

import CustomAutocomplete from "../../../../components/CustomAutocomplete";
import { NewJobApiArgs } from "../../api/types";

const RequiredSkillsField = ({
  control,
}: {
  control: Control<NewJobApiArgs>;
}) => {
  return (
    <CustomAutocomplete
      autocompleteProps={{
        options: [],
        freeSolo: true,
        multiple: true,
      }}
      label="Required Skills"
      control={control}
      name="requiredSkills"
    />
  );
};

export default RequiredSkillsField;
