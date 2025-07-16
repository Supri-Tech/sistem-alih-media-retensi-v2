<script>
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

  <slot />
</section>
