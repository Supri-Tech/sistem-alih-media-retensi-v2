<script>
  import Icon from "@iconify/svelte";
  import { page } from "$app/stores";
  import { slide } from "svelte/transition";

  export let item;
  export let isOpen = false;
  export let toggle = () => {};
  export let sidebarOpen = true;
</script>

<div class="overflow-hidden">
  <button
    class={`group flex items-center w-full px-3.5 py-2.5 text-left rounded-md text-[14px]
      transition-colors duration-200 ${isOpen ? "bg-emerald-600/10 text-emerald-600 font-semibold" : "text-gray-600 hover:bg-gray-100 hover:text-emerald-600"}
      ${sidebarOpen ? "gap-3" : "justify-center"}`}
    on:click={() => toggle(item.id)}
  >
    <Icon
      icon={item.icon}
      class={`text-[22px] transition-colors duration-200 ${isOpen ? "text-emerald-600" : "group-hover:text-emerald-600 text-gray-500"}`}
    />
    {#if sidebarOpen}
      <span class="font-medium flex-1">{item.label}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class={`w-4 h-4 transform transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    {/if}
  </button>

  {#if isOpen}
    <div class="overflow-hidden" transition:slide>
      <div class="pl-10 space-y-1 mt-1">
        {#each item.children as child}
          <a
            href={child.href}
            class={`group flex items-center gap-2 px-2.5 py-2 rounded-md text-sm
              ${
                $page.url.pathname === child.href
                  ? "bg-emerald-600/10 text-emerald-600 "
                  : "text-gray-600 hover:bg-gray-100 hover:text-emerald-600"
              }`}
          >
            <Icon icon={child.icon} class="text-base" />
            {#if sidebarOpen}
              <span>{child.label}</span>
            {/if}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</div>
