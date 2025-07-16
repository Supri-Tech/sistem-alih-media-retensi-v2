<script>
  import Input from "$components/Input.svelte";
  import Button from "$components/Button.svelte";
  import SearchableSelect from "$components/SearchableSelect.svelte";
  import { users, accessLogs as allLogs } from "$data/riwayatData.js";
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
</script>

<section class="">
  <div class="border-y border-gray-300 p-3">
    <p class="font-medium text-gray-700">
      Riwayat <span class="text-emerald-700 font-semibold"
        >akses masuk dan keluar</span
      >
      pengguna ke dalam sistem.
    </p>
  </div>

  <div class="relative flex flex-col lg:flex-row">

    <LogCard
      logs={filteredLogs}
      emptyMessage="Tidak ada riwayat akses yang ditemukan."
    />


    <div
      class="sticky -top-7 w-full lg:max-w-xs lg:max-h-screen px-4 py-7 border-l border-gray-200 bg-gray-50 flex flex-col space-y-6"
    >
      <div class="space-y-4">
        <h2 class="text-base font-semibold text-gray-700 mb-2">
          Filter Akses Pengguna
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
            Bulan Akses
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
          Cari Akses
        </Button>
      </div>
    </div>
  </div>
</section>
