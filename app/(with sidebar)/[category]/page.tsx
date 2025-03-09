"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "@/types";
import { usePathname, useSearchParams } from "next/navigation";
import MovieGrid from "@/components/movieGrid";

export default function CategoryPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categoryId = usePathname().slice(1);

  const searchParams = useSearchParams();
  const categoryName = searchParams.get("cat");

  useEffect(() => {
    const fetchMoviesByCategory = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/movies/category/${categoryId}`);
        setMovies(response.data.movies.results);
        console.log(response.data.movies.results);
        setError(null);
      } catch (err) {
        console.error("Error fetching movies by category:", err);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesByCategory();
  }, [categoryId]);

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary mb-2">{categoryName}</h1>
        <p className="text-text-secondary">
          Showing {movies.length} {movies.length === 1 ? "movie" : "movies"} in the {categoryName?.toLowerCase()} category
        </p>
      </div>

      <MovieGrid movies={movies} loading={loading} error={error} />
    </div>
  );
}
