<script>
  import Accordion from "$components/Accordion.svelte";
  import { sidebarRoute } from "$route/sidebarRoute";
  import { sidebarOpen } from "$stores/sidebar";
  import { page } from "$app/stores";
  import Icon from "@iconify/svelte";
  import { get } from "svelte/store";

  const toggleSidebar = () => sidebarOpen.update((v) => !v);

  let openId = null;
  const toggle = (id) => {
    openId = openId === id ? null : id;
  };
</script>

<div class="flex h-screen bg-gray-50">
  <aside
    class="transition-all duration-300 overflow-hidden flex flex-col shadow-md bg-gray-50 text-gray-800"
    class:w-64={$sidebarOpen}
    class:w-16={!$sidebarOpen}
  >
    <div
      class="flex items-center justify-between px-4 py-4 border-b border-gray-200"
    >
      {#if $sidebarOpen}
        <div class="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Logo"
            class="h-10 w-10 object-cover rounded-md"
          />
          <span class="text-sm font-semibold text-gray-700 leading-tight">
            Sistem Alih Media & Retensi<br />
            <span class="text-xs font-normal text-gray-500"
              >RS Widodo Ngawi</span
            >
          </span>
        </div>
      {/if}
      <button on:click={toggleSidebar} class="text-gray-500 text-xl ml-auto"
        >☰</button
      >
    </div>

    <nav class="mt-4 flex-1 space-y-1 px-2 text-sm">
      {#each sidebarRoute.filter((item) => !item.bottom) as item}
        {#if item.children}
          <Accordion
            {item}
            {toggle}
            isOpen={openId === item.id}
            {sidebarOpen}
          />
        {:else}
          <a
            href={item.href}
            class={`group flex items-center ${$sidebarOpen ? "gap-3" : "justify-center"} 
        px-3.5 py-2.5 rounded-md transition-colors duration-200 text-[14px]
        ${
          item.href === $page.url.pathname
            ? "bg-emerald-600/10 text-emerald-600 font-semibold"
            : "text-gray-600 hover:text-emerald-600 hover:bg-gray-100"
        }`}
          >
            <Icon
              icon={item.icon}
              class={`text-[22px] transition-colors duration-200
          ${
            item.href === $page.url.pathname
              ? "text-emerald-600"
              : "group-hover:text-emerald-600 text-gray-500"
          }`}
            />
            {#if $sidebarOpen}
              <span class="font-medium">{item.label}</span>
            {/if}
          </a>
        {/if}
      {/each}
    </nav>

    <div class="mt-auto px-2 space-y-1 border-t-2 border-gray-200 py-4 text-sm">
      {#each sidebarRoute.filter((item) => item.bottom) as item}
        <a
          href={item.href}
          class={`group flex items-center gap-3 px-3.5 py-2.5 rounded-md transition-colors duration-200 text-[14px]
        ${
          item.href === $page.url.pathname
            ? item.label === "Keluar"
              ? "bg-red-100 text-red-600 font-semibold"
              : "bg-emerald-600/10 text-emerald-600 font-semibold"
            : item.label === "Keluar"
              ? "text-red-500 hover:text-red-600 hover:bg-red-50"
              : "text-gray-600 hover:text-emerald-600 hover:bg-gray-100"
        }`}
        >
          <Icon
            icon={item.icon}
            class={`text-xl transition-colors duration-200
          ${
            item.href === $page.url.pathname
              ? item.label === "Keluar"
                ? "text-red-600"
                : "text-emerald-600"
              : item.label === "Keluar"
                ? "text-red-500 group-hover:text-red-600"
                : "text-gray-500 group-hover:text-emerald-600"
          }`}
          />
          {#if $sidebarOpen}
            <span class="font-medium">{item.label}</span>
          {/if}
        </a>
      {/each}
    </div>
  </aside>

  <slot />
</div>
