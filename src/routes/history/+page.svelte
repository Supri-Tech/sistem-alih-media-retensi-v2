<script>
  import Sidebar from "$components/Sidebar.svelte";
  import Icon from "@iconify/svelte";
  import Button from "$components/Button.svelte";
  import SearchBar from "$components/SearchBar.svelte";
  import Input from "$components/Input.svelte";

  const logs = [
    {
      date: "2023-11-16",
      events: [
        {
          time: "4:37 pm",
          user: "Naufal Zaul Karim",
          message:
            'The user "ABC" accessed the delete page after correct password confirmation',
        },
        {
          time: "4:42 pm",
          user: "Andhika Dwiky Pratama",
          message:
            'The user "ABC" tried deleting account but failed password verification',
        },
      ],
    },
    {
      date: "2023-11-17",
      events: [
        {
          time: "3:15 pm",
          user: "Naufal Zaul Karim",
          message: 'The user "ABC" completed deletion verification steps.',
        },
      ],
    },
  ];

  let keyword = "";
  let keyword2 = "";

  function handleSearch() {
    console.log("Filter log:", keyword, keyword2);
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
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
        Terakhir diperbarui: 7 Juli 2025, 19:00 WIB
      </p>
      <h2 class="text-2xl font-semibold text-emerald-600 tracking-tight">
        Log Aktivitas
      </h2>
      <p class="text-sm text-gray-500">
        Pantau seluruh aktivitas penting dalam sistem, termasuk login, perubahan
        data, serta tindakan oleh admin atau superadmin.
      </p>
    </div>

    <div class="bg-white border border-gray-200 rounded-xl p-4 w-full max-w-xs">
      <p class="text-sm text-gray-800 mb-2 font-medium">Informasi</p>
      <p class="text-xs text-gray-600">
        Log menyimpan riwayat aktivitas pengguna, membantu pelacakan dan audit
        keamanan sistem.
      </p>
    </div>
  </div>

  <div class="mt-6">
    <SearchBar on:search={handleSearch}>
      <div class="flex-1 min-w-[180px] px-2">
        <Input
          type="text"
          bind:value={keyword}
          placeholder="Cari Berdasarkan Nama Pengguna"
          className="bg-white text-gray-800 placeholder-gray-500 border border-gray-300 rounded-md"
        />
      </div>
      <div class="flex-1 min-w-[180px] px-2">
        <Input
          type="date"
          bind:value={keyword2}
          className="bg-white text-gray-800 border border-gray-300 rounded-md"
        />
      </div>
    </SearchBar>
  </div>

  <div class="space-y-8 mt-8">
    {#each logs as log}
      <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div
          class="bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 border-b border-emerald-100"
        >
          {formatDate(log.date)}
        </div>

        <div class="divide-y divide-gray-200">
          {#each log.events as event}
            <div class="p-4 space-y-1">
              <p class="text-xs text-gray-500">{event.time} • {event.user}</p>
              <p class="text-sm text-gray-800">{event.message}</p>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
