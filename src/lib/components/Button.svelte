<script>
  export let variant = "default";
  export let type = "button";
  export let full = false;
  export let rounded = "md";
  export let size = "md";
  export let iconOnly = false;
  export let menuItem = false;
  export let customClass = "";

  const variants = {
    emerald: "bg-emerald-600 hover:bg-emerald-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    dark: "bg-[#1a1a1a] border border-[#333] text-gray-200 hover:bg-[#222]",
    outline: "bg-transparent border border-gray-300",
    secondary: "bg-white text-gray-800 hover:bg-gray-100",
    default: "bg-gray-200 text-gray-700 hover:bg-gray-400 hover:text-gray-200 ",
  };

  const sizes = {
    sm: "px-2 py-1.5 text-sm",
    md: "px-4 py-1.5 text-base",
  };

  $: baseClasses = `
    inline-flex items-center justify-center
    ${full ? "w-full" : ""}
    ${iconOnly ? "p-2" : sizes[size]}
    ${menuItem ? "items-start justify-start text-left text-sm" : ""}
    rounded-${rounded}
    ${variants[variant]}
    transition
  `.trim();
</script>

<button {type} class={`${baseClasses} ${customClass}`} on:click>
  <slot />
</button>
