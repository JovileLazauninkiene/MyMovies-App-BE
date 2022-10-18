import axios from 'axios';

let genreCache: Genre[];

const getGenre = async (): Promise<Genre[]> => {
  if (!genreCache) {
    const { data } = await axios.get<TmdbMovieDetails>(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`,
    );

    genreCache = data.genres;
  }
  return genreCache;
};

export { getGenre };
