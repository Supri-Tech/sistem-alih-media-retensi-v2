<script>
  import Table from "$components/Table.svelte";
  import { adminColumns as columns, adminData } from "$data/pengaturanData.js";
</script>

<div class="space-y-6">
  <div>
    <h3 class="text-lg font-semibold text-gray-800">Daftar Akun Admin</h3>
    <p class="text-sm text-gray-500">
      Berikut adalah akun pengguna yang memiliki akses administratif terhadap
      sistem.
    </p>
  </div>

  <div class="overflow-x-auto rounded-md border border-gray-200">
    <Table {columns} data={adminData} showAction={true} showStatus={true} />
  </div>
</div>
