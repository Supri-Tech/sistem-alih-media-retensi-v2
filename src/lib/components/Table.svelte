<script>
  import ActionDropdown from "$components/ActionDropdown.svelte";

  export let columns = [];
  export let data = [];
  export let showAction = false;
  export let showStatus = false;
</script>

<table class="min-w-full text-sm text-gray-800">
  <thead
    class="bg-gray-100 text-left uppercase text-xs tracking-wider text-emerald-700"
  >
    <tr>
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
    {#each data as row}
      <tr class="hover:bg-gray-100 transition">
        {#each columns as col}
          <td class="px-6 py-4">{row[col.key]}</td>
        {/each}

        {#if showStatus}
          <td class="px-6 py-4 text-center">
            <span
              class="inline-block text-xs font-medium px-2 py-1 rounded-full
                {row.status === 'Aktif'
                ? 'bg-emerald-100 text-emerald-700'
                : ''}
                {row.status === 'Pending'
                ? 'bg-yellow-100 text-yellow-700'
                : ''}
                {row.status === 'Tidak Aktif' ? 'bg-red-100 text-red-700' : ''}
                {row.status === 'Rawat Jalan'
                ? 'bg-emerald-100 text-emerald-700'
                : ''}
                {row.status === 'Rawat Inap' ? 'bg-blue-100 text-blue-700' : ''}
                {row.status === 'Selesai' ? 'bg-gray-200 text-gray-700' : ''}
                {row.status === 'Rujukan'
                ? 'bg-yellow-100 text-yellow-800'
                : ''}"
            >
              {row.status}
            </span>
          </td>
        {/if}

        {#if showAction}
          <td class="px-6 py-4 text-center">
            <ActionDropdown />
          </td>
        {/if}
      </tr>
    {/each}
  </tbody>
</table>
