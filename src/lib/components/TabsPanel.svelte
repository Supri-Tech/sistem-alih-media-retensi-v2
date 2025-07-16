<script>
  import { createTabs, melt } from "@melt-ui/svelte";

  export let tabs = [];
  export let defaultTab = tabs[0]?.id ?? "default";

  const {
    elements: { root, list, trigger, content },
    states: { value },
  } = createTabs({ defaultValue: defaultTab });
</script>

<div use:melt={$root} class="mt-6 flex flex-col overflow-hidden bg-white">
  <div
    use:melt={$list}
    class="flex flex-wrap gap-2 px-4 pt-4 border-b border-gray-200 bg-gray-50"
  >
    {#each tabs as tab}
      <button
        use:melt={$trigger(tab.id)}
        class="px-4 py-2 text-sm font-medium rounded-t-md transition
          data-[state=active]:bg-white data-[state=active]:text-emerald-700
          data-[state=active]:border border-gray-300 border-b-transparent
          text-gray-500 hover:text-emerald-600"
      >
        {tab.title}
      </button>
    {/each}
  </div>

  <div class="p-6">
    {#if tabs.find((tab) => tab.id === "general")}
      <div use:melt={$content("general")}>
        <slot name="general" />
      </div>
    {/if}
    {#if tabs.find((tab) => tab.id === "profile")}
      <div use:melt={$content("profile")}>
        <slot name="profile" />
      </div>
    {/if}
    {#if tabs.find((tab) => tab.id === "time")}
      <div use:melt={$content("time")}>
        <slot name="time" />
      </div>
    {/if}
    {#if tabs.find((tab) => tab.id === "language")}
      <div use:melt={$content("language")}>
        <slot name="language" />
      </div>
    {/if}
    {#if tabs.find((tab) => tab.id === "others")}
      <div use:melt={$content("others")}>
        <slot name="others" />
      </div>
    {/if}
  </div>
</div>
