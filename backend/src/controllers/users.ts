import db from '../db/db.json';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const filterUsers = async (email: string, number: string | null) => {
  await delay(5000);

  return db.filter(
    (user) =>
      user.email === email && (number === null || user.number === number),
  );
};
