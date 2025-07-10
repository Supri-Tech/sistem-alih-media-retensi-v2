<script>
  import Sidebar from "$components/Sidebar.svelte";
  import Icon from "@iconify/svelte";
  import Table from "$components/Table.svelte";
  import Pagination from "$components/Pagination.svelte";
  import Button from "$components/Button.svelte";
  import SearchBar from "$components/SearchBar.svelte";
  import Input from "$components/Input.svelte";

  import {
    kategoriColumns as columns,
    kategoriData,
  } from "$data/kategoriData.js";

  let keyword1 = "";
  let currentPage = 1;

  function handleSearch() {
    console.log("Kata kunci:", keyword1, keyword2, keyword3);
  }

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
        Manajemen Kategori Kasus
      </h2>
      <p class="text-sm text-gray-500">
        Atur dan kelola masa aktif serta inaktif dari tiap jenis kategori kasus
        rawat inap dan rawat jalan.
      </p>

      <div class="flex items-center gap-4 mt-4">
        <div class="text-4xl font-bold text-emerald-600">12</div>
        <div class="flex flex-wrap items-center gap-2">
          <a href="/kategori/formulir">
            <Button variant="emerald">Tambah Kategori</Button>
          </a>

          <Button variant="dark">Cari Kategori</Button>
        </div>
      </div>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-4 w-full max-w-xs">
      <p class="text-sm text-gray-800 mb-2 font-medium">Model Penentuan</p>
      <p class="text-xs text-gray-600">
        Masa aktif dan inaktif kategori ditentukan berdasarkan jenis layanan:
        <strong class="text-gray-800">Rawat Inap (RI)</strong> dan
        <strong class="text-gray-800">Rawat Jalan (RJ)</strong>.
      </p>
    </div>
  </div>

  <div class="mt-6">
    <SearchBar on:search={handleSearch}>
      <div class="flex-1 min-w-[180px] px-2">
        <Input
          type="text"
          bind:value={keyword1}
          placeholder="Cari Berdasarkan Kategori Kasus"
          className="bg-white text-gray-800 placeholder-gray-500 border border-gray-300 rounded-md ring-0"
        />
      </div>
    </SearchBar>
  </div>

  <div class="mt-6 bg-white border border-gray-200 rounded-xl overflow-hidden">
    <Table {columns} data={kategoriData} showAction={true} />
  </div>

  <div class="mt-6">
    <Pagination
      total={30}
      perPage={10}
      defaultPage={currentPage}
      onPageChange={handlePageChange}
    />
  </div>
</section>
