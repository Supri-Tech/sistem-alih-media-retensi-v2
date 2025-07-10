<script>
  import Icon from "@iconify/svelte";
  import Table from "$components/Table.svelte";
  import Pagination from "$components/Pagination.svelte";
  import Button from "$components/Button.svelte";
  import SearchBar from "$components/SearchBar.svelte";
  import Input from "$components/Input.svelte";
  import ActionDropdown from "$components/ActionDropdown.svelte";

  import DetailModal from "$lib/components/DetailModal.svelte";

  import {
    alihMediaData,
    alihMediaColumns as columns,
  } from "$data/alihMediaData.js";

  let keywordRM = "";
  let keywordNama = "";
  let currentPage = 1;
  let showModal = false;

  function onAction({ detail }) {
    if (detail.name === "detail") {
      showModal = false;
      setTimeout(() => {
        showModal = true;
      }, 0);
    }
  }

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
      <Table {columns} data={alihMediaData} showAction={true} showStatus={true}>
        <svelte:fragment slot="status" let:row />

        <svelte:fragment slot="action" let:row>
          <ActionDropdown on:action={onAction} showLeft={true}>
            <svelte:fragment slot="main" let:handleAction>
              <li>
                <Button
                  on:click={() => handleAction("detail")}
                  variant="secondary"
                  menuItem
                  full
                  size="md"
                  rounded="none"
                >
                  Detail
                </Button>
              </li>
              <li>
                <a href="/transaksi/alihmedia/formulir?id=RM-20230002">
                  <Button
                    on:click={() => handleAction("update")}
                    variant="secondary"
                    menuItem
                    full
                    size="md"
                    rounded="none"
                  >
                    Update
                  </Button>
                </a>
              </li>
              <li>
                <Button
                  on:click={() => handleAction("delete")}
                  variant="secondary"
                  class="text-red-500 hover:text-red-600"
                  menuItem
                  full
                  size="md"
                  rounded="none"
                >
                  Hapus
                </Button>
              </li>
            </svelte:fragment>

            <svelte:fragment slot="sub" let:handleAction>
              <li>
                <Button
                  on:click={() => handleAction("aktif")}
                  variant="secondary"
                  menuItem
                  full
                  size="md"
                  rounded="none"
                >
                  Aktif
                </Button>
              </li>
              <li>
                <Button
                  on:click={() => handleAction("nonaktif")}
                  variant="secondary"
                  menuItem
                  full
                  size="md"
                  rounded="none"
                >
                  Tidak Aktif
                </Button>
              </li>
            </svelte:fragment>
          </ActionDropdown>
        </svelte:fragment>
      </Table>

      <DetailModal bind:open={showModal} onClose={() => (showModal = false)} />
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
