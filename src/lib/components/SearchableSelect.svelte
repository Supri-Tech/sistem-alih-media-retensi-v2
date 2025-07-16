<script>
  export let options = [];
  export let selected = "";
  export let placeholder = "Pilih opsi";
  export let disabled = false;
  export let className = "";
  export let inputClass = "";
  export let label = "";

  let keyword = selected;
  let showDropdown = false;

  $: if (!showDropdown && selected !== keyword) {
    keyword = selected;
  }

  $: filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(keyword.toLowerCase())
  );

  function selectOption(option) {
    selected = option;
    keyword = option;
    showDropdown = false;
  }

  function handleFocus() {
    if (!disabled) showDropdown = true;
  }

  function handleBlur() {
    setTimeout(() => {
      showDropdown = false;
    }, 100);
  }
</script>

<div class={`space-y-1 ${className}`}>
  {#if label}
    <label class="block text-sm font-medium text-gray-700">{label}</label>
  {/if}

  <div class="relative w-full">
    <input
      type="text"
      class={`w-full px-4 py-2 pr-10 text-sm rounded-md border border-gray-300 bg-white text-gray-800
        focus:outline-none focus:ring-emerald-500 focus:border-emerald-500
        disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed ${inputClass}`}
      bind:value={keyword}
      {placeholder}
      {disabled}
      on:focus={handleFocus}
      on:blur={handleBlur}
    />

    {#if showDropdown && filteredOptions.length > 0}
      <ul
        class="absolute z-50 w-full bg-white mt-1 border border-gray-300 rounded-md shadow-lg max-h-52 overflow-auto text-sm"
      >
        {#each filteredOptions.slice(0, 5) as option}
          <li
            class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            on:click={() => selectOption(option)}
          >
            {option}
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>
