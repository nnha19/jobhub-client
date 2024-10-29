import { CircularProgress, Typography } from "@mui/material";

interface IProps<T> {
  isFetching: boolean;
  spinner: JSX.Element;
  noDataMessage: string | JSX.Element;
  data: T[] | undefined;
  children: (data: NonNullable<T[]>) => JSX.Element | React.ReactNode;
}

const WithDataFetchingStates = <T,>({
  isFetching,
  spinner,
  noDataMessage,
  data,
  children,
}: IProps<T>) => {
  if (isFetching) return spinner || <CircularProgress />;

  if (data?.length === 0)
    return typeof noDataMessage === "string" ? (
      <Typography textAlign="center"> {noDataMessage}</Typography>
    ) : (
      noDataMessage
    );

  return typeof children === "function" ? children(data as T[]) : children;
};

export default WithDataFetchingStates;
