<script>
  import Input from "$components/Input.svelte";
  import Button from "$components/Button.svelte";
  import SearchableSelect from "$components/SearchableSelect.svelte";
  import { users, dataPasienLogs as allLogs } from "$data/riwayatData.js";
  import LogCard from "$components/LogCard.svelte";

  let selectedUser = "";
  let selectedMonth = "";
  let filteredLogs = allLogs;

  $: handleFilter();

  function handleFilter() {
    filteredLogs = allLogs
      .map((log) => {
        const events = selectedUser
          ? log.events.filter((e) =>
              e.user.toLowerCase().includes(selectedUser.toLowerCase())
            )
          : log.events;

        const matchMonth = selectedMonth
          ? log.date.startsWith(selectedMonth)
          : true;

        if (events.length > 0 && matchMonth) {
          return { ...log, events };
        }

        return null;
      })
      .filter(Boolean);
  }

  function getBorderColor(status) {
    return status === "failed" ? "border-red-500" : "border-emerald-500";
  }
</script>

<section class="">
  <div class="border-y border-gray-300 p-3">
    <p class="font-medium text-gray-700">
      Riwayat <span class="text-emerald-700 font-semibold"
        >pengelolaan data pasien</span
      >
      seperti penambahan, pengeditan, atau penghapusan informasi medis.
    </p>
  </div>

  <div class="relative flex flex-col lg:flex-row">
    <LogCard
      logs={filteredLogs}
      emptyMessage="Tidak ada riwayat pasien yang ditemukan."
    />

    <div
      class="sticky -top-7 w-full lg:max-w-xs lg:max-h-screen px-4 py-7 border-l border-gray-200 bg-gray-50 flex flex-col space-y-6"
    >
      <div class="space-y-4">
        <h2 class="text-base font-semibold text-gray-700 mb-2">
          Filter Riwayat Pasien
        </h2>

        <SearchableSelect
          options={users}
          bind:selected={selectedUser}
          placeholder="Cari nama pengguna"
          label="Pengguna"
          className="w-full"
          inputClass="text-sm px-3 py-2 border border-gray-300 rounded-md"
        />

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Bulan Aktivitas
          </label>
          <Input
            type="month"
            bind:value={selectedMonth}
            class="w-full text-sm px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div class="pt-2">
        <Button
          variant="emerald"
          sizes="sm"
          customClass="w-full justify-center text-sm"
          on:click={handleFilter}
        >
          Cari Riwayat
        </Button>
      </div>
    </div>
  </div>
</section>
