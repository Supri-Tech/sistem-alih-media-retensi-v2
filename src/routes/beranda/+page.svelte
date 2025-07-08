<script>
  import Sidebar from "$components/Sidebar.svelte";
  import Select from "$components/Select.svelte";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import {
    renderAlihMediaBarChart,
    renderRetensiBarChart,
    renderPemusnahanBarChart,
  } from "$lib/utils/BarChart";
  import { renderLaporanLineChart } from "$lib/utils/LineChart";

  let canvasAlihMediaBar, canvasLaporanLine;
  let canvasRetensiBar, canvasPemusnahanBar;

  let chartAlihMediaBar, chartLaporanLine;
  let chartRetensiBar, chartPemusnahanBar;

  onMount(() => {
    chartAlihMediaBar && chartAlihMediaBar.destroy();
    chartLaporanLine && chartLaporanLine.destroy();
    chartRetensiBar && chartRetensiBar.destroy();
    chartPemusnahanBar && chartPemusnahanBar.destroy();

    chartAlihMediaBar = renderAlihMediaBarChart(canvasAlihMediaBar);
    chartLaporanLine = renderLaporanLineChart(canvasLaporanLine);
    chartRetensiBar = renderRetensiBarChart(canvasRetensiBar);
    chartPemusnahanBar = renderPemusnahanBarChart(canvasPemusnahanBar);
  });
</script>

<section
  class="bg-gray-50 text-gray-800 rounded-2xl p-6 shadow-md border border-gray-200 mb-8"
>
  <div
    class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8"
  >
    <div class="flex-1 space-y-3">
      <h2 class="text-3xl font-medium text-emerald-600 tracking-tight">
        Dashboard
      </h2>
      <p class="text-sm text-gray-500">
        Pantau aktivitas, kelola data, dan tinjau proses manajemen arsip secara
        efisien melalui tampilan ringkas di bawah ini.
      </p>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-6">
    <div
      class="relative min-h-52 bg-emerald-700 text-white hover:shadow-md rounded-2xl p-5 overflow-hidden transition"
    >
      <div class="absolute inset-0">
        <div
          class="w-full h-full backdrop-blur-3xl flex items-center justify-center"
        >
          <Icon
            icon="mdi:account"
            class="text-emerald-200 opacity-10 text-[500px] pointer-events-none"
          />
        </div>
      </div>

      <div
        class="absolute top-4 left-4 bg-emerald-100 text-emerald-700 text-xs font-light px-4 py-1 rounded-full z-10"
      >
        Administrator
      </div>

      <a
        href="/kelola-akses"
        class="absolute top-4 right-4 text-white hover:text-emerald-300 transition z-10"
        title="Edit Profil"
      >
        <Icon icon="mdi:open-in-new" class="text-xl" />
      </a>

      <div class="absolute bottom-4 left-5 text-sm z-10">
        <p class="text-2xl font-medium text-white">Naufal Zaul Karim</p>
        <p class="text-emerald-200 font-light mt-1">naufalzaulkarim</p>
      </div>
    </div>

    <div
      class="min-h-52 bg-white border border-gray-200 hover:shadow-md rounded-2xl p-5 transition flex flex-col justify-between"
    >
      <h3 class="text-emerald-700 font-medium text-lg mb-2">
        Total Dokumentasi
      </h3>
      <p class="text-5xl font-bold text-gray-700">1.284</p>
      <p class="text-sm text-gray-500">
        Jumlah total dokumen yang telah terdokumentasi.
      </p>
    </div>

    <div
      class="min-h-52 bg-white border border-gray-200 hover:shadow-md rounded-2xl p-5 transition flex flex-col justify-between"
    >
      <h3 class="text-emerald-700 font-medium text-lg mb-2">Dokumen Baru</h3>
      <p class="text-5xl font-bold text-emerald-600">137</p>
      <p class="text-sm text-gray-500">
        Dokumen baru yang masuk dan terdigitalisasi bulan ini.
      </p>
    </div>

    <div
      class="min-h-52 bg-white border border-gray-200 hover:shadow-md rounded-2xl p-5 transition flex flex-col justify-between"
    >
      <h3 class="text-emerald-700 font-medium text-lg mb-2">
        Menunggu Tindak Lanjut
      </h3>
      <p class="text-5xl font-bold text-yellow-500">42</p>
      <p class="text-sm text-gray-500">
        Dokumen yang masih menunggu proses verifikasi atau alih media.
      </p>
    </div>

    <div
      class="min-h-52 bg-white col-span-1 md:col-span-2 lg:col-span-2 border border-gray-200 hover:shadow-md rounded-2xl p-5 transition relative"
    >
      <h3 class="text-emerald-700 font-medium text-lg mb-1">Alih Media</h3>
      <p class="text-sm text-gray-500 mb-4">
        Statistik proses digitalisasi arsip dari fisik ke bentuk digital,
        termasuk progres dan data yang masih menunggu.
      </p>
      <div class="w-full h-64 relative">
        <canvas
          bind:this={canvasAlihMediaBar}
          class="absolute inset-0 w-full h-full"
        />
      </div>
    </div>

    <div
      class="min-h-52 bg-white col-span-1 md:col-span-2 lg:col-span-2 border border-gray-200 hover:shadow-md rounded-2xl p-5 transition relative"
    >
      <h3 class="text-emerald-700 font-medium text-lg mb-1">Retensi Arsip</h3>
      <p class="text-sm text-gray-500 mb-4">
        Statistik pengelolaan arsip berdasarkan masa retensi tahunan.
      </p>
      <div class="w-full h-64 relative">
        <canvas
          bind:this={canvasRetensiBar}
          class="absolute inset-0 w-full h-full"
        />
      </div>
    </div>

    <div
      class="min-h-52 bg-white col-span-1 md:col-span-2 lg:col-span-2 border border-gray-200 hover:shadow-md rounded-2xl p-5 transition relative"
    >
      <h3 class="text-emerald-700 font-medium text-lg mb-1">
        Pemusnahan Arsip
      </h3>
      <p class="text-sm text-gray-500 mb-4">
        Jumlah arsip yang dimusnahkan per tahun berdasarkan status penyelesaian.
      </p>
      <div class="w-full h-64 relative">
        <canvas
          bind:this={canvasPemusnahanBar}
          class="absolute inset-0 w-full h-full"
        />
      </div>
    </div>

    <div
      class="min-h-52 bg-white col-span-1 md:col-span-2 lg:col-span-2 border border-gray-200 hover:shadow-md rounded-2xl p-5 transition relative"
    >
      <h3 class="text-emerald-700 font-medium text-lg mb-1">Laporan Arsip</h3>
      <p class="text-sm text-gray-500 mb-4">
        Jumlah total arsip yang diproses setiap bulan, termasuk alih media,
        retensi, dan pemusnahan.
      </p>
      <div class="w-full h-64 relative">
        <canvas
          bind:this={canvasLaporanLine}
          class="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  </div>
</section>
