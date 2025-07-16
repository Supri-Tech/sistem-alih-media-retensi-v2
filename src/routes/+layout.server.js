import { env } from '$env/dynamic/public';

export const load = async () => {
  return {
    appConfig: {
      title: env.VITE_PUBLIC_SITE_TITLE || 'Sistem Alih Media & Retensi',
      logoPath: env.VITE_PUBLIC_LOGO_PATH || '/logo.jpg',
      description: env.VITE_PUBLIC_SITE_DESCRIPTION || 'Sistem untuk manajemen dokumen'
    }
  };
};