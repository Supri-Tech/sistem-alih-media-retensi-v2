/** @type {import('./$types').LayoutServerLoad} */
export async function load({ params }) {
  const titleMap = {
    akses: 'Riwayat Akses',
    transaksi: 'Riwayat Transaksi Dokumen',
    pasien: 'Riwayat Data Pasien',
    aktivitas: 'Riwayat Aktivitas Pengguna'
  };

  const descriptionMap = {
    akses: 'Lihat semua aktivitas login dan logout pengguna.',
    transaksi: 'Lihat semua aktivitas dokumen seperti ekspor dan arsip.',
    pasien: 'Perubahan data pasien termasuk tambah, edit, dan hapus.',
    aktivitas: 'Pantau tindakan pengguna seperti ubah pengaturan atau data.'
  };

  const slug = params.slug ?? null;

  return {
    slug,
    title: titleMap[slug] ?? 'Riwayat',
    description: descriptionMap[slug] ?? 'Pantau seluruh aktivitas di sistem.'
  };
}
