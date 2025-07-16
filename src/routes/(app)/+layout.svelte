
<script>
  import "$src/app.css";
  import Sidebar from "$components/Sidebar.svelte";

  /** @type {import('./$types').LayoutServerLoad} */
  export function load({ locals, url }) {
    if (!locals.user) {
      throw new Response("Unauthorized", {
        status: 302,
        headers: { location: "/login?redirect=" + url.pathname },
      });
    }

    return {
      user: locals.user,
    };
  }
</script>

<main class="min-h-screen bg-gray-50 text-gray-800 tracking-wider">
  <Sidebar>
    <main class="flex-1 overflow-y-auto bg-white p-6 space-y-6">
      <slot />
    </main>
  </Sidebar>
</main>
