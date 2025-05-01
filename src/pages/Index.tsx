
import React, { useState, useEffect } from 'react';
import MovieHeader from '../components/MovieHeader';
import MovieGrid from '../components/MovieGrid';
import MovieDetail from '../components/MovieDetail';
import { Movie } from '../types/movie';
import { mockMovies, getMoviesByCategory } from '../data/mockMovies';

const Index = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [activeCategory, setActiveCategory] = useState("Trending");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [showMovieDetail, setShowMovieDetail] = useState(false);
  
  // Initial load effect
  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const categoryMovies = getMoviesByCategory(activeCategory);
      setMovies(categoryMovies);
      setFilteredMovies(categoryMovies);
      setIsLoading(false);
    };
    
    loadMovies();
  }, [activeCategory]);
  
  // Search effect
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredMovies(movies);
      return;
    }
    
    const filtered = movies.filter(movie => 
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.genres.some(genre => 
        genre.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      movie.director.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredMovies(filtered);
  }, [searchTerm, movies]);
  
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };
  
  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setShowMovieDetail(true);
  };
  
  const handleCloseMovieDetail = () => {
    setShowMovieDetail(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <MovieHeader 
        onSearch={handleSearch} 
        activeCategory={activeCategory} 
        setActiveCategory={handleCategoryChange}
      />
      
      <main className="container mx-auto px-4 pt-36 pb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{activeCategory} Movies</h2>
          <span className="text-sm text-muted-foreground">
            {filteredMovies.length} {filteredMovies.length === 1 ? 'movie' : 'movies'} found
          </span>
        </div>
        
        <MovieGrid 
          movies={filteredMovies} 
          isLoading={isLoading} 
          onMovieClick={handleMovieClick}
        />
      </main>
      
      <MovieDetail 
        movie={selectedMovie} 
        isOpen={showMovieDetail} 
        onClose={handleCloseMovieDetail}
      />
    </div>
  );
};

export default Index;
