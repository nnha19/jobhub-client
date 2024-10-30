import { Box, Tooltip } from "@mui/material";

interface IProps {
  children: React.ReactNode;
}

const NotImplementedYet = ({ children }: IProps) => (
  <Tooltip title="Not implemented yet">
    <Box
      component="fieldset"
      disabled
      sx={{
        opacity: ".5",
        border: "unset",
      }}
    >
      {children}
    </Box>
  </Tooltip>
);

export default NotImplementedYet;
