import { debounce } from "lodash";
import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";

const JobsQueryTextField = () => {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const jobSearchQuery = searchParams.get("query") || "";

  // Debounce the search input to delay the setSearchParams call
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearchParams({ query: value });
    }, 500), // 500ms delay
    []
  );

  useEffect(() => {
    setQuery(jobSearchQuery);
  }, [jobSearchQuery]);

  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  return (
    <TextField
      slotProps={{
        input: {
          startAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
          endAdornment: query && (
            <IconButton onClick={() => setSearchParams(undefined)}>
              <ClearIcon />
            </IconButton>
          ),
        },
      }}
      label="Search Jobs"
      size="small"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default JobsQueryTextField;
