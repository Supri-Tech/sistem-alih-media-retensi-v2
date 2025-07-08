<script>
  import Input from "$components/Input.svelte";
  import Button from "$components/Button.svelte";

  let nomorRM = "";
  let namaPasien = "";
  let nik = "";
  let alamat = "";

  let dokumenFiles = [null];

  function handleFileChange(event, index) {
    dokumenFiles[index] = event.target.files[0];
  }

  function tambahDokumen() {
    dokumenFiles = [...dokumenFiles, null];
  }

  function submitForm() {
    console.log({
      nomorRM,
      namaPasien,
      nik,
      alamat,
      dokumenFiles,
    });
    alert("Form dikirim!");
  }
</script>

<div class="space-y-6">
  <div class="flex flex-wrap gap-4">
    <div class="flex-1 min-w-[220px]">
      <Input
        id="nomorRM"
        type="number"
        bind:value={nomorRM}
        label="Nomor RM"
        placeholder="Contoh: 20230001"
        className="bg-white text-gray-800 placeholder-gray-500 border border-gray-300 rounded-md ring-0"
      />
    </div>
    <div class="flex-1 min-w-[220px]">
      <Input
        id="namaPasien"
        type="text"
        bind:value={namaPasien}
        label="Nama Pasien"
        placeholder="Contoh: Siti Aminah"
        className="bg-white text-gray-800 placeholder-gray-500 border border-gray-300 rounded-md ring-0"
      />
    </div>
  </div>

  <div class="flex flex-wrap gap-4">
    <div class="flex-1 min-w-[220px]">
      <Input
        id="nik"
        type="number"
        bind:value={nik}
        label="NIK"
        placeholder="Contoh: 3274xxxxxxxx"
        className="bg-white text-gray-800 placeholder-gray-500 border border-gray-300 rounded-md ring-0"
      />
    </div>
    <div class="flex-1 min-w-[220px]">
      <Input
        id="alamat"
        type="text"
        bind:value={alamat}
        label="Alamat"
        placeholder="Contoh: Jl. Merdeka No. 123"
        className="bg-white text-gray-800 placeholder-gray-500 border border-gray-300 rounded-md ring-0"
      />
    </div>
  </div>

  <div class="space-y-4">
    <p class="text-sm text-gray-700 font-bold">Upload Dokumen</p>

    {#each dokumenFiles as file, i}
      <div class="flex items-center gap-3">
        <input
          type="file"
          on:change={(e) => handleFileChange(e, i)}
          class="text-sm bg-white border border-gray-300 p-1 rounded file:bg-emerald-600 file:text-white file:border-0 file:px-4 file:py-1"
        />
        {#if file}
          <span class="text-xs text-gray-500 truncate max-w-[200px]"
            >{file.name}</span
          >
        {/if}
      </div>
    {/each}

    <Button variant="emerald" on:click={tambahDokumen}>+ Tambah Dokumen</Button>
  </div>

  <div class="pt-6">
    <Button variant="emerald" on:click={submitForm}>Simpan Data</Button>
  </div>
</div>
