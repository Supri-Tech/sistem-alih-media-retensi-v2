<script>
  import Sidebar from "$components/Sidebar.svelte";
  import Icon from "@iconify/svelte";
  import Table from "$components/Table.svelte";
  import Pagination from "$components/Pagination.svelte";
  import Button from "$components/Button.svelte";
  import SearchBar from "$components/SearchBar.svelte";
  import Input from "$components/Input.svelte";
  import ActionDropdown from "$components/ActionDropdown.svelte";
  import DetailModal from "$lib/components/DetailModal.svelte";

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

  function onAction({ detail }) {
    if (detail.name === "detail") {
      showModal = false;
      setTimeout(() => {
        showModal = true;
      }, 0);
    }
  }
</script>

<section class="text-gray-800 mb-8">
  <div class="flex flex-col lg:flex-row justify-between items-start gap-8">
    <div class="flex-1 space-y-6">

      <div class="space-y-2">
        <h2 class="text-3xl font-semibold tracking-tight text-gray-800">
          Manajemen Kategori Kasus
        </h2>
        <p class="text-sm text-gray-500">
          Atur dan kelola masa aktif serta inaktif dari tiap jenis kategori
          kasus rawat inap dan rawat jalan.
        </p>
      </div>


      <div class="space-y-2">
        <h3 class="text-lg font-semibold text-gray-700">Total Kategori</h3>
        <div class="text-4xl font-bold text-emerald-600">12</div>
        <p class="text-xs text-gray-500">Update 6 Juli 2025, 09:00 WIB</p>
      </div>


      <div class="flex flex-wrap gap-3">
        <a href="/kategori/formulir">
          <Button
            sizes="md"
            variant="emerald"
            customClass="flex items-center gap-2 text-sm hover:bg-white hover:text-emerald-600 border border-emerald-600"
          >
            <Icon icon="mdi:plus" class="text-lg" />
            Tambah Data
          </Button>
        </a>
      </div>
    </div>

    <div class="bg-emerald-50 rounded-xl p-4 w-full max-w-xs">
      <p class="text-sm text-gray-700 mb-2 font-semibold">Model Penentuan</p>
      <p class="text-sm text-gray-700 mb-4 leading-relaxed">
        Masa aktif dan inaktif kategori ditentukan berdasarkan jenis layanan:
        <span class="font-semibold text-emerald-700">Rawat Inap (RI)</span> dan
        <span class="font-semibold text-emerald-700">Rawat Jalan (RJ)</span>.
        Kategori dinyatakan <strong>aktif</strong> bila digunakan dalam rentang
        waktu tertentu, dan akan menjadi <strong>tidak aktif</strong> bila tidak
        digunakan melebihi batas waktu kebijakan.
      </p>
    </div>
  </div>

  <div class="mt-6">
    <SearchBar on:search={handleSearch}>
      <div class="flex-1 min-w-[180px] px-2">
        <input
          type="text"
          bind:value={keyword1}
          placeholder="Cari Berdasarkan Nama Pasien"
          class="w-full bg-transparent text-gray-800 placeholder-gray-500 border-0 focus:ring-0 px-3 py-2.5 text-sm"
        />
      </div>
    </SearchBar>
  </div>

  <div class="mt-6 bg-white border border-gray-200 rounded-xl overflow-hidden">
    <Table {columns} data={kategoriData} showAction>
      <svelte:fragment slot="status" let:row />

      <svelte:fragment slot="action" let:row>
        <ActionDropdown on:action={onAction} showLeft={true}>
          <svelte:fragment slot="main" let:handleAction>
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
        </ActionDropdown>
      </svelte:fragment>
    </Table>
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
