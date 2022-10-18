import axios from 'axios';

import { convertToMovie, convertToMovieDetails } from '../converters/movie.converter';

interface MovieDetailsCache {
  [key: number]: MovieDetails;
}

let movies: Movie[];
let totalPagesCache: number;
const movieDetailsCache: MovieDetailsCache = {};

const getMovies = async (page: number, genre?: number[], sortBy?: string): Promise<Movies> => {
  const genres = genre || [];
  const sort = sortBy || 'popularity.desc';

  const { data } = await axios.get<TmdbMovies>(
    `https://api.themoviedb.org/3/discover/movie?sort_by=${sort}&page=${page}&with_genres=${genres.join(
      ',',
    )}&vote_count.gte=1000&api_key=${process.env.API_KEY}`,
  );
  movies = data.results.map(convertToMovie);
  totalPagesCache = data.total_pages;

  return {
    page,
    movies,
    totalPages: totalPagesCache ?? 1,
  };
};

const searchMoviesByTitle = async (page: number, title: string): Promise<Movies> => {
  const { data } = await axios.get<TmdbMovies>(
    `https://api.themoviedb.org/3/search/movie?query=${title}&page=${page}&api_key=${process.env.API_KEY}`,
  );

  movies = data.results.map(convertToMovie);
  totalPagesCache = data.total_pages;

  return {
    page,
    movies,
    totalPages: totalPagesCache ?? 1,
  };
};

const getMovie = async (movieId: number): Promise<MovieDetails> => {
  if (movieDetailsCache[movieId]) {
    return movieDetailsCache[movieId];
  }

  const { data } = await axios.get<TmdbMovieDetails>(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`,
  );

  movieDetailsCache[movieId] = convertToMovieDetails(data);
  return movieDetailsCache[movieId];
};

export { getMovies, getMovie, searchMoviesByTitle };
