export const sidebarRoute = [
  {
    label: "Beranda",
    icon: "mdi:view-dashboard-outline",
    href: "/beranda",
    roles: ["admin", "superadmin"]
  },
  {
    label: "Pasien", icon: "mdi:file-document-outline", href: "/pasien",
    roles: ["admin", "superadmin"]
  },
  { label: "Kategori Kasus", icon: "mdi:shape-outline", href: "/kategori", roles: ["admin", "superadmin"] },
  {
    label: "Transaksi",
    icon: "mdi:swap-horizontal",
    id: "transaksi",
    roles: ["admin", "superadmin"],
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
  {
    label: "Laporan", icon: "mdi:file-chart-outline", href: "/laporan",
    roles: ["admin", "superadmin"]
  },
  {
    label: "Pengaturan",
    icon: "mdi:account-cog-outline",
    href: "/pengaturan",
    roles: ["superadmin"],
    bottom: true
  },
  {
    label: "Riwayat", icon: "mdi:history", href: "/riwayat",
    roles: ["superadmin"], bottom: true
  },
  { label: "Keluar", icon: "mdi:logout", href: "/logout", roles: ["admin", "superadmin"], bottom: true },
];
