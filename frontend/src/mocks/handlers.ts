import { http, HttpResponse, delay } from 'msw';
import db from './db';

export const handlers = [
  http.get('/api/v1/user', async ({ request }) => {
    const url = new URL(request.url);
    const email = url.searchParams.get('email');
    const number = url.searchParams.get('number');

    if (!email) {
      return new HttpResponse(null, {
        status: 400,
        statusText: 'В запросе нет email',
      });
    }

    const users = db.filter(
      (user) =>
        user.email === email && (number === null || user.number === number),
    );

    await delay(5000);
    return HttpResponse.json(users);
  }),
];
