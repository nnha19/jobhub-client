import { Stack } from "@mui/material";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form";

import ErrorMessage from "../../components/FormFields/ErrorMessage";

const ControllerWithError = <
  FormValues extends FieldValues,
  FName extends FieldPath<FormValues>
>({
  control,
  name,
  render,
  ...props
}: ControllerProps<FormValues, FName>) => {
  const {
    formState: { errors },
  } = useController({ control, name });

  return (
    <Controller
      control={control}
      name={name}
      render={({ ...args }) => {
        return (
          <Stack>
            {render(args)}
            <ErrorMessage errors={errors} name={name} />
          </Stack>
        );
      }}
      {...props}
    />
  );
};

export default ControllerWithError;
