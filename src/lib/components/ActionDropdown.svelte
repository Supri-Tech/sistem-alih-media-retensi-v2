<script>
  import { createDropdownMenu, melt } from "@melt-ui/svelte";
  import Icon from "@iconify/svelte";

  const {
    elements: { trigger, content, item, arrow },
    states: { open },
  } = createDropdownMenu();
</script>

<div class="relative inline-block text-left">
  <button
    use:trigger
    class="text-gray-500 hover:text-emerald-600 transition p-1"
    aria-label="Aksi"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 mx-auto"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 6v.01M12 12v.01M12 18v.01"
      />
    </svg>
  </button>

  {#if $open}
    <div
      use:content
      class="absolute right-0 z-50 mt-2 w-36 origin-top-right rounded-md border border-gray-200 bg-white shadow-lg"
    >
      <ul class="py-1 text-sm text-gray-700">
        <li>
          <button use:item class="w-full text-left px-4 py-2 hover:bg-gray-100">
            Detail
          </button>
        </li>
        <li>
          <button use:item class="w-full text-left px-4 py-2 hover:bg-gray-100">
            Update
          </button>
        </li>
        <li>
          <button
            use:item
            class="w-full text-left px-4 py-2 text-red-500 hover:text-red-600 hover:bg-gray-100"
          >
            Hapus
          </button>
        </li>
      </ul>
      <div use:arrow />
    </div>
  {/if}
</div>
