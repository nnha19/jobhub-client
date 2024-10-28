import { useState } from "react";

import { Button, Menu, MenuItem, MenuList } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ClearIcon from "@mui/icons-material/Clear";

type OptionType<Value> = {
  label: string;
  value: Value;
};

interface IProps<Value> {
  options: OptionType<Value>[];
  value: Value | null;
  onChange: (value: Value | null) => void;
  label: string;
}

const ButtonSelect = <Value extends string | number>({
  options,
  value,
  onChange,
  label,
}: IProps<Value>) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (value: Value | null) => {
    onChange(value);
    handleClose();
  };

  const buttonLabel = value
    ? options.find((option) => option.value === value)?.label
    : label;

  const handleUnSelect = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();

    onChange(null);
  };

  const EndIcon = value ? (
    <ClearIcon onClick={handleUnSelect} />
  ) : (
    <KeyboardArrowDownIcon />
  );

  return (
    <>
      <Button
        endIcon={EndIcon}
        onClick={(e) => {
          setAnchorEl(e.currentTarget);
        }}
        variant={value ? "contained" : "outlined"}
      >
        {buttonLabel}
      </Button>
      <Menu onClose={handleClose} anchorEl={anchorEl} open={Boolean(anchorEl)}>
        <MenuList sx={{ minWidth: "14rem" }}>
          {options.map((option) => {
            return (
              <MenuItem
                key={option.value}
                onClick={() => {
                  handleSelect(option.value);
                }}
              >
                {option.label}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </>
  );
};

export default ButtonSelect;
