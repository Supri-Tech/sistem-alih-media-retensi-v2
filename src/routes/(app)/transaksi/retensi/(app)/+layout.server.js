export function load() {
  const total = 948;
  const menunggu = 124;
  const aktif = 412;
  const disimpan = 412;

  return {
    header: "Transaksi Retensi",
    description: "Catatan proses retensi arsip rekam medis pasien sesuai masa simpan dan klasifikasi yang berlaku.",
    statsTitle: "Statistik Retensi",
    stats: [
      {
        label: "Total Dokumen",
        value: total,
        color: "blue",
        desc: "Semua dokumen yang masuk proses retensi"
      },
      {
        label: "Menunggu Retensi",
        value: menunggu,
        color: "yellow",
        desc: "Belum diklasifikasikan atau diverifikasi"
      },
      {
        label: "Dokumen Aktif",
        value: aktif,
        color: "emerald",
        desc: "Masih dalam masa simpan aktif"
      },
      {
        label: "Disimpan Jangka Lama",
        value: disimpan,
        color: "gray",
        desc: "Masuk masa simpan inaktif atau jangka panjang"
      }
    ]
  };
}
