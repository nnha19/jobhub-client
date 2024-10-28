import * as Yup from "yup";

// Salary schema validation
const salarySchema = Yup.object().shape({
  min: Yup.number().min(0, "Minimum salary must be at least 0"),
  max: Yup.number().moreThan(
    Yup.ref("min"),
    "Maximum salary must be greater than minimum salary"
  ),
});

const companyValidationSchema = Yup.object({
  name: Yup.string().required("Company name is required"),
  address: Yup.string().required("Address is required"),
});

// Main job schema validation
const jobValidationSchema = Yup.object().shape({
  title: Yup.string().required("Job title is required"),
  description: Yup.string().required("Job description is required"),

  salary: salarySchema.optional(),
  company: companyValidationSchema,
  employmentType: Yup.string().required("Employment type is required"),
  requiredSkills: Yup.array()
    .required()
    .min(1, "At least one skill is required"),
  jobType: Yup.string().required("Job type is required"),
});

export default jobValidationSchema;
