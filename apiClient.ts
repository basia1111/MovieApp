import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.MOVIE_API_KEY}`,
  },
});

export default axiosClient;
