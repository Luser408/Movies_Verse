
export interface Actor {
  name: string;
  character: string;
  profileUrl?: string;
}

export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  backdropUrl?: string;
  overview: string;
  releaseDate: string;
  genres: string[];
  rating: number;
  runtime: number;
  director: string;
  cast: Actor[];
  language: string;
  budget?: number;
}
