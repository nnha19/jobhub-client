import { object, string } from "yup";

const jobApplicationValidationSchema = object().shape({
  customDetails: object().shape({
    firstName: string().required("First Name is required"),
    email: string().email().required("Email is required"),
    phoneNumber: string().required("Phone Number is required"),
    resume: string().required("Resume is required"),
    coverLetter: string().required("Cover Letter is required").min(50),
  }),
});

export default jobApplicationValidationSchema;
