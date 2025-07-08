<script>
  export let options = [];
  export let selected = "";
  export let placeholder = "Pilih opsi";
  export let disabled = false;
  export let className = "";
</script>

<div class="relative w-full">
  <select
    bind:value={selected}
    {disabled}
    class={`w-full px-4 py-2 rounded-md text-sm bg-white text-gray-800 border border-gray-300 pr-10 appearance-none
      focus:outline-none focus:ring-0 focus:ring-emerald-500 focus:border-emerald-500
      disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed
      ${className}`}
  >
    <option disabled selected={!selected} value="">
      {placeholder}
    </option>
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
</div>
