<script>
  import { createLabel, melt } from "@melt-ui/svelte";

  export let id = "";
  export let type = "text";
  export let placeholder = "";
  export let value = "";
  export let label = "";
  export let name = "";
  export let className = "";
  export let disabled = false;
  export let required = false;

  const {
    elements: { root },
  } = createLabel();
</script>

<div class="flex flex-col items-start justify-center w-full space-y-1">
  <label
    use:melt={$root}
    for={id}
    class="text-sm font-semibold text-gray-700"
    data-melt-part="root"
  >
    {label}
  </label>

  <input
    {id}
    {type}
    bind:value
    {placeholder}
    {disabled}
    {name}
    {required}
    class={`block w-full rounded-md border-gray-300 shadow-sm text-sm
      focus:border-emerald-500 focus:ring-emerald-500
      invalid:border-red-500 invalid:focus:border-red-500 invalid:focus:ring-red-500
      ${disabled ? "bg-gray-100 text-gray-600 cursor-not-allowed" : "bg-white text-gray-900"}
      ${className}`}
  />
</div>
