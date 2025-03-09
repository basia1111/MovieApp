import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmM2NjY1YjE0MDY1NDJmNjA3OWQ2OTIzOGUyY2Y5NCIsIm5iZiI6MTc0MTE4NjQ4Ny4xMzY5OTk4LCJzdWIiOiI2N2M4NjViNzkwMzU1YzY0NTc2ZTU4ZmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.E9qJiKmKhU14Pf0C3G0WtILkkLicqJPVMV5SvsRc2RA `,
  },
});

export default axiosClient;
