<script>
  import { createLabel, melt } from "@melt-ui/svelte";

  export let id = "";
  export let type = "text";
  export let placeholder = "";
  export let value = "";
  export let label = "";
  export let className = "";
  export let disabled = false;

  const {
    elements: { root },
  } = createLabel();
</script>

<div class="flex flex-col items-start justify-center w-full space-y-1">
  <label
    use:melt={$root}
    for={id}
    class="text-sm text-gray-700 font-bold"
    data-melt-part="root"
  >
    <span>{label}</span>
  </label>

  <input
    {id}
    {type}
    bind:value
    {placeholder}
    {disabled}
    class={`h-10 w-full px-4 py-2 text-sm border border-gray-300 rounded-md
      ${disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white text-gray-800"}
      ${className}`}
  />
</div>
