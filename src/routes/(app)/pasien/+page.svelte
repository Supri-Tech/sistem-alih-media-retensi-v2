<script>
  import Sidebar from "$components/Sidebar.svelte";
  import Icon from "@iconify/svelte";
  import Table from "$components/Table.svelte";
  import Pagination from "$components/Pagination.svelte";
  import Button from "$components/Button.svelte";
  import SearchBar from "$components/SearchBar.svelte";
  import Input from "$components/Input.svelte";
  import WeekCalendar from "$components/WeekCalendar.svelte";
  import ActionDropdown from "$components/ActionDropdown.svelte";
  import DetailModal from "$lib/components/DetailModal.svelte";

  import { pasienColumns as columns, pasienData } from "$data/pasienData.js";

  let keyword1 = "";
  let keyword2 = "";
  let keyword3 = "";
  let currentPage = 1;
  let selectedDate = new Date();
  let showModal = false;
  let selectedRow = null;

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
      <div class="">
        <h2 class="text-3xl font-semibold tracking-tight text-gray-800">
          Manajemen Pasien
        </h2>
        <p class="text-sm text-gray-500 mt-1">
          Pantau dan kelola seluruh data pasien yang terdaftar dalam sistem
          secara real-time.
        </p>
      </div>

      <div class="space-y-2">
        <h3 class="text-lg font-semibold text-gray-700">Total Dokumen</h3>
        <div class="text-4xl font-bold text-emerald-600">1.230</div>
        <p class="text-xs text-gray-500">Update 6 Juli 2025, 09:00 WIB</p>
      </div>

      <div class="flex flex-wrap gap-3">
        <Button
          sizes="md"
          variant="outline"
          customClass="flex items-center gap-2 text-sm text-emerald-700 hover:bg-emerald-700 hover:text-white hover:border hover:border-emerald-700"
        >
          <Icon icon="mdi:cloud-upload" class="text-base" />
          Import Data
        </Button>

        <Button
          sizes="md"
          variant="emerald"
          customClass="flex items-center gap-2 text-sm hover:bg-white hover:text-emerald-600 border border-emerald-600"
        >
          <Icon icon="mdi:cloud-download" class="text-base" />
          Export Data
        </Button>

        <a href="/pasien/formulir">
          <Button
            variant="emerald"
            sizes="md"
            rounded="full"
            iconOnly
            customClass="group transition-all duration-300"
          >
            <div class="flex items-center overflow-hidden">
              <Icon icon="mdi:plus" class="text-white text-xl shrink-0" />
              <span
                class="text-white text-sm whitespace-nowrap max-w-0 group-hover:max-w-xs opacity-0 group-hover:opacity-100 group-hover:px-2 transition-all duration-300"
              >
                Tambah Data
              </span>
            </div>
          </Button>
        </a>
      </div>
    </div>

    <div class="bg-emerald-50 rounded-xl p-4 w-full max-w-xs">
      <p class="text-sm text-gray-700 mb-2 font-semibold">Kalender hari ini</p>
      <WeekCalendar bind:selectedDate />

      <div class="mt-6">
        <p class="text-sm font-semibold text-gray-700 mb-2">
          Statistik Dokumen
        </p>

        <div class="mb-3">
          <div class="flex justify-between text-sm text-gray-800 mb-1">
            <span>Dokumen pending</span>
            <span>80%</span>
          </div>
          <div class="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full bg-emerald-600" style="width: 80%"></div>
          </div>
        </div>

        <div class="mb-3">
          <div class="flex justify-between text-sm text-gray-800 mb-1">
            <span>Dokumen aktif</span>
            <span>15%</span>
          </div>
          <div class="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full bg-emerald-600" style="width: 15%"></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between text-sm text-gray-800 mb-1">
            <span>Dokumen tidak aktif</span>
            <span>5%</span>
          </div>
          <div class="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full bg-emerald-600" style="width: 5%"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-6">
    <SearchBar on:search={handleSearch}>
      <div class="flex-1 min-w-[180px] px-2">
        <input
          type="number"
          bind:value={keyword1}
          placeholder="Cari Berdasarkan Nomor RM"
          class="w-full bg-transparent text-gray-800 placeholder-gray-500 border-0 focus:ring-0 px-3 py-2.5 text-sm"
        />
      </div>
      <div class="flex-1 min-w-[180px] px-2">
        <input
          type="number"
          bind:value={keyword2}
          placeholder="Cari Berdasarkan NIK"
          class="w-full bg-transparent text-gray-800 placeholder-gray-500 border-0 focus:ring-0 px-3 py-2.5 text-sm"
        />
      </div>
      <div class="flex-1 min-w-[180px] px-2">
        <input
          type="text"
          bind:value={keyword3}
          placeholder="Cari Berdasarkan Nama Pasien"
          class="w-full bg-transparent text-gray-800 placeholder-gray-500 border-0 focus:ring-0 px-3 py-2.5 text-sm"
        />
      </div>
    </SearchBar>
  </div>

  <div class="mt-6 bg-white border border-gray-200 rounded-xl overflow-hidden">
    <Table {columns} data={pasienData} showAction showStatus>
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
              <a href={`/transaksi/alihmedia/formulir?id=${row.nomor_rm}`}>
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

    <DetailModal
      bind:open={showModal}
      bind:data={selectedRow}
      onClose={() => (showModal = false)}
    />
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
