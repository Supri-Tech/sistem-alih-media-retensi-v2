<script>
  import { enhance } from "$app/forms";
  import { env } from "$env/dynamic/public";
  import Button from "$components/Button.svelte";
  import Input from "$components/Input.svelte";

  export let data;

  let appName = data?.appName || env.PUBLIC_APP_NAME;
  let logoFile = null;
  let previewUrl = env.PUBLIC_LOGO_PATH;
  let uploadError = "";
  let isSubmitting = false;

  function handleLogoUpload(event) {
    uploadError = "";
    const file = event.target.files[0];

    if (!file) return;

    const validTypes = ["image/jpeg", "image/png", "image/svg+xml"];
    if (!validTypes.includes(file.type)) {
      uploadError = "Format file harus JPG, PNG, atau SVG";
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      uploadError = "Ukuran file maksimal 2MB";
      return;
    }

    logoFile = file;
    previewUrl = URL.createObjectURL(file);
  }

  function removeLogo() {
    if (logoFile) URL.revokeObjectURL(previewUrl);
    logoFile = null;
    previewUrl = env.PUBLIC_LOGO_PATH;
  }
</script>

<form
  method="POST"
  action="/api/save-settings"
  use:enhance
  enctype="multipart/form-data"
  class="space-y-10"
  on:submit={() => (isSubmitting = true)}
  on:result={() => (isSubmitting = false)}
>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
    <div class="space-y-1">
      <h3 class="text-sm font-semibold text-gray-800">Logo Aplikasi</h3>
      <p class="text-sm text-gray-500">
        Akan disimpan sebagai: <code class="text-xs"
          >static{env.PUBLIC_LOGO_PATH}</code
        >
      </p>
      <img
        src={previewUrl}
        alt="Logo Aplikasi"
        class="mt-4 h-20 w-auto rounded"
      />
    </div>

    <div class="space-y-4">
      <label
        class="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-white hover:bg-gray-50 transition"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            class="w-8 h-8 mb-3 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16V4m0 0L3 8m4-4l4 4M5 20h14a2 2 0 002-2V10a2 2 0 00-2-2h-4l-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <p class="mb-1 text-sm text-gray-500">Klik untuk upload logo</p>
          <p class="text-xs text-gray-400">Format: JPG/PNG/SVG (≤2MB)</p>
        </div>
        <input
          name="logo"
          type="file"
          accept="image/jpeg, image/png, image/svg+xml"
          class="hidden"
          on:change={handleLogoUpload}
        />
      </label>

      {#if uploadError}
        <p class="text-sm text-red-500">{uploadError}</p>
      {/if}

      {#if logoFile}
        <div class="flex items-center justify-between p-3 bg-gray-50 rounded">
          <div class="flex items-center gap-3">
            <img src={previewUrl} alt="Preview" class="h-8 w-8 rounded" />
            <span class="text-sm">Akan disimpan sebagai: logo.jpg</span>
          </div>
          <button
            type="button"
            on:click={removeLogo}
            class="text-red-500 hover:text-red-700 text-sm"
          >
            Hapus
          </button>
        </div>
      {/if}
    </div>
  </div>

  
  <div
    class="border-t border-gray-200 pt-6 grid grid-cols-1 md:grid-cols-2 gap-10"
  >
    <div class="space-y-1">
      <h3 class="text-sm font-semibold text-gray-800">Nama Aplikasi</h3>
      <p class="text-sm text-gray-500">
        Nilai default: {env.PUBLIC_APP_NAME}
      </p>
    </div>
    <div>
      <Input
        name="appName"
        bind:value={appName}
        placeholder="Nama aplikasi"
        required
      />
    </div>
  </div>

  
  <div class="flex justify-end border-t border-gray-200 pt-6">
    <Button type="submit" disabled={isSubmitting}>
      {isSubmitting ? "Menyimpan..." : "Simpan Perubahan"}
    </Button>
  </div>
</form>
