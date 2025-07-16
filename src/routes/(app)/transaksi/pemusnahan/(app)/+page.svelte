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
  let selectedRow = null;

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

<div class="space-y-3 mt-12">
  <div class="flex flex-wrap justify-between items-center gap-4 mb-6">
    <h3 class="text-lg font-semibold text-gray-700">
      Tabel Pencarian Dokumen Pemusnahan
    </h3>
  </div>
  <div class="mt-6">
    <SearchBar on:search={handleSearch}>
      <div class="flex-1 min-w-[180px] px-2">
        <input
          type="number"
          bind:value={keywordRM}
          placeholder="Cari Berdasarkan Nomor RM"
          class="w-full bg-transparent text-gray-800 placeholder-gray-500 border-0 focus:ring-0 px-3 py-2.5 text-sm"
        />
      </div>
      <div class="flex-1 min-w-[180px] px-2">
        <input
          type="text"
          bind:value={keywordNama}
          placeholder="Cari Berdasarkan Nama Pasien"
          class="w-full bg-transparent text-gray-800 placeholder-gray-500 border-0 focus:ring-0 px-3 py-2.5 text-sm"
        />
      </div>
    </SearchBar>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden">
    <Table {columns} data={alihMediaData} showAction={true} showStatus={true}>
      <svelte:fragment slot="status" let:row />

      <svelte:fragment slot="action" let:row>
        <ActionDropdown on:action={onAction} showLeft={true}>
          <svelte:fragment slot="main" let:handleAction>
            <li>
              <Button
                on:click={() => {
                  selectedRow = row;
                  handleAction("detail");
                }}
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
              <Button
                on:click={() => handleAction("delete")}
                variant="secondary"
                customClass="text-red-500 hover:text-red-600"
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

    <DetailModal
      bind:open={showModal}
      bind:data={selectedRow}
      onClose={() => (showModal = false)}
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
