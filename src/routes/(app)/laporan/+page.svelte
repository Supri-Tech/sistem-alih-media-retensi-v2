<script>
  import Icon from "@iconify/svelte";
  import Table from "$components/Table.svelte";
  import Pagination from "$components/Pagination.svelte";
  import Button from "$components/Button.svelte";
  import SearchBar from "$components/SearchBar.svelte";
  import Input from "$components/Input.svelte";
  import SearchableSelect from "$components/SearchableSelect.svelte";

  import {
    laporanData,
    laporanColumns as columns,
    selectByTransaction as byTransaction,
    selectByCategory as byCategory,
  } from "$data/laporanData.js";

  let keyword1 = "";
  let selectedTransaksi = "";
  let selectedKategori = "";
  let currentPage = 1;

  function handleSearch() {
    console.log("Kata kunci:", keyword1);
  }

  function handlePageChange(page) {
    currentPage = page;
  }

  $: filteredData = laporanData.filter((item) => {
    const matchTransaksi =
      selectedTransaksi === "" || item.status === selectedTransaksi;
    const matchKategori =
      selectedKategori === "" || item.kategori === selectedKategori;
    return matchTransaksi && matchKategori;
  });
</script>

<section class="text-gray-800 mb-8">
  <div class="flex flex-col lg:flex-row justify-between items-start gap-8">
    <div class="flex-1 space-y-6">

      <div class="space-y-2">
        <h2 class="text-3xl font-semibold tracking-tight text-gray-800">
          Kelola Laporan Pasien
        </h2>
        <p class="text-sm text-gray-500">
          Lihat dan kelola laporan pasien berdasarkan kategori kasus dan status.
        </p>
      </div>

      <div class="flex flex-wrap gap-3">
        <Button
          sizes="md"
          variant="outline"
          customClass="flex items-center gap-2 text-sm text-emerald-700 hover:bg-emerald-700 hover:text-white hover:border hover:border-emerald-700"
        >
          <Icon icon="mdi:file-pdf" class="text-lg" />
          Export PDF
        </Button>

        <Button
          sizes="md"
          variant="emerald"
          customClass="flex items-center gap-2 text-sm hover:bg-white hover:text-emerald-600 border border-emerald-600"
        >
          <Icon icon="mdi:file-excel" class="text-lg" />
          Export Excel
        </Button>
      </div>
    </div>

    <div class="bg-emerald-50 rounded-xl p-4 w-full max-w-xs">
      <p class="text-sm text-gray-700 mb-2 font-semibold">
        Informasi Penunjang
      </p>
      <p class="text-sm text-gray-700 mb-4 leading-relaxed">
        Data laporan mencakup informasi pasien berdasarkan
        <span class="font-semibold text-emerald-700">Nomor Rekam Medis</span>,
        <span class="font-semibold text-emerald-700">Kategori Kasus</span>, dan
        <span class="font-semibold text-emerald-700">Status Laporan</span>,
      </p>
    </div>
  </div>

  <div class="mt-6">
    <SearchBar on:search={handleSearch}>
      <div class="flex-1 min-w-[180px] px-2">
        <SearchableSelect
          bind:selected={selectedTransaksi}
          options={byTransaction}
          placeholder="Pilih Berdasarkan Transaksi"
          className="w-full"
          inputClass="bg-transparent text-emerald-700 border-0 rounded-md focus:ring-0 focus:border-0"
        />
      </div>
      <div class="flex-1 min-w-[180px] px-2">
        <SearchableSelect
          bind:selected={selectedKategori}
          options={byCategory}
          placeholder="Pilih Berdasarkan Kategori"
          className="w-full"
          inputClass="bg-transparent text-emerald-700 border-0 rounded-md focus:ring-0 focus:border-0"
        />
      </div>
      <div class="h-full min-w-[60px] flex items-center">
        <Button
          type="button"
          variant="default"
          sizes="sm"
          rounded="0"
          customClass="h-full w-full text-xs border-0"
          on:click={() => {
            selectedTransaksi = "";
            selectedKategori = "";
            handleSearch();
          }}
        >
          <Icon icon="mdi:refresh" class="text-sm mr-1" />
          Reset
        </Button>
      </div>
    </SearchBar>
  </div>

  <div class="mt-6 bg-white border border-gray-200 rounded-xl overflow-hidden">
    <Table {columns} data={filteredData} showStatus={true} />
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
