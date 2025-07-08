<script>
  import Table from "$components/Table.svelte";
  import Input from "$components/Input.svelte";
  import TabsPanel from "$components/TabsPanel.svelte";

  const columns = [
    { label: "No", key: "no" },
    { label: "Nama", key: "nama" },
    { label: "Username", key: "username" },
    { label: "Role", key: "role" },
  ];

  let adminData = [
    {
      no: 1,
      nama: "Siti Aminah",
      username: "siti_admin",
      role: "Admin",
      status: "Pending",
    },
    {
      no: 2,
      nama: "Budi Santoso",
      username: "budi_super",
      role: "Superadmin",
      status: "Aktif",
    },
    {
      no: 3,
      nama: "Nur Hidayah",
      username: "nurh",
      role: "Admin",
      status: "Tidak Aktif",
    },
  ];

  const tabItems = [
    { id: "general", title: "Umum" },
    { id: "profile", title: "Informasi Pengguna" },
    { id: "time", title: "Waktu" },
    { id: "language", title: "Bahasa" },
    { id: "others", title: "Lainnya" },
  ];
</script>

<section class="p-6">
  <div
    class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8"
  >
    <div class="flex-1 space-y-3">
      <h2 class="text-3xl font-semibold tracking-tight">Pengaturan Sistem</h2>
      <p class="text-sm text-gray-500">
        Atur preferensi sistem, informasi instansi, keamanan, notifikasi, dan
        komponen penting lainnya.
      </p>
    </div>
  </div>

  <TabsPanel tabs={tabItems} defaultTab="general">
    <div slot="general">
      <form class="space-y-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div class="space-y-1">
            <h3 class="text-sm font-semibold text-gray-800">Logo Aplikasi</h3>
            <p class="text-sm text-gray-500">
              Logo digunakan sebagai identitas aplikasi Anda.
            </p>

            <img
              src="/logo.jpg"
              alt="Logo Aplikasi"
              class="mt-4 h-20 w-auto rounded"
            />
          </div>

          <div class="space-y-4 w-full">
            <input
              type="file"
              accept="image/*"
              class="block w-full text-sm bg-gray-200 rounded-md text-gray-600 file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:bg-emerald-600 file:text-white
            hover:file:bg-emerald-700"
            />
          </div>
        </div>

        <div
          class="border-t border-gray-200 pt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        >
          <div class="space-y-1">
            <h3 class="text-sm font-semibold text-gray-800">Nama Aplikasi</h3>
            <p class="text-sm text-gray-500">
              Nama ini akan muncul di header dan halaman login.
            </p>
          </div>
          <div class="w-full">
            <label
              for="appName"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Nama Aplikasi
            </label>
            <Input
              id="appName"
              placeholder="Masukkan nama aplikasi"
              className="w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div class="flex justify-end pt-4">
          <button
            type="submit"
            class="inline-flex items-center px-5 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-md shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Simpan Perubahan
          </button>
        </div>
      </form>
    </div>

    <div slot="profile">
      <form class="space-y-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div class="space-y-1">
            <h3 class="text-sm font-semibold text-gray-800">Data Diri</h3>
            <p class="text-sm text-gray-500">
              Masukkan nama lengkap dan username Anda.
            </p>
          </div>

          <div class="space-y-4 w-full">
            <div>
              <label
                for="nama"
                class="block text-sm font-medium text-gray-700 mb-1"
              >
                Nama Lengkap
              </label>
              <Input
                id="nama"
                placeholder="Masukkan nama lengkap"
                className="w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label
                for="username"
                class="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <Input
                id="username"
                placeholder="Masukkan username"
                className="w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        </div>

        <div
          class="border-t border-gray-200 pt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        >
          <div class="space-y-1">
            <h3 class="text-sm font-semibold text-gray-800">Email</h3>
            <p class="text-sm text-gray-500">
              Alamat email digunakan untuk notifikasi dan login.
            </p>
          </div>

          <div class="w-full">
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Masukkan email aktif"
              className="w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div
          class="border-t border-gray-200 pt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        >
          <div class="space-y-1">
            <div class="mb-5">
              <h3 class="text-sm font-semibold text-gray-800">Password</h3>
              <p class="text-sm text-gray-500">
                Ganti password untuk keamanan akun Anda.
              </p>
            </div>
            <div class="rounded-md bg-gray-100 p-4 text-sm text-gray-600">
              Demi alasan keamanan, gunakan kombinasi huruf besar, kecil, angka,
              dan simbol saat membuat password baru.
            </div>
          </div>

          <div class="w-full space-y-4">
            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700 mb-1"
              >
                Password Baru
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Masukkan password baru"
                className="w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        </div>

        <div
          class="border-t border-gray-200 pt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        >
          <div class="space-y-1">
            <h3 class="text-sm font-semibold text-gray-800">Role</h3>
            <p class="text-sm text-gray-500">
              Role hanya dapat diubah oleh administrator utama.
            </p>
          </div>

          <div class="w-full">
            <label
              for="role"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Role Pengguna
            </label>
            <Input
              id="role"
              value="Superadmin"
              disabled
              className="w-full bg-gray-100 text-gray-500 cursor-not-allowed rounded-md border border-gray-300 focus:outline-none"
            />
          </div>
        </div>

        <div class="flex justify-end pt-4">
          <button
            type="submit"
            class="inline-flex items-center px-5 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-md shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Simpan Perubahan
          </button>
        </div>
      </form>
    </div>
    <div slot="time">
      <form class="space-y-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div class="space-y-1">
            <h3 class="text-sm font-semibold text-gray-800">Zona Waktu</h3>
            <p class="text-sm text-gray-500">
              Tentukan zona waktu yang akan digunakan sistem.
            </p>
          </div>
          <div class="w-full">
            <label
              for="timezone"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Zona Waktu
            </label>
            <select
              id="timezone"
              class="w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-gray-700"
            >
              <option value="Asia/Jakarta">Asia/Jakarta (GMT+7)</option>
              <option value="Asia/Makassar">Asia/Makassar (GMT+8)</option>
              <option value="Asia/Jayapura">Asia/Jayapura (GMT+9)</option>
            </select>
          </div>
        </div>

        <div
          class="border-t border-gray-200 pt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        >
          <div class="space-y-1">
            <h3 class="text-sm font-semibold text-gray-800">Format Waktu</h3>
            <p class="text-sm text-gray-500">
              Pilih format waktu yang ditampilkan.
            </p>
          </div>
          <div class="w-full space-y-2">
            <label class="inline-flex items-center gap-2 text-sm text-gray-700">
              <input type="radio" name="time-format" value="24" checked />
              24 Jam (13:00)
            </label>
            <label class="inline-flex items-center gap-2 text-sm text-gray-700">
              <input type="radio" name="time-format" value="12" />
              12 Jam (1:00 PM)
            </label>
          </div>
        </div>

        <div class="flex justify-end pt-4">
          <button
            type="submit"
            class="inline-flex items-center px-5 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-md shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Simpan Perubahan
          </button>
        </div>
      </form>
    </div>

    <div slot="language">
      <form class="space-y-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div class="space-y-1">
            <h3 class="text-sm font-semibold text-gray-800">Bahasa Aplikasi</h3>
            <p class="text-sm text-gray-500">
              Pilih bahasa yang digunakan dalam aplikasi.
            </p>
          </div>
          <div class="w-full">
            <label
              for="language"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Bahasa
            </label>
            <select
              id="language"
              class="w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-gray-700"
            >
              <option value="id">Indonesia</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>

        <div
          class="border-t border-gray-200 pt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        >
          <div class="space-y-1">
            <h3 class="text-sm font-semibold text-gray-800">Format Tanggal</h3>
            <p class="text-sm text-gray-500">
              Tentukan format penulisan tanggal yang digunakan.
            </p>
          </div>
          <div class="w-full space-y-2">
            <label class="inline-flex items-center gap-2 text-sm text-gray-700">
              <input
                type="radio"
                name="date-format"
                value="dd-mm-yyyy"
                checked
              />
              07-07-2025 (dd-mm-yyyy)
            </label>
            <label class="inline-flex items-center gap-2 text-sm text-gray-700">
              <input type="radio" name="date-format" value="yyyy-mm-dd" />
              2025-07-07 (yyyy-mm-dd)
            </label>
          </div>
        </div>

        <div class="flex justify-end pt-4">
          <button
            type="submit"
            class="inline-flex items-center px-5 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-md shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Simpan Perubahan
          </button>
        </div>
      </form>
    </div>

    <div slot="others">
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold text-gray-800">Daftar Akun Admin</h3>
          <p class="text-sm text-gray-500">
            Berikut adalah akun pengguna yang memiliki akses administratif
            terhadap sistem.
          </p>
        </div>

        <div class="overflow-x-auto rounded-md border border-gray-200">
          <Table
            {columns}
            data={adminData}
            showAction={true}
            showStatus={true}
          />
        </div>
      </div>
    </div>
  </TabsPanel>
</section>
