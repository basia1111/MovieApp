"use client";

import { useMovies } from "@/context/MoviesContext";
import Link from "next/link";
import { Star } from "lucide-react";

const MovieGrid = () => {
  const { movies, loading, error } = useMovies();

  if (loading) return <div className="text-center p-8">Loading movies...</div>;
  if (error) return <div className="text-center text-error p-8">Error: {error}</div>;
  if (!movies || movies.length === 0) return <div className="text-center p-8">No movies found</div>;

  return (
    <div className="grid   grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-6 gap-4 py-6">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-bg-card hover:bg-hover rounded-lg overflow-hidden shadow-md hover:scale-102 transition-transform duration-200 group">
          <Link href={`/movie/${movie.id}`}>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className=" w-full ratio-[9/16]  opacity-80 object-cover group-hover:opacity-100 transition-all"
              />
            ) : (
              <div className="w-full h-64 bg-bg-secondary flex items-center justify-center group-hover:bg-hover transition-all">No image available</div>
            )}
            <div className="p-4 ">
              <h3 className="font-bold text-text-primary md:text-base text-sm">{movie.title}</h3>
              <p className="text-text-secondary text-sm mt-1">
                {new Date(movie.release_date).getFullYear()} • <span>{movie.vote_average.toFixed(1)}</span>
                <Star className="text-brand-primary inline ml-1.5" size="14" />
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
