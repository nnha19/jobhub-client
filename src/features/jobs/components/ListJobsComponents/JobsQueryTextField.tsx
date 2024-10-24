import { debounce } from "lodash";
import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import { useCallback } from "react";

const JobsQueryTextField = () => {
  const [_, setSearchParams] = useSearchParams();

  // Debounce the search input to delay the setSearchParams call
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearchParams({ query: value });
    }, 500), // 500ms delay
    []
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  return (
    <TextField
      onChange={handleSearch}
      slotProps={{
        input: {
          startAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
        },
      }}
      label="Search Jobs"
      size="small"
    />
  );
};

export default JobsQueryTextField;
