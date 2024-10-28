import { Button, ButtonProps } from "@mui/material";

interface IProps extends ButtonProps {
  isActive?: boolean;
  activeIcon?: React.ReactNode;
}

const CustomButton = ({
  isActive,
  children,
  activeIcon,
  endIcon,
  ...buttonProps
}: IProps) => {
  return (
    <Button
      endIcon={isActive ? activeIcon : endIcon}
      variant={isActive ? "contained" : "outlined"}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
