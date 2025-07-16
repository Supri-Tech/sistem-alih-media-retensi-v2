<script>
  import { linkHistories as histories } from "$data/riwayatData.js";
  import Icon from "@iconify/svelte";
</script>

<div class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
  {#each histories as item}
    <a
      href={item.href}
      class="flex flex-col items-center justify-center gap-3 p-6 border border-gray-200 rounded-xl bg-white hover:bg-emerald-50 transition-colors duration-200 text-center"
    >
      <div class="p-4 rounded-full bg-emerald-50 text-emerald-400">
        <Icon icon={item.icon} class="text-2xl" />
      </div>
      <div>
        <h3 class="text-xl font-medium text-gray-800 mb-4">{item.title}</h3>
        <p class="text-sm text-gray-500">{item.description}</p>
      </div>
    </a>
  {/each}
</div>
