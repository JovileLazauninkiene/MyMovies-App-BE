import express from 'express';

import * as movieService from '../services/movie.service';

const getPageNumber = (req: express.Request): number => (req.query.page ? parseInt(req.query.page as string) : 1);

const getMovies = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
  const page = getPageNumber(req);

  const genres: number[] = ((req.query.genres as string) ?? '').split(',').map(parseInt);
  const sort: string = req.query.sort as string;
  const title: string = req.query.title as string;

  try {
    if (req.query.genres || req.query.sort) {
      res.json(await movieService.getMovies(page, genres, sort));
    } else if (req.query.title) {
      res.json(await movieService.searchMoviesByTitle(page, title));
    } else {
      res.json(await movieService.getMovies(page));
    }
  } catch (err) {
    next(err);
  }
};

const getMovie = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
  try {
    res.json(await movieService.getMovie(parseInt(req.params.movieId)));
  } catch (err) {
    next(err);
  }
};

export { getMovies, getMovie };
