import { http, HttpResponse } from 'msw';
import { BASE_URL } from '../utils/api';
import db from './db';

export const handlers = [
  http.get(BASE_URL, async (request) => {
    console.log('http.get');
    const url = new URL(request.url);
    const email = url.searchParams.get('email');
    const number = url.searchParams.get('number');

    if (!email) {
      return new HttpResponse(
        { message: 'В запросе нет email' },
        { status: 400 },
      );
    }

    const user = db.find(
      (item) =>
        (item.email === email && item.number === number) ||
        (item.email === email && number === undefined),

      //item.email === email ? item.number === number ? true : number === undefined ? true : false
    );

    if (!user) {
      return new HttpResponse(
        { message: 'Пользователь не найден' },
        { status: 404 },
      );
    }

    return HttpResponse.json(user);
  }),
];
