import express from 'express';

import * as genreService from '../services/genre.service';

const getGenre = async (_req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
  try {
    res.json(await genreService.getGenre());
  } catch (err) {
    next(err);
  }
};

export { getGenre };
