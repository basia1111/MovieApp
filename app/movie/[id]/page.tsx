"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { MovieDetailsResponse } from "@/types";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import LoadingState from "@/components/states/LoadingState";
import NotFoundState from "@/components/states/NotFoundState";
import ErrorState from "@/components/states/ErrorState";

const BackdropImage = ({ backdropPath, title }: { backdropPath: string | null; title: string }) => {
  if (!backdropPath) return null;

  return (
    <div className="w-full h-[40vh] relative">
      <img src={`https://image.tmdb.org/t/p/original${backdropPath}`} alt={`${title} backdrop`} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary"></div>
    </div>
  );
};

const BackButton = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto px-6 py-4">
      <Button onClick={() => router.back()} variant="link">
        <ArrowLeft />
        Back
      </Button>
    </div>
  );
};

const MoviePoster = ({ posterPath, title }: { posterPath: string | null; title: string }) => {
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
      {posterPath ? (
        <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} className="w-full h-auto rounded-lg shadow-lg" />
      ) : (
        <div className="w-full aspect-[2/3] bg-bg-card flex items-center justify-center rounded-lg">No poster available</div>
      )}
    </div>
  );
};

const MovieHeader = ({ title, releaseDate, voteAverage, voteCount }: { title: string; releaseDate?: string; voteAverage?: number; voteCount?: number }) => {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>

      {releaseDate && (
        <p className="text-text-secondary mb-6">
          {new Date(releaseDate).getFullYear()} • {voteAverage?.toFixed(1)}⭐ ({voteCount} votes)
        </p>
      )}
    </>
  );
};

const GenrePills = ({ genres }: { genres?: { id: number; name: string }[] }) => {
  if (!genres || genres.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {genres.map((genre) => (
        <span key={genre.id} className="px-3 py-1 bg-bg-secondary text-text-primary text-sm rounded-full">
          {genre.name}
        </span>
      ))}
    </div>
  );
};

const MovieOverview = ({ overview }: { overview?: string }) => {
  if (!overview) return null;

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Overview</h2>
      <p className="text-text-secondary leading-relaxed">{overview}</p>
    </div>
  );
};

const MovieDetails = ({ runtime, originalLanguage, releaseDate }: { runtime?: number | null; originalLanguage?: string; releaseDate?: string }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-border pt-6">
      {runtime && (
        <div>
          <h3 className="text-sm text-text-secondary mb-1">Runtime</h3>
          <p>
            {Math.floor(runtime / 60)}h {runtime % 60}m
          </p>
        </div>
      )}

      {originalLanguage && (
        <div>
          <h3 className="text-sm text-text-secondary mb-1">Language</h3>
          <p>{originalLanguage.toUpperCase()}</p>
        </div>
      )}

      {releaseDate && (
        <div>
          <h3 className="text-sm text-text-secondary mb-1">Release Date</h3>
          <p>{new Date(releaseDate).toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default function MoviePage() {
  const [movie, setMovie] = useState<MovieDetailsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/movies/${params.id}`);
        setMovie(response.data.movie);
        setError(null);
      } catch (err) {
        console.error("Error fetching movie:", err);
        setError("Failed to load movie details");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [params.id]);

  if (loading) return <LoadingState height="h-screen" />;
  if (error) return <ErrorState message={error} />;
  if (!movie) return <NotFoundState message="We couldn't find requested movie" />;

  return (
    <div className="text-white">
      <BackdropImage backdropPath={movie.backdrop_path} title={movie.title} />
      <BackButton />

      <div className="container mx-auto px-6 pb-8">
        <div className="flex flex-col md:flex-row gap-8">
          <MoviePoster posterPath={movie.poster_path} title={movie.title} />

          <div className="flex-1">
            <MovieHeader title={movie.title} releaseDate={movie.release_date} voteAverage={movie.vote_average} voteCount={movie.vote_count} />
            <GenrePills genres={movie.genres} />
            <MovieOverview overview={movie.overview} />
            <MovieDetails runtime={movie.runtime} originalLanguage={movie.original_language} releaseDate={movie.release_date} />
          </div>
        </div>
      </div>
    </div>
  );
}
