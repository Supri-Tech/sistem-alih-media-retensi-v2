<script>
  import Icon from "@iconify/svelte";
  import Table from "$components/Table.svelte";
  import Pagination from "$components/Pagination.svelte";
  import Button from "$components/Button.svelte";
  import SearchBar from "$components/SearchBar.svelte";
  import Input from "$components/Input.svelte";

  let keywordRM = "";
  let keywordNama = "";

  const columns = [
    { label: "No", key: "no" },
    { label: "Nomor RM", key: "nomor_rm" },
    { label: "Nama Pasien", key: "nama_pasien" },
    { label: "Tanggal Laporan", key: "tanggal_laporan" },
    { label: "Status", key: "status" },
  ];

  let alihMediaData = [
    {
      no: 1,
      nomor_rm: "RM-20230701",
      nama_pasien: "Siti Aminah",
      tanggal_laporan: "08-07-2025",
      status: "Diproses",
    },
    {
      no: 2,
      nomor_rm: "RM-20230702",
      nama_pasien: "Budi Santoso",
      tanggal_laporan: "08-07-2025",
      status: "Selesai",
    },
    {
      no: 3,
      nomor_rm: "RM-20230703",
      nama_pasien: "Nur Hidayah",
      tanggal_laporan: "07-07-2025",
      status: "Menunggu",
    },
  ];

  let currentPage = 1;
  function handleSearch() {
    console.log("Cari:", keywordRM, keywordNama);
  }

  function handlePageChange(page) {
    currentPage = page;
  }
</script>

<section
  class="bg-gray-50 text-gray-800 rounded-2xl p-6 shadow-md border border-gray-200 space-y-10"
>
  <div class="space-y-1">
    <p class="text-xs text-gray-500">
      Terakhir diperbarui: 8 Juli 2025, 13:00 WIB
    </p>
    <h2 class="text-3xl font-semibold text-emerald-700 tracking-tight">
      Transaksi Alih Media
    </h2>
    <p class="text-sm text-gray-600 max-w-2xl">
      Catatan alih media arsip rekam medis pasien rumah sakit yang telah atau
      sedang diproses.
    </p>
  </div>

  <div class="space-y-4">
    <div class="flex justify-between items-center">
      <h3 class="text-lg font-semibold text-gray-700">Statistik Alih Media</h3>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        class="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition space-y-2"
      >
        <h4 class="text-emerald-700 text-sm font-medium">Total Dokumen</h4>
        <p class="text-4xl font-bold text-gray-800">1.284</p>
        <p class="text-xs text-gray-500">
          Semua dokumen alih media yang tercatat
        </p>
      </div>

      <div
        class="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition space-y-2"
      >
        <h4 class="text-yellow-600 text-sm font-medium">Sedang Diproses</h4>
        <p class="text-4xl font-bold text-yellow-500">98</p>
        <p class="text-xs text-gray-500">Dalam tahap digitalisasi</p>
      </div>

      <div
        class="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition space-y-2"
      >
        <h4 class="text-blue-600 text-sm font-medium">Dokumen Aktif</h4>
        <p class="text-4xl font-bold text-blue-500">564</p>
        <p class="text-xs text-gray-500">Telah tersedia dalam sistem</p>
      </div>

      <div
        class="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition space-y-2"
      >
        <h4 class="text-emerald-600 text-sm font-medium">Dokumen Selesai</h4>
        <p class="text-4xl font-bold text-emerald-600">622</p>
        <p class="text-xs text-gray-500">Telah selesai alih media</p>
      </div>
    </div>
  </div>

  <div class="space-y-3">
    <div class="flex flex-wrap justify-between items-center gap-4">
      <h3 class="text-lg font-semibold text-gray-700">
        Tabel Pencarian Dokumen Alih Media
      </h3>
      <a href="/transaksi/alihmedia/formulir">
        <Button variant="emerald">Tambah Transaksi</Button>
      </a>
    </div>

    <SearchBar on:search={handleSearch}>
      <div class="flex-1 min-w-[200px] px-2">
        <Input
          bind:value={keywordRM}
          placeholder="Cari Nomor RM"
          className="bg-white text-gray-800 placeholder-gray-500 border-0 rounded ring-0"
        />
      </div>
      <div class="flex-1 min-w-[200px] px-2">
        <Input
          bind:value={keywordNama}
          placeholder="Cari Nama Pasien"
          className="bg-white text-gray-800 placeholder-gray-500 border-0 rounded ring-0"
        />
      </div>
    </SearchBar>

    <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden">
      <Table
        {columns}
        data={alihMediaData}
        showAction={true}
        showStatus={true}
      />
    </div>

    <div class="pt-4">
      <Pagination
        total={30}
        perPage={10}
        defaultPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  </div>
</section>
