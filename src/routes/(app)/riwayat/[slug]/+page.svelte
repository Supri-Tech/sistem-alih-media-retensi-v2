<script>
  import Input from "$components/Input.svelte";
  import Button from "$components/Button.svelte";
  import SearchableSelect from "$components/SearchableSelect.svelte";
  import LogCard from "$components/LogCard.svelte";

  export let data;

  let selectedUser = "";
  let selectedMonth = "";
  let filteredLogs = [];

  import { onMount } from "svelte";
  onMount(() => {
    filteredLogs = data.content;
  });

  function handleFilter() {
    filteredLogs = data.content
      .map((log) => {
        const matchMonth = selectedMonth
          ? log.date.startsWith(selectedMonth)
          : true;

        const filteredEvents = selectedUser
          ? log.events.filter((e) =>
              e.user.toLowerCase().includes(selectedUser.toLowerCase())
            )
          : log.events;

        if (matchMonth && filteredEvents.length > 0) {
          return { ...log, events: filteredEvents };
        }

        return null;
      })
      .filter(Boolean);
  }
</script>

<section>
  <div class="border-y border-gray-300 p-3">
    <p class="font-medium text-gray-700">
      Riwayat
      <span class="text-emerald-700 font-semibold">{data.slug}</span>
      pengguna di dalam sistem.
    </p>
  </div>

  <div class="relative flex flex-col lg:flex-row">
    <LogCard
      logs={filteredLogs}
      emptyMessage="Tidak ada riwayat {data.slug} yang ditemukan."
    />

    <div
      class="sticky -top-7 w-full lg:max-w-xs lg:max-h-screen px-4 py-7 border-l border-gray-200 bg-gray-50 flex flex-col space-y-6"
    >
      <div class="space-y-4">
        <h2 class="text-base font-semibold text-gray-700 mb-2">
          Filter Riwayat {data.slug}
        </h2>

  
        <SearchableSelect
          options={data.users}
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
          Cari
        </Button>
      </div>
    </div>
  </div>
</section>
