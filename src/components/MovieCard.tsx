
import React, { useState } from 'react';
import { Star, Clock } from 'lucide-react';
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className="card-zoom relative rounded-lg overflow-hidden movie-card-shadow cursor-pointer"
      onClick={() => onClick(movie)}
    >
      <div className="aspect-[2/3] relative">
        {!isLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-primary/20 border-t-primary/80 rounded-full animate-spin"></div>
          </div>
        )}
        <img 
          src={movie.posterUrl} 
          alt={movie.title} 
          className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 p-4 w-full">
            <div className="flex items-center mb-1">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
              <span className="text-sm font-semibold">{movie.rating.toFixed(1)}</span>
              <span className="mx-2 text-xs text-gray-300">•</span>
              <Clock className="h-3 w-3 mr-1" />
              <span className="text-xs">{movie.runtime} min</span>
            </div>
            <h3 className="text-lg font-bold text-white text-shadow">{movie.title}</h3>
            <div className="flex flex-wrap gap-1 mt-1">
              {movie.genres.slice(0, 3).map((genre) => (
                <span key={genre} className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 bg-muted">
        <h3 className="font-medium text-sm truncate">{movie.title}</h3>
        <p className="text-xs text-muted-foreground">{new Date(movie.releaseDate).getFullYear()}</p>
      </div>
    </div>
  );
};

export default MovieCard;
