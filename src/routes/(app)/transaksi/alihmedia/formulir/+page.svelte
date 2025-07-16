<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { get } from "svelte/store";

  import Input from "$components/Input.svelte";
  import Button from "$components/Button.svelte";
  import Breadcrumb from "$components/Breadcrumb.svelte";
  import SearchableSelect from "$components/SearchableSelect.svelte";
  import Icon from "@iconify/svelte";

  import { pasienData } from "$lib/data/pasienData.js";

  let nomorRM = "";
  let namaPasien = "";
  let nik = "";
  let alamat = "";
  let dokumenFiles = [];

  let idFromUrlParams = "";

  onMount(() => {
    const currentPage = get(page);
    idFromUrlParams = currentPage.url.searchParams.get("id");
    if (idFromUrlParams) {
      nomorRM = idFromUrlParams;
    }
  });

  $: if (nomorRM) {
    const pasien = pasienData.find((p) => p.nomor_rm === nomorRM);
    if (pasien) {
      namaPasien = pasien.nama_pasien;
      nik = pasien.nik;
      alamat = pasien.alamat;
    }
  }

  function handleFileChange(event) {
    const newFiles = Array.from(event.target.files).map((file) => ({
      id: crypto.randomUUID(),
      file,
    }));
    dokumenFiles = [...dokumenFiles, ...newFiles];
  }

  function tambahDokumen() {
    document.getElementById("dokumen-upload").click();
  }

  function submitForm(event) {
    event.preventDefault();
    console.log({
      nomorRM,
      namaPasien,
      nik,
      alamat,
      dokumenFiles,
    });
    alert("Form dikirim!");
  }

  function hapusFile(id) {
    dokumenFiles = dokumenFiles.filter((item) => item.id !== id);
  }

  function previewFile(file) {
    const blobUrl = URL.createObjectURL(file);
    window.open(blobUrl, "_blank");
  }
</script>

<form on:submit|preventDefault={submitForm}>
  <section class="p-6 rounded-xl space-y-10">
    <div>
      <a
        href="/transaksi/alihmedia"
        class="inline-flex items-center px-4 py-2 text-sm rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800"
      >
        <Icon icon="mdi:arrow-left" class="w-4 h-4 mr-2" />
        Kembali
      </a>

      <div class="mt-5">
        <h1 class="text-2xl font-bold text-gray-800">Formulir Alih Media</h1>
        <p class="text-sm text-gray-500">
          Silakan lengkapi informasi berikut sesuai kebutuhan.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <div class="space-y-1">
        <p class="text-sm text-gray-500">01</p>
        <h3 class="text-xl uppercase font-semibold text-gray-800">
          Rekam Medis
        </h3>
        <p class="text-sm text-gray-500">
          Nomor rekam medis pasien untuk identifikasi data.
        </p>
      </div>

      <div class="w-full">
        <SearchableSelect
          bind:selected={nomorRM}
          options={pasienData.map((p) => p.nomor_rm)}
          placeholder="Pilih Nomor RM"
          label="Nomor Rekam Medis"
          className="w-full"
          disabled={!!idFromUrlParams}
        />
      </div>
    </div>

    <div
      class="border-t border-gray-200 pt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
    >
      <div class="space-y-1">
        <p class="text-sm text-gray-500">02</p>
        <h3 class="text-xl uppercase font-semibold text-gray-800">
          Informasi Pasien
        </h3>
        <p class="text-sm text-gray-500">
          Informasi pribadi pasien untuk keperluan administrasi.
        </p>
        <p class="text-xs text-red-500 italic mt-3">
          * Informasi pasien otomatis terisi. <br /> Edit data hanya dapat
          dilakukan di menu <b>Manajemen Pasien</b>.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          id="namaPasien"
          type="text"
          bind:value={namaPasien}
          label="Nama Pasien"
          placeholder="Nama pasien"
          disabled
          className="w-full rounded-md border border-gray-300"
        />
        <Input
          id="nik"
          type="number"
          bind:value={nik}
          label="NIK"
          placeholder="NIK pasien"
          disabled
          className="w-full rounded-md border border-gray-300"
        />
        <Input
          id="alamat"
          type="text"
          bind:value={alamat}
          label="Alamat"
          placeholder="Alamat pasien"
          disabled
          className="w-full rounded-md border border-gray-300"
        />
      </div>
    </div>

    <div
      class="border-t border-gray-200 pt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
    >
      <div class="space-y-4">
        <div class="space-y-1">
          <p class="text-sm text-gray-500">03</p>
          <h3 class="text-xl uppercase font-semibold text-gray-800">
            Upload Dokumen
          </h3>
          <p class="text-sm text-gray-500">Unggah dokumen PDF atau Excel.</p>
        </div>
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
            <p class="mb-1 text-sm text-gray-500">
              <span class="font-semibold">Drag and Drop</span> file here or
              <span class="text-emerald-600 underline">Choose file</span>
            </p>
            <p class="text-xs text-gray-400">
              Formats: PDF, XLS, XLSX | Max size: 25MB
            </p>
          </div>
          <input
            id="dokumen-upload"
            type="file"
            multiple
            accept=".pdf,application/pdf,.xls,.xlsx"
            class="hidden"
            on:change={handleFileChange}
          />
        </label>

        {#if dokumenFiles.length > 0}
          <ul class="space-y-1 text-sm text-gray-700">
            {#each dokumenFiles as item, index (item.id)}
              <div
                role="button"
                tabindex="0"
                on:click={() => previewFile(item.file)}
                class="border border-gray-200 bg-white rounded-md p-4 shadow flex items-center gap-4 hover:bg-gray-50 transition"
              >
                <div class="flex-1">
                  <div class="flex items-center gap-2">
                    <img
                      src="https://img.icons8.com/color/48/000000/pdf.png"
                      alt="PDF Icon"
                      class="h-8 w-8"
                    />
                    <p
                      class="text-sm font-semibold text-gray-800 truncate"
                      title="{item.id}_{item.file.name}"
                    >
                      {item.id}_{item.file.name.slice(0, 5)}...
                    </p>
                  </div>
                  <p class="text-sm text-gray-500 mt-1">
                    Klik untuk melihat file di tab baru.
                  </p>
                </div>

                <div
                  on:click|stopPropagation={() => hapusFile(item.id)}
                  class="shrink-0"
                >
                  <Button variant="danger" type="button" iconOnly>Hapus</Button>
                </div>
              </div>
            {/each}
          </ul>
        {/if}
      </div>
    </div>

    <div class="flex justify-end pt-4">
      <Button
        variant="emerald"
        type="submit"
        className="px-5 py-2 text-sm font-semibold rounded-md shadow"
      >
        Simpan Data
      </Button>
    </div>
  </section>
</form>
