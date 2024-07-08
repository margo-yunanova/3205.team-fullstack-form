import express from 'express';
import { celebrate, Joi, errors, Segments } from 'celebrate';
import db from './db/db.json';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const app = express();
const { PORT = 3000 } = process.env;

app.get('/', (req, res) => {
  res.send('Users service backend');
});

app.get(
  '/api/v1/user',
  celebrate({
    [Segments.QUERY]: {
      email: Joi.string().email().required(),
      number: Joi.string(),
    },
  }),
  async (req, res) => {
    const { email, number } = req.query;

    const users = db.filter(
      (user) =>
        user.email === email &&
        (number === undefined || user.number === number),
    );
    await delay(5000);
    res.send(users);
  },
);

app.use(errors());

app.listen(PORT, () => {
  console.log(`Users service app listening on port ${PORT}`);
});
