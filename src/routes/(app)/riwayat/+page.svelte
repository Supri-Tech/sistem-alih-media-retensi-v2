<script>
  import { linkHistories as histories } from "$data/riwayatData.js";
  import Icon from "@iconify/svelte";

  export let data;
</script>

<section class="min-h-screen text-gray-800 border-b border-gray-200">
  <div class="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8">
    <div class="space-y-2">
      <h2 class="text-3xl font-semibold text-gray-800">
        {data?.title}
      </h2>
      <p class="text-sm text-gray-500">
        {data?.description}
      </p>
    </div>

    {#if data?.button}
      <div class="w-full max-w-xs">
        <a href={data?.button.href}>
          <Button
            variant="emerald"
            sizes="md"
            rounded="full"
            iconOnly
            customClass="group transition-all duration-300"
          >
            <div class="flex items-center overflow-hidden">
              <Icon
                icon={data?.button.icon}
                class="text-white text-xl shrink-0"
              />
              <span
                class="text-white text-sm whitespace-nowrap max-w-0 group-hover:max-w-xs opacity-0 group-hover:opacity-100 group-hover:px-2 transition-all duration-300"
              >
                {data?.button.label}
              </span>
            </div>
          </Button>
        </a>
      </div>
    {/if}
  </div>

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
</section>
