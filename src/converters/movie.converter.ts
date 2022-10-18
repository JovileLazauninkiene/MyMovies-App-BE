const MOVIE_PATH = 'https://image.tmdb.org/t/p/w500';
const MOVIE_DETAILS_PATH = 'https://image.tmdb.org/t/p/original';

const convertToMovie = (tmdbMovie: TmdbMovie): Movie => {
  return {
    movieId: tmdbMovie.id,
    title: tmdbMovie.title,
    releaseDate: tmdbMovie.release_date,
    backdropPath: MOVIE_PATH + tmdbMovie.backdrop_path,
    posterPath: MOVIE_PATH + tmdbMovie.poster_path,
    voteAverage: tmdbMovie.vote_average,
  };
};

const convertToProductionCompany = (productionCompany: TmdbProductionCompany): ProductionCompany => {
  return {
    id: productionCompany.id,
    logoPath: productionCompany.logo_path,
    name: productionCompany.name,
    originCountry: productionCompany.origin_country,
  };
};

const convertToProductionCountry = (productionCountry: TmdbProductionCountry): ProductionCountry => {
  return {
    iso: productionCountry.iso_3166_1,
    name: productionCountry.name,
  };
};

const convertToSpokenLanguage = (spokenLanguage: TmdbSpokenLanguage): SpokenLanguage => {
  return {
    englishName: spokenLanguage.english_name,
    iso: spokenLanguage.iso_639_1,
    name: spokenLanguage.name,
  };
};

const convertToMovieDetails = (tmdbMovieDetails: TmdbMovieDetails): MovieDetails => {
  return {
    ...convertToMovie(tmdbMovieDetails),
    backdropPath: MOVIE_DETAILS_PATH + tmdbMovieDetails.backdrop_path,
    budget: tmdbMovieDetails.budget,
    genres: tmdbMovieDetails.genres,
    homepage: tmdbMovieDetails.homepage,
    originalLanguage: tmdbMovieDetails.original_language,
    originalTitle: tmdbMovieDetails.original_title,
    overview: tmdbMovieDetails.overview,
    posterPath: MOVIE_DETAILS_PATH + tmdbMovieDetails.poster_path,
    productionCompanies: tmdbMovieDetails.production_companies.map(convertToProductionCompany),
    productionCountries: tmdbMovieDetails.production_countries.map(convertToProductionCountry),
    revenue: tmdbMovieDetails.revenue,
    runtime: tmdbMovieDetails.runtime,
    spokenLanguages: tmdbMovieDetails.spoken_languages.map(convertToSpokenLanguage),
    status: tmdbMovieDetails.status,
    tagline: tmdbMovieDetails.tagline,
    title: tmdbMovieDetails.title,
    voteCount: tmdbMovieDetails.vote_count,
  };
};

export { convertToMovie, convertToMovieDetails };
