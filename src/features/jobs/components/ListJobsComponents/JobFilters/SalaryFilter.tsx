import { Button, Paper, Popover, Slider } from "@mui/material";
import { useState } from "react";

const SalaryFilter = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  return (
    <>
      <Button variant="contained" onClick={(e) => setAnchorEl(e.currentTarget)}>
        100,0$ - 200,0$
      </Button>
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
