import * as Yup from "yup";

// Salary schema validation
const salarySchema = Yup.object().shape({
  min: Yup.number()
    .required("Minimum salary is required")
    .min(0, "Minimum salary must be at least 0"),
  max: Yup.number()
    .required("Maximum salary is required")
    .moreThan(
      Yup.ref("min"),
      "Maximum salary must be greater than minimum salary"
    ),
});

const companyValidationSchema = Yup.object().shape({
  name: Yup.string().required("Company name is required"),
  location: Yup.string().required("Location is required"),
});

// Main job schema validation
const jobValidationSchema = Yup.object().shape({
  title: Yup.string().required("Job title is required"),
  recruiter: Yup.string().required("Recruiter is required"),
  description: Yup.string().required("Job description is required"),

  salary: salarySchema.optional(),
  company: companyValidationSchema,
  requiredSkills: Yup.array()
    .of(Yup.string().min(2, "Skill must be at least 2 characters long"))
    .optional(),
  queries: Yup.array()
    .of(Yup.string().min(5, "Query must be at least 5 characters long"))
    .optional(),
});

export default jobValidationSchema;
