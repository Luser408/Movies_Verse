
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface MovieHeaderProps {
  onSearch: (searchTerm: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const MovieHeader: React.FC<MovieHeaderProps> = ({ onSearch, activeCategory, setActiveCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  
  const categories = ["Trending", "Action", "Comedy", "Drama", "Sci-Fi", "Horror"];
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md shadow-lg' : 'bg-gradient-to-b from-background to-transparent'
    } py-4`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-primary mr-2">MovieVerse</h1>
            <span className="bg-red-600 text-white px-2 py-0.5 text-xs font-bold rounded">BETA</span>
          </div>
          
          <div className="relative w-full md:w-64 lg:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <input 
              type="text"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full bg-muted/50 border border-muted rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>
        
        <nav className="mt-4 overflow-x-auto pb-1 hide-scrollbar">
          <ul className="flex space-x-4 min-w-max">
            {categories.map((category) => (
              <li key={category}>
                <button 
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeCategory === category 
                      ? 'bg-primary text-primary-foreground font-medium' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MovieHeader;
