export function load() {
  const total = 1284;
  const diproses = 98;
  const aktif = 564;
  const selesai = 622;

  return {
    header: "Transaksi Alih Media",
    description: "Catatan alih media arsip rekam medis pasien rumah sakit yang telah atau sedang diproses.",
    statsTitle: "Statistik Alih Media",
    stats: [
      {
        label: "Total Dokumen",
        value: total,
        color: "emerald",
        desc: "Semua dokumen alih media yang tercatat"
      },
      {
        label: "Sedang Diproses",
        value: diproses,
        color: "yellow",
        desc: "Dalam tahap digitalisasi"
      },
      {
        label: "Dokumen Aktif",
        value: aktif,
        color: "blue",
        desc: "Telah tersedia dalam sistem"
      },
      {
        label: "Dokumen Selesai",
        value: selesai,
        color: "emerald",
        desc: "Telah selesai alih media"
      }
    ]
  };
}
