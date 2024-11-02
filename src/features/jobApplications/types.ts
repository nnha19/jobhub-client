export interface JobApplication {
  _id: string;
  status: string;
  appliedAt: string;
  applicantId: string;
  customDetails: {
    firstName: string;
    lastName: string;
    email: string;
    resume: string;
    phoneNumber: string;
    coverLetter: string;
  };
  jobId: string;
}
