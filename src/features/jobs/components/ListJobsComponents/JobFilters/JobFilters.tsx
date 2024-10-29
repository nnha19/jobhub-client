import { Button, Stack } from "@mui/material";
import ButtonSelect from "../../../../../components/ButtonSelect";
import { EMPLOYMENT_TYPE, JOB_TYPE_OPTIONS } from "../../JobForm/const";
import { DATE_POSTED_OPTIONS } from "./consts";
import { Action, ActionType, JobFilterType } from "./useJobFilterReducer";

interface IProps {
  state: JobFilterType;
  dispatch: React.Dispatch<Action>;
}

const JobFilters = ({ state, dispatch }: IProps) => {
  return (
    <Stack spacing={2} justifyContent="flex-start" direction="row">
      <ButtonSelect
        value={state.employmentType}
        onChange={(newEploymentType) =>
          dispatch({
            type: ActionType.EMPLOYMENT_TYPE,
            payload: newEploymentType,
          })
        }
        options={EMPLOYMENT_TYPE}
        label="Employment Type"
      />
      <ButtonSelect
        label="Job Type"
        value={state.selectedJobType}
        onChange={(newJobType) =>
          dispatch({ type: ActionType.JOB_TYPE, payload: newJobType })
        }
        options={JOB_TYPE_OPTIONS}
      />

      <ButtonSelect
        value={state.datePosted}
        label="Date Posted"
        onChange={(newDatePosted) =>
          dispatch({ type: ActionType.DATE_POSTED, payload: newDatePosted })
        }
        options={DATE_POSTED_OPTIONS}
      />
      <Button
        onClick={() => dispatch({ type: ActionType.CLEAR_ALL })}
        variant="outlined"
        color="secondary"
      >
        Clear All
      </Button>
    </Stack>
  );
};

export default JobFilters;
