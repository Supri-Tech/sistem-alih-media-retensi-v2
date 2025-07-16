<script>
  export let items = [];
</script>

<nav
  class="flex items-center text-sm text-gray-600 mb-4"
  aria-label="Breadcrumb"
>
  <ol class="inline-flex items-center space-x-1">
    {#each items as { label, href, icon }, i}
      <li class="flex items-center">
        {#if href}
          <a {href} class="inline-flex items-center hover:text-gray-900">
            {#if icon}
              <Icon {icon} class="w-4 h-4 mr-1" />
            {/if}
            {label}
          </a>
        {:else}
          <span class="text-gray-400">{label}</span>
        {/if}
        {#if i < items.length - 1}
          <span class="mx-1">/</span>
        {/if}
      </li>
    {/each}
  </ol>
</nav>
