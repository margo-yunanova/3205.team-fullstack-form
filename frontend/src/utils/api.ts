const BASE_URL = '/api/v1';

const checkResponse = (res: Response) =>
  res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);

interface IUser {
  email: string;
  number: string;
}

export const getUsers = async ({
  email,
  number = '',
}: {
  email: string;
  number: string;
}): Promise<IUser[]> => {
  const params = new URLSearchParams({ email: email });

  if (number !== '') {
    params.append('number', number);
  }

  const url = BASE_URL + '/user' + '?' + params.toString();

  return checkResponse(await fetch(url));
};
