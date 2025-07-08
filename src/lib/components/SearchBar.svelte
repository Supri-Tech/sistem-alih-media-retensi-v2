<script>
  import Button from "$components/Button.svelte";
  import Icon from "@iconify/svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleSearch() {
    dispatch("search");
  }
</script>

<form
  class="flex flex-wrap items-center bg-white border border-gray-200 rounded-xl overflow-hidden divide-x divide-gray-200 mt-6"
  on:submit|preventDefault={handleSearch}
>
  <div class="flex flex-1 min-w-0 divide-x divide-gray-200 pl-2">
    <slot />
  </div>

  <div class="px-4 py-2">
    <Button
      variant="emerald"
      class="rounded-none px-6 py-2 text-sm h-full whitespace-nowrap"
      type="submit"
    >
      <Icon icon="mdi:magnify" class="mr-2 text-base" />
      Cari Data
    </Button>
  </div>
</form>
