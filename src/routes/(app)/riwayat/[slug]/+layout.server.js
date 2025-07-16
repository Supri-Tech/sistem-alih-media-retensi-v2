/** @type {import('./$types').LayoutServerLoad} */
export async function load({ parent, params }) {
  const parentData = await parent();
  const slug = params.slug;

  const slugInfo = {
    transaksi: {
      title: 'Riwayat Transaksi',
      description: 'Data riwayat transaksi pasien, termasuk pembayaran dan tagihan.'
    },
    akses: {
      title: 'Riwayat Akses',
      description: 'Log aktivitas dan riwayat akses pengguna terhadap sistem.'
    },
    pasien: {
      title: 'Riwayat Pasien',
      description: 'Detail historis pasien, kunjungan, dan tindakan medis.'
    },
    aktivitas: {
      title: 'Riwayat Aktivitas',
      description: 'Catatan lengkap aktivitas pengguna dan perubahan data.'
    }
  };

  const { title, description } = slugInfo[slug] ?? {
    title: `Riwayat: ${slug}`,
    description: `Ini adalah data riwayat untuk kategori ${slug}.`
  };

  return {
    ...parentData,
    title,
    description
  };
}
