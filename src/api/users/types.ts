export type UserTypeEnum = "recruiter" | "candidate";

export interface User {
  _id: string;
  userType: UserTypeEnum;
  email: string;
  username: string;
  joinedDate: string;
}
