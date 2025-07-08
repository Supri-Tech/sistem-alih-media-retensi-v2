<script>
  import Input from "$components/Input.svelte";
  import Button from "$components/Button.svelte";

  let username = "";
  let password = "";

  const handleLogin = () => {
    if (username === "administrator" && password === "123456") {
      alert("Login berhasil!");
    } else {
      alert("Login gagal.");
    }
  };
</script>

<main
  class="min-h-screen bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 flex items-center justify-center px-4 font-sans"
>
  <div
    class="w-full max-w-5xl grid grid-cols-1 md:grid-cols-[1fr_1.3fr] bg-white rounded-xl shadow-2xl overflow-hidden"
  >
    <div class="p-10 md:p-14 flex flex-col justify-center bg-white">
      <div class="w-full max-w-md mx-auto space-y-6">
        <div>
          <h1 class="text-3xl font-bold text-emerald-600">RS Widodo Ngawi</h1>
          <h2 class="text-2xl font-bold mt-2">Login</h2>
          <p class="text-sm text-gray-500 mt-1">
            Masuk untuk mengakses sistem alih retensi arsip
          </p>
        </div>

        <form
          on:submit|preventDefault={handleLogin}
          class="space-y-4 w-full max-w-md mx-auto"
        >
          <Input
            id="username"
            type="text"
            bind:value={username}
            label="Username"
            placeholder="administrator"
          />

          <Input
            id="password"
            type="password"
            bind:value={password}
            label="Password"
            placeholder="********"
          />

          <div class="text-right text-sm">
            <a href="#" class="text-emerald-600 hover:underline"
              >Lupa password?</a
            >
          </div>

          <Button variant="emerald">Logout</Button>
        </form>

        <div class="text-center text-sm text-gray-600 mt-6">
          <span>Belum punya akun?</span>
          <a
            href="/register"
            class="text-emerald-600 font-medium hover:underline ml-1"
          >
            Daftar di sini
          </a>
        </div>
      </div>
    </div>

    <div
      class="relative bg-emerald-600 text-white flex items-center justify-center p-10 overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent pointer-events-none rotate-12"
      ></div>

      <div class="relative z-10 space-y-4 max-w-sm text-center">
        <h2 class="text-4xl md:text-5xl font-bold leading-tight">
          Sistem Alih Media Retensi
        </h2>
        <p class="text-emerald-100 leading-relaxed">
          Mengelola arsip lama secara digital, cepat, dan aman — mendukung
          efisiensi kerja di RS Widodo Ngawi.
        </p>
        <div class="flex justify-center gap-2 pt-2">
          <div class="w-4 h-4 bg-white opacity-20 rotate-45"></div>
          <div class="w-3 h-3 bg-white opacity-30 rotate-45"></div>
          <div class="w-2 h-2 bg-white opacity-40 rotate-45"></div>
        </div>
      </div>
    </div>
  </div>
</main>
