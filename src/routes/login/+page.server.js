import { fail, redirect } from '@sveltejs/kit';
import { login } from '$lib/api/auth';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const username = data.get('username')?.toString();
    const password = data.get('password')?.toString();

    try {
      const { token } = await login({ username, password });

      cookies.set('token', token, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24
      });

      throw redirect(302, '/beranda');
    } catch (error) {
      return fail(400, {
        error: error.message || 'Username atau password salah',
        values: { username }
      });
    }
  }
};