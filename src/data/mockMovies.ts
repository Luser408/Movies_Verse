
import { Movie } from '../types/movie';

export const mockMovies: Movie[] = [
  {
    id: "1",
    title: "Inception",
    posterUrl: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fG1vdmllJTIwcG9zdGVyfGVufDB8fDB8fHww",
    backdropUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWUlMjBzY2VuZXxlbnwwfHwwfHx8MA%3D%3D",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    releaseDate: "2010-07-16",
    genres: ["Action", "Sci-Fi", "Thriller"],
    rating: 8.8,
    runtime: 148,
    director: "Christopher Nolan",
    language: "English",
    budget: 160000000,
    cast: [
      {
        name: "Leonardo DiCaprio",
        character: "Cobb",
      },
      {
        name: "Joseph Gordon-Levitt",
        character: "Arthur",
      },
      {
        name: "Ellen Page",
        character: "Ariadne",
      },
      {
        name: "Tom Hardy",
        character: "Eames",
      },
      {
        name: "Ken Watanabe",
        character: "Saito",
      }
    ]
  },
  {
    id: "2",
    title: "The Shawshank Redemption",
    posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJpc29ufGVufDB8fDB8fHww",
    backdropUrl: "https://images.unsplash.com/photo-1570872626485-d8ffea69f463?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJpc29ufGVufDB8fDB8fHww",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    releaseDate: "1994-09-23",
    genres: ["Drama"],
    rating: 9.3,
    runtime: 142,
    director: "Frank Darabont",
    language: "English",
    budget: 25000000,
    cast: [
      {
        name: "Tim Robbins",
        character: "Andy Dufresne",
      },
      {
        name: "Morgan Freeman",
        character: "Ellis Boyd 'Red' Redding",
      }
    ]
  },
  {
    id: "3",
    title: "The Dark Knight",
    posterUrl: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0bWFufGVufDB8fDB8fHww",
    backdropUrl: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmF0bWFufGVufDB8fDB8fHww",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    releaseDate: "2008-07-18",
    genres: ["Action", "Crime", "Drama"],
    rating: 9.0,
    runtime: 152,
    director: "Christopher Nolan",
    language: "English",
    budget: 185000000,
    cast: [
      {
        name: "Christian Bale",
        character: "Bruce Wayne",
      },
      {
        name: "Heath Ledger",
        character: "Joker",
      },
      {
        name: "Aaron Eckhart",
        character: "Harvey Dent",
      }
    ]
  },
  {
    id: "4",
    title: "Pulp Fiction",
    posterUrl: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3JpbWV8ZW58MHx8MHx8fDA%3D",
    backdropUrl: "https://images.unsplash.com/photo-1607646444362-a57509714fcd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1aXR8ZW58MHx8MHx8fDA%3D",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    releaseDate: "1994-10-14",
    genres: ["Crime", "Drama"],
    rating: 8.9,
    runtime: 154,
    director: "Quentin Tarantino",
    language: "English",
    budget: 8000000,
    cast: [
      {
        name: "John Travolta",
        character: "Vincent Vega",
      },
      {
        name: "Uma Thurman",
        character: "Mia Wallace",
      },
      {
        name: "Samuel L. Jackson",
        character: "Jules Winnfield",
      }
    ]
  },
  {
    id: "5",
    title: "The Lord of the Rings: The Return of the King",
    posterUrl: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFudGFzeXxlbnwwfHwwfHx8MA%3D%3D",
    backdropUrl: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
    overview: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    releaseDate: "2003-12-17",
    genres: ["Action", "Adventure", "Drama", "Fantasy"],
    rating: 8.9,
    runtime: 201,
    director: "Peter Jackson",
    language: "English",
    budget: 94000000,
    cast: [
      {
        name: "Elijah Wood",
        character: "Frodo Baggins",
      },
      {
        name: "Ian McKellen",
        character: "Gandalf",
      },
      {
        name: "Viggo Mortensen",
        character: "Aragorn",
      }
    ]
  },
  {
    id: "6",
    title: "Interstellar",
    posterUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2V8ZW58MHx8MHx8fDA%3D",
    backdropUrl: "https://images.unsplash.com/photo-1537420327992-d6e192287183?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNwYWNlfGVufDB8fDB8fHww",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    releaseDate: "2014-11-07",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    rating: 8.6,
    runtime: 169,
    director: "Christopher Nolan",
    language: "English",
    budget: 165000000,
    cast: [
      {
        name: "Matthew McConaughey",
        character: "Cooper",
      },
      {
        name: "Anne Hathaway",
        character: "Brand",
      },
      {
        name: "Jessica Chastain",
        character: "Murph",
      }
    ]
  },
  {
    id: "7",
    title: "The Matrix",
    posterUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWF0cml4fGVufDB8fDB8fHww",
    backdropUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
    overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    releaseDate: "1999-03-31",
    genres: ["Action", "Sci-Fi"],
    rating: 8.7,
    runtime: 136,
    director: "Lana Wachowski, Lilly Wachowski",
    language: "English",
    budget: 63000000,
    cast: [
      {
        name: "Keanu Reeves",
        character: "Neo",
      },
      {
        name: "Laurence Fishburne",
        character: "Morpheus",
      },
      {
        name: "Carrie-Anne Moss",
        character: "Trinity",
      }
    ]
  },
  {
    id: "8",
    title: "Parasite",
    posterUrl: "https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
    backdropUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
    overview: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    releaseDate: "2019-10-11",
    genres: ["Comedy", "Drama", "Thriller"],
    rating: 8.6,
    runtime: 132,
    director: "Bong Joon Ho",
    language: "Korean",
    budget: 11400000,
    cast: [
      {
        name: "Song Kang-ho",
        character: "Kim Ki-taek",
      },
      {
        name: "Lee Sun-kyun",
        character: "Park Dong-ik",
      },
      {
        name: "Cho Yeo-jeong",
        character: "Park Yeon-kyo",
      }
    ]
  },
  {
    id: "9",
    title: "The Silence of the Lambs",
    posterUrl: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9ycm9yfGVufDB8fDB8fHww",
    backdropUrl: "https://images.unsplash.com/photo-1569654513669-03562eeb033d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvcnJvcnxlbnwwfHwwfHx8MA%3D%3D",
    overview: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    releaseDate: "1991-02-14",
    genres: ["Crime", "Drama", "Thriller", "Horror"],
    rating: 8.6,
    runtime: 118,
    director: "Jonathan Demme",
    language: "English",
    budget: 19000000,
    cast: [
      {
        name: "Jodie Foster",
        character: "Clarice Starling",
      },
      {
        name: "Anthony Hopkins",
        character: "Dr. Hannibal Lecter",
      },
      {
        name: "Scott Glenn",
        character: "Jack Crawford",
      }
    ]
  },
  {
    id: "10",
    title: "La La Land",
    posterUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
    backdropUrl: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amF6enxlbnwwfHwwfHx8MA%3D%3D",
    overview: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    releaseDate: "2016-12-09",
    genres: ["Comedy", "Drama", "Music", "Romance"],
    rating: 8.0,
    runtime: 128,
    director: "Damien Chazelle",
    language: "English",
    budget: 30000000,
    cast: [
      {
        name: "Ryan Gosling",
        character: "Sebastian",
      },
      {
        name: "Emma Stone",
        character: "Mia",
      },
      {
        name: "John Legend",
        character: "Keith",
      }
    ]
  },
  {
    id: "11",
    title: "Joker",
    posterUrl: "https://images.unsplash.com/photo-1559583109-3e7968136c99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvd258ZW58MHx8MHx8fDA%3D",
    backdropUrl: "https://images.unsplash.com/photo-1559583109-3e7968136c99?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvd258ZW58MHx8MHx8fDA%3D",
    overview: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    releaseDate: "2019-10-04",
    genres: ["Crime", "Drama", "Thriller"],
    rating: 8.4,
    runtime: 122,
    director: "Todd Phillips",
    language: "English",
    budget: 55000000,
    cast: [
      {
        name: "Joaquin Phoenix",
        character: "Arthur Fleck / Joker",
      },
      {
        name: "Robert De Niro",
        character: "Murray Franklin",
      },
      {
        name: "Zazie Beetz",
        character: "Sophie Dumond",
      }
    ]
  },
  {
    id: "12",
    title: "Avengers: Infinity War",
    posterUrl: "https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN1cGVyaGVyb3xlbnwwfHwwfHx8MA%3D%3D",
    backdropUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1cGVyaGVyb3xlbnwwfHwwfHx8MA%3D%3D",
    overview: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    releaseDate: "2018-04-27",
    genres: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.4,
    runtime: 149,
    director: "Anthony Russo, Joe Russo",
    language: "English",
    budget: 316000000,
    cast: [
      {
        name: "Robert Downey Jr.",
        character: "Tony Stark / Iron Man",
      },
      {
        name: "Chris Hemsworth",
        character: "Thor",
      },
      {
        name: "Mark Ruffalo",
        character: "Bruce Banner / Hulk",
      },
      {
        name: "Chris Evans",
        character: "Steve Rogers / Captain America",
      },
      {
        name: "Josh Brolin",
        character: "Thanos",
      }
    ]
  }
];

// Function to get movies by category
export const getMoviesByCategory = (category: string): Movie[] => {
  if (category === "Trending") {
    return mockMovies.filter(movie => movie.rating > 8.5);
  }
  
  return mockMovies.filter(movie => 
    movie.genres.some(genre => genre === category)
  );
};
