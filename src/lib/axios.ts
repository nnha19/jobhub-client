import Axios from "axios";

const api = Axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    //
    alert(message);

    if (error.response?.status === 401) {
      window.location.href = `/login`;
    }

    return Promise.reject(error);
  }
);

export default api;
