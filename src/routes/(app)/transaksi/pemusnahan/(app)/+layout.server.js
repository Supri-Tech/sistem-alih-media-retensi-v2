export function load() {
  const total = 542;
  const diproses = 67;
  const aktif = 0;
  const selesai = 475;

  return {
    header: "Transaksi Pemusnahan",
    description:
      "Pemusnahan arsip rekam medis pasien yang telah habis masa simpan dan tidak memiliki nilai guna lagi.",
    statsTitle: "Statistik Pemusnahan",
    stats: [
      {
        label: "Total Dokumen",
        value: total,
        color: "red",
        desc: "Semua dokumen yang diajukan untuk dimusnahkan",
      },
      {
        label: "Dalam Proses",
        value: diproses,
        color: "yellow",
        desc: "Sedang dalam tahap persetujuan pemusnahan",
      },
      {
        label: "Dokumen Aktif",
        value: aktif,
        color: "blue",
        desc: "Tidak ada dokumen aktif di tahap ini",
      },
      {
        label: "Telah Dimusnahkan",
        value: selesai,
        color: "gray",
        desc: "Telah selesai proses pemusnahan",
      },
    ],
  };
}
