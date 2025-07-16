<script>
  import Input from "$components/Input.svelte";
  import Button from "$components/Button.svelte";
  import Icon from "@iconify/svelte";

  let jenisKasus = "";
  let rawatInapAktif = "";
  let rawatInapTidakAktif = "";
  let rawatJalanAktif = "";
  let rawatJalanTidakAktif = "";
  let informasiTambahan = "";

  function submitKasusForm(event) {
    event.preventDefault();
    console.log({
      jenisKasus,
      rawatInapAktif,
      rawatInapTidakAktif,
      rawatJalanAktif,
      rawatJalanTidakAktif,
      informasiTambahan,
    });
    alert("Formulir Kasus dikirim!");
  }
</script>

<form on:submit|preventDefault={submitKasusForm}>
  <section class="bg-gray-50 p-8 rounded-md space-y-10">
    <div>
      <a
        href="/kategori"
        class="inline-flex items-center px-4 py-2 text-sm rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800"
      >
        <Icon icon="mdi:arrow-left" class="w-4 h-4 mr-2" />
        Kembali
      </a>

      <div class="mt-5">
        <h1 class="text-2xl font-bold text-gray-800">Formulir Kasus</h1>
        <p class="text-sm text-gray-500">
          Silakan lengkapi informasi kasus di bawah.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <div class="space-y-1">
        <p class="text-sm text-gray-500">01</p>
        <h3 class="text-xl uppercase font-semibold text-gray-800">Kasus</h3>
        <p class="text-sm text-gray-500">
          Jenis kasus yang ditangani (misalnya: Jantung, Jiwa, dll).
        </p>
      </div>

      <div class="w-full">
        <Input
          label="Jenis Kasus"
          placeholder="Jantung, Paru, dll"
          bind:value={jenisKasus}
          className="w-full rounded-md border border-gray-300"
        />
      </div>
    </div>

    <div
      class="border-t border-gray-200 pt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
    >
      <div class="space-y-1">
        <p class="text-sm text-gray-500">02</p>
        <h3 class="text-xl uppercase font-semibold text-gray-800">
          Rawat Inap
        </h3>
        <p class="text-sm text-gray-500">
          Masa berlaku kasus dalam rawat inap.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="number"
          label="Masa Aktif (tahun)"
          bind:value={rawatInapAktif}
          placeholder="3"
          className="w-full rounded-md border border-gray-300"
        />
        <Input
          type="number"
          label="Masa Tidak Aktif (tahun)"
          placeholder="2"
          bind:value={rawatInapTidakAktif}
          className="w-full rounded-md border border-gray-300"
        />
      </div>
    </div>

    <div
      class="border-t border-gray-200 pt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
    >
      <div class="space-y-1">
        <p class="text-sm text-gray-500">03</p>
        <h3 class="text-xl uppercase font-semibold text-gray-800">
          Rawat Jalan
        </h3>
        <p class="text-sm text-gray-500">
          Masa berlaku kasus dalam rawat jalan.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="number"
          label="Masa Aktif (tahun)"
          placeholder="2"
          bind:value={rawatJalanAktif}
          className="w-full rounded-md border border-gray-300"
        />
        <Input
          type="number"
          label="Masa Tidak Aktif (tahun)"
          placeholder="2"
          bind:value={rawatJalanTidakAktif}
          className="w-full rounded-md border border-gray-300"
        />
      </div>
    </div>

    <div
      class="border-t border-gray-200 pt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
    >
      <div class="space-y-1">
        <p class="text-sm text-gray-500">04</p>
        <h3 class="text-xl uppercase font-semibold text-gray-800">Lainnya</h3>
        <p class="text-sm text-gray-500">
          Catatan tambahan terkait kasus yang perlu diperhatikan.
        </p>
      </div>

      <div class="w-full">
        <label class="text-sm text-gray-700 font-bold block mb-2"
          >Informasi Tambahan</label
        >
        <textarea
          bind:value={informasiTambahan}
          rows="4"
          placeholder="Catatan atau deskripsi tambahan"
          class="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
        ></textarea>
      </div>
    </div>

    <div class="flex justify-end pt-4">
      <Button
        variant="emerald"
        type="submit"
        className="px-5 py-2 text-sm font-semibold rounded-md shadow"
      >
        Simpan Kasus
      </Button>
    </div>
  </section>
</form>
