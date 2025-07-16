<script>
  import Modal from "$lib/components/Modal.svelte";
  export let open = false;
  export let onClose = () => {};
  export let data = null;
</script>

<Modal {open} {onClose}>
  <svelte:fragment slot="head">
    <h2 class="text-2xl font-bold text-gray-900">{data?.nama_pasien}</h2>
    <p class="text-sm text-gray-500">{data?.alamat}</p>
  </svelte:fragment>

  <svelte:fragment slot="body">
    <div class="space-y-5">
      <section class="space-y-2">
        <h3 class="text-sm font-semibold text-gray-600 uppercase tracking-wide">
          Informasi Pasien
        </h3>
        <div class="grid grid-cols-2 gap-y-2 text-sm">
          <div class="text-gray-500">Nomor RM</div>
          <div class="font-medium text-gray-800">{data?.nomor_rm}</div>

          <div class="text-gray-500">Jenis Kelamin</div>
          <div class="font-medium text-gray-800">{data?.jenis_kelamin}</div>

          <div class="text-gray-500">Tanggal Lahir</div>
          <div class="font-medium text-gray-800">{data?.tanggal_lahir}</div>

          <div class="text-gray-500">NIK</div>
          <div class="font-medium text-gray-800">{data?.nik}</div>
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
            {data?.tanggal_kunjungan || "-"}
          </div>

          <div class="text-gray-500">Jenis Kunjungan</div>
          <div class="font-medium text-gray-800">{data?.jenis_kunjungan}</div>

          <div class="text-gray-500">Jenis Kasus</div>
          <div class="font-medium text-gray-800">{data?.jenis_kasus}</div>
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
            {data?.tanggal_laporan || "-"}
          </div>

          <div class="text-gray-500">Status Laporan</div>
          <div
            class={data?.status === "Aktif"
              ? "font-medium text-green-600"
              : "font-medium text-red-600"}
          >
            {data?.status || "-"}
          </div>
        </div>
      </section>
    </div>
  </svelte:fragment>
</Modal>
