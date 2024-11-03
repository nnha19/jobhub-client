import { useState } from "react";
import axios from "axios";
import { CloudinaryUploadResponse } from "./types";

const useUpload = () => {
  const [isLoading, setIsLoading] = useState(false);

  const upload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);

    setIsLoading(true);

    return axios
      .post<CloudinaryUploadResponse>(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUD_NAME
        }/upload?api_key=${import.meta.env.VITE_CLOUD_API_KEY}`,

        formData
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { isLoading, upload };
};

export default useUpload;
