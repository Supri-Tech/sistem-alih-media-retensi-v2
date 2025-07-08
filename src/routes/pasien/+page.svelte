<script>
  import Sidebar from "$components/Sidebar.svelte";
  import Icon from "@iconify/svelte";
  import Table from "$components/Table.svelte";
  import Pagination from "$components/Pagination.svelte";
  import Button from "$components/Button.svelte";

  import SearchBar from "$components/SearchBar.svelte";
  import Input from "$components/Input.svelte";

  let keyword1 = "";
  let keyword2 = "";
  let keyword3 = "";

  function handleSearch() {
    console.log("Kata kunci:", keyword1, keyword2, keyword3);
  }

  const columns = [
    { label: "No", key: "no" },
    { label: "Nomor RM", key: "nomor_rm" },
    { label: "Nama Pasien", key: "nama_pasien" },
    { label: "Jenis Kelamin", key: "jenis_kelamin" },
    { label: "Tanggal Masuk", key: "tanggal_masuk" },
  ];
  let pasienData = [
    {
      no: 1,
      nomor_rm: "RM-20230701",
      nama_pasien: "Siti Aminah",
      jenis_kelamin: "Perempuan",
      tanggal_masuk: "10-03-2012",
      status: "Rawat Jalan",
    },
    {
      no: 2,
      nomor_rm: "RM-20230702",
      nama_pasien: "Budi Santoso",
      jenis_kelamin: "Laki-laki",
      tanggal_masuk: "10-03-2012",
      status: "Rawat Inap",
    },
    {
      no: 3,
      nomor_rm: "RM-20230703",
      nama_pasien: "Nur Hidayah",
      jenis_kelamin: "Perempuan",
      tanggal_masuk: "10-03-2012",
      status: "Selesai",
    },
    {
      no: 4,
      nomor_rm: "RM-20230704",
      nama_pasien: "Agus Salim",
      jenis_kelamin: "Laki-laki",
      tanggal_masuk: "10-03-2012",
      status: "Rujukan",
    },
    {
      no: 5,
      nomor_rm: "RM-20230705",
      nama_pasien: "Linda Maulida",
      jenis_kelamin: "Perempuan",
      tanggal_masuk: "10-03-2012",
      status: "Rawat Jalan",
    },
  ];
  let currentPage = 1;

  function handlePageChange(page) {
    currentPage = page;
  }
</script>

<section
  class="bg-gray-50 text-gray-800 rounded-2xl p-6 shadow-md border border-gray-200"
>
  <div
    class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8"
  >
    <div class="flex-1 space-y-3">
      <p class="text-xs text-gray-500">
        Terakhir diperbarui: 6 Juli 2025, 09:00 WIB
      </p>
      <h2 class="text-2xl font-semibold text-emerald-700 tracking-tight">
        Manajemen Pasien Rumah Sakit
      </h2>
      <p class="text-sm text-gray-600">
        Pantau dan kelola seluruh data pasien yang terdaftar dalam sistem secara
        real-time.
      </p>

      <div class="flex items-center gap-4 mt-4">
        <div class="text-4xl font-bold text-emerald-600">1.230</div>
        <div class="flex flex-wrap items-center gap-2 relative">
          <div class="relative group">
            <Button variant="light" iconOnly={true}>
              <Icon
                icon="mdi:cloud-upload"
                class="text-base text-emerald-700"
              />
            </Button>
            <div
              class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max rounded bg-gray-700 text-xs text-white px-3 py-1 shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-200 z-50"
            >
              Import Data
            </div>
          </div>

          <div class="relative group">
            <Button variant="light" iconOnly={true}>
              <Icon
                icon="mdi:cloud-download"
                class="text-base text-emerald-700"
              />
            </Button>
            <div
              class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max rounded bg-gray-700 text-xs text-white px-3 py-1 shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-200 z-50"
            >
              Export Data
            </div>
          </div>

          <Button variant="emerald">Tambah Pasien</Button>

          <Button variant="light">Cari Pasien</Button>
        </div>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-4 w-full max-w-xs">
      <p class="text-sm text-gray-700 mb-1 font-medium">Periode Pendaftaran</p>
      <div class="flex items-center justify-between">
        <span class="text-sm text-gray-500">Januari</span>
        <span class="text-sm text-emerald-600 font-semibold">Maret</span>
        <span class="text-sm text-gray-500">Desember</span>
      </div>
      <input
        type="range"
        min="1"
        max="6"
        value="3"
        class="w-full mt-3 accent-emerald-500"
      />
    </div>
  </div>

  <div class="mt-6">
    <SearchBar on:search={handleSearch}>
      <div class="flex-1 min-w-[180px] px-2">
        <Input
          type="number"
          bind:value={keyword1}
          placeholder="Cari Berdasarkan Nomor RM"
          className="bg-white text-gray-800 placeholder-gray-500 border-0 rounded ring-0"
        />
      </div>
      <div class="flex-1 min-w-[180px] px-2">
        <Input
          type="number"
          bind:value={keyword2}
          placeholder="Cari Berdasarkan NIK"
          className="bg-white text-gray-800 placeholder-gray-500 border-0 rounded ring-0"
        />
      </div>
      <div class="flex-1 min-w-[180px] px-2">
        <Input
          type="text"
          bind:value={keyword3}
          placeholder="Cari Berdasarkan Nama Pasien"
          className="bg-white text-gray-800 placeholder-gray-500 border-0 rounded ring-0"
        />
      </div>
    </SearchBar>
  </div>

  <div class="mt-6 bg-white border border-gray-200 rounded-xl overflow-hidden">
    <Table {columns} data={pasienData} showAction={true} showStatus={true} />
  </div>

  <div class="mt-6">
    <Pagination
      total={100}
      perPage={10}
      defaultPage={currentPage}
      onPageChange={handlePageChange}
    />
  </div>
</section>
