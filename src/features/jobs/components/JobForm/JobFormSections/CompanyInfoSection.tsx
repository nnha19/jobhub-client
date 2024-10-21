import { Card, CardContent, CardHeader, Stack } from "@mui/material";
import { Control } from "react-hook-form";

import CustomTextField from "../../../../../components/FormFields/CustomTextField";
import { NewJobApiArgs } from "../../../api/types";

const CompanyInfoSection = ({
  control,
}: {
  control: Control<NewJobApiArgs>;
}) => {
  return (
    <Card>
      <CardHeader title="Company Info" />
      <CardContent>
        <Stack spacing={2}>
          <CustomTextField
            control={control}
            name="company.name"
            textFieldProps={{
              label: "Company Name",
            }}
          />
          <CustomTextField
            control={control}
            name="company.address"
            textFieldProps={{
              label: "Company Address",
            }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CompanyInfoSection;
