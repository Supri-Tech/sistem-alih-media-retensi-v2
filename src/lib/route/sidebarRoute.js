export const sidebarRoute = [
  {
    label: "Beranda",
    icon: "mdi:view-dashboard-outline",
    href: "/beranda",
  },
  { label: "Pasien", icon: "mdi:file-document-outline", href: "/pasien" },
  { label: "Kategori Kasus", icon: "mdi:shape-outline", href: "/kategori" },
  {
    label: "Transaksi",
    icon: "mdi:swap-horizontal",
    id: "transaksi",
    children: [
      {
        label: "Alih Media",
        href: "/transaksi/alihmedia",
        icon: "mdi:file-sync-outline",
      },
      {
        label: "Retensi",
        href: "/transaksi/retensi",
        icon: "mdi:archive-outline",
      },
      {
        label: "Pemusnahan",
        href: "/transaksi/pemusnahan",
        icon: "mdi:trash-can-outline",
      },
    ],
  },
  { label: "Laporan", icon: "mdi:file-chart-outline", href: "/laporan" },
  {
    label: "Pengaturan",
    icon: "mdi:account-cog-outline",
    href: "/pengaturan",
    bottom: true,
  },
  { label: "Riwayat", icon: "mdi:history", href: "/riwayat", bottom: true },
  { label: "Keluar", icon: "mdi:logout", href: "/logout", bottom: true },
];
