import { env } from '$env/dynamic/public';

/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({ cookies }) => {
  // const role = cookies.get('role') || null;

  return {
    // role,
    appConfig: {
      title: env.PUBLIC_SITE_TITLE || 'Sistem Alih Media & Retensi',
      logoPath: env.PUBLIC_LOGO_PATH || '/logo.jpg',
      description: env.PUBLIC_SITE_DESCRIPTION || 'Sistem untuk manajemen dokumen'
    }
  };
};
