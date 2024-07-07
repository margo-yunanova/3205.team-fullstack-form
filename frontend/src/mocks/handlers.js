import { http, HttpResponse } from 'msw';
import db from './db';

export const handlers = [
  http.get('/api/v1/user', async ({ request }) => {
    const url = new URL(request.url);
    const email = url.searchParams.get('email');
    const number = url.searchParams.get('number');

    if (!email) {
      return new HttpResponse(
        { message: 'В запросе нет email' },
        { status: 400 },
      );
    }

    const user = db.filter(
      (item) =>
        (item.email === email && item.number === number) ||
        (item.email === email && number === null),

      //item.email === email ? item.number === number ? true : number === undefined ? true : false
    );

    return HttpResponse.json(user);
  }),
];
