import { useReducer } from "react";

import { EmploymentType, JobType } from "../../../api/types";
import { DatePostedValue } from "./consts";

export type JobFilterType = {
  datePosted: DatePostedValue | null;
  selectedJobType: JobType | null;
  employmentType: EmploymentType | null;
};

export enum ActionType {
  DATE_POSTED = "DATE_POSTED",
  JOB_TYPE = "JOB_TYPE",
  EMPLOYMENT_TYPE = "EMPLOYMENT_TYPE",
  CLEAR_ALL = "CLEAR_ALL",
}

type DatePostedActionType = {
  type: ActionType.DATE_POSTED;
  payload: DatePostedValue | null;
};

type JobTypeActionType = {
  type: ActionType.JOB_TYPE;
  payload: JobType | null;
};

type EmploymentTypeActionType = {
  type: ActionType.EMPLOYMENT_TYPE;
  payload: EmploymentType | null;
};

export type Action =
  | DatePostedActionType
  | JobTypeActionType
  | EmploymentTypeActionType
  | { type: ActionType.CLEAR_ALL };

const INITIAL_STATE: JobFilterType = {
  datePosted: null,
  selectedJobType: null,
  employmentType: null,
};

const reducer = (state: JobFilterType, action: Action) => {
  switch (action.type) {
    case ActionType.DATE_POSTED:
      return {
        ...state,
        datePosted: action.payload,
      };
    case ActionType.JOB_TYPE:
      return {
        ...state,
        selectedJobType: action.payload,
      };
    case ActionType.EMPLOYMENT_TYPE:
      return {
        ...state,
        employmentType: action.payload,
      };

    case ActionType.CLEAR_ALL:
      return INITIAL_STATE;

    default:
      return state;
  }
};

const useJobFilterReducer = () => {
  return useReducer(reducer, INITIAL_STATE);
};

export default useJobFilterReducer;
