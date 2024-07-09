import express from 'express';
import { celebrate, Joi, errors, Segments } from 'celebrate';
import { filterUsers } from './controllers/users';

const app = express();
const { PORT = 3000 } = process.env;

app.get('/', (req, res) => {
  res.send('Users service backend');
});

app.get(
  '/api/v1/user',
  celebrate({
    [Segments.QUERY]: {
      email: Joi.string().required(),
      number: Joi.string(),
    },
  }),
  async (req, res) => {
    const { email, number } = req.query;

    const users = await filterUsers(
      String(email),
      number ? String(number) : null,
    );

    res.send(users);
  },
);

app.use(errors());

app.listen(PORT, () => {
  console.log(`Users service app listening on port ${PORT}`);
});
