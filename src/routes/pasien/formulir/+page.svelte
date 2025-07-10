<script>
  import Input from "$components/Input.svelte";
  import Button from "$components/Button.svelte";
  import SearchableSelect from "$components/SearchableSelect.svelte";
  import Icon from "@iconify/svelte";

  import { pasienData } from "$lib/data/pasienData.js";

  let nomorRM = "";
  let jenisKunjungan = "";
  let tanggalKunjungan = "";
  let jenisKasus = "";

  let namaPasien = "";
  let jenisKelamin = "";
  let tanggalLahir = "";
  let nik = "";
  let alamat = "";

  const kunjunganOptions = ["Rawat Jalan", "Rawat Inap"];
  const kasusOptions = [
    "Kasus Lainnya",
    "Mata",
    "Jiwa",
    "Orthopaedi",
    "Ketergantungan Obat",
    "Jantung",
    "Paru",
    "Anak",
  ];

  const genderOptions = ["Laki-Laki", "Perempuan"];

  function submitForm(event) {
    event.preventDefault();
    console.log({
      nomorRM,
      jenisKunjungan,
      tanggalKunjungan,
      jenisKasus,
      namaPasien,
      jenisKelamin,
      tanggalLahir,
      nik,
      alamat,
    });
    alert("Formulir pasien berhasil disimpan.");
  }
</script>

<form on:submit|preventDefault={submitForm}>
  <section class="bg-gray-50 p-8 rounded-md space-y-10">
    <div>
      <a
        href="/pasien"
        class="inline-flex items-center px-4 py-2 text-sm rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800"
      >
        <Icon icon="mdi:arrow-left" class="w-4 h-4 mr-2" />
        Kembali
      </a>

      <div class="mt-5">
        <h1 class="text-2xl font-bold text-gray-800">Formulir Pasien</h1>
        <p class="text-sm text-gray-500">
          Silakan lengkapi informasi berikut sesuai kebutuhan.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <div class="space-y-1">
        <p class="text-sm text-gray-500">01</p>
        <h3 class="text-xl uppercase font-semibold text-gray-800">
          Retensi Media
        </h3>
        <p class="text-sm text-gray-500">
          Informasi kunjungan dan kasus pasien.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          id="nomorRM"
          bind:value={nomorRM}
          label="Nomor RM"
          placeholder="RM-20230001"
        />

        <SearchableSelect
          bind:selected={jenisKunjungan}
          options={kunjunganOptions}
          placeholder="Pilih Jenis Kunjungan"
          label="Jenis Kunjungan"
        />

        <Input
          id="tanggalKunjungan"
          type="date"
          bind:value={tanggalKunjungan}
          label="Tanggal Kunjungan"
        />

        <SearchableSelect
          bind:selected={jenisKasus}
          options={kasusOptions}
          placeholder="Pilih Jenis Kasus"
          label="Jenis Kasus"
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
          Data pribadi pasien untuk kebutuhan identifikasi.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          id="namaPasien"
          bind:value={namaPasien}
          label="Nama Pasien"
          placeholder="Siti Aminah"
        />

        <SearchableSelect
          bind:selected={jenisKelamin}
          options={genderOptions}
          placeholder="Pilih Jenis Kelamin"
          label="Jenis Kelamin"
        />

        <Input
          id="tanggalLahir"
          type="date"
          bind:value={tanggalLahir}
          label="Tanggal Lahir"
        />

        <Input
          id="nik"
          bind:value={nik}
          label="NIK"
          placeholder="3274xxxxxxxxxxxx"
        />

        <Input
          id="alamat"
          bind:value={alamat}
          label="Alamat"
          placeholder="Jl. Kenanga No. 12"
        />
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
