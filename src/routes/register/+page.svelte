<script>
  import Input from "$components/Input.svelte";
  import Button from "$components/Button.svelte";

  let name = "";
  let email = "";
  let password = "";
  let confirmPassword = "";

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Konfirmasi password tidak cocok!");
      return;
    }
    alert(`Pendaftaran berhasil untuk ${name}`);
  };
</script>

<main
  class="min-h-screen bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 flex items-center justify-center px-4 font-sans"
>
  <div
    class="w-full max-w-5xl grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr] bg-white rounded-xl shadow-2xl overflow-hidden"
  >
    <div
      class="relative bg-emerald-600 text-white flex items-center justify-center p-10 overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent pointer-events-none rotate-12"
      ></div>

      <div class="relative z-10 space-y-5 max-w-sm text-center">
        <h2 class="text-4xl md:text-5xl font-bold leading-tight">
          Selamat Datang!
        </h2>
        <p class="text-sm md:text-base text-emerald-100 leading-relaxed">
          Buat akun Anda dan mulai kelola alih media retensi arsip rumah sakit
          dengan mudah, cepat, dan aman.
        </p>
        <div class="flex justify-center gap-2 pt-2">
          <div class="w-4 h-4 bg-white opacity-20 rotate-45"></div>
          <div class="w-3 h-3 bg-white opacity-30 rotate-45"></div>
          <div class="w-2 h-2 bg-white opacity-40 rotate-45"></div>
        </div>
      </div>
    </div>

    <div class="p-10 md:p-14 flex flex-col justify-center bg-white">
      <div class="w-full max-w-md mx-auto space-y-6">
        <div>
          <h1 class="text-3xl font-bold text-emerald-600">RS Widodo Ngawi</h1>
          <h2 class="text-2xl font-bold mt-2">Buat Akun</h2>
          <p class="text-sm text-gray-500 mt-1">
            Silakan isi data berikut untuk mendaftar
          </p>
        </div>

        <form
          on:submit|preventDefault={handleRegister}
          class="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <Input
            id="name"
            type="text"
            bind:value={name}
            label="Nama Lengkap"
            placeholder="Naufal Zaul Karim"
          />

          <Input
            id="email"
            type="email"
            bind:value={email}
            label="Email"
            placeholder="you@example.com"
          />

          <Input
            id="password"
            type="password"
            bind:value={password}
            label="Password"
            placeholder="********"
          />

          <Input
            id="confirmPassword"
            type="password"
            bind:value={confirmPassword}
            label="Konfirmasi Password"
            placeholder="********"
          />

          <div class="col-span-2">
            <Button
              type="submit"
              class="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Daftar
            </Button>
          </div>
        </form>

        <div class="text-center text-sm text-gray-600">
          <span>Sudah punya akun?</span>
          <a href="/login" class="text-emerald-600 hover:underline ml-1">
            Masuk
          </a>
        </div>
      </div>
    </div>
  </div>
</main>
