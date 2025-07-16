<script>
  import Icon from "@iconify/svelte";
  import Button from "$components/Button.svelte";

  export let data;
</script>

<section class="mb-8 text-gray-800">
  <div class="flex flex-col lg:flex-row justify-between items-start gap-8">
    <div class="flex-1 space-y-6">
      <div class="">
        {#if data?.header}
          <h2 class="text-3xl font-semibold tracking-tight text-gray-800">
            {data.header}
          </h2>
        {/if}
        {#if data?.description}
          <p class="text-sm text-gray-500 mt-1">{data.description}</p>
        {/if}
      </div>
    </div>
    <!-- additional notes -->
  </div>

  {#if data?.stats}
    <div class="space-y-4 mt-6">
      <div class="flex justify-between items-center">
        <h3 class="text-lg font-semibold text-gray-700">{data.statsTitle}</h3>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {#each data.stats as item}
          <div
            class="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition space-y-2"
          >
            <h4 class={`text-${item.color}-600 text-sm font-medium`}>
              {item.label}
            </h4>
            <p class={`text-4xl font-bold text-${item.color}-500`}>
              {item.value}
            </p>
            <p class="text-xs text-gray-500">{item.desc}</p>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <slot />
</section>
