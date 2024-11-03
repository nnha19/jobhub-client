import { useRef, useState } from "react";

import {
  Box,
  Chip,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import useUpload from "./useUpload";

interface IProps {
  onChange: (fileUrl: string) => void;
  label: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const FileUpload = ({ inputProps, label, onChange }: IProps) => {
  const [file, setFile] = useState<File | null>(null);
  const { isLoading, upload } = useUpload();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      upload(file).then((resp) => {
        onChange(resp.data.secure_url);
        setFile(file);
      });
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
        {isLoading ? (
          <CircularProgress />
        ) : (
          <IconButton>
            <CloudUploadIcon />
          </IconButton>
        )}
        <Typography variant="subtitle2">{label}</Typography>
      </Box>
      {file?.name && (
        <Chip
          sx={{ mt: 1 }}
          label={file?.name}
          onDelete={() => {
            setFile(null);
            onChange("");
            inputRef.current!.value = "";
          }}
        />
      )}

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
