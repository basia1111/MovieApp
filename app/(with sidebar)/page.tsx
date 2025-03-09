import MovieGrid from "@/components/movieGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="md:pt-16 py-4 mb-8">
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center">
        <h1 className="text-2xl md:text-5xl font-bold mb-4">Discover Amazing Movies</h1>
        <p className="md:text-lg text-sm text-text-secondary max-w-2xl mb-6">
          Explore the latest and greatest films from around the world. Find your next favorite movie.
        </p>
        <div className="flex space-x-4">
          <Button variant="default">Popular now</Button>
          <Button variant="outline" size="default">
            {" "}
            Top rated
          </Button>
        </div>
      </div>
    </section>
  );
};

const CategoriesSection = () => {
  return (
    <section className=" mb-8">
      <div className="mb-4">
        <h2 className="text-l md:text-2xl font-bold">Popular Categories</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {["Action", "Comedy", "Drama", "Horror", "Documentary", "Thriller"].map((category) => (
          <Link
            key={category}
            href={`/${category.toLowerCase()}`}
            className="bg-bg-card hover:bg-hover md:text-base text-xs transition-colors md:p-4 p-2 rounded-md text-center font-medium"
          >
            {category}
          </Link>
        ))}
      </div>
    </section>
  );
};

const MovieGridSection = () => {
  return (
    <section className=" py-4 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-l md:text-2xl font-bold">Popular Movies</h2>
      </div>
      <MovieGrid />
    </section>
  );
};

export default function Home() {
  return (
    <main className="w-full text-white">
      <HeroSection />
      <CategoriesSection />
      <MovieGridSection />
    </main>
  );
}
