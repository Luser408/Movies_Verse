
import React from 'react';
import { X, Star, Clock, Calendar } from 'lucide-react';
import { Movie } from '../types/movie';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface MovieDetailProps {
  movie: Movie | null;
  isOpen: boolean;
  onClose: () => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, isOpen, onClose }) => {
  if (!movie) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[800px] p-0 gap-0 overflow-hidden bg-card">
        <div className="relative">
          <div className="w-full h-56 md:h-80 overflow-hidden relative">
            <img 
              src={movie.backdropUrl || movie.posterUrl} 
              alt={movie.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          </div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full bg-background/90 p-2 hover:bg-muted transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
          
          <div className="absolute bottom-0 left-0 flex p-6 gap-4 w-full">
            <div className="hidden md:block w-32 h-48 rounded-lg overflow-hidden shadow-lg flex-shrink-0 border border-muted">
              <img 
                src={movie.posterUrl} 
                alt={movie.title} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="flex-1 md:-mb-10">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-md font-medium">
                  {movie.genres[0]}
                </span>
                <span className="text-xs text-muted-foreground">
                  {new Date(movie.releaseDate).getFullYear()}
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-shadow">{movie.title}</h2>
              
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{movie.rating.toFixed(1)}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span className="text-xs">{movie.runtime} min</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span className="text-xs">
                    {new Date(movie.releaseDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-6 py-8 md:pt-12">
          <div className="flex gap-2 mb-3 flex-wrap">
            {movie.genres.map((genre) => (
              <span 
                key={genre} 
                className="text-xs px-2 py-1 bg-accent rounded-full"
              >
                {genre}
              </span>
            ))}
          </div>
          
          <h3 className="font-semibold mb-2">Overview</h3>
          <p className="text-muted-foreground">{movie.overview}</p>
          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <h4 className="text-sm font-medium">Director</h4>
              <p className="text-sm text-muted-foreground">{movie.director}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium">Language</h4>
              <p className="text-sm text-muted-foreground">{movie.language}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium">Budget</h4>
              <p className="text-sm text-muted-foreground">
                {movie.budget ? `$${(movie.budget / 1000000).toFixed(1)}M` : 'N/A'}
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="font-semibold mb-3">Cast</h3>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {movie.cast.map((actor) => (
                <div key={actor.name} className="flex-shrink-0 w-16">
                  <div className="w-16 h-16 rounded-full bg-muted overflow-hidden">
                    {actor.profileUrl ? (
                      <img 
                        src={actor.profileUrl} 
                        alt={actor.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-accent">
                        {actor.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-center mt-1 truncate">{actor.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MovieDetail;
