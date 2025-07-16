<script>
  import Input from "$components/Input.svelte";
</script>

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
        <label for="nama" class="block text-sm font-medium text-gray-700 mb-1">
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
      <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
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
        Demi alasan keamanan, gunakan kombinasi huruf besar, kecil, angka, dan
        simbol saat membuat password baru.
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
      <label for="role" class="block text-sm font-medium text-gray-700 mb-1">
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
