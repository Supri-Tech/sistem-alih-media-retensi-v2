<script>
  import { createEventDispatcher, onMount } from "svelte";
  import Icon from "@iconify/svelte";

  export let open = false;
  export let closeOnOutsideClick = true;

  const dispatch = createEventDispatcher();

  function closeModal() {
    open = false;
    dispatch("close");
  }

  function handleKeydown(e) {
    if (e.key === "Escape") closeModal();
  }

  function handleOutsideClick(event) {
    if (
      closeOnOutsideClick &&
      event.target.classList.contains("modal-overlay")
    ) {
      closeModal();
    }
  }

  onMount(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  });
</script>

{#if open}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 modal-overlay"
    on:click={handleOutsideClick}
  >
    <div
      class="bg-white rounded-2xl p-6 shadow-xl w-full max-w-lg relative space-y-4"
    >
      <button
        class="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition"
        on:click={closeModal}
        aria-label="Tutup"
      >
        <Icon icon="mdi:close" class="w-6 h-6" />
      </button>

      <div>
        <slot name="head" />
      </div>

      <div>
        <slot name="body" />
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-overlay {
    backdrop-filter: blur(2px);
  }
</style>
