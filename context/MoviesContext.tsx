import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import axios from "axios";
import { Movie } from "@/types";

type MoviesContextType = {
  movies: Movie[] | null;
  loading: boolean;
  error: string | null;
  fetchMovies: () => Promise<void>;
};

export const MoviesContext = createContext<MoviesContextType | undefined>(undefined);

export const MoviesContextProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/movies");
      console.log(response.data.allMovies.results);
      setMovies(response.data.allMovies.results);

      setError(null);
    } catch (err) {
      console.error("Error fetching movies:", err);
      setError("Failed to load movies");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return <MoviesContext.Provider value={{ movies, loading, error, fetchMovies }}>{children}</MoviesContext.Provider>;
};

export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (context === undefined) {
    throw new Error("useMovies must be used within a MoviesContextProvider");
  }
  return context;
};
