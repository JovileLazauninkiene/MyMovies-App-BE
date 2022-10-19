import express from 'express';

import * as sortOptionService from '../services/sort-option.service';

const getSortOptions = (_req: express.Request, res: express.Response): void => {
  const sortOptions = sortOptionService.getSortOptions();
  res.json(sortOptions);
};

export { getSortOptions };
