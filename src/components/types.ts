import { FieldValues, UseControllerProps } from "react-hook-form";

interface BaseFormProps<FValues extends FieldValues>
  extends UseControllerProps<FValues> {
  label: string;
}

export default BaseFormProps;
