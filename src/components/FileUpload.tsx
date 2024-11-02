import { useRef } from "react";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

interface IProps {
  onChange: (file: File) => void;
  value: File | null;
  label: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const FileUpload = ({ inputProps, label }: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      //   onChange(file);
    }
  };

  return (
    <Stack alignItems="center">
      <Box
        onClick={() => inputRef.current?.click()}
        sx={{
          height: 150,
          minWidth: 150,
          border: "1px dashed gray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          cursor: "pointer",
        }}
      >
        <IconButton>
          <CloudUploadIcon />
        </IconButton>
        <Typography variant="subtitle2">{label}</Typography>
      </Box>

      <input
        onChange={handleChange}
        ref={inputRef}
        hidden
        type="file"
        {...inputProps}
      />
    </Stack>
  );
};

export default FileUpload;
