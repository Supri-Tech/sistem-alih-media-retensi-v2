<script>
  import { createDropdownMenu, melt } from "@melt-ui/svelte";
  import Icon from "@iconify/svelte";
  import Button from "$lib/components/Button.svelte";

  const {
    elements: { trigger, menu },
  } = createDropdownMenu();

  const user = {
    name: "Kristin Watson",
    username: "@kristinwatson",
    role: "Administrator",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  };
</script>

<div class="relative flex justify-end px-3 py-1.5 bg-white shadow">
  <button
    use:melt={$trigger}
    class="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition"
  >
    <img
      src={user.avatar}
      alt="avatar"
      class="w-9 h-9 rounded-full border border-gray-300 object-cover"
    />
    <div class="text-left hidden sm:block">
      <div class="text-sm font-semibold text-gray-800">{user.name}</div>
      <div class="text-xs text-gray-500">{user.role}</div>
    </div>
    <Icon icon="mdi:chevron-down" class="text-gray-500 text-lg" />
  </button>

  <div
    use:melt={$menu}
    class="absolute top-[60px] right-0 w-72 rounded-xl shadow-2xl z-50 p-4
           bg-gradient-to-br from-white via-pink-50 to-rose-100
           border border-rose-200 ring-1 ring-rose-300"
  >
    <div
      class="absolute top-0 right-0 opacity-10 text-7xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"
    >
      <Icon icon="mdi:flower-outline" />
    </div>

    <div class="flex items-start justify-between mb-2 relative z-10">
      <h3 class="text-sm font-semibold text-rose-600">👤 Profile</h3>
      <Icon
        icon="mdi:pencil-outline"
        class="text-gray-400 hover:text-rose-600 cursor-pointer transition"
      />
    </div>

    <div class="flex justify-center relative z-10">
      <div
        class="w-20 h-20 rounded-full border-4 border-rose-400 p-1 bg-white relative shadow-md"
      >
        <img
          src={user.avatar}
          alt="user"
          class="w-full h-full rounded-full object-cover"
        />
        <span
          class="absolute bottom-0 right-0 w-5 h-5 bg-black text-white text-xs flex items-center justify-center rounded-full"
        >
          ★
        </span>
      </div>
    </div>

    <div class="mt-3 text-center z-10 relative">
      <div class="font-semibold text-gray-800">{user.name}</div>
      <div class="text-sm text-gray-500">{user.role}</div>
      <div class="text-xs text-gray-400">{user.username}</div>
    </div>

    <div class="mt-5 flex justify-center z-10 relative">
      <Button variant="danger" class="w-full">Logout</Button>
    </div>
  </div>
</div>
