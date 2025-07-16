<script>
  export let columns = [];
  export let data = [];
  export let showAction = false;
  export let showStatus = false;
  export let showIndex = true;

  function getStatusClass(status) {
    switch (status) {
      case "Aktif":
        return "bg-emerald-100 text-emerald-700";
      case "Inaktif":
      case "Tidak Aktif":
        return "bg-red-100 text-red-700";
      case "Alih Media":
        return "bg-emerald-100 text-emerald-700";
      case "Retensi":
        return "bg-blue-100 text-blue-700";
      case "Pemusnahan":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  }
</script>

<table class="min-w-full text-sm text-gray-800">
  <thead
    class="bg-gray-100 text-left uppercase text-xs tracking-wider text-emerald-700"
  >
    <tr>
      {#if showIndex}
        <th class="px-6 py-3">No</th>
      {/if}
      {#each columns as col}
        <th class="px-6 py-3">{col.label}</th>
      {/each}
      {#if showStatus}
        <th class="px-6 py-3 text-center">Status</th>
      {/if}
      {#if showAction}
        <th class="px-6 py-3 text-center">Aksi</th>
      {/if}
    </tr>
  </thead>

  <tbody class="divide-y divide-gray-200">
    {#each data as row, index}
      <tr class="hover:bg-gray-100 transition">
        {#if showIndex}
          <td class="px-6 py-4 text-gray-600">{index + 1}</td>
        {/if}

        {#each columns as col}
          <td class="px-6 py-4">{row[col.key]}</td>
        {/each}

        {#if showStatus}
          <td class="px-6 py-4 text-center">
            <span
              class={`inline-block text-xs font-medium px-2 py-1 rounded-full ${getStatusClass(row.status)}`}
            >
              {row.status}
            </span>
          </td>
        {/if}

        {#if showAction}
          <td class="px-6 py-4 text-center">
            <slot name="action" {row} />
          </td>
        {/if}
      </tr>
    {/each}
  </tbody>
</table>
