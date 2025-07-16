<script>
  export let logs = [];
  export let emptyMessage = "Tidak ada aktivitas yang ditemukan.";

  function getBorderColor(status) {
    return (
      {
        login: "border-emerald-500",
        logout: "border-yellow-500",
        success: "border-emerald-500",
        failed: "border-red-500",
        active: "border-emerald-500",
        inactive: "border-gray-400",
      }[status] || "border-gray-300"
    );
  }
</script>

<div class="flex-1">
  {#if logs.length > 0}
    {#each logs as log, i}
      <div
        class="flex gap-6 items-start px-4 py-6"
        class:border-b={i < logs.length - 1}
        class:border-gray-200={i < logs.length - 1}
      >
        <div class="min-w-[110px] pt-1">
          <p class="text-sm text-gray-500 font-semibold whitespace-nowrap">
            {log.date}
          </p>
        </div>

        <div class="flex-1 space-y-5">
          {#each log.events as event}
            <div class="flex gap-4 items-start">
              <p class="text-xs text-gray-400 w-16 pt-1">{event.time}</p>
              <div
                class={`flex-1 pl-4 py-3 bg-white rounded-md shadow-sm border-l-4 ${getBorderColor(event.status)}`}
              >
                <p class="italic text-sm text-gray-700 font-medium mb-1">
                  {event.user}
                </p>
                <p class="text-sm text-gray-800">{event.message}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  {:else}
    <p class="text-sm text-gray-500 px-4 py-6">{emptyMessage}</p>
  {/if}
</div>
