<script>
  import Sidebar from "$components/Sidebar.svelte";
  import Icon from "@iconify/svelte";
  import Table from "$components/Table.svelte";
  import Input from "$components/Input.svelte";
  import Pagination from "$components/Pagination.svelte";
  import Button from "$components/Button.svelte";
  import SearchBar from "$components/SearchBar.svelte";
  import Select from "$components/Select.svelte";
  import TabsPanel from "$components/TabsPanel.svelte";

  export let adminProfile = {
    name: "Rina Wijaya",
    email: "rina@example.com",
    status: "Aktif",
    username: "rina_admin",
    role: "Superadmin",
    lastLogin: "6 Juli 2025, 08:32 WIB",
    registeredSince: "20 Januari 2023",
    phone: "+62 812 3456 7890",
  };

  function getInitials(name) {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }

  function getColor(name) {
    const colors = [
      "#10B981",
      "#3B82F6",
      "#F59E0B",
      "#EF4444",
      "#6366F1",
      "#14B8A6",
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash += name.charCodeAt(i);
    }
    return colors[hash % colors.length];
  }

  let selectedRole = "";

  function handleSearch() {
    console.log("Filter role:", selectedRole);
  }

  const columns = [
    { label: "No", key: "no" },
    { label: "Nama", key: "nama" },
    { label: "Username", key: "username" },
    { label: "Role", key: "role" },
  ];

  let aksesData = [
    {
      no: 1,
      nama: "Siti Aminah",
      username: "siti_admin",
      role: "Admin",
      status: "Aktif",
      email: "siti@example.com",
    },
    {
      no: 2,
      nama: "Budi Santoso",
      username: "budi_super",
      role: "Superadmin",
      status: "Tidak Aktif",
      email: "budi@example.com",
    },
    {
      no: 3,
      nama: "Nur Hidayah",
      username: "nurh",
      role: "Admin",
      status: "Pending",
      email: "nur@example.com",
    },
  ];

  let currentPage = 1;

  function handlePageChange(page) {
    currentPage = page;
  }

  const tabItems = [
    { id: "general", title: "Umum" },
    { id: "profile", title: "Profil" },
    { id: "time", title: "Waktu" },
    { id: "language", title: "Bahasa" },
  ];
</script>

<section
  class="bg-gray-50 text-gray-800 rounded-2xl p-6 shadow-md border border-gray-200 mb-8"
>
  <div
    class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8"
  >
    <div class="flex-1 space-y-3">
      <h2 class="text-3xl font-medium text-emerald-600 tracking-tight">
        Pengaturan Sistem
      </h2>
      <p class="text-sm text-gray-500">
        Atur preferensi sistem, informasi instansi, keamanan, notifikasi, dan
        komponen penting lainnya.
      </p>
    </div>
  </div>

  <TabsPanel tabs={tabItems} defaultTab="general">
    <div slot="general">
      <form class="space-y-6">
        <div class="space-y-1">
          <h3 class="text-xl font-semibold text-emerald-700">Umum</h3>
          <p class="text-sm text-gray-500">
            Lengkapi informasi umum terkait pengaturan sistem Anda.
          </p>
        </div>

        <div
          class="border-t border-gray-200 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div class="space-y-2">
            <h4 class="text-lg font-medium text-gray-800">Data Diri</h4>
            <p class="text-sm text-gray-500">
              Informasi ini digunakan sebagai identitas pengguna.
            </p>
          </div>

          <div class="space-y-4">
            <div>
              <Input
                id="nama"
                placeholder="Masukkan nama lengkap"
                label="Nama Lengkap"
                className="rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <Input
                id="username"
                label="Username"
                placeholder="Masukkan username"
                className="rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        </div>
      </form>
    </div>

    <div slot="profile">
      <p class="text-sm text-gray-500">Pengaturan keamanan sistem.</p>
    </div>
    <div slot="time">
      <p class="text-sm text-gray-500">Konfigurasi notifikasi & email.</p>
    </div>
    <div slot="language">
      <p class="text-sm text-gray-500">
        Fitur lainnya seperti backup & maintenance.
      </p>
    </div>
  </TabsPanel>
</section>

<section
  class="bg-gray-50 text-gray-800 rounded-2xl p-6 shadow-md border border-gray-200"
>
  <div
    class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8"
  >
    <div class="flex-1 space-y-3">
      <h2 class="text-2xl font-semibold tracking-tight text-emerald-600">
        Data Diri Administrator
      </h2>
      <p class="text-sm text-gray-500">
        Informasi akun pribadi administrator yang sedang login ke dalam sistem.
      </p>
    </div>

    <div class="w-full max-w-xs">
      <Button variant="emerald">
        <Icon icon="mdi:account-edit" class="text-base mr-2" />
        Edit Profil
      </Button>
    </div>
  </div>

  <div
    class="mt-6 flex items-center gap-6 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
  >
    <div
      class="w-20 h-20 rounded-full flex items-center justify-center text-white font-semibold text-2xl shadow-sm"
      style="background-color: {getColor(adminProfile.name)}"
    >
      {getInitials(adminProfile.name)}
    </div>

    <div class="flex-1 space-y-1">
      <p class="text-lg font-semibold text-gray-800">{adminProfile.name}</p>

      <p class="text-sm text-gray-500 flex items-center gap-2">
        <Icon icon="mdi:email-outline" class="w-4 h-4 text-emerald-600" />
        {adminProfile.email}
      </p>

      <span
        class={`inline-block text-xs font-medium px-2 py-1 rounded-full mt-1
          ${
            adminProfile.status === "Aktif"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-red-100 text-red-700"
          }`}
      >
        {adminProfile.status}
      </span>
    </div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
    <div class="bg-white border border-gray-200 rounded-xl p-4">
      <p class="text-sm text-gray-500 mb-1">Username</p>
      <p class="text-base font-medium text-gray-800">{adminProfile.username}</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-4">
      <p class="text-sm text-gray-500 mb-1">Role</p>
      <p class="text-base font-medium text-emerald-600">{adminProfile.role}</p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-4">
      <p class="text-sm text-gray-500 mb-1">Terdaftar Sejak</p>
      <p class="text-base font-medium text-gray-800">
        {adminProfile.registeredSince}
      </p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-4">
      <p class="text-sm text-gray-500 mb-1">Login Terakhir</p>
      <p class="text-base font-medium text-gray-800">
        {adminProfile.lastLogin}
      </p>
    </div>
  </div>

  <div class="flex gap-3 mt-6">
    <Button variant="dark">
      <Icon icon="mdi:lock-reset" class="text-base mr-2" />
      Ubah Password
    </Button>
    <Button variant="outline">
      <Icon icon="mdi:logout" class="text-base mr-2" />
      Keluar
    </Button>
  </div>
</section>

<section
  class="bg-white text-gray-800 rounded-2xl p-6 shadow-md border border-gray-200 mt-10"
>
  <div
    class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8"
  >
    <div class="flex-1 space-y-3">
      <p class="text-xs text-gray-500">
        Terakhir diperbarui: 6 Juli 2025, 09:00 WIB
      </p>
      <h2 class="text-2xl font-semibold tracking-tight">Kelola Hak Akses</h2>
      <p class="text-sm text-gray-500">
        Kelola akun admin, superadmin, serta kontrol status dan peran mereka.
      </p>
      <div class="flex items-center gap-4 mt-4">
        <Button variant="emerald">
          <Icon icon="mdi:plus" class="text-base mr-2" />
          Tambah Akun
        </Button>
      </div>
    </div>

    <div
      class="bg-gray-50 border border-gray-200 rounded-xl p-4 w-full max-w-xs"
    >
      <p class="text-sm text-gray-800 mb-2 font-medium">Informasi</p>
      <p class="text-xs text-gray-500">
        Pengguna dibagi dalam dua jenis role:
        <strong class="text-gray-700">Admin</strong> &
        <strong class="text-gray-700">Superadmin</strong>. Hak akses bergantung
        pada level peran.
      </p>
    </div>
  </div>

  <div class="mt-6 bg-white border border-gray-200 rounded-xl overflow-hidden">
    <Table {columns} data={aksesData} showStatus={true} />
  </div>

  <div class="mt-6">
    <Pagination
      total={20}
      perPage={10}
      defaultPage={currentPage}
      onPageChange={handlePageChange}
    />
  </div>
</section>
-->
