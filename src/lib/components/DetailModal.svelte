<script>
  import Modal from "$lib/components/Modal.svelte"; // Import the Modal component
  export let open = false;
  export let onClose = () => {};

  let rowData = {
    nomorRM: "RM-20230001",
    namaPasien: "Siti Aminah",
    jenisKelamin: "Perempuan",
    tanggalLahir: "1 Januari 1990",
    nik: "3274000000000001",
    alamat: "Jl. Mawar No. 1",
    tanggalKunjungan: "1 Juli 2025",
    jenisKunjungan: "Rawat Jalan",
    jenisKasus: "Mata",
    status: "Aktif",
  };
</script>

<Modal {open} {onClose}>
  <svelte:fragment slot="head">
    <h2 class="text-2xl font-bold text-gray-900">{rowData.namaPasien}</h2>
    <p class="text-sm text-gray-500">{rowData.alamat}</p>
  </svelte:fragment>

  <svelte:fragment slot="body">
    <div class="space-y-5">
      <section class="space-y-2">
        <h3 class="text-sm font-semibold text-gray-600 uppercase tracking-wide">
          Informasi Pasien
        </h3>
        <div class="grid grid-cols-2 gap-y-2 text-sm">
          <div class="text-gray-500">Nomor RM</div>
          <div class="font-medium text-gray-800">{rowData.nomorRM}</div>

          <div class="text-gray-500">Jenis Kelamin</div>
          <div class="font-medium text-gray-800">{rowData.jenisKelamin}</div>

          <div class="text-gray-500">Tanggal Lahir</div>
          <div class="font-medium text-gray-800">{rowData.tanggalLahir}</div>

          <div class="text-gray-500">NIK</div>
          <div class="font-medium text-gray-800">{rowData.nik}</div>
        </div>
      </section>

      <hr class="border-t border-gray-200" />

      <section class="space-y-2">
        <h3 class="text-sm font-semibold text-gray-600 uppercase tracking-wide">
          Rekam Medis
        </h3>
        <div class="grid grid-cols-2 gap-y-2 text-sm">
          <div class="text-gray-500">Tanggal Kunjungan</div>
          <div class="font-medium text-gray-800">
            {rowData.tanggalKunjungan}
          </div>

          <div class="text-gray-500">Jenis Kunjungan</div>
          <div class="font-medium text-gray-800">{rowData.jenisKunjungan}</div>

          <div class="text-gray-500">Jenis Kasus</div>
          <div class="font-medium text-gray-800">{rowData.jenisKasus}</div>
        </div>
      </section>

      <hr class="border-t border-gray-200" />

      <section class="space-y-2">
        <h3 class="text-sm font-semibold text-gray-600 uppercase tracking-wide">
          Alih Media
        </h3>
        <div class="grid grid-cols-2 gap-y-2 text-sm">
          <div class="text-gray-500">Tanggal Laporan</div>
          <div class="font-medium text-gray-800">
            {rowData.tanggalKunjungan}
          </div>

          <div class="text-gray-500">Status Laporan</div>
          <div class="font-medium text-green-600">{rowData.status}</div>
        </div>
      </section>
    </div>
  </svelte:fragment>

  <svelte:fragment slot="footer">
    <button
      class="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-md"
      on:click={onClose}
    >
      Tutup
    </button>
  </svelte:fragment>
</Modal>
