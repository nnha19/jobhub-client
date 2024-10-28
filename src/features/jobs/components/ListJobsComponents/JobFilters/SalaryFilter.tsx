import { useState } from "react";
import { Button, Paper, Popover, Slider } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ClearIcon from "@mui/icons-material/Clear";

import CustomButton from "../../../../../components/CustomButton";

const SalaryFilter = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClear = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <>
      <CustomButton
        activeIcon={<KeyboardArrowDownIcon />}
        endIcon={<ClearIcon onClick={handleClear} />}
        variant="contained"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        100,0$ - 200,0$
      </CustomButton>
      <Popover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Paper sx={{ p: 2, width: "14rem" }}>
          <Slider
            value={[3000, 4500]}
            size="small"
            getAriaLabel={() => "Temperature range"}
            valueLabelDisplay="auto"
            min={300}
            max={10000}
          />
          <Button sx={{ mt: 2 }} variant="contained" fullWidth>
            Apply
          </Button>
        </Paper>
      </Popover>
    </>
  );
};

export default SalaryFilter;
