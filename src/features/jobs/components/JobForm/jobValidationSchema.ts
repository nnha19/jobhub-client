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

// Location schema validation
const locationSchema = Yup.object().shape({
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  address: Yup.string().optional(),
});

// Main job schema validation
const jobValidationSchema = Yup.object().shape({
  title: Yup.string().required("Job title is required"),

  recruiter: Yup.string().required("Recruiter is required"),
  description: Yup.string().required("Job description is required"),

  salary: salarySchema.optional(), // Optional as salary is not required in your schema
  location: locationSchema.optional(), // Optional as location is not required in your schema
  requiredSkills: Yup.array()
    .of(Yup.string().min(2, "Skill must be at least 2 characters long"))
    .optional(),
  queries: Yup.array()
    .of(Yup.string().min(5, "Query must be at least 5 characters long"))
    .optional(),
});

export default jobValidationSchema;
