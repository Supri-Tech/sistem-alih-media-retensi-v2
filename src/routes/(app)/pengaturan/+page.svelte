<script>
  import Table from "$components/Table.svelte";
  import Input from "$components/Input.svelte";
  import TabsPanel from "$components/TabsPanel.svelte";
  import { tabItems } from "$data/pengaturanData.js";

  import GeneralPanel from "./panels/GeneralPanel.svelte";
  import ProfilePanel from "./panels/ProfilePanel.svelte";
  // import TimePanel from "./panels/TimePanel.svelte";
  // import LanguagePanel from "./panels/LanguagePanel.svelte";
  import OthersPanel from "./panels/OthersPanel.svelte";
</script>

<section class="text-gray-800 mb-8">
  <div class="flex flex-col lg:flex-row justify-between items-start gap-8">
    <div class="flex-1 space-y-6">
      <div class="">
        <h2 class="text-3xl font-semibold tracking-tight text-gray-800">
          Pengaturan Sistem
        </h2>
        <p class="text-sm text-gray-500 mt-1">
          Atur preferensi sistem, informasi instansi, keamanan, notifikasi, dan
          komponen penting lainnya.
        </p>
      </div>
    </div>
  </div>

  <TabsPanel tabs={tabItems} defaultTab="general">
    <GeneralPanel slot="general" />
    <ProfilePanel slot="profile" />

    <div slot="time">
      <form class="space-y-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div class="space-y-1">
            <h3 class="text-sm font-semibold text-gray-800">Zona Waktu</h3>
            <p class="text-sm text-gray-500">
              Tentukan zona waktu yang akan digunakan sistem.
            </p>
          </div>
          <div class="w-full">
            <label
              for="timezone"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Zona Waktu
            </label>
            <select
              id="timezone"
              class="w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-gray-700"
            >
              <option value="Asia/Jakarta">Asia/Jakarta (GMT+7)</option>
              <option value="Asia/Makassar">Asia/Makassar (GMT+8)</option>
              <option value="Asia/Jayapura">Asia/Jayapura (GMT+9)</option>
            </select>
          </div>
        </div>

        <div
          class="border-t border-gray-200 pt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        >
          <div class="space-y-1">
            <h3 class="text-sm font-semibold text-gray-800">Format Waktu</h3>
            <p class="text-sm text-gray-500">
              Pilih format waktu yang ditampilkan.
            </p>
          </div>
          <div class="w-full space-y-2">
            <label class="inline-flex items-center gap-2 text-sm text-gray-700">
              <input type="radio" name="time-format" value="24" checked />
              24 Jam (13:00)
            </label>
            <label class="inline-flex items-center gap-2 text-sm text-gray-700">
              <input type="radio" name="time-format" value="12" />
              12 Jam (1:00 PM)
            </label>
          </div>
        </div>

        <div class="flex justify-end pt-4">
          <button
            type="submit"
            class="inline-flex items-center px-5 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-md shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Simpan Perubahan
          </button>
        </div>
      </form>
    </div>

    <div slot="language">
      <form class="space-y-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div class="space-y-1">
            <h3 class="text-sm font-semibold text-gray-800">Bahasa Aplikasi</h3>
            <p class="text-sm text-gray-500">
              Pilih bahasa yang digunakan dalam aplikasi.
            </p>
          </div>
          <div class="w-full">
            <label
              for="language"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Bahasa
            </label>
            <select
              id="language"
              class="w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-gray-700"
            >
              <option value="id">Indonesia</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>

        <div
          class="border-t border-gray-200 pt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        >
          <div class="space-y-1">
            <h3 class="text-sm font-semibold text-gray-800">Format Tanggal</h3>
            <p class="text-sm text-gray-500">
              Tentukan format penulisan tanggal yang digunakan.
            </p>
          </div>
          <div class="w-full space-y-2">
            <label class="inline-flex items-center gap-2 text-sm text-gray-700">
              <input
                type="radio"
                name="date-format"
                value="dd-mm-yyyy"
                checked
              />
              07-07-2025 (dd-mm-yyyy)
            </label>
            <label class="inline-flex items-center gap-2 text-sm text-gray-700">
              <input type="radio" name="date-format" value="yyyy-mm-dd" />
              2025-07-07 (yyyy-mm-dd)
            </label>
          </div>
        </div>

        <div class="flex justify-end pt-4">
          <button
            type="submit"
            class="inline-flex items-center px-5 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-md shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Simpan Perubahan
          </button>
        </div>
      </form>
    </div>

    <OthersPanel slot="others" />
  </TabsPanel>
</section>
