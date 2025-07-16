import { json, error } from '@sveltejs/kit';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { env } from '$env/dynamic/private';

export const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const appName = formData.get('appName');
    const logoFile = formData.get('logo');

    if (!appName || typeof appName !== 'string') {
      throw error(400, 'Nama aplikasi diperlukan dan harus berupa teks');
    }

    const logoPath = env.PUBLIC_LOGO_PATH || '/logo.jpg';
    const staticPath = join(process.cwd(), 'static');
    const uploadPath = join(staticPath, logoPath.startsWith('/') ? logoPath.slice(1) : logoPath);

    if (logoFile && logoFile instanceof Blob && logoFile.size > 0) {
      const validTypes = ['image/jpeg', 'image/png', 'image/svg+xml'];
      if (!validTypes.includes(logoFile.type)) {
        throw error(400, 'Format file harus JPG, PNG, atau SVG');
      }

      if (logoFile.size > 2 * 1024 * 1024) {
        throw error(400, 'Ukuran file maksimal 2MB');
      }

      if (!existsSync(staticPath)) {
        throw error(500, 'Static directory tidak ditemukan');
      }

      const dir = uploadPath.split('/').slice(0, -1).join('/');
      if (dir && !existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
      }

      const buffer = Buffer.from(await logoFile.arrayBuffer());
      writeFileSync(uploadPath, buffer);
    }

    return json({
      success: true,
      appName: appName.trim(),
      logoPath
    });

  } catch (err) {
    console.error('Error saving settings:', err);

    if (err.code === 'ENOENT') {
      throw error(500, 'Gagal membuat direktori');
    }
    if (err.code === 'EACCES') {
      throw error(500, 'Tidak memiliki izin menulis file');
    }

    if (err.status && err.body) {
      throw err;
    }

    throw error(500, 'Terjadi kesalahan server');
  }
};