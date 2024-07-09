import type { Config, Context } from '@netlify/functions';
import { filterUsers } from '../../../backend/src/controllers/users.ts';

export default async function handler(req: Request, context: Context) {
  const email = new URL(req.url).searchParams.get('email') ?? '';
  const number = new URL(req.url).searchParams.get('number');

  const users = await filterUsers(email, number);

  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const config: Config = {
  path: '/api/v1/user',
};
