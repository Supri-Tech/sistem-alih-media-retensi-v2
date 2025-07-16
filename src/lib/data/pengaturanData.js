
export const adminColumns = [
  { label: "Nama", key: "nama" },
  { label: "Username", key: "username" },
  { label: "Role", key: "role" },
];

export let adminData = [
  {
    nama: "Siti Aminah",
    username: "siti_admin",
    role: "Admin",
    status: "Pending",
  },
  {
    nama: "Budi Santoso",
    username: "budi_super",
    role: "Superadmin",
    status: "Aktif",
  },
  {
    nama: "Nur Hidayah",
    username: "nurh",
    role: "Admin",
    status: "Tidak Aktif",
  },
];

export const tabItems = [
  { id: "general", title: "Umum" },
  { id: "profile", title: "Informasi Pengguna" },
  { id: "time", title: "Waktu" },
  { id: "language", title: "Bahasa" },
  { id: "others", title: "Lainnya" },
];