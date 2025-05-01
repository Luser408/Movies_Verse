
import React from 'react';

const MovieSkeleton: React.FC = () => {
  return (
    <div className="rounded-lg overflow-hidden movie-card-shadow">
      <div className="aspect-[2/3] bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" 
          style={{backgroundSize: '200% 100%'}}></div>
      </div>
      <div className="p-3 bg-muted space-y-2">
        <div className="h-4 bg-muted-foreground/20 rounded-md w-4/5 pulse-animation"></div>
        <div className="h-3 bg-muted-foreground/20 rounded-md w-1/2 pulse-animation"></div>
      </div>
    </div>
  );
};

export default MovieSkeleton;
