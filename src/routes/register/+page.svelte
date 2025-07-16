<script>
  import "$src/app.css";
  import { createForm } from "felte";
  import { validator } from "@felte/validator-zod";
  import { z } from "zod";
  import { enhance } from "$app/forms";
  import Input from "$components/Input.svelte";
  import Button from "$components/Button.svelte";
  import { onMount } from "svelte";

  import { observeVisible } from "$lib/utils/fadeDownAnimate.js";

  const schema = z
    .object({
      fullName: z.string().min(1, "Nama wajib diisi"),
      username: z.string().min(1, "Username wajib diisi"),
      email: z.string().email("Email tidak valid"),
      password: z.string().min(6, "Password minimal 6 karakter"),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Password tidak sama",
    });

  const { form, errors, isSubmitting } = createForm({
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
    class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-[1fr_1fr] bg-white rounded-xl shadow-2xl overflow-hidden z-10"
  >
    <div class="p-10 md:p-14 flex flex-col justify-between bg-gray-50">
      <div class="flex items-center gap-3 mb-6">
        <img
          src="/logo.jpg"
          alt="Logo RS Widodo Ngawi"
          class="w-8 h-8 rounded"
        />
        <span class="font-semibold text-emerald-700">RS Widodo Ngawi</span>
      </div>

      <div class="w-full max-w-5xl mx-auto space-y-5">
        <div class="space-y-2">
          <h2 class="text-2xl font-bold uppercase text-gray-700">Registrasi</h2>
          <p class="text-gray-500 tracking-wide">
            Daftar untuk mulai menggunakan sistem alih media & retensi arsip.
          </p>
        </div>

        <form use:form use:enhance class="space-y-6">
          <Input
            id="fullname"
            name="fullName"
            label="Nama Lengkap"
            placeholder="Nama lengkap"
            className={$errors.fullName ? "border-red-500" : ""}
          />

          {#if $errors.fullName}
            <p class="text-sm text-red-500">{$errors.fullName}</p>
          {/if}

          <div class="grid md:grid-cols-2 gap-4">
            <Input
              id="username"
              name="username"
              label="Username"
              placeholder="Username"
              className={$errors.username ? "border-red-500" : ""}
            />
            <Input
              id="email"
              name="email"
              label="Email"
              placeholder="Email aktif"
              type="email"
              className={$errors.email ? "border-red-500" : ""}
            />
            {#if $errors.username}
              <p class="text-sm text-red-500">{$errors.username}</p>
            {/if}

            {#if $errors.email}
              <p class="text-sm text-red-500">{$errors.email}</p>
            {/if}
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <Input
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="********"
              className={$errors.password ? "border-red-500" : ""}
            />
            <Input
              id="confirmPassword"
              name="confirmPassword"
              label="Konfirmasi Password"
              type="password"
              placeholder="********"
              className={$errors.confirmPassword ? "border-red-500" : ""}
            />
            {#if $errors.password}
              <p class="text-sm text-red-500">{$errors.password}</p>
            {/if}

            {#if $errors.confirmPassword}
              <p class="text-sm text-red-500">{$errors.confirmPassword}</p>
            {/if}
          </div>

          <Button type="submit" variant="emerald" full disabled={$isSubmitting}>
            Daftar
          </Button>
        </form>

        <div class="text-center text-sm text-gray-600">
          <span>Sudah punya akun?</span>
          <a
            href="/login"
            class="text-emerald-600 font-medium hover:underline ml-1"
          >
            Kembali ke login
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
