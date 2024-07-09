import { RequestHandler } from 'express';
import db from '../db/db.json';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getUsers: RequestHandler = async (req, res) => {
  const { email, number } = req.query;

  const users = db.filter(
    (user) =>
      user.email === email && (number === undefined || user.number === number),
  );

  await delay(5000);
  res.send(users);
};
