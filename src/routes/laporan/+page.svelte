<script>
  import Sidebar from "$components/Sidebar.svelte";
  import Icon from "@iconify/svelte";
  import Table from "$components/Table.svelte";
  import Pagination from "$components/Pagination.svelte";
  import Button from "$components/Button.svelte";
  import SearchBar from "$components/SearchBar.svelte";
  import Input from "$components/Input.svelte";
  import Select from "$components/Select.svelte";

  let keyword1 = "";
  let selectedStatus = "";

  function handleSearch() {
    console.log("Kata kunci:", keyword1);
  }

  const columns = [
    { label: "No", key: "no" },
    { label: "Nomor RM", key: "nomor_rm" },
    { label: "Nama Pasien", key: "nama" },
    { label: "Kategori Kasus", key: "kategori" },
    { label: "Status", key: "status" },
  ];

  let laporanData = [
    {
      no: 1,
      nomor_rm: "RM-20230701",
      nama: "Siti Aminah",
      kategori: "Penyakit Dalam",
      status: "Rawat Jalan",
    },
    {
      no: 2,
      nomor_rm: "RM-20230702",
      nama: "Budi Santoso",
      kategori: "Bedah Umum",
      status: "Rawat Inap",
    },
    {
      no: 3,
      nomor_rm: "RM-20230703",
      nama: "Nur Hidayah",
      kategori: "Anak",
      status: "Selesai",
    },
    {
      no: 4,
      nomor_rm: "RM-20230704",
      nama: "Agus Salim",
      kategori: "Penyakit Dalam",
      status: "Rujukan",
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
      <h2 class="text-2xl font-semibold text-emerald-600 tracking-tight">
        Laporan Data Pasien
      </h2>
      <p class="text-sm text-gray-500">
        Lihat dan kelola laporan pasien berdasarkan kategori kasus dan status.
      </p>

      <div class="flex items-center gap-4 mt-4">
        <div class="flex flex-wrap items-center gap-2">
          <Button variant="emerald">
            <Icon icon="mdi:cloud-upload" class="text-base mr-2" />
            Import Data
          </Button>
          <Button variant="dark">
            <Icon icon="mdi:cloud-download" class="text-base mr-2" />
            Export Data
          </Button>
        </div>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-4 w-full max-w-xs">
      <p class="text-sm text-gray-800 mb-2 font-medium">Informasi</p>
      <p class="text-xs text-gray-600">
        Data laporan mencakup informasi pasien berdasarkan
        <strong class="text-gray-800">nomor rekam medis</strong>,
        <strong class="text-gray-800">kategori kasus</strong>, dan
        <strong class="text-gray-800">status perawatan</strong>.
      </p>
    </div>
  </div>

  <div class="mt-6">
    <SearchBar on:search={handleSearch}>
      <div class="flex-1 min-w-[180px] px-2">
        <Select
          bind:selected={selectedStatus}
          options={["Rawat Jalan", "Rawat Inap", "Selesai", "Rujukan"]}
          placeholder="Pilih Status"
          className="bg-white text-emerald-700 border border-gray-300 rounded-md"
        />
      </div>
    </SearchBar>
  </div>

  <div class="mt-6 bg-white border border-gray-200 rounded-xl overflow-hidden">
    <Table {columns} data={laporanData} showStatus={true} />
  </div>

  <div class="mt-6">
    <Pagination
      total={40}
      perPage={10}
      defaultPage={currentPage}
      onPageChange={handlePageChange}
    />
  </div>
</section>
