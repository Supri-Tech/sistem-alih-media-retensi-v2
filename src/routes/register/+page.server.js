import { fail, redirect } from '@sveltejs/kit';
import { register } from '$lib/api/auth';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const fullName = data.get('fullName')?.toString();
    const username = data.get('username')?.toString();
    const email = data.get('email')?.toString();
    const password = data.get('password')?.toString();
    const confirmPassword = data.get('confirmPassword')?.toString();

    if (password !== confirmPassword) {
      return fail(400, {
        error: 'Password dan konfirmasi tidak cocok',
        values: { fullName, username, email }
      });
    }

    try {
      await register({ fullName, username, email, password });

      throw redirect(302, '/login');
    } catch (error) {
      return fail(400, {
        error: error.message || 'Registrasi gagal',
        values: { fullName, username, email }
      });
    }
  }
};
