
import React from 'react';
import MovieCard from './MovieCard';
import MovieSkeleton from './MovieSkeleton';
import { Movie } from '../types/movie';

interface MovieGridProps {
  movies: Movie[];
  isLoading: boolean;
  onMovieClick: (movie: Movie) => void;
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies, isLoading, onMovieClick }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <MovieSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="bg-muted rounded-full p-6 mb-4">
          <Search className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-medium">No movies found</h3>
        <p className="text-muted-foreground">Try adjusting your search or filter</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {movies.map((movie) => (
        <div key={movie.id} className="animate-slideUp" style={{animationDelay: `${Math.random() * 0.3}s`}}>
          <MovieCard movie={movie} onClick={onMovieClick} />
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;

// Import Search icon at the top of the file
import { Search } from 'lucide-react';
