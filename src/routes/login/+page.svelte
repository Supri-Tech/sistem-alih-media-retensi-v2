<script>
  import "$src/app.css";
  import { createForm } from "felte";
  import { validator } from "@felte/validator-zod";
  import { z } from "zod";
  import { enhance } from "$app/forms";
  import Input from "$components/Input.svelte";
  import Button from "$components/Button.svelte";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import { observeVisible } from "$lib/utils/fadeDownAnimate.js";

  const schema = z.object({
    username: z.string().min(1, "Username wajib diisi"),
    password: z.string().min(1, "Password wajib diisi"),
  });

  const { form, isSubmitting, errors } = createForm({
    extend: validator({ schema }),
  });

  let visible = false;
  let el;

  onMount(() => {
    observeVisible(el, () => {
      visible = true;
    });
  });
</script>

<main
  class="relative z-10 min-h-screen flex items-center justify-center px-4 tracking-wider bg-gray-50"
>
  <div class="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    <svg
      class="absolute right-0 top-0 h-full w-full opacity-40"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 600"
      preserveAspectRatio="none"
    >
      <path
        d="M0,160 C150,280 450,40 600,160 L600,600 L0,600 Z"
        fill="#ecfdf5"
      />
      <path
        d="M0,220 C200,340 400,100 600,220 L600,600 L0,600 Z"
        fill="#a7f3d0"
      />
      <path
        d="M0,280 C180,400 420,160 600,280 L600,600 L0,600 Z"
        fill="#6ee7b7"
      />
    </svg>
  </div>

  <div
    class="w-full max-w-5xl grid grid-cols-1 md:grid-cols-[1fr_1.3fr] bg-white rounded-xl shadow-2xl overflow-hidden z-10"
  >
    <div class="p-10 md:p-14 flex flex-col justify-between bg-gray-50">
      <div class="flex items-center gap-3">
        <img
          src="/logo.jpg"
          alt="Logo RS Widodo Ngawi"
          class="w-8 h-8 rounded"
        />
        <span class=" font-semibold text-emerald-700"> RS Widodo Ngawi </span>
      </div>
      <div class="w-full max-w-md mx-auto space-y-8">
        <div class="space-y-3">
          <h2 class="text-2xl font-bold uppercase text-gray-700">Login</h2>
          <p class="text-gray-500 tracking-wide">
            Masuk untuk mengakses sistem alih retensi arsip
          </p>
        </div>

        <form use:form use:enhance class="space-y-4" method="post">
          <Input
            id="username"
            name="username"
            label="Username"
            placeholder="Masukkan username"
            className={$errors.username ? "border-red-500" : ""}
          />
          {#if $errors.username}
            <p class="text-sm text-red-500">{$errors.username}</p>
          {/if}

          <Input
            id="password"
            name="password"
            type="password"
            label="Password"
            placeholder="********"
            className={$errors.password ? "border-red-500" : ""}
          />
          {#if $errors.password}
            <p class="text-sm text-red-500">{$errors.password}</p>
          {/if}

          <div class="text-right text-sm">
            <a href="#" class="text-gray-600 hover:underline">Lupa password?</a>
          </div>

          <Button type="submit" variant="emerald" full disabled={$isSubmitting}>
            Login
          </Button>
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
      class="relative overflow-hidden rounded-e-xl text-white flex flex-col justify-between min-h-[600px] w-full md:w-auto"
    >
      <img
        src="/elen-sher-0dF7UzD2Yd8-unsplash.jpg"
        alt="Hospital Building"
        class="absolute inset-0 w-full h-full object-cover object-[right_bottom] opacity-90 z-0 brightness-50"
      />

      <svg
        class="absolute inset-y-0 left-0 h-full w-[100px] z-10"
        viewBox="0 0 200 600"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M200,0 C20,200 20,400 200,600 L0,600 L0,0 Z" fill="#f9fafb" />
      </svg>

      <div
        bind:this={el}
        class="relative z-20 h-full px-10 py-10 flex flex-col justify-between text-center ml-14
         transition-all duration-1000 ease-out
         transform
         opacity-0 translate-y-8"
        class:opacity-100={visible}
        class:translate-y-0={visible}
        class:pointer-events-none={!visible}
      >
        <div class="flex-1 flex flex-col justify-center space-y-5">
          <h2 class="text-3xl md:text-4xl font-semibold leading-tight">
            Transformasi Arsip Menuju Era Digital
          </h2>
          <p class="text-white/90 font-light leading-relaxed">
            <span class="font-medium text-white italic"
              >Sistem Alih Media & Retensi RS Widodo Ngawi</span
            >
            menghadirkan solusi digitalisasi arsip rekam medis yang cepat, aman,
            dan efisien — mendukung pelayanan kesehatan yang lebih terstruktur dan
            modern.
          </p>
        </div>

        <div class="text-sm text-white/90 mt-6 leading-relaxed">
          Jl. Yos Sudarso No.8, Winong, Margomulyo<br />
          Kec. Ngawi, Kabupaten Ngawi, Jawa Timur 63217
        </div>
      </div>
    </div>
  </div>
</main>
