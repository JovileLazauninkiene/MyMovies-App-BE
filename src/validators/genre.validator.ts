import { query } from 'express-validator';

const validation = () => {
  return query('genres').isArray().isNumeric().isInt({ min: 1 });
};

export default validation;
